let  sections = document.getElementById("clickable")
let  out = document.getElementById("body")

sections.addEventListener("click",function changeMe(){
    sections.innerHTML = `<iframe src="chromeE\\index.html" frameborder="0" width="100%"height="500em"></iframe>`
    // setInterval(function () {
    //     sections.innerHTML = `<img  src="img/extension.png" alt="porject-image" >`
    // },7000)    
      
});

out.addEventListener("mouseout",function () {
    sections.innerHTML = `<img  src="img/extension.png" alt="porject-image" >`
    console.log("sfgsdfgsdf")
})

