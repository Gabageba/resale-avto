import React from 'react';
import style from './Reference.module.css'
import logo from '../../assets/logo.svg'

const Reference = () => {
  return (
    <div>
      {/*<h1 className={'header-info'}>О комании</h1>*/}
      <div className={style.company}>
        <img className={style.logo} src={logo} alt=""/>
        <div>
          <div className={style.companyInfo}>«Resale Avto» – это новое качество для клиентов, приобретающих автомобиль.
            Он создан в соответствии с требованиями покупателей, здесь применили самое современное
            оборудование и технологии, достигнув европейского уровня обслуживания. </div>
          <div className={style.companyInfo}>В автосалоне также производится установка дополнительного оборудования и аксессуаров,
            предпродажная подготовка, хранение зимних шин, предоставление подменного автомобиля.
            </div>
          <div className={style.companyInfo}> В салоне клиенту предлагается пройти тест-драйв чтобы покупателю было легче определиться с выбором.
            Также предлагаются различные программы автострахования, кредитование, лизинг (для юридических лиц),
            экспертиза, оценка и правовая помощь.</div>
        </div>
      </div>

    </div>
  );
};

export default Reference;