import React, { useEffect, useState } from 'react';

import './styles.css';
import { usePrevious } from '../../utils/hooks';

export default function Toast({
  show,
  onHide,
}) {
  const prevShow = usePrevious(show);
  console.log(prevShow, show);

  useEffect(() => {
    let timeout;
    if (!prevShow && show) {

      timeout = setTimeout(() => {
        onHide();
      }, 3000);

    }

    return () => clearTimeout(timeout);
  }, [prevShow, show, onHide]);

  return (
    <div className={`toast ${!show && ' hidden'}`} data-testid="toast">Name Successfully Updated</div>
  )
}
