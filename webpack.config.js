
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

    entry: {

        polyfills: "./src/polyfills.js",

        vendor: "./src/vendor.js",

        main: "./src/main.js",

    },

    output: {

        filename: "[name].js",

    },

    module: {

		loaders: [

			{

				test: /\.js$/,

				loader: "babel-loader",

				exclude: /node_modules/,

				query: {

					presets: ["es2015", "angular2"],

				},

			},

            {

                test: /\.js$/,

                loader: "angular2-template-loader",

                exclude: /node_modules/,

            },

            {

				test: /\.(html|css)$/,

				loader: "raw-loader"

			},

		],

	},

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({

            name: ["main", "vendor", "polyfills"]

        }),

        new HtmlWebpackPlugin({

            template: "src/index.html"

        }),

    ],

};