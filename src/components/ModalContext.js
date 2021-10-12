import React from "react";

const defaultState = {
  isOpen: false,
  url: "",
  modalRef: null,
  toggleModal: () => {},
  openModal: () => {},
  closeModal: () => {},
  setURL: () => {},
};

const ModalContext = React.createContext(defaultState);

export class ModalProvider extends React.Component {
  state = {
    isOpen: false,
    url: "",
    modalRef: null,
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  openModal = (url = "") => {
    this.toggleScroll();
    this.setState({ isOpen: true, url }, this.afterOpen);
  };

  afterOpen() {
    // Autoplay the embedded vimeo video
    // const iframe = document.querySelector("#modal-iframe iframe");
    // if (iframe) new Player(iframe).play();

    // Bind escape to closing the modal
    document.onkeydown = (e) => {
      e.key === "Escape" && this.closeModal();
    };
  }

  closeModal = () => {
    this.toggleScroll();
    this.setState({ isOpen: false });

    // Autopause the embedded vimeo video
    // const iframe = document.querySelector("#modal-iframe iframe");
    // if (iframe) new Player(iframe).pause();

    // Unbind the escape binding
    document.onkeydown = null;
  };

  setURL = (url) => {
    this.setState({ url });
  };

  toggleScroll = () => {
    if (document.body.classList.contains("locked")) {
      document.body.maxHeight = null;
      document.body.style.overflowY = null;
    } else {
      document.body.maxHeight = "100vh";
      document.body.style.overflowY = "hidden";
    }
    document.body.classList.toggle("locked");
  };

  render() {
    const { children } = this.props;
    const { isOpen, url, modalRef } = this.state;
    return (
      <ModalContext.Provider
        value={{
          isOpen,
          url,
          modalRef,
          toggleModal: this.toggleModal,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  }
}

export default ModalContext;
