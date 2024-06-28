import { m as isClient, q as isSymbol, s as isObject, M as MapCache, S as Symbol$1, v as eq, x as isArray, y as isObjectLike, z as isKey, A as toKey, B as get, C as hasIn, D as baseGet, E as identity, G as root, r as ref, o as onMounted, H as watch, I as isElement, J as buildProps, K as componentSizes, d as defineComponent, L as useFormSize, N as useNamespace, O as computed, c as openBlock, e as createElementBlock, f as createBaseVNode, P as renderSlot, n as normalizeClass, u as unref, Q as createBlock, w as withCtx, l as createVNode, R as close_default, T as withModifiers, U as ElIcon, j as createCommentVNode, V as normalizeStyle, W as Transition, X as _export_sfc, Y as withInstall, Z as definePropType, $ as mutable, a0 as isNumber, a1 as markRaw, a2 as full_screen_default, a3 as scale_to_original_default, a4 as useLocale, a5 as useZIndex, a6 as effectScope, a7 as shallowRef, a8 as nextTick, F as Fragment, a9 as arrow_left_default, aa as arrow_right_default, ab as zoom_out_default, ac as zoom_in_default, ad as resolveDynamicComponent, ae as refresh_left_default, af as refresh_right_default, ag as renderList, ah as withDirectives, ai as vShow, aj as Teleport, ak as useEventListener, al as EVENT_CODE, am as keysOf, an as useAttrs, ao as useAttrs$1, ap as useThrottleFn, aq as mergeProps, ar as isString, as as getScrollContainer, t as toDisplayString, at as iconPropType, au as inject, av as isObject$1, aw as toRaw, ax as getCurrentInstance, ay as useId, a as reactive, az as toRefs, aA as onBeforeUnmount, aB as useResizeObserver, aC as isKorean, aD as isFunction, aE as useFocusController, aF as useFormItem, aG as useFormItemInputId, aH as useEmptyValues, aI as isArray$1, aJ as ValidateComponentsMap, aK as debugWarn, aL as isUndefined, aM as watchEffect, aN as toRawType, aO as UPDATE_MODEL_EVENT, aP as scrollIntoView, aQ as CHANGE_EVENT, aR as useSizeProp, aS as circle_close_default, aT as arrow_down_default, aU as useEmptyValuesProps, aV as useAriaProps, aW as ElInput, aX as provide, k as resolveComponent, aY as resolveDirective, aZ as withKeys, a_ as vModelText, a$ as useMutationObserver, b0 as withNoopInstall, b1 as d_arrow_left_default, b2 as more_filled_default, b3 as d_arrow_right_default, b4 as h, b5 as picture_filled_default, b6 as toRef, b7 as normalizeProps, b8 as useFetchState, b9 as useRouter, ba as getNormalTime, _ as _export_sfc$1, bb as useRoute, bc as linkList, bd as service, p as pushScopeId, h as popScopeId, be as Selected } from "./index-BXlkVL-7.js";
import { U as Uint8Array, g as getAllKeys, a as getTag, i as isBuffer, S as Stack, b as isTypedArray, k as keys, u as useTooltipContentProps, E as Ee, c as ElScrollbar, d as ElTooltip, e as castArray } from "./index-DbJsp0z9.js";
const isInContainer = (el, container) => {
  if (!isClient || !el || !container)
    return false;
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect();
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  array.length;
  var index2 = fromIndex + 1;
  while (index2--) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data = matchData[index2];
    if (data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      var result;
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index2 = length - 1;
  return baseFindIndex(array, baseIteratee(predicate), index2);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const useThrottleRender = (loading, throttle2 = 0) => {
  if (throttle2 === 0)
    return loading;
  const throttled = ref(false);
  let timeoutHandle = 0;
  const dispatchThrottling = () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    timeoutHandle = window.setTimeout(() => {
      throttled.value = loading.value;
    }, throttle2);
  };
  onMounted(dispatchThrottling);
  watch(() => loading.value, (val) => {
    if (val) {
      dispatchThrottling();
    } else {
      throttled.value = val;
    }
  });
  return throttled;
};
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const tagProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: componentSizes
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$b = defineComponent({
  name: "ElTag"
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useFormSize();
    const ns = useNamespace("tag");
    const containerKls = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type || "primary"),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(containerKls)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createBaseVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: normalizeClass(unref(containerKls)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "tag.vue"]]);
