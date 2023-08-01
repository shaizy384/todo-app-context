import React, { useContext } from 'react'
import listContext from './context/listContext'

const ListItem = ({ id, item }) => {
  const context = useContext(listContext)
  const { handleDeleteItem } = context

  return (
    <>
      <div className="card text-white px-3 py-2 mb-3" style={{ background: "#8e44ad" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className='mb-0'>{item}</h5>
          <i className="fa-solid fa-trash-can" type='button' onClick={() => handleDeleteItem(id)}></i>
        </div>
      </div>
    </>
  )
}

export default ListItem