import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/tasklist.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ToastrModule.forRoot()],
  declarations: [AppComponent, TaskListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
