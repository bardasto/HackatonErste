import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {
  @Input() currentPoint: number = 0;  // Current progress value
  maxPoints: number = 5;               // Maximum points (5 in this case)

  // Method to calculate color based on progress
  getProgressColor(): string {
    const percentage = this.currentPoint / this.maxPoints;
    const red = Math.min(220, Math.floor(255 * percentage));
    const green = Math.min(150, Math.floor(255 * (1 - percentage)));
    return `rgb(${red}, ${green}, 0)`;
  }
}
