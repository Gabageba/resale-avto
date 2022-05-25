import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import style from './ProfileSettingModal.module.css'
import ErrorPopUp from '../../ErrorPopUp/ErrorPopUp';


const ProfileSettingModal = ({active, setActive}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorActive, setErrorActive] = useState(false)
  const [errorText, setErrorText] = useState('')

  const saveChanges = () => {
    console.log(name)
    console.log(email)
  }

  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      console.log("Email is Correct");
      return true
    }
  }

  return (
    <Modal active={active} setActive={setActive} modalName={'Редактирование профиля'} size={'small'}>
      <ErrorPopUp active={errorActive} setActive={setErrorActive} errorText={errorText  }/>
      <div className={style.profileSetting}>
        <div className={style.block}>
          <span className={style.header}>Имя:</span>
          <input value={name} type="text" className={style.input} onChange={e => setName(e.target.value)}/>
        </div>
        <div className={style.block}>
          <span className={style.header}>Email:</span>
          <input name={email} value={email} type="email" className={style.input} autoComplete={email} required onChange={text => setEmail(text.target.value)}/>
        </div>
        {/*<input type="submit" value="Отправить"/>*/}
        <button className={style.saveButton} onClick={saveChanges}>Сохранить</button>
      </div>

    </Modal>
  );
};

export default ProfileSettingModal;