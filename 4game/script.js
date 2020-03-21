// console.log(("sanity: ", $));
(function() {
    // console.log(("sanity: ", $));
    var currentPlayer = "player1";

    // console.log("currentPlayer before", currentPlayer);
    // switchPlayer();
    // console.log("after: ", currentPlayer);

    $(".column").on("click", function(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        // console.log("slotsInCol: ", slotsInCol);
        // console.log(slotsInCol.length);

        //Loop through slots, find first available slot
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log(
            //     "clotsInCol[i]: ",
            //     slotsInCol.eq(i).hasClass("player1")
            // );
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log("do sth");
                slotsInCol.eq(i).addClass(currentPlayer);
                break; //stops the loop
            }
        }

        // console.log("i: ", i);
        var slotsInRow = $(".row" + i);
        // console.log("slotsInRow: ", slotsInRow);
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
        } else {
            // console.log("no victory, so switch turns");
            switchPlayer(); //switch turn
        }

        // function diagonalWin(e) {
        if (
            $("#0").hasClass("player1") &&
            $("#7").hasClass("player1") &&
            $("#14").hasClass("player1") &&
            $("#21").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#0").hasClass("player2") &&
            $("#7").hasClass("player2") &&
            $("#14").hasClass("player2") &&
            $("#21").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#1").hasClass("player1") &&
            $("#8").hasClass("player1") &&
            $("#15").hasClass("player1") &&
            $("#22").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#1").hasClass("player2") &&
            $("#8").hasClass("player2") &&
            $("#15").hasClass("player2") &&
            $("#22").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#2").hasClass("player1") &&
            $("#9").hasClass("player1") &&
            $("#16").hasClass("player1") &&
            $("#23").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#2").hasClass("player2") &&
            $("#9").hasClass("player2") &&
            $("#16").hasClass("player2") &&
            $("#23").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#3").hasClass("player1") &&
            $("#8").hasClass("player1") &&
            $("#13").hasClass("player1") &&
            $("#18").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#3").hasClass("player2") &&
            $("#8").hasClass("player2") &&
            $("#13").hasClass("player2") &&
            $("#18").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#5").hasClass("player1") &&
            $("#10").hasClass("player1") &&
            $("#15").hasClass("player1") &&
            $("#20").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#5").hasClass("player2") &&
            $("#10").hasClass("player2") &&
            $("#15").hasClass("player2") &&
            $("#20").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#4").hasClass("player1") &&
            $("#9").hasClass("player1") &&
            $("#14").hasClass("player1") &&
            $("#19").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#4").hasClass("player2") &&
            $("#9").hasClass("player2") &&
            $("#14").hasClass("player2") &&
            $("#19").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#3").hasClass("player1") &&
            $("#8").hasClass("player1") &&
            $("#13").hasClass("player1") &&
            $("#18").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#3").hasClass("player2") &&
            $("#8").hasClass("player2") &&
            $("#13").hasClass("player2") &&
            $("#18").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#6").hasClass("player1") &&
            $("#13").hasClass("player1") &&
            $("#20").hasClass("player1") &&
            $("#27").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#6").hasClass("player2") &&
            $("#13").hasClass("player2") &&
            $("#20").hasClass("player2") &&
            $("#27").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#7").hasClass("player1") &&
            $("#14").hasClass("player1") &&
            $("#21").hasClass("player1") &&
            $("#28").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#7").hasClass("player2") &&
            $("#14").hasClass("player2") &&
            $("#21").hasClass("player2") &&
            $("#28").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#8").hasClass("player1") &&
            $("#15").hasClass("player1") &&
            $("#22").hasClass("player1") &&
            $("#29").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#8").hasClass("player2") &&
            $("#15").hasClass("player2") &&
            $("#22").hasClass("player2") &&
            $("#29").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#11").hasClass("player1") &&
            $("#16").hasClass("player1") &&
            $("#21").hasClass("player1") &&
            $("#26").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#11").hasClass("player2") &&
            $("#16").hasClass("player2") &&
            $("#21").hasClass("player2") &&
            $("#26").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#10").hasClass("player1") &&
            $("#15").hasClass("player1") &&
            $("#20").hasClass("player1") &&
            $("#25").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#10").hasClass("player2") &&
            $("#15").hasClass("player2") &&
            $("#20").hasClass("player2") &&
            $("#25").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#9").hasClass("player1") &&
            $("#14").hasClass("player1") &&
            $("#19").hasClass("player1") &&
            $("#24").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#9").hasClass("player2") &&
            $("#14").hasClass("player2") &&
            $("#19").hasClass("player2") &&
            $("#24").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#12").hasClass("player1") &&
            $("#19").hasClass("player1") &&
            $("#26").hasClass("player1") &&
            $("#33").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#12").hasClass("player2") &&
            $("#19").hasClass("player2") &&
            $("#26").hasClass("player2") &&
            $("#33").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#13").hasClass("player1") &&
            $("#20").hasClass("player1") &&
            $("#27").hasClass("player1") &&
            $("#34").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#13").hasClass("player2") &&
            $("#20").hasClass("player2") &&
            $("#27").hasClass("player2") &&
            $("#34").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#14").hasClass("player1") &&
            $("#21").hasClass("player1") &&
            $("#28").hasClass("player1") &&
            $("#35").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#14").hasClass("player2") &&
            $("#21").hasClass("player2") &&
            $("#28").hasClass("player2") &&
            $("#35").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#17").hasClass("player1") &&
            $("#22").hasClass("player1") &&
            $("#27").hasClass("player1") &&
            $("#32").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#17").hasClass("player2") &&
            $("#22").hasClass("player2") &&
            $("#27").hasClass("player2") &&
            $("#32").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#16").hasClass("player1") &&
            $("#21").hasClass("player1") &&
            $("#26").hasClass("player1") &&
            $("#31").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#16").hasClass("player2") &&
            $("#21").hasClass("player2") &&
            $("#26").hasClass("player2") &&
            $("#31").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#15").hasClass("player1") &&
            $("#20").hasClass("player1") &&
            $("#25").hasClass("player1") &&
            $("#30").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#15").hasClass("player2") &&
            $("#20").hasClass("player2") &&
            $("#25").hasClass("player2") &&
            $("#30").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#18").hasClass("player1") &&
            $("#25").hasClass("player1") &&
            $("#32").hasClass("player1") &&
            $("#39").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#18").hasClass("player2") &&
            $("#25").hasClass("player2") &&
            $("#32").hasClass("player2") &&
            $("#39").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#19").hasClass("player1") &&
            $("#26").hasClass("player1") &&
            $("#33").hasClass("player1") &&
            $("#40").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#19").hasClass("player2") &&
            $("#26").hasClass("player2") &&
            $("#33").hasClass("player2") &&
            $("#40").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#20").hasClass("player1") &&
            $("#27").hasClass("player1") &&
            $("#34").hasClass("player1") &&
            $("#41").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#20").hasClass("player2") &&
            $("#27").hasClass("player2") &&
            $("#34").hasClass("player2") &&
            $("#41").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#23").hasClass("player1") &&
            $("#28").hasClass("player1") &&
            $("#33").hasClass("player1") &&
            $("#38").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#23").hasClass("player2") &&
            $("#28").hasClass("player2") &&
            $("#33").hasClass("player2") &&
            $("#38").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#22").hasClass("player1") &&
            $("#27").hasClass("player1") &&
            $("#32").hasClass("player1") &&
            $("#37").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#22").hasClass("player2") &&
            $("#27").hasClass("player2") &&
            $("#32").hasClass("player2") &&
            $("#37").hasClass("player2")
        ) {
            victoryAnouncer();
        } else if (
            $("#21").hasClass("player1") &&
            $("#26").hasClass("player1") &&
            $("#31").hasClass("player1") &&
            $("#36").hasClass("player1")
        ) {
            victoryAnouncer();
        } else if (
            $("#21").hasClass("player2") &&
            $("#26").hasClass("player2") &&
            $("#31").hasClass("player2") &&
            $("#36").hasClass("player2")
        ) {
            victoryAnouncer();
        }
        // var currentColumn = $(e.currentTarget).index();
        // console.log(currentColumn);
        // var currentRow = i;
        // console.log(currentRow);
        // if (
        //     $(e.currentTarget)
        //         .index()
        //         .eq()
        //         .hasClass("player1") &&
        //     i.eq().hasClass("player1")
        // ) {
        //     console.log("here");
        // }

        // var cols = $(".column");
        // var col = $(e.currentTarget);
        // for (var i = 0; i <= 42; i++) {
        //     var row = $(".slot")[i];
        //     // console.log(row);
        // }
        // console.log(
        //     cols
        //         .eq(col)
        //         .children()
        //         .eq(2)
        // );
        // .children()
        // .eq(row)
        // var myObj = $();
        // myObj = myObj.add($("div").eq(0)); //if want to create a jquery object
        // myObj = myObj.add($("p").eq(0));
        // var diagVictories = [
        //     [0, 7, 14, 21],
        //     [1, 8, 15, 22],
        //     [2, 9, 16, 23],
        //     [3, 8, 13, 18],
        //     [5, 10, 15, 20],
        //     [4, 9, 14, 19],
        //     [3, 8, 13, 18],
        //     [6, 13, 20, 27],
        //     [7, 14, 21, 28],
        //     [8, 15, 22, 29],
        //     [11, 16, 21, 26],
        //     [10, 15, 20, 25],
        //     [9, 14, 19, 24],
        //     [12, 19, 26, 33],
        //     [13, 20, 27, 34],
        //     [14, 21, 28, 35],
        //     [17, 22, 27, 32],
        //     [16, 21, 26, 31],
        //     [15, 20, 25, 30],
        //     [18, 25, 32, 39],
        //     [19, 26, 33, 40],
        //     [20, 27, 34, 41],
        //     [23, 28, 33, 38],
        //     [22, 27, 32, 37],
        //     [21, 26, 31, 36]
        // ];
        // var arrayLength = diagVictories.length;
        // for (var i = 0; i < arrayLength; i++) {
        //     console.log(diagVictories[i]);
        // }
        // if ()
        // }
    });

    function checkForVictory(slots) {
        // logic to find victory -> if we do, return true
        // console.log("slots in checkForVictory: ", bla);
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

    // //code with david
    // var cols = $(".column");
    // cols.eq(col)
    //     .children()
    //     .eq(row);
    // var myObj = $();
    // myObj = myObj.add($("div").eq(0)); //if want to create a jquery object
    // myObj = myObj.add($("p").eq(0));

    // var diagVictories = [
    //     [0, 7, 14, 21],
    //     [1, 8, 15, 22],
    //     [2, 9, 16, 23],
    //     [3, 8, 13, 18]
    //     //etc
    // ];
})();
