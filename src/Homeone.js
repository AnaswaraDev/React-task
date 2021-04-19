import React from 'react'
//import useForm from 'react-hook-form'
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import { Button } from "baseui/button";
import "tailwindcss/tailwind.css";
import './index.css';
function Homeone() {
  const [value, setValue] = React.useState('');
  return (

    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10  rounded-sm shadow-xl" > 
 

 <div  className="w-full">
 <p class="text-lg ... text-purple-700 text-opacity-100 " >Secret Message Book </p>

    <FormControl label="Your Name :" className="text-2xl text-blue-700 leading-tight">
      <Input id="input-id" value={value} placeholder="Full Name"
        onChange={event => setValue(event.currentTarget.value)}/>
    </FormControl>

    <Button className="justify-items-center text-base text-gray-700 leading-normal  " onClick={() => alert("click")} >Sign Up</Button>
    </div>
    </div>

  )
}

export default Homeone
