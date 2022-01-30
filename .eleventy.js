module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("ptInCm", function(pt) {
        // source https://www.overleaf.com/learn/latex/Lengths_in_LaTeX
        return pt * 0.03515;
    });

    return {
        dir: {
            input: "src",
            output: "build"
        }
    }
};