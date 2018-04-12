import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Odometer from "./Odometer";
import Speedometer from "./Speedometer";
import reducer from "./store";
import updater from "./updater";

const store = createStore(reducer);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-around"
};

class App extends React.Component {
  componentDidMount() {
    updater.start(store.dispatch);
  }

  render() {
    return (
      <div style={styles}>
        <Speedometer />
        <Odometer />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
