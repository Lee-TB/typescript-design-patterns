import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { GUIFactory } from '../GUIfactory';
import { MacButton } from './MacButton';
import { MacCheckbox } from './MacCheckBox';

export class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}
