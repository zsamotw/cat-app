import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Response } from '../../models/response.interface';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cats-list-controller',
  templateUrl: './cats-list-controller.component.html',
  styleUrls: ['./cats-list-controller.component.scss']
})
export class CatsListControllerComponent implements OnInit, OnDestroy {

  @Output() loading = new EventEmitter<boolean>();

  items: string[] = [];

  isLoading = false;
  isError = false;
  notifier$ = new Subject()
  numberOfSkeletons = 0;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loading.emit(true)

    this.numberOfSkeletons = 10;
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
        const uniqueItems = new Set([...this.items, ...aggregatedItems]);
        this.items = [...uniqueItems]

        this.isLoading = false
        this.loading.emit(false)
      }

    }
  }

  onLoadMoreItems(): void {
    this.numberOfSkeletons = 5;
    this.isError = false;

    this.isLoading = true;
    this.loading.emit(true)

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
