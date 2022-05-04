import { callEventHandler } from '@/helpers/events';

function ButtonCore(options) {
	/**
	 * Check if the button element has attributes for links
	 * 
	 * @returns {boolean} - Validate if it's a link
	 */
	const isLink = () => {
		return options.href != null || options.target != null || options.rel != null;
	};

	/**
	 * Validate if there's href so 'Enter' key can trigger anchor
	 * button
	 * 
	 * @returns {string | undefined}
	 */
	const getHref = () => {
		if (isLink()) {
			return options.disabled ? undefined : options.href || '#';
		}

		return options.href;
	};

	/**
	 * Dynamically changed element base on options
	 * 
	 * @returns {string} - HTML tag name
	 */
	const tagName = () => {
		if (!options.is) {
			if (isLink()) {
				return 'a';
			} else {
				return 'button';
			}
		}

		return options.is;
	};

	/**
	 * Handle onClick event
	 * 
	 * @param {} event 
	 * @returns 
	 */
	const onClickHandler = (event) => {
		if (options.disabled || tagName() === 'a') {
			event.preventDefault();
		}

		if (options.disabled) {
			event.stopPropagation();
			return;
		}

		callEventHandler(options.onClick, event);
	};

	/**
	 * Handle any keydown on the element
	 * 
	 * @param {*} event 
	 */
	const onKeydownHandler = (event) => {
		if (event.key === '') {
			event.preventDefault();
			onClickHandler()(event);
		}
	};

	/**
	 * Return default properties that can be override.
	 * 
	 * @returns {object} - Button roles and attributes
	 */
	return {
		is : tagName(),

		type : 'button',

		disabled : undefined,

		role : 'button',

		get tabIndex() {
			return options.disabled ? undefined : options.tabIndex;
		},

		get href() {
			return getHref();
		},

		get target() {
			return isLink() ? options.target : undefined;
		},

		get rel() {
			return isLink() ? options.rel : undefined;
		},

		get	'aria-disabled'() {
			return options.disabled ? options.disabled : undefined;
		},

		get onClick() {
			return onClickHandler();
		},

		get onKeyDown() {
			return onKeydownHandler();
		}
	};
};

export default ButtonCore;
