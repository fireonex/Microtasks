import React from "react";
import {NewComponent, topCars} from "../site/NewComponent";

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}




// //let a = 1;
// let[a, setA]=useState(1)
//
// const onclickHandler = () => {
//     setA(++a);
//     console.log(a)
// }
// const onclickZeroHandler = () => {
//     setA(0);
//     console.log(a)
// }
//
// return (
//     <>
//         <NewComponent topCars={topCars}/>
//         <h1>{a}</h1>
//         <button onClick={onclickHandler}>number</button>
//         <button onClick={onclickZeroHandler}>0</button>
//
//     </>
// );



// const Button1Func = (subscriber: string, age: number, address: string) => {
//     console.log(subscriber, age, address)
// }
// const Button2Func = (subscriber: string, ) => {
//     console.log(subscriber)
// }
// const Button3Func = () => {
//     console.log('Im stupid button')
// }
//
//
// return (
//     <>
//
//         {/*<button></button>*/}
//         {/*<button>MyYouTubeChannel-2</button>*/}
//         <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Func('im Katara', 18, 'live in Minsk')}/>
//         <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Func('im Ivan')}/>
//         <Button name={'Stupid Button'} callBack={Button3Func}/>
//     </>
//
// );





// const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//
// }
// const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//     console.log('hello Im Ivan')
// }

// const OnClickHandler = (name: string) => {
//     console.log(name)
// }

// const foo1 = () => {
//     //ничего не передавать, но в консоли должно показаться 100200
//     console.log(100200)
// }

// const foo2 = (num: number) => {
//     //передать цифру 100200
//     console.log(num)
// }

//<>

    {/*<button onClick={(event) => {*/}
    {/*    console.log('hello')*/}
    {/*}}>MyYouTubeChanel-1*/}
    {/*</button>*/}
    {/*<button onClick={(event) => OnClickHandler('Katara')}>MyYouTubeChanel-1</button>*/}
    {/*<button onClick={event => OnClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}



    {/*<button onClick={foo1}>1</button>*/}
    {/*<button onClick={() => foo2(100200)}>2</button>*/}
//</>