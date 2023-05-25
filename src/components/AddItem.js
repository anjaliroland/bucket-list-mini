import React, { useState } from 'react';

export default function AddItem(props) {
    const { handleInputChange, value, handleFormSubmit, selectedPriority } = props;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handlePrioritySelect = (priority) => {
        props.handlePrioritySelect(priority);
        toggleDropdown();
    };

    return (
        <form>
            <div className='form-group newItemForm'>
                <label htmlFor='newItem'>Add something to your bucket list!</label>
                <br />
                <input
                    onChange={handleInputChange}
                    value={value}
                    name='newItem'
                    type='text'
                    className='form-control'
                    placeholder='win hotdog eating contest on the 4th of July!'
                    id='newItem'
                />
                <div className='dropdown'>
                    <button
                        className='btn btn-outline-primary dropdown-toggle'
                        type='button'
                        onClick={toggleDropdown}
                        aria-expanded={isDropdownOpen}
                    >
                        {selectedPriority || 'Priority'}
                    </button>
                    {isDropdownOpen && (
                        <ul className='dropdown-menu'>
                            <li onClick={() => handlePrioritySelect('Low')}>Low</li>
                            <li onClick={() => handlePrioritySelect('Medium')}>Medium</li>
                            <li onClick={() => handlePrioritySelect('High')}>High</li>
                        </ul>
                    )}
                </div>
                <button 
                    onClick={handleFormSubmit} 
                    className='btn btn-outline-info' 
                    type='submit'
                >
                    Add!
                </button>
            </div>
        </form>
    );
}
