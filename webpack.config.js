module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname+'/public',
        filename: 'bundle.js'
    },
    module: {
        rules:[ //using babel with webpack for the react preset, see .babelrc file in root
            {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
            }     
        ]
    }
};