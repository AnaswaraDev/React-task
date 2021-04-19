import React from 'react'
import { FormControl } from 'baseui/form-control';
import { Textarea } from 'baseui/textarea';
import { Button } from "baseui/button";
function Message(props) {
    const [value, setValue] = React.useState('');
    return (
        <div className="max-w-prose mx-auto  p-20 bg-gray-100  mt-10  " >
            <div   className="w-full">
     
            <p class="text-lg ... text-purple-700 text-opacity-100 " >Send Secret Message to {props.value} </p>
                <FormControl label="Write Secret meessage" >
                    <Textarea className="text-2xl text-blue-700 leading-tight"
                        placeholder="Write Secret meessage"
                        id="textarea-id"
                        value={value}
                        onChange={event => setValue(event.currentTarget.value)} />

                </FormControl>
                </div>


                <div  class="bg-no-repeat bg-center ..." > 
                <Button  onClick={() => alert("click")} >Submit</Button>
                </div>
            
        </div>
    )
}

export default Message