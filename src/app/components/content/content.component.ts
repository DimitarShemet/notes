import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCurrentNote } from 'src/store/actions/notes.actions';
import { selectNote } from 'src/store/selectors/notes-selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  note$ = this.store.select(selectNote);

  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((val) => {
      console.log(val.id);
      this.store.dispatch(loadCurrentNote({ id: +val.id }));
    });
  }
}
