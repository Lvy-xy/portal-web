import React from 'react';

interface HeroProps {
  onAddServiceTip: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAddServiceTip }) => {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
            112.126.104.212 容器服务入口
          </span>
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-xl text-slate-500">
          集中展示部署在 Docker 容器中的业务，当前上线 YOLO 识别服务（端口 8000）。
          新增容器时，在配置中填写 host/port 或直接 url 即可出现在服务列表。
        </p>
        <div className="mt-8 flex justify-center gap-3 text-sm">
          <a
            href="#services"
            className="inline-flex items-center px-4 py-2 rounded-md border border-slate-200 text-slate-700 hover:border-slate-300 transition-colors"
          >
            查看服务列表
          </a>
          <button
            type="button"
            onClick={onAddServiceTip}
            className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            查看新增说明
          </button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-gray-100 to-gray-50 opacity-60 blur-3xl rounded-full -z-10 pointer-events-none" />
    </div>
  );
};

export default Hero;
