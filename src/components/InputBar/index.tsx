import React, {useState} from 'react';
import {Stack} from "@mui/material";
import ButtonElem from "../ButtonElem";
import InputElem from "../InputElem";
import {useAppDispatch} from "../../store/hook";
import {createTask} from "../../store/tasks/slice";
import {getId} from "./helper";

const InputBar = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const create = (text: string) => {
        if (text.trim()) dispatch(createTask({id: getId(), text, completed: false}))
        else alert('Введите текст')

        setText('')
    }

    return (
        <Stack direction='row'>
            <InputElem {...{text, setText}}/>
            <ButtonElem {...{create: () => create(text)}}>Создать</ButtonElem>
        </Stack>
    );
};

export default InputBar;