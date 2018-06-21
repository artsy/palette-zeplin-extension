(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fontMapper = function fontMapper(_ref) {
  var textStyles = _ref.textStyles;
  return textStyles.map(function (textStyle) {
    if (!textStyle.fontFamily) return "";
    if (fontFamily.match(/garamond/i)) {
      return "g";
    } else if (fontFamily.match(/unica/i)) {
      return "u";
    } else if (fontFamily.match(/avant/i)) {
      return "a";
    }
  });
};

/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {
  return fontMapper(selectedLayer);
  //   return JSON.stringify(selectedLayer, null, 2);
  //   return {
  //     code: fontMapper(selectedLayer)
  //   };
  //   return {
  //     code: '<Sans size="2"/>{ "Francesca DiMattio" }</Sans>',
  //     language: "jsx"
  //   };
  //   return (
  //     "\u001b<b>Test</b>" +
  //      +
  //     "\n" +
  //     JSON.stringify(selectedLayer, null, 2) +
  //     '<Sans size="2"/>Francesca DiMattio</Sans>'
  //   );
}

function styleguideColors(context, colors) {
  return JSON.stringify(context, null, 2) + "\n" + JSON.stringify(colors, null, 2);
}

function styleguideTextStyles(context, colors) {
  return JSON.stringify(context, null, 2) + "\n" + JSON.stringify(colors, null, 2);
}

function exportStyleguideColors(context, colors) {}

function exportStyleguideTextStyles(context, colors) {
  return JSON.stringify(context, null, 2) + "\n" + JSON.stringify(colors, null, 2);
}

function comment(context, text) {}

exports.default = {
  layer,
  styleguideColors,
  styleguideTextStyles,
  exportStyleguideColors,
  exportStyleguideTextStyles,
  comment
};

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkZDBmOGExZjM3ZjMzN2NlZWRhYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZm9udE1hcHBlciIsInRleHRTdHlsZXMiLCJtYXAiLCJ0ZXh0U3R5bGUiLCJmb250RmFtaWx5IiwibWF0Y2giLCJsYXllciIsImNvbnRleHQiLCJzZWxlY3RlZExheWVyIiwic3R5bGVndWlkZUNvbG9ycyIsImNvbG9ycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdHlsZWd1aWRlVGV4dFN0eWxlcyIsImV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMiLCJleHBvcnRTdHlsZWd1aWRlVGV4dFN0eWxlcyIsImNvbW1lbnQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLFNBQ2pCQSxXQUFXQyxHQUFYLENBQWUscUJBQWE7QUFDMUIsUUFBSSxDQUFDQyxVQUFVQyxVQUFmLEVBQTJCLE9BQU8sRUFBUDtBQUMzQixRQUFJQSxXQUFXQyxLQUFYLENBQWlCLFdBQWpCLENBQUosRUFBbUM7QUFDakMsYUFBTyxHQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUlELFdBQVdDLEtBQVgsQ0FBaUIsUUFBakIsQ0FBSixFQUFnQztBQUNyQyxhQUFPLEdBQVA7QUFDRCxLQUZNLE1BRUEsSUFBSUQsV0FBV0MsS0FBWCxDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBQ3JDLGFBQU8sR0FBUDtBQUNEO0FBQ0YsR0FURCxDQURpQjtBQUFBLENBQW5COztBQVlBOzs7OztBQUtBLFNBQVNDLEtBQVQsQ0FBZUMsT0FBZixFQUF3QkMsYUFBeEIsRUFBdUM7QUFDckMsU0FBT1IsV0FBV1EsYUFBWCxDQUFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsU0FBU0MsZ0JBQVQsQ0FBMEJGLE9BQTFCLEVBQW1DRyxNQUFuQyxFQUEyQztBQUN6QyxTQUNFQyxLQUFLQyxTQUFMLENBQWVMLE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsSUFBbUMsSUFBbkMsR0FBMENJLEtBQUtDLFNBQUwsQ0FBZUYsTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUQ1QztBQUdEOztBQUVELFNBQVNHLG9CQUFULENBQThCTixPQUE5QixFQUF1Q0csTUFBdkMsRUFBK0M7QUFDN0MsU0FDRUMsS0FBS0MsU0FBTCxDQUFlTCxPQUFmLEVBQXdCLElBQXhCLEVBQThCLENBQTlCLElBQW1DLElBQW5DLEdBQTBDSSxLQUFLQyxTQUFMLENBQWVGLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FENUM7QUFHRDs7QUFFRCxTQUFTSSxzQkFBVCxDQUFnQ1AsT0FBaEMsRUFBeUNHLE1BQXpDLEVBQWlELENBQUU7O0FBRW5ELFNBQVNLLDBCQUFULENBQW9DUixPQUFwQyxFQUE2Q0csTUFBN0MsRUFBcUQ7QUFDbkQsU0FDRUMsS0FBS0MsU0FBTCxDQUFlTCxPQUFmLEVBQXdCLElBQXhCLEVBQThCLENBQTlCLElBQW1DLElBQW5DLEdBQTBDSSxLQUFLQyxTQUFMLENBQWVGLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FENUM7QUFHRDs7QUFFRCxTQUFTTSxPQUFULENBQWlCVCxPQUFqQixFQUEwQlUsSUFBMUIsRUFBZ0MsQ0FBRTs7a0JBRW5CO0FBQ2JYLE9BRGE7QUFFYkcsa0JBRmE7QUFHYkksc0JBSGE7QUFJYkMsd0JBSmE7QUFLYkMsNEJBTGE7QUFNYkM7QUFOYSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGQwZjhhMWYzN2YzMzdjZWVkYWIiLCJjb25zdCBmb250TWFwcGVyID0gKHsgdGV4dFN0eWxlcyB9KSA9PlxuICB0ZXh0U3R5bGVzLm1hcCh0ZXh0U3R5bGUgPT4ge1xuICAgIGlmICghdGV4dFN0eWxlLmZvbnRGYW1pbHkpIHJldHVybiBcIlwiO1xuICAgIGlmIChmb250RmFtaWx5Lm1hdGNoKC9nYXJhbW9uZC9pKSkge1xuICAgICAgcmV0dXJuIFwiZ1wiO1xuICAgIH0gZWxzZSBpZiAoZm9udEZhbWlseS5tYXRjaCgvdW5pY2EvaSkpIHtcbiAgICAgIHJldHVybiBcInVcIjtcbiAgICB9IGVsc2UgaWYgKGZvbnRGYW1pbHkubWF0Y2goL2F2YW50L2kpKSB7XG4gICAgICByZXR1cm4gXCJhXCI7XG4gICAgfVxuICB9KTtcblxuLyoqXG4gKiBFeHBvcnQgZnVuY3Rpb25zIHlvdSB3YW50IHRvIHdvcmsgd2l0aCwgc2VlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVwbGluL3plcGxpbi1leHRlbnNpb24tZG9jdW1lbnRhdGlvblxuICovXG5cbmZ1bmN0aW9uIGxheWVyKGNvbnRleHQsIHNlbGVjdGVkTGF5ZXIpIHtcbiAgcmV0dXJuIGZvbnRNYXBwZXIoc2VsZWN0ZWRMYXllcik7XG4gIC8vICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkTGF5ZXIsIG51bGwsIDIpO1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBjb2RlOiBmb250TWFwcGVyKHNlbGVjdGVkTGF5ZXIpXG4gIC8vICAgfTtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgY29kZTogJzxTYW5zIHNpemU9XCIyXCIvPnsgXCJGcmFuY2VzY2EgRGlNYXR0aW9cIiB9PC9TYW5zPicsXG4gIC8vICAgICBsYW5ndWFnZTogXCJqc3hcIlxuICAvLyAgIH07XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIFwiXFx1MDAxYjxiPlRlc3Q8L2I+XCIgK1xuICAvLyAgICAgICtcbiAgLy8gICAgIFwiXFxuXCIgK1xuICAvLyAgICAgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRMYXllciwgbnVsbCwgMikgK1xuICAvLyAgICAgJzxTYW5zIHNpemU9XCIyXCIvPkZyYW5jZXNjYSBEaU1hdHRpbzwvU2Fucz4nXG4gIC8vICAgKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHtcbiAgcmV0dXJuIChcbiAgICBKU09OLnN0cmluZ2lmeShjb250ZXh0LCBudWxsLCAyKSArIFwiXFxuXCIgKyBKU09OLnN0cmluZ2lmeShjb2xvcnMsIG51bGwsIDIpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIGNvbG9ycykge1xuICByZXR1cm4gKFxuICAgIEpTT04uc3RyaW5naWZ5KGNvbnRleHQsIG51bGwsIDIpICsgXCJcXG5cIiArIEpTT04uc3RyaW5naWZ5KGNvbG9ycywgbnVsbCwgMilcbiAgKTtcbn1cblxuZnVuY3Rpb24gZXhwb3J0U3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHt9XG5cbmZ1bmN0aW9uIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIGNvbG9ycykge1xuICByZXR1cm4gKFxuICAgIEpTT04uc3RyaW5naWZ5KGNvbnRleHQsIG51bGwsIDIpICsgXCJcXG5cIiArIEpTT04uc3RyaW5naWZ5KGNvbG9ycywgbnVsbCwgMilcbiAgKTtcbn1cblxuZnVuY3Rpb24gY29tbWVudChjb250ZXh0LCB0ZXh0KSB7fVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheWVyLFxuICBzdHlsZWd1aWRlQ29sb3JzLFxuICBzdHlsZWd1aWRlVGV4dFN0eWxlcyxcbiAgZXhwb3J0U3R5bGVndWlkZUNvbG9ycyxcbiAgZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMsXG4gIGNvbW1lbnRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9