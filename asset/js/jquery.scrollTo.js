/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		factory(jQuery);
	}
})(function($) {
	'use strict';

	var $scrollTo = $.scrollTo = function(target, duration, settings) {
		return $(window).scrollTo(target, duration, settings);
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: 0,
		limit:true
	};

	function isWin(elem) {
		return !elem.nodeName ||
			$.inArray(elem.nodeName.toLowerCase(), ['iframe','#document','html','body']) !== -1;
	}		

	$.fn.scrollTo = function(target, duration, settings) {
		if (typeof duration === 'object') {
			settings = duration;
			duration = 0;
		}
		if (typeof settings === 'function') {
			settings = { onAfter:settings };
		}
		if (target === 'max') {
			target = 9e9;
		}

		settings = $.extend({}, $scrollTo.defaults, settings);
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		var queue = settings.queue && settings.axis.length > 1;
		if (queue) {
			// Let's keep the overall duration
			duration /= 2;
		}
		settings.offset = both(settings.offset);
		settings.over = both(settings.over);

		return this.each(function() {
			// Null target yields nothing, just like jQuery does
			if (target === null) return;

			var win = isWin(this),
				elem = win ? this.contentWindow || window : this,
				$elem = $(elem),
				targ = target,  // Assuming `target` is user-controlled or dynamic
				attr = {},
				toff;

			// Sanitize `targ` to ensure it is safe for use in a jQuery selector
			var sanitizedTarg = $.escapeSelector(targ);

			// Now you can safely use `sanitizedTarg` in any jQuery selectors or manipulations
			$elem.find('#' + sanitizedTarg).css('color', 'red'); // Example of using sanitizedTarg


			switch (typeof targ) {
				// A number will pass the regex
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						// We are done
						break;
					}
					// Relative/Absolute selector
					var win = isWin(this),
					elem = win ? this.contentWindow || window : this,
					$elem = $(elem),
					targ = target;  // Assuming `target` is user-controlled or dynamic

				// Sanitize `targ` to ensure it is safe for use in a jQuery selector
				var sanitizedTarg = $.escapeSelector(targ);

				// Now use the sanitized `targ` safely in jQuery selectors
				targ = win ? $(sanitizedTarg) : $(sanitizedTarg, elem);

					/* falls through */
				case 'object':
					if (targ.length === 0) return;
					// DOMElement / jQuery
					if (targ.is || targ.style) {
						// Sanitize `targ` to prevent any unsafe selectors
						var sanitizedTarg = $.escapeSelector(targ);
						
						// Get the real position of the sanitized target
						toff = (targ = $(sanitizedTarg)).offset();
					}
					
			}

			var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

			$.each(settings.axis.split(''), function(i, axis) {
				var Pos	= axis === 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					prev = $elem[key](),
					max = $scrollTo.max(elem, axis);

				if (toff) {// jQuery / DOMElement
					attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

					// If it's a dom element, reduce the margin
					if (settings.margin) {
						attr[key] -= parseInt(targ.css('margin'+Pos), 10) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width'), 10) || 0;
					}

					attr[key] += offset[pos] || 0;

					if (settings.over[pos]) {
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis === 'x'?'width':'height']() * settings.over[pos];
					}
				} else {
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) === '%' ?
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if (settings.limit && /^\d+$/.test(attr[key])) {
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				}

				// Don't waste time animating, if there's no need.
				if (!i && settings.axis.length > 1) {
					if (prev === attr[key]) {
						// No animation needed
						attr = {};
					} else if (queue) {
						// Intermediate animation
						animate(settings.onAfterFirst);
						// Don't animate this axis again in the next iteration.
						attr = {};
					}
				}
			});

			animate(settings.onAfter);

			function animate(callback) {
				var opts = $.extend({}, settings, {
					// The queue setting conflicts with animate()
					// Force it to always be true
					queue: true,
					duration: duration,
					complete: callback && function() {
						callback.call(elem, targ, settings);
					}
				});
				$elem.animate(attr, opts);
			}
		});
	};

	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function(elem, axis) {
		var Dim = axis === 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;

		// if (!isWin(elem))
		// 	return elem[scroll] - $(elem)[Dim.toLowerCase()]();

		// var size = 'client' + Dim,
		// Define the valid dimension methods
			const validDimensions = ['width', 'height'];

			// Check if Dim is a valid dimension
			if (validDimensions.includes(Dim.toLowerCase())) {
				// Safely access the method based on Dim
				var size = 'client' + Dim;
				if (isWin(elem)) {
					// Assuming `scroll` is a valid property or method
					return elem.scroll - $(elem)[Dim.toLowerCase()]();
				} else {
					// Handle non-window elements or cases where `isWin` is false
					return elem.scroll - $(elem)[size]();
				}
			} else {
				console.error("Invalid dimension method:", Dim);
			}

			doc = elem.ownerDocument || elem.document,
			html = doc.documentElement,
			body = doc.body;

		return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
	};

	function both(val) {
		return $.isFunction(val) || $.isPlainObject(val) ? val : { top:val, left:val };
	}

	// Add special hooks so that window scroll properties can be animated
	// Predefine the allowed properties (scrollTop, scrollLeft)
const validProps = ['scrollTop', 'scrollLeft'];

// Hook for scrollLeft and scrollTop properties
$.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function(t) {
        // Ensure the prop is valid before accessing it
        if (validProps.includes(t.prop)) {
            return $(t.elem)[t.prop]();
        } else {
            console.error("Invalid property:", t.prop);
            return 0; // Return a default value in case of invalid prop
        }
    },
    set: function(t) {
        var curr = this.get(t);

        // If interrupt is true and user scrolled, stop animating
if (t.options.interrupt && t._last && t._last !== curr) {
    return $(t.elem).stop();
}

// Sanitize dynamic data (e.g., t.elem) before using it in a selector
var sanitizedElem = $.escapeSelector(t.elem);

// Proceed with the animation logic using the sanitized selector
var next = Math.round(t.now);

        
        // Don't waste CPU on floating-point scroll
        if (curr !== next) {
			// Ensure the prop is valid before setting it
			if (validProps.includes(t.prop)) {
				// Explicitly call the valid method instead of dynamic method invocation
				switch (t.prop) {
					case 'someValidMethod':
						$(t.elem).someValidMethod(next);
						break;
					case 'anotherValidMethod':
						$(t.elem).anotherValidMethod(next);
						break;
					// Add more predefined method cases as needed
					default:
						console.error("Unknown valid method:", t.prop);
				}
				t._last = this.get(t);
			} else {
				console.error("Invalid property:", t.prop);
			}
		}
		
    }
};


	// AMD requirement
	return $scrollTo;
});
