var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method4) => {
  __accessCheck(obj, member, "access private method");
  return method4;
};
var _a2, _constructing, _max, _maxSize, _dispose, _disposeAfter, _fetchMethod, _size, _calculatedSize, _keyMap, _keyList, _valList, _next, _prev, _head, _tail, _free, _disposed, _sizes, _starts, _ttls, _hasDispose, _hasFetchMethod, _hasDisposeAfter, _initializeTTLTracking, initializeTTLTracking_fn, _updateItemAge, _statusTTL, _setItemTTL, _isStale, _initializeSizeTracking, initializeSizeTracking_fn, _removeItemSize, _addItemSize, _requireSize, _indexes, indexes_fn, _rindexes, rindexes_fn, _isValidIndex, isValidIndex_fn, _b, _evict, evict_fn, _backgroundFetch, backgroundFetch_fn, _isBackgroundFetch, isBackgroundFetch_fn, _connect, connect_fn, _moveToTail, moveToTail_fn;
import { s as isObject$2, bA as baseAssignValue, bB as assignValue, G as root, bC as arrayPush, S as Symbol$1, y as isObjectLike, x as isArray, J as buildProps, K as componentSizes, Z as definePropType, aI as isArray$1, ar as isString$2, bD as isBoolean, r as ref, O as computed, d as defineComponent, L as useFormSize, N as useNamespace, H as watch, aK as debugWarn, aX as provide, a as reactive, az as toRefs, bE as formContextKey, c as openBlock, e as createElementBlock, P as renderSlot, n as normalizeClass, u as unref, X as _export_sfc, aD as isFunction$1, au as inject, bF as formItemContextKey, bG as throwError, o as onMounted, aA as onBeforeUnmount, bH as onUpdated, aB as useResizeObserver, l as createVNode, F as Fragment, a8 as nextTick, bm as useSlots, ay as useId, bI as refDebounced, bf as addUnit, bJ as getProp, w as withCtx, Q as createBlock, ad as resolveDynamicComponent, V as normalizeStyle, i as createTextVNode, t as toDisplayString, j as createCommentVNode, f as createBaseVNode, bK as TransitionGroup, Y as withInstall, b0 as withNoopInstall, bL as readonly, b6 as toRef$1, ak as useEventListener$1, k as resolveComponent, b7 as normalizeProps, bM as guardReactiveProps, al as EVENT_CODE, at as iconPropType, U as ElIcon, aT as arrow_down_default, a4 as useLocale, br as createSlots, aq as mergeProps, ax as getCurrentInstance, T as withModifiers, bi as FOCUS_TRAP_INJECTION_KEY, bN as customRef, bO as getCurrentScope, bP as onScopeDispose, a7 as shallowRef, aM as watchEffect, bQ as _getLocalItem, bR as defineStore, bS as _setLocalItem, bT as getDefaultExportFromCjs, bU as useBlockVisible, bV as storeToRefs, b as onUnmounted, bW as throttle, p as pushScopeId, h as popScopeId, _ as _export_sfc$1, bX as calendar_default, ba as getNormalTime, bY as timer_default, bZ as reading_default, b_ as info_filled_default, ag as renderList, b$ as commonjsGlobal, bd as service, c0 as ElMessage, aW as ElInput, c1 as formatTime, bb as useRoute, ah as withDirectives, ai as vShow, c2 as Loading } from "./index-BXlkVL-7.js";
import { E as ElButton, c as composeRefs } from "./el-button-Bym-VPgT.js";
import { f as isPrototype, h as isArrayLike, j as arrayLikeKeys, o as overArg, k as keys, l as getSymbols, s as stubArray, m as baseGetAllKeys, U as Uint8Array$1, a as getTag, n as nodeUtil, p as baseUnary, i as isBuffer, S as Stack$1, g as getAllKeys, e as castArray, q as composeEventHandlers, r as useTooltipTriggerProps, u as useTooltipContentProps, c as ElScrollbar, d as ElTooltip, O as OnlyChild, w as whenMouse } from "./index-DbJsp0z9.js";
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object4() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object4.prototype = proto;
    var result = new object4();
    object4.prototype = void 0;
    return result;
  };
}();
function copyArray(source, array4) {
  var index2 = -1, length = source.length;
  array4 || (array4 = Array(length));
  while (++index2 < length) {
    array4[index2] = source[index2];
  }
  return array4;
}
function arrayEach(array4, iteratee) {
  var index2 = -1, length = array4 == null ? 0 : array4.length;
  while (++index2 < length) {
    if (iteratee(array4[index2], index2, array4) === false) {
      break;
    }
  }
  return array4;
}
function copyObject(source, props2, object4, customizer) {
  var isNew = !object4;
  object4 || (object4 = {});
  var index2 = -1, length = props2.length;
  while (++index2 < length) {
    var key = props2[index2];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object4, key, newValue);
    } else {
      assignValue(object4, key, newValue);
    }
  }
  return object4;
}
function nativeKeysIn(object4) {
  var result = [];
  if (object4 != null) {
    for (var key in Object(object4)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn(object4) {
  if (!isObject$2(object4)) {
    return nativeKeysIn(object4);
  }
  var isProto = isPrototype(object4), result = [];
  for (var key in object4) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object4, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4, true) : baseKeysIn(object4);
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
function baseAssign(object4, source) {
  return object4 && copyObject(source, keys(source), object4);
}
function baseAssignIn(object4, source) {
  return object4 && copyObject(source, keysIn(source), object4);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copySymbols(source, object4) {
  return copyObject(source, getSymbols(source), object4);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object4) {
  var result = [];
  while (object4) {
    arrayPush(result, getSymbols(object4));
    object4 = getPrototype(object4);
  }
  return result;
};
function copySymbolsIn(source, object4) {
  return copyObject(source, getSymbolsIn(source), object4);
}
function getAllKeysIn(object4) {
  return baseGetAllKeys(object4, keysIn, getSymbolsIn);
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array4) {
  var length = array4.length, result = new array4.constructor(length);
  if (length && typeof array4[0] == "string" && hasOwnProperty.call(array4, "index")) {
    result.index = array4.index;
    result.input = array4.input;
  }
  return result;
}
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp4) {
  var result = new regexp4.constructor(regexp4.source, reFlags.exec(regexp4));
  result.lastIndex = regexp4.lastIndex;
  return result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object4, tag, isDeep) {
  var Ctor = object4.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object4);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object4);
    case dataViewTag$1:
      return cloneDataView(object4, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object4, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object4);
    case regexpTag$1:
      return cloneRegExp(object4);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object4);
  }
}
function initCloneObject(object4) {
  return typeof object4.constructor == "function" && !isPrototype(object4) ? baseCreate(getPrototype(object4)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$1;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$1;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object4, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (result !== void 0) {
    return result;
  }
  if (!isObject$2(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object4) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object4 ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$1());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props2 = isArr ? void 0 : keysFunc(value);
  arrayEach(props2 || value, function(subValue, key2) {
    if (props2) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_SYMBOLS_FLAG = 4;
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}
const formMetaProps = buildProps({
  size: {
    type: String,
    values: componentSizes
  },
  disabled: Boolean
});
const formProps = buildProps({
  ...formMetaProps,
  model: Object,
  rules: {
    type: definePropType(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: Boolean,
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
});
const formEmits = {
  validate: (prop, isValid, message) => (isArray$1(prop) || isString$2(prop)) && isBoolean(isValid) && isString$2(message)
};
function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([]);
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index2 = potentialLabelWidthArr.value.indexOf(width);
    if (index2 === -1 && autoLabelWidth.value === "0")
      ;
    return index2;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index2 = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index2, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index2 = getLabelWidthIndex(val);
    if (index2 > -1) {
      potentialLabelWidthArr.value.splice(index2, 1);
    }
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
const filterFields = (fields, props2) => {
  const normalized = castArray(props2);
  return normalized.length > 0 ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
};
const COMPONENT_NAME$1 = "ElForm";
const __default__$2 = defineComponent({
  name: COMPONENT_NAME$1
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: formProps,
  emits: formEmits,
  setup(__props, { expose, emit }) {
    const props2 = __props;
    const fields = [];
    const formSize = useFormSize();
    const ns = useNamespace("form");
    const formClasses = computed(() => {
      const { labelPosition, inline: inline2 } = props2;
      return [
        ns.b(),
        ns.m(formSize.value || "default"),
        {
          [ns.m(`label-${labelPosition}`)]: labelPosition,
          [ns.m("inline")]: inline2
        }
      ];
    });
    const getField = (prop) => {
      return fields.find((field) => field.prop === prop);
    };
    const addField = (field) => {
      fields.push(field);
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = (properties = []) => {
      if (!props2.model) {
        return;
      }
      filterFields(fields, properties).forEach((field) => field.resetField());
    };
    const clearValidate = (props22 = []) => {
      filterFields(fields, props22).forEach((field) => field.clearValidate());
    };
    const isValidatable = computed(() => {
      const hasModel = !!props2.model;
      return hasModel;
    });
    const obtainValidateFields = (props22) => {
      if (fields.length === 0)
        return [];
      const filteredFields = filterFields(fields, props22);
      if (!filteredFields.length) {
        return [];
      }
      return filteredFields;
    };
    const validate = async (callback) => validateField(void 0, callback);
    const doValidateField = async (props22 = []) => {
      if (!isValidatable.value)
        return false;
      const fields2 = obtainValidateFields(props22);
      if (fields2.length === 0)
        return true;
      let validationErrors = {};
      for (const field of fields2) {
        try {
          await field.validate("");
        } catch (fields3) {
          validationErrors = {
            ...validationErrors,
            ...fields3
          };
        }
      }
      if (Object.keys(validationErrors).length === 0)
        return true;
      return Promise.reject(validationErrors);
    };
    const validateField = async (modelProps = [], callback) => {
      const shouldThrow = !isFunction$1(callback);
      try {
        const result = await doValidateField(modelProps);
        if (result === true) {
          await (callback == null ? void 0 : callback(result));
        }
        return result;
      } catch (e2) {
        if (e2 instanceof Error)
          throw e2;
        const invalidFields = e2;
        if (props2.scrollToError) {
          scrollToField(Object.keys(invalidFields)[0]);
        }
        await (callback == null ? void 0 : callback(false, invalidFields));
        return shouldThrow && Promise.reject(invalidFields);
      }
    };
    const scrollToField = (prop) => {
      var _a3;
      const field = filterFields(fields, prop)[0];
      if (field) {
        (_a3 = field.$el) == null ? void 0 : _a3.scrollIntoView(props2.scrollIntoViewOptions);
      }
    };
    watch(() => props2.rules, () => {
      if (props2.validateOnRuleChange) {
        validate().catch((err) => debugWarn());
      }
    }, { deep: true });
    provide(formContextKey, reactive({
      ...toRefs(props2),
      emit,
      resetFields,
      clearValidate,
      validateField,
      getField,
      addField,
      removeField,
      ...useFormLabelWidth()
    }));
    expose({
      validate,
      validateField,
      resetFields,
      clearValidate,
      scrollToField
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass(unref(formClasses))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Form = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "form.vue"]]);
var define_process_env_default = {};
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && define_process_env_default && false) {
  warning = function warning3(type4, errors2) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors2.every(function(e2) {
        return typeof e2 === "string";
      })) {
        console.warn(type4, errors2);
      }
    }
  };
}
function convertFieldsError(errors2) {
  if (!errors2 || !errors2.length)
    return null;
  var fields = {};
  errors2.forEach(function(error2) {
    var field = error2.field;
    fields[field] = fields[field] || [];
    fields[field].push(error2);
  });
  return fields;
}
function format$2(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i2 = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i2 >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i2++]);
        case "%d":
          return Number(args[i2++]);
        case "%j":
          try {
            return JSON.stringify(args[i2++]);
          } catch (_2) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors2) {
    results.push.apply(results, errors2 || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a2) {
    func(a2, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index2 = 0;
  var arrLength = arr.length;
  function next(errors2) {
    if (errors2 && errors2.length) {
      callback(errors2);
      return;
    }
    var original = index2;
    index2 = index2 + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors2, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors2;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors2) {
        callback(errors2);
        return errors2.length ? reject(new AsyncValidationError(errors2, convertFieldsError(errors2))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e2) {
      return e2;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors2) {
      results.push.apply(results, errors2);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e2) {
    return e2;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v = value;
  for (var i2 = 0; i2 < path.length; i2++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i2]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends$1({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors2, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors2.push(format$2(options.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors2, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors2.push(format$2(options.messages.whitespace, rule.fullField));
  }
};
var urlReg;
var getUrlRegex = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex2 = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex2 + "$)", "i");
  return urlReg;
};
var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e2) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors2, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors2, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors2.push(format$2(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors2.push(format$2(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors2, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors2.push(format$2(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors2.push(format$2(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors2.push(format$2(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors2.push(format$2(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors2, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors2.push(format$2(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors2, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors2.push(format$2(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors2.push(format$2(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors2, options);
      rules.range(rule, value, source, errors2, options);
      rules.pattern(rule, value, source, errors2, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors2, options);
      }
    }
  }
  callback(errors2);
};
var method2 = function method3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var number2 = function number3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors2, options);
      rules.range(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors2, options);
      rules.range(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors2, options);
      rules.range(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var array2 = function array3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors2, options);
      rules.range(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var object2 = function object3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var date2 = function date3(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors2, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors2, options);
      }
    }
  }
  callback(errors2);
};
var required2 = function required3(rule, value, callback, source, options) {
  var errors2 = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors2, options, type4);
  callback(errors2);
};
var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors2, options);
    }
  }
  callback(errors2);
};
var any = function any2(rule, value, callback, source, options) {
  var errors2 = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors2, options);
  }
  callback(errors2);
};
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone2() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors2 = [];
      var fields = {};
      function add2(e2) {
        if (Array.isArray(e2)) {
          var _errors;
          errors2 = (_errors = errors2).concat.apply(_errors, e2);
        } else {
          errors2.push(e2);
        }
      }
      for (var i2 = 0; i2 < results.length; i2++) {
        add2(results[i2]);
      }
      if (!errors2.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors2);
        callback(errors2, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys2 = options.keys || Object.keys(this.rules);
    keys2.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r2) {
        var rule = r2;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends$1({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends$1({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends$1({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e2) {
        if (e2 === void 0) {
          e2 = [];
        }
        var errorList = Array.isArray(e2) ? e2 : [e2];
        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format$2(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends$1({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error2) {
          console.error == null ? void 0 : console.error(error2);
          if (!options.suppressValidatorError) {
            setTimeout(function() {
              throw error2;
            }, 0);
          }
          cb(error2.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e2) {
          return cb(e2);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format$2("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");
    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }
    if (keys2.length === 1 && keys2[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  };
  return Schema2;
}();
Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type4] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success"
];
const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: definePropType([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: definePropType([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  }
});
const COMPONENT_NAME = "ElLabelWrap";
var FormLabelWrap = defineComponent({
  name: COMPONENT_NAME,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props2, {
    slots
  }) {
    const formContext = inject(formContextKey, void 0);
    const formItemContext = inject(formItemContextKey);
    if (!formItemContext)
      throwError(COMPONENT_NAME, "usage: <el-form-item><label-wrap /></el-form-item>");
    const ns = useNamespace("form");
    const el = ref();
    const computedWidth = ref(0);
    const getLabelWidth = () => {
      var _a3;
      if ((_a3 = el.value) == null ? void 0 : _a3.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      nextTick(() => {
        if (slots.default && props2.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    onMounted(() => {
      updateLabelWidthFn();
    });
    onBeforeUnmount(() => {
      updateLabelWidth("remove");
    });
    onUpdated(() => updateLabelWidthFn());
    watch(computedWidth, (val, oldVal) => {
      if (props2.updateAll) {
        formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
      }
    });
    useResizeObserver(computed(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = el.value) == null ? void 0 : _a3.firstElementChild) != null ? _b2 : null;
    }), updateLabelWidthFn);
    return () => {
      var _a3, _b2;
      if (!slots)
        return null;
      const {
        isAutoWidth
      } = props2;
      if (isAutoWidth) {
        const autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
        const hasLabel = formItemContext == null ? void 0 : formItemContext.hasLabel;
        const style = {};
        if (hasLabel && autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
          const marginPosition = formContext.labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return createVNode("div", {
          "ref": el,
          "class": [ns.be("item", "label-wrap")],
          "style": style
        }, [(_a3 = slots.default) == null ? void 0 : _a3.call(slots)]);
      } else {
        return createVNode(Fragment, {
          "ref": el
        }, [(_b2 = slots.default) == null ? void 0 : _b2.call(slots)]);
      }
    };
  }
});
const _hoisted_1$9 = ["role", "aria-labelledby"];
const __default__$1 = defineComponent({
  name: "ElFormItem"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: formItemProps,
  setup(__props, { expose }) {
    const props2 = __props;
    const slots = useSlots();
    const formContext = inject(formContextKey, void 0);
    const parentFormItemContext = inject(formItemContextKey, void 0);
    const _size2 = useFormSize(void 0, { formItem: false });
    const ns = useNamespace("form-item");
    const labelId = useId().value;
    const inputIds = ref([]);
    const validateState = ref("");
    const validateStateDebounced = refDebounced(validateState, 100);
    const validateMessage = ref("");
    const formItemRef = ref();
    let initialValue = void 0;
    let isResettingField = false;
    const labelStyle = computed(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top") {
        return {};
      }
      const labelWidth = addUnit(props2.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (labelWidth)
        return { width: labelWidth };
      return {};
    });
    const contentStyle = computed(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top" || (formContext == null ? void 0 : formContext.inline)) {
        return {};
      }
      if (!props2.label && !props2.labelWidth && isNested) {
        return {};
      }
      const labelWidth = addUnit(props2.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (!props2.label && !slots.label) {
        return { marginLeft: labelWidth };
      }
      return {};
    });
    const formItemClasses = computed(() => [
      ns.b(),
      ns.m(_size2.value),
      ns.is("error", validateState.value === "error"),
      ns.is("validating", validateState.value === "validating"),
      ns.is("success", validateState.value === "success"),
      ns.is("required", isRequired.value || props2.required),
      ns.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
      (formContext == null ? void 0 : formContext.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [ns.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon }
    ]);
    const _inlineMessage = computed(() => isBoolean(props2.inlineMessage) ? props2.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
    const validateClasses = computed(() => [
      ns.e("error"),
      { [ns.em("error", "inline")]: _inlineMessage.value }
    ]);
    const propString = computed(() => {
      if (!props2.prop)
        return "";
      return isString$2(props2.prop) ? props2.prop : props2.prop.join(".");
    });
    const hasLabel = computed(() => {
      return !!(props2.label || slots.label);
    });
    const labelFor = computed(() => {
      return props2.for || (inputIds.value.length === 1 ? inputIds.value[0] : void 0);
    });
    const isGroup = computed(() => {
      return !labelFor.value && hasLabel.value;
    });
    const isNested = !!parentFormItemContext;
    const fieldValue = computed(() => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props2.prop) {
        return;
      }
      return getProp(model, props2.prop).value;
    });
    const normalizedRules = computed(() => {
      const { required: required4 } = props2;
      const rules2 = [];
      if (props2.rules) {
        rules2.push(...castArray(props2.rules));
      }
      const formRules = formContext == null ? void 0 : formContext.rules;
      if (formRules && props2.prop) {
        const _rules3 = getProp(formRules, props2.prop).value;
        if (_rules3) {
          rules2.push(...castArray(_rules3));
        }
      }
      if (required4 !== void 0) {
        const requiredRules = rules2.map((rule, i2) => [rule, i2]).filter(([rule]) => Object.keys(rule).includes("required"));
        if (requiredRules.length > 0) {
          for (const [rule, i2] of requiredRules) {
            if (rule.required === required4)
              continue;
            rules2[i2] = { ...rule, required: required4 };
          }
        } else {
          rules2.push({ required: required4 });
        }
      }
      return rules2;
    });
    const validateEnabled = computed(() => normalizedRules.value.length > 0);
    const getFilteredRule = (trigger) => {
      const rules2 = normalizedRules.value;
      return rules2.filter((rule) => {
        if (!rule.trigger || !trigger)
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      }).map(({ trigger: trigger2, ...rule }) => rule);
    };
    const isRequired = computed(() => normalizedRules.value.some((rule) => rule.required));
    const shouldShowError = computed(() => {
      var _a3;
      return validateStateDebounced.value === "error" && props2.showMessage && ((_a3 = formContext == null ? void 0 : formContext.showMessage) != null ? _a3 : true);
    });
    const currentLabel = computed(() => `${props2.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
    const setValidationState = (state) => {
      validateState.value = state;
    };
    const onValidationFailed = (error2) => {
      var _a3, _b2;
      const { errors: errors2, fields } = error2;
      if (!errors2 || !fields) {
        console.error(error2);
      }
      setValidationState("error");
      validateMessage.value = errors2 ? (_b2 = (_a3 = errors2 == null ? void 0 : errors2[0]) == null ? void 0 : _a3.message) != null ? _b2 : `${props2.prop} is required` : "";
      formContext == null ? void 0 : formContext.emit("validate", props2.prop, false, validateMessage.value);
    };
    const onValidationSucceeded = () => {
      setValidationState("success");
      formContext == null ? void 0 : formContext.emit("validate", props2.prop, true, "");
    };
    const doValidate = async (rules2) => {
      const modelName = propString.value;
      const validator = new Schema({
        [modelName]: rules2
      });
      return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
        onValidationSucceeded();
        return true;
      }).catch((err) => {
        onValidationFailed(err);
        return Promise.reject(err);
      });
    };
    const validate = async (trigger, callback) => {
      if (isResettingField || !props2.prop) {
        return false;
      }
      const hasCallback = isFunction$1(callback);
      if (!validateEnabled.value) {
        callback == null ? void 0 : callback(false);
        return false;
      }
      const rules2 = getFilteredRule(trigger);
      if (rules2.length === 0) {
        callback == null ? void 0 : callback(true);
        return true;
      }
      setValidationState("validating");
      return doValidate(rules2).then(() => {
        callback == null ? void 0 : callback(true);
        return true;
      }).catch((err) => {
        const { fields } = err;
        callback == null ? void 0 : callback(false, fields);
        return hasCallback ? false : Promise.reject(fields);
      });
    };
    const clearValidate = () => {
      setValidationState("");
      validateMessage.value = "";
      isResettingField = false;
    };
    const resetField = async () => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props2.prop)
        return;
      const computedValue = getProp(model, props2.prop);
      isResettingField = true;
      computedValue.value = clone(initialValue);
      await nextTick();
      clearValidate();
      isResettingField = false;
    };
    const addInputId = (id) => {
      if (!inputIds.value.includes(id)) {
        inputIds.value.push(id);
      }
    };
    const removeInputId = (id) => {
      inputIds.value = inputIds.value.filter((listId) => listId !== id);
    };
    watch(() => props2.error, (val) => {
      validateMessage.value = val || "";
      setValidationState(val ? "error" : "");
    }, { immediate: true });
    watch(() => props2.validateStatus, (val) => setValidationState(val || ""));
    const context = reactive({
      ...toRefs(props2),
      $el: formItemRef,
      size: _size2,
      validateState,
      labelId,
      inputIds,
      isGroup,
      hasLabel,
      fieldValue,
      addInputId,
      removeInputId,
      resetField,
      clearValidate,
      validate
    });
    provide(formItemContextKey, context);
    onMounted(() => {
      if (props2.prop) {
        formContext == null ? void 0 : formContext.addField(context);
        initialValue = clone(fieldValue.value);
      }
    });
    onBeforeUnmount(() => {
      formContext == null ? void 0 : formContext.removeField(context);
    });
    expose({
      size: _size2,
      validateMessage,
      validateState,
      validate,
      clearValidate,
      resetField
    });
    return (_ctx, _cache) => {
      var _a3;
      return openBlock(), createElementBlock("div", {
        ref_key: "formItemRef",
        ref: formItemRef,
        class: normalizeClass(unref(formItemClasses)),
        role: unref(isGroup) ? "group" : void 0,
        "aria-labelledby": unref(isGroup) ? unref(labelId) : void 0
      }, [
        createVNode(unref(FormLabelWrap), {
          "is-auto-width": unref(labelStyle).width === "auto",
          "update-all": ((_a3 = unref(formContext)) == null ? void 0 : _a3.labelWidth) === "auto"
        }, {
          default: withCtx(() => [
            unref(hasLabel) ? (openBlock(), createBlock(resolveDynamicComponent(unref(labelFor) ? "label" : "div"), {
              key: 0,
              id: unref(labelId),
              for: unref(labelFor),
              class: normalizeClass(unref(ns).e("label")),
              style: normalizeStyle(unref(labelStyle))
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "label", { label: unref(currentLabel) }, () => [
                  createTextVNode(toDisplayString(unref(currentLabel)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        createBaseVNode("div", {
          class: normalizeClass(unref(ns).e("content")),
          style: normalizeStyle(unref(contentStyle))
        }, [
          renderSlot(_ctx.$slots, "default"),
          createVNode(TransitionGroup, {
            name: `${unref(ns).namespace.value}-zoom-in-top`
          }, {
            default: withCtx(() => [
              unref(shouldShowError) ? renderSlot(_ctx.$slots, "error", {
                key: 0,
                error: validateMessage.value
              }, () => [
                createBaseVNode("div", {
                  class: normalizeClass(unref(validateClasses))
                }, toDisplayString(validateMessage.value), 3)
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, _hoisted_1$9);
    };
  }
});
var FormItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "form-item.vue"]]);
const ElForm = withInstall(Form, {
  FormItem
});
const ElFormItem = withNoopInstall(FormItem);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  inheritAttrs: false
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Collection = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$8], ["__file", "collection.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  name: "ElCollectionItem",
  inheritAttrs: false
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var CollectionItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$7], ["__file", "collection-item.vue"]]);
const COLLECTION_ITEM_SIGN = `data-el-collection-item`;
const createCollectionWithScope = (name) => {
  const COLLECTION_NAME = `El${name}Collection`;
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`;
  const COLLECTION_INJECTION_KEY2 = Symbol(COLLECTION_NAME);
  const COLLECTION_ITEM_INJECTION_KEY2 = Symbol(COLLECTION_ITEM_NAME);
  const ElCollection2 = {
    ...Collection,
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref(null);
      const itemMap = /* @__PURE__ */ new Map();
      const getItems = () => {
        const collectionEl = unref(collectionRef);
        if (!collectionEl)
          return [];
        const orderedNodes = Array.from(collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`));
        const items = [...itemMap.values()];
        return items.sort((a2, b) => orderedNodes.indexOf(a2.ref) - orderedNodes.indexOf(b.ref));
      };
      provide(COLLECTION_INJECTION_KEY2, {
        itemMap,
        getItems,
        collectionRef
      });
    }
  };
  const ElCollectionItem2 = {
    ...CollectionItem,
    name: COLLECTION_ITEM_NAME,
    setup(_2, { attrs }) {
      const collectionItemRef = ref(null);
      const collectionInjection = inject(COLLECTION_INJECTION_KEY2, void 0);
      provide(COLLECTION_ITEM_INJECTION_KEY2, {
        collectionItemRef
      });
      onMounted(() => {
        const collectionItemEl = unref(collectionItemRef);
        if (collectionItemEl) {
          collectionInjection.itemMap.set(collectionItemEl, {
            ref: collectionItemEl,
            ...attrs
          });
        }
      });
      onBeforeUnmount(() => {
        const collectionItemEl = unref(collectionItemRef);
        collectionInjection.itemMap.delete(collectionItemEl);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: COLLECTION_INJECTION_KEY2,
    COLLECTION_ITEM_INJECTION_KEY: COLLECTION_ITEM_INJECTION_KEY2,
    ElCollection: ElCollection2,
    ElCollectionItem: ElCollectionItem2
  };
};
const rovingFocusGroupProps = buildProps({
  style: { type: definePropType([String, Array, Object]) },
  currentTabId: {
    type: definePropType(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: definePropType(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
});
const {
  ElCollection: ElCollection$1,
  ElCollectionItem: ElCollectionItem$1,
  COLLECTION_INJECTION_KEY: COLLECTION_INJECTION_KEY$1,
  COLLECTION_ITEM_INJECTION_KEY: COLLECTION_ITEM_INJECTION_KEY$1
} = createCollectionWithScope("RovingFocusGroup");
const ROVING_FOCUS_GROUP_INJECTION_KEY = Symbol("elRovingFocusGroup");
const ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY = Symbol("elRovingFocusGroupItem");
const MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
const getDirectionAwareKey = (key, dir) => {
  return key;
};
const getFocusIntent = (event, orientation, dir) => {
  const key = getDirectionAwareKey(event.key);
  return MAP_KEY_TO_FOCUS_INTENT[key];
};
const reorderArray = (array4, atIdx) => {
  return array4.map((_2, idx) => array4[(idx + atIdx) % array4.length]);
};
const focusFirst = (elements) => {
  const { activeElement: prevActive } = document;
  for (const element of elements) {
    if (element === prevActive)
      return;
    element.focus();
    if (prevActive !== document.activeElement)
      return;
  }
};
const CURRENT_TAB_ID_CHANGE_EVT = "currentTabIdChange";
const ENTRY_FOCUS_EVT = "rovingFocusGroup.entryFocus";
const EVT_OPTS = { bubbles: false, cancelable: true };
const _sfc_main$d = defineComponent({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: false,
  props: rovingFocusGroupProps,
  emits: [CURRENT_TAB_ID_CHANGE_EVT, "entryFocus"],
  setup(props2, { emit }) {
    var _a3;
    const currentTabbedId = ref((_a3 = props2.currentTabId || props2.defaultCurrentTabId) != null ? _a3 : null);
    const isBackingOut = ref(false);
    const isClickFocus = ref(false);
    const rovingFocusGroupRef = ref(null);
    const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const rovingFocusGroupRootStyle = computed(() => {
      return [
        {
          outline: "none"
        },
        props2.style
      ];
    });
    const onItemFocus = (tabbedId) => {
      emit(CURRENT_TAB_ID_CHANGE_EVT, tabbedId);
    };
    const onItemShiftTab = () => {
      isBackingOut.value = true;
    };
    const onMousedown = composeEventHandlers((e2) => {
      var _a22;
      (_a22 = props2.onMousedown) == null ? void 0 : _a22.call(props2, e2);
    }, () => {
      isClickFocus.value = true;
    });
    const onFocus = composeEventHandlers((e2) => {
      var _a22;
      (_a22 = props2.onFocus) == null ? void 0 : _a22.call(props2, e2);
    }, (e2) => {
      const isKeyboardFocus = !unref(isClickFocus);
      const { target, currentTarget } = e2;
      if (target === currentTarget && isKeyboardFocus && !unref(isBackingOut)) {
        const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS);
        currentTarget == null ? void 0 : currentTarget.dispatchEvent(entryFocusEvt);
        if (!entryFocusEvt.defaultPrevented) {
          const items = getItems().filter((item) => item.focusable);
          const activeItem = items.find((item) => item.active);
          const currentItem = items.find((item) => item.id === unref(currentTabbedId));
          const candidates = [activeItem, currentItem, ...items].filter(Boolean);
          const candidateNodes = candidates.map((item) => item.ref);
          focusFirst(candidateNodes);
        }
      }
      isClickFocus.value = false;
    });
    const onBlur = composeEventHandlers((e2) => {
      var _a22;
      (_a22 = props2.onBlur) == null ? void 0 : _a22.call(props2, e2);
    }, () => {
      isBackingOut.value = false;
    });
    const handleEntryFocus = (...args) => {
      emit("entryFocus", ...args);
    };
    provide(ROVING_FOCUS_GROUP_INJECTION_KEY, {
      currentTabbedId: readonly(currentTabbedId),
      loop: toRef$1(props2, "loop"),
      tabIndex: computed(() => {
        return unref(isBackingOut) ? -1 : 0;
      }),
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      orientation: toRef$1(props2, "orientation"),
      dir: toRef$1(props2, "dir"),
      onItemFocus,
      onItemShiftTab,
      onBlur,
      onFocus,
      onMousedown
    });
    watch(() => props2.currentTabId, (val) => {
      currentTabbedId.value = val != null ? val : null;
    });
    useEventListener$1(rovingFocusGroupRef, ENTRY_FOCUS_EVT, handleEntryFocus);
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var ElRovingFocusGroupImpl = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$6], ["__file", "roving-focus-group-impl.vue"]]);
const _sfc_main$c = defineComponent({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: ElCollection$1,
    ElRovingFocusGroupImpl
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_group_impl = resolveComponent("el-roving-focus-group-impl");
  const _component_el_focus_group_collection = resolveComponent("el-focus-group-collection");
  return openBlock(), createBlock(_component_el_focus_group_collection, null, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_group_impl, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var ElRovingFocusGroup = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$5], ["__file", "roving-focus-group.vue"]]);
const _sfc_main$b = defineComponent({
  components: {
    ElRovingFocusCollectionItem: ElCollectionItem$1
  },
  props: {
    focusable: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(props2, { emit }) {
    const { currentTabbedId, loop, onItemFocus, onItemShiftTab } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const id = useId();
    const rovingFocusGroupItemRef = ref(null);
    const handleMousedown = composeEventHandlers((e2) => {
      emit("mousedown", e2);
    }, (e2) => {
      if (!props2.focusable) {
        e2.preventDefault();
      } else {
        onItemFocus(unref(id));
      }
    });
    const handleFocus = composeEventHandlers((e2) => {
      emit("focus", e2);
    }, () => {
      onItemFocus(unref(id));
    });
    const handleKeydown = composeEventHandlers((e2) => {
      emit("keydown", e2);
    }, (e2) => {
      const { key, shiftKey, target, currentTarget } = e2;
      if (key === EVENT_CODE.tab && shiftKey) {
        onItemShiftTab();
        return;
      }
      if (target !== currentTarget)
        return;
      const focusIntent = getFocusIntent(e2);
      if (focusIntent) {
        e2.preventDefault();
        const items = getItems().filter((item) => item.focusable);
        let elements = items.map((item) => item.ref);
        switch (focusIntent) {
          case "last": {
            elements.reverse();
            break;
          }
          case "prev":
          case "next": {
            if (focusIntent === "prev") {
              elements.reverse();
            }
            const currentIdx = elements.indexOf(currentTarget);
            elements = loop.value ? reorderArray(elements, currentIdx + 1) : elements.slice(currentIdx + 1);
            break;
          }
        }
        nextTick(() => {
          focusFirst(elements);
        });
      }
    });
    const isCurrentTab = computed(() => currentTabbedId.value === unref(id));
    provide(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, {
      rovingFocusGroupItemRef,
      tabIndex: computed(() => unref(isCurrentTab) ? 0 : -1),
      handleMousedown,
      handleFocus,
      handleKeydown
    });
    return {
      id,
      handleKeydown,
      handleFocus,
      handleMousedown
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_collection_item = resolveComponent("el-roving-focus-collection-item");
  return openBlock(), createBlock(_component_el_roving_focus_collection_item, {
    id: _ctx.id,
    focusable: _ctx.focusable,
    active: _ctx.active
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var ElRovingFocusItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$4], ["__file", "roving-focus-item.vue"]]);
const dropdownProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  type: {
    type: definePropType(String)
  },
  placement: {
    type: definePropType(String),
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: definePropType([Number, String]),
    default: 0
  },
  maxHeight: {
    type: definePropType([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: definePropType(Object)
  },
  teleported: useTooltipContentProps.teleported
});
const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: iconPropType
  }
});
const dropdownMenuProps = buildProps({
  onKeydown: { type: definePropType(Function) }
});
const FIRST_KEYS = [
  EVENT_CODE.down,
  EVENT_CODE.pageDown,
  EVENT_CODE.home
];
const LAST_KEYS = [EVENT_CODE.up, EVENT_CODE.pageUp, EVENT_CODE.end];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY
} = createCollectionWithScope("Dropdown");
const DROPDOWN_INJECTION_KEY = Symbol("elDropdown");
const { ButtonGroup: ElButtonGroup } = ElButton;
const _sfc_main$a = defineComponent({
  name: "ElDropdown",
  components: {
    ElButton,
    ElButtonGroup,
    ElScrollbar,
    ElDropdownCollection: ElCollection,
    ElTooltip,
    ElRovingFocusGroup,
    ElOnlyChild: OnlyChild,
    ElIcon,
    ArrowDown: arrow_down_default
  },
  props: dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props2, { emit }) {
    const _instance = getCurrentInstance();
    const ns = useNamespace("dropdown");
    const { t: t2 } = useLocale();
    const triggeringElementRef = ref();
    const referenceElementRef = ref();
    const popperRef = ref(null);
    const contentRef = ref(null);
    const scrollbar = ref(null);
    const currentTabId = ref(null);
    const isUsingKeyboard = ref(false);
    const triggerKeys = [EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.down];
    const wrapStyle = computed(() => ({
      maxHeight: addUnit(props2.maxHeight)
    }));
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);
    const trigger = computed(() => castArray(props2.trigger));
    const defaultTriggerId = useId().value;
    const triggerId = computed(() => {
      return props2.id || defaultTriggerId;
    });
    watch([triggeringElementRef, trigger], ([triggeringElement, trigger2], [prevTriggeringElement]) => {
      var _a3, _b2, _c;
      if ((_a3 = prevTriggeringElement == null ? void 0 : prevTriggeringElement.$el) == null ? void 0 : _a3.removeEventListener) {
        prevTriggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
      }
      if ((_b2 = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _b2.removeEventListener) {
        triggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
      }
      if (((_c = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _c.addEventListener) && trigger2.includes("hover")) {
        triggeringElement.$el.addEventListener("pointerenter", onAutofocusTriggerEnter);
      }
    }, { immediate: true });
    onBeforeUnmount(() => {
      var _a3, _b2;
      if ((_b2 = (_a3 = triggeringElementRef.value) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.removeEventListener) {
        triggeringElementRef.value.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
      }
    });
    function handleClick() {
      handleClose();
    }
    function handleClose() {
      var _a3;
      (_a3 = popperRef.value) == null ? void 0 : _a3.onClose();
    }
    function handleOpen() {
      var _a3;
      (_a3 = popperRef.value) == null ? void 0 : _a3.onOpen();
    }
    const dropdownSize = useFormSize();
    function commandHandler(...args) {
      emit("command", ...args);
    }
    function onAutofocusTriggerEnter() {
      var _a3, _b2;
      (_b2 = (_a3 = triggeringElementRef.value) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.focus();
    }
    function onItemEnter() {
    }
    function onItemLeave() {
      const contentEl = unref(contentRef);
      trigger.value.includes("hover") && (contentEl == null ? void 0 : contentEl.focus());
      currentTabId.value = null;
    }
    function handleCurrentTabIdChange(id) {
      currentTabId.value = id;
    }
    function handleEntryFocus(e2) {
      if (!isUsingKeyboard.value) {
        e2.preventDefault();
        e2.stopImmediatePropagation();
      }
    }
    function handleBeforeShowTooltip() {
      emit("visible-change", true);
    }
    function handleShowTooltip(event) {
      if ((event == null ? void 0 : event.type) === "keydown") {
        contentRef.value.focus();
      }
    }
    function handleBeforeHideTooltip() {
      emit("visible-change", false);
    }
    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props2.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave
    });
    provide("elDropdown", {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef$1(props2, "trigger"),
      hideOnClick: toRef$1(props2, "hideOnClick")
    });
    const onFocusAfterTrapped = (e2) => {
      var _a3, _b2;
      e2.preventDefault();
      (_b2 = (_a3 = contentRef.value) == null ? void 0 : _a3.focus) == null ? void 0 : _b2.call(_a3, {
        preventScroll: true
      });
    };
    const handlerMainButtonClick = (event) => {
      emit("click", event);
    };
    return {
      t: t2,
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      triggerKeys,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      onFocusAfterTrapped,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _a3;
  const _component_el_dropdown_collection = resolveComponent("el-dropdown-collection");
  const _component_el_roving_focus_group = resolveComponent("el-roving-focus-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_only_child = resolveComponent("el-only-child");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button_group = resolveComponent("el-button-group");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)])
  }, [
    createVNode(_component_el_tooltip, {
      ref: "popperRef",
      role: _ctx.role,
      effect: _ctx.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": _ctx.popperOptions,
      "gpu-acceleration": false,
      "hide-after": _ctx.trigger === "hover" ? _ctx.hideTimeout : 0,
      "manual-mode": true,
      placement: _ctx.placement,
      "popper-class": [_ctx.ns.e("popper"), _ctx.popperClass],
      "reference-element": (_a3 = _ctx.referenceElementRef) == null ? void 0 : _a3.$el,
      trigger: _ctx.trigger,
      "trigger-keys": _ctx.triggerKeys,
      "trigger-target-el": _ctx.contentRef,
      "show-after": _ctx.trigger === "hover" ? _ctx.showTimeout : 0,
      "stop-popper-mouse-event": false,
      "virtual-ref": _ctx.triggeringElementRef,
      "virtual-triggering": _ctx.splitButton,
      disabled: _ctx.disabled,
      transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
      teleported: _ctx.teleported,
      pure: "",
      persistent: "",
      onBeforeShow: _ctx.handleBeforeShowTooltip,
      onShow: _ctx.handleShowTooltip,
      onBeforeHide: _ctx.handleBeforeHideTooltip
    }, createSlots({
      content: withCtx(() => [
        createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          "wrap-style": _ctx.wrapStyle,
          tag: "div",
          "view-class": _ctx.ns.e("list")
        }, {
          default: withCtx(() => [
            createVNode(_component_el_roving_focus_group, {
              loop: _ctx.loop,
              "current-tab-id": _ctx.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: _ctx.handleCurrentTabIdChange,
              onEntryFocus: _ctx.handleEntryFocus
            }, {
              default: withCtx(() => [
                createVNode(_component_el_dropdown_collection, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "dropdown")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      !_ctx.splitButton ? {
        name: "default",
        fn: withCtx(() => [
          createVNode(_component_el_only_child, {
            id: _ctx.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: _ctx.tabindex
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      } : void 0
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "onBeforeShow", "onShow", "onBeforeHide"]),
    _ctx.splitButton ? (openBlock(), createBlock(_component_el_button_group, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_el_button, mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          disabled: _ctx.disabled,
          tabindex: _ctx.tabindex,
          onClick: _ctx.handlerMainButtonClick
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        createVNode(_component_el_button, mergeProps({
          id: _ctx.triggerId,
          ref: "triggeringElementRef"
        }, _ctx.buttonProps, {
          role: "button",
          size: _ctx.dropdownSize,
          type: _ctx.type,
          class: _ctx.ns.e("caret-button"),
          disabled: _ctx.disabled,
          tabindex: _ctx.tabindex,
          "aria-label": _ctx.t("el.dropdown.toggleDropdown")
        }), {
          default: withCtx(() => [
            createVNode(_component_el_icon, {
              class: normalizeClass(_ctx.ns.e("icon"))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : createCommentVNode("v-if", true)
  ], 2);
}
var Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$3], ["__file", "dropdown.vue"]]);
const _sfc_main$9 = defineComponent({
  name: "DropdownItemImpl",
  components: {
    ElIcon
  },
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(_2, { emit }) {
    const ns = useNamespace("dropdown");
    const { role: menuRole } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionItemRef: dropdownCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY, void 0);
    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY$1, void 0);
    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
    const itemRef = composeRefs(dropdownCollectionItemRef, rovingFocusCollectionItemRef, rovingFocusGroupItemRef);
    const role = computed(() => {
      if (menuRole.value === "menu") {
        return "menuitem";
      } else if (menuRole.value === "navigation") {
        return "link";
      }
      return "button";
    });
    const handleKeydown = composeEventHandlers((e2) => {
      const { code: code2 } = e2;
      if (code2 === EVENT_CODE.enter || code2 === EVENT_CODE.space) {
        e2.preventDefault();
        e2.stopImmediatePropagation();
        emit("clickimpl", e2);
        return true;
      }
    }, handleItemKeydown);
    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: ""
      },
      role,
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown
    };
  }
});
const _hoisted_1$8 = ["aria-disabled", "tabindex", "role"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.divided ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      role: "separator",
      class: _ctx.ns.bem("menu", "item", "divided")
    }, _ctx.$attrs), null, 16)) : createCommentVNode("v-if", true),
    createBaseVNode("li", mergeProps({ ref: _ctx.itemRef }, { ..._ctx.dataset, ..._ctx.$attrs }, {
      "aria-disabled": _ctx.disabled,
      class: [_ctx.ns.be("menu", "item"), _ctx.ns.is("disabled", _ctx.disabled)],
      tabindex: _ctx.tabIndex,
      role: _ctx.role,
      onClick: _cache[0] || (_cache[0] = (e2) => _ctx.$emit("clickimpl", e2)),
      onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
      onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
      onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
      onPointermove: _cache[4] || (_cache[4] = (e2) => _ctx.$emit("pointermove", e2)),
      onPointerleave: _cache[5] || (_cache[5] = (e2) => _ctx.$emit("pointerleave", e2))
    }), [
      _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 16, _hoisted_1$8)
  ], 64);
}
var ElDropdownItemImpl = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$2], ["__file", "dropdown-item-impl.vue"]]);
const useDropdown = () => {
  const elDropdown = inject("elDropdown", {});
  const _elDropdownSize = computed(() => elDropdown == null ? void 0 : elDropdown.dropdownSize);
  return {
    elDropdown,
    _elDropdownSize
  };
};
const _sfc_main$8 = defineComponent({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: ElCollectionItem,
    ElRovingFocusItem,
    ElDropdownItemImpl
  },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click"],
  setup(props2, { emit, attrs }) {
    const { elDropdown } = useDropdown();
    const _instance = getCurrentInstance();
    const itemRef = ref(null);
    const textContent = computed(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = unref(itemRef)) == null ? void 0 : _a3.textContent) != null ? _b2 : "";
    });
    const { onItemEnter, onItemLeave } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const handlePointerMove = composeEventHandlers((e2) => {
      emit("pointermove", e2);
      return e2.defaultPrevented;
    }, whenMouse((e2) => {
      if (props2.disabled) {
        onItemLeave(e2);
        return;
      }
      const target = e2.currentTarget;
      if (target === document.activeElement || target.contains(document.activeElement)) {
        return;
      }
      onItemEnter(e2);
      if (!e2.defaultPrevented) {
        target == null ? void 0 : target.focus();
      }
    }));
    const handlePointerLeave = composeEventHandlers((e2) => {
      emit("pointerleave", e2);
      return e2.defaultPrevented;
    }, whenMouse((e2) => {
      onItemLeave(e2);
    }));
    const handleClick = composeEventHandlers((e2) => {
      if (props2.disabled) {
        return;
      }
      emit("click", e2);
      return e2.type !== "keydown" && e2.defaultPrevented;
    }, (e2) => {
      var _a3, _b2, _c;
      if (props2.disabled) {
        e2.stopImmediatePropagation();
        return;
      }
      if ((_a3 = elDropdown == null ? void 0 : elDropdown.hideOnClick) == null ? void 0 : _a3.value) {
        (_b2 = elDropdown.handleClick) == null ? void 0 : _b2.call(elDropdown);
      }
      (_c = elDropdown.commandHandler) == null ? void 0 : _c.call(elDropdown, props2.command, _instance, e2);
    });
    const propsAndAttrs = computed(() => {
      return { ...props2, ...attrs };
    });
    return {
      handleClick,
      handlePointerMove,
      handlePointerLeave,
      textContent,
      propsAndAttrs
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a3;
  const _component_el_dropdown_item_impl = resolveComponent("el-dropdown-item-impl");
  const _component_el_roving_focus_item = resolveComponent("el-roving-focus-item");
  const _component_el_dropdown_collection_item = resolveComponent("el-dropdown-collection-item");
  return openBlock(), createBlock(_component_el_dropdown_collection_item, {
    disabled: _ctx.disabled,
    "text-value": (_a3 = _ctx.textValue) != null ? _a3 : _ctx.textContent
  }, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_item, {
        focusable: !_ctx.disabled
      }, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown_item_impl, mergeProps(_ctx.propsAndAttrs, {
            onPointerleave: _ctx.handlePointerLeave,
            onPointermove: _ctx.handlePointerMove,
            onClickimpl: _ctx.handleClick
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var DropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$1], ["__file", "dropdown-item.vue"]]);
const _sfc_main$7 = defineComponent({
  name: "ElDropdownMenu",
  props: dropdownMenuProps,
  setup(props2) {
    const ns = useNamespace("dropdown");
    const { _elDropdownSize } = useDropdown();
    const size = _elDropdownSize.value;
    const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY, void 0);
    const { contentRef, role, triggerId } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionRef: dropdownCollectionRef, getItems } = inject(COLLECTION_INJECTION_KEY, void 0);
    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      tabIndex,
      onBlur,
      onFocus,
      onMousedown
    } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { collectionRef: rovingFocusGroupCollectionRef } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const dropdownKls = computed(() => {
      return [ns.b("menu"), ns.bm("menu", size == null ? void 0 : size.value)];
    });
    const dropdownListWrapperRef = composeRefs(contentRef, dropdownCollectionRef, focusTrapRef, rovingFocusGroupRef, rovingFocusGroupCollectionRef);
    const composedKeydown = composeEventHandlers((e2) => {
      var _a3;
      (_a3 = props2.onKeydown) == null ? void 0 : _a3.call(props2, e2);
    }, (e2) => {
      const { currentTarget, code: code2, target } = e2;
      currentTarget.contains(target);
      if (EVENT_CODE.tab === code2) {
        e2.stopImmediatePropagation();
      }
      e2.preventDefault();
      if (target !== unref(contentRef))
        return;
      if (!FIRST_LAST_KEYS.includes(code2))
        return;
      const items = getItems().filter((item) => !item.disabled);
      const targets = items.map((item) => item.ref);
      if (LAST_KEYS.includes(code2)) {
        targets.reverse();
      }
      focusFirst(targets);
    });
    const handleKeydown = (e2) => {
      composedKeydown(e2);
      onKeydown(e2);
    };
    return {
      size,
      rovingFocusGroupRootStyle,
      tabIndex,
      dropdownKls,
      role,
      triggerId,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      onFocus,
      onMousedown
    };
  }
});
const _hoisted_1$7 = ["role", "aria-labelledby"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    ref: _ctx.dropdownListWrapperRef,
    class: normalizeClass(_ctx.dropdownKls),
    style: normalizeStyle(_ctx.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: _ctx.role,
    "aria-labelledby": _ctx.triggerId,
    onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
    onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.onMousedown && _ctx.onMousedown(...args), ["self"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 46, _hoisted_1$7);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render], ["__file", "dropdown-menu.vue"]]);
const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
});
const ElDropdownItem = withNoopInstall(DropdownItem);
const ElDropdownMenu = withNoopInstall(DropdownMenu);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject$1 = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke2) => {
  return invoke2();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r2 = args[0];
  return typeof r2 === "function" ? readonly(customRef(() => ({ get: r2, set: noop }))) : ref(r2);
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function unrefElement(elRef) {
  var _a3;
  const plain = toValue(elRef);
  return (_a3 = plain == null ? void 0 : plain.$el) != null ? _a3 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register2 = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject$1(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register2(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported3 = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported3.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a3;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults2);
  const type4 = guessSerializerType(rawInit);
  const serializer = (_a3 = options.serializer) != null ? _a3 : StorageSerializers[type4];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      window2.dispatchEvent(new CustomEvent(customStorageEventName, {
        detail: {
          key,
          oldValue,
          newValue,
          storageArea: storage
        }
      }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(key);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type4 === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute: attribute2 = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window: window2 });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute22, value) => {
      const el = typeof selector2 === "string" ? window2 == null ? void 0 : window2.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      let style;
      if (disableTransition) {
        style = window2.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style.appendChild(document.createTextNode(styleString));
        window2.document.head.appendChild(style);
      }
      if (attribute22 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i2) => (i2 || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            el.classList.add(v);
          else
            el.classList.remove(v);
        });
      } else {
        el.setAttribute(attribute22, value);
      }
      if (disableTransition) {
        window2.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a3;
    updateHTMLAttrs(selector, attribute2, (_a3 = modes[mode]) != null ? _a3 : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch (e2) {
    return auto;
  }
}
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow
  } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a3;
      if (options.onChanged)
        (_a3 = options.onChanged) == null ? void 0 : _a3.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => {
    if (mode.system) {
      return mode.system.value;
    } else {
      const preferredDark = usePreferredDark({ window: window2 });
      return preferredDark.value ? "dark" : "light";
    }
  });
  const isDark2 = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark2;
}
const isDark = useDark({
  // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
  storageKey: "useDarkKEY",
  // 暗黑class名字
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light"
});
const localPreviewTheme = _getLocalItem("previewTheme") || "default";
const localCodeTheme = _getLocalItem("codeTheme") || "gradient";
const staticData = defineStore("staticData", {
  // 数据存到store里刷新页面会重置，持久化就不会了
  state: () => {
    return {
      // md预览主题列表
      previewThemeList: ["default", "github", "vuepress", "mk-cute", "smart-blue", "cyanosis"],
      // md代码主题列表
      codeThemeList: [
        "atom",
        "a11y",
        "github",
        "gradient",
        "kimbie",
        "paraiso",
        "qtcreator",
        "stackoverflow"
      ],
      // md预览主题
      previewTheme: localPreviewTheme,
      // md代码主题
      codeTheme: localCodeTheme,
      // 整体主题 黑夜和白天
      theme: isDark.value,
      // 头部图片地址
      pageHeaderList: []
    };
  },
  getters: {
    // 获取当前整体主题 黑夜/白天
    mainTheme() {
      return isDark.value;
    }
  },
  actions: {
    // 切换主题
    switchPreviewTheme(theme) {
      this.previewTheme = theme;
      _setLocalItem("previewTheme", this.previewThemeList.includes(this.previewTheme) ? this.previewTheme : "default");
    },
    // 切换代码主题
    switchCodeTheme(theme) {
      this.codeTheme = theme;
      _setLocalItem("codeTheme", this.codeThemeList.includes(this.codeTheme) ? this.codeTheme : "atom");
    }
  }
});
const T = (e2) => {
  const n2 = typeof e2;
  return n2 !== "function" && n2 !== "object" || e2 === null;
}, M = (e2) => {
  const n2 = e2.flags === "" ? void 0 : e2.flags;
  return new RegExp(e2.source, n2);
}, a = (e2, n2 = /* @__PURE__ */ new WeakMap()) => {
  if (e2 === null || T(e2))
    return e2;
  if (n2.has(e2))
    return n2.get(e2);
  if (e2 instanceof RegExp)
    return M(e2);
  if (e2 instanceof Date)
    return new Date(e2.getTime());
  if (e2 instanceof Function)
    return e2;
  if (e2 instanceof Map) {
    const o = /* @__PURE__ */ new Map();
    return n2.set(e2, o), e2.forEach((r2, s) => {
      o.set(s, a(r2, n2));
    }), o;
  }
  if (e2 instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    n2.set(e2, o);
    for (const r2 of e2)
      o.add(a(r2, n2));
    return o;
  }
  if (Array.isArray(e2)) {
    const o = [];
    return n2.set(e2, o), e2.forEach((r2) => {
      o.push(a(r2, n2));
    }), o;
  }
  const t2 = {};
  n2.set(e2, t2);
  for (const o in e2)
    Object.prototype.hasOwnProperty.call(e2, o) && (t2[o] = a(e2[o], n2));
  return t2;
}, R = (e2, n2 = 200) => {
  let t2 = 0;
  return (...o) => new Promise((r2) => {
    t2 && (clearTimeout(t2), r2("cancel")), t2 = window.setTimeout(() => {
      e2.apply(void 0, o), t2 = 0, r2("done");
    }, n2);
  });
}, I = () => `${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`, y = (e2) => e2 !== null && typeof e2 == "object" && !Array.isArray(e2), C = (e2, n2) => {
  for (const t2 in n2)
    y(n2[t2]) && y(e2[t2]) ? e2[t2] = C(
      e2[t2],
      n2[t2]
    ) : e2[t2] = n2[t2];
  return e2;
};
const prefix = "md-editor";
const iconfontSvgUrl = "https://at.alicdn.com/t/c/font_2605852_rfu1p40qggh.js";
const iconfontClassUrl = "https://at.alicdn.com/t/c/font_2605852_rfu1p40qggh.css";
const cdnBase = "https://cdnjs.cloudflare.com/ajax/libs";
const highlightUrl = `${cdnBase}/highlight.js/11.8.0/highlight.min.js`;
const prettierUrl = {
  main: `${cdnBase}/prettier/2.8.0/standalone.js`,
  markdown: `${cdnBase}/prettier/2.8.0/parser-markdown.js`
};
const cropperUrl = {
  css: `${cdnBase}/cropperjs/1.5.13/cropper.min.css`,
  js: `${cdnBase}/cropperjs/1.5.13/cropper.min.js`
};
const screenfullUrl = `${cdnBase}/screenfull.js/5.2.0/screenfull.min.js`;
const allToolbar = [
  "bold",
  "underline",
  "italic",
  "strikeThrough",
  "-",
  "title",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",
  "=",
  "prettier",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "previewOnly",
  "htmlPreview",
  "catalog",
  "github"
];
const allFooter = ["markdownTotal", "=", "scrollSwitch"];
const staticTextDefault = {
  "zh-CN": {
    toolbarTips: {
      bold: "加粗",
      underline: "下划线",
      italic: "斜体",
      strikeThrough: "删除线",
      title: "标题",
      sub: "下标",
      sup: "上标",
      quote: "引用",
      unorderedList: "无序列表",
      orderedList: "有序列表",
      task: "任务列表",
      codeRow: "行内代码",
      code: "块级代码",
      link: "链接",
      image: "图片",
      table: "表格",
      mermaid: "mermaid图",
      katex: "katex公式",
      revoke: "后退",
      next: "前进",
      save: "保存",
      prettier: "美化",
      pageFullscreen: "浏览器全屏",
      fullscreen: "屏幕全屏",
      preview: "预览",
      previewOnly: "仅预览",
      htmlPreview: "html代码预览",
      catalog: "目录",
      github: "源码地址"
    },
    titleItem: {
      h1: "一级标题",
      h2: "二级标题",
      h3: "三级标题",
      h4: "四级标题",
      h5: "五级标题",
      h6: "六级标题"
    },
    imgTitleItem: {
      link: "添加链接",
      upload: "上传图片",
      clip2upload: "裁剪上传"
    },
    linkModalTips: {
      linkTitle: "添加链接",
      imageTitle: "添加图片",
      descLabel: "链接描述：",
      descLabelPlaceHolder: "请输入描述...",
      urlLabel: "链接地址：",
      urlLabelPlaceHolder: "请输入链接...",
      buttonOK: "确定"
    },
    clipModalTips: {
      title: "裁剪图片上传",
      buttonUpload: "上传"
    },
    copyCode: {
      text: "复制代码",
      successTips: "已复制！",
      failTips: "复制失败！"
    },
    mermaid: {
      flow: "流程图",
      sequence: "时序图",
      gantt: "甘特图",
      class: "类图",
      state: "状态图",
      pie: "饼图",
      relationship: "关系图",
      journey: "旅程图"
    },
    katex: {
      inline: "行内公式",
      block: "块级公式"
    },
    footer: {
      markdownTotal: "字数",
      scrollAuto: "同步滚动"
    }
  },
  "en-US": {
    toolbarTips: {
      bold: "bold",
      underline: "underline",
      italic: "italic",
      strikeThrough: "strikeThrough",
      title: "title",
      sub: "subscript",
      sup: "superscript",
      quote: "quote",
      unorderedList: "unordered list",
      orderedList: "ordered list",
      task: "task list",
      codeRow: "inline code",
      code: "block-level code",
      link: "link",
      image: "image",
      table: "table",
      mermaid: "mermaid",
      katex: "formula",
      revoke: "revoke",
      next: "undo revoke",
      save: "save",
      prettier: "prettier",
      pageFullscreen: "fullscreen in page",
      fullscreen: "fullscreen",
      preview: "preview",
      previewOnly: "preview only",
      htmlPreview: "html preview",
      catalog: "catalog",
      github: "source code"
    },
    titleItem: {
      h1: "Lv1 Heading",
      h2: "Lv2 Heading",
      h3: "Lv3 Heading",
      h4: "Lv4 Heading",
      h5: "Lv5 Heading",
      h6: "Lv6 Heading"
    },
    imgTitleItem: {
      link: "Add Img Link",
      upload: "Upload Img",
      clip2upload: "Clip Upload"
    },
    linkModalTips: {
      linkTitle: "Add Link",
      imageTitle: "Add Image",
      descLabel: "Desc:",
      descLabelPlaceHolder: "Enter a description...",
      urlLabel: "Link:",
      urlLabelPlaceHolder: "Enter a link...",
      buttonOK: "OK"
    },
    clipModalTips: {
      title: "Crop Image",
      buttonUpload: "Upload"
    },
    copyCode: {
      text: "Copy",
      successTips: "Copied!",
      failTips: "Copy failed!"
    },
    mermaid: {
      flow: "flow",
      sequence: "sequence",
      gantt: "gantt",
      class: "class",
      state: "state",
      pie: "pie",
      relationship: "relationship",
      journey: "journey"
    },
    katex: {
      inline: "inline",
      block: "block"
    },
    footer: {
      markdownTotal: "Character Count",
      scrollAuto: "Scroll Auto"
    }
  }
};
const mermaidUrl = `${cdnBase}/mermaid/10.6.1/mermaid.esm.min.mjs`;
const katexUrl = {
  js: `${cdnBase}/KaTeX/0.16.9/katex.min.js`,
  css: `${cdnBase}/KaTeX/0.16.9/katex.min.css`
};
const codeCss = {
  a11y: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/a11y-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/a11y-dark.min.css`
  },
  atom: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/atom-one-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/atom-one-dark.min.css`
  },
  github: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/github.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/github-dark.min.css`
  },
  gradient: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/gradient-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/gradient-dark.min.css`
  },
  kimbie: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/kimbie-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/kimbie-dark.min.css`
  },
  paraiso: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/paraiso-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/paraiso-dark.min.css`
  },
  qtcreator: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/qtcreator-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/qtcreator-dark.min.css`
  },
  stackoverflow: {
    light: `${cdnBase}/highlight.js/11.8.0/styles/stackoverflow-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.8.0/styles/stackoverflow-dark.min.css`
  }
};
const configOption = {
  editorExtensions: {
    highlight: {
      js: highlightUrl,
      css: codeCss
    },
    prettier: {
      standaloneJs: prettierUrl.main,
      parserMarkdownJs: prettierUrl.markdown
    },
    cropper: {
      ...cropperUrl
    },
    iconfont: iconfontSvgUrl,
    iconfontClass: iconfontClassUrl,
    screenfull: {
      js: screenfullUrl
    },
    mermaid: {
      js: mermaidUrl
    },
    katex: {
      ...katexUrl
    }
  },
  editorExtensionsAttrs: {},
  editorConfig: {
    languageUserDefined: {},
    mermaidTemplate: {},
    renderDelay: 500,
    zIndex: 2e4
  },
  codeMirrorExtensions: (_theme, innerExtensions) => innerExtensions,
  markdownItConfig: () => {
  },
  markdownItPlugins: (s) => s,
  iconfontType: "svg",
  mermaidConfig: (c) => c
};
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, key + "", value);
  return value;
};
class Bus {
  constructor() {
    __publicField2(this, "pools", {});
  }
  // 移除事件监听
  remove(race, name, func) {
    const targetRace = this.pools[race];
    const events = targetRace && this.pools[race][name];
    if (events) {
      this.pools[race][name] = events.filter((item) => item !== func);
    }
  }
  // 清空全部事件，由于单一实例，多次注册会被共享内容
  clear(race) {
    this.pools[race] = {};
  }
  // 注册事件监听
  on(race, event) {
    if (!this.pools[race]) {
      this.pools[race] = {};
    }
    if (!this.pools[race][event.name]) {
      this.pools[race][event.name] = [];
    }
    this.pools[race][event.name].push(event.callback);
    return this.pools[race][event.name].includes(event.callback);
  }
  // 触发事件
  emit(race, name, ...params) {
    if (!this.pools[race]) {
      this.pools[race] = {};
    }
    const targetRace = this.pools[race];
    const events = targetRace[name];
    if (events) {
      events.forEach((item) => {
        try {
          item(...params);
        } catch (error2) {
          console.error(`${name} monitor event exception！`, error2);
        }
      });
    }
  }
}
const bus = new Bus();
const BUILD_FINISHED = "buildFinished";
const CATALOG_CHANGED = "catalogChanged";
const PUSH_CATALOG = "pushCatalog";
const RERENDER = "rerender";
const appendHandler = (tagName, attributes, checkKey = "") => {
  var _a3;
  const insertedEle = document.getElementById(attributes.id);
  if (!insertedEle) {
    const attrsCopy = { ...attributes };
    attrsCopy.onload = null;
    const ele = createHTMLElement(tagName, attrsCopy);
    attributes.onload && ele.addEventListener("load", attributes.onload);
    document.head.appendChild(ele);
  } else if (checkKey !== "") {
    if (Reflect.get(window, checkKey)) {
      (_a3 = attributes.onload) == null ? void 0 : _a3.call(insertedEle, new Event("load"));
    } else {
      attributes.onload && insertedEle.addEventListener("load", attributes.onload);
    }
  }
};
const updateHandler = (tagName, attributes) => {
  const insertedEle = document.getElementById(attributes.id);
  insertedEle == null ? void 0 : insertedEle.remove();
  appendHandler(tagName, attributes);
};
const createHTMLElement = (tagName, attributes) => {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach((key) => {
    if (attributes[key] !== void 0) {
      element[key] = attributes[key];
    }
  });
  return element;
};
const generateCodeRowNumber = (code2) => {
  if (!code2) {
    return code2;
  }
  const list2 = code2.split("\n");
  const rowNumberList = ['<span rn-wrapper aria-hidden="true">'];
  list2.forEach(() => {
    rowNumberList.push("<span></span>");
  });
  rowNumberList.push("</span>");
  return `<span class="code-block">${code2}</span>${rowNumberList.join("")}`;
};
const getRelativeTop = (element, container) => {
  if (!element || !container) {
    return 0;
  }
  const eleRect = element == null ? void 0 : element.getBoundingClientRect();
  if (container === document.documentElement) {
    return eleRect.top - container.clientTop;
  }
  const conRect = container == null ? void 0 : container.getBoundingClientRect();
  return eleRect.top - conRect.top;
};
const getNextId = /* @__PURE__ */ (() => {
  let count = 0;
  return (prefix2) => {
    return prefix2 + ++count;
  };
})();
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};
var isNode = function isNode2(selector) {
  return selector && selector.nodeType === 1;
};
var isSvg = function isSvg2(image2) {
  var source = image2.currentSrc || image2.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }
    if (isNodeList(selector)) {
      return [].slice.call(selector).filter(isSupported);
    }
    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }
    if (typeof selector === "string") {
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone2 = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone2.removeAttribute("id");
  clone2.style.position = "absolute";
  clone2.style.top = top + scrollTop + "px";
  clone2.style.left = left + scrollLeft + "px";
  clone2.style.width = width + "px";
  clone2.style.height = height + "px";
  clone2.style.transform = "";
  return clone2;
};
var createCustomEvent = function createCustomEvent2(type4, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type4, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type4, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom = function mediumZoom2(selector) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop2() {
    }
    fn(noop2, noop2);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions = _extends({}, zoomOptions, newOptions);
    images.forEach(function(image2) {
      image2.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone2 = function clone3() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom2(_extends({}, zoomOptions, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type4 = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image2) {
        image2.addEventListener(type4, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image2) {
      image2.classList.remove("medium-zoom-image");
      image2.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image2) {
      return imagesToDetach.indexOf(image2) === -1;
    });
    return zoom;
  };
  var on = function on2(type4, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image2) {
      image2.addEventListener("medium-zoom:" + type4, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type4, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type4, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image2) {
      image2.removeEventListener("medium-zoom:" + type4, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type4 && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          container = _extends({}, container, zoomOptions.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
      var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve(zoom);
      };
      if (active.zoomed) {
        resolve(zoom);
        return;
      }
      if (target) {
        active.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      if (active.original.parentElement && active.original.parentElement.tagName === "PICTURE" && active.original.currentSrc) {
        active.zoomed.src = active.original.currentSrc;
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
    // If the selector is omitted, it's replaced by the options
  };
  if (Object.prototype.toString.call(selector) === "[object Object]") {
    zoomOptions = selector;
  } else if (selector || typeof selector === "string") {
    attach(selector);
  }
  zoomOptions = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);
  var overlay = createOverlay(zoomOptions.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone: clone2,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css$1 = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css$1);
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i2 = 0; i2 < selection.rangeCount; i2++) {
    ranges.push(selection.getRangeAt(i2));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range3) {
        selection.addRange(range3);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format$1(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text2, options) {
  var debug, message, reselectPrevious, range3, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range3 = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text2;
    mark.ariaHidden = "true";
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e2) {
      e2.stopPropagation();
      if (options.format) {
        e2.preventDefault();
        if (typeof e2.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text2);
        } else {
          e2.clipboardData.clearData();
          e2.clipboardData.setData(options.format, text2);
        }
      }
      if (options.onCopy) {
        e2.preventDefault();
        options.onCopy(e2.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range3.selectNodeContents(mark);
    selection.addRange(range3);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text2);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format$1("message" in options ? options.message : defaultMessage);
      window.prompt(message, text2);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range3);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
const copy$1 = /* @__PURE__ */ getDefaultExportFromCjs(copyToClipboard);
const decodeCache = {};
function getDecodeCache(exclude) {
  let cache = decodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = decodeCache[exclude] = [];
  for (let i2 = 0; i2 < 128; i2++) {
    const ch = String.fromCharCode(i2);
    cache.push(ch);
  }
  for (let i2 = 0; i2 < exclude.length; i2++) {
    const ch = exclude.charCodeAt(i2);
    cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
  }
  return cache;
}
function decode$1(string3, exclude) {
  if (typeof exclude !== "string") {
    exclude = decode$1.defaultChars;
  }
  const cache = getDecodeCache(exclude);
  return string3.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    let result = "";
    for (let i2 = 0, l = seq.length; i2 < l; i2 += 3) {
      const b1 = parseInt(seq.slice(i2 + 1, i2 + 3), 16);
      if (b1 < 128) {
        result += cache[b1];
        continue;
      }
      if ((b1 & 224) === 192 && i2 + 3 < l) {
        const b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        if ((b2 & 192) === 128) {
          const chr = b1 << 6 & 1984 | b2 & 63;
          if (chr < 128) {
            result += "��";
          } else {
            result += String.fromCharCode(chr);
          }
          i2 += 3;
          continue;
        }
      }
      if ((b1 & 240) === 224 && i2 + 6 < l) {
        const b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        const b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
          const chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
          if (chr < 2048 || chr >= 55296 && chr <= 57343) {
            result += "���";
          } else {
            result += String.fromCharCode(chr);
          }
          i2 += 6;
          continue;
        }
      }
      if ((b1 & 248) === 240 && i2 + 9 < l) {
        const b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        const b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
        const b4 = parseInt(seq.slice(i2 + 10, i2 + 12), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
          let chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
          if (chr < 65536 || chr > 1114111) {
            result += "����";
          } else {
            chr -= 65536;
            result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
          }
          i2 += 9;
          continue;
        }
      }
      result += "�";
    }
    return result;
  });
}
decode$1.defaultChars = ";/?:@&=+$,#";
decode$1.componentChars = "";
const encodeCache = {};
function getEncodeCache(exclude) {
  let cache = encodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = encodeCache[exclude] = [];
  for (let i2 = 0; i2 < 128; i2++) {
    const ch = String.fromCharCode(i2);
    if (/^[0-9a-z]$/i.test(ch)) {
      cache.push(ch);
    } else {
      cache.push("%" + ("0" + i2.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (let i2 = 0; i2 < exclude.length; i2++) {
    cache[exclude.charCodeAt(i2)] = exclude[i2];
  }
  return cache;
}
function encode$1(string3, exclude, keepEscaped) {
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode$1.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  const cache = getEncodeCache(exclude);
  let result = "";
  for (let i2 = 0, l = string3.length; i2 < l; i2++) {
    const code2 = string3.charCodeAt(i2);
    if (keepEscaped && code2 === 37 && i2 + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string3.slice(i2 + 1, i2 + 3))) {
        result += string3.slice(i2, i2 + 3);
        i2 += 2;
        continue;
      }
    }
    if (code2 < 128) {
      result += cache[code2];
      continue;
    }
    if (code2 >= 55296 && code2 <= 57343) {
      if (code2 >= 55296 && code2 <= 56319 && i2 + 1 < l) {
        const nextCode = string3.charCodeAt(i2 + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string3[i2] + string3[i2 + 1]);
          i2++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string3[i2]);
  }
  return result;
}
encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode$1.componentChars = "-_.!~*'()";
function format(url2) {
  let result = "";
  result += url2.protocol || "";
  result += url2.slashes ? "//" : "";
  result += url2.auth ? url2.auth + "@" : "";
  if (url2.hostname && url2.hostname.indexOf(":") !== -1) {
    result += "[" + url2.hostname + "]";
  } else {
    result += url2.hostname || "";
  }
  result += url2.port ? ":" + url2.port : "";
  result += url2.pathname || "";
  result += url2.search || "";
  result += url2.hash || "";
  return result;
}
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}
const protocolPattern = /^([a-z0-9.+-]+:)/i;
const portPattern = /:[0-9]*$/;
const simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
const delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
const unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
const autoEscape = ["'"].concat(unwise);
const nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
const hostEndingChars = ["/", "?", "#"];
const hostnameMaxLen = 255;
const hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
const hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
const hostlessProtocol = {
  javascript: true,
  "javascript:": true
};
const slashedProtocol = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function urlParse(url2, slashesDenoteHost) {
  if (url2 && url2 instanceof Url)
    return url2;
  const u = new Url();
  u.parse(url2, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url2, slashesDenoteHost) {
  let lowerProto, hec, slashes;
  let rest = url2;
  rest = rest.trim();
  if (!slashesDenoteHost && url2.split("#").length === 1) {
    const simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }
  let proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    let hostEnd = -1;
    for (let i2 = 0; i2 < hostEndingChars.length; i2++) {
      hec = rest.indexOf(hostEndingChars[i2]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    let auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }
    hostEnd = -1;
    for (let i2 = 0; i2 < nonHostChars.length; i2++) {
      hec = rest.indexOf(nonHostChars[i2]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }
    if (rest[hostEnd - 1] === ":") {
      hostEnd--;
    }
    const host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    this.parseHost(host);
    this.hostname = this.hostname || "";
    const ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      const hostparts = this.hostname.split(/\./);
      for (let i2 = 0, l = hostparts.length; i2 < l; i2++) {
        const part = hostparts[i2];
        if (!part) {
          continue;
        }
        if (!part.match(hostnamePartPattern)) {
          let newpart = "";
          for (let j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            const validParts = hostparts.slice(0, i2);
            const notHost = hostparts.slice(i2 + 1);
            const bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join(".") + rest;
            }
            this.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = "";
    }
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }
  const hash = rest.indexOf("#");
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  const qm = rest.indexOf("?");
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) {
    this.pathname = rest;
  }
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = "";
  }
  return this;
};
Url.prototype.parseHost = function(host) {
  let port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) {
    this.hostname = host;
  }
};
const mdurl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: decode$1,
  encode: encode$1,
  format,
  parse: urlParse
}, Symbol.toStringTag, { value: "Module" }));
const Any = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
const Cc = /[\0-\x1F\x7F-\x9F]/;
const regex$1 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
const P = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
const regex = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/;
const Z = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
const ucmicro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any,
  Cc,
  Cf: regex$1,
  P,
  S: regex,
  Z
}, Symbol.toStringTag, { value: "Module" }));
const htmlDecodeTree = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((c) => c.charCodeAt(0))
);
const xmlDecodeTree = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((c) => c.charCodeAt(0))
);
var _a;
const decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
const fromCodePoint$1 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  }
);
function replaceCodePoint(codePoint) {
  var _a3;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a3 = decodeMap.get(codePoint)) !== null && _a3 !== void 0 ? _a3 : codePoint;
}
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
  CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
  CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
  CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code2) {
  return code2 >= CharCodes.ZERO && code2 <= CharCodes.NINE;
}
function isHexadecimalCharacter(code2) {
  return code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_F || code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code2) {
  return code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_Z || code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_Z || isNumber(code2);
}
function isEntityInAttributeInvalidEnd(code2) {
  return code2 === CharCodes.EQUALS || isAsciiAlphaNumeric(code2);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
  constructor(decodeTree, emitCodePoint, errors2) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors2;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base2) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base2, digitCount) + parseInt(str.substr(start, digitCount), base2);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a3;
    if (this.consumed <= expectedLength) {
      (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a3;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a3;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
}
function getDecoder(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint$1(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo = nodeIdx;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo = mid + 1;
    } else if (midVal > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
const htmlDecoder = getDecoder(htmlDecodeTree);
getDecoder(xmlDecodeTree);
function decodeHTML(str, mode = DecodingMode.Legacy) {
  return htmlDecoder(str, mode);
}
function _class$1(obj) {
  return Object.prototype.toString.call(obj);
}
function isString$1(obj) {
  return _class$1(obj) === "[object String]";
}
const _hasOwnProperty = Object.prototype.hasOwnProperty;
function has(object4, key) {
  return _hasOwnProperty.call(object4, key);
}
function assign$1(obj) {
  const sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    if (typeof source !== "object") {
      throw new TypeError(source + "must be object");
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}
function isValidEntityCode(c) {
  if (c >= 55296 && c <= 57343) {
    return false;
  }
  if (c >= 64976 && c <= 65007) {
    return false;
  }
  if ((c & 65535) === 65535 || (c & 65535) === 65534) {
    return false;
  }
  if (c >= 0 && c <= 8) {
    return false;
  }
  if (c === 11) {
    return false;
  }
  if (c >= 14 && c <= 31) {
    return false;
  }
  if (c >= 127 && c <= 159) {
    return false;
  }
  if (c > 1114111) {
    return false;
  }
  return true;
}
function fromCodePoint(c) {
  if (c > 65535) {
    c -= 65536;
    const surrogate1 = 55296 + (c >> 10);
    const surrogate2 = 56320 + (c & 1023);
    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}
const UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
const ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
const UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
const DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function replaceEntityPattern(match2, name) {
  if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
    const code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
    if (isValidEntityCode(code2)) {
      return fromCodePoint(code2);
    }
    return match2;
  }
  const decoded = decodeHTML(match2);
  if (decoded !== match2) {
    return decoded;
  }
  return match2;
}
function unescapeMd(str) {
  if (str.indexOf("\\") < 0) {
    return str;
  }
  return str.replace(UNESCAPE_MD_RE, "$1");
}
function unescapeAll(str) {
  if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
    return str;
  }
  return str.replace(UNESCAPE_ALL_RE, function(match2, escaped, entity2) {
    if (escaped) {
      return escaped;
    }
    return replaceEntityPattern(match2, entity2);
  });
}
const HTML_ESCAPE_TEST_RE = /[&<>"]/;
const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
const HTML_REPLACEMENTS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}
function escapeHtml$1(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}
const REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
function escapeRE$1(str) {
  return str.replace(REGEXP_ESCAPE_RE, "\\$&");
}
function isSpace(code2) {
  switch (code2) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function isWhiteSpace(code2) {
  if (code2 >= 8192 && code2 <= 8202) {
    return true;
  }
  switch (code2) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return true;
  }
  return false;
}
function isPunctChar(ch) {
  return P.test(ch) || regex.test(ch);
}
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function normalizeReference(str) {
  str = str.trim().replace(/\s+/g, " ");
  if ("ẞ".toLowerCase() === "Ṿ") {
    str = str.replace(/ẞ/g, "ß");
  }
  return str.toLowerCase().toUpperCase();
}
const lib$2 = { mdurl, ucmicro };
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt,
  assign: assign$1,
  escapeHtml: escapeHtml$1,
  escapeRE: escapeRE$1,
  fromCodePoint,
  has,
  isMdAsciiPunct,
  isPunctChar,
  isSpace,
  isString: isString$1,
  isValidEntityCode,
  isWhiteSpace,
  lib: lib$2,
  normalizeReference,
  unescapeAll,
  unescapeMd
}, Symbol.toStringTag, { value: "Module" }));
function parseLinkLabel(state, start, disableNested) {
  let level, found, marker, prevPos;
  const max = state.posMax;
  const oldPos = state.pos;
  state.pos = start + 1;
  level = 1;
  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 93) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }
    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 91) {
      if (prevPos === state.pos - 1) {
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }
  let labelEnd = -1;
  if (found) {
    labelEnd = state.pos;
  }
  state.pos = oldPos;
  return labelEnd;
}
function parseLinkDestination(str, start, max) {
  let code2;
  let pos = start;
  const result = {
    ok: false,
    pos: 0,
    str: ""
  };
  if (str.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max) {
      code2 = str.charCodeAt(pos);
      if (code2 === 10) {
        return result;
      }
      if (code2 === 60) {
        return result;
      }
      if (code2 === 62) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code2 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return result;
  }
  let level = 0;
  while (pos < max) {
    code2 = str.charCodeAt(pos);
    if (code2 === 32) {
      break;
    }
    if (code2 < 32 || code2 === 127) {
      break;
    }
    if (code2 === 92 && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 32) {
        break;
      }
      pos += 2;
      continue;
    }
    if (code2 === 40) {
      level++;
      if (level > 32) {
        return result;
      }
    }
    if (code2 === 41) {
      if (level === 0) {
        break;
      }
      level--;
    }
    pos++;
  }
  if (start === pos) {
    return result;
  }
  if (level !== 0) {
    return result;
  }
  result.str = unescapeAll(str.slice(start, pos));
  result.pos = pos;
  result.ok = true;
  return result;
}
function parseLinkTitle(str, start, max, prev_state) {
  let code2;
  let pos = start;
  const state = {
    // if `true`, this is a valid link title
    ok: false,
    // if `true`, this link can be continued on the next line
    can_continue: false,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (prev_state) {
    state.str = prev_state.str;
    state.marker = prev_state.marker;
  } else {
    if (pos >= max) {
      return state;
    }
    let marker = str.charCodeAt(pos);
    if (marker !== 34 && marker !== 39 && marker !== 40) {
      return state;
    }
    start++;
    pos++;
    if (marker === 40) {
      marker = 41;
    }
    state.marker = marker;
  }
  while (pos < max) {
    code2 = str.charCodeAt(pos);
    if (code2 === state.marker) {
      state.pos = pos + 1;
      state.str += unescapeAll(str.slice(start, pos));
      state.ok = true;
      return state;
    } else if (code2 === 40 && state.marker === 41) {
      return state;
    } else if (code2 === 92 && pos + 1 < max) {
      pos++;
    }
    pos++;
  }
  state.can_continue = true;
  state.str += unescapeAll(str.slice(start, pos));
  return state;
}
const helpers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination,
  parseLinkLabel,
  parseLinkTitle
}, Symbol.toStringTag, { value: "Module" }));
const default_rules = {};
default_rules.code_inline = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  return "<code" + slf.renderAttrs(token) + ">" + escapeHtml$1(token.content) + "</code>";
};
default_rules.code_block = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml$1(tokens[idx].content) + "</code></pre>\n";
};
default_rules.fence = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  const info = token.info ? unescapeAll(token.info).trim() : "";
  let langName = "";
  let langAttrs = "";
  if (info) {
    const arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join("");
  }
  let highlighted;
  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml$1(token.content);
  } else {
    highlighted = escapeHtml$1(token.content);
  }
  if (highlighted.indexOf("<pre") === 0) {
    return highlighted + "\n";
  }
  if (info) {
    const i2 = token.attrIndex("class");
    const tmpAttrs = token.attrs ? token.attrs.slice() : [];
    if (i2 < 0) {
      tmpAttrs.push(["class", options.langPrefix + langName]);
    } else {
      tmpAttrs[i2] = tmpAttrs[i2].slice();
      tmpAttrs[i2][1] += " " + options.langPrefix + langName;
    }
    const tmpToken = {
      attrs: tmpAttrs
    };
    return `<pre><code${slf.renderAttrs(tmpToken)}>${highlighted}</code></pre>
`;
  }
  return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>
