// jQuery decodeMail plugin
// Copyright (C) 2016 Bernhard Waldbrunner
/*
 *	This program is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU General Public License
 *	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// jQuery(function($) { $.decodeMail(); });
// <a href="mail:76627778303140676D61696C2E636F6D?subject=...">My e-mail address is 76627778303140676D61696C2E636F6D!</a>

(function($) {
	$.decodeMail = function(prefix) {
		prefix = (typeof prefix == "undefined" ? "mail:" : prefix + ":");
		return $('a[href^="' + prefix + '"]').each(function() {
			var $a = $(this), hex = $a.attr('href').replace(/^\w*:|[^\w:].*$/g, '');
			var mail = $('<div/>').html(hex.replace(/[A-Z0-9]{2}/g, '&#x$&;')).text();
			$a.attr('href', 'mailto:' + mail).html($a.html().replace(RegExp("\\b" + hex + "\\b"), mail));
		});
	};
})(jQuery);
