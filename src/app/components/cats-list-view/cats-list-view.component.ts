import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cats-list-view',
  templateUrl: './cats-list-view.component.html',
  styleUrls: ['./cats-list-view.component.scss']
})
export class CatsListViewComponent {
  @ViewChild('scrollContainer') scrollContainer?: ElementRef<HTMLDivElement>;

  @Input() items: string[] = [];
  @Input() isError = false;
  @Input() isLoading = false;
  @Input() numberOfSkeletons = 0;

  @Output() loadMoreItems = new EventEmitter();

  showLoadButton() {
    return !this.isLoading && this.scrollContainer && this.scrollContainer.nativeElement.clientWidth <= this.scrollContainer.nativeElement.scrollWidth;
  }

  loadMore() {
    this.loadMoreItems.emit();
  }
}
