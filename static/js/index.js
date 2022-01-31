const addNodesToFirstSVG = (...nodes) => {
    document.querySelector('svg').append(...nodes);
}

(async () => {
    let response = await fetch('../../svg/all.svg');

    if (response.ok) {
        let text = await response.text();

        const parser = new DOMParser();
        const {childNodes} = parser.parseFromString(text, 'image/svg+xml');

        addNodesToFirstSVG(...childNodes[0].children);
    }
})();
