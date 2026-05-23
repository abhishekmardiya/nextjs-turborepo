import * as v from "valibot";

export const demoFormSchema = v.object({
  fullName: v.pipe(
    v.string(),
    v.nonEmpty("Name is required"),
    v.maxLength(120),
  ),
  email: v.pipe(
    v.string(),
    v.nonEmpty("Email is required"),
    v.email("Enter a valid email"),
  ),
});

export type DemoFormValues = v.InferOutput<typeof demoFormSchema>;
