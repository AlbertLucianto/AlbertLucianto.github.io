webpackJsonp([0],Array(22).concat([
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseAnchor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawable_drawable_model__ = __webpack_require__(82);
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

var AnchorType;
(function (AnchorType) {
    AnchorType["MoveTo"] = "M";
    AnchorType["LineTo"] = "L";
    AnchorType["HorizontalLineTo"] = "H";
    AnchorType["VerticalLineTo"] = "V";
    AnchorType["CubicBezierCurve"] = "C";
    AnchorType["SmoothCurveTo"] = "S";
    AnchorType["QuadraticBezierCurve"] = "Q";
    AnchorType["SmoothQuadraticBezierCurveTo"] = "T";
    AnchorType["ElipticalArc"] = "A";
    AnchorType["ClosePath"] = "Z";
})(AnchorType || (AnchorType = {}));
var BaseAnchor = /** @class */ (function (_super) {
    __extends(BaseAnchor, _super);
    function BaseAnchor(params) {
        return _super.call(this, __assign({}, params, { type: __WEBPACK_IMPORTED_MODULE_0__drawable_drawable_model__["b" /* DrawableType */].Anchor })) || this;
    }
    return BaseAnchor;
}(__WEBPACK_IMPORTED_MODULE_0__drawable_drawable_model__["a" /* Drawable */]));

//# sourceMappingURL=anchor.model.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToolboxState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
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

var ToolName;
(function (ToolName) {
    ToolName["Pentool"] = "PENTOOL";
    ToolName["Selectiontool"] = "SELECTIONTOOL";
    ToolName["Canvastool"] = "CANVASTOOL";
    ToolName["DirectSelectiontool"] = "DIRECTSELECTIONTOOL";
})(ToolName || (ToolName = {}));
var ToolboxState = /** @class */ (function (_super) {
    __extends(ToolboxState, _super);
    function ToolboxState(initState) {
        return _super.call(this, initState) || this;
    }
    return ToolboxState;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({ selected: {} })));

//# sourceMappingURL=toolbox.model.js.map

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToolboxActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
var ToolboxActionType;
(function (ToolboxActionType) {
    ToolboxActionType["TOOLBOX_SELECT_TOOL"] = "TOOLBOX_SELECT_TOOL";
    ToolboxActionType["TOOLBOX_SET_TOOL_TRAIT"] = "TOOLBOX_SET_TOOL_TRAIT";
})(ToolboxActionType || (ToolboxActionType = {}));
var ToolboxActions = /** @class */ (function () {
    function ToolboxActions() {
        /**
         * Note:
         *
         * Here it does not need any `@dispatch()` decorator as it will only be
         * dispatched by view components, not epics
         */
        this.selectToolAction = function (toolName) { return ({
            type: ToolboxActionType.TOOLBOX_SELECT_TOOL,
            payload: { toolName: toolName },
            meta: undefined,
        }); };
        this.setToolTraitAction = function (tool) { return ({
            type: ToolboxActionType.TOOLBOX_SET_TOOL_TRAIT,
            payload: { tool: tool },
            meta: undefined,
        }); };
    }
    ToolboxActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToolboxActions);
    return ToolboxActions;
}());

//# sourceMappingURL=toolbox.action.js.map

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Position; });
/* unused harmony export Position3D */
/* unused harmony export Quaternion */
/* unused harmony export Size */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanvasState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
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

var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(params) {
        return _super.call(this, params) || this;
    }
    return Position;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({ x: 0, y: 0 })));

var Position3D = /** @class */ (function (_super) {
    __extends(Position3D, _super);
    function Position3D(params) {
        return _super.call(this, params) || this;
    }
    return Position3D;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({ x: 0, y: 0, z: 0 })));

var Quaternion = /** @class */ (function (_super) {
    __extends(Quaternion, _super);
    function Quaternion(params) {
        return _super.call(this, __assign({}, params, { z: params.z ? params.z : 0 })) || this;
    }
    return Quaternion;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({ x: 0, y: 0, z: 0 })));

var Size = /** @class */ (function (_super) {
    __extends(Size, _super);
    function Size(size) {
        return _super.call(this, size) || this;
    }
    return Size;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({ width: 0, height: 0 })));

/**
 * IMPORTANT NOTE!
 *
 * DO NOT use 'size' because it is a reserved keyword in immutable (Record)
 * thus changing it to 'dimension'
 */
var initBoardAttributes = {
    topLeft: new Position({ x: 0, y: 0 }),
    scale: 1,
    moved: new Position({ x: 0, y: 0 }),
    dimension: new Size({ width: 800, height: 600 }),
};
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(initBoard) {
        if (initBoard === void 0) { initBoard = initBoardAttributes; }
        return _super.call(this, initBoard) || this;
    }
    return Board;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])(initBoardAttributes)));

var initCanvasState = {
    root: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    board: new Board(initBoardAttributes),
    selected: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
};
var CanvasState = /** @class */ (function (_super) {
    __extends(CanvasState, _super);
    function CanvasState(initCanvas) {
        return _super.call(this, initCanvas) || this;
    }
    return CanvasState;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])(initCanvasState)));

//# sourceMappingURL=canvas.model.js.map

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanvasActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
var CanvasActionType;
(function (CanvasActionType) {
    CanvasActionType["CANVAS_UPDATE_TOP_LEFT"] = "CANVAS_UPDATE_TOP_LEFT";
    CanvasActionType["CANVAS_UPDATE_SCALE"] = "CANVAS_UPDATE_SCALE";
    CanvasActionType["CANVAS_UPDATE_MOVED"] = "CANVAS_UPDATE_MOVED";
})(CanvasActionType || (CanvasActionType = {}));
var CanvasActions = /** @class */ (function () {
    function CanvasActions() {
        this.updateTopLeft = function (position) { return ({
            type: CanvasActionType.CANVAS_UPDATE_TOP_LEFT,
            payload: position,
            meta: undefined,
        }); };
        this.updateScale = function (scaleBy) { return ({
            type: CanvasActionType.CANVAS_UPDATE_SCALE,
            payload: scaleBy,
            meta: undefined,
        }); };
        this.updateMoved = function (position) { return ({
            type: CanvasActionType.CANVAS_UPDATE_MOVED,
            payload: position,
            meta: undefined,
        }); };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], CanvasActions.prototype, "updateTopLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], CanvasActions.prototype, "updateScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], CanvasActions.prototype, "updateMoved", void 0);
    CanvasActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], CanvasActions);
    return CanvasActions;
}());

//# sourceMappingURL=canvas.action.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PathActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
var PathActionType;
(function (PathActionType) {
    PathActionType["PATH_ADD_ANCHOR"] = "PATH_ADD_ANCHOR";
    PathActionType["PATH_UPDATE_ANCHOR"] = "PATH_UPDATE_ANCHOR";
    PathActionType["PATH_CHANGE_ANCHOR_TYPE"] = "PATH_CHANGE_ANCHOR_TYPE";
    PathActionType["PATH_UPDATE_BEZIER_HANDLE"] = "PATH_UPDATE_BEZIER_HANDLE";
    PathActionType["PATH_REMOVE_ANCHOR"] = "PATH_REMOVE_ANCHOR";
    PathActionType["PATH_REMOVE_LAST_ANCHOR"] = "PATH_REMOVE_LAST_ANCHOR";
    PathActionType["PATH_ZIP_PATH"] = "PATH_ZIP_PATH";
})(PathActionType || (PathActionType = {}));
var PathActions = /** @class */ (function () {
    function PathActions() {
        /**
         * Note:
         *
         * Don't forget to add `@dispatch()` if you want to achieve continuous dispatch.
         * Otherwise, it will be just passing to the next operator, and only the last action is dispatched
         */
        this.addAnchorAction = function (targetIn, anchorPosition, anchorType) {
            return {
                type: PathActionType.PATH_ADD_ANCHOR,
                payload: { targetIn: targetIn, anchorPosition: anchorPosition, anchorType: anchorType },
                meta: undefined,
            };
        };
        this.removeAnchorAction = function (targetIn, idx) {
            return {
                type: PathActionType.PATH_REMOVE_ANCHOR,
                payload: { targetIn: targetIn, idx: idx },
                meta: undefined,
            };
        };
        this.removeLastAnchorAction = function (targetIn) {
            return {
                type: PathActionType.PATH_REMOVE_LAST_ANCHOR,
                payload: targetIn,
                meta: undefined,
            };
        };
        this.zipPathAction = function (targetIn) {
            return {
                type: PathActionType.PATH_ZIP_PATH,
                payload: targetIn,
                meta: undefined,
            };
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], PathActions.prototype, "addAnchorAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], PathActions.prototype, "removeAnchorAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], PathActions.prototype, "removeLastAnchorAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], PathActions.prototype, "zipPathAction", void 0);
    PathActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], PathActions);
    return PathActions;
}());

//# sourceMappingURL=path.action.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PentoolActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PentoolActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
var PentoolActionType;
(function (PentoolActionType) {
    PentoolActionType["PENTOOL_MOUSE_DOWN_ON_CANVAS"] = "PENTOOL_MOUSE_DOWN_ON_CANVAS";
    PentoolActionType["PENTOOL_MOUSE_UP_ON_CANVAS"] = "PENTOOL_MOUSE_UP_ON_CANVAS";
    PentoolActionType["PENTOOL_MOUSE_MOVE_ON_CANVAS"] = "PENTOOL_MOUSE_MOVE_ON_CANVAS";
    PentoolActionType["PENTOOL_MOUSE_DOWN_ON_ANCHOR"] = "PENTOOL_MOUSE_DOWN_ON_ANCHOR";
})(PentoolActionType || (PentoolActionType = {}));
var PentoolActions = /** @class */ (function () {
    function PentoolActions() {
        /**
         * Note:
         *
         * Here it does not need any `@dispatch()` decorator as it will only be
         * dispatched by view components, not epics. If decorated, it will redundantly
         * dispatch twice.
         */
        this.mouseDownOnCanvasAction = function (targetIn, absPoint) { return ({
            type: PentoolActionType.PENTOOL_MOUSE_DOWN_ON_CANVAS,
            payload: { targetIn: targetIn, absPoint: absPoint },
            meta: undefined,
        }); };
        this.mouseUpOnCanvasAction = function (targetIn, absPoint) { return ({
            type: PentoolActionType.PENTOOL_MOUSE_UP_ON_CANVAS,
            payload: { targetIn: targetIn, absPoint: absPoint },
            meta: undefined,
        }); };
        this.moveCursorOnCanvasAction = function (targetIn, idx, absPoint) { return ({
            type: PentoolActionType.PENTOOL_MOUSE_MOVE_ON_CANVAS,
            payload: { targetIn: targetIn, idx: idx, absPoint: absPoint },
            meta: undefined,
        }); };
        this.mouseDownOnAnchorAction = function (targetIn, idx) { return ({
            type: PentoolActionType.PENTOOL_MOUSE_DOWN_ON_ANCHOR,
            payload: { targetIn: targetIn, idx: idx },
            meta: undefined,
        }); };
    }
    PentoolActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PentoolActions);
    return PentoolActions;
}());

//# sourceMappingURL=pentool.action.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToolBaseComponent; });
var ToolBaseComponent = /** @class */ (function () {
    function ToolBaseComponent() {
        var _this = this;
        this.checkKeyDown = function (e) {
            var key = e.which || e.keyCode;
            if (key === _this.hotKey.charCodeAt(0)) {
                _this.afterHotKeyDown(e);
            }
        };
    }
    ToolBaseComponent.prototype.ngOnInit = function () {
        window.addEventListener('keypress', this.checkKeyDown);
    };
    ToolBaseComponent.prototype.ngAfterContentChecked = function () {
        if (this.context.isActive) {
            this.setCursorAfterSelected();
        }
    };
    return ToolBaseComponent;
}());

//# sourceMappingURL=tool.base.component.js.map

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnchorActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnchorActionType;
(function (AnchorActionType) {
    AnchorActionType["ANCHOR_UPDATE_POSITION"] = "ANCHOR_UPDATE_POSITION";
    AnchorActionType["ANCHOR_CHANGE_TYPE"] = "ANCHOR_CHANGE_TYPE";
    AnchorActionType["ANCHOR_UPDATE_BEZIER_HANDLE"] = "ANCHOR_UPDATE_BEZIER_HANDLE";
})(AnchorActionType || (AnchorActionType = {}));
var AnchorActions = /** @class */ (function () {
    function AnchorActions() {
        /**
         * Note:
         *
         * Don't forget to add `@dispatch()` if you want to achieve continuous dispatch.
         * Otherwise, it will be just passing to the next operator, and only the last action is dispatched
         */
        this.updatePosition = function (targetIn, idx, position) {
            return {
                type: AnchorActionType.ANCHOR_UPDATE_POSITION,
                payload: { targetIn: targetIn, idx: idx, position: position },
                meta: undefined,
            };
        };
        this.changeType = function (targetIn, idx, anchorType) {
            return {
                type: AnchorActionType.ANCHOR_CHANGE_TYPE,
                payload: { targetIn: targetIn, idx: idx, anchorType: anchorType },
                meta: undefined,
            };
        };
        this.updateBezierHandle = function (targetIn, idx, position, which) {
            if (which === void 0) { which = 'start'; }
            return {
                type: AnchorActionType.ANCHOR_UPDATE_BEZIER_HANDLE,
                payload: { targetIn: targetIn, idx: idx, position: position, which: which },
                meta: undefined,
            };
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], AnchorActions.prototype, "updatePosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], AnchorActions.prototype, "changeType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], AnchorActions.prototype, "updateBezierHandle", void 0);
    AnchorActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], AnchorActions);
    return AnchorActions;
}());

//# sourceMappingURL=anchor.action.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drawable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_model__ = __webpack_require__(34);
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


var DrawableType;
(function (DrawableType) {
    DrawableType["Anchor"] = "DRAWABLE_ANCHOR";
    DrawableType["Path"] = "DRAWABLE_PATH";
    DrawableType["Group"] = "DRAWABLE_GROUP";
})(DrawableType || (DrawableType = {}));
var initDrawableAttribute = {
    routeParentPath: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    idx: 0,
    absPosition: new __WEBPACK_IMPORTED_MODULE_1__canvas_model__["c" /* Position */]({ x: 0, y: 0 }),
    type: '',
};
var Drawable = /** @class */ (function (_super) {
    __extends(Drawable, _super);
    function Drawable(init) {
        return _super.call(this, __assign({}, init, { routeParentPath: init.routeParentPath ? init.routeParentPath : Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]), children: init.children ? init.children : Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]) })) || this;
    }
    return Drawable;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])(__assign({}, initDrawableAttribute, { children: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]) }))));

//# sourceMappingURL=drawable.model.js.map

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorPickerReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_model__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opacity_opacity_action__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opacity_opacity_reducer__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rim_rim_action__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rim_rim_reducer__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_slider_action__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slider_slider_reducer__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stroke_stroke_action__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stroke_stroke_reducer__ = __webpack_require__(334);









var colorPickerReducer = function (state, action) {
    if (state === void 0) { state = new __WEBPACK_IMPORTED_MODULE_0__color_model__["a" /* ColorPickerState */](); }
    switch (true) {
        case action.type in __WEBPACK_IMPORTED_MODULE_1__opacity_opacity_action__["a" /* OpacityActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_2__opacity_opacity_reducer__["a" /* opacityReducer */])(state, action);
        case action.type in __WEBPACK_IMPORTED_MODULE_3__rim_rim_action__["a" /* RimActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_4__rim_rim_reducer__["a" /* rimReducer */])(state, action);
        case action.type in __WEBPACK_IMPORTED_MODULE_5__slider_slider_action__["a" /* SliderActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_6__slider_slider_reducer__["a" /* sliderReducer */])(state, action);
        case action.type in __WEBPACK_IMPORTED_MODULE_7__stroke_stroke_action__["a" /* StrokeActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_8__stroke_stroke_reducer__["a" /* strokeReducer */])(state, action);
    }
    return state;
};
//# sourceMappingURL=color.reducer.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SliderActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderActionType;
(function (SliderActionType) {
    SliderActionType["SLIDER_CHANGE_VALUE_BY_CHANNEL"] = "SLIDER_CHANGE_VALUE_BY_CHANNEL";
})(SliderActionType || (SliderActionType = {}));
var SliderActions = /** @class */ (function () {
    function SliderActions() {
        /**
         * Note:
         *
         * Here it does not need any `@dispatch()` decorator as it will only be
         * dispatched by view components, not epics. If decorated, it will redundantly
         * dispatch twice.
         */
        this.changeValueByChannel = function (attribute, channel, value) { return ({
            type: SliderActionType.SLIDER_CHANGE_VALUE_BY_CHANNEL,
            payload: { attribute: attribute, channel: channel, value: value },
            meta: undefined,
        }); };
    }
    SliderActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SliderActions);
    return SliderActions;
}());

