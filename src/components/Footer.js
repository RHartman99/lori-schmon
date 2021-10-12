import React from "react";
import tw, { styled, css } from "twin.macro";
import Copyright from "./Copyright";
import ThematicBox from "./ThematicBox";
import Form from "./Form";
import CircleComponent from "./Circle";

const Element = styled.footer(({ padding, offblack }) => [
  tw`relative z-10 flex flex-col items-center justify-end px-4 py-12 text-white bg-gray`,
  padding > 0 &&
    css`
      @media (min-width: 1024px) {
        padding-top: calc(3rem + ${padding}px);
      }
    `,
  offblack && tw`bg-offblack`,
]);

const FormContainer = styled.div`
  ${tw`w-full mb-16`}
  max-width: 600px;
`;

const Title = tw.h2`text-8xl font-wild`;

const Circle = styled(CircleComponent)`
  ${tw`absolute hidden transform -translate-y-1/2 opacity-5 top-1/2 lg:block`}
  right: 2%;

  @media (max-width: 1280px) {
    height: 500px;
    width: 500px;
  }
`;

const Footer = ({ fields, ...rest }) => {
  const { formTitle, formId, copyright, successMsg, formFields } = fields;
  return (
    // @ts-ignore
    <Element {...rest}>
      <FormContainer>
        <ThematicBox tw="mb-8" />
        {!!formTitle && <Title>{formTitle}</Title>}
        {!!formId ? (
          <Form
            tw="mt-12 mb-24"
            fields={formFields}
            successMsg={successMsg}
            formId={formId}
          />
        ) : (
          <p tw="font-bold text-red-500">
            No Form ID was found. Please add one in the editor!
          </p>
        )}
      </FormContainer>
      <Copyright text={copyright} />
      <Circle />
    </Element>
  );
};

export default Footer;
