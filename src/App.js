import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  getBarbarian,
  getCrusader,
  getDemonHunter,
  getMonk,
  getNecromancer,
  getWitchDoctor,
  getWizard,
} from './store/actions/character.action'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBarbarian())
    dispatch(getCrusader())
    dispatch(getDemonHunter())
    dispatch(getMonk())
    dispatch(getNecromancer())
    dispatch(getWitchDoctor())
    dispatch(getWizard())
  })

  return <div>D3 Char</div>
}

export default App
