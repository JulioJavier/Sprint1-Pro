const path = require("path");
const basePath = __dirname;
const distPath = "dist";
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    //mode - modo de funcionamiento
    // mode: "development",
    //entry point - archivo de entrada
    entry: {
        app: "./src/index.js"
    },
    //output point - donde dejara el archivo de salida
    output: {
        path: path.join(basePath, distPath),
        filename: "bundle.js",
    },
    devServer: {
		open: true
	},
    module:{
        rules:[
            {
                test:/\.js/,
                exclude:/node_module/,
                use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
            },
            {
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.s[ac]ss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
        ]
    },
    plugins: [
		new HtmlWebpackPlugin({
			title: "myWebpackServer"
		})
	]
};