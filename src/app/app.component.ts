import { Component, VERSION, Input } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService) {}

  _handleTaskAdd() {
    let Taskobj = {
      id: this.tasks.length,
      task: this.newTask,
      desc: '',
      date: '',
      isCompleted: false,
      tags: this.filterBy
    };
    this.tasks.push(Taskobj);
    this.Filteredtasks = this.tasks.filter(v => v.tags === this.filterBy);
    // this.toastr.success(Taskobj.task + ' is Created successfully');
    this.newTask = null;
  }
  _handleDeleteTask(value) {
    this.tasks = this.tasks.filter(v => v !== value);
    this.Filteredtasks = this.tasks.filter(v => v.tags === this.filterBy);
    // this.toastr.info(value.task + ' is removed successfully');
  }
  _handleCompletedTask(value) {
    let index = this.tasks.findIndex(v => v.id == value);
    this.tasks[index].isCompleted = true;
    this.tasks[index].tags = 'Completed';
    this.Filteredtasks = this.tasks.filter(v => v.tags === this.filterBy);

    // this.toastr.info(this.tasks[index].task + ' is Completed');
  }

  _handleFilter(filter) {
    this.filterBy = filter;
    this.Filteredtasks = this.tasks.filter(v => v.tags === filter);
    this.Filteredtasks.map(x => console.log(x.name));
  }
}
