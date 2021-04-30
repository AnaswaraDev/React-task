import React, { useState,useContext } from 'react'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox'
import { FormControl } from 'baseui/form-control'
import { useForm, Controller } from 'react-hook-form'
import { H3 } from 'baseui/typography'
//import { MsgContext1 } from './MsgContext1'
const Home3 = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()
    
  // const { setShowmsg, setformData}  = useContext(MsgContext1);
   const [formData, setformData] = React.useState("");
   const onSubmit = values => {
    setformData(values)
   //    console.log(values);
   
       reset()
    }

    return (
        <div className="max-w-prose mx-auto  p-20 bg-gray-100  mt-10  ">
            <div
                style={{
                    paddingTop: '30px',
                    width: '400px'
                }}>
                <H3>Enter your message here</H3>
                <hr />
             
                <form >
                    <Controller
                        control={control}
                        name="message"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl
                                label={() => 'Enter your message'}
                                caption={
                                    errors && errors.message
                                        ? 'Please enter your bio!'
                                        : 'Enter your bio!'
                                }>
                                <Input
                                 value={value}
                                 onChange={onChange}
                                 onBlur={onBlur}
                                 inputRef={ref}
                                 clearOnEscape
                            />
                            </FormControl>
                        )}
                    />




                    <Button onclick={()=>{setformData(true);
                    }} 
                    className=" w-full bg-gradient-to-r from-indigo-900 to-indigo-900  " >Submit
                    </Button>
                </form>
                
            </div>
            
           
                
        </div>
    )
}
export default Home3
/* {formData && (
                    <h4>
                        <b>Message is </b> - {formData.message}
                    </h4>
    )}*/

      //onSubmit={handleSubmit(onSubmit)}