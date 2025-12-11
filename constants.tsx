import React from 'react';
import { Terminal, Box } from 'lucide-react';
import { ServiceItem } from './types';

const DEFAULT_DOMAIN = '112.126.104.212';
const isBrowser = typeof window !== 'undefined';
const hostname = isBrowser && window.location.hostname ? window.location.hostname : DEFAULT_DOMAIN;
const defaultProtocol = isBrowser && window.location.protocol === 'https:' ? 'https' : 'http';

export const SERVICES: ServiceItem[] = [
  {
    id: 'flask-app',
    name: 'YOLO识别',
    description: '运行在 Docker 容器中的 YOLO 识别服务（端口 8000）。',
    port: 8000,
    host: DEFAULT_DOMAIN,
    protocol: 'http',
    icon: <Terminal className="w-6 h-6" />,
    status: 'active',
    tags: ['Python', 'YOLO', 'Docker'],
    stack: 'Flask'
  },
  {
    id: 'future-service',
    name: '预留服务位',
    description: '未来新增的容器业务会显示在这里，新增时在 constants.tsx 配置 host/port 或直接 url。',
    icon: <Box className="w-6 h-6" />,
    status: 'coming-soon',
    tags: ['Docker', 'Planned']
  }
];

export const buildServiceUrl = (service: ServiceItem): string => {
  if (service.url) return service.url;

  const protocol = service.protocol ?? defaultProtocol;
  const host = service.host ?? hostname ?? DEFAULT_DOMAIN;

  if (service.port) {
    return `${protocol}://${host}:${service.port}`;
  }

  return `${protocol}://${host}`;
};
