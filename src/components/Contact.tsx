import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Clock,
  MessageSquare
} from 'lucide-react';
import { ContactMessage } from '../types.ts';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || 'Front-End Web Development');
  const [details, setDetails] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactMessage | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (!details.trim()) {
      errs.details = 'Please describe your project or idea.';
    } else if (details.trim().length < 10) {
      errs.details = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch and generate real inquiry object
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: 'msg_' + Date.now(),
        name: fullName.trim(),
        email: email.trim(),
        service,
        details: details.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Save to client ledger in localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('insha_inquiries') || '[]');
        localStorage.setItem('insha_inquiries', JSON.stringify([newMessage, ...existing]));
      } catch (e) {
        // Safe fallback
      }

      setIsSubmitting(false);
      setSubmittedMessage(newMessage);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('riazinsha546@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleOpenMailClient = () => {
    if (!submittedMessage) return;
    const subject = encodeURIComponent(`Project Inquiry: ${submittedMessage.service} - from ${submittedMessage.name}`);
    const body = encodeURIComponent(
      `Hi Insha,\n\nName: ${submittedMessage.name}\nEmail: ${submittedMessage.email}\nService: ${submittedMessage.service}\n\nProject Details:\n${submittedMessage.details}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:riazinsha546@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleResetForm = () => {
    setSubmittedMessage(null);
    setFullName('');
    setEmail('');
    setDetails('');
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C4B5FD]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Callout & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Great</span>
            </div>

            {/* Exact Heading: “Have a Project in Mind?” */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#292044] mb-4">
              Have a Project in Mind?
            </h2>

            {/* Exact Supporting text: “Let's turn your ideas into a beautiful digital experience.” */}
            <p className="text-base sm:text-lg text-[#292044]/80 leading-relaxed mb-8">
              Let's turn your ideas into a beautiful digital experience.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-white border border-[#EDE5FF] shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
                Direct Contact
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href="mailto:riazinsha546@gmail.com"
                  className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#292044] hover:text-[#7C3AED] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#7C3AED] shrink-0" />
                  <span>riazinsha546@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#F8F5FF] hover:bg-[#EDE5FF] text-[#7C3AED] transition-colors cursor-pointer shrink-0 border border-[#EDE5FF]"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs text-emerald-600 font-medium mt-2 animate-fadeIn flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Email address copied to clipboard!</span>
                </p>
              )}
            </div>

            {/* Response Time Guarantee */}
            <div className="p-5 rounded-2xl bg-[#EDE5FF]/40 border border-[#EDE5FF] flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-white text-[#7C3AED] flex items-center justify-center shrink-0 border border-[#EDE5FF]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#292044]">Prompt Communication</p>
                <p className="text-xs text-[#292044]/75 leading-relaxed mt-0.5">
                  I typically respond within 24 hours with thoughtful initial questions or project timelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#EDE5FF] shadow-[0_12px_40px_-10px_rgba(124,58,237,0.12)]">
              {submittedMessage ? (
                /* Success Confirmation State */
                <div className="py-6 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#292044]">
                      Inquiry Prepared Successfully!
                    </h3>
                    <p className="text-sm text-[#292044]/75 mt-1 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-[#7C3AED]">{submittedMessage.name}</span>. Your project details have been recorded.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-[#F8F5FF] border border-[#EDE5FF] text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-[#292044]/60">Service:</span>
                      <span className="font-semibold text-[#292044]">{submittedMessage.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#292044]/60">Your Email:</span>
                      <span className="font-semibold text-[#292044]">{submittedMessage.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#292044]/60">Status:</span>
                      <span className="font-semibold text-emerald-600">Saved to Inquiry Ledger</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleOpenMailClient}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct via Mail App</span>
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-[#292044] bg-[#F8F5FF] hover:bg-[#EDE5FF] border border-[#EDE5FF] rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-[#292044] mb-1.5">
                      Full Name <span className="text-[#7C3AED]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8F5FF] border text-sm text-[#292044] placeholder-[#292044]/40 focus:outline-hidden transition-colors ${
                        errors.fullName
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#EDE5FF] focus:border-[#7C3AED] focus:bg-white'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#292044] mb-1.5">
                      Email Address <span className="text-[#7C3AED]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8F5FF] border text-sm text-[#292044] placeholder-[#292044]/40 focus:outline-hidden transition-colors ${
                        errors.email
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#EDE5FF] focus:border-[#7C3AED] focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Service Choice */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-[#292044] mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F5FF] border border-[#EDE5FF] focus:border-[#7C3AED] focus:bg-white text-sm text-[#292044] focus:outline-hidden transition-colors"
                    >
                      <option value="Front-End Web Development">Front-End Web Development</option>
                      <option value="Responsive Website Design">Responsive Website Design</option>
                      <option value="WordPress Website Development">WordPress Website Development</option>
                      <option value="Landing Page Design">Landing Page Design</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-semibold text-[#292044] mb-1.5">
                      Project Details <span className="text-[#7C3AED]">*</span>
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      value={details}
                      onChange={(e) => {
                        setDetails(e.target.value);
                        if (errors.details) setErrors({ ...errors, details: '' });
                      }}
                      placeholder="Tell me about your website goals, timeline, or design ideas..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8F5FF] border text-sm text-[#292044] placeholder-[#292044]/40 focus:outline-hidden transition-colors resize-none ${
                        errors.details
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#EDE5FF] focus:border-[#7C3AED] focus:bg-white'
                      }`}
                    />
                    {errors.details && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold transition-all duration-300 shadow-[0_4px_18px_rgba(124,58,237,0.35)] hover:shadow-[0_8px_25px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Inquiry...</span>
                      </div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
