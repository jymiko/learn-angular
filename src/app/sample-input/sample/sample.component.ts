import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterComponent } from '../../counter/counter.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent implements AfterViewInit {
  @ViewChild(CounterComponent, {static: true}) child?: CounterComponent;
  @ViewChild('button', {static: true}) buttonRef ?: ElementRef<HTMLButtonElement>;

  hero = {email: 'test@email.com'}

  public form:FormGroup
  constructor(private formData:FormBuilder){
    this.form = formData.group({
      email: formData.control({ value: this.hero.email, disabled: false}, {nonNullable: true, validators: [Validators.required, Validators.minLength(4)]}),
      password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(4)]})
    })
  }

  get email() {
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }
  
  submitForm(){
    console.log(this.form.controls['email'].errors)
    console.log(this.form.value)
  }

  addValue(){
    this.child?.increment()
  }

  removeValue(){
    this.child?.decrement()
  }

  ngAfterViewInit(): void {
    if(this.buttonRef?.nativeElement){
      // change button text
      this.buttonRef.nativeElement.innerHTML = 'changed button'
    }
  }
}
