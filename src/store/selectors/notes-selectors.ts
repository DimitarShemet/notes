import { createSelector } from '@ngrx/store';
import { INote } from 'src/interfaces/notes.interface';
interface State {
  notesState: {
    notes: INote[];
    currentNote: INote;
  };
}

export const selectNotesSelector = (state: State) => state.notesState;

export const selectNotes = createSelector(
  selectNotesSelector,
  (state) => state.notes
);
export const selectNote = createSelector(
  selectNotesSelector,
  (state) => state.currentNote
);
