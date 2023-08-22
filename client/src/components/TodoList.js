import {React, useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {

  const [items, setItems] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/items', { crossdomain: true })
      .then((res) => console.log(res))
  });

  return (
    <div>TodoList</div>
  )
};

export default TodoList