import DonateForm from './donate-form';
import DonateList from './donate-list';

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
 ];

export class App {
    run(){
        const form = new DonateForm();
        const donateList = new DonateList(mockDonates);
        document.body.append(form.render(), donateList.render());
    }
}