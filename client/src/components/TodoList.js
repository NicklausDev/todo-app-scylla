import {React, useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {

  const [items, setItems] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/items')
      .then((res) => setItems(res.data.items));
  }, []);

  if (items === null) return <div>loading...</div>

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
};

export default TodoList