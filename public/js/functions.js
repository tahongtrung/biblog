function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
  }
/* scroll button */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
    } else {
            document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow');
}


let bgImgs = [
    'https://i.imgur.com/0D0axLJ.jpg',
    'https://i.imgur.com/Ql3fNYJ.png',
    'https://i.imgur.com/GGH0L44.png',
    'https://i.imgur.com/pKBw43R.png',
    'https://i.imgur.com/h4k46HM.png',
    'https://i.imgur.com/A1QPlWy.png',
    'https://i.imgur.com/lVDs2eF.png',
    'https://i.imgur.com/xwvDSTC.png',
];
function timeOfDay() {
    let hour = new Date().getHours();
    if (hour >= 4 && hour <= 11){
        //return 'morning';
        return bgImgs[0];
    }
    if (hour >= 12 && hour <= 16) {
        //return 'afternoon';
        return bgImgs[1];
    }
    if (hour >= 17 && hour <= 20) {
        //return 'evening';
        return bgImgs[2];
    }
    if (hour >= 21 || hour <= 3) {
        //return 'night';
        return bgImgs[3];
    }
}
const item = bgImgs[Math.floor(Math.random()*bgImgs.length)];
//console.log(`Good ${timeOfDay()}!`);
//document.body.style.background = "#fff url(" + timeOfDay() + ")";
//document.body.style.background = "#fff url(" + item + ")";