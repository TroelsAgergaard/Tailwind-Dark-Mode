import { useState } from 'react'
import Switch from "react-switch";

function App() {
  const [checked, setChecked] = useState(false)
  function handleChange(){
    setChecked(!checked)
  }

  return (
    <div className={checked && "dark"}>
    <section className='h-screen flex justify-center items-center dark:bg-black' >
      <Switch onChange={handleChange} checked={checked} />
      <div>
        <h3 className='text-black dark:text-white ml-2'>hej med dig!</h3>
      </div>
    </section>
    </div>
  )
}

export default App
