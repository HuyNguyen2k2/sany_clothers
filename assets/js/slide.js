const slide=document.querySelector('.header__slider-item');  //trả về 1 biến 



const wrapSlide=document.querySelector('.header__slider');

const btnNext=document.querySelector('.header__slider-control-right');
const btnPre=document.querySelector('.header__slider-control-left');

btnNext.addEventListener('click', function(e){
    const list=document.querySelectorAll('.header__slider-item');
    //list[0,1,2]
    wrapSlide.append(list[0]);
})

btnPre.addEventListener('click', function(e){
    const list=document.querySelectorAll('.header__slider-item');
    //list[0,1,2]
    wrapSlide.prepend(list[list.length-1]);
})