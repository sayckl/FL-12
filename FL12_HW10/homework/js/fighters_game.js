/* Your code goes here */
function Fighter(player) {
    let name = player.name;
    let damage = player.damage;
    let hp = player.hp;
    let strength = player.strength;
    let agility = player.agility;
    let wins = 0;
    let losses = 0;

    this.getName = () => {
        return name;
    }
    this.getDamage = () => {
        return damage;
    }
    this.getHealth = () => {
        return hp;
    }
    this.getStrength = () => {
        return strength;
    }
    this.getAgility = () => {
        return agility;
    }
    this.getName = () => {
        return name;
    }

    this.attack = (fighter) => {
        let magicNumber = 100;
        
        let miss_probability = fighter.getStrength() + fighter.getAgility();
        let attack_probability = Math.floor(Math.random() * magicNumber) + 1;

        if (attack_probability >= miss_probability) {
            fighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`);
        }else{
            console.log(`${fighter.getName()} attack missed`);
        }
    }

    this.logCombatHistory = () => {
        console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    }

    this.heal = (healthPoints) => { 
        let magicNumber = 100;
        hp = this.getHealth() + healthPoints > magicNumber ? magicNumber : hp + healthPoints; 
    }
    
    this.dealDamage = (hpDamage) => {
        hp = hp - hpDamage < 0 ? 0 : hp - hpDamage;
    }

    this.addWin = () => {
        wins++;
    }

    this.addLoss = () => {
        losses++;
    }
}

let battle = (fighter1, fighter2) => {
    if (fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
        while (fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        let losser = fighter1.getHealth() === 0 ? fighter1 : fighter2;
        let winner = fighter1.getHealth() !== 0 ? fighter1 : fighter2;
        losser.addLoss();
        winner.addWin();
        console.log(`${winner.getName()} has won!`);
    } else {
        let deadFighter = fighter1.getHealth() === 0 ? fighter1.getName() : fighter2.getName();
        console.log(`${deadFighter} is dead and can't fight.`);
    }
}

const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const myEnemy = new Fighter({name: 'Commodus', damage: 25, hp: 100, strength: 30, agility: 35});

battle(myFighter, myEnemy);
