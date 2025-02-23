import React from 'react';
import {Box} from "@mui/material";
import TodoItem from "./TodoItem";
import {useAppSelector} from "../../store/hook";
import {tasksSelectors} from "../../store/tasks/selectors";

const TodoList = () => {
    const todoList = useAppSelector(tasksSelectors.item)

    return (
        <Box>
            {todoList.map(({id, text, completed}) =>
                <TodoItem key={id} {...{id, text, completed}} />
            )}
        </Box>
    );
};

export default TodoList;