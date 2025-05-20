import { ReactNode } from 'react';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  highlight?: boolean;
  badge?: string;
}

export default function PricingCard({
  title,
  description,
  features,
  price,
  buttonText,
  highlight = false,
  badge
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between bg-[#1E1F2B] text-white rounded-2xl p-6 w-full max-w-sm shadow-lg ${highlight ? 'border-2 border-blue-500' : ''
        }`}
    >
      {badge && (
        <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-tr-2xl rounded-bl-2xl">
          {badge}
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="text-blue-400 mr-2">✔</span> {feature}
            </li>
          ))}
        </ul>
        <button
          className={`w-full rounded-md px-4 py-2 text-sm font-medium transition ${highlight
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'border border-white hover:bg-white hover:text-black'
            }`}
        >
          {buttonText}
        </button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-3xl font-bold text-blue-400">${price}</p>
        <p className="text-sm text-gray-400">per month</p>
      </div>
    </div>
  );
}
