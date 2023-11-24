module.exports = {
    syntax: 'postcss-scss',
    map: { inline: true },
    plugins: [
        require('postcss-nested'),
        require('postcss-advanced-variables'),
        require('postcss-import'),
        require('autoprefixer'),
        require('cssnano')
    ],
}