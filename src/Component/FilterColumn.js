import React from 'react';

const FilterColumn = ({column}) => {
    const {filterValue, setFilter} =column;
    return (
        <div>
            <span> Search: 
                <input value={filter || ''} onChange={(e) =>setFilter(e.target.value)}/> 
            </span>
        </div>
    );
};

export default FilterColumn;