canvas=document.getElementById("myCanvas");

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e)
{
    currenetpositionofmousex=e.clientX-canvas.offsetLeft;
    currenetpositionofmousey=e.clientY-canvas.offsetTop;

    if (mousevent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=widthofline;
       ctx.arc(currenetpositionofmousex,radius,0,
        2 * Math.PI);
        ctx.stroke();
    } 
}



canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e)
{
    colour=document.getElementById("linecolour").value;
    widthofline=document.getElementById("width").value;
    radius=document.getElementById("Radius").value;
    mouseevent="mouseDown";

}







canvas.addEventListener("mouseup",mymouseup);

    function mymouseup(e)
{
    mouseevent="mouseUp";

}

canvas.addEventListener("mouseleave",mymouseleave);
    function mymouseleave(e)
{
    mouseevent="mouseLeave";

}






function cleararea()
{

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


