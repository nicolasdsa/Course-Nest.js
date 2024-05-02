import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function ReviewDetails() {

  const { id } = useParams()
  const {loading, error, data} = useFetch(`http://localhost:1337/api/reviews/${id}?populate=*`, process.env.REACT_APP_TOKEN)

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error!</p>

  if(!data) return <p>Empty</p>

  return (
    <div className='review-card'>
          <div className='rating'>{data.attributes.rating}</div>
          {data.attributes.categories.data.map(c => ( <small key={c.id}>{c.attributes.name}</small> ))}
          <h2>{data.attributes.Title}</h2>
    </div>
  )
}
