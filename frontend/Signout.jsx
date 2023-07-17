import {useNavigate} from 'react-router-dom';
import {REACT_APP_BACKEND_API} from './hooks/config.js';
import axios from 'axios';

function Signout() {

  const navigate = useNavigate();

  axios.get(`${REACT_APP_BACKEND_API}/api/auth/signout`)
  .then(response=>response.data)
  .then((json)=>{
    if (json.result === 200) {
      // Log Out Success
      localStorage.removeItem('session');
      navigate('/', {state:{result:200}});
    };
  })
  
  return (
    <>
    </>
  )
}

export default Signout
