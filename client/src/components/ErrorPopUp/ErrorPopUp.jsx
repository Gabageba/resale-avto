import React, {useEffect} from 'react';
import style from './ErrorPopUp.module.css'

const ErrorPopUp = ({active, setActive, errorText}) => {

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false)
      }, 7000)
    }
  }, [active])

  return (
    <div>
      <div className={active ? style.errorPopUpActive : style.errorPopUp}>
        <div>
          <div>
            <pre className={style.errorText}>{errorText}</pre>
          </div>
        </div>
        <div className={style.close}>
          <span className="material-icons-outlined" onClick={() => setActive(false)}>close</span>
        </div>
      </div>
    </div>

  );
};

export default ErrorPopUp;