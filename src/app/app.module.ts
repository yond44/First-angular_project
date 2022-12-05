import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumComponent } from './album/album.component';

import { CommentsComponent } from './comments/comments.component';
import { PostComponent } from './post/post.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    AlbumComponent,
    CommentsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
