// Hi Guys!
// // Let's reinforce our current session!
// // -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// // -Don't forget to assign types to our data.


import React from 'react';
import './App.css';
import {Tasks} from "./TASKS";

function App() {
    return (
        <>
            {/*<Tasks/>*/}
        </>
    )
}

export default App;







//--------------------------------------------------------------

// import React, {useState} from 'react';
// import './App.css';
// import MoneyComponent from "./components/MoneyComponent";


// export type FilterType = 'all' | 'ruble' | 'dollar'
//
// export type MoneyType = {
//     money: BanknoteType
// }
//
// export type BanknoteType = {
//     banknote: string
//     nominal: number
//     number: string
// }

// function App() {
//
//     return (
//         <MoneyComponent/>
//
//
//
//     );

// const [money, setMoney] = useState([
//     {banknote: "dollar", nominal: 100, number: "a123456789"},
//     {banknote: "dollar", nominal: 50, number: "b123456789"},
//     {banknote: "ruble", nominal: 100, number: "c123456789"},
//     {banknote: "dollar", nominal: 100, number: "d123456789"},
//     {banknote: "dollar", nominal: 50, number: "e123456789"},
//     {banknote: "ruble", nominal: 100, number: "f123456789"},
//     {banknote: "dollar", nominal: 50, number: "j123456789"},
//     {banknote: "ruble", nominal: 50, number: "h123456789"}
// ])
//
//
//
// const[filter, setFilter] = useState('all');
//
// let currentMoney = money;
//
//
// if (filter === 'dollar') {
//     currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
//
// } else if (filter === 'ruble') {
//     currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
// }
//
// const onclickHandler = (nameButton: string) => {
//     setFilter(nameButton)
//
// }


//}

