import {connect} from "react-redux";
import CarsList from "./CarsList";
import {setCarsAC} from "../../../redux/carsReducer";

let mapStateToProps = (state) => {
  return {
    carsData: state.cars.carsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setCars: (carsData) => {
      dispatch(setCarsAC(carsData))
    }
  }
}

const OnSaleContainer = connect(mapStateToProps, mapDispatchToProps)(CarsList)

export default OnSaleContainer