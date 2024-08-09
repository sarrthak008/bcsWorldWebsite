
const Bcs ={
     papers:[
        {
            url:"https://drive.google.com/file/d/1-Uf_VphA-ExrZ1Ub-gq63k-MaP4xOnWx/view?usp=drivesdk",
            info:"FY to TY  all papers"
        },
        {
            url:"https://drive.google.com/file/d/12W1obfjglQXnhy7nGBhBnKs9gvd5fFtQ/view?usp=drivesdk",
            info:"DS I paper solution"
        }


     ]
}

const Bca ={
    papers:[
        {
            url:"https://drive.google.com/file/d/1-mNjSAZspxR-Kxkgg1nf97w39zmCs5oj/view?usp=drivesdk",
            info:"FY to TY all papers"
        }
    ]
}


const LoadBcsPapers =()=>{

    let sem1box = document.querySelector("#bcs")
      let papers = Bcs.papers
       if(papers.length==0){
           sem1box.innerHTML=`<h3>collecting data..</h3>`
       }else{
         
           papers.forEach((paper,index)=>{
            //console.log(paper)
              sem1box.innerHTML+=`<div class="iteam">
                       <div class="iteam-img">
                          <img src="../images/questionpaper.png" alt="" onclick="notify('${paper.info}')">
                       </div>
                       <p>${paper.info}</p>
                       <a href="${paper.url}" download class="downlaodBtn" target="_blank">view</a>
                   </div>`
           })

       }     
}



const LoadBcaPapers =()=>{

    let sem1box = document.querySelector("#bca")
      let papers = Bca.papers
     // console.log(papers)
       if(papers.length==0){
           sem1box.innerHTML=`<h3>collecting data..</h3>`
       }else{
         
           papers.forEach((paper,index)=>{
            //console.log(paper)
              sem1box.innerHTML+=`<div class="iteam">
                       <div class="iteam-img">
                          <img src="../images/questionpaper.png" alt="" onclick="notify('${paper.info}')">
                       </div>
                       <p>${paper.info}</p>
                       <a href="${paper.url}" download class="downlaodBtn" target="_blank">view</a>
                   </div>`
           })

       }     
}


if(!userInfo){
    notification('FUCK YOU LOGIN FIRST....',10000)
  }else{
    LoadBcsPapers()
    LoadBcaPapers()
  }
  

const notify =(meaage)=>{
  notification(meaage,1500)
}



function notification(message, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = message
    setTimeout(function () {
        notification.style.display = "none"
    }, time)
}
