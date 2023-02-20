import { Button } from './Button';
export class WindowsButton implements Button {
    render(): void {
        console.log('render windows Button');
    }

    onClick(f: () => void): void {
        f(); // do something
        console.log('windows button');
    }
}
