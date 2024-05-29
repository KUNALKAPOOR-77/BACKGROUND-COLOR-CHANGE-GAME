let btns= document.querySelectorAll("button")
let para= document.querySelector("p")
let section=document.querySelector("section")

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        section.style.backgroundColor=btn.innerText
    })
    btn.addEventListener("mouseover",()=>{
        para.innerText= `click the button to get ${btn.innerText} color`
        btn.style.border=   `2px solid ${btn.innerText} `
        para.style.color=   `${btn.innerText}`
        para.style.transform="rotate3d(1,0,0,360)"
        para.style.transition= "3s"

    })
    btn.addEventListener("mouseout",()=>{
        para.innerText="change the background colour"                                  
        btn.style.border=   `2px solid white`
        para.style.transform="rotate3d(1,0,0,-360deg)"
    })
})