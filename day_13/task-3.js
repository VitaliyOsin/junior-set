class CarService{

    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
     }

    constructor(name,workingHours){
        this.name = name;
        this.workingHours = workingHours || {from: CarService.DefaultWorkingHours.from, till: CarService.DefaultWorkingHours.till};
    }

    repairCar(carName){
        if(!carName){
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
            return;
        }else{
            const hour = new Date().getHours();
            const from = Number(this.workingHours.from.split(':')[0]);
            const till = Number(this.workingHours.till.split(':')[0]);
            if(hour >= from && hour <= till){
                alert(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
            }else{
                alert('К сожалению, мы сейчас закрыты. Приходите завтра');
            }
        }
    }
}


const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');

const carService2 = new CarService('Voyage', {from: '8:00', till: '24:00'});
carService2.repairCar('Toyota Raum');