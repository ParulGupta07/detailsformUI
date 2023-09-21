import './App.css';
import { useEffect, useState } from 'react';
import InputBox from './Components/Input-box/input-box.component';

const App = () => {

  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [contact, setContact] = useState('');
  const [submitdone, SetSubmitDone] = useState(false);


  const onNameChange = (event) => {
    const nameTyped = event.target.value;
    SetName(nameTyped);
    SetSubmitDone(false);
  }

  const onEmailChange = (event) => {
    const emailTyped = event.target.value;
    SetEmail(emailTyped);
    SetSubmitDone(false);
  }

  const onContactChange = (event) => {
    const contactTyped = event.target.value;
    SetSubmitDone(false);
    setContact(contactTyped);
  }



  const handleSubmit = (sub) => {
    sub.preventDefault();
    console.log(name);
    console.log(email);
    console.log(contact);
    if (name === '' || email === '' || contact === '') {
      SetSubmitDone(false);
      console.log("Enter all fields appropriately");
    }
    else {
      SetSubmitDone(true);
    }


  }
  useEffect(
    () => {
      const exactSubmit = submitdone;
    }, [submitdone]
  )


  if (submitdone) {
    return (
      <div className='show-details'>
        <h1>Details submitted are as below:</h1>
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Contact: {contact}</p>
        </div>
        <button type='text'
          className='submit-btn'>Edit</button>
      </div>

    )
  }
  else {
    return (
      <div className="App">
        <form onSubmit={handleSubmit} className='form'>
          <label className='form-label'>Name: </label>

          <InputBox
            placeholder='Enter your name*'
            className='input-box'
            type='text'
            onChangeHandler={onNameChange}
          />
          <br />
          <label className='form-label'>Email: </label>
          <InputBox
            placeholder='Enter your Email Id*'
            className='input-box'
            type='email'
            onChangeHandler={onEmailChange}
          />
          <br />
          <label className='form-label'>Contact Number: </label>
          <InputBox
            placeholder='xxx-xxx-xxxx*'
            onChangeHandler={onContactChange}
            className='input-box'
            type='tel'
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

          />
          <br />
          <button type='submit' className='submit-btn'>Submit</button>
        </form>
      </div>
    );
  }


}

export default App;
