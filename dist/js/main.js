/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/glsl/default.frag":
/*!*******************************!*\
  !*** ./src/glsl/default.frag ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\nuniform float time;\\r\\nuniform vec2 mouse;\\r\\nuniform vec2 resolution;\\r\\nvarying vec2 vUv;\\r\\n\\r\\n//テクスチャの取得\\r\\nuniform sampler2D texture;\\r\\nuniform sampler2D texture1;\\r\\n\\r\\n#define TAU 6.28318530718\\r\\n#define MAX_ITER 5\\r\\n\\r\\n#define INIT_WEIGHT_TIME 1.0\\r\\n#define MAX_DIRECTION_TIME 3.0\\r\\n\\r\\nvec3 hsv(float hue) {\\r\\n    return clamp(abs(fract(hue + vec3(0, 2, 1) / 3.) * 6. - 3.) - 1., 0., 0.6) * mouse.x * mouse.y;\\r\\n}\\r\\n\\r\\nfloat op(float pos_x, float t, float num) {\\r\\n    return smoothstep(-0.3, 0.5, cos(num + pos_x + t));\\r\\n}\\r\\n\\r\\nfloat full_op(float x, float t, float num, float edge0, float edge1) {\\r\\n    return smoothstep(edge0, edge1, cos(num + x + t));\\r\\n}\\r\\n\\r\\nvoid main(void) {\\r\\n    float t = time * .55;\\r\\n    vec2 uv = vUv;\\r\\n\\r\\n    // vec2 p = mod(uv * TAU, TAU) - 250.0;\\r\\n    // vec2 i = vec2(p);\\r\\n    // float c = 1.0;\\r\\n    // float inten = .005;\\r\\n\\r\\n    // for(int n = 0; n < MAX_ITER; n++) {\\r\\n    //     float t = t * (1.0 - (3.5 / float(n + 1)));\\r\\n    //     i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));\\r\\n    //     c += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));\\r\\n    // }\\r\\n    // c /= float(MAX_ITER);\\r\\n    // c = 1.17 - pow(c, 1.4);\\r\\n    // vec3 colour = vec3(pow(abs(c), 8.0));\\r\\n    // colour = clamp(colour + hsv(t), 0.0, 1.0);\\r\\n\\r\\n    // colour += (texture2D(texture, vUv).rgb / 3.0);\\r\\n\\r\\n    vec3 colour = vec3(0);\\r\\n    vec3 tex = texture2D(texture, vUv).rgb * op(uv.x, t, 0.0);\\r\\n    vec3 tex1 = texture2D(texture1, vUv).rgb * op(uv.x, t, 3.2);\\r\\n    // float m = 1.0;\\r\\n    // if(time >= INIT_WEIGHT_TIME)\\r\\n    //     m = (cos((time * 2.0 - (INIT_WEIGHT_TIME * 2.0)) / MAX_DIRECTION_TIME) + 1.0) / 2.0;\\r\\n\\r\\n    // float op = 1.0;\\r\\n    // if(uv.x >= m) {\\r\\n    //     if((uv.x - m) < 1.0)\\r\\n    //         op = 0.3 - (uv.x - m);\\r\\n    //     else\\r\\n    //         op = 0.0;\\r\\n    // }\\r\\n\\r\\n    colour += tex;\\r\\n\\r\\n    colour += tex1;\\r\\n\\r\\n    gl_FragColor = vec4(colour, 1.0);\\r\\n\\r\\n    // 変更後にnpm run buildを実行\\r\\n}\");\n\n//# sourceURL=webpack://canvas-slider/./src/glsl/default.frag?");

/***/ }),

