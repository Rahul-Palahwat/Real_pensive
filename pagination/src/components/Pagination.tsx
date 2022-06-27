import React from 'react'

interface Props{
    postsPerPage: number
    totalPosts: number
    paginate: any
}


// 

const Pagination:React.FC<Props>= (props) => {

    const {postsPerPage , totalPosts, paginate } = props;

    const pageNumbers:number[] = [];

    for(let i:number=1;i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map( number =>(
            <li key={number} className="page-item">
                <a href="!#" className='page-link' onClick={()=> paginate(number)}>{number}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
