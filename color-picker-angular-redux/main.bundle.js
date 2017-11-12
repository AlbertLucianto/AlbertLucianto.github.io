webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-container\">\n  <app-rim-color></app-rim-color>\n  <app-slider parameter=\"r\"></app-slider>\n  <app-slider parameter=\"g\"></app-slider>\n  <app-slider parameter=\"b\"></app-slider>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store_module__ = __webpack_require__("../../../../../src/app/store/store.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rim_rim_component__ = __webpack_require__("../../../../../src/app/rim/rim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slider_base_slider_component__ = __webpack_require__("../../../../../src/app/slider/base.slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__rim_rim_component__["a" /* RimComponent */],
                __WEBPACK_IMPORTED_MODULE_6__slider_base_slider_component__["a" /* BaseSliderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_3__store_store_module__["a" /* StoreModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/rim/rim.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SelectAttributeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeFillColorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChangeOutlineColorAction; });
/* unused harmony export ChangeOutlineWidthAction */
var actionTypes = {
    SELECT_ATTRIBUTE: 'RIM.SELECT_ATTRIBUTE',
    CHANGE_FILL_COLOR: 'RIM.CHANGE_FILL_COLOR',
    CHANGE_OUTLINE_COLOR: 'RIM.CHANGE_OUTLINE_COLOR',
    CHANGE_OUTLINE_WIDTH: 'RIM.CHANGE_OUTLINE_WIDTH',
};
var SelectAttributeAction = (function () {
    function SelectAttributeAction(attribute) {
        this.type = actionTypes.SELECT_ATTRIBUTE;
        if (attribute === 'fill' || attribute === 'outline') {
            this.attribute = attribute;
        }
        else {
            console.error("Attribute must be 'fill' or 'outline'");
        }
    }
    return SelectAttributeAction;
}());

var ChangeFillColorAction = (function () {
    function ChangeFillColorAction(color) {
        this.type = actionTypes.CHANGE_FILL_COLOR;
        this.color = color;
    }
    return ChangeFillColorAction;
}());

var ChangeOutlineColorAction = (function () {
    function ChangeOutlineColorAction(color) {
        this.type = actionTypes.CHANGE_OUTLINE_COLOR;
        this.color = color;
    }
    return ChangeOutlineColorAction;
}());

var ChangeOutlineWidthAction = (function () {
    function ChangeOutlineWidthAction(width) {
        this.type = actionTypes.CHANGE_OUTLINE_WIDTH;
        this.width = width;
    }
    return ChangeOutlineWidthAction;
}());



/***/ }),

/***/ "../../../../../src/app/rim/rim.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  test: {{ test }}\n  rim works!\n  {{ selectedAttribute$ | async }}\n  {{ fillColor$ | async }}\n  {{ outlineColor$ | async }}\n  <button\n    (click)=\"selectAttribute('outline')\"\n  >Change to outline</button>\n  <button\n    (click)=\"selectAttribute('fill')\"\n  >Change to fill</button>\n  <button\n    (click)=\"changeFillColor()\"\n  >Change fill color</button>\n  <div class=\"rim\">\n    <div\n      class=\"circle-fill\"\n      [ngStyle]=\"fillStyle$ | async\"\n    ></div>\n    <div\n      class=\"circle-outline\"\n      [style.border-color]=\"outlineColor$ | async\"\n    ></div>\n  </div>\n  <button\n    (click)=\"incTest()\"\n  >increase test</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/rim/rim.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rim .circle-fill {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%; }\n\n.rim .circle-outline {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border-width: 5px;\n  border-style: solid; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rim/rim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rim_reducers__ = __webpack_require__("../../../../../src/app/rim/rim.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rim_actions__ = __webpack_require__("../../../../../src/app/rim/rim.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rim_model__ = __webpack_require__("../../../../../src/app/rim/rim.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var getColor = function (fill$) {
    return fill$.map(function (fill) { return fill.color.toRGBString(); });
};
var RimComponent = (function () {
    function RimComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.test = 10;
        this.getBasePath = function () { return ['rim']; };
        this.selectAttribute = function (attribute) {
            return new __WEBPACK_IMPORTED_MODULE_6__rim_actions__["c" /* SelectAttributeAction */](attribute);
        };
        this.changeFillColor = function () {
            return new __WEBPACK_IMPORTED_MODULE_6__rim_actions__["a" /* ChangeFillColorAction */](new __WEBPACK_IMPORTED_MODULE_7__rim_model__["b" /* ColorRGB */]({ r: 300, g: 100, b: 100 }));
        };
    } // Injectable can be used for inline 'string' styling
    Object.defineProperty(RimComponent.prototype, "fillStyle$", {
        get: function () {
            return this.fillColor$.map(function (color) { return ({ background: color }); });
        },
        enumerable: true,
        configurable: true
    });
    RimComponent.prototype.incTest = function () {
        this.test += 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])('active'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], RimComponent.prototype, "selectedAttribute$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select$"])('fill', getColor),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], RimComponent.prototype, "fillColor$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select$"])('outline', getColor),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], RimComponent.prototype, "outlineColor$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RimComponent.prototype, "selectAttribute", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RimComponent.prototype, "changeFillColor", void 0);
    RimComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getBasePath',
            localReducer: __WEBPACK_IMPORTED_MODULE_5__rim_reducers__["a" /* rimComponentReducer */],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-rim-color',
            template: __webpack_require__("../../../../../src/app/rim/rim.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rim/rim.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], RimComponent);
    return RimComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rim/rim.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColorProxyMixin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorRGB; });
