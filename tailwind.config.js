export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: { extend: {
    colors: { bg: 'var(--bg)', surface: 'var(--surface)', fg: 'var(--fg)', muted: 'var(--muted)', line: 'var(--line)', accent: 'var(--accent)', onaccent: 'var(--onaccent)' },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'] },
    borderRadius: { DEFAULT: '4px' } } },
}
