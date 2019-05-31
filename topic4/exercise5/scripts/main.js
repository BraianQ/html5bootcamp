document.addEventListener("DOMContentLoaded", loadpage);

function loadpage(){

    let colors = [];
    draw = new Boolean(false);
    colors[0] = "red";
    colors[1] = "blue"; 
    colors[2] = "yellow";
    colors[3] = "brown";
    let canvas = document.querySelector('#micanvas');
    let ctx = canvas.getContext('2d');
    let randomnumber = Math.floor((Math.random() * 3) + 1);
    const randomcolor = Math.floor((Math.random() * 4) + 1);
    let x = 50;
    let dx = 2;


    function drawRandom(){
        switch (randomnumber){
            case 1 :
                drawCircle(ctx,randomcolor);
                break;
            case 2 :
                animate();
                break;
            case 3 :
                drawTriangle(ctx,randomcolor);
                break;
        }
    }

    function drawCircle(ctx,randomcolor){
        let circle = new Path2D();
        circle.arc(150,50,25,0, 2* Math.PI);
        ctx.strokeStyle = colors[randomcolor];
        ctx.stroke(circle);
    }

    function drawRectangle(ctx,randomcolor){
        ctx.beginPath();
        ctx.rect(x, 10, 50, 100 );
        ctx.strokeStyle = colors[randomcolor];
        ctx.closePath();
        ctx.stroke();
    }

    function drawTriangle(ctx,randomcolor){
        let triangle = new Path2D();
        triangle.moveTo(450,50);
        triangle.lineTo(500,100);
        triangle.lineTo(500,0);
        triangle.lineTo(450,50);
        ctx.strokeStyle = colors[randomcolor];
        ctx.stroke(triangle);
    }

    function move(){
        if  (x > canvas.width) { 
            dx = -dx;
        }else{
            if (x < 0)
                dx = 2;
        }
        x += dx;
    }

    function animate(){
        ctx.clearRect(0,0,600,200);  
        move();
        drawRectangle(ctx, randomcolor);
        requestAnimationFrame(animate);
    } 


    drawRandom();
}
