"use client";
import { fetchExercise } from "@/lib/data/exercises";
import Link from "next/link";
import { Exercise } from "@prisma/client";

export type ExerciseProps = {
  exercise: Exercise;
};

export const FetchExercise = async () => {
  const exercises = await fetchExercise();
  return (
    <div>
      {exercises.map((exercise) => {
        return <Exercise key={exercise.id} exercise={exercise} />;
      })}
    </div>
  );
};

const Exercise = ({ exercise }: ExerciseProps) => {
  return <Link href={`exercises/${exercise.id}`}>{exercise.name}</Link>;
};
