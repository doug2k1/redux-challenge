import React from "react";
import { connect } from "react-redux";
import { mileagesSelector } from "./store";

const CarMileage = ({ name, mileage }) => (
  <div>
    <p>Car: {name}</p>
    <p>Mileage: {mileage} Km</p>
  </div>
);

class Odometer extends React.Component {
  renderCount = 0;

  render() {
    return (
      <div>
        <h2>Mileages</h2>
        {this.props.cars.map(car => (
          <CarMileage key={car.name} name={car.name} mileage={car.mileage} />
        ))}
        <p>render count: {++this.renderCount}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cars: mileagesSelector(state)
});

export default connect(mapStateToProps)(Odometer);
