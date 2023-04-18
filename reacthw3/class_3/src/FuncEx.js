import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { ThemeContext } from "./contextt";

// import "./Card.css";

//HOOKS

const FuncEx = () => {
    const name = useFormInput('Harry')
    const surname = useFormInput('Potter')

    // const [name, setName] = useState('Harry')
    // const [surname, setSurname] = useState('Potter')

    const { theme } = React.useContext(ThemeContext)

    const width = useWindowWidth();
    useDocumentTitle(name.value + ' ' + surname.value)
    // useEffect(() => {
    //     document.title = name + ' ' + surname
    // })

    // const [width , setWidth ] = useState(window.innerWidth)

    // useEffect(() => {
    //     const handleResize = () => setWidth(window.innerWidth)

    //     window.addEventListener('resize', handleResize)

    //     return () => {
    //         window.removeEventListener('reize', handleResize)
    //     }
    // })

    // const handleChangeName = e => {
    //     setName(e.target.value)
    // }

    // const handleChangeSurname = e => {
    //     setSurname(e.target.value)
    // }

    return (
        <>
            <h1 className="">Function Component</h1>
            <form className="card" style={{ background: theme.color }}>
            <input placeholder="Name" value={name.value} onChange={name.onChange} />
            <input placeholder="Surname" value={surname.value} onChange={surname.onChange}/>
            <div style={{color: '#fff'}}>{width}</div>
            </form>
        </>
    )
}

function useFormInput(initialState) {
    const [value , setValue ] = useState(initialState);

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange,
    };
} 

function useWindowWidth() {

    const [width , setWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return width
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title
    })
}

export default FuncEx