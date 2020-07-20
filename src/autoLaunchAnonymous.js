// Assing button to click element
const exec = document.querySelector('#button-1188-btnEl');

// create keyboard event ctrl + e
const kbEv = new KeyboardEvent('keydown',{bubbles:true, ctrlKey:true, keyCode:69});

// create a sleep function
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve,ms));
}

class clickEv{
    constructor(button,ev){
        this.btn = button;
        this.kbEv = ev;
    }
    // sleep method
    sl = (ms) => {
        return new Promise(resolve => setTimeout(resolve,ms));
    }
    // launch the main function
    start = async (iterations, toShowScript = 4000, timeAfterClick = 50000) => {
        for(let i = 0; i < iterations; i++){
            document.body.dispatchEvent(this.kbEv);
            await this.sl(toShowScript);
            this.btn.click();
            await this.sl(timeAfterClick);
            console.log('iteration: ', i);
        }
    }
}
anonFunc = new clickEv(exec,kbEv);

anonFunc.start(3);
