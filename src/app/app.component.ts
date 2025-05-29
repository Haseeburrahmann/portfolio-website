import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

// Import your components
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Haseeb Ur Rahman Mohammad - Portfolio';

  ngOnInit(): void {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });

    // Set initial theme
    this.setInitialTheme();
  }

  private setInitialTheme(): void {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}