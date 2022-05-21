import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {
  fetchBodyTypes,
  fetchBrands, fetchColors,
  fetchDriveUnits,
  fetchImages,
  fetchModels,
  fetchOneCar, fetchSteeringWheels,
  fetchTransmission
} from '../../http/carAPI';
import Spinner from '../../components/Spinner/Spinner';
import style from './CarPage.module.css'
import 'material-icons/iconfont/material-icons.css';
import {
  setBodyTypesAC,
  setBrandsAC, setColorsAC,
  setDriveUnitsAC,
  setFilterModels,
  setModelsAC, setSteeringWheelsAC,
  setTransmissionsAC
} from '../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import CarSpec from './CarSpec/CarSpec';
import Footer from '../../components/Footer/Footer';

const CarPage = () => {

  const {id} = useParams()
  const [car, setCar] = useState({info: []})
  const [selectedImage, setSelectedImage] = useState('')
  const [img, setImg] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector(state => state.userData.user)


  useEffect(() => {
    fetchImages(id).then(data => {
      setImg(data)
    })
    fetchOneCar(id).then(data => {
      setCar(data)
      setSelectedImage(data.img)
    })
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => {
      dispatch(setModelsAC(data))
      dispatch(setFilterModels(data))
    })
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => dispatch(setFilterModels(data)))
    fetchDriveUnits().then(data => dispatch(setDriveUnitsAC(data)))
    fetchTransmission().then(data => dispatch(setTransmissionsAC(data)))
    fetchColors().then(data => dispatch(setColorsAC(data)))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelsAC(data)))
    fetchBodyTypes().then(data => dispatch(setBodyTypesAC(data)))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className={style.carPage}>
      <div>
        <img className={style.fullImg} src={selectedImage ? process.env.REACT_APP_API_URL + selectedImage : null}
             alt={car.model}/>
        <div className={style.littleImg}>
          <img src={process.env.REACT_APP_API_URL + car.img} alt="" onClick={() => setSelectedImage(car.img)}
               className={car.img === selectedImage ? style.selectedMini : style.mini}/>
          {img.length === 0 ? null
            : img.map(img => (
              <img src={process.env.REACT_APP_API_URL + img} key={img} alt={img} onClick={() => setSelectedImage(img)}
                   className={img === selectedImage ? style.selectedMini : style.mini}/>
            ))
          }
          {user.mainInfo.role === 'ADMIN' ?
            <div className={style.addImg}>
              <span className={'material-icons-outlined'}>add_photo_alternate</span>
            </div> : null
          }

        </div>
      </div>
      <CarSpec car={car}/>
      <Footer/>
    </div>
  );
};

export default CarPage;