# Repository Guidelines

## Project Structure & Module Organization
- `portal/`: Vite + React + TypeScript 前端源码，包含组件、样式与部署配置。
  - `components/`: UI 组件（Header、Hero、ServiceCard 等）。
  - `constants.tsx`: 服务列表与默认域名/IP 配置。
  - `nginx.conf`: 容器内静态站点 Nginx 配置（已设 `charset utf-8`）。
  - `Dockerfile`: 前端构建与 Nginx 静态服务镜像。
- `dist/`: 运行 `npm run build` 生成的生产静态文件（Docker 构建阶段会自动产出）。

## Build, Test, and Development Commands
- 本地开发：`cd portal && npm install && npm run dev`（启动 Vite 开发服）。
- 生产构建：`cd portal && npm run build`（输出至 `dist/`）。
- 预览构建结果：`cd portal && npm run preview`。
- 构建镜像：`cd portal && docker build -t portal-web:latest .`。
- 运行容器：`docker run -d --name portal-web -p 80:80 --restart unless-stopped portal-web:latest`。

## Coding Style & Naming Conventions
- 语言：TypeScript + React Function Components。
- 风格：2 空格缩进，语义化命名；组件 PascalCase，文件小写短横线或驼峰（当前多用 PascalCase）。
- 数据配置：在 `constants.tsx` 的 `SERVICES` 数组新增服务，字段示例：
  - `name`, `description`, `host`/`port` 或 `url`，`status`（`active`/`coming-soon`/`maintenance`），`stack`（如 `Flask`），`tags`。

## Testing Guidelines
- 目前无单元测试框架集成；如新增测试，推荐 Vitest + React Testing Library。
- 构建/预览是基本回归：`npm run build && npm run preview`。

## Commit & Pull Request Guidelines
- 提交信息：简短动词祈使句（如 `add flask stack badge`，`fix utf8 encoding`）。
- PR 内容：描述变更、关联的任务/issue，必要时附截图或终端输出（构建、预览结果）。
- 避免格式噪音；保持 UTF-8 编码，确保 `nginx.conf` 中的 `charset utf-8` 未被移除。

## Deployment & Configuration Tips
- 生产部署建议用 Docker：镜像内已包含构建与 Nginx，映射 80 端口即可；若 80 被占用，可改 `-p 8080:80`。
- 浏览器端域名/IP 来自 `constants.tsx` 的默认配置，可按需修改 `DEFAULT_DOMAIN` 或新增服务条目。
