(function() {
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.strokeStyle = "tomato";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200, 100, 50, 0, (360 * Math.PI) / 180);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100, 350);
    ctx.lineTo(200, 250);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300, 350);
    ctx.lineTo(200, 250);
    ctx.closePath();
    ctx.stroke();
})();
