
const Bcs ={
     sem1:[],
     sem2:[],
     sem3:[],
     sem4:[],
     sem5:[],
     sem6:[],
     allSemister:[{
        url:""
    }]
}

const Bca =[{
    sem1:[],
    sem2:[],
    sem3:[],
    sem4:[],
    sem5:[],
    sem6:[],
    allSemister:[{
       url:""
   }]
}]


const loadFySem1 =()=>{
    let sem1box = document.querySelector("#sem1")
      let papers = Bcs.sem1
       if(papers.length==0){
           sem1box.innerHTML=`<h3>collecting data..</h3>`
       }else{
         
           papers.forEach((paper,index)=>{
              sem1box.innerHTML+=`<div class="iteam">
                       <div class="iteam-img">
                          <img src="../images/questionpaper.png" alt="">
                       </div>
                       <a href="${paper}" download class="downlaodBtn" target="_blank">view</a>
                   </div>`
           })

       }
        
}

loadFySem1()