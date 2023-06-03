import Input from "./Input";
import Button from "./Button";
import React from "react";

interface Props {
  onClick: () => void;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

function InputSection({ onClick, forwardedRef }: Props) {
  return (
    <div className="input-section">
      <Input forwardedRef={forwardedRef} />
      <Button onClick={onClick} value="Go" />
    </div>
  );
}

export default InputSection;
