// (function(){// <--------- comment out to use console.log
"use strict";

    //declaring api var
    let xhr = $.get('https://api.pokemontcg.io/v1/cards');
    let card1 = '';
    let card2 = '';
    let player1Hp = 0;
    let player2Hp = 0;
    let player1Attack = 0;
    let player2Attack = 0;
    let html = '';
    let player1Turn = true;
    let player2Turn = false;
    let gameIsWon = false;
    // var audio = new Audio('../mp3/battlemusic.mp3');

    // console.log(xhr);

    // document done function
    xhr.done(function(data) {
        console.log(data);
        loadCardData(data);
        // audio.play();
        hideElementsBasedOnPlayerTurn();
        $("#C1attack1").click(function() {
            player2Hp -= player1Attack;
            player2Turn = true;
            player1Turn = false;
            hideElementsBasedOnPlayerTurn();
            checkPlayerHp();
            });
        $("#C2attack1").click(function(){
            player1Hp -= player2Attack;
            player2Turn = false;
            player1Turn = true;
            hideElementsBasedOnPlayerTurn();
            checkPlayerHp();
        });

    }); // end of done function

function loadCardData(data) {
    for (let i in data) {
        card1 += `<img alt="" src="${data.cards[55].imageUrl}"/>`;
        card2 += `<img alt="" src="${data.cards[45].imageUrl}"/>`;
        player1Hp = data.cards[55].hp;
        player2Hp = data.cards[45].hp;
        player1Attack = data.cards[55].attacks[0].damage;
        player2Attack = data.cards[45].attacks[0].damage;
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