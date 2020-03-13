import React from "react";

function CreateNewUserCard({addData, create, newUserData}) {

    const {id, name, username, address:{city}} = newUserData;

    const addNewUserData = (type, {target: {value}}) => {
        addData(type, value)
    };

    const createNewUser = (e) => {
        create();
        e.preventDefault();
    };

    return (
        <div className='card'>
            <form className="card-body" onSubmit={createNewUser}>
                <div className="card_title">
                    <span>Name: </span>
                    <input type='text' name='name' placeholder='Enter your name' value={name || ''} onChange={addNewUserData.bind(this, 'name')} required/>
                </div>
                <div className="card_title">
                    <span>Username: </span>
                    <input type='text' name='username' placeholder='Enter your username' value={username || ''} onChange={addNewUserData.bind(this, 'username')} required/>
                </div>
                <div className="card_title">
                    <span>City: </span>
                    <input type='text' name='city' placeholder='Enter your city' value={city || ''} onChange={addNewUserData.bind(this, 'city')} required/>
                </div>
                <input type='submit' value={id ? 'Save' : 'Add'} className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default CreateNewUserCard;