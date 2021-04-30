import { Controller, useForm } from 'react-hook-form'
import React, { useContext } from 'react'

import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { MsgContext } from './MsgContext'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890abcdef', 6)
const Home4 = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (values) => {
        let key = nanoid()
        setFormData(key)
        reset()
    }

    const { showmsg } = useContext(MsgContext)
    const [formData, setFormData] = React.useState('')
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
                <div className="mt-20">
                    <a
                        className="text-blue-400"
                        href={`/MsgSend/${formData}`}>{`/MsgSend/${formData}`}</a>
                </div>
            )}
        </div>
    )
}
export default Home4
