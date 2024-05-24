import functionUtil from './functionUtil/index';
import globalUtil from './globalUtil/index';
import typeUtil from './typeUtil/index';

export { createOverload } from './functionUtil/createOverload';
export { isEmpty } from './globalUtil/isEmpty';
export { isInstance } from './globalUtil/isInstance';
export { isNotEmpty } from './globalUtil/isNotEmpty';
export { is } from './typeUtil/is';
export { isArguments } from './typeUtil/isArguments';
export { isArray } from './typeUtil/isArray';
export { isBoolean } from './typeUtil/isBoolean';
export { isDate } from './typeUtil/isDate';
export { isError } from './typeUtil/isError';
export { isFunction } from './typeUtil/isFunction';
export { isNull } from './typeUtil/isNull';
export { isNumber } from './typeUtil/isNumber';
export { isObject } from './typeUtil/isObject';
export { isRegExp } from './typeUtil/isRegExp';
export { isString } from './typeUtil/isString';
export { isUndefined } from './typeUtil/isUndefined';

export default {
functionUtil,
globalUtil,
typeUtil
};