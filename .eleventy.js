const { optimize } = require('svgo');
const markdownIt = require( 'markdown-it');
const markdownItRenderer = new markdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/static");
    
    eleventyConfig.addTransform("svg-optimize", function(content) {
        if( this.outputPath && this.outputPath.endsWith(".svg") ) {
            const {data} = optimize(content, {
                js2svg: {
                    pretty: true
                },
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                minifyStyles: false,
                                convertStyleToAttrs: false,
                                inlineStyles: false
                            }
                        }
                    },
                    'reusePaths',
                    'sortAttrs'
                ]
            });

            return data;
        }
    
        return content;
    });

    eleventyConfig.addFilter("ptInCm", function(pt) {
        // source https://www.overleaf.com/learn/latex/Lengths_in_LaTeX
        return pt * 0.03515;
    });

    eleventyConfig.addFilter('markdownify',(str) => {
        return markdownItRenderer.renderInline(str)
    })

    return {
        dir: {
            input: "src",
            output: "build"
        }
    }
};