let slide = document.querySelectorAll(".slide");
let slides = document.querySelector(".slides");
let btnPrev = document.querySelector(".slider__btn-prev");
let btnNext = document.querySelector(".slider__btn-next");
let i=0;

function nextSlider(){
    slide[i].classList.remove("slide-active");
    i++;
    if(i>=slides.children.length){
        i=0;
        slide[i].classList.add("slide-active");
    }
    else{
        slide[i].classList.add("slide-active");
    }
}
function prevSlider(){
    slide[i].classList.remove("slide-active");
    i--;
    if(i<0){
        i= slides.children.length-1;
        slide[i].classList.add("slide-active");
    }
    else{
        slide[i].classList.add("slide-active");
    }
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);