import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';

export default function UserInfo() {
  const name = useSelector(state => state.user.name);

  return (
    <div className="user-name">Hi {name}!</div>
  )
}