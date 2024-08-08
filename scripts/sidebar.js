
let sideBar = document.querySelector("#left")
let userInfo = JSON.parse(localStorage.getItem('user'))

const addSideBar = () =>{

  sideBar.innerHTML=`<div id="info">
                <span class="name">Hey ${userInfo.user.name}...</span>
            </div>
            <div id="options">
                <!--add sidebar options-->
                <ul>
                    <li><a href="#">Books <i class="ri-git-repository-fill"></i></a></li>
                    <li><a href="#">Notes <i class="ri-booklet-fill"></i></a></li>
                    <li><a href="#">Video <i class="ri-video-fill"></i></a></li>
                    <li><a href="#">Papers <i class="ri-article-fill"></i></a></li>
                    <li><a href="#">Coding Notes <i class="ri-terminal-box-fill"></i></a></li>
                    <li><a href="#">Say Thanks <i class="ri-chat-heart-fill"></i></a></li>
                </ul>
            </div>
          <span class="logout">Log out <i class="ri-logout-box-r-line"></i></span>
        </div>`

}


const logout=()=>{
document.querySelector(".logout").addEventListener("click",()=>{
     localStorage.removeItem('user')
     window.location.assign("../index.html")
})
}

//check user is avaliale or not if not show error..

if(!userInfo){
  notification('FUCK YOU LOGIN FIRST....',10000)
}else{
    addSideBar()
    logout()
}




// send notification...
function notification(message, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = message
    setTimeout(function () {
        notification.style.display = "none"
    }, time)
}
