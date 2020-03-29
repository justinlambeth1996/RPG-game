characters = {
    "bengalboy":{


    }

var bengalboy = {
    HP: 110,
    attack: 6,
    counterattack: 15,
    maxHP: 110
};
var savannahboy = {
    HP: 120,
    attack: 8,
    counterattack: 20,
    maxHP: 120
};
var siameseboys = {
    HP: 160,
    attack: 12,
    counterattack: 22,
    maxHP: 160
};
}

var player1 = "";
var player2 = "";
var player1Obj;
var player2Obj;

$(document).ready(function() {

    var renderCharacter = function(character, renderArea) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src",character.imageUrl);
        var charHP = $("<div class='characterHP'>").text(character.HP);
        charDiv.append(charName).append(charImage).append(charHP);
        $(renderArea).append(charDiv);
    }

    $("#character-section").on("click", ".character", function(){
        var name = $(this).attr("data-name");

        if(!player1) {

            player1 = characters[name];

            for (var i = 0; i < characters.length; i++) {
                if (characters[name] !== name){
                    combatants.push(characters[i]);
                }
            }
        }

        $("#characters-section").hide();

        renderCharacter

    })




    
    $(this).on("click", ".card", function (event) {
        player1 = event.currentTarget.attributes.value.value;
        console.log(player1)
    })
    if (player1 === "savannah-boy") {
        player1Obj = savannahboy;
        player2Obj = bengalboy;
    } else {
        player1Obj = bengalboy;
        player2Obj = savannahboy;
    }

    $("button").on("click", function() {
        console.log("buttonWorking")
        player1Obj.HP -= player1Obj.attack;
        player2Obj.HP -= player2Obj.attack;
        console.log(player1Obj.HP)
        $(`.${player1}`).text(`HP: ${player1Obj.HP}`);
        $(`.${player2}`).text(`HP: ${player2Obj.HP}`);
        if (player1Obj.HP <= 0) {
            alert(`${player1} has lost`)
            clearcards()
        }
        if (player2Obj <= 0) {
            alert(`${player1} has won`)
            clearcards()
        }
        function clearcards() {
            $(`.${player1}`).text(`HP: ${player1Obj.maxHP}`);
            $(`.${player2}`).text(`HP: ${player2Obj.maxHP}`);
            player1Obj.HP = player1Obj.maxHP
            player2Obj.HP = player2Obj.maxHP
        }
    })
}) 