`;
};
default_rules.image = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
  return slf.renderToken(tokens, idx, options);
};
default_rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
default_rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
default_rules.text = function(tokens, idx) {
  return escapeHtml$1(tokens[idx].content);
};
default_rules.html_block = function(tokens, idx) {
  return tokens[idx].content;
};
default_rules.html_inline = function(tokens, idx) {
  return tokens[idx].content;
};
function Renderer() {
  this.rules = assign$1({}, default_rules);
}
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  let i2, l, result;
  if (!token.attrs) {
    return "";
  }
  result = "";
  for (i2 = 0, l = token.attrs.length; i2 < l; i2++) {
    result += " " + escapeHtml$1(token.attrs[i2][0]) + '="' + escapeHtml$1(token.attrs[i2][1]) + '"';
  }
  return result;
};
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  const token = tokens[idx];
  let result = "";
  if (token.hidden) {
    return "";
  }
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += "\n";
  }
  result += (token.nesting === -1 ? "</" : "<") + token.tag;
  result += this.renderAttrs(token);
  if (token.nesting === 0 && options.xhtmlOut) {
    result += " /";
  }
  let needLf = false;
  if (token.block) {
    needLf = true;
    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        const nextToken = tokens[idx + 1];
        if (nextToken.type === "inline" || nextToken.hidden) {
          needLf = false;
        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          needLf = false;
        }
      }
    }
  }
  result += needLf ? ">\n" : ">";
  return result;
};
Renderer.prototype.renderInline = function(tokens, options, env) {
  let result = "";
  const rules2 = this.rules;
  for (let i2 = 0, len = tokens.length; i2 < len; i2++) {
    const type4 = tokens[i2].type;
    if (typeof rules2[type4] !== "undefined") {
      result += rules2[type4](tokens, i2, options, env, this);
    } else {
      result += this.renderToken(tokens, i2, options);
    }
  }
  return result;
};
Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
  let result = "";
  for (let i2 = 0, len = tokens.length; i2 < len; i2++) {
    switch (tokens[i2].type) {
      case "text":
        result += tokens[i2].content;
        break;
      case "image":
        result += this.renderInlineAsText(tokens[i2].children, options, env);
        break;
      case "html_inline":
      case "html_block":
        result += tokens[i2].content;
        break;
      case "softbreak":
      case "hardbreak":
        result += "\n";
        break;
    }
  }
  return result;
};
Renderer.prototype.render = function(tokens, options, env) {
  let result = "";
  const rules2 = this.rules;
  for (let i2 = 0, len = tokens.length; i2 < len; i2++) {
    const type4 = tokens[i2].type;
    if (type4 === "inline") {
      result += this.renderInline(tokens[i2].children, options, env);
    } else if (typeof rules2[type4] !== "undefined") {
      result += rules2[type4](tokens, i2, options, env, this);
    } else {
      result += this.renderToken(tokens, i2, options, env);
    }
  }
  return result;
};
function Ruler() {
  this.__rules__ = [];
  this.__cache__ = null;
}
Ruler.prototype.__find__ = function(name) {
  for (let i2 = 0; i2 < this.__rules__.length; i2++) {
    if (this.__rules__[i2].name === name) {
      return i2;
    }
  }
  return -1;
};
Ruler.prototype.__compile__ = function() {
  const self2 = this;
  const chains = [""];
  self2.__rules__.forEach(function(rule) {
    if (!rule.enabled) {
      return;
    }
    rule.alt.forEach(function(altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });
  self2.__cache__ = {};
  chains.forEach(function(chain) {
    self2.__cache__[chain] = [];
    self2.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self2.__cache__[chain].push(rule.fn);
    });
  });
};
Ruler.prototype.at = function(name, fn, options) {
  const index2 = this.__find__(name);
  const opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + name);
  }
  this.__rules__[index2].fn = fn;
  this.__rules__[index2].alt = opt.alt || [];
  this.__cache__ = null;
};
Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
  const index2 = this.__find__(beforeName);
  const opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + beforeName);
  }
  this.__rules__.splice(index2, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.after = function(afterName, ruleName, fn, options) {
  const index2 = this.__find__(afterName);
  const opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + afterName);
  }
  this.__rules__.splice(index2 + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.push = function(ruleName, fn, options) {
  const opt = options || {};
  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.enable = function(list2, ignoreInvalid) {
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  const result = [];
  list2.forEach(function(name) {
    const idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler.prototype.enableOnly = function(list2, ignoreInvalid) {
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  this.__rules__.forEach(function(rule) {
    rule.enabled = false;
  });
  this.enable(list2, ignoreInvalid);
};
Ruler.prototype.disable = function(list2, ignoreInvalid) {
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  const result = [];
  list2.forEach(function(name) {
    const idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler.prototype.getRules = function(chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};
function Token(type4, tag, nesting) {
  this.type = type4;
  this.tag = tag;
  this.attrs = null;
  this.map = null;
  this.nesting = nesting;
  this.level = 0;
  this.children = null;
  this.content = "";
  this.markup = "";
  this.info = "";
  this.meta = null;
  this.block = false;
  this.hidden = false;
}
Token.prototype.attrIndex = function attrIndex(name) {
  if (!this.attrs) {
    return -1;
  }
  const attrs = this.attrs;
  for (let i2 = 0, len = attrs.length; i2 < len; i2++) {
    if (attrs[i2][0] === name) {
      return i2;
    }
  }
  return -1;
};
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [attrData];
  }
};
Token.prototype.attrSet = function attrSet(name, value) {
  const idx = this.attrIndex(name);
  const attrData = [name, value];
  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};
Token.prototype.attrGet = function attrGet(name) {
  const idx = this.attrIndex(name);
  let value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};
Token.prototype.attrJoin = function attrJoin(name, value) {
  const idx = this.attrIndex(name);
  if (idx < 0) {
    this.attrPush([name, value]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
  }
};
function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md;
}
StateCore.prototype.Token = Token;
const NEWLINES_RE = /\r\n?|\n/g;
const NULL_RE = /\0/g;
function normalize(state) {
  let str;
  str = state.src.replace(NEWLINES_RE, "\n");
  str = str.replace(NULL_RE, "�");
  state.src = str;
}
function block(state) {
  let token;
  if (state.inlineMode) {
    token = new state.Token("inline", "", 0);
    token.content = state.src;
    token.map = [0, 1];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
}
function inline(state) {
  const tokens = state.tokens;
  for (let i2 = 0, l = tokens.length; i2 < l; i2++) {
    const tok = tokens[i2];
    if (tok.type === "inline") {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
}
function isLinkOpen$1(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose$1(str) {
  return /^<\/a\s*>/i.test(str);
}
function linkify$1(state) {
  const blockTokens = state.tokens;
  if (!state.md.options.linkify) {
    return;
  }
  for (let j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }
    let tokens = blockTokens[j].children;
    let htmlLinkLevel = 0;
    for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
      const currentToken = tokens[i2];
      if (currentToken.type === "link_close") {
        i2--;
        while (tokens[i2].level !== currentToken.level && tokens[i2].type !== "link_open") {
          i2--;
        }
        continue;
      }
      if (currentToken.type === "html_inline") {
        if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose$1(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) {
        continue;
      }
      if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
        const text2 = currentToken.content;
        let links = state.md.linkify.match(text2);
        const nodes = [];
        let level = currentToken.level;
        let lastPos = 0;
        if (links.length > 0 && links[0].index === 0 && i2 > 0 && tokens[i2 - 1].type === "text_special") {
          links = links.slice(1);
        }
        for (let ln = 0; ln < links.length; ln++) {
          const url2 = links[ln].url;
          const fullUrl = state.md.normalizeLink(url2);
          if (!state.md.validateLink(fullUrl)) {
            continue;
          }
          let urlText = links[ln].text;
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
          } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }
          const pos = links[ln].index;
          if (pos > lastPos) {
            const token = new state.Token("text", "", 0);
            token.content = text2.slice(lastPos, pos);
            token.level = level;
            nodes.push(token);
          }
          const token_o = new state.Token("link_open", "a", 1);
          token_o.attrs = [["href", fullUrl]];
          token_o.level = level++;
          token_o.markup = "linkify";
          token_o.info = "auto";
          nodes.push(token_o);
          const token_t = new state.Token("text", "", 0);
          token_t.content = urlText;
          token_t.level = level;
          nodes.push(token_t);
          const token_c = new state.Token("link_close", "a", -1);
          token_c.level = --level;
          token_c.markup = "linkify";
          token_c.info = "auto";
          nodes.push(token_c);
          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text2.length) {
          const token = new state.Token("text", "", 0);
          token.content = text2.slice(lastPos);
          token.level = level;
          nodes.push(token);
        }
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i2, nodes);
      }
    }
  }
}
const RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
const SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
const SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
const SCOPED_ABBR = {
  c: "©",
  r: "®",
  tm: "™"
};
function replaceFn(match2, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}
function replace_scoped(inlineTokens) {
  let inside_autolink = 0;
  for (let i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
    const token = inlineTokens[i2];
    if (token.type === "text" && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }
    if (token.type === "link_open" && token.info === "auto") {
      inside_autolink--;
    }
    if (token.type === "link_close" && token.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace_rare(inlineTokens) {
  let inside_autolink = 0;
  for (let i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
    const token = inlineTokens[i2];
    if (token.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
      }
    }
    if (token.type === "link_open" && token.info === "auto") {
      inside_autolink--;
    }
    if (token.type === "link_close" && token.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace(state) {
  let blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline") {
      continue;
    }
    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }
    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }
  }
}
const QUOTE_TEST_RE = /['"]/;
const QUOTE_RE = /['"]/g;
const APOSTROPHE = "’";
function replaceAt(str, index2, ch) {
  return str.slice(0, index2) + ch + str.slice(index2 + 1);
}
function process_inlines(tokens, state) {
  let j;
  const stack = [];
  for (let i2 = 0; i2 < tokens.length; i2++) {
    const token = tokens[i2];
    const thisLevel = tokens[i2].level;
    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) {
        break;
      }
    }
    stack.length = j + 1;
    if (token.type !== "text") {
      continue;
    }
    let text2 = token.content;
    let pos = 0;
    let max = text2.length;
    OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        const t2 = QUOTE_RE.exec(text2);
        if (!t2) {
          break;
        }
        let canOpen = true;
        let canClose = true;
        pos = t2.index + 1;
        const isSingle = t2[0] === "'";
        let lastChar = 32;
        if (t2.index - 1 >= 0) {
          lastChar = text2.charCodeAt(t2.index - 1);
        } else {
          for (j = i2 - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        let nextChar = 32;
        if (pos < max) {
          nextChar = text2.charCodeAt(pos);
        } else {
          for (j = i2 + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
        const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
        const isLastWhiteSpace = isWhiteSpace(lastChar);
        const isNextWhiteSpace = isWhiteSpace(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 && t2[0] === '"') {
          if (lastChar >= 48 && lastChar <= 57) {
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          if (isSingle) {
            token.content = replaceAt(token.content, t2.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          for (j = stack.length - 1; j >= 0; j--) {
            let item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              let openQuote;
              let closeQuote;
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              token.content = replaceAt(token.content, t2.index, closeQuote);
              tokens[item.token].content = replaceAt(
                tokens[item.token].content,
                item.pos,
                openQuote
              );
              pos += closeQuote.length - 1;
              if (item.token === i2) {
                pos += openQuote.length - 1;
              }
              text2 = token.content;
              max = text2.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i2,
            pos: t2.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t2.index, APOSTROPHE);
        }
      }
  }
}
function smartquotes(state) {
  if (!state.md.options.typographer) {
    return;
  }
  for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }
    process_inlines(state.tokens[blkIdx].children, state);
  }
}
function text_join(state) {
  let curr, last;
  const blockTokens = state.tokens;
  const l = blockTokens.length;
  for (let j = 0; j < l; j++) {
    if (blockTokens[j].type !== "inline")
      continue;
    const tokens = blockTokens[j].children;
    const max = tokens.length;
    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === "text_special") {
        tokens[curr].type = "text";
      }
    }
    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }
        last++;
      }
    }
    if (curr !== last) {
      tokens.length = last;
    }
  }
}
const _rules$2 = [
  ["normalize", normalize],
  ["block", block],
  ["inline", inline],
  ["linkify", linkify$1],
  ["replacements", replace],
  ["smartquotes", smartquotes],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", text_join]
];
function Core() {
  this.ruler = new Ruler();
  for (let i2 = 0; i2 < _rules$2.length; i2++) {
    this.ruler.push(_rules$2[i2][0], _rules$2[i2][1]);
  }
}
Core.prototype.process = function(state) {
  const rules2 = this.ruler.getRules("");
  for (let i2 = 0, l = rules2.length; i2 < l; i2++) {
    rules2[i2](state);
  }
};
Core.prototype.State = StateCore;
function StateBlock(src, md, env, tokens) {
  this.src = src;
  this.md = md;
  this.env = env;
  this.tokens = tokens;
  this.bMarks = [];
  this.eMarks = [];
  this.tShift = [];
  this.sCount = [];
  this.bsCount = [];
  this.blkIndent = 0;
  this.line = 0;
  this.lineMax = 0;
  this.tight = false;
  this.ddIndent = -1;
  this.listIndent = -1;
  this.parentType = "root";
  this.level = 0;
  const s = this.src;
  for (let start = 0, pos = 0, indent = 0, offset = 0, len = s.length, indent_found = false; pos < len; pos++) {
    const ch = s.charCodeAt(pos);
    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;
        if (ch === 9) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }
    if (ch === 10 || pos === len - 1) {
      if (ch !== 10) {
        pos++;
      }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);
      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);
  this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(type4, tag, nesting) {
  const token = new Token(type4, tag, nesting);
  token.block = true;
  if (nesting < 0)
    this.level--;
  token.level = this.level;
  if (nesting > 0)
    this.level++;
  this.tokens.push(token);
  return token;
};
StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (let max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  for (let max = this.src.length; pos < max; pos++) {
    const ch = this.src.charCodeAt(pos);
    if (!isSpace(ch)) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code2) {
  for (let max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code2) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (code2 !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  if (begin >= end) {
    return "";
  }
  const queue = new Array(end - begin);
  for (let i2 = 0, line = begin; line < end; line++, i2++) {
    let lineIndent = 0;
    const lineStart = this.bMarks[line];
    let first = lineStart;
    let last;
    if (line + 1 < end || keepLastLF) {
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }
    while (first < last && lineIndent < indent) {
      const ch = this.src.charCodeAt(first);
      if (isSpace(ch)) {
        if (ch === 9) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        lineIndent++;
      } else {
        break;
      }
      first++;
    }
    if (lineIndent > indent) {
      queue[i2] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
    } else {
      queue[i2] = this.src.slice(first, last);
    }
  }
  return queue.join("");
};
StateBlock.prototype.Token = Token;
const MAX_AUTOCOMPLETED_CELLS = 65536;
function getLine(state, line) {
  const pos = state.bMarks[line] + state.tShift[line];
  const max = state.eMarks[line];
  return state.src.slice(pos, max);
}
function escapedSplit(str) {
  const result = [];
  const max = str.length;
  let pos = 0;
  let ch = str.charCodeAt(pos);
  let isEscaped = false;
  let lastPos = 0;
  let current = "";
  while (pos < max) {
    if (ch === 124) {
      if (!isEscaped) {
        result.push(current + str.substring(lastPos, pos));
        current = "";
        lastPos = pos + 1;
      } else {
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }
    isEscaped = ch === 92;
    pos++;
    ch = str.charCodeAt(pos);
  }
  result.push(current + str.substring(lastPos));
  return result;
}
function table(state, startLine, endLine, silent) {
  if (startLine + 2 > endLine) {
    return false;
  }
  let nextLine = startLine + 1;
  if (state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  let pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  const firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
    return false;
  }
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  const secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
    return false;
  }
  if (firstCh === 45 && isSpace(secondCh)) {
    return false;
  }
  while (pos < state.eMarks[nextLine]) {
    const ch = state.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
      return false;
    }
    pos++;
  }
  let lineText = getLine(state, startLine + 1);
  let columns = lineText.split("|");
  const aligns = [];
  for (let i2 = 0; i2 < columns.length; i2++) {
    const t2 = columns[i2].trim();
    if (!t2) {
      if (i2 === 0 || i2 === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }
    if (!/^:?-+:?$/.test(t2)) {
      return false;
    }
    if (t2.charCodeAt(t2.length - 1) === 58) {
      aligns.push(t2.charCodeAt(0) === 58 ? "center" : "right");
    } else if (t2.charCodeAt(0) === 58) {
      aligns.push("left");
    } else {
      aligns.push("");
    }
  }
  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf("|") === -1) {
    return false;
  }
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === "")
    columns.shift();
  if (columns.length && columns[columns.length - 1] === "")
    columns.pop();
  const columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) {
    return false;
  }
  if (silent) {
    return true;
  }
  const oldParentType = state.parentType;
  state.parentType = "table";
  const terminatorRules = state.md.block.ruler.getRules("blockquote");
  const token_to = state.push("table_open", "table", 1);
  const tableLines = [startLine, 0];
  token_to.map = tableLines;
  const token_tho = state.push("thead_open", "thead", 1);
  token_tho.map = [startLine, startLine + 1];
  const token_htro = state.push("tr_open", "tr", 1);
  token_htro.map = [startLine, startLine + 1];
  for (let i2 = 0; i2 < columns.length; i2++) {
    const token_ho = state.push("th_open", "th", 1);
    if (aligns[i2]) {
      token_ho.attrs = [["style", "text-align:" + aligns[i2]]];
    }
    const token_il = state.push("inline", "", 0);
    token_il.content = columns[i2].trim();
    token_il.children = [];
    state.push("th_close", "th", -1);
  }
  state.push("tr_close", "tr", -1);
  state.push("thead_close", "thead", -1);
  let tbodyLines;
  let autocompletedCells = 0;
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    let terminate = false;
    for (let i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "")
      columns.shift();
    if (columns.length && columns[columns.length - 1] === "")
      columns.pop();
    autocompletedCells += columnCount - columns.length;
    if (autocompletedCells > MAX_AUTOCOMPLETED_CELLS) {
      break;
    }
    if (nextLine === startLine + 2) {
      const token_tbo = state.push("tbody_open", "tbody", 1);
      token_tbo.map = tbodyLines = [startLine + 2, 0];
    }
    const token_tro = state.push("tr_open", "tr", 1);
    token_tro.map = [nextLine, nextLine + 1];
    for (let i2 = 0; i2 < columnCount; i2++) {
      const token_tdo = state.push("td_open", "td", 1);
      if (aligns[i2]) {
        token_tdo.attrs = [["style", "text-align:" + aligns[i2]]];
      }
      const token_il = state.push("inline", "", 0);
      token_il.content = columns[i2] ? columns[i2].trim() : "";
      token_il.children = [];
      state.push("td_close", "td", -1);
    }
    state.push("tr_close", "tr", -1);
  }
  if (tbodyLines) {
    state.push("tbody_close", "tbody", -1);
    tbodyLines[1] = nextLine;
  }
  state.push("table_close", "table", -1);
  tableLines[1] = nextLine;
  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
}
function code(state, startLine, endLine) {
  if (state.sCount[startLine] - state.blkIndent < 4) {
    return false;
  }
  let nextLine = startLine + 1;
  let last = nextLine;
  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }
  state.line = last;
  const token = state.push("code_block", "code", 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
  token.map = [startLine, state.line];
  return true;
}
function fence(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (pos + 3 > max) {
    return false;
  }
  const marker = state.src.charCodeAt(pos);
  if (marker !== 126 && marker !== 96) {
    return false;
  }
  let mem = pos;
  pos = state.skipChars(pos, marker);
  let len = pos - mem;
  if (len < 3) {
    return false;
  }
  const markup = state.src.slice(mem, pos);
  const params = state.src.slice(pos, max);
  if (marker === 96) {
    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
      return false;
    }
  }
  if (silent) {
    return true;
  }
  let nextLine = startLine;
  let haveEndMarker = false;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) {
      break;
    }
    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.src.charCodeAt(pos) !== marker) {
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      continue;
    }
    pos = state.skipChars(pos, marker);
    if (pos - mem < len) {
      continue;
    }
    pos = state.skipSpaces(pos);
    if (pos < max) {
      continue;
    }
    haveEndMarker = true;
    break;
  }
  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  const token = state.push("fence", "code", 0);
  token.info = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup = markup;
  token.map = [startLine, state.line];
  return true;
}
function blockquote(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  const oldLineMax = state.lineMax;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 62) {
    return false;
  }
  if (silent) {
    return true;
  }
  const oldBMarks = [];
  const oldBSCount = [];
  const oldSCount = [];
  const oldTShift = [];
  const terminatorRules = state.md.block.ruler.getRules("blockquote");
  const oldParentType = state.parentType;
  state.parentType = "blockquote";
  let lastLineEmpty = false;
  let nextLine;
  for (nextLine = startLine; nextLine < endLine; nextLine++) {
    const isOutdented = state.sCount[nextLine] < state.blkIndent;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos >= max) {
      break;
    }
    if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
      let initial = state.sCount[nextLine] + 1;
      let spaceAfterMarker;
      let adjustTab;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[nextLine] + initial) % 4 === 3) {
          pos++;
          initial++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      let offset = initial;
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;
      while (pos < max) {
        const ch = state.src.charCodeAt(pos);
        if (isSpace(ch)) {
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      lastLineEmpty = pos >= max;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) {
      break;
    }
    let terminate = false;
    for (let i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      state.lineMax = nextLine;
      if (state.blkIndent !== 0) {
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }
      break;
    }
    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);
    state.sCount[nextLine] = -1;
  }
  const oldIndent = state.blkIndent;
  state.blkIndent = 0;
  const token_o = state.push("blockquote_open", "blockquote", 1);
  token_o.markup = ">";
  const lines = [startLine, 0];
  token_o.map = lines;
  state.md.block.tokenize(state, startLine, nextLine);
  const token_c = state.push("blockquote_close", "blockquote", -1);
  token_c.markup = ">";
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;
  for (let i2 = 0; i2 < oldTShift.length; i2++) {
    state.bMarks[i2 + startLine] = oldBMarks[i2];
    state.tShift[i2 + startLine] = oldTShift[i2];
    state.sCount[i2 + startLine] = oldSCount[i2];
    state.bsCount[i2 + startLine] = oldBSCount[i2];
  }
  state.blkIndent = oldIndent;
  return true;
}
function hr(state, startLine, endLine, silent) {
  const max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  const marker = state.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 95) {
    return false;
  }
  let cnt = 1;
  while (pos < max) {
    const ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace(ch)) {
      return false;
    }
    if (ch === marker) {
      cnt++;
    }
  }
  if (cnt < 3) {
    return false;
  }
  if (silent) {
    return true;
  }
  state.line = startLine + 1;
  const token = state.push("hr", "hr", 0);
  token.map = [startLine, state.line];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
  return true;
}
function skipBulletListMarker(state, startLine) {
  const max = state.eMarks[startLine];
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  const marker = state.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 43) {
    return -1;
  }
  if (pos < max) {
    const ch = state.src.charCodeAt(pos);
    if (!isSpace(ch)) {
      return -1;
    }
  }
  return pos;
}
function skipOrderedListMarker(state, startLine) {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  const max = state.eMarks[startLine];
  let pos = start;
  if (pos + 1 >= max) {
    return -1;
  }
  let ch = state.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) {
    return -1;
  }
  for (; ; ) {
    if (pos >= max) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      if (pos - start >= 10) {
        return -1;
      }
      continue;
    }
    if (ch === 41 || ch === 46) {
      break;
    }
    return -1;
  }
  if (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace(ch)) {
      return -1;
    }
  }
  return pos;
}
function markTightParagraphs(state, idx) {
  const level = state.level + 2;
  for (let i2 = idx + 2, l = state.tokens.length - 2; i2 < l; i2++) {
    if (state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open") {
      state.tokens[i2 + 2].hidden = true;
      state.tokens[i2].hidden = true;
      i2 += 2;
    }
  }
}
function list(state, startLine, endLine, silent) {
  let max, pos, start, token;
  let nextLine = startLine;
  let tight = true;
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  let isTerminatingParagraph = false;
  if (silent && state.parentType === "paragraph") {
    if (state.sCount[nextLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }
  let isOrdered;
  let markerValue;
  let posAfterMarker;
  if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[nextLine] + state.tShift[nextLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));
    if (isTerminatingParagraph && markerValue !== 1)
      return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine])
      return false;
  }
  if (silent) {
    return true;
  }
  const markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
  const listTokIdx = state.tokens.length;
  if (isOrdered) {
    token = state.push("ordered_list_open", "ol", 1);
    if (markerValue !== 1) {
      token.attrs = [["start", markerValue]];
    }
  } else {
    token = state.push("bullet_list_open", "ul", 1);
  }
  const listLines = [nextLine, 0];
  token.map = listLines;
  token.markup = String.fromCharCode(markerCharCode);
  let prevEmptyEnd = false;
  const terminatorRules = state.md.block.ruler.getRules("list");
  const oldParentType = state.parentType;
  state.parentType = "list";
  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];
    const initial = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
    let offset = initial;
    while (pos < max) {
      const ch = state.src.charCodeAt(pos);
      if (ch === 9) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 32) {
        offset++;
      } else {
        break;
      }
      pos++;
    }
    const contentStart = pos;
    let indentAfterMarker;
    if (contentStart >= max) {
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }
    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    }
    const indent = initial + indentAfterMarker;
    token = state.push("list_item_open", "li", 1);
    token.markup = String.fromCharCode(markerCharCode);
    const itemLines = [nextLine, 0];
    token.map = itemLines;
    if (isOrdered) {
      token.info = state.src.slice(start, posAfterMarker - 1);
    }
    const oldTight = state.tight;
    const oldTShift = state.tShift[nextLine];
    const oldSCount = state.sCount[nextLine];
    const oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
    state.sCount[nextLine] = offset;
    if (contentStart >= max && state.isEmpty(nextLine + 1)) {
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, nextLine, endLine, true);
    }
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[nextLine] = oldTShift;
    state.sCount[nextLine] = oldSCount;
    state.tight = oldTight;
    token = state.push("list_item_close", "li", -1);
    token.markup = String.fromCharCode(markerCharCode);
    nextLine = state.line;
    itemLines[1] = nextLine;
    if (nextLine >= endLine) {
      break;
    }
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    let terminate = false;
    for (let i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    }
    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  }
  if (isOrdered) {
    token = state.push("ordered_list_close", "ol", -1);
  } else {
    token = state.push("bullet_list_close", "ul", -1);
  }
  token.markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType;
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }
  return true;
}
function reference(state, startLine, _endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  let nextLine = startLine + 1;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 91) {
    return false;
  }
  function getNextLine(nextLine2) {
    const endLine = state.lineMax;
    if (nextLine2 >= endLine || state.isEmpty(nextLine2)) {
      return null;
    }
    let isContinuation = false;
    if (state.sCount[nextLine2] - state.blkIndent > 3) {
      isContinuation = true;
    }
    if (state.sCount[nextLine2] < 0) {
      isContinuation = true;
    }
    if (!isContinuation) {
      const terminatorRules = state.md.block.ruler.getRules("reference");
      const oldParentType = state.parentType;
      state.parentType = "reference";
      let terminate = false;
      for (let i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
        if (terminatorRules[i2](state, nextLine2, endLine, true)) {
          terminate = true;
          break;
        }
      }
      state.parentType = oldParentType;
      if (terminate) {
        return null;
      }
    }
    const pos2 = state.bMarks[nextLine2] + state.tShift[nextLine2];
    const max2 = state.eMarks[nextLine2];
    return state.src.slice(pos2, max2 + 1);
  }
  let str = state.src.slice(pos, max + 1);
  max = str.length;
  let labelEnd = -1;
  for (pos = 1; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 91) {
      return false;
    } else if (ch === 93) {
      labelEnd = pos;
      break;
    } else if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (ch === 92) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 10) {
        const lineContent = getNextLine(nextLine);
        if (lineContent !== null) {
          str += lineContent;
          max = str.length;
          nextLine++;
        }
      }
    }
  }
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return false;
  }
  for (pos = labelEnd + 2; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (isSpace(ch))
      ;
    else {
      break;
    }
  }
  const destRes = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!destRes.ok) {
    return false;
  }
  const href = state.md.normalizeLink(destRes.str);
  if (!state.md.validateLink(href)) {
    return false;
  }
  pos = destRes.pos;
  const destEndPos = pos;
  const destEndLineNo = nextLine;
  const start = pos;
  for (; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (isSpace(ch))
      ;
    else {
      break;
    }
  }
  let titleRes = state.md.helpers.parseLinkTitle(str, pos, max);
  while (titleRes.can_continue) {
    const lineContent = getNextLine(nextLine);
    if (lineContent === null)
      break;
    str += lineContent;
    pos = max;
    max = str.length;
    nextLine++;
    titleRes = state.md.helpers.parseLinkTitle(str, pos, max, titleRes);
  }
  let title;
  if (pos < max && start !== pos && titleRes.ok) {
    title = titleRes.str;
    pos = titleRes.pos;
  } else {
    title = "";
    pos = destEndPos;
    nextLine = destEndLineNo;
  }
  while (pos < max) {
    const ch = str.charCodeAt(pos);
    if (!isSpace(ch)) {
      break;
    }
    pos++;
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    if (title) {
      title = "";
      pos = destEndPos;
      nextLine = destEndLineNo;
      while (pos < max) {
        const ch = str.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
        pos++;
      }
    }
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    return false;
  }
  const label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    return false;
  }
  if (silent) {
    return true;
  }
  if (typeof state.env.references === "undefined") {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === "undefined") {
    state.env.references[label] = { title, href };
  }
  state.line = nextLine;
  return true;
}
const block_names = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
const attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
const unquoted = "[^\"'=<>`\\x00-\\x20]+";
const single_quoted = "'[^']*'";
const double_quoted = '"[^"]*"';
const attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
const attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
const open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
const close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
const comment = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->";
const processing = "<[?][\\s\\S]*?[?]>";
const declaration = "<![A-Za-z][^>]*>";
const cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
const HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
const HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
const HTML_SEQUENCES = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
];
function html_block(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (!state.md.options.html) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  let lineText = state.src.slice(pos, max);
  let i2 = 0;
  for (; i2 < HTML_SEQUENCES.length; i2++) {
    if (HTML_SEQUENCES[i2][0].test(lineText)) {
      break;
    }
  }
  if (i2 === HTML_SEQUENCES.length) {
    return false;
  }
  if (silent) {
    return HTML_SEQUENCES[i2][2];
  }
  let nextLine = startLine + 1;
  if (!HTML_SEQUENCES[i2][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);
      if (HTML_SEQUENCES[i2][1].test(lineText)) {
        if (lineText.length !== 0) {
          nextLine++;
        }
        break;
      }
    }
  }
  state.line = nextLine;
  const token = state.push("html_block", "", 0);
  token.map = [startLine, nextLine];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
}
function heading(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  let ch = state.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max) {
    return false;
  }
  let level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 35 && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max && !isSpace(ch)) {
    return false;
  }
  if (silent) {
    return true;
  }
  max = state.skipSpacesBack(max, pos);
  const tmp = state.skipCharsBack(max, 35, pos);
  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }
  state.line = startLine + 1;
  const token_o = state.push("heading_open", "h" + String(level), 1);
  token_o.markup = "########".slice(0, level);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = state.src.slice(pos, max).trim();
  token_i.map = [startLine, state.line];
  token_i.children = [];
  const token_c = state.push("heading_close", "h" + String(level), -1);
  token_c.markup = "########".slice(0, level);
  return true;
}
function lheading(state, startLine, endLine) {
  const terminatorRules = state.md.block.ruler.getRules("paragraph");
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  const oldParentType = state.parentType;
  state.parentType = "paragraph";
  let level = 0;
  let marker;
  let nextLine = startLine + 1;
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] >= state.blkIndent) {
      let pos = state.bMarks[nextLine] + state.tShift[nextLine];
      const max = state.eMarks[nextLine];
      if (pos < max) {
        marker = state.src.charCodeAt(pos);
        if (marker === 45 || marker === 61) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);
          if (pos >= max) {
            level = marker === 61 ? 1 : 2;
            break;
          }
        }
      }
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    let terminate = false;
    for (let i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  if (!level) {
    return false;
  }
  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  const token_o = state.push("heading_open", "h" + String(level), 1);
  token_o.markup = String.fromCharCode(marker);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = content;
  token_i.map = [startLine, state.line - 1];
  token_i.children = [];
  const token_c = state.push("heading_close", "h" + String(level), -1);
  token_c.markup = String.fromCharCode(marker);
  state.parentType = oldParentType;
  return true;
}
function paragraph(state, startLine, endLine) {
  const terminatorRules = state.md.block.ruler.getRules("paragraph");
  const oldParentType = state.parentType;
  let nextLine = startLine + 1;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    let terminate = false;
    for (let i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  const token_o = state.push("paragraph_open", "p", 1);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = content;
  token_i.map = [startLine, state.line];
  token_i.children = [];
  state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
}
const _rules$1 = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", table, ["paragraph", "reference"]],
  ["code", code],
  ["fence", fence, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", blockquote, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
  ["list", list, ["paragraph", "reference", "blockquote"]],
  ["reference", reference],
  ["html_block", html_block, ["paragraph", "reference", "blockquote"]],
  ["heading", heading, ["paragraph", "reference", "blockquote"]],
  ["lheading", lheading],
  ["paragraph", paragraph]
];
function ParserBlock() {
  this.ruler = new Ruler();
  for (let i2 = 0; i2 < _rules$1.length; i2++) {
    this.ruler.push(_rules$1[i2][0], _rules$1[i2][1], { alt: (_rules$1[i2][2] || []).slice() });
  }
}
ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
  const rules2 = this.ruler.getRules("");
  const len = rules2.length;
  const maxNesting = state.md.options.maxNesting;
  let line = startLine;
  let hasEmptyLines = false;
  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state.sCount[line] < state.blkIndent) {
      break;
    }
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }
    const prevLine = state.line;
    let ok = false;
    for (let i2 = 0; i2 < len; i2++) {
      ok = rules2[i2](state, line, endLine, false);
      if (ok) {
        if (prevLine >= state.line) {
          throw new Error("block rule didn't increment state.line");
        }
        break;
      }
    }
    if (!ok)
      throw new Error("none of the block rules matched");
    state.tight = !hasEmptyLines;
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }
    line = state.line;
    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};
