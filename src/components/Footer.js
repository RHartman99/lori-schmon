import React from "react";
import tw, { styled, css } from "twin.macro";
import Copyright from "./Copyright";
import ThematicBox from "./ThematicBox";
import Form from "./Form";

const Element = styled.footer(({ padding }) => [
  tw`relative z-10 flex flex-col items-center justify-end px-4 py-12 text-white bg-black`,
  padding > 0 &&
    css`
      @media (min-width: 1024px) {
        padding-top: calc(3rem + ${padding}px);
      }
    `,
]);

const FormContainer = styled.div`
  ${tw`w-full mb-16`}
  max-width: 600px;
`;

const Title = tw.h2`text-8xl font-wild`;

const Footer = ({ padding, fields }) => {
  const { formTitle, formId, copyright, successMsg, formFields } = fields;
  return (
    // @ts-ignore
    <Element padding={padding}>
      <FormContainer>
        <ThematicBox tw="mb-8" />
        {!!formTitle && <Title>{formTitle}</Title>}
        {/* //TODO: Add this to a global form. */}
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
    </Element>
  );
};

export default Footer;
