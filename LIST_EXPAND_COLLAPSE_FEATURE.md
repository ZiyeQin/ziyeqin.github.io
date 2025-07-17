# 📋 Publications List 展开/折叠功能实现

## 🎯 功能描述

保持原有的列表形式，默认只显示前 3 个条目，通过"See More"按钮可以展开查看完整列表，再次点击可以折叠回去。

## 🔧 实现方案

### 1. HTML 结构

```html
- 保持原有的列表布局（bg-white rounded-lg shadow-lg） -
每个条目添加特定的CSS类： - Journal Publications: .journal-publication-item -
Conference Presentations: .conference-presentation-item -
第4个及以后的条目默认添加 .hidden 类 - 按钮使用ID而非class，便于JavaScript操作
```

### 2. 显示逻辑

```liquid
{% if forloop.index > 3 %}hidden{% endif %}
```

- 使用 Liquid 模板语言的 forloop.index
- 当索引大于 3 时，自动添加 hidden 类
- 只有当总数大于 3 时才显示"See More"按钮

### 3. JavaScript 交互

```javascript
- 监听按钮点击事件
- 检查当前状态（展开/折叠）
- 切换hidden类的添加/移除
- 动态更改按钮文本
```

## 📝 具体实现细节

### Journal Publications

- **默认显示**: 前 3 个条目
- **按钮 ID**: journal-see-more-btn
- **CSS 类**: journal-publication-item
- **按钮文本**: "See More Publications" ⇄ "See Less Publications"

### Conference Presentations

- **默认显示**: 前 3 个条目
- **按钮 ID**: conference-see-more-btn
- **CSS 类**: conference-presentation-item
- **按钮文本**: "See More Presentations" ⇄ "See Less Presentations"

## 🎨 视觉效果

- 保持原有的列表样式和间距
- 平滑的展开/折叠过渡
- 按钮状态动态变化
- 统一的视觉设计

## 💡 JavaScript 逻辑流程

### 展开操作

1. 检查隐藏的条目数量
2. 如果有隐藏条目，移除所有.hidden 类
3. 更改按钮文本为"See Less"

### 折叠操作

1. 检查当前是否已展开（无隐藏条目）
2. 如果已展开，为第 4 个及以后的条目添加.hidden 类
3. 更改按钮文本为"See More"

## 📱 响应式设计

- 保持原有的响应式布局
- 按钮在所有设备上都居中显示
- 列表项目在移动端和桌面端都有合适的间距

## 🔍 代码关键点

### HTML 标记

```html
<div
  class="journal-publication-item {% if forloop.index > 3 %}hidden{% endif %}"
></div>
```

### JavaScript 切换

```javascript
const hiddenItems = document.querySelectorAll(
  ".journal-publication-item.hidden"
);
const isExpanded = hiddenItems.length === 0;
```

### 条件显示按钮

```liquid
{% if site.data.publications.journals.size > 3 %}
```

## ✅ 功能特点

- 保持原有的列表设计
- 默认显示前 3 个条目
- 平滑的展开/折叠切换
- 动态按钮文本更改
- 完整的 JavaScript 交互
- 响应式设计兼容

## 🎯 用户体验

1. 页面加载时只显示前 3 个条目，保持简洁
2. 点击"See More"查看完整列表
3. 点击"See Less"折叠回前 3 个条目
4. 按钮文本清楚地指示当前状态和下一步操作

现在 Journal Publications 和 Conference Presentations 都是可以展开/折叠的列表形式！
