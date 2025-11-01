import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world-component',
  imports: [CommonModule],
  templateUrl: './hello-world-component.html',
  styleUrl: './hello-world-component.css',
})
export class HelloWorldComponent {
  title = 'Hello Fadly Atthoriq!';
  message = 'Welcome to your first Angular app';
  number = [1, 2, 3, 4, 5];



  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  userInput = '';
  handleInput(value: string): void {
    this.userInput = value;
  }

  clickCount = 0;
  handleClick() {
    this.clickCount++;
  }
}
