import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Response } from '../../model/response';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cats-view',
  templateUrl: './cats-view.component.html',
  styleUrls: ['./cats-view.component.scss']
})
export class CatsViewComponent implements OnInit, OnDestroy {

  items: string[] = [];

  isLoading = false;
  isError = false;
  notifier$ = new Subject()

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.isLoading = true;
    let aggregatedItems: string[] = [];

    this.catService
      .getCatFacts(this.catService.requestsNumberOnInit)
      .pipe(takeUntil(this.notifier$))
      .subscribe(this.responseSubscriber(aggregatedItems));
  }

  private responseSubscriber(aggregatedItems: string[]) {
    return {
      next: (response: Response) => {
        aggregatedItems = [...aggregatedItems, ...response.data];
      }, error: (error: Error) => {
        this.isError = true;
      }, complete: () => {
        this.items = [...this.items, ...aggregatedItems];
        this.isLoading = false
      }

    }
  }

  onScroll(): void {
    this.isLoading = true;
    this.isError = false;

    let aggregatedItems: string[] = [];

    this.catService
      .getCatFacts(this.catService.requestsNumberOnScroll)
      .pipe(takeUntil(this.notifier$))
      .subscribe(this.responseSubscriber(aggregatedItems));
  }

  ngOnDestroy(): void {
    this.notifier$.next(null);
    this.notifier$.complete();
  }
}
