import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { HighlightDirective } from './highlight.directive';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,ArticleCommentsComponent,HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-tutorial';
  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('Singh')
  })
}
