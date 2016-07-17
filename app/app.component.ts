import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Customer App';
    name = 'BAM';
    bamColor = 'red';
    
    changeColor() {
        this.bamColor = this.bamColor === 'red' ? 'blue': 'red';
    }
 }
