import DonateForm from './donate-form';
import DonateList from './donate-list';
import { calculateSumOfNumbers as sumOf } from '../core/utils/index';

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
  ];

const arrayForInitial = mockDonates.reduce((t,a) => {
    t.push(a.amount);
    return t;
},[]);
const initialAmount = sumOf(arrayForInitial);

export class App {
    constructor(){
        this.state = {
            donates: [...mockDonates],
            totalAmount: initialAmount
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