//# sourceMappingURL=slider.action.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
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

var ToolBase = /** @class */ (function (_super) {
    __extends(ToolBase, _super);
    function ToolBase(initTool) {
        return _super.call(this, initTool) || this;
    }
    return ToolBase;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({ listeners: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]), name: '' })));

//# sourceMappingURL=tool.model.js.map

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports) {

if(typeof require('events') === 'undefined') {var e = new Error("Cannot find module \"require('events')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('events');

/***/ }),
/* 155 */
/***/ (function(module, exports) {

if(typeof require('fs') === 'undefined') {var e = new Error("Cannot find module \"require('fs')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('fs');

/***/ }),
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports) {

if(typeof require('crypto') === 'undefined') {var e = new Error("Cannot find module \"require('crypto')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('crypto');

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawableBaseComponent; });
var DrawableBaseComponent = /** @class */ (function () {
    function DrawableBaseComponent() {
    }
    return DrawableBaseComponent;
}());

//# sourceMappingURL=drawable.base.component.js.map

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorBaseComponent; });
var AnchorBaseComponent = /** @class */ (function () {
    function AnchorBaseComponent() {
    }
    return AnchorBaseComponent;
}());

//# sourceMappingURL=anchor.base.component.js.map

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Path; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anchor_anchor_factory__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drawable_drawable_model__ = __webpack_require__(82);
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




var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path(params) {
        var _this = _super.call(this, __assign({}, params, { type: __WEBPACK_IMPORTED_MODULE_3__drawable_drawable_model__["b" /* DrawableType */].Path })) || this;
        _this.setRouteParentPath = function (path) {
            return new Path(__assign({}, _this.toObject(), { children: _this.children.map(function (child) { return child.setRouteParentPath(path.push(_this.idx)); }), routeParentPath: path }));
        };
        _this.toPath = function () {
            return _this.children.reduce(function (acc, anchor) { return acc + " " + anchor.toPath(); }, '').concat(_this.isZipped ? ' z' : '');
        };
        /**
         * Problem with immutable by adding methods which returns its own type
         * since Immutable (Record) return type is a <K,V> pairs and cannot hold method
         * defined in the subclasses
         *
         * Push an anchor and return NEW Path (old path is not mutated)
         * @param { Position } absPosition - object containing x, y, and optional z
         */
        _this.addAnchor = function (absPosition, anchorType) {
            if (anchorType === void 0) { anchorType = __WEBPACK_IMPORTED_MODULE_1__anchor_anchor_model__["a" /* AnchorType */].LineTo; }
            var position = absPosition;
            if (!(absPosition instanceof __WEBPACK_IMPORTED_MODULE_2__canvas_model__["c" /* Position */])) {
                position = new __WEBPACK_IMPORTED_MODULE_2__canvas_model__["c" /* Position */](absPosition);
            }
            return new Path(__assign({}, _this.toObject(), { children: _this.children.push(__WEBPACK_IMPORTED_MODULE_0__anchor_anchor_factory__["a" /* AnchorFactory */].createAnchor(anchorType, {
                    absPosition: position,
                    routeParentPath: _this.routeParentPath.push(_this.idx),
                    idx: _this.children.size,
                })), isZipped: _this.isZipped }));
        };
        _this.replaceAnchor = function (idx, newAnchor) {
            var children = _this.children.set(idx, newAnchor.setRouteParentPath(_this.routeParentPath.push(idx)));
            return new Path(__assign({}, _this.toObject(), { children: children, isZipped: _this.isZipped }));
        };
        _this.updateAnchor = function (idx, newPosition) {
            var children = _this.children.updateIn([idx], function (child) { return child.setPosition(newPosition); });
            return new Path(__assign({}, _this.toObject(), { children: children, isZipped: _this.isZipped }));
        };
        _this.removeAnchor = function (idx) {
            var children = _this.children.remove(idx);
            return new Path(__assign({}, _this.toObject(), { children: children, isZipped: _this.isZipped }));
        };
        _this.removeLastAnchor = function () {
            return _this.removeAnchor(_this.children.size - 1);
        };
        _this.zip = function () {
            return new Path(__assign({}, _this.toObject(), { isZipped: true }));
        };
        _this.isZipped = !!params.isZipped;
        return _this;
    }
    return Path;
}(__WEBPACK_IMPORTED_MODULE_3__drawable_drawable_model__["a" /* Drawable */]));

//# sourceMappingURL=path.model.js.map

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorAttribute; });
/* unused harmony export Fill */
/* unused harmony export Outline */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RimState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rim_color_model__ = __webpack_require__(210);
/* unused harmony reexport Color */
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



var ColorAttribute;
(function (ColorAttribute) {
    ColorAttribute["Fill"] = "fill";
    ColorAttribute["Outline"] = "outline";
})(ColorAttribute || (ColorAttribute = {}));
var initFill = { color: new __WEBPACK_IMPORTED_MODULE_1__rim_color_model__["a" /* Color */](), opacity: 1 };
var Fill = /** @class */ (function (_super) {
    __extends(Fill, _super);
    function Fill(state) {
        if (state === void 0) { state = initFill; }
        return _super.call(this, state) || this;
    }
    return Fill;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])(initFill)));

var initOutline = { color: new __WEBPACK_IMPORTED_MODULE_1__rim_color_model__["a" /* Color */](), width: 1, opacity: 1 };
var Outline = /** @class */ (function (_super) {
    __extends(Outline, _super);
    function Outline(state) {
        if (state === void 0) { state = initOutline; }
        return _super.call(this, state) || this;
    }
    return Outline;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])(initOutline)));

var initRimState = { fill: new Fill(), outline: new Outline() };
var RimState = /** @class */ (function (_super) {
    __extends(RimState, _super);
    function RimState(state) {
        if (state === void 0) { state = initRimState; }
        return _super.call(this, state) || this;
    }
    return RimState;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])(initRimState)));

//# sourceMappingURL=rim.model.js.map

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvastoolActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanvastoolActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
var CanvastoolActionType;
(function (CanvastoolActionType) {
    CanvastoolActionType["CANVASTOOL_MOUSE_DOWN_ON_CANVAS"] = "CANVASTOOL_MOUSE_DOWN_ON_CANVAS";
    CanvastoolActionType["CANVASTOOL_MOUSE_MOVE_ON_CANVAS"] = "CANVASTOOL_MOUSE_MOVE_ON_CANVAS";
    CanvastoolActionType["CANVASTOOL_MOUSE_UP_ON_CANVAS"] = "CANVASTOOL_MOUSE_UP_ON_CANVAS";
})(CanvastoolActionType || (CanvastoolActionType = {}));
var CanvastoolActions = /** @class */ (function () {
    function CanvastoolActions() {
        /**
         * Note:
         *
         * Here it does not need any `@dispatch()` decorator as it will only be
         * dispatched by view components, not epics. If decorated, it will redundantly
         * dispatch twice.
         */
        this.mouseDownOnCanvasAction = function (startPosition) { return ({
            type: CanvastoolActionType.CANVASTOOL_MOUSE_DOWN_ON_CANVAS,
            payload: startPosition,
            meta: undefined,
        }); };
        this.moveCursorOnCanvasAction = function (currentPosition) { return ({
            type: CanvastoolActionType.CANVASTOOL_MOUSE_MOVE_ON_CANVAS,
            payload: currentPosition,
            meta: undefined,
        }); };
        this.mouseUpOnCanvasAction = function (endPosition) { return ({
            type: CanvastoolActionType.CANVASTOOL_MOUSE_UP_ON_CANVAS,
            payload: endPosition,
            meta: undefined,
        }); };
    }
    CanvastoolActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CanvastoolActions);
    return CanvastoolActions;
}());

//# sourceMappingURL=canvastool.action.js.map

/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
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
webpackEmptyAsyncContext.id = 177;

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectronService = /** @class */ (function () {
    function ElectronService() {
        this.isElectron = function () {
            return window && window.process && window.process.type;
        };
        // Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
        }
    }
    ElectronService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ElectronService);
    return ElectronService;
}());

//# sourceMappingURL=electron.service.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawable_drawable_base_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anchor_directive__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bezier_bezier_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smooth_smooth_component__ = __webpack_require__(196);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var mappings = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_3__anchor_model__["a" /* AnchorType */].MoveTo] = __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__["a" /* BasicAnchorComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_3__anchor_model__["a" /* AnchorType */].LineTo] = __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__["a" /* BasicAnchorComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_3__anchor_model__["a" /* AnchorType */].SmoothQuadraticBezierCurveTo] = __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__["a" /* BasicAnchorComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_3__anchor_model__["a" /* AnchorType */].SmoothCurveTo] = __WEBPACK_IMPORTED_MODULE_6__smooth_smooth_component__["a" /* SmoothAnchorComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_3__anchor_model__["a" /* AnchorType */].QuadraticBezierCurve] = __WEBPACK_IMPORTED_MODULE_5__bezier_bezier_component__["a" /* BezierAnchorComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_3__anchor_model__["a" /* AnchorType */].CubicBezierCurve] = __WEBPACK_IMPORTED_MODULE_5__bezier_bezier_component__["a" /* BezierAnchorComponent */],
    _a);
var getComponentType = function (typeName) {
    var type = mappings[typeName];
    return type;
};
var AnchorComponent = /** @class */ (function (_super) {
    __extends(AnchorComponent, _super);
    function AnchorComponent(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    AnchorComponent.prototype.ngOnInit = function () {
        if (this.drawable.anchorType) {
            var anchorType = getComponentType(this.drawable.anchorType);
            var factory = this.componentFactoryResolver.resolveComponentFactory(anchorType);
            this.componentRef = this.anchorHost.createComponent(factory);
            this.instance = this.componentRef.instance;
            this.instance.anchor = this.drawable;
        }
    };
    AnchorComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = undefined;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__anchor_directive__["a" /* AnchorDirective */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
    ], AnchorComponent.prototype, "anchorHost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__anchor_model__["b" /* BaseAnchor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__anchor_model__["b" /* BaseAnchor */]) === "function" && _b || Object)
    ], AnchorComponent.prototype, "drawable", void 0);
    AnchorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-anchor',
            template: __webpack_require__(291),
            styles: [__webpack_require__(292)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _c || Object])
    ], AnchorComponent);
    return AnchorComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__drawable_drawable_base_component__["a" /* DrawableBaseComponent */]));

var _a;
//# sourceMappingURL=anchor.container.component.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnchorDirective = /** @class */ (function () {
    function AnchorDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAnchorHost]',
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
    ], AnchorDirective);
    return AnchorDirective;
    var _a;
}());

//# sourceMappingURL=anchor.directive.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAnchorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__anchor_base_component__ = __webpack_require__(160);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var filterListener = function (listeners$) {
    return listeners$.map(function (listeners) { return listeners
        .filter(function (listener) { return listener.target === 'anchor'; }); });
};
var BasicAnchorComponent = /** @class */ (function (_super) {
    __extends(BasicAnchorComponent, _super);
    function BasicAnchorComponent(rd) {
        var _this = _super.call(this) || this;
        _this.rd = rd;
        _this.listeners = [];
        /**
         * Need to pass `drawableRef` because calling `this` in the function
         * will refer the drawable from the currentTarget (last anchor)
         */
        _this.dispatchRegisteredAction = function (handler, e, drawableRef) {
            return handler(e, drawableRef);
        };
        return _this;
    }
    Object.defineProperty(BasicAnchorComponent.prototype, "style", {
        get: function () {
            return {
                transform: this.anchor.transformStyle,
                'pointer-events': this.anchor.idx === 0 ? 'auto' : 'none',
            };
        },
        enumerable: true,
        configurable: true
    });
    BasicAnchorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Attach listeners as dictated by toolbox
        this.listeners$.subscribe(function (listeners) {
            // clear listener from pevious tool
            _this.listeners.forEach(function (listenerToDestroy) { return listenerToDestroy(); });
            listeners.forEach(function (listener) {
                _this.listeners.push(_this.rd.listen(_this.anchorRef.nativeElement, listener.name, function (e) { return _this.dispatchRegisteredAction(listener.handler, e, _this.anchor); }));
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('anchor'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], BasicAnchorComponent.prototype, "anchorRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__["b" /* BaseAnchor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__["b" /* BaseAnchor */]) === "function" && _b || Object)
    ], BasicAnchorComponent.prototype, "anchor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select$"])(['toolbox', 'selected', 'listeners'], filterListener),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], BasicAnchorComponent.prototype, "listeners$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], BasicAnchorComponent.prototype, "dispatchRegisteredAction", void 0);
    BasicAnchorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-anchor-basic',
            template: __webpack_require__(285),
            styles: [__webpack_require__(286)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _d || Object])
    ], BasicAnchorComponent);
    return BasicAnchorComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_5__anchor_base_component__["a" /* AnchorBaseComponent */]));

//# sourceMappingURL=basic.component.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BezierAnchorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__anchor_base_component__ = __webpack_require__(160);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var filterListener = function (listeners$) {
    return listeners$.map(function (listeners) { return listeners
        .filter(function (listener) { return listener.target === 'anchor'; }); });
};
var BezierAnchorComponent = /** @class */ (function (_super) {
    __extends(BezierAnchorComponent, _super);
    function BezierAnchorComponent(rd) {
        var _this = _super.call(this) || this;
        _this.rd = rd;
        _this.listeners = [];
        /**
         * Need to pass `drawableRef` because calling `this` in the function
         * will refer the drawable from the currentTarget (last anchor)
         */
        _this.dispatchRegisteredAction = function (handler, e, drawableRef) {
            return handler(e, drawableRef);
        };
        return _this;
    }
    Object.defineProperty(BezierAnchorComponent.prototype, "style", {
        get: function () {
            return {
                transform: this.anchor.transformStyle,
                'pointer-events': this.anchor.idx === 0 ? 'auto' : 'none',
            };
        },
        enumerable: true,
        configurable: true
    });
    BezierAnchorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Attach listeners as dictated by toolbox
        this.listeners$.subscribe(function (listeners) {
            // clear listener from pevious tool
            _this.listeners.forEach(function (listenerToDestroy) { return listenerToDestroy(); });
            listeners.forEach(function (listener) {
                _this.listeners.push(_this.rd.listen(_this.anchorRef.nativeElement, listener.name, function (e) { return _this.dispatchRegisteredAction(listener.handler, e, _this.anchor); }));
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('anchor'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], BezierAnchorComponent.prototype, "anchorRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__["b" /* BaseAnchor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__["b" /* BaseAnchor */]) === "function" && _b || Object)
    ], BezierAnchorComponent.prototype, "anchor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select$"])(['toolbox', 'selected', 'listeners'], filterListener),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], BezierAnchorComponent.prototype, "listeners$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], BezierAnchorComponent.prototype, "dispatchRegisteredAction", void 0);
    BezierAnchorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-anchor-bezier',
            template: __webpack_require__(287),
            styles: [__webpack_require__(288)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _d || Object])
    ], BezierAnchorComponent);
    return BezierAnchorComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_5__anchor_base_component__["a" /* AnchorBaseComponent */]));

