var arr=["rock","paper","scissor"]
var output=document.getElementById("t");
function comp(){
    return Math.floor(Math.random()*2)
}

function rock(){
    var res=comp();
    var compoption=arr[res];
    var youroption=arr[0]
    if(result(youroption,compoption)){
        output.innerText="you win"
    }
    else if(result(youroption,compoption)==false){
        output.innerText="you loose"
    }
    else{
        output.innerText="draw"
    }

    
}
function paper(){
    var res=comp();
    var compoption=arr[res];
    var youroption=arr[1]
    if(result(youroption,compoption)){
        output.innerText="you win"
    }
    else if(result(youroption,compoption)==false){
        output.innerText="you loose"
    }
    else{
        output.innerText="draw"
    }
}
function scissor(){
    var res=comp();
    var compoption=arr[res];
    var youroption=arr[2]
    if(result(youroption,compoption)){
        output.innerText="you win"
    }
    else if(result(youroption,compoption)==false){
        output.innerText="you loose"
    }
    else{
        output.innerText="draw"
    }
}

function result(you,comp){

if(you==comp) return null;

if(you=="rock" && comp=="scissor") return true;
if(you=="paper" && comp=="scissor") return true;
if(you=="paper" && comp=="rock") return true;

return false;
}



