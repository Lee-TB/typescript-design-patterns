import GUIFactory, { Button, Checkbox } from './AbstractGUIFactory';

class Application {
    private factory: GUIFactory;
    private button!: Button;
    private checkbox!: Checkbox;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    createGUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    paint() {
        this.button.paint();
        this.checkbox.paint();
    }
}

export default Application;
