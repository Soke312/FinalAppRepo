import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoItems=['Finish homework', 'Pick up kids from school', 'Complete project execution list', 'Take out Sarge!',
              'Turn in week 9 assignment!'];

}
