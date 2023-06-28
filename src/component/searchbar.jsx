import React from 'react'
import {  Form } from 'react-bootstrap';
export default function searchbar({handleSearchChange,searchTerm}) {
  return (
    <div>
         <Form.Group controlId="searchBar">
        <Form.Control
          type="text"
          placeholder="Rechercher par titre"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>
    </div>
  )
}
