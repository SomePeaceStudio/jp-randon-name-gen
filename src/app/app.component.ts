import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent {
  symbols = ['a','e','i','o','u','ka','ke','ki','ko','ku','sa','se','shi','so','su','ta','te','chi','to','tsu','na','ne','ni','no','nu'];
  size = 5;
  word = "";
  generateWord(){
    this.word = "";
    let temp = ""
    for (let i = 0; i < this.size; i++) {
      // console.log(this.word);
      temp += this.symbols[Math.floor((Math.random()*this.symbols.length))];
    }
    this.word = temp;
    console.log(this.word);
  }
}
