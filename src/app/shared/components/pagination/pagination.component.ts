import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'g-pagination',
  imports: [
    CommonModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{

  @Input("pageSize") itemsPerPage: number = 10;
  @Input("pageIndex") pageIndex: number = 1;
  @Input({required: true, alias: "totalItems"},) totalItems !: number;
  @Input({required: false}) withNo: boolean = true;

  @Output("page") pageChanged: EventEmitter<number> = new EventEmitter();

  pages: number[] = [];

  ngOnInit(): void {
    this.pageChanged.emit(this.pageIndex)
    this.setPages();
  }


  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  setPages(){

    if (this.totalPages <= 6) {
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1)
    }else {
      let start = this.pageIndex - 3;
      let end = this.pageIndex + 3;
      if (start < 1) {
        start = 1;
        end = 6;
      }
      if (end > this.totalPages) {
        end = this.totalPages;
        start = this.totalPages - 5;
      }
      this.pages = Array.from(Array(end - start + 1).keys()).map(i => i + start);
    }
  }


  onChangePage(page: number): void {

    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page;
      this.setPages();
      this.pageChanged.emit(page);
    }
  }
}
