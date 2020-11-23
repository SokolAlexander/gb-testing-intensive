import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setName } from '../../store/user/actions';
import { usePrevious } from '../../utils/hooks';
import './styles.css';

export default function UserInfo() {
  const name = useSelector(state => state.user.name);
  const prevName = usePrevious(name);
  const [value, setValue] = useState(name);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [show])

  return (
    <>
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <button type='submit' onClick={handleSave}>Save</button>
      </form>
      {show && <div className="toast">Name Successfully Updated</div>}
    </>
  )
}