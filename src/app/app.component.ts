import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteService } from './note.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [NoteService, HttpClientModule],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-project';

  constructor(private noteService:NoteService){}

  saveNote(){
    this.noteService.saveNote().subscribe(data => {
      console.log(data)
    })
  }
}
