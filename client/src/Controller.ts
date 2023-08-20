import {themeModes} from './Constants';

class Controller {
     private static instance: Controller;

     private bLoggedIn: boolean;
     private themeMode: string;

     private constructor() {
        this.bLoggedIn = false;
        this.themeMode = themeModes.DARK;
     }

     public static getInstance(): Controller {
        if (!Controller.instance) {
            Controller.instance = new Controller();
        }

        return Controller.instance
     } 

     
}

export default Controller;



