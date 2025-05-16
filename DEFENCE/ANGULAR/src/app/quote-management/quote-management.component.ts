import { Component, OnInit } from '@angular/core';
import { QuoteManagementService } from './quote-management.service';

@Component({
  selector: 'app-quote-management',
  templateUrl: './quote-management.component.html',
  styleUrl: './quote-management.component.scss'
})
export class QuoteManagementComponent implements OnInit {
  title: string='';
  description: string='';
  startDate!: Date;
  endDate!: Date;

  constructor(private quoteManagementService: QuoteManagementService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  setQuote(): void {
    this.quoteManagementService.setQuote(this.title, this.description, this.startDate, this.endDate).subscribe(
      (response) => {
        alert('Quote set successfully:');
        // Reset form fields if needed
      },
      (error) => {
        alert('Failed to set quote:');
      }
    );
  }
}
