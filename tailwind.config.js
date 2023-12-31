/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'darkestGray': '#0e0e0e',
      'darkerGray': '#181818',
      'darkGray': '#1f1f1f',
      'medGray': '#454545',
      'codeBlue': '#9CDCFE',
      'codeBlueDark': '#0078d4',
      'borderColor': '#ffffff15',
      'textDark': '#cccccc',
      'text': '#fff',
      'crtBg': 'rgba(18, 16, 16, 0.1)',
      'monitorBaseColor': '#011627',
    },
    fontFamily : {
      'heading': 'Inconsolata, monospace',
      'mono': '"Source Code Pro", monospace;',
    },
    extend: {
      screens: {
        'xs': '375px'
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      gridTemplateColumns: {
        'home-two-col': '.5fr 1fr',
        'projects-two-col': '.75fr 1fr',
        'projects-auto-col': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'crtBgEffect': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
      },
      backgroundSize: {
        'crtBgSize': '100% 2px, 3px 100%',
      },
      backgroundColor: {
        'scanline': 'rgba(156, 220, 254, 0.1)',
      },
      boxShadow: {
        'inner': 'inset 1px 1px 5px 1px rgba(0,0,0,0.65)',
      },
      keyframes: {
        blink: {
          '0%, 100%': {'color': 'transparent'},
          '50%': {'color': '#fff'},
        },
        flicker: {
          '0%': {'opacity': '0.27861'},
          '5%': {'opacity': '0.34769'},
          '10%': {'opacity': '0.23604'},
          '15%': {'opacity': '0.90626'},
          '20%': {'opacity': '0.18128'},
          '25%': {'opacity': '0.83891'},
          '30%': {'opacity': '0.65583'},
          '35%': {'opacity': '0.67807'},
          '40%': {'opacity': '0.26559'},
          '45%': {'opacity': '0.84693'},
          '50%': {'opacity': '0.96019'},
          '55%': {'opacity': '0.08594'},
          '60%': {'opacity': '0.20313'},
          '65%': {'opacity': '0.71988'},
          '70%': {'opacity': '0.53455'},
          '75%': {'opacity': '0.37288'},
          '80%': {'opacity': '0.71428'},
          '85%': {'opacity': '0.70419'},
          '90%': {'opacity': '0.7003'},
          '95%': {'opacity': '0.36108'},
          '100%': {'opacity': '0.24387'},
        },
        textShadow: {
          '0%': {'text-shadow': '0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '5%': {'text-shadow': '2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '10%': {'text-shadow': '0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '15%': {'text-shadow': '0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '20%': {'text-shadow': '3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '25%': {'text-shadow': '1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '30%': {'text-shadow': '0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '35%': {'text-shadow': '3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '40%': {'text-shadow': '3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '45%': {'text-shadow': '2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '50%': {'text-shadow': '0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '55%': {'text-shadow': '2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '60%': {'text-shadow': '2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '65%': {'text-shadow': '2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '70%': {'text-shadow': '0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '75%': {'text-shadow': '1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '80%': {'text-shadow': '0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '85%': {'text-shadow': '0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '90%': {'text-shadow': '3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '95%': {'text-shadow': '2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
          '100%': {'text-shadow': '2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px'},
        }, 
        scanline: {
          'from': {'top': '-100%'},
          'to': {'top': '120%'},
        },
        wobble: {
          '0%, 75%': {
            'transform': 'translateX(0%)',
            'transform-origin': '50% 50%',
          },
          '100%': {
            'transform': 'translateX(0%)',
            'transform-origin': '50% 50%',
          },
          '78.75%': {
            'transform': 'translateX(-12px) rotate(-10deg)',
          },
          '82.5%': {
            'transform': 'translateX(calc(12px / 2)) rotate(10deg)',
          },
          '86.25%': {
            'transform': 'translateX(calc(-12px / 2)) rotate(calc(-10deg / 1.8))',
          },
          '90%': {
            'transform': 'translateX(calc(12px / 3.3)) rotate(calc(10deg / 3))',
          },
          '93.75%': {
            'transform': 'translateX(calc(-12px / 5.5)) rotate(calc(-10deg / 5))',
          },
        }
      },
      animation: {
        'blinking-cursor': '1s blink step-end infinite',
        'text-shadow': '1.6s textShadow infinite',
        'crt-flicker': 'flicker 0.15s infinite',
        'scanline': 'scanline 3s linear infinite',
        'wobble': 'wobble 4s linear infinite',
      }, 
    },
  },
  plugins: [],
}