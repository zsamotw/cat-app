import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Response } from '../../model/response';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cats-list-controller',
  templateUrl: './cats-list-controller.component.html',
  styleUrls: ['./cats-list-controller.component.scss']
})
export class CatsListControllerComponent implements OnInit, OnDestroy {

  items: string[] = [];

  isLoading = false;
  isError = false;
  notifier$ = new Subject()
  numberOfSkeletons = 0;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.isLoading = true;
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
        this.items = [...this.items, ...aggregatedItems];
        this.isLoading = false
      }

    }
  }

  onScroll(): void {
    this.isLoading = true;
    this.numberOfSkeletons = 5;
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
