import React from 'react';
import {Box} from "@mui/material";
import TodoList from "../../components/TodoList";
import InputBar from "../../components/InputBar";

const Tasks = () => {
    return (
        <Box
            sx={{
                maxWidth: '450px',
                margin: '0 auto',
                padding: '10px 20px'
            }}
        >
            <InputBar/>
            <TodoList/>
        </Box>
    );
};

export default Tasks;