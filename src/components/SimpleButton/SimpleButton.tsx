import React from "react";

export interface SimpleButtonProps {
  label: string;
}

const SimpleButton = (props: SimpleButtonProps) => {
  return <button>{props.label}</button>;
};

export default SimpleButton;
