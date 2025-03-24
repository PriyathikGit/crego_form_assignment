import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import schema from "../../formSchema.json"
import uiSchema from "../../uiSchema.json"
import { RangeWidget } from "./Range_Widget";
import { CustomArrayFieldTemplate } from "./ArrayField";
import "./index.css"

// test
// pan = ABCDE1234F 
// gst = 22ABCDE1234F1Z5


// Templates
const templates = {
  ArrayFieldTemplate: CustomArrayFieldTemplate,
};

const widget = {
  range: RangeWidget
}

// Function to transform error messages
const transformErrors = (errors) => {
  return errors.map(error => {
    if (error.name === "minimum" && error.property === ".loanDetails.creditScore") {
      return { ...error, message: "Credit score must be at least 700 for loan approval." };
    }
    if (error.property === '.loanDetails.bankStatements') {
      return { ...error, message: "one bank statement is required for loan approval" }
    }
    if (error.property === ".loanDetails.guarantors") {
      return { ...error, message: "atleast two guarantors is required for your loan approval" }
    }
    if (error.name === 'oneOf') {
      return ''
    }
    return error;
  });
};

const LoanApplicationForm = () => {
  const handleSubmit = (form) => {
    alert("form submitted succesfully!!!")
    console.log("form submiited", form)
  }

  return (
    <div className="container mt-4">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        templates={templates}
        onSubmit={handleSubmit}
        widgets={widget}
        transformErrors={transformErrors}
      />
    </div>
  );
};

export default LoanApplicationForm;