import React, {useEffect} from 'react';
import style from './Contacts.module.css'
import Info from './Info/Info';
import {FormattedMessage} from 'react-intl';

const Contacts = () => {

  useEffect(() => {
    let script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A662bf55ec8093e75d200b04a0c1d5849a54ba10b13a5957ae151845e97aaba74&amp;width=560&amp;height=560&amp;lang=ru_RU&amp;scroll=true';
    document.getElementById('yamap').replaceWith(script);
  }, [])

  return (
    <div>
      <h1 className="header-info"><FormattedMessage id='main_contacts_title' /></h1>
      <div className={style.contacts}>
        <div className={style.map}>
          <div id="yamap"></div>
        </div>
        <div className={style.info}>
          <Info nameInfo={<FormattedMessage id='main_contacts_phone' />} dataInfo={'+7 913 955 62-12'}/>
          <Info nameInfo={<FormattedMessage id='main_contacts_address_title' />} dataInfo={<FormattedMessage id='main_contacts_address' />}/>
        </div>
      </div>
    </div>
  )
}

export default Contacts