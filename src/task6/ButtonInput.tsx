import React from 'react';
type ButtonInputPropsType = {
    name:string,
    callBack:()=>void
}
export const ButtonInput = (props:ButtonInputPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
      <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};