import React, { useState } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';


export default function BucketList() {

    const [newItem, setNewItem] = useState('');
    const [listItem, setListItem] = useState([]);
    const [selectedPriority, setSelectedPriority] = useState('');
  
    const handleInputChange = (e) => setNewItem(e.target.value);
  
    const handlePrioritySelect = (priority) => {
        setSelectedPriority(priority);
    };
  
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newItemObj = {
            id: Date.now(),
            name: newItem,
            priority: selectedPriority,
        };
        setListItem([...listItem, newItemObj]);
        setNewItem('');
        setSelectedPriority('');
    };
  
    const handleToggleComplete = (id) => {
        setListItem((prevList) =>
            prevList.map((item) =>
                item.id === id ? { ...item, complete: !item.complete } : item
        ))};
  
    const handleDeleteItem = (id) => {
        setListItem((prevList) => prevList.filter((item) => item.id !== id));
    };
  
    return (
      <div className='bList'>
        <AddItem
            handleInputChange={handleInputChange}
            value={newItem}
            handleFormSubmit={handleFormSubmit}
            handlePrioritySelect={handlePrioritySelect}
            selectedPriority={selectedPriority}
        />
        {listItem.map((item) => (
            <ListItem
                key={item.id}
                item={item}
                onToggleComplete={handleToggleComplete}
                onDeleteItem={handleDeleteItem}
            />
        ))}
      </div>
    );
}

