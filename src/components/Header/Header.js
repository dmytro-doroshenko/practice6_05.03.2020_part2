import React from "react";
import './Header.css';

function Header({usersCounter, sort}) {

    const sortPosts = (type) => {
        sort(type);
    };

return (
    <div className='nav_bar'>
        <h3>Users</h3>
        <button className='btn' onClick={sortPosts.bind(this, 'sortByID')}>Sort by ID</button>
        <button className='btn' onClick={sortPosts.bind(this, 'sortByName')}>Sort by Name</button>
        <button className='btn' onClick={sortPosts.bind(this, 'sortByCity')}>Sort by City</button>
        <h4>Users added: {usersCounter}</h4>
    </div>
)
}

export default Header;