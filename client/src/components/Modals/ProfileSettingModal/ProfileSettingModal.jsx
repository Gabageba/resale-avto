import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import style from './ProfileSettingModal.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setUserAC} from '../../../redux/userReducer';
import {updateUser} from '../../../http/userAPI';
import {FormattedMessage, useIntl} from 'react-intl';


const ProfileSettingModal = ({active, setActive, setErrorText, setErrorActive}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.userData.user)
  const intl = useIntl()

  const saveChanges = () => {
    if (email) {
      if (validate(email)) {
        updateUser(user.mainInfo.id, email, name).then(data => {
          dispatch(setUserAC(data))
          setActive(false)
          clear()
        })
      } else {
        setErrorText(intl.formatMessage({id: 'prof_set_email_err'}))
        setErrorActive(true)
      }
    } else {
      updateUser(user.mainInfo.id, email, name).then(data => {
        dispatch(setUserAC(data))
        setActive(false)
        clear()
      })
    }
  }

  const clear = () => {
    setName('')
    setEmail('')
  }

  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text) !== false;
  }

  return (
    <Modal active={active} setActive={setActive} modalName={intl.formatMessage({id: 'prof_set_head'})} size={'small'}>
      <div className={style.profileSetting}>
        <div className={style.block}>
          <span className={style.header}><FormattedMessage id='prof_set_name' /></span>
          <input value={name} type="text" className={style.input} onChange={e => setName(e.target.value)}/>
        </div>
        <div className={style.block}>
          <span className={style.header}>Email:</span>
          <input name={email} value={email} type="email" className={style.input} autoComplete={email} required onChange={text => setEmail(text.target.value)}/>
        </div>
        {/*<input type="submit" value="Отправить"/>*/}
        <button className={style.saveButton} onClick={saveChanges}><FormattedMessage id='prof_set_save' /></button>
      </div>

    </Modal>
  );
};

export default ProfileSettingModal;