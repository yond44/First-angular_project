import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  comments: any;
  id: any;
  albumList$: any;

  constructor(
    private Service: ServiceService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.Service.getComments().subscribe((result: any) => {
      this.comments = result.filter(
        (comment: any) => this.id == comment.postId
      );
    });
  }
}
