import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable,map, take } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  albumList: any;
  id: any;
  albumList$: any;
  
  
   constructor (private Service: ServiceService, private ActivatedRoute: ActivatedRoute) { 
    
    
  }
  
  isShowing: Boolean= false;
  ngOnInit() : void {
    // this.id = this.router.snapshot.params['userId']
    // this.id$ = this.router.params.pipe(map((params) => params['userId'])
    // )
    // // this.router.params.subscribe((params) => {this.id = params['userId']
    // })
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id')
    // this.getAlbumList()
      this.Service.getAlbumList().subscribe((result:any) => {
      this.albumList = result.filter((album:any) => this.id == album.userId)
    
  })

  // // getAlbumList() {
  // //   this.HttpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((result:any) => {
  // //     this.albumList = result
  // //   })
  // }

}
}