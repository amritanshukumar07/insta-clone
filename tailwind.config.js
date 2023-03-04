module.exports = {
  future:{
    removeDeprecatedGapUtilities:true
  },
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      fill:(theme)=>({
      red:theme('colors.red.primary')
      }),
      colors: {  
        white:'#ffffff',
        blue:{
          medium:'#005c98'
        },
        black:{
          light:'#262626',
          faded:'00000059'
        },
        gray:{
          base:'#616161',
          backgtound:'#fafafa',
            primary:'#dbdbdb'
        },
        red:{
          primary:'#ed4956'
        }
      }
    },
    variants:{
      display:['group-hover']
    },
    plugins: [],
  }