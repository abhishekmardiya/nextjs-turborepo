"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import styles from "./DemoRequestForm.module.css";
import { type DemoFormValues, demoFormSchema } from "./demoFormSchema";

export type DemoRequestFormProps = {
  contextLabel: string;
  onSubmit?: (values: DemoFormValues) => void;
  fullNameLabel?: string;
  emailLabel?: string;
};

const defaultValues: DemoFormValues = {
  fullName: "",
  email: "",
};

export function DemoRequestForm({
  contextLabel,
  onSubmit,
  fullNameLabel = "Full name",
  emailLabel = "Email",
}: DemoRequestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<DemoFormValues>({
    resolver: valibotResolver(demoFormSchema),
    defaultValues,
  });

  const submit = handleSubmit((values) => {
    if (onSubmit) {
      onSubmit(values);
      return;
    }
    console.log(`[${contextLabel}]`, values);
    reset(defaultValues);
  });

  return (
    <form className={styles.form} onSubmit={submit}>
      <p className={styles.hint}>{contextLabel}</p>

      <label className={styles.field}>
        <span>{fullNameLabel}</span>
        <input autoComplete="name" type="text" {...register("fullName")} />
        {errors.fullName ? (
          <small className={styles.error}>{errors.fullName.message}</small>
        ) : null}
      </label>

      <label className={styles.field}>
        <span>{emailLabel}</span>
        <input autoComplete="email" type="email" {...register("email")} />
        {errors.email ? (
          <small className={styles.error}>{errors.email.message}</small>
        ) : null}
      </label>

      <button className={styles.submit} type="submit">
        Submit
      </button>

      {isSubmitSuccessful ? (
        <p className={styles.success}>Thanks — request recorded.</p>
      ) : null}
    </form>
  );
}
