import DOMPurify from 'dompurify';


/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */

export const sanitize = (content) => {
    return typeof window !== 'undefined' ? DOMPurify.sanitize(content) : content
}

/**
 * Remove the trailing slash from a string.
 *
 * @param {String } targetString Target string.
 * @return {string} String with trailing slash removed.
 */
export const removeTrailingSlash = ( targetString ) => {
	if ( ! targetString ) {
		return '';
	}

	return targetString.replace(/\/$/, "")
}
