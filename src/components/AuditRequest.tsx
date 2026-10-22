"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, AlertCircle, Phone, MapPin } from "lucide-react";

export default function AuditRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domainUrl: "",
    goal: "",
    botField: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const directEmail = "ayanaklekar1@gmail.com";
  const directPhone = "+971 56 618 2617";
  const whatsappUrl = "https://wa.me/971566182617?text=Hi%20Ayan,%20I%20would%20like%20to%20request%20a%20free%20audit";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(directPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (formData.botField.trim() !== "") {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.domainUrl.trim()) {
      setErrorMessage("Please fill in your name, email, and website link.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      `Free Audit Request: ${formData.name} (${formData.domainUrl})`
    );
    const body = encodeURIComponent(
      `Hi Ayan,\n\nI would like a free website & SEO audit.\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Website / Link: ${formData.domainUrl}\n` +
        `• Main Goal / Notes: ${formData.goal || "Not specified"}\n\n` +
        `Thanks,\n${formData.name}`
    );

    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-18 border-b border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-700/80">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-semibold mb-1">
              Contact
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              Get a Free Audit
            </h2>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono mt-2 sm:mt-0 font-medium">
            Send your website link. I will review it and reply within 24 hours.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left: Direct Contact & Info */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-6 space-y-4 transition-colors duration-200 shadow-xs">
            <div>
              <h3 className="text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-1">
                Direct Communication
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                You work directly with me. I&apos;ll review your website and share honest, straightforward suggestions on what to improve.
              </p>
            </div>

            {/* Direct Email Box */}
            <div className="p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-1 shadow-2xs">
              <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                Direct Email:
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${directEmail}`}
                  className="font-mono text-xs text-zinc-950 dark:text-zinc-50 font-bold hover:underline truncate"
                >
                  {directEmail}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 active:scale-90 transition-all duration-150 shrink-0 cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold animate-fade-slide-up">
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>

            {/* Direct WhatsApp / Phone Box */}
            <div className="p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-1 shadow-2xs">
              <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                WhatsApp &amp; Phone (Dubai):
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-950 dark:text-zinc-50 font-bold hover:underline truncate flex items-center gap-1.5"
                >
                  <span>{directPhone}</span>
                </a>
                <div className="flex items-center gap-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 active:scale-90 transition-all duration-150 shrink-0"
                    title="Open in WhatsApp"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 active:scale-90 transition-all duration-150 shrink-0 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
              {copiedPhone && (
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold animate-fade-slide-up">
                  ✓ Copied phone number!
                </div>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400 px-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="truncate">Al Baraha, Deira, Dubai, UAE</span>
            </div>

            <div className="space-y-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-300 pt-2 border-t border-zinc-200 dark:border-zinc-800 font-medium">
              <p>• Free review of your website and search visibility.</p>
              <p>• Honest feedback with no pressure or sales pitches.</p>
              <p>• Clear steps you can take to get more inquiries.</p>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 md:p-7 transition-colors duration-200 shadow-xs">
            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-900 dark:text-zinc-100 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Message Prepared
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-sm mx-auto leading-relaxed font-medium">
                  Your email client opened with your details. You can also email directly to{" "}
                  <span className="font-mono font-bold text-zinc-950 dark:text-zinc-50">
                    {directEmail}
                  </span>.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold cursor-pointer shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) =>
                      setFormData({ ...formData, botField: e.target.value })
                    }
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-lg border border-red-300 dark:border-red-800 text-xs font-mono text-red-700 dark:text-red-300 flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-bold mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:border-zinc-950 dark:focus:border-zinc-200 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition-all duration-150 font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-bold mb-1"
                    >
                      Your Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:border-zinc-950 dark:focus:border-zinc-200 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition-all duration-150 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-domain"
                    className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-bold mb-1"
                  >
                    Website or Social Profile *
                  </label>
                  <input
                    id="form-domain"
                    type="text"
                    required
                    placeholder="https://yourwebsite.com"
                    value={formData.domainUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, domainUrl: e.target.value })
                    }
                    className="w-full px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:border-zinc-950 dark:focus:border-zinc-200 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition-all duration-150 font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-notes"
                    className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-bold mb-1"
                  >
                    What&apos;s your main goal? <span className="text-zinc-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="form-notes"
                    rows={2}
                    placeholder="e.g. Traffic dropped after update, want more local phone calls, need higher Google rank..."
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    className="w-full px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 resize-none focus:border-zinc-950 dark:focus:border-zinc-200 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition-all duration-150 font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-xs cursor-pointer group"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Free Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
