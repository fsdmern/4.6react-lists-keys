import React from 'react';

function ListItem(props) {
  const value = props.value;
  return (
    <div>
      <li>{value}</li>
    </div>
  );
}

export default ListItem;
