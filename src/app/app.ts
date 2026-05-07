import { Component } from '@angular/core';
import { PostEditorComponent } from './post-editor/post-editor.component';

@Component({
  selector: 'app-root',
  imports: [PostEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
