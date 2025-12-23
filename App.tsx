import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import { SERVICES } from './constants';

const App: React.FC = () => {
  const [showTip, setShowTip] = useState(false);

  const handleAddServiceTip = () => setShowTip(true);
  const handleCloseTip = () => setShowTip(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <main className="flex-grow">
        <Hero onAddServiceTip={handleAddServiceTip} />

        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">服务列表</h2>
            <div className="ml-4 h-px bg-gray-200 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </main>

      {showTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={handleCloseTip} />
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">如何新增容器服务</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              在 <code className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">constants.tsx</code> 的{' '}
              <code className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">SERVICES</code> 数组中添加新条目：
              设置 <strong>host</strong>（默认使用当前访问域名）、<strong>port</strong>，或直接填写 <strong>url</strong>；
              <strong>status</strong> 设为 <em>active</em>/<em>coming-soon</em>/<em>maintenance</em>。
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleCloseTip}
                className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                我知道了
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
