let cardcontiner = document.querySelector(".notes-continer")


const language ={
    notes:[
        {
            url:"https://drive.google.com/file/d/10dKK8BE_BzJDATGKp_wkkNtlhblBXaBC/view?usp=drive_link",
            name:"java",
            imgurl:"../images/javalogonoties.png"

        },
        {
            url:"https://drive.google.com/file/d/11EfebczebyMbKmeezgQrfQsbCryHGKdx/view?usp=drive_link",
            name:"c",
            imgurl:"../images/clogo.png"
        },
        {
            url:"https://drive.google.com/file/d/1-mNjSAZspxR-Kxkgg1nf97w39zmCs5oj/view?usp=drivesdk",
            name:"java",
            imgurl:"../images/javalogonoties.png"

        },
        {
            url:"https://drive.google.com/file/d/115Z4ldRQYom9kVW4ZxiDQgQ2_OOciRjs/view?usp=drive_link",
            name:"c++",
            imgurl:"../images/c++ logo.png"

        }

        
    ]
}


const cardload =()=>{
       let notes = language.notes
       notes.forEach((note)=>{
        cardcontiner.innerHTML+= `
                <div class="fist-notes">
                    <h3 class="lang-name">${note.name}</h3>
                    <img src="${note.imgurl}" alt="">
                     <a href="${note.url}"><button class="btn">view notes</button></a>

                </div>`
       })


}



cardload()