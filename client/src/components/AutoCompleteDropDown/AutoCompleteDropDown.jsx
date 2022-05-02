import {useEffect, useRef, useState} from 'react';
import style from './AutoCompleteDropDown.module.css'

const AutoCompleteDropDown = ({optionsData, dropDownName, isAdd}) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    setOptions(optionsData)
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateInput = data => {
    setSearch(data);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className={style.dropDown}>
      <input
        className={style.selector}
        onClick={() => setDisplay(!display)}
        placeholder={dropDownName}
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      {display && (
        <div className={style.options}>
          {isAdd ?
            <div
              onClick={() => updateInput('')}
              key={'add'}
              tabIndex="0"
              className={style.content}
            >
              <div className={style.name}>добавить</div>
            </div> :
            <div
              onClick={() => updateInput('')}
              key={'all'}
              tabIndex="0"
              className={style.content}
            >
              <div className={style.name}>все</div>
            </div>
          }
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateInput(value.name)}
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