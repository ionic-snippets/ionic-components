import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { StarRatingComponent } from '@ionic-snippets/star-rating';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    StarRatingComponent
  ],
})
export class HomePage {
  // Demo ratings
  rating1: number = 3;
  rating2: number = 4;
  rating3: number = 2;
  rating4: number = 5;
  rating5: number = 1;

  onRatingChange(rating: number, ratingNumber: number): void {
    console.log(`Rating ${ratingNumber} changed to: ${rating}`);
    switch (ratingNumber) {
      case 1:
        this.rating1 = rating;
        break;
      case 2:
        this.rating2 = rating;
        break;
      case 3:
        this.rating3 = rating;
        break;
      case 4:
        this.rating4 = rating;
        break;
      case 5:
        this.rating5 = rating;
        break;
    }
  }

  onRatingClick(rating: number): void {
    console.log('Rating clicked:', rating);
  }
}
