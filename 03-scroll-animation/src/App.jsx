import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='hero-container'>
        
        <h1>Vengadores</h1>
        
      </section>
      
      <section className='intro-container'>
        <div>
        <img src="/public/avengers-logo.png" className="logo" alt="Avengers logo" /> 
        </div>
        <p>Los Vengadores, los héroes más poderosos de la Tierra, protegen nuestro mundo de las mayores amenazas. Explora su historia, admira su valentía y descubre cómo han salvado la humanidad una y otra vez.</p>
      </section>
      <section className='gallery-container'>
        <h2>Galería de héroes</h2>
        <section>
          <input className='heroes-search' placeholder='Buscar héroe'></input>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

        </section>
        <section className='gallery-grid'>
          <img src="/public/iron-man.jpg" alt="Iron Man" id='dep-hero'/>
          <img src="/public/spiderman.jpg" alt="Spiderman"/>
          <img src="https://i.pinimg.com/originals/14/2c/5f/142c5ff7be07ea802d1dce8ad99ea746.jpg" alt="Capitán América"/>
          <img src="https://static.printler.com/cache/d/a/e/3/a/5/dae3a5c74199b1766fd8ab25dd0b2dda84044f29.jpg" alt="Hulk"/>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-48a3a843446b8fd9ef6903db6104ffe4-lq" alt="Viuda Negra" id='dep-hero'/>
          <img src="https://pm1.aminoapps.com/6255/8a994349926d672ca126dac9957c0decd4a5d7e5_hq.jpg" alt="Ojo de halcón"/>
          <img src="https://i.pinimg.com/736x/85/6c/98/856c980fe38d1eb94db575abb0602145.jpg" alt="Visión" id='dep-hero's/>
          <img src="https://i.redd.it/85vur221ss881.jpg" alt="Máquina de guerra"/>
        </section>
      </section>
      
    </>
  )
}

export default App
