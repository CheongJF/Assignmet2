let line1 =document.querySelector('.line-1')
window.onscroll = () =>{
    let pos = window.scrollY;
    line1.style.left = `${pos}px`
}