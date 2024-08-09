
let loginButton = document.querySelector("#btn")
 loginButton.addEventListener("click",(e)=>e.preventDefault())


loginButton.addEventListener("click",()=>{
     let mobileNumber =  document.querySelector("#_userMobile").value
     let password = document.querySelector("#_userpass").value
        if(mobileNumber.length == 10 && password){
             checkUser(mobileNumber,password)
        }else{
            notification("please check details",2000)
        }
})


async function  checkUser(mobileNumber,password){
      notification("loding....",20000)
   await  fetch(`https://bcsworld.onrender.com/login?password=${password}&mobilenumber=${mobileNumber}`).then((responce)=>{
         return responce.json()
    }).then((result)=>{
          if(result.message === "not find"){
            notification("not found your account..",2000)
          }else{
            notification(`hey ${result.user.name} welcome back...`,2000)
            saveLoginTime()
            localStorage.setItem('user',JSON.stringify(result))
            window.location.assign("./pages/books.html")
          }
     
    }).catch((error)=>{
        console.log(error)
    })
}


const saveLoginTime =()=>{

let currentDate = new Date();
let date = currentDate.getDate()
   localStorage.setItem('date',date)
  
}

///notification function

function notification(message, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = message
    setTimeout(function () {
        notification.style.display = "none"
    }, time)
}

//https://bcsworld.onrender.com/login?password=sarthak680&mobilenumber=8459360294

let user = JSON.parse(localStorage.getItem('user'))
let storedate = parseInt(localStorage.getItem('date'))

const autologIn=()=>{

let currentDate = new Date().getDate()

 if(user){
  let  sessionTime = Math.abs(currentDate-storedate)
               if(sessionTime<=3){
                window.location.assign("./pages/books.html")
            }
 }

}

window.addEventListener('load',()=>{
    autologIn()

})