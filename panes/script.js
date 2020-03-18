(function() {
    var containerX, containerWidth, offset;
    var bar = $(".bar");
    var container = $(".container");
    var topImage = $(".top-image");

    bar.on("mousedown", function(e) {
        // console.log("down");
        containerX = container.offset().left;
        containerWidth = container.outerWidth();
        var barX = bar.position().left;
        var cursorX = e.clientX - containerX;
        offset = cursorX - barX;
        container.on("mousemove", drag);
        e.preventDefault();
    });
    $(document).on("mouseup", function() {
        container.off("mousemove");
    });

    function drag(e) {
        if (e.clientX > containerX + containerWidth) {
            return;
        }
        if (e.clientX < containerX) {
            return;
        }
        bar.css({
            left: e.clientX - containerX - offset + "px"
        });
        topImage.css({
            width: e.clientX - containerX - offset + "px"
        });
    }
})();

// container.on("mousedown", function(e) {
//     topImage.css({
//         width: e.clientX
//     });
// }); // x/y positions of MouseEvent, change width of image

// container.on("mousemove", function(cursor) {
//     // console.log("move");

//     bar.css({
//         left: cursor.clientX
//     });
//     // console.log(bar.offset().left);
//     // console.log(bar.outerWidth());
// });
// container.on("mouseup", function() {
//     container.off("mousemove");
// });
// });

// another option: Boolean. only if true, width property changes
// width of top image or left property of bar should be stopped
// from a certain number

// You'll want to detect mousedown events
// on the bar
// that sits on top of the images.
// After a mousedown (but before a mouseup),
// the bar should follow the mouse pointer on the x axis
// but never move out of the area
// defined by the left edge and right edge of the images.
// As the bar moves, the visible portions of the images
// should change correspondingly
