import React from 'react'

const Pagination = ({
    totalPosts,
    postParPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postParPage); i++) {
        pages.push(i)
    }


return (
    <div className='pagination'>
        {pages.map((page,index)=>{
            return(
                <button 
                key={index}
                onClick={setCurrentPage(page)}
                className={page==currentPage ? "active": ""}>{page}</button>
                
            )
        })}
        Abhash
    </div>
)
}

export default Pagination;

