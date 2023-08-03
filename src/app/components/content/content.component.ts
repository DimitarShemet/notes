import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCurrentNote } from 'src/store/actions/notes.actions';
import { selectNote } from 'src/store/selectors/notes-selectors';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  note$ = this.store.select(selectNote);

  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((val) => {
      console.log(val.id);
      this.store.dispatch(loadCurrentNote({ id: +val.id }));
    });
  }
}
