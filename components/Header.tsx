import React from 'react';
import { Server } from 'lucide-react';

const Header: React.FC = () => {
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
              <span className="text-xs text-slate-500">IP：112.126.104.212</span>
            </div>
          </div>

          <nav className="flex items-center space-x-4 text-sm font-medium">
            <a
              href="http://112.126.104.212:8000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              YOLO识别
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
