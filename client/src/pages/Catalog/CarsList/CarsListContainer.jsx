import {connect} from "react-redux";
import CarsList from "./CarsList";

let mapStateToProps = (state) => {
  return {
    carsData: state.cars.carsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const OnSaleContainer = connect(mapStateToProps, mapDispatchToProps)(CarsList)

export default OnSaleContainer