var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender()
{
    var led = new jf.Led(13);
    var rojito = new jf.Led(9);
    led.blink(200);
    led.blink(700);
    
    console.log("mira los leds");
}


