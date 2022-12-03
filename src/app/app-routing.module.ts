import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  {path:'home', component:  UserListComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'album/:id', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