//# sourceMappingURL=bezier.component.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothAnchorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__anchor_base_component__ = __webpack_require__(160);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var filterListener = function (listeners$) {
    return listeners$.map(function (listeners) { return listeners
        .filter(function (listener) { return listener.target === 'anchor'; }); });
};
var SmoothAnchorComponent = /** @class */ (function (_super) {
    __extends(SmoothAnchorComponent, _super);
    function SmoothAnchorComponent(rd) {
        var _this = _super.call(this) || this;
        _this.rd = rd;
        _this.listeners = [];
        /**
         * Need to pass `drawableRef` because calling `this` in the function
         * will refer the drawable from the currentTarget (last anchor)
         */
        _this.dispatchRegisteredAction = function (handler, e, drawableRef) {
            return handler(e, drawableRef);
        };
        return _this;
    }
    Object.defineProperty(SmoothAnchorComponent.prototype, "style", {
        get: function () {
            return {
                transform: this.anchor.transformStyle,
                'pointer-events': this.anchor.idx === 0 ? 'auto' : 'none',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmoothAnchorComponent.prototype, "handleStyles", {
        get: function () {
            return this.handles.map(function (value) { return ({ transform: value.headTransformStyle }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmoothAnchorComponent.prototype, "handles", {
        get: function () {
            return this.anchor.handleLines;
        },
        enumerable: true,
        configurable: true
    });
    SmoothAnchorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Attach listeners as dictated by toolbox
        this.listeners$.subscribe(function (listeners) {
            // clear listener from pevious tool
            _this.listeners.forEach(function (listenerToDestroy) { return listenerToDestroy(); });
            listeners.forEach(function (listener) {
                _this.listeners.push(_this.rd.listen(_this.anchorRef.nativeElement, listener.name, function (e) { return _this.dispatchRegisteredAction(listener.handler, e, _this.anchor); }));
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('anchor'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], SmoothAnchorComponent.prototype, "anchorRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__["b" /* BaseAnchor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__anchor_anchor_model__["b" /* BaseAnchor */]) === "function" && _b || Object)
    ], SmoothAnchorComponent.prototype, "anchor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select$"])(['toolbox', 'selected', 'listeners'], filterListener),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], SmoothAnchorComponent.prototype, "listeners$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], SmoothAnchorComponent.prototype, "dispatchRegisteredAction", void 0);
    SmoothAnchorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-anchor-smooth',
            template: __webpack_require__(289),
            styles: [__webpack_require__(290)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _d || Object])
    ], SmoothAnchorComponent);
    return SmoothAnchorComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_5__anchor_base_component__["a" /* AnchorBaseComponent */]));

//# sourceMappingURL=smooth.component.js.map

/***/ }),
/* 197 */,
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canvasReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_anchor_action__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anchor_anchor_reducer__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_action__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_core__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path_path_action__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__path_path_model__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__path_path_reducer__ = __webpack_require__(299);









var canvasReducer = function (state, action) {
    if (state === void 0) { state = new __WEBPACK_IMPORTED_MODULE_5__canvas_model__["b" /* CanvasState */]({
        root: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([
            new __WEBPACK_IMPORTED_MODULE_7__path_path_model__["a" /* Path */]({ absPosition: new __WEBPACK_IMPORTED_MODULE_5__canvas_model__["c" /* Position */]({ x: 100, y: 100 }), idx: 0 }),
        ]),
        board: new __WEBPACK_IMPORTED_MODULE_5__canvas_model__["a" /* Board */](),
        selected: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([0])]),
    }); }
    switch (true) {
        case action.type in __WEBPACK_IMPORTED_MODULE_6__path_path_action__["a" /* PathActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_8__path_path_reducer__["a" /* pathReducer */])(state, action);
        case action.type in __WEBPACK_IMPORTED_MODULE_1__anchor_anchor_action__["a" /* AnchorActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_2__anchor_anchor_reducer__["a" /* anchorReducer */])(state, action);
    }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_3__canvas_action__["a" /* CanvasActionType */].CANVAS_UPDATE_TOP_LEFT:
            return __WEBPACK_IMPORTED_MODULE_4__canvas_core__["c" /* updateTopLeft */](state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_3__canvas_action__["a" /* CanvasActionType */].CANVAS_UPDATE_SCALE:
            return __WEBPACK_IMPORTED_MODULE_4__canvas_core__["b" /* updateScale */](state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_3__canvas_action__["a" /* CanvasActionType */].CANVAS_UPDATE_MOVED:
            return __WEBPACK_IMPORTED_MODULE_4__canvas_core__["a" /* updateMoved */](state, action.payload);
    }
    return state;
};
//# sourceMappingURL=canvas.reducer.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_basic_model__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bezier_bezier_model__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smooth_smooth_model__ = __webpack_require__(297);




var AnchorFactory = /** @class */ (function () {
    function AnchorFactory() {
    }
    AnchorFactory.createAnchor = function (type, params) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_0__anchor_model__["a" /* AnchorType */].LineTo:
                return new __WEBPACK_IMPORTED_MODULE_1__basic_basic_model__["a" /* BasicAnchor */](params);
            case __WEBPACK_IMPORTED_MODULE_0__anchor_model__["a" /* AnchorType */].SmoothCurveTo:
                return new __WEBPACK_IMPORTED_MODULE_3__smooth_smooth_model__["a" /* SmoothAnchor */](params);
            case __WEBPACK_IMPORTED_MODULE_0__anchor_model__["a" /* AnchorType */].QuadraticBezierCurve:
                return new __WEBPACK_IMPORTED_MODULE_2__bezier_bezier_model__["b" /* QuadraticBezierAnchor */](params);
            case __WEBPACK_IMPORTED_MODULE_0__anchor_model__["a" /* AnchorType */].CubicBezierCurve:
                return new __WEBPACK_IMPORTED_MODULE_2__bezier_bezier_model__["a" /* CubicBezierAnchor */](params);
            case __WEBPACK_IMPORTED_MODULE_0__anchor_model__["a" /* AnchorType */].SmoothQuadraticBezierCurveTo:
                return new __WEBPACK_IMPORTED_MODULE_3__smooth_smooth_model__["b" /* SmoothQuadraticAnchor */](params);
            default:
                console.error('Invalid anchor type passed to AnchorFactory');
        }
    };
    return AnchorFactory;
}());

//# sourceMappingURL=anchor.factory.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAnchor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_model__ = __webpack_require__(22);
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


/**
 * It might be better to use composition rather than inheritance
 * However, it will be more difficult to make use of Immutable methods
 */
var BasicAnchor = /** @class */ (function (_super) {
    __extends(BasicAnchor, _super);
    function BasicAnchor(params) {
        var _this = _super.call(this, params) || this;
        _this.setRouteParentPath = function (path) {
            return new BasicAnchor({
                idx: _this.idx,
                routeParentPath: path,
                absPosition: _this.absPosition,
                anchorType: _this.anchorType,
            });
        };
        _this.setPosition = function (absPosition) {
            return new BasicAnchor({
                idx: _this.idx,
                routeParentPath: _this.routeParentPath,
                absPosition: new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](absPosition),
                anchorType: _this.anchorType,
            });
        };
        _this.toPath = function () {
            return _this.anchorType + " " + _this.absPosition.get('x') + ", " + _this.absPosition.get('y');
        };
        _this.anchorType = _this.idx === 0 ? _this.anchorType = __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].MoveTo : __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].LineTo;
        return _this;
    }
    Object.defineProperty(BasicAnchor.prototype, "transformStyle", {
        get: function () {
            return "translate(" + this.absPosition.get('x') + "px, " + this.absPosition.get('y') + "px)";
        },
        enumerable: true,
        configurable: true
    });
    return BasicAnchor;
}(__WEBPACK_IMPORTED_MODULE_1__anchor_model__["b" /* BaseAnchor */]));

//# sourceMappingURL=basic.model.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_action__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var doneAction = { type: 'DONE', payload: undefined, meta: undefined };
var CanvasEpics = /** @class */ (function () {
    function CanvasEpics(canvasActions) {
        var _this = this;
        this.canvasActions = canvasActions;
        this.createEpics = function () {
            return [
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.updateTopLeftAfterMoved()),
            ];
        };
        this.updateTopLeftAfterMoved = function () {
            var lastMoved = { x: 0, y: 0 };
            return function (action$, store) { return action$ // Maybe can use `reduce` instead
                .ofType(__WEBPACK_IMPORTED_MODULE_4__canvas_action__["a" /* CanvasActionType */].CANVAS_UPDATE_MOVED)
                .map(function (action) {
                var topLeft = store.getState().canvas.getIn(['board', 'topLeft']);
                var newPosition = {
                    x: topLeft.x + (action.payload.x - lastMoved.x),
                    y: topLeft.y + (action.payload.y - lastMoved.y),
                };
                lastMoved = action.payload;
                return _this.canvasActions.updateTopLeft(newPosition);
            })
                .mapTo(doneAction); };
        };
    }
    CanvasEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__canvas_action__["b" /* CanvasActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__canvas_action__["b" /* CanvasActions */]) === "function" && _a || Object])
    ], CanvasEpics);
    return CanvasEpics;
    var _a;
}());

//# sourceMappingURL=canvas.epics.js.map

/***/ }),
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawable_drawable_base_component__ = __webpack_require__(159);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GroupComponent = /** @class */ (function (_super) {
    __extends(GroupComponent, _super);
    function GroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupComponent.prototype.ngAfterViewInit = function () {
    };
    GroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(319),
            styles: [__webpack_require__(320)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], GroupComponent);
    return GroupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawable_drawable_base_component__["a" /* DrawableBaseComponent */]));

//# sourceMappingURL=group.component.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawable_drawable_base_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path_model__ = __webpack_require__(161);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PathComponent = /** @class */ (function (_super) {
    __extends(PathComponent, _super);
    function PathComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PathComponent.prototype.ngOnInit = function () {
        // console.log(this.drawable.toPath());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__path_model__["a" /* Path */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__path_model__["a" /* Path */]) === "function" && _a || Object)
    ], PathComponent.prototype, "drawable", void 0);
    PathComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-path',
            template: __webpack_require__(321),
            styles: [__webpack_require__(322)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
    ], PathComponent);
    return PathComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__drawable_drawable_base_component__["a" /* DrawableBaseComponent */]));

//# sourceMappingURL=path.component.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrawableDirective = /** @class */ (function () {
    function DrawableDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    DrawableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDrawableHost]',
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
    ], DrawableDirective);
    return DrawableDirective;
    var _a;
}());

//# sourceMappingURL=drawable.directive.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inColorRange */
/* unused harmony export validateColorHex */
/* unused harmony export componentToHex */
/* unused harmony export rgbToHex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createClamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var inColorRange = function (value) { return value >= 0 && value < 256; };
var validateColorHex = function (hex) {
    var re = /\^#(?:[0-9a-fA-F]{3}){1,2}$/;
    return re.test(hex);
};
var componentToHex = function (c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};
var rgbToHex = function (r, g, b) { return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); };
/**
 * Create clamp between min and max, inclusive
 * @param { number } min - Minimum (for color supposedly integer 0)
 * @param { number } max - Maximum (for color supposedly integer 255)
 */
var createClamp = function (min, max) {
    return function (num) { return Math.round(num <= min ? min : num >= max ? max : num); };
};
var Color = /** @class */ (function () {
    function Color(color) {
        if (color === void 0) { color = '#000'; }
        var _this = this;
        this.set = function (channel, value) {
            console.assert(inColorRange(value), 'Invalid color value, should be between 0 and 255 inclusive, found:', value);
            return new Color(__assign({}, _this.toObject(), (_a = {}, _a[channel] = value, _a)));
            var _a;
        };
        this.toRGBString = function () { return "rgb(" + _this._r + ", " + _this._g + ", " + _this._b + ")"; };
        this.toRGBAString = function (alpha) { return "rgba(" + _this._r + ", " + _this._g + ", " + _this._b + ", " + alpha + ")"; };
        this.toHexString = function () { return rgbToHex(_this._r, _this._g, _this._b); };
        this.toObject = function () { return ({ r: _this._r, g: _this._g, b: _this._b }); };
        if (typeof color === 'string') {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            color = color.replace(shorthandRegex, function (_m, r, g, b) {
                return r + r + g + g + b + b;
            });
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
            if (result) {
                this._r = parseInt(result[1], 16);
                this._g = parseInt(result[2], 16);
                this._b = parseInt(result[3], 16);
            }
            else {
                console.error('Valid color hex must be # followed by 3 or 6 hex numbers');
            }
        }
        else if (color !== undefined) {
            if (inColorRange(color.r)
                && inColorRange(color.g)
                && inColorRange(color.b)) {
                this._r = Math.round(color.r);
                this._g = Math.round(color.g);
                this._b = Math.round(color.b);
            }
            else {
                var clampColor = createClamp(0, 255);
                this._r = clampColor(color.r);
                this._g = clampColor(color.g);
                this._b = clampColor(color.b);
                console.error('Valid color rgb must be integer between 0 and 255 each');
            }
        }
    }
    Object.defineProperty(Color.prototype, "r", {
        get: function () { return this._r; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "g", {
        get: function () { return this._g; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "b", {
        get: function () { return this._b; },
        enumerable: true,
        configurable: true
    });
    return Color;
}());

//# sourceMappingURL=rim.color.model.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorPickerEpics = /** @class */ (function () {
    function ColorPickerEpics() {
    }
    ColorPickerEpics.prototype.createEpics = function () {
        return [];
    };
    ColorPickerEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ColorPickerEpics);
    return ColorPickerEpics;
}());

//# sourceMappingURL=color.epics.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvastool_canvastool_epics__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directtool_directtool_epics__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pentool_epics_pentool_epics__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectiontool_selectiontool_epics__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolboxEpics = /** @class */ (function () {
    function ToolboxEpics(pentoolEpics, selectiontoolEpics, canvastoolEpics, directSelectiontoolEpics) {
        this.pentoolEpics = pentoolEpics;
        this.selectiontoolEpics = selectiontoolEpics;
        this.canvastoolEpics = canvastoolEpics;
        this.directSelectiontoolEpics = directSelectiontoolEpics;
    }
    ToolboxEpics.prototype.createEpics = function () {
        return this.pentoolEpics.createEpics().concat(this.selectiontoolEpics.createEpics(), this.canvastoolEpics.createEpics(), this.directSelectiontoolEpics.createEpics());
    };
    ToolboxEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__pentool_epics_pentool_epics__["a" /* PentoolEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pentool_epics_pentool_epics__["a" /* PentoolEpics */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__selectiontool_selectiontool_epics__["a" /* SelectiontoolEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__selectiontool_selectiontool_epics__["a" /* SelectiontoolEpics */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__canvastool_canvastool_epics__["a" /* CanvastoolEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__canvastool_canvastool_epics__["a" /* CanvastoolEpics */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__directtool_directtool_epics__["a" /* DirectSelectiontoolEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__directtool_directtool_epics__["a" /* DirectSelectiontoolEpics */]) === "function" && _d || Object])
    ], ToolboxEpics);
    return ToolboxEpics;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=toolbox.epics.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvastoolEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__canvas_canvas_action__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toolbox_action__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__canvastool_action__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__canvastool_model__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var doneAction = { type: 'DONE', payload: undefined, meta: undefined };
