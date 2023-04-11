import { Component, OnInit } from '@angular/core';
import { Response } from '../../model/response';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cats-view',
  templateUrl: './cats-view.component.html',
  styleUrls: ['./cats-view.component.scss']
})
export class CatsViewComponent implements OnInit {

  items: string[] = []

  isLoading = false;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.catService
      .getCatFacts(20)
      .subscribe((response: Response) => {
        this.items = [...this.items, ...response.data];
      }, (error) => {
        console.log(error)
      }, () => {
        this.isLoading = false
      });
  }
  onScroll(): void {
    this.isLoading = true;
    this.catService
      .getCatFacts(10)
      .subscribe((response: Response) => {
        this.items = [...this.items, ...response.data];
      }, (error) => {
        console.log(error)
      }, () => {
        this.isLoading = false
      });
  }

}
