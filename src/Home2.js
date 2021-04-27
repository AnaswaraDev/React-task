import React, { useContext } from 'react'
import { AppContext } from './context'

const Home2 = props => {
    const { value } = useContext(AppContext)
    const { key } = props.match.params
    const userData = value[key]
    if (!userData) {
        return (
            <div>
                <p>Error: User not found!</p>
            </div>
        )
    }

    return (
        <div>
            <p>
                This page is for <b>{userData.name}</b>
            </p>
        </div>
    )
}

export default Home2
