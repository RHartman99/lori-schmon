import React from "react";
import tw, { styled } from "twin.macro";
import AnimateHeight from "react-animate-height";

const styles = ({ valid }) => [
  tw`px-2 py-2 transition-colors duration-500 ease-in-out bg-transparent border-b-2 focus:(outline-none border-bright) border-dark`,
  valid === false && tw`border-red-500!`,
  valid === true && tw`border-bright`,
];

const TextArea = styled.textarea(styles);
const InputComp = styled.input(styles);
const Container = styled.div`
  ${tw`relative flex flex-col w-full`}

  textarea {
    min-height: 100px;
  }
`;

const Error = styled.p`
  ${tw`font-bold text-red-500`}
`;

const Label = tw.label`font-wild text-2xl`;

const Input = ({
  type,
  required,
  label,
  index,
  valid,
  errorMsg,
  onChange,
  inputRef,
  ...rest
}) => {
  // Type is actually null when first creating a field in the CMS.
  // In this case, the first option SHOULD be selected, which is text.
  if (type === null) type = "text";

  // Replace any whitespace with - and lowercase the label.
  // If the label is null, just put a temporary placeholder.
  let id;
  if (!!label) id = "f-" + label.replace(/ */g, "-").toLowerCase();
  else id = "f-UNKNOWN";
  const InputComponent = type === "textarea" ? TextArea : InputComp;
  return (
    // @ts-ignore
    <Container {...rest}>
      <Label htmlFor={id}>
        {label}
        {required && " *"}
      </Label>
      {/* @ts-ignore */}
      <InputComponent
        ref={inputRef}
        type={type}
        name={label}
        id={id}
        valid={valid}
        onChange={onChange}
        data-index={index}
        required={required}
      />
      <AnimateHeight duration={500} height={valid === false ? "auto" : 0}>
        <Error>{errorMsg}</Error>
      </AnimateHeight>
    </Container>
  );
};

export default Input;
