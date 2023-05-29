module.exports = {
    globals: {},
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\js$": "babel-jest",
        '^.+\\.jsx?$': 'babel-jest',
        "^.+\\.css$": "jest-transform-css" // some deps use css instead of scss
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    testEnvironmentOptions: {
        "customExportConditions": [
            "node",
            "node-addons"
        ]
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(nuxt|unenv|swiper|ssr-window|dom7)/).*$',
        '\\.pnp\\.[^\\/]+$'
    ],
}
