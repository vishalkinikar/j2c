define('j2c', function(){return (function () {
  var
    OBJECT = "[object Object]",
    STRING = "[object String]",
    ARRAY =  "[object Array]",
    type = inline.call.bind(({}).toString),
    default_root = ".j2c_" + (Math.random() * 1e9 | 0) + "_",
    counter = 0;

  function _vendorify(prop, buf, vendors, indent) {
    vendors.forEach(function (v) {
      buf.push(
        /*/-INDENT-/*/indent + /*/-INDENT-/*/
        "-" + v + "-" + prop
      );
    })
    buf.push(
      /*/-INDENT-/*/indent + /*/-INDENT-/*/
      prop
    )
  }

  function _O(k, v, o) {
    o = {}
    o[k] = v
    return o
  }

  function inline(o) {
    var buf = [];
    _declarations(o, buf, "", m.vendors, "");
    return buf.join("" /*/-INDENT-/*/ || "\n" /*/-INDENT-/*/);
  }

  function _declarations(o, buf, pfx, vendors/*/-INDENT-/*/, indent /*/-INDENT-/*//*var*/, k, t, v) {
    for (k in o) {
      v = o[k];
      t = type(v);
      switch (t) {
      case ARRAY:
        v.forEach(function (vv) {
          _declarations(_O(k,vv), buf, pfx, vendors/*/-INDENT-/*/, indent/*/-INDENT-/*/);
        });
        break;
      case OBJECT:
        _declarations(v, buf, pfx + k + "-", vendors/*/-INDENT-/*/, indent/*/-INDENT-/*/);
        break;
      default:
        _vendorify(
          (pfx + k).replace(/_/g, "-") + ":" + v + ";",
          buf, vendors/*/-INDENT-/*/, indent/*/-INDENT-/*/
        );
      }
    }
  }

  

  var m = { // module
    
    inline: inline,
    vendors:["o", "ms", "moz", "webkit"]
  };

  return m;
})()

/*
Copyright © 2015 Pierre-Yves Gérardy

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the “Software”),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/});