import { Action, createReducer, on } from '@ngrx/store';
import * as NotesActions from '../actions/notes.actions';
import { INote } from 'src/interfaces/notes.interface';

export const initialState: IState = {
  notes: [],
  currentNote: null,
};

export interface IState {
  notes: INote[];
  currentNote: INote;
}
const notesReducer = createReducer(
  initialState,
  on(NotesActions.loadNotes, (state, { notes }) => ({
    ...state,
    notes: notes,
  })),

  on(NotesActions.loadCurrentNote, (state, { id }) => ({
    ...state,
    currentNote: state.notes.find((elem) => elem.id === id),
  })),

  on(NotesActions.selectNoteById, (state, { id }) => ({
    ...state,
    currentNote: state.notes.find((elem) => elem.id === id),
  })),
  on(NotesActions.addNote, (state, { note }) => ({
    ...state,
    notes: [...state.notes, { id: state.notes.length + 1, ...note }],
  }))
);

export function reducer(state: IState | undefined, action: Action) {
  return notesReducer(state, action);
}
