import Player from "./Player";
import Monster from "./Monster";
import Boss from "./Boss"
import hpbarre from "./hpbarre";
import getRandom from "./random";
import profile from "./profile";

const readline = require('readline-sync');
const fs = require('fs');

let randomPlayer: number = getRandom();
const rPlayer = fs.readFileSync("player.json",'utf-8')

const playerName = JSON.parse(rPlayer);
for(let i of playerName) {
	if(i.rarity === randomPlayer) {
		var joueur = i;
	}
}
const player: Player = {
    name: joueur.name,
    hp: joueur.hp,
    str: joueur.str,
};
let playerhp = player.hp;
const monster: Monster = {
    name:'Bokoblin',
    hp: 30,
    str: 5,
}
let monsterhp =monster.hp;
const boss: Boss ={
	name:'Ganon',
	hp: 150,
	str: 20,
}
let bosshp = boss.hp



for (let i = 1 ; i < 10; i += 1){
    for(let j = 0 ; monsterhp >0 ; j += 1){;
    	console.log(`\x1b[34m====== FIGHT ${i} ======\x1b[37m`);
    	console.log(`\x1b[31m${monster.name}\n HP:${monsterhp} ${hpbarre(monsterhp,monster.hp).pv}`);
    	console.log(`\x1b[32m${player.name}\n HP:${playerhp}\x1b[37m ${hpbarre(playerhp,player.hp).pv}`);
    	FIGHT();
			playerhp = playerhp - monster.str;
			console.log(`Monster deal you ${monster.str} damage`);
			if (playerhp >player.hp){
				playerhp = player.hp
			}			
	}
	if(playerhp>0) {
		console.log(`Well Play !!!`); 
	}
	monsterhp = monster.hp;
	
	if( playerhp <= 0 ) {
		console.log("You lose☠️ ");
		process.exit();
	}
	}
	for(let f= 0 ; bosshp > 0 ; f += 1) {
		console.log(`\x1b[31m====== LAST FIGHT ======\x1b[37m`);
		console.log(`\x1b[35m${boss.name}\n HP:${bosshp}\x1b[37m ${hpbarre(bosshp,boss.hp).pv}`);
		console.log(`\x1b[32m${player.name}\n HP:${playerhp}\x1b[37m ${hpbarre(playerhp,player.hp).pv}`);
		FIGHTboss();
		playerhp = playerhp - boss.str;
			console.log(`Boss deal you ${boss.str} damage`);
			if (playerhp >player.hp){
				playerhp = player.hp
			}			
			if( playerhp <= 0 ) {
				console.log("You lose☠️ ");
				process.exit();
			}
	}
	
console.log("✨Well Play you won✨");
	function FIGHT(){ 
    const option = ['Attack Heal'];
		console.log('---Option-------')
    const select = readline.question('Attack-1  Heal-2\n');
    switch(select){
			case'1':{
      monsterhp =  monsterhp - player.str;
			console.log(`You deal ${player.str} damage`);
			break;
			}
			case'2':{
				playerhp  = playerhp + player.hp*0.5;
				console.log("✨✨HEALINGGGGG!✨✨");
			}
			break
		}
	}
	function FIGHTboss(){ 
		const option = ['Attack Heal'];
			console.log('---Option-------')
		const select = readline.question('Attack:1  Heal:2\n');
		switch(select){
				case'1':{
		  bosshp =  bosshp - player.str;
				console.log(`You deal ${player.str} damage`);
				break;
				}
				case'2':{
					playerhp  = playerhp + player.hp*0.5;
					console.log("✨✨HEALINGGGGG!✨✨");
				}
				break
			}
		}