var calcCanvasPosition = function (input, start, lastMoved) {
    return {
        x: (input.x - start.x) + lastMoved.x,
        y: (input.y - start.y) + lastMoved.y,
    };
};
var CanvastoolEpics = /** @class */ (function () {
    function CanvastoolEpics(toolboxActions, canvasActions) {
        var _this = this;
        this.toolboxActions = toolboxActions;
        this.canvasActions = canvasActions;
        this.createEpics = function () {
            return [
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.setCanvastoolTraitOnSelected()),
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.moveCanvasOnMouseCycle()),
            ];
        };
        this.setCanvastoolTraitOnSelected = function () {
            return function (action$, store) { return action$
                .ofType(__WEBPACK_IMPORTED_MODULE_8__toolbox_action__["a" /* ToolboxActionType */].TOOLBOX_SELECT_TOOL)
                .filter(function (action) { return action.payload.toolName === __WEBPACK_IMPORTED_MODULE_9__toolbox_model__["a" /* ToolName */].Canvastool; })
                .map(function (action) { return _this.toolboxActions.setToolTraitAction(Object(__WEBPACK_IMPORTED_MODULE_11__canvastool_model__["a" /* createCanvastool */])()); }); };
        };
        this.moveCanvasOnMouseCycle = function () {
            return function (action$, store) { return action$
                .ofType(__WEBPACK_IMPORTED_MODULE_10__canvastool_action__["a" /* CanvastoolActionType */].CANVASTOOL_MOUSE_DOWN_ON_CANVAS)
                .mergeMap(function (startAction) {
                var moved = store.getState().canvas.get('board').toJS().moved;
                return action$
                    .ofType(__WEBPACK_IMPORTED_MODULE_10__canvastool_action__["a" /* CanvastoolActionType */].CANVASTOOL_MOUSE_MOVE_ON_CANVAS)
                    .map(function (moveAction) {
                    var newPosition = calcCanvasPosition(moveAction.payload, startAction.payload, moved);
                    return _this.canvasActions.updateMoved(newPosition);
                })
                    .takeUntil(action$
                    .ofType(__WEBPACK_IMPORTED_MODULE_10__canvastool_action__["a" /* CanvastoolActionType */].CANVASTOOL_MOUSE_UP_ON_CANVAS))
                    .mapTo(doneAction); // To prevent `updateMoved` dispatched twice
            }); };
        };
    }
    CanvastoolEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__canvas_canvas_action__["b" /* CanvasActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__canvas_canvas_action__["b" /* CanvasActions */]) === "function" && _b || Object])
    ], CanvastoolEpics);
    return CanvastoolEpics;
    var _a, _b;
}());

//# sourceMappingURL=canvastool.epics.js.map

/***/ }),
/* 214 */,
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectSelectiontoolEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_action__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directtool_model__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DirectSelectiontoolEpics = /** @class */ (function () {
    function DirectSelectiontoolEpics(toolboxActions) {
        var _this = this;
        this.toolboxActions = toolboxActions;
        this.createEpics = function () {
            return [
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.setDirecttoolTraitOnSelected()),
            ];
        };
        this.setDirecttoolTraitOnSelected = function () {
            return function (action$, store) { return action$
                .ofType(__WEBPACK_IMPORTED_MODULE_2__toolbox_action__["a" /* ToolboxActionType */].TOOLBOX_SELECT_TOOL)
                .filter(function (action) { return action.payload.toolName === __WEBPACK_IMPORTED_MODULE_3__toolbox_model__["a" /* ToolName */].DirectSelectiontool; })
                .map(function (action) { return _this.toolboxActions.setToolTraitAction(Object(__WEBPACK_IMPORTED_MODULE_4__directtool_model__["a" /* createDirectSelectiontool */])()); }); };
        };
    }
    DirectSelectiontoolEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object])
    ], DirectSelectiontoolEpics);
    return DirectSelectiontoolEpics;
    var _a;
}());

//# sourceMappingURL=directtool.epics.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PentoolEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_path_path_action__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbox_action__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pentool_action__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pentool_model__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pentool_draw_epics__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var doneAction = { type: 'DONE', payload: undefined, meta: undefined };
var PentoolEpics = /** @class */ (function () {
    function PentoolEpics(toolboxActions, pathActions, drawEpics) {
        var _this = this;
        this.toolboxActions = toolboxActions;
        this.pathActions = pathActions;
        this.drawEpics = drawEpics;
        this.createEpics = function () {
            return [
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.setPentoolTraitOnSelected()),
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.zipIfHeadAnchorClicked())
            ].concat(_this.drawEpics.createEpics());
        };
        this.setPentoolTraitOnSelected = function () {
            return function (action$, store) { return action$
                .ofType(__WEBPACK_IMPORTED_MODULE_6__toolbox_action__["a" /* ToolboxActionType */].TOOLBOX_SELECT_TOOL)
                .filter(function (action) { return action.payload.toolName === __WEBPACK_IMPORTED_MODULE_7__toolbox_model__["a" /* ToolName */].Pentool; })
                .map(function (action) { return _this.toolboxActions.setToolTraitAction(Object(__WEBPACK_IMPORTED_MODULE_9__pentool_model__["a" /* createPentool */])()); }); };
        };
        this.zipIfHeadAnchorClicked = function () {
            return function (action$, store) { return action$
                .filter(function (action) {
                return action.type === __WEBPACK_IMPORTED_MODULE_8__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_DOWN_ON_ANCHOR
                    && action.payload.idx === 0;
            })
                .map(function (action) { return _this.pathActions.zipPathAction(action.payload.targetIn); })
                .mapTo(doneAction); }; // Preventing double dispatch
        };
    }
    PentoolEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__canvas_path_path_action__["b" /* PathActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__canvas_path_path_action__["b" /* PathActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__pentool_draw_epics__["a" /* PentoolDrawEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__pentool_draw_epics__["a" /* PentoolDrawEpics */]) === "function" && _c || Object])
    ], PentoolEpics);
    return PentoolEpics;
    var _a, _b, _c;
}());

//# sourceMappingURL=pentool.epics.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PentoolDrawEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_last__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mapTo__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeUntil__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_throttle__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_race__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_race___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_operator_race__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__canvas_anchor_anchor_action__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__canvas_path_path_action__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pentool_action__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var doneAction = { type: 'DONE', payload: undefined, meta: undefined };
var calcPositionOnCanvas = function (input, boardState) {
    var scale = boardState.scale, topLeft = boardState.topLeft;
    return {
        x: (input.x - topLeft.x) / scale,
        y: (input.y - topLeft.y) / scale,
    };
};
var PentoolDrawEpics = /** @class */ (function () {
    function PentoolDrawEpics(anchorActions, pathActions) {
        var _this = this;
        this.anchorActions = anchorActions;
        this.pathActions = pathActions;
        this.createEpics = function () {
            return [
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.addThenListenUpdateUntilAnchorPlaced()),
            ];
        };
        this.addThenListenUpdateUntilAnchorPlaced = function () {
            var addAnchorWithStore = function (store, positionKey, shouldAdjust, anchorType) {
                return function (action) {
                    var position = action.payload[positionKey];
                    if (shouldAdjust) {
                        var boardState = store.getState().canvas.get('board').toJS();
                        position = calcPositionOnCanvas(action.payload[positionKey], boardState);
                    }
                    return _this.pathActions.addAnchorAction(action.payload.targetIn, position, anchorType);
                };
            };
            var updateAnchorPosWithStore = function (store, positionKey, shouldAdjust) {
                return function (action) {
                    var position = action.payload[positionKey];
                    if (shouldAdjust) {
                        var boardState = store.getState().canvas.get('board').toJS();
                        position = calcPositionOnCanvas(action.payload[positionKey], boardState);
                    }
                    return _this.anchorActions.updatePosition(action.payload.targetIn, action.payload.idx, position);
                };
            };
            var lastAnchorType;
            return function (action$, store) { return action$
                .ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_DOWN_ON_CANVAS)
                .throttle(function () { return action$
                .ofType(__WEBPACK_IMPORTED_MODULE_14__canvas_path_path_action__["a" /* PathActionType */].PATH_ZIP_PATH)
                .switchMap(function () { return action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_DOWN_ON_CANVAS); }); })
                .map(addAnchorWithStore(store, 'absPoint', true))
                .switchMap(function () {
                return Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operator_race__["raceStatic"])(action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_UP_ON_CANVAS).take(1)
                    .map(addAnchorWithStore(store, 'absPoint', true))
                    .do(function () { return lastAnchorType = __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].LineTo; }), action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_MOVE_ON_CANVAS).take(1) // Take only the first and place an anchor
                    .map(addAnchorWithStore(store, 'absPoint', true, __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].CubicBezierCurve))
                    .do(function () { return lastAnchorType = __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].CubicBezierCurve; })
                    .switchMap(function () { return action$ // Update anchor position each move
                    .ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_MOVE_ON_CANVAS)
                    .map(updateAnchorPosWithStore(store, 'absPoint', true))
                    .map(function (action) { return _this.anchorActions.updateBezierHandle(action.payload.targetIn, action.payload.idx, action.payload.position, 'both'); }); })
                    .takeUntil(action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_UP_ON_CANVAS)))
                    .last()
                    .switchMap(function () { return action$ // For next movements
                    .ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_MOVE_ON_CANVAS)
                    .throttle(function () {
                    var lastIdx;
                    return action$
                        .ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_DOWN_ON_CANVAS)
                        .mergeMap(function (downAction) { return Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operator_race__["raceStatic"])(action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_UP_ON_CANVAS).take(1)
                        .map(addAnchorWithStore(store, 'absPoint', true))
                        .do(function () { return lastAnchorType = __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].LineTo; }), action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_MOVE_ON_CANVAS).take(1)
                        .do(function (action) { return lastIdx = action.payload.idx; })
                        .map(addAnchorWithStore(store, 'absPoint', true, __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].SmoothCurveTo))
                        .map(function (action) {
                        return lastAnchorType === __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].LineTo ?
                            _this.anchorActions.changeType(action.payload.targetIn, lastIdx - 1, __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].SmoothCurveTo) : action;
                    })
                        .switchMap(function () { return action$
                        .ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_MOVE_ON_CANVAS)
                        .map(updateAnchorPosWithStore(store, 'absPoint', true))
                        .map(function (action) { return _this.anchorActions.updateBezierHandle(action.payload.targetIn, action.payload.idx, action.payload.position); })
                        .map(function (action) {
                        var boardState = store.getState().canvas.get('board').toJS();
                        var downOnCanvas = calcPositionOnCanvas(downAction.payload.absPoint, boardState);
                        var position = {
                            x: (downOnCanvas.x * 2) - action.payload.position.x,
                            y: (downOnCanvas.y * 2) - action.payload.position.y,
                        };
                        return _this.anchorActions.updateBezierHandle(action.payload.targetIn, action.payload.idx - 1, position, 'end');
                    }); })
                        .do(function () { return lastAnchorType = __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].SmoothCurveTo; })
                        .takeUntil(action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_UP_ON_CANVAS))).last(); });
                })
                    .switchMap(function () {
                    var anchorIdx;
                    return action$
                        .ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_MOVE_ON_CANVAS)
                        .map(updateAnchorPosWithStore(store, 'absPoint', true))
                        .do(function (action) { return anchorIdx = action.payload.idx; })
                        .filter(function () {
                        return lastAnchorType === __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].CubicBezierCurve
                            || lastAnchorType === __WEBPACK_IMPORTED_MODULE_13__canvas_anchor_anchor_model__["a" /* AnchorType */].SmoothCurveTo;
                    })
                        .map(function (action) { return _this.anchorActions.updateBezierHandle(action.payload.targetIn, anchorIdx, action.payload.position, 'end'); })
                        .takeUntil(action$.ofType(__WEBPACK_IMPORTED_MODULE_15__pentool_action__["a" /* PentoolActionType */].PENTOOL_MOUSE_DOWN_ON_CANVAS));
                }); })
                    .takeUntil(action$.ofType(__WEBPACK_IMPORTED_MODULE_14__canvas_path_path_action__["a" /* PathActionType */].PATH_ZIP_PATH));
            })
                .mapTo(doneAction); };
        };
    }
    PentoolDrawEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12__canvas_anchor_anchor_action__["b" /* AnchorActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__canvas_anchor_anchor_action__["b" /* AnchorActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_14__canvas_path_path_action__["b" /* PathActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__canvas_path_path_action__["b" /* PathActions */]) === "function" && _b || Object])
    ], PentoolDrawEpics);
    return PentoolDrawEpics;
    var _a, _b;
}());

//# sourceMappingURL=pentool.draw.epics.js.map

/***/ }),
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectiontoolEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_action__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectiontool_model__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectiontoolEpics = /** @class */ (function () {
    function SelectiontoolEpics(toolboxActions) {
        var _this = this;
        this.toolboxActions = toolboxActions;
        this.createEpics = function () {
            return [
                Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(_this.setSelectiontoolTraitOnSelected()),
            ];
        };
        this.setSelectiontoolTraitOnSelected = function () {
            return function (action$, store) { return action$
                .ofType(__WEBPACK_IMPORTED_MODULE_2__toolbox_action__["a" /* ToolboxActionType */].TOOLBOX_SELECT_TOOL)
                .filter(function (action) { return action.payload.toolName === __WEBPACK_IMPORTED_MODULE_3__toolbox_model__["a" /* ToolName */].Selectiontool; })
                .map(function (action) { return _this.toolboxActions.setToolTraitAction(Object(__WEBPACK_IMPORTED_MODULE_4__selectiontool_model__["a" /* createSelectiontool */])()); }); };
        };
    }
    SelectiontoolEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object])
    ], SelectiontoolEpics);
    return SelectiontoolEpics;
    var _a;
}());

//# sourceMappingURL=selectiontool.epics.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSelectiontool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_model__ = __webpack_require__(23);



// import { SelectiontoolActions } from './selectiontool.action';
var createSelectiontool = function () {
    // const actions = new SelectiontoolActions();
    return new __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__["a" /* ToolBase */]({
        name: __WEBPACK_IMPORTED_MODULE_2__toolbox_model__["a" /* ToolName */].Selectiontool,
        listeners: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    });
};
//# sourceMappingURL=selectiontool.model.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toolboxReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvastool_canvastool_action__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvastool_canvastool_reducer__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pentool_pentool_action__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pentool_pentool_reducer__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectiontool_selectiontool_action__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectiontool_selectiontool_model__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectiontool_selectiontool_reducer__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbox_action__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toolbox_model__ = __webpack_require__(23);









var toolboxReducer = function (state, action) {
    if (state === void 0) { state = new __WEBPACK_IMPORTED_MODULE_8__toolbox_model__["b" /* ToolboxState */]({ selected: Object(__WEBPACK_IMPORTED_MODULE_5__selectiontool_selectiontool_model__["a" /* createSelectiontool */])() }); }
    switch (true) {
        case action.type in __WEBPACK_IMPORTED_MODULE_2__pentool_pentool_action__["a" /* PentoolActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_3__pentool_pentool_reducer__["a" /* pentoolReducer */])(state, action);
        case action.type in __WEBPACK_IMPORTED_MODULE_4__selectiontool_selectiontool_action__["a" /* SelectiontoolActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_6__selectiontool_selectiontool_reducer__["a" /* selectiontoolReducer */])(state, action);
        case action.type in __WEBPACK_IMPORTED_MODULE_0__canvastool_canvastool_action__["a" /* CanvastoolActionType */]:
            return Object(__WEBPACK_IMPORTED_MODULE_1__canvastool_canvastool_reducer__["a" /* canvastoolReducer */])(state, action);
    }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_7__toolbox_action__["a" /* ToolboxActionType */].TOOLBOX_SELECT_TOOL:
            return state; // Let be handled by each tool epic, will dispatch below action
        case __WEBPACK_IMPORTED_MODULE_7__toolbox_action__["a" /* ToolboxActionType */].TOOLBOX_SET_TOOL_TRAIT:
            return new __WEBPACK_IMPORTED_MODULE_8__toolbox_model__["b" /* ToolboxState */]({ selected: action.payload.tool }); // Need some way to utilise Immutablility!
    }
    return state;
};
//# sourceMappingURL=toolbox.reducer.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectiontoolActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectiontoolActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
var SelectiontoolActionType;
(function (SelectiontoolActionType) {
    SelectiontoolActionType["SELECTIONTOOL_SELECT_DRAWABLE"] = "SELECTIONTOOL_SELECT_DRAWABLE";
})(SelectiontoolActionType || (SelectiontoolActionType = {}));
var SelectiontoolActions = /** @class */ (function () {
    function SelectiontoolActions() {
        /**
         * Note:
         *
         * Here it does not need any `@dispatch()` decorator as it will only be
         * dispatched by view components, not epics
         */
        this.selectDrawableAction = function (drawable) { return ({
            type: SelectiontoolActionType.SELECTIONTOOL_SELECT_DRAWABLE,
            payload: { drawable: drawable },
            meta: undefined,
        }); };
    }
    SelectiontoolActions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SelectiontoolActions);
    return SelectiontoolActions;
}());

