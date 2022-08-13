import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Header} from './task1/site/Header';
import {Body} from './task1/site/Body';
import {Footer} from './task1/site/Footer';
import {NewComponent} from './task2/NewComponent';
import {Button} from './task3/components/Button';
import {Filter} from './task5/Filter';
import {FullInput} from './task6/FullInput';
import {Input} from './task6/Input';
import {ButtonInput} from './task6/ButtonInput';

export type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {
    const students = [
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 18},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 38},
        {id: 5, name: 'William', age: 48},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 78},
        {id: 9, name: 'Thomas', age: 88},
        {id: 10, name: 'Charles', age: 98},
        {id: 11, name: 'Christopher', age: 100},
        {id: 11, name: 'Christopher', age: 100},
    ]
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('I am stupid')
    }
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
    }
    const onClickHandler2 = () => {
        setA(0)
    }
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [filter, setFilter] = useState<FilterType>('all')
    let currentMoney = money
    if (filter === 'RUBLS') {
        currentMoney = money.filter(fm => fm.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(fm => fm.banknots === 'Dollars')
    }
    const onClickFilterHandler = (idClick: FilterType) => {
        setFilter(idClick)
    }
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')
    console.log(title)
    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
      addMessage(title)
        setTitle('')
    }
    return (
        <>
            <Header titleForHeader={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
            <NewComponent students={students} topCars={topCars}/>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('I', 1, 'Msw')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('V')}/>
            <Button name={'Stupid'} callBack={Button3Foo}/>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
            <Filter money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            <Input setTitle={setTitle} title={title}/>
            <ButtonInput name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </>
    );
}

export default App;