((self) => {
    "use strict";

    const config = {
        closeButton: 'X',
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
                { value: '+90', label: 'Turkiye', flag: 'https://flagcdn.com/tr.svg', mask: '(###) ###-##-##' },
                { value: '+1', label: 'United States', flag: 'https://flagcdn.com/us.svg', mask: '(###)-###-##-##' },
                { value: '+49', label: 'Germany', flag: 'https://flagcdn.com/de.svg', mask: '(###)-###-##-###' },
                { value: '+44', label: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg', mask: '(####)-###-###' },
                { value: '+33', label: 'France', flag: 'https://flagcdn.com/fr.svg', mask: '(#)-##-##-##-##' },
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
                { value: 'normal', text: 'Normal', desc: 'Balanced, few imperfections' },
                { value: 'oily', text: 'Oily', desc: 'Shiny, enlarged pores, prone to breakouts' },
                { value: 'dry', text: 'Dry', desc: 'Tight, flaky, rough texture' },
                { value: 'combination', text: 'Combination', desc: 'Oily T-zone, dry cheeks' },
                { value: 'sensitive', text: 'Sensitive', desc: 'Easily irritated, redness, reactions' },
            ],
            button: 'Continue',
        },
        concern: {
            title: 'What are your main skin concerns?',
            button: 'Continue',
            errors: {
                concern: 'Please select at least one concern!',
            },
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
        products: {
            title: 'Your Personalized Recommendations',
            button: 'Get Discount Code',
            carouselPrev: '‹ Previous',
            carouselNext: 'Next ›',
        },
        eventName: '.ins-event',
    };

    const productsConfig = {
        oily: {
            acne: [
                { name: 'Salicylic Acid Cleanser', price: '$25', description: 'Fights acne and unclogs pores', image: 'https://placehold.co/150x150' },
                { name: 'Benzoyl Peroxide Treatment', price: '$18', description: 'Targets acne-causing bacteria', image: 'https://placehold.co/150x150' },
                { name: 'Niacinamide Serum', price: '$22', description: 'Reduces inflammation and breakouts', image: 'https://placehold.co/150x150' }
            ],
            pores: [
                { name: 'Clay Mask', price: '$15', description: 'Deep cleanses and tightens pores', image: 'https://placehold.co/150x150' },
                { name: 'Pore Minimizing Toner', price: '$20', description: 'Refines and tightens pore appearance', image: 'https://placehold.co/150x150' },
                { name: 'Retinol Treatment', price: '$35', description: 'Improves skin texture and reduces pores', image: 'https://placehold.co/150x150' }
            ],
            shine: [
                { name: 'Oil-Free Moisturizer', price: '$20', description: 'Hydrates without adding shine', image: 'https://placehold.co/150x150' },
                { name: 'Mattifying Primer', price: '$28', description: 'Controls oil throughout the day', image: 'https://placehold.co/150x150' },
                { name: 'Blotting Papers', price: '$8', description: 'Quick oil absorption on-the-go', image: 'https://placehold.co/150x150' }
            ],
            texture: [
                { name: 'AHA Exfoliating Serum', price: '$30', description: 'Smooths rough, bumpy skin', image: 'https://placehold.co/150x150' },
                { name: 'Gentle Exfoliating Scrub', price: '$18', description: 'Removes dead skin cells', image: 'https://placehold.co/150x150' },
                { name: 'Vitamin C Serum', price: '$25', description: 'Brightens and evens skin tone', image: 'https://placehold.co/150x150' }
            ]
        },
        dry: {
            hydration: [
                { name: 'Hyaluronic Acid Serum', price: '$30', description: 'Intense hydration boost', image: 'https://placehold.co/150x150' },
                { name: 'Rich Night Cream', price: '$35', description: 'Deep moisturizing overnight', image: 'https://placehold.co/150x150' },
                { name: 'Hydrating Face Mask', price: '$22', description: 'Weekly moisture treatment', image: 'https://placehold.co/150x150' }
            ],
            flakiness: [
                { name: 'Gentle Exfoliating Toner', price: '$18', description: 'Removes dead skin cells', image: 'https://placehold.co/150x150' },
                { name: 'Repairing Balm', price: '$25', description: 'Soothes and repairs dry skin', image: 'https://placehold.co/150x150' },
                { name: 'Ceramide Moisturizer', price: '$28', description: 'Strengthens skin barrier', image: 'https://placehold.co/150x150' }
            ],
            'fine-lines': [
                { name: 'Anti-Aging Night Cream', price: '$45', description: 'Targets fine lines and wrinkles', image: 'https://placehold.co/150x150' },
                { name: 'Retinol Serum', price: '$40', description: 'Stimulates collagen production', image: 'https://placehold.co/150x150' },
                { name: 'Peptide Eye Cream', price: '$32', description: 'Reduces under-eye fine lines', image: 'https://placehold.co/150x150' }
            ],
            dullness: [
                { name: 'Vitamin C Brightening Serum', price: '$28', description: 'Restores radiance and glow', image: 'https://placehold.co/150x150' },
                { name: 'Exfoliating Glow Mask', price: '$24', description: 'Reveals brighter, smoother skin', image: 'https://placehold.co/150x150' },
                { name: 'Illuminating Primer', price: '$26', description: 'Instant glow and radiance', image: 'https://placehold.co/150x150' }
            ]
        },
        normal: {
            aging: [
                { name: 'Anti-Aging Day Cream', price: '$38', description: 'Prevents signs of aging', image: 'https://placehold.co/150x150' },
                { name: 'Collagen Boosting Serum', price: '$42', description: 'Firms and lifts skin', image: 'https://placehold.co/150x150' },
                { name: 'SPF 50 Sunscreen', price: '$20', description: 'Essential daily protection', image: 'https://placehold.co/150x150' }
            ],
            'dark-spots': [
                { name: 'Dark Spot Corrector', price: '$35', description: 'Fades hyperpigmentation', image: 'https://placehold.co/150x150' },
                { name: 'Brightening Treatment', price: '$30', description: 'Even skin tone', image: 'https://placehold.co/150x150' },
                { name: 'Vitamin C Complex', price: '$32', description: 'Reduces sun damage', image: 'https://placehold.co/150x150' }
            ],
            sensitivity: [
                { name: 'Gentle Calming Cleanser', price: '$18', description: 'Soothes sensitive skin', image: 'https://placehold.co/150x150' },
                { name: 'Anti-Redness Serum', price: '$28', description: 'Reduces irritation and redness', image: 'https://placehold.co/150x150' },
                { name: 'Hypoallergenic Moisturizer', price: '$24', description: 'Fragrance-free hydration', image: 'https://placehold.co/150x150' }
            ],
            hydration: [
                { name: 'Balanced Moisturizer', price: '$22', description: 'Perfect moisture balance', image: 'https://placehold.co/150x150' },
                { name: 'Hydrating Essence', price: '$26', description: 'Lightweight hydration boost', image: 'https://placehold.co/150x150' },
                { name: 'Moisture Lock Cream', price: '$30', description: 'Long-lasting hydration', image: 'https://placehold.co/150x150' }
            ]
        },
        combination: {
            aging: [
                { name: 'Zone-Specific Treatment', price: '$40', description: 'Different care for T-zone and cheeks', image: 'https://placehold.co/150x150' },
                { name: 'Balanced Anti-Aging Serum', price: '$35', description: 'Works for all skin areas', image: 'https://placehold.co/150x150' },
                { name: 'Multi-Zone Moisturizer', price: '$28', description: 'Adapts to different skin needs', image: 'https://placehold.co/150x150' }
            ],
            'dark-spots': [
                { name: 'Targeted Spot Treatment', price: '$32', description: 'Precise dark spot correction', image: 'https://placehold.co/150x150' },
                { name: 'Even Tone Serum', price: '$30', description: 'Balances combination skin tone', image: 'https://placehold.co/150x150' },
                { name: 'Brightening Mask', price: '$25', description: 'Weekly treatment for all zones', image: 'https://placehold.co/150x150' }
            ],
            sensitivity: [
                { name: 'Gentle Zone Cleanser', price: '$20', description: 'Cleans without over-drying', image: 'https://placehold.co/150x150' },
                { name: 'Calming T-Zone Treatment', price: '$26', description: 'Soothes oily sensitive areas', image: 'https://placehold.co/150x150' },
                { name: 'Adaptive Moisturizer', price: '$24', description: 'Adjusts to each skin zone', image: 'https://placehold.co/150x150' }
            ],
            hydration: [
                { name: 'Dual-Zone Hydrator', price: '$28', description: 'Different hydration for each zone', image: 'https://placehold.co/150x150' },
                { name: 'Balancing Essence', price: '$26', description: 'Maintains perfect moisture balance', image: 'https://placehold.co/150x150' },
                { name: 'Smart Moisturizer', price: '$30', description: 'Automatically adjusts to skin needs', image: 'https://placehold.co/150x150' }
            ]
        },
        sensitive: {
            aging: [
                { name: 'Gentle Anti-Aging Cream', price: '$38', description: 'Anti-aging without irritation', image: 'https://placehold.co/150x150' },
                { name: 'Sensitive Skin Serum', price: '$32', description: 'Fragrance-free age prevention', image: 'https://placehold.co/150x150' },
                { name: 'Mild Retinol Alternative', price: '$35', description: 'Gentle anti-aging benefits', image: 'https://placehold.co/150x150' }
            ],
            'dark-spots': [
                { name: 'Gentle Brightening Cream', price: '$28', description: 'Fades spots without irritation', image: 'https://placehold.co/150x150' },
                { name: 'Sensitive Skin Corrector', price: '$30', description: 'Mild dark spot treatment', image: 'https://placehold.co/150x150' },
                { name: 'Hypoallergenic Brightener', price: '$26', description: 'Safe for sensitive skin', image: 'https://placehold.co/150x150' }
            ],
            sensitivity: [
                { name: 'Ultra-Gentle Cleanser', price: '$18', description: 'Cleanses without stripping', image: 'https://placehold.co/150x150' },
                { name: 'Anti-Redness Treatment', price: '$32', description: 'Calms and soothes irritation', image: 'https://placehold.co/150x150' },
                { name: 'Barrier Repair Cream', price: '$34', description: 'Strengthens sensitive skin', image: 'https://placehold.co/150x150' }
            ],
            hydration: [
                { name: 'Sensitive Skin Moisturizer', price: '$24', description: 'Hydrates without causing reactions', image: 'https://placehold.co/150x150' },
                { name: 'Calming Hydration Serum', price: '$28', description: 'Soothes while hydrating', image: 'https://placehold.co/150x150' },
                { name: 'Fragrance-Free Balm', price: '$22', description: 'Intensive moisture for sensitive skin', image: 'https://placehold.co/150x150' }
            ]
        }
    }

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
        carouselPosition: 0,
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
        recommendationsContainer: 'ins-recommendations-container',
        productCard: 'ins-product-card',
        productImage: 'ins-product-image',
        productName: 'ins-product-name',
        productPrice: 'ins-product-price',
        productDescription: 'ins-product-description',
        closeButton: 'ins-close-button',
        carouselTrack: 'ins-carousel-track',
        carouselSlide: 'ins-carousel-slide',
        carouselNav: 'ins-carousel-nav',
        carouselPrev: 'ins-carousel-prev',
        carouselNext: 'ins-carousel-next',
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
        const { wrapper } = selectors;
        const { eventName } = config;

        $(wrapper).remove();
        $(document).off(`click${eventName}`);
        $(document).off(`input${eventName}`);
        $(document).off(`submit${eventName}`);
    };

    self.buildCSS = () => {
        const { style } = classes;
        const { modalOverlay, modal, show, stepContent, modalContent, stepContainer, wrapper, stepTitle, stepDescription,
            button, stepImage, userForm, formGroup, phoneGroup, radioGroup, optionText, radioOption, checkboxGroup, checkboxOption, errorMessage,
            customDropdown, dropdownSelected, dropdownOptions, dropdownOption, dropdownArrow, selectedFlag, selectedText, optionFlag, rotated,
            recommendationsContainer, productCard, productImage, productName, productPrice, productDescription, closeButton, carouselTrack,
            carouselSlide, carouselPrev, carouselNext, carouselNav } = selectors;
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
                    overflow: hidden;
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

                ${recommendationsContainer}{
                    width: 100%;
                    max-width: 800px;
                }

                ${productCard}{
                    border: 1px solid #E5E7EB;
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    background: white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                ${productImage}{
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 15px;
                }

                ${productName}{
                    color: #1F2937;
                    font-size: 15px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }

                ${productPrice}{
                    color: #F08000;
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }

                ${productDescription}{
                    color: #6B7280;
                    font-size: 14px;
                    line-height: 1.4;
                }

                ${closeButton}{
                    position: absolute;
                    right: 25px;
                    top: 25px;
                    font-weight: 700;
                    font-size: 24px;
                    cursor: pointer;
                }

                ${carouselTrack}{
                    display: flex;
                    transition: transform 0.3s ease;
                    gap: 20px;
                }

                ${carouselSlide}{
                    min-width: 250px;
                    flex-shrink: 0;
                }

                ${carouselNav}{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 20px;
                }

                ${carouselPrev}{
                    background: #F08000;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 20px;
                }

                ${carouselNext}{
                    background: #F08000;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: opacity 0.3s ease;
                }

                ${carouselPrev}:disabled,
                ${carouselNext}:disabled{
                    opacity: 0.5;
                    cursor: not-allowed;
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
        const { wrapper, modalOverlay, modal, modalContent, stepContainer, closeButton } = classes;

        const outerHTML = `
            <div class="${wrapper}">
                <div class="${modalOverlay}"></div>
                <div class="${modal}">
                    <div class="${closeButton}">${config.closeButton}</div>
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
            case 'products':
                return self.productsHTML();
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
                    <input type="text" name="name" placeholder="Full Name" value="${state.userInfo.name}">
                    <div class="${errorMessage}" name="name">${errors.name}</div>
                </div>
                <div class="${formGroup}">
                    <input type="text" name="email" placeholder="Email" value="${state.userInfo.email}">
                    <div class="${errorMessage}" name="email">${errors.email}</div>
                </div>
                <div class="${formGroup}">
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
                        <input type="tel" name="phone" placeholder="Phone" value="${state.userInfo.phone}" data-mask="${config.userInfo.countries.find(item => item.value === (state.userInfo.dialCode || '+90')).mask}">
                    </div>
                    <div class="${errorMessage}" name="phone">${errors.phone}</div>
                </div>
                <div class="${formGroup}">
                    <label>
                        <input type="checkbox" name="consent" ${state.consent ? 'checked' : ''}>
                        ${consent}
                    </label>
                    <div class="${errorMessage}" name="consent">${errors.consent}</div>
                </div>
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
                        ${options.map((item, index) => `
                            <label class="${radioOption}">
                                <input type="radio" name="skinType" value="${item.value}"
                                ${state.answers.skinType === item.value ? 'checked' : ''}
                                ${!state.answers.skinType && index === 0 ? 'checked' : ''}>
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
        const { stepContent, stepTitle, surveyForm, checkboxGroup, checkboxOption, optionText, button, errorMessage } = classes;
        const { title, button: buttonText, errors } = config.concern;

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
                <div class="${errorMessage}" name="concern">${errors.concern}</div>
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
                    ${options.map((item, index) => `
                        <label class="${radioOption}">
                            <input type="radio" name="routine" value="${item.value}"
                            ${state.answers.routine === item.value ? 'checked' : ''}
                            ${!state.answers.routine && index === 0 ? 'checked' : ''}>
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

    self.productsHTML = () => {
        const { stepTitle, button, recommendationsContainer, productCard, productImage, productName, productPrice, productDescription, carouselTrack,
            carouselSlide, carouselPrev, carouselNext, carouselNav } = classes;
        const { title, button: buttonText, carouselPrev: carouselPrevText, carouselNext: carouselNextText } = config.products;
        const recommendations = self.getProductRecommendations();

        return `
            <h2 class="${stepTitle}">${title}</h2>
            <div class="${recommendationsContainer}">
                <div class="${carouselTrack}">
                ${recommendations.map(product => `
                    <div class="${carouselSlide}">
                        <div class="${productCard}">
                            <img src="${product.image}" alt="${product.name}" class="${productImage}">
                            <h3 class="${productName}">${product.name}</h3>
                            <p class="${productPrice}">${product.price}</p>
                            <p class="${productDescription}">${product.description}</p>
                        </div>
                    </div>
                `).join('')}
                </div>
                <div class="${carouselNav}">
                    <button type="button" class="${carouselPrev}" disabled>${carouselPrevText}</button>
                    <button type="button" class="${carouselNext}">${carouselNextText}</button>
                </div>
            </div>
            <button type="button" class="${button}">${buttonText}</button>
        `;
    };

    self.getProductRecommendations = () => {
        const { skinType, concern } = state.answers;
        const recommendations = [];

        const skinTypeProducts = productsConfig[skinType] || productsConfig.normal;

        concern.forEach(concernItem => {
            if (skinTypeProducts[concernItem]) {
                recommendations.push(...skinTypeProducts[concernItem]);
            }
        });

        return recommendations;
    };

    self.setEvents = () => {
        const { button, customDropdown, dropdownSelected, dropdownOptions, dropdownOption, dropdownArrow, selectedFlag,
            selectedText, optionFlag, optionText, closeButton, modalOverlay, modal, carouselTrack, carouselPrev, carouselNext } = selectors;

        const { rotated } = classes;

        const { eventName } = config;

        $(document).on(`click${eventName}`, closeButton, () => {
            $(modalOverlay).toggle(false);
            $(modal).toggle(false);
        });

        $(document).on(`click${eventName}`, modalOverlay, () => {
            $(modalOverlay).toggle(false);
            $(modal).toggle(false);
        });

        $(document).on(`click${eventName}`, button, (event) => {
            if (state.currentStep === 'landing') {
                event.preventDefault();
                self.renderStep('userInfo');
            }
        });

        $(document).on(`click${eventName}`, dropdownSelected, (event) => {
            event.stopPropagation();
            $(dropdownOptions).toggle();
            $(dropdownArrow).toggleClass(rotated);
        });

        $(document).on(`click${eventName}`, dropdownOption, (event) => {
            const value = $(event.currentTarget).data('value');
            const flagSrc = $(event.currentTarget).find(optionFlag).attr('src');
            const text = $(event.currentTarget).find(optionText).text();
            const mask = config.userInfo.countries.find(item => item.value === value).mask;

            $(selectedFlag).attr('src', flagSrc);
            $(selectedText).text(text);

            $('select[name="dialCode"]').val(value);

            $('input[name="phone"]').attr('data-mask', mask);

            const currentPhone = $('input[name="phone"]').val();
            if (currentPhone) {
                const unformatted = self.unformatPhoneNumber(currentPhone);
                const formatted = self.formatPhoneNumber(unformatted, mask);
                $('input[name="phone"]').val(formatted);
            }

            $(dropdownOptions).toggle(false);
            $(dropdownArrow).removeClass(rotated);
        });

        $(document).on(`click${eventName}`, (event) => {
            if (!$(event.target).closest(customDropdown).length) {
                $(dropdownOptions).toggle(false);
                $(dropdownArrow).removeClass(rotated);
            }
        });

        $(document).on(`input${eventName}`, 'input[name="phone"]', (event) => {
            const $input = $(event.target);
            const mask = $input.attr('data-mask');
            const value = event.target.value;

            const numbers = value.replace(/\D/g, '');
            const formatted = self.formatPhoneNumber(numbers, mask);
            $input.val(formatted);
        });


        $(document).on(`submit${eventName}`, 'form', (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
            const { currentStep } = state;

            switch (currentStep) {
                case 'userInfo':
                    if (!self.validateForm(formData, currentStep)) {
                        return;
                    }

                    state.consent = formData.get('consent') === 'on';
                    state.userInfo = {
                        name: formData.get('name') || '',
                        email: formData.get('email') || '',
                        phone: formData.get('phone') || '',
                        dialCode: formData.get('dialCode') || ''
                    };
                    self.renderStep('skinType');
                    break;
                case 'skinType':
                    const skinType = formData.get('skinType');
                    state.answers.skinType = skinType;
                    self.renderStep('concern');
                    break;
                case 'concern':
                    if (!self.validateForm(formData, currentStep)) {
                        return;
                    }
                    const concerns = formData.getAll('concern');
                    state.answers.concern = concerns;
                    self.renderStep('routine');
                    break;
                case 'routine':
                    const routine = formData.get('routine');
                    state.answers.routine = routine;
                    self.renderStep('products');
                    break;
            }
        });

        $(document).on(`click${eventName}`, carouselPrev, () => {
            self.carouselSlide('prev');
        });
        
        $(document).on(`click${eventName}`, carouselNext, () => {
            self.carouselSlide('next');
        });
    };

    self.formatPhoneNumber = (value, mask) => {
        if (!value) return '';
        const numbers = value.replace(/\D/g, '');
        let result = '';
        let numberIndex = 0;

        for (let i = 0; i < mask.length && numberIndex < numbers.length; i++) {
            if (mask[i] === '#') {
                result += numbers[numberIndex];
                numberIndex++;
            } else {
                result += mask[i];
            }
        }
        return result;
    };

    self.unformatPhoneNumber = (formattedValue) => {
        return formattedValue.replace(/\D/g, '');
    };

    self.validateForm = (formData, currentStep) => {
        const { errorMessage } = selectors;
        const { show } = classes;
        const { consent: consentText, name: nameText, email: emailText, emailInvalid: emailInvalidText, phone: phoneText, phoneInvalid: phoneInvalidText } = config.userInfo.errors;
        const { concern: concernText } = config.concern.errors;
        let hasError = false;

        if (currentStep === 'userInfo') {
            const consent = formData.get('consent');
            const email = formData.get('email');
            const name = formData.get('name');
            const phone = formData.get('phone');
            const dialCode = formData.get('dialCode');

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phoneRegexByCountry = {
                "+90": /^[1-9][0-9]{9}$/,
                "+1": /^[2-9][0-9]{9}$/,
                "+49": /^[1-9][0-9]{6,13}$/,
                "+44": /^[1-9][0-9]{9}$/,
                "+33": /^[1-9][0-9]{8}$/,
            };

            $(errorMessage).removeClass(show);

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
            } else if (!emailRegex.test(email)) {
                $(`${errorMessage}[name="email"]`).text(emailInvalidText).addClass(show);
                hasError = true;
            }

            if (!phone) {
                $(`${errorMessage}[name="phone"]`).text(phoneText).addClass(show);
                hasError = true;
            } else {
                const unformattedPhone = self.unformatPhoneNumber(phone);
                if (!phoneRegexByCountry[dialCode].test(unformattedPhone)) {
                    $(`${errorMessage}[name="phone"]`).text(phoneInvalidText).addClass(show);
                    hasError = true;
                }
            }
        }

        if (currentStep === 'concern') {
            const concerns = formData.getAll('concern');
            if (concerns.length === 0) {
                $(`${errorMessage}[name="concern"]`).text(concernText).addClass(show);
                hasError = true;
            }
        }
        return !hasError;
    }

    self.carouselSlide = (direction) => {
        const { carouselTrack, carouselPrev, carouselNext, carouselSlide } = selectors;

        
        const currentPosition = state.carouselPosition;
        const slideAmount = 270;
        const carouselSlidesLength = $(carouselSlide).length;
        let newPosition;
        
        if (direction === 'next') {
            const maxPosition = -(carouselSlidesLength - 1) * slideAmount;
            newPosition = Math.max(maxPosition, currentPosition - slideAmount);
        } else {
            newPosition = Math.min(0, currentPosition + slideAmount);
        }
        
        $(carouselTrack).css('transform', `translateX(${newPosition}px)`);
        state.carouselPosition = newPosition;
        
        $(carouselPrev).prop('disabled', newPosition >= 0);
        $(carouselNext).prop('disabled', newPosition <= -(carouselSlidesLength - 1) * slideAmount);
    }

    self.init();
})({});