# Design System

## 🎨 Visual Identity
**Theme:** Futuristic, cyberpunk-inspired with professional polish  
**Aesthetic:** Dark mode with high-tech feel, glass morphism, and sci-fi elements  
**Target Vibe:** Like JARVIS meets modern SaaS - professional but exciting

## 🌈 Color Palette

### Primary Colors
- **Background Gradients:** `from-gray-900 via-gray-800 to-blue-900`
- **Primary Blue:** `from-blue-600 to-cyan-600` (buttons, accents)
- **Secondary Blue:** `from-blue-500 to-cyan-500` (hover states)

### Status Colors
- **Success/Online:** `green-400` with pulse animation
- **Warning/Beta:** `yellow-400`
- **Error/Alert:** `red-400`
- **Info/Demo:** `blue-400`
- **Purple/AI:** `purple-500 to-pink-500` (AI-related elements)

### Text Colors
- **Primary Text:** `white`
- **Secondary Text:** `gray-300`
- **Muted Text:** `gray-400`
- **Disabled Text:** `gray-500`

## 🎭 Typography
- **Font Family:** System UI (Tailwind default)
- **Large Headings:** `text-5xl md:text-6xl font-bold` with gradient text effects
- **Section Headings:** `text-3xl font-bold`
- **Body Text:** `text-lg` for descriptions, `text-base` for content
- **Small Text:** `text-sm` for labels, `text-xs` for timestamps

### Gradient Text Effect
```css
bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent
```

## 🧩 Component Library

### Glass Morphism Cards
**Base Style:**
```css
bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl
```
**Hover State:**
```css
hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-300
```

### Buttons

#### Primary Button (CTA)
```css
bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 
px-8 py-4 rounded-xl font-semibold transition-all duration-300 
shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1
```

#### Secondary Button
```css
bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 
px-8 py-4 rounded-xl font-semibold transition-all duration-300
```

#### Pill Navigation (Navbar)
```css
bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full px-2 py-2
```

### Status Indicators

#### Online Status
```css
w-2 h-2 bg-green-400 rounded-full animate-pulse
```

#### Loading/Typing
```css
w-2 h-2 bg-gray-400 rounded-full animate-pulse (with delays: delay-100, delay-200)
```

## 🎬 Animations & Interactions

### Hover Effects
- **Cards:** `hover:-translate-y-2` with shadow enhancement
- **Buttons:** `hover:-translate-y-1` with shadow-glow
- **Icons:** `group-hover:scale-110` or `group-hover:rotate-12`

### Loading States
- **Pulse:** `animate-pulse` for online indicators
- **Bounce:** `animate-bounce` for excited states
- **Spin:** For loading icons

### Entrance Animations
```css
transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
```
With staggered delays: `delay-300`, `delay-500`

## 🏗️ Layout System

### Container
```css
container mx-auto px-6
```

### Page Structure
```css
min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-32 pb-16
```
**Note:** `pt-32` accounts for fixed navbar height

### Grid Systems
- **Projects:** `grid grid-cols-1 lg:grid-cols-2 gap-8`
- **Skills:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- **Stats:** `grid grid-cols-2 md:grid-cols-4 gap-6`

## 🧭 Navigation

### Navbar
- **Position:** `fixed top-0` with backdrop blur
- **Style:** Dark glass morphism that becomes more solid on scroll
- **Active State:** Gradient background with glow effect
- **Logo:** Terminal icon with gradient text "Julien.dev"

### Navigation Pills
- Active: Gradient background with subtle glow
- Inactive: Transparent with hover states
- Special: AI tab gets pulse indicator

## 📱 Responsive Design

### Breakpoints (Tailwind)
- **Mobile:** Default (< 640px)
- **Tablet:** `md:` (>= 768px)
- **Desktop:** `lg:` (>= 1024px)
- **Large:** `xl:` (>= 1280px)

### Mobile Adaptations
- Grid layouts collapse to single columns
- Text sizes reduce: `text-5xl md:text-6xl`
- Padding adjusts: `px-6` instead of larger values
- Buttons stack vertically: `flex-col sm:flex-row`

## ⚡ Interactive Elements

### Particle Effects
- Used in About page (matrix rain) and AI chat (thinking particles)
- Japanese characters for matrix effect
- Blue dots for AI thinking states

### Skill Meters
- Animated progress bars with gradient fills
- Progressive reveal with staggered timing
- Color-coded by category

### Tech Stack Badges
```css
px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50
```

## 🤖 AI-Specific Design

### AI Avatar
- Mood-based gradient backgrounds
- Particle effects during "thinking" state
- Pulse animations for active states

### Chat Interface
- Distinct styling for user vs AI messages
- Gradient backgrounds for user messages
- Glass morphism for AI responses
- Typing indicators with animated dots

## 🎯 Special Effects

### Glow Effects
```css
shadow-xl hover:shadow-2xl hover:shadow-blue-500/25
```

### Glass Morphism
```css
backdrop-blur border border-gray-700/50
```

### Gradient Overlays
```css
bg-gradient-to-t from-gray-900/80 to-transparent
```

## 📐 Spacing System

### Standard Spacing
- **Small:** `gap-3`, `p-3`, `mb-3`
- **Medium:** `gap-6`, `p-6`, `mb-6`
- **Large:** `gap-8`, `p-8`, `mb-8`
- **XL:** `gap-12`, `p-12`, `mb-12`

### Page Sections
- **Top Padding:** `pt-32` (accounts for navbar)
- **Bottom Padding:** `pb-16`
- **Section Spacing:** `mb-20` between major sections

## 🔍 Accessibility

### Focus States
- All interactive elements have focus rings
- High contrast maintained throughout
- Semantic HTML structure preserved

### Color Contrast
- Text maintains WCAG AA compliance
- Interactive elements have clear hover states
- Status colors are distinguishable

---

## 🎨 Usage Guidelines

1. **Consistency:** Always use the established color palette and spacing system
2. **Animation:** Keep transitions smooth (300ms standard, 1000ms for page loads)
3. **Hierarchy:** Use gradient text for main headings, white for sections, gray for body
4. **Interactive Feedback:** Every clickable element should have hover and active states
5. **Glass Effects:** Use backdrop-blur sparingly for premium feel without overwhelming
6. **Gradients:** Primary blue-to-cyan for CTAs, other colors for specific categories

This design system creates a cohesive, futuristic aesthetic that positions Julien as a cutting-edge automation specialist while remaining professional and accessible.