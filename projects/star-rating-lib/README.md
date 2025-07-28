# @ionic-snippets/star-rating

A flexible and customizable star rating component for Angular applications with Ionic support.

## Features

- ⭐ **Multiple Icon Types**: Support for stars, hearts, thumbs up, diamonds, squares, and circles
- 🎨 **Customizable**: Color, size, and styling options
- 📱 **Mobile Optimized**: Responsive design with touch-friendly interactions
- 🔧 **Editable/Read-only**: Toggle between interactive and display-only modes
- 📊 **Rating Display**: Optional rating text display
- 🚀 **Angular Signals**: Built with modern Angular signals for optimal performance
- 🎯 **Ionic Integration**: Seamless integration with Ionic components

## Installation

```bash
npm install @ionic-snippets/star-rating
```

## Usage

### Basic Usage

```typescript
import { StarRatingComponent } from '@ionic-snippets/star-rating';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [StarRatingComponent],
  template: `
    <star-rating 
      [rating]="3" 
      [maxRating]="5"
      (ratingChange)="onRatingChange($event)">
    </star-rating>
  `
})
export class ExampleComponent {
  onRatingChange(rating: number) {
    console.log('New rating:', rating);
  }
}
```

### Advanced Usage

```typescript
@Component({
  selector: 'app-advanced-example',
  standalone: true,
  imports: [StarRatingComponent],
  template: `
    <star-rating 
      [rating]="currentRating" 
      [maxRating]="10"
      [iconType]="'heart'"
      [size]="'large'"
      [color]="'#ff4081'"
      [emptyColor]="'#e0e0e0'"
      [editable]="true"
      [showRating]="true"
      (ratingChange)="onRatingChange($event)"
      (ratingClick)="onRatingClick($event)">
    </star-rating>
  `
})
export class AdvancedExampleComponent {
  currentRating = 7;

  onRatingChange(rating: number) {
    this.currentRating = rating;
  }

  onRatingClick(rating: number) {
    console.log('Rating clicked:', rating);
  }
}
```

## API Reference

### Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `rating` | `number` | `0` | Current rating value |
| `maxRating` | `number` | `5` | Maximum rating value |
| `iconType` | `'star' \| 'heart' \| 'thumbs-up' \| 'diamond' \| 'square' \| 'circle'` | `'star'` | Type of icon to display |
| `editable` | `boolean` | `true` | Whether the rating is editable |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the rating icons |
| `color` | `string` | `'#ffc107'` | Color of filled icons |
| `emptyColor` | `string` | `'#e0e0e0'` | Color of empty icons |
| `showRating` | `boolean` | `false` | Whether to show the rating text |

### Output Events

| Event | Type | Description |
|-------|------|-------------|
| `ratingChange` | `number` | Emitted when the rating value changes |
| `ratingClick` | `number` | Emitted when a rating icon is clicked |

## Icon Types

The component supports the following icon types:

- `star` - Star icons (default)
- `heart` - Heart icons
- `thumbs-up` - Thumbs up icons
- `diamond` - Diamond icons
- `square` - Square icons
- `circle` - Circle icons

## Size Options

- `small` - 16px icons
- `medium` - 20px icons (default)
- `large` - 24px icons

## Dependencies

This component requires the following peer dependencies:

- `@angular/common` ^20.0.0
- `@angular/core` ^20.0.0
- `@ionic/angular` ^8.0.0
- `ionicons` ^7.0.0

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you have any questions or need help, please open an issue on GitHub.
