import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';

export default function UserName() {
  const name = useSelector(state => state.user.name);

  return (
    !!name && <div className="userName">Hello, {name}</div>
  )
}