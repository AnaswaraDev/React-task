import React from 'react'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox'
import { FormControl } from 'baseui/form-control'
import { useForm, Controller } from 'react-hook-form'
import { H3 } from 'baseui/typography'
import Home2 from './Home2'
import {useHistory} from "react-router-dom";
const Home1 = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()
    const [formData, setFormData] = React.useState(null)

    const onSubmit = values => {
        setFormData(values)
        reset()
    }

    let data= useHistory();
    function handleClick(){
        data.push("/home2")
    }

    return (
        <div
            style={{
                paddingTop: '30px',
                width: '600px',
                className: 'w-44'
            }}>
            <H3>Enter your name Here</H3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <FormControl
                            label={() => ' Name'}
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






                <Button type="button" onClick={handleClick}>
                    
                Submit</Button>
                
            </form>


        </div>
    )
}


export default Home1