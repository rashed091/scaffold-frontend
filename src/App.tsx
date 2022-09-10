import { FC } from 'react'
import IMAGE from './react-icon.png'
import './style.css'

const App: FC = () => {
  return (
    <>
      <h1>Hello, world</h1>
      <img src={IMAGE} alt="Reac logo" />
    </>
  )
}

export default App
