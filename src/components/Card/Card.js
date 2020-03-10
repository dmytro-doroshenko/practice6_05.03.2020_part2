import React, {useState} from "react";
import './Card.css';

function Card ({user, addRemove, del}) {

    const [hidden, setHidden] = useState(false)

    const countUser = (id) => {
        addRemove(id);
    };

    const deleteUsr = (id) => {
        del(id);
    };

    const hidePost = () => {
        setHidden(!hidden);
    };

    return (
        <div key={user.id} className='card'>
            {!hidden &&
                <div className='card_body'>
                <h5>ID: {user.id}</h5>
                <h2>{user.name}</h2>
                <h3>{user.username}</h3>
                <h4>{user.address.city}</h4>
                <button className='btn' onClick={countUser.bind(this, user.id)}>{user.isCounted ? 'Remove' : 'Add'}</button>
                <button className='btn' onClick={deleteUsr.bind(this, user.id)}>Delete</button>
            </div>}
            <button className='btn' onClick={hidePost}>{hidden ? 'Show' : 'Hide'} Card</button>
        </div>
    )
}

export default Card;