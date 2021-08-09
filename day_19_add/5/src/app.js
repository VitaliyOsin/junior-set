class DaysTill {
    constructor(){
        this.date;
        this.dateName;
    }

    #getDate(tillDate){
        const deltaDate = tillDate - Date.now();
        return deltaDate;
    }

    #getDays(time){
        Number.prototype.donext = function(fn){
            return fn(this);
        }
        const objTime = {};
        time
            .donext(v => {
                objTime.d = parseInt(v/86400000);
                return v%86400000;
            })
            .donext(v => {
                objTime.h = parseInt(v/3600000);
                return v%3600000;
            })
            .donext(v => {
                objTime.m = parseInt(v/60000);
                return v%60000;
            })
            .donext(v => {
                objTime.s = parseInt(v/1000);
                return v;
            })
            .donext(v => {
                objTime.name = this.dateName;
                return v;
            })
        return objTime;
    }

    #render(point){
        const div = document.createElement('div');
        const t = this.#getDays(this.#getDate(new Date(this.date).getTime()));
        div.textContent = `Осталось до события: "${t.name}" Дней: ${t.d}, часов: ${t.h}, минут: ${t.m}, секунд: ${t.s}`;       
        point.innerHTML = '';
        point.append(div);
    }

    run(point){
        this.date = prompt('Введите дату Вашего события в формате dd.mm.yyyy').split('.').reverse().join(',');       
        this.dateName = prompt('Введите название Вашего события');
        this.#render(point);
        setInterval(() => {this.#render(point)}, 1000);
    }
}