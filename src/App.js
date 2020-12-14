import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import SwipeCard from './containers/SwipeCard'

function App() {
  // const [showAdvanced, setShowAdvanced] = useState(true)

  return (
    <div className='app'>
      <SwipeCard />
      {/* {showAdvanced ?  : <Simple />}
      <div className='row'>
        <p style={{ color: '#fff' }}>Change Style</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
      </div> */}
    </div>
  )
}

export default App