import React from "react";
import tw, { css, styled } from "twin.macro";
import ModalContext from "./ModalContext";
import Vimeo from "@u-wave/react-vimeo";

const Modal = styled.div(({ open }) => [
  tw`fixed top-0 left-0 flex items-center justify-center w-screen h-screen transition-all duration-500 ease-in-out`,
  css`
    z-index: 10000000000;
  `,
  !open &&
    css`
      ${tw`opacity-0 pointer-events-none`}
      .modal-content {
        transform: scale(2);
      }
    `,
]);

const Overlay = styled.div(() => [
  tw`absolute top-0 left-0 flex w-full h-full bg-black`,
  css`
    opacity: 0.6;
    z-index: -1;
  `,
]);

const CloseButton = styled.button(() => [
  tw`absolute right-0 text-5xl font-black text-white transition-all duration-500 ease-in-out`,
  css`
    left: 100%;
    bottom: 100%;
    @media (max-width: 1300px) {
      left: inherit;
      right: 0;
    }
    &:hover {
      ${tw`text-primary`}
      transform: rotate(90deg);
    }
  `,
]);

const Content = styled.div(() => [
  css`
    width: 1000px;
    max-width: 100vw;
  `,
  tw`relative transition-all duration-500 ease-in-out bg-white shadow-lg font-mont`,
]);

export default () => (
  <ModalContext.Consumer>
    {(modal) => (
      <>
        <Modal open={modal.isOpen}>
          <Overlay onClick={modal.closeModal} />
          <Content className="modal-content">
            <CloseButton onClick={modal.closeModal}>×</CloseButton>
            {!!modal.url && (
              <Vimeo
                video={modal.url}
                autoplay
                paused={!modal.isOpen}
                responsive
              />
            )}
          </Content>
        </Modal>
      </>
    )}
  </ModalContext.Consumer>
);
