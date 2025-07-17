# 🚨 内联样式强制间距测试

## 当前设置

- 主标题区域底部间距: `margin-bottom: 20rem !important;` (320px)
- 主标题底部间距: `margin-bottom: 4rem !important;` (64px)
- 使用 `!important` 来覆盖任何可能的 CSS 冲突

## 测试方法

1. 保存文件
2. 刷新浏览器
3. 访问 /research 页面
4. 应该看到：
   - "Research Experience" 标题下有很大的空白
   - 然后是描述文本
   - 然后是巨大的空白（320px）
   - 最后是 "Research Spotlight"

## 如果仍然没有变化

可能的问题：

1. 浏览器缓存 - 硬刷新 (Ctrl+F5)
2. Jekyll 没有重新构建
3. 其他 CSS 文件覆盖

## 内联样式的优势

- 最高 CSS 优先级
- 绕过任何可能的类名冲突
- 立即生效，无需重新编译

现在应该能看到明显的间距变化了！
