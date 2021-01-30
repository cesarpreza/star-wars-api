import React from 'react';
import Button from '../components/Button';
import 'bootstrap/dist/css//bootstrap.min.css';

function Pagination(props) {
    const numPages = 9;
    const characterPages = [];

    function pages() {
        for (let i = 1; i <= numPages; i++) {
            characterPages.push(<Button
                key={i}
                onPageClick={props.handleNextPage}>{i}</Button>)
        }
        return characterPages;
    }

    return (
        <div className='pageContainer'>
            <ul className='nav'>
                {pages()}
            </ul>
        </div>
        
    )
}


export default Pagination;