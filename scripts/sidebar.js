
let sideBar = document.querySelector("#left")
let userInfo = JSON.parse(localStorage.getItem('user'))

let totalUsers = 1

fetch(`https://bcs-world-6aen.vercel.app/all`).then((res)=>{
    return res.json()
}).then((resu)=>{
    
   totalUsers= resu
  document.querySelector('.github').innerHTML=`<i class="ri-heart-pulse-fill"></i> ${totalUsers}`
})

const addSideBar = () =>{

  sideBar.innerHTML=`<div id="info">
                <span class="name">Hey ${userInfo.user.name}...</span>
            </div>
            <div id="options">
                <!--add sidebar options-->
                <ul>
                    <li><a href="books.html">Books <i class="ri-git-repository-fill"></i></a></li>
                    <li><a href="notes.html">Notes <i class="ri-booklet-fill"></i></a></li>
                    <li><a href="videos.html">Video <i class="ri-video-fill"></i></a></li>
                    <li><a href="papers.html">Papers <i class="ri-article-fill"></i></a></li>
                    <li><a href="codingNotes.html">Coding Notes <i class="ri-terminal-box-fill"></i></a></li>
                    <li><a href="thanks.html">Say Thanks <i class="ri-chat-heart-fill"></i></a></li>
                </ul>
            </div>
           <span class="logout">Log out <i class="ri-logout-box-r-line"></i></span>
           <span class="close" id="close"><i class="ri-close-fill"></i></span>
        </div>`

}


const logout=()=>{
document.querySelector(".logout").addEventListener("click",()=>{
     localStorage.removeItem('user')
     localStorage.removeItem('date')
     window.location.assign("../index.html")
})
}

fetch(`https://bcsworld.onrender.com/all`).then((res)=>{
    return res.json()
}).then((resu)=>{
   totalUsers= resu
   console.log(totalUsers)
})



//check user is avaliale or not if not show error..

if(!userInfo){
  notification('FUCK YOU LOGIN FIRST....',10000)
}else{
    addSideBar()
    logout()
}




const openCloseSideBar = () =>{
    let openBtn = document.querySelector(".menu")
     openBtn.addEventListener("click",()=>{
        sideBar.style.left=`${0}px`;
     })

     let closeBtn =  document.querySelector("#close").addEventListener("click",()=>{
        sideBar.style.left=`${-100}%`
     })
  
}


openCloseSideBar()




// send notification...
function notification(message, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = message
    setTimeout(function () {
        notification.style.display = "none"
    }, time)
}
