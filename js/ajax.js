// (function(){// <--------- comment out to use console.log
"use strict";

    //declaring api var
    let xhr = $.get('https://api.pokemontcg.io/v1/cards');
    let card1 = '';
    let card2 = '';
    let player1Hp = 0;
    let player2Hp = 0;
    let player1Attack = 0;
    let player1Attack2 = 0;
    let player2Attack = 0;
    let player2Attack2 = 0;
    let html = '';
    let player1Turn = true;
    let player2Turn = false;
    let gameIsWon = false;
    //random number between 1 and 0
    // var audio = new Audio('../mp3/battlemusic.mp3');

    // console.log(xhr);

    // document done function
    xhr.done(function(data) {
        console.log(data);
        loadCardData(data);
        // audio.play();
        hideElementsBasedOnPlayerTurn();
        $("#C1attack1").click(function() {
            let randomNum = Math.floor(Math.random() * Math.floor(2));
            // choosing attack 1 or 2 base off random number
            if(randomNum === 0){
                // player2Hp -= player1Attack;
                player2Hp = player2Hp - player1Attack;
                $('#hp-bar-two').html("HP " + player2Hp);
            } else if( randomNum === 1){
                // player2Hp -= player1Attack2;
                player2Hp = player2Hp - player1Attack2;
                $('#hp-bar-two').html("HP " + player2Hp);
            }

            player2Turn = true;
            player1Turn = false;
            hideElementsBasedOnPlayerTurn();
            checkPlayerHp();
            });
        $("#C2attack1").click(function(){
            let randomNum = Math.floor(Math.random() * Math.floor(2));
            // player1Hp -= player2Attack;
            if(randomNum === 0){
                player1Hp = player1Hp - player2Attack;
                console.log(player2Attack);
                $('#hp-bar-one').html("HP " + player1Hp);
            } else if( randomNum === 1){
                player1Hp = player1Hp - player2Attack2;
                $('#hp-bar-one').html("HP " + player1Hp);
            }
            player2Turn = false;
            player1Turn = true;
            hideElementsBasedOnPlayerTurn();
            checkPlayerHp();
        });

    }); // end of done function

function loadCardData(data) {
    for (let i in data) {
        card1 += `<img alt="" src="${data.cards[55].imageUrl}"/>`;
        card2 += `<img alt="" src="${data.cards[69].imageUrl}"/>`;
        player1Hp = data.cards[55].hp;
        player2Hp = data.cards[69].hp;
        player1Attack = data.cards[55].attacks[0].damage;
        player1Attack2 = data.cards[55].attacks[1].damage;
        player2Attack = data.cards[69].attacks[0].damage;
        player2Attack2 = data.cards[69].attacks[1].damage;
        console.log(player1Attack2);
    }
    $('#card1').html(card1);
    $('#card2').html(card2);
    $('#hp-bar-one').html("HP " + player1Hp);
    $('#hp-bar-two').html("HP " + player2Hp);
    $('#C1attack1').html(player1Attack);
    $('#C2attack1').html(player2Attack);
}

function checkPlayerHp() {
    if (player2Hp == 0) {
        alert("Player 1 wins!")
    } else if (player1Hp == 0) {
        alert("Player2 wins!")
    }
}

function hideElementsBasedOnPlayerTurn() {
    if (player1Turn === true) {
        $("#C2attack1").hide();
        $("#C1attack1").show();
    } else if (player2Turn === true) {
        $("#C1attack1").hide();
        $("#C2attack1").show();
    }
}


// })();