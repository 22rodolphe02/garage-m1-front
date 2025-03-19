export interface PageRequest{

}

export interface Page<T> {

}

export interface Pagination{
  totalPages: number;
  totalItems: number;
  itemPerPages: number;
  pageIndex: number;
}
