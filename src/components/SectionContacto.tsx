"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "@/components/SectionHeader";

type FormFields = {
  name: string;
  company: string;
  email: string;
  rfc: string;
  phone: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const emptyForm: FormFields = {
  name: "",
  company: "",
  email: "",
  rfc: "",
  phone: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SectionContacto() {
  const { t } = useLocale();
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});

  const updateField = (field: keyof FormFields, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateClient = () => {
    const next: Partial<Record<keyof FormFields, string>> = {};
    if (!EMAIL_PATTERN.test(form.email.trim())) next.email = t.contactoFormEmailInvalid;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateClient()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          rfc: form.rfc.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) throw new Error("submit failed");

      setForm(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader badge={t.contactoLabel} title={t.contactoTitle} subtitle={t.contactoIntro} />

        <div className="mt-14 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="form-label">
                  {t.contactoFormName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder={t.contactoFormNamePlaceholder}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="form-label">
                  {t.contactoFormCompany}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  placeholder={t.contactoFormCompanyPlaceholder}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="form-label">
                {t.contactoFormEmail}
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder={t.contactoFormEmailPlaceholder}
                className={`form-input${errors.email ? " form-input-error" : ""}`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-rfc" className="form-label">
                  {t.contactoFormRfc}
                </label>
                <input
                  id="contact-rfc"
                  type="text"
                  value={form.rfc}
                  onChange={(e) => updateField("rfc", e.target.value)}
                  placeholder={t.contactoFormRfcPlaceholder}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="form-label">
                  {t.contactoFormPhone}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder={t.contactoFormPhonePlaceholder}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="form-label">
                {t.contactoFormMessage}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder={t.contactoFormMessagePlaceholder}
                className="form-input resize-y min-h-[120px]"
              />
            </div>

            <div className="flex flex-col items-center gap-3 pt-1">
              <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
                {status === "submitting" ? t.contactoFormSubmitting : t.contactoFormSubmit}
              </button>
              <p className="text-sm text-gray-mid text-center">{t.contactoConfidential}</p>
              {status === "success" && (
                <p className="text-sm text-primary font-semibold text-center" role="status">
                  {t.contactoFormSuccess}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 text-center" role="alert">
                  {t.contactoFormError}{" "}
                  <a href={`mailto:${t.contactoEmail}`} className="underline font-semibold">
                    {t.contactoEmail}
                  </a>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
