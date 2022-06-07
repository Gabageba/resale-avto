import React, {useEffect, useRef, useState} from 'react';
import style from './AutoCompleteDropDown.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setSpecErrorSearch} from '../../redux/carSpecReducer';
import {FormattedMessage} from 'react-intl';

const AutoCompleteDropDown = ({optionsData, dropDownName, isAdd, choseSpecAdd, setChosen, chosen}) => {

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);


  const specErrorSearch = useSelector(state => state.specifications.specErrorSearch)
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSpecErrorSearch(false))
  }, [])

  useEffect(() => {
    setOptions(optionsData)
  }, [optionsData]);

  useEffect(() => {
    if (chosen === '') {
      updateInput('')
    }
  }, [chosen])


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

  const updateInput = data => {
    setSearch(data);
    setDisplay(false);
  };

  const inputChange = (event) => {
    setSearch(event.target.value)
    for (let i = 0; i < options.length; i++) {
      if (event.target.value === options[i].name){
        dispatch(setChosen(options[i].id))
        // updateInput(options[i].name)
      } else {
        dispatch(setChosen(''))
      }
      // console.log(options[i].name)
    }
  }


  return (
    <div ref={wrapperRef} className={style.dropDown}>
      <input
        className={specErrorSearch && chosen === '' ? style.selectorError : style.selector}
        onClick={() => setDisplay(!display)}
        placeholder={dropDownName}
        value={search}
        onChange={event => inputChange(event)}
      />

      {display && (
        <div className={style.options}>
          {isAdd ?
            <div
              onClick={() => {
                choseSpecAdd(dropDownName)
                setDisplay(false)
              }}
              key={'add'}
              tabIndex="0"
              className={style.contentAdd}
            >
              <div className={style.name}><FormattedMessage id='dd_add' /></div>
            </div> :
            <div
              onClick={() => {
                dispatch(setChosen(''))
                updateInput('')
              }}
              key={'all'}
              tabIndex="0"
              className={style.contentAdd}
            >
              <div className={style.name}><FormattedMessage id='dd_all' /></div>
            </div>
          }
          {options
            .filter(({name}) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => {
                    dispatch(setChosen(value))
                    updateInput(value.name)
                  }}
                  key={i}
                  tabIndex="0"
                  className={style.content}
                >
                  <div className={style.name}>{value.name}</div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteDropDown