import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadNotes } from 'src/store/actions/notes.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  title = 'notes';
  notes = [
    { id: 1, title: 'Заметка 1', content: 'Контент заметки 1' },
    { id: 2, title: 'Заметка 2', content: 'Контент заметки 2' },
    { id: 3, title: 'Заметка 3', content: 'Контент заметки 3' },
    { id: 4, title: 'Заметка 4', content: 'Контент заметки 4' },
    { id: 5, title: 'Заметка 5', content: 'Контент заметки 5' },
  ];

  ngOnInit(): void {
    this.store.dispatch(loadNotes({ notes: this.notes }));
  }
}
