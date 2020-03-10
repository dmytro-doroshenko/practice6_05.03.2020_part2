import React from "react";

function CreateNewUserCard({addData, create}) {

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
                    <input type='text' name='name' placeholder='Enter your name' onChange={addNewUserData.bind(this, 'name')}/>
                </div>
                <div className="card_title">
                    <span>Username: </span>
                    <input type='text' name='username' placeholder='Enter your username' onChange={addNewUserData.bind(this, 'username')}/>
                </div>
                <div className="card_title">
                    <span>City: </span>
                    <input type='text' name='city' placeholder='Enter your city' onChange={addNewUserData.bind(this, 'city')}/>
                </div>
                <input type='submit' value='Add' className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default CreateNewUserCard;