ParserBlock.prototype.parse = function(src, md, env, outTokens) {
  if (!src) {
    return;
  }
  const state = new this.State(src, md, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};
ParserBlock.prototype.State = StateBlock;
function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = "";
  this.pendingLevel = 0;
  this.cache = {};
  this.delimiters = [];
  this._prev_delimiters = [];
  this.backticks = {};
  this.backticksScanned = false;
  this.linkLevel = 0;
}
StateInline.prototype.pushPending = function() {
  const token = new Token("text", "", 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = "";
  return token;
};
StateInline.prototype.push = function(type4, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }
  const token = new Token(type4, tag, nesting);
  let token_meta = null;
  if (nesting < 0) {
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }
  token.level = this.level;
  if (nesting > 0) {
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }
  this.pendingLevel = this.level;
  this.tokens.push(token);
  this.tokens_meta.push(token_meta);
  return token;
};
StateInline.prototype.scanDelims = function(start, canSplitWord) {
  const max = this.posMax;
  const marker = this.src.charCodeAt(start);
  const lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
  let pos = start;
  while (pos < max && this.src.charCodeAt(pos) === marker) {
    pos++;
  }
  const count = pos - start;
  const nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
  const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
  const isLastWhiteSpace = isWhiteSpace(lastChar);
  const isNextWhiteSpace = isWhiteSpace(nextChar);
  const left_flanking = !isNextWhiteSpace && (!isNextPunctChar || isLastWhiteSpace || isLastPunctChar);
  const right_flanking = !isLastWhiteSpace && (!isLastPunctChar || isNextWhiteSpace || isNextPunctChar);
  const can_open = left_flanking && (canSplitWord || !right_flanking || isLastPunctChar);
  const can_close = right_flanking && (canSplitWord || !left_flanking || isNextPunctChar);
  return { can_open, can_close, length: count };
};
StateInline.prototype.Token = Token;
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function text(state, silent) {
  let pos = state.pos;
  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }
  if (pos === state.pos) {
    return false;
  }
  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }
  state.pos = pos;
  return true;
}
const SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function linkify(state, silent) {
  if (!state.md.options.linkify)
    return false;
  if (state.linkLevel > 0)
    return false;
  const pos = state.pos;
  const max = state.posMax;
  if (pos + 3 > max)
    return false;
  if (state.src.charCodeAt(pos) !== 58)
    return false;
  if (state.src.charCodeAt(pos + 1) !== 47)
    return false;
  if (state.src.charCodeAt(pos + 2) !== 47)
    return false;
  const match2 = state.pending.match(SCHEME_RE);
  if (!match2)
    return false;
  const proto = match2[1];
  const link2 = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link2)
    return false;
  let url2 = link2.url;
  if (url2.length <= proto.length)
    return false;
  url2 = url2.replace(/\*+$/, "");
  const fullUrl = state.md.normalizeLink(url2);
  if (!state.md.validateLink(fullUrl))
    return false;
  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);
    const token_o = state.push("link_open", "a", 1);
    token_o.attrs = [["href", fullUrl]];
    token_o.markup = "linkify";
    token_o.info = "auto";
    const token_t = state.push("text", "", 0);
    token_t.content = state.md.normalizeLinkText(url2);
    const token_c = state.push("link_close", "a", -1);
    token_c.markup = "linkify";
    token_c.info = "auto";
  }
  state.pos += url2.length - proto.length;
  return true;
}
function newline(state, silent) {
  let pos = state.pos;
  if (state.src.charCodeAt(pos) !== 10) {
    return false;
  }
  const pmax = state.pending.length - 1;
  const max = state.posMax;
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
        let ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
          ws--;
        state.pending = state.pending.slice(0, ws);
        state.push("hardbreak", "br", 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push("softbreak", "br", 0);
      }
    } else {
      state.push("softbreak", "br", 0);
    }
  }
  pos++;
  while (pos < max && isSpace(state.src.charCodeAt(pos))) {
    pos++;
  }
  state.pos = pos;
  return true;
}
const ESCAPED = [];
for (let i2 = 0; i2 < 256; i2++) {
  ESCAPED.push(0);
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});
function escape(state, silent) {
  let pos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(pos) !== 92)
    return false;
  pos++;
  if (pos >= max)
    return false;
  let ch1 = state.src.charCodeAt(pos);
  if (ch1 === 10) {
    if (!silent) {
      state.push("hardbreak", "br", 0);
    }
    pos++;
    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace(ch1))
        break;
      pos++;
    }
    state.pos = pos;
    return true;
  }
  let escapedStr = state.src[pos];
  if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
    const ch2 = state.src.charCodeAt(pos + 1);
    if (ch2 >= 56320 && ch2 <= 57343) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }
  const origStr = "\\" + escapedStr;
  if (!silent) {
    const token = state.push("text_special", "", 0);
    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token.content = escapedStr;
    } else {
      token.content = origStr;
    }
    token.markup = origStr;
    token.info = "escape";
  }
  state.pos = pos + 1;
  return true;
}
function backtick(state, silent) {
  let pos = state.pos;
  const ch = state.src.charCodeAt(pos);
  if (ch !== 96) {
    return false;
  }
  const start = pos;
  pos++;
  const max = state.posMax;
  while (pos < max && state.src.charCodeAt(pos) === 96) {
    pos++;
  }
  const marker = state.src.slice(start, pos);
  const openerLength = marker.length;
  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent)
      state.pending += marker;
    state.pos += openerLength;
    return true;
  }
  let matchEnd = pos;
  let matchStart;
  while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
      matchEnd++;
    }
    const closerLength = matchEnd - matchStart;
    if (closerLength === openerLength) {
      if (!silent) {
        const token = state.push("code_inline", "code", 0);
        token.markup = marker;
        token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      state.pos = matchEnd;
      return true;
    }
    state.backticks[closerLength] = matchStart;
  }
  state.backticksScanned = true;
  if (!silent)
    state.pending += marker;
  state.pos += openerLength;
  return true;
}
function strikethrough_tokenize(state, silent) {
  const start = state.pos;
  const marker = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker !== 126) {
    return false;
  }
  const scanned = state.scanDelims(state.pos, true);
  let len = scanned.length;
  const ch = String.fromCharCode(marker);
  if (len < 2) {
    return false;
  }
  let token;
  if (len % 2) {
    token = state.push("text", "", 0);
    token.content = ch;
    len--;
  }
  for (let i2 = 0; i2 < len; i2 += 2) {
    token = state.push("text", "", 0);
    token.content = ch + ch;
    state.delimiters.push({
      marker,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
}
function postProcess$1(state, delimiters) {
  let token;
  const loneMarkers = [];
  const max = delimiters.length;
  for (let i2 = 0; i2 < max; i2++) {
    const startDelim = delimiters[i2];
    if (startDelim.marker !== 126) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    const endDelim = delimiters[startDelim.end];
    token = state.tokens[startDelim.token];
    token.type = "s_open";
    token.tag = "s";
    token.nesting = 1;
    token.markup = "~~";
    token.content = "";
    token = state.tokens[endDelim.token];
    token.type = "s_close";
    token.tag = "s";
    token.nesting = -1;
    token.markup = "~~";
    token.content = "";
    if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
      loneMarkers.push(endDelim.token - 1);
    }
  }
  while (loneMarkers.length) {
    const i2 = loneMarkers.pop();
    let j = i2 + 1;
    while (j < state.tokens.length && state.tokens[j].type === "s_close") {
      j++;
    }
    j--;
    if (i2 !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i2];
      state.tokens[i2] = token;
    }
  }
}
function strikethrough_postProcess(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  postProcess$1(state, state.delimiters);
  for (let curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess$1(state, tokens_meta[curr].delimiters);
    }
  }
}
const r_strikethrough = {
  tokenize: strikethrough_tokenize,
  postProcess: strikethrough_postProcess
};
function emphasis_tokenize(state, silent) {
  const start = state.pos;
  const marker = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker !== 95 && marker !== 42) {
    return false;
  }
  const scanned = state.scanDelims(state.pos, marker === 42);
  for (let i2 = 0; i2 < scanned.length; i2++) {
    const token = state.push("text", "", 0);
    token.content = String.fromCharCode(marker);
    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker,
      // Total length of these series of delimiters.
      //
      length: scanned.length,
      // A position of the token this delimiter corresponds to.
      //
      token: state.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
}
function postProcess(state, delimiters) {
  const max = delimiters.length;
  for (let i2 = max - 1; i2 >= 0; i2--) {
    const startDelim = delimiters[i2];
    if (startDelim.marker !== 95 && startDelim.marker !== 42) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    const endDelim = delimiters[startDelim.end];
    const isStrong = i2 > 0 && delimiters[i2 - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
    delimiters[i2 - 1].marker === startDelim.marker && delimiters[i2 - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    delimiters[startDelim.end + 1].token === endDelim.token + 1;
    const ch = String.fromCharCode(startDelim.marker);
    const token_o = state.tokens[startDelim.token];
    token_o.type = isStrong ? "strong_open" : "em_open";
    token_o.tag = isStrong ? "strong" : "em";
    token_o.nesting = 1;
    token_o.markup = isStrong ? ch + ch : ch;
    token_o.content = "";
    const token_c = state.tokens[endDelim.token];
    token_c.type = isStrong ? "strong_close" : "em_close";
    token_c.tag = isStrong ? "strong" : "em";
    token_c.nesting = -1;
    token_c.markup = isStrong ? ch + ch : ch;
    token_c.content = "";
    if (isStrong) {
      state.tokens[delimiters[i2 - 1].token].content = "";
      state.tokens[delimiters[startDelim.end + 1].token].content = "";
      i2--;
    }
  }
}
function emphasis_post_process(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  postProcess(state, state.delimiters);
  for (let curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
}
const r_emphasis = {
  tokenize: emphasis_tokenize,
  postProcess: emphasis_post_process
};
function link(state, silent) {
  let code2, label, res, ref2;
  let href = "";
  let title = "";
  let start = state.pos;
  let parseReference = true;
  if (state.src.charCodeAt(state.pos) !== 91) {
    return false;
  }
  const oldPos = state.pos;
  const max = state.posMax;
  const labelStart = state.pos + 1;
  const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
  if (labelEnd < 0) {
    return false;
  }
  let pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    parseReference = false;
    pos++;
    for (; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (!isSpace(code2) && code2 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
      start = pos;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (!isSpace(code2) && code2 !== 10) {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }
      }
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      parseReference = true;
    }
    pos++;
  }
  if (parseReference) {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    const token_o = state.push("link_open", "a", 1);
    const attrs = [["href", href]];
    token_o.attrs = attrs;
    if (title) {
      attrs.push(["title", title]);
    }
    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;
    state.push("link_close", "a", -1);
  }
  state.pos = pos;
  state.posMax = max;
  return true;
}
function image(state, silent) {
  let code2, content, label, pos, ref2, res, title, start;
  let href = "";
  const oldPos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(state.pos) !== 33) {
    return false;
  }
  if (state.src.charCodeAt(state.pos + 1) !== 91) {
    return false;
  }
  const labelStart = state.pos + 2;
  const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (!isSpace(code2) && code2 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
    }
    start = pos;
    for (; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (!isSpace(code2) && code2 !== 10) {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (!isSpace(code2) && code2 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);
    const tokens = [];
    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens
    );
    const token = state.push("image", "img", 0);
    const attrs = [["src", href], ["alt", ""]];
    token.attrs = attrs;
    token.children = tokens;
    token.content = content;
    if (title) {
      attrs.push(["title", title]);
    }
  }
  state.pos = pos;
  state.posMax = max;
  return true;
}
const EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
const AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function autolink(state, silent) {
  let pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  const start = state.pos;
  const max = state.posMax;
  for (; ; ) {
    if (++pos >= max)
      return false;
    const ch = state.src.charCodeAt(pos);
    if (ch === 60)
      return false;
    if (ch === 62)
      break;
  }
  const url2 = state.src.slice(start + 1, pos);
  if (AUTOLINK_RE.test(url2)) {
    const fullUrl = state.md.normalizeLink(url2);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      const token_o = state.push("link_open", "a", 1);
      token_o.attrs = [["href", fullUrl]];
      token_o.markup = "autolink";
      token_o.info = "auto";
      const token_t = state.push("text", "", 0);
      token_t.content = state.md.normalizeLinkText(url2);
      const token_c = state.push("link_close", "a", -1);
      token_c.markup = "autolink";
      token_c.info = "auto";
    }
    state.pos += url2.length + 2;
    return true;
  }
  if (EMAIL_RE.test(url2)) {
    const fullUrl = state.md.normalizeLink("mailto:" + url2);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      const token_o = state.push("link_open", "a", 1);
      token_o.attrs = [["href", fullUrl]];
      token_o.markup = "autolink";
      token_o.info = "auto";
      const token_t = state.push("text", "", 0);
      token_t.content = state.md.normalizeLinkText(url2);
      const token_c = state.push("link_close", "a", -1);
      token_c.markup = "autolink";
      token_c.info = "auto";
    }
    state.pos += url2.length + 2;
    return true;
  }
  return false;
}
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
function isLetter(ch) {
  const lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
function html_inline(state, silent) {
  if (!state.md.options.html) {
    return false;
  }
  const max = state.posMax;
  const pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
    return false;
  }
  const ch = state.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
    return false;
  }
  const match2 = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match2) {
    return false;
  }
  if (!silent) {
    const token = state.push("html_inline", "", 0);
    token.content = match2[0];
    if (isLinkOpen(token.content))
      state.linkLevel++;
    if (isLinkClose(token.content))
      state.linkLevel--;
  }
  state.pos += match2[0].length;
  return true;
}
const DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
const NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
function entity(state, silent) {
  const pos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(pos) !== 38)
    return false;
  if (pos + 1 >= max)
    return false;
  const ch = state.src.charCodeAt(pos + 1);
  if (ch === 35) {
    const match2 = state.src.slice(pos).match(DIGITAL_RE);
    if (match2) {
      if (!silent) {
        const code2 = match2[1][0].toLowerCase() === "x" ? parseInt(match2[1].slice(1), 16) : parseInt(match2[1], 10);
        const token = state.push("text_special", "", 0);
        token.content = isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
        token.markup = match2[0];
        token.info = "entity";
      }
      state.pos += match2[0].length;
      return true;
    }
  } else {
    const match2 = state.src.slice(pos).match(NAMED_RE);
    if (match2) {
      const decoded = decodeHTML(match2[0]);
      if (decoded !== match2[0]) {
        if (!silent) {
          const token = state.push("text_special", "", 0);
          token.content = decoded;
          token.markup = match2[0];
          token.info = "entity";
        }
        state.pos += match2[0].length;
        return true;
      }
    }
  }
  return false;
}
function processDelimiters(delimiters) {
  const openersBottom = {};
  const max = delimiters.length;
  if (!max)
    return;
  let headerIdx = 0;
  let lastTokenIdx = -2;
  const jumps = [];
  for (let closerIdx = 0; closerIdx < max; closerIdx++) {
    const closer = delimiters[closerIdx];
    jumps.push(0);
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }
    lastTokenIdx = closer.token;
    closer.length = closer.length || 0;
    if (!closer.close)
      continue;
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
    }
    const minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
    let openerIdx = headerIdx - jumps[headerIdx] - 1;
    let newMinOpenerIdx = openerIdx;
    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      const opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker)
        continue;
      if (opener.open && opener.end < 0) {
        let isOddMatch = false;
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }
        if (!isOddMatch) {
          const lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          lastTokenIdx = -2;
          break;
        }
      }
    }
    if (newMinOpenerIdx !== -1) {
      openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}
