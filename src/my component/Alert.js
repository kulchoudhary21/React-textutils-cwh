import React from "react";
export const Alert = (props) => {
  const capitilize = (data) => {
    let lower = data.toLowerCase();
    let caps = lower.charAt(0).toUpperCase();
    return caps + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          class={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitilize(props.alert.type)} : </strong>
          {props.alert.message}
        </div>
      )}
    </div>
  );
};
export default Alert;
