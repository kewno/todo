import React from 'react';
import {TextField} from "@mui/material";

const InputElem = (props) => {
    const {text, setText} = props

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <TextField value={text} onChange={handleText} placeholder='Введите задачу'
            sx={{
                outline: 'none',
                color: 'grey',
                width: '100%',
                'input' : {
                    padding: '5px 10px',
                    maxWidth: '400px',
                }
            }}
        />
    );
};

export default InputElem;