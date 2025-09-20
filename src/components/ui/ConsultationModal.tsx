'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';

export interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  consultationType?: string;
  prefilledData?: {
    projectType?: string;
    industry?: string;
    service?: string;
  };
}

interface ConsultationFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  consultationType: string;
  urgency: string;
  preferredTime: string;
  message: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  consultationType = 'General Consultation',
  prefilledData = {},
}: ConsultationModalProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: prefilledData.projectType || consultationType,
    urgency: '',
    preferredTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to the same contact API but with consultation flag
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectType: 'consultation',
          isConsultation: true,
          message: `CONSULTATION REQUEST - ${formData.consultationType}\n\nUrgency: ${formData.urgency}\nPreferred Time: ${formData.preferredTime}\n\nMessage: ${formData.message}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit consultation request');
      }

      console.log('Consultation request submitted:', data.submissionId);
      setIsSubmitted(true);

      // Auto-close after success
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          consultationType: consultationType,
          urgency: '',
          preferredTime: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      alert('Failed to submit consultation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl rounded-xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Schedule Consultation
              </h2>
              <Badge variant="gradient" className="mt-2">
                {consultationType}
              </Badge>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="mb-2 text-xl font-bold text-green-600">
                  Consultation Scheduled!
                </h3>
                <p className="mb-4 text-gray-600">
                  Thank you for your request. Our team will contact you within 4
                  hours to confirm your consultation time.
                </p>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <p className="text-sm text-blue-800">
                    📧 Confirmation email sent to {formData.email}
                    <br />
                    📞 Expected callback time: Within 4 hours
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="mb-4 text-left text-lg font-semibold">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        required
                        className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        required
                        className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Details */}
                <div>
                  <h3 className="mb-4 text-left text-lg font-semibold">
                    Consultation Details
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                        Consultation Type
                      </label>
                      <select
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="AI Strategy Session">
                          AI Strategy Session (60 min)
                        </option>
                        <option value="Technical Assessment">
                          Technical Assessment (45 min)
                        </option>
                        <option value="ROI Analysis">
                          ROI Analysis (30 min)
                        </option>
                        <option value="Implementation Planning">
                          Implementation Planning (90 min)
                        </option>
                        <option value="General Consultation">
                          General Consultation (30 min)
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                        Urgency
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select urgency</option>
                        <option value="This week">This week</option>
                        <option value="Next week">Next week</option>
                        <option value="Within 2 weeks">Within 2 weeks</option>
                        <option value="This month">This month</option>
                        <option value="No rush">No rush</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-col">
                      <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                        Preferred Time (Optional)
                      </label>
                      <input
                        type="text"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        placeholder="e.g., Morning, Afternoon, 2-4 PM IST, etc."
                        className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <div className="flex flex-col">
                    <label className="mb-2 block text-left text-sm font-medium text-gray-700">
                      Tell us about your needs (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="What specific challenges are you facing? What outcomes are you hoping to achieve?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-row justify-end space-x-4 border-t border-gray-200 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="gradient"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="min-w-[200px]"
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationModal;
