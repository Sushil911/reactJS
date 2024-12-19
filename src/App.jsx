import React from 'react'
import Navbar from './components/Navbar'
import Menusection from './components/Menusection'
import Specialsection from './components/Specialsection'
import Aboutsection from './components/Aboutsection'
import Contactsection from './components/Contactsection'
import Herosection from './components/herosection'

const App = () => {
  return (
    <>
    <div>
      <header>
        <Herosection />
        <nav>
        <Navbar />
        </nav>
      </header>
      <section id='menu'>
        <Menusection />
      </section>
      <section id='special'>
        <Specialsection />
      </section>
      <section id='about'>
        <Aboutsection />
      </section>
      <section id='contact'>
        <Contactsection />
      </section>
      <footer>

      </footer>
    </div>
    </>
  )
}

export default App