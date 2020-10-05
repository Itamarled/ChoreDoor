/* Global Variables */
const doorImage1=document.getElementById('door1');
const doorImage2=document.getElementById('door2');
const doorImage3=document.getElementById('door3');
var openDoor1='';
var openDoor2='';
var openDoor3='';
var numClosedDoors=3;
var startButton=document.getElementById('start');
var isPlaying=true;

/* Path to spacific images needed */
const bootDoorPath='https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath='https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath='https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath='https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

/*Choosing rendomly in which door the boot will hide*/
const randomChoreDoorGenerator=()=>{
    let chooseDoor=Math.floor(Math.random()*numClosedDoors);
    if(chooseDoor==1){
        openDoor1=bootDoorPath;
        openDoor2=spaceDoorPath;
        openDoor3=beachDoorPath;
    }
    else if(chooseDoor==2){
        openDoor2=bootDoorPath;
        openDoor1=spaceDoorPath;
        openDoor3=beachDoorPath;
    }
    else{
        openDoor3=bootDoorPath;
        openDoor2=spaceDoorPath;
        openDoor1=beachDoorPath;
    }
}
/* Function for when the user open's a door */
const playDoor=()=>{
    numClosedDoors--;
    if(numClosedDoors==0){
        gameOver();
    }
}

/* Checks if the Boot is behind the door */
const isBoot=(door)=>{
    if(door.src==bootDoorPath){
        return true;
    }
    return false;
}

/* Checks if the door was clicked before */
const isClicked=(door)=>{
    if(door.src==closedDoorPath)
        return false;
    else
        return true;
}
/*Placing the images behind the doors */
doorImage1.onclick= ()=>{
    if(isPlaying&&!isClicked(doorImage1)){
        doorImage1.src=openDoor1
        playDoor()
        if(isBoot(doorImage1)){
            gameOver()
        }
    }
}

doorImage2.onclick=()=>{
    if(isPlaying&&!isClicked(doorImage2)){
        doorImage2.src=openDoor2
        playDoor()
        if(isBoot(doorImage2)){
            gameOver()
        }
    }
}

doorImage3.onclick=()=>{
    if(isPlaying&&!isClicked(doorImage3)){
        doorImage3.src=openDoor3
        playDoor()
        if(isBoot(doorImage3)){
            gameOver()
        }
    }
}

startButton.onclick=()=>{startRound();}
/**
 * If this is the first game, activate randomChoreDoorGenerator()
 * else, reset values to start the game from scratch and then activate  randomChoreDoorGenerator()
 */
const startRound=()=>{
    if(isPlaying==false){
        numClosedDoors=3;
        isPlaying=true;
        doorImage1.src=closedDoorPath
        doorImage2.src=closedDoorPath
        doorImage3.src=closedDoorPath
        startButton.innerHTML='Good Luck!'
    }
    randomChoreDoorGenerator()
}

/* Changes the start button text depanding on the game result */
function gameOver(){
    if(numClosedDoors==0){
        startButton.innerHTML='You win! Play again?';
    }
    else{
        startButton.innerHTML='Game over! Play again?'
    }
    isPlaying=false;
}

startRound();