var elements = document.getElementById('imagenes');
var positionInfos = elements.getBoundingClientRect();
var heights = positionInfos.height;
var widths = positionInfos.width;
console.log(heights,widths)
let  sections = document.getElementById("clickable")
let map = document.getElementById("mapper")

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


// animations 

// avoid dragging img & texts
$('img,h4,h1,h6,p,h3').on('dragstart', function(event) { event.preventDefault(); });

//animations

const web_init = gsap.timeline({default:{ease:'powe4.inOut'}})

web_init.from('#logo',{scaleY:0,ease:Bounce.easeOut,duration:.5}).from('.anim_1',{y:35,opacity:0,stagger:0.2}).from('#header_img, #img_back',{x:35,opacity:0,}).from('.btn',{scale:0,ease:Elastic.easeOut,duration:1})

gsap.to('#img_back',{  rotate:'360deg',transformStyle: 'preserve-3d', repeat:-1, duration:6})

//section 1
const tl_1 = gsap.timeline({
    scrollTrigger:{
        trigger:'#box',
        toggleActions:'play play none none',
        markers:false,
        start:'60 center',
        end:'100% center'
    }, stagger:0.6
});

tl_1.from('.pizza',{y:35,opacity:0,stagger:0.2}).from('.pizza_title',{y:35,opacity:0,stagger:0.1}).from('.pizza_text',{y:35,opacity:0,stagger:0})

//section 2
const tl_2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#box',
        toggleActions:'play play none none',
        markers:false,
        start:'bottom center',
        end:'100% center'
    }, stagger:0.6
});

tl_2.from('.anim_3',{y:35,opacity:0,stagger:0.2}).from('#img_s2, #img_s2_back',{x:35,opacity:0,stagger:0.6}).from('.btn2',{scale:0,ease:Elastic.easeOut,duration:1})

//section 3
const tl_3 = gsap.timeline({
    scrollTrigger:{
        trigger:'#img_s2',
        toggleActions:'play play none none',
        markers:false,
        start:'80% center',
        end:'100% center'
    }, stagger:0.6
});

tl_3.from('#img_s3, #img_s3_back',{x:35,opacity:0,stagger:0.6}).from('.anim_4',{x:-35,opacity:0,stagger:0.2})

gsap.to('#img_s2_back',{  rotate:'360deg',transformStyle: 'preserve-3d', repeat:-1, duration:5})

//section 4(footer)

const tl_4 = gsap.timeline({
    scrollTrigger:{
        trigger:'#img_s3',
        toggleActions:'play play none none',
        markers:false,
        start:'top center',
        end:'100% center'
    }, stagger:0.6
});

tl_4.from('.anim_5',{y:35,opacity:0,stagger:0.2}).from('.anim_6',{y:-35,opacity:0,stagger:0})

//events
$('#header_img, #img_back').hover(()=>{
    gsap.to('#header_img',{  rotateY:'35deg',transformStyle: 'preserve-3d',duration:0.2})
    $('#header_img').mouseout(()=>{gsap.to('#header_img',{  rotateY:0,transformStyle: 'preserve-3d'})})
});


$('.pizza').hover(function(e){
    var clicked = $(e.target)
    switch (clicked.attr('id')) {
        case 'pollo':
            clicked.addClass('animate__animated animate__flip')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__flip')}, 1000);
          
            break;
        case 'salmon':
            clicked.addClass('animate__animated animate__flip')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__flip')}, 1000);
          
            break;
        case 'cerdo':
            clicked.addClass('animate__animated animate__flip')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__flip')}, 1000);

            break;
        case 'tureceta':
            clicked.addClass('animate__animated animate__flip')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__flip')}, 1000);
            break;
    }
});
$('.animate_button').click(function(e){
    var clicked = $(e.target)
    switch (clicked.attr('id')) {
        case 'b1':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
            break;
        case 'b2':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
          
            break;
        case 'b3':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);

            break;
        case 'b4':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
            break;
        case 'b5':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
            break;
    }
});

$('.anim_4').click(function(e){
    var clicked = $(e.target)
    switch (clicked.attr('id')) {
        case 's3_1':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
            break;
        case 's3_2':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
          
            break;
        case 's3_3':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);

            break;
        case 's3_4':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
            break;
        case 's3_5':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
            break;
        case 's3_6':
            clicked.addClass('animate__animated animate__rubberBand')
            setTimeout(()=>{ clicked.removeClass('animate__animated animate__rubberBand')}, 700);
            break;
    }
});