//# sourceMappingURL=selectiontool.action.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvastoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_action__ = __webpack_require__(25);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanvastoolComponent = /** @class */ (function (_super) {
    __extends(CanvastoolComponent, _super);
    function CanvastoolComponent(toolboxActions) {
        var _this = _super.call(this) || this;
        _this.toolboxActions = toolboxActions;
        _this.hotKey = 'h';
        _this.afterHotKeyDown = function () { _this.selectTool(); };
        _this.selectTool = function () { return _this.toolboxActions.selectToolAction(_this.context.toolName); };
        return _this;
    }
    CanvastoolComponent.prototype.setCursorAfterSelected = function () {
        this.appElementRef.nativeElement.style.cursor = '-webkit-grab';
        this.appElementRef.nativeElement.style.cursor = 'grab';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], CanvastoolComponent.prototype, "selectTool", void 0);
    CanvastoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-canvastool',
            template: __webpack_require__(374),
            styles: [__webpack_require__(375)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object])
    ], CanvastoolComponent);
    return CanvastoolComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__["b" /* ToolBaseComponent */]));

//# sourceMappingURL=canvastool.component.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectSelectiontoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_action__ = __webpack_require__(25);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DirectSelectiontoolComponent = /** @class */ (function (_super) {
    __extends(DirectSelectiontoolComponent, _super);
    function DirectSelectiontoolComponent(toolboxActions) {
        var _this = _super.call(this) || this;
        _this.toolboxActions = toolboxActions;
        _this.hotKey = 'a';
        _this.afterHotKeyDown = function () { _this.selectTool(); };
        _this.selectTool = function () { return _this.toolboxActions.selectToolAction(_this.context.toolName); };
        return _this;
    }
    DirectSelectiontoolComponent.prototype.setCursorAfterSelected = function () {
        this.appElementRef.nativeElement.style.cursor = 'url(assets/img/cursor/direct_cursor.svg) 10 9, default';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], DirectSelectiontoolComponent.prototype, "selectTool", void 0);
    DirectSelectiontoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-directtool',
            template: __webpack_require__(378),
            styles: [__webpack_require__(379)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object])
    ], DirectSelectiontoolComponent);
    return DirectSelectiontoolComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__["b" /* ToolBaseComponent */]));

//# sourceMappingURL=directtool.component.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PentoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_action__ = __webpack_require__(25);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PentoolComponent = /** @class */ (function (_super) {
    __extends(PentoolComponent, _super);
    function PentoolComponent(toolboxActions) {
        var _this = _super.call(this) || this;
        _this.toolboxActions = toolboxActions;
        _this.hotKey = 'p';
        _this.afterHotKeyDown = function () { _this.selectTool(); };
        _this.selectTool = function () { return _this.toolboxActions.selectToolAction(_this.context.toolName); };
        return _this;
    }
    PentoolComponent.prototype.setCursorAfterSelected = function () {
        this.appElementRef.nativeElement.style.cursor = 'url(assets/img/cursor/pentool_cursor.svg) 10 5, pointer';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], PentoolComponent.prototype, "selectTool", void 0);
    PentoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-pentool',
            template: __webpack_require__(382),
            styles: [__webpack_require__(383)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object])
    ], PentoolComponent);
    return PentoolComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__["b" /* ToolBaseComponent */]));

//# sourceMappingURL=pentool.component.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectiontoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_action__ = __webpack_require__(25);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectiontoolComponent = /** @class */ (function (_super) {
    __extends(SelectiontoolComponent, _super);
    function SelectiontoolComponent(toolboxActions) {
        var _this = _super.call(this) || this;
        _this.toolboxActions = toolboxActions;
        _this.hotKey = 'v';
        _this.afterHotKeyDown = function () { _this.selectTool(); };
        _this.selectTool = function () { return _this.toolboxActions.selectToolAction(_this.context.toolName); };
        return _this;
    }
    SelectiontoolComponent.prototype.setCursorAfterSelected = function () {
        this.appElementRef.nativeElement.style.cursor = 'url(assets/img/cursor/selectiontool_cursor.svg) 10 9, default';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], SelectiontoolComponent.prototype, "selectTool", void 0);
    SelectiontoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-selectiontool',
            template: __webpack_require__(386),
            styles: [__webpack_require__(387)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toolbox_action__["b" /* ToolboxActions */]) === "function" && _a || Object])
    ], SelectiontoolComponent);
    return SelectiontoolComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__tool_tool_base_component__["b" /* ToolBaseComponent */]));

//# sourceMappingURL=selectiontool.component.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolDirective = /** @class */ (function () {
    function ToolDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ToolDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appToolHost]',
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
    ], ToolDirective);
    return ToolDirective;
    var _a;
}());

//# sourceMappingURL=tool.directive.js.map

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(231);


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments__ = __webpack_require__(414);




if (__WEBPACK_IMPORTED_MODULE_3_environments__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polyfills__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reflect_metadata__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_zone_js_dist_zone_mix__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_zone_js_dist_zone_mix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__canvas_canvas_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__color_color_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_store_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toolbox_toolbox_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_electron_service__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_9__canvas_canvas_module__["a" /* CanvasModule */],
                __WEBPACK_IMPORTED_MODULE_11__store_store_module__["a" /* StoreModule */],
                __WEBPACK_IMPORTED_MODULE_12__toolbox_toolbox_module__["a" /* ToolboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__color_color_module__["a" /* ColorModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__providers_electron_service__["a" /* ElectronService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(electronService) {
        this.electronService = electronService;
        if (electronService.isElectron()) {
            console.log('Mode electron');
            // Check if electron is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.ipcRenderer);
            // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.childProcess);
        }
        else {
            console.log('Mode web');
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('root'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], AppComponent.prototype, "root", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(281),
            styles: [__webpack_require__(282)],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div #root class=\"app\">\n  <app-draw-canvas></app-draw-canvas>\n  <app-toolbox></app-toolbox>\n  <div class=\"app__rightSide\">\n    <app-color-picker></app-color-picker>\n  </div>\n</div>";

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".app {\n  background: linear-gradient(10deg, #EBEBF0, #F2F2F6);\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: -100; }\n  .app .app__rightSide {\n    position: fixed;\n    top: 80px;\n    right: 0;\n    height: calc(100vh - 80px);\n    width: 300px;\n    padding: 10px;\n    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.2);\n    border: 1px solid white;\n    background: rgba(250, 250, 252, 0.9);\n    cursor: default; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anchor_anchor_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boundingbox_boundingbox_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_action__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__canvas_epics__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drawable_drawable_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drawable_drawable_directive__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__group_group_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__path_path_action__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__path_path_component__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CanvasModule = /** @class */ (function () {
    function CanvasModule() {
    }
    CanvasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__anchor_anchor_module__["a" /* AnchorModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__path_path_component__["a" /* PathComponent */],
                __WEBPACK_IMPORTED_MODULE_9__group_group_component__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__canvas_component__["a" /* CanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_7__drawable_drawable_component__["a" /* DrawableComponent */],
                __WEBPACK_IMPORTED_MODULE_8__drawable_drawable_directive__["a" /* DrawableDirective */],
                __WEBPACK_IMPORTED_MODULE_3__boundingbox_boundingbox_component__["a" /* BoundingBoxComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__group_group_component__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__path_path_component__["a" /* PathComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__path_path_action__["b" /* PathActions */],
                __WEBPACK_IMPORTED_MODULE_4__canvas_action__["b" /* CanvasActions */],
                __WEBPACK_IMPORTED_MODULE_6__canvas_epics__["a" /* CanvasEpics */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__canvas_component__["a" /* CanvasComponent */],
            ],
        })
    ], CanvasModule);
    return CanvasModule;
}());

//# sourceMappingURL=canvas.module.js.map

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anchor_action__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anchor_container_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anchor_directive__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_basic_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bezier_bezier_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__smooth_smooth_component__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AnchorModule = /** @class */ (function () {
    function AnchorModule() {
    }
    AnchorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__bezier_bezier_component__["a" /* BezierAnchorComponent */],
                __WEBPACK_IMPORTED_MODULE_5__basic_basic_component__["a" /* BasicAnchorComponent */],
                __WEBPACK_IMPORTED_MODULE_3__anchor_container_component__["a" /* AnchorComponent */],
                __WEBPACK_IMPORTED_MODULE_4__anchor_directive__["a" /* AnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_7__smooth_smooth_component__["a" /* SmoothAnchorComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__bezier_bezier_component__["a" /* BezierAnchorComponent */],
                __WEBPACK_IMPORTED_MODULE_5__basic_basic_component__["a" /* BasicAnchorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__smooth_smooth_component__["a" /* SmoothAnchorComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__anchor_action__["b" /* AnchorActions */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__anchor_container_component__["a" /* AnchorComponent */],
            ],
        })
    ], AnchorModule);
    return AnchorModule;
}());