function link_pairs(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  processDelimiters(state.delimiters);
  for (let curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(tokens_meta[curr].delimiters);
    }
  }
}
function fragments_join(state) {
  let curr, last;
  let level = 0;
  const tokens = state.tokens;
  const max = state.tokens.length;
  for (curr = last = 0; curr < max; curr++) {
    if (tokens[curr].nesting < 0)
      level--;
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0)
      level++;
    if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) {
        tokens[last] = tokens[curr];
      }
      last++;
    }
  }
  if (curr !== last) {
    tokens.length = last;
  }
}
const _rules = [
  ["text", text],
  ["linkify", linkify],
  ["newline", newline],
  ["escape", escape],
  ["backticks", backtick],
  ["strikethrough", r_strikethrough.tokenize],
  ["emphasis", r_emphasis.tokenize],
  ["link", link],
  ["image", image],
  ["autolink", autolink],
  ["html_inline", html_inline],
  ["entity", entity]
];
const _rules2 = [
  ["balance_pairs", link_pairs],
  ["strikethrough", r_strikethrough.postProcess],
  ["emphasis", r_emphasis.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", fragments_join]
];
function ParserInline() {
  this.ruler = new Ruler();
  for (let i2 = 0; i2 < _rules.length; i2++) {
    this.ruler.push(_rules[i2][0], _rules[i2][1]);
  }
  this.ruler2 = new Ruler();
  for (let i2 = 0; i2 < _rules2.length; i2++) {
    this.ruler2.push(_rules2[i2][0], _rules2[i2][1]);
  }
}
ParserInline.prototype.skipToken = function(state) {
  const pos = state.pos;
  const rules2 = this.ruler.getRules("");
  const len = rules2.length;
  const maxNesting = state.md.options.maxNesting;
  const cache = state.cache;
  if (typeof cache[pos] !== "undefined") {
    state.pos = cache[pos];
    return;
  }
  let ok = false;
  if (state.level < maxNesting) {
    for (let i2 = 0; i2 < len; i2++) {
      state.level++;
      ok = rules2[i2](state, true);
      state.level--;
      if (ok) {
        if (pos >= state.pos) {
          throw new Error("inline rule didn't increment state.pos");
        }
        break;
      }
    }
  } else {
    state.pos = state.posMax;
  }
  if (!ok) {
    state.pos++;
  }
  cache[pos] = state.pos;
};
ParserInline.prototype.tokenize = function(state) {
  const rules2 = this.ruler.getRules("");
  const len = rules2.length;
  const end = state.posMax;
  const maxNesting = state.md.options.maxNesting;
  while (state.pos < end) {
    const prevPos = state.pos;
    let ok = false;
    if (state.level < maxNesting) {
      for (let i2 = 0; i2 < len; i2++) {
        ok = rules2[i2](state, false);
        if (ok) {
          if (prevPos >= state.pos) {
            throw new Error("inline rule didn't increment state.pos");
          }
          break;
        }
      }
    }
    if (ok) {
      if (state.pos >= end) {
        break;
      }
      continue;
    }
    state.pending += state.src[state.pos++];
  }
  if (state.pending) {
    state.pushPending();
  }
};
ParserInline.prototype.parse = function(str, md, env, outTokens) {
  const state = new this.State(str, md, env, outTokens);
  this.tokenize(state);
  const rules2 = this.ruler2.getRules("");
  const len = rules2.length;
  for (let i2 = 0; i2 < len; i2++) {
    rules2[i2](state);
  }
};
ParserInline.prototype.State = StateInline;
function reFactory(opts) {
  const re = {};
  opts = opts || {};
  re.src_Any = Any.source;
  re.src_Cc = Cc.source;
  re.src_Z = Z.source;
  re.src_P = P.source;
  re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
  re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
  const text_separators = "[><｜]";
  re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
  re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
  re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + re.src_ZCc + "|$)|;(?!" + re.src_ZCc + "|$)|\\!+(?!" + re.src_ZCc + "|[!]|$)|\\?(?!" + re.src_ZCc + "|[?]|$))+|\\/)?";
  re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re.src_xn = "xn--[a-z0-9\\-]{1,59}";
  re.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
  re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
  re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
  re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
  re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
  re.src_host_strict = re.src_host + re.src_host_terminator;
  re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
  re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
  re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
  re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
  re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
  re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
  re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
  re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
  return re;
}
function assign(obj) {
  const sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
function isObject(obj) {
  return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class(obj) === "[object Function]";
}
function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}
const defaultSchemas = {
  "http:": {
    validate: function(text2, pos, self2) {
      const tail = text2.slice(pos);
      if (!self2.re.http) {
        self2.re.http = new RegExp(
          "^\\/\\/" + self2.re.src_auth + self2.re.src_host_port_strict + self2.re.src_path,
          "i"
        );
      }
      if (self2.re.http.test(tail)) {
        return tail.match(self2.re.http)[0].length;
      }
      return 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(text2, pos, self2) {
      const tail = text2.slice(pos);
      if (!self2.re.no_http) {
        self2.re.no_http = new RegExp(
          "^" + self2.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + self2.re.src_domain + ")\\.)+" + self2.re.src_domain_root + ")" + self2.re.src_port + self2.re.src_host_terminator + self2.re.src_path,
          "i"
        );
      }
      if (self2.re.no_http.test(tail)) {
        if (pos >= 3 && text2[pos - 3] === ":") {
          return 0;
        }
        if (pos >= 3 && text2[pos - 3] === "/") {
          return 0;
        }
        return tail.match(self2.re.no_http)[0].length;
      }
      return 0;
    }
  },
  "mailto:": {
    validate: function(text2, pos, self2) {
      const tail = text2.slice(pos);
      if (!self2.re.mailto) {
        self2.re.mailto = new RegExp(
          "^" + self2.re.src_email_name + "@" + self2.re.src_host_strict,
          "i"
        );
      }
      if (self2.re.mailto.test(tail)) {
        return tail.match(self2.re.mailto)[0].length;
      }
      return 0;
    }
  }
};
const tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
const tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function resetScanCache(self2) {
  self2.__index__ = -1;
  self2.__text_cache__ = "";
}
function createValidator(re) {
  return function(text2, pos) {
    const tail = text2.slice(pos);
    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}
function createNormalizer() {
  return function(match2, self2) {
    self2.normalize(match2);
  };
}
function compile(self2) {
  const re = self2.re = reFactory(self2.__opts__);
  const tlds2 = self2.__tlds__.slice();
  self2.onCompile();
  if (!self2.__tlds_replaced__) {
    tlds2.push(tlds_2ch_src_re);
  }
  tlds2.push(re.src_xn);
  re.src_tlds = tlds2.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re.src_tlds);
  }
  re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
  re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
  re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
  const aliases = [];
  self2.__compiled__ = {};
  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }
  Object.keys(self2.__schemas__).forEach(function(name) {
    const val = self2.__schemas__[name];
    if (val === null) {
      return;
    }
    const compiled = { validate: null, link: null };
    self2.__compiled__[name] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }
      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }
      return;
    }
    if (isString(val)) {
      aliases.push(name);
      return;
    }
    schemaError(name, val);
  });
  aliases.forEach(function(alias) {
    if (!self2.__compiled__[self2.__schemas__[alias]]) {
      return;
    }
    self2.__compiled__[alias].validate = self2.__compiled__[self2.__schemas__[alias]].validate;
    self2.__compiled__[alias].normalize = self2.__compiled__[self2.__schemas__[alias]].normalize;
  });
  self2.__compiled__[""] = { validate: null, normalize: createNormalizer() };
  const slist = Object.keys(self2.__compiled__).filter(function(name) {
    return name.length > 0 && self2.__compiled__[name];
  }).map(escapeRE).join("|");
  self2.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "i");
  self2.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
  self2.re.schema_at_start = RegExp("^" + self2.re.schema_search.source, "i");
  self2.re.pretest = RegExp(
    "(" + self2.re.schema_test.source + ")|(" + self2.re.host_fuzzy_test.source + ")|@",
    "i"
  );
  resetScanCache(self2);
}
function Match(self2, shift) {
  const start = self2.__index__;
  const end = self2.__last_index__;
  const text2 = self2.__text_cache__.slice(start, end);
  this.schema = self2.__schema__.toLowerCase();
  this.index = start + shift;
  this.lastIndex = end + shift;
  this.raw = text2;
  this.text = text2;
  this.url = text2;
}
function createMatch(self2, shift) {
  const match2 = new Match(self2, shift);
  self2.__compiled__[match2.schema].normalize(match2, self2);
  return match2;
}
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign({}, defaultOptions, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
LinkifyIt.prototype.test = function test(text2) {
  this.__text_cache__ = text2;
  this.__index__ = -1;
  if (!text2.length) {
    return false;
  }
  let m, ml, me, len, shift, next, re, tld_pos, at_pos;
  if (this.re.schema_test.test(text2)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text2)) !== null) {
      len = this.testSchemaAt(text2, m[2], re.lastIndex);
      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text2.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text2.indexOf("@");
    if (at_pos >= 0) {
      if ((me = text2.match(this.re.email_fuzzy)) !== null) {
        shift = me.index + me[1].length;
        next = me.index + me[0].length;
        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt.prototype.pretest = function pretest(text2) {
  return this.re.pretest.test(text2);
};
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
};
LinkifyIt.prototype.match = function match(text2) {
  const result = [];
  let shift = 0;
  if (this.__index__ >= 0 && this.__text_cache__ === text2) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }
  let tail = shift ? text2.slice(shift) : text2;
  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }
  if (result.length) {
    return result;
  }
  return null;
};
LinkifyIt.prototype.matchAtStart = function matchAtStart(text2) {
  this.__text_cache__ = text2;
  this.__index__ = -1;
  if (!text2.length)
    return null;
  const m = this.re.schema_at_start.exec(text2);
  if (!m)
    return null;
  const len = this.testSchemaAt(text2, m[2], m[0].length);
  if (!len)
    return null;
  this.__schema__ = m[2];
  this.__index__ = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;
  return createMatch(this, 0);
};
LinkifyIt.prototype.tlds = function tlds(list2, keepOld) {
  list2 = Array.isArray(list2) ? list2 : [list2];
  if (!keepOld) {
    this.__tlds__ = list2.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list2).sort().filter(function(el, idx, arr) {
    return el !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
LinkifyIt.prototype.normalize = function normalize2(match2) {
  if (!match2.schema) {
    match2.url = "http://" + match2.url;
  }
  if (match2.schema === "mailto:" && !/^mailto:/i.test(match2.url)) {
    match2.url = "mailto:" + match2.url;
  }
};
LinkifyIt.prototype.onCompile = function onCompile() {
};
const maxInt = 2147483647;
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128;
const delimiter = "-";
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/;
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
const errors = {
  "overflow": "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;
function error(type4) {
  throw new RangeError(errors[type4]);
}
function map(array4, callback) {
  const result = [];
  let length = array4.length;
  while (length--) {
    result[length] = callback(array4[length]);
  }
  return result;
}
function mapDomain(domain, callback) {
  const parts = domain.split("@");
  let result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    domain = parts[1];
  }
  domain = domain.replace(regexSeparators, ".");
  const labels = domain.split(".");
  const encoded = map(labels, callback).join(".");
  return result + encoded;
}
function ucs2decode(string3) {
  const output = [];
  let counter = 0;
  const length = string3.length;
  while (counter < length) {
    const value = string3.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      const extra = string3.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
const ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
const basicToDigit = function(codePoint) {
  if (codePoint >= 48 && codePoint < 58) {
    return 26 + (codePoint - 48);
  }
  if (codePoint >= 65 && codePoint < 91) {
    return codePoint - 65;
  }
  if (codePoint >= 97 && codePoint < 123) {
    return codePoint - 97;
  }
  return base;
};
const digitToBasic = function(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
const adapt = function(delta, numPoints, firstTime) {
  let k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
const decode = function(input) {
  const output = [];
  const inputLength = input.length;
  let i2 = 0;
  let n2 = initialN;
  let bias = initialBias;
  let basic = input.lastIndexOf(delimiter);
  if (basic < 0) {
    basic = 0;
  }
  for (let j = 0; j < basic; ++j) {
    if (input.charCodeAt(j) >= 128) {
      error("not-basic");
    }
    output.push(input.charCodeAt(j));
  }
  for (let index2 = basic > 0 ? basic + 1 : 0; index2 < inputLength; ) {
    const oldi = i2;
    for (let w = 1, k = base; ; k += base) {
      if (index2 >= inputLength) {
        error("invalid-input");
      }
      const digit = basicToDigit(input.charCodeAt(index2++));
      if (digit >= base) {
        error("invalid-input");
      }
      if (digit > floor((maxInt - i2) / w)) {
        error("overflow");
      }
      i2 += digit * w;
      const t2 = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
      if (digit < t2) {
        break;
      }
      const baseMinusT = base - t2;
      if (w > floor(maxInt / baseMinusT)) {
        error("overflow");
      }
      w *= baseMinusT;
    }
    const out = output.length + 1;
    bias = adapt(i2 - oldi, out, oldi == 0);
    if (floor(i2 / out) > maxInt - n2) {
      error("overflow");
    }
    n2 += floor(i2 / out);
    i2 %= out;
    output.splice(i2++, 0, n2);
  }
  return String.fromCodePoint(...output);
};
const encode = function(input) {
  const output = [];
  input = ucs2decode(input);
  const inputLength = input.length;
  let n2 = initialN;
  let delta = 0;
  let bias = initialBias;
  for (const currentValue of input) {
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  const basicLength = output.length;
  let handledCPCount = basicLength;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    let m = maxInt;
    for (const currentValue of input) {
      if (currentValue >= n2 && currentValue < m) {
        m = currentValue;
      }
    }
    const handledCPCountPlusOne = handledCPCount + 1;
    if (m - n2 > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta += (m - n2) * handledCPCountPlusOne;
    n2 = m;
    for (const currentValue of input) {
      if (currentValue < n2 && ++delta > maxInt) {
        error("overflow");
      }
      if (currentValue === n2) {
        let q = delta;
        for (let k = base; ; k += base) {
          const t2 = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t2) {
            break;
          }
          const qMinusT = q - t2;
          const baseMinusT = base - t2;
          output.push(
            stringFromCharCode(digitToBasic(t2 + qMinusT % baseMinusT, 0))
          );
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }
    ++delta;
    ++n2;
  }
  return output.join("");
};
const toUnicode = function(input) {
  return mapDomain(input, function(string3) {
    return regexPunycode.test(string3) ? decode(string3.slice(4).toLowerCase()) : string3;
  });
};
const toASCII = function(input) {
  return mapDomain(input, function(string3) {
    return regexNonASCII.test(string3) ? "xn--" + encode(string3) : string3;
  });
};
const punycode = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  "version": "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  "ucs2": {
    "decode": ucs2decode,
    "encode": ucs2encode
  },
  "decode": decode,
  "encode": encode,
  "toASCII": toASCII,
  "toUnicode": toUnicode
};
const cfg_default = {
  options: {
    // Enable HTML tags in source
    html: false,
    // Use '/' to close single tags (<br />)
    xhtmlOut: false,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
const cfg_zero = {
  options: {
    // Enable HTML tags in source
    html: false,
    // Use '/' to close single tags (<br />)
    xhtmlOut: false,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
};
const cfg_commonmark = {
  options: {
    // Enable HTML tags in source
    html: true,
    // Use '/' to close single tags (<br />)
    xhtmlOut: true,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
};
const config = {
  default: cfg_default,
  zero: cfg_zero,
  commonmark: cfg_commonmark
};
const BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
const GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(url2) {
  const str = url2.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) : true;
}
const RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
function normalizeLink(url2) {
  const parsed = urlParse(url2, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return encode$1(format(parsed));
}
function normalizeLinkText(url2) {
  const parsed = urlParse(url2, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return decode$1(format(parsed), decode$1.defaultChars + "%");
}
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }
  if (!options) {
    if (!isString$1(presetName)) {
      options = presetName || {};
      presetName = "default";
    }
  }
  this.inline = new ParserInline();
  this.block = new ParserBlock();
  this.core = new Core();
  this.renderer = new Renderer();
  this.linkify = new LinkifyIt();
  this.validateLink = validateLink;
  this.normalizeLink = normalizeLink;
  this.normalizeLinkText = normalizeLinkText;
  this.utils = utils;
  this.helpers = assign$1({}, helpers);
  this.options = {};
  this.configure(presetName);
  if (options) {
    this.set(options);
  }
}
MarkdownIt.prototype.set = function(options) {
  assign$1(this.options, options);
  return this;
};
MarkdownIt.prototype.configure = function(presets) {
  const self2 = this;
  if (isString$1(presets)) {
    const presetName = presets;
    presets = config[presetName];
    if (!presets) {
      throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
  }
  if (!presets) {
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  }
  if (presets.options) {
    self2.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name) {
      if (presets.components[name].rules) {
        self2[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self2[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};
MarkdownIt.prototype.enable = function(list2, ignoreInvalid) {
  let result = [];
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.enable(list2, true));
  }, this);
  result = result.concat(this.inline.ruler2.enable(list2, true));
  const missed = list2.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.disable = function(list2, ignoreInvalid) {
  let result = [];
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.disable(list2, true));
  }, this);
  result = result.concat(this.inline.ruler2.disable(list2, true));
  const missed = list2.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.use = function(plugin) {
  const args = [this].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};
MarkdownIt.prototype.parse = function(src, env) {
  if (typeof src !== "string") {
    throw new Error("Input data should be a String");
  }
  const state = new this.core.State(src, this, env);
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.render = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parse(src, env), this.options, env);
};
MarkdownIt.prototype.parseInline = function(src, env) {
  const state = new this.core.State(src, this, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.renderInline = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(src, env), this.options, env);
};
const t = /* @__PURE__ */ new Set([true, false, "alt", "title"]);
function e(t2, e2) {
  return (Array.isArray(t2) ? t2 : []).filter(([t3]) => t3 !== e2);
}
function n(t2, n2) {
  t2 && t2.attrs && (t2.attrs = e(t2.attrs, n2));
}
function i(e2, i2) {
  if (!t.has(e2))
    throw new TypeError(`figcaption must be one of: ${[...t]}.`);
  if ("alt" === e2)
    return i2.content;
  const r2 = i2.attrs.find(([t2]) => "title" === t2);
  return Array.isArray(r2) && r2[1] ? (n(i2, "title"), r2[1]) : void 0;
}
function r(t2, r2) {
  r2 = r2 || {}, t2.core.ruler.before("linkify", "image_figures", function(s) {
    let a2 = 1;
    for (let o = 1, c = s.tokens.length; o < c - 1; ++o) {
      const l = s.tokens[o];
      if ("inline" !== l.type)
        continue;
      if (!l.children || 1 !== l.children.length && 3 !== l.children.length)
        continue;
      if (1 === l.children.length && "image" !== l.children[0].type)
        continue;
      if (3 === l.children.length) {
        const [t3, e2, n2] = l.children;
        if ("link_open" !== t3.type || "image" !== e2.type || "link_close" !== n2.type)
          continue;
      }
      if (0 !== o && "paragraph_open" !== s.tokens[o - 1].type)
        continue;
      if (o !== c - 1 && "paragraph_close" !== s.tokens[o + 1].type)
        continue;
      const f = s.tokens[o - 1];
      let h;
      if (f.type = "figure_open", f.tag = "figure", s.tokens[o + 1].type = "figure_close", s.tokens[o + 1].tag = "figure", r2.dataType && s.tokens[o - 1].attrPush(["data-type", "image"]), r2.link && 1 === l.children.length) {
        [h] = l.children;
        const t3 = new s.Token("link_open", "a", 1);
        t3.attrPush(["href", h.attrGet("src")]), l.children.unshift(t3), l.children.push(new s.Token("link_close", "a", -1));
      }
      if (h = 1 === l.children.length ? l.children[0] : l.children[1], r2.figcaption) {
        const n2 = i(r2.figcaption, h);
        if (n2) {
          const [i2] = t2.parseInline(n2, s.env);
          l.children.push(new s.Token("figcaption_open", "figcaption", 1)), l.children.push(...i2.children), l.children.push(new s.Token("figcaption_close", "figcaption", -1)), h.attrs && (h.attrs = e(h.attrs, "title"));
        }
      }
      if (r2.copyAttrs && h.attrs) {
        const t3 = true === r2.copyAttrs ? "" : r2.copyAttrs;
        f.attrs = h.attrs.filter(([e2]) => e2.match(t3)).map((t4) => Array.from(t4));
      }
      if (r2.tabindex && (s.tokens[o - 1].attrPush(["tabindex", a2]), a2++), r2.lazy && (h.attrs.some(([t3]) => "loading" === t3) || h.attrs.push(["loading", "lazy"])), r2.async && (h.attrs.some(([t3]) => "decoding" === t3) || h.attrs.push(["decoding", "async"])), r2.classes && "string" == typeof r2.classes) {
        let t3 = false;
        for (let e2 = 0, n2 = h.attrs.length; e2 < n2 && !t3; e2++) {
          const n3 = h.attrs[e2];
          "class" === n3[0] && (n3[1] = `${n3[1]} ${r2.classes}`, t3 = true);
        }
        t3 || h.attrs.push(["class", r2.classes]);
      }
      if (r2.removeSrc) {
        const t3 = h.attrs.find(([t4]) => "src" === t4);
        h.attrs.push(["data-src", t3[1]]), n(h, "src");
      }
    }
  });
}
var disableCheckboxes = true;
var useLabelWrapper = false;
var useLabelAfter = false;
var markdownItTaskLists = function(md, options) {
  if (options) {
    disableCheckboxes = !options.enabled;
    useLabelWrapper = !!options.label;
    useLabelAfter = !!options.labelAfter;
  }
  md.core.ruler.after("inline", "github-task-lists", function(state) {
    var tokens = state.tokens;
    for (var i2 = 2; i2 < tokens.length; i2++) {
      if (isTodoItem(tokens, i2)) {
        todoify(tokens[i2], state.Token);
        attrSet2(tokens[i2 - 2], "class", "task-list-item" + (!disableCheckboxes ? " enabled" : ""));
        attrSet2(tokens[parentToken(tokens, i2 - 2)], "class", "contains-task-list");
      }
    }
  });
};
function attrSet2(token, name, value) {
  var index2 = token.attrIndex(name);
  var attr = [name, value];
  if (index2 < 0) {
    token.attrPush(attr);
  } else {
    token.attrs[index2] = attr;
  }
}
function parentToken(tokens, index2) {
  var targetLevel = tokens[index2].level - 1;
  for (var i2 = index2 - 1; i2 >= 0; i2--) {
    if (tokens[i2].level === targetLevel) {
      return i2;
    }
  }
  return -1;
}
function isTodoItem(tokens, index2) {
  return isInline(tokens[index2]) && isParagraph(tokens[index2 - 1]) && isListItem(tokens[index2 - 2]) && startsWithTodoMarkdown(tokens[index2]);
}
function todoify(token, TokenConstructor) {
  token.children.unshift(makeCheckbox(token, TokenConstructor));
  token.children[1].content = token.children[1].content.slice(3);
  token.content = token.content.slice(3);
  if (useLabelWrapper) {
    if (useLabelAfter) {
      token.children.pop();
      var id = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
      token.children[0].content = token.children[0].content.slice(0, -1) + ' id="' + id + '">';
      token.children.push(afterLabel(token.content, id, TokenConstructor));
    } else {
      token.children.unshift(beginLabel(TokenConstructor));
      token.children.push(endLabel(TokenConstructor));
    }
  }
}
function makeCheckbox(token, TokenConstructor) {
  var checkbox = new TokenConstructor("html_inline", "", 0);
  var disabledAttr = disableCheckboxes ? ' disabled="" ' : "";
  if (token.content.indexOf("[ ] ") === 0) {
    checkbox.content = '<input class="task-list-item-checkbox"' + disabledAttr + 'type="checkbox">';
  } else if (token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0) {
    checkbox.content = '<input class="task-list-item-checkbox" checked=""' + disabledAttr + 'type="checkbox">';
  }
  return checkbox;
}
function beginLabel(TokenConstructor) {
  var token = new TokenConstructor("html_inline", "", 0);
  token.content = "<label>";
  return token;
}
function endLabel(TokenConstructor) {
  var token = new TokenConstructor("html_inline", "", 0);
  token.content = "</label>";
  return token;
}
function afterLabel(content, id, TokenConstructor) {
  var token = new TokenConstructor("html_inline", "", 0);
  token.content = '<label class="task-list-item-label" for="' + id + '">' + content + "</label>";
  token.attrs = [{ for: id }];
  return token;
}
function isInline(token) {
  return token.type === "inline";
}
function isParagraph(token) {
  return token.type === "paragraph_open";
}
function isListItem(token) {
  return token.type === "list_item_open";
}
function startsWithTodoMarkdown(token) {
  return token.content.indexOf("[ ] ") === 0 || token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0;
}
const TaskListPlugin = /* @__PURE__ */ getDefaultExportFromCjs(markdownItTaskLists);
var lib$1 = { exports: {} };
var _default$1 = {};
var lib = { exports: {} };
var _default = {};
function getDefaultWhiteList$1() {
  var whiteList = {};
  whiteList["align-content"] = false;
  whiteList["align-items"] = false;
  whiteList["align-self"] = false;
  whiteList["alignment-adjust"] = false;
  whiteList["alignment-baseline"] = false;
  whiteList["all"] = false;
  whiteList["anchor-point"] = false;
  whiteList["animation"] = false;
  whiteList["animation-delay"] = false;
  whiteList["animation-direction"] = false;
  whiteList["animation-duration"] = false;
  whiteList["animation-fill-mode"] = false;
  whiteList["animation-iteration-count"] = false;
  whiteList["animation-name"] = false;
  whiteList["animation-play-state"] = false;
  whiteList["animation-timing-function"] = false;
  whiteList["azimuth"] = false;
  whiteList["backface-visibility"] = false;
  whiteList["background"] = true;
  whiteList["background-attachment"] = true;
  whiteList["background-clip"] = true;
  whiteList["background-color"] = true;
  whiteList["background-image"] = true;
  whiteList["background-origin"] = true;
  whiteList["background-position"] = true;
  whiteList["background-repeat"] = true;
  whiteList["background-size"] = true;
  whiteList["baseline-shift"] = false;
  whiteList["binding"] = false;
  whiteList["bleed"] = false;
  whiteList["bookmark-label"] = false;
  whiteList["bookmark-level"] = false;
  whiteList["bookmark-state"] = false;
  whiteList["border"] = true;
  whiteList["border-bottom"] = true;
  whiteList["border-bottom-color"] = true;
  whiteList["border-bottom-left-radius"] = true;
  whiteList["border-bottom-right-radius"] = true;
  whiteList["border-bottom-style"] = true;
  whiteList["border-bottom-width"] = true;
  whiteList["border-collapse"] = true;
  whiteList["border-color"] = true;
  whiteList["border-image"] = true;
  whiteList["border-image-outset"] = true;
  whiteList["border-image-repeat"] = true;
  whiteList["border-image-slice"] = true;
  whiteList["border-image-source"] = true;
  whiteList["border-image-width"] = true;
  whiteList["border-left"] = true;
  whiteList["border-left-color"] = true;
  whiteList["border-left-style"] = true;
  whiteList["border-left-width"] = true;
  whiteList["border-radius"] = true;
  whiteList["border-right"] = true;
  whiteList["border-right-color"] = true;
  whiteList["border-right-style"] = true;
  whiteList["border-right-width"] = true;
  whiteList["border-spacing"] = true;
  whiteList["border-style"] = true;
  whiteList["border-top"] = true;
  whiteList["border-top-color"] = true;
  whiteList["border-top-left-radius"] = true;
  whiteList["border-top-right-radius"] = true;
  whiteList["border-top-style"] = true;
  whiteList["border-top-width"] = true;
  whiteList["border-width"] = true;
  whiteList["bottom"] = false;
  whiteList["box-decoration-break"] = true;
  whiteList["box-shadow"] = true;
  whiteList["box-sizing"] = true;
  whiteList["box-snap"] = true;
  whiteList["box-suppress"] = true;
  whiteList["break-after"] = true;
  whiteList["break-before"] = true;
  whiteList["break-inside"] = true;
  whiteList["caption-side"] = false;
  whiteList["chains"] = false;
  whiteList["clear"] = true;
  whiteList["clip"] = false;
  whiteList["clip-path"] = false;
  whiteList["clip-rule"] = false;
  whiteList["color"] = true;
  whiteList["color-interpolation-filters"] = true;
  whiteList["column-count"] = false;
  whiteList["column-fill"] = false;
  whiteList["column-gap"] = false;
  whiteList["column-rule"] = false;
  whiteList["column-rule-color"] = false;
  whiteList["column-rule-style"] = false;
  whiteList["column-rule-width"] = false;
  whiteList["column-span"] = false;
  whiteList["column-width"] = false;
  whiteList["columns"] = false;
  whiteList["contain"] = false;
  whiteList["content"] = false;
  whiteList["counter-increment"] = false;
  whiteList["counter-reset"] = false;
  whiteList["counter-set"] = false;
  whiteList["crop"] = false;
  whiteList["cue"] = false;
  whiteList["cue-after"] = false;
  whiteList["cue-before"] = false;
  whiteList["cursor"] = false;
  whiteList["direction"] = false;
  whiteList["display"] = true;
  whiteList["display-inside"] = true;
  whiteList["display-list"] = true;
  whiteList["display-outside"] = true;
  whiteList["dominant-baseline"] = false;
  whiteList["elevation"] = false;
  whiteList["empty-cells"] = false;
  whiteList["filter"] = false;
  whiteList["flex"] = false;
  whiteList["flex-basis"] = false;
  whiteList["flex-direction"] = false;
  whiteList["flex-flow"] = false;
  whiteList["flex-grow"] = false;
  whiteList["flex-shrink"] = false;
  whiteList["flex-wrap"] = false;
  whiteList["float"] = false;
  whiteList["float-offset"] = false;
  whiteList["flood-color"] = false;
  whiteList["flood-opacity"] = false;
  whiteList["flow-from"] = false;
  whiteList["flow-into"] = false;
  whiteList["font"] = true;
  whiteList["font-family"] = true;
  whiteList["font-feature-settings"] = true;
  whiteList["font-kerning"] = true;
  whiteList["font-language-override"] = true;
  whiteList["font-size"] = true;
  whiteList["font-size-adjust"] = true;
  whiteList["font-stretch"] = true;
  whiteList["font-style"] = true;
  whiteList["font-synthesis"] = true;
  whiteList["font-variant"] = true;
  whiteList["font-variant-alternates"] = true;
  whiteList["font-variant-caps"] = true;
  whiteList["font-variant-east-asian"] = true;
  whiteList["font-variant-ligatures"] = true;
  whiteList["font-variant-numeric"] = true;
  whiteList["font-variant-position"] = true;
  whiteList["font-weight"] = true;
  whiteList["grid"] = false;
  whiteList["grid-area"] = false;
  whiteList["grid-auto-columns"] = false;
  whiteList["grid-auto-flow"] = false;
  whiteList["grid-auto-rows"] = false;
  whiteList["grid-column"] = false;
  whiteList["grid-column-end"] = false;
  whiteList["grid-column-start"] = false;
  whiteList["grid-row"] = false;
  whiteList["grid-row-end"] = false;
  whiteList["grid-row-start"] = false;
  whiteList["grid-template"] = false;
  whiteList["grid-template-areas"] = false;
  whiteList["grid-template-columns"] = false;
  whiteList["grid-template-rows"] = false;
  whiteList["hanging-punctuation"] = false;
  whiteList["height"] = true;
  whiteList["hyphens"] = false;
  whiteList["icon"] = false;
  whiteList["image-orientation"] = false;
  whiteList["image-resolution"] = false;
  whiteList["ime-mode"] = false;
  whiteList["initial-letters"] = false;
  whiteList["inline-box-align"] = false;
  whiteList["justify-content"] = false;
  whiteList["justify-items"] = false;
  whiteList["justify-self"] = false;
  whiteList["left"] = false;
  whiteList["letter-spacing"] = true;
  whiteList["lighting-color"] = true;
  whiteList["line-box-contain"] = false;
  whiteList["line-break"] = false;
  whiteList["line-grid"] = false;
  whiteList["line-height"] = false;
  whiteList["line-snap"] = false;
  whiteList["line-stacking"] = false;
  whiteList["line-stacking-ruby"] = false;
  whiteList["line-stacking-shift"] = false;
  whiteList["line-stacking-strategy"] = false;
  whiteList["list-style"] = true;
  whiteList["list-style-image"] = true;
  whiteList["list-style-position"] = true;
  whiteList["list-style-type"] = true;
  whiteList["margin"] = true;
  whiteList["margin-bottom"] = true;
  whiteList["margin-left"] = true;
  whiteList["margin-right"] = true;
  whiteList["margin-top"] = true;
  whiteList["marker-offset"] = false;
  whiteList["marker-side"] = false;
  whiteList["marks"] = false;
  whiteList["mask"] = false;
  whiteList["mask-box"] = false;
  whiteList["mask-box-outset"] = false;
  whiteList["mask-box-repeat"] = false;
  whiteList["mask-box-slice"] = false;
  whiteList["mask-box-source"] = false;
  whiteList["mask-box-width"] = false;
  whiteList["mask-clip"] = false;
  whiteList["mask-image"] = false;
  whiteList["mask-origin"] = false;
  whiteList["mask-position"] = false;
  whiteList["mask-repeat"] = false;
  whiteList["mask-size"] = false;
  whiteList["mask-source-type"] = false;
  whiteList["mask-type"] = false;
  whiteList["max-height"] = true;
  whiteList["max-lines"] = false;
  whiteList["max-width"] = true;
  whiteList["min-height"] = true;
  whiteList["min-width"] = true;
  whiteList["move-to"] = false;
  whiteList["nav-down"] = false;
  whiteList["nav-index"] = false;
  whiteList["nav-left"] = false;
  whiteList["nav-right"] = false;
  whiteList["nav-up"] = false;
  whiteList["object-fit"] = false;
  whiteList["object-position"] = false;
  whiteList["opacity"] = false;
  whiteList["order"] = false;
  whiteList["orphans"] = false;
  whiteList["outline"] = false;
  whiteList["outline-color"] = false;
  whiteList["outline-offset"] = false;
  whiteList["outline-style"] = false;
  whiteList["outline-width"] = false;
  whiteList["overflow"] = false;
  whiteList["overflow-wrap"] = false;
  whiteList["overflow-x"] = false;
  whiteList["overflow-y"] = false;
  whiteList["padding"] = true;
  whiteList["padding-bottom"] = true;
  whiteList["padding-left"] = true;
  whiteList["padding-right"] = true;
  whiteList["padding-top"] = true;
  whiteList["page"] = false;
  whiteList["page-break-after"] = false;
  whiteList["page-break-before"] = false;
  whiteList["page-break-inside"] = false;
  whiteList["page-policy"] = false;
  whiteList["pause"] = false;
  whiteList["pause-after"] = false;
  whiteList["pause-before"] = false;
  whiteList["perspective"] = false;
  whiteList["perspective-origin"] = false;
  whiteList["pitch"] = false;
  whiteList["pitch-range"] = false;
  whiteList["play-during"] = false;
  whiteList["position"] = false;
  whiteList["presentation-level"] = false;
  whiteList["quotes"] = false;
  whiteList["region-fragment"] = false;
  whiteList["resize"] = false;
  whiteList["rest"] = false;
  whiteList["rest-after"] = false;
  whiteList["rest-before"] = false;
  whiteList["richness"] = false;
  whiteList["right"] = false;
  whiteList["rotation"] = false;
  whiteList["rotation-point"] = false;
  whiteList["ruby-align"] = false;
  whiteList["ruby-merge"] = false;
  whiteList["ruby-position"] = false;
  whiteList["shape-image-threshold"] = false;
  whiteList["shape-outside"] = false;
  whiteList["shape-margin"] = false;
  whiteList["size"] = false;
  whiteList["speak"] = false;
  whiteList["speak-as"] = false;
  whiteList["speak-header"] = false;
  whiteList["speak-numeral"] = false;
  whiteList["speak-punctuation"] = false;
  whiteList["speech-rate"] = false;
  whiteList["stress"] = false;
  whiteList["string-set"] = false;
  whiteList["tab-size"] = false;
  whiteList["table-layout"] = false;
  whiteList["text-align"] = true;
  whiteList["text-align-last"] = true;
  whiteList["text-combine-upright"] = true;
  whiteList["text-decoration"] = true;
  whiteList["text-decoration-color"] = true;
  whiteList["text-decoration-line"] = true;
  whiteList["text-decoration-skip"] = true;
  whiteList["text-decoration-style"] = true;
  whiteList["text-emphasis"] = true;
  whiteList["text-emphasis-color"] = true;
  whiteList["text-emphasis-position"] = true;
  whiteList["text-emphasis-style"] = true;
  whiteList["text-height"] = true;
  whiteList["text-indent"] = true;
  whiteList["text-justify"] = true;
  whiteList["text-orientation"] = true;
  whiteList["text-overflow"] = true;
  whiteList["text-shadow"] = true;
  whiteList["text-space-collapse"] = true;
  whiteList["text-transform"] = true;
  whiteList["text-underline-position"] = true;
  whiteList["text-wrap"] = true;
  whiteList["top"] = false;
  whiteList["transform"] = false;
  whiteList["transform-origin"] = false;
  whiteList["transform-style"] = false;
  whiteList["transition"] = false;
  whiteList["transition-delay"] = false;
  whiteList["transition-duration"] = false;
  whiteList["transition-property"] = false;
  whiteList["transition-timing-function"] = false;
  whiteList["unicode-bidi"] = false;
  whiteList["vertical-align"] = false;
  whiteList["visibility"] = false;
  whiteList["voice-balance"] = false;
  whiteList["voice-duration"] = false;
  whiteList["voice-family"] = false;
  whiteList["voice-pitch"] = false;
  whiteList["voice-range"] = false;
  whiteList["voice-rate"] = false;
  whiteList["voice-stress"] = false;
  whiteList["voice-volume"] = false;
  whiteList["volume"] = false;
  whiteList["white-space"] = false;
  whiteList["widows"] = false;
  whiteList["width"] = true;
  whiteList["will-change"] = false;
  whiteList["word-break"] = true;
  whiteList["word-spacing"] = true;
  whiteList["word-wrap"] = true;
  whiteList["wrap-flow"] = false;
  whiteList["wrap-through"] = false;
  whiteList["writing-mode"] = false;
  whiteList["z-index"] = false;
  return whiteList;
}
function onAttr(name, value, options) {
}
function onIgnoreAttr(name, value, options) {
}
var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
function safeAttrValue$1(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value))
    return "";
  return value;
}
_default.whiteList = getDefaultWhiteList$1();
_default.getDefaultWhiteList = getDefaultWhiteList$1;
_default.onAttr = onAttr;
_default.onIgnoreAttr = onIgnoreAttr;
_default.safeAttrValue = safeAttrValue$1;
var util$1 = {
  indexOf: function(arr, item) {
    var i2, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i2 = 0, j = arr.length; i2 < j; i2++) {
      if (arr[i2] === item) {
        return i2;
      }
    }
    return -1;
  },
  forEach: function(arr, fn, scope) {
    var i2, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i2 = 0, j = arr.length; i2 < j; i2++) {
      fn.call(scope, arr[i2], i2, arr);
    }
  },
  trim: function(str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function(str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, "");
  }
};
var _$3 = util$1;
function parseStyle$1(css2, onAttr2) {
  css2 = _$3.trimRight(css2);
  if (css2[css2.length - 1] !== ";")
    css2 += ";";
  var cssLength = css2.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i2 = 0;
  var retCSS = "";
  function addNewAttr() {
    if (!isParenthesisOpen) {
      var source = _$3.trim(css2.slice(lastPos, i2));
      var j2 = source.indexOf(":");
      if (j2 !== -1) {
        var name = _$3.trim(source.slice(0, j2));
        var value = _$3.trim(source.slice(j2 + 1));
        if (name) {
          var ret = onAttr2(lastPos, retCSS.length, name, value, source);
          if (ret)
            retCSS += ret + "; ";
        }
      }
    }
    lastPos = i2 + 1;
  }
  for (; i2 < cssLength; i2++) {
    var c = css2[i2];
    if (c === "/" && css2[i2 + 1] === "*") {
      var j = css2.indexOf("*/", i2 + 2);
      if (j === -1)
        break;
      i2 = j + 1;
      lastPos = i2 + 1;
      isParenthesisOpen = false;
    } else if (c === "(") {
      isParenthesisOpen = true;
    } else if (c === ")") {
      isParenthesisOpen = false;
    } else if (c === ";") {
      if (isParenthesisOpen)
        ;
      else {
        addNewAttr();
      }
    } else if (c === "\n") {
      addNewAttr();
    }
  }
  return _$3.trim(retCSS);
}
var parser$2 = parseStyle$1;
var DEFAULT$1 = _default;
var parseStyle = parser$2;
function isNull$1(obj) {
  return obj === void 0 || obj === null;
}
function shallowCopyObject$1(obj) {
  var ret = {};
  for (var i2 in obj) {
    ret[i2] = obj[i2];
  }
  return ret;
}
function FilterCSS$2(options) {
  options = shallowCopyObject$1(options || {});
  options.whiteList = options.whiteList || DEFAULT$1.whiteList;
  options.onAttr = options.onAttr || DEFAULT$1.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
  this.options = options;
}
FilterCSS$2.prototype.process = function(css2) {
  css2 = css2 || "";
  css2 = css2.toString();
  if (!css2)
    return "";
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr2 = options.onAttr;
  var onIgnoreAttr2 = options.onIgnoreAttr;
  var safeAttrValue2 = options.safeAttrValue;
  var retCSS = parseStyle(css2, function(sourcePosition, position, name, value, source) {
    var check = whiteList[name];
    var isWhite = false;
    if (check === true)
      isWhite = check;
    else if (typeof check === "function")
      isWhite = check(value);
    else if (check instanceof RegExp)
      isWhite = check.test(value);
    if (isWhite !== true)
      isWhite = false;
    value = safeAttrValue2(name, value);
    if (!value)
      return;
    var opts = {
      position,
      sourcePosition,
      source,
      isWhite
    };
    if (isWhite) {
      var ret = onAttr2(name, value, opts);
      if (isNull$1(ret)) {
        return name + ":" + value;
      } else {
        return ret;
      }
    } else {
      var ret = onIgnoreAttr2(name, value, opts);
      if (!isNull$1(ret)) {
        return ret;
      }
    }
  });
  return retCSS;
};
var css = FilterCSS$2;
(function(module2, exports2) {
  var DEFAULT2 = _default;
  var FilterCSS2 = css;
  function filterCSS(html, options) {
    var xss2 = new FilterCSS2(options);
    return xss2.process(html);
  }
  exports2 = module2.exports = filterCSS;
  exports2.FilterCSS = FilterCSS2;
  for (var i2 in DEFAULT2)
    exports2[i2] = DEFAULT2[i2];
  if (typeof window !== "undefined") {
    window.filterCSS = module2.exports;
  }
})(lib, lib.exports);
var libExports$1 = lib.exports;
var util = {
  indexOf: function(arr, item) {
    var i2, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i2 = 0, j = arr.length; i2 < j; i2++) {
      if (arr[i2] === item) {
        return i2;
      }
    }
    return -1;
  },
  forEach: function(arr, fn, scope) {
    var i2, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i2 = 0, j = arr.length; i2 < j; i2++) {
      fn.call(scope, arr[i2], i2, arr);
    }
  },
  trim: function(str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(str) {
    var reg = /\s|\n|\t/;
    var match2 = reg.exec(str);
    return match2 ? match2.index : -1;
  }
};
var FilterCSS$1 = libExports$1.FilterCSS;
var getDefaultCSSWhiteList = libExports$1.getDefaultWhiteList;
var _$2 = util;
function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src"
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height", "loading"],
    ins: ["datetime"],
    kbd: [],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width"
    ]
  };
}
var defaultCSSFilter = new FilterCSS$1();
function onTag(tag, html, options) {
}
function onIgnoreTag(tag, html, options) {
}
function onTagAttr(tag, name, value) {
}
function onIgnoreTagAttr(tag, name, value) {
}
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}
function safeAttrValue(tag, name, value, cssFilter) {
  value = friendlyAttrValue(value);
  if (name === "href" || name === "src") {
    value = _$2.trim(value);
    if (value === "#")
      return "#";
    if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
      return "";
    }
  } else if (name === "background") {
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }
  value = escapeAttrValue(value);
  return value;
}
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code2) {
    return code2[0] === "x" || code2[0] === "X" ? String.fromCharCode(parseInt(code2.substr(1), 16)) : String.fromCharCode(parseInt(code2, 10));
  });
}
function escapeDangerHtml5Entities(str) {
  return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i2 = 0, len = str.length; i2 < len; i2++) {
    str2 += str.charCodeAt(i2) < 32 ? " " : str.charAt(i2);
  }
  return _$2.trim(str2);
}
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}
function onIgnoreTagStripAll() {
  return "";
}
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function() {
    };
  }
  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag)
      return true;
    return _$2.indexOf(tags, tag) !== -1;
  }
  var removeList = [];
  var posStart = false;
  return {
    onIgnoreTag: function(tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function(html) {
      var rethtml = "";
      var lastPos = 0;
      _$2.forEach(removeList, function(pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    }
  };
}
function stripCommentTag(html) {
  var retHtml = "";
  var lastPos = 0;
  while (lastPos < html.length) {
    var i2 = html.indexOf("<!--", lastPos);
    if (i2 === -1) {
      retHtml += html.slice(lastPos);
      break;
    }
    retHtml += html.slice(lastPos, i2);
    var j = html.indexOf("-->", i2);
    if (j === -1) {
      break;
    }
    lastPos = j + 3;
  }
  return retHtml;
}
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function(char) {
    var c = char.charCodeAt(0);
    if (c === 127)
      return false;
    if (c <= 31) {
      if (c === 10 || c === 13)
        return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}
_default$1.whiteList = getDefaultWhiteList();
_default$1.getDefaultWhiteList = getDefaultWhiteList;
_default$1.onTag = onTag;
_default$1.onIgnoreTag = onIgnoreTag;
_default$1.onTagAttr = onTagAttr;
_default$1.onIgnoreTagAttr = onIgnoreTagAttr;
_default$1.safeAttrValue = safeAttrValue;
_default$1.escapeHtml = escapeHtml;
_default$1.escapeQuote = escapeQuote;
_default$1.unescapeQuote = unescapeQuote;
_default$1.escapeHtmlEntities = escapeHtmlEntities;
_default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
_default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
_default$1.friendlyAttrValue = friendlyAttrValue;
_default$1.escapeAttrValue = escapeAttrValue;
_default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
_default$1.StripTagBody = StripTagBody;
_default$1.stripCommentTag = stripCommentTag;
_default$1.stripBlankChar = stripBlankChar;
_default$1.attributeWrapSign = '"';
_default$1.cssFilter = defaultCSSFilter;
_default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
var parser$1 = {};
var _$1 = util;
function getTagName(html) {
  var i2 = _$1.spaceIndex(html);
  var tagName;
  if (i2 === -1) {
    tagName = html.slice(1, -1);
  } else {
    tagName = html.slice(1, i2 + 1);
  }
  tagName = _$1.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/")
    tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/")
    tagName = tagName.slice(0, -1);
  return tagName;
}
function isClosing(html) {
  return html.slice(0, 2) === "</";
}
function parseTag$1(html, onTag2, escapeHtml2) {
  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";
  chariterator:
    for (currentPos = 0; currentPos < len; currentPos++) {
      var c = html.charAt(currentPos);
      if (tagStart === false) {
        if (c === "<") {
          tagStart = currentPos;
          continue;
        }
      } else {
        if (quoteStart === false) {
          if (c === "<") {
            rethtml += escapeHtml2(html.slice(lastPos, currentPos));
            tagStart = currentPos;
            lastPos = currentPos;
            continue;
          }
          if (c === ">" || currentPos === len - 1) {
            rethtml += escapeHtml2(html.slice(lastPos, tagStart));
            currentHtml = html.slice(tagStart, currentPos + 1);
            currentTagName = getTagName(currentHtml);
            rethtml += onTag2(
              tagStart,
              rethtml.length,
              currentTagName,
              currentHtml,
              isClosing(currentHtml)
            );
            lastPos = currentPos + 1;
            tagStart = false;
            continue;
          }
          if (c === '"' || c === "'") {
            var i2 = 1;
            var ic = html.charAt(currentPos - i2);
            while (ic.trim() === "" || ic === "=") {
              if (ic === "=") {
                quoteStart = c;
                continue chariterator;
              }
              ic = html.charAt(currentPos - ++i2);
            }
          }
        } else {
          if (c === quoteStart) {
            quoteStart = false;
            continue;
          }
        }
      }
    }
  if (lastPos < len) {
    rethtml += escapeHtml2(html.substr(lastPos));
  }
  return rethtml;
}
var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
function parseAttr$1(html, onAttr2) {
  var lastPos = 0;
  var lastMarkPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;
  function addAttr(name, value) {
    name = _$1.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1)
      return;
    var ret = onAttr2(name, value || "");
    if (ret)
      retAttrs.push(ret);
  }
  for (var i2 = 0; i2 < len; i2++) {
    var c = html.charAt(i2);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i2);
      lastPos = i2 + 1;
      lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i2 + 1);
      continue;
    }
    if (tmpName !== false) {
      if (i2 === lastMarkPos) {
        j = html.indexOf(c, i2 + 1);
        if (j === -1) {
          break;
        } else {
          v = _$1.trim(html.slice(lastMarkPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i2 = j;
          lastPos = i2 + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i2);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i2));
          addAttr(v);
          tmpName = false;
          lastPos = i2 + 1;
          continue;
        } else {
          i2 = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i2 - 1);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i2));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i2 + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
    }
  }
  return _$1.trim(retAttrs.join(" "));
}
function findNextEqual(str, i2) {
  for (; i2 < str.length; i2++) {
    var c = str[i2];
    if (c === " ")
      continue;
    if (c === "=")
      return i2;
    return -1;
  }
}
function findNextQuotationMark(str, i2) {
  for (; i2 < str.length; i2++) {
    var c = str[i2];
    if (c === " ")
      continue;
    if (c === "'" || c === '"')
      return i2;
    return -1;
  }
}
function findBeforeEqual(str, i2) {
  for (; i2 > 0; i2--) {
    var c = str[i2];
    if (c === " ")
      continue;
    if (c === "=")
      return i2;
    return -1;
  }
}
function isQuoteWrapString(text2) {
  if (text2[0] === '"' && text2[text2.length - 1] === '"' || text2[0] === "'" && text2[text2.length - 1] === "'") {
    return true;
  } else {
    return false;
  }
}
function stripQuoteWrap(text2) {
  if (isQuoteWrapString(text2)) {
    return text2.substr(1, text2.length - 2);
  } else {
    return text2;
  }
}
parser$1.parseTag = parseTag$1;
parser$1.parseAttr = parseAttr$1;
var FilterCSS = libExports$1.FilterCSS;
var DEFAULT = _default$1;
var parser = parser$1;
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = util;
function isNull(obj) {
  return obj === void 0 || obj === null;
}
function getAttrs(html) {
  var i2 = _.spaceIndex(html);
  if (i2 === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/"
    };
  }
  html = _.trim(html.slice(i2 + 1, -1));
  var isClosing2 = html[html.length - 1] === "/";
  if (isClosing2)
    html = _.trim(html.slice(0, -1));
  return {
    html,
    closing: isClosing2
  };
}
function shallowCopyObject(obj) {
  var ret = {};
  for (var i2 in obj) {
    ret[i2] = obj[i2];
  }
  return ret;
}
function keysToLowerCase(obj) {
  var ret = {};
  for (var i2 in obj) {
    if (Array.isArray(obj[i2])) {
      ret[i2.toLowerCase()] = obj[i2].map(function(item) {
        return item.toLowerCase();
      });
    } else {
      ret[i2.toLowerCase()] = obj[i2];
    }
  }
  return ret;
}
function FilterXSS(options) {
  options = shallowCopyObject(options || {});
  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }
  if (options.whiteList || options.allowList) {
    options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
  } else {
    options.whiteList = DEFAULT.whiteList;
  }
  this.attributeWrapSign = options.singleQuotedAttributeValue === true ? "'" : DEFAULT.attributeWrapSign;
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;
  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}
FilterXSS.prototype.process = function(html) {
  html = html || "";
  html = html.toString();
  if (!html)
    return "";
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag2 = options.onTag;
  var onIgnoreTag2 = options.onIgnoreTag;
  var onTagAttr2 = options.onTagAttr;
  var onIgnoreTagAttr2 = options.onIgnoreTagAttr;
  var safeAttrValue2 = options.safeAttrValue;
  var escapeHtml2 = options.escapeHtml;
  var attributeWrapSign = me.attributeWrapSign;
  var cssFilter = me.cssFilter;
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag2
    );
    onIgnoreTag2 = stripIgnoreTagBody.onIgnoreTag;
  }
  var retHtml = parseTag(
    html,
    function(sourcePosition, position, tag, html2, isClosing2) {
      var info = {
        sourcePosition,
        position,
        isClosing: isClosing2,
        isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
      };
      var ret = onTag2(tag, html2, info);
      if (!isNull(ret))
        return ret;
      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }
        var attrs = getAttrs(html2);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function(name, value) {
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret2 = onTagAttr2(tag, name, value, isWhiteAttr);
          if (!isNull(ret2))
            return ret2;
          if (isWhiteAttr) {
            value = safeAttrValue2(tag, name, value, cssFilter);
            if (value) {
              return name + "=" + attributeWrapSign + value + attributeWrapSign;
            } else {
              return name;
            }
          } else {
            ret2 = onIgnoreTagAttr2(tag, name, value, isWhiteAttr);
            if (!isNull(ret2))
              return ret2;
            return;
          }
        });
        html2 = "<" + tag;
        if (attrsHtml)
          html2 += " " + attrsHtml;
        if (attrs.closing)
          html2 += " /";
        html2 += ">";
        return html2;
      } else {
        ret = onIgnoreTag2(tag, html2, info);
        if (!isNull(ret))
          return ret;
        return escapeHtml2(html2);
      }
    },
    escapeHtml2
  );
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }
  return retHtml;
};
var xss = FilterXSS;
(function(module2, exports2) {
  var DEFAULT2 = _default$1;
  var parser2 = parser$1;
  var FilterXSS2 = xss;
  function filterXSS(html, options) {
    var xss2 = new FilterXSS2(options);
    return xss2.process(html);
  }
  exports2 = module2.exports = filterXSS;
  exports2.filterXSS = filterXSS;
  exports2.FilterXSS = FilterXSS2;
  (function() {
    for (var i2 in DEFAULT2) {
      exports2[i2] = DEFAULT2[i2];
    }
    for (var j in parser2) {
      exports2[j] = parser2[j];
    }
  })();
  if (typeof window !== "undefined") {
    window.filterXSS = module2.exports;
  }
  function isWorkerEnv() {
    return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
  }
  if (isWorkerEnv()) {
    self.filterXSS = module2.exports;
  }
})(lib$1, lib$1.exports);
var libExports = lib$1.exports;
const jsxss = libExports;
var markdownItXss = function xssProtector(md, { xss: xss2 } = {}) {
  const customXss = new jsxss.FilterXSS(typeof xss2 === "function" ? xss2(jsxss) : xss2);
  function filterContent(str) {
    str = customXss.process(str);
    return str;
  }
  function xssProtector2(state) {
    for (let i2 = 0; i2 < state.tokens.length; i2++) {
      let cur = state.tokens[i2];
      if (cur.type === "html_block") {
        cur.content = filterContent(cur.content);
      }
      if (cur.type === "inline") {
        let inlineTokens = cur.children;
        for (let ii2 = 0; ii2 < inlineTokens.length; ii2++) {
          if (inlineTokens[ii2].type === "html_inline") {
            inlineTokens[ii2].content = filterContent(inlineTokens[ii2].content);
          }
        }
      }
    }
  }
  md.core.ruler.after("linkify", "xss", xssProtector2);
};
const XSSPlugin = /* @__PURE__ */ getDefaultExportFromCjs(markdownItXss);
const perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
const warned = /* @__PURE__ */ new Set();
const PROCESS = typeof process === "object" && !!process ? process : {};
const emitWarning = (msg, type4, code2, fn) => {
  typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type4, code2, fn) : console.error(`[${code2}] ${type4}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
if (typeof AC === "undefined") {
  AS = class AbortSignal {
    constructor() {
      __publicField(this, "onabort");
      __publicField(this, "_onabort", []);
      __publicField(this, "reason");
      __publicField(this, "aborted", false);
    }
    addEventListener(_2, fn) {
      this._onabort.push(fn);
    }
  };
  AC = class AbortController {
    constructor() {
      __publicField(this, "signal", new AS());
      warnACPolyfill();
    }
    abort(reason) {
      var _a3, _b2;
      if (this.signal.aborted)
        return;
      this.signal.reason = reason;
      this.signal.aborted = true;
      for (const fn of this.signal._onabort) {
        fn(reason);
      }
      (_b2 = (_a3 = this.signal).onabort) == null ? void 0 : _b2.call(_a3, reason);
    }
  };
  let printACPolyfillWarning = ((_a2 = PROCESS.env) == null ? void 0 : _a2.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
  const warnACPolyfill = () => {
    if (!printACPolyfillWarning)
      return;
    printACPolyfillWarning = false;
    emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
  };
}
const shouldWarn = (code2) => !warned.has(code2);
const isPosInt = (n2) => n2 && n2 === Math.floor(n2) && n2 > 0 && isFinite(n2);
const getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
class ZeroArray extends Array {
  constructor(size) {
    super(size);
    this.fill(0);
  }
}
const _Stack = class _Stack {
  constructor(max, HeapCls) {
    __publicField(this, "heap");
    __publicField(this, "length");
    if (!__privateGet(_Stack, _constructing)) {
      throw new TypeError("instantiate Stack using Stack.create(n)");
    }
    this.heap = new HeapCls(max);
    this.length = 0;
  }
  static create(max) {
    const HeapCls = getUintArray(max);
    if (!HeapCls)
      return [];
    __privateSet(_Stack, _constructing, true);
    const s = new _Stack(max, HeapCls);
    __privateSet(_Stack, _constructing, false);
    return s;
  }
  push(n2) {
    this.heap[this.length++] = n2;
  }
  pop() {
    return this.heap[--this.length];
  }
};
_constructing = new WeakMap();
// private constructor
__privateAdd(_Stack, _constructing, false);
let Stack = _Stack;
const _LRUCache = class _LRUCache {
  constructor(options) {
    __privateAdd(this, _initializeTTLTracking);
    __privateAdd(this, _initializeSizeTracking);
    __privateAdd(this, _indexes);
    __privateAdd(this, _rindexes);
    __privateAdd(this, _isValidIndex);
    __privateAdd(this, _evict);
    __privateAdd(this, _backgroundFetch);
    __privateAdd(this, _isBackgroundFetch);
    __privateAdd(this, _connect);
    __privateAdd(this, _moveToTail);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    __privateAdd(this, _max, void 0);
    __privateAdd(this, _maxSize, void 0);
    __privateAdd(this, _dispose, void 0);
    __privateAdd(this, _disposeAfter, void 0);
    __privateAdd(this, _fetchMethod, void 0);
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    __publicField(this, "ttl");
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    __publicField(this, "ttlResolution");
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    __publicField(this, "ttlAutopurge");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    __publicField(this, "updateAgeOnGet");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    __publicField(this, "updateAgeOnHas");
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    __publicField(this, "allowStale");
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    __publicField(this, "noDisposeOnSet");
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    __publicField(this, "noUpdateTTL");
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    __publicField(this, "maxEntrySize");
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    __publicField(this, "sizeCalculation");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    __publicField(this, "noDeleteOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    __publicField(this, "noDeleteOnStaleGet");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    __publicField(this, "allowStaleOnFetchAbort");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    __publicField(this, "allowStaleOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    __publicField(this, "ignoreFetchAbort");
    // computed properties
    __privateAdd(this, _size, void 0);
    __privateAdd(this, _calculatedSize, void 0);
    __privateAdd(this, _keyMap, void 0);
    __privateAdd(this, _keyList, void 0);
    __privateAdd(this, _valList, void 0);
    __privateAdd(this, _next, void 0);
    __privateAdd(this, _prev, void 0);
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _free, void 0);
    __privateAdd(this, _disposed, void 0);
    __privateAdd(this, _sizes, void 0);
    __privateAdd(this, _starts, void 0);
    __privateAdd(this, _ttls, void 0);
    __privateAdd(this, _hasDispose, void 0);
    __privateAdd(this, _hasFetchMethod, void 0);
    __privateAdd(this, _hasDisposeAfter, void 0);
    // conditionally set private methods related to TTL
    __privateAdd(this, _updateItemAge, () => {
    });
    __privateAdd(this, _statusTTL, () => {
    });
    __privateAdd(this, _setItemTTL, () => {
    });
    /* c8 ignore stop */
    __privateAdd(this, _isStale, () => false);
    __privateAdd(this, _removeItemSize, (_i) => {
    });
    __privateAdd(this, _addItemSize, (_i, _s, _st) => {
    });
    __privateAdd(this, _requireSize, (_k, _v, size, sizeCalculation) => {
      if (size || sizeCalculation) {
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      }
      return 0;
    });
    /**
     * A String value that is used in the creation of the default string description of an object.
     * Called by the built-in method Object.prototype.toString.
     */
    __publicField(this, _b, "LRUCache");
    const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError("max option must be a nonnegative integer");
    }
    const UintArray = max ? getUintArray(max) : Array;
    if (!UintArray) {
      throw new Error("invalid max value: " + max);
    }
    __privateSet(this, _max, max);
    __privateSet(this, _maxSize, maxSize);
    this.maxEntrySize = maxEntrySize || __privateGet(this, _maxSize);
    this.sizeCalculation = sizeCalculation;
    if (this.sizeCalculation) {
      if (!__privateGet(this, _maxSize) && !this.maxEntrySize) {
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      }
      if (typeof this.sizeCalculation !== "function") {
        throw new TypeError("sizeCalculation set to non-function");
      }
    }
    if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
      throw new TypeError("fetchMethod must be a function if specified");
    }
    __privateSet(this, _fetchMethod, fetchMethod);
    __privateSet(this, _hasFetchMethod, !!fetchMethod);
    __privateSet(this, _keyMap, /* @__PURE__ */ new Map());
    __privateSet(this, _keyList, new Array(max).fill(void 0));
    __privateSet(this, _valList, new Array(max).fill(void 0));
    __privateSet(this, _next, new UintArray(max));
    __privateSet(this, _prev, new UintArray(max));
    __privateSet(this, _head, 0);
    __privateSet(this, _tail, 0);
    __privateSet(this, _free, Stack.create(max));
    __privateSet(this, _size, 0);
    __privateSet(this, _calculatedSize, 0);
    if (typeof dispose === "function") {
      __privateSet(this, _dispose, dispose);
    }
    if (typeof disposeAfter === "function") {
      __privateSet(this, _disposeAfter, disposeAfter);
      __privateSet(this, _disposed, []);
    } else {
      __privateSet(this, _disposeAfter, void 0);
      __privateSet(this, _disposed, void 0);
    }
    __privateSet(this, _hasDispose, !!__privateGet(this, _dispose));
    __privateSet(this, _hasDisposeAfter, !!__privateGet(this, _disposeAfter));
    this.noDisposeOnSet = !!noDisposeOnSet;
    this.noUpdateTTL = !!noUpdateTTL;
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
    this.ignoreFetchAbort = !!ignoreFetchAbort;
    if (this.maxEntrySize !== 0) {
      if (__privateGet(this, _maxSize) !== 0) {
        if (!isPosInt(__privateGet(this, _maxSize))) {
          throw new TypeError("maxSize must be a positive integer if specified");
        }
      }
      if (!isPosInt(this.maxEntrySize)) {
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      }
      __privateMethod(this, _initializeSizeTracking, initializeSizeTracking_fn).call(this);
    }
    this.allowStale = !!allowStale;
    this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
    this.updateAgeOnGet = !!updateAgeOnGet;
    this.updateAgeOnHas = !!updateAgeOnHas;
    this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
    this.ttlAutopurge = !!ttlAutopurge;
    this.ttl = ttl || 0;
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError("ttl must be a positive integer if specified");
      }
      __privateMethod(this, _initializeTTLTracking, initializeTTLTracking_fn).call(this);
    }
    if (__privateGet(this, _max) === 0 && this.ttl === 0 && __privateGet(this, _maxSize) === 0) {
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    }
    if (!this.ttlAutopurge && !__privateGet(this, _max) && !__privateGet(this, _maxSize)) {
      const code2 = "LRU_CACHE_UNBOUNDED";
      if (shouldWarn(code2)) {
        warned.add(code2);
        const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
        emitWarning(msg, "UnboundedCacheWarning", code2, _LRUCache);
      }
    }
  }
  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals(c) {
    return {
      // properties
      starts: __privateGet(c, _starts),
      ttls: __privateGet(c, _ttls),
      sizes: __privateGet(c, _sizes),
      keyMap: __privateGet(c, _keyMap),
      keyList: __privateGet(c, _keyList),
      valList: __privateGet(c, _valList),
      next: __privateGet(c, _next),
      prev: __privateGet(c, _prev),
      get head() {
        return __privateGet(c, _head);
      },
      get tail() {
        return __privateGet(c, _tail);
      },
      free: __privateGet(c, _free),
      // methods
      isBackgroundFetch: (p) => {
        var _a3;
        return __privateMethod(_a3 = c, _isBackgroundFetch, isBackgroundFetch_fn).call(_a3, p);
      },
      backgroundFetch: (k, index2, options, context) => {
        var _a3;
        return __privateMethod(_a3 = c, _backgroundFetch, backgroundFetch_fn).call(_a3, k, index2, options, context);
      },
      moveToTail: (index2) => {
        var _a3;
        return __privateMethod(_a3 = c, _moveToTail, moveToTail_fn).call(_a3, index2);
      },
      indexes: (options) => {
        var _a3;
        return __privateMethod(_a3 = c, _indexes, indexes_fn).call(_a3, options);
      },
      rindexes: (options) => {
        var _a3;
        return __privateMethod(_a3 = c, _rindexes, rindexes_fn).call(_a3, options);
      },
      isStale: (index2) => {
        var _a3;
        return __privateGet(_a3 = c, _isStale).call(_a3, index2);
      }
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return __privateGet(this, _max);
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return __privateGet(this, _maxSize);
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return __privateGet(this, _calculatedSize);
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return __privateGet(this, _size);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return __privateGet(this, _fetchMethod);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return __privateGet(this, _dispose);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return __privateGet(this, _disposeAfter);
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(key) {
    return __privateGet(this, _keyMap).has(key) ? Infinity : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      if (__privateGet(this, _valList)[i2] !== void 0 && __privateGet(this, _keyList)[i2] !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield [__privateGet(this, _keyList)[i2], __privateGet(this, _valList)[i2]];
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      if (__privateGet(this, _valList)[i2] !== void 0 && __privateGet(this, _keyList)[i2] !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield [__privateGet(this, _keyList)[i2], __privateGet(this, _valList)[i2]];
      }
    }
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const k = __privateGet(this, _keyList)[i2];
      if (k !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield k;
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      const k = __privateGet(this, _keyList)[i2];
      if (k !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield k;
      }
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      if (v !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield __privateGet(this, _valList)[i2];
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      if (v !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield __privateGet(this, _valList)[i2];
      }
    }
  }
  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to Array.find().  fn is called as fn(value, key, cache).
   */
  find(fn, getOptions = {}) {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      if (fn(value, __privateGet(this, _keyList)[i2], this)) {
        return this.get(__privateGet(this, _keyList)[i2], getOptions);
      }
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(fn, thisp = this) {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, __privateGet(this, _keyList)[i2], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(fn, thisp = this) {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, __privateGet(this, _keyList)[i2], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let deleted = false;
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this, { allowStale: true })) {
      if (__privateGet(this, _isStale).call(this, i2)) {
        this.delete(__privateGet(this, _keyList)[i2]);
        deleted = true;
      }
    }
    return deleted;
  }
  /**
   * Get the extended info about a given entry, to get its value, size, and
   * TTL info simultaneously. Like {@link LRUCache#dump}, but just for a
   * single key. Always returns stale values, if their info is found in the
   * cache, so be sure to check for expired TTLs if relevant.
   */
  info(key) {
    const i2 = __privateGet(this, _keyMap).get(key);
    if (i2 === void 0)
      return void 0;
    const v = __privateGet(this, _valList)[i2];
    const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
    if (value === void 0)
      return void 0;
    const entry = { value };
    if (__privateGet(this, _ttls) && __privateGet(this, _starts)) {
      const ttl = __privateGet(this, _ttls)[i2];
      const start = __privateGet(this, _starts)[i2];
      if (ttl && start) {
        const remain = ttl - (perf.now() - start);
        entry.ttl = remain;
        entry.start = Date.now();
      }
    }
    if (__privateGet(this, _sizes)) {
      entry.size = __privateGet(this, _sizes)[i2];
    }
    return entry;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const arr = [];
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this, { allowStale: true })) {
      const key = __privateGet(this, _keyList)[i2];
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0 || key === void 0)
        continue;
      const entry = { value };
      if (__privateGet(this, _ttls) && __privateGet(this, _starts)) {
        entry.ttl = __privateGet(this, _ttls)[i2];
        const age = perf.now() - __privateGet(this, _starts)[i2];
        entry.start = Math.floor(Date.now() - age);
      }
      if (__privateGet(this, _sizes)) {
        entry.size = __privateGet(this, _sizes)[i2];
      }
      arr.unshift([key, entry]);
    }
    return arr;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */
  load(arr) {
    this.clear();
    for (const [key, entry] of arr) {
      if (entry.start) {
        const age = Date.now() - entry.start;
        entry.start = perf.now() - age;
      }
      this.set(key, entry.value, entry);
    }
  }
  /**
   * Add a value to the cache.
   *
   * Note: if `undefined` is specified as a value, this is an alias for
   * {@link LRUCache#delete}
   */
  set(k, v, setOptions = {}) {
    var _a3, _b2, _c, _d, _e;
    if (v === void 0) {
      this.delete(k);
      return this;
    }
    const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
    let { noUpdateTTL = this.noUpdateTTL } = setOptions;
    const size = __privateGet(this, _requireSize).call(this, k, v, setOptions.size || 0, sizeCalculation);
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = "miss";
        status.maxEntrySizeExceeded = true;
      }
      this.delete(k);
      return this;
    }
    let index2 = __privateGet(this, _size) === 0 ? void 0 : __privateGet(this, _keyMap).get(k);
    if (index2 === void 0) {
      index2 = __privateGet(this, _size) === 0 ? __privateGet(this, _tail) : __privateGet(this, _free).length !== 0 ? __privateGet(this, _free).pop() : __privateGet(this, _size) === __privateGet(this, _max) ? __privateMethod(this, _evict, evict_fn).call(this, false) : __privateGet(this, _size);
      __privateGet(this, _keyList)[index2] = k;
      __privateGet(this, _valList)[index2] = v;
      __privateGet(this, _keyMap).set(k, index2);
      __privateGet(this, _next)[__privateGet(this, _tail)] = index2;
      __privateGet(this, _prev)[index2] = __privateGet(this, _tail);
      __privateSet(this, _tail, index2);
      __privateWrapper(this, _size)._++;
      __privateGet(this, _addItemSize).call(this, index2, size, status);
      if (status)
        status.set = "add";
      noUpdateTTL = false;
    } else {
      __privateMethod(this, _moveToTail, moveToTail_fn).call(this, index2);
      const oldVal = __privateGet(this, _valList)[index2];
      if (v !== oldVal) {
        if (__privateGet(this, _hasFetchMethod) && __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, oldVal)) {
          oldVal.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: s } = oldVal;
          if (s !== void 0 && !noDisposeOnSet) {
            if (__privateGet(this, _hasDispose)) {
              (_a3 = __privateGet(this, _dispose)) == null ? void 0 : _a3.call(this, s, k, "set");
            }
            if (__privateGet(this, _hasDisposeAfter)) {
              (_b2 = __privateGet(this, _disposed)) == null ? void 0 : _b2.push([s, k, "set"]);
            }
          }
        } else if (!noDisposeOnSet) {
          if (__privateGet(this, _hasDispose)) {
            (_c = __privateGet(this, _dispose)) == null ? void 0 : _c.call(this, oldVal, k, "set");
          }
          if (__privateGet(this, _hasDisposeAfter)) {
            (_d = __privateGet(this, _disposed)) == null ? void 0 : _d.push([oldVal, k, "set"]);
          }
        }
        __privateGet(this, _removeItemSize).call(this, index2);
        __privateGet(this, _addItemSize).call(this, index2, size, status);
        __privateGet(this, _valList)[index2] = v;
        if (status) {
          status.set = "replace";
          const oldValue = oldVal && __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, oldVal) ? oldVal.__staleWhileFetching : oldVal;
          if (oldValue !== void 0)
            status.oldValue = oldValue;
        }
      } else if (status) {
        status.set = "update";
      }
    }
    if (ttl !== 0 && !__privateGet(this, _ttls)) {
      __privateMethod(this, _initializeTTLTracking, initializeTTLTracking_fn).call(this);
    }
    if (__privateGet(this, _ttls)) {
      if (!noUpdateTTL) {
        __privateGet(this, _setItemTTL).call(this, index2, ttl, start);
      }
      if (status)
        __privateGet(this, _statusTTL).call(this, status, index2);
    }
    if (!noDisposeOnSet && __privateGet(this, _hasDisposeAfter) && __privateGet(this, _disposed)) {
      const dt = __privateGet(this, _disposed);
      let task;
      while (task = dt == null ? void 0 : dt.shift()) {
        (_e = __privateGet(this, _disposeAfter)) == null ? void 0 : _e.call(this, ...task);
      }
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    var _a3;
    try {
      while (__privateGet(this, _size)) {
        const val = __privateGet(this, _valList)[__privateGet(this, _head)];
        __privateMethod(this, _evict, evict_fn).call(this, true);
        if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, val)) {
          if (val.__staleWhileFetching) {
            return val.__staleWhileFetching;
          }
        } else if (val !== void 0) {
          return val;
        }
      }
    } finally {
      if (__privateGet(this, _hasDisposeAfter) && __privateGet(this, _disposed)) {
        const dt = __privateGet(this, _disposed);
        let task;
        while (task = dt == null ? void 0 : dt.shift()) {
          (_a3 = __privateGet(this, _disposeAfter)) == null ? void 0 : _a3.call(this, ...task);
        }
      }
    }
  }
  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(k, hasOptions = {}) {
    const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
    const index2 = __privateGet(this, _keyMap).get(k);
    if (index2 !== void 0) {
      const v = __privateGet(this, _valList)[index2];
      if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) && v.__staleWhileFetching === void 0) {
        return false;
      }
      if (!__privateGet(this, _isStale).call(this, index2)) {
        if (updateAgeOnHas) {
          __privateGet(this, _updateItemAge).call(this, index2);
        }
        if (status) {
          status.has = "hit";
          __privateGet(this, _statusTTL).call(this, status, index2);
        }
        return true;
      } else if (status) {
        status.has = "stale";
        __privateGet(this, _statusTTL).call(this, status, index2);
      }
    } else if (status) {
      status.has = "miss";
    }
    return false;
  }
  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(k, peekOptions = {}) {
    const { allowStale = this.allowStale } = peekOptions;
    const index2 = __privateGet(this, _keyMap).get(k);
    if (index2 === void 0 || !allowStale && __privateGet(this, _isStale).call(this, index2)) {
      return;
    }
    const v = __privateGet(this, _valList)[index2];
    return __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
  }
  async fetch(k, fetchOptions = {}) {
    const {
      // get options
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      // set options
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
      ignoreFetchAbort = this.ignoreFetchAbort,
      allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
      context,
      forceRefresh = false,
      status,
      signal
    } = fetchOptions;
    if (!__privateGet(this, _hasFetchMethod)) {
      if (status)
        status.fetch = "get";
      return this.get(k, {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        status
      });
    }
    const options = {
      allowStale,
      updateAgeOnGet,
      noDeleteOnStaleGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
      status,
      signal
    };
    let index2 = __privateGet(this, _keyMap).get(k);
    if (index2 === void 0) {
      if (status)
        status.fetch = "miss";
      const p = __privateMethod(this, _backgroundFetch, backgroundFetch_fn).call(this, k, index2, options, context);
      return p.__returned = p;
    } else {
      const v = __privateGet(this, _valList)[index2];
      if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
        const stale = allowStale && v.__staleWhileFetching !== void 0;
        if (status) {
          status.fetch = "inflight";
          if (stale)
            status.returnedStale = true;
        }
        return stale ? v.__staleWhileFetching : v.__returned = v;
      }
      const isStale = __privateGet(this, _isStale).call(this, index2);
      if (!forceRefresh && !isStale) {
        if (status)
          status.fetch = "hit";
        __privateMethod(this, _moveToTail, moveToTail_fn).call(this, index2);
        if (updateAgeOnGet) {
          __privateGet(this, _updateItemAge).call(this, index2);
        }
        if (status)
          __privateGet(this, _statusTTL).call(this, status, index2);
        return v;
      }
      const p = __privateMethod(this, _backgroundFetch, backgroundFetch_fn).call(this, k, index2, options, context);
      const hasStale = p.__staleWhileFetching !== void 0;
      const staleVal = hasStale && allowStale;
      if (status) {
        status.fetch = isStale ? "stale" : "refresh";
        if (staleVal && isStale)
          status.returnedStale = true;
      }
      return staleVal ? p.__staleWhileFetching : p.__returned = p;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(k, getOptions = {}) {
    const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
    const index2 = __privateGet(this, _keyMap).get(k);
    if (index2 !== void 0) {
      const value = __privateGet(this, _valList)[index2];
      const fetching = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, value);
      if (status)
        __privateGet(this, _statusTTL).call(this, status, index2);
      if (__privateGet(this, _isStale).call(this, index2)) {
        if (status)
          status.get = "stale";
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.delete(k);
          }
          if (status && allowStale)
            status.returnedStale = true;
          return allowStale ? value : void 0;
        } else {
          if (status && allowStale && value.__staleWhileFetching !== void 0) {
            status.returnedStale = true;
          }
          return allowStale ? value.__staleWhileFetching : void 0;
        }
      } else {
        if (status)
          status.get = "hit";
        if (fetching) {
          return value.__staleWhileFetching;
        }
        __privateMethod(this, _moveToTail, moveToTail_fn).call(this, index2);
        if (updateAgeOnGet) {
          __privateGet(this, _updateItemAge).call(this, index2);
        }
        return value;
      }
    } else if (status) {
      status.get = "miss";
    }
  }
  /**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */
  delete(k) {
    var _a3, _b2, _c, _d;
    let deleted = false;
    if (__privateGet(this, _size) !== 0) {
      const index2 = __privateGet(this, _keyMap).get(k);
      if (index2 !== void 0) {
        deleted = true;
        if (__privateGet(this, _size) === 1) {
          this.clear();
        } else {
          __privateGet(this, _removeItemSize).call(this, index2);
          const v = __privateGet(this, _valList)[index2];
          if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
            v.__abortController.abort(new Error("deleted"));
          } else if (__privateGet(this, _hasDispose) || __privateGet(this, _hasDisposeAfter)) {
            if (__privateGet(this, _hasDispose)) {
              (_a3 = __privateGet(this, _dispose)) == null ? void 0 : _a3.call(this, v, k, "delete");
            }
            if (__privateGet(this, _hasDisposeAfter)) {
              (_b2 = __privateGet(this, _disposed)) == null ? void 0 : _b2.push([v, k, "delete"]);
            }
          }
          __privateGet(this, _keyMap).delete(k);
          __privateGet(this, _keyList)[index2] = void 0;
          __privateGet(this, _valList)[index2] = void 0;
          if (index2 === __privateGet(this, _tail)) {
            __privateSet(this, _tail, __privateGet(this, _prev)[index2]);
          } else if (index2 === __privateGet(this, _head)) {
            __privateSet(this, _head, __privateGet(this, _next)[index2]);
          } else {
            const pi = __privateGet(this, _prev)[index2];
            __privateGet(this, _next)[pi] = __privateGet(this, _next)[index2];
            const ni = __privateGet(this, _next)[index2];
            __privateGet(this, _prev)[ni] = __privateGet(this, _prev)[index2];
          }
          __privateWrapper(this, _size)._--;
          __privateGet(this, _free).push(index2);
        }
      }
    }
    if (__privateGet(this, _hasDisposeAfter) && ((_c = __privateGet(this, _disposed)) == null ? void 0 : _c.length)) {
      const dt = __privateGet(this, _disposed);
      let task;
      while (task = dt == null ? void 0 : dt.shift()) {
        (_d = __privateGet(this, _disposeAfter)) == null ? void 0 : _d.call(this, ...task);
      }
    }
    return deleted;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var _a3, _b2, _c;
    for (const index2 of __privateMethod(this, _rindexes, rindexes_fn).call(this, { allowStale: true })) {
      const v = __privateGet(this, _valList)[index2];
      if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
        v.__abortController.abort(new Error("deleted"));
      } else {
        const k = __privateGet(this, _keyList)[index2];
        if (__privateGet(this, _hasDispose)) {
          (_a3 = __privateGet(this, _dispose)) == null ? void 0 : _a3.call(this, v, k, "delete");
        }
        if (__privateGet(this, _hasDisposeAfter)) {
          (_b2 = __privateGet(this, _disposed)) == null ? void 0 : _b2.push([v, k, "delete"]);
        }
      }
    }
    __privateGet(this, _keyMap).clear();
    __privateGet(this, _valList).fill(void 0);
    __privateGet(this, _keyList).fill(void 0);
    if (__privateGet(this, _ttls) && __privateGet(this, _starts)) {
      __privateGet(this, _ttls).fill(0);
      __privateGet(this, _starts).fill(0);
    }
    if (__privateGet(this, _sizes)) {
      __privateGet(this, _sizes).fill(0);
    }
    __privateSet(this, _head, 0);
    __privateSet(this, _tail, 0);
    __privateGet(this, _free).length = 0;
    __privateSet(this, _calculatedSize, 0);
    __privateSet(this, _size, 0);
    if (__privateGet(this, _hasDisposeAfter) && __privateGet(this, _disposed)) {
      const dt = __privateGet(this, _disposed);
      let task;
      while (task = dt == null ? void 0 : dt.shift()) {
        (_c = __privateGet(this, _disposeAfter)) == null ? void 0 : _c.call(this, ...task);
      }
    }
  }
};
_b = Symbol.toStringTag;
_max = new WeakMap();
_maxSize = new WeakMap();
_dispose = new WeakMap();
_disposeAfter = new WeakMap();
_fetchMethod = new WeakMap();
_size = new WeakMap();
_calculatedSize = new WeakMap();
_keyMap = new WeakMap();
_keyList = new WeakMap();
_valList = new WeakMap();
_next = new WeakMap();
_prev = new WeakMap();
_head = new WeakMap();
_tail = new WeakMap();
_free = new WeakMap();
_disposed = new WeakMap();
_sizes = new WeakMap();
_starts = new WeakMap();
_ttls = new WeakMap();
_hasDispose = new WeakMap();
_hasFetchMethod = new WeakMap();
_hasDisposeAfter = new WeakMap();
_initializeTTLTracking = new WeakSet();
initializeTTLTracking_fn = function() {
  const ttls = new ZeroArray(__privateGet(this, _max));
  const starts = new ZeroArray(__privateGet(this, _max));
  __privateSet(this, _ttls, ttls);
  __privateSet(this, _starts, starts);
  __privateSet(this, _setItemTTL, (index2, ttl, start = perf.now()) => {
    starts[index2] = ttl !== 0 ? start : 0;
    ttls[index2] = ttl;
    if (ttl !== 0 && this.ttlAutopurge) {
      const t2 = setTimeout(() => {
        if (__privateGet(this, _isStale).call(this, index2)) {
          this.delete(__privateGet(this, _keyList)[index2]);
        }
      }, ttl + 1);
      if (t2.unref) {
        t2.unref();
      }
    }
  });
  __privateSet(this, _updateItemAge, (index2) => {
    starts[index2] = ttls[index2] !== 0 ? perf.now() : 0;
  });
  __privateSet(this, _statusTTL, (status, index2) => {
    if (ttls[index2]) {
      const ttl = ttls[index2];
      const start = starts[index2];
      if (!ttl || !start)
        return;
      status.ttl = ttl;
      status.start = start;
      status.now = cachedNow || getNow();
      const age = status.now - start;
      status.remainingTTL = ttl - age;
    }
  });
  let cachedNow = 0;
  const getNow = () => {
    const n2 = perf.now();
    if (this.ttlResolution > 0) {
      cachedNow = n2;
      const t2 = setTimeout(() => cachedNow = 0, this.ttlResolution);
      if (t2.unref) {
        t2.unref();
      }
    }
    return n2;
  };
  this.getRemainingTTL = (key) => {
    const index2 = __privateGet(this, _keyMap).get(key);
    if (index2 === void 0) {
      return 0;
    }
    const ttl = ttls[index2];
    const start = starts[index2];
    if (!ttl || !start) {
      return Infinity;
    }
    const age = (cachedNow || getNow()) - start;
    return ttl - age;
  };
  __privateSet(this, _isStale, (index2) => {
    const s = starts[index2];
    const t2 = ttls[index2];
    return !!t2 && !!s && (cachedNow || getNow()) - s > t2;
  });
};
_updateItemAge = new WeakMap();
_statusTTL = new WeakMap();
_setItemTTL = new WeakMap();
_isStale = new WeakMap();
_initializeSizeTracking = new WeakSet();
initializeSizeTracking_fn = function() {
  const sizes = new ZeroArray(__privateGet(this, _max));
  __privateSet(this, _calculatedSize, 0);
  __privateSet(this, _sizes, sizes);
  __privateSet(this, _removeItemSize, (index2) => {
    __privateSet(this, _calculatedSize, __privateGet(this, _calculatedSize) - sizes[index2]);
    sizes[index2] = 0;
  });
  __privateSet(this, _requireSize, (k, v, size, sizeCalculation) => {
    if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
      return 0;
    }
    if (!isPosInt(size)) {
      if (sizeCalculation) {
        if (typeof sizeCalculation !== "function") {
          throw new TypeError("sizeCalculation must be a function");
        }
        size = sizeCalculation(v, k);
        if (!isPosInt(size)) {
          throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        }
      } else {
        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      }
    }
    return size;
  });
  __privateSet(this, _addItemSize, (index2, size, status) => {
    sizes[index2] = size;
    if (__privateGet(this, _maxSize)) {
      const maxSize = __privateGet(this, _maxSize) - sizes[index2];
      while (__privateGet(this, _calculatedSize) > maxSize) {
        __privateMethod(this, _evict, evict_fn).call(this, true);
      }
    }
    __privateSet(this, _calculatedSize, __privateGet(this, _calculatedSize) + sizes[index2]);
    if (status) {
      status.entrySize = size;
      status.totalCalculatedSize = __privateGet(this, _calculatedSize);
    }
  });
};
_removeItemSize = new WeakMap();
_addItemSize = new WeakMap();
_requireSize = new WeakMap();
_indexes = new WeakSet();
indexes_fn = function* ({ allowStale = this.allowStale } = {}) {
  if (__privateGet(this, _size)) {
    for (let i2 = __privateGet(this, _tail); true; ) {
      if (!__privateMethod(this, _isValidIndex, isValidIndex_fn).call(this, i2)) {
        break;
      }
      if (allowStale || !__privateGet(this, _isStale).call(this, i2)) {
        yield i2;
      }
      if (i2 === __privateGet(this, _head)) {
        break;
      } else {
        i2 = __privateGet(this, _prev)[i2];
      }
    }
  }
};
_rindexes = new WeakSet();
rindexes_fn = function* ({ allowStale = this.allowStale } = {}) {
  if (__privateGet(this, _size)) {
    for (let i2 = __privateGet(this, _head); true; ) {
      if (!__privateMethod(this, _isValidIndex, isValidIndex_fn).call(this, i2)) {
        break;
      }
      if (allowStale || !__privateGet(this, _isStale).call(this, i2)) {
        yield i2;
      }
      if (i2 === __privateGet(this, _tail)) {
        break;
      } else {
        i2 = __privateGet(this, _next)[i2];
      }
    }
  }
};
_isValidIndex = new WeakSet();
isValidIndex_fn = function(index2) {
  return index2 !== void 0 && __privateGet(this, _keyMap).get(__privateGet(this, _keyList)[index2]) === index2;
};
_evict = new WeakSet();
evict_fn = function(free) {
  var _a3, _b2;
  const head = __privateGet(this, _head);
  const k = __privateGet(this, _keyList)[head];
  const v = __privateGet(this, _valList)[head];
  if (__privateGet(this, _hasFetchMethod) && __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
    v.__abortController.abort(new Error("evicted"));
  } else if (__privateGet(this, _hasDispose) || __privateGet(this, _hasDisposeAfter)) {
    if (__privateGet(this, _hasDispose)) {
      (_a3 = __privateGet(this, _dispose)) == null ? void 0 : _a3.call(this, v, k, "evict");
    }
    if (__privateGet(this, _hasDisposeAfter)) {
      (_b2 = __privateGet(this, _disposed)) == null ? void 0 : _b2.push([v, k, "evict"]);
    }
  }
  __privateGet(this, _removeItemSize).call(this, head);
  if (free) {
    __privateGet(this, _keyList)[head] = void 0;
    __privateGet(this, _valList)[head] = void 0;
    __privateGet(this, _free).push(head);
  }
  if (__privateGet(this, _size) === 1) {
    __privateSet(this, _head, __privateSet(this, _tail, 0));
    __privateGet(this, _free).length = 0;
  } else {
    __privateSet(this, _head, __privateGet(this, _next)[head]);
  }
  __privateGet(this, _keyMap).delete(k);
  __privateWrapper(this, _size)._--;
  return head;
};
_backgroundFetch = new WeakSet();
backgroundFetch_fn = function(k, index2, options, context) {
  const v = index2 === void 0 ? void 0 : __privateGet(this, _valList)[index2];
  if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
    return v;
  }
  const ac = new AC();
  const { signal } = options;
  signal == null ? void 0 : signal.addEventListener("abort", () => ac.abort(signal.reason), {
    signal: ac.signal
  });
  const fetchOpts = {
    signal: ac.signal,
    options,
    context
  };
  const cb = (v2, updateCache = false) => {
    const { aborted } = ac.signal;
    const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
    if (options.status) {
      if (aborted && !updateCache) {
        options.status.fetchAborted = true;
        options.status.fetchError = ac.signal.reason;
        if (ignoreAbort)
          options.status.fetchAbortIgnored = true;
      } else {
        options.status.fetchResolved = true;
      }
    }
    if (aborted && !ignoreAbort && !updateCache) {
      return fetchFail(ac.signal.reason);
    }
    const bf2 = p;
    if (__privateGet(this, _valList)[index2] === p) {
      if (v2 === void 0) {
        if (bf2.__staleWhileFetching) {
          __privateGet(this, _valList)[index2] = bf2.__staleWhileFetching;
        } else {
          this.delete(k);
        }
      } else {
        if (options.status)
          options.status.fetchUpdated = true;
        this.set(k, v2, fetchOpts.options);
      }
    }
    return v2;
  };
  const eb = (er) => {
    if (options.status) {
      options.status.fetchRejected = true;
      options.status.fetchError = er;
    }
    return fetchFail(er);
  };
  const fetchFail = (er) => {
    const { aborted } = ac.signal;
    const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
    const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
    const noDelete = allowStale || options.noDeleteOnFetchRejection;
    const bf2 = p;
    if (__privateGet(this, _valList)[index2] === p) {
      const del = !noDelete || bf2.__staleWhileFetching === void 0;
      if (del) {
        this.delete(k);
      } else if (!allowStaleAborted) {
        __privateGet(this, _valList)[index2] = bf2.__staleWhileFetching;
      }
    }
    if (allowStale) {
      if (options.status && bf2.__staleWhileFetching !== void 0) {
        options.status.returnedStale = true;
      }
      return bf2.__staleWhileFetching;
    } else if (bf2.__returned === bf2) {
      throw er;
    }
  };
  const pcall = (res, rej) => {
    var _a3;
    const fmp = (_a3 = __privateGet(this, _fetchMethod)) == null ? void 0 : _a3.call(this, k, v, fetchOpts);
    if (fmp && fmp instanceof Promise) {
      fmp.then((v2) => res(v2 === void 0 ? void 0 : v2), rej);
    }
    ac.signal.addEventListener("abort", () => {
      if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
        res(void 0);
        if (options.allowStaleOnFetchAbort) {
          res = (v2) => cb(v2, true);
        }
      }
    });
  };
  if (options.status)
    options.status.fetchDispatched = true;
  const p = new Promise(pcall).then(cb, eb);
  const bf = Object.assign(p, {
    __abortController: ac,
    __staleWhileFetching: v,
    __returned: void 0
  });
  if (index2 === void 0) {
    this.set(k, bf, { ...fetchOpts.options, status: void 0 });
    index2 = __privateGet(this, _keyMap).get(k);
  } else {
    __privateGet(this, _valList)[index2] = bf;
  }
  return bf;
};
_isBackgroundFetch = new WeakSet();
isBackgroundFetch_fn = function(p) {
  if (!__privateGet(this, _hasFetchMethod))
    return false;
  const b = p;
  return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
};
_connect = new WeakSet();
connect_fn = function(p, n2) {
  __privateGet(this, _prev)[n2] = p;
  __privateGet(this, _next)[p] = n2;
};
_moveToTail = new WeakSet();
moveToTail_fn = function(index2) {
  if (index2 !== __privateGet(this, _tail)) {
    if (index2 === __privateGet(this, _head)) {
      __privateSet(this, _head, __privateGet(this, _next)[index2]);
    } else {
      __privateMethod(this, _connect, connect_fn).call(this, __privateGet(this, _prev)[index2], __privateGet(this, _next)[index2]);
    }
    __privateMethod(this, _connect, connect_fn).call(this, __privateGet(this, _tail), index2);
    __privateSet(this, _tail, index2);
  }
};
let LRUCache = _LRUCache;
const userZoom = (props2, html) => {
  const editorId = inject("editorId");
  const { noImgZoomIn } = props2;
  let zoomHander = () => {
  };
  watch(
    [html, toRef$1(props2.setting, "preview")],
    () => {
      if (!noImgZoomIn && props2.setting.preview) {
        zoomHander();
      }
    },
    {
      immediate: true
    }
  );
  onMounted(() => {
    zoomHander = R(() => {
      const imgs = document.querySelectorAll(`#${editorId}-preview img`);
      if (imgs.length === 0) {
        return;
      }
      mediumZoom(imgs, {
        background: "#00000073"
      });
    });
  });
};
const StrIcon = (name, customIcon) => {
  if (typeof customIcon[name] === "string") {
    return customIcon[name];
  }
  const defaultStr = `<i class="${prefix}-iconfont ${prefix}-icon-${name}"></i>`;
  switch (configOption.iconfontType) {
    case "svg": {
      return `<svg class="${prefix}-icon" aria-hidden="true"><use xlink:href="#${prefix}-icon-${name}"></use></svg>`;
    }
    default: {
      return defaultStr;
    }
  }
};
const useCopyCode = (props2, html, key) => {
  const editorId = inject("editorId");
  const ult = inject("usedLanguageText");
  const customIcon = inject("customIcon");
  const initCopyEntry = () => {
    document.querySelectorAll(`#${editorId}-preview pre`).forEach((pre) => {
      var _a3;
      let clearTimer = -1;
      (_a3 = pre.querySelector(".copy-button")) == null ? void 0 : _a3.remove();
      const copyBtnText = ult.value.copyCode.text;
      const copyButton = document.createElement("span");
      copyButton.setAttribute("class", "copy-button");
      copyButton.dataset.tips = copyBtnText;
      copyButton.innerHTML = StrIcon("copy", customIcon.value);
      copyButton.addEventListener("click", () => {
        clearTimeout(clearTimer);
        const codeText = pre.querySelector("code").innerText;
        const success = copy$1(props2.formatCopiedText(codeText));
        const succssTip = ult.value.copyCode.successTips;
        const failTip = ult.value.copyCode.failTips;
        copyButton.dataset.tips = success ? succssTip : failTip;
        clearTimer = window.setTimeout(() => {
          copyButton.dataset.tips = copyBtnText;
        }, 1500);
      });
      pre.appendChild(copyButton);
    });
  };
  const htmlChanged = () => {
    nextTick(initCopyEntry);
  };
  const settingPreviewChanged = (nVal) => {
    if (nVal) {
      nextTick(initCopyEntry);
    }
  };
  watch([html, key], htmlChanged);
  watch(() => props2.setting.preview, settingPreviewChanged);
  watch(() => props2.setting.htmlPreview, settingPreviewChanged);
  watch(() => ult.value, initCopyEntry);
  onMounted(initCopyEntry);
};
const useHighlight = (props2) => {
  const highlight = inject("highlight");
  const hljsRef = shallowRef(configOption.editorExtensions.highlight.instance);
  onMounted(() => {
    if (props2.noHighlight || hljsRef.value) {
      return;
    }
    appendHandler("link", {
      ...highlight.value.css,
      rel: "stylesheet",
      id: `${prefix}-hlCss`
    });
    appendHandler(
      "script",
      {
        ...highlight.value.js,
        id: `${prefix}-hljs`,
        onload() {
          hljsRef.value = window.hljs;
        }
      },
      "hljs"
    );
  });
  watch(
    () => highlight.value.css,
    () => {
      updateHandler("link", {
        ...highlight.value.css,
        rel: "stylesheet",
        id: `${prefix}-hlCss`
      });
    }
  );
  return hljsRef;
};
const useMermaid = (props2) => {
  const theme = inject("theme");
  const { editorExtensions, editorExtensionsAttrs, mermaidConfig } = configOption;
  const mermaidRef = shallowRef(editorExtensions.mermaid.instance);
  const reRenderRef = shallowRef(-1);
  const mermaidCache = new LRUCache({
    max: 1e3,
    // 缓存10分钟
    ttl: 6e5
  });
  const configMermaid = () => {
    const mermaid = mermaidRef.value;
    if (!props2.noMermaid && mermaid) {
      mermaid.initialize(
        mermaidConfig({
          startOnLoad: false,
          theme: theme.value === "dark" ? "dark" : "default"
        })
      );
      reRenderRef.value = reRenderRef.value + 1;
    }
  };
  watch(
    () => theme.value,
    () => {
      mermaidCache.clear();
      configMermaid();
    }
  );
  onMounted(() => {
    var _a3, _b2, _c;
    if (props2.noMermaid || ((_a3 = mermaidRef.value) == null ? void 0 : _a3.instance)) {
      return;
    }
    const jsSrc = editorExtensions.mermaid.js;
    if (/\.mjs/.test(jsSrc)) {
      appendHandler("link", {
        ...(_b2 = editorExtensionsAttrs.mermaid) == null ? void 0 : _b2.js,
        rel: "modulepreload",
        href: jsSrc,
        id: `${prefix}-mermaid-m`
      });
      import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        jsSrc
      ).then((module2) => {
        mermaidRef.value = module2.default;
        configMermaid();
      });
    } else {
      appendHandler(
        "script",
        {
          ...(_c = editorExtensionsAttrs.mermaid) == null ? void 0 : _c.js,
          src: jsSrc,
          id: `${prefix}-mermaid`,
          onload() {
            mermaidRef.value = window.mermaid;
            configMermaid();
          }
        },
        "mermaid"
      );
    }
  });
  const replaceMermaid = () => {
    nextTick(() => {
      if (!props2.noMermaid && mermaidRef.value) {
        const mermaidSourceEles = document.querySelectorAll(
          `div.${prefix}-mermaid`
        );
        const svgContainingElement = document.createElement("div");
        svgContainingElement.style.width = document.body.offsetWidth + "px";
        svgContainingElement.style.height = document.body.offsetHeight + "px";
        svgContainingElement.style.position = "fixed";
        svgContainingElement.style.zIndex = "-10000";
        svgContainingElement.style.top = "-10000";
        let count = mermaidSourceEles.length;
        if (count > 0) {
          document.body.appendChild(svgContainingElement);
        }
        mermaidSourceEles.forEach(async (item) => {
          let mermaidHtml = mermaidCache.get(item.innerText);
          if (!mermaidHtml) {
            const idRand = I();
            const render = mermaidRef.value.renderAsync || mermaidRef.value.render;
            let svg = "";
            try {
              svg = await render(idRand, item.innerText, svgContainingElement);
            } catch (error2) {
            }
            mermaidHtml = await props2.sanitizeMermaid(
              typeof svg === "string" ? svg : svg.svg
            );
            mermaidCache.set(item.innerText, mermaidHtml);
          }
          const p = document.createElement("p");
          p.className = `${prefix}-mermaid`;
          p.setAttribute("data-processed", "");
          p.innerHTML = mermaidHtml;
          if (item.dataset.line !== void 0) {
            p.dataset.line = item.dataset.line;
          }
          item.replaceWith(p);
          if (--count === 0) {
            svgContainingElement.remove();
          }
        });
      }
    });
  };
  return { mermaidRef, reRenderRef, replaceMermaid };
};
const useKatex = (props2) => {
  const katex = shallowRef(configOption.editorExtensions.katex.instance);
  onMounted(() => {
    if (props2.noKatex || katex.value) {
      return;
    }
    const { editorExtensions } = configOption;
    appendHandler(
      "script",
      {
        src: editorExtensions.katex.js,
        id: `${prefix}-katex`,
        onload() {
          katex.value = window.katex;
        }
      },
      "katex"
    );
    appendHandler("link", {
      rel: "stylesheet",
      href: editorExtensions.katex.css,
      id: `${prefix}-katexCss`
    });
  });
  return katex;
};
const MermaidPlugin = (md, options) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, ops, env, slf) => {
    const token = tokens[idx];
    const code2 = token.content.trim();
    if (token.info === "mermaid") {
      let line;
      if (tokens[idx].map && tokens[idx].level === 0) {
        line = tokens[idx].map[0];
        tokens[idx].attrSet("data-line", String(line));
      }
      return `<div class="${prefix}-mermaid" ${line !== void 0 ? "data-line=" + line : ""} data-mermaid-theme=${options.themeRef.value}>${code2}</div>`;
    }
    return temp(tokens, idx, ops, env, slf);
  };
};
const MermaidPlugin$1 = MermaidPlugin;
const isValidDelim = (state, pos) => {
  let can_open = true, can_close = true;
  const max = state.posMax;
  const prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1;
  const nextChar = pos + 1 <= max ? state.src.charCodeAt(pos + 1) : -1;
  if (prevChar === 32 || prevChar === 9 || nextChar >= 48 && nextChar <= 57) {
    can_close = false;
  }
  if (nextChar === 32 || nextChar === 9) {
    can_open = false;
  }
  return {
    can_open,
    can_close
  };
};
const math_inline = (state, silent) => {
  let match2, token, res, pos;
  if (state.src[state.pos] !== "$") {
    return false;
  }
  res = isValidDelim(state, state.pos);
  if (!res.can_open) {
    if (!silent) {
      state.pending += "$";
    }
    state.pos += 1;
    return true;
  }
  const start = state.pos + 1;
  match2 = start;
  while ((match2 = state.src.indexOf("$", match2)) !== -1) {
    pos = match2 - 1;
    while (state.src[pos] === "\\") {
      pos -= 1;
    }
    if ((match2 - pos) % 2 == 1) {
      break;
    }
    match2 += 1;
  }
  if (match2 === -1) {
    if (!silent) {
      state.pending += "$";
    }
    state.pos = start;
    return true;
  }
  if (match2 - start === 0) {
    if (!silent) {
      state.pending += "$$";
    }
    state.pos = start + 1;
    return true;
  }
  res = isValidDelim(state, match2);
  if (!res.can_close) {
    if (!silent) {
      state.pending += "$";
    }
    state.pos = start;
    return true;
  }
  if (!silent) {
    token = state.push("math_inline", "math", 0);
    token.markup = "$";
    token.content = state.src.slice(start, match2);
  }
  state.pos = match2 + 1;
  return true;
};
const math_block = (state, start, end, silent) => {
  let firstLine, lastLine, next, lastPos, found = false, pos = state.bMarks[start] + state.tShift[start], max = state.eMarks[start];
  if (pos + 2 > max) {
    return false;
  }
  if (state.src.slice(pos, pos + 2) !== "$$") {
    return false;
  }
  pos += 2;
  firstLine = state.src.slice(pos, max);
  if (silent) {
    return true;
  }
  if (firstLine.trim().slice(-2) === "$$") {
    firstLine = firstLine.trim().slice(0, -2);
    found = true;
  }
  for (next = start; !found; ) {
    next++;
    if (next >= end) {
      break;
    }
    pos = state.bMarks[next] + state.tShift[next];
    max = state.eMarks[next];
    if (pos < max && state.tShift[next] < state.blkIndent) {
      break;
    }
    if (state.src.slice(pos, max).trim().slice(-2) === "$$") {
      lastPos = state.src.slice(0, max).lastIndexOf("$$");
      lastLine = state.src.slice(pos, lastPos);
      found = true;
    }
  }
  state.line = next + 1;
  const token = state.push("math_block", "math", 0);
  token.block = true;
  token.content = (firstLine && firstLine.trim() ? firstLine + "\n" : "") + state.getLines(start + 1, next, state.tShift[start], true) + (lastLine && lastLine.trim() ? lastLine : "");
  token.map = [start, state.line];
  token.markup = "$$";
  return true;
};
const KatexPlugin = (md, options) => {
  const katexInline = (str) => {
    if (options.katexRef.value) {
      const html = options.katexRef.value.renderToString(str, {
        throwOnError: false
      });
      return `<span class="${prefix}-katex-inline" data-processed>${html}</span>`;
    } else {
      return `<span class="${prefix}-katex-inline">${str}</span>`;
    }
  };
  const katexBlock = (str, lineNum) => {
    if (options.katexRef.value) {
      const html = options.katexRef.value.renderToString(str, {
        throwOnError: false,
        displayMode: true
      });
      return `<p class="${prefix}-katex-block" data-line=${lineNum} data-processed>${html}</p>`;
    } else {
      return `<p class="${prefix}-katex-block" data-line=${lineNum}>${str}</p>`;
    }
  };
  md.inline.ruler.after("escape", "math_inline", math_inline);
  md.block.ruler.after("blockquote", "math_block", math_block, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  });
  md.renderer.rules.math_inline = (tokens, idx) => {
    return katexInline(tokens[idx].content);
  };
  md.renderer.rules.math_block = (tokens, idx) => {
    return katexBlock(tokens[idx].content, tokens[idx].map[0]) + "\n";
  };
};
const KatexPlugin$1 = KatexPlugin;
const AdmonitionPlugin = (md, options) => {
  options = options || {};
  const markers = 3, markerStr = options.marker || "!", markerChar = markerStr.charCodeAt(0), markerLen = markerStr.length;
  let type4 = "", title = "";
  const render = (tokens, idx, _options, _env, self2) => {
    const token = tokens[idx];
    if (token.type === "admonition_open") {
      tokens[idx].attrPush([
        "class",
        `${prefix}-admonition ${prefix}-admonition-${token.info}`
      ]);
      tokens[idx].attrSet("data-line", String(tokens[idx].map[0]));
    } else if (token.type === "admonition_title_open") {
      tokens[idx].attrPush(["class", `${prefix}-admonition-title`]);
    }
    return self2.renderToken(tokens, idx, _options);
  };
  const validate = (params) => {
    const array4 = params.trim().split(" ", 2);
    title = "";
    type4 = array4[0];
    if (array4.length > 1) {
      title = params.substring(type4.length + 2);
    }
    if (title === "" || !title) {
      title = type4;
    }
  };
  md.block.ruler.before(
    "code",
    "admonition",
    (state, startLine, endLine, silent) => {
      let pos, nextLine, token, autoClosed = false, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (markerChar !== state.src.charCodeAt(start)) {
        return false;
      }
      for (pos = start + 1; pos <= max; pos++) {
        if (markerStr[(pos - start) % markerLen] !== state.src[pos]) {
          break;
        }
      }
      const markerCount = Math.floor((pos - start) / markerLen);
      if (markerCount !== markers) {
        return false;
      }
      pos -= (pos - start) % markerLen;
      const markup = state.src.slice(start, pos);
      const params = state.src.slice(pos, max);
      validate(params);
      if (silent) {
        return true;
      }
      nextLine = startLine;
      for (; ; ) {
        nextLine++;
        if (nextLine >= endLine) {
          break;
        }
        start = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (start < max && state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (markerChar !== state.src.charCodeAt(start)) {
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          continue;
        }
        for (pos = start + 1; pos <= max; pos++) {
          if (markerStr[(pos - start) % markerLen] !== state.src[pos]) {
            break;
          }
        }
        if (Math.floor((pos - start) / markerLen) < markerCount) {
          continue;
        }
        pos -= (pos - start) % markerLen;
        pos = state.skipSpaces(pos);
        if (pos < max) {
          continue;
        }
        autoClosed = true;
        break;
      }
      const oldParent = state.parentType;
      const oldLineMax = state.lineMax;
      state.parentType = "root";
      state.lineMax = nextLine;
      token = state.push("admonition_open", "div", 1);
      token.markup = markup;
      token.block = true;
      token.info = type4;
      token.map = [startLine, nextLine];
      token = state.push("admonition_title_open", "p", 1);
      token.markup = markup + " " + type4;
      token.map = [startLine, nextLine];
      token = state.push("inline", "", 0);
      token.content = title;
      token.map = [startLine, state.line - 1];
      token.children = [];
      token = state.push("admonition_title_close", "p", -1);
      token.markup = markup + " " + type4;
      state.md.block.tokenize(state, startLine + 1, nextLine);
      token = state.push("admonition_close", "div", -1);
      token.markup = state.src.slice(start, pos);
      token.block = true;
      state.parentType = oldParent;
      state.lineMax = oldLineMax;
      state.line = nextLine + (autoClosed ? 1 : 0);
      return true;
    },
    {
      alt: ["paragraph", "reference", "blockquote", "list"]
    }
  );
  md.renderer.rules["admonition_open"] = render;
  md.renderer.rules["admonition_title_open"] = render;
  md.renderer.rules["admonition_title_close"] = render;
  md.renderer.rules["admonition_close"] = render;
};
const AdmonitionPlugin$1 = AdmonitionPlugin;
const HeadingPlugin = (md, options) => {
  md.renderer.rules.heading_open = (tokens, idx) => {
    var _a3;
    const token = tokens[idx];
    const text2 = ((_a3 = tokens[idx + 1].children) == null ? void 0 : _a3.reduce((p, c) => {
      return p + (c.content || "");
    }, "")) || "";
    const level = token.markup.length;
    options.headsRef.value.push({
      text: text2,
      level
    });
    if (token.map && token.level === 0) {
      token.attrSet("data-line", String(token.map[0]));
      token.attrSet(
        "id",
        options.mdHeadingId(text2, level, options.headsRef.value.length)
      );
    }
    return md.renderer.renderToken(tokens, idx, options);
  };
  md.renderer.rules.heading_close = (tokens, idx, opts, _env, self2) => {
    return self2.renderToken(tokens, idx, opts);
  };
};
const HeadingPlugin$1 = HeadingPlugin;
const codetabs = (md, _opts) => {
  const defaultRender = md.renderer.rules.fence, unescapeAll2 = md.utils.unescapeAll, re = /\[(\w*)(?::([\w ]*))?\]/;
  function getInfo(token) {
    return token.info ? unescapeAll2(token.info).trim() : "";
  }
  function getGroupAndTab(token) {
    const info = getInfo(token), [group = null, tab = ""] = (re.exec(info) || []).slice(1);
    return [group, tab];
  }
  function getLangName(token) {
    const info = getInfo(token);
    return info ? info.split(/(\s+)/g)[0] : "";
  }
  const fenceGroup = (tokens, idx, options, env, slf) => {
    if (tokens[idx].hidden) {
      return "";
    }
    const [GROUP, _2] = getGroupAndTab(tokens[idx]);
    if (GROUP === null) {
      return defaultRender(tokens, idx, options, env, slf);
    }
    let token, group, tab, checked, labels = "", pres = "";
    for (let i2 = idx; i2 < tokens.length; i2++) {
      token = tokens[i2];
      [group, tab] = getGroupAndTab(token);
      if (group !== GROUP) {
        break;
      }
      token.info = token.info.replace(re, "");
      token.hidden = true;
      checked = i2 - idx > 0 ? "" : " checked";
      labels += `<li><input type="radio" name="label-group-${_opts.editorId}-${idx}"${checked}><label for="group-${_opts.editorId}-${idx}-tab-${i2 - idx}" onclick="this.previousElementSibling.click()">${tab || getLangName(token)}</label></li>
`;
      pres += `<input type="radio" id="group-${_opts.editorId}-${idx}-tab-${i2 - idx}" name="group-${_opts.editorId}-${idx}"${checked}>
` + defaultRender(tokens, i2, options, env, slf);
    }
    return '<div class="code-tabs">\n<ul>\n' + labels + "</ul>\n" + pres + "</div>";
  };
  md.renderer.rules.fence = fenceGroup;
};
const CodeTabsPlugin = codetabs;
const initLineNumber = (md) => {
  [
    "paragraph_open",
    "table_open",
    "ordered_list_open",
    "bullet_list_open",
    "blockquote_open",
    "hr",
    "html_block",
    "fence"
  ].forEach((rule) => {
    const backup = md.renderer.rules[rule];
    if (!backup) {
      md.renderer.rules[rule] = (tokens, idx, options, _env, self2) => {
        let line;
        if (tokens[idx].map && tokens[idx].level === 0) {
          line = tokens[idx].map[0];
          tokens[idx].attrSet("data-line", String(line));
        }
        return self2.renderToken(tokens, idx, options);
      };
    } else {
      md.renderer.rules[rule] = (tokens, idx, options, env, self2) => {
        let line;
        const _htmlCode = backup(tokens, idx, options, env, self2);
        if (tokens[idx].map && tokens[idx].level === 0 && !/^<!--/.test(_htmlCode)) {
          line = tokens[idx].map[0];
          return _htmlCode.replace(/^(<[^>]*)/, `$1 data-line="${line}"`);
        }
        return _htmlCode;
      };
    }
  });
};
const useMarkdownIt = (props2, previewOnly) => {
  const { editorConfig, markdownItConfig, markdownItPlugins } = configOption;
  const editorId = inject("editorId");
  const showCodeRowNumber = inject("showCodeRowNumber");
  const themeRef = inject("theme");
  const headsRef = ref([]);
  const hljsRef = useHighlight(props2);
  const katexRef = useKatex(props2);
  const { reRenderRef, replaceMermaid } = useMermaid(props2);
  const md = MarkdownIt({
    html: true,
    breaks: true
  });
  markdownItConfig(md, {
    editorId
  });
  const plugins = [
    {
      type: "image",
      plugin: r,
      options: { figcaption: true, classes: "md-zoom" }
    },
    {
      type: "admonition",
      plugin: AdmonitionPlugin$1,
      options: {}
    },
    {
      type: "taskList",
      plugin: TaskListPlugin,
      options: {}
    },
    {
      type: "heading",
      plugin: HeadingPlugin$1,
      options: { mdHeadingId: props2.mdHeadingId, headsRef }
    },
    {
      type: "codeTabs",
      plugin: CodeTabsPlugin,
      options: { editorId }
    },
    {
      type: "xss",
      plugin: XSSPlugin,
      options: {
        // https://github.com/leizongmin/js-xss/blob/master/README.zh.md
        xss(xss2) {
          return {
            whiteList: Object.assign({}, xss2.getDefaultWhiteList(), {
              // 支持任务列表
              input: ["class", "disabled", "type", "checked"],
              // 主要支持youtobe、腾讯视频、哔哩哔哩等内嵌视频代码
              iframe: [
                "class",
                "width",
                "height",
                "src",
                "title",
                "border",
                "frameborder",
                "framespacing",
                "allow",
                "allowfullscreen"
              ]
            })
          };
        }
      }
    }
  ];
  if (!props2.noKatex) {
    plugins.push({
      type: "katex",
      plugin: KatexPlugin$1,
      options: { katexRef }
    });
  }
  if (!props2.noMermaid) {
    plugins.push({
      type: "mermaid",
      plugin: MermaidPlugin$1,
      options: { themeRef }
    });
  }
  markdownItPlugins(plugins, {
    editorId
  }).forEach((item) => {
    md.use(item.plugin, item.options);
  });
  const userDefHighlight = md.options.highlight;
  md.set({
    highlight: (str, language, attrs) => {
      if (userDefHighlight) {
        const result = userDefHighlight(str, language, attrs);
        if (result) {
          return result;
        }
      }
      let codeHtml;
      if (!props2.noHighlight && hljsRef.value) {
        const hljsLang = hljsRef.value.getLanguage(language);
        if (hljsLang) {
          codeHtml = hljsRef.value.highlight(str, {
            language,
            ignoreIllegals: true
          }).value;
        } else {
          codeHtml = hljsRef.value.highlightAuto(str).value;
        }
      } else {
        codeHtml = md.utils.escapeHtml(str);
      }
      const codeSpan = showCodeRowNumber ? generateCodeRowNumber(codeHtml.replace(/^\n+|\n+$/g, "")) : `<span class="code-block">${codeHtml.replace(/^\n+|\n+$/g, "")}</span>`;
      return `<pre><code class="language-${language}" language=${language}>${codeSpan}</code></pre>`;
    }
  });
  initLineNumber(md);
  const key = ref(`_article-key_${I()}`);
  const html = ref(props2.sanitize(md.render(props2.modelValue)));
  const updatedTodo = () => {
    bus.emit(editorId, BUILD_FINISHED, html.value);
    props2.onHtmlChanged(html.value);
    props2.onGetCatalog(headsRef.value);
    bus.emit(editorId, CATALOG_CHANGED, headsRef.value);
    replaceMermaid();
  };
  onMounted(updatedTodo);
  const markHtml = () => {
    headsRef.value = [];
    html.value = props2.sanitize(md.render(props2.modelValue));
    updatedTodo();
  };
  const needReRender = computed(() => {
    return (props2.noKatex || katexRef.value) && (props2.noHighlight || hljsRef.value);
  });
  watch(
    [toRef$1(props2, "modelValue"), needReRender, reRenderRef],
    R(markHtml, previewOnly ? 0 : editorConfig.renderDelay)
  );
  watch(
    () => props2.setting.preview,
    () => {
      if (props2.setting.preview) {
        nextTick(() => {
          bus.emit(editorId, CATALOG_CHANGED, headsRef.value);
        });
      }
    }
  );
  onMounted(() => {
    bus.on(editorId, {
      name: PUSH_CATALOG,
      callback() {
        bus.emit(editorId, CATALOG_CHANGED, headsRef.value);
      }
    });
    bus.on(editorId, {
      name: RERENDER,
      callback: () => {
        markHtml();
        key.value = `_article-key_${I()}`;
      }
    });
  });
  return { html, key };
};
const useMarkdownIt$1 = useMarkdownIt;
const contentPreviewProps = {
  modelValue: {
    type: String,
    default: ""
  },
  setting: {
    type: Object,
    default: () => ({ preview: true })
  },
  onHtmlChanged: {
    type: Function,
    default: () => {
    }
  },
  onGetCatalog: {
    type: Function,
    default: () => {
    }
  },
  mdHeadingId: {
    type: Function,
    default: () => ""
  },
  noMermaid: {
    type: Boolean,
    default: false
  },
  sanitize: {
    type: Function,
    default: (html) => html
  },
  // 不使用该函数功能
  noKatex: {
    type: Boolean,
    default: false
  },
  formatCopiedText: {
    type: Function,
    default: (text2) => text2
  },
  noHighlight: {
    type: Boolean,
    default: false
  },
  previewOnly: {
    type: Boolean,
    default: false
  },
  noImgZoomIn: {
    type: Boolean
  },
  sanitizeMermaid: {
    type: Function
  }
};
({
  ...contentPreviewProps,
  updateModelValue: {
    type: Function,
    default: () => {
    }
  },
  onChange: {
    type: Function,
    default: () => {
    }
  },
  placeholder: {
    type: String,
    default: ""
  },
  scrollAuto: {
    type: Boolean
  },
  autofocus: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  readonly: {
    type: Boolean
  },
  maxlength: {
    type: Number
  },
  autoDetectCode: {
    type: Boolean
  },
  /**
   * 输入框失去焦点时触发事件
   */
  onBlur: {
    type: Function,
    default: () => {
    }
  },
  /**
   * 输入框获得焦点时触发事件
   */
  onFocus: {
    type: Function,
    default: () => {
    }
  },
  noPrettier: {
    type: Boolean
  },
  completions: {
    type: Array
  },
  catalogVisible: {
    type: Boolean
  },
  theme: {
    type: String,
    default: "light"
  },
  onInput: {
    type: Function
  },
  onDrop: {
    type: Function,
    default: () => {
    }
  },
  inputBoxWitdh: {
    type: String
  },
  onInputBoxWitdhChange: {
    type: Function
  },
  transformImgUrl: {
    type: Function,
    default: (t2) => t2
  }
});
const ContentPreview = /* @__PURE__ */ defineComponent({
  name: "ContentPreview",
  props: contentPreviewProps,
  setup(props2) {
    const editorId = inject("editorId");
    const previewTheme = inject("previewTheme");
    const showCodeRowNumber = inject("showCodeRowNumber");
    const {
      html,
      key
    } = useMarkdownIt$1(props2, props2.previewOnly);
    useCopyCode(props2, html, key);
    userZoom(props2, html);
    return () => {
      return createVNode(Fragment, null, [props2.setting.preview && createVNode("div", {
        "id": `${editorId}-preview-wrapper`,
        "class": `${prefix}-preview-wrapper`,
        "key": "content-preview-wrapper"
      }, [createVNode("div", {
        "key": key.value,
        "id": `${editorId}-preview`,
        "class": [`${prefix}-preview`, `${previewTheme == null ? void 0 : previewTheme.value}-theme`, showCodeRowNumber && `${prefix}-scrn`],
        "innerHTML": html.value
      }, null)]), !props2.previewOnly && props2.setting.htmlPreview && createVNode("div", {
        "id": `${editorId}-html-wrapper`,
        "class": `${prefix}-preview-wrapper`,
        "key": "html-preview-wrapper"
      }, [createVNode("div", {
        "class": `${prefix}-html`
      }, [html.value])])]);
    };
  }
});
const useProvidePreview = (props2) => {
  const { editorId } = props2;
  const hljsUrls = configOption.editorExtensions.highlight;
  const hljsAttrs = configOption.editorExtensionsAttrs.highlight;
  provide("editorId", editorId);
  provide(
    "theme",
    computed(() => props2.theme)
  );
  provide(
    "language",
    computed(() => props2.language)
  );
  provide(
    "highlight",
    computed(() => {
      const { js: jsUrl } = hljsUrls;
      const cssList = {
        ...codeCss,
        ...hljsUrls.css
      };
      const { js: jsAttrs, css: cssAttrs = {} } = hljsAttrs || {};
      const _theme = props2.codeStyleReverse && props2.codeStyleReverseList.includes(props2.previewTheme) ? "dark" : props2.theme;
      const codeCssHref = cssList[props2.codeTheme] ? cssList[props2.codeTheme][_theme] : codeCss.atom[_theme];
      const codeCssAttrs = cssList[props2.codeTheme] && cssAttrs[props2.codeTheme] ? cssAttrs[props2.codeTheme][_theme] : cssAttrs["atom"] ? cssAttrs["atom"][_theme] : {};
      return {
        js: {
          src: jsUrl,
          ...jsAttrs
        },
        css: {
          href: codeCssHref,
          ...codeCssAttrs
        }
      };
    })
  );
  provide("showCodeRowNumber", props2.showCodeRowNumber);
  const usedLanguageText = computed(() => {
    const allText = {
      ...staticTextDefault,
      ...configOption.editorConfig.languageUserDefined
    };
    return C(
      a(staticTextDefault["en-US"]),
      allText[props2.language] || {}
    );
  });
  provide("usedLanguageText", usedLanguageText);
  provide(
    "previewTheme",
    computed(() => props2.previewTheme)
  );
  provide(
    "customIcon",
    computed(() => props2.customIcon)
  );
};
const useExpansionPreview = (props2) => {
  onMounted(() => {
    const { editorExtensions, editorExtensionsAttrs, iconfontType } = configOption;
    if (props2.noIconfont) {
      return;
    }
    if (iconfontType === "svg") {
      appendHandler("script", {
        ...editorExtensionsAttrs.iconfont,
        src: editorExtensions.iconfont,
        id: `${prefix}-icon`
      });
    } else {
      appendHandler("link", {
        ...editorExtensionsAttrs.iconfontClass,
        rel: "stylesheet",
        href: editorExtensions.iconfontClass,
        id: `${prefix}-icon-class`
      });
    }
  });
};
const mdHeadingId = (text2) => text2;
const mdPreviewProps = {
  /**
   * markdown content.
   *
   * @default ''
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * 主题，支持light和dark
   *
   * @default 'light'
   */
  theme: {
    type: String,
    default: "light"
  },
  /**
   * 外层类名
   *
   * @default ''
   */
  class: {
    type: String,
    default: ""
  },
  /**
   * 预设语言名称
   *
   * @default 'zh-CN'
   */
  language: {
    type: String,
    default: "zh-CN"
  },
  /**
   * html变化事件
   */
  onHtmlChanged: {
    type: Function
  },
  /**
   * 获取目录结构
   */
  onGetCatalog: {
    type: Function
  },
  /**
   * 编辑器唯一标识
   *
   * @default 'md-editor-v3'
   */
  editorId: {
    type: String,
    default: () => getNextId("md-editor-v3_")
  },
  /**
   * 预览中代码是否显示行号
   *
   * @default false
   */
  showCodeRowNumber: {
    type: Boolean,
    default: false
  },
  /**
   * 预览内容样式
   *
   * @default 'default'
   */
  previewTheme: {
    type: String,
    default: "default"
  },
  /**
   * 编辑器样式
   */
  style: {
    type: Object,
    default: () => ({})
  },
  /**
   * 标题的id生成方式
   *
   * @default (text: string) => text
   */
  mdHeadingId: {
    type: Function,
    default: mdHeadingId
  },
  /**
   *
   * 不能保证文本正确的情况，在marked编译md文本后通过该方法处理
   * 推荐DOMPurify、sanitize-html
   *
   * @default (text: string) => text
   */
  sanitize: {
    type: Function,
    default: (html) => html
  },
  /**
   * 不使用该mermaid
   *
   * @default false
   */
  noMermaid: {
    type: Boolean,
    default: false
  },
  /**
   * 不使用katex
   *
   * @default false
   */
  noKatex: {
    type: Boolean,
    default: false
  },
  /**
   * 代码主题
   *
   * @default 'atom'
   */
  codeTheme: {
    type: String,
    default: "atom"
  },
  /**
   * 不插入iconfont链接
   *
   * @default false
   */
  noIconfont: {
    type: Boolean
  },
  /**
   * 复制代码格式化方法
   *
   * @default (text) => text
   */
  formatCopiedText: {
    type: Function,
    default: (text2) => text2
  },
  /**
   * 某些预览主题的代码模块背景是暗色系
   * 将这个属性设置为true，会自动在该主题下的light模式下使用暗色系的代码风格
   *
   * @default true
   */
  codeStyleReverse: {
    type: Boolean,
    default: true
  },
  /**
   * 需要自动调整的预览主题
   *
   * @default ['default', 'mk-cute']
   */
  codeStyleReverseList: {
    type: Array,
    default: ["default", "mk-cute"]
  },
  noHighlight: {
    type: Boolean,
    default: false
  },
  /**
   * 是否关闭编辑器默认的放大缩小功能
   */
  noImgZoomIn: {
    type: Boolean,
    default: false
  },
  /**
   * 自定义的图标
   */
  customIcon: {
    type: Object,
    default: {}
  },
  sanitizeMermaid: {
    type: Function,
    default: (h) => Promise.resolve(h)
  }
};
({
  ...mdPreviewProps,
  /**
   * input回调事件
   */
  onChange: {
    type: Function
  },
  /**
   * input回调事件
   */
  onSave: {
    type: Function
  },
  /**
   * 上传图片事件
   */
  onUploadImg: {
    type: Function
  },
  /**
   * 是否页面内全屏
   *
   * @default false
   */
  pageFullscreen: {
    type: Boolean,
    default: false
  },
  /**
   * 是否展开预览
   *
   * @default true
   */
  preview: {
    type: Boolean,
    default: true
  },
  /**
   * 是否展开html预览
   *
   * @default false
   */
  htmlPreview: {
    type: Boolean,
    default: false
  },
  /**
   * 仅预览模式，不显示toolbar和编辑框
   *
   * @4.0.0开始移除该设置，使用组件MdPreview替换
   *
   * @default false
   */
  // previewOnly: {
  //   type: Boolean as PropType<boolean>,
  //   default: false
  // },
  /**
   * 工具栏选择显示
   *
   * @default allToolbar
   */
  toolbars: {
    type: Array,
    default: allToolbar
  },
  /**
   * 工具栏选择不显示
   *
   * @default []
   */
  toolbarsExclude: {
    type: Array,
    default: []
  },
  /**
   * 格式化md
   *
   * @default true
   */
  noPrettier: {
    type: Boolean,
    default: false
  },
  /**
   * 一个tab等于空格数
   *
   * @default 2
   */
  tabWidth: {
    type: Number,
    default: 2
  },
  /**
   * 表格预设格子数
   *
   * 也可以是[6, 4, 10, 8]
   *
   * @default [6, 4]
   */
  tableShape: {
    type: Array
  },
  /**
   * 空提示
   *
   * @default ''
   */
  placeholder: {
    type: String,
    default: ""
  },
  /**
   * 自定义的工具栏列表
   */
  defToolbars: {
    type: [String, Object]
  },
  /**
   * 内部错误捕获
   */
  onError: {
    type: Function
  },
  /**
   * 页脚列表显示顺序
   */
  footers: {
    type: Array,
    default: allFooter
  },
  /**
   * 是否默认激活输入框和预览框同步滚动
   *
   * @default true
   */
  scrollAuto: {
    type: Boolean,
    default: true
  },
  /**
   * 自定义的也叫工具组件列表
   */
  defFooters: {
    type: [String, Object]
  },
  /**
   * 是否禁用上传图片
   *
   * @default false
   */
  noUploadImg: {
    type: Boolean
  },
  /**
   * 文本区域自动获得焦点
   *
   * @default false
   */
  autoFocus: {
    type: Boolean
  },
  /**
   * 禁用文本区域
   *
   * @default false
   */
  disabled: {
    type: Boolean
  },
  /**
   * 文本区域为只读
   *
   * @default false
   */
  readOnly: {
    type: Boolean
  },
  /**
   * 文本区域允许的最大字符数
   */
  maxLength: {
    type: Number
  },
  /**
   * 是否启用自动识别粘贴代码类别
   * 目前支持 vscode 复制的代码识别
   *
   * @default false
   */
  autoDetectCode: {
    type: Boolean
  },
  /**
   * 输入框失去焦点时触发事件
   */
  onBlur: {
    type: Function
  },
  /**
   * 输入框获得焦点时触发事件
   */
  onFocus: {
    type: Function
  },
  /**
   * @codemirror/autocomplete匹配关键词的方法列表
   *
   * 它会被像下面这样嵌入编辑器
   *
   * import { autocompletion } from '@codemirror/autocomplete';
   * autocompletion({
   *   override: [...completions]
   * })
   */
  completions: {
    type: Array
  },
  /**
   * 是否在工具栏下面显示对应的文字名称
   *
   * @default false
   */
  showToolbarName: {
    type: Boolean,
    default: false
  },
  /**
   * 字符输入事件
   */
  onInput: {
    type: Function
  },
  onDrop: {
    type: Function
  },
  /**
   * 输入框的默认宽度
   *
   * @example '100px'/'50%'
   * @default '50%
   */
  inputBoxWitdh: {
    type: String,
    default: "50%"
  },
  /**
   * 输入框宽度变化事件
   */
  onInputBoxWitdhChange: {
    type: Function
  },
  /**
   * 替换粘贴的图片链接
   *
   * @param t 图片链接
   * @returns
   */
  transformImgUrl: {
    type: Function,
    default: (t2) => t2
  }
});
const mdPreviewEmits = ["onHtmlChanged", "onGetCatalog"];
[
  ...mdPreviewEmits,
  "onChange",
  "onSave",
  "onUploadImg",
  "onError",
  "update:modelValue",
  "onBlur",
  "onFocus",
  "onInput",
  "onDrop",
  "onInputBoxWitdhChange"
];
const useExpose = (props2, ctx) => {
  const { editorId } = props2;
  const exposeParam = {
    rerender() {
      bus.emit(editorId, RERENDER);
    }
  };
  ctx.expose(exposeParam);
};
const MdPreview = /* @__PURE__ */ defineComponent({
  name: "MdPreview",
  props: mdPreviewProps,
  emits: mdPreviewEmits,
  setup(props2, ctx) {
    const {
      editorId,
      noKatex,
      noMermaid,
      noHighlight
    } = props2;
    useProvidePreview(props2);
    useExpansionPreview(props2);
    useExpose(props2, ctx);
    onBeforeUnmount(() => {
      bus.clear(editorId);
    });
    return () => {
      return createVNode("div", {
        "id": editorId,
        "class": [prefix, props2.class, props2.theme === "dark" && `${prefix}-dark`, `${prefix}-previewOnly`],
        "style": props2.style
      }, [createVNode(ContentPreview, {
        "modelValue": props2.modelValue,
        "onHtmlChanged": (html) => {
          if (props2.onHtmlChanged) {
            props2.onHtmlChanged(html);
          } else {
            ctx.emit("onHtmlChanged", html);
          }
        },
        "onGetCatalog": (list2) => {
          if (props2.onGetCatalog) {
            props2.onGetCatalog(list2);
          } else {
            ctx.emit("onGetCatalog", list2);
          }
        },
        "mdHeadingId": props2.mdHeadingId,
        "noMermaid": noMermaid,
        "sanitize": props2.sanitize,
        "noKatex": noKatex,
        "formatCopiedText": props2.formatCopiedText,
        "noHighlight": noHighlight,
        "noImgZoomIn": props2.noImgZoomIn,
        "previewOnly": true,
        "sanitizeMermaid": props2.sanitizeMermaid
      }, null)]);
    };
  }
});
MdPreview.install = (app) => {
  app.component(MdPreview.name, MdPreview);
  return app;
};
const props$1 = {
  tocItem: {
    type: Object,
    default: () => ({})
  },
  mdHeadingId: {
    type: Function,
    default: () => {
    }
  },
  scrollElement: {
    type: [String, Object],
    default: ""
  },
  onClick: {
    type: Function,
    default: () => {
    }
  },
  scrollElementOffsetTop: {
    type: Number,
    default: 0
  }
};
const CatalogLink = /* @__PURE__ */ defineComponent({
  props: props$1,
  setup(props2) {
    return () => {
      const {
        tocItem,
        mdHeadingId: mdHeadingId2,
        scrollElement,
        onClick,
        scrollElementOffsetTop
      } = props2;
      return createVNode("div", {
        "class": [`${prefix}-catalog-link`, tocItem.active && `${prefix}-catalog-active`],
        "onClick": (e2) => {
          onClick(e2, tocItem);
          e2.stopPropagation();
          const id = mdHeadingId2(tocItem.text, tocItem.level, tocItem.index);
          const targetHeadEle = document.getElementById(id);
          const scrollContainer = scrollElement instanceof Element ? scrollElement : document.querySelector(scrollElement);
          if (targetHeadEle && scrollContainer) {
            let par = targetHeadEle.offsetParent;
            let offsetTop = targetHeadEle.offsetTop;
            if (scrollContainer.contains(par)) {
              while (par && scrollContainer != par) {
                offsetTop += par == null ? void 0 : par.offsetTop;
                par = par == null ? void 0 : par.offsetParent;
              }
            }
            scrollContainer == null ? void 0 : scrollContainer.scrollTo({
              top: offsetTop - scrollElementOffsetTop,
              behavior: "smooth"
            });
          }
        }
      }, [createVNode("span", {
        "title": tocItem.text
      }, [tocItem.text]), createVNode("div", {
        "class": `${prefix}-catalog-wrapper`
      }, [tocItem.children && tocItem.children.map((item) => createVNode(CatalogLink, {
        "mdHeadingId": mdHeadingId2,
        "key": `${tocItem.text}-link-${item.level}-${item.text}`,
        "tocItem": item,
        "scrollElement": scrollElement,
        "onClick": onClick,
        "scrollElementOffsetTop": scrollElementOffsetTop
      }, null))])]);
    };
  }
});
const CatalogLink$1 = CatalogLink;
const props = {
  /**
   * 编辑器的Id，务必与需要绑定的编辑器Id相同
   */
  editorId: {
    type: String
  },
  class: {
    type: String,
    default: ""
  },
  mdHeadingId: {
    type: Function,
    default: (text2) => text2
  },
  /**
   * 指定滚动的容器，选择器需带上对应的符号，默认预览框
   * 元素必须定位！！！！！！
   *
   * 默认：#md-editor-preview-wrapper
   */
  scrollElement: {
    type: [String, Object]
  },
  theme: {
    type: String,
    default: "light"
  },
  /**
   * 高亮标题相对滚动容器顶部偏移量，即距离该值时，高亮当前目录菜单项
   *
   * 默认：20px
   */
  offsetTop: {
    type: Number,
    default: 20
  },
  /**
   * 滚动区域的固定顶部高度
   *
   * 默认：0
   */
  scrollElementOffsetTop: {
    type: Number,
    default: 0
  },
  onClick: {
    type: Function
  },
  onActive: {
    type: Function
  }
};
const MdCatalog = /* @__PURE__ */ defineComponent({
  name: "MdCatalog",
  props,
  emits: ["onClick", "onActive"],
  setup(props2, ctx) {
    const editorId = props2.editorId;
    const state = reactive({
      list: [],
      show: false,
      scrollElement: props2.scrollElement || `#${editorId}-preview-wrapper`
    });
    const activeItem = shallowRef();
    const catalogs = computed(() => {
      const tocItems = [];
      state.list.forEach((listItem, index2) => {
        const {
          text: text2,
          level
        } = listItem;
        const item = {
          level,
          text: text2,
          index: index2 + 1,
          active: activeItem.value === listItem
        };
        if (tocItems.length === 0) {
          tocItems.push(item);
        } else {
          let lastItem = tocItems[tocItems.length - 1];
          if (item.level > lastItem.level) {
            for (let i2 = lastItem.level + 1; i2 <= 6; i2++) {
              const {
                children
              } = lastItem;
              if (!children) {
                lastItem.children = [item];
                break;
              }
              lastItem = children[children.length - 1];
              if (item.level <= lastItem.level) {
                children.push(item);
                break;
              }
            }
          } else {
            tocItems.push(item);
          }
        }
      });
      return tocItems;
    });
    const getScrollElement = () => {
      const scrollElement = state.scrollElement instanceof HTMLElement ? state.scrollElement : document.querySelector(state.scrollElement);
      return scrollElement;
    };
    const findActiveHeading = (list2) => {
      if (list2.length === 0) {
        state.list = [];
        return false;
      }
      const {
        activeHead
      } = list2.reduce((activeData, link2, index2) => {
        const linkEle = document.getElementById(props2.mdHeadingId(link2.text, link2.level, index2 + 1));
        if (linkEle instanceof HTMLElement) {
          const scrollElement = getScrollElement();
          const relativeTop = getRelativeTop(linkEle, scrollElement);
          if (relativeTop < props2.offsetTop && relativeTop > activeData.minTop) {
            return {
              activeHead: link2,
              minTop: relativeTop
            };
          }
        }
        return activeData;
      }, {
        activeHead: list2[0],
        minTop: Number.MIN_SAFE_INTEGER
      });
      activeItem.value = activeHead;
      state.list = list2;
    };
    const scrollHandler = () => {
      findActiveHeading(state.list);
    };
    watch(() => activeItem.value, (nVal) => {
      const activeHeading = nVal ? {
        ...nVal
      } : void 0;
      if (props2.onActive) {
        props2.onActive(activeHeading);
      } else {
        ctx.emit("onActive", activeHeading);
      }
    });
    onMounted(() => {
      let scrollContainer = window;
      const findScrollContainer = () => {
        const scrollElement_ = getScrollElement();
        scrollContainer = scrollElement_ === document.documentElement ? window : scrollElement_;
      };
      bus.on(editorId, {
        name: CATALOG_CHANGED,
        callback: (_list) => {
          scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", scrollHandler);
          findActiveHeading(_list);
          findScrollContainer();
          scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", scrollHandler);
        }
      });
      bus.emit(editorId, PUSH_CATALOG);
      findScrollContainer();
      scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", scrollHandler);
    });
    onBeforeUnmount(() => {
      var _a3;
      const scrollElement = getScrollElement();
      (_a3 = scrollElement === document.documentElement ? window : scrollElement) == null ? void 0 : _a3.removeEventListener("scroll", scrollHandler);
    });
    return () => createVNode("div", {
      "class": `${prefix}-catalog${props2.theme === "dark" ? "-dark" : ""} ${props2.class}`
    }, [catalogs.value.map((item) => {
      return createVNode(CatalogLink$1, {
        "mdHeadingId": props2.mdHeadingId,
        "tocItem": item,
        "key": `link-${item.level}-${item.text}`,
        "scrollElement": state.scrollElement,
        "onClick": (e2, t2) => {
          if (props2.onClick) {
            props2.onClick(e2, t2);
          } else {
            ctx.emit("onClick", e2, t2);
          }
        },
        "scrollElementOffsetTop": props2.scrollElementOffsetTop
      }, null);
    })]);
  }
});
MdCatalog.install = (app) => {
  app.component(MdCatalog.name, MdCatalog);
  return app;
};
const _withScopeId$3 = (n2) => (pushScopeId("data-v-64e4be1f"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$6 = { class: "detail" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "detail__catalog-title" }, "目录", -1));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    articleDetail: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { articleDetail } = __props;
    const { setShowMdMenu, setMdMenu, pageDisplayInfo } = useBlockVisible();
    const isScrollImgFinish = ref(false);
    const staticStore = staticData();
    setMdMenu([]);
    const mdData = reactive({
      text: articleDetail.article_content || "",
      id: "my-editor",
      switch: true
    });
    const { codeTheme, previewTheme, mainTheme } = storeToRefs(staticStore);
    const scrollElement = document.documentElement;
    const handleCatalog = (catalog) => {
      setMdMenu(catalog);
    };
    const handleWindowScroll = () => {
      throttle(() => {
        const pageY = window.scrollY;
        if (pageY > 60) {
          isScrollImgFinish.value = true;
        } else {
          isScrollImgFinish.value = false;
        }
      }, 250)();
    };
    onMounted(() => {
      setShowMdMenu(true);
      if (!window || window.innerWidth < 768)
        return;
      nextTick(() => {
        window.addEventListener("scroll", handleWindowScroll);
      });
    });
    onUnmounted(() => {
      setShowMdMenu(false);
      if (!window || window.innerWidth > 768)
        return;
      window.removeEventListener("scroll", handleWindowScroll);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(unref(MdPreview), {
          modelValue: mdData.text,
          class: "md-preview-v3",
          editorId: mdData.id,
          previewOnly: "",
          "preview-theme": unref(previewTheme),
          "code-theme": unref(codeTheme),
          theme: unref(mainTheme) ? "dark" : "light",
          onOnGetCatalog: handleCatalog
        }, null, 8, ["modelValue", "editorId", "preview-theme", "code-theme", "theme"]),
        unref(pageDisplayInfo).mdMenu.length ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["detail__catalog", isScrollImgFinish.value && "detail__catalog--center"])
        }, [
          _hoisted_2$4,
          createVNode(unref(MdCatalog), {
            editorId: mdData.id,
            scrollElement: unref(scrollElement)
          }, null, 8, ["editorId", "scrollElement"])
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const DetailMk = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-64e4be1f"]]);
const topBgList = [
  { id: 1, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1608631999167-410d2c8a3c0f.avif", width: 3742, height: 2085 },
  { id: 2, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1607019307179-933bf77726f0.avif", width: 3774, height: 2831 },
  { id: 3, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1621842216233-8bf3afec90e5.avif", width: 3870, height: 2580 },
  { id: 4, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1419064642531-e575728395f2.avif", width: 3870, height: 2580 },
  { id: 5, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1419064642531-e575728395f2.avif", width: 3876, height: 2566 },
  { id: 6, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1561731418-bbf3a78e0b4f.avif", width: 3751, height: 2110 },
  { id: 7, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1607600434079-73b45e254bd8.avif", width: 3760, height: 2058 },
  { id: 8, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1612141862591-a689bade02d7.avif", width: 3870, height: 2580 },
  { id: 9, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1561731418-bbf3a78e0b4f.avif", width: 3870, height: 2582 },
  { id: 10, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1516444830679-7f62c77fae81.avif", width: 3056, height: 1636 },
  { id: 11, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1610528816441-f309483d887a.avif", width: 3871, height: 2580 },
  { id: 12, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1454372182658-c712e4c5a1db.avif", width: 3870, height: 2583 },
  { id: 13, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1606748335428-fa7c54db7018.avif", width: 3732, height: 2099 },
  { id: 14, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1606748335428-fa7c54db7018.avif", width: 3732, height: 2099 },
  { id: 15, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1476610182048-b716b8518aae.avif", width: 3718, height: 2249 },
  { id: 16, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1608631999167-410d2c8a3c0f.avif", width: 3742, height: 2085 },
  { id: 17, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1592657825712-8af3223a5e18.avif", width: 3774, height: 2831 },
  { id: 18, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1596039744094-5c0b2a91a2dd.avif", width: 3870, height: 2580 },
  { id: 19, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1604552278433-1d1d347b6e09.avif", width: 3876, height: 2567 },
  { id: 20, url: "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1544128844-da6922f58439.avif", width: 3870, height: 2580 }
];
const errorImg = "https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/45prvdakqe.svg";
const getRandomNumber1_19 = () => Math.floor(Math.random() * 20);
const getRandomTopBg = () => {
  return topBgList[getRandomNumber1_19()].url;
};
const _hoisted_1$5 = {
  key: 0,
  class: "progressive"
};
const _hoisted_2$3 = ["src"];
const _hoisted_3$3 = ["src"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    minOrigin: String,
    origin: String
  },
  setup(__props) {
    const isLoaded = ref(false);
    const handleLoaded = (e2) => {
      e2.target.parentElement.classList.add("loaded");
      isLoaded.value = true;
    };
    const handleError = (e2) => {
      e2.target.src = errorImg;
    };
    return (_ctx, _cache) => {
      return __props.origin ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("img", {
          class: "img placeholder",
          src: __props.origin
        }, null, 8, _hoisted_2$3),
        createBaseVNode("img", {
          onLoad: handleLoaded,
          class: "img origin",
          src: __props.origin,
          onError: handleError
        }, null, 40, _hoisted_3$3)
      ])) : createCommentVNode("", true);
    };
  }
});
const ProgressImg = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-f8f49884"]]);
const _hoisted_1$4 = { class: "page-header" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const imgSrc = getRandomTopBg();
    const imgSrcTl = `${imgSrc}?imageView2/q/50`;
    const lowImgSrc = `${imgSrc}?imageView2/q/8`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(ProgressImg, {
          origin: imgSrcTl,
          minOrigin: lowImgSrc
        })
      ]);
    };
  }
});
const PageHeader = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-e0f38f91"]]);
const _withScopeId$2 = (n2) => (pushScopeId("data-v-ba26c3f9"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$3 = { class: "header" };
const _hoisted_2$2 = { class: "header__title" };
const _hoisted_3$2 = { class: "header__time" };
const _hoisted_4$2 = { class: "header__time-li" };
const _hoisted_5$2 = { class: "header__time-li" };
const _hoisted_6$2 = { class: "header__time-li" };
const _hoisted_7$1 = { class: "header__time-li" };
const _hoisted_8$1 = { class: "el-dropdown-link" };
const _hoisted_9$1 = { class: "el-dropdown-link" };
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("hr", { class: "header__hr" }, null, -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    articleDetail: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const staticStore = staticData();
    const { switchPreviewTheme, switchCodeTheme } = staticStore;
    const { codeTheme, previewTheme, previewThemeList, codeThemeList } = storeToRefs(staticStore);
    const handleCodeTheme = (v) => {
      switchCodeTheme(v);
    };
    const handlePreviewTheme = (v) => {
      switchPreviewTheme(v);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("h2", _hoisted_2$2, toDisplayString(__props.articleDetail.article_title), 1),
        createBaseVNode("ul", _hoisted_3$2, [
          createBaseVNode("li", _hoisted_4$2, [
            createVNode(_component_el_icon, {
              size: 12,
              class: "header__icon"
            }, {
              default: withCtx(() => [
                createVNode(unref(calendar_default))
              ]),
              _: 1
            }),
            createBaseVNode("span", null, "发布：" + toDisplayString(unref(getNormalTime)(__props.articleDetail.create_time)), 1)
          ]),
          createBaseVNode("li", _hoisted_5$2, [
            createVNode(_component_el_icon, {
              size: 12,
              class: "header__icon"
            }, {
              default: withCtx(() => [
                createVNode(unref(timer_default))
              ]),
              _: 1
            }),
            createBaseVNode("span", null, "更新：" + toDisplayString(__props.articleDetail.update_time ? unref(getNormalTime)(__props.articleDetail.update_time) : "--"), 1)
          ]),
          createBaseVNode("li", _hoisted_6$2, [
            createVNode(_component_el_icon, {
              size: 12,
              class: "header__icon"
            }, {
              default: withCtx(() => [
                createVNode(unref(reading_default))
              ]),
              _: 1
            }),
            createBaseVNode("span", null, "阅读数：" + toDisplayString(__props.articleDetail.article_read_count), 1)
          ]),
          createBaseVNode("li", _hoisted_7$1, [
            createVNode(_component_el_icon, {
              size: 12,
              class: "header__icon"
            }, {
              default: withCtx(() => [
                createVNode(unref(info_filled_default))
              ]),
              _: 1
            }),
            createBaseVNode("span", null, [
              createTextVNode("主题(可选)： "),
              createVNode(_component_el_dropdown, { onCommand: handlePreviewTheme }, {
                dropdown: withCtx(() => [
                  createVNode(_component_el_dropdown_menu, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(previewThemeList), (item) => {
                        return openBlock(), createBlock(_component_el_dropdown_item, {
                          command: item,
                          key: item
                        }, {
                          default: withCtx(() => [
                            createTextVNode("预览:" + toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["command"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_8$1, toDisplayString(unref(previewTheme)), 1)
                ]),
                _: 1
              }),
              createTextVNode(" — "),
              createVNode(_component_el_dropdown, { onCommand: handleCodeTheme }, {
                dropdown: withCtx(() => [
                  createVNode(_component_el_dropdown_menu, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(codeThemeList), (item) => {
                        return openBlock(), createBlock(_component_el_dropdown_item, {
                          command: item,
                          key: item
                        }, {
                          default: withCtx(() => [
                            createTextVNode("代码:" + toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["command"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_9$1, toDisplayString(unref(codeTheme)), 1)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _hoisted_10$1
      ]);
    };
  }
});
const DetailTitleTips = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-ba26c3f9"]]);
const _withScopeId$1 = (n2) => (pushScopeId("data-v-4914a901"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "cursor",
  id: "cursor"
}, null, -1));
const _hoisted_2$1 = {
  class: "cursor2",
  id: "cursor2"
};
const _hoisted_3$1 = { class: "go-top-progress-wrap" };
const _hoisted_4$1 = {
  class: "progress-circle svg-content",
  width: "100%",
  height: "100%",
  viewBox: "-1 -1 102 102"
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-huojian5" }, null, -1));
const _hoisted_6$1 = [
  _hoisted_5$1
];
const _sfc_main$2 = {
  __name: "index",
  setup(__props) {
    const showToTop = ref(false);
    const progressPathRef = ref(null);
    const pathLength = ref(0);
    const handleScroll = () => {
      showToTop.value = window.scrollY > 300;
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const initProgress = () => {
      let progressPath = progressPathRef.value;
      pathLength.value = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = "none";
      progressPath.style.strokeDasharray = pathLength.value + " " + pathLength.value;
      progressPath.style.strokeDashoffset = pathLength.value;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    };
    const updateProgress = () => {
      let scroll = window.scrollY;
      let height = document.documentElement.scrollHeight - window.innerHeight;
      progressPathRef.value.style.strokeDashoffset = pathLength.value - scroll * pathLength.value / height;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      initProgress();
      updateProgress();
      document.addEventListener("scroll", updateProgress);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", updateProgress);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        style: normalizeStyle({ opacity: showToTop.value ? 1 : 0 })
      }, [
        _hoisted_1$2,
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            (openBlock(), createElementBlock("svg", _hoisted_4$1, [
              createBaseVNode("path", {
                ref_key: "progressPathRef",
                ref: progressPathRef,
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              }, null, 512)
            ]))
          ])
        ]),
        createBaseVNode("div", {
          class: "cursor3",
          id: "cursor3",
          onClick: scrollToTop
        }, _hoisted_6$1)
      ], 4);
    };
  }
};
const GoTop = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-4914a901"]]);
var dist = {};
var generateFromString$2 = {};
var md5hash = {};
Object.defineProperty(md5hash, "__esModule", { value: true });
function md5cycle(x, k) {
  var a2 = x[0];
  var b = x[1];
  var c = x[2];
  var d = x[3];
  a2 = ff(a2, b, c, d, k[0], 7, -680876936);
  d = ff(d, a2, b, c, k[1], 12, -389564586);
  c = ff(c, d, a2, b, k[2], 17, 606105819);
  b = ff(b, c, d, a2, k[3], 22, -1044525330);
  a2 = ff(a2, b, c, d, k[4], 7, -176418897);
  d = ff(d, a2, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a2, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a2, k[7], 22, -45705983);
  a2 = ff(a2, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a2, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a2, b, k[10], 17, -42063);
  b = ff(b, c, d, a2, k[11], 22, -1990404162);
  a2 = ff(a2, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a2, b, c, k[13], 12, -40341101);
  c = ff(c, d, a2, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a2, k[15], 22, 1236535329);
  a2 = gg(a2, b, c, d, k[1], 5, -165796510);
  d = gg(d, a2, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a2, b, k[11], 14, 643717713);
  b = gg(b, c, d, a2, k[0], 20, -373897302);
  a2 = gg(a2, b, c, d, k[5], 5, -701558691);
  d = gg(d, a2, b, c, k[10], 9, 38016083);
  c = gg(c, d, a2, b, k[15], 14, -660478335);
  b = gg(b, c, d, a2, k[4], 20, -405537848);
  a2 = gg(a2, b, c, d, k[9], 5, 568446438);
  d = gg(d, a2, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a2, b, k[3], 14, -187363961);
  b = gg(b, c, d, a2, k[8], 20, 1163531501);
  a2 = gg(a2, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a2, b, c, k[2], 9, -51403784);
  c = gg(c, d, a2, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a2, k[12], 20, -1926607734);
  a2 = hh(a2, b, c, d, k[5], 4, -378558);
  d = hh(d, a2, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a2, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a2, k[14], 23, -35309556);
  a2 = hh(a2, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a2, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a2, b, k[7], 16, -155497632);
  b = hh(b, c, d, a2, k[10], 23, -1094730640);
  a2 = hh(a2, b, c, d, k[13], 4, 681279174);
  d = hh(d, a2, b, c, k[0], 11, -358537222);
  c = hh(c, d, a2, b, k[3], 16, -722521979);
  b = hh(b, c, d, a2, k[6], 23, 76029189);
  a2 = hh(a2, b, c, d, k[9], 4, -640364487);
  d = hh(d, a2, b, c, k[12], 11, -421815835);
  c = hh(c, d, a2, b, k[15], 16, 530742520);
  b = hh(b, c, d, a2, k[2], 23, -995338651);
  a2 = ii(a2, b, c, d, k[0], 6, -198630844);
  d = ii(d, a2, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a2, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a2, k[5], 21, -57434055);
  a2 = ii(a2, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a2, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a2, b, k[10], 15, -1051523);
  b = ii(b, c, d, a2, k[1], 21, -2054922799);
  a2 = ii(a2, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a2, b, c, k[15], 10, -30611744);
  c = ii(c, d, a2, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a2, k[13], 21, 1309151649);
  a2 = ii(a2, b, c, d, k[4], 6, -145523070);
  d = ii(d, a2, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a2, b, k[2], 15, 718787259);
  b = ii(b, c, d, a2, k[9], 21, -343485551);
  x[0] = add32(a2, x[0]);
  x[1] = add32(b, x[1]);
  x[2] = add32(c, x[2]);
  x[3] = add32(d, x[3]);
}
function cmn(q, a2, b, x, s, t2) {
  a2 = add32(add32(a2, q), add32(x, t2));
  return add32(a2 << s | a2 >>> 32 - s, b);
}
function ff(a2, b, c, d, x, s, t2) {
  return cmn(b & c | ~b & d, a2, b, x, s, t2);
}
function gg(a2, b, c, d, x, s, t2) {
  return cmn(b & d | c & ~d, a2, b, x, s, t2);
}
function hh(a2, b, c, d, x, s, t2) {
  return cmn(b ^ c ^ d, a2, b, x, s, t2);
}
function ii(a2, b, c, d, x, s, t2) {
  return cmn(c ^ (b | ~d), a2, b, x, s, t2);
}
function md51(s) {
  var n2 = s.length;
  var state = [1732584193, -271733879, -1732584194, 271733878];
  var i2;
  for (i2 = 64; i2 <= s.length; i2 += 64) {
    md5cycle(state, md5blk(s.substring(i2 - 64, i2)));
  }
  s = s.substring(i2 - 64);
  var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i2 = 0; i2 < s.length; i2++)
    tail[i2 >> 2] |= s.charCodeAt(i2) << (i2 % 4 << 3);
  tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
  if (i2 > 55) {
    md5cycle(state, tail);
    for (i2 = 0; i2 < 16; i2++)
      tail[i2] = 0;
  }
  tail[14] = n2 * 8;
  md5cycle(state, tail);
  return state;
}
function md5blk(s) {
  var md5blks = [];
  for (var i2 = 0; i2 < 64; i2 += 4) {
    md5blks[i2 >> 2] = s.charCodeAt(i2) + (s.charCodeAt(i2 + 1) << 8) + (s.charCodeAt(i2 + 2) << 16) + (s.charCodeAt(i2 + 3) << 24);
  }
  return md5blks;
}
var hex_chr = "0123456789abcdef".split("");
function rhex(n2) {
  var s = "";
  for (var j = 0; j < 4; j++)
    s += hex_chr[n2 >> j * 8 + 4 & 15] + hex_chr[n2 >> j * 8 & 15];
  return s;
}
function hex2(x) {
  var num = [];
  for (var i2 = 0; i2 < x.length; i2++)
    num[i2] = rhex(x[i2]);
  return num.join("");
}
function md5(s) {
  return hex2(md51(s));
}
md5hash.md5 = md5;
function add32(a2, b) {
  return a2 + b & 4294967295;
}
var __spreadArrays = commonjsGlobal && commonjsGlobal.__spreadArrays || function() {
  for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s += arguments[i2].length;
  for (var r2 = Array(s), k = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k++)
      r2[k] = a2[j];
  return r2;
};
Object.defineProperty(generateFromString$2, "__esModule", { value: true });
var md5hash_1 = md5hash;
function hexToRgb(hex3) {
  var bigint = parseInt(hex3, 16);
  var r2 = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r2 + "," + g + "," + b;
}
function invertHex(hex3) {
  return (Number("0x1" + hex3) ^ 16777215).toString(16).substr(1).toUpperCase();
}
generateFromString$2.invertHex = invertHex;
function generatePath(curveVal, posVal, index2) {
  var cVal = curveVal;
  var bigC = 300 - cVal;
  var pos = posVal;
  return "m 150 " + (100 + pos + 200 * index2) + " Q " + bigC + " " + cVal + " " + (200 - pos - 200 * index2) + " 150 Q " + bigC + " " + bigC + " 150 " + (200 - pos - 200 * index2) + " Q " + cVal + " " + bigC + " " + (100 + pos + 200 * index2) + " 150 Q " + cVal + " " + cVal + " 150 " + (100 + pos + 200 * index2) + " z";
}
generateFromString$2.generatePath = generatePath;
function hydrateSVGBlog(data) {
  return '<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect id="bg" width="300" height="300" fill="rgb(' + hexToRgb(data.background) + ')" /><path d="' + data.paths[0] + '" fill="rgb(' + hexToRgb(data.colors[0]) + ')" /><path d="' + data.paths[1] + '" fill="rgb(' + hexToRgb(data.colors[1]) + ')" /><path d="' + data.paths[2] + '" fill="rgb(' + hexToRgb(data.colors[2]) + ')" /></svg>';
}
function generateFromString$1(id) {
  var idArr = md5hash_1.md5(id).split("").filter(function(el) {
    return el !== "-";
  });
  var backgroundColor = idArr.splice(0, 6).join("");
  var elColor = idArr.splice(idArr.length - 6, idArr.length).join("");
  var arr = __spreadArrays(Array(10)).map(function() {
    return parseInt(idArr.splice(0, 2).join(""), 16);
  });
  var data = {
    paths: [
      generatePath(arr[0], arr[1], 2),
      generatePath(arr[2], arr[3], 1),
      generatePath(arr[4], arr[5], 0)
    ],
    colors: [elColor, invertHex(elColor), invertHex(backgroundColor)],
    background: backgroundColor
  };
  return hydrateSVGBlog(data);
}
generateFromString$2.generateFromString = generateFromString$1;
Object.defineProperty(dist, "__esModule", { value: true });
var generateFromString_1 = generateFromString$2;
var generateFromString = dist.generateFromString = generateFromString_1.generateFromString;
const checkEmail = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入您的邮箱"));
  } else {
    const reg = /^([a-zA-Z0-9]+[_|_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|-|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!reg.test(value)) {
      callback(new Error("请输入正确的邮箱"));
    } else {
      callback();
    }
  }
};
const commentsRules = {
  nickname: [
    { required: true, message: "请输入您的昵称", trigger: "blur" }
  ],
  email: [
    { required: true, message: "请输入您的邮箱", trigger: "blur" },
    { validator: checkEmail, trigger: "blur" }
  ],
  content: [
    { required: true, message: "请输入您的留言内容", trigger: "blur" }
  ]
};
const _withScopeId = (n2) => (pushScopeId("data-v-f3919efd"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$1 = { class: "leave-word" };
const _hoisted_2 = { class: "leave-word__title" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "footer-hr" }, null, -1));
const _hoisted_4 = { class: "leave-word__li-top" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "leave-word__li-nickname" };
const _hoisted_7 = { class: "leave-word__li-time" };
const _hoisted_8 = { class: "leave-word__li-content" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "footer-hr" }, null, -1));
const _hoisted_11 = { class: "leave-word__li-top" };
const _hoisted_12 = ["src"];
const _hoisted_13 = { class: "leave-word__li-nickname" };
const _hoisted_14 = { class: "leave-word__li-time" };
const _hoisted_15 = { class: "leave-word__li-content" };
const _hoisted_16 = { class: "leave-word__replay" };
const _hoisted_17 = { class: "leave-word__replay-title" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "footer-hr" }, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const replayId = ref(null);
    const ruleFormRef = ref();
    const isShowReplay = ref(false);
    const submitLoading = ref(false);
    const replayForm = reactive({
      content: "",
      nickname: "",
      email: ""
    });
    const { articleId } = __props;
    const commentList = reactive([]);
    const commentLength = ref(0);
    onMounted(() => {
      getCommitList();
    });
    const getTime = (time) => {
      return formatTime(time, "YYYY-MM-DD");
    };
    const getCommitList = async () => {
      const { code: code2, data } = await service.getCommentList(articleId, { status: 1 });
      if (code2 !== 200)
        return;
      commentLength.value = data.length;
      const list2 = data.filter((item) => {
        return !item.parent_comment_id;
      }).map((li) => {
        li.children = data.filter((item) => {
          return item.parent_comment_id === li.comment_id;
        });
        return li;
      });
      commentList.splice(0, commentList.length);
      commentList.push(...list2);
    };
    const handleReplay = (id) => {
      if (commentLength.value > 1e3) {
        ElMessage.error("该文章留言数量已达上限");
      }
      isShowReplay.value = true;
      replayId.value = id;
      nextTick(() => {
        try {
          window.scrollTo(0, document.body.scrollHeight);
        } catch (error2) {
          console.log(error2);
        }
      });
    };
    const handleSubmitComment = async () => {
      var _a3;
      if (replayForm.nickname === "作者") {
        ElMessage.error("昵称不能为作者");
        return;
      }
      const valid = await ((_a3 = ruleFormRef.value) == null ? void 0 : _a3.validate());
      if (!valid)
        return;
      submitLoading.value = true;
      const { code: code2 } = await service.addComment(articleId, {
        parent_comment_id: replayId.value,
        comment_content: replayForm.content,
        short_time_name: replayForm.nickname,
        comment_email: replayForm.email,
        status: 2
      });
      submitLoading.value = false;
      if (code2 !== 200)
        return;
      ElMessage.success("留言成功, 作者将尽快审核");
      isShowReplay.value = false;
      replayForm.content = "";
      replayForm.nickname = "";
      replayForm.email = "";
      replayId.value = null;
      getCommitList();
    };
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("h3", _hoisted_2, [
          createBaseVNode("span", null, "留言（" + toDisplayString(commentLength.value) + "条）", 1),
          createBaseVNode("span", {
            class: "leave-word__add",
            onClick: _cache[0] || (_cache[0] = ($event) => handleReplay(null))
          }, "填写")
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(commentList, (item) => {
          return openBlock(), createElementBlock("div", {
            class: "leave-word__li",
            key: item.comment_id
          }, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("img", {
                class: "avatar",
                src: `data:image/svg+xml;utf8,${unref(generateFromString)(item.user_idp)}`
              }, null, 8, _hoisted_5),
              createBaseVNode("p", _hoisted_6, toDisplayString(item.short_time_name), 1),
              createBaseVNode("p", _hoisted_7, toDisplayString(getTime(item.create_time)), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("p", null, toDisplayString(item.comment_content), 1),
              createBaseVNode("p", {
                class: "leave-word__add",
                style: { "text-align": "right" },
                onClick: ($event) => handleReplay(item.comment_id)
              }, "回复", 8, _hoisted_9)
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
              return openBlock(), createElementBlock("div", {
                class: "leave-word__li-pd",
                key: child.comment_id
              }, [
                _hoisted_10,
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("img", {
                    class: "avatar",
                    src: `data:image/svg+xml;utf8,${unref(generateFromString)(child.user_idp)}`
                  }, null, 8, _hoisted_12),
                  createBaseVNode("p", _hoisted_13, toDisplayString(child.short_time_name), 1),
                  createBaseVNode("p", _hoisted_14, toDisplayString(getTime(child.create_time)), 1)
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("p", null, toDisplayString(child.comment_content), 1)
                ])
              ]);
            }), 128))
          ]);
        }), 128)),
        createBaseVNode("div", _hoisted_16, [
          createBaseVNode("h3", _hoisted_17, [
            createBaseVNode("span", {
              onClick: _cache[1] || (_cache[1] = ($event) => isShowReplay.value = !isShowReplay.value)
            }, "添加留言"),
            replayId.value ? (openBlock(), createElementBlock("span", {
              key: 0,
              onClick: _cache[2] || (_cache[2] = ($event) => replayId.value = null)
            }, "点击取消回复")) : createCommentVNode("", true)
          ]),
          _hoisted_18,
          isShowReplay.value && commentLength.value < 1e3 ? (openBlock(), createBlock(_component_el_form, {
            key: 0,
            ref_key: "ruleFormRef",
            ref: ruleFormRef,
            rules: unref(commentsRules),
            model: replayForm,
            class: "replay-content"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                class: "replay-content__content",
                required: "",
                prop: "content"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    placeholder: "请输入留言(最多300字)",
                    modelValue: replayForm.content,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => replayForm.content = $event),
                    modelModifiers: { trim: true },
                    type: "textarea",
                    maxlength: 300,
                    rows: 4,
                    style: { "max-width": "800px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                required: "",
                prop: "nickname"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    type: "input",
                    modelValue: replayForm.nickname,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => replayForm.nickname = $event),
                    modelModifiers: { trim: true },
                    class: "replay-content__nickname",
                    maxlength: 12,
                    style: { "max-width": "400px" }
                  }, {
                    prepend: withCtx(() => [
                      createTextVNode("您的昵称")
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                required: "",
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    type: "email",
                    modelValue: replayForm.email,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => replayForm.email = $event),
                    modelModifiers: { trim: true },
                    class: "replay-content__email",
                    maxlength: 35,
                    style: { "max-width": "400px" }
                  }, {
                    prepend: withCtx(() => [
                      createTextVNode("您的邮箱")
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    style: { "width": "200px" },
                    onClick: handleSubmitComment,
                    loading: submitLoading.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("提交")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["rules", "model"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const LeaveWord = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-f3919efd"]]);
const _hoisted_1 = { class: "contents-wrap" };
const __default__ = defineComponent({
  name: "home"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const pageLoading = ref(false);
    const articleDetail = ref({});
    const getArticleDetail = async (id) => {
      pageLoading.value = true;
      const { code: code2, data } = await service.getArticleDetail(id);
      pageLoading.value = false;
      if (code2 !== 200)
        return;
      articleDetail.value = data;
    };
    const updateRead = async (id) => {
      await service.updateArticleReadCount(id);
    };
    const route = useRoute();
    watch(() => {
      var _a3;
      return (_a3 = route.query) == null ? void 0 : _a3.id;
    }, async (newId) => {
      if (!newId)
        return;
      await getArticleDetail(+newId);
      await updateRead(+newId);
      nextTick(() => {
        window.scrollTo(0, 0);
      });
    }, {
      immediate: true,
      deep: true
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createVNode(Loading, null, null, 512), [
          [vShow, pageLoading.value]
        ]),
        articleDetail.value.article_id ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(PageHeader),
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createBlock(DetailTitleTips, {
              articleDetail: articleDetail.value,
              key: articleDetail.value.article_id
            }, null, 8, ["articleDetail"])),
            (openBlock(), createBlock(DetailMk, {
              articleDetail: articleDetail.value,
              key: articleDetail.value.article_id
            }, null, 8, ["articleDetail"]))
          ]),
          createVNode(LeaveWord, {
            articleId: articleDetail.value.article_id
          }, null, 8, ["articleId"]),
          createVNode(GoTop)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-0631ddae"]]);
export {
  index as default
};
