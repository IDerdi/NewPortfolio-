let navLink=document.querySelector("#nav-link");
let dropDown=document.querySelector(".dropdown1")
let main=document.querySelector("main")

navLink.addEventListener("click" , function() {
    
   if (navLink.className=="") {
    navLink.classList.add("is-active");
    dropDown.style.display="flex"
    dropDown.style.opacity="1"
    dropDown.style.visibility="visible"
    dropDown.style.transition = " 1.5s"
    dropDown.style.height = " 380px"
    main.style.zIndex = "-1"
    

   }else{
       navLink.classList.remove("is-active")
       dropDown.style.opacity="0"
       dropDown.style.height = " 0px" 
       main.style.zIndex = "0"
       main.style.transition = " 1.5s"
   }
})