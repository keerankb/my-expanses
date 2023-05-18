import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem (props) {
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated!!');
    //     // console.log(title);
    // }
    //this below setTimeout() will automatically triggered the clickHandler() function.
    // setTimeout(clickHandler, 3000);

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
);
}

export default ExpenseItem; 