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

  constructor() {}

  // prio 1-High,2- Medium, 3 - Low
  _handleTaskAdd() {
    let Taskobj = {
      id: this.tasks.length,
      task: this.newTask,
      desc: '',
      date: '',
      prio: '',
      isCompleted: false,
      tags: this.filterBy
    };
    this.tasks.push(Taskobj);
    this._handleFilter(this.filterBy);
    this.newTask = null;
  }
  _handleDeleteTask(value) {
    this.tasks = this.tasks.filter(v => v !== value);
    this._handleFilter(this.filterBy);
  }
  _handleCompletedTask(value) {
    let index = this.tasks.findIndex(v => v.id == value);
    this.tasks[index].isCompleted = true;
    this.tasks[index].tags = 'Completed';
    this._handleFilter(this.filterBy);
  }

  _handleFilter(filter) {
    this.filterBy = filter;
    this.Filteredtasks = this.tasks.filter(v => v.tags === filter);
  }

  _handlePriortiyTask(ChangedPrio) {
    let index = this.tasks.findIndex(v => v.id == ChangedPrio.id);
    this.tasks[index].prio = ChangedPrio.prio;
    this.tasks[index].tags = 'Order';
    this._handleFilter(this.filterBy);
  }
}
