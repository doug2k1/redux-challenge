import React from "react";
import { connect } from "react-redux";
import { speedsSelector } from "./store";

const CarSpeed = ({ name, speed }) => (
  <div>
    <p>Car: {name}</p>
    <p>Speed: {speed} Km</p>
  </div>
);

class Speedometer extends React.Component {
  renderCount = 0;

  render() {
    return (
      <div>
        <h2>Speeds</h2>
        {this.props.cars.map(car => (
          <CarSpeed key={car.name} name={car.name} speed={car.speed} />
        ))}
        <p>render count: {++this.renderCount}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cars: speedsSelector(state)
});

export default connect(mapStateToProps)(Speedometer);
