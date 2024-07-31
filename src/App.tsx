import './App.css'
import { parseSongs } from './data/analyse'

export const App = () => {
  return (
    <>
      <h1>hey</h1>
      <button onClick={parseSongs}>click</button>
    </>
  )
}
