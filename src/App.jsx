import { useState } from 'react';
import './App.css'
import './TwitterFollowercard'
import TwitterFollowercard from './TwitterFollowercard'



const users = [
  {
    userName :'midudev',
    name: 'Miguel Angel',
    isFollowing :true
  },
  {
    userName :'pheralb',
    name: 'pablo pheralb',
    isFollowing :false
  },  {
    userName :null,
    name: null,
    isFollowing :null
  }
  ];

export  default  function App(){
  // ! SOLO SE PUEDE CAMBIAR EL STADO UNA VEZ
  // ! const [isFollowing, setIsFollowing] = useState(false)
  

  return(
    <>
        {
          users.map((usu)=>{
                const { userName, name, isFollowing } = usu
                return(
                  <TwitterFollowercard   
                  key ={userName}
                  userName={userName} 
                  initIsFollowing ={isFollowing}>
                  {name}
                  </TwitterFollowercard>
                )
          })
        }
    </>
 
   )
}


/*
? COMENTADO SE CREA UN PROYECTO DE PRUEBA


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/
