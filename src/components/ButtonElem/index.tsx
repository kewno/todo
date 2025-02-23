import React from 'react';
import {Button} from "@mui/material";

interface IButtonElem {
    children: string
    create: (e: React.MouseEvent<HTMLElement>) => void
}
const ButtonElem = (props: IButtonElem) => {
    const {children, create} = props
    return (
        <Button
            variant="contained"
            sx={{
                ml: '10px',
                padding: '4px 20px',
                textTransform: 'none',
            }}
            onClick={create}
        >
            {children}
        </Button>
    );
};

export default ButtonElem;