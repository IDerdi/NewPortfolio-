let navLink=document.querySelector("#nav-link");
let dropDown=document.querySelector(".dropdown1")
let main=document.querySelector("main")

let circularProgress=document.querySelector(".circular-progresss"),
    progressValue=document.querySelector(".progress-value");

let progressStartValue=0,
    progressEndValue=90,
    speed= 100;
    bgColor=94e044

let progress = setInterval(()=>{
    progressStartValue++;
    
    progressValue.innerHTML=`${progressStartValue}%`
    circularProgress.style.background=`conic-gradient(#94e044 ${progressStartValue * 3.6 }deg , #ededed 0deg)`

    if(progressStartValue == progressEndValue ){
        clearInterval(progress)
    }

}, speed)


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