# 新版 Research Experience 功能指南

## 🎯 重新设计的特点

### 1. 模块化展示

- **Research Spotlight**: 使用卡片形式展示重点研究成果
- **Journal Publications**: 期刊论文列表展示
- **Conference Presentations**: 会议报告列表
- **Other Research Activities**: 专利、奖项等
- **Research Metrics**: 研究成果统计

### 2. 数据驱动设计

所有出版物信息存储在 `_data/publications.yml` 文件中，便于管理和更新。

## 📁 文件结构

```
_data/
└── publications.yml          # 出版物数据文件

_research/
├── deep-learning-transportation.md     # spotlight: true
├── smart-cities-optimization.md        # spotlight: true
└── machine-learning-urban-analytics.md # spotlight: false

_layouts/
└── research_list.html        # 新的研究页面布局

research.md                   # 研究主页面
```

## 🔧 如何使用

### 添加期刊论文

在 `_data/publications.yml` 的 `journals` 部分添加：

```yaml
journals:
  - title: "Your Paper Title"
    authors: "Ziye Qin, Co-author 1, Co-author 2"
    journal: "Journal Name"
    year: 2024
    volume: 15
    pages: "123-135"
    doi: "10.1000/journal.2024.123456"
    url: "https://journal-link.com"
    impact_factor: 5.2
    citations: 8
```

### 添加会议报告

在 `_data/publications.yml` 的 `conferences` 部分添加：

```yaml
conferences:
  - title: "Conference Presentation Title"
    authors: "Ziye Qin, Co-presenter"
    conference: "Conference Full Name"
    year: 2024
    location: "City, Country"
    type: "Oral Presentation" # 或 "Poster Presentation"
    url: "https://conference-link.com"
```

### 添加专利

在 `_data/publications.yml` 的 `patents` 部分添加：

```yaml
patents:
  - title: "Patent Title"
    inventors: "Ziye Qin, Co-inventor"
    number: "Patent Number"
    year: 2024
    status: "Granted" # 或 "Pending"
```

### 添加奖项

在 `_data/publications.yml` 的 `awards` 部分添加：

```yaml
awards:
  - title: "Award Name"
    organization: "Awarding Organization"
    year: 2024
    description: "Award description"
```

### 设置 Spotlight 研究

在研究文件的前置信息中添加 `spotlight: true`：

```yaml
---
layout: research
title: "Research Title"
spotlight: true # 这将在Research Spotlight部分显示
# ... 其他信息
---
```

## 🎨 页面特点

### 1. Research Spotlight

- 使用现有的研究卡片组件
- 只显示标记为 `spotlight: true` 的研究
- 网格布局，响应式设计

### 2. 期刊论文列表

- 清晰的标题、作者、期刊信息
- 显示影响因子、引用次数
- 链接到原文
- DOI 信息

### 3. 会议报告列表

- 会议名称、地点、时间
- 报告类型（口头报告/海报）
- 链接到摘要或演示文稿

### 4. 研究指标

- 自动统计各类成果数量
- 彩色图表展示
- 响应式布局

## 🔄 更新内容

### 更新出版物信息

1. 编辑 `_data/publications.yml` 文件
2. 添加新的期刊论文、会议报告等
3. 运行 `bundle exec jekyll build --drafts`

### 更新 Spotlight 研究

1. 编辑研究文件（如 `_research/new-research.md`）
2. 在前置信息中添加 `spotlight: true`
3. 重新构建网站

### 自定义样式

- 期刊论文：蓝色主题
- 会议报告：紫色主题
- 专利：蓝色边框
- 奖项：黄色边框

## 📊 研究指标自动计算

页面会自动计算并显示：

- 期刊论文数量
- 会议论文数量
- 专利数量
- 奖项数量

## 🎯 使用建议

1. **定期更新** `_data/publications.yml` 文件
2. **选择性设置** spotlight 研究（2-4 个即可）
3. **保持数据准确性**，包括 DOI、链接等
4. **添加影响因子和引用数**以展示研究影响力

这个新设计更加符合学术展示的需求，既有详细的列表信息，又有重点展示的研究成果。
