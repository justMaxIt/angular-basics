import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42
  obj = { a: 1, b: { c: 2 } }

  inputValue = ''

  // img = 'https://telegra.ph/file/ea145e37cbe1e95db8c14.png'

  constructor() {
    // setTimeout(() => {
    //   console.log("over");
    //   this.img = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    // }, 3000)
  }

  onInput(event: any) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue = str
  }

}
