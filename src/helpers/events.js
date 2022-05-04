/**
 * Solid event handlers can be plain callback or a tuple {handler, data}.
 * This helper call the handler appropriately (if defined)
 */
function callEventHandler(callback, event) {
	if (typeof callback === 'function') {
		callback(event);
	} else if (Array.isArray(callback)) {
		callback[0](callback[1], event);
	}
}

export {
	callEventHandler
};
