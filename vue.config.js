// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        // // pass options to sass-loader
        // // @/ is an alias to src/
        // // so this assumes you have a file named `src/variables.sass`
        // // Note: this option is named as "prependData" in sass-loader v8
        // sass: {
        //   additionalData: `@import "~@/variables.sass"`
        // },
        // // by default the `sass` option will apply to both syntaxes
        // // because `scss` syntax is also processed by sass-loader underlyingly
        // // but when configuring the `prependData` option
        // // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
        // // in that case, we can target the `scss` syntax separately using the `scss` option
        // scss: {
        //   additionalData: `@import "~@/variables.scss";`
        // },
        // pass Less.js Options to less-loader
        less:{
          // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
          // `primary` is global variables fields name
          globalVars: {
            // Color
            '@primary1': '#00256c',
            '@primary2': '#118fe4',
            '@primary3': '#8be0f8',
            '@primary4': '#c7f3ff',
            '@primary5': '#013066',

            '@secondary1': '#000',
            '@secondary2': '#555',
            '@secondary3': '#767676',

            '@line1': '#d9dbe1',
            '@line2': '#e7eaf0',

            '@bg1': '#e6f9ff',
            '@bg2': '#f3f4f8',
            '@bg3': '#f8f9fc',

            '@positive': '#0064de',
            '@negative': '#de001b',

            '@color1': '#2068d1',
            '@color2': '#bcbcbc',
            '@color3': '#dee0e2'
          }
        }
      }
    }
  }