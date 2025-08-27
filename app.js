((self) => {
    "use strict";

    const config = {};

    const storageConfig = {};

    const eventConfig = {};

    const classes = {
        style: 'ins-custom-style',
    };

    const selectors = Object.keys(classes).reduce((createdSelector, key) => (
        createdSelector[key] = `.${classes[key]}`, createdSelector
    ), {})

    self.init = () => {
        if (typeof window.jQuery === 'undefined') {
            self.loadJQuery();
        } else {
            self.reset();
            self.buildCSS();
            self.buildHTML();
            self.setEvents();
        }
    };

    self.loadJquery = () => {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        script.onload = () => {
            self.init();
        };
        document.head.appendChild(script);
    };

    self.reset = () => {

    };

    self.buildCss = () => {
        const { style } = classes;

        customStyle = `
            <style class="${style}"></style>
        `;

        $('head').append(customStyle);
    }

    self.buildHtml = () => {
        const outerHTML = ``;
        $(outerHTML).appendTo('body');

    }

    self.setEvents = () => {
    }

    self.init();
})({});
