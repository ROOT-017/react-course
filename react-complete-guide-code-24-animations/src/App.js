import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
  enter: 400,
  exit: 1000,
};
class App extends Component {
  // const [modalIsOpen, setModalIsOpen] = useState(false)
  state = {
    modalIsOpen: false,
    showBlock: false,
  };
  showModal = () => {
    this.setState({ modalIsOpen: true });
    console.log(this.state.modalIsOpen);
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/* <button
          onClick={() => {
            this.setState((prevState) => ({
              showBlock: !prevState.showBlock,
            }));
          }}
        >
          Toggle Button
        </button>
        <br />
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          unmountOnExit
          mountOnEnter
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition> */}
        {/* <Transition
          in={this.state.modalIsOpen}
          mountOnEnter
          unmountOnExit
          timeout={animationTiming}
        >
          {(state) => <Modal closed={this.closeModal} show={state} />}
        </Transition> */}
        {/* {this.state.modalIsOpen && (
          <Backdrop show={this.state.modalIsOpen} closed={this.closeModal} />
        )} */}
        <Modal closed={this.closeModal} show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
