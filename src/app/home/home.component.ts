import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  attackUrl = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}
