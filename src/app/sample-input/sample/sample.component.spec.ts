import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent } from './sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        SampleComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
