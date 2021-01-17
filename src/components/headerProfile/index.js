import React from 'react';
import { useSelector } from 'react-redux';

export default function HeaderProfile() {
  const name = useSelector(state => state.user.name);

  if (!name) {
    return null;
  }

  return (
    <div data-testid="user.name">
      {name}
    </div>
  )
}