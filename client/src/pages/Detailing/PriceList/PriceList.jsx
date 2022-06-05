import React from 'react';
import style from './PriceList.module.css'

const PriceList = () => {
  return (
    <div>
      <h1 className='header-info'>Прайс-лист</h1>
      <table className={style.table}>
        <tr>
          <th></th>
          <td>I класс</td>
          <td>II класс</td>
          <td>III класс</td>
          <td>IV класс</td>
          <td>V класс</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}>Полировка</td>
        </tr>
        <tr>
          <th >Полная абразивная полировка кузова в 3 этапа</th>
          <td>18 000</td>
          <td>20 000</td>
          <td>22 000</td>
          <td>24 000</td>
          <td>26 000</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}>Химчистка</td>
        </tr>
        <tr>
          <th>Полная химчистка</th>
          <td>13 000</td>
          <td>14 000</td>
          <td>15 000</td>
          <td>16 000</td>
          <td>17 000</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}>Комплексы услуг</td>
        </tr>
        <tr>
          <th>
            <div> Предпродажная подготовка автомобиля</div>
            <div className={style.additionalInfo}>(химчистка + полировка + защитное восковое покрытие)</div>
          </th>
          <td>18 000</td>
          <td>20 000</td>
          <td>22 000</td>
          <td>24 000</td>
          <td>26 000</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}>Защитные покрытия автомобиля</td>
        </tr>
        <tr>
          <th>Ручное восковое покрытие</th>
          <td>3 000</td>
          <td>3 500</td>
          <td>4 000</td>
          <td>4 500</td>
          <td>5 000</td>
        </tr>
        <tr>
          <th>Жидкое стекло</th>
          <td>8 000</td>
          <td>9 000</td>
          <td>10 000</td>
          <td>11 000</td>
          <td>12 000</td>
        </tr>
        <tr>
          <th>Керамика 2 слоя</th>
          <td>25 000</td>
          <td>27 500</td>
          <td>30 000</td>
          <td>32 500</td>
          <td>35 000</td>
        </tr>
        <tr>
          <th>Керамика 3 слоя</th>
          <td>35 000</td>
          <td>37 500</td>
          <td>40 000</td>
          <td>42 500</td>
          <td>45 000</td>
        </tr>
        <tr>
          <th>Керамика 4 слоя</th>
          <td>45 000</td>
          <td>47 500</td>
          <td>50 000</td>
          <td>52 500</td>
          <td>55 000</td>
        </tr>
        <tr>
          <th>Антидождь(передняя полусфера)</th>
          <td colSpan={5}>3 000</td>
        </tr>
        <tr>
          <th>Антидождь(все стекла)</th>
          <td colSpan={5}>5 000</td>
        </tr>
      </table>
    </div>
  );
};

export default PriceList;