import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Category() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(`http://localhost:1337/api/categories/${id}?populate[reviews][populate][0]=categories`, process.env.REACT_APP_TOKEN);

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error!</p>

  if(!data) return <p>Empty</p>

  console.log(data);
  return (
    <div>
      <h2>{ data.attributes.name } Games</h2>
      {data.attributes.reviews.data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.Title}</h2>

          {review.attributes.categories.data.map(c => ( <small key={c.id}>{c.attributes.name}</small> ))}
          
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