const ElTag = withInstall(Tag);
const imageViewerProps = buildProps({
  urlList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: Boolean,
  teleported: Boolean,
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const imageViewerEmits = {
  close: () => true,
  switch: (index2) => isNumber(index2),
  rotate: (deg) => isNumber(deg)
};
const _hoisted_1$d = ["src", "crossorigin"];
const __default__$a = defineComponent({
  name: "ElImageViewer"
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(__props, { expose, emit }) {
    var _a;
    const props = __props;
    const modes = {
      CONTAIN: {
        name: "contain",
        icon: markRaw(full_screen_default)
      },
      ORIGINAL: {
        name: "original",
        icon: markRaw(scale_to_original_default)
      }
    };
    const { t } = useLocale();
    const ns = useNamespace("image-viewer");
    const { nextZIndex } = useZIndex();
    const wrapper = ref();
    const imgRefs = ref([]);
    const scopeEventListener = effectScope();
    const loading = ref(true);
    const activeIndex = ref(props.initialIndex);
    const mode = shallowRef(modes.CONTAIN);
    const transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => {
      return activeIndex.value === 0;
    });
    const isLast = computed(() => {
      return activeIndex.value === props.urlList.length - 1;
    });
    const currentImg = computed(() => {
      return props.urlList[activeIndex.value];
    });
    const arrowPrevKls = computed(() => [
      ns.e("btn"),
      ns.e("prev"),
      ns.is("disabled", !props.infinite && isFirst.value)
    ]);
    const arrowNextKls = computed(() => [
      ns.e("btn"),
      ns.e("next"),
      ns.is("disabled", !props.infinite && isLast.value)
    ]);
    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      switch (deg % 360) {
        case 90:
        case -270:
          [translateX, translateY] = [translateY, -translateX];
          break;
        case 180:
        case -180:
          [translateX, translateY] = [-translateX, -translateY];
          break;
        case 270:
        case -90:
          [translateX, translateY] = [-translateY, translateX];
          break;
      }
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === modes.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = throttle((e) => {
        switch (e.code) {
          case EVENT_CODE.esc:
            props.closeOnPressEscape && hide();
            break;
          case EVENT_CODE.space:
            toggleMode();
            break;
          case EVENT_CODE.left:
            prev();
            break;
          case EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case EVENT_CODE.right:
            next();
            break;
          case EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = throttle((e) => {
        const delta = e.deltaY || e.deltaX;
        handleActions(delta < 0 ? "zoomIn" : "zoomOut", {
          zoomRate: props.zoomRate,
          enableTransition: false
        });
      });
      scopeEventListener.run(() => {
        useEventListener(document, "keydown", keydownHandler);
        useEventListener(document, "wheel", mousewheelHandler);
      });
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e) {
      loading.value = false;
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading.value || e.button !== 0 || !wrapper.value)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const dragHandler = throttle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = useEventListener(document, "mousemove", dragHandler);
      useEventListener(document, "mouseup", () => {
        removeMousemove();
      });
      e.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value)
        return;
      const modeNames = keysOf(modes);
      const modeValues = Object.values(modes);
      const currentMode = mode.value.name;
      const index2 = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index2 + 1) % modeNames.length;
      mode.value = modes[modeNames[nextIndex]];
      reset();
    }
    function setActiveItem(index2) {
      const len = props.urlList.length;
      activeIndex.value = (index2 + len) % len;
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value - 1);
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value + 1);
    }
    function handleActions(action, options = {}) {
      if (loading.value)
        return;
      const { minScale, maxScale } = props;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: props.zoomRate,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > minScale) {
            transform.value.scale = Number.parseFloat((transform.value.scale / zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          if (transform.value.scale < maxScale) {
            transform.value.scale = Number.parseFloat((transform.value.scale * zoomRate).toFixed(3));
          }
          break;
        case "clockwise":
          transform.value.deg += rotateDeg;
          emit("rotate", transform.value.deg);
          break;
        case "anticlockwise":
          transform.value.deg -= rotateDeg;
          emit("rotate", transform.value.deg);
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    watch(activeIndex, (val) => {
      reset();
      emit("switch", val);
    });
    onMounted(() => {
      var _a2, _b;
      registerEventListener();
      (_b = (_a2 = wrapper.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    });
    expose({
      setActiveItem
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.teleported
      }, [
        createVNode(Transition, {
          name: "viewer-fade",
          appear: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              ref_key: "wrapper",
              ref: wrapper,
              tabindex: -1,
              class: normalizeClass(unref(ns).e("wrapper")),
              style: normalizeStyle({ zIndex: zIndex.value })
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(ns).e("mask")),
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"]))
              }, null, 2),
              createCommentVNode(" CLOSE "),
              createBaseVNode("span", {
                class: normalizeClass([unref(ns).e("btn"), unref(ns).e("close")]),
                onClick: hide
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 1
                })
              ], 2),
              createCommentVNode(" ARROW "),
              !unref(isSingle) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("span", {
                  class: normalizeClass(unref(arrowPrevKls)),
                  onClick: prev
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createBaseVNode("span", {
                  class: normalizeClass(unref(arrowNextKls)),
                  onClick: next
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2)
              ], 64)) : createCommentVNode("v-if", true),
              createCommentVNode(" ACTIONS "),
              createBaseVNode("div", {
                class: normalizeClass([unref(ns).e("btn"), unref(ns).e("actions")])
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(unref(ns).e("actions__inner"))
                }, [
                  createVNode(unref(ElIcon), {
                    onClick: _cache[1] || (_cache[1] = ($event) => handleActions("zoomOut"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(zoom_out_default))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[2] || (_cache[2] = ($event) => handleActions("zoomIn"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(zoom_in_default))
                    ]),
                    _: 1
                  }),
                  createBaseVNode("i", {
                    class: normalizeClass(unref(ns).e("actions__divider"))
                  }, null, 2),
                  createVNode(unref(ElIcon), { onClick: toggleMode }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(mode).icon)))
                    ]),
                    _: 1
                  }),
                  createBaseVNode("i", {
                    class: normalizeClass(unref(ns).e("actions__divider"))
                  }, null, 2),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[3] || (_cache[3] = ($event) => handleActions("anticlockwise"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(refresh_left_default))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[4] || (_cache[4] = ($event) => handleActions("clockwise"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(refresh_right_default))
                    ]),
                    _: 1
                  })
                ], 2)
              ], 2),
              createCommentVNode(" CANVAS "),
              createBaseVNode("div", {
                class: normalizeClass(unref(ns).e("canvas"))
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.urlList, (url, i) => {
                  return withDirectives((openBlock(), createElementBlock("img", {
                    ref_for: true,
                    ref: (el) => imgRefs.value[i] = el,
                    key: url,
                    src: url,
                    style: normalizeStyle(unref(imgStyle)),
                    class: normalizeClass(unref(ns).e("img")),
                    crossorigin: _ctx.crossorigin,
                    onLoad: handleImgLoad,
                    onError: handleImgError,
                    onMousedown: handleMouseDown
                  }, null, 46, _hoisted_1$d)), [
                    [vShow, i === activeIndex.value]
                  ]);
                }), 128))
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ], 6)
          ]),
          _: 3
        })
      ], 8, ["disabled"]);
    };
  }
});
var ImageViewer = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "image-viewer.vue"]]);
const ElImageViewer = withInstall(ImageViewer);
const imageProps = buildProps({
  hideOnClickModal: Boolean,
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  loading: {
    type: String,
    values: ["eager", "lazy"]
  },
  lazy: Boolean,
  scrollContainer: {
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  previewTeleported: Boolean,
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const imageEmits = {
  load: (evt) => evt instanceof Event,
  error: (evt) => evt instanceof Event,
  switch: (val) => isNumber(val),
  close: () => true,
  show: () => true
};
const _hoisted_1$c = ["src", "loading", "crossorigin"];
const _hoisted_2$8 = { key: 0 };
const __default__$9 = defineComponent({
  name: "ElImage",
  inheritAttrs: false
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: imageProps,
  emits: imageEmits,
  setup(__props, { emit }) {
    const props = __props;
    let prevOverflow = "";
    const { t } = useLocale();
    const ns = useNamespace("image");
    const rawAttrs = useAttrs();
    const attrs = useAttrs$1();
    const imageSrc = ref();
    const hasLoadError = ref(false);
    const isLoading = ref(true);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    const supportLoading = isClient && "loading" in HTMLImageElement.prototype;
    let stopScrollListener;
    let stopWheelListener;
    const imageKls = computed(() => [
      ns.e("inner"),
      preview.value && ns.e("preview"),
      isLoading.value && ns.is("loading")
    ]);
    const containerStyle = computed(() => rawAttrs.style);
    const imageStyle = computed(() => {
      const { fit } = props;
      if (isClient && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      const { previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0;
      }
      return previewIndex;
    });
    const isManual = computed(() => {
      if (props.loading === "eager")
        return false;
      return !supportLoading && props.loading === "lazy" || props.lazy;
    });
    const loadImage = () => {
      if (!isClient)
        return;
      isLoading.value = true;
      hasLoadError.value = false;
      imageSrc.value = props.src;
    };
    function handleLoad(event) {
      isLoading.value = false;
      hasLoadError.value = false;
      emit("load", event);
    }
    function handleError(event) {
      isLoading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200, true);
    async function addLazyLoadListener() {
      var _a;
      if (!isClient)
        return;
      await nextTick();
      const { scrollContainer } = props;
      if (isElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (isString(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
      } else if (container.value) {
        _scrollContainer.value = getScrollContainer(container.value);
      }
      if (_scrollContainer.value) {
        stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
        setTimeout(() => handleLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!isClient || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener == null ? void 0 : stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
      emit("show");
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(() => props.src, () => {
      if (isManual.value) {
        isLoading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onMounted(() => {
      if (isManual.value) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: normalizeClass([unref(ns).b(), _ctx.$attrs.class]),
        style: normalizeStyle(unref(containerStyle))
      }, [
        hasLoadError.value ? renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
          createBaseVNode("div", {
            class: normalizeClass(unref(ns).e("error"))
          }, toDisplayString(unref(t)("el.image.error")), 3)
        ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          imageSrc.value !== void 0 ? (openBlock(), createElementBlock("img", mergeProps({ key: 0 }, unref(attrs), {
            src: imageSrc.value,
            loading: _ctx.loading,
            style: unref(imageStyle),
            class: unref(imageKls),
            crossorigin: _ctx.crossorigin,
            onClick: clickHandler,
            onLoad: handleLoad,
            onError: handleError
          }), null, 16, _hoisted_1$c)) : createCommentVNode("v-if", true),
          isLoading.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(ns).e("wrapper"))
          }, [
            renderSlot(_ctx.$slots, "placeholder", {}, () => [
              createBaseVNode("div", {
                class: normalizeClass(unref(ns).e("placeholder"))
              }, null, 2)
            ])
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)),
        unref(preview) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          showViewer.value ? (openBlock(), createBlock(unref(ElImageViewer), {
            key: 0,
            "z-index": _ctx.zIndex,
            "initial-index": unref(imageIndex),
            infinite: _ctx.infinite,
            "zoom-rate": _ctx.zoomRate,
            "min-scale": _ctx.minScale,
            "max-scale": _ctx.maxScale,
            "url-list": _ctx.previewSrcList,
            "hide-on-click-modal": _ctx.hideOnClickModal,
            teleported: _ctx.previewTeleported,
            "close-on-press-escape": _ctx.closeOnPressEscape,
            onClose: closeViewer,
            onSwitch: switchViewer
          }, {
            default: withCtx(() => [
              _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
                renderSlot(_ctx.$slots, "viewer")
              ])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "url-list", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : createCommentVNode("v-if", true)
        ], 64)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Image = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "image.vue"]]);
const ElImage = withInstall(Image);
const elPaginationKey = Symbol("elPaginationKey");
const paginationPrevProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: iconPropType
  }
});
const paginationPrevEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1$b = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2$7 = { key: 0 };
const __default__$8 = defineComponent({
  name: "ElPaginationPrev"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: paginationPrevProps,
  emits: paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: unref(internalDisabled),
        "aria-label": _ctx.prevText || unref(t)("el.pagination.prev"),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2$7, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.prevIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$b);
    };
  }
});
var Prev = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "prev.vue"]]);
const paginationNextProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: iconPropType
  }
});
const _hoisted_1$a = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2$6 = { key: 0 };
const __default__$7 = defineComponent({
  name: "ElPaginationNext"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: paginationNextProps,
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: unref(internalDisabled),
        "aria-label": _ctx.nextText || unref(t)("el.pagination.next"),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$a);
    };
  }
});
var Next = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "next.vue"]]);
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const itemSelected = computed(() => {
    if (select.props.multiple) {
      return contains(select.props.modelValue, props.value);
    } else {
      return contains([select.props.modelValue], props.value);
    }
  });
  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject$1(props.value) ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject$1(props.value)) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.states.hoveringIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  const updateOption = (query) => {
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!isEqual(val, oldVal)) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && isObject$1(val) && isObject$1(oldVal) && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption
  };
}
const _sfc_main$f = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const id = useId();
    const containerKls = computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", unref(isDisabled)),
      ns.is("selected", unref(itemSelected)),
      ns.is("hovering", unref(hover))
    ]);
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption
    } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const key = vm.value;
      const { selected } = select.states;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      nextTick(() => {
        if (select.states.cachedOptions.get(key) === vm && !doesSelected) {
          select.states.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
const _hoisted_1$9 = ["id", "aria-disabled", "aria-selected"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    id: _ctx.id,
    class: normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 42, _hoisted_1$9)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$3], ["__file", "option.vue"]]);
