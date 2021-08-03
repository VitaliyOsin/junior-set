import DonateForm from './donate-form';
import DonateList from './donate-list';

export class App {
    constructor(){
        this.state = {
            donates: [],
            totalAmount: 0
        };
        this.form = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.donateList = new DonateList(this.state.donates);
    }
    createNewDonate(newDonate){
        this.state.donates.push(newDonate);
        this.state.totalAmount += newDonate.amount;
        this.donateList.updateDonates(this.state.donates);
        this.form.updateTotalAmount(this.state.totalAmount);
    }
    run(){       
        document.body.append(this.form.render(), this.donateList.render());
    }
}