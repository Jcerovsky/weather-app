import React, { forwardRef, useState } from "react";

interface Props {
  forwardedRef: React.RefObject<HTMLInputElement>;
}

const Input = forwardRef(({ forwardedRef }: Props) => {
  const [inputCity, setInputCity] = useState("");

  return (
    <input
      className="city-input"
      type="text"
      placeholder="Enter a city"
      id="city-input"
      value={inputCity}
      onChange={(e) => setInputCity(e.target.value)}
      ref={forwardedRef}
    />
  );
});

export default Input;
