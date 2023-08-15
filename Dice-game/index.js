var plyr1_score=Math.floor(Math.random()*6)+1;
var plyr2_score=Math.floor(Math.random()*6)+1;

var plyr1_diceImg=document.querySelector(".player1 .dice");
var plyr2_diceImg=document.querySelector(".player2 .dice");

if(plyr1_score==1)
    plyr1_diceImg.innerHTML="<img src='./Assets/one.png'>";
else if(plyr1_score==2)
    plyr1_diceImg.innerHTML="<img src='./Assets/two.png'>";
else if(plyr1_score==3)
    plyr1_diceImg.innerHTML="<img src='./Assets/three.png'>";
else if(plyr1_score==4)
    plyr1_diceImg.innerHTML="<img src='./Assets/four.png'>";
else if(plyr1_score==5)
    plyr1_diceImg.innerHTML="<img src='./Assets/five.png'>";
else
    plyr1_diceImg.innerHTML="<img src='./Assets/six.png'>";

if(plyr2_score==1)
    plyr2_diceImg.innerHTML="<img src='./Assets/one.png'>";
else if(plyr2_score==2)
    plyr2_diceImg.innerHTML="<img src='./Assets/two.png'>";
 else if(plyr2_score==3)
    plyr2_diceImg.innerHTML="<img src='./Assets/three.png'>";
else if(plyr2_score==4)
    plyr2_diceImg.innerHTML="<img src='./Assets/four.png'>";
else if(plyr2_score==5)
    plyr2_diceImg.innerHTML="<img src='./Assets/five.png'>";
else
    plyr2_diceImg.innerHTML="<img src='./Assets/six.png'>";

var title_ref=document.querySelector("h1");
if(plyr1_score>plyr2_score)
{
    title_ref.innerHTML="Player 1 is the Winner !!";
    title_ref.style.color="red";
}
else if(plyr1_score<plyr2_score)
{
    title_ref.innerHTML="Player 2 is the Winner !!";
    title_ref.style.color="blue";
}
else{
    title_ref.innerHTML="Match-Draw !!"
    title_ref.style.color="green";
}

