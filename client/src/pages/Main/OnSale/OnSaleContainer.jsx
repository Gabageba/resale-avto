import {connect} from "react-redux";
import OnSale from "./OnSale";
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

const OnSaleContainer = connect(mapStateToProps, mapDispatchToProps)(OnSale)

export default OnSaleContainer