import { Component, VERSION, Input } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: any = [];
  Filteredtasks: any = [];
  newTask: any;
  filterBy: String = 'All';

  _handleTaskAdd() {
    let Taskobj = {
      id: this.tasks.length,
      task: this.newTask,
      desc: '',
      date: '',
      isCompleted: '',
      tags: this.filterBy
    };
    this.tasks.push(Taskobj);
    this.Filteredtasks = this.tasks.filter(v => v.tags === this.filterBy);
  }
  _handleDeleteTask(value) {
    this.tasks = this.tasks.filter(v => v !== value);
    this.Filteredtasks = this.tasks.filter(v => v.tags === this.filterBy);
  }

  _handleFilter(filter) {
    this.filterBy = filter;
    this.Filteredtasks = this.tasks.filter(v => v.tags === filter);
    this.Filteredtasks.map(x => console.log(x.name));
  }
}
