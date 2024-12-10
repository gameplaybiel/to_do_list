import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  getTask(): Task[] {
    return this.tasks;
  }

  addTasks(task: Task): void{
    this.tasks.push(task);
  }

  updateTaskStatus(id: number, completed: boolean): void {
    const task = this.tasks.find((t) => t.id === id);
    if(task){
      task.completed = completed;
    }
  }

  deleteTasks(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
