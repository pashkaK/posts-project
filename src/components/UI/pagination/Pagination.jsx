import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import cl from './Pagination.module.css'

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages)

    return (
        <div className={cl.pagination__wrapper}>
        {pagesArray.map(p => 
          <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page__current' : 'page'}>{p}</span>
        )}
      </div>
    );
};

export default Pagination;