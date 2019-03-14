import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxPivotGridModule } from 'devextreme-angular/ui/pivot-grid';
import { Service as CommitsService } from './pages/display-data/commits.service';


const routes: Routes = [
  {
    path: 'home',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxPivotGridModule],
  providers: [AuthGuardService, CommitsService],
  exports: [RouterModule],
  declarations: [HomeComponent, DisplayDataComponent]
})
export class AppRoutingModule { }