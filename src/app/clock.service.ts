import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from "rxjs/operators";

@Injectable()
export class ClockService {
  private time$: Observable<Date>;

  constructor() {
    this.time$ = timer(0, 1000).pipe(
      map(tick => new Date()),
      shareReplay(1)
    );
  }

  get time() {
    return this.time$;
  }
}
