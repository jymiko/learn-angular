import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent implements OnInit {

  @Input() data:any[] = [];
  @Input() showCount = false;
  @Output() calCount = new EventEmitter<Number>()
  constructor()
  {

  }
  
  ngOnInit(): void {
    console.log(this.data)
    this.calCount.emit(this.data.length)
  }
}
