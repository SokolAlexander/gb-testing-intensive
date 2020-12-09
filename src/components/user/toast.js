import React, { useEffect } from 'react';

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

  return show && (
    <div className="toast" data-testid="toast">Name Successfully Updated</div>
  )
}
