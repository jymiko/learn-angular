import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  attackUrl = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  @ViewChild('inputText') input!: ElementRef;
  
  buttonAlert(){
    let input = this.input.nativeElement as HTMLInputElement;

    alert(input.value);
  }
}
