"use server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
const prisma = new PrismaClient();

const ExerciseSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  name: z.string(),
  description: z.string(),
  video: z.string(),
  image: z.string(),
});



const CreateExercise = ExerciseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function createExercise(formData: FormData) {
  const validatedFields = CreateExercise.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    video: formData.get("video"),
    image: formData.get("image"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: "WHOOPS",
    };
  }
  try {
    const { name, description, video, image } = validatedFields.data;
    const data = { name, description, video, image };
    const newExercise = await prisma.exercise.create({ data });
    console.log("tes");
  } catch (err) {
    console.log(err);
  }

  // if (req.method === "GET") {
  //   const users = await prisma.exercise.findMany();
  //   res.status(200).json(users);
  // } else {
  //   res.status(405).json({ message: "Method Not Allowed" });
  // }
}

// export async function createInvoice(prevState: State, formData: FormData) {
//   const validatedFields = CreateInvoice.safeParse({
//     customerId: formData.get("customerId"),
//     amount: formData.get("amount"),
//     status: formData.get("status"),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Create Invoice.",
//     };
//   }

//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;
//   const date = new Date().toISOString().split("T")[0];
//   try {
//     await sql`
//   INSERT INTO invoices (customer_id, amount, status, date)
//   VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
//   } catch (err) {
//     return { message: "Database Error: Failed to Create Invoice." };
//   }
//   revalidatePath("/dashboard/invoices");
//   redirect("/dashboard/invoices");
// }
