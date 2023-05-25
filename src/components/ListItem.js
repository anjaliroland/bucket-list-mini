import React from 'react';

export default function ListItem({ item, onToggleComplete, onDeleteItem }) {
  const handleToggle = () => {
    onToggleComplete(item.id);
  };

  const handleDelete = () => {
    onDeleteItem(item.id);
  };

  return (
    <div className={`bucket-item ${item.priority}`}>
      <p>{item.name}</p>
      <button onClick={handleToggle}>
        {item.complete ? 'Incomplete' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}