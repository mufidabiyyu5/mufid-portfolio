var i = 0;
var txt = new Array('Lorem ipsum dummy text blabla.', 'I Love Design', 'UI/UX Enthusiast');
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    if(i == txt.length - 1){
        i = 0;
    }
  }
}