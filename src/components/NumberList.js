import React from 'react'
import ListItem from './ListItem';

function NumberList(props) {
    const numbers = props.numbers
    // const doubled = numbers.map((number) => number * 2);
    // console.log(numbers);
    // console.log(doubled);
    const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number} />
    );

  return (
    <div>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}

export default NumberList