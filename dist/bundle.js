/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AtiModal =\n/*#__PURE__*/\nfunction () {\n  function AtiModal() {\n    _classCallCheck(this, AtiModal);\n\n    this.ignition = false;\n    this.open = false; //boolean\n\n    this.container = null; //container element\n\n    this.title = null;\n    this.videoUrl = null;\n    this.config = null; //elements\n\n    this.elements = document.getElementsByClassName(\"ytVideo\");\n  }\n\n  _createClass(AtiModal, [{\n    key: \"init\",\n    value: function init(container, config) {\n      this.ignition = true;\n      this.config = config; //object config\n\n      this.container = document.getElementById(container);\n      this.elements.length < 1 ? console.error(\"There's not any video container. controll that your element have the ytVideo class name with an respective dataset for video. ie: data-video=\\\"https://youtu.be/8d4vMtne2Ko\\\"\") : console.log(\"Modal is ready to launch!\"); //   Send elements to listeners\n\n      for (var i = 0; i < this.elements.length; i++) {\n        this.modal(this.elements[i]);\n      } // for (let el of this.elements) {\n      //   this.modal(el);\n      // }\n\n    }\n  }, {\n    key: \"modal\",\n    value: function modal(element) {\n      var _this = this;\n\n      element.addEventListener(\"click\", function (e) {\n        _this.title = e.target.dataset.title;\n        _this.videoUrl = e.target.dataset.video;\n        _this.videoUrl ? _this.toggle() : _this.modalErrors();\n      });\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      this.open = !this.open;\n      this.open ? console.log(\"open\") : console.log(\"closed\");\n      this.open ? this.createModal() : this.destroyModal();\n    }\n  }, {\n    key: \"createModal\",\n    value: function createModal() {\n      var _this2 = this;\n\n      var isPercent = this.config.percent ? \"%\" : \"px\"; // this.container.style.width = \"100%\";\n      // this.container.style.height = \"100vh\";\n\n      this.container.setAttribute(\"style\", \"width:100%; height:100vh; position:fixed; top:0;left:0;\");\n      var modalContainer = document.createElement(\"div\");\n      modalContainer.id = \"ava-modal\";\n      modalContainer.className = \"ava-modal\";\n      modalContainer.setAttribute(\"style\", \"position:relative; width:100%;height:100%;\"); // YouTube Box\n\n      var ytBox = document.createElement(\"div\");\n      ytBox.id = \"yt-box\";\n      ytBox.className = \"ava-yt-box\";\n      ytBox.setAttribute(\"style\", \"margin:0 auto; position: relative;\");\n      ytBox.style.width = \"\".concat(this.config.width).concat(isPercent);\n      ytBox.style.height = \"\".concat(this.config.height).concat(isPercent);\n      ytBox.style.background = \"\".concat(this.config.backgroundColor);\n      ytBox.style.top = \"\".concat(this.config.percentTop, \"%\"); // Header Box\n\n      var headBox = document.createElement(\"div\");\n      headBox.innerHTML = this.title ? \"<span style='text-align:center;margin:0 auto;display: inherit;padding: 0.5em;font-size: 1.3em;text-transform: uppercase;'>\".concat(this.title, \"</span>\") : \"\";\n      headBox.setAttribute(\"style\", \"width:100%; height:10%;position:absolute;left:0;top:0;\");\n      headBox.style.background = \"\".concat(this.config.headerBg);\n      headBox.className = \"ava-yt-box__header\"; // Close button\n\n      var closeBtn = document.createElement(\"button\");\n      closeBtn.setAttribute(\"style\", \"width:10%; height: 10%;position:absolute;right:0;top:0;\");\n      closeBtn.textContent = \"X\";\n      closeBtn.className = \"ava-yt-box__x-btn\"; //close btn toggle modal\n\n      closeBtn.addEventListener(\"click\", function (e) {\n        e.stopPropagation();\n\n        _this2.toggle();\n      }); // Components header on youtube box\n\n      ytBox.appendChild(headBox);\n      ytBox.appendChild(closeBtn); // Append you tube box to modal container\n\n      modalContainer.appendChild(ytBox); // Append the modal container to main container\n\n      this.container.appendChild(modalContainer);\n\n      if (this.videoUrl) {\n        console.log(this.videoUrl);\n        this.launchVideo(ytBox);\n      } else {\n        console.error(\"Invalid url video or null\");\n      }\n    }\n  }, {\n    key: \"destroyModal\",\n    value: function destroyModal() {\n      this.container.setAttribute(\"style\", \" \");\n      this.container.innerHTML = \"\";\n    }\n  }, {\n    key: \"launchVideo\",\n    value: function launchVideo(onElement) {\n      console.log(onElement);\n      this.config.autoPlay ? this.videoUrl = \"\".concat(this.videoUrl, \"?autoplay=1\") : \"\";\n      var ytFrame = document.createElement(\"iframe\");\n      ytFrame.setAttribute(\"style\", \"margin:1em auto;width:100%;height:100%;\");\n      ytFrame.src = this.videoUrl;\n      ytFrame.frameBorder = \"0\";\n      ytFrame.allowFullscreen = true;\n      onElement.appendChild(ytFrame);\n    }\n  }, {\n    key: \"modalErrors\",\n    value: function modalErrors() {\n      !this.videoUrl ? console.error('No video url detected on element through dataset. ie: data-video=\"http//urlyoutubevideo\" ') : \"have fun!\";\n    }\n  }]);\n\n  return AtiModal;\n}();\n\nvar config = {\n  //   percent: true,\n  width: 500,\n  height: 300,\n  percentTop: 20,\n  autoPlay: true,\n  //   headerBg: \"white\",\n  backgroundColor: \"white\"\n};\nwindow.avaModal = new AtiModal();\nwindow.onload = avaModal.init(\"modal-container\", config);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });