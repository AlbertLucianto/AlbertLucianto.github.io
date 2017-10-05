webpackJsonp([1],{

/***/ "+5gR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__("Gvdl");
const api = __webpack_require__("rW+9");
const types = __webpack_require__("lOek");
exports.changeSearchCategory = ({ commit }, category) => {
    commit(types.CHANGE_SEARCH_CATEGORY, category);
};
exports.getSearchResult = ({ commit, state }, param) => {
    commit(types.GET_SEARCH_RESULT);
    api.getSearchResult(param)
        .then((results) => {
        const newResult = [];
        const existingResult = results.data.filter(val => {
            if (state.nodes.map(node => node.title.toLowerCase()).includes(val.title.toLowerCase()))
                return true;
            else {
                newResult.push(val);
                return false;
            }
        });
        commit(types.RECEIVE_SEARCH_RESULT, existingResult);
        const source = rxjs_1.Observable.interval(200).take(newResult.length);
        source.subscribe(idx => {
            existingResult.push(newResult[idx]);
            commit(types.RECEIVE_SEARCH_RESULT, existingResult);
        });
    });
};


/***/ }),

/***/ "/Bag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('navbar'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2IEV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchText),expression:"searchText"}],domProps:{"value":(_vm.searchText)},on:{"keyup":_vm.debounceSearch,"input":function($event){if($event.target.composing){ return; }_vm.searchText=$event.target.value}}}),_vm._v(" "),_c('transition-group',{attrs:{"enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},_vm._l((_vm.nodes),function(item,index){return _c('div',{key:item.title,staticClass:"node"},[_vm._v("\n      "+_vm._s(item.title)),_c('br'),_vm._v("\n      "+_vm._s(item.category)+"\n    ")])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "E+Rc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Klmi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_debounce__ = __webpack_require__("O4Lo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchBar__ = __webpack_require__("kc4G");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* eslint func-names: ["error", "never"] */
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'navbar',
  data: function data() {
    return {
      searchText: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])({
    nodes: 'nodes',
    category: 'category'
  })),
  methods: {
    getSearchResult: function getSearchResult() {
      var category = this.category,
          searchText = this.searchText;

      if (searchText.trim()) {
        this.$store.dispatch('getSearchResult', {
          category: category,
          text: searchText
        });
      }
    },

    debounceSearch: __WEBPACK_IMPORTED_MODULE_2_lodash_debounce___default()(function () {
      this.getSearchResult();
    }, 400)
  },
  components: {
    'search-bar': __WEBPACK_IMPORTED_MODULE_3__SearchBar__["a" /* default */]
  }
});

/***/ }),

/***/ "LYzt":
/***/ (function(module, exports) {

//
//
//
//

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59c95520_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("/Bag");
function injectStyle (ssrContext) {
  __webpack_require__("Pxcp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59c95520_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index_ts__ = __webpack_require__("VYSC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__store_index_ts__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store_index_ts___default.a,
  template: '\n  <App/>\n  ',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "Pxcp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Q0tb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TUcH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Board_vue__ = __webpack_require__("LYzt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Board_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Board_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15165cfe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Board_vue__ = __webpack_require__("E+Rc");
function injectStyle (ssrContext) {
  __webpack_require__("XW+N")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15165cfe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Board_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15165cfe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Board_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "VYSC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __webpack_require__("7+uW");
const vuex_1 = __webpack_require__("NYxO");
const mutations_1 = __webpack_require__("eHom");
const actions = __webpack_require__("+5gR");
const getters = __webpack_require__("dk6R");
vue_1.default.use(vuex_1.default);
const state = {
    loading: false,
    currentSearchCategory: null,
    nodes: [],
};
exports.default = new vuex_1.default.Store({
    state,
    getters,
    actions,
    mutations: mutations_1.default,
});


/***/ }),

/***/ "XW+N":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XpZt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("Klmi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6127708b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("2IEV");
function injectStyle (ssrContext) {
  __webpack_require__("Q0tb")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6127708b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6127708b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Board__ = __webpack_require__("TUcH");




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Board',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Board__["a" /* default */]
  }]
}));

/***/ }),

/***/ "bFs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    {
        title: 'Love',
        category: 'topic',
    },
    {
        title: 'Music',
        category: 'topic',
    },
    {
        title: 'Tech',
        category: 'topic',
    },
    {
        title: 'Health',
        category: 'topic',
    },
    {
        title: 'Lifestyle',
        category: 'topic',
    },
    {
        title: 'Movies',
        category: 'topic',
    },
];
exports.filteredData = function (category, text) {
    return { data: data.filter(val => val.title.toLowerCase().includes(text.toLowerCase())), status: 200 };
};


/***/ }),

/***/ "dk6R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nodes = (state) => state.nodes;
exports.category = (state) => state.currentSearchCategory;
exports.loading = (state) => state.loading;


/***/ }),

/***/ "eHom":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __webpack_require__("7+uW");
const types = __webpack_require__("lOek");
exports.default = {
    [types.CHANGE_SEARCH_CATEGORY](state, category) {
        state.currentSearchCategory = category;
    },
    [types.GET_SEARCH_RESULT](state) {
        state.loading = true;
    },
    [types.RECEIVE_SEARCH_RESULT](state, results) {
        vue_1.default.set(state, 'nodes', results);
    }
};


/***/ }),

/***/ "eWUY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kc4G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchBar_vue__ = __webpack_require__("mzFU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b7177e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_SearchBar_vue__ = __webpack_require__("klVn");
function injectStyle (ssrContext) {
  __webpack_require__("eWUY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b7177e4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b7177e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_SearchBar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "klVn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.text),expression:"text"}],attrs:{"placeholder":"Search"},domProps:{"value":(_vm.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.text=$event.target.value}}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lOek":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_SEARCH_CATEGORY = 'CHANGE_SEARCH_CATEGORY';
exports.GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
exports.RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';


/***/ }),

/***/ "mzFU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'search-bar',
  props: ['searchText'],
  computed: {
    text: function text() {
      return this.searchText;
    }
  }
});

/***/ }),

/***/ "oPmM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rW+9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mock_data_1 = __webpack_require__("bFs3");
const LATENCY = 50;
function getSearchResult(param) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), LATENCY);
    }).then(() => mock_data_1.filteredData(param.category, param.text));
}
exports.getSearchResult = getSearchResult;
;


/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animate_css__ = __webpack_require__("oPmM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NavBar__ = __webpack_require__("XpZt");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    navbar: __WEBPACK_IMPORTED_MODULE_1__components_NavBar__["a" /* default */]
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.731f96dffc430e9d9340.js.map