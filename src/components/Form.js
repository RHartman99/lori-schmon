import React, { useRef, useState, useEffect } from "react";
import Input from "./Input";
import tw from "twin.macro";
import SubmitButton from "./ArrowButton";
import { useForm } from "@formcarry/react";
import AnimateHeight from "react-animate-height";

const FormComponent = tw.form`-my-4 w-full flex flex-col items-center justify-center`;

const Response = tw.p`text-center font-wild text-2xl mt-12`;

/**
 * Checks an input element for correctness
 * and also returns its validation message.
 *
 * @param input   Input element to validate
 * @param strict  Flag to enable strict mode, where empty required inputs will error.
 * @returns       An array with two elements, the validity and the error message.
 */
function validate(input, strict = false) {
  // If not in strict mode, return null instead of false,
  // because the input shouldn't error if it is empty while editing.
  const valid =
    strict === false && input.value === "" ? null : input.checkValidity();
  const errorMessage = input.validationMessage;

  return [valid, errorMessage];
}

const Form = ({ fields, formId, successMsg, ...rest }) => {
  // Initialize the form's state for realtime errors.
  const initialState = !!fields
    ? fields.map(() => ({
        ref: React.createRef(),
        valid: null,
        errorMessage: "",
      }))
    : [];

  const [inputs, setInputs] = useState(initialState);
  const formRef = useRef(null);

  const {
    state: { submitted },
    submit,
  } = useForm({ id: formId });

  /**
   * Takes the index of an input, validates it, and
   * updates its state if needed.
   *
   * @param i The index of the field.
   */

  const onChange = (i) => {
    const state = [...inputs];
    const field = state[i];
    const input = field.ref.current;

    const [valid, errorMessage] = validate(input);

    // If the state is new, update it.
    if (errorMessage !== field.errorMessage || valid !== field.valid) {
      state[i].errorMessage = errorMessage;
      state[i].valid = valid;

      // @ts-ignore
      setInputs(state);
    }
  };

  /**
   * Validates all inputs of a form and submits it to FormCarry.
   * If not valid, will update the form's state to reflect the errors.
   *
   * @param e The FormEvent
   */
  const onSubmit = (e) => {
    e.preventDefault();
    const state = [...inputs];
    // Validate all elements
    if (
      state.every(({ ref }, i) => {
        if (ref.current) {
          const [valid, errorMessage] = validate(ref.current, true);
          inputs[i].valid = valid;
          inputs[i].errorMessage = errorMessage;
          return valid;
        }
        return false;
      })
    )
      // Submit if all inputs are valid
      submit(e);
    // Otherwise, set the state to error incorrect fields.
    else setInputs(state);
  };

  // Resets the form whenever it is succesfully submitted.
  useEffect(() => {
    submitted && formRef.current?.reset();
  }, [submitted]);

  return (
    <FormComponent onSubmit={onSubmit} ref={formRef} {...rest}>
      {inputs.map(({ valid, errorMessage, ref }, i) => {
        const field = fields[i];
        return (
          <Input
            errorMsg={errorMessage}
            tw="my-8"
            {...field}
            valid={valid}
            inputRef={ref}
            index={i}
            onChange={() => {
              onChange(i);
            }}
            key={i}
          />
        );
      })}
      <SubmitButton type="submit" formNoValidate tw="mt-8" />
      <AnimateHeight height={submitted ? "auto" : 0} duration={500}>
        <Response>{successMsg}</Response>
      </AnimateHeight>
    </FormComponent>
  );
};

export default Form;
