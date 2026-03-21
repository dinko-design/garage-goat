import { useState } from 'react';
import { CheckCircle2, ChevronRight, Phone, Tag, ArrowLeft } from 'lucide-react';
import { companyInfo, services } from '../../data/cms';
import { toast } from 'sonner';
import type { Offer } from '../../data/cms';

interface HeroLeadFormProps {
  /** Pre-select a service by ID */
  preselectedService?: string;
  /** Show an offer badge alongside the form */
  offer?: Offer;
  /** Additional class name */
  className?: string;
}

const STEPS = [
  { id: 'service', label: 'What do you need?' },
  { id: 'name', label: 'Your name' },
  { id: 'phone', label: 'Best number to reach you' },
] as const;

export function HeroLeadForm({ preselectedService, offer, className = '' }: HeroLeadFormProps) {
  const [step, setStep] = useState(preselectedService ? 1 : 0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: preselectedService ? (services.find(s => s.id === preselectedService)?.name || '') : '',
    name: '',
    phone: '',
  });

  const handleSubmit = () => {
    setSubmitted(true);
    toast.success("Request submitted! We'll call you shortly.");
  };

  const canAdvance = () => {
    if (step === 0) return formData.service !== '';
    if (step === 1) return formData.name.trim() !== '';
    if (step === 2) return formData.phone.trim().length >= 7;
    return false;
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else handleSubmit();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && canAdvance()) {
      e.preventDefault();
      handleNext();
    }
  };

  if (submitted) {
    return (
      <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center ${className}`}>
        <CheckCircle2 className="w-10 h-10 text-goat-teal mx-auto mb-3" />
        <div className="text-white text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
          Request Received!
        </div>
        <p className="text-goat-ice/70 text-sm mb-4">We'll call you back within 30 minutes.</p>
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="inline-flex items-center gap-2 text-goat-teal hover:text-goat-teal-dark text-sm transition-colors"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
        >
          <Phone className="w-4 h-4" /> Need help now? Call us
        </a>
      </div>
    );
  }

  return (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden ${className}`}>
      {/* Offer badge — compact strip at top */}
      {offer && (
        <div className="bg-goat-red/90 px-4 py-2 flex items-center justify-center gap-2 text-white text-sm">
          <Tag className="w-3.5 h-3.5" />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            {offer.discountAmount}
          </span>
          <span className="text-white/70">— {offer.title}</span>
        </div>
      )}

      <div className="p-5">
        {/* Progress dots */}
        <div className="flex items-center gap-1.5 mb-4">
          {STEPS.map((s, i) => (
            <div
              key={s.id}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= step ? 'bg-goat-teal' : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Step label */}
        <div className="flex items-center gap-2 mb-3">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="text-white/50 hover:text-white transition-colors p-0.5"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div className="text-white text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
            {STEPS[step].label}
          </div>
          <span className="text-white/30 text-xs ml-auto">
            {step + 1}/{STEPS.length}
          </span>
        </div>

        {/* Step content */}
        <div className="min-h-[52px]">
          {step === 0 && (
            <select
              value={formData.service}
              onChange={(e) => {
                setFormData({ ...formData, service: e.target.value });
                if (e.target.value) setTimeout(() => setStep(1), 150);
              }}
              className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-goat-teal focus:border-goat-teal outline-none transition-all text-sm [&>option]:text-goat-navy-dark"
            >
              <option value="">Select a service...</option>
              {services.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
              <option value="Other">Other / Not Sure</option>
            </select>
          )}

          {step === 1 && (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onKeyDown={handleKeyDown}
              placeholder="Your first name"
              autoFocus
              className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-goat-teal focus:border-goat-teal outline-none transition-all text-sm"
            />
          )}

          {step === 2 && (
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onKeyDown={handleKeyDown}
              placeholder="(555) 123-4567"
              autoFocus
              className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-goat-teal focus:border-goat-teal outline-none transition-all text-sm"
            />
          )}
        </div>

        {/* Next / Submit button */}
        <button
          onClick={handleNext}
          disabled={!canAdvance()}
          className="w-full mt-3 bg-goat-teal hover:bg-goat-teal-dark disabled:opacity-40 disabled:cursor-not-allowed text-goat-navy-deep py-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-goat-teal/20"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
        >
          {step === 2 ? 'Get Free Estimate' : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Trust line */}
        <p className="text-white/30 text-xs text-center mt-3">
          No spam. We'll call you back within 30 min.
        </p>
      </div>
    </div>
  );
}
