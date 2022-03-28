let  sections = document.getElementById("clickable")


sections.addEventListener("click",function changeMe(){
    sections.innerHTML = `<iframe src="chromeE\\index.html" frameborder="0" width="100%"height="190px"></iframe>`
    // setInterval(function () {
    //     sections.innerHTML = `<img  src="img/extension.png" alt="porject-image" >`
    // },7000)    
      
});

addEventListener("scroll",function () {
    sections.innerHTML = `<img  src="img/extension.png" alt="porject-image" >`
    console.log("sfgsdfgsdf")
})

