import { Button } from './Button';

export abstract class Dialog {
    abstract createButton(): Button;
    render() {
        const okButton: Button = this.createButton();
        okButton.onClick(() => {
            console.log('click');
        });
        okButton.render();
    }
}
