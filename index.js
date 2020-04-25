/**
 * @fileoverview Exports module:linearArrayFlattener.
 * @copyright Robert Gaines 2020
 * @license Apache-2.0
 * @author axelduch
 * @author Robert Gaines <rob@communitywebservice.com>
 */
 
"use strict";

/**
 * Linear function to flatten a multi-dimensional array of arbitrary depth.
 * Linear time of O(n) without recursion.
 * Supports IE > 5.
 * Based on axelduch's Stack Overflow answer {@link https://stackoverflow.com/a/27282907}.
 * axelduch provided permission for modified or unmodified redistribution.
 * @summary Linear function to flatten a multi-dimensional array of arbitrary depth.
 * @module {Function} linearArrayFlattener
 * @param {Array} array The array to be flattened.
 * @param {boolean} [mutable=false] Specify mutability of array.
 * 		true: Memory complexity of O(1).
 * 		false: Memory complexity O(n).
 * @returns {Array} Flattened array.
 */
 
module.exports = function linearArrayFlattener(array, mutable) {
	var toString = Object.prototype.toString;
	var arrayTypeStr = '[object Array]';
	
	var result = [];
	// @future This code could be clarified via refactoring.
	var nodes = (mutable && array) || array.slice();
	var node;

	if (array.length === 0) {
		return result;
	}

	 while (nodes.length) {
		node = nodes.pop()

		if (toString.call(node) === arrayTypeStr) {
			nodes.push.apply(nodes, node);
		} else {
			result.push(node);
		}
	};

	// @future Array.reverse is inefficient and should be replaced with a temporary swap function. Also an option should be provided to disable reversal.
	result.reverse(); // Reverse result to restore original order.
	return result;
};