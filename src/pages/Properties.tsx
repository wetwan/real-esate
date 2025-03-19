import React from 'react'
import Pagebanner from '../components/Pagebanner'
import { assests } from '../assets'

const Properties = () => {
  return (
    <div>
            <Pagebanner
        title="our properties"
        image={assests.image9}

        text="properties"
      />
    </div>
  )
}

export default Properties