const square=document.querySelectorAll('.square')
const mole=document.querySelectorAll('.mole')
const timeLeft=document.querySelector('#time-left')
const mole_hurt_sound=document.getElementById('hurt-sound')
let score=document.querySelector('#score')
let result=0
let currentTime=timeLeft.textContent
function randomSquare(){
    square.forEach(className=>{
        className.classList.remove('mole')
    })
    let randomPosition=square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    // assign the id of the randoposition to hitposition
    hitPosition=randomPosition.id
}
square.forEach(id=>{
    id.addEventListener('mouseup',()=>{
        if(id.id===hitPosition){
            result = result+1
            score.textContent=result
            mole_hurt_sound.play()
            id.style.backgroundImage='url(../assets/images/Wack-A-Mole-Hurt.svg)'
            setTimeout(()=>id.style.backgroundImage='url(../assets/images/Ground.svg)',1000) 
        }
    })
})

function moveMole(){
    let timerid=null
    timerid=setInterval(randomSquare,500)
}

moveMole()
function countDown(){
    currentTime--
    timeLeft.textContent=currentTime
    if(currentTime===0){
        clearInterval(timerId)
        alert("Bakhti Ashghale NOOB" +'   '+ result)
    }
    if(currentTime<=10){
        timeLeft.style.color='red'
    }
    else{
        timeLeft.style.color='green'
    }
}
let timerId=setInterval(countDown,1000)