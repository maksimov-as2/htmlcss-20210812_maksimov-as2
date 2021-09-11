module.exports = {
    syntax: 'postcss-scss',
    map: { inline: false },
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-advanced-variables'),
        require('autoprefixer'),
        require('postcss-strip-inline-comments'),
        require('cssnano'),
    ],
};
