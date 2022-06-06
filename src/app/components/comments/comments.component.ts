import { Component, Input, OnInit } from '@angular/core';
import { CommentProxy } from '../../../models/proxies/comment.proxy';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input()
  comment: CommentProxy;

  ngOnInit() {}

}
