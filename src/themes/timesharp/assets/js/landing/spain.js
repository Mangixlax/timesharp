!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function (t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function (t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || g(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((o = i
                        ? ((i = !1), n && Array.isArray(n) ? n : [])
                        : n && w.isPlainObject(n)
                        ? n
                        : {}),
                      (a[t] = w.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = f.call(t, "constructor") && t.constructor) ||
              p.call(n) !== d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, a = e.length, s = !n; o < a; o++)
          !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var E = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        M +
        "*(" +
        R +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        M +
        "*\\]",
      W =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((A = H.call(w.childNodes)), w.childNodes),
        A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length
          ? function (e, t) {
              q.apply(e, H.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) (m = t), (v = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (c = t.getAttribute("id"))
                ? (c = c.replace(te, ne))
                : t.setAttribute("id", (c = b)),
                s = (h = a(e)).length;
              s--;

            )
              h[s] = "#" + c + " " + ve(h[s]);
            (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return L.apply(r, m.querySelectorAll(v)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = [];
      return function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      };
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = oe.support = {}),
    (o = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (p = oe.setDocument =
      function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : w;
        return (
          a !== d &&
            9 === a.nodeType &&
            a.documentElement &&
            ((h = (d = a).documentElement),
            (g = !o(d)),
            w !== d &&
              (i = d.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", re, !1)
                : i.attachEvent && i.attachEvent("onunload", re)),
            (n.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (
                (h.appendChild(e).id = b),
                !d.getElementsByName || !d.getElementsByName(b).length
              );
            })),
            n.getById
              ? ((r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (y = []),
            (n.qsa = Q.test(d.querySelectorAll)) &&
              (ue(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    y.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    y.push("\\[" + M + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                  e.querySelectorAll(":checked").length || y.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                    y.push(".#.+[+~]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    y.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    y.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    y.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  y.push(",.*:");
              })),
            (n.matchesSelector = Q.test(
              (m =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = m.call(e, "*")),
                  m.call(e, "[s!='']:x"),
                  v.push("!=", W);
              }),
            (y = y.length && new RegExp(y.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = Q.test(h.compareDocumentPosition)),
            (x =
              t || Q.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === d || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === d || (t.ownerDocument === w && x(w, t))
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === d
                      ? -1
                      : t === d
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : c
                      ? O(c, e) - O(c, t)
                      : 0;
                  if (i === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? ce(a[r], s[r])
                    : a[r] === w
                    ? -1
                    : s[r] === w
                    ? 1
                    : 0;
                })),
          d
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== d && p(e),
        (t = t.replace(z, "='$1']")),
        n.matchesSelector &&
          g &&
          !S[t + " "] &&
          (!v || !v.test(t)) &&
          (!y || !y.test(t)))
      )
        try {
          var r = m.call(e, t);
          if (
            r ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {}
      return 0 < oe(t, d, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(D),
        f)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
        for (; i--; ) e.splice(r[i], 1);
      }
      return (c = null), e;
    }),
    (i = oe.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
    ((r = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: se,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = E[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                E(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = oe.attr(r, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && -1 < i.indexOf(n)
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + i.replace($, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? "nextSibling" : "previousSibling",
                    y = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    m = !u && !s,
                    x = !1;
                  if (y) {
                    if (o) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (
                            s
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                      for (
                        x =
                          (d =
                            (l =
                              (c =
                                (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2],
                          p = d && y.childNodes[d];
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          c[e] = [T, d, x];
                          break;
                        }
                    } else if (
                      (m &&
                        (x = d =
                          (l =
                            (c =
                              (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                        ((s
                          ? p.nodeName.toLowerCase() !== v
                          : 1 !== p.nodeType) ||
                          !++x ||
                          (m &&
                            ((c =
                              (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] = [T, x]),
                          p !== t));

                      );
                    return (x -= i) === r || (x % r == 0 && 0 <= x / r);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return i[b]
              ? i(t)
              : 1 < i.length
              ? ((n = [e, e, "", t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, n) {
                      for (var r, o = i(e, t), a = o.length; a--; )
                        e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: se(function (e) {
            var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
            return r[b]
              ? se(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: se(function (e) {
            return function (t) {
              return 0 < oe(e, t).length;
            };
          }),
          contains: se(function (e) {
            return (
              (e = e.replace(Z, ee)),
              function (t) {
                return -1 < (t.textContent || t.innerText || i(t)).indexOf(e);
              }
            );
          }),
          lang: se(function (e) {
            return (
              U.test(e || "") || oe.error("unsupported lang: " + e),
              (e = e.replace(Z, ee).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === d.activeElement &&
              (!d.hasFocus || d.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() {}
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p)[2] = e(t, n, u))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return 1 < e.length
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g =
              o ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                return n;
              })(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r))
            for (l = we(v, d), r(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          if (o) {
            if (i || e) {
              if (i) {
                for (l = [], c = v.length; c--; )
                  (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              for (c = v.length; c--; )
                (f = v[c]) &&
                  -1 < (l = i ? O(o, f) : p[c]) &&
                  (o[l] = !(a[l] = f));
            }
          } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = me(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function (e) {
              return -1 < O(t, e);
            },
            s,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o && !r.relative[e[i].type]; i++);
            return Te(
              1 < u && xe(p),
              1 < u &&
                ve(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = 0 < t.length,
        i = 0 < e.length,
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (
            c && (l = a === d || a || c);
            m !== k && null != (f = C[m]);
            m++
          ) {
            if (i && f) {
              for (
                h = 0, a || f.ownerDocument === d || (p(f), (s = !g));
                (y = e[h++]);

              )
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            for (h = 0; (y = t[h++]); ) y(x, b, a, s);
            if (o) {
              if (0 < v) for (; m--; ) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            L.apply(u, b),
              c && !o && 0 < b.length && 1 < v + t.length && oe.uniqueSort(u);
          }
          return c && ((T = E), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s; ) {
            for (a in ((n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
            (n = !1),
            (i = _.exec(s)) &&
              ((n = i.shift()),
              o.push({ value: n, type: i[0].replace(B, " ") }),
              (s = s.slice(n.length))),
            r.filter))
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        }),
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + " "];
          if (!o) {
            for (t || (t = a(e)), n = t.length; n--; )
              (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ee(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              2 < (u = d[0] = d[0].slice(0)).length &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            for (
              o = V.needsContext.test(e) ? 0 : u.length;
              o-- && ((l = u[o]), !r.relative[(c = l.type)]);

            )
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(Z, ee),
                  (K.test(u[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                  return L.apply(n, i), n;
                break;
              }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (K.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(D).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(P, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return -1 < u.call(t, e) !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return 1 < r ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : g(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(w)
        : w.makeArray(e, this);
    if (
      !(i =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : L.exec(e)) ||
      (!i[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (i[1]) {
      if (
        ((t = t instanceof w ? t[0] : t),
        w.merge(
          this,
          w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
        ),
        A.test(i[1]) && w.isPlainObject(t))
      )
        for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      return this;
    }
    return (
      (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
    );
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return k(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return k(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return k(e, "nextSibling");
        },
        prevAll: function (e) {
          return k(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return k(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return k(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return N(e, "iframe")
            ? e.contentDocument
            : (N(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, r) {
          var i = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            1 < this.length &&
              (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var M = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1)
          for (n = a.shift(); ++s < o.length; )
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, o, n)); )
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, o) : 0 < o.length;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, r) {
                    var i = g(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && g(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              var o = 0;
              function a(t, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    l = function () {
                      var e, l;
                      if (!(t < o)) {
                        if ((e = r.apply(s, u)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (l =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          g(l)
                            ? i
                              ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                              : (o++,
                                l.call(
                                  e,
                                  a(o, n, I, i),
                                  a(o, n, W, i),
                                  a(o, n, I, n.notifyWith)
                                ))
                            : (r !== I && ((s = void 0), (u = [e])),
                              (i || n.resolveWith)(s, u));
                      }
                    },
                    c = i
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, c.stackTrace),
                              o <= t + 1 &&
                                (r !== W && ((s = void 0), (u = [e])),
                                n.rejectWith(s, u));
                          }
                        };
                  t
                    ? c()
                    : (w.Deferred.getStackHook &&
                        (c.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                    n[1][3].add(a(0, e, g(t) ? t : I)),
                    n[2][3].add(a(0, e, g(r) ? r : W));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, i) : i;
            },
          },
          o = {};
        return (
          w.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function (e) {
            return function (n) {
              (r[e] = this),
                (i[e] = 1 < arguments.length ? o.call(arguments) : n),
                --t || a.resolveWith(r, i);
            };
          };
        if (
          t <= 1 &&
          ($(e, a.done(s(n)).resolve, a.reject, !t),
          "pending" === a.state() || g(i[n] && i[n].then))
        )
          return a.then();
        for (; n--; ) $(i[n], s(n), a.reject);
        return a.promise();
      },
    });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  function _() {
    r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          F.resolveWith(r, [w]);
      },
    }),
    (w.ready.then = F.then),
    "complete" === r.readyState ||
    ("loading" !== r.readyState && !r.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (r.addEventListener("DOMContentLoaded", _),
        e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) z(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (t = a
            ? (t.call(e, r), null)
            : ((l = t),
              function (e, t, n) {
                return l.call(w(e), n);
              })),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][G(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(G)
              : (t = G(t)) in r
              ? [t]
              : t.match(M) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : Z.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== e)
          return "object" == typeof e
            ? this.each(function () {
                K.set(this, e);
              })
            : z(
                this,
                function (t) {
                  var n;
                  if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n;
                  } else
                    this.each(function () {
                      K.set(this, e, t);
                    });
                },
                null,
                t,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
        ) {
          for (n = a.length; n--; )
            a[n] &&
              0 === (r = a[n].name).indexOf("data-") &&
              ((r = G(r.slice(5))), ne(o, r, i[r]));
          J.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = J.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = J.access(e, t, w.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = J.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          w.contains(e.ownerDocument, e) &&
          "none" === w.css(e, "display"))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        w.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (le[r] = i))
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = J.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r)))
          : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ye(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (de.exec(o) || ["", ""])[1].toLowerCase(),
              u = ge[s] || ge._default,
              a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (r && -1 < w.inArray(o, r)) i && i.push(o);
      else if (
        ((l = w.contains(o.ownerDocument, o)),
        (a = ye(f.appendChild(o), "script")),
        l && ve(a),
        n)
      )
        for (c = 0; (o = a[c++]); ) he.test(o.type || "") && n.push(o);
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && w.find.matchesSelector(be, i),
            n.guid || (n.guid = w.guid++),
            (u = y.events) || (u = y.events = {}),
            (a = y.handle) ||
              (a = y.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type
                    ? w.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            l = (t = (t || "").match(M) || [""]).length;
          l--;

        )
          (d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        for (l = (t = (t || "").match(M) || [""]).length; l--; )
          if (
            ((d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = w.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                w.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var n,
        r,
        i,
        o,
        a,
        s,
        t = w.event.fix(e),
        u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, t))
      ) {
        for (
          s = w.event.handlers.call(this, t, l), n = 0;
          (o = s[n++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = o.elem, r = 0;
            (a = o.handlers[r++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
              (t.data = a.data),
              void 0 !==
                (i = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < w(i, this).index(l)
                  : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = ke),
            this.each(function () {
              w.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return (
      (N(e, "table") &&
        N(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        J.hasData(e) &&
        ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (1 < p && "string" == typeof y && !h.checkClone && je.test(y)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
      });
    if (
      p &&
      ((o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || "") &&
              !J.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(qe, ""), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode &&
          (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
          Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
            Pe(o[r], a[r]);
        else Pe(e, s);
      return (
        0 < (a = ye(s, "script")).length && ve(a, !u && ye(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              w(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(oe.join("|"), "i");
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          w.contains(e.ownerDocument, e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          be.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;
  function Je(e) {
    var t = w.cssProps[e];
    return (
      t ||
        (t = w.cssProps[e] =
          (function (e) {
            if (e in Ye) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; )
              if ((e = Ge[n] + t) in Ye) return e;
          })(e) || e),
      t
    );
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n &&
              (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + oe[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
              : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        )),
      u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
        Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
        "px"
    );
  }
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o &&
              (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            s &&
              (i = ie.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(0, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((w.Tween = tt).prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = tt.prototype),
    ((tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var r,
        i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = nt || st(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = G(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = w.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      o < a;
      o++
    )
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
            (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, r = 0, i = (e = g(e) ? ((t = e), ["*"]) : e.match(M)).length;
        r < i;
        r++
      )
        (n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = J.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = w._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), it.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !y || void 0 === y[r]) continue;
              g = !0;
            }
            d[r] = (y && y[r]) || w.style(e, r);
          }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = w.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === w.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (y
                ? "hidden" in y && (g = y.hidden)
                : (y = J.access(e, "fxshow", { display: l })),
              o && (y.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), J.remove(e, "fxshow"), d))
                  w.style(e, r, d[r]);
              })),
              (u = lt(g ? y[r] : 0, r, p)),
              r in y ||
                ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = ht[a]),
            (ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (g(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, mt(this)));
          });
        if ((t = xt(e)).length)
          for (; (n = this[u++]); )
            if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              for (a = 0; (o = t[a++]); )
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (g(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, mt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = xt(e)).length)
          for (; (n = this[u++]); )
            if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              for (a = 0; (o = t[a++]); )
                for (; -1 < r.indexOf(" " + o + " "); )
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          r = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && r
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : g(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, mt(this), t), t);
            })
          : this.each(function () {
              var t, i, o, a;
              if (r)
                for (i = 0, o = w(this), a = xt(e); (t = a[i++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = mt(this)) && J.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : J.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && -1 < (" " + vt(mt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = g(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, w(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = w.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(bt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : vt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = w.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < w.inArray(w(e).val(), t));
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (-1 < m.indexOf(".") && ((m = (x = m.split(".")).shift()), x.sort()),
          (c = m.indexOf(":") < 0 && "on" + m),
          ((t = t[w.expando]
            ? t
            : new w.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (
            l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            v.push(u.defaultView || u.parentWindow || e);
        }
        for (a = 0; (s = v[a++]) && !t.isPropagationStopped(); )
          (h = s),
            (t.type = 1 < a ? l : d.bindType || m),
            (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              Y(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !Y(i) ||
            (c &&
              g(i[m]) &&
              !y(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
            i
              ? J.access(r, t, i)
              : (r.removeEventListener(e, n, !0), J.remove(r, t));
          },
        };
      });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : jt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  (Bt.href = Ct.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ct.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Ct.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(It),
      ajaxTransport: Ft(Wt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Ot.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) E.always(e[E.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return i && i.abort(t), k(0, t), this;
            },
          };
        if (
          (v.promise(E),
          (h.url = ((t || h.url || Ct.href) + "").replace(
            Rt,
            Ct.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
          null == h.crossDomain)
        ) {
          l = r.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          _t(It, h, n, E),
          c)
        )
          return E;
        for (p in ((f = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(qt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ht, "$1")),
              (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          E.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
          return E.abort();
        if (
          ((C = "abort"),
          m.add(h.complete),
          E.done(h.success),
          E.fail(h.error),
          (i = _t(Wt, h, n, E)))
        ) {
          if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
            return E;
          h.async &&
            0 < h.timeout &&
            (u = e.setTimeout(function () {
              E.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), i.send(b, k);
          } catch (e) {
            if (c) throw e;
            k(-1, e);
          }
        } else k(-1, "No Transport");
        function k(t, n, r, s) {
          var l,
            p,
            d,
            b,
            T,
            C = n;
          c ||
            ((c = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (E.readyState = 0 < t ? 4 : 0),
            (l = (200 <= t && t < 300) || 304 === t),
            r &&
              (b = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(h, E, r)),
            (b = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, b, E, l)),
            l
              ? (h.ifModified &&
                  ((T = E.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[o] = T),
                  (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = b.state), (p = b.data), (l = !(d = b.error))))
              : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (E.status = t),
            (E.statusText = (n || C) + ""),
            l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
            E.statusCode(x),
            (x = void 0),
            f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
            m.fireWith(g, [E, C]),
            f &&
              (y.trigger("ajaxComplete", [E, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return E;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && "withCredentials" in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain)
        return {
          send: function (i, o) {
            (t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t =
                  r.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = r.location.href),
                t.head.appendChild(i))
              : (t = r)),
          (a = !n && []),
          (o = A.exec(e))
            ? [t.createElement(o[1])]
            : ((o = xe([e], t, a)),
              a && a.length && w(a).remove(),
              w.merge([], o.childNodes)));
      var i, o, a;
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          (i =
            ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = f.position()).top), r.left)
              : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || be;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? w.css(t, n, s)
                  : w.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }).guid = e.guid =
            e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
}),
  (function (a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "undefined" != typeof exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery);
  })(function (a) {
    "use strict";
    var b = window.Slick || {};
    ((b = (function () {
      var b = 0;
      return function (c, d) {
        var f,
          e = this;
        (e.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(c),
          appendDots: a(c),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (b, c) {
            return a(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text(c + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (e.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          a.extend(e, e.initials),
          (e.activeBreakpoint = null),
          (e.animType = null),
          (e.animProp = null),
          (e.breakpoints = []),
          (e.breakpointSettings = []),
          (e.cssTransitions = !1),
          (e.focussed = !1),
          (e.interrupted = !1),
          (e.hidden = "hidden"),
          (e.paused = !0),
          (e.positionProp = null),
          (e.respondTo = null),
          (e.rowCount = 1),
          (e.shouldClick = !0),
          (e.$slider = a(c)),
          (e.$slidesCache = null),
          (e.transformType = null),
          (e.transitionType = null),
          (e.visibilityChange = "visibilitychange"),
          (e.windowWidth = 0),
          (e.windowTimer = null),
          (f = a(c).data("slick") || {}),
          (e.options = a.extend({}, e.defaults, d, f)),
          (e.currentSlide = e.options.initialSlide),
          (e.originalSettings = e.options),
          void 0 !== document.mozHidden
            ? ((e.hidden = "mozHidden"),
              (e.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((e.hidden = "webkitHidden"),
              (e.visibilityChange = "webkitvisibilitychange")),
          (e.autoPlay = a.proxy(e.autoPlay, e)),
          (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
          (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
          (e.changeSlide = a.proxy(e.changeSlide, e)),
          (e.clickHandler = a.proxy(e.clickHandler, e)),
          (e.selectHandler = a.proxy(e.selectHandler, e)),
          (e.setPosition = a.proxy(e.setPosition, e)),
          (e.swipeHandler = a.proxy(e.swipeHandler, e)),
          (e.dragHandler = a.proxy(e.dragHandler, e)),
          (e.keyHandler = a.proxy(e.keyHandler, e)),
          (e.instanceUid = b++),
          (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          e.registerBreakpoints(),
          e.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (b.prototype.addSlide = b.prototype.slickAdd =
        function (b, c, d) {
          var e = this;
          if ("boolean" == typeof c) (d = c), (c = null);
          else if (c < 0 || c >= e.slideCount) return !1;
          e.unload(),
            "number" == typeof c
              ? 0 === c && 0 === e.$slides.length
                ? a(b).appendTo(e.$slideTrack)
                : d
                ? a(b).insertBefore(e.$slides.eq(c))
                : a(b).insertAfter(e.$slides.eq(c))
              : !0 === d
              ? a(b).prependTo(e.$slideTrack)
              : a(b).appendTo(e.$slideTrack),
            (e.$slides = e.$slideTrack.children(this.options.slide)),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slideTrack.append(e.$slides),
            e.$slides.each(function (b, c) {
              a(c).attr("data-slick-index", b);
            }),
            (e.$slidesCache = e.$slides),
            e.reinit();
        }),
      (b.prototype.animateHeight = function () {
        var a = this;
        if (
          1 === a.options.slidesToShow &&
          !0 === a.options.adaptiveHeight &&
          !1 === a.options.vertical
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
          a.$list.animate({ height: b }, a.options.speed);
        }
      }),
      (b.prototype.animateSlide = function (b, c) {
        var d = {},
          e = this;
        e.animateHeight(),
          !0 === e.options.rtl && !1 === e.options.vertical && (b = -b),
          !1 === e.transformsEnabled
            ? !1 === e.options.vertical
              ? e.$slideTrack.animate(
                  { left: b },
                  e.options.speed,
                  e.options.easing,
                  c
                )
              : e.$slideTrack.animate(
                  { top: b },
                  e.options.speed,
                  e.options.easing,
                  c
                )
            : !1 === e.cssTransitions
            ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft),
              a({ animStart: e.currentLeft }).animate(
                { animStart: b },
                {
                  duration: e.options.speed,
                  easing: e.options.easing,
                  step: function (a) {
                    (a = Math.ceil(a)),
                      !1 === e.options.vertical
                        ? (d[e.animType] = "translate(" + a + "px, 0px)")
                        : (d[e.animType] = "translate(0px," + a + "px)"),
                      e.$slideTrack.css(d);
                  },
                  complete: function () {
                    c && c.call();
                  },
                }
              ))
            : (e.applyTransition(),
              (b = Math.ceil(b)),
              !1 === e.options.vertical
                ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
                : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
              e.$slideTrack.css(d),
              c &&
                setTimeout(function () {
                  e.disableTransition(), c.call();
                }, e.options.speed));
      }),
      (b.prototype.getNavTarget = function () {
        var c = this.options.asNavFor;
        return c && null !== c && (c = a(c).not(this.$slider)), c;
      }),
      (b.prototype.asNavFor = function (b) {
        var d = this.getNavTarget();
        null !== d &&
          "object" == typeof d &&
          d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0);
          });
      }),
      (b.prototype.applyTransition = function (a) {
        var b = this,
          c = {};
        !1 === b.options.fade
          ? (c[b.transitionType] =
              b.transformType +
              " " +
              b.options.speed +
              "ms " +
              b.options.cssEase)
          : (c[b.transitionType] =
              "opacity " + b.options.speed + "ms " + b.options.cssEase),
          !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
      }),
      (b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayClear(),
          a.slideCount > a.options.slidesToShow &&
            (a.autoPlayTimer = setInterval(
              a.autoPlayIterator,
              a.options.autoplaySpeed
            ));
      }),
      (b.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (b.prototype.autoPlayIterator = function () {
        var a = this,
          b = a.currentSlide + a.options.slidesToScroll;
        a.paused ||
          a.interrupted ||
          a.focussed ||
          (!1 === a.options.infinite &&
            (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
              ? (a.direction = 0)
              : 0 === a.direction &&
                ((b = a.currentSlide - a.options.slidesToScroll),
                a.currentSlide - 1 == 0 && (a.direction = 1))),
          a.slideHandler(b));
      }),
      (b.prototype.buildArrows = function () {
        var b = this;
        !0 === b.options.arrows &&
          ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
          (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
          b.slideCount > b.options.slidesToShow
            ? (b.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.htmlExpr.test(b.options.prevArrow) &&
                b.$prevArrow.prependTo(b.options.appendArrows),
              b.htmlExpr.test(b.options.nextArrow) &&
                b.$nextArrow.appendTo(b.options.appendArrows),
              !0 !== b.options.infinite &&
                b.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : b.$prevArrow
                .add(b.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (b.prototype.buildDots = function () {
        var c,
          d,
          b = this;
        if (!0 === b.options.dots && b.slideCount > b.options.slidesToShow) {
          for (
            b.$slider.addClass("slick-dotted"),
              d = a("<ul />").addClass(b.options.dotsClass),
              c = 0;
            c <= b.getDotCount();
            c += 1
          )
            d.append(
              a("<li />").append(b.options.customPaging.call(this, b, c))
            );
          (b.$dots = d.appendTo(b.options.appendDots)),
            b.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (b.prototype.buildOut = function () {
        var b = this;
        (b.$slides = b.$slider
          .children(b.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.$slides.each(function (b, c) {
            a(c)
              .attr("data-slick-index", b)
              .data("originalStyling", a(c).attr("style") || "");
          }),
          b.$slider.addClass("slick-slider"),
          (b.$slideTrack =
            0 === b.slideCount
              ? a('<div class="slick-track"/>').appendTo(b.$slider)
              : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (b.$list = b.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          b.$slideTrack.css("opacity", 0),
          (!0 === b.options.centerMode || !0 === b.options.swipeToSlide) &&
            (b.options.slidesToScroll = 1),
          a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
          b.setupInfinite(),
          b.buildArrows(),
          b.buildDots(),
          b.updateDots(),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          !0 === b.options.draggable && b.$list.addClass("draggable");
      }),
      (b.prototype.buildRows = function () {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          a = this;
        if (
          ((e = document.createDocumentFragment()),
          (g = a.$slider.children()),
          1 < a.options.rows)
        ) {
          for (
            h = a.options.slidesPerRow * a.options.rows,
              f = Math.ceil(g.length / h),
              b = 0;
            b < f;
            b++
          ) {
            var i = document.createElement("div");
            for (c = 0; c < a.options.rows; c++) {
              var j = document.createElement("div");
              for (d = 0; d < a.options.slidesPerRow; d++) {
                var k = b * h + (c * a.options.slidesPerRow + d);
                g.get(k) && j.appendChild(g.get(k));
              }
              i.appendChild(j);
            }
            e.appendChild(i);
          }
          a.$slider.empty().append(e),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (b.prototype.checkResponsive = function (b, c) {
        var e,
          f,
          g,
          d = this,
          h = !1,
          i = d.$slider.width(),
          j = window.innerWidth || a(window).width();
        if (
          ("window" === d.respondTo
            ? (g = j)
            : "slider" === d.respondTo
            ? (g = i)
            : "min" === d.respondTo && (g = Math.min(j, i)),
          d.options.responsive &&
            d.options.responsive.length &&
            null !== d.options.responsive)
        ) {
          for (e in ((f = null), d.breakpoints))
            d.breakpoints.hasOwnProperty(e) &&
              (!1 === d.originalSettings.mobileFirst
                ? g < d.breakpoints[e] && (f = d.breakpoints[e])
                : g > d.breakpoints[e] && (f = d.breakpoints[e]));
          null !== f
            ? null !== d.activeBreakpoint
              ? (f !== d.activeBreakpoint || c) &&
                ((d.activeBreakpoint = f),
                "unslick" === d.breakpointSettings[f]
                  ? d.unslick(f)
                  : ((d.options = a.extend(
                      {},
                      d.originalSettings,
                      d.breakpointSettings[f]
                    )),
                    !0 === b && (d.currentSlide = d.options.initialSlide),
                    d.refresh(b)),
                (h = f))
              : ((d.activeBreakpoint = f),
                "unslick" === d.breakpointSettings[f]
                  ? d.unslick(f)
                  : ((d.options = a.extend(
                      {},
                      d.originalSettings,
                      d.breakpointSettings[f]
                    )),
                    !0 === b && (d.currentSlide = d.options.initialSlide),
                    d.refresh(b)),
                (h = f))
            : null !== d.activeBreakpoint &&
              ((d.activeBreakpoint = null),
              (d.options = d.originalSettings),
              !0 === b && (d.currentSlide = d.options.initialSlide),
              d.refresh(b),
              (h = f)),
            b || !1 === h || d.$slider.trigger("breakpoint", [d, h]);
        }
      }),
      (b.prototype.changeSlide = function (b, c) {
        var f,
          g,
          d = this,
          e = a(b.currentTarget);
        switch (
          (e.is("a") && b.preventDefault(),
          e.is("li") || (e = e.closest("li")),
          (f =
            d.slideCount % d.options.slidesToScroll != 0
              ? 0
              : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
          b.data.message)
        ) {
          case "previous":
            (g =
              0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
              d.slideCount > d.options.slidesToShow &&
                d.slideHandler(d.currentSlide - g, !1, c);
            break;
          case "next":
            (g = 0 === f ? d.options.slidesToScroll : f),
              d.slideCount > d.options.slidesToShow &&
                d.slideHandler(d.currentSlide + g, !1, c);
            break;
          case "index":
            var i =
              0 === b.data.index
                ? 0
                : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c),
              e.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (b.prototype.checkNavigable = function (a) {
        var c, d;
        if (((d = 0), a > (c = this.getNavigableIndexes())[c.length - 1]))
          a = c[c.length - 1];
        else
          for (var e in c) {
            if (a < c[e]) {
              a = d;
              break;
            }
            d = c[e];
          }
        return a;
      }),
      (b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots &&
          null !== b.$dots &&
          a("li", b.$dots)
            .off("click.slick", b.changeSlide)
            .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
          b.$slider.off("focus.slick blur.slick"),
          !0 === b.options.arrows &&
            b.slideCount > b.options.slidesToShow &&
            (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
            b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
          b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
          b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
          b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
          b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
          b.$list.off("click.slick", b.clickHandler),
          a(document).off(b.visibilityChange, b.visibility),
          b.cleanUpSlideEvents(),
          !0 === b.options.accessibility &&
            b.$list.off("keydown.slick", b.keyHandler),
          !0 === b.options.focusOnSelect &&
            a(b.$slideTrack).children().off("click.slick", b.selectHandler),
          a(window).off(
            "orientationchange.slick.slick-" + b.instanceUid,
            b.orientationChange
          ),
          a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
          a("[draggable!=true]", b.$slideTrack).off(
            "dragstart",
            b.preventDefault
          ),
          a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
      }),
      (b.prototype.cleanUpSlideEvents = function () {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
      }),
      (b.prototype.cleanUpRows = function () {
        var b,
          a = this;
        1 < a.options.rows &&
          ((b = a.$slides.children().children()).removeAttr("style"),
          a.$slider.empty().append(b));
      }),
      (b.prototype.clickHandler = function (a) {
        !1 === this.shouldClick &&
          (a.stopImmediatePropagation(),
          a.stopPropagation(),
          a.preventDefault());
      }),
      (b.prototype.destroy = function (b) {
        var c = this;
        c.autoPlayClear(),
          (c.touchObject = {}),
          c.cleanUpEvents(),
          a(".slick-cloned", c.$slider).detach(),
          c.$dots && c.$dots.remove(),
          c.$prevArrow &&
            c.$prevArrow.length &&
            (c.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
          c.$nextArrow &&
            c.$nextArrow.length &&
            (c.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
          c.$slides &&
            (c.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                a(this).attr("style", a(this).data("originalStyling"));
              }),
            c.$slideTrack.children(this.options.slide).detach(),
            c.$slideTrack.detach(),
            c.$list.detach(),
            c.$slider.append(c.$slides)),
          c.cleanUpRows(),
          c.$slider.removeClass("slick-slider"),
          c.$slider.removeClass("slick-initialized"),
          c.$slider.removeClass("slick-dotted"),
          (c.unslicked = !0),
          b || c.$slider.trigger("destroy", [c]);
      }),
      (b.prototype.disableTransition = function (a) {
        var b = this,
          c = {};
        (c[b.transitionType] = ""),
          !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
      }),
      (b.prototype.fadeSlide = function (a, b) {
        var c = this;
        !1 === c.cssTransitions
          ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
            c.$slides
              .eq(a)
              .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
          : (c.applyTransition(a),
            c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
            b &&
              setTimeout(function () {
                c.disableTransition(a), b.call();
              }, c.options.speed));
      }),
      (b.prototype.fadeSlideOut = function (a) {
        var b = this;
        !1 === b.cssTransitions
          ? b.$slides
              .eq(a)
              .animate(
                { opacity: 0, zIndex: b.options.zIndex - 2 },
                b.options.speed,
                b.options.easing
              )
          : (b.applyTransition(a),
            b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
      }),
      (b.prototype.filterSlides = b.prototype.slickFilter =
        function (a) {
          var b = this;
          null !== a &&
            ((b.$slidesCache = b.$slides),
            b.unload(),
            b.$slideTrack.children(this.options.slide).detach(),
            b.$slidesCache.filter(a).appendTo(b.$slideTrack),
            b.reinit());
        }),
      (b.prototype.focusHandler = function () {
        var b = this;
        b.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function () {
              b.options.pauseOnFocus &&
                ((b.focussed = d.is(":focus")), b.autoPlay());
            }, 0);
          });
      }),
      (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (b.prototype.getDotCount = function () {
        var a = this,
          b = 0,
          c = 0,
          d = 0;
        if (!0 === a.options.infinite)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow);
        else if (!0 === a.options.centerMode) d = a.slideCount;
        else if (a.options.asNavFor)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow);
        else
          d =
            1 +
            Math.ceil(
              (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
            );
        return d - 1;
      }),
      (b.prototype.getLeft = function (a) {
        var c,
          d,
          f,
          b = this,
          e = 0;
        return (
          (b.slideOffset = 0),
          (d = b.$slides.first().outerHeight(!0)),
          !0 === b.options.infinite
            ? (b.slideCount > b.options.slidesToShow &&
                ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
                (e = d * b.options.slidesToShow * -1)),
              b.slideCount % b.options.slidesToScroll != 0 &&
                a + b.options.slidesToScroll > b.slideCount &&
                b.slideCount > b.options.slidesToShow &&
                (e =
                  a > b.slideCount
                    ? ((b.slideOffset =
                        (b.options.slidesToShow - (a - b.slideCount)) *
                        b.slideWidth *
                        -1),
                      (b.options.slidesToShow - (a - b.slideCount)) * d * -1)
                    : ((b.slideOffset =
                        (b.slideCount % b.options.slidesToScroll) *
                        b.slideWidth *
                        -1),
                      (b.slideCount % b.options.slidesToScroll) * d * -1)))
            : a + b.options.slidesToShow > b.slideCount &&
              ((b.slideOffset =
                (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
              (e = (a + b.options.slidesToShow - b.slideCount) * d)),
          b.slideCount <= b.options.slidesToShow && (e = b.slideOffset = 0),
          !0 === b.options.centerMode && !0 === b.options.infinite
            ? (b.slideOffset +=
                b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
                b.slideWidth)
            : !0 === b.options.centerMode &&
              ((b.slideOffset = 0),
              (b.slideOffset +=
                b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
          (c =
            !1 === b.options.vertical
              ? a * b.slideWidth * -1 + b.slideOffset
              : a * d * -1 + e),
          !0 === b.options.variableWidth &&
            ((f =
              b.slideCount <= b.options.slidesToShow ||
              !1 === b.options.infinite
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow)),
            (c =
              !0 === b.options.rtl
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
            !0 === b.options.centerMode &&
              ((f =
                b.slideCount <= b.options.slidesToShow ||
                !1 === b.options.infinite
                  ? b.$slideTrack.children(".slick-slide").eq(a)
                  : b.$slideTrack
                      .children(".slick-slide")
                      .eq(a + b.options.slidesToShow + 1)),
              (c =
                !0 === b.options.rtl
                  ? f[0]
                    ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                    : 0
                  : f[0]
                  ? -1 * f[0].offsetLeft
                  : 0),
              (c += (b.$list.width() - f.outerWidth()) / 2))),
          c
        );
      }),
      (b.prototype.getOption = b.prototype.slickGetOption =
        function (a) {
          return this.options[a];
        }),
      (b.prototype.getNavigableIndexes = function () {
        var e,
          a = this,
          b = 0,
          c = 0,
          d = [];
        for (
          e =
            !1 === a.options.infinite
              ? a.slideCount
              : ((b = -1 * a.options.slidesToScroll),
                (c = -1 * a.options.slidesToScroll),
                2 * a.slideCount);
          b < e;

        )
          d.push(b),
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
        return d;
      }),
      (b.prototype.getSlick = function () {
        return this;
      }),
      (b.prototype.getSlideCount = function () {
        var d,
          e,
          b = this;
        return (
          (e =
            !0 === b.options.centerMode
              ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
              : 0),
          !0 === b.options.swipeToSlide
            ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
                return f.offsetLeft - e + a(f).outerWidth() / 2 >
                  -1 * b.swipeLeft
                  ? ((d = f), !1)
                  : void 0;
              }),
              Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1)
            : b.options.slidesToScroll
        );
      }),
      (b.prototype.goTo = b.prototype.slickGoTo =
        function (a, b) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(a) } },
            b
          );
        }),
      (b.prototype.init = function (b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") ||
          (a(c.$slider).addClass("slick-initialized"),
          c.buildRows(),
          c.buildOut(),
          c.setProps(),
          c.startLoad(),
          c.loadSlider(),
          c.initializeEvents(),
          c.updateArrows(),
          c.updateDots(),
          c.checkResponsive(!0),
          c.focusHandler()),
          b && c.$slider.trigger("init", [c]),
          !0 === c.options.accessibility && c.initADA(),
          c.options.autoplay && ((c.paused = !1), c.autoPlay());
      }),
      (b.prototype.initADA = function () {
        var b = this;
        b.$slides
          .add(b.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          b.$slideTrack.attr("role", "listbox"),
          b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + b.instanceUid + c,
            });
          }),
          null !== b.$dots &&
            b.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (c) {
                a(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + b.instanceUid + c,
                  id: "slick-slide" + b.instanceUid + c,
                });
              })
              .first()
              .attr("aria-selected", "true")
              .end()
              .find("button")
              .attr("role", "button")
              .end()
              .closest("div")
              .attr("role", "toolbar"),
          b.activateADA();
      }),
      (b.prototype.initArrowEvents = function () {
        var a = this;
        !0 === a.options.arrows &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, a.changeSlide),
          a.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, a.changeSlide));
      }),
      (b.prototype.initDotEvents = function () {
        var b = this;
        !0 === b.options.dots &&
          b.slideCount > b.options.slidesToShow &&
          a("li", b.$dots).on(
            "click.slick",
            { message: "index" },
            b.changeSlide
          ),
          !0 === b.options.dots &&
            !0 === b.options.pauseOnDotsHover &&
            a("li", b.$dots)
              .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
              .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
      }),
      (b.prototype.initSlideEvents = function () {
        var b = this;
        b.options.pauseOnHover &&
          (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
      }),
      (b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(),
          b.initDotEvents(),
          b.initSlideEvents(),
          b.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            b.swipeHandler
          ),
          b.$list.on("click.slick", b.clickHandler),
          a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
          !0 === b.options.accessibility &&
            b.$list.on("keydown.slick", b.keyHandler),
          !0 === b.options.focusOnSelect &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          a(window).on(
            "orientationchange.slick.slick-" + b.instanceUid,
            a.proxy(b.orientationChange, b)
          ),
          a(window).on(
            "resize.slick.slick-" + b.instanceUid,
            a.proxy(b.resize, b)
          ),
          a("[draggable!=true]", b.$slideTrack).on(
            "dragstart",
            b.preventDefault
          ),
          a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
      }),
      (b.prototype.initUI = function () {
        var a = this;
        !0 === a.options.arrows &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.show(), a.$nextArrow.show()),
          !0 === a.options.dots &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.show();
      }),
      (b.prototype.keyHandler = function (a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === a.keyCode && !0 === b.options.accessibility
            ? b.changeSlide({
                data: { message: !0 === b.options.rtl ? "next" : "previous" },
              })
            : 39 === a.keyCode &&
              !0 === b.options.accessibility &&
              b.changeSlide({
                data: { message: !0 === b.options.rtl ? "previous" : "next" },
              }));
      }),
      (b.prototype.lazyLoad = function () {
        function g(c) {
          a("img[data-lazy]", c).each(function () {
            var c = a(this),
              d = a(this).attr("data-lazy"),
              e = document.createElement("img");
            (e.onload = function () {
              c.animate({ opacity: 0 }, 100, function () {
                c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                  c.removeAttr("data-lazy").removeClass("slick-loading");
                }),
                  b.$slider.trigger("lazyLoaded", [b, c, d]);
              });
            }),
              (e.onerror = function () {
                c
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  b.$slider.trigger("lazyLoadError", [b, c, d]);
              }),
              (e.src = d);
          });
        }
        var e,
          f,
          b = this;
        !0 === b.options.centerMode
          ? (f =
              !0 === b.options.infinite
                ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1)) +
                  b.options.slidesToShow +
                  2
                : ((e = Math.max(
                    0,
                    b.currentSlide - (b.options.slidesToShow / 2 + 1)
                  )),
                  b.options.slidesToShow / 2 + 1 + 2 + b.currentSlide))
          : ((e = b.options.infinite
              ? b.options.slidesToShow + b.currentSlide
              : b.currentSlide),
            (f = Math.ceil(e + b.options.slidesToShow)),
            !0 === b.options.fade && (0 < e && e--, f <= b.slideCount && f++)),
          g(b.$slider.find(".slick-slide").slice(e, f)),
          b.slideCount <= b.options.slidesToShow
            ? g(b.$slider.find(".slick-slide"))
            : b.currentSlide >= b.slideCount - b.options.slidesToShow
            ? g(
                b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow)
              )
            : 0 === b.currentSlide &&
              g(
                b.$slider
                  .find(".slick-cloned")
                  .slice(-1 * b.options.slidesToShow)
              );
      }),
      (b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(),
          a.$slideTrack.css({ opacity: 1 }),
          a.$slider.removeClass("slick-loading"),
          a.initUI(),
          "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
      }),
      (b.prototype.next = b.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (b.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (b.prototype.pause = b.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (b.prototype.play = b.prototype.slickPlay =
        function () {
          var a = this;
          a.autoPlay(),
            (a.options.autoplay = !0),
            (a.paused = !1),
            (a.focussed = !1),
            (a.interrupted = !1);
        }),
      (b.prototype.postSlide = function (a) {
        var b = this;
        b.unslicked ||
          (b.$slider.trigger("afterChange", [b, a]),
          (b.animating = !1),
          b.setPosition(),
          (b.swipeLeft = null),
          b.options.autoplay && b.autoPlay(),
          !0 === b.options.accessibility && b.initADA());
      }),
      (b.prototype.prev = b.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (b.prototype.preventDefault = function (a) {
        a.preventDefault();
      }),
      (b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;
        var e,
          f,
          g,
          c = this,
          d = a("img[data-lazy]", c.$slider);
        d.length
          ? ((e = d.first()),
            (f = e.attr("data-lazy")),
            ((g = document.createElement("img")).onload = function () {
              e
                .attr("src", f)
                .removeAttr("data-lazy")
                .removeClass("slick-loading"),
                !0 === c.options.adaptiveHeight && c.setPosition(),
                c.$slider.trigger("lazyLoaded", [c, e, f]),
                c.progressiveLazyLoad();
            }),
            (g.onerror = function () {
              b < 3
                ? setTimeout(function () {
                    c.progressiveLazyLoad(b + 1);
                  }, 500)
                : (e
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  c.$slider.trigger("lazyLoadError", [c, e, f]),
                  c.progressiveLazyLoad());
            }),
            (g.src = f))
          : c.$slider.trigger("allImagesLoaded", [c]);
      }),
      (b.prototype.refresh = function (b) {
        var d,
          e,
          c = this;
        (e = c.slideCount - c.options.slidesToShow),
          !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
          c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
          (d = c.currentSlide),
          c.destroy(!0),
          a.extend(c, c.initials, { currentSlide: d }),
          c.init(),
          b || c.changeSlide({ data: { message: "index", index: d } }, !1);
      }),
      (b.prototype.registerBreakpoints = function () {
        var c,
          d,
          e,
          b = this,
          f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
          for (c in ((b.respondTo = b.options.respondTo || "window"), f))
            if (
              ((e = b.breakpoints.length - 1),
              (d = f[c].breakpoint),
              f.hasOwnProperty(c))
            ) {
              for (; 0 <= e; )
                b.breakpoints[e] &&
                  b.breakpoints[e] === d &&
                  b.breakpoints.splice(e, 1),
                  e--;
              b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
            }
          b.breakpoints.sort(function (a, c) {
            return b.options.mobileFirst ? a - c : c - a;
          });
        }
      }),
      (b.prototype.reinit = function () {
        var b = this;
        (b.$slides = b.$slideTrack
          .children(b.options.slide)
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.currentSlide >= b.slideCount &&
            0 !== b.currentSlide &&
            (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
          b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
          b.registerBreakpoints(),
          b.setProps(),
          b.setupInfinite(),
          b.buildArrows(),
          b.updateArrows(),
          b.initArrowEvents(),
          b.buildDots(),
          b.updateDots(),
          b.initDotEvents(),
          b.cleanUpSlideEvents(),
          b.initSlideEvents(),
          b.checkResponsive(!1, !0),
          !0 === b.options.focusOnSelect &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          b.setPosition(),
          b.focusHandler(),
          (b.paused = !b.options.autoplay),
          b.autoPlay(),
          b.$slider.trigger("reInit", [b]);
      }),
      (b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth &&
          (clearTimeout(b.windowDelay),
          (b.windowDelay = window.setTimeout(function () {
            (b.windowWidth = a(window).width()),
              b.checkResponsive(),
              b.unslicked || b.setPosition();
          }, 50)));
      }),
      (b.prototype.removeSlide = b.prototype.slickRemove =
        function (a, b, c) {
          var d = this;
          return (
            (a =
              "boolean" == typeof a
                ? !0 === (b = a)
                  ? 0
                  : d.slideCount - 1
                : !0 === b
                ? --a
                : a),
            !(d.slideCount < 1 || a < 0 || a > d.slideCount - 1) &&
              (d.unload(),
              !0 === c
                ? d.$slideTrack.children().remove()
                : d.$slideTrack.children(this.options.slide).eq(a).remove(),
              (d.$slides = d.$slideTrack.children(this.options.slide)),
              d.$slideTrack.children(this.options.slide).detach(),
              d.$slideTrack.append(d.$slides),
              (d.$slidesCache = d.$slides),
              void d.reinit())
          );
        }),
      (b.prototype.setCSS = function (a) {
        var d,
          e,
          b = this,
          c = {};
        !0 === b.options.rtl && (a = -a),
          (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
          (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
          (c[b.positionProp] = a),
          !1 === b.transformsEnabled ||
            (!(c = {}) === b.cssTransitions
              ? (c[b.animType] = "translate(" + d + ", " + e + ")")
              : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)")),
          b.$slideTrack.css(c);
      }),
      (b.prototype.setDimensions = function () {
        var a = this;
        !1 === a.options.vertical
          ? !0 === a.options.centerMode &&
            a.$list.css({ padding: "0px " + a.options.centerPadding })
          : (a.$list.height(
              a.$slides.first().outerHeight(!0) * a.options.slidesToShow
            ),
            !0 === a.options.centerMode &&
              a.$list.css({ padding: a.options.centerPadding + " 0px" })),
          (a.listWidth = a.$list.width()),
          (a.listHeight = a.$list.height()),
          !1 === a.options.vertical && !1 === a.options.variableWidth
            ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
              a.$slideTrack.width(
                Math.ceil(
                  a.slideWidth * a.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === a.options.variableWidth
            ? a.$slideTrack.width(5e3 * a.slideCount)
            : ((a.slideWidth = Math.ceil(a.listWidth)),
              a.$slideTrack.height(
                Math.ceil(
                  a.$slides.first().outerHeight(!0) *
                    a.$slideTrack.children(".slick-slide").length
                )
              ));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        !1 === a.options.variableWidth &&
          a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
      }),
      (b.prototype.setFade = function () {
        var c,
          b = this;
        b.$slides.each(function (d, e) {
          (c = b.slideWidth * d * -1),
            !0 === b.options.rtl
              ? a(e).css({
                  position: "relative",
                  right: c,
                  top: 0,
                  zIndex: b.options.zIndex - 2,
                  opacity: 0,
                })
              : a(e).css({
                  position: "relative",
                  left: c,
                  top: 0,
                  zIndex: b.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          b.$slides
            .eq(b.currentSlide)
            .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
      }),
      (b.prototype.setHeight = function () {
        var a = this;
        if (
          1 === a.options.slidesToShow &&
          !0 === a.options.adaptiveHeight &&
          !1 === a.options.vertical
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
          a.$list.css("height", b);
        }
      }),
      (b.prototype.setOption = b.prototype.slickSetOption =
        function () {
          var c,
            d,
            e,
            f,
            h,
            b = this,
            g = !1;
          if (
            ("object" === a.type(arguments[0])
              ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
              : "string" === a.type(arguments[0]) &&
                ((e = arguments[0]),
                (f = arguments[1]),
                (g = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === a.type(arguments[1])
                  ? (h = "responsive")
                  : void 0 !== arguments[1] && (h = "single")),
            "single" === h)
          )
            b.options[e] = f;
          else if ("multiple" === h)
            a.each(e, function (a, c) {
              b.options[a] = c;
            });
          else if ("responsive" === h)
            for (d in f)
              if ("array" !== a.type(b.options.responsive))
                b.options.responsive = [f[d]];
              else {
                for (c = b.options.responsive.length - 1; 0 <= c; )
                  b.options.responsive[c].breakpoint === f[d].breakpoint &&
                    b.options.responsive.splice(c, 1),
                    c--;
                b.options.responsive.push(f[d]);
              }
          g && (b.unload(), b.reinit());
        }),
      (b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(),
          a.setHeight(),
          !1 === a.options.fade
            ? a.setCSS(a.getLeft(a.currentSlide))
            : a.setFade(),
          a.$slider.trigger("setPosition", [a]);
      }),
      (b.prototype.setProps = function () {
        var a = this,
          b = document.body.style;
        (a.positionProp = !0 === a.options.vertical ? "top" : "left"),
          "top" === a.positionProp
            ? a.$slider.addClass("slick-vertical")
            : a.$slider.removeClass("slick-vertical"),
          (void 0 !== b.WebkitTransition ||
            void 0 !== b.MozTransition ||
            void 0 !== b.msTransition) &&
            !0 === a.options.useCSS &&
            (a.cssTransitions = !0),
          a.options.fade &&
            ("number" == typeof a.options.zIndex
              ? a.options.zIndex < 3 && (a.options.zIndex = 3)
              : (a.options.zIndex = a.defaults.zIndex)),
          void 0 !== b.OTransform &&
            ((a.animType = "OTransform"),
            (a.transformType = "-o-transform"),
            (a.transitionType = "OTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.MozTransform &&
            ((a.animType = "MozTransform"),
            (a.transformType = "-moz-transform"),
            (a.transitionType = "MozTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.MozPerspective &&
              (a.animType = !1)),
          void 0 !== b.webkitTransform &&
            ((a.animType = "webkitTransform"),
            (a.transformType = "-webkit-transform"),
            (a.transitionType = "webkitTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.msTransform &&
            ((a.animType = "msTransform"),
            (a.transformType = "-ms-transform"),
            (a.transitionType = "msTransition"),
            void 0 === b.msTransform && (a.animType = !1)),
          void 0 !== b.transform &&
            !1 !== a.animType &&
            ((a.animType = "transform"),
            (a.transformType = "transform"),
            (a.transitionType = "transition")),
          (a.transformsEnabled =
            a.options.useTransform && null !== a.animType && !1 !== a.animType);
      }),
      (b.prototype.setSlideClasses = function (a) {
        var c,
          d,
          e,
          f,
          b = this;
        (d = b.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          b.$slides.eq(a).addClass("slick-current"),
          !0 === b.options.centerMode
            ? ((c = Math.floor(b.options.slidesToShow / 2)),
              !0 === b.options.infinite &&
                (c <= a && a <= b.slideCount - 1 - c
                  ? b.$slides
                      .slice(a - c, a + c + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((e = b.options.slidesToShow + a),
                    d
                      .slice(e - c + 1, e + c + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === a
                  ? d
                      .eq(d.length - 1 - b.options.slidesToShow)
                      .addClass("slick-center")
                  : a === b.slideCount - 1 &&
                    d.eq(b.options.slidesToShow).addClass("slick-center")),
              b.$slides.eq(a).addClass("slick-center"))
            : 0 <= a && a <= b.slideCount - b.options.slidesToShow
            ? b.$slides
                .slice(a, a + b.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : d.length <= b.options.slidesToShow
            ? d.addClass("slick-active").attr("aria-hidden", "false")
            : ((f = b.slideCount % b.options.slidesToShow),
              (e = !0 === b.options.infinite ? b.options.slidesToShow + a : a),
              b.options.slidesToShow == b.options.slidesToScroll &&
              b.slideCount - a < b.options.slidesToShow
                ? d
                    .slice(e - (b.options.slidesToShow - f), e + f)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : d
                    .slice(e, e + b.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === b.options.lazyLoad && b.lazyLoad();
      }),
      (b.prototype.setupInfinite = function () {
        var c,
          d,
          e,
          b = this;
        if (
          (!0 === b.options.fade && (b.options.centerMode = !1),
          !0 === b.options.infinite &&
            !1 === b.options.fade &&
            ((d = null), b.slideCount > b.options.slidesToShow))
        ) {
          for (
            e =
              !0 === b.options.centerMode
                ? b.options.slidesToShow + 1
                : b.options.slidesToShow,
              c = b.slideCount;
            c > b.slideCount - e;
            c -= 1
          )
            (d = c - 1),
              a(b.$slides[d])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", d - b.slideCount)
                .prependTo(b.$slideTrack)
                .addClass("slick-cloned");
          for (c = 0; c < e; c += 1)
            (d = c),
              a(b.$slides[d])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", d + b.slideCount)
                .appendTo(b.$slideTrack)
                .addClass("slick-cloned");
          b.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              a(this).attr("id", "");
            });
        }
      }),
      (b.prototype.interrupt = function (a) {
        a || this.autoPlay(), (this.interrupted = a);
      }),
      (b.prototype.selectHandler = function (b) {
        var c = this,
          d = a(b.target).is(".slick-slide")
            ? a(b.target)
            : a(b.target).parents(".slick-slide"),
          e = parseInt(d.attr("data-slick-index"));
        return (
          e || (e = 0),
          c.slideCount <= c.options.slidesToShow
            ? (c.setSlideClasses(e), void c.asNavFor(e))
            : void c.slideHandler(e)
        );
      }),
      (b.prototype.slideHandler = function (a, b, c) {
        var d,
          e,
          f,
          g,
          j,
          h = null,
          i = this;
        return (
          (b = b || !1),
          (!0 === i.animating && !0 === i.options.waitForAnimate) ||
          (!0 === i.options.fade && i.currentSlide === a) ||
          i.slideCount <= i.options.slidesToShow
            ? void 0
            : (!1 === b && i.asNavFor(a),
              (d = a),
              (h = i.getLeft(d)),
              (g = i.getLeft(i.currentSlide)),
              (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
              !1 === i.options.infinite &&
              !1 === i.options.centerMode &&
              (a < 0 || a > i.getDotCount() * i.options.slidesToScroll)
                ? void (
                    !1 === i.options.fade &&
                    ((d = i.currentSlide),
                    !0 !== c
                      ? i.animateSlide(g, function () {
                          i.postSlide(d);
                        })
                      : i.postSlide(d))
                  )
                : !1 === i.options.infinite &&
                  !0 === i.options.centerMode &&
                  (a < 0 || a > i.slideCount - i.options.slidesToScroll)
                ? void (
                    !1 === i.options.fade &&
                    ((d = i.currentSlide),
                    !0 !== c
                      ? i.animateSlide(g, function () {
                          i.postSlide(d);
                        })
                      : i.postSlide(d))
                  )
                : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                  (e =
                    d < 0
                      ? i.slideCount % i.options.slidesToScroll != 0
                        ? i.slideCount -
                          (i.slideCount % i.options.slidesToScroll)
                        : i.slideCount + d
                      : d >= i.slideCount
                      ? i.slideCount % i.options.slidesToScroll != 0
                        ? 0
                        : d - i.slideCount
                      : d),
                  (i.animating = !0),
                  i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                  (f = i.currentSlide),
                  (i.currentSlide = e),
                  i.setSlideClasses(i.currentSlide),
                  i.options.asNavFor &&
                    (j = (j = i.getNavTarget()).slick("getSlick")).slideCount <=
                      j.options.slidesToShow &&
                    j.setSlideClasses(i.currentSlide),
                  i.updateDots(),
                  i.updateArrows(),
                  !0 === i.options.fade
                    ? (!0 !== c
                        ? (i.fadeSlideOut(f),
                          i.fadeSlide(e, function () {
                            i.postSlide(e);
                          }))
                        : i.postSlide(e),
                      void i.animateHeight())
                    : void (!0 !== c
                        ? i.animateSlide(h, function () {
                            i.postSlide(e);
                          })
                        : i.postSlide(e))))
        );
      }),
      (b.prototype.startLoad = function () {
        var a = this;
        !0 === a.options.arrows &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.hide(), a.$nextArrow.hide()),
          !0 === a.options.dots &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.hide(),
          a.$slider.addClass("slick-loading");
      }),
      (b.prototype.swipeDirection = function () {
        var a,
          b,
          c,
          d,
          e = this;
        return (
          (a = e.touchObject.startX - e.touchObject.curX),
          (b = e.touchObject.startY - e.touchObject.curY),
          (c = Math.atan2(b, a)),
          (d = Math.round((180 * c) / Math.PI)) < 0 && (d = 360 - Math.abs(d)),
          d <= 45 && 0 <= d
            ? !1 === e.options.rtl
              ? "left"
              : "right"
            : d <= 360 && 315 <= d
            ? !1 === e.options.rtl
              ? "left"
              : "right"
            : 135 <= d && d <= 225
            ? !1 === e.options.rtl
              ? "right"
              : "left"
            : !0 === e.options.verticalSwiping
            ? 35 <= d && d <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (b.prototype.swipeEnd = function (a) {
        var c,
          d,
          b = this;
        if (
          ((b.dragging = !1),
          (b.interrupted = !1),
          (b.shouldClick = !(10 < b.touchObject.swipeLength)),
          void 0 === b.touchObject.curX)
        )
          return !1;
        if (
          (!0 === b.touchObject.edgeHit &&
            b.$slider.trigger("edge", [b, b.swipeDirection()]),
          b.touchObject.swipeLength >= b.touchObject.minSwipe)
        ) {
          switch ((d = b.swipeDirection())) {
            case "left":
            case "down":
              (c = b.options.swipeToSlide
                ? b.checkNavigable(b.currentSlide + b.getSlideCount())
                : b.currentSlide + b.getSlideCount()),
                (b.currentDirection = 0);
              break;
            case "right":
            case "up":
              (c = b.options.swipeToSlide
                ? b.checkNavigable(b.currentSlide - b.getSlideCount())
                : b.currentSlide - b.getSlideCount()),
                (b.currentDirection = 1);
          }
          "vertical" != d &&
            (b.slideHandler(c),
            (b.touchObject = {}),
            b.$slider.trigger("swipe", [b, d]));
        } else
          b.touchObject.startX !== b.touchObject.curX &&
            (b.slideHandler(b.currentSlide), (b.touchObject = {}));
      }),
      (b.prototype.swipeHandler = function (a) {
        var b = this;
        if (
          !(
            !1 === b.options.swipe ||
            ("ontouchend" in document && !1 === b.options.swipe) ||
            (!1 === b.options.draggable && -1 !== a.type.indexOf("mouse"))
          )
        )
          switch (
            ((b.touchObject.fingerCount =
              a.originalEvent && void 0 !== a.originalEvent.touches
                ? a.originalEvent.touches.length
                : 1),
            (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
            !0 === b.options.verticalSwiping &&
              (b.touchObject.minSwipe =
                b.listHeight / b.options.touchThreshold),
            a.data.action)
          ) {
            case "start":
              b.swipeStart(a);
              break;
            case "move":
              b.swipeMove(a);
              break;
            case "end":
              b.swipeEnd(a);
          }
      }),
      (b.prototype.swipeMove = function (a) {
        var d,
          e,
          f,
          g,
          h,
          b = this;
        return (
          (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
          !(!b.dragging || (h && 1 !== h.length)) &&
            ((d = b.getLeft(b.currentSlide)),
            (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
            (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
            (b.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
            )),
            !0 === b.options.verticalSwiping &&
              (b.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(b.touchObject.curY - b.touchObject.startY, 2)
                )
              )),
            "vertical" !== (e = b.swipeDirection())
              ? (void 0 !== a.originalEvent &&
                  4 < b.touchObject.swipeLength &&
                  a.preventDefault(),
                (g =
                  (!1 === b.options.rtl ? 1 : -1) *
                  (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                !0 === b.options.verticalSwiping &&
                  (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                (f = b.touchObject.swipeLength),
                (b.touchObject.edgeHit = !1) === b.options.infinite &&
                  ((0 === b.currentSlide && "right" === e) ||
                    (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                  ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                  (b.touchObject.edgeHit = !0)),
                !1 === b.options.vertical
                  ? (b.swipeLeft = d + f * g)
                  : (b.swipeLeft =
                      d + f * (b.$list.height() / b.listWidth) * g),
                !0 === b.options.verticalSwiping && (b.swipeLeft = d + f * g),
                !0 !== b.options.fade &&
                  !1 !== b.options.touchMove &&
                  (!0 === b.animating
                    ? ((b.swipeLeft = null), !1)
                    : void b.setCSS(b.swipeLeft)))
              : void 0)
        );
      }),
      (b.prototype.swipeStart = function (a) {
        var c,
          b = this;
        return (
          (b.interrupted = !0),
          1 !== b.touchObject.fingerCount ||
          b.slideCount <= b.options.slidesToShow
            ? !(b.touchObject = {})
            : (void 0 !== a.originalEvent &&
                void 0 !== a.originalEvent.touches &&
                (c = a.originalEvent.touches[0]),
              (b.touchObject.startX = b.touchObject.curX =
                void 0 !== c ? c.pageX : a.clientX),
              (b.touchObject.startY = b.touchObject.curY =
                void 0 !== c ? c.pageY : a.clientY),
              void (b.dragging = !0))
        );
      }),
      (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
        function () {
          var a = this;
          null !== a.$slidesCache &&
            (a.unload(),
            a.$slideTrack.children(this.options.slide).detach(),
            a.$slidesCache.appendTo(a.$slideTrack),
            a.reinit());
        }),
      (b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
          b.$dots && b.$dots.remove(),
          b.$prevArrow &&
            b.htmlExpr.test(b.options.prevArrow) &&
            b.$prevArrow.remove(),
          b.$nextArrow &&
            b.htmlExpr.test(b.options.nextArrow) &&
            b.$nextArrow.remove(),
          b.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (b.prototype.unslick = function (a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy();
      }),
      (b.prototype.updateArrows = function () {
        var a = this;
        Math.floor(a.options.slidesToShow / 2),
          !0 === a.options.arrows &&
            a.slideCount > a.options.slidesToShow &&
            !a.options.infinite &&
            (a.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            a.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === a.currentSlide
              ? (a.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
                !1 === a.options.centerMode
              ? (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - 1 &&
                !0 === a.options.centerMode &&
                (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots &&
          (a.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          a.$dots
            .find("li")
            .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"));
      }),
      (b.prototype.visibility = function () {
        var a = this;
        a.options.autoplay &&
          (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
      }),
      (a.fn.slick = function () {
        var f,
          g,
          a = this,
          c = arguments[0],
          d = Array.prototype.slice.call(arguments, 1),
          e = a.length;
        for (f = 0; f < e; f++)
          if (
            ("object" == typeof c || void 0 === c
              ? (a[f].slick = new b(a[f], c))
              : (g = a[f].slick[c].apply(a[f].slick, d)),
            void 0 !== g)
          )
            return g;
        return a;
      });
  }),
  $(".block2__slider-big").slick({
    arrows: !1,
    fade: !0,
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: !0,
    asNavFor: ".block2__slider-small",
  }),
  $(".block2__slider-small").slick({
    arrows: !1,
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".block2__slider-big",
    focusOnSelect: !0,
    adaptiveHeight: !0,
  }),
  $(".block2__slider-big2").slick({
    arrows: !1,
    fade: !0,
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: !0,
    asNavFor: ".block2__slider-small2",
  }),
  $(".block2__slider-small2").slick({
    arrows: !1,
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".block2__slider-big2",
    focusOnSelect: !0,
    adaptiveHeight: !0,
  }),
  $(".header__btn").click(function () {
    $(".header__nav").fadeIn(300);
  }),
  $(".header__close").click(function () {
    $(".header__nav").fadeOut(300);
  }),
  $(".btn").click(function () {
    $(".modal").fadeIn(300), $(".modal__overlay").fadeIn(300);
  }),
  $(".modal__close").click(function () {
    $(".modal").fadeOut(300),
      $(".modal__overlay").fadeOut(300),
      $(".success").hasClass("show-success") &&
        $(".success").removeClass("show-success");
  }),
  $(".modal__overlay").click(function () {
    $(".modal").fadeOut(300),
      $(".modal__overlay").fadeOut(300),
      $(".success").hasClass("show-success") &&
        $(".success").removeClass("show-success");
  }),
  $(".success__close").click(function () {
    $(".success").removeClass("show-success");
  }),
  1023 < $(window).width()
    ? $(".header__nav-link").click(function () {
        return (
          $("html, body").animate(
            { scrollTop: $($.attr(this, "href")).offset().top - 80 },
            300
          ),
          !1
        );
      })
    : $(".header__nav-link").click(function () {
        return (
          $(".header__nav").fadeOut(300),
          $("html, body").animate(
            { scrollTop: $($.attr(this, "href")).offset().top - 56 },
            300
          ),
          !1
        );
      }),
  $(window).scroll(function () {
    300 < window.pageYOffset
      ? $(".header").addClass("header--fixed")
      : $(".header").removeClass("header--fixed");
  });