const _sfc_main$e = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select.selectRef) == null ? void 0 : _a.offsetWidth}px`;
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select.selectRef, updateMinWidth);
    });
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.be("dropdown", "header"))
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$2], ["__file", "select-dropdown.vue"]]);
function useInput(handleInput) {
  const isComposing = ref(false);
  const handleCompositionStart = () => {
    isComposing.value = true;
  };
  const handleCompositionUpdate = (event) => {
    const text = event.target.value;
    const lastCharacter = text[text.length - 1] || "";
    isComposing.value = !isKorean(lastCharacter);
  };
  const handleCompositionEnd = (event) => {
    if (isComposing.value) {
      isComposing.value = false;
      if (isFunction(handleInput)) {
        handleInput(event);
      }
    }
  };
  return {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  };
}
const MINIMUM_INPUT_WIDTH = 11;
const useSelect = (props, emit) => {
  const { t } = useLocale();
  const contentId = useId();
  const nsSelect = useNamespace("select");
  const nsInput = useNamespace("input");
  const states = reactive({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: props.multiple ? [] : {},
    selectionWidth: 0,
    calculatorWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
    isBeforeHide: false
  });
  const selectRef = ref(null);
  const selectionRef = ref(null);
  const tooltipRef = ref(null);
  const tagTooltipRef = ref(null);
  const inputRef = ref(null);
  const calculatorRef = ref(null);
  const prefixRef = ref(null);
  const suffixRef = ref(null);
  const menuRef = ref(null);
  const tagMenuRef = ref(null);
  const collapseItemRef = ref(null);
  const scrollbarRef = ref(null);
  const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(inputRef, {
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true;
        states.menuVisibleOnFocus = true;
      }
    },
    beforeBlur(event) {
      var _a, _b;
      return ((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event));
    },
    afterBlur() {
      expanded.value = false;
      states.menuVisibleOnFocus = false;
    }
  });
  const expanded = ref(false);
  const hoverOption = ref();
  const { form, formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });
  const { valueOnClear, isEmptyValue } = useEmptyValues(props);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const hasModelValue = computed(() => {
    return props.multiple ? isArray$1(props.modelValue) && props.modelValue.length > 0 : !isEmptyValue(props.modelValue);
  });
  const showClose = computed(() => {
    return props.clearable && !selectDisabled.value && states.inputHovering && hasModelValue.value;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => nsSelect.is("reverse", iconComponent.value && expanded.value));
  const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
  const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && !states.inputValue && states.options.size === 0)
        return false;
      if (props.filterable && states.inputValue && states.options.size > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptionsCount = computed(() => optionsArray.value.filter((option) => option.visible).length);
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    states.optionValues.forEach((item) => {
      const index2 = list.findIndex((i) => i.value === item);
      if (index2 > -1) {
        newList.push(list[index2]);
      }
    });
    return newList.length >= list.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.inputValue;
    });
    return props.filterable && props.allowCreate && states.inputValue !== "" && !hasExistingOption;
  });
  const updateOptions = () => {
    if (props.filterable && isFunction(props.filterMethod))
      return;
    if (props.filterable && props.remote && isFunction(props.remoteMethod))
      return;
    optionsArray.value.forEach((option) => {
      var _a;
      (_a = option.updateOption) == null ? void 0 : _a.call(option, states.inputValue);
    });
  };
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && emptyText.value !== false;
    },
    set(val) {
      expanded.value = val;
    }
  });
  const shouldShowPlaceholder = computed(() => {
    if (isArray$1(props.modelValue)) {
      return props.modelValue.length === 0 && !states.inputValue;
    }
    return props.filterable ? !states.inputValue : true;
  });
  const currentPlaceholder = computed(() => {
    var _a;
    const _placeholder = (_a = props.placeholder) != null ? _a : t("el.select.placeholder");
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
        handleQueryChange("");
      }
    }
    setSelected();
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => expanded.value, (val) => {
    if (val) {
      handleQueryChange(states.inputValue);
    } else {
      states.inputValue = "";
      states.previousQuery = null;
      states.isBeforeHide = true;
    }
    emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a;
    if (!isClient)
      return;
    const inputs = ((_a = selectRef.value) == null ? void 0 : _a.querySelectorAll("input")) || [];
    if (!props.filterable && !props.defaultFirstOption && !isUndefined(props.modelValue) || !Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoveringIndex, (val) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  watchEffect(() => {
    if (states.isBeforeHide)
      return;
    updateOptions();
  });
  const handleQueryChange = (val) => {
    if (states.previousQuery === val) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      nextTick(checkDefaultFirstOption);
    } else {
      nextTick(updateHoveringIndex);
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoveringIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (isArray$1(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled;
          }
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    return newOption;
  };
  const updateHoveringIndex = () => {
    if (!props.multiple) {
      states.hoveringIndex = optionsArray.value.findIndex((item) => {
        return getValueKey(item) === getValueKey(states.selected);
      });
    } else {
      states.hoveringIndex = optionsArray.value.findIndex((item) => states.selected.some((selected) => getValueKey(selected) === getValueKey(item)));
    }
  };
  const resetSelectionWidth = () => {
    states.selectionWidth = selectionRef.value.getBoundingClientRect().width;
  };
  const resetCalculatorWidth = () => {
    states.calculatorWidth = calculatorRef.value.getBoundingClientRect().width;
  };
  const resetCollapseItemWidth = () => {
    states.collapseItemWidth = collapseItemRef.value.getBoundingClientRect().width;
  };
  const updateTooltip = () => {
    var _a, _b;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const updateTagTooltip = () => {
    var _a, _b;
    (_b = (_a = tagTooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    handleQueryChange(states.inputValue);
  };
  const onInput = (event) => {
    states.inputValue = event.target.value;
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const getLastNotDisabledIndex = (value) => findLastIndex(value, (it) => !states.disabledOptions.has(it));
  const deletePrevTag = (e) => {
    if (!props.multiple)
      return;
    if (e.code === EVENT_CODE.delete)
      return;
    if (e.target.value.length <= 0) {
      const value = props.modelValue.slice();
      const lastNotDisabledIndex = getLastNotDisabledIndex(value);
      if (lastNotDisabledIndex < 0)
        return;
      value.splice(lastNotDisabledIndex, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
  };
  const deleteTag = (event, tag) => {
    const index2 = states.selected.indexOf(tag);
    if (index2 > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index2, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", tag.value);
    }
    event.stopPropagation();
    focus();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : valueOnClear.value;
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoveringIndex = -1;
    expanded.value = false;
    emit("clear");
    focus();
  };
  const handleOptionSelect = (option) => {
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        handleQueryChange("");
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
      }
    } else {
      emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      expanded.value = false;
    }
    focus();
    if (expanded.value)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject$1(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index2 = -1;
    arr.some((item, i) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index2 = i;
        return true;
      }
      return false;
    });
    return index2;
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = isArray$1(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${nsSelect.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbarRef.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
    vm.disabled && states.disabledOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key);
    }
  };
  const {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useInput((e) => onInput(e));
  const popperRef = computed(() => {
    var _a, _b;
    return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
  });
  const handleMenuEnter = () => {
    states.isBeforeHide = false;
    nextTick(() => scrollToOption(states.selected));
  };
  const focus = () => {
    var _a;
    (_a = inputRef.value) == null ? void 0 : _a.focus();
  };
  const blur = () => {
    handleClickOutside();
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClickOutside = (event) => {
    expanded.value = false;
    if (isFocused.value) {
      const _event = new FocusEvent("focus", event);
      nextTick(() => handleBlur(_event));
    }
  };
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = "";
    } else {
      expanded.value = false;
    }
  };
  const toggleMenu = () => {
    if (selectDisabled.value)
      return;
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    } else {
      expanded.value = !expanded.value;
    }
  };
  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoveringIndex]) {
        handleOptionSelect(optionsArray.value[states.hoveringIndex]);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject$1(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const showTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(0, props.maxCollapseTags) : states.selected;
  });
  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(props.maxCollapseTags) : [];
  });
  const navigateOptions = (direction) => {
    if (!expanded.value) {
      expanded.value = true;
      return;
    }
    if (states.options.size === 0 || filteredOptionsCount.value === 0)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoveringIndex++;
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoveringIndex--;
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoveringIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const getGapWidth = () => {
    if (!selectionRef.value)
      return 0;
    const style = window.getComputedStyle(selectionRef.value);
    return Number.parseFloat(style.gap || "6px");
  };
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth();
    const maxWidth = collapseItemRef.value && props.maxCollapseTags === 1 ? states.selectionWidth - states.collapseItemWidth - gapWidth : states.selectionWidth;
    return { maxWidth: `${maxWidth}px` };
  });
  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` };
  });
  const inputStyle = computed(() => ({
    width: `${Math.max(states.calculatorWidth, MINIMUM_INPUT_WIDTH)}px`
  }));
  if (props.multiple && !isArray$1(props.modelValue)) {
    emit(UPDATE_MODEL_EVENT, []);
  }
  if (!props.multiple && isArray$1(props.modelValue)) {
    emit(UPDATE_MODEL_EVENT, "");
  }
  useResizeObserver(selectionRef, resetSelectionWidth);
  useResizeObserver(calculatorRef, resetCalculatorWidth);
  useResizeObserver(menuRef, updateTooltip);
  useResizeObserver(wrapperRef, updateTooltip);
  useResizeObserver(tagMenuRef, updateTagTooltip);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);
  onMounted(() => {
    setSelected();
  });
  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    resetCalculatorWidth,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    focus,
    blur,
    handleBlur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,
    tagStyle,
    collapseTagStyle,
    inputStyle,
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    calculatorRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  setup(_, { slots }) {
    const select = inject(selectKey);
    let cachedValueList = [];
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const valueList = [];
      function filterOptions(children2) {
        if (!isArray$1(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString(item.children) && !isArray$1(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            valueList.push((_d = item.props) == null ? void 0 : _d.value);
          } else if (isArray$1(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList;
        if (select) {
          select.states.optionValues = valueList;
        }
      }
      return children;
    };
  }
});
const SelectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: arrow_down_default
  },
  tagType: { ...tagProps.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: Boolean,
  placement: {
    type: definePropType(String),
    values: Ee,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
const COMPONENT_NAME = "ElSelect";
const _sfc_main$d = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const API = useSelect(props, emit);
    provide(selectKey, reactive({
      props,
      states: API.states,
      optionsArray: API.optionsArray,
      handleOptionSelect: API.handleOptionSelect,
      onOptionCreate: API.onOptionCreate,
      onOptionDestroy: API.onOptionDestroy,
      selectRef: API.selectRef,
      setSelected: API.setSelected
    }));
    return {
      ...API
    };
  }
});
const _hoisted_1$8 = ["id", "disabled", "autocomplete", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"];
const _hoisted_2$5 = ["textContent"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass([_ctx.nsSelect.b(), _ctx.nsSelect.m(_ctx.selectSize)]),
    onMouseenter: _cache[16] || (_cache[16] = ($event) => _ctx.states.inputHovering = true),
    onMouseleave: _cache[17] || (_cache[17] = ($event) => _ctx.states.inputHovering = false),
    onClick: _cache[18] || (_cache[18] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["prevent", "stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropdownMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": _ctx.fallbackPlacements,
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onBeforeShow: _ctx.handleMenuEnter,
      onHide: _cache[15] || (_cache[15] = ($event) => _ctx.states.isBeforeHide = false)
    }, {
      default: withCtx(() => {
        var _a;
        return [
          createBaseVNode("div", {
            ref: "wrapperRef",
            class: normalizeClass([
              _ctx.nsSelect.e("wrapper"),
              _ctx.nsSelect.is("focused", _ctx.isFocused),
              _ctx.nsSelect.is("hovering", _ctx.states.inputHovering),
              _ctx.nsSelect.is("filterable", _ctx.filterable),
              _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
            ])
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "prefixRef",
              class: normalizeClass(_ctx.nsSelect.e("prefix"))
            }, [
              renderSlot(_ctx.$slots, "prefix")
            ], 2)) : createCommentVNode("v-if", true),
            createBaseVNode("div", {
              ref: "selectionRef",
              class: normalizeClass([
                _ctx.nsSelect.e("selection"),
                _ctx.nsSelect.is("near", _ctx.multiple && !_ctx.$slots.prefix && !!_ctx.states.selected.length)
              ])
            }, [
              _ctx.multiple ? renderSlot(_ctx.$slots, "tag", { key: 0 }, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: _ctx.getValueKey(item),
                    class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                  }, [
                    createVNode(_component_el_tag, {
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      style: normalizeStyle(_ctx.tagStyle),
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                        }, toDisplayString(item.currentLabel), 3)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "type", "style", "onClose"])
                  ], 2);
                }), 128)),
                _ctx.collapseTags && _ctx.states.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tooltip, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: _ctx.dropdownMenuVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: _ctx.effect,
                  placement: "bottom",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      ref: "collapseItemRef",
                      class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                    }, [
                      createVNode(_component_el_tag, {
                        closable: false,
                        size: _ctx.collapseTagSize,
                        type: _ctx.tagType,
                        "disable-transitions": "",
                        style: normalizeStyle(_ctx.collapseTagStyle)
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, " + " + toDisplayString(_ctx.states.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "style"])
                    ], 2)
                  ]),
                  content: withCtx(() => [
                    createBaseVNode("div", {
                      ref: "tagMenuRef",
                      class: normalizeClass(_ctx.nsSelect.e("selection"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: _ctx.getValueKey(item),
                          class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                        }, [
                          createVNode(_component_el_tag, {
                            class: "in-tooltip",
                            closable: !_ctx.selectDisabled && !item.isDisabled,
                            size: _ctx.collapseTagSize,
                            type: _ctx.tagType,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag($event, item)
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("span", {
                                class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                              }, toDisplayString(item.currentLabel), 3)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "type", "onClose"])
                        ], 2);
                      }), 128))
                    ], 2)
                  ]),
                  _: 1
                }, 8, ["disabled", "effect", "teleported"])) : createCommentVNode("v-if", true)
              ]) : createCommentVNode("v-if", true),
              !_ctx.selectDisabled ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("input-wrapper"),
                  _ctx.nsSelect.is("hidden", !_ctx.filterable)
                ])
              }, [
                withDirectives(createBaseVNode("input", {
                  id: _ctx.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.states.inputValue = $event),
                  type: "text",
                  class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
                  disabled: _ctx.selectDisabled,
                  autocomplete: _ctx.autocomplete,
                  style: normalizeStyle(_ctx.inputStyle),
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((_a = _ctx.hoverOption) == null ? void 0 : _a.id) || "",
                  "aria-controls": _ctx.contentId,
                  "aria-expanded": _ctx.dropdownMenuVisible,
                  "aria-label": _ctx.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
                  onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
                  onKeydown: [
                    _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                    _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                    _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => _ctx.handleEsc && _ctx.handleEsc(...args), ["stop", "prevent"]), ["esc"])),
                    _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                    _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["stop"]), ["delete"]))
                  ],
                  onCompositionstart: _cache[8] || (_cache[8] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                  onCompositionupdate: _cache[9] || (_cache[9] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                  onCompositionend: _cache[10] || (_cache[10] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                  onInput: _cache[11] || (_cache[11] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                  onClick: _cache[12] || (_cache[12] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
                }, null, 46, _hoisted_1$8), [
                  [vModelText, _ctx.states.inputValue]
                ]),
                _ctx.filterable ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: normalizeClass(_ctx.nsSelect.e("input-calculator")),
                  textContent: toDisplayString(_ctx.states.inputValue)
                }, null, 10, _hoisted_2$5)) : createCommentVNode("v-if", true)
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("placeholder"),
                  _ctx.nsSelect.is("transparent", !_ctx.hasModelValue || _ctx.expanded && !_ctx.states.inputValue)
                ])
              }, [
                createBaseVNode("span", null, toDisplayString(_ctx.currentPlaceholder), 1)
              ], 2)) : createCommentVNode("v-if", true)
            ], 2),
            createBaseVNode("div", {
              ref: "suffixRef",
              class: normalizeClass(_ctx.nsSelect.e("suffix"))
            }, [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
              _ctx.validateState && _ctx.validateIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 2,
                class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)
        ];
      }),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, { ref: "menuRef" }, {
          default: withCtx(() => [
            _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "header")),
              onClick: _cache[13] || (_cache[13] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "header")
            ], 2)) : createCommentVNode("v-if", true),
            withDirectives(createVNode(_component_el_scrollbar, {
              id: _ctx.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([_ctx.nsSelect.is("empty", _ctx.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": _ctx.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.states.inputValue,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [vShow, _ctx.states.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.$slots.loading && _ctx.loading ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "loading"))
            }, [
              renderSlot(_ctx.$slots, "loading")
            ], 2)) : _ctx.loading || _ctx.filteredOptionsCount === 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
            }, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createBaseVNode("span", null, toDisplayString(_ctx.emptyText), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "footer")),
              onClick: _cache[14] || (_cache[14] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "footer")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "onBeforeShow"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$1], ["__file", "select.vue"]]);
