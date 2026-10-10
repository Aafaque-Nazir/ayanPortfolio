"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, AlertCircle } from "lucide-react";

export default function AuditRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domainUrl: "",
    serviceType: "Google SEO Growth",
    trafficScale: "10k - 50k / month",
    notes: "",
    botField: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const directEmail = "ayan.aklekar.growth@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
      `Hi Ayan,\n\nI want to get more traffic for my business.\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Website: ${formData.domainUrl}\n` +
        `• Service: ${formData.serviceType}\n` +
        `• Monthly Visitors: ${formData.trafficScale}\n\n` +
        `Details:\n${formData.notes || "None provided"}\n\n` +
        `Thanks,\n${formData.name}`
    );

    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 md:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1.5">
              Contact
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Get a Free Website Audit
            </h2>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-2 sm:mt-0">
            Send your website link. I will review it and reply within 24 hours.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Contact & Info */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 md:p-7 space-y-6 transition-colors duration-200">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1.5">
                Work Directly With Me
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Whether you need to fix your Google rankings or want someone reliable to manage your social media, you talk directly with me.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                My Email Address:
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100 font-semibold truncate">
                  {directEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 active:scale-90 transition-all duration-150 shrink-0 cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 animate-fade-slide-up">
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>

            <div className="space-y-2.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-3 border-t border-zinc-200 dark:border-zinc-800">
              <p>• 100% free review of your website and rankings.</p>
              <p>• Honest advice with no sales pressure.</p>
              <p>• Clear steps you can take right away.</p>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 md:p-8 transition-colors duration-200">
            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-900 dark:text-zinc-100 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Message Prepared
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Your email client has opened with your details. You can also email directly to{" "}
                  <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                    {directEmail}
                  </span>.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-900 text-xs font-mono text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-semibold mb-1.5"
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
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-1 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/20 focus:outline-none transition-all duration-150"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-semibold mb-1.5"
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
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-1 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/20 focus:outline-none transition-all duration-150"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-domain"
                      className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-semibold mb-1.5"
                    >
                      Website or Social Link *
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
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-1 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/20 focus:outline-none transition-all duration-150"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-semibold mb-1.5"
                    >
                      What Do You Need Help With?
                    </label>
                    <select
                      id="form-service"
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-1 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/20 focus:outline-none transition-all duration-150 cursor-pointer"
                    >
                      <option value="Google SEO Growth">Google SEO (More Website Visitors)</option>
                      <option value="Full Social Media Management">
                        Social Media Management (Instagram / LinkedIn)
                      </option>
                      <option value="One-Time Website & Social Audit">
                        One-Time Website Audit
                      </option>
                      <option value="Both SEO + Social Media">
                        Both (SEO + Social Media)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-notes"
                    className="block text-[11px] font-mono uppercase text-zinc-900 dark:text-zinc-100 font-semibold mb-1.5"
                  >
                    Quick Details (What are you struggling with?)
                  </label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    placeholder="e.g. My website traffic dropped, or I need someone to manage my social media accounts..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-1 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/20 focus:outline-none transition-all duration-150"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-xs cursor-pointer group"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Audit Request</span>
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
