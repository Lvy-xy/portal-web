import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-center text-sm text-slate-400">
          &copy; {year} 自托管服务中心 · Powered by Docker & React.
        </p>
        <div className="mt-3 flex space-x-6 text-sm text-slate-400">
          <span className="hover:text-slate-600 cursor-pointer transition-colors">主页</span>
          <span className="hover:text-slate-600 cursor-pointer transition-colors">文档</span>
          <span className="hover:text-slate-600 cursor-pointer transition-colors">联系</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