/* unused harmony export ColorHex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InitRim; });
/* unused harmony export AttributeColorProxyMixin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Outline; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var inColorRange = function (value) {
    return (value >= 0 && value < 256);
};
var validateColorHex = function (hex) {
    var re = /\^#(?:[0-9a-fA-F]{3}){1,2}$/;
    return re.test(hex);
};
var componentToHex = function (c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};
var rgbToHex = function (r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
var createClamp = function (min, max) {
    return function (num) { return Math.round(num <= min ? min : num >= max ? max : num); };
};
var ColorProxyMixin = (function () {
    function ColorProxyMixin() {
    }
    Object.defineProperty(ColorProxyMixin.prototype, "r", {
        get: function () { return this._r; },
        set: function (r) {
            if (inColorRange(r)) {
                this._r = r;
            }
            else {
                console.error('Valid color rgb must be between 0 and 255');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorProxyMixin.prototype, "g", {
        get: function () { return this._g; },
        set: function (g) {
            if (inColorRange(g)) {
                this._g = g;
            }
            else {
                console.error('Valid color rgb must be between 0 and 255');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorProxyMixin.prototype, "b", {
        get: function () { return this._b; },
        set: function (b) {
            if (inColorRange(b)) {
                this._b = b;
            }
            else {
                console.error('Valid color rgb must be between 0 and 255');
            }
        },
        enumerable: true,
        configurable: true
    });
    ColorProxyMixin.prototype.toRGBString = function () {
        return "rgb(" + this._r + ", " + this._g + ", " + this._b + ")";
    };
    ColorProxyMixin.prototype.toHexString = function () {
        return rgbToHex(this._r, this._g, this._b);
    };
    ColorProxyMixin.prototype.toObject = function () {
        return { r: this._r, g: this._g, b: this._b };
    };
    return ColorProxyMixin;
}());

var ColorRGB = (function (_super) {
    __extends(ColorRGB, _super);
    function ColorRGB(rgb) {
        var _this = _super.call(this) || this;
        if (inColorRange(rgb.r)
            && inColorRange(rgb.g)
            && inColorRange(rgb.b)) {
            _this._r = Math.round(rgb.r);
            _this._g = Math.round(rgb.g);
            _this._b = Math.round(rgb.b);
        }
        else {
            var clampColor = createClamp(0, 255);
            _this._r = clampColor(rgb.r);
            _this._g = clampColor(rgb.g);
            _this._b = clampColor(rgb.b);
            console.error('Valid color rgb must be integer between 0 and 255 each');
        }
        return _this;
    }
    return ColorRGB;
}(ColorProxyMixin));

var ColorHex = (function (_super) {
    __extends(ColorHex, _super);
    function ColorHex(hex) {
        var _this = _super.call(this) || this;
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            _this._r = parseInt(result[1], 16);
            _this._g = parseInt(result[2], 16);
            _this._b = parseInt(result[3], 16);
        }
        else {
            console.error('Valid color hex must be # followed by 3 or 6 hex numbers');
        }
        return _this;
    }
    return ColorHex;
}(ColorProxyMixin));

/**
 * Combination of ColorRGB and ColorHex
 */
