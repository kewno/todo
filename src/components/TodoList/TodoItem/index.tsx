import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import CheckboxElem from "../../CheckboxElem";
import {toggleCompletedTask, removeTask} from "../../../store/tasks/slice";
import {useAppDispatch} from "../../../store/hook";
import {TaskItem} from "../../../store/tasks/model";
import Cross from "../../../assets/icon/Cross";

interface ITodoItem extends TaskItem {}
const TodoItem = (props: ITodoItem) => {
    const {id, text, completed} = props

    const dispatch = useAppDispatch()
    const toggleCompleted = (id) => dispatch(toggleCompletedTask(id))
    const remove = (id) => dispatch(removeTask(id))

    return (
        <Stack
            sx={{
                flexDirection: 'row',
                alignItems: 'center',
                border: '1px solid #1976D2',
                mt: '20px',
                padding: '10px',
                position: 'relative',
            }}
        >
            <CheckboxElem {...{completed, toggleCompleted: () => toggleCompleted(id)}} />
            <Typography>{text}</Typography>
            <Box
                sx={{
                    position: 'absolute',
                    top: '-1px',
                    right: '2px',
                    cursor: 'pointer',
                }}
                onClick={() => remove(id)}
            >
                <Cross/>
            </Box>
        </Stack>
    );
};

export default TodoItem;