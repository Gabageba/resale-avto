import React from 'react';
import Modal from '../Modal/Modal';

const AddSpecificationModal = ({active, setActive}) => {
  return (
    <Modal active={active} setActive={setActive} size={'small'}>
      <div>
        <h2>Добавить</h2>
      </div>
    </Modal>
  );
};

export default AddSpecificationModal;