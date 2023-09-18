const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme, matchUtilities, addComponents, e, config }) {
	//
}, {
  theme: {
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        placeholder: 'var(--color-text-placeholder)',
        inverse: 'var(--color-text-inverse)',
        error: 'var(--color-text-error)',
        white: 'var(--color-text-white)',
        black: 'var(--color-text-black)',
        interactive: {
          default: 'var(--color-text-interactive-default)',
          hover: 'var(--color-text-interactive-hover)'
        }
      },
      backgroundColor: {
        base: {
          default: 'var(--color-background-base-default)',
          header: 'var(--color-background-base-header)',
          hover: 'var(--color-background-base-hover)',
          selected: 'var(--color-background-base-selected)'
        },
        surface: {
          default: 'var(--color-background-surface-default)',
          header: 'var(--color-background-surface-header)',
          hover: 'var(--color-background-surface-hover)',
          selected: 'var(--color-background-surface-selected)'
        },
        interactive: {
          default: 'var(--color-background-interactive-default)',
          hover: 'var(--color-background-interactive-hover)'
        }
      },
      borderColor: {
        interactive: {
          default: 'var(--color-border-interactive-default)',
          hover: 'var(--color-border-interactive-hover)',
          muted: 'var(--color-border-interactive-muted)'
        }
      }
    },
    colors: {
      classification: {
        topsecretsci: 'var(--color-classification-topsecretsci)',
        topsecret: 'var(--color-classification-topsecret)',
        secret: 'var(--color-classification-secret)',
        confidential: 'var(--color-classification-confidential)',
        cui: 'var(--color-classification-cui)',
        unclassified: 'var(--color-classification-unclassified)'
      },
      'data-visualization': {
        1: 'var(--color-data-visualization-1)',
        2: 'var(--color-data-visualization-2)',
        3: 'var(--color-data-visualization-3)',
        4: 'var(--color-data-visualization-4)',
        5: 'var(--color-data-visualization-5)',
        6: 'var(--color-data-visualization-6)',
        7: 'var(--color-data-visualization-7)',
        8: 'var(--color-data-visualization-8)'
      },
      status: {
        critical: 'var(--color-status-critical)',
        serious: 'var(--color-status-serious)',
        caution: 'var(--color-status-caution)',
        normal: 'var(--color-status-normal)',
        standby: 'var(--color-status-standby)',
        off: 'var(--color-status-off)'
      },
      neutral: {
        1000: 'var(--color-palette-neutral-1000)',
        '000': 'var(--color-palette-neutral-000)'
      },
      darkblue: {
        100: 'var(--color-palette-darkblue-100)',
        200: 'var(--color-palette-darkblue-200)',
        300: 'var(--color-palette-darkblue-300)',
        400: 'var(--color-palette-darkblue-400)',
        500: 'var(--color-palette-darkblue-500)',
        600: 'var(--color-palette-darkblue-600)',
        700: 'var(--color-palette-darkblue-700)',
        800: 'var(--color-palette-darkblue-800)',
        900: 'var(--color-palette-darkblue-900)',
        950: 'var(--color-palette-darkblue-950)'
      },
      brightblue: {
        100: 'var(--color-palette-brightblue-100)',
        200: 'var(--color-palette-brightblue-200)',
        300: 'var(--color-palette-brightblue-300)',
        400: 'var(--color-palette-brightblue-400)',
        500: 'var(--color-palette-brightblue-500)',
        600: 'var(--color-palette-brightblue-600)',
        700: 'var(--color-palette-brightblue-700)',
        800: 'var(--color-palette-brightblue-800)',
        850: 'var(--color-palette-brightblue-850)',
        900: 'var(--color-palette-brightblue-900)'
      },
      grey: {
        100: 'var(--color-palette-grey-100)',
        200: 'var(--color-palette-grey-200)',
        250: 'var(--color-palette-grey-250)',
        300: 'var(--color-palette-grey-300)',
        400: 'var(--color-palette-grey-400)',
        500: 'var(--color-palette-grey-500)',
        600: 'var(--color-palette-grey-600)',
        700: 'var(--color-palette-grey-700)',
        800: 'var(--color-palette-grey-800)',
        900: 'var(--color-palette-grey-900)'
      },
      red: {
        400: 'var(--color-palette-red-400)',
        500: 'var(--color-palette-red-500)',
        600: 'var(--color-palette-red-600)',
        700: 'var(--color-palette-red-700)',
        800: 'var(--color-palette-red-800)',
        900: 'var(--color-palette-red-900)'
      },
      orange: {
        400: 'var(--color-palette-orange-400)',
        500: 'var(--color-palette-orange-500)',
        600: 'var(--color-palette-orange-600)',
        700: 'var(--color-palette-orange-700)',
        800: 'var(--color-palette-orange-800)',
        900: 'var(--color-palette-orange-900)'
      },
      yellow: {
        400: 'var(--color-palette-yellow-400)',
        500: 'var(--color-palette-yellow-500)',
        600: 'var(--color-palette-yellow-600)',
        700: 'var(--color-palette-yellow-700)',
        800: 'var(--color-palette-yellow-800)',
        900: 'var(--color-palette-yellow-900)'
      },
      green: {
        400: 'var(--color-palette-green-400)',
        500: 'var(--color-palette-green-500)',
        600: 'var(--color-palette-green-600)',
        700: 'var(--color-palette-green-700)',
        800: 'var(--color-palette-green-800)',
        900: 'var(--color-palette-green-900)'
      },
      cyan: {
        400: 'var(--color-palette-cyan-400)',
        500: 'var(--color-palette-cyan-500)',
        600: 'var(--color-palette-cyan-600)',
        700: 'var(--color-palette-cyan-700)',
        800: 'var(--color-palette-cyan-800)',
        900: 'var(--color-palette-cyan-900)'
      },
      violet: {
        800: 'var(--color-palette-violet-800)'
      },
      blue: {
        800: 'var(--color-palette-blue-800)'
      },
      teal: {
        100: 'var(--color-palette-teal-100)',
        200: 'var(--color-palette-teal-200)',
        300: 'var(--color-palette-teal-300)',
        400: 'var(--color-palette-teal-400)',
        500: 'var(--color-palette-teal-500)',
        600: 'var(--color-palette-teal-600)',
        700: 'var(--color-palette-teal-700)',
        800: 'var(--color-palette-teal-800)',
        900: 'var(--color-palette-teal-900)'
      },
      purple: {
        100: 'var(--color-palette-purple-100)',
        200: 'var(--color-palette-purple-200)',
        300: 'var(--color-palette-purple-300)',
        400: 'var(--color-palette-purple-400)',
        500: 'var(--color-palette-purple-500)',
        600: 'var(--color-palette-purple-600)',
        700: 'var(--color-palette-purple-700)',
        800: 'var(--color-palette-purple-800)',
        900: 'var(--color-palette-purple-900)'
      },
      pink: {
        100: 'var(--color-palette-pink-100)',
        200: 'var(--color-palette-pink-200)',
        300: 'var(--color-palette-pink-300)',
        400: 'var(--color-palette-pink-400)',
        500: 'var(--color-palette-pink-500)',
        600: 'var(--color-palette-pink-600)',
        700: 'var(--color-palette-pink-700)',
        800: 'var(--color-palette-pink-800)',
        900: 'var(--color-palette-pink-900)'
      },
      hotorange: {
        100: 'var(--color-palette-hotorange-100)',
        200: 'var(--color-palette-hotorange-200)',
        300: 'var(--color-palette-hotorange-300)',
        400: 'var(--color-palette-hotorange-400)',
        500: 'var(--color-palette-hotorange-500)',
        600: 'var(--color-palette-hotorange-600)',
        700: 'var(--color-palette-hotorange-700)',
        800: 'var(--color-palette-hotorange-800)',
        900: 'var(--color-palette-hotorange-900)'
      }
    },
    borderRadius: {
      base: 'var(--radius-base)',
      circle: 'var(--radius-circle)'
    },
    fontFamily: {
      sans: ['var(--font-family-sans)']
    },
    fontSize: {
      xs: ['var(--font-size-xs)', { lineHeight: 'var(--font-size-xs)' }],
      sm: [
        'var(--font-size-sm)',
        { lineHeight: 'var(--line-height-sm)' }
      ],
      base: [
        'var(--font-size-base)',
        { lineHeight: 'var(--line-height-base)' }
      ],
      lg: [
        'var(--font-size-lg)',
        { lineHeight: 'var(--line-height-lg)' }
      ],
      xl: [
        'var(--font-size-xl)',
        { lineHeight: 'var(--line-height-xl)' }
      ],
      '2xl': [
        'var(--font-size-2xl)',
        { lineHeight: 'var(--line-height-lg)' }
      ],
      '3xl': [
        'var(--font-size-3xl)',
        { lineHeight: 'var(--line-height-xl)' }
      ],
      '4xl': [
        'var(--font-size-4xl)',
        { lineHeight: 'var(--line-height-2xl)' }
      ],
      '5xl': [
        'var(--font-size-5xl)',
        { lineHeight: 1 }
      ],
      '6xl': [
        'var(--font-size-6xl)',
        { lineHeight: 1 }
      ]
    },
    lineHeight: {
      none: '1',
      '2x': 'var(--line-height-2xs)',
      'xs': 'var(--line-height-xs)',
      'sm': 'var(--line-height-sm)',
      'base': 'var(--line-height-base)',
      'lg': 'var(--line-height-lg)',
      'xl': 'var(--line-height-xl)',
      '2xl': 'var(--line-height-2xl)',
      '3xl': 'var(--line-height-3xl)',
      '4xl': 'var(--line-height-4xl)'
    },
    fontWeight: {
      light: 'var(--font-weights-light)',
      regular: 'var(--font-weights-regular)',
      medium: 'var(--font-weights-medium)',
      bold: 'var(--font-weights-bold)'
    },
    opacity: {
      0: '0',
      25: 'var(--opacity-25)',
      35: 'var(--opacity-35)',
      40: 'var(--opacity-40)',
      45: 'var(--opacity-45)',
      50: 'var(--opacity-50)',
      100: '1',
      disabled: 'var(--opacity-disabled)'
    },
    spacing: {
      0: 'var(--spacing-0)',
      0.25: '(var--spacing-025)',
      0.5: '(var--spacing-050)',
      1: 'var(--spacing-1)',
      2: 'var(--spacing-2)',
      3: 'var(--spacing-3)',
      4: 'var(--spacing-4)',
      6: 'var(--spacing-6)',
      8: 'var(--spacing-8)',
      10: 'var(--spacing-10)',
      12: 'var(--spacing-12)',
      14: 'var(--spacing-14)',
      16: 'var(--spacing-16)',
      20: 'var(--spacing-20)',
      24: 'var(--spacing-24)'
    }
  }
})
