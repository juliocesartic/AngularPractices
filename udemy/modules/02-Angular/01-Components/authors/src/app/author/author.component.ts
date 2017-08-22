import { AuthorService } from './../author-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = "List of Authors."
  authors; 
  constructor(authorService : AuthorService) {
      this.authors = authorService.getAuthors();
   }

  ngOnInit() {
  }

}
