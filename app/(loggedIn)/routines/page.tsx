import { Label } from "@/components/ui/label";
import { CreateRoutineForm } from "@/components/ui/routines/createRoutines";
import { Select } from "@/components/ui/select";
import { fetchExercise } from "@/lib/data/exercises";

import { useState } from "react";
export default async function Page() {
  const exercises = await fetchExercise();
  return (
    <div className="p-8">
      <h1>Routines</h1>
      <div>
        <h2>Available Routines</h2>
      </div>
      <div>
        <h2>Create New Routine</h2>
        <div>
          <CreateRoutineForm exercises={exercises} />
        </div>
      </div>
    </div>
  );
}
