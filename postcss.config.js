module.exports = {
    syntax: 'postcss-scss',
    map: { inline: false },
    plugins: [
        require('precss')({
            lookup: { disable: true },
            properties: {
                // Чтобы работали CSS custom properties, а не заменялись на статическое значение.
                disable: true,
                preserve: true,
            },
        }),
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-advanced-variables'),
        require('postcss-strip-inline-comments'),
        require('autoprefixer'),
        require('cssnano'),
    ],
};
