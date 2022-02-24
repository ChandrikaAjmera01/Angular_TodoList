import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Input()
  i!: number;
  @Output() todoDelete :EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox :EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
     this.todoDelete.emit(todo);
     console.log("On click has been Triggered")
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
  }
}
