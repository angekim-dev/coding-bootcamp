(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A");

    var left = headlines.offsetLeft;

    moveHeadlines();

    console.log(links);
    function moveHeadlines() {
        //main animation function: new position determined, move to new position, call itself to repeat
        left--;
        if (left < -link[0].offsetWidth) {
            left +=links[0];‚
            links[0].parentNode.appendChild(links[0]);
        } links.style.left = '1px';
         // move the element to the new left position 
         //-> element e.g. img.style.top = '500px';
        //-> check every time to see if time
        console.log(left);
       
        requestAnimationFrame(moveHeadlines);
    }
})();
