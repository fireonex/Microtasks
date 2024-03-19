import React from 'react';

export const MoneyComponent = () => {


    return (
        <div>
            <>
                <ul>
                    {currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote}</span>
                                <span>{objFromMoneyArr.nominal}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div style={{marginLeft: '30px'}}>
                    <button onClick={() => onclickHandler('all')}>all</button>
                    <button onClick={() => onclickHandler('ruble')}>rubles</button>
                    <button onClick={() => onclickHandler('dollar')}>dollars</button>
                </div>
            </>
        </div>
    );
};

export default MoneyComponent;