//# sourceMappingURL=anchor.module.js.map

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = "<div #anchor class=\"anchor\" [ngStyle]=\"style\"></div>";

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".anchor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 5px;\n  height: 5px;\n  border: 2px solid rgba(255, 0, 68, 0.5);\n  transition: border .15s ease;\n  border-radius: 2px; }\n  .anchor:hover {\n    border: 2px solid #ff0044;\n    transition: border .05s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = "<div #anchor class=\"anchor\" [ngStyle]=\"style\"></div>";

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".anchor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 5px;\n  height: 5px;\n  border: 2px solid rgba(255, 0, 68, 0.5);\n  transition: border .15s ease;\n  border-radius: 2px; }\n  .anchor:hover {\n    border: 2px solid #ff0044;\n    transition: border .1s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = "<div #anchor class=\"anchor\" [ngStyle]=\"style\"></div>\n<div #handleAnchor class=\"handle-anchor\" [ngStyle]=\"handleStyle\" *ngFor=\"let handleStyle of handleStyles\"></div>\n<svg class=\"handle-lines\">\n\t<svg:path *ngFor=\"let handle of handles\" [attr.d]=\"handle.path\" class=\"handle-lines__line\"></svg:path>\n</svg>";

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".anchor {\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 5px;\n  height: 5px;\n  border: 1px solid rgba(255, 0, 68, 0.5);\n  transition: border .15s ease;\n  border-radius: 2px; }\n  .anchor:hover {\n    border: 1px solid #ff0044;\n    transition: border .1s ease; }\n\n.handle-lines {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n  .handle-lines .handle-lines__line {\n    fill: none;\n    stroke: rgba(255, 128, 128, 0.5);\n    stroke-width: 1px; }\n\n.handle-anchor {\n  border: 1px solid #5856d6;\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = "<ng-template appAnchorHost></ng-template>";

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundingBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_reducer__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drawable_drawable_model__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var initBoundingBox = { top: Infinity, bottom: -Infinity, left: Infinity, right: -Infinity };
var calculatePathBound = function (path) {
    return path.children.reduce(function (accBound, anchor) { return ({
        top: Math.min(anchor.absPosition.y, accBound.top),
        bottom: Math.max(anchor.absPosition.y, accBound.bottom),
        right: Math.max(anchor.absPosition.x, accBound.right),
        left: Math.min(anchor.absPosition.x, accBound.left),
    }); }, initBoundingBox);
};
var BoundingBoxComponent = /** @class */ (function () {
    function BoundingBoxComponent() {
        var _this = this;
        this.getBasePath = function () { return ['canvas']; };
        this.boardSize$.subscribe(function (size) { return _this.initWithCanvas = {
            top: size.height, bottom: 0,
            left: size.width, right: 0,
        }; });
    }
    Object.defineProperty(BoundingBoxComponent.prototype, "boundingBox$", {
        get: function () {
            var _this = this;
            return this.selected$
                .mergeMap(function (selected) {
                return _this.root$.map(function (root) {
                    _this.show = false;
                    return selected.reduce(function (accBound, pathFromRoot) {
                        var drawable = root.getIn(pathFromRoot.toJS());
                        _this.show = true;
                        switch (drawable.type) {
                            case __WEBPACK_IMPORTED_MODULE_5__drawable_drawable_model__["b" /* DrawableType */].Anchor:
                                return {
                                    top: Math.min(drawable.absPosition.y, accBound.top),
                                    bottom: Math.max(drawable.absPosition.y, accBound.bottom),
                                    right: Math.max(drawable.absPosition.x, accBound.right),
                                    left: Math.min(drawable.absPosition.x, accBound.left),
                                };
                            case __WEBPACK_IMPORTED_MODULE_5__drawable_drawable_model__["b" /* DrawableType */].Path:
                                var pathBound = calculatePathBound(drawable);
                                return {
                                    top: Math.min(pathBound.top, accBound.top),
                                    bottom: Math.max(pathBound.bottom, accBound.bottom),
                                    right: Math.max(pathBound.right, accBound.right),
                                    left: Math.min(pathBound.left, accBound.left),
                                };
                            default: return accBound;
                        }
                    }, _this.initWithCanvas);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBoxComponent.prototype, "width$", {
        get: function () { return this.boundingBox$.map(function (bb) { return Math.abs(bb.right - bb.left); }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBoxComponent.prototype, "height$", {
        get: function () { return this.boundingBox$.map(function (bb) { return Math.abs(bb.bottom - bb.top); }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBoxComponent.prototype, "top$", {
        get: function () { return this.boundingBox$.map(function (bb) { return bb.top; }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBoxComponent.prototype, "left$", {
        get: function () { return this.boundingBox$.map(function (bb) { return bb.left; }); },
        enumerable: true,
        configurable: true
    });
    BoundingBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])('selected'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], BoundingBoxComponent.prototype, "selected$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])('root'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], BoundingBoxComponent.prototype, "root$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])(['board', 'dimension']),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], BoundingBoxComponent.prototype, "boardSize$", void 0);
    BoundingBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getBasePath',
            localReducer: __WEBPACK_IMPORTED_MODULE_4__canvas_reducer__["a" /* canvasReducer */],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-bounding-box',
            template: __webpack_require__(301),
            styles: [__webpack_require__(302)],
        }),
        __metadata("design:paramtypes", [])
    ], BoundingBoxComponent);
    return BoundingBoxComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=boundingbox.component.js.map

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anchorReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anchor_action__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_core__ = __webpack_require__(295);


var anchorReducer = function (state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__anchor_action__["a" /* AnchorActionType */].ANCHOR_UPDATE_POSITION:
            var updatePositionAction = action;
            return __WEBPACK_IMPORTED_MODULE_1__anchor_core__["c" /* updatePosition */](state, updatePositionAction.payload.targetIn, updatePositionAction.payload.idx, updatePositionAction.payload.position);
        case __WEBPACK_IMPORTED_MODULE_0__anchor_action__["a" /* AnchorActionType */].ANCHOR_CHANGE_TYPE:
            var changeTypeAction = action;
            return __WEBPACK_IMPORTED_MODULE_1__anchor_core__["a" /* changeType */](state, changeTypeAction.payload.targetIn, changeTypeAction.payload.idx, changeTypeAction.payload.anchorType);
        case __WEBPACK_IMPORTED_MODULE_0__anchor_action__["a" /* AnchorActionType */].ANCHOR_UPDATE_BEZIER_HANDLE:
            var updateBezierAction = action;
            return __WEBPACK_IMPORTED_MODULE_1__anchor_core__["b" /* updateBezierHandle */](state, updateBezierAction.payload.targetIn, updateBezierAction.payload.idx, updateBezierAction.payload.position, updateBezierAction.payload.which);
    }
    return state;
};
//# sourceMappingURL=anchor.reducer.js.map

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updatePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateBezierHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anchor_factory__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_model__ = __webpack_require__(22);


var updatePosition = function (state, targetIn, idx, newPosition) {
    return state.updateIn(['root'].concat(targetIn), function (accessedPath) {
        return accessedPath.updateAnchor(idx, newPosition);
    });
};
var changeType = function (state, targetIn, idx, anchorType) {
    return state.updateIn(['root'].concat(targetIn), function (accessedPath) {
        var anchor = __WEBPACK_IMPORTED_MODULE_0__anchor_factory__["a" /* AnchorFactory */].createAnchor(anchorType, accessedPath.children.get(idx).toObject());
        return accessedPath.replaceAnchor(idx, anchor);
    });
};
var updateBezierHandle = function (state, targetIn, idx, newPosition, which) {
    if (which === void 0) { which = 'start'; }
    return state.updateIn(['root'].concat(targetIn), function (accessedPath) {
        var anchor = accessedPath.children.get(idx);
        switch (anchor.anchorType) {
            case __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].QuadraticBezierCurve:
                return accessedPath.replaceAnchor(idx, anchor.updateHandle(newPosition));
            case __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].CubicBezierCurve:
                return accessedPath.replaceAnchor(idx, anchor.updateHandle(newPosition, which));
            case __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].SmoothCurveTo:
                return accessedPath.replaceAnchor(idx, anchor.updateHandle(newPosition));
            default:
                console.error("Anchor accessed by " + targetIn + " with index " + idx + " is not a Bezier Anchor");
        }
    });
};
//# sourceMappingURL=anchor.core.js.map

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuadraticBezierAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubicBezierAnchor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_model__ = __webpack_require__(22);
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


/**
 * It might be better to use composition rather than inheritance
 * However, it will be more difficult to make use of Immutable methods
 */
var QuadraticBezierAnchor = /** @class */ (function (_super) {
    __extends(QuadraticBezierAnchor, _super);
    function QuadraticBezierAnchor(params) {
        var _this = _super.call(this, params) || this;
        _this.setRouteParentPath = function (path) {
            return new QuadraticBezierAnchor({
                idx: _this.idx,
                routeParentPath: path,
                absPosition: _this.absPosition,
                handlePosition: _this.handlePosition,
            });
        };
        _this.setPosition = function (absPosition) {
            return new QuadraticBezierAnchor({
                idx: _this.idx,
                routeParentPath: _this.routeParentPath,
                absPosition: new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](absPosition),
                handlePosition: _this.handlePosition,
            });
        };
        _this.updateHandle = function (absPosition) {
            return new QuadraticBezierAnchor(__assign({}, _this.toObject(), { handlePosition: new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](absPosition) }));
        };
        _this.toPath = function () {
            return "\n\t\t" + _this.anchorType + "\n\t\t" + _this.handlePosition.x + ", " + _this.handlePosition.y + "\n\t\t" + _this.absPosition.x + ", " + _this.absPosition.y + "\n\t\t";
        };
        _this.anchorType = __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].QuadraticBezierCurve;
        _this.handlePosition = params.handlePosition || _this.absPosition;
        return _this;
    }
    Object.defineProperty(QuadraticBezierAnchor.prototype, "transformStyle", {
        get: function () {
            return "translate(" + this.absPosition.x + "px, " + this.absPosition.y + "px)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuadraticBezierAnchor.prototype, "handleLines", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    return QuadraticBezierAnchor;
}(__WEBPACK_IMPORTED_MODULE_1__anchor_model__["b" /* BaseAnchor */]));

/**
 * It might be better to use composition rather than inheritance
 * However, it will be more difficult to make use of Immutable methods
 */
var CubicBezierAnchor = /** @class */ (function (_super) {
    __extends(CubicBezierAnchor, _super);
    function CubicBezierAnchor(params) {
        var _this = _super.call(this, params) || this;
        _this.setRouteParentPath = function (path) {
            return new CubicBezierAnchor({
                idx: _this.idx,
                absPosition: _this.absPosition,
                routeParentPath: path,
                handlePositions: _this.handlePositions,
            });
        };
        _this.setPosition = function (absPosition) {
            return new CubicBezierAnchor({
                idx: _this.idx,
                absPosition: new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](absPosition),
                routeParentPath: _this.routeParentPath,
                handlePositions: _this.handlePositions,
            });
        };
        _this.updateHandle = function (absPosition, which) {
            if (which === void 0) { which = 'start'; }
            var position = new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](absPosition);
            return new CubicBezierAnchor({
                idx: _this.idx,
                absPosition: _this.absPosition,
                routeParentPath: _this.routeParentPath,
                handlePositions: __assign({}, _this.handlePositions, (_a = {}, _a[which === 'both' ? 'start' : which] = position, _a[which === 'both' ? 'end' : which] = position, _a)),
            });
            var _a;
        };
        _this.toPath = function () {
            return "\n\t\t" + _this.anchorType + "\n\t\t" + _this.handlePositions.start.x + ", " + _this.handlePositions.start.y + "\n\t\t" + _this.handlePositions.end.x + ", " + _this.handlePositions.end.y + "\n\t\t" + _this.absPosition.x + ", " + _this.absPosition.y + "\n\t\t";
        };
        _this.anchorType = __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].CubicBezierCurve;
        _this.handlePositions = params.handlePositions || { start: _this.absPosition, end: _this.absPosition };
        return _this;
    }
    Object.defineProperty(CubicBezierAnchor.prototype, "transformStyle", {
        get: function () {
            return "translate(" + this.absPosition.x + "px, " + this.absPosition.y + "px)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CubicBezierAnchor.prototype, "handleLines", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    return CubicBezierAnchor;
}(__WEBPACK_IMPORTED_MODULE_1__anchor_model__["b" /* BaseAnchor */]));

//# sourceMappingURL=bezier.model.js.map

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SmoothQuadraticAnchor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_basic_model__ = __webpack_require__(200);
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



/**
 * It might be better to use composition rather than inheritance
 * However, it will be more difficult to make use of Immutable methods
 */
var SmoothAnchor = /** @class */ (function (_super) {
    __extends(SmoothAnchor, _super);
    function SmoothAnchor(params) {
        var _this = _super.call(this, params) || this;
        _this.setRouteParentPath = function (path) {
            return new SmoothAnchor({
                idx: _this.idx,
                absPosition: _this.absPosition,
                routeParentPath: path,
                handlePosition: _this.handlePosition,
            });
        };
        _this.setPosition = function (absPosition) {
            return new SmoothAnchor({
                idx: _this.idx,
                routeParentPath: _this.routeParentPath,
                absPosition: new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](absPosition),
                handlePosition: _this.handlePosition,
            });
        };
        _this.updateHandle = function (absPosition) {
            return new SmoothAnchor(__assign({}, _this.toObject(), { handlePosition: new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](absPosition) }));
        };
        _this.toPath = function () {
            return "\n\t\t" + _this.anchorType + "\n\t\t" + _this.handlePosition.x + ", " + _this.handlePosition.y + "\n\t\t" + _this.absPosition.x + ", " + _this.absPosition.y + "\n\t\t";
        };
        _this.anchorType = __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].SmoothCurveTo;
        _this.handlePosition = params.handlePosition || _this.absPosition;
        return _this;
    }
    Object.defineProperty(SmoothAnchor.prototype, "transformStyle", {
        get: function () {
            return "translate(" + this.absPosition.x + "px, " + this.absPosition.y + "px)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmoothAnchor.prototype, "handleLines", {
        get: function () {
            return [
                {
                    path: "M" + this.absPosition.x + ", " + this.absPosition.y + " L" + this.handlePosition.x + ", " + this.handlePosition.y,
                    headTransformStyle: "translate(" + this.handlePosition.x + "px, " + this.handlePosition.y + "px)",
                },
                {
                    path: "\n\t\t\t\tM" + this.absPosition.x + ", " + this.absPosition.y + "\n\t\t\t\tL" + ((this.absPosition.x * 2) - this.handlePosition.x) + ", " + ((this.absPosition.y * 2) - this.handlePosition.y),
                    headTransformStyle: "\n\t\t\t\ttranslate(" + ((this.absPosition.x * 2) - this.handlePosition.x) + "px, " + ((this.absPosition.y * 2) - this.handlePosition.y) + "px)\n\t\t\t\t",
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    return SmoothAnchor;
}(__WEBPACK_IMPORTED_MODULE_1__anchor_model__["b" /* BaseAnchor */]));

var SmoothQuadraticAnchor = /** @class */ (function (_super) {
    __extends(SmoothQuadraticAnchor, _super);
    function SmoothQuadraticAnchor(params) {
        return _super.call(this, __assign({}, params, { anchorType: __WEBPACK_IMPORTED_MODULE_1__anchor_model__["a" /* AnchorType */].SmoothQuadraticBezierCurveTo })) || this;
    }
    return SmoothQuadraticAnchor;
}(__WEBPACK_IMPORTED_MODULE_2__basic_basic_model__["a" /* BasicAnchor */]));

//# sourceMappingURL=smooth.model.js.map

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateTopLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateMoved; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_model__ = __webpack_require__(34);

var MIN_CANVAS_SCALE = 0.2;
var MAX_CANVAS_SCALE = 2;
var updateTopLeft = function (state, position) {
    return state.setIn(['board', 'topLeft'], new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](position));
};
var updateScale = function (state, change) {
    return state.updateIn(['board', 'scale'], function (scale) { return (Math.min(Math.max(scale + change, MIN_CANVAS_SCALE), MAX_CANVAS_SCALE)); });
};
var updateMoved = function (state, position) {
    return state.setIn(['board', 'moved'], new __WEBPACK_IMPORTED_MODULE_0__canvas_model__["c" /* Position */](position));
};
//# sourceMappingURL=canvas.core.js.map

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pathReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path_action__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_core__ = __webpack_require__(300);


var pathReducer = function (state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__path_action__["a" /* PathActionType */].PATH_ADD_ANCHOR:
            var addAction = action;
            return __WEBPACK_IMPORTED_MODULE_1__path_core__["a" /* addAnchor */](state, addAction.payload.targetIn, addAction.payload.anchorPosition, addAction.payload.anchorType);
        case __WEBPACK_IMPORTED_MODULE_0__path_action__["a" /* PathActionType */].PATH_REMOVE_ANCHOR:
            var removeAction = action;
            return __WEBPACK_IMPORTED_MODULE_1__path_core__["b" /* removeAnchor */](state, removeAction.payload.targetIn, removeAction.payload.idx);
        case __WEBPACK_IMPORTED_MODULE_0__path_action__["a" /* PathActionType */].PATH_REMOVE_LAST_ANCHOR:
            var removeLastAction = action;
            return __WEBPACK_IMPORTED_MODULE_1__path_core__["c" /* removeLastAnhcor */](state, removeLastAction.payload);
        case __WEBPACK_IMPORTED_MODULE_0__path_action__["a" /* PathActionType */].PATH_ZIP_PATH:
            var zipAction = action;
            return __WEBPACK_IMPORTED_MODULE_1__path_core__["d" /* zipPath */](state, zipAction.payload);
    }
    return state;
};
//# sourceMappingURL=path.reducer.js.map

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeLastAnhcor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return zipPath; });
var addAnchor = function (state, targetIn, anchorPosition, anchorType) {
    return state.updateIn(['root'].concat(targetIn), function (accessedPath) {
        return accessedPath.addAnchor(anchorPosition, anchorType);
    });
};
var removeAnchor = function (state, targetIn, idx) {
    return state.updateIn(['root'].concat(targetIn), function (accessedPath) {
        return accessedPath.removeAnchor(idx);
    });
};
var removeLastAnhcor = function (state, targetIn) {
    return state.updateIn(['root'].concat(targetIn), function (accessedPath) {
        return accessedPath.removeLastAnchor();
    });
};
var zipPath = function (state, targetIn) {
    return state.updateIn(['root'].concat(targetIn), function (accessedPath) {
        return accessedPath.zip();
    });
};
//# sourceMappingURL=path.core.js.map

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"boundingBox\" [ngClass]=\"{ display: show ? 'unset' : 'none' }\">\n  <svg:rect\n    class=\"boundingBox__rect\"\n    [attr.width]=\"width$ | async\"\n    [attr.height]=\"height$ | async\"\n    [attr.y]=\"top$ | async\"\n    [attr.x]=\"left$ | async\"></svg:rect>\n</svg>";

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".boundingBox {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n  .boundingBox__rect {\n    fill: none;\n    stroke: rgba(255, 204, 0, 0.5);\n    stroke-width: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__canvas_action__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__canvas_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__path_path_model__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DAMP_SCROLL = 200;
var DEBOUNCE_TIME = 20;
var filterListener = function (listeners$) {
    return listeners$.map(function (listeners) { return listeners
        .filter(function (listener) { return listener.target === 'canvas'; }); });
};
var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(rd, canvasActions) {
        var _this = this;
        this.rd = rd;
        this.canvasActions = canvasActions;
        this.listeners = [];
        this.dispatchRegisteredAction = function (handler, e) {
            return handler(e, new __WEBPACK_IMPORTED_MODULE_8__path_path_model__["a" /* Path */]({
                routeParentPath: Object(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]),
                idx: 0,
                absPosition: new __WEBPACK_IMPORTED_MODULE_7__canvas_model__["c" /* Position */]({ x: 0, y: 0 }),
            })); // Still hardcoded, update later when there is 'selectedDrawable' state
        };
        this.updateCanvasPosition = function () {
            return _this.canvasActions.updateTopLeft({
                x: _this.canvasRef.nativeElement.getBoundingClientRect().left,
                y: _this.canvasRef.nativeElement.getBoundingClientRect().top,
            });
        };
        this.updateCanvasScale = function (e) {
            e.preventDefault();
            return _this.canvasActions.updateScale(e.deltaY / DAMP_SCROLL);
        };
    }
    Object.defineProperty(CanvasComponent.prototype, "canvasStyle$", {
        get: function () {
            var style$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].combineLatest(this.scale$, this.moved$);
            return style$.map(function (styles) { return ({
                transform: "\n\t\t\ttranslate(" + styles[1].x + "px, " + styles[1].y + "px)\n\t\t\tscale(" + styles[0] + ")\n\t\t\t",
            }); });
        },
        enumerable: true,
        configurable: true
    });
    CanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Update canvas board state position; listen on change window size
        this.updateCanvasPosition();
        this.rd.listen('window', 'resize', function (_e) { _this.updateCanvasPosition(); });
        // Update canvas board state scale (and position too after delay)
        this.rd.listen('window', 'wheel', function (e) { return e.preventDefault(); });
        this.rd.listen(this.canvasRef.nativeElement, 'wheel', function (e) {
            _this.updateCanvasScale(e);
            window.clearTimeout(_this.timeoutId);
            _this.timeoutId = window.setTimeout(function () {
                _this.updateCanvasPosition();
            }, DEBOUNCE_TIME);
        });
        // Attach listeners as dictated by toolbox
        this.listeners$.subscribe(function (listeners) {
            // clear listener from pevious tool
            _this.listeners.forEach(function (listenerToDestroy) { return listenerToDestroy(); });
            listeners.forEach(function (listener) {
                _this.listeners.push(_this.rd.listen(_this.canvasRef.nativeElement, listener.name, function (e) { return _this.dispatchRegisteredAction(listener.handler, e); }));
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], CanvasComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])(['canvas', 'root']),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], CanvasComponent.prototype, "root$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])(['canvas', 'board', 'scale']),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], CanvasComponent.prototype, "scale$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])(['canvas', 'board', 'moved']),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _d || Object)
    ], CanvasComponent.prototype, "moved$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select$"])(['toolbox', 'selected', 'listeners'], filterListener),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _f || Object)
    ], CanvasComponent.prototype, "listeners$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], CanvasComponent.prototype, "dispatchRegisteredAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], CanvasComponent.prototype, "updateCanvasPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], CanvasComponent.prototype, "updateCanvasScale", void 0);
    CanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-draw-canvas',
            template: __webpack_require__(307),
            styles: [__webpack_require__(308)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated,
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__canvas_action__["b" /* CanvasActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__canvas_action__["b" /* CanvasActions */]) === "function" && _h || Object])
    ], CanvasComponent);
    return CanvasComponent;
    var _a, _b, _c, _d, _f, _g, _h;
}());

