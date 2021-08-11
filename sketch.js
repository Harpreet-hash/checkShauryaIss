var bg1,bg2,bg3,empsky,sky1;
var appState=0;
var butiss;
var iss,issImage;
var dataInfoA,dataInfoB,dataInfoC,dataInfoD;
var dataInfoA1,dataInfoB1,dataInfoC1,dataInfoD1;
var hello1,hello2,hello3,hello4,hello5,hello6;
var plus1,plus2;

function preload(){
setInterval(async()=>{getIss()},3000)
sky1=loadImage("background/sky3.jpg");
issImg=loadImage("background/iss.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight-150);
    butiss=createButton('ISS LIVE')
    butiss.position(displayWidth/2-215,displayHeight/2-70)
    butiss.style('background','lightgreen')
    butiss.size(350,50);
}

function draw(){
if(appState===0){
background(sky1);

textSize(60);
fill("orange");
stroke("black")
strokeWeight(8)
text("LIVE ISS DATA",displayWidth/2-240,displayHeight/2-200)

textSize(60);
fill("red");
stroke("black")
strokeWeight(8)
text("LET'S CHECK THE LIVE POSITIONS OF THE ISS",displayWidth/2-690,displayHeight/2-110)
}
butiss.mousePressed(()=>{
    appState=1;
})
if(appState===1){    

    background(sky1);
    iss=createSprite(displayWidth/2-450,displayHeight/2-100,500,500);
    iss.addImage(issImg);
    iss.scale=0.8;
    drawSprites();
    butiss.hide();
    textSize(60);
    fill("red");
    text("ISS LIVE",displayWidth/2+340,displayHeight/2-400);
    textSize(50);
    fill("yellow");
    text("LONGITUDE :",displayWidth/2+110,displayHeight/2-290);
    text("LATITUDE :",displayWidth/2+110,displayHeight/2-210);
    text("HEMISPHERE (E/W) :",displayWidth/2+110,displayHeight/2-130);
    text("HEMISPHERE (N/S) :",displayWidth/2+110,displayHeight/2-50);
    text("CONTINENT :",displayWidth/2+110,displayHeight/2+30);
    text("ALTITUDE :",displayWidth/2+110,displayHeight/2+110);
    text("SPEED :",displayWidth/2+110,displayHeight/2+190);
    text("km",displayWidth/2+580,displayHeight/2+110);
    text("km/hr",displayWidth/2+580,displayHeight/2+190);

    textSize(50);
    fill("red");
    text(dataInfoA1,displayWidth/2+450,displayHeight/2-290);
    text(dataInfoB1,displayWidth/2+420,displayHeight/2-210);
    text(dataInfoC1,displayWidth/2+390,displayHeight/2+110);
    text(dataInfoD1,displayWidth/2+340,displayHeight/2+190);

    if(hello5==="-"){
        text("WESTERN",displayWidth/2+650,displayHeight/2-120);
    }else{
        text("EASTERN",displayWidth/2+650,displayHeight/2-130);
    }
    if(hello6==="-"){
        text("SOUTHERN",displayWidth/2+620,displayHeight/2-50);
    }else{
        text("NORTHERN",displayWidth/2+620,displayHeight/2-50);
    }

    if(dataInfoA>60 && dataInfoA<120 && dataInfoB>10 && dataInfoB<80){
        text("ASIA",displayWidth/2+450,displayHeight/2+30);
    }else{
    }
    if(dataInfoA>30 && dataInfoA<60 && dataInfoB>10 && dataInfoB<40){
        text("ASIA",displayWidth/2+450,displayHeight/2+30);
    }else{
    }
    if(dataInfoA>120 && dataInfoA<180 && dataInfoB>60 && dataInfoB<70){
        text("ASIA",displayWidth/2+450,displayHeight/2+30);
    }else{
    }
    
    if(dataInfoA>-15 && dataInfoA<50 && dataInfoB>-35 && dataInfoB<35){
        text("AFRICA",displayWidth/2+450,displayHeight/2+30);
    }else{
    }


    if(dataInfoA>113 && dataInfoA<153 && dataInfoB<-10 && dataInfoB>-40){
        text("AUSTRALIA",displayWidth/2+450,displayHeight/2+30);
    }else{
    }


    if(dataInfoA>-10 && dataInfoA<40 && dataInfoB>-40 && dataInfoB<70){
        text("EUROPE",displayWidth/2+450,displayHeight/2+30);
    }else{
    }

    if(dataInfoA>-160 && dataInfoA<-30 && dataInfoB<70 && dataInfoB>15){
        text("NORTH AMERICA",displayWidth/2+450,displayHeight/2+30);
    }else{
    }

    if(dataInfoA>-80 && dataInfoA<-35 && dataInfoB<10 && dataInfoB>-55){
        text("SOUTH AMERICA",displayWidth/2+450,displayHeight/2+30);
    }else{
    }

}
}
async function getIss(){
    var response=await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    var responseJSON=await response.json();
    dataInfoA=responseJSON.longitude;
    dataInfoB=responseJSON.latitude;
    dataInfoC=responseJSON.altitude;
    dataInfoD=responseJSON.velocity;
    hello1=dataInfoA.toString();
    hello2=dataInfoB.toString();
    hello3=dataInfoC.toString();
    hello4=dataInfoD.toString();
    dataInfoA1= hello1.slice(0,7);
    dataInfoB1= hello2.slice(0,7);
    dataInfoC1= hello3.slice(0,7);
    dataInfoD1= hello4.slice(0,9);

    hello5=hello1.slice(0,1);
    hello6=hello2.slice(0,1);
}