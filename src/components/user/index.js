import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setName } from '../../store/user/actions';
import { usePrevious } from '../../utils/hooks';
import './styles.css';
import Toast from './toast';

export default function UserInfo() {
  const name = useSelector(state => state.user.name);
  const prevName = usePrevious(name);
  const [value, setValue] = useState(name);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleHideMessage = useCallback(() => {
    setShow(false);
  }, []);

  const handleChange = useCallback((e) => {
    console.log(e);
    setValue(e.target.value);
  }, []);

  const handleSave = useCallback((e) => {
    e.preventDefault();
    dispatch(setName(value));
  }, [value, dispatch]);

  useEffect(() => {
    if (prevName && prevName !== name) {
      setShow(true);
    }
  }, [name, prevName]);

  return (
    <>
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <button type='submit' onClick={handleSave}>Save</button>
      </form>
      <Toast show={show} onHide={handleHideMessage} />
    </>
  )
}