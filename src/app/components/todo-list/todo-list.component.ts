import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'ta-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  removeButtonText="Remove";

  @Input() list = [];

  @Output() itemDeleted = new EventEmitter<any>();
  @Output() allDeleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  indexOfListItem(index)
  {
    this.itemDeleted.emit(index);
    console.log(index + " Emitted.");
  }

  deleteAll()
  {
    this.allDeleted.emit(true);
  }

  markAsDone(index)
  {
    
    this.list[index].done = true;
    
    let markStyle = {
      "color": "green"

    };

    console.log("Marked");
  }

  setStyles(i)
  {
    let styles = {
      "color": this.list[i].done ? "#00b300" : "white"
    }
    return styles;
  }

  markAllDone()
  {
    for(let i=0; i<this.list.length; i++)
    {
      this.markAsDone(i);
    }
  }
}
