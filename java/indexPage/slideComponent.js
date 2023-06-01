


class SliderComponent extends HTMLElement{
    constructor(){
        super();
    };
    connectedCallBack(){
        this.innerHTML = `<h1> اهلا بالعالم</h1>`
    }
}

window.customElements.define("slider-component",SliderComponent)