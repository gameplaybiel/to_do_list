import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTask();
  }

  toggleTaskStatus(task: Task): void {
    this.taskService.updateTaskStatus(task.id, !task.completed);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTasks(task.id);
    this.tasks = this.tasks.filter(t => t.id !== task.id); // Remove a lista da tarefa
  }

}
