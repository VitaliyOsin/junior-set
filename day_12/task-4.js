const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject){
        const self = this;
        const army = Object.keys(this).filter(f => typeof(self[f]) !== 'function');
        let chanses = 0;
        army.forEach(v => {
            this[v] > defenderObject[v] && (chanses += 1);
        });
        return [chanses, army.length];
    },
    improveArmy(){
        const self = this;
        const army = Object.keys(this).filter(f => typeof(self[f]) !== 'function');
        army.forEach(v => {
            this[v] += 5;
        });
    },
    attack(defenderObject){
        const ratio = this.checkChancesToWin(defenderObject);
        const percent = ratio[0]/ratio[1]*100;
        if(percent<70){
            alert(`Наши шансы равны ${ratio[0]}/${ratio[1]}. Необходимо укрепление!`);
            this.improveArmy();
        }else{
            alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
    }
 }
  
 const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
 }

 attacker.attack(defender);
 attacker.attack(defender);
 attacker.attack(defender); 

 const car = {
     name: 'Audi',
     drive: () => {
         console.log(this);
     }
 }

 const drive = car.drive;

 drive();
