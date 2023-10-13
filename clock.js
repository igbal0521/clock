


let rotation = 0;

const angle = 90;
// const element = document.querySelector('.demo');
// element.style.backgroundColor = 'red';


function sequence() {
    sec= document.getElementsByTagName("h3").innerHTML= new Date().getSeconds();
    min= document.getElementsByTagName("h3").innerHTML= new Date().getMinutes();
    hour= document.getElementsByTagName("h3").innerHTML= new Date().getHours();
sec=sec*6;
min=min*6;

if(12<=hour)
{
    hour=hour-12;
}
hour=hour*30;

    document.querySelector('.sec').style.transform = `rotate(${sec}deg)`;
    document.querySelector('.min').style.transform = `rotate(${min}deg)`;
    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
}

setInterval(sequence,1000);


    
