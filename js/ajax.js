(function(){// <--------- comment out to use console.log
"use strict";

    //declaring api var
    let xhr = $.get('https://api.pokemontcg.io/v1/cards');
    // console.log(xhr);

    // document done function
    xhr.done(function(data) {
        console.log(data);
        let card1 = '';
        let card2 = '';
        let html = '';

        // looping though all data
        for(let i in data){
            card1 += `<img alt="" src="${data.cards[0].imageUrl}"/>`;
            card2 += `<img alt="" src="${data.cards[3].imageUrl}"/>`;
        } // end of for loop

        //passing to document
        $('#card1').html(card1);
        $('#card2').html(card2);
    }); // end of done function

})();