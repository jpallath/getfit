import { useState } from "react";

export type CheckboxProps = {
  text: string;
  index: number;
  isChecked: boolean;
  setChecked: Function;
};

export const CheckBox = ({
  text,
  isChecked,
  setChecked,
  index,
}: CheckboxProps) => {
  return (
    <label
      className={`border border-foreground p-2 ${
        isChecked
          ? "bg-foreground text-background"
          : "bg-background text-foreground"
      }`}
      onChange={() => setChecked(index)}
    >
      <input type="checkbox" className="hidden" checked={isChecked} />
      {text}
    </label>
  );
};
