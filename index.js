var clap = document.getElementById('1.audio');
var hithat = document.getElementById('2.audio');
var kick = document.getElementById('3.audio');
var openhat = document.getElementById('4.audio');
var boom = document.getElementById('5.audio');
var ride = document.getElementById('6.audio');
var snare = document.getElementById('7.audio');
var tom = document.getElementById('8.audio');    
var tink = document.getElementById('9.audio');


var con1 = document.getElementById('con1');
var con2 = document.getElementById('con2');
var con3 = document.getElementById('con3');
var con4 = document.getElementById('con4');
var con5 = document.getElementById('con5');
var con6 = document.getElementById('con6');
var con7 = document.getElementById('con7');
var con8 = document.getElementById('con8');
var con9 = document.getElementById('con9');




document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;    
    if(keyCode === 65)
    {
        clap.play();
        con1.style.transition = '1ms';
        con1.style.height = '110%';
        con1.style.width = '16%'
    }
    if(keyCode === 83)
    {
        hithat.play();
        con2.style.transition = '1ms';
        con2.style.height = '110%';
        con2.style.width = '16%'
    }
    if(keyCode === 68)
    {
        kick.play();
        con3.style.transition = '1ms';
        con3.style.height = '110%';
        con3.style.width = '16%'
    }
    if(keyCode === 70)
    {
        openhat.play();
        con4.style.transition = '1ms';
        con4.style.height = '110%';
        con4.style.width = '16%'
    }
    if(keyCode === 71)
    {
        boom.play();
        con5.style.transition = '1ms';
        con5.style.height = '110%';
        con5.style.width = '16%'
    }
    if(keyCode === 72)
    {
        ride.play();
        con6.style.transition = '1ms';
        con6.style.height = '110%';
        con6.style.width = '16%'
    }
    if(keyCode === 74)
    {
        snare.play();
        con7.style.transition = '1ms';
        con7.style.height = '110%';
        con7.style.width = '16%'
    }
    if(keyCode === 75)
    {
        tom.play();
        con8.style.transition = '1ms';
        con8.style.height = '110%';
        con8.style.width = '16%'
    }
    if(keyCode === 76)
    {
        tink.play();
        con9.style.transition = '1ms';
        con9.style.height = '110%';
        con9.style.width = '16%'
    }
})


document.body.addEventListener('keyup', function(e){
    var keyCode = e.keyCode;   
    if(keyCode === 65)
    {
        con1.style.height = '100%';
        con1.style.width = '11.11%'
    }
    if(keyCode === 83)
    {
        con2.style.height = '100%';
        con2.style.width = '11.11%'
    }
    if(keyCode === 68)
    {
        con3.style.height = '100%';
        con3.style.width = '11.11%';
    }
    if(keyCode === 70)
    {
        con4.style.height = '100%';
        con4.style.width = '11.11%'
    }
    if(keyCode === 71)
    {
        con5.style.height = '100%';
        con5.style.width = '11.11%'
    }
    if(keyCode === 72)
    {
        con6.style.height = '100%';
        con6.style.width = '11.11%'
    }
    if(keyCode === 74)
    {
        con7.style.height = '100%';
        con7.style.width = '11.11%'
    }
    if(keyCode === 75)
    {
        con8.style.height = '100%';
        con8.style.width = '11.11%'
    }
    if(keyCode === 76)
    {
        con9.style.height = '100%';
        con9.style.width = '11.11%'
    }
})