//# sourceMappingURL=canvas.component.js.map

/***/ }),
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */
/***/ (function(module, exports) {

module.exports = "<div #canvas class=\"draw-canvas\" [ngStyle]=\"canvasStyle$ | async\">\n\t<app-drawable [drawable]=\"drawable\" *ngFor=\"let drawable of (root$ | async)\"></app-drawable>\n\t<app-bounding-box></app-bounding-box>\n</div>\n";

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".draw-canvas {\n  position: relative;\n  width: 800px;\n  height: 600px;\n  background: white;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  margin-left: calc(50% - 500px);\n  margin-right: calc(50% - 300px);\n  margin-top: calc(50vh - 300px);\n  user-select: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor_anchor_container_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_group_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path_path_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drawable_directive__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drawable_model__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var mappings = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_5__drawable_model__["b" /* DrawableType */].Path] = __WEBPACK_IMPORTED_MODULE_3__path_path_component__["a" /* PathComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_5__drawable_model__["b" /* DrawableType */].Anchor] = __WEBPACK_IMPORTED_MODULE_1__anchor_anchor_container_component__["a" /* AnchorComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_5__drawable_model__["b" /* DrawableType */].Group] = __WEBPACK_IMPORTED_MODULE_2__group_group_component__["a" /* GroupComponent */],
    _a);
var getComponentType = function (typeName) {
    var type = mappings[typeName];
    return type;
};
var DrawableComponent = /** @class */ (function () {
    function DrawableComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DrawableComponent.prototype.ngOnInit = function () {
        if (this.drawable.type) {
            var drawableType = getComponentType(this.drawable.type);
            var factory = this.componentFactoryResolver.resolveComponentFactory(drawableType);
            this.componentRef = this.drawableHost.createComponent(factory);
            this.instance = this.componentRef.instance;
            this.instance.drawable = this.drawable;
        }
    };
    DrawableComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = undefined;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__drawable_directive__["a" /* DrawableDirective */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
    ], DrawableComponent.prototype, "drawableHost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__drawable_model__["a" /* Drawable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__drawable_model__["a" /* Drawable */]) === "function" && _b || Object)
    ], DrawableComponent.prototype, "drawable", void 0);
    DrawableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drawable',
            template: __webpack_require__(323),
            styles: [__webpack_require__(324)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _c || Object])
    ], DrawableComponent);
    return DrawableComponent;
    var _a, _b, _c;
}());

var _a;
//# sourceMappingURL=drawable.component.js.map

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = "<p>\n  group works!\n</p>\n";

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = "<div class=\"path\">\n  <svg class=\"path__line\">\n    <svg:path [attr.d]=\"drawable.toPath()\"></svg:path>\n  </svg>\n  <div class=\"path__anchorGroup\">\n    <app-anchor *ngFor=\"let anchor of drawable.children\" [drawable]=\"anchor\"></app-anchor>\n  </div>\n</div>";

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".path {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  .path .path__line {\n    fill: #888;\n    stroke: #80F;\n    stroke-width: 1px;\n    width: 100%;\n    height: 100%; }\n  .path .path__anchorGroup {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = "<ng-template appDrawableHost></ng-template>";

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_epics__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opacity_opacity_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rim_rim_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slider_slider_action__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slider_slider_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stroke_stroke_component__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ColorModule = /** @class */ (function () {
    function ColorModule() {
    }
    ColorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__rim_rim_component__["a" /* RimComponent */],
                __WEBPACK_IMPORTED_MODULE_7__slider_slider_component__["a" /* SliderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__color_component__["a" /* ColorPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__opacity_opacity_component__["a" /* OpacityComponent */],
                __WEBPACK_IMPORTED_MODULE_8__stroke_stroke_component__["a" /* StrokeComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__color_epics__["a" /* ColorPickerEpics */],
                __WEBPACK_IMPORTED_MODULE_6__slider_slider_action__["b" /* SliderActions */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__color_component__["a" /* ColorPickerComponent */],
            ],
        })
    ], ColorModule);
    return ColorModule;
}());

//# sourceMappingURL=color.module.js.map

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_reducer__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.getBasePath = function () { return ['color']; };
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])('selected'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], ColorPickerComponent.prototype, "selected$", void 0);
    ColorPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getBasePath',
            localReducer: __WEBPACK_IMPORTED_MODULE_3__color_reducer__["a" /* colorPickerReducer */],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-color-picker',
            template: __webpack_require__(335),
            styles: [__webpack_require__(336)],
        }),
        __metadata("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
    var _a;
}());

//# sourceMappingURL=color.component.js.map

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rim_rim_model__ = __webpack_require__(162);
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


var initColorPickerState = { selected: __WEBPACK_IMPORTED_MODULE_1__rim_rim_model__["a" /* ColorAttribute */].Fill, rim: new __WEBPACK_IMPORTED_MODULE_1__rim_rim_model__["b" /* RimState */]() };
var ColorPickerState = /** @class */ (function (_super) {
    __extends(ColorPickerState, _super);
    function ColorPickerState(state) {
        if (state === void 0) { state = initColorPickerState; }
        return _super.call(this, state) || this;
    }
    return ColorPickerState;
}(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])(initColorPickerState)));

//# sourceMappingURL=color.model.js.map

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpacityActionType; });
var OpacityActionType;
(function (OpacityActionType) {
})(OpacityActionType || (OpacityActionType = {}));
//# sourceMappingURL=opacity.action.js.map

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return opacityReducer; });
var opacityReducer = function (state, action) {
    return state;
};
//# sourceMappingURL=opacity.reducer.js.map

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RimActionType; });
var RimActionType;
(function (RimActionType) {
})(RimActionType || (RimActionType = {}));
//# sourceMappingURL=rim.action.js.map

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rimReducer; });
var rimReducer = function (state, action) {
    return state;
};
//# sourceMappingURL=rim.reducer.js.map

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sliderReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_action__ = __webpack_require__(86);

var sliderReducer = function (state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__slider_action__["a" /* SliderActionType */].SLIDER_CHANGE_VALUE_BY_CHANNEL:
            var payload_1 = action.payload;
            return state.updateIn(['rim', payload_1.attribute, 'color'], function (color) { return color.set(payload_1.channel, payload_1.value); });
    }
    return state;
};
//# sourceMappingURL=slider.reducer.js.map

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrokeActionType; });
var StrokeActionType;
(function (StrokeActionType) {
})(StrokeActionType || (StrokeActionType = {}));
//# sourceMappingURL=stroke.action.js.map

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strokeReducer; });
var strokeReducer = function (state, action) {
    return state;
};
//# sourceMappingURL=stroke.reducer.js.map

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = "<div class=\"colorPicker\">\n  <app-rim-color [selected]=\"selected$ | async\"></app-rim-color>\n  <div class=\"picker__sliderGroup\">\n    <app-slider-color *ngFor=\"let channel of ['r', 'g', 'b']\" [channel]=\"channel\" [selected]=\"selected$ | async\"></app-slider-color>\n  </div>\n</div>\n<app-slider-opacity></app-slider-opacity>\n<app-stroke-width-slider></app-stroke-width-slider>";

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".colorPicker {\n  width: calc(100% - 10px);\n  height: 200px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 50px -15px rgba(0, 0, 0, 0.4);\n  margin: 5px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: nowrap; }\n  .colorPicker .picker__sliderGroup {\n    max-width: 80%;\n    width: 80%;\n    display: flex;\n    flex-flow: column;\n    justify-content: space-around;\n    align-items: center;\n    background: rgba(250, 250, 252, 0.85);\n    padding: 50px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpacityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpacityComponent = /** @class */ (function () {
    function OpacityComponent() {
    }
    OpacityComponent.prototype.ngOnInit = function () {
    };
    OpacityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slider-opacity',
            template: __webpack_require__(338),
            styles: [__webpack_require__(339)],
        }),
        __metadata("design:paramtypes", [])
    ], OpacityComponent);
    return OpacityComponent;
}());

//# sourceMappingURL=opacity.component.js.map

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_reducer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rim_rim_model__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RimComponent = /** @class */ (function () {
    function RimComponent() {
        /**
         * An alternative is ['color', 'rim']
         *
         * But, since it will create problem with sub reducer (state get by getBasePath is passed to the reducer)
         * it create complication in the reducer, and does not adhere to existing implementations
         */
        this.getBasePath = function () { return ['color']; };
    }
    Object.defineProperty(RimComponent.prototype, "fillColor$", {
        get: function () {
            return this.rim$.map(function (rim) { return rim.fill.color.toRGBString(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RimComponent.prototype, "outlineColor$", {
        get: function () {
            return this.rim$.map(function (rim) { return rim.outline.color.toRGBString(); });
        },
        enumerable: true,
        configurable: true
    });
    RimComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__rim_rim_model__["a" /* ColorAttribute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rim_rim_model__["a" /* ColorAttribute */]) === "function" && _a || Object)
    ], RimComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])('rim'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], RimComponent.prototype, "rim$", void 0);
    RimComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getBasePath',
            localReducer: __WEBPACK_IMPORTED_MODULE_3__color_reducer__["a" /* colorPickerReducer */],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-rim-color',
            template: __webpack_require__(341),
            styles: [__webpack_require__(342)],
        }),
        __metadata("design:paramtypes", [])
    ], RimComponent);
    return RimComponent;
    var _a, _b;
}());

