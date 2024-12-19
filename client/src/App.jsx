import { useState } from "react"
import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {
  const [index, setIndex] = useState(1)
 
  return (
    <main className="app transitior-all ease-in ">
      <Home />
      <Canvas index={index} />
      <Customizer index={index} dispatch={setIndex} />
    </main>
  )
}

export default App
