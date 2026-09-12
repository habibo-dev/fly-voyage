"use client";

import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {hint && !error ? <p className="mt-1 text-xs text-ink-400">{hint}</p> : null}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1 text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type Common = { id: string; error?: string };

export function TextInput({
  id,
  name,
  error,
  ...props
}: Common & InputHTMLAttributes<HTMLInputElement> & { name: string }) {
  return (
    <input
      id={id}
      name={name}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`input ${error ? "input-error" : ""}`}
      {...props}
    />
  );
}

export function SelectInput({
  id,
  name,
  error,
  children,
  ...props
}: Common & SelectHTMLAttributes<HTMLSelectElement> & { name: string }) {
  return (
    <select
      id={id}
      name={name}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`input appearance-none ${error ? "input-error" : ""}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function TextAreaInput({
  id,
  name,
  error,
  ...props
}: Common & TextareaHTMLAttributes<HTMLTextAreaElement> & { name: string }) {
  return (
    <textarea
      id={id}
      name={name}
      rows={4}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`input resize-y ${error ? "input-error" : ""}`}
      {...props}
    />
  );
}
