const elements = document.querySelectorAll('.mypreimg');

elements.forEach(element => {
  element.addEventListener('click', event => {
     index = element.id -1;
  });
});

var myimage = document.getElementById("myimg");
myimage.style.transitionProperty = "margin-left";
myimage.style.transitionDuration = "2s"



var index = 1;
var max = 8;
setInterval(() => {
    myimage.style.marginLeft = `-${index * 650}px`;
    index++;
    if (index == max){
        index = 0;
    }
}, 2000);