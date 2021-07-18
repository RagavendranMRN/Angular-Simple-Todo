import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let t of values">
      <div class="card m-2">
        <div class="m-1">
          <label class="m-1" [ngClass]="getPrio(t.prio)">{{ t.task }}</label>
          <button class="btn btn-danger floatRt m-1" (click)="_handleDelete(t)">
            <i class="icon-trash"></i>
          </button>
          <button
            class="btn btn-primary floatRt m-1"
            (click)="_handleCompleted(t.id)"
          >
            <i [ngClass]="getClasses(t.isCompleted)"></i>
          </button>
          <button
            class="btn btn-primary floatRt m-1"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="icon-th-list"></i>
          </button>
          <div class="dropdown-menu">
            <div class="container">
              <input type="date" class="form-control" [(ngModel)]="t.date" />
            </div>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item">Postpone</a>
            <div role="separator" class="dropdown-divider"></div>

            <div
              style="  
                        margin-left: auto;
                        margin-right: auto;
                        text-align: center;
                        "
            >
              <label style="color: grey; float: left; margin: 10px;"
                >Priority</label
              >
              <br /><br />

              <a
                style="color: red;margin: 10px;cursor: pointer;"
                title="High"
                (click)="_handlePrio(t, 1)"
                >!!!</a
              >
              <a
                style="color: orange;margin: 10px;cursor: pointer;"
                title="Medium"
                (click)="_handlePrio(t, 2)"
                >!!</a
              >
              <a
                style="color: green;margin: 10px;cursor: pointer;"
                title="Low"
                (click)="_handlePrio(t, 3)"
                >!</a
              >
              <a
                style="color: grey;margin: 10px;cursor: pointer;"
                title="Not Priority"
                (click)="_handlePrio(t, null)"
                >!!!</a
              >
            </div>
          </div>
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
  @Output() liftDelValue = new EventEmitter();
  @Output() liftPrio = new EventEmitter();

  completed: false;

  getClasses(completed) {
    if (completed === false) {
      return 'icon-check-empty';
    }
    return 'icon-check';
  }

  getPrio(prio) {
    if (prio === 1) return 'text-danger';
    else if (prio === 2) return 'text-warning';
    else if (prio == 3) return 'text-success';
  }
  _handleDelete(value) {
    this.liftValue.emit(value);
  }
  _handleCompleted(value) {
    this.liftDelValue.emit(value);
  }
  _handlePrio(t, value) {
    let obj = {
      id: t.id,
      prio: value
    };
    this.liftPrio.emit(obj);
  }
}
