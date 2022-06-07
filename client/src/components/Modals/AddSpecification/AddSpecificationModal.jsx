import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import CreateBrand from './CreateBrand';
import CreateModel from './CreateModel';
import CreateBodyType from './CreateBodyType';
import CreateDriveUnit from './CreateDriveUnit';
import CreateColor from './CreateColor';
import CreateSteeringWheel from './CreateSteeringWheel';
import CreateTransmission from './CreateTransmission';
import {useIntl} from 'react-intl';


const AddSpecificationModal = ({active, setActive, chosenSpec}) => {

  const [modalName, setModalName] = useState('')
  const intl = useIntl()

  const content = (chosenSpec, setActive) => {
    let content = <div>Что-то не то</div>
    switch (chosenSpec) {
      case intl.formatMessage({id: 'filter_brand'}):
        return <CreateBrand setActive={setActive}/>
      case intl.formatMessage({id: 'filter_model'}):
        return <CreateModel setActive={setActive}/>
      case intl.formatMessage({id: 'filter_body_type'}):
        return <CreateBodyType setActive={setActive}/>
      case intl.formatMessage({id: 'filter_drive_unit'}):
        return <CreateDriveUnit setActive={setActive}/>
      case intl.formatMessage({id: 'add_color'}):
        return <CreateColor setActive={setActive}/>
      case intl.formatMessage({id: 'filter_steering_wheel'}):
        return <CreateSteeringWheel setActive={setActive}/>
      case intl.formatMessage({id: 'filter_transmission'}):
        return <CreateTransmission setActive={setActive}/>
      default:
        return content
    }
  }

  useEffect(() => {
    if (chosenSpec === intl.formatMessage({id: 'filter_brand'})) {
      setModalName(intl.formatMessage({id: 'add_spec_brand'}))
    }
    if (chosenSpec === intl.formatMessage({id: 'filter_model'})) {
      setModalName(intl.formatMessage({id: 'add_spec_model'}))
    }
    if (chosenSpec === intl.formatMessage({id: 'filter_body_type'})) {
      setModalName(intl.formatMessage({id: 'add_spec_body_type'}))
    }
    if (chosenSpec === intl.formatMessage({id: 'filter_drive_unit'})) {
      setModalName(intl.formatMessage({id: 'add_spec_drive_unit'}))
    }
    if (chosenSpec === intl.formatMessage({id: 'add_color'})) {
      setModalName(intl.formatMessage({id: 'add_spec_color'}))
    }
    if (chosenSpec === intl.formatMessage({id: 'filter_steering_wheel'})) {
      setModalName(intl.formatMessage({id: 'add_spec_steering_wheel'}))
    }
    if (chosenSpec === intl.formatMessage({id: 'filter_transmission'})) {
      setModalName(intl.formatMessage({id: 'add_spec_transmission'}))
    }
  }, [chosenSpec])



  return (
    <Modal active={active} setActive={setActive} size={'small'} modalName={modalName}>
      <div>
        {content(chosenSpec ,setActive)}
      </div>
    </Modal>
  );
};

export default AddSpecificationModal;