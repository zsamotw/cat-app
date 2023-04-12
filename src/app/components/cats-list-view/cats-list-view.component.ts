import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cats-list-view',
  templateUrl: './cats-list-view.component.html',
  styleUrls: ['./cats-list-view.component.scss']
})
export class CatsListViewComponent {

  @Input() items: string[] = [];
  @Input() isError = false;
  @Input() isLoading = false;
  @Input() numberOfSkeletons = 0;

  @Output() scroll = new EventEmitter();

  onScroll() {
    this.scroll.emit();
  }
}
