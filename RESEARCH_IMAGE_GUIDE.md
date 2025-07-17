# 研究文件图片尺寸指南

## 📸 图片尺寸建议

### 当前设置（已更新）

所有研究文件现在使用：`https://picsum.photos/800/600`

- **宽度**: 800px
- **高度**: 600px
- **宽高比**: 4:3 (标准比例)

### 🎯 推荐的图片尺寸选项

#### 1. 标准横向图片 (4:3 比例)

```yaml
image: "https://picsum.photos/800/600"
```

- 适合：研究展示、实验结果、图表
- 优点：平衡的视觉效果，适合大多数内容

#### 2. 宽屏图片 (16:9 比例)

```yaml
image: "https://picsum.photos/800/450"
```

- 适合：系统架构图、流程图、网络拓扑
- 优点：现代感强，适合技术类内容

#### 3. 方形图片 (1:1 比例)

```yaml
image: "https://picsum.photos/600/600"
```

- 适合：logo、图标、简洁的示意图
- 优点：整齐对称，适合卡片布局

#### 4. 大尺寸图片 (高质量)

```yaml
image: "https://picsum.photos/1200/800"
```

- 适合：重要的研究成果展示
- 优点：高清晰度，适合详细图表

#### 5. 小尺寸图片 (快速加载)

```yaml
image: "https://picsum.photos/400/300"
```

- 适合：简单图标、快速预览
- 优点：加载快，节省带宽

## 🔧 如何修改图片尺寸

### 方法 1：修改具体文件

1. 打开要修改的研究文件（如 `deep-learning-transportation.md`）
2. 找到 `image:` 行
3. 修改 URL 中的尺寸参数：

   ```yaml
   # 从这个
   image: "https://picsum.photos/800/600"

   # 改为这个（例如更宽的图片）
   image: "https://picsum.photos/1000/600"
   ```

### 方法 2：使用真实图片

如果您有实际的研究图片，可以：

1. 将图片放在 `assets/images/research/` 目录
2. 修改 image 路径：
   ```yaml
   image: "/assets/images/research/your-research-image.jpg"
   ```

## 📱 响应式考虑

### 移动端优化

- 建议最小宽度：400px
- 推荐比例：4:3 或 16:9
- 避免过高的图片（如 2:3 比例）

### 桌面端优化

- 建议最大宽度：1200px
- 文件大小：< 500KB
- 格式：JPG (照片) 或 PNG (图表)

## 🎨 图片内容建议

### 深度学习交通系统

```yaml
# 可能的图片内容
image: "https://picsum.photos/800/600" # 交通流量图
# 或者
image: "/assets/images/research/traffic-neural-network.jpg"
```

### 智慧城市优化

```yaml
# 可能的图片内容
image: "https://picsum.photos/800/600" # 城市规划图
# 或者
image: "/assets/images/research/smart-city-optimization.png"
```

### 机器学习城市分析

```yaml
# 可能的图片内容
image: "https://picsum.photos/800/600" # 数据分析图表
# 或者
image: "/assets/images/research/urban-analytics-dashboard.jpg"
```

## ⚡ 性能优化建议

### 推荐的图片规格

- **格式**: JPG (照片), PNG (图表/图标), WebP (最优)
- **质量**: 70-80% (JPG 压缩)
- **尺寸**: 800x600px (标准) 或 1200x800px (高质量)
- **文件大小**: < 200KB (理想), < 500KB (可接受)

### 图片优化工具

- **在线工具**: TinyPNG, Squoosh
- **本地工具**: ImageOptim (Mac), GIMP (免费)
- **开发工具**: 可以考虑使用 Jekyll 图片优化插件

## 🔄 批量更新所有文件

如果您想要统一更新所有研究文件的图片尺寸，可以：

1. 使用相同的尺寸规格
2. 确保所有图片使用一致的宽高比
3. 考虑为不同研究主题使用不同的图片类别

当前所有文件都已更新为 `800x600` 的标准尺寸，如果您需要调整为其他尺寸，请告诉我！
