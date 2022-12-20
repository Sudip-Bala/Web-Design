const header = document.queryselector("header");
window.addEventListener("scroll",function(){
header.classList.toggle("sticky","window.scrolly > 0");
});

