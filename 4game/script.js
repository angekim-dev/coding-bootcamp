(function() {
    var currentPlayer = "player1";
    var columns = $(".column");
    // var everySlot = columns.children();

    columns.on("click", function(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        console.log(slotsInCol);
        // logs slots of clicked column

        //Loop through all slots, from last row upwards
        //find the first available slot
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log(
            //     "slotsInCol[i]: ",
            //     slotsInCol.eq(i).hasClass("player1")
            // ); //true if red chip in slot
            // console.log(slotsInCol.eq(i)); //the slot that has a chip in it
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log("do sth");
                slotsInCol.eq(i).addClass(currentPlayer);
                break; //stops the loop
            }
        }
        // var columnIndex = $(e.currentTarget).index();
        // var row = i;
        // console.log("i: ", i);
        var slotsInRow = $(".row" + i); //e.g. if i=5, row5
        // console.log("slotsInRow: ", slotsInRow);
        //top row as the limit
        if (i === -1) {
            return;
        }
        if (checkForVictory(slotsInCol)) {
            //yay victory if true
            // console.log("victory");
            victoryAnouncer();
        } else if (checkForVictory(slotsInRow)) {
            //victory dance
            victoryAnouncer();
            // console.log("row victory");
        } else if (diagonalWinOne()) {
            victoryAnouncer();
        } else if (diagonalWinTwo()) {
            victoryAnouncer();
        } else {
            // console.log("no victory, so switch turns");
            switchPlayer(); //switch turn
        }
        function diagonalWinOne() {
            //from left top to right bottom
            var count = 0;
            var columnIndex = $(e.currentTarget).index();
            var row = i;

            columnIndex = columnIndex - 4;
            row = row - 4;

            for (var k = 0; k < 8; k++) {
                //8 loops because max from 0 columns
                //e.g. 0 columnIndex, columnIndex - 4 is -4, then 8 times
                // console.log(k);
                columnIndex++;
                row++;

                if (
                    columns
                        .eq(columnIndex)
                        .children()
                        .eq(row)
                        .hasClass(currentPlayer)
                ) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }

        function diagonalWinTwo() {
            // starting point bottom left
            var count = 0;
            var columnIndex = $(e.currentTarget).index();
            // console.log("columnIndex: ", columnIndex);
            var row = i;
            // console.log("row: ", row);
            columnIndex = columnIndex - 4;
            // console.log("columnIndex -4: ", columnIndex);
            row = row + 4;
            // console.log("row+4: ", row);
            for (var k = 0; k < 8; k++) {
                columnIndex++;
                // console.log("columnIndex++: ", columnIndex);
                row--;
                // console.log("row++: ", row);
                if (
                    columns
                        .eq(columnIndex)
                        .children()
                        .eq(row)
                        .hasClass(currentPlayer)
                ) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    });

    function checkForVictory(slots) {
        // we need logic to find victory -> if we do, return true
        // console.log("slots in checkForVictory: ", slots);
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            // console.log(
            //     "has current player?",
            //     slots.eq(i).hasClass(currentPlayer)
            // );
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                // console.log(count);
                if (count === 4) {
                    return true;
                }
            } else {
                //reset count to 0
                count = 0;
            }
        }
    }

    function switchPlayer() {
        // if (currentPlayer === "player1") {
        //     currentPlayer = "player2";
        // } else {
        //     currentPlayer = "player1";
        // }

        //ternary operator
        currentPlayer === "player1"
            ? (currentPlayer = "player2")
            : (currentPlayer = "player1");
    }

    function victoryAnouncer() {
        $(".victory").css({
            visibility: "visible"
        });
    }
    $("button").on("click", function() {
        $(".victory").css({
            visibility: "hidden"
        });
        document.location.href = "";
    });
})();
