import React from 'react';

export interface SimpleButtonProps {
  label: string;
}

const SimpleButton = (props: SimpleButtonProps) => {
  return <button className=''>{props.label}</button>;
};

export default SimpleButton;
