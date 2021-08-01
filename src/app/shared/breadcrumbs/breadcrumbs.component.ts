import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy{
  public title: string = '';
  public titleObserv$: Subscription;

  constructor(private router: Router) {
    this.titleObserv$ = this.getDataRuta().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }
  ngOnDestroy(): void {
    this.titleObserv$.unsubscribe();
  }

  getDataRuta() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      map((event: any) => event.snapshot.data)
    );
  }
}
