module.exports = function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.addPassthroughCopy({ 'static': '/' });
};

module.exports.config = {
    markdownTemplateEngine: 'njk',
};
