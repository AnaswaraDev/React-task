import React, { useContext } from 'react'
import { Button, KIND, SIZE } from 'baseui/button'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { FormControl } from 'baseui/form-control'
import { useForm, Controller } from 'react-hook-form'
import { H3 } from 'baseui/typography'
import Home3 from './Home3'
import { customAlphabet } from 'nanoid'
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox'
import { useHistory } from 'react-router-dom'
import { AppContext } from './context'

const nanoid = customAlphabet('1234567890abcdef', 10)

const Home1 = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()

    const { value, saveData } = useContext(AppContext)
    let history = useHistory()

    const onSubmit = values => {
        let key = nanoid()
        let submitValue = {}
        submitValue[key] = values
        saveData(submitValue)

        reset()
    }

    return (
        <div className="p-20 md">
            <div className="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                    <H3>Enter your name Here</H3>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            control={control}
                            name="name"
                            rules={{ required: true }}
                            render={({
                                field: { onChange, onBlur, value, ref }
                            }) => (
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

                        <Button>Submit </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home1
