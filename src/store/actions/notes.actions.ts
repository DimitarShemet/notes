import { createAction, props } from '@ngrx/store';
import { INote } from 'src/interfaces/notes.interface';

export const loadNotes = createAction(
  '[Notes Page] Load Notes',
  props<{ notes: INote[] }>()
);

export const loadCurrentNote = createAction(
  '[Notes Page] Load Current Note',
  props<{ id: number }>()
);
export const selectNoteById = createAction(
  '[Notes Page] Select Note',
  props<{ id: number }>()
);

export const addNote = createAction(
  '[Notes Page] Add Note',
  props<{ note: INote }>()
);
