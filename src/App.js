import React, {useState, useEffect} from 'react';
import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import CreateNewUserCard from "./components/Card/CreateNewUserCard";

function App() {

  const [users, createUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [newUser, setUserData] = useState({address: {city: ''}});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => createUsers(result))
  }, []);


  const sortUsers = (sortType) => {
    let listToSort = users;

    if (sortType === 'sortByID') {
      listToSort.sort((a, b) => {return ((a.id > b.id)? 1: -1)});
    } else if (sortType === 'sortByName') {
      listToSort.sort((a, b) => {return ((a.name.toLowerCase() === b.name.toLowerCase()) ? 0 : ((a.name.toLowerCase() > b.name.toLowerCase())? 1: -1))});
    } else if (sortType === 'sortByCity') {
      listToSort.sort((a, b) => {return ((a.address.city.toLowerCase() === b.address.city.toLowerCase()) ? 0 : ((a.address.city.toLowerCase() > b.address.city.toLowerCase())? 1: -1))});
    }
    createUsers([...listToSort]);
  };

  const countUser = (userID) => {
    let user = users.find(u => u.id === userID);
    user.isCounted = !user.isCounted;
    user.isCounted ? setCounter((counter) => ++counter) : setCounter((counter) => --counter)
  };

  const findMaxID = () => {
    let usersToSort = [...users];
    let sorted = usersToSort.sort((a, b) => {return ((a.id < b.id)? 1: -1)});
    return sorted[0].id + 1;
  };

  const deleteUser = (userID) => {
    let userToDelete = users.find(u => u.id === userID);
    if (userToDelete.isCounted) {setCounter((counter) => --counter)};
    let filtered = users.filter(user => (user.id !== userID));
    createUsers([...filtered])
  };

  const addNewUserData = (type, value) => {
    if (type === 'city') {
      setUserData((newUser) => {return {...newUser, address: {[type]: value}}});
    }
    else {
      setUserData((newUser) => {return {...newUser, [type]: value}});
    }

  };

  const addNewUserID = (new_id) => {
    // console.log(new_id);
    // console.log(newUser);
    let obj = {...newUser};
    if (!obj.id) {
      obj.id = new_id;
      createUsers((users) => {return[...users, obj]})
    }
    else {
      let newUsers = users.map(user => {
        if (user.id === obj.id) {
          user = {...obj}
          setUserData({address: {city: ''}})
        }
        return user;
      });
      createUsers(newUsers)

    }

    // console.log(obj);
   // setUserData(obj);

  };

  const addNewUserToTheList = () => {
    console.log(newUser);
    createUsers((users) => {return[...users, newUser]})
  };

  const createNewUser = async () => {
      const newID = findMaxID();

    await  newID;
    // console.log(newID);
      await addNewUserID(newID);
    // console.log(newUser);
    //  await addNewUserToTheList();
    };

  const existingUserToEdit = (userID) => {
    let userToEdit = users.find(u => u.id === userID);
    setUserData({...userToEdit});
  };


  return (
    <div className="App">
      <Header usersCounter={counter} sort={sortUsers}/>
      <CreateNewUserCard addData={addNewUserData} create={createNewUser} newUserData={newUser}/>
      {users
        ? users.map( usr => { return <Card key={usr.id} user={usr} addRemove={countUser} del={deleteUser} edit={existingUserToEdit}/> } )
        : 'Please wait! Loading...'
      }

    </div>
  );
}

export default App;
