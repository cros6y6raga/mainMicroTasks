import React from 'react';

type NewComponentType = {
    students: Array<StudentsType>
    topCars: Array<TopCarsType>
}
type StudentsType = {
    id: number,
    name: string,
    age: number
}
type TopCarsType = {
    manufacturer: string,
    model: string
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.students.map((st, index) => {
                    return (
                        <li key={st.id}>
                            <span>{st.name}</span>
                            <span>{st.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                {props.topCars.map((car, index) => {
                    return (
                        <tr key={index}>
                            <th>
                                {car.manufacturer}
                            </th>
                            <td>
                                {car.model}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};