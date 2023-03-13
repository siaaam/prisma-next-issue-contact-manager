import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = (props: any) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label className="block mt-1 mb-2" htmlFor={name}>
        {label}
      </label>
      <Field
        className="px-3 py-2 text-black w-[450px] focus:outline-none rounded-md"
        name={name}
        id={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
