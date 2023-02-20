import { Checkbox } from '../Checkbox';

export class MacCheckbox implements Checkbox {
    paint(): void {
        console.log('paint Mac Checkbox');
    }
}
