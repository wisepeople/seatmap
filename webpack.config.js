// const path = require('path'); // 파일이나 디렉터리 경로를 다루기 위한 NodeJS 기본 모듈
// const { merge } = require('webpack-merge');
// // const WatchIgnorePlugin = require('watch-ignore-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = (env, opts) => {
//   const config = {
//     // 가져오기 확장자 생략 가능
//     resolve: {
//       extensions: [ '.js', '.vue'],
//       // 절대 경로 별칭 설정
//       alias: {
//         '~': path.resolve(__dirname), // E.g. `import '~/components/TodoApp'` in script tag
//         'scss': path.resolve(__dirname, './scss/') // E.g. `import "scss/style";` in style tag
//       }
//     },
//     // 파일을 읽어들이기 시작하는 진입
//     // `__dirname`은 현재 파일의 위치를 알려주는 NodeJS 전역 변수
//     entry: {
//       app: [
//         '@babel/polyfill',
//         path.join(__dirname, 'main.js')
//       ]
//     },
//     // 결과물(번들)을 반환하는 설정
//     // `[name]`은 `entry`의 Key 이름, `app`
//     output: {
//       filename: '[name].bundle.js',
//       path: path.join(__dirname, 'dist'),
//       publicPath: '/dist/'
//     },
//     // 모듈 처리 방식을 설정
//     module: {
//       rules: [
//         // {
//         //   test: /\.ts$/,
//         //   use: [
//         //     {
//         //       loader: 'ts-loader',
//         //       options: {
//         //         appendTsSuffixTo:[/TS\.vue$/]
//         //       }
//         //     }
//         //   ]
//         // },
//         {
//           test: /\.vue$/,
//           use: 'vue-loader',
//           // options:{
//           //   loaders:{
//           //     ts:'ts-loader'
//           //   }
//           // }
//         },
//         {
//           test: /\.ts$/, // .ts파일을
//           loader: 'ts-loader' // ts-loader로 해석
//         },
//         {
//           test: /\.css$/,
//           use: [
//             'vue-style-loader', // 1st
//             'css-loader', // 2nd
//             'postcss-loader' // 3rd
//           ]
//         },
//         {
//           test: /\.scss$/,
//           use: [
//             'vue-style-loader', // 1st
//             'css-loader', // 2nd
//             'postcss-loader', // 3rd
//             'sass-loader' // 4th
//           ]
//         },
//         {
//           test: /\.less$/i,
//           use: [
//             'vue-style-loader', // 1st
//             'css-loader', // 2nd
//             'postcss-loader', // 3rd
//             {
//               loader:'less-loader', // 4th
//               options:{
//                 sourceMap:true
//               }
//             }
//           ]
//         },
//         {
//           test: /\.?js$/,
//           exclude: /node_modules/, // 제외할
//           use: [
//             {
//               loader: 'babel-loader',
//             }
//           ]
//         }
//       ]
//     },
//     devServer: { // webpack-dev-server 옵션 설정
//       host: "localhost", // localhost 설정
//       port: 5500, // 포트 설정
//       // noInfo: true, // true로 했더니 실행이 안되는줄알고 몇시간 삽질을 했다. 지워주자.
//       open: true, // localhost:5500 으로 새탭 열림
//     },
//     // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
//     plugins: [
//       // new WatchIgnorePlugin({
//       //   paths:[
//       //     /\.js$/,
//       //     /\.d\.ts$/
//       // ]}),
//       new HtmlWebpackPlugin({
//         template: path.join(__dirname, 'index.html')
//       }),
//       // new TsconfigPathsPlugin('/tsconfig.json'),
//       new VueLoaderPlugin(),
//       // assets 디렉터리의 내용을 `dist` 디렉터리에 복사합니다
//       new CopyPlugin({
//           patterns:[
//             {
//               from: 'assets/',
//               to: ''
//             }
//           ]
//       })
//     ]
//   }

//   // if (opts.mode === 'development') {
//   //   return merge(config, {
//   //     // 빌드 시간이 적고, 디버깅이 가능한 방식
//   //     devtool: 'eval',
//   //     devServer: {
//   //       // 자동으로 기본 브라우저를 오픈합니다
//   //       open: false,
//   //       // HMR, https://webpack.js.org/concepts/hot-module-replacement/
//   //       hot: true
//   //     }
//   //   })

//   // // opts.mode === 'production'
//   // } else {
//   //   return merge(config, {
//   //     // 용량이 적은 방식
//   //     devtool: 'cheap-module-source-map',
//   //     plugins: [
//   //       // 빌드(build) 직전 `output.path`(`dist` 디렉터리) 내 기존 모든 파일 삭제
//   //       new CleanWebpackPlugin()
//   //     ]
//   //   })
//   // }
// }
const path = require('path') // 파일이나 디렉터리 경로를 다루기 위한 NodeJS 기본 모듈
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
require('@babel/polyfill')

module.exports = (env, opts) => {
  const config = {
    // 가져오기 확장자 생략 가능
    resolve: {
      extensions: ['.js', '.vue'],
      // 절대 경로 별칭 설정
      alias: {
        '~': path.resolve(__dirname), // E.g. `import '~/components/TodoApp'` in script tag
        'scss': path.resolve(__dirname, './scss/') // E.g. `import "scss/style";` in style tag
      }
    },
    // 파일을 읽어들이기 시작하는 진입
    // `__dirname`은 현재 파일의 위치를 알려주는 NodeJS 전역 변수
    entry: {
      app: [
        '@babel/polyfill',
        path.join(__dirname, 'main.js')
      ]
    },
    // 결과물(번들)을 반환하는 설정
    // `[name]`은 `entry`의 Key 이름, `app`
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'dist')
    },
    // 모듈 처리 방식을 설정
    module: {
      
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader', // 1st
            'css-loader', // 2nd
            'postcss-loader' // 3rd
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader', // 1st
            'css-loader', // 2nd
            'postcss-loader', // 3rd
            'sass-loader' // 4th
          ]
        },
        {
          test: /\.?js$/,
          exclude: /node_modules/, // 제외할
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html')
      }),
      new VueLoaderPlugin(),
      // assets 디렉터리의 내용을 `dist` 디렉터리에 복사합니다
      new CopyPlugin(
        {
          patterns:[
            {
              from: 'assets/',
              to: ''
            }
          ]
        }
      )
    ]
  }

  if (opts.mode === 'development') {
    return merge(config, {
      // 빌드 시간이 적고, 디버깅이 가능한 방식
      devtool: 'eval',
      devServer: {
        // 자동으로 기본 브라우저를 오픈합니다
        open: false,
        // HMR, https://webpack.js.org/concepts/hot-module-replacement/
        hot: true
      }
    })

  // opts.mode === 'production'
  } else {
    return merge(config, {
      // 용량이 적은 방식
      devtool: 'cheap-module-source-map',
      plugins: [
        // 빌드(build) 직전 `output.path`(`dist` 디렉터리) 내 기존 모든 파일 삭제
        new CleanWebpackPlugin()
      ]
    })
  }
}
