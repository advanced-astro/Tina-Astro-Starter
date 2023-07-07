import { TextField, ReferenceField, ButtonToggleField, ButtonToggle } from "tinacms";
import React from "react";

// ********** REUSABLE FIELD COMPONENTS **********



// ********** NON-REUSABLE FIELD COMPONENTS **********
// These were made for conditionally rendering fields on specific components or documents

export const internalLink = (props) => {
  const typeOfLink = React.useMemo(() => {
    let fieldName = props.field.name;
    fieldName = fieldName.substring(0, fieldName.lastIndexOf(".")) || fieldName;
    return fieldName.split(".").reduce((o, i) => o[i], props.tinaForm.values)
      .linkType;
  }, [props.tinaForm.values]);

  if (typeOfLink !== "internal") {
    return null;
  }
  return ReferenceField(props);
};

export const externalLink = (props) => {
  const typeOfLink = React.useMemo(() => {
    let fieldName = props.field.name;
    fieldName = fieldName.substring(0, fieldName.lastIndexOf(".")) || fieldName;
    return fieldName.split(".").reduce((o, i) => o[i], props.tinaForm.values)
      .linkType;
  }, [props.tinaForm.values]);

  if (typeOfLink !== "external") {
    return null;
  }
  return TextField(props);
};

export const columnWidthToggle = (props) => {
  const numCols = React.useMemo(() => {
    let fieldname = props.field.name;
    console.log(fieldname);
  }, [props.tinaForm.values]);
  return ButtonToggle(props);
};
