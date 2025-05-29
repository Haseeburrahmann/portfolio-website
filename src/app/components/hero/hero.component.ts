import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;

  private typedInstance: any;
  private typingInterval: any;
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  
  // Professional titles to cycle through
  private titles = [
    'Software Developer',
    '.NET & Angular Expert', 
    'Full-Stack Developer',
    'Azure Cloud Specialist',
    'Microservices Architect'
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
      offset: 100
    });
  }

  ngAfterViewInit(): void {
    // Start typing animation after view is initialized
    setTimeout(() => {
      this.startTypingAnimation();
    }, 1500); // Delay to sync with other animations
  }

  ngOnDestroy(): void {
    // Clean up intervals
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  /**
   * Custom typing animation implementation
   */
  private startTypingAnimation(): void {
    if (!this.typedElement?.nativeElement) return;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    this.typingInterval = setInterval(() => {
      const currentTitle = this.titles[this.currentTextIndex];
      const element = this.typedElement.nativeElement;

      if (!this.isDeleting) {
        // Typing
        element.textContent = currentTitle.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;

        if (this.currentCharIndex === currentTitle.length) {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            this.isDeleting = true;
          }, pauseTime);
        }
      } else {
        // Deleting
        element.textContent = currentTitle.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;

        if (this.currentCharIndex === 0) {
          // Finished deleting, move to next title
          this.isDeleting = false;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.titles.length;
        }
      }
    }, this.isDeleting ? deleteSpeed : typeSpeed);
  }

  /**
   * Scroll to a specific section
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Download resume functionality
   */
  downloadResume(): void {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'assets/data/Haseeb_Rahman_Resume.pdf';
    link.download = 'Haseeb_Ur_Rahman_Mohammad_Resume.pdf';
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Track download event
    this.trackEvent('resume_download', {
      source: 'hero_section',
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Track user interactions (for analytics)
   */
  private trackEvent(eventName: string, eventData: any): void {
    // Implementation for analytics tracking
    console.log(`Event: ${eventName}`, eventData);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, eventData);
    
    // Example: Custom analytics
    // this.analyticsService.trackEvent(eventName, eventData);
  }

  /**
   * Handle social link clicks
   */
  onSocialClick(platform: string, url: string): void {
    this.trackEvent('social_link_click', {
      platform: platform,
      url: url,
      source: 'hero_section'
    });
    
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Handle CTA button clicks
   */
  onCTAClick(action: string): void {
    this.trackEvent('cta_click', {
      action: action,
      source: 'hero_section'
    });

    if (action === 'view_work') {
      this.scrollToSection('projects');
    } else if (action === 'download_resume') {
      this.downloadResume();
    }
  }

  /**
   * Handle scroll indicator click
   */
  onScrollDown(): void {
    this.scrollToSection('about');
    this.trackEvent('scroll_indicator_click', {
      source: 'hero_section'
    });
  }
}