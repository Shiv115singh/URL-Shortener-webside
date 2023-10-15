let prevURL = document.getElementById("prevURL");
let run = document.getElementById("run");
let newURL = document.getElementById("newURL");
let copy = document.getElementById("copy");

run.addEventListener("click",()=>{
    let ul=prevURL.value;
    fetch (`https://api.shrtco.de/v2/shorten?url=${ul}/very/long/link.html`)
    .then((resp)=>resp.json())
    .then((value)=>{
        console.log(value);  
    });
   
});
