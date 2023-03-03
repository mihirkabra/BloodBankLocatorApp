import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';

export type PaginationProps = {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number,
  currentPage: number,
  pageSize: number,
  className: string
}

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination(props);

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    if (!(currentPage === lastPage)) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (!(currentPage === 1)) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item  paginationLi', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left">{"←"}</div>
      </li>
      {paginationRange!.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="paginationLiDots pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames(`pagination-item ${pageNumber===currentPage? "selectedLi": "paginationLi"}`, {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(Number(pageNumber))}
          >{pageNumber}</li>
        );
      })}
      <li
        className={classnames('pagination-item  paginationLi', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right">{"→"}</div>
      </li>
    </ul>
  );
};

export default Pagination;
