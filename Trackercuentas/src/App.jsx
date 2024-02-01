import { useState } from 'react'
import './App.css'
import FormAddMoney from './components/FormAddMoney'
import Header from './components/Header'
import MainControl from './components/MainControl';

function App () {
  const[count, setCount] = useState(0);
  const[isValid, setisValid] = useState(false);

  const component = isValid
    ? <MainControl count={count} />
    : <FormAddMoney setCount={setCount} setisValid={setisValid}/>

    return (
      <div className='App'>
        <Header />      
          {component}
      </div>
    )
}

export default App