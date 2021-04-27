import React , { useContext }  from 'react'
import { Button, KIND, SIZE } from 'baseui/button'
import { Input } from 'baseui/input'
import { FormControl } from 'baseui/form-control'
import { useForm, Controller } from 'react-hook-form'
import { H3 } from 'baseui/typography'
import Home2 from './Home2'
import { customAlphabet } from 'nanoid'
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox'
//import { useHistory } from "react-router-dom";
export const UserContext = React.createContext();

const nanoid = customAlphabet('1234567890abcdef', 10)

const Home1 = () => {

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()

    const [formData, setFormData] = React.useState("")

    const onSubmit =(values)=> {

        console.log("values", values);
        let key = nanoid()
        console.log("key is", key)
        let url = `http://localhost:3000/Home1/${key}`
        console.log("url ", url)
        setFormData(values)
        reset()


    }

    //let history = useHistory();
    // function handleClick() {

    //    history.push("/home2");
    //  }
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

                <Button >Submit </Button>
            </form>

            <UserContext.Provider value={{formData}}>
         
          </UserContext.Provider>

          <div>
          values is {formData.name}<br></br>
          values is {formData.values}
       </div>
        </div>

      
    )
}
export default Home1
// onClick={handleClick}
//<Button type="button" onClick={handleClick} >Submit </Button>