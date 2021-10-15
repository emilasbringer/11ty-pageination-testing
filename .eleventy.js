const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addWatchTarget('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/img')
    eleventyConfig.addPassthroughCopy('./src/scripts')

    eleventyConfig.addPlugin(syntaxHighlight);
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
}