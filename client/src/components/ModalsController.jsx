import React, {useState} from 'react';
import AddCarModal from './Modals/AddCarModal/AddCarModal';
import AddSpecificationModal from './Modals/AddSpecification/AddSpecificationModal';

const ModalsController = ({addCarModalActive, setAddCarModalActive}) => {

  const [addSpecModalActive, setAddSpecModalActive] = useState(false)
  const [chosenSpec, setChosenSpec] = useState('')

  const choseSpecAdd = (name) => {
    setChosenSpec(name)
    setAddSpecModalActive(true)
  }

  return (
    <div>
      <AddCarModal active={addCarModalActive} setActive={setAddCarModalActive} choseSpecAdd={choseSpecAdd}/>
      <AddSpecificationModal active={addSpecModalActive} setActive={setAddSpecModalActive} chosenSpec={chosenSpec}/>
    </div>
  );
};

export default ModalsController;