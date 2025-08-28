((self) => {
    "use strict";

    const config = {
        landing: {
            title: 'We want to know a little bit about you',
            description: 'Fill out a quick survey and let us recommend products just for you!',
            button: 'Start Survey',
        },
        userInfo: {
            title: 'Personal Information',
            consent: 'I consent to the collection of my data',
            button: 'Continue',
        },
        skinType: {
            title: 'What\'s your skin type?',
            options: [
                { value: 'oily', text: 'Oily', desc: 'Shiny, enlarged pores, prone to breakouts' },
                { value: 'dry', text: 'Dry', desc: 'Tight, flaky, rough texture' },
                { value: 'combination', text: 'Combination', desc: 'Oily T-zone, dry cheeks' },
                { value: 'sensitive', text: 'Sensitive', desc: 'Easily irritated, redness, reactions' },
                { value: 'normal', text: 'Normal', desc: 'Balanced, few imperfections' },
            ],
            button: 'Continue',
        },
        concern: {
            title: 'What are your main skin concerns?',
            button: 'Continue',
            oily: [
                { value: 'acne', text: 'Acne & Breakouts', desc: 'Pimples, blackheads, whiteheads' },
                { value: 'pores', text: 'Large Pores', desc: 'Enlarged, visible pores' },
                { value: 'shine', text: 'Excess Oil', desc: 'Oily, shiny appearance' },
                { value: 'texture', text: 'Uneven Texture', desc: 'Rough, bumpy skin' }
            ],
            dry: [
                { value: 'hydration', text: 'Dehydration', desc: 'Lack of moisture, tightness' },
                { value: 'flakiness', text: 'Flakiness', desc: 'Dry, peeling skin' },
                { value: 'fine-lines', text: 'Fine Lines', desc: 'Early signs of aging' },
                { value: 'dullness', text: 'Dullness', desc: 'Lack of radiance' }
            ],
            default: [
                { value: 'aging', text: 'Anti Aging', desc: 'Fine lines, wrinkles, firmness' },
                { value: 'dark-spots', text: 'Dark Spots', desc: 'Hyperpigmentation, sun damage' },
                { value: 'sensitivity', text: 'Sensitivity', desc: 'Redness, irritation' },
                { value: 'hydration', text: 'Hydration', desc: 'Moisture balance' }
            ]
        },
        routine: {
            title: 'What\'s your current skincare routine?',
            button: 'Continue',
            options: [
                { value: 'minimal', text: 'Minimal', desc: 'Just cleanser and moisturizer' },
                { value: 'basic', text: 'Basic', desc: 'Cleanser, moisturizer, sunscreen' },
                { value: 'moderate', text: 'Moderate', desc: '4-6 products, some actives' },
                { value: 'extensive', text: 'Extensive', desc: '7+ products, multiple actives' }
            ]
        },
    };

    const storageConfig = {};

    const eventConfig = {};

    const stepOrder = [
        'landing',
        'userInfo',
        'skinType',
        'concern',
        'routine',
        'results',
    ];

    const state = {
        currentStep: 'landing',
        consent: false,
        userInfo: {
            name: '',
            email: '',
            phone: '',
            dialCode: '',
        },
        answers: {
            skinType: null,
            concern: [],
            routine: null,
            budget: null,
        },
        recommendations: [],
    };

    const classes = {
        style: 'ins-custom-style',
        wrapper: 'ins-wrapper',
        modal: 'ins-modal',
        modalOverlay: 'ins-modal-overlay',
        modalContent: 'ins-modal-content',
        stepContainer: 'ins-step-container',
        stepContent: 'ins-step-content',
        stepTitle: 'ins-step-title',
        userForm: 'ins-user-form',
        formGroup: 'ins-form-group',
        phoneGroup: 'ins-phone-group',
        button: 'ins-button',
        surveyForm: 'ins-survey-form',
        optionText: 'ins-option-text',
        checkboxGroup: 'ins-checkbox-group',
        checkboxOption: 'ins-checkbox-option',
        radioGroup: 'ins-radio-group',
        radioOption: 'ins-radio-option',
        show: 'ins-show',
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

    self.loadJQuery = () => {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        script.onload = () => {
            self.init();
        };
        document.head.appendChild(script);
    };

    self.reset = () => {

    };

    self.buildCSS = () => {
        const { style } = classes;
        const { modalOverlay, modal, stepContainer, stepTitle, userForm, formGroup, phoneGroup, button, surveyForm,
            optionText, checkboxGroup, checkboxOption, radioGroup, radioOption } = selectors;
        const customStyle = `
            <style class="${style}">
                ${modalOverlay}{
                    position: fixed;
                    background-color: rgba(0, 0, 0, 0.6);
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                }

                ${modal}{
                    background: #fff;
                    border-radius: 15px;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 500px;
                    height: 800px;
                }

                ${show}{
                    display: block;
                }
            </style>
        `;
        $('head').append(customStyle);
    };

    self.buildHTML = () => {
        const { wrapper, modalOverlay, modal, modalContent, stepContainer } = classes;

        const outerHTML = `
            <div class="${wrapper}">
                <div class="${modalOverlay}"></div>
                <div class="${modal}">
                    <div class="${modalContent}">
                        <div class="${stepContainer}"></div>
                    </div>
                </div>
            </div>
        `;
        $(outerHTML).appendTo('body');
        
    };

    self.setEvents = () => {
    };

    self.getStepHTML = (step) => {
        switch (step) {
            case 'landing':
                return self.landingHTML();
            case 'userInfo':
                return self.userInfoHTML();
            case 'skinType':
                return self.skinTypeHTML();
            case 'concern':
                return self.concernHTML();
            case 'routine':
                return self.routineHTML();
        }
    }

    self.landingHTML = () => {
        const { stepContent, stepTitle, button } = classes;
        const { title, description, button: buttonText } = config.landing;
        return `
            <div class="${stepContent}">
                <h2 class="${stepTitle}">${title}</h2>
                <p>${description}</p>
                <div class="${button}">${buttonText}</div>
            </div>
        `;
    }

    self.userInfoHTML = () => {
        const { stepContent, stepTitle, userForm, formGroup, phoneGroup, button } = classes;
        const { title, consent, button: buttonText } = config.userInfo;

        return `
            <div class="${stepContent}">
                <h2 class="${stepTitle}">${title}</h2>
                <form class="${userForm}">
                    <div class="${formGroup}">
                        <label>
                            <input type="checkbox" name="consent" ${state.consent ? 'checked' : ''}>
                            ${consent}
                        </label>
                    </div>
                    <div class="${formGroup}">
                        <input type="text" name="name" placeholder="Full Name" value="${state.userInfo.name}">
                    </div>
                    <div class="${formGroup}">
                        <input type="email" name="email" placeholder="Email" value="${state.userInfo.email}">
                    </div>
                    <div class="${phoneGroup}">
                        <select name="dialCode">
                            <option value="+90" ${state.userInfo.dialCode === '+90' ? 'selected' : ''}>Turkiye</option>
                            <option value="+1" ${state.userInfo.dialCode === '+1' ? 'selected' : ''}>United States</option>
                            <option value="+49" ${state.userInfo.dialCode === '+49' ? 'selected' : ''}>Germany</option>
                            <option value="+44" ${state.userInfo.dialCode === '+44' ? 'selected' : ''}>United Kingdom</option>
                            <option value="+33" ${state.userInfo.dialCode === '+33' ? 'selected' : ''}>France</option>
                        </select>
                        <input type="tel" name="phone" placeholder="Phone" value="${state.userInfo.phone}">
                    </div>
                    <button type="submit" class="${button}">${buttonText}</button>
                </form>
            </div>
        `;
    }

    self.skinTypeHTML = () => {
        const { stepContent, stepTitle, surveyForm, radioGroup, radioOption, optionText, button } = classes;
        const { title, options, button: buttonText } = config.skinType;

        return `
            <div class="${stepContent}">
                <h2 class="${stepTitle}">${title}</h2>
                <div>
                    <form class="${surveyForm}">
                        <div class="${radioGroup}">
                            ${options.map(item => `
                                <label class="${radioOption}">
                                    <input type="radio" name="skinType" value="${item.value}" ${state.answers.skinType === item.value ? 'checked' : ''}>
                                    <span class="${optionText}">
                                        <strong>${item.text}</strong>
                                        <small>${item.desc}</small>
                                    </span>
                                </label>
                            `).join('')}
                        </div>
                        <button type="submit" class="${button}">${buttonText}</button>
                    </form>
                </div>
            </div>
        `;
    }

    self.concernHTML = () => {
        const { stepContent, stepTitle, surveyForm, checkboxGroup, checkboxOption, optionText, button } = classes;
        const { title, button: buttonText, options } = config.concern;

        const concernOptions = options[state.answers.skinType] || options.default;

        return `
            <div class="${stepContent}">
                <h2 class="${stepTitle}">${title}</h2>
                <form class="${surveyForm}">
                    <div class="${checkboxGroup}">
                        ${concernOptions.map(item => `
                            <label class="${checkboxOption}">
                                <input type="checkbox" name="concern" value="${item.value}" 
                                    ${(state.answers.concern || []).includes(item.value) ? 'checked' : ''}>
                                <span class="${optionText}">
                                    <strong>${item.text}</strong>
                                    <small>${item.desc}</small>
                                </span>
                            </label>
                        `).join('')}
                    </div>
                    <button type="submit" class="${button}">${buttonText}</button>
                </form>
            </div>
        `;
    }

    self.routineHTML = () => {
        const { stepContent, stepTitle, surveyForm, radioGroup, radioOption, optionText, button } = classes;
        const { title, button: buttonText, options } = config.routine;

        return `
            <div class="${stepContent}">
                <h2 class="${stepTitle}">${title}</h2>
                <form class="${surveyForm}">
                    <div class="${radioGroup}">
                        ${options.map(item => `
                            <label class="${radioOption}">
                                <input type="radio" name="routine" value="${item.value}" ${state.answers.routine === item.value ? 'checked' : ''}>
                                <span class="${optionText}">
                                    <strong>${item.text}</strong>
                                    <small>${item.desc}</small>
                                </span>
                            </label>
                        `).join('')}
                    </div>
                    <button type="submit" class="${button}">${buttonText}</button>
                </form>
            </div>
        `;
    }

    self.init();
})({});