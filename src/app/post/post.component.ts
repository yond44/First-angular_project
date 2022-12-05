import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-album',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postList: any;
  id: any;
  albumList$: any;

  constructor(
    private Service: ServiceService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['userId']
    // this.id$ = this.router.params.pipe(map((params) => params['userId'])
    // )
    // // this.router.params.subscribe((params) => {this.id = params['userId']
    // })
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    // this.getAlbumList()
    this.Service.getPostList().subscribe((result: any) => {
      this.postList = result.filter((post: any) => this.id == post.userId);
    });

    // // getAlbumList() {
    // //   this.HttpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((result:any) => {
    // //     this.albumList = result
    // //   })
    // }
  }
}
