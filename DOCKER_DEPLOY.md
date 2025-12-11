# Docker 部署操作步骤

以下步骤帮助你在本地打包镜像并在服务器上加载运行，默认暴露到 80 端口，直接用公网 IP 或域名访问即可。

## 前置条件
- 已安装 Docker（本地与服务器）。
- 当前目录为 `portal/`，包含 `Dockerfile` 与源码。
- 服务器 80 端口空闲，或调整端口映射。

## 本地构建镜像
```bash
cd /root/portal
docker build -t portal-web:latest .
```

## 导出镜像并上传到服务器
```bash
# 导出
docker save portal-web:latest -o portal-web.tar

# 上传（示例，将文件放到 /root/portal）
scp portal-web.tar user@<server-ip>:/root/portal/
```

## 服务器上加载并运行
```bash
cd /root/portal
docker load -i portal-web.tar

# 运行容器，映射 80 端口
docker run -d --name portal-web -p 80:80 --restart unless-stopped portal-web:latest
```

## 验证
```bash
docker ps        # 确认容器在跑
curl http://<server-ip>    # 或浏览器访问域名/IP
```

## 常用维护命令
- 查看日志：`docker logs -f portal-web`
- 停止/启动：`docker stop portal-web` / `docker start portal-web`
- 更新镜像：重新 build + save + load，或直接在服务器上 rebuild，然后 `docker rm -f portal-web && docker run ...`

## 可选：与 Flask 容器同域路径反代
- 当前镜像仅提供静态前端。若要让 `/flask/` 路径指向宿主机 8000 端口的 Flask 容器，可修改 `portal/nginx.conf` 中 `/flask/` 段，改为合适的上游地址（如 `host.docker.internal:8000` 或宿主内网 IP:8000），然后重新 build 镜像。



## 1. 登录阿里云 Container Registry

```
$ docker login --username=Lvy_xx crpi-b0d49dujgmh8bfqr.cn-beijing.personal.cr.aliyuncs.com
```

用于登录的用户名为阿里云账号全名，密码为开通服务时设置的密码。

您可以在访问凭证页面修改凭证密码。

注意：使用 RAM 用户（子账号）登录镜像仓库时，不支持企业别名带有英文半角句号（.）。

## 2. 从Registry中拉取镜像

```
$ docker pull crpi-b0d49dujgmh8bfqr.cn-beijing.personal.cr.aliyuncs.com/lvyxx/portal-web:[镜像版本号]
```

## 3. 将镜像推送到Registry

```
$ docker login --username=Lvy_xx crpi-b0d49dujgmh8bfqr.cn-beijing.personal.cr.aliyuncs.com$ docker tag [ImageId] crpi-b0d49dujgmh8bfqr.cn-beijing.personal.cr.aliyuncs.com/lvyxx/portal-web:[镜像版本号]$ docker push crpi-b0d49dujgmh8bfqr.cn-beijing.personal.cr.aliyuncs.com/lvyxx/portal-web:[镜像版本号]
```

请根据实际镜像信息替换示例中的[ImageId]和[镜像版本号]参数。

## 4. 选择合适的镜像仓库地址

从ECS推送镜像时，可以选择使用镜像仓库内网地址。推送速度将得到提升并且将不会损耗您的公网流量。

如果您使用的机器位于VPC网络，请使用 crpi-b0d49dujgmh8bfqr-vpc.cn-beijing.personal.cr.aliyuncs.com 作为Registry的域名登录。

## 5. 示例

使用"docker tag"命令重命名镜像，并将它通过专有网络地址推送至Registry。

```
$ docker imagesREPOSITORY                                                         TAG                 IMAGE ID            CREATED             VIRTUAL SIZEregistry.aliyuncs.com/acs/agent                                    0.7-dfb6816         37bb9c63c8b2        7 days ago          37.89 MB$ docker tag 37bb9c63c8b2 crpi-b0d49dujgmh8bfqr-vpc.cn-beijing.personal.cr.aliyuncs.com/acs/agent:0.7-dfb6816
```

使用 "docker push" 命令将该镜像推送至远程。

```
$ docker push crpi-b0d49dujgmh8bfqr-vpc.cn-beijing.personal.cr.aliyuncs.com/acs/agent:0.7-dfb6816
```
