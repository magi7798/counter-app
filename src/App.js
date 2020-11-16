import './App.css';
import React, { useState } from 'react';

import Card from './components/Card.js';
import Header from './components/Header/Header.js';
import Counter from './components/Counter/Counter.js';
import InputSubmit from './components/InputSubmit/InputSubmit.js';
import TableList from './components/Table/TableList.js';
import SnackBar from './components/SnackBar/SnackBar.js';
import ResetBtn from './components/ResetBtn/ResetBtn.js';

function App() {

  const [count, setCount] = useState(0);
  const [item, setItem] = useState('');
  const [lists, setLists] = useState([]);
  const [showMsg, setShowMsg] = useState('');

  return (
    <div className="container">
      <div className='header-row'>
        <Header />
      </div>
      <div className='row'>
        <div className='col left'>
          <Card className='card-counter'>
            <Counter count={count} setCount={(newCount) => setCount(newCount)} />
          </Card>
          <Card className='card-inputsubmit'>
            <InputSubmit 
              count={count} 
              setCount={(newCount) => setCount(newCount)} 
              item={item}
              setItem={(newItem) => setItem(newItem)} 
              lists={lists} 
              setLists={(newLists) => setLists(newLists)}
              // showMsg={showMsg}
              setShowMsg={(showMsg) => setShowMsg(showMsg)}
            />
          </Card>      
        </div>
        <div className='col right' >
          <TableList lists={lists} />
          <ResetBtn setLists={(reset) => setLists(reset)} />
          <SnackBar showMsg={showMsg} setShowMsg={(showMsg) => setShowMsg(showMsg)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
