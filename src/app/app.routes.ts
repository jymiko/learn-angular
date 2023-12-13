import { Routes } from '@angular/router';
import { SampleInputModule } from './sample-input/sample-input.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: HomeComponent},
  // {path: 'sample', component: SampleInputModule},
  {path: 'sample', loadChildren: () => import('./sample-input/sample-input.module').then((m) => m.SampleInputModule)},
  {
    path:'users',
    loadChildren: () =>  import('./users/users.module').then((m) => m.UsersModule)
  },
  {
    path:'dynamic-form',
    loadChildren: () =>  import('./dynamic-form/dynamic-form.module').then((m) => m.DynamicFormModule)
  }
];
