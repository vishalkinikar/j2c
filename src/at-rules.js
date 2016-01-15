import {type, ARRAY, emptyArray} from './helpers'
import {sheet} from './sheet'

var findClass = /()(?::global\(\s*(\.[-\w]+)\s*\)|(\.)([-\w]+))/g

export function at(k, v, buf, prefix, rawPrefix, vendors, local, ns){
  var kk
  if (/^@(?:namespace|import|charset)$/.test(k)) {
    if(type.call(v) == ARRAY){
      for (kk = 0; kk < v.length; kk++) {
        buf.push(k + ' ' + v[kk] + ';')
      }
    } else {
      buf.push(k + ' ' + v + ';')
    }
  } else if (/^@keyframes /.test(k)) {
    k = local ? k.replace(
      // generated by script/regexps.js
      /( )(?::global\(\s*([-\w]+)\s*\)|()([-\w]+))/,
      ns.l
    ) : k
    // add a @-webkit-keyframes block too.

    buf.push('@-webkit-' + k.slice(1) + ' {')
    sheet(v, buf, '', '', ['webkit'])
    buf.push('}')

    buf.push(k + ' {')
    sheet(v, buf, '', '', vendors, local, ns)
    buf.push('}')

  } else if (/^@extends?$/.test(k)) {

    /*eslint-disable no-cond-assign*/
    // pick the last class to be extended
    while (kk = findClass.exec(rawPrefix)) k = kk[4]
    /*eslint-enable no-cond-assign*/
    if (k == null || !local) {
      // we're in a @global{} block
      buf.push('@-error-cannot-extend-in-global-context ' + JSON.stringify(rawPrefix) +';')
      return
    } else if (/^@extends?$/.test(k)) {
      // no class in the selector
      buf.push('@-error-no-class-to-extend-in ' + JSON.stringify(rawPrefix) +';')
      return
    }
    ns.e(
      type.call(v) == ARRAY ? v.map(function (parent) {
        return parent.replace(/()(?::global\(\s*(\.[-\w]+)\s*\)|()\.([-\w]+))/, ns.l)
      }).join(' ') : v.replace(/()(?::global\(\s*(\.[-\w]+)\s*\)|()\.([-\w]+))/, ns.l),
      k
    )

  } else if (/^@(?:font-face$|viewport$|page )/.test(k)) {
    sheet(v, buf, k, k, emptyArray)

  } else if (/^@global$/.test(k)) {
    sheet(v, buf, prefix, rawPrefix, vendors, 0, ns)

  } else if (/^@local$/.test(k)) {
    sheet(v, buf, prefix, rawPrefix, vendors, 1, ns)

  } else if (/^@(?:media |supports |document )./.test(k)) {
    buf.push(k + ' {')
    sheet(v, buf, prefix, rawPrefix, vendors, local, ns)
    buf.push('}')

  } else {
    buf.push('@-error-unsupported-at-rule ' + JSON.stringify(k) + ';')
  }
}