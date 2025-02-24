import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const testCaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  result: z.string(),
  passed: z.boolean(),
})

export type TestCase = z.infer<typeof testCaseSchema>
