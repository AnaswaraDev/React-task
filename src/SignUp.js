import React from 'react'

import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'

function SignUp() {
  return (
    <div className="w-44">
      <h2>SignUp</h2>

      <FormControl label={() => 'hello'} caption={() => 'descrip'}>
        <Input />
      </FormControl>

      <Button onClick={() => alert('click')}>Hello</Button>
    </div>
  )
}

export default SignUp
