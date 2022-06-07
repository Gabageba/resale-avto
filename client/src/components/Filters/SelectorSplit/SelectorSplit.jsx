import React from 'react';
import style from './SelectorSplit.module.css'
import {useIntl} from 'react-intl';

const SelectorSplit = ({selectorName, setMin, setMax, min, max}) => {

  const intl = useIntl()

  return (
    <span className={style.selectorSplit}>
      <input type="text" onChange={e => setMin(e.target.value)} value={min} className={style.selectorLeft} placeholder={`${selectorName}, ${intl.formatMessage({id: 'filter_from'})}`}/>
      <input type="text" onChange={e => setMax(e.target.value)} value={max} className={style.selectorRight} placeholder={intl.formatMessage({id: 'filter_to'})}/>
    </span>
  )
}

export default SelectorSplit