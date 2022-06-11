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

  public ratingCommentText: string = '';

  // 0:true ; 1: false; 2: neutro
  public ratingCommentChecked: number = 3;

  public ratingChecked: number = 3;

  public disableFakeRating: boolean = false;
  public disableRealRating: boolean = false;

  ngOnInit() {
    this.news = this.newsService.findOne(this.newsId);
  }

  public ratingComment(option: number) {
    this.ratingCommentChecked = option;
  }

  public rating(option: number) {
    if (option === 0) {
      this.news.fakeRating++;
      this.disableRealRating = false;
      this.disableFakeRating = true;

      if (this.ratingChecked !== 3) {
        this.news.realRating--;
      }
    }

    if (option === 1) {
      this.news.realRating++;
      this.disableRealRating = true;
      this.disableFakeRating = false;

      if (this.ratingChecked !== 3) {
        this.news.fakeRating--;
      }
    }

    this.newsService.updateOne(this.newsId, { ...this.news });
    this.ratingChecked = option;
  }

  public saveRating(): void {
    if(this.ratingCommentChecked === 3)
      return

    if(this.news.comments){
      this.news.comments.push({
        name: 'Matheus Jacob',
        description: this.ratingCommentText,
        rating: this.ratingCommentChecked === 1,
        profileImage: 'https://i.pinimg.com/736x/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg',
      });
    }
    else{
      this.news.comments = [{
        name: 'Matheus Jacob',
        description: this.ratingCommentText,
        rating: this.ratingCommentChecked === 1,
        profileImage: 'https://i.pinimg.com/736x/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg',
      }];
    }
    this.ratingCommentText = '';
    this.newsService.updateOne(this.newsId, this.news);
  }
}
