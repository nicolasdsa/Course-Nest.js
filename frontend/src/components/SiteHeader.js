import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

export default function SiteHeader() {
  const {loading, error, data} = useFetch('http://localhost:1337/api/categories', process.env.REACT_APP_TOKEN)

  if(loading) return <p>Loading categories...</p>

  if(error) return <p>Error!</p>

  if(!data) return <p>Empty</p>

  return (
    <div className='site-header'>
      <Link to="/"><h1>Reviews</h1></Link>
      <nav className='categories'>
        <span>Filter reviews by category:</span>
        {data.map(category => (
                <Link key={category.id} to={`/category/${category.id}`}><h1>{category.attributes.name}</h1></Link>
        ))}
      </nav>
    </div>
  )
}
