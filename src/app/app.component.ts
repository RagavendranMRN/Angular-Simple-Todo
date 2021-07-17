import { Component, VERSION } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: any = [];
  newTask: any;
  name = 'Angular ' + VERSION.major;

  _handleTaskAdd() {
    this.tasks.push(this.newTask);
  }
}
