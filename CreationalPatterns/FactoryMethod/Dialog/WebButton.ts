import { Button } from './Button';
export class WebButton implements Button {
    render(): void {
        console.log('redner web button');
    }

    onClick(f: () => void): void {
        f();
        console.log('web button');
    }
}
