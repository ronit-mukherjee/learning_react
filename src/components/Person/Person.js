import React from 'react'

const Person = props => (
    <div>I am a person, I am {props.age} years old and
        I love {props.children?props.children:'You'}
    </div>
)

export default Person