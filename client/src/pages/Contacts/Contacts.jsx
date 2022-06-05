import React, {useEffect, useState} from 'react';
import style from './Contacts.module.css'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import whatsApp from '../../assets/whatsapp.png'
import telegram from '../../assets/telegram.png'

const Contacts = () => {

  useEffect(() => {
    let script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A662bf55ec8093e75d200b04a0c1d5849a54ba10b13a5957ae151845e97aaba74&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true';
    document.getElementById('yamapFull').replaceWith(script)
  }, [])

  return (
    <div>
      <h1 className={'header-info'}>Контакты</h1>
      <div className={style.contacts}>
        <div>
          <div className={style.title}>Единый контактный центр:</div>
          <div className={style.contact}>
            <img src={phone} alt=""/>
            <div>+7 (995) 892-56-21</div>
          </div>
          <div className={style.contact}>
            <img src={email} alt=""/>
            <div>resaleavto.company@gmail.com</div>
          </div>
        </div>
        <div className={style.block}>
          <div className={style.title}>Горячая линия:</div>
          <div className={style.contact}>
            <img src={phone} alt=""/>
            <div>+7 (913) 955-62-12</div>
          </div>
        </div>
        <div className={style.block}>
          <div className={style.title}>Социальные сети:</div>
          <div className={style.contact}>
            <img src={whatsApp} alt=""/>
            <div>+7 (913) 955-62-12</div>
          </div>
          <div className={style.contact}>
            <img src={telegram} alt=""/>
            <div>+7 (913) 955-62-12</div>
          </div>
        </div>
      </div>
      <div className={style.map}>
        <div id='yamapFull'/>
      </div>
    </div>
  )
}

export default Contacts