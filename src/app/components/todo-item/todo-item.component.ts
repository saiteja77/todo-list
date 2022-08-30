import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = {
    task: '',
    completed: false
  };

  @Output() complete = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(todo: Todo) {
    this.remove.next(todo);
  }

  completeTask(todo: Todo) {
    this.complete.next(todo);
  }

}
