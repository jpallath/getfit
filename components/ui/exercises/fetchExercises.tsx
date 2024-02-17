"use client";
import { fetchExercise } from "@/lib/data/exercises";
import Link from "next/link";

export type ExerciseProps = {
  exercise: Exercise;
};

export type Exercise = {
  id: number;
  description: string;
  name: string;
  video: string;
  image: string;
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
