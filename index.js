/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ReactIs from 'react-is';
import factoryWithTypeCheckers from './factoryWithTypeCheckers'

// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
var throwOnDirectAccess = true;

const ReactPropTypes = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);

export default ReactPropTypes

export const array = ReactPropTypes.array
export const bool = ReactPropTypes.bool
export const func = ReactPropTypes.func
export const number = ReactPropTypes.number
export const object = ReactPropTypes.object
export const string = ReactPropTypes.string
export const symbol = ReactPropTypes.symbol

export const any = ReactPropTypes.any
export const arrayOf = ReactPropTypes.arrayOf
export const element = ReactPropTypes.element
export const elementType = ReactPropTypes.elementType
export const instanceOf = ReactPropTypes.instanceOf
export const node = ReactPropTypes.node
export const objectOf = ReactPropTypes.objectOf
export const oneOf = ReactPropTypes.oneOf
export const oneOfType = ReactPropTypes.oneOfType
export const shape = ReactPropTypes.shape
export const exact = ReactPropTypes.exact

export const checkPropTypes = ReactPropTypes.checkPropTypes
export const resetWarningCache = ReactPropTypes.resetWarningCache

export const PropTypes = ReactPropTypes.PropTypes
