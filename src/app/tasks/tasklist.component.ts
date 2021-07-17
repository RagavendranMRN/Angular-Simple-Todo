import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let t of values">
      <div class="card m-3">
        <div class="card-body">
          {{ t }}

          <button class="btn btn-primary">
            <i class="icon-check-empty"></i>
          </button>
        </div>
      </div>
    </div>
  `
})
export class TaskListComponent {
  @Input() values;
  completed: false;
}
