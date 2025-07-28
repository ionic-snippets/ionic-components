import {
  Component,
  OnInit,
  input,
  output,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  star,
  heart,
  thumbsUp,
  diamond,
  square,
  radioButtonOff,
  starOutline,
  heartOutline,
  thumbsUpOutline,
  diamondOutline,
  squareOutline,
  radioButtonOffOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
})
export class StarRatingComponent implements OnInit {
  // Input Signals
  rating = input(0);
  maxRating = input(5);
  iconType = input('star');
  editable = input(true);
  size = input('medium');
  color = input('#ffc107');
  emptyColor = input('#e0e0e0');
  showRating = input(false);

  // Output Signals
  ratingChange = output<number>();
  ratingClick = output<number>();

  // Computed signals for derived values
  stars = computed(() => {
    const maxRating = this.maxRating();
    return Array.from({ length: maxRating }, (_, i) => i + 1);
  });

  constructor() {
    // Register the icons we need
    addIcons({
      star,
      'star-outline': starOutline,
      heart,
      'heart-outline': heartOutline,
      'thumbs-up': thumbsUp,
      'thumbs-up-outline': thumbsUpOutline,
      diamond,
      'diamond-outline': diamondOutline,
      square,
      'square-outline': squareOutline,
      'radio-button-off': radioButtonOff,
      'radio-button-off-outline': radioButtonOffOutline,
    });
  }

  ngOnInit() { }

  onStarClick(starIndex: number) {
    if (!this.editable()) return;

    this.ratingChange.emit(starIndex);
    this.ratingClick.emit(starIndex);
  }

  getIconName(starIndex: number): string {
    const isFilled = starIndex <= this.rating();
    const suffix = isFilled ? '' : '-outline';

    // Icon mapping with robust fallbacks
    const iconMap: { [key: string]: string } = {
      heart: `heart${suffix}`,
      'thumbs-up': `thumbs-up${suffix}`,
      diamond: `diamond${suffix}`,
      square: `square${suffix}`,
      circle: `radio-button-off${suffix}`,
      star: `star${suffix}`,
    };

    // If the icon doesn't exist in the map, use star as fallback
    return iconMap[this.iconType()] || `star${suffix}`;
  }

  getIconStyle(starIndex: number): any {
    return {
      color: starIndex <= this.rating() ? this.color() : this.emptyColor(),
      fontSize: this.getSizeValue(),
    };
  }

  getSizeValue(): string {
    switch (this.size()) {
      case 'small':
        return '16px';
      case 'large':
        return '24px';
      default:
        return '20px';
    }
  }

  getButtonSize(): string {
    switch (this.size()) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'default';
    }
  }
}
