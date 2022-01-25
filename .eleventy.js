module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksFilter("makeUppercase", (value) => {
        return value;
    });

    return {
        dir: {
            input: "src",
            output: "build"
        }
    }
};