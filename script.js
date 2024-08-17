

const currTime = () =>{
    let curTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText= curTime;

}


// currTime();
// setInterval(currTime,1000);

const clock =() =>{
    currTime();
    setInterval(currTime,1000);
}

document.querySelector(".fas.fa-clock").addEventListener("click",clock);

const stopwatch =()=>{
    document.getElementById("clock").innerHTML= "00:00:00 <br>Will Make it functional";
}
document.querySelector(".fas.fa-stopwatch").addEventListener("click", stopwatch);