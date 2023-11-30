function closeCookies(){
    var container1 = document.getElementById('cookie');
    container1.style.zIndex = '0';
    container1.style.opacity = '0';
    container1.style.transition = '1s';
}

var btnClose1 = document.getElementById('btn1');
btnClose1.addEventListener('click', closeCookies);
var btnClose2 = document.getElementById('btn2');
btnClose2.addEventListener('click', closeCookies);