"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "General Enquiry",
  message: "",
};

const serviceOptions = [
  "General Enquiry",
  "E-Waste Collection",
  "Secure Data Destruction",
  "IT Asset Disposal",
  "Corporate E-Waste Management",
  "Other",
];

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please describe your requirement (min 10 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      setValues(initialState);
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-10 text-center">
        <CheckCircle2 className="size-12 text-brand-600" />
        <h3 className="text-xl font-bold text-ink-900">Request received!</h3>
        <p className="max-w-sm text-sm text-ink-500">
          Thank you for reaching out. Our team will contact you within 24 hours to schedule your
          pickup or answer your questions.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-700 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            className={inputClasses(!!errors.name)}
          />
        </Field>
        <Field label="Email Address" error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="you@company.com"
            className={inputClasses(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder="+91 73580 26779"
            className={inputClasses(!!errors.phone)}
          />
        </Field>
        <Field label="Service Required">
          <select
            value={values.service}
            onChange={handleChange("service")}
            className={inputClasses(false)}
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message}>
        <textarea
          value={values.message}
          onChange={handleChange("message")}
          rows={5}
          placeholder="Tell us about the quantity and type of e-waste you'd like to recycle..."
          className={inputClasses(!!errors.message)}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-lift transition-colors hover:bg-brand-700 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending request...
          </>
        ) : (
          <>
            Send Request
            <Send className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-ink-800">{label}</span>
      {children}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}

function inputClasses(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400",
    "focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10",
    hasError ? "border-red-400" : "border-ink-200",
  ].join(" ");
}
