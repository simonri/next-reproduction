"use server";

import { setTimeout } from "node:timers/promises";
import { z } from "zod";
import { actionClient } from "./safe-action";


const exampleSchema = z.object({
  text: z.string(),
});

export const exampleAction = actionClient
  .schema(exampleSchema)
  .action(async ({ parsedInput }) => {
    await setTimeout(1000);
    console.log(parsedInput.text);
  });
