((self) => {
    "use strict";

    const config = {
        landing: {
            image: 'https://raw.githubusercontent.com/irfansubasi/mixed-up-survey/refs/heads/main/pic%20for%20url/choose.png',
            title: 'We want to know a little bit about you',
            description: 'Fill out a quick survey and let us recommend products just for you!',
            button: 'Start Survey',
        },
        userInfo: {
            title: 'Personal Information',
            consent: 'I consent to the collection of my data',
            button: 'Continue',
            countries: [
                { value: '+90', label: 'Turkiye', flag: 'https://flagcdn.com/tr.svg' },
                { value: '+1', label: 'United States', flag: 'https://flagcdn.com/us.svg' },
                { value: '+49', label: 'Germany', flag: 'https://flagcdn.com/de.svg' },
                { value: '+44', label: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
                { value: '+33', label: 'France', flag: 'https://flagcdn.com/fr.svg' },
            ],
            errors: {
                consent: 'You can\'t continue without consent!',
                name: 'Please enter your name!',
                email: 'Please enter your email address! (example@gmail.com)',
                emailInvalid: 'Please enter a valid email address! (example@gmail.com)',
                phone: 'Please enter your phone number!',
                phoneInvalid: 'Please enter a valid phone number!',
            }
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
        stepImage: 'ins-step-image',
        stepContent: 'ins-step-content',
        stepTitle: 'ins-step-title',
        stepDescription: 'ins-step-description',
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
        errorMessage: 'ins-error-message',
        customDropdown: 'ins-custom-dropdown',
        dropdownSelected: 'ins-dropdown-selected',
        dropdownOptions: 'ins-dropdown-options',
        dropdownOption: 'ins-dropdown-option',
        dropdownArrow: 'ins-dropdown-arrow',
        selectedFlag: 'ins-selected-flag',
        selectedText: 'ins-selected-text',
        optionFlag: 'ins-option-flag',
        optionText: 'ins-option-text',
        rotated: 'ins-rotated',
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
        const { modalOverlay, modal, show, stepContent, modalContent, stepContainer, wrapper, stepTitle, stepDescription,
            button, stepImage, userForm, formGroup, phoneGroup, radioGroup, optionText, radioOption, checkboxGroup, checkboxOption, errorMessage,
            customDropdown, dropdownSelected, dropdownOptions, dropdownOption, dropdownArrow, selectedFlag, selectedText, optionFlag, rotated} = selectors;
        const customStyle = `
            <style class="${style}">

                ${wrapper} *{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Inter', 'Apple Color Emoji', sans-serif;
                }

                ${modalOverlay} {
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
                    width: 700px;
                    height: 700px;
                    padding: 50px;
                }

                ${modalContent}{
                    height: 100%;
                    width: 100%;
                }

                ${stepContainer}{
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 100%;
                }

                ${stepContent}{
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    width: 100%;
                }

                ${stepImage}{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                ${stepTitle}{
                    color: #1F2937;
                    font-size: 25px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }

                ${stepDescription}{
                    color: #4A4A4A;
                    font-size: 18px;
                    font-weight: 400;
                    margin-bottom: 20px;
                    max-width: 80%;
                    text-align: center;
                }

                ${button}{
                    background-color: #F08000;
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 20px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: none;
                }

                ${button}:hover{
                    opacity: 0.8;
                }

                ${userForm}{
                    width: 100%;
                    max-width: 500px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                ${formGroup}{
                    display: flex;
                    flex-direction: column;
                }

                ${formGroup} label{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: #374151;
                    cursor: pointer;
                }

                ${formGroup} input{
                    padding: 12px 16px;
                    border: 2px solid #E5E7EB;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }

                ${formGroup} input[type="checkbox"]{
                    width: 18px;
                    height: 18px;
                }

                ${phoneGroup}{
                    display: flex;
                    gap: 10px;
                }

                ${phoneGroup} select{
                    display: none;
                    padding: 12px 16px;
                    border: 2px solid #E5E7EB;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }

                ${phoneGroup} input{
                    width: 100%;
                    padding: 12px 16px;
                    border: 2px solid #E5E7EB;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }

                ${radioGroup}{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                ${radioOption} input{
                    width: 18px;
                    height: 18px;
                    accent-color: #F08000;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border: 2px solid #F08000;
                    border-radius: 50%;
                    outline: none;
                }

                ${radioOption} {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                ${radioOption} input:checked{
                    background-color: #F08000;
                }

                ${optionText}{
                    font-size: 20px;
                }

                ${optionText} strong{
                    color: #374151;
                }

                ${optionText} small{
                    color: #4A4A4A;
                }

                ${checkboxGroup}{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                ${checkboxOption} input{
                    width: 18px;
                    height: 18px;
                    accent-color: #F08000;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border: 2px solid #F08000;
                }

                ${checkboxOption} input:checked{
                    background-color: #F08000;
                }

                ${checkboxOption}{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                ${errorMessage}{
                    display: none;
                    color: #F08000;
                    font-size: 14px;
                    font-weight: 400;
                    margin-top: 5px;
                }

                ${customDropdown} {
                    position: relative;
                    width: 120px;
                }
                
                ${dropdownSelected} {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 16px;
                    border: 2px solid #E5E7EB;
                    border-radius: 8px;
                    cursor: pointer;
                    background: white;
                }
                
                ${dropdownSelected}:hover {
                    border-color: #F08000;
                }
                
                ${dropdownArrow} {
                    margin-left: auto;
                    transition: transform 0.3s ease;
                }
                
                ${dropdownArrow}${rotated} {
                    transform: rotate(180deg);
                }
                
                ${dropdownOptions} {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    border: 2px solid #E5E7EB;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                    max-height: 200px;
                    overflow-y: auto;
                }
                
                ${dropdownOption} {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 16px;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }
                
                ${dropdownOption}:hover {
                    background-color: #F3F4F6;
                }
                
                ${selectedFlag},
                ${optionFlag} {
                    width: 20px;
                    height: 15px;
                    object-fit: cover;
                }

                ${show}{
                    display: flex;
                    animation: fadeIn 2s ease;
                }

                @keyframes fadeIn{
                    from{
                        opacity: 0;
                    }
                    to{
                        opacity: 1;
                    }
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

        self.renderStep('landing');

    };

    self.renderStep = (step) => {
        const { stepContent, stepContainer } = selectors;
        const { show, stepContent: stepContentClass } = classes;

        let newStep;

        const existingStep = $(stepContainer).find(`[data-step="${step}"]`);

        if (!existingStep.length) {
            newStep = $(`<div class="${stepContentClass}" data-step="${step}">${self.getStepHTML(step)}</div>`);

            $(stepContainer).append(newStep);
        }

        $(stepContainer).find(stepContent).removeClass(show);
        $(`${stepContent}[data-step=${step}]`).addClass(show);

        state.currentStep = step;
    }

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
        const { stepContent, stepTitle, stepDescription, button, stepImage } = classes;
        const { title, description, button: buttonText, image: imageUrl } = config.landing;
        return `
            <img src="${imageUrl}" alt="${title}" class="${stepImage}">
            <h2 class="${stepTitle}">${title}</h2>
            <p class="${stepDescription}">${description}</p>
            <div class="${button}">${buttonText}</div>
        `;
    }

    self.userInfoHTML = () => {
        const { stepContent, stepTitle, userForm, formGroup, phoneGroup, button, errorMessage, customDropdown, dropdownSelected,
            dropdownOptions, dropdownOption, dropdownArrow, selectedFlag, selectedText, optionFlag, optionText } = classes;
        const { title, consent, button: buttonText, errors } = config.userInfo;

        return `
            <h2 class="${stepTitle}">${title}</h2>
            <form class="${userForm}">
                <div class="${formGroup}">
                    <label>
                        <input type="checkbox" name="consent" ${state.consent ? 'checked' : ''}>
                        ${consent}
                    </label>
                    <div class="${errorMessage}" name="consent">${errors.consent}</div>
                </div>
                <div class="${formGroup}">
                    <input type="text" name="name" placeholder="Full Name" value="${state.userInfo.name}">
                    <div class="${errorMessage}" name="name">${errors.name}</div>
                </div>
                <div class="${formGroup}">
                    <input type="text" name="email" placeholder="Email" value="${state.userInfo.email}">
                    <div class="${errorMessage}" name="email">${errors.email}</div>
                </div>
                <div class="${phoneGroup}">
                    <select name="dialCode">
                        ${config.userInfo.countries.map(country => `
                            <option value="${country.value}" ${state.userInfo.dialCode === country.value ? 'selected' : ''}>
                                ${country.label}
                            </option>
                        `).join('')}
                    </select>
                    <div class="${customDropdown}">
                        <div class="${dropdownSelected}">
                            <img src="https://flagcdn.com/tr.svg" alt="Flag" class="${selectedFlag}">
                            <span class="${selectedText}">+90</span>
                            <span class="${dropdownArrow}">▼</span>
                        </div>
                        <div class="${dropdownOptions}">
                            ${config.userInfo.countries.map(country => `
                                <div class="${dropdownOption}" data-value="${country.value}">
                                    <img src="${country.flag}" alt="Flag" class="${optionFlag}">
                                    <span class="${optionText}">${country.value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <input type="tel" name="phone" placeholder="Phone" value="${state.userInfo.phone}">
                </div>
                <div class="${errorMessage}" name="phone">${errors.phone}</div>
                <button type="submit" class="${button}">${buttonText}</button>
            </form>
        `;
    }

    self.skinTypeHTML = () => {
        const { stepContent, stepTitle, surveyForm, radioGroup, radioOption, optionText, button } = classes;
        const { title, options, button: buttonText } = config.skinType;

        return `
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
        `;
    }

    self.concernHTML = () => {
        const { stepContent, stepTitle, surveyForm, checkboxGroup, checkboxOption, optionText, button } = classes;
        const { title, button: buttonText } = config.concern;

        const concernOptions = config.concern[state.answers.skinType] || config.concern.default;

        return `
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
        `;
    }

    self.routineHTML = () => {
        const { stepContent, stepTitle, surveyForm, radioGroup, radioOption, optionText, button } = classes;
        const { title, button: buttonText, options } = config.routine;

        return `
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
        `;
    }

    self.setEvents = () => {
        const { button, customDropdown, dropdownSelected, dropdownOptions, dropdownOption, dropdownArrow, selectedFlag,
            selectedText, optionFlag, optionText } = selectors;

        const { rotated } = classes;


        $(document).on('click', button, (event) => {
            if (state.currentStep === 'landing') {
                event.preventDefault();
                self.renderStep('userInfo');
            }
        });

        $(document).on('click', dropdownSelected, (event) => {
            event.stopPropagation();
            $(dropdownOptions).toggle();
            $(dropdownArrow).toggleClass(rotated);
        });
        
        $(document).on('click', dropdownOption, (event) => {
            const value = $(event.currentTarget).data('value');
            const flagSrc = $(event.currentTarget).find(optionFlag).attr('src');
            const text = $(event.currentTarget).find(optionText).text();
            
            $(selectedFlag).attr('src', flagSrc);
            $(selectedText).text(text);
            
            $('select[name="dialCode"]').val(value);
            
            $(dropdownOptions).toggle(false);
            $(dropdownArrow).removeClass(rotated);
        });
        
        $(document).on('click', (event) => {
            if (!$(event.target).closest(customDropdown).length) {
                $(dropdownOptions).toggle(false);
                $(dropdownArrow).removeClass(rotated);
            }
        });
        

        $(document).on('submit', 'form', (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
            const { currentStep } = state;

            if (currentStep === 'userInfo') {
                if (!self.validateForm(formData)) {
                    return;
                }

                state.consent = formData.get('consent') === 'on';
                state.userInfo = {
                    name: formData.get('name') || '',
                    email: formData.get('email') || '',
                    phone: formData.get('phone') || '',
                    dialCode: formData.get('dialCode') || ''
                };
                console.log(state.userInfo);
                self.renderStep('skinType');
            }

            if (currentStep === 'skinType') {
                const skinType = formData.get('skinType');
                state.answers.skinType = skinType;

                self.renderStep('concern');
            }

            if (currentStep === 'concern') {
                const concerns = formData.getAll('concern');
                state.answers.concern = concerns;

                self.renderStep('routine');
            }

            if (currentStep === 'routine') {
                const routine = formData.get('routine');
                state.answers.routine = routine;

                self.renderStep('results');
            }
        });
    };

    self.validateForm = (formData) => {
        const { errorMessage } = selectors;
        const { show } = classes;
        const { consent: consentText, name: nameText, email: emailText, emailInvalid: emailInvalidText, phone: phoneText, phoneInvalid: phoneInvalidText } = config.userInfo.errors;
        
        const consent = formData.get('consent');
        const email = formData.get('email');
        const name = formData.get('name');
        const phone = formData.get('phone');
        const dialCode = formData.get('dialCode');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegexByCountry = {
            "+90": /^[1-9][0-9]{9}$/,
            "+1": /^[2-9][0-9]{9}$/,
            "+49": /^[1-9][0-9]{6,13}$/,
            "+44": /^[1-9][0-9]{9}$/,
            "+33": /^[1-9][0-9]{8}$/,
        };

        $(errorMessage).removeClass(show);

        let hasError = false;

        if (consent !== 'on') {
            $(`${errorMessage}[name="consent"]`).text(consentText).addClass(show);
            hasError = true;
        }

        if (!name) {
            $(`${errorMessage}[name="name"]`).text(nameText).addClass(show);
            hasError = true;
        }

        if (!email) {
            $(`${errorMessage}[name="email"]`).text(emailText).addClass(show);
            hasError = true;
        }else if(!emailRegex.test(email)) {
            $(`${errorMessage}[name="email"]`).text(emailInvalidText).addClass(show);
            hasError = true;
        }
        
        if (!phone) {
            $(`${errorMessage}[name="phone"]`).text(phoneText).addClass(show);
            hasError = true;
        }else if (!phoneRegexByCountry[dialCode].test(phone)) {
            $(`${errorMessage}[name="phone"]`).text(phoneInvalidText).addClass(show);
            hasError = true;
        }

        return !hasError;
    }

    self.init();
})({});