import React from 'react';
import Reasons from './Reasons/Reasons';
import style from './WhyWe.module.css'
import whyWe from '../../../assets/whyWe.png'

const WhyWe = () => {
  return (
    <div>
      <h1 className={'header-info'}>Почему мы?</h1>
      <div className={style.info}>
        <img src={whyWe} className={style.img} alt=""/>
        <div className={style.textInfo}>
          <div className={style.line}/>
          <Reasons serviceId={'01'} serviceName={'Професссиональная химия'}
                   text={'В своей работе мы используем только профессиональную химию от проверенных произвадителей, ' +
                     'которая не портит лакокрасочное покрытие и салон автомобиля'}/>
          <div className={style.line}/>
          <Reasons serviceId={'02'} serviceName={'Требования к качеству'} text={'Мы контролируем процесс работы с ' +
            'автомобилем на всех этапах от приемки до выдачи и следим за каждой деталью'}/>
          <div className={style.line}/>
          <Reasons serviceId={'03'} serviceName={'Лучшие мастера'} text={'У нас работают только квалифицированные' +
            'специалисты, имеющие большой опыт и прошедшие обучения в лучших detailing-студиях'}/>
          <div className={style.line}/>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;