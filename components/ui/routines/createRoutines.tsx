"use client";
import { useState } from "react";
import { Label } from "../label";
import { Select } from "../select";
import { Input } from "../input";
import { Exercise } from "@prisma/client";
import { Button } from "../button";
import { CheckBox } from "../checkbox";
import { createRoutine } from "@/lib/actions/routines";

type CreateRoutineFormProps = {
  exercises: Exercise[];
};

export const CreateRoutineForm = ({ exercises }: CreateRoutineFormProps) => {
  const [selectedValue, setSelected] = useState("Select an option");
  const [numberOfSets, setNumberOfSets] = useState("");
  const [numberOfReps, setNumberOfReps] = useState("");
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

  const setRoutine = () => {
    createRoutine({ selectedValue, days });
  };

  return (
    <form action={setRoutine}>
      <Label>Routine Name</Label>
      <Input
        className="border-foreground"
        name={"routineName"}
        id={"routineName"}
        placeholder="Routine 1"
      />
      <div className="flex justify-center p-4 gap-2">
        {days.map((day, index) => (
          <CheckBox
            text={day.text}
            isChecked={day.isChecked}
            setChecked={updateCheck}
            index={index}
          />
        ))}
      </div>
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
            placeholder="0"
            value={numberOfSets}
            onChange={(e) => setNumberOfSets(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="numberOfReps">Number of Sets</Label>
          <Input
            className="border-foreground"
            value={numberOfReps}
            onChange={(e) => setNumberOfReps(e.target.value)}
            placeholder="0"
          />
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};
