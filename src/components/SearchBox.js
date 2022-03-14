import React from 'react';

const SearchBox = ({onSearch}) => {
    return (
    <div className='pa2'>
    <input className='pa3 ba b--green bg-lightest-blue'
    type="search" 
    placeholder='search robots'
    onChange={onSearch}/>
    </div>
    )
}

export default SearchBox;