import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @ViewChild('add_task') addTask: any = ''; 
  title = 'To-Do List';
  subtitle = 'A place to store your todos';
  label = 'Enter a new task:';
  public taskItems: Todo[] = [];
  public displayTaskItems: Todo[] = [];
  public todo: Todo = {
    task: '',
    completed: false
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.taskItems);
  }

  newTaskAdded(newTask: string) {
    if(newTask.trim().length != 0) {
      this.taskItems.push({
        task: newTask,
        completed: false
      });
      this.copyTaskItems();
    }
    this.addTask.nativeElement.value = '';
  }

  removeTask(todo: Todo) {
    this.taskItems = this.taskItems.filter(item => item !== todo);
    this.copyTaskItems();
    console.log(this.taskItems);
  }

  completeTask(todo: Todo) {
    this.taskItems = this.taskItems.map(item => item === todo ? {...item, completed: true} : item);
    this.copyTaskItems();
    console.log(this.taskItems);
  }
  
  copyTaskItems() {
    this.displayTaskItems = this.taskItems;
  }

  filterTodos(value: string) {
    console.log(value, this.displayTaskItems);
    this.displayTaskItems = this.taskItems.filter(item => item.task.toLowerCase().includes(value.toLocaleLowerCase()));
  }
}
