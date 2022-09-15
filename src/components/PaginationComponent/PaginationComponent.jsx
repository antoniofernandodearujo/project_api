import React from 'react';

//style
import "./styles.css";

function PaginationComponent({ pages, currentPage, setCurrentPage }) {

    const MAX_BUTTONS = 5;

    return (
        <div>
        {Array.from(Array(Math.min(MAX_BUTTONS, pages)), (_, index) => {
                return (
                   
                    <button
                        style={index === currentPage ? {backgroundColor: "#050a20"} : null}
                        className='button'
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >
                        {index + 1}
                    </button>
                    
                );
            })}
        </div>
    )
}

export default PaginationComponent
