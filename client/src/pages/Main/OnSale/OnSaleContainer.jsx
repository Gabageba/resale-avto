import {connect} from "react-redux";
import OnSale from "./OnSale";

let mapStateToProps = (state) => {
  return {
    carsData: state.cars.carsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const OnSaleContainer = connect(mapStateToProps, mapDispatchToProps)(OnSale)

export default OnSaleContainer