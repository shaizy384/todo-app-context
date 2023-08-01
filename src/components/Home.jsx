import React, { useContext, useState } from 'react'
import ListItem from './ListItem'
import listContext from './context/listContext'

const Home = () => {
  const context = useContext(listContext)
  const { list, handleAddItems, handleRemoveAll } = context

  const [text, setText] = useState()
  return (
    <>
      <div className='pt-5 w-25 m-auto' >
        <h1 className='text-center text-white pb-2'>To-do List App</h1>
        <div className="input-group">
          <input type="text" className='form-control' onChange={(e) => setText(e.target.value)} />
          <button className='btn btn-light' style={{ background: "#8e44ad", borderColor: "#8e44ad" }} onClick={() => handleAddItems(text)}>
            <i className="fa-solid fa-plus text-white"></i>
          </button>
        </div>
        <div className="list my-5">
          {
            list?.items?.map((element) => {
              return <ListItem key={element.id} {...element} />
            })
          }
        </div>
        {/* { listItems.length!==0 && <div> */}
        <button className='btn btn-primary w-100' style={{ background: "#8e44ad", borderColor: "#8e44ad" }} onClick={handleRemoveAll}><h5 className='my-0'>Remove All</h5></button>
      </div>
      {/* } */}
    </>
  )
}

export default Home