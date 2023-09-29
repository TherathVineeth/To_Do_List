import logo from './logo.svg';
import './App.css';
import Container from './Component/Container';
import { useState } from 'react';
import Input from './Component/Input';

function App() {

  const[data , setdata] = useState([]);
   const setdates = (datas) =>{
        setdata(prev => {
          return[...prev,datas]
        })
    }

    const deletes = (id) =>{
        setdata((prev) =>{
          return prev.filter((item,Index) =>{
            return Index !== id;
          })
        })
    }
  return (
    <div className='Firstdiv'>
      <div className="App">
        <Container  setdates={setdates}/>
        { console.log(data)}
        <div className='seconddiv'>
          <ol className='ol'>
          {
          data.map((dat,Index) => {
               return (
                <Input Key={Index} Text={dat} deletes={deletes} id={Index}/>
               )
          })
        }
          </ol>
        </div>
    </div>
    </div>
  );
}

export default App;
