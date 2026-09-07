"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "@/components/SectionHeader";

type FormFields = {
  name: string;
  company: string;
  rfc: string;
  phone: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const emptyForm: FormFields = {
  name: "",
  company: "",
  rfc: "",
  phone: "",
  message: "",
};

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
    if (form.name.trim().length < 2) next.name = t.contactoFormRequired;
    if (form.company.trim().length < 2) next.company = t.contactoFormRequired;
    if (!/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/i.test(form.rfc.trim())) next.rfc = t.contactoFormRequired;
    if (form.phone.trim().length < 7) next.phone = t.contactoFormRequired;
    if (form.message.trim().length < 10) next.message = t.contactoFormRequired;
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
                  className={`form-input${errors.name ? " form-input-error" : ""}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
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
                  className={`form-input${errors.company ? " form-input-error" : ""}`}
                />
                {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
              </div>
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
                  onChange={(e) => updateField("rfc", e.target.value.toUpperCase())}
                  placeholder={t.contactoFormRfcPlaceholder}
                  className={`form-input uppercase${errors.rfc ? " form-input-error" : ""}`}
                  maxLength={13}
                />
                {errors.rfc && <p className="mt-1 text-xs text-red-500">{errors.rfc}</p>}
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
                  className={`form-input${errors.phone ? " form-input-error" : ""}`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
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
                className={`form-input resize-y min-h-[120px]${errors.message ? " form-input-error" : ""}`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
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
