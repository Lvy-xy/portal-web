import React from 'react';
import { ExternalLink, Clock, AlertCircle } from 'lucide-react';
import { ServiceItem } from '../types';
import { buildServiceUrl } from '../constants';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const url = buildServiceUrl(service);
  const isActive = service.status === 'active';

  return (
    <a
      href={isActive ? url : undefined}
      target={isActive ? '_blank' : undefined}
      rel={isActive ? 'noopener noreferrer' : undefined}
      className={`group relative flex flex-col p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 
        ${isActive ? 'hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 cursor-pointer' : 'opacity-75 cursor-not-allowed grayscale-[0.4]'}
      `}
      aria-disabled={!isActive}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-xl transition-colors duration-300 ${
            isActive ? 'bg-slate-50 text-slate-900 group-hover:bg-slate-100' : 'bg-gray-100 text-gray-400'
          }`}
        >
          {service.icon}
        </div>
        {isActive ? (
          <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-slate-600 transition-colors" />
        ) : service.status === 'coming-soon' ? (
          <Clock className="w-5 h-5 text-amber-500" />
        ) : (
          <AlertCircle className="w-5 h-5 text-red-400" />
        )}
      </div>

      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition-colors">{service.name}</h3>
        {service.stack && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm">
            {service.stack}
          </span>
        )}
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full shadow-lg">
            {service.status === 'coming-soon' ? '敬请期待' : '维护中'}
          </span>
        </div>
      )}
    </a>
  );
};

export default ServiceCard;
