import React from 'react';
import Modal from '../Modal/Modal';
import CreateBrand from './CreateBrand';
import CreateModel from './CreateModel';
import CreateBodyType from './CreateBodyType';
import CreateDriveUnit from './CreateDriveUnit';
import CreateColor from './CreateColor';
import CreateSteeringWheel from './CreateSteeringWheel';
import CreateTransmission from './CreateTransmission';


const content = (chosenSpec, setActive) => {
  let content = <div>Что-то не то</div>
  switch (chosenSpec) {
    case 'Марка':
      return <CreateBrand setActive={setActive}/>
    case 'Модель':
      return <CreateModel setActive={setActive}/>
    case 'Тип кузова':
      return <CreateBodyType setActive={setActive}/>
    case 'Привод':
      return <CreateDriveUnit setActive={setActive}/>
    case 'Цвет':
      return <CreateColor setActive={setActive}/>
    case 'Руль':
      return <CreateSteeringWheel setActive={setActive}/>
    case 'КПП':
      return <CreateTransmission setActive={setActive}/>
    default:
      return content
  }
}

const AddSpecificationModal = ({active, setActive, chosenSpec}) => {
  return (
    <Modal active={active} setActive={setActive} size={'small'}>
      <div>
        {content(chosenSpec ,setActive)}
      </div>
    </Modal>
  );
};

export default AddSpecificationModal;