var Color = (function (_super) {
    __extends(Color, _super);
    function Color(color) {
        var _this = _super.call(this) || this;
        if (typeof color === 'string') {
            ColorHex.call(_this, color);
        }
        else if (color !== undefined) {
            var colorRGB = color;
            ColorRGB.call(_this, colorRGB);
        }
        else {
            console.error('Invalid color instantiation');
        }
        return _this;
    }
    /**
     * Set a local color value and return as clone
     * @param {{local: string, value: number}|string} payload - local can be 'r', 'g', or 'b'
     */
    Color.prototype.setColor = function (payload) {
        if (typeof payload === 'string') {
            return new Color(payload);
        }
        else if (['r', 'g', 'b'].includes(payload.local)) {
            return new Color(__assign({ r: this._r, g: this._g, b: this._b }, (_a = {}, _a[payload.local] = payload.value, _a)));
        }
        else {
            console.error('Invalid payload for setting color in Color class');
        }
        var _a;
    };
    return Color;
}(ColorProxyMixin));

var InitRim = (function () {
    function InitRim(active, fill, outline) {
        this.active = active;
        this.fill = fill;
        this.outline = outline;
    }
    return InitRim;
}());

var AttributeColorProxyMixin = (function () {
    function AttributeColorProxyMixin() {
    }
    Object.defineProperty(AttributeColorProxyMixin.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color !== undefined) {
                this._color = color;
            }
            else {
                console.error('Invalid color input');
            }
        },
        enumerable: true,
        configurable: true
    });
    return AttributeColorProxyMixin;
}());

var Fill = (function (_super) {
    __extends(Fill, _super);
    function Fill(color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        return _this;
    }
    return Fill;
}(AttributeColorProxyMixin));

var Outline = (function (_super) {
    __extends(Outline, _super);
    function Outline(color, width) {
        var _this = _super.call(this) || this;
        _this.color = color;
        _this.width = width;
        return _this;
    }
    return Outline;
}(AttributeColorProxyMixin));



/***/ }),

/***/ "../../../../../src/app/rim/rim.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export attributeReducer */
/* unused harmony export fillReducer */
/* unused harmony export outlineReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rimComponentReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rim_actions__ = __webpack_require__("../../../../../src/app/rim/rim.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rim_model__ = __webpack_require__("../../../../../src/app/rim/rim.model.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var attributeReducer = function (state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__rim_actions__["d" /* actionTypes */].SELECT_ATTRIBUTE: return action.attribute;
    }
    return state;
};
var fillReducer = function (state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__rim_actions__["d" /* actionTypes */].CHANGE_FILL_COLOR:
            return __assign({}, state, { color: action.color });
    }
    return state;
};
var outlineReducer = function (state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__rim_actions__["d" /* actionTypes */].CHANGE_OUTLINE_COLOR:
            return __assign({}, state, { color: action.color });
        case __WEBPACK_IMPORTED_MODULE_0__rim_actions__["d" /* actionTypes */].CHANGE_OUTLINE_WIDTH:
            return __assign({}, state, { width: action.width });
    }
    return state;
};
var rimComponentReducer = function (state, action) {
    if (state === void 0) { state = new __WEBPACK_IMPORTED_MODULE_1__rim_model__["d" /* InitRim */]('fill', new __WEBPACK_IMPORTED_MODULE_1__rim_model__["c" /* Fill */](new __WEBPACK_IMPORTED_MODULE_1__rim_model__["a" /* Color */]('#000')), new __WEBPACK_IMPORTED_MODULE_1__rim_model__["e" /* Outline */](new __WEBPACK_IMPORTED_MODULE_1__rim_model__["a" /* Color */]({ r: 255, g: 100, b: 100 }), 0)); }
    return __assign({}, state, { active: attributeReducer(state.active, action), fill: fillReducer(state.fill, action), outline: outlineReducer(state.outline, action) });
};


/***/ }),

