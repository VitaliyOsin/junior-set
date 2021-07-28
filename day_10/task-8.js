function getRandomNumberInRange(){
    return Math.random() >= 0.5 ? 1 : 0;
}

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy : function(enemy){
        enemy.health -= 10;
    }
}

const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: function(hero){
        hero.health -= 10;
    }
}

const startGame = (hero, enemy) => {
    while(hero.health > 0 && enemy.health > 0){   
        const n = getRandomNumberInRange();    
        n === 0 ? hero.heatEnemy(enemy) : enemy.heatHero(hero);
        console.log(`N: ${n}`);
        console.log(`hero: ${hero.health}, enemy: ${enemy.health}`);
    }
    const winner = hero.health > enemy.health ? hero : enemy;
    const name = winner.name;
    const health = winner.health;
    
    alert(`${name} победил! У него осталось ${health} здоровья`);
}

startGame(hero, enemy);