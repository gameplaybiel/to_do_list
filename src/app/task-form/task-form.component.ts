import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskTitle: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(): void {
    if(this.taskTitle.trim()) {
      this.taskService.addTasks({
        id: Date.now(), // Usando   timestamp como ID
        title: this.taskTitle,
        completed: false,
      });
      this.taskTitle = ''; // Limpar o título
    }
  }

}
