import React, {useEffect, useRef, useState} from 'react';
import style from './View.module.css'
import {useDispatch} from 'react-redux';
import {setCurrentPageAC} from '../../redux/carsReducer';

const View = ({optionsData, selectedView, setSelectedView}) => {

  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const {current: wrap} = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <div ref={wrapperRef}>
      <button className={style.sort} onClick={() => setDisplay(!display)}>{selectedView ?
        <div className={style.selector}>
          <span className="material-icons-outlined">{selectedView.icon}</span>
          <div className={style.title}>{selectedView.title}</div>
        </div> : null
      }</button>
      {display && (
        <div className={style.options}>
          {optionsData
            .map((value, i) => {
              return (
                <div
                  onClick={() => {
                    dispatch(setCurrentPageAC(1))
                    setSelectedView(value)
                    setDisplay(false);
                  }}
                  key={i}
                  tabIndex="0"
                  className={style.content}
                >
                  <div className={style.name}>
                    <span className="material-icons-outlined">{value.icon}</span>
                    <div className={style.title}>{value.title}</div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default View;