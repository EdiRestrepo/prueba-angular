import {Component} from '@angular/core';

@Component({
selector: 'my-app',
template: `
<h1 #stuff>Hello {{name}} </h1>
<input type="text" [(ngModel)]="name">
<button (click)="reset()">Set Name as React</button>
`,
})

export class AppComponent {
    name='Angular';

    reset = () => this.name = 'React';
}