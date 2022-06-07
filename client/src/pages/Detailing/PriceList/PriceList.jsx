import React from 'react';
import style from './PriceList.module.css'
import {FormattedMessage} from 'react-intl';

const PriceList = () => {
  return (
    <div>
      <h1 className='header-info'><FormattedMessage id='detailing_price_list_head' /></h1>
      <table className={style.table}>
        <tr>
          <th></th>
          <td>I <FormattedMessage id='detailing_price_list_class' /></td>
          <td>II <FormattedMessage id='detailing_price_list_class' /></td>
          <td>III <FormattedMessage id='detailing_price_list_class' /></td>
          <td>IV <FormattedMessage id='detailing_price_list_class' /></td>
          <td>V <FormattedMessage id='detailing_price_list_class' /></td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}><FormattedMessage id='detailing_types_polishing' /></td>
        </tr>
        <tr>
          <th ><FormattedMessage id='detailing_price_full_polishing' /></th>
          <td>18 000</td>
          <td>20 000</td>
          <td>22 000</td>
          <td>24 000</td>
          <td>26 000</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}><FormattedMessage id='detailing_types_dry_cleaning' /></td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_price_full_dry_cleaning' /></th>
          <td>13 000</td>
          <td>14 000</td>
          <td>15 000</td>
          <td>16 000</td>
          <td>17 000</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}><FormattedMessage id='detailing_price_complex' /></td>
        </tr>
        <tr>
          <th>
            <div><FormattedMessage id='detailing_price_preparation' /></div>
            <div className={style.additionalInfo}><FormattedMessage id='detailing_price_preparation_info' /></div>
          </th>
          <td>18 000</td>
          <td>20 000</td>
          <td>22 000</td>
          <td>24 000</td>
          <td>26 000</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.title}><FormattedMessage id='detailing_price_coatings' /></td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_price_wax' /></th>
          <td>3 000</td>
          <td>3 500</td>
          <td>4 000</td>
          <td>4 500</td>
          <td>5 000</td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_types_glass' /></th>
          <td>8 000</td>
          <td>9 000</td>
          <td>10 000</td>
          <td>11 000</td>
          <td>12 000</td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_price_ceramics_2sl' /></th>
          <td>25 000</td>
          <td>27 500</td>
          <td>30 000</td>
          <td>32 500</td>
          <td>35 000</td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_price_ceramics_3sl' /></th>
          <td>35 000</td>
          <td>37 500</td>
          <td>40 000</td>
          <td>42 500</td>
          <td>45 000</td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_price_ceramics_4sl' /></th>
          <td>45 000</td>
          <td>47 500</td>
          <td>50 000</td>
          <td>52 500</td>
          <td>55 000</td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_price_anti_rain' /></th>
          <td colSpan={5}>3 000</td>
        </tr>
        <tr>
          <th><FormattedMessage id='detailing_price_anti_rain_full' /></th>
          <td colSpan={5}>5 000</td>
        </tr>
      </table>
    </div>
  );
};

export default PriceList;