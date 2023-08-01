import React, { useState } from 'react'
import ListContext from './listContext'

const ListState = (props) => {
    const initialState = {
        items: []
    }

    const handleAddItems = (item) => {
        setList({
            ...list,
            items: [
                ...list.items,
                {
                    id: new Date().getTime().toString(),
                    item: item
                }
            ]
        })
    }

    const handleDeleteItem = (id) => {
        let newList = list.items.filter((item) => item.id !== id);
        setList({
            ...list,
            items: newList
        });
    }

    const handleRemoveAll = () => {
        setList(initialState);
    }

    const [list, setList] = useState(initialState)

    return (
        <ListContext.Provider value={{ list, handleAddItems, handleDeleteItem, handleRemoveAll }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListState