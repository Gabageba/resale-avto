import React from 'react';
import style from './InLineCarCards.module.css'
import {useSelector} from 'react-redux';
import {CAR_PAGE_ROUTE} from '../../utils/const';
import {useNavigate} from 'react-router-dom';
import { addInHistory } from "../../http/historyAPI";

const InLineCarCards = ({carData, isDel, onDel}) => {

  let brand = useSelector(state => state.specifications.brands).filter((b) => b.id === carData.brandId)
  let model = useSelector(state => state.specifications.models).filter((m) => m.id === carData.modelId)
  let transmission = useSelector(state => state.specifications.transmissions).filter((t) => t.id === carData.transmissionId)
  let driveUnit = useSelector(state => state.specifications.driveUnits).filter((du) => du.id === carData.driveUnitId)
  const user = useSelector(state => state.userData.user)
  const isAuth = useSelector(state => state.userData.isAuth)
  const fmtMillage = new Intl.NumberFormat('ru-RU').format(carData.millage);
  const fmtPrice =  new Intl.NumberFormat('ru-RU').format(carData.price);

  const navigate = useNavigate()

  return (

    <div className={style.inLineCards}>
      <div className={style.car}>
        <div className={style.info} onClick={() => {
          if (!isDel) {
            if (isAuth){
              addInHistory(carData.id, user.mainInfo.id).then()
              navigate(CAR_PAGE_ROUTE + '/' + carData.id)
            } else {
              navigate(CAR_PAGE_ROUTE + '/' + carData.id)
            }
          };
        }}>
          <img src={process.env.REACT_APP_API_URL + '/' + carData.img} alt={carData.name} className={style.image}/>
          <div className={style.infoBlock}>
            <div className={style.main}>
              {brand && model ? <p className={style.carName}>{`${brand[0].name} ${model[0].name}, `}</p> : null}
              <p className={style.year}>{carData.year}</p>
              <div className={style.price}>{fmtPrice} ₽</div>
            </div>
            {transmission && driveUnit ? <div className={style.additional}>{`${carData.power} л.с, ${transmission[0].name}, ${driveUnit[0].name}, ${fmtMillage} км`}</div> : null}

          </div>
        </div>
        {isDel ?
          <div className={style.close} onClick={() => onDel(carData.id)}>
            <span className="material-icons-outlined">delete</span>
          </div>
          : null}
      </div>

    </div>

  );
};

export default InLineCarCards;