//# sourceMappingURL=rim.component.js.map

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = "<div class=\"rim__wrapper\">\n\t<div class=\"rim__outline\" [style.border-color]=\"outlineColor$ | async\">\n\t\t<div class=\"rim__fill\" [style.background]=\"fillColor$ | async\"></div>\n\t</div>\n</div>";

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".rim__wrapper {\n  width: 200%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rim__wrapper .rim__outline {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    border-width: 15px;\n    border-style: solid;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 5px 25px -5px rgba(0, 0, 0, 0.75); }\n  .rim__wrapper .rim__fill {\n    width: 80%;\n    height: 80%;\n    border-radius: 50%;\n    box-shadow: 0 5px 25px -5px rgba(0, 0, 0, 0.75); }\n\n:host {\n  height: 100%;\n  width: 35%;\n  direction: rtl; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__color_reducer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rim_rim_color_model__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rim_rim_model__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_action__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var clampColor = Object(__WEBPACK_IMPORTED_MODULE_6__rim_rim_color_model__["b" /* createClamp */])(0, 255);
var SliderComponent = /** @class */ (function () {
    function SliderComponent(sliderActions, rd) {
        var _this = this;
        this.sliderActions = sliderActions;
        this.rd = rd;
        /**
         * An alternative is ['color', 'rim', this.selected]
         *
         * But, since it will create problem with sub reducer (state get by getBasePath is passed to the reducer)
         * it create complication in the reducer, and does not adhere to existing implementations
         */
        this.getBasePath = function () { return ['color']; };
        this.startDrag = function (e) {
            _this.startPos = e.clientX;
            _this.dragging = true;
            _this.onDragListener = _this.rd.listen('document', 'mousemove', _this.onDrag);
            _this.endDragListener = _this.rd.listen('document', 'mouseup', _this.endDrag);
        };
        this.onDrag = function (e) {
            if (_this.dragging) {
                var rect = _this.barEl.nativeElement.getBoundingClientRect();
                var newValue = clampColor(255 * ((e.clientX - rect.left) / rect.width));
                _this.changeValue(newValue, _this.channel); // parameter channel is required to bind with calling component
            }
        };
        this.endDrag = function (e) {
            _this.dragging = false;
            _this.onDragListener();
            _this.endDragListener();
        };
        this.changeValue = function (newValue, channel) {
            return _this.sliderActions.changeValueByChannel(_this.selected, channel, newValue);
        };
    }
    Object.defineProperty(SliderComponent.prototype, "color$", {
        get: function () {
            var _this = this;
            return this.rim$.map(function (rim) { return rim[_this.selected].color; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "opacity$", {
        get: function () {
            var _this = this;
            return this.rim$.map(function (rim) { return rim[_this.selected].opacity; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "barStyle$", {
        get: function () {
            var _this = this;
            return this.color$
                .mergeMap(function (color) {
                return _this.opacity$.map(function (opacity) { return ({
                    background: "\n\t\t\t\t\tlinear-gradient(to right,\n\t\t\t\t\t" + color.set(_this.channel, 0).toRGBAString(opacity) + ",\n\t\t\t\t\t" + color.set(_this.channel, 255).toRGBAString(opacity) + ")\n\t\t\t\t\t",
                }); });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "handleStyle$", {
        get: function () {
            var _this = this;
            return this.color$
                .map(function (color) {
                var width = _this.barEl.nativeElement.getBoundingClientRect().width;
                return {
                    transform: "translateX(" + (color[_this.channel] / 255) * width + "px)",
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('bar'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], SliderComponent.prototype, "barEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__rim_rim_model__["a" /* ColorAttribute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__rim_rim_model__["a" /* ColorAttribute */]) === "function" && _b || Object)
    ], SliderComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "channel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])('rim'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], SliderComponent.prototype, "rim$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "changeValue", void 0);
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getBasePath',
            localReducer: __WEBPACK_IMPORTED_MODULE_5__color_reducer__["a" /* colorPickerReducer */],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-slider-color',
            template: __webpack_require__(344),
            styles: [__webpack_require__(345)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__slider_action__["b" /* SliderActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__slider_action__["b" /* SliderActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _e || Object])
    ], SliderComponent);
    return SliderComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=slider.component.js.map

/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = "<div #bar class=\"colorSlider\" [ngStyle]=\"barStyle$ | async\">\n\t<div class=\"colorSlider__handle\"\n\t\t(mousedown)=\"startDrag($event)\"\n\t\t[ngStyle]=\"handleStyle$ | async\"></div>\n</div>";

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".colorSlider {\n  position: relative;\n  width: 128px;\n  height: 10px;\n  border-radius: 5px;\n  margin: 10px;\n  box-shadow: 0 2.5px 20px -2.5px rgba(0, 0, 0, 0.1) inset;\n  transition: transform .2s ease, box-shadow .2s ease; }\n  .colorSlider .colorSlider__handle {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    left: -10px;\n    top: -5px;\n    background: white;\n    box-shadow: 2.5px 2.5px 20px -2.5px rgba(0, 0, 0, 0.4);\n    border-radius: 50%; }\n    .colorSlider .colorSlider__handle:hover {\n      cursor: -webkit-grab;\n      cursor: grab; }\n    .colorSlider .colorSlider__handle:active {\n      cursor: -webkit-grabbing;\n      cursor: grabbing; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrokeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrokeComponent = /** @class */ (function () {
    function StrokeComponent() {
    }
    StrokeComponent.prototype.ngOnInit = function () {
    };
    StrokeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stroke-width-slider',
            template: __webpack_require__(347),
            styles: [__webpack_require__(348)],
        }),
        __metadata("design:paramtypes", [])
    ], StrokeComponent);
    return StrokeComponent;
}());

//# sourceMappingURL=stroke.component.js.map

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__epics__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreModule = /** @class */ (function () {
    function StoreModule(store, devTools, rootEpics) {
        this.store = store;
        this.rootEpics = rootEpics;
        store.configureStore(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* rootReducer */], {}, this.rootEpics.createEpics().slice(), devTools.isEnabled() ? [devTools.enhancer()] : []);
    }
    StoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgReduxModule"],
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__epics__["a" /* RootEpics */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__epics__["a" /* RootEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__epics__["a" /* RootEpics */]) === "function" && _c || Object])
    ], StoreModule);
    return StoreModule;
    var _a, _b, _c;
}());

//# sourceMappingURL=store.module.js.map

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_canvas_epics__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_color_epics__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_toolbox_epics__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RootEpics = /** @class */ (function () {
    function RootEpics(toolboxEpics, canvasEpics, colorPickerEpics) {
        this.toolboxEpics = toolboxEpics;
        this.canvasEpics = canvasEpics;
        this.colorPickerEpics = colorPickerEpics;
    }
    RootEpics.prototype.createEpics = function () {
        return this.toolboxEpics.createEpics().concat(this.canvasEpics.createEpics(), this.colorPickerEpics.createEpics());
    };
    RootEpics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toolbox_toolbox_epics__["a" /* ToolboxEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toolbox_toolbox_epics__["a" /* ToolboxEpics */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__canvas_canvas_epics__["a" /* CanvasEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__canvas_canvas_epics__["a" /* CanvasEpics */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__color_color_epics__["a" /* ColorPickerEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__color_color_epics__["a" /* ColorPickerEpics */]) === "function" && _c || Object])
    ], RootEpics);
    return RootEpics;
    var _a, _b, _c;
}());

//# sourceMappingURL=epics.js.map

/***/ }),
/* 351 */,
/* 352 */,
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCanvastool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvastool_action__ = __webpack_require__(163);




var createCanvastool = function () {
    var actions = new __WEBPACK_IMPORTED_MODULE_3__canvastool_action__["b" /* CanvastoolActions */]();
    var mouseDownOnCanvas = function (e, triggeringDrawable) {
        return actions.mouseDownOnCanvasAction({ x: e.clientX, y: e.clientY });
    };
    var mouseMoveOnCanvas = function (e, triggeringDrawable) {
        return actions.moveCursorOnCanvasAction({ x: e.clientX, y: e.clientY });
    };
    var mouseUpOnCanvas = function (e, triggeringDrawable) {
        return actions.mouseUpOnCanvasAction({ x: e.clientX, y: e.clientY });
    };
    return new __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__["a" /* ToolBase */]({
        name: __WEBPACK_IMPORTED_MODULE_2__toolbox_model__["a" /* ToolName */].Canvastool,
        listeners: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([
            { name: 'mousedown', handler: mouseDownOnCanvas, target: 'canvas' },
            { name: 'mousemove', handler: mouseMoveOnCanvas, target: 'canvas' },
            { name: 'mouseup', handler: mouseUpOnCanvas, target: 'canvas' },
        ]),
    });
};
//# sourceMappingURL=canvastool.model.js.map

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDirectSelectiontool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_model__ = __webpack_require__(23);



var createDirectSelectiontool = function () {
    return new __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__["a" /* ToolBase */]({
        name: __WEBPACK_IMPORTED_MODULE_2__toolbox_model__["a" /* ToolName */].DirectSelectiontool,
        listeners: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    });
};
//# sourceMappingURL=directtool.model.js.map

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPentool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pentool_action__ = __webpack_require__(76);




var createPentool = function () {
    var actions = new __WEBPACK_IMPORTED_MODULE_3__pentool_action__["b" /* PentoolActions */]();
    var mouseDownOnCanvas = function (e, triggeringDrawable) {
        var pathFromRoot = triggeringDrawable.routeParentPath.toJS().concat([triggeringDrawable.idx]);
        return actions.mouseDownOnCanvasAction(pathFromRoot, { x: e.clientX, y: e.clientY });
    };
    var mouseUpOnCanvas = function (e, triggeringDrawable) {
        var pathFromRoot = triggeringDrawable.routeParentPath.toJS().concat([triggeringDrawable.idx]);
        return actions.mouseUpOnCanvasAction(pathFromRoot, { x: e.clientX, y: e.clientY });
    };
    var mouseMoveOnCanvas = function (e, triggeringDrawable) {
        var pathFromRoot = triggeringDrawable.routeParentPath.toJS().concat([triggeringDrawable.idx]);
        return actions.moveCursorOnCanvasAction(pathFromRoot, triggeringDrawable.get('children').size - 1, { x: e.clientX, y: e.clientY });
    };
    var mouseDownOnHeadAnchor = function (e, triggeringDrawable) {
        // e.stopPropagation();
        var pathFromRoot = triggeringDrawable.routeParentPath.toArray();
        return actions.mouseDownOnAnchorAction(pathFromRoot, triggeringDrawable.idx);
    };
    return new __WEBPACK_IMPORTED_MODULE_1__tool_tool_model__["a" /* ToolBase */]({
        name: __WEBPACK_IMPORTED_MODULE_2__toolbox_model__["a" /* ToolName */].Pentool,
        listeners: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([
            { name: 'mousedown', handler: mouseDownOnCanvas, target: 'canvas' },
            { name: 'mouseup', handler: mouseUpOnCanvas, target: 'canvas' },
            { name: 'mousemove', handler: mouseMoveOnCanvas, target: 'canvas' },
            { name: 'mousedown', handler: mouseDownOnHeadAnchor, target: 'anchor' },
        ]),
    });
};
//# sourceMappingURL=pentool.model.js.map

/***/ }),
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_canvas_reducer__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_color_reducer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_toolbox_reducer__ = __webpack_require__(223);




var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    canvas: __WEBPACK_IMPORTED_MODULE_1__canvas_canvas_reducer__["a" /* canvasReducer */],
    toolbox: __WEBPACK_IMPORTED_MODULE_3__toolbox_toolbox_reducer__["a" /* toolboxReducer */],
    color: __WEBPACK_IMPORTED_MODULE_2__color_color_reducer__["a" /* colorPickerReducer */],
});
//# sourceMappingURL=reducer.js.map

/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canvastoolReducer; });
var canvastoolReducer = function (state, action) {
    return state;
};
//# sourceMappingURL=canvastool.reducer.js.map

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pentoolReducer; });
var pentoolReducer = function (state, action) {
    return state;
};
//# sourceMappingURL=pentool.reducer.js.map

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectiontoolReducer; });
var selectiontoolReducer = function (state, action) {
    return state;
};
//# sourceMappingURL=selectiontool.reducer.js.map

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvastool_canvastool_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvastool_canvastool_epics__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directtool_directtool_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directtool_directtool_epics__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pentool_epics_pentool_draw_epics__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pentool_epics_pentool_epics__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pentool_pentool_action__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pentool_pentool_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selectiontool_selectiontool_action__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selectiontool_selectiontool_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectiontool_selectiontool_epics__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tool_tool_container_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tool_tool_directive__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__toolbox_action__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__toolbox_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toolbox_epics__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ToolboxModule = /** @class */ (function () {
    function ToolboxModule() {
    }
    ToolboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__toolbox_component__["a" /* ToolboxComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tool_tool_container_component__["a" /* ToolContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pentool_pentool_component__["a" /* PentoolComponent */],
                __WEBPACK_IMPORTED_MODULE_11__selectiontool_selectiontool_component__["a" /* SelectiontoolComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tool_tool_directive__["a" /* ToolDirective */],
                __WEBPACK_IMPORTED_MODULE_2__canvastool_canvastool_component__["a" /* CanvastoolComponent */],
                __WEBPACK_IMPORTED_MODULE_4__directtool_directtool_component__["a" /* DirectSelectiontoolComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__pentool_pentool_component__["a" /* PentoolComponent */],
                __WEBPACK_IMPORTED_MODULE_11__selectiontool_selectiontool_component__["a" /* SelectiontoolComponent */],
                __WEBPACK_IMPORTED_MODULE_2__canvastool_canvastool_component__["a" /* CanvastoolComponent */],
                __WEBPACK_IMPORTED_MODULE_4__directtool_directtool_component__["a" /* DirectSelectiontoolComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__canvastool_canvastool_epics__["a" /* CanvastoolEpics */],
                __WEBPACK_IMPORTED_MODULE_15__toolbox_action__["b" /* ToolboxActions */],
                __WEBPACK_IMPORTED_MODULE_17__toolbox_epics__["a" /* ToolboxEpics */],
                __WEBPACK_IMPORTED_MODULE_8__pentool_pentool_action__["b" /* PentoolActions */],
                __WEBPACK_IMPORTED_MODULE_7__pentool_epics_pentool_epics__["a" /* PentoolEpics */],
                __WEBPACK_IMPORTED_MODULE_6__pentool_epics_pentool_draw_epics__["a" /* PentoolDrawEpics */],
                __WEBPACK_IMPORTED_MODULE_12__selectiontool_selectiontool_epics__["a" /* SelectiontoolEpics */],
                __WEBPACK_IMPORTED_MODULE_10__selectiontool_selectiontool_action__["b" /* SelectiontoolActions */],
                __WEBPACK_IMPORTED_MODULE_5__directtool_directtool_epics__["a" /* DirectSelectiontoolEpics */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_16__toolbox_component__["a" /* ToolboxComponent */],
            ],
        })
    ], ToolboxModule);
    return ToolboxModule;
}());

//# sourceMappingURL=toolbox.module.js.map

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = "<div class=\"canvastool\" (click)=\"selectTool()\">\n\t<div class=\"canvastool__icon\" [ngClass]=\"{ 'icon--active': context.isActive }\"></div>\n</div>\n";

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".canvastool {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%; }\n  .canvastool .canvastool__icon {\n    width: 20px;\n    height: 20px;\n    background-image: url(" + __webpack_require__(376) + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center; }\n    .canvastool .canvastool__icon.icon--active {\n      background-image: url(" + __webpack_require__(377) + "); }\n\n:host {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "canvastool_inactive.08e95c4449f62d534c55.svg";

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "canvastool_active.f5ae7466ed1820b4e7f5.svg";

/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports = "<div class=\"directtool\" (click)=\"selectTool()\">\n    <div class=\"directtool__icon\" [ngClass]=\"{ 'icon--active': context.isActive }\"></div>\n  </div>\n  ";

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".directtool {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%; }\n  .directtool .directtool__icon {\n    width: 25px;\n    height: 25px;\n    background-image: url(" + __webpack_require__(380) + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center; }\n    .directtool .directtool__icon.icon--active {\n      background-image: url(" + __webpack_require__(381) + "); }\n\n:host {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "direct_inactive.01b6d7b9ba41b8757999.svg";

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "direct_active.324478f77a07bb8e8968.svg";

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pentool\" (click)=\"selectTool()\">\n\t<div class=\"pentool__icon\" [ngClass]=\"{ 'icon--active': context.isActive }\"></div>\n</div>\n";

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".pentool {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%; }\n  .pentool .pentool__icon {\n    width: 25px;\n    height: 25px;\n    background-image: url(" + __webpack_require__(384) + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center; }\n    .pentool .pentool__icon.icon--active {\n      background-image: url(" + __webpack_require__(385) + "); }\n\n:host {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pentool_inactive.feb8b6ff92587d552a8d.svg";

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pentool_active.a2f4844f52be4b6e480c.svg";

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports = "<div class=\"selectiontool\" (click)=\"selectTool()\">\n\t<div class=\"selectiontool__icon\" [ngClass]=\"{ 'icon--active': context.isActive }\"></div>\n</div>\n";

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".selectiontool {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%; }\n  .selectiontool .selectiontool__icon {\n    width: 25px;\n    height: 25px;\n    background-image: url(" + __webpack_require__(388) + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 75% 50%; }\n    .selectiontool .selectiontool__icon.icon--active {\n      background-image: url(" + __webpack_require__(389) + "); }\n\n:host {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "selectiontool_inactive.17b16e2703000162f805.svg";

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "selectiontool_active.dc9c767d2d05a6e9dfd2.svg";

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvastool_canvastool_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directtool_directtool_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pentool_pentool_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectiontool_selectiontool_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool_base_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tool_directive__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var mappings = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_5__toolbox_model__["a" /* ToolName */].Pentool] = __WEBPACK_IMPORTED_MODULE_3__pentool_pentool_component__["a" /* PentoolComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_5__toolbox_model__["a" /* ToolName */].Selectiontool] = __WEBPACK_IMPORTED_MODULE_4__selectiontool_selectiontool_component__["a" /* SelectiontoolComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_5__toolbox_model__["a" /* ToolName */].Canvastool] = __WEBPACK_IMPORTED_MODULE_1__canvastool_canvastool_component__["a" /* CanvastoolComponent */],
    _a[__WEBPACK_IMPORTED_MODULE_5__toolbox_model__["a" /* ToolName */].DirectSelectiontool] = __WEBPACK_IMPORTED_MODULE_2__directtool_directtool_component__["a" /* DirectSelectiontoolComponent */],
    _a);
var getComponentType = function (typeName) {
    var type = mappings[typeName];
    return type;
};
var ToolContainerComponent = /** @class */ (function () {
    function ToolContainerComponent(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appElementRef = injector.get(applicationRef.componentTypes[0]).root;
    }
    ToolContainerComponent.prototype.ngOnInit = function () {
        if (this.type) {
            var componentType = getComponentType(this.type);
            var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentRef = this.toolHost.createComponent(factory);
            this.instance = this.componentRef.instance;
            this.instance.context = this.context;
            this.instance.appElementRef = this.appElementRef;
        }
    };
    ToolContainerComponent.prototype.ngDoCheck = function () {
        this.instance.context = this.context;
    };
    ToolContainerComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = undefined;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__tool_directive__["a" /* ToolDirective */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
    ], ToolContainerComponent.prototype, "toolHost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__tool_base_component__["IToolContext"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__tool_base_component__["IToolContext"]) === "function" && _b || Object)
    ], ToolContainerComponent.prototype, "context", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__toolbox_model__["a" /* ToolName */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__toolbox_model__["a" /* ToolName */]) === "function" && _c || Object)
    ], ToolContainerComponent.prototype, "type", void 0);
    ToolContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tool-container',
            template: __webpack_require__(391),
            styles: [__webpack_require__(392)],
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _f || Object])
    ], ToolContainerComponent);
    return ToolContainerComponent;
    var _a, _b, _c, _d, _e, _f;
}());

var _a;
//# sourceMappingURL=tool.container.component.js.map

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tool\" [ngClass]=\"{ 'tool--active': context.isActive }\">\n\t<ng-template appToolHost></ng-template>\n</div>";

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".tool {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FEFEFE;\n  border-radius: 5px;\n  margin: 10px;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n  transition: box-shadow .25s ease, transform .4s ease-out; }\n  .tool:hover {\n    box-shadow: 0 5px 30px -5px rgba(0, 122, 255, 0.5);\n    background: white;\n    transform: scale(1.01) translateY(-1px); }\n  .tool.tool--active {\n    background: linear-gradient(to right, #007aff -20%, #5ac8fa 120%);\n    font-weight: 500;\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toolbox_reducer__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolboxComponent = /** @class */ (function () {
    function ToolboxComponent() {
        this.toolList = [
            __WEBPACK_IMPORTED_MODULE_3__toolbox_model__["a" /* ToolName */].Selectiontool,
            __WEBPACK_IMPORTED_MODULE_3__toolbox_model__["a" /* ToolName */].DirectSelectiontool,
            __WEBPACK_IMPORTED_MODULE_3__toolbox_model__["a" /* ToolName */].Pentool,
            __WEBPACK_IMPORTED_MODULE_3__toolbox_model__["a" /* ToolName */].Canvastool,
        ];
        this.getSubPath = function () { return ['toolbox']; };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["select"])(['selected', 'name']),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], ToolboxComponent.prototype, "selected$", void 0);
    ToolboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getSubPath',
            localReducer: __WEBPACK_IMPORTED_MODULE_4__toolbox_reducer__["a" /* toolboxReducer */],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-toolbox',
            template: __webpack_require__(394),
            styles: [__webpack_require__(395)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        })
    ], ToolboxComponent);
    return ToolboxComponent;
    var _a;
}());

//# sourceMappingURL=toolbox.component.js.map

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbox\">\n  <app-tool-container *ngFor=\"let tool of toolList\" [type]=\"tool\" [context]=\"{ toolName: tool, isActive: tool === (selected$ | async) }\"></app-tool-container>\n</div>";

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".toolbox {\n  position: fixed;\n  top: 100px;\n  left: 0;\n  padding: 5px;\n  background: rgba(250, 250, 252, 0.85);\n  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.3);\n  border: 1px solid #FDFDFD;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  user-select: none;\n  cursor: default; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { HomeComponent } from './components/home/home.component';


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
var environment = {
    production: false
};
//# sourceMappingURL=index.js.map

/***/ })
]),[230]);
//# sourceMappingURL=main.bundle.js.map