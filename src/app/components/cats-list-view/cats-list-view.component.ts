import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cats-list-view',
  templateUrl: './cats-list-view.component.html',
  styleUrls: ['./cats-list-view.component.scss']
})
export class CatsListViewComponent implements OnChanges {
  @ViewChild('scrollContainer') scrollContainer?: ElementRef<HTMLDivElement>;

  @Input() items: string[] = [];
  @Input() isError = false;
  @Input() isLoading = false;
  @Input() numberOfSkeletons = 0;

  @Output() loadMoreItems = new EventEmitter();

  showLoadButton = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['isLoading']?.currentValue) {
      this.showLoadButton = !this.hasScroll();
    } else {
      this.showLoadButton = false;
    }
  }

  private hasScroll() {
    return this.scrollContainer ? this.scrollContainer.nativeElement.clientHeight < this.scrollContainer.nativeElement.scrollHeight : false;
  }

  loadMore() {
    this.loadMoreItems.emit();
  }
}
