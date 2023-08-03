import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addNote, selectNoteById } from 'src/store/actions/notes.actions';
import { selectNotes } from 'src/store/selectors/notes-selectors';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  $notes = this.store.select(selectNotes);
  newNoteForm: FormGroup | undefined;
  modalIsOpened: boolean = false;

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.newNoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  openNote(id: number) {
    this.store.dispatch(selectNoteById({ id }));
  }

  togglePopUp() {
    this.modalIsOpened = !this.modalIsOpened;
  }
  saveNote() {
    this.store.dispatch(
      addNote({
        note: {
          ...this.newNoteForm?.getRawValue(),
        },
      })
    );
    this.togglePopUp();
    this.newNoteForm.reset();
  }
}
