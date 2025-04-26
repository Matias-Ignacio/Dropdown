import { useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown/Dropdown';
import DropdownItem from './components/DropdownItem/DropdownItem';

function App() {
  const [count, setCount] = useState(0)
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className='App'>
        <div className='content'>
          <Dropdown buttonText="Boton Dropdown " content={
            <>
              {items.map((item) => (
                <DropdownItem key={item}>{`Item ${item}`}</DropdownItem>
              ))}
            </>} />
        </div>

      </div>
    </>
  )
}

export default App
