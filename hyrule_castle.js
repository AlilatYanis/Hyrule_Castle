"use strict";
exports.__esModule = true;
var hpbarre_1 = require("./hpbarre");
var random_1 = require("./random");
var readline = require('readline-sync');
var fs = require('fs');
var randomPlayer = (0, random_1["default"])();
var rPlayer = fs.readFileSync("player.json", 'utf-8');
var playerName = JSON.parse(rPlayer);
for (var _i = 0, playerName_1 = playerName; _i < playerName_1.length; _i++) {
    var i = playerName_1[_i];
    if (i.rarity === randomPlayer) {
        var joueur = i;
    }
}
var player = {
    name: joueur.name,
    hp: joueur.hp,
    str: joueur.str
};
var playerhp = player.hp;
var monster = {
    name: 'Bokoblin',
    hp: 30,
    str: 5
};
var monsterhp = monster.hp;
var boss = {
    name: 'Ganon',
    hp: 150,
    str: 20
};
var bosshp = boss.hp;
for (var i = 1; i < 10; i += 1) {
    for (var j = 0; monsterhp > 0; j += 1) {
        ;
        console.log("\u001B[34m====== FIGHT ".concat(i, " ======\u001B[37m"));
        console.log("\u001B[31m".concat(monster.name, "\n HP:").concat(monsterhp, " ").concat((0, hpbarre_1["default"])(monsterhp, monster.hp).pv));
        console.log("\u001B[32m".concat(player.name, "\n HP:").concat(playerhp, "\u001B[37m ").concat((0, hpbarre_1["default"])(playerhp, player.hp).pv));
        FIGHT();
        playerhp = playerhp - monster.str;
        console.log("Monster deal you ".concat(monster.str, " damage"));
        if (playerhp > player.hp) {
            playerhp = player.hp;
        }
    }
    if (playerhp > 0) {
        console.log("Well Play !!!");
    }
    monsterhp = monster.hp;
    if (playerhp <= 0) {
        console.log("You lose☠️ ");
        process.exit();
    }
}
for (var f = 0; bosshp > 0; f += 1) {
    console.log("\u001B[31m====== LAST FIGHT ======\u001B[37m");
    console.log("\u001B[35m".concat(boss.name, "\n HP:").concat(bosshp, "\u001B[37m ").concat((0, hpbarre_1["default"])(bosshp, boss.hp).pv));
    console.log("\u001B[32m".concat(player.name, "\n HP:").concat(playerhp, "\u001B[37m ").concat((0, hpbarre_1["default"])(playerhp, player.hp).pv));
    FIGHTboss();
    playerhp = playerhp - boss.str;
    console.log("Boss deal you ".concat(boss.str, " damage"));
    if (playerhp > player.hp) {
        playerhp = player.hp;
    }
    if (playerhp <= 0) {
        console.log("You lose☠️ ");
        process.exit();
    }
}
console.log("✨Well Play you won✨");
function FIGHT() {
    var option = ['Attack Heal'];
    console.log('---Option-------');
    var select = readline.question('Attack-1  Heal-2\n');
    switch (select) {
        case '1': {
            monsterhp = monsterhp - player.str;
            console.log("You deal ".concat(player.str, " damage"));
            break;
        }
        case '2':
            {
                playerhp = playerhp + player.hp * 0.5;
                console.log("✨✨HEALINGGGGG!✨✨");
            }
            break;
    }
}
function FIGHTboss() {
    var option = ['Attack Heal'];
    console.log('---Option-------');
    var select = readline.question('Attack:1  Heal:2\n');
    switch (select) {
        case '1': {
            bosshp = bosshp - player.str;
            console.log("You deal ".concat(player.str, " damage"));
            break;
        }
        case '2':
            {
                playerhp = playerhp + player.hp * 0.5;
                console.log("✨✨HEALINGGGGG!✨✨");
            }
            break;
    }
}