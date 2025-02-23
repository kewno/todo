import React from 'react';
import {Checkbox} from "@mui/material";

interface ICheckboxElem {
    completed: boolean
    toggleCompleted: (e: React.MouseEvent<HTMLElement>) => void
}

const CheckboxElem = (props: ICheckboxElem) => {
    const {completed, toggleCompleted} = props

    return (
        <Checkbox
            sx={{padding: '0', mr: '5px'}}
            checked={completed}
            onClick={toggleCompleted}
        />
    );
};

export default CheckboxElem;