const _sfc_main$c = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const groupRef = ref(null);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const visible = computed(() => children.value.some((option) => option.visible === true));
    const isOption = (node) => {
      var _a, _b;
      return ((_a = node.type) == null ? void 0 : _a.name) === "ElOption" && !!((_b = node.component) == null ? void 0 : _b.proxy);
    };
    const flattedChildren = (node) => {
      const Nodes = castArray(node);
      const children2 = [];
      Nodes.forEach((child) => {
        var _a, _b;
        if (isOption(child)) {
          children2.push(child.component.proxy);
        } else if ((_a = child.children) == null ? void 0 : _a.length) {
          children2.push(...flattedChildren(child.children));
        } else if ((_b = child.component) == null ? void 0 : _b.subTree) {
          children2.push(...flattedChildren(child.component.subTree));
        }
      });
      return children2;
    };
    const updateChildren = () => {
      children.value = flattedChildren(instance.subTree);
    };
    onMounted(() => {
      updateChildren();
    });
    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return {
      groupRef,
      visible,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    ref: "groupRef",
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createBaseVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createBaseVNode("li", null, [
      createBaseVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render], ["__file", "option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const usePagination = () => inject(elPaginationKey, {});
const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: componentSizes
  }
});
const __default__$6 = defineComponent({
  name: "ElPaginationSizes"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const pagination = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPageSizes = computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination.handleSizeChange) == null ? void 0 : _a.call(pagination, Number(val));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("sizes"))
      }, [
        createVNode(unref(ElSelect), {
          "model-value": innerPageSize.value,
          disabled: _ctx.disabled,
          "popper-class": _ctx.popperClass,
          size: _ctx.size,
          teleported: _ctx.teleported,
          "validate-event": false,
          onChange: handleChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(innerPageSizes), (item) => {
              return openBlock(), createBlock(unref(ElOption), {
                key: item,
                value: item,
                label: item + unref(t)("el.pagination.pagesize")
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
      ], 2);
    };
  }
});
var Sizes = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "sizes.vue"]]);
const paginationJumperProps = buildProps({
  size: {
    type: String,
    values: componentSizes
  }
});
const _hoisted_1$7 = ["disabled"];
const __default__$5 = defineComponent({
  name: "ElPaginationJumper"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: paginationJumperProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref();
    const innerValue = computed(() => {
      var _a;
      return (_a = userInput.value) != null ? _a : currentPage == null ? void 0 : currentPage.value;
    });
    function handleInput(val) {
      userInput.value = val ? +val : "";
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(val);
      userInput.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("jump")),
        disabled: unref(disabled)
      }, [
        createBaseVNode("span", {
          class: normalizeClass([unref(ns).e("goto")])
        }, toDisplayString(unref(t)("el.pagination.goto")), 3),
        createVNode(unref(ElInput), {
          size: _ctx.size,
          class: normalizeClass([unref(ns).e("editor"), unref(ns).is("in-pagination")]),
          min: 1,
          max: unref(pageCount),
          disabled: unref(disabled),
          "model-value": unref(innerValue),
          "validate-event": false,
          label: unref(t)("el.pagination.page"),
          type: "number",
          "onUpdate:modelValue": handleInput,
          onChange: handleChange
        }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
        createBaseVNode("span", {
          class: normalizeClass([unref(ns).e("classifier")])
        }, toDisplayString(unref(t)("el.pagination.pageClassifier")), 3)
      ], 10, _hoisted_1$7);
    };
  }
});
var Jumper = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "jumper.vue"]]);
const paginationTotalProps = buildProps({
  total: {
    type: Number,
    default: 1e3
  }
});
const _hoisted_1$6 = ["disabled"];
const __default__$4 = defineComponent({
  name: "ElPaginationTotal"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: paginationTotalProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { disabled } = usePagination();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("total")),
        disabled: unref(disabled)
      }, toDisplayString(unref(t)("el.pagination.total", {
        total: _ctx.total
      })), 11, _hoisted_1$6);
    };
  }
});
var Total = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "total.vue"]]);
const paginationPagerProps = buildProps({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
});
const _hoisted_1$5 = ["onKeyup"];
const _hoisted_2$4 = ["aria-current", "aria-label", "tabindex"];
const _hoisted_3$2 = ["tabindex", "aria-label"];
const _hoisted_4$2 = ["aria-current", "aria-label", "tabindex"];
const _hoisted_5$2 = ["tabindex", "aria-label"];
const _hoisted_6$2 = ["aria-current", "aria-label", "tabindex"];
const __default__$3 = defineComponent({
  name: "ElPaginationPager"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: paginationPagerProps,
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const nsPager = useNamespace("pager");
    const nsIcon = useNamespace("icon");
    const { t } = useLocale();
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quickPrevHover = ref(false);
    const quickNextHover = ref(false);
    const quickPrevFocus = ref(false);
    const quickNextFocus = ref(false);
    const pagers = computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    const prevMoreKls = computed(() => [
      "more",
      "btn-quickprev",
      nsIcon.b(),
      nsPager.is("disabled", props.disabled)
    ]);
    const nextMoreKls = computed(() => [
      "more",
      "btn-quicknext",
      nsIcon.b(),
      nsPager.is("disabled", props.disabled)
    ]);
    const tabindex = computed(() => props.disabled ? -1 : 0);
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onMouseEnter(forward = false) {
      if (props.disabled)
        return;
      if (forward) {
        quickPrevHover.value = true;
      } else {
        quickNextHover.value = true;
      }
    }
    function onFocus(forward = false) {
      if (forward) {
        quickPrevFocus.value = true;
      } else {
        quickNextFocus.value = true;
      }
    }
    function onEnter(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit("change", newPage);
        }
      } else if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("more")) {
        onPagerClick(e);
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(unref(nsPager).b()),
        onClick: onPagerClick,
        onKeyup: withKeys(onEnter, ["enter"])
      }, [
        _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
          key: 0,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === 1),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === 1,
          "aria-label": unref(t)("el.pagination.currentPage", { pager: 1 }),
          tabindex: unref(tabindex)
        }, " 1 ", 10, _hoisted_2$4)) : createCommentVNode("v-if", true),
        showPrevMore.value ? (openBlock(), createElementBlock("li", {
          key: 1,
          class: normalizeClass(unref(prevMoreKls)),
          tabindex: unref(tabindex),
          "aria-label": unref(t)("el.pagination.prevPages", { pager: _ctx.pagerCount - 2 }),
          onMouseenter: _cache[0] || (_cache[0] = ($event) => onMouseEnter(true)),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => quickPrevHover.value = false),
          onFocus: _cache[2] || (_cache[2] = ($event) => onFocus(true)),
          onBlur: _cache[3] || (_cache[3] = ($event) => quickPrevFocus.value = false)
        }, [
          (quickPrevHover.value || quickPrevFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_left_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_3$2)) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagers), (pager) => {
          return openBlock(), createElementBlock("li", {
            key: pager,
            class: normalizeClass([[
              unref(nsPager).is("active", _ctx.currentPage === pager),
              unref(nsPager).is("disabled", _ctx.disabled)
            ], "number"]),
            "aria-current": _ctx.currentPage === pager,
            "aria-label": unref(t)("el.pagination.currentPage", { pager }),
            tabindex: unref(tabindex)
          }, toDisplayString(pager), 11, _hoisted_4$2);
        }), 128)),
        showNextMore.value ? (openBlock(), createElementBlock("li", {
          key: 2,
          class: normalizeClass(unref(nextMoreKls)),
          tabindex: unref(tabindex),
          "aria-label": unref(t)("el.pagination.nextPages", { pager: _ctx.pagerCount - 2 }),
          onMouseenter: _cache[4] || (_cache[4] = ($event) => onMouseEnter()),
          onMouseleave: _cache[5] || (_cache[5] = ($event) => quickNextHover.value = false),
          onFocus: _cache[6] || (_cache[6] = ($event) => onFocus()),
          onBlur: _cache[7] || (_cache[7] = ($event) => quickNextFocus.value = false)
        }, [
          (quickNextHover.value || quickNextFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_right_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_5$2)) : createCommentVNode("v-if", true),
        _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
          key: 3,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === _ctx.pageCount),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === _ctx.pageCount,
          "aria-label": unref(t)("el.pagination.currentPage", { pager: _ctx.pageCount }),
          tabindex: unref(tabindex)
        }, toDisplayString(_ctx.pageCount), 11, _hoisted_6$2)) : createCommentVNode("v-if", true)
      ], 42, _hoisted_1$5);
    };
  }
});
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "pager.vue"]]);
const isAbsent = (v) => typeof v !== "number";
const paginationProps = buildProps({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (value) => {
      return isNumber(value) && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1;
    },
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: iconPropType,
    default: () => arrow_left_default
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: iconPropType,
    default: () => arrow_right_default
  },
  teleported: {
    type: Boolean,
    default: true
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
});
const paginationEmits = {
  "update:current-page": (val) => isNumber(val),
  "update:page-size": (val) => isNumber(val),
  "size-change": (val) => isNumber(val),
  change: (currentPage, pageSize) => isNumber(currentPage) && isNumber(pageSize),
  "current-change": (val) => isNumber(val),
  "prev-click": (val) => isNumber(val),
  "next-click": (val) => isNumber(val)
};
const componentName = "ElPagination";
var Pagination$1 = defineComponent({
  name: componentName,
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit, slots }) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
    const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v);
          emit("size-change", v);
        }
      }
    });
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = computed({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v) {
        let newCurrentPage = v;
        if (v < 1) {
          newCurrentPage = 1;
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val)
        currentPageBridge.value = val;
    });
    watch([currentPageBridge, pageSizeBridge], (value) => {
      emit("change", ...value);
    }, { flush: "post" });
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    function addClass(element, cls) {
      if (element) {
        if (!element.props) {
          element.props = {};
        }
        element.props.class = [element.props.class, cls].join(" ");
      }
    }
    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      var _a, _b;
      if (!assertValidUsage.value) {
        debugWarn(componentName, t("el.pagination.deprecationWarning"));
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h("div", { class: ns.e("rightwrapper") }, rightWrapperChildren);
      const TEMPLATE_MAP = {
        prev: h(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev
        }),
        jumper: h(Jumper, {
          size: props.small ? "small" : "default"
        }),
        pager: h(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next
        }),
        sizes: h(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          disabled: props.disabled,
          teleported: props.teleported,
          size: props.small ? "small" : "default"
        }),
        slot: (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : null,
        total: h(Total, { total: isAbsent(props.total) ? 0 : props.total })
      };
      const components = props.layout.split(",").map((item) => item.trim());
      let haveRightWrapper = false;
      components.forEach((c) => {
        if (c === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c]);
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c]);
        }
      });
      addClass(rootChildren[0], ns.is("first"));
      addClass(rootChildren[rootChildren.length - 1], ns.is("last"));
      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        addClass(rightWrapperChildren[0], ns.is("first"));
        addClass(rightWrapperChildren[rightWrapperChildren.length - 1], ns.is("last"));
        rootChildren.push(rightWrapperRoot);
      }
      return h("div", {
        class: [
          ns.b(),
          ns.is("background", props.background),
          {
            [ns.m("small")]: props.small
          }
        ]
      }, rootChildren);
    };
  }
});
const ElPagination = withInstall(Pagination$1);
const skeletonProps = buildProps({
  animated: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: true
  },
  throttle: {
    type: Number
  }
});
const skeletonItemProps = buildProps({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
});
const __default__$2 = defineComponent({
  name: "ElSkeletonItem"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: skeletonItemProps,
  setup(__props) {
    const ns = useNamespace("skeleton");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).e("item"), unref(ns).e(_ctx.variant)])
      }, [
        _ctx.variant === "image" ? (openBlock(), createBlock(unref(picture_filled_default), { key: 0 })) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var SkeletonItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "skeleton-item.vue"]]);
