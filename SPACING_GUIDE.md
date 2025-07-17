# Research Page 间距调整指南

## 🎯 当前间距设置（已修正）

### 页面整体间距

- **顶部间距**: `pt-20` (80px) 移动端, `lg:pt-[120px]` (120px) 桌面端
- **底部间距**: `pb-10` (40px) 移动端, `lg:pb-20` (80px) 桌面端

### 各部分间距

- **标题区域**: `mb-12` (48px) 底部间距
- **主标题**: `mb-4` (16px) 底部间距
- **各 section**: `mb-16` (64px) 底部间距
- **section 内标题**: `mb-8` (32px) 底部间距

## 📏 Tailwind CSS 间距值参考

### 标准间距类（margin/padding）

```css
/* 小间距 */
m-1  = 4px     p-1  = 4px
m-2  = 8px     p-2  = 8px
m-3  = 12px    p-3  = 12px
m-4  = 16px    p-4  = 16px
m-5  = 20px    p-5  = 20px
m-6  = 24px    p-6  = 24px

/* 中等间距 */
m-8  = 32px    p-8  = 32px
m-10 = 40px    p-10 = 40px
m-12 = 48px    p-12 = 48px
m-16 = 64px    p-16 = 64px
m-20 = 80px    p-20 = 80px
m-24 = 96px    p-24 = 96px

/* 大间距 */
m-32 = 128px   p-32 = 128px
m-40 = 160px   p-40 = 160px
m-48 = 192px   p-48 = 192px
m-56 = 224px   p-56 = 224px
m-64 = 256px   p-64 = 256px
```

## 🔧 如何调整间距

### 1. 调整标题与描述之间的距离

```html
<!-- 当前 -->
<h1 class="text-3xl md:text-5xl font-bold text-center mb-4">
  Research Experience
</h1>

<!-- 更大间距 -->
<h1 class="text-3xl md:text-5xl font-bold text-center mb-8">
  Research Experience
</h1>

<!-- 更小间距 -->
<h1 class="text-3xl md:text-5xl font-bold text-center mb-2">
  Research Experience
</h1>
```

### 2. 调整各 section 之间的距离

```html
<!-- 当前 -->
<div class="mb-16">
  <!-- 更大间距 -->
  <div class="mb-24">
    <!-- 更小间距 -->
    <div class="mb-12"></div>
  </div>
</div>
```

### 3. 调整 section 标题与内容之间的距离

```html
<!-- 当前 -->
<h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
  Research Spotlight
</h2>

<!-- 更大间距 -->
<h2 class="text-2xl md:text-3xl font-bold mb-12 text-center">
  Research Spotlight
</h2>

<!-- 更小间距 -->
<h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">
  Research Spotlight
</h2>
```

## 🎨 推荐间距方案

### 方案 1：紧凑布局

```html
<section class="container mx-auto pt-16 pb-8 lg:pt-20 lg:pb-16">
  <div class="mb-8">
    <h1 class="text-3xl md:text-5xl font-bold text-center mb-3">
      Research Experience
    </h1>
    <!-- 描述... -->
  </div>

  <div class="mb-12">
    <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">
      Research Spotlight
    </h2>
    <!-- 内容... -->
  </div>
</section>
```

### 方案 2：标准布局（当前）

```html
<section class="container mx-auto pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div class="mb-12">
    <h1 class="text-3xl md:text-5xl font-bold text-center mb-4">
      Research Experience
    </h1>
    <!-- 描述... -->
  </div>

  <div class="mb-16">
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
      Research Spotlight
    </h2>
    <!-- 内容... -->
  </div>
</section>
```

### 方案 3：宽松布局

```html
<section class="container mx-auto pt-24 pb-12 lg:pt-32 lg:pb-24">
  <div class="mb-16">
    <h1 class="text-3xl md:text-5xl font-bold text-center mb-6">
      Research Experience
    </h1>
    <!-- 描述... -->
  </div>

  <div class="mb-20">
    <h2 class="text-2xl md:text-3xl font-bold mb-10 text-center">
      Research Spotlight
    </h2>
    <!-- 内容... -->
  </div>
</section>
```

## 📱 响应式间距

### 移动端和桌面端不同间距

```html
<!-- 移动端小间距，桌面端大间距 -->
<div class="mb-8 md:mb-12">
  <!-- 移动端中等间距，桌面端大间距 -->
  <div class="mb-12 lg:mb-20">
    <!-- 标题响应式间距 -->
    <h1 class="mb-4 md:mb-6 lg:mb-8"></h1>
  </div>
</div>
```

## 🎯 具体调整建议

### 如果您觉得间距太大

```html
<!-- 减少section间距 -->
<div class="mb-12">
  <!-- 从 mb-16 改为 mb-12 -->

  <!-- 减少标题间距 -->
  <h2 class="mb-6 text-center"><!-- 从 mb-8 改为 mb-6 --></h2>
</div>
```

### 如果您觉得间距太小

```html
<!-- 增加section间距 -->
<div class="mb-20">
  <!-- 从 mb-16 改为 mb-20 -->

  <!-- 增加标题间距 -->
  <h2 class="mb-10 text-center"><!-- 从 mb-8 改为 mb-10 --></h2>
</div>
```

### 如果您想要垂直居中效果

```html
<!-- 页面整体更多空间 -->
<section class="container mx-auto pt-24 pb-16 lg:pt-32 lg:pb-24">
  <!-- 标题区域更多空间 -->
  <div class="mb-16 lg:mb-20"></div>
</section>
```

## 💡 最佳实践建议

1. **保持一致性**: 相同级别的元素使用相同的间距
2. **视觉层次**: 更重要的内容使用更大的间距
3. **响应式设计**: 移动端使用较小间距，桌面端使用较大间距
4. **测试效果**: 在不同设备上查看效果

您可以根据需要调整这些值，记住所有间距都应该使用标准的 Tailwind CSS 类！
