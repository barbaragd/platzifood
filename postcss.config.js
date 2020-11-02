const purgecss = require('@fullhuman/postcss-purgecss');
const { purge } = require('tailwindcss/stubs/defaultConfig.stub');

module.exports = {
    plugins: [
        require('tailwindcss'),
        // purgecss({
        //     content: ['./**/*.html']
        // }),
        // require('cssnano')({
        //     preset: 'default'
        // })
    ]
}