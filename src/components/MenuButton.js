import tw, { styled, css } from "twin.macro";
import React from "react";

const Button = styled.button(() => [
  tw`flex flex-col items-center justify-center text-2xl font-wild`,
  css`
    &:hover > div {
      ${tw`text-primary`}

      & > div {
        ${tw`mt-2 bg-primary`}
        &:first-child {
          ${tw`mt-0`}
        }
      }
    }
  `,
]);

const Text = styled.div`
  ${tw`transition-colors duration-500 ease-in-out`}
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
`;

const Line = styled.div`
  ${tw`transition-all duration-500 ease-in-out bg-white`}
  height: 45px;
  width: 2px;

  &:nth-child(1) {
    ${tw`mt-3`}
    margin-right: 0.35rem;
  }
`;

const MenuButton = ({ dark, ...rest }) => {
  return (
    <Button {...rest}>
      <div tw="flex mb-3">
        <Line css={dark ? [tw`bg-black`] : [tw`bg-white`]} />
        <Line css={dark ? [tw`bg-black`] : [tw`bg-white`]} />
      </div>
      <Text css={dark ? [tw`text-black`] : [tw`text-white`]}>menu</Text>
    </Button>
  );
};

export default MenuButton;
