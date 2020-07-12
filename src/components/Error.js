import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h1>Error:Path does not exist </h1>
            <h2><NavLink to='/' >Click Here</NavLink> to go home</h2>
        </div>
    )
}
