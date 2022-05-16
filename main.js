x = " ";
y = " ";

draw_circle = " ";
draw_rect = " ";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start(){
    document.getElementById("status").innerHTML = "The System is Listening. Please Speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognisez as: " + content;
    if(content == "circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started Drawing a Circle";
        draw_circle = "set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started Drawing a Rectangle";
        draw_rect = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        draw_circle = " ";
        document.getElementById("status").innerHTML = "The circle has been Drawn";
    }
    if(draw_rect == "set"){
        rect(x, y, 70, 50);
        draw_rect = " ";
        document.getElementById("status").innerHTML = "The rectangle has been Drawn";
    }
}
