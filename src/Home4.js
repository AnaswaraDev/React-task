import React, { useContext } from 'react'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'

import { FormControl } from 'baseui/form-control'
import { useForm, Controller } from 'react-hook-form'
import { customAlphabet } from 'nanoid'
import { MsgContext } from './MsgContext'

const nanoid = customAlphabet('1234567890abcdef', 10)
const Home4 = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()

    

    

    const onSubmit = values => {
        setFormData(values)
        console.log("values is",values);
        let key = nanoid()
        console.log("key is",key);
        let url = `http://localhost:3000/Home3/${key}`
        console.log("url is",url);
        reset()
    }
    
    const { showmsg}  = useContext(MsgContext);
    const [formData, setFormData] = React.useState("")
    return (
        <div
            style={{
                paddingTop: '30px',
                width: '600px'
            }}>
            
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <FormControl
                            label={() => 'Name'}
                            caption={
                                errors && errors.name
                                    ? 'Name field is required!'
                                    : 'Enter your full name'
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
                                                                                                                                                                                                     
               

                <Button>Submit</Button>  
            </form>
            {formData && (
                <div style={{ paddingTop: '30px' }}>
                    
                    
                            <h4>
                                <b>Name</b> - {formData.name}
                            </h4>
                     
                </div>
            )} 
        </div>
    )
}
export default Home4
/*  {formData && (
                <div style={{ paddingTop: '30px' }}>
                    
                    
                            <h4>
                                <b>Name</b> - {formData.name}
                            </h4>
                     
                </div>
            )} */