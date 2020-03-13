(function() {
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    // var position = {
    //     x: 200,
    //     y: 100
    // };

    // var velocity = 1;

    // draw();

    // function draw() {
    // ctx.clearRect(0, 0, 400, 400);
    // position.x += velocity;
    // position.y += velocity;

    // if (position.x >= 215 || position.y >= 350) {
    //     velocity = -1;
    // } else if (position.x < 50 || position.y < 80) {
    //     velocity = 1;
    // }
    ctx.beginPath();
    ctx.moveTo(100, 230);
    ctx.lineTo(200, 200);
    ctx.strokeStyle = "tomato";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.moveTo(100, 350);
    ctx.lineTo(200, 250);
    ctx.stroke();
    ctx.moveTo(300, 100);
    ctx.lineTo(200, 200);
    ctx.stroke();
    ctx.moveTo(300, 350);
    ctx.lineTo(200, 250);
    ctx.stroke();
    ctx.moveTo(200, 250);
    ctx.lineTo(200, 200);
    ctx.stroke();

    ctx.beginPath();

    ctx.arc(200, 100, 50, 0, (360 * Math.PI) / 180);

    ctx.stroke();

    // requestAnimationFrame(draw);
    // }
})();
