import { Component, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataListComponent } from './data-list/data-list.component';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample-input/sample/sample.component';
import { SampleInputModule } from './sample-input/sample-input.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeModule, DataListComponent, FormsModule, SampleInputModule, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn';
  sanitizeValue:string | null = '';

  totalCount:number = 0
  showCount: boolean = true

  data = [{
    name: 'Sam Jonshon',
    dept: 'tech'
  },
  {
    name: 'Sam Yones',
    dept: 'agri'
  },
  {
    name: 'Sam York',
    dept: 'biology'
  }]

  showPage:boolean = true
  
  constructor(private _router:Router, private sanitizer:DomSanitizer){
    _router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        console.log(val.url)
        if(val.url == '/'){
          this.showPage = true
        }else{
          this.showPage = false
        }
      }
    })
  }

  onChangeTitle()
  {
    this.title = "Title";
  }

  calCount(count:Number){
    this.totalCount = this.totalCount + Number(count)
  }

  showCounter(){
    this.showCount = !this.showCount
  }
}
