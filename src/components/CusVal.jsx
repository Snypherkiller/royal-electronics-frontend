import { Button } from 'flowbite-react'
import React from 'react'

const cusVal = () => {
  return (
    <div>
      <h2>Do you want to be a previledge Customer?</h2>
      <a href="Sign-up/previledge">
      <Button>Yes</Button>

      </a>
      <a href="/Sign-up/normal">
      <Button>No</Button>

      </a>
    </div>
  )
}

export default cusVal
