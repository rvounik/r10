module.exports = {
    presets: [
        ['@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],
    // plugins: [
    //     '@babel/plugin-syntax-dynamic-import',
    //     ['@babel/plugin-proposal-decorators', { legacy: true }],
    //     '@babel/plugin-transform-runtime',
    // ]
}
