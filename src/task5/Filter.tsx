import React from 'react';
import {FilterType} from '../App';

type FilterTypee = {
    money: Array<FilterArray>
    onClickFilterHandler: (idClick: FilterType) => void
}
type FilterArray = {
    banknots: string,
    value: number,
    number: string
}
export const Filter = (props: FilterTypee) => {
    return (
        <>
            <ul>
                {props.money.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
            <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
        </>
    );
};