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

	const clickHandler = (event) => {
		if (options.disabled || tagName() === 'a') {
			event.preventDefault();
		}

		if (options.disabled) {
			event.stopPropagation();
			return;
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

		tabIndex : undefined,

		href : getHref(),

		target : isLink() ? options.target : undefined,

		rel : isLink() ? options.rel : undefined,

		'aria-disabled' : options.disabled ? true : undefined
	};
};

export default ButtonCore;
