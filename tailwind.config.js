
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      "secondary": "#d4d8dd",
      "primary": "#ffffff",
      "inverse": "#080c11",
      "error": "#ff3838",
      "placeholder": "#a4abb6"
    },
    backgroundColor: {
      "base": {
        "default": "#101923",
        "header": "#080c11",
        "hover": "#1b2d3e",
        "selected": "#1c3f5e"
      },
      "surface": {
        "default": "#1b2d3e",
        "header": "#1b2d3e",
        "hover": "#142435",
        "selected": "#1c3f5e"
      }
    },
    colors: {
      "neutral-1000": "#000000",
      "neutral-000": "#ffffff",
      "interactive": "#4dacff",
      "interactive-hover": "#92cbff",
      "interactive-muted": "#2b659b",
      "darkblue": {
        "100": "#cbdee9",
        "200": "#98bdd3",
        "300": "#649cbd",
        "400": "#2f7aa7",
        "500": "#005a8f",
        "600": "#004872",
        "700": "#1c3f5e",
        "800": "#1b2d3e",
        "900": "#172635",
        "950": "#080c11",
      },
      "brightblue": {
        "100": "#daeeff",
        "200": "#cee9fc",
        "300": "#b7dcff",
        "400": "#92cbff",
        "500": "#4dacff",
        "600": "#3a87cf",
        "700": "#2b659b",
        "800": "#1c3851",
        "850": "#142435",
        "900": "#101923"
      },
      "grey": {
        "100": "#f5f6f9",
        "200": "#eaeef4",
        "250": "#e0e5eb",
        "300": "#d4d8dd",
        "400": "#bbc1c9",
        "500": "#a4abb6",
        "600": "#7b8089",
        "700": "#51555b",
        "800": "#3c3e42",
        "900": "#292a2d"
      },
      "red": {
        "400": "#ff5f60",
        "500": "#ff3838",
        "600": "#ff2a04",
        "700": "#c8102e",
        "800": "#8b1703",
        "900": "#661102"
      },
      "orange": {
        "400": "#ffcc57",
        "500": "#ffb302",
        "600": "#ffaf3d",
        "700": "#ff8c00",
        "800": "#975f0e",
        "900": "#664618"
      },
      "yellow": {
        "400": "#fded61",
        "500": "#fce83a",
        "600": "#fad800",
        "700": "#c7ab00",
        "800": "#917d01",
        "900": "#645600"
      },
      "green": {
        "400": "#99f666",
        "500": "#56f000",
        "600": "#00e200",
        "700": "#00ad23",
        "800": "#007a33",
        "900": "#005a00"
      },
      "cyan": {
        "400": "#5ce2ff",
        "500": "#64d9ff",
        "600": "#2dccff",
        "700": "#20a9d5",
        "800": "#35798e",
        "900": "#285766"
      },
      "violet": {
        "800": "#502b85"
      },
      "blue": {
        "800": "#0033a0"
      },
      "teal": {
        "100": "#d0f4f4",
        "200": "#a1e9eb",
        "300": "#70dde0",
        "400": "#3ed2d6",
        "500": "#00c7cb",
        "600": "#009fa3",
        "700": "#00777a",
        "800": "#035051",
        "900": "#032828"
      },
      "purple": {
        "100": "#e4e2f7",
        "200": "#c9c5ed",
        "300": "#aea8e5",
        "400": "#938bdb",
        "500": "#786dd3",
        "600": "#6058a8",
        "700": "#48417f",
        "800": "#302c54",
        "900": "#18152b"
      },
      "pink": {
        "100": "#edcef3",
        "200": "#da9ce7",
        "300": "#c76ada",
        "400": "#b534ce",
        "500": "#a200c1",
        "600": "#81009a",
        "700": "#610074",
        "800": "#41004d",
        "900": "#200227"
      },
      "hotorange": {
        "100": "#f8ddd1",
        "200": "#f0baa3",
        "300": "#ea9875",
        "400": "#e27545",
        "500": "#da5309",
        "600": "#af420a",
        "700": "#833209",
        "800": "#572108",
        "900": "#2b1105"
      }
    },
    borderRadius: {
      base: "3px",
      circle: "50%"
    },
    fontFamily: {
      "sans": [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        "Helvetica Neue",
        "sans-serif"
      ],
      "mono": [
        "Roboto Mono",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        "Helvetica Neue",
        "sans-serif"
      ]
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.125rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }]
    },
    opacity: {
      0: '0',
      12: '0.12',
      14: '0.14',
      20: '0.2',
      25: '0.25',
      40: '0.4',
      100: '1',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

