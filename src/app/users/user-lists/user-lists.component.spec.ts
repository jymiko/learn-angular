import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListsComponent } from './user-lists.component';
import { HttpClientModule } from '@angular/common/http';

describe('UserListsComponent', () => {
  let component: UserListsComponent;
  let fixture: ComponentFixture<UserListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [UserListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
