import { Button } from '../Button';

export class WinButton implements Button {
    paint(): void {
        console.log('paint Win Button');
    }
}
