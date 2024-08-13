let container= document.querySelector("#book-container")

let bcsBooksLink =[
      {
        url:"https://www.google.com/"
      },
      {
        url:""
      },
      {
        url:"https://drive.google.com/drive/folders/11rm61G3RLnchYQUZZWNzuCHZ_hQXSlU_"
      },
      {
        url:""
      },
      {
        url:""
      },
      {
        url:""
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