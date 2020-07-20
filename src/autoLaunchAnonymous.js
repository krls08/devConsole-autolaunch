'use strict';

class clickEv{
    constructor(){
        this.btn;
        this.kbEv = new KeyboardEvent('keydown',{bubbles:true,
                                                    ctrlKey:true,
                                                    keyCode:69});
        this.setup();

    }
    // setup
    setup = async () =>{
        this._openAnon();
        await this._sl(3000);
        this._closeAnon();
        this.btn = document.querySelector('#button-1188-btnEl');
    }
    _openAnon = () =>{
        document.body.dispatchEvent(this.kbEv);
    }
    _closeAnon = () =>{
        const close = document.querySelector('#tool-1820-toolEl');
        close.click();
    }
    // sleep method -> Run in Async!
    _sl = (ms) => {
        return new Promise(resolve => setTimeout(resolve,ms));
    }
    // launch the main method
    start = async (iterations, timeAfterClick = 50000, toShowScript = 4000) => {
        for(let i = 0; i < iterations; i++){
            document.body.dispatchEvent(this.kbEv);
            await this._sl(toShowScript);
            this.btn.click();
            await this._sl(timeAfterClick);
            console.log('iteration: ', i);
        }
    }
    // silent method -> do not show the scripting window
    silentLaunch = async (iterations, timeAfterClick = 50000) => {
        for(let i = 0; i < iterations; i++){
            this.btn.click();
            await this._sl(timeAfterClick);
            console.log('iteration: ', i);
        }
    }
}

let anonFunc = new clickEv();

//anonFunc.start(3,5000,3000);
//anonFunc.start(3,4000);
//anonFunc.silentLaunch(3,6000);

