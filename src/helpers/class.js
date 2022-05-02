/**
 * @param Array arguments
 * @return String classnames
 */
 export const joinClass = function(){
	let classnames = '';

	for(let i = 0; i < arguments.length; i++){
		arguments[i] && (classnames += (arguments[i] + ' '));
	}

	return classnames;
}