const __default__$1 = defineComponent({
  name: "ElSkeleton"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: skeletonProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("skeleton");
    const uiLoading = useThrottleRender(toRef(props, "loading"), props.throttle);
    expose({
      uiLoading
    });
    return (_ctx, _cache) => {
      return unref(uiLoading) ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        class: [unref(ns).b(), unref(ns).is("animated", _ctx.animated)]
      }, _ctx.$attrs), [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [
            _ctx.loading ? renderSlot(_ctx.$slots, "template", { key: i }, () => [
              createVNode(SkeletonItem, {
                class: normalizeClass(unref(ns).is("first")),
                variant: "p"
              }, null, 8, ["class"]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (item) => {
                return openBlock(), createBlock(SkeletonItem, {
                  key: item,
                  class: normalizeClass([
                    unref(ns).e("paragraph"),
                    unref(ns).is("last", item === _ctx.rows && _ctx.rows > 1)
                  ]),
                  variant: "p"
                }, null, 8, ["class"]);
              }), 128))
            ]) : createCommentVNode("v-if", true)
          ], 64);
        }), 128))
      ], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
    };
  }
});
var Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "skeleton.vue"]]);
const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem
});
withNoopInstall(SkeletonItem);
const _hoisted_1$4 = { class: "article-item" };
const _hoisted_2$3 = { class: "article-item__box" };
const _hoisted_3$1 = { class: "article-item__info-wrap" };
const _hoisted_4$1 = { class: "article-item__title" };
const _hoisted_5$1 = { class: "article-item__short-details" };
const _hoisted_6$1 = { class: "article-item__tips-d" };
const _hoisted_7$1 = { class: "article-item__tips-d" };
const _hoisted_8$1 = { class: "article-item__info-img" };
const _hoisted_9$1 = { class: "article-item__tips-d" };
const _hoisted_10$1 = { class: "article-item__tips-d" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { pageTypeInfo } = useFetchState();
    const router = useRouter();
    const hanldeToDetail = (item2) => {
      const { article_id: id } = item2;
      console.log("id", id, item2);
      router.push({
        path: "/detail",
        query: {
          id
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_el_skeleton = ElSkeleton;
      return openBlock(), createElementBlock("li", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$3, [
          unref(pageTypeInfo).pageLoading ? (openBlock(), createBlock(_component_el_skeleton, {
            key: 0,
            loading: unref(pageTypeInfo).pageLoading,
            style: { "height": "100%" },
            animated: ""
          }, null, 8, ["loading"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("div", {
              class: "article-item__mobile-title",
              onClick: _cache[0] || (_cache[0] = ($event) => hanldeToDetail(__props.item))
            }, toDisplayString(__props.item.article_title), 1),
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("div", {
                class: "article-item__info-desc",
                onClick: _cache[2] || (_cache[2] = ($event) => hanldeToDetail(__props.item))
              }, [
                createBaseVNode("div", _hoisted_4$1, toDisplayString(__props.item.article_title), 1),
                createBaseVNode("div", _hoisted_5$1, toDisplayString(__props.item.article_content_preview), 1),
                createBaseVNode("div", {
                  class: "article-item__tips",
                  onClick: _cache[1] || (_cache[1] = ($event) => hanldeToDetail(__props.item))
                }, [
                  createBaseVNode("span", _hoisted_6$1, "发布:" + toDisplayString(unref(getNormalTime)(__props.item.create_time)), 1),
                  createBaseVNode("span", _hoisted_7$1, "更新: " + toDisplayString(__props.item.update_time ? unref(getNormalTime)(__props.item.update_time) : " -"), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_8$1, [
                __props.item.article_cover ? (openBlock(), createBlock(unref(ElImage), {
                  key: 0,
                  src: `${__props.item.article_cover}?imageView2/w/500/h/500`,
                  fit: "cover",
                  "preview-src-list": [__props.item.article_cover],
                  class: "img-el",
                  onClick: _cache[3] || (_cache[3] = withModifiers(() => {
                  }, ["stop"]))
                }, null, 8, ["src", "preview-src-list"])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", {
              class: "article-item__mobile-tips",
              onClick: _cache[4] || (_cache[4] = ($event) => hanldeToDetail(__props.item))
            }, [
              createBaseVNode("span", _hoisted_9$1, "发布:" + toDisplayString(unref(getNormalTime)(__props.item.create_time)), 1),
              createBaseVNode("span", _hoisted_10$1, "更新:" + toDisplayString(__props.item.update_time ? unref(getNormalTime)(__props.item.update_time) : " -"), 1)
            ])
          ], 64))
        ])
      ]);
    };
  }
});
const ArticleItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-0af52ccc"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 0
      //数据总数
    },
    pagerCount: {
      type: Number,
      default: 5
      //如果页数很多大概展示的页码
    },
    layout: {
      type: String,
      default: "total,sizes, prev, pager, next, jumper, ->, slot"
    },
    current: {
      type: Number,
      default: 1
      //指定跳转到多少页
    },
    size: {
      type: Number,
      default: 10
      //每页展示的条数，根据自己实际，且会带入请求
    }
  },
  emits: ["paginationCb"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    let page = reactive({
      size: props.size,
      current: props.current
    });
    const emit = __emit;
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };
    const currentChange = async (val) => {
      page.current = val;
      await emit("paginationCb", page);
      scrollTop();
    };
    const prev = async (val) => {
      page.current = val - 1;
      await emit("paginationCb", page);
      scrollTop();
    };
    const next = async (val) => {
      page.current = val + 1;
      await emit("paginationCb", page);
      scrollTop();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPagination), {
        class: "pagination",
        background: "",
        layout: __props.layout,
        "pager-count": __props.pagerCount,
        "page-count": Math.ceil(__props.total / __props.size),
        "page-size": __props.size,
        total: __props.total,
        currentPage: __props.current,
        onCurrentChange: currentChange,
        onPrevClick: prev,
        onNextClick: next
      }, null, 8, ["layout", "pager-count", "page-count", "page-size", "total", "currentPage"]);
    };
  }
});
const Pagination = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-5e69f90d"]]);
const _hoisted_1$3 = { class: "center-content" };
const _hoisted_2$2 = { class: "center-content__list" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ContentList",
  setup(__props) {
    const route = useRoute();
    const fetchState = useFetchState();
    const { getArticleList, setPageInfo, pageTypeInfo } = fetchState;
    watch(
      () => route.fullPath,
      (newVal) => {
        const page = 1;
        const linkItem = linkList.find((item) => item.path === newVal);
        if (!linkItem)
          return;
        setPageInfo(page, linkItem.id);
        getArticleList(linkItem.id, page);
      },
      { immediate: true }
    );
    const paginationCb = (page) => {
      setPageInfo(page.current, fetchState.pageTypeInfo.typeId);
      if (page.current === 1)
        return;
      getArticleList(fetchState.pageTypeInfo.typeId, page.current);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("ul", _hoisted_2$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(fetchState).showArticleList, (item) => {
            return openBlock(), createBlock(ArticleItem, {
              key: item.article_id,
              item
            }, null, 8, ["item"]);
          }), 128))
        ]),
        createVNode(Pagination, {
          "current-page": unref(pageTypeInfo).page,
          onPaginationCb: paginationCb,
          total: unref(fetchState).currentPageTotal,
          pagerCount: 5,
          layout: "prev, pager, next",
          pageSizes: [10, 20]
        }, null, 8, ["current-page", "total"])
      ]);
    };
  }
});
const ContentList = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-c72d916f"]]);
const _withScopeId = (n) => (pushScopeId("data-v-2a390d82"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "info-data" };
const _hoisted_2$1 = { class: "info-data__items" };
const _hoisted_3 = { class: "info-data__item" };
const _hoisted_4 = { class: "info-data__val" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "info-data__label" }, "文章数", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "split" }, null, -1));
const _hoisted_7 = { class: "info-data__item" };
const _hoisted_8 = { class: "info-data__val" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "info-data__label" }, "本月更新", -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "split" }, null, -1));
const _hoisted_11 = { class: "info-data__item" };
const _hoisted_12 = { class: "info-data__val" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "info-data__label" }, "本周更新", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const countInfo = ref({
      total: 0,
      month: 0,
      week: 0
    });
    onMounted(async () => {
      const { code, data } = await service.getArticleCountInfo();
      if (code !== 200)
        return;
      countInfo.value = {
        total: data.total || 0,
        month: data.month || 0,
        week: data.week || 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("ul", _hoisted_2$1, [
          createBaseVNode("li", _hoisted_3, [
            createBaseVNode("span", _hoisted_4, toDisplayString(countInfo.value.total), 1),
            _hoisted_5
          ]),
          _hoisted_6,
          createBaseVNode("li", _hoisted_7, [
            createBaseVNode("span", _hoisted_8, toDisplayString(countInfo.value.month ? `+${countInfo.value.month}` : 0), 1),
            _hoisted_9
          ]),
          _hoisted_10,
          createBaseVNode("li", _hoisted_11, [
            createBaseVNode("span", _hoisted_12, toDisplayString(countInfo.value.week ? `+${countInfo.value.week}` : 0), 1),
            _hoisted_13
          ])
        ])
      ]);
    };
  }
});
const DateInfo = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-2a390d82"]]);
const _hoisted_1$1 = { class: "info-wrap" };
const _hoisted_2 = { class: "info" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogInfos",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(DateInfo),
          createVNode(Selected)
        ])
      ]);
    };
  }
});
const BlogInfos = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-90ea81df"]]);
const _hoisted_1 = { class: "content" };
const __default__ = defineComponent({
  name: "home"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(ContentList),
        createVNode(BlogInfos)
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-f60adeed"]]);
export {
  index as default
};
