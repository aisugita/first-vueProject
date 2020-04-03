// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: {
      index:'./resource/index.js'
    },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'js')
  },
  optimization:{
    splitChunks:{
        name:'vue.bundle',
        chunks:'initial'
    }
  },
  module:{
    rules:[
        {
            test: /\.vue$/, // ファイルが.vueで終われば...
            loader: 'vue-loader' // vue-loaderを使う  
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: [
                  // プリセットを指定することで、ES2020 を ES5 に変換
                  '@babel/preset-env',
                ]
              }
        },
    ],
  },
  resolve:{
    extensions: ['.js', '.vue'],
    alias: {
        // vue-template-compilerに読ませてコンパイルするために必要
        'vue$': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
       new VueLoaderPlugin()
    ]
};