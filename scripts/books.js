let container= document.querySelector("#book-container")

let bcsBooksLink =[
      {
        url:"https://drive.google.com/drive/folders/1303g6eyI0rDmJRLwwBZiSWu_iUtvWEtX"
      },
      {
        url:"https://drive.google.com/drive/folders/13066u6ZioDa8EcS_vpAVrZsvUO6mQ7Sy"
      },
      {
        url:"https://drive.google.com/drive/folders/11rm61G3RLnchYQUZZWNzuCHZ_hQXSlU_"
      },
      {
        url:"https://drive.google.com/drive/folders/11GVzk7QZJgSkZ2mbvyDaRdoGCd4XZTZf"
      },
      {
        url:"https://drive.google.com/drive/folders/10gYfY2lRNWj0P9dyWcodNm3PLLSAvD4c"
      },
      {
        url:"https://drive.google.com/drive/folders/10LwkxBTDQ4J8u3DtrUMDeZn9j-FB52ji"
      }

]

const loadBook =()=>{
     bcsBooksLink.forEach((booklink,index)=>{
        //console.log(booklink)
         container.innerHTML +=`<div class="iteam">
                         <div class="img-div">
                            <img src="../images/book.png" alt="">
                         </div>
                         <a href="${booklink.url}" class="btn">semester ${index+1}</a>
                    </div>
         `
     })
}

loadBook()