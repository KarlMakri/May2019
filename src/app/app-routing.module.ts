import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {'path':'list','component':ListComponent},
  {'path':'','component':ListComponent},
  {'path':'user','component':UserComponent},
  {'path':'detail/:key','component':DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
