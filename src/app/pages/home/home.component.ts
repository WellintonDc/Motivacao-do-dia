import { Component } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any = {};

  constructor(
    private readonly feed: FeedService,
  ) {}

  ngOnInit() {
    this.loadFeed();
  }

  loadFeed(): void {
    this.feed.load()
    .subscribe({
      next: (response:any) =>{
        const {q: frase, a: autor} = response[0];
        this.data = {
          frase,
          autor,
        };
      }
    });
  }
  newPhrase(): void {
    this.loadFeed();
  }
}
