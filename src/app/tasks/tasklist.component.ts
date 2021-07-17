import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let t of values">
      <div class="card m-2">
        <div class="m-1">
          <label class="m-1">{{ t.task }}</label>
          <button
            class="btn btn-primary floatRt m-1"
            (click)="_handleDelete(t)"
          >
            <i class="icon-trash"></i>
          </button>
          <button class="btn btn-primary floatRt m-1">
            <i [ngClass]="getClasses(t.isCompleted)"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .floatRt {
        float: right;
      }
    `
  ]
})
export class TaskListComponent {
  @Input() values;
  @Output() liftValue = new EventEmitter();

  completed: false;

  getClasses(completed) {
    if (completed !== false) {
      return 'icon-check-empty';
    }
    return 'icon-check';
  }
  _handleDelete(value) {
    this.liftValue.emit(value);
  }
}
