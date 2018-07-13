import { hsl } from 'polished'

export const black = hsl(0, 0, 0.4)
export const black_bis = hsl(0, 0, 0.7)
export const black_ter = hsl(0, 0, 0.14)

export const grey_darker = hsl(0, 0, 0.21)
export const grey_dark = hsl(0, 0, 0.29)
export const grey = hsl(0, 0, 0.48)
export const grey_light = hsl(0, 0, 0.71)
export const grey_lighter = hsl(0, 0, 0.86)

export const white_ter = hsl(0, 0, 0.96)
export const white_bis = hsl(0, 0, 0.98)
export const white = hsl(0, 0, 1)

export const orange = hsl(14, 1, 0.53)
export const yellow = hsl(48, 1, 0.67)
export const green = hsl(141, 0.71, 0.48)
export const turquoise = hsl(171, 1, 0.41)
export const cyan = hsl(204, 0.86, 0.53)
export const blue = hsl(217, 0.71, 0.53)
export const purple = hsl(271, 1, 0.71)
export const red = hsl(348, 1, 0.61)

// Typography

export const family_sans_serif =
  'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
export const family_monospace = 'monospace'
export const render_mode = 'optimizeLegibility'

export const size_1 = '3rem'
export const size_2 = '2.5rem'
export const size_3 = '2rem'
export const size_4 = '1.5rem'
export const size_5 = '1.25rem'
export const size_6 = '1rem'
export const size_7 = '0.75rem'

export const weight_light = 300
export const weight_normal = 400
export const weight_medium = 500
export const weight_semibold = 600
export const weight_bold = 700

// Responsiveness

// The container horizontal gap, which acts as the offset for breakpoints
export const gap = 64
// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
export const tablet = '769px'
// 960px container + 4rem
export const desktop = `${960 + 2 * gap}px`
// 1152px container + 4rem
export const widescreen = `${1152 + 2 * gap}px`
export const widescreen_enabled = true
// 1344px container + 4rem
export const fullhd = `${1344 + 2 * gap}px`
export const fullhd_enabled = true

// Miscellaneous

export const easing = 'ease-out'
export const radius_small = '2px'
export const radius = '4px'
export const radius_large = '6px'
export const radius_rounded = '290486px'
export const speed = '86ms'

// Flags

export const variable_columns = true
