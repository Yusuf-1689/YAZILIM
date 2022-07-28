import './App.css';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';
import {useState} from "react"

const initialValues={username:"",phoneNumber:"",gender:""}

function App() {
  const [info,setInfo]=useState(initialValues)
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} />
      <Contacts/>
    </div>
  );
}

export default App;