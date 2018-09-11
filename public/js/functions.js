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
//console.log(`Good ${timeOfDay()}!`);
document.body.style.background = "#fff url(" + timeOfDay() + ")";