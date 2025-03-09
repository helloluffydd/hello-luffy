/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 600
            },
            p: {
              textAlign: 'justify',
              letterSpacing: 0.5
            },
            a: {
              textUnderlineOffset: '5px'
            },
            img: {
              borderRadius: '8px',
              width: '100%',
              margin: '0 auto'
            },
            pre: {
              borderRadius: '8px',
            },
            code: {
              backgroundColor: '#269',
              color: '#fff',
              padding: '4px',
              borderRadius: '4px',
              fontWeight: '100',
              fontSize: '0.5rem'
            },
            th: {
              padding: '15px 0',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            'figcaption': {
              letterSpacing: '0.75px'
            }
          }
        },
        base: {
          css: {
            h1: {
              lineHeight: 1.5
            }
          }
        },
        lg: {
          css: {
            h1: {
              lineHeight: 1.5
            },
            img: {
              margin: '0 auto'
            }
          }
        }
      }
    }
  },
}
