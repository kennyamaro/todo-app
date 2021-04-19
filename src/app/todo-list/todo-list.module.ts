import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    TasksComponent,
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoListModule { }
