var path=require('path');
module.exports={
  entry:{
    app:'./app.js'
  },
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'[name].bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:["react"]
          }
        }
      },{
        test:/\.css$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'}
        ]
      }
    ]
  }
}
