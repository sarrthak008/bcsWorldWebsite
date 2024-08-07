
let signupButton =  document.querySelector("#btn")



signupButton.addEventListener("click",(e)=>{
e.preventDefault()
     let name = document.querySelector("#Name").value
     let mobileNumber = document.querySelector("#_userPhone").value
     let  email = document.querySelector("#_userEmail").value
     let password = document.querySelector("#_userPass").value
         if(mobileNumber.length ==10 && password.length >=6 && name && email){
             saveUser({name,mobileNumber,email,password})
         }else{
             notification("please check filed values",2000)
         }
   
})


const saveUser =(user)=>{
    let {name,mobileNumber,email,password} = user
         fetch(`https://bcsworld.onrender.com/signup?password=${password}&mobilenumber=${mobileNumber}&name=${name}&email=${email}`).then((respone)=>{
            return respone.text()
         }).then((result)=>{
              notification(result,2000)
              window.location.assign("../index.html")
         }).catch((err)=>{
            console.log(err)
            notification(err,3000)
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

//https://bcsworld.onrender.com/signup?password=1234&mobilenumber=8459360294&name=sarthak&email=sarthaknavale08%40gmail.com