/***/ "./src/glsl/default.vert":
/*!*******************************!*\
  !*** ./src/glsl/default.vert ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec3 position;\\r\\nattribute vec2 uv;\\r\\nvarying vec2 vUv;\\r\\n\\r\\nvoid main() {\\r\\n    vUv = uv;\\r\\n    gl_Position = vec4(position, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://canvas-slider/./src/glsl/default.vert?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _glsl_default_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glsl/default.vert */ \"./src/glsl/default.vert\");\n/* harmony import */ var _glsl_default_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glsl/default.frag */ \"./src/glsl/default.frag\");\n\r\n\r\n\r\nlet mouse = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0, 0);\r\nclass Stage {\r\n    constructor(isFullScreenCanvas = false) {\r\n        this.canvas_width = 0;\r\n        this.canvas_height = 0;\r\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene;\r\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.OrthographicCamera;\r\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer;\r\n        this.geometry = null;\r\n        this.material = null;\r\n        this.mesh = null;\r\n        this.isInitialized = false;\r\n        this.isFullScreenCanvas = false;\r\n        this.resolution = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2;\r\n        this.cameraParam = {\r\n            left: -1,\r\n            right: 1,\r\n            top: 1,\r\n            bottom: -1,\r\n            near: 0,\r\n            far: -1\r\n        };\r\n        this.renderParam = {\r\n            width: 0,\r\n            height: 0\r\n        };\r\n        this.isFullScreenCanvas = isFullScreenCanvas;\r\n    }\r\n    init(canvas_id) {\r\n        this._setRender(canvas_id);\r\n        this._setCamera();\r\n        this.canvas.addEventListener('mousemove', this.mouseMove, true);\r\n        this.isInitialized = true;\r\n    }\r\n    _setRender(canvas_id) {\r\n        this.canvas = document.getElementById(canvas_id);\r\n        this.canvas_width = this.canvas.width;\r\n        this.canvas_height = this.canvas.height;\r\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\r\n            canvas: this.canvas\r\n        });\r\n        if (this.isFullScreenCanvas) {\r\n            this.renderParam = {\r\n                width: window.innerWidth,\r\n                height: window.innerHeight\r\n            };\r\n        }\r\n        else {\r\n            this.renderParam = {\r\n                width: this.canvas_width,\r\n                height: this.canvas_height\r\n            };\r\n        }\r\n        this.renderer.setSize(this.renderParam.width, this.renderParam.height);\r\n    }\r\n    _setCamera() {\r\n        if (!this.isInitialized) {\r\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.OrthographicCamera(this.cameraParam.left, this.cameraParam.right, this.cameraParam.top, this.cameraParam.bottom, this.cameraParam.near, this.cameraParam.far);\r\n        }\r\n        let windowWidth = this.canvas_width;\r\n        let windowHeight = this.canvas_height;\r\n        if (this.isFullScreenCanvas) {\r\n            windowWidth = window.innerWidth;\r\n            windowHeight = window.innerHeight;\r\n        }\r\n        this.renderer.setSize(windowWidth, windowHeight);\r\n        this.renderer.setPixelRatio(window.devicePixelRatio);\r\n        // this.camera.aspect = windowWidth / windowHeight;\r\n        this.camera.updateProjectionMatrix();\r\n        this.resolution = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(windowWidth, windowHeight);\r\n    }\r\n    _render() {\r\n        this.renderer.render(this.scene, this.camera);\r\n    }\r\n    onResize() {\r\n        this._setCamera();\r\n    }\r\n    onRaf() {\r\n        this._render();\r\n    }\r\n    getResolution() {\r\n        return this.resolution;\r\n    }\r\n    mouseMove(e) {\r\n        mouse = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(e.offsetX / window.innerWidth, e.offsetY / window.innerHeight);\r\n    }\r\n    _getCanvas() {\r\n        return this.canvas;\r\n    }\r\n}\r\nclass Mesh {\r\n    constructor(stage) {\r\n        this.geometryParm = {};\r\n        this.materialParam = { useWireframe: false };\r\n        this.uniforms = {\r\n            time: { type: \"f\", value: 1.0 },\r\n            mouse: { type: \"v2\", value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0, 0) },\r\n            resolution: { type: \"v2\", value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0, 1) },\r\n            //テクスチャ\r\n            texture: { type: 't', value: null },\r\n            texture1: { type: 't', value: null }\r\n        };\r\n        this.stage = new Stage;\r\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh;\r\n        this.windowWidth = 0;\r\n        this.windowHeight = 0;\r\n        this.windowWidthHalf = 0;\r\n        this.windowHeightHalf = 0;\r\n        this.startTime = new Date().getTime();\r\n        this.stage = stage;\r\n    }\r\n    init() {\r\n        this._setMesh();\r\n    }\r\n    _setMesh() {\r\n        let parentClass = this;\r\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneBufferGeometry(2, 2);\r\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.RawShaderMaterial({\r\n            vertexShader: _glsl_default_vert__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n            fragmentShader: _glsl_default_frag__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n            uniforms: parentClass.uniforms\r\n        });\r\n        const texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load('./img/dummy1.png');\r\n        const texture1 = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load('./img/dummy2.png');\r\n        material.uniforms.texture.value = texture;\r\n        material.uniforms.texture1.value = texture1;\r\n        parentClass.mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\r\n        parentClass.stage.scene.add(parentClass.mesh);\r\n    }\r\n    _render() {\r\n        this.uniforms.time.value = (new Date().getTime() - this.startTime) * 0.001;\r\n    }\r\n    onRaf() {\r\n        this._render();\r\n    }\r\n}\r\n((isFullScreenCanvas = false) => {\r\n    const stage = new Stage(isFullScreenCanvas);\r\n    stage.init(\"myCanvas\");\r\n    const mesh = new Mesh(stage);\r\n    mesh.init();\r\n    window.addEventListener(\"resize\", () => {\r\n        stage.onResize();\r\n        mesh.uniforms.resolution.value = stage.getResolution();\r\n    });\r\n    const _raf = () => {\r\n        window.requestAnimationFrame(() => {\r\n            stage.onRaf();\r\n            mesh.onRaf();\r\n            mesh.uniforms.mouse.value = mouse;\r\n            _raf();\r\n        });\r\n    };\r\n    _raf();\r\n})();\r\n\n\n//# sourceURL=webpack://canvas-slider/./src/ts/main.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;