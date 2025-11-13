import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Anuncio from './Anuncio.jsx'

function App() {


  return (
    <div>
      <h1>Hola hoy veremos componentes</h1>
      <Anuncio titulo="¡Coca Cola!"
        color="titulitoAzul"
        linkImagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjroDQNxvhyCeba38D-ymvkw8HlDFvuK4BFw&s"
        precio={98}
        mensaje="Este es el primer anuncio." />
      <Anuncio titulo="Fresca!"
        color="titulitoVerde"
        linkImagen="https://www.coca-cola.com/content/dam/onexp/mx/es/brands/fresca/home/Fresca_1198x1198.png"
        precio={1400}
        mensaje="Este es el segundo anuncio." />
      <Anuncio titulo="¡Fanta!"
        color="titulitoNaranja"
        linkImagen="https://e7.pngegg.com/pngimages/811/795/png-clipart-fanta-orange-soda-can-illustration-fizzy-drinks-coca-cola-fresca-fanta-orange-soft-drink-fanta-orange-orange-drink-thumbnail.png"
        mensaje="Este es el tercer anuncio." />
    </div>
  )
}

export default App
