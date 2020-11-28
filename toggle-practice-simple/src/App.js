import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor,setLikecolor] = useState('')//jhtu color name ta ekta string.So,default value empty string
  const [users,setUsers] = useState([])
  const [singleUser,setSingleUser] = useState({})//empty object..jhtu single data load hcce
  const [randomUser,setRandomUser] = useState({})//data r vitore ekta object.Object r vitor e results property.results r value ekta array akar e amdr proyojonio inf0
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data))
    //singleUsers...line 30
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data =>setSingleUser(data))

    //randomUser
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data =>setRandomUser(data.results[0]))//36 num line e randomuser jdi thke thle samne agaw.. (?=> new js rule) data load koro ebong show koro
  },[])

  const handleLike = () =>{
    const color = likeColor ? '' : 'primary';//jdi 15 num line e color r value theke thake orthat likecolor r jdi kno value thake thle empty string kore daw..jhtu color r value ekta string...r jdi empty string thake thle color r value primary kore daw
    setLikecolor(color);//and 10 num r line er color r value ei function e pathiye daw toggle korar jnno
  }//16 num line color r value dynamic kore daw
  //setLikecolor(likeColor ? '' : 'primary');10,11 num line integrate korte chaile ponditi
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon> 
      <h2>Random Gender:{randomUser.name?.first}</h2>
      <h1>Name:{singleUser.name}</h1>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  );
}

export default App;
