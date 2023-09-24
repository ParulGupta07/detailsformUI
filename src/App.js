import './App.css';
import { useState } from 'react';
import InputBox from './Components/Input-box/input-box.component';
import ButtonComponent from './Components/todo-button/buttonComponent.component';

const App = () => {

  const [submitFormData, setSubmitFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const submitFormHandler = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const formData = { ...submitFormData };
    formData[fieldName] = fieldValue;
    setSubmitFormData(formData);
  }

  const [submitdone, SetSubmitDone] = useState(false);

  const handleSubmit = (sub) => {
    sub.preventDefault();
    console.log(submitFormData.name);
    console.log(submitFormData.email);
    console.log(submitFormData.contact);
    if (!(submitFormData.name && submitFormData.email && submitFormData.contact)) {
      SetSubmitDone(false);
      console.log("Enter all fields appropriately");
    }
    else {
      SetSubmitDone(true);
    }
  }

  if (submitdone) {
    return (
      <div className='show-details'>
        <h1>Details submitted are as below:</h1>
        <div>
          <p>Name: {submitFormData.name}</p>
          <p>Email: {submitFormData.email}</p>
          <p>Contact: {submitFormData.contact}</p>
        </div>
        <ButtonComponent type='text'
          className='button'
          btntext='Edit'
        />
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
            onChangeHandler={submitFormHandler}
            name='name'
          />
          <br />
          <label className='form-label'>Email: </label>
          <InputBox
            placeholder='Enter your Email Id*'
            className='input-box'
            type='email'
            onChangeHandler={submitFormHandler}
            name='email'
          />
          <br />
          <label className='form-label'>Contact Number: </label>
          <InputBox
            placeholder='xxx-xxx-xxxx*'
            onChangeHandler={submitFormHandler}
            className='input-box'
            type='tel'
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name='contact'
          />
          <br />
          <ButtonComponent type='submit'
            className='button'
            btntext='Submit'
          />
        </form>
      </div>
    );
  }
}

export default App;
