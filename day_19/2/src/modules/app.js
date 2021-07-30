import DonateForm from './donate-form';

export class App {
    run(){
        const form = new DonateForm();
        document.body.append(form.render());
    }
}