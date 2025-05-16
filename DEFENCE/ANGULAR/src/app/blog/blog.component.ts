import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
    console.warn();
    
  }
}