/***/ "../../../../../src/app/slider/base.slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rim_rim_reducers__ = __webpack_require__("../../../../../src/app/rim/rim.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rim_rim_model__ = __webpack_require__("../../../../../src/app/rim/rim.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rim_rim_actions__ = __webpack_require__("../../../../../src/app/rim/rim.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BaseSliderComponent = (function () {
    function BaseSliderComponent(rd) {
        this.rd = rd;
        this.dragging = false;
        this.getBasePath = function () { return ['rim']; };
    }
    Object.defineProperty(BaseSliderComponent.prototype, "localValue$", {
        get: function () {
            var _this = this;
            return this.selectedAttribute$
                .mergeMap(function (att) { return _this[att + "Color$"].map(function (color) { return color[_this.parameter]; }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSliderComponent.prototype, "barColor$", {
        get: function () {
            var _this = this;
            return this.localValue$
                .map(function (val) {
                console.log(val);
                return (new __WEBPACK_IMPORTED_MODULE_7__rim_rim_model__["a" /* Color */](__assign({ r: 0, g: 0, b: 0 }, (_a = {}, _a[_this.parameter] = val, _a))).toRGBString());
                var _a;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSliderComponent.prototype, "handleStyle$", {
        get: function () {
            return this.localValue$.map(function (val) { return ({ left: val + "px" }); });
        },
        enumerable: true,
        configurable: true
    });
    BaseSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Easier way to handle non-observable from observable
        this.selectedAttribute$.subscribe(function (att) { return _this.selectedAttribute = att; });
        this.fillColor$.subscribe(function (color) { return _this.fillColor = color; });
        this.outlineColor$.subscribe(function (color) { return _this.outlineColor = color; });
    };
    BaseSliderComponent.prototype.changeColor = function (color) {
        if (this.selectedAttribute === 'fill') {
            return new __WEBPACK_IMPORTED_MODULE_8__rim_rim_actions__["a" /* ChangeFillColorAction */](color);
        }
        else if (this.selectedAttribute === 'outline') {
            return new __WEBPACK_IMPORTED_MODULE_8__rim_rim_actions__["b" /* ChangeOutlineColorAction */](color);
        }
    };
    BaseSliderComponent.prototype.startDrag = function (e) {
        this.startPos = e.clientX;
        this.dragging = true;
        this.onDragListener = this.rd.listen('document', 'mousemove', this.onDrag.bind(this));
        this.endDragListener = this.rd.listen('document', 'mouseup', this.endDrag.bind(this));
    };
    BaseSliderComponent.prototype.onDrag = function (e) {
        if (this.dragging) {
            this.changeColor(this[this.selectedAttribute + "Color"].setColor({
                local: this.parameter,
                value: e.clientX - this.bar.nativeElement.getBoundingClientRect().left,
            }));
        }
    };
    BaseSliderComponent.prototype.endDrag = function () {
        this.dragging = false;
        // Remove listeners
        this.onDragListener();
        this.endDragListener();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BaseSliderComponent.prototype, "bar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BaseSliderComponent.prototype, "parameter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])('active'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], BaseSliderComponent.prototype, "selectedAttribute$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(['fill', 'color']),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], BaseSliderComponent.prototype, "fillColor$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(['outline', 'color']),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], BaseSliderComponent.prototype, "outlineColor$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BaseSliderComponent.prototype, "changeColor", null);
    BaseSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getBasePath',
            localReducer: __WEBPACK_IMPORTED_MODULE_2__rim_rim_reducers__["a" /* rimComponentReducer */],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__("../../../../../src/app/slider/slider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/slider/slider.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], BaseSliderComponent);
    return BaseSliderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-container\">\n  {{ parameter }}\n  {{ localValue$ | async }}\n  <div class=\"slider\">\n    <div\n      class=\"handle\"\n      (mousedown)=\"startDrag($event)\"\n      [ngStyle]=\"handleStyle$ | async\"></div>\n    <div  #barSlider class=\"bar\" [style.background]=\"barColor$ | async\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slider-container {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.slider {\n  position: relative; }\n  .slider .handle {\n    position: absolute;\n    width: 5px;\n    height: 10px;\n    background: black;\n    transition: left 100ms ease; }\n  .slider .bar {\n    width: 255px;\n    height: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/epics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootEpics; });
var RootEpics = (function () {
    function RootEpics() {
    }
    RootEpics.prototype.createEpics = function () {
        return [];
    };
    return RootEpics;
}());



/***/ }),

/***/ "../../../../../src/app/store/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form__ = __webpack_require__("../../../../@angular-redux/form/dist/source/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rim_rim_reducers__ = __webpack_require__("../../../../../src/app/rim/rim.reducers.ts");



var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["composeReducers"])(Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["defaultFormReducer"])(), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    rim: __WEBPACK_IMPORTED_MODULE_2__rim_rim_reducers__["a" /* rimComponentReducer */],
}));


/***/ }),

/***/ "../../../../../src/app/store/store.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__epics__ = __webpack_require__("../../../../../src/app/store/epics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/store/reducers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreModule = (function () {
    function StoreModule(store, devTools, rootEpics) {
        this.store = store;
        store.configureStore(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* rootReducer */], {}, rootEpics.createEpics().slice(), devTools.isEnabled() ? [devTools.enhancer()] : []);
    }
    StoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgReduxModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__epics__["a" /* RootEpics */],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["DevToolsExtension"],
            __WEBPACK_IMPORTED_MODULE_2__epics__["a" /* RootEpics */]])
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map