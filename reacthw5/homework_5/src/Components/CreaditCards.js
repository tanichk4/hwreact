import { useState } from "react";

const CreaditCards = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!login.length || !password.length){
      
    }
  }

  return (
    <form>
      <input name="login" placeholder="Your login" value={login} onChange={handleChangeLogin}/>
      <input name="password" placeholder="Your password" value={password} onChange={handleChangePassword}/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreaditCards;
