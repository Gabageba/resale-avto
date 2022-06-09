import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchImages, fetchOneCar,} from '../../http/carAPI';
import Spinner from '../../components/Spinner/Spinner';
import style from './CarPage.module.css'
import 'material-icons/iconfont/material-icons.css';
import {useSelector} from 'react-redux';
import CarSpec from './CarSpec/CarSpec';
import Footer from '../../components/Footer/Footer';
import FileLoadInput from '../../components/FileLoadInput/FileLoadInput';

const CarPage = () => {

  const {id} = useParams()
  const [car, setCar] = useState({info: []})
  const [selectedImage, setSelectedImage] = useState('')
  const [img, setImg] = useState([])
  const [loading, setLoading] = useState(true)
  const user = useSelector(state => state.userData.user)
  const isAuth = useSelector(state => state.userData.isAuth)

  useEffect(() => {
    fetchImages(id).then(data => {
      setImg(data)
    })
    fetchOneCar(id).then(data => {
      setCar(data)
      setSelectedImage(data.img)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div>
      <div className={style.carPage}>
        <div>
          <img className={style.fullImg} src={selectedImage ? process.env.REACT_APP_API_URL + '/'  + selectedImage : null}
               alt={car.model}/>
          <div className={style.littleImg}>
            <img src={process.env.REACT_APP_API_URL + '/' + car.img} alt="" onClick={() => setSelectedImage(car.img)}
                 className={car.img === selectedImage ? style.selectedMini : style.mini}/>
            {img.length === 0 ? null
              : img.map(img => (
                <img src={process.env.REACT_APP_API_URL + '/' + img.img} key={img.id} alt={img.img} onClick={() => setSelectedImage(img.img)}
                     className={img.img === selectedImage ? style.selectedMini : style.mini}/>
              ))
            }
            {
             isAuth ? user.mainInfo.role === 'ADMIN' ?
                <FileLoadInput inputType={'imageLoad'} carId={car.id} setImg={setImg}/> : null : null
            }
          </div>
        </div>
        <CarSpec car={car} user={user} carId={id}/>
      </div>
      <Footer/>
    </div>
  );
};

export default CarPage;