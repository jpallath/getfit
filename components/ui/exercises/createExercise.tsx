"use client";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { createExercise } from "@/lib/actions/exercises";

export type Exercise = {
  id: string;
  name: string;
  description: string;
  video: string;
  image: string;
};

export const CreateExercise = () => {
  return (
    <form action={createExercise}>
      {/* Exercise Name */}
      <div>
        <Label htmlFor="name">Exercise</Label>
        <Input name={"name"} id={"name"} placeholder="insert exercise" />
      </div>
      {/* Description */}
      <div>
        <Label htmlFor="description">Exercise</Label>
        <Input
          name={"description"}
          id={"description"}
          placeholder="description"
        />
      </div>
      {/* Video and Image */}
      <div>
        <Label htmlFor="video">Video</Label>
        <Input name={"video"} id={"video"} placeholder="https://wwww..." />
        <Label htmlFor="image">Image</Label>
        <Input name={"image"} id={"image"} placeholder="https://www..." />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
