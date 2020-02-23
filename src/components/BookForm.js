import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
  const { addBook } = useContext(BookContext)
  const [ title, setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required placeholder="Title"/>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} required placeholder="Author name" />
        <input type="submit" value="add book" />
      </form>  
    </div>
  )
}
export default BookForm;