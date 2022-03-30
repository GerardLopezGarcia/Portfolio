var elements = document.getElementById('imagenes');
var positionInfos = elements.getBoundingClientRect();
var heights = positionInfos.height;
var widths = positionInfos.width;
console.log(heights,widths)
let  sections = document.getElementById("clickable")


sections.addEventListener("click", function changeMe (){
    sections.innerHTML =`<iframe src="chromeE\\index.html" frameborder="0" width="${heights}"height="${heights}"></iframe>`
    // setInterval(function () {
    //     sections.innerHTML = `<img  src="img/extension.png" alt="porject-image" >`
    // },7000) 
})

addEventListener("scroll",function () {
    sections.innerHTML = `<img  src="img/extension.png" alt="porject-image" >`
    console.log("sfgsdfgsdf")
})

// let api = document.getElementById("ClickMe")
// console.log(api)
// api.addEventListener("click",function (){
//     api.innerHTML = `<iframe src="Weather_Api\\index_weatherAPI.html" frameborder="0"></iframe>`
//     console.log("api")
// })
//INTENT DE FERHO RE-USABLE ---------------------------------------------------------------
// function changeMe(object,url) {
//     object.innerHTML = `<iframe src=${url}></iframe>`
//     console.log(object,url)
// }