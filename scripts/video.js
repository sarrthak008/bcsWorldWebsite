
let videos=[
    {
      url:'https://drive.google.com/file/d/1-5jaK-bKdwALGrtJtqCQQn3DrO3O9ewO/view?usp=drivesdk',
      tittle:'Opearating System',
      info:'learn more about opearating system',
      imgSrc:'opearating-stystem.png'
    },

    {
        url:'https://drive.google.com/file/d/1-9qhKoRzvoFLhTRq8auE9bvXTWs7UafD/view?usp=drivesdk',
        tittle:'Wordpress website development',
        info:'learn more about Wordpress',
        imgSrc:'word-press.png'
      },

      {
        url:'https://drive.google.com/file/d/1-J3yWglKzEYQSq7up2ztg-6deRopd3nR/view?usp=drivesdk',
        tittle:'website development project',
        info:'learn more about webdevelopment',
        imgSrc:'web-development.png'
      },

      {
        url:'https://drive.google.com/file/d/1-KXbdLH-4z3LdqRLzSirAXcjd_WayIS-/view?usp=drivesdk',
        tittle:'computer network',
        info:'learn more about computer network',
        imgSrc:'computer-network.png'
      },
    
  ]

  let vidContainer = document.querySelector("#vid-conteiner")

  const loadVideos =()=>{

    videos.forEach((video,index)=>{
       //console.log(booklink)
        vidContainer.innerHTML += `<div class="vid-box">
                       <div class="img-div">
                        <img src="../images/${video.imgSrc}" alt="">
                       </div>
                       <p>${video.info}</p>
                       <a href="${video.url}" class="btn" target='__blank'>download</a>
                  </div>`
    })
}

loadVideos()
  