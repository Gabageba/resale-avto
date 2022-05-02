import React, {useState} from 'react';
import AddCarModal from './Modals/AddCarModal/AddCarModal';
import AddSpecificationModal from './Modals/AddSpecification/AddSpecificationModal';

const ModulesController = ({addCarModalActive, setAddCarModalActive}) => {

  const [addSpecModalActive, setAddSpecModalActive] = useState(false)


  return (
    <div>
      <AddCarModal active={addCarModalActive} setActive={setAddCarModalActive}/>
      <AddSpecificationModal active={addSpecModalActive} setActive={setAddSpecModalActive}/>
    </div>
  );
};

export default ModulesController;