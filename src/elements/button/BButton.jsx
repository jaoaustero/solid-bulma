import { mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import ButtonCore from './core';
import { joinClass } from '@/helpers/class';

function BButton(props) {
	/**
	 * Button headless component
	 */
	const defaultProps = ButtonCore(props);

	/**
	 * Handle default and props passed to be merged and split by its category.
	 */
	const [local, others] = splitProps(mergeProps(defaultProps, props), [
		'is',
		'color',
		'isLight',
		'size',
		'isResponsive',
		'isFullWidth',
		'isOutlined',
		'isInverted',
		'isRounded',
		'state',
		'isLoading',
		'isStatic',
		'class'
	]);

	/**
	 * A default base class of bulma
	 */
	const baseClass = 'button';

	/**
	 * Merged all class modifiers
	 * 
	 * @returns {object} - class names
	 */
	const classes = () => {
		return joinClass(
			baseClass,
			local.class,
			local.color && `is-${local.color}`,
			local.isLight && 'is-light',
			local.size && `is-${local.size}`,
			local.isResponsive && 'is-responsive',
			local.isFullWidth && 'is-fullwidth',
			local.isOutlined && 'is-outlined',
			local.isInverted && 'is-inverted',
			local.isRounded && 'is-rounded',
			local.state && `is-${local.state}`,
			local.isLoading && 'is-loading',
		);
	};
	
	return (
		<Dynamic
			component={local.is}
			class={classes()}
			{...others}/>
	);
};

export default BButton;
