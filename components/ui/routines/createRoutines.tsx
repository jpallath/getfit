"use client";
import { useState } from "react";
import { Label } from "../label";
import { Select } from "../select";
import { Input } from "../input";
import { Exercise } from "@prisma/client";
import { Button } from "../button";
import { CheckBox } from "../checkbox";

type CreateRoutineFormProps = {
  exercises: Exercise[];
};

export const CreateRoutineForm = ({ exercises }: CreateRoutineFormProps) => {
  const [selectedValue, setSelected] = useState("select an option");
  const [days, setChecked] = useState([
    { text: "SU", isChecked: false },
    { text: "MO", isChecked: false },
    { text: "TU", isChecked: false },
    { text: "WE", isChecked: false },
    { text: "TH", isChecked: false },
    { text: "FR", isChecked: false },
    { text: "SA", isChecked: false },
  ]);

  const updateCheck = (index: number) => {
    const newState = [...days];
    newState[index].isChecked = !days[index].isChecked;
    setChecked(newState);
  };

  return (
    <form>
      <Label>Exercise</Label>
      <Select
        selectedValue={selectedValue}
        setSelected={setSelected}
        items={exercises}
      />
      <div className="flex gap-2">
        <div>
          <Label htmlFor="numberOfSets">Number of Sets</Label>
          <Input
            className="border-foreground"
            name={"numberOfSets"}
            id={"numberOfSets"}
            placeholder="0"
          />
        </div>
        <div>
          <Label htmlFor="numberOfReps">Number of Sets</Label>
          <Input
            className="border-foreground"
            name={"numberOfReps"}
            id={"numberOfReps"}
            placeholder="0"
          />
        </div>
      </div>
      <div className="flex justify-center p-4">
        {days.map((day, index) => (
          <CheckBox
            text={day.text}
            isChecked={day.isChecked}
            setChecked={updateCheck}
            index={index}
          />
        ))}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
