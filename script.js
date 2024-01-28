
function randomAns() {
    var count=0;
    setInterval(function(){
        if(count > 5){
            clearInterval();
            return;
        }
        document.querySelector(/*XXX*/).textContent = Math.floor(Math.random()*99999999);
    }, 50);
}

const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    var num = document.getElementById("nums").value;
    console.log(num);
});