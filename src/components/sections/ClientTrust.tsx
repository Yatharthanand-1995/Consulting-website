'use client';

import { cn } from '@/lib/utils';

export interface ClientTrustProps {
  className?: string;
  variant?: 'default' | 'minimal' | 'professional';
}

const clients = [
  {
    name: 'Global Bank',
    logo: 'GB',
    color: 'from-indigo-600 to-blue-700',
  },
  {
    name: 'Tech Corp',
    logo: 'TC',
    color: 'from-violet-600 to-purple-700',
  },
  {
    name: 'Manufacturing',
    logo: 'MF',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    name: 'Healthcare',
    logo: 'HC',
    color: 'from-rose-600 to-pink-700',
  },
  {
    name: 'Energy Co',
    logo: 'EC',
    color: 'from-amber-600 to-orange-700',
  },
  {
    name: 'Retail Chain',
    logo: 'RC',
    color: 'from-cyan-600 to-blue-700',
  },
];

const stats = [
  {
    value: '$2.3B+',
    label: 'Value Generated for Clients',
    color: 'text-blue-600',
  },
  {
    value: '150+',
    label: 'Fortune 500 Partnerships',
    color: 'text-indigo-600',
  },
  {
    value: '97%',
    label: 'Client Satisfaction Rate',
    color: 'text-purple-600',
  },
];

export function ClientTrust({ className, variant = 'professional' }: ClientTrustProps) {
  const isProfessional = variant === 'professional';
  const isMinimal = variant === 'minimal';

  return (
    <section
      className={cn(
        'relative py-20 overflow-hidden',
        isProfessional && 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20',
        isMinimal && 'bg-gray-50',
        className
      )}
      aria-label="Trusted by industry leaders"
    >
      {/* Subtle Background Pattern - Professional Only */}
      {isProfessional && (
        <>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 80px 80px',
            }}
            aria-hidden="true"
          />

          {/* Connecting Lines */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent" aria-hidden="true" />
        </>
      )}

      <div className="relative z-10 container mx-auto px-6">
        <div className="space-y-12 text-center">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-lg font-bold tracking-wider uppercase mb-4 text-gray-900">
              Trusted by Fortune 500 Leaders
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm">
              Leading enterprises trust Stratex AI to transform their operations with cutting-edge artificial intelligence solutions
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group flex items-center justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={cn(
                  'relative flex h-20 w-20 items-center justify-center rounded-xl shadow-lg transition-all duration-300',
                  'bg-gradient-to-br',
                  client.color,
                  'group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1'
                )}>
                  <span className="text-sm font-bold text-white">
                    {client.logo}
                  </span>
                  {/* Subtle glow effect */}
                  <div className={cn(
                    'absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md',
                    client.color
                  )}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Statistics */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className={cn(
                  'text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300',
                  stat.color
                )}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientTrust;