import { ReactNode } from 'react';

export type ServiceStatus = 'active' | 'maintenance' | 'coming-soon';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  port?: number;
  url?: string;
  host?: string;
  protocol?: 'http' | 'https';
  icon: ReactNode;
  status: ServiceStatus;
  tags: string[];
  stack?: string; // 技术栈标识，例如 Flask/Node/Go
}
