import React from 'react';
import { Server } from 'lucide-react';
import { SERVICES, buildServiceUrl } from '../constants';

const Header: React.FC = () => {
  const primaryService = SERVICES.find((service) => service.status === 'active');
  const primaryServiceUrl = primaryService ? buildServiceUrl(primaryService) : '#services';
  const primaryServiceName = primaryService?.name ?? '服务列表';
  const hasPrimaryLink = Boolean(primaryService && primaryService.status === 'active');

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-900 text-white rounded-lg">
              <Server size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900">
                自托管服务中心
              </span>
              <span className="text-xs text-slate-500">容器服务入口</span>
            </div>
          </div>

          <nav className="flex items-center space-x-4 text-sm font-medium">
            <a
              href={hasPrimaryLink ? primaryServiceUrl : '#services'}
              target={hasPrimaryLink ? '_blank' : undefined}
              rel={hasPrimaryLink ? 'noopener noreferrer' : undefined}
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              {primaryServiceName}
            </a>
            <span className="text-slate-300">|</span>
            <div className="flex items-center space-x-1.5 text-slate-600">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>运行正常</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
