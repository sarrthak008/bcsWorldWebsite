
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
    let loginResult
   await  fetch(`https://bcsworld.onrender.com/login?password=${password}&mobilenumber=${mobileNumber}`).then((responce)=>{
         return responce.json()
    }).then((result)=>{
          if(result.message === "not find"){
            notification("not found your account..",2000)
          }else{
            notification(`hey ${result.user.name} welcome back...`,2000)
            localStorage.setItem('user',JSON.stringify(result))
          }
     
    }).catch((error)=>{
        console.log(error)
    })
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