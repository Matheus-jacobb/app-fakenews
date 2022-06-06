import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsProxy } from '../../../../models/proxies/news.proxy';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private readonly newsService: NewsService,
  ) {
    this.route.params.subscribe(params => this.newsId = params['id']);
  }

  public newsId: number = 0;

  public news: NewsProxy;

  ngOnInit() {
    this.news = this.newsService.findOne(this.newsId);
    console.log(this.news)
  }

}
