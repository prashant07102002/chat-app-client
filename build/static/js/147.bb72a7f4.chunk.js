/*! For license information please see 147.bb72a7f4.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
    [147],
    {
        3932: function (e, i, n) {
            n.d(i, {
                Z: function () {
                    return xi;
                },
            });
            var a = n(1413),
                r = n(2791),
                o = n(2982),
                t = n(885),
                f = n(1002);
            function s() {
                s = function () {
                    return e;
                };
                var e = {},
                    i = Object.prototype,
                    n = i.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    r = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    t = a.toStringTag || "@@toStringTag";
                function d(e, i, n) {
                    return (
                        Object.defineProperty(e, i, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        }),
                        e[i]
                    );
                }
                try {
                    d({}, "");
                } catch (j) {
                    d = function (e, i, n) {
                        return (e[i] = n);
                    };
                }
                function l(e, i, n, a) {
                    var r = i && i.prototype instanceof v ? i : v,
                        o = Object.create(r.prototype),
                        t = new C(a || []);
                    return (
                        (o._invoke = (function (e, i, n) {
                            var a = "suspendedStart";
                            return function (r, o) {
                                if ("executing" === a)
                                    throw new Error("Generator is already running");
                                if ("completed" === a) {
                                    if ("throw" === r) throw o;
                                    return M();
                                }
                                for (n.method = r, n.arg = o; ;) {
                                    var t = n.delegate;
                                    if (t) {
                                        var f = _(t, n);
                                        if (f) {
                                            if (f === c) continue;
                                            return f;
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if ("suspendedStart" === a)
                                            throw ((a = "completed"), n.arg);
                                        n.dispatchException(n.arg);
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    a = "executing";
                                    var s = u(e, i, n);
                                    if ("normal" === s.type) {
                                        if (
                                            ((a = n.done ? "completed" : "suspendedYield"),
                                                s.arg === c)
                                        )
                                            continue;
                                        return { value: s.arg, done: n.done };
                                    }
                                    "throw" === s.type &&
                                        ((a = "completed"), (n.method = "throw"), (n.arg = s.arg));
                                }
                            };
                        })(e, n, t)),
                        o
                    );
                }
                function u(e, i, n) {
                    try {
                        return { type: "normal", arg: e.call(i, n) };
                    } catch (j) {
                        return { type: "throw", arg: j };
                    }
                }
                e.wrap = l;
                var c = {};
                function v() { }
                function m() { }
                function k() { }
                var g = {};
                d(g, r, function () {
                    return this;
                });
                var h = Object.getPrototypeOf,
                    p = h && h(h(S([])));
                p && p !== i && n.call(p, r) && (g = p);
                var w = (k.prototype = v.prototype = Object.create(g));
                function y(e) {
                    ["next", "throw", "return"].forEach(function (i) {
                        d(e, i, function (e) {
                            return this._invoke(i, e);
                        });
                    });
                }
                function b(e, i) {
                    function a(r, o, t, s) {
                        var d = u(e[r], e, o);
                        if ("throw" !== d.type) {
                            var l = d.arg,
                                c = l.value;
                            return c && "object" == (0, f.Z)(c) && n.call(c, "__await")
                                ? i.resolve(c.__await).then(
                                    function (e) {
                                        a("next", e, t, s);
                                    },
                                    function (e) {
                                        a("throw", e, t, s);
                                    }
                                )
                                : i.resolve(c).then(
                                    function (e) {
                                        (l.value = e), t(l);
                                    },
                                    function (e) {
                                        return a("throw", e, t, s);
                                    }
                                );
                        }
                        s(d.arg);
                    }
                    var r;
                    this._invoke = function (e, n) {
                        function o() {
                            return new i(function (i, r) {
                                a(e, n, i, r);
                            });
                        }
                        return (r = r ? r.then(o, o) : o());
                    };
                }
                function _(e, i) {
                    var n = e.iterator[i.method];
                    if (void 0 === n) {
                        if (((i.delegate = null), "throw" === i.method)) {
                            if (
                                e.iterator.return &&
                                ((i.method = "return"),
                                    (i.arg = void 0),
                                    _(e, i),
                                    "throw" === i.method)
                            )
                                return c;
                            (i.method = "throw"),
                                (i.arg = new TypeError(
                                    "The iterator does not provide a 'throw' method"
                                ));
                        }
                        return c;
                    }
                    var a = u(n, e.iterator, i.arg);
                    if ("throw" === a.type)
                        return (
                            (i.method = "throw"), (i.arg = a.arg), (i.delegate = null), c
                        );
                    var r = a.arg;
                    return r
                        ? r.done
                            ? ((i[e.resultName] = r.value),
                                (i.next = e.nextLoc),
                                "return" !== i.method &&
                                ((i.method = "next"), (i.arg = void 0)),
                                (i.delegate = null),
                                c)
                            : r
                        : ((i.method = "throw"),
                            (i.arg = new TypeError("iterator result is not an object")),
                            (i.delegate = null),
                            c);
                }
                function x(e) {
                    var i = { tryLoc: e[0] };
                    1 in e && (i.catchLoc = e[1]),
                        2 in e && ((i.finallyLoc = e[2]), (i.afterLoc = e[3])),
                        this.tryEntries.push(i);
                }
                function F(e) {
                    var i = e.completion || {};
                    (i.type = "normal"), delete i.arg, (e.completion = i);
                }
                function C(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]),
                        e.forEach(x, this),
                        this.reset(!0);
                }
                function S(e) {
                    if (e) {
                        var i = e[r];
                        if (i) return i.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function i() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return (i.value = e[a]), (i.done = !1), i;
                                    return (i.value = void 0), (i.done = !0), i;
                                };
                            return (o.next = o);
                        }
                    }
                    return { next: M };
                }
                function M() {
                    return { value: void 0, done: !0 };
                }
                return (
                    (m.prototype = k),
                    d(w, "constructor", k),
                    d(k, "constructor", m),
                    (m.displayName = d(k, t, "GeneratorFunction")),
                    (e.isGeneratorFunction = function (e) {
                        var i = "function" == typeof e && e.constructor;
                        return (
                            !!i &&
                            (i === m || "GeneratorFunction" === (i.displayName || i.name))
                        );
                    }),
                    (e.mark = function (e) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, k)
                                : ((e.__proto__ = k), d(e, t, "GeneratorFunction")),
                            (e.prototype = Object.create(w)),
                            e
                        );
                    }),
                    (e.awrap = function (e) {
                        return { __await: e };
                    }),
                    y(b.prototype),
                    d(b.prototype, o, function () {
                        return this;
                    }),
                    (e.AsyncIterator = b),
                    (e.async = function (i, n, a, r, o) {
                        void 0 === o && (o = Promise);
                        var t = new b(l(i, n, a, r), o);
                        return e.isGeneratorFunction(n)
                            ? t
                            : t.next().then(function (e) {
                                return e.done ? e.value : t.next();
                            });
                    }),
                    y(w),
                    d(w, t, "Generator"),
                    d(w, r, function () {
                        return this;
                    }),
                    d(w, "toString", function () {
                        return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                        var i = [];
                        for (var n in e) i.push(n);
                        return (
                            i.reverse(),
                            function n() {
                                for (; i.length;) {
                                    var a = i.pop();
                                    if (a in e) return (n.value = a), (n.done = !1), n;
                                }
                                return (n.done = !0), n;
                            }
                        );
                    }),
                    (e.values = S),
                    (C.prototype = {
                        constructor: C,
                        reset: function (e) {
                            if (
                                ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = void 0),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = "next"),
                                    (this.arg = void 0),
                                    this.tryEntries.forEach(F),
                                    !e)
                            )
                                for (var i in this)
                                    "t" === i.charAt(0) &&
                                        n.call(this, i) &&
                                        !isNaN(+i.slice(1)) &&
                                        (this[i] = void 0);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e;
                            var i = this;
                            function a(n, a) {
                                return (
                                    (t.type = "throw"),
                                    (t.arg = e),
                                    (i.next = n),
                                    a && ((i.method = "next"), (i.arg = void 0)),
                                    !!a
                                );
                            }
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r],
                                    t = o.completion;
                                if ("root" === o.tryLoc) return a("end");
                                if (o.tryLoc <= this.prev) {
                                    var f = n.call(o, "catchLoc"),
                                        s = n.call(o, "finallyLoc");
                                    if (f && s) {
                                        if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                                    } else if (f) {
                                        if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    } else {
                                        if (!s)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, i) {
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var r = this.tryEntries[a];
                                if (
                                    r.tryLoc <= this.prev &&
                                    n.call(r, "finallyLoc") &&
                                    this.prev < r.finallyLoc
                                ) {
                                    var o = r;
                                    break;
                                }
                            }
                            o &&
                                ("break" === e || "continue" === e) &&
                                o.tryLoc <= i &&
                                i <= o.finallyLoc &&
                                (o = null);
                            var t = o ? o.completion : {};
                            return (
                                (t.type = e),
                                (t.arg = i),
                                o
                                    ? ((this.method = "next"), (this.next = o.finallyLoc), c)
                                    : this.complete(t)
                            );
                        },
                        complete: function (e, i) {
                            if ("throw" === e.type) throw e.arg;
                            return (
                                "break" === e.type || "continue" === e.type
                                    ? (this.next = e.arg)
                                    : "return" === e.type
                                        ? ((this.rval = this.arg = e.arg),
                                            (this.method = "return"),
                                            (this.next = "end"))
                                        : "normal" === e.type && i && (this.next = i),
                                c
                            );
                        },
                        finish: function (e) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var n = this.tryEntries[i];
                                if (n.finallyLoc === e)
                                    return this.complete(n.completion, n.afterLoc), F(n), c;
                            }
                        },
                        catch: function (e) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var n = this.tryEntries[i];
                                if (n.tryLoc === e) {
                                    var a = n.completion;
                                    if ("throw" === a.type) {
                                        var r = a.arg;
                                        F(n);
                                    }
                                    return r;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (e, i, n) {
                            return (
                                (this.delegate = { iterator: S(e), resultName: i, nextLoc: n }),
                                "next" === this.method && (this.arg = void 0),
                                c
                            );
                        },
                    }),
                    e
                );
            }
            var d = n(4942),
                l = n(5671),
                u = n(3144),
                c = n(7326),
                v = n(136),
                m = n(7277);
            function k(e, i, n, a, r, o, t) {
                try {
                    var f = e[o](t),
                        s = f.value;
                } catch (d) {
                    return void n(d);
                }
                f.done ? i(s) : Promise.resolve(s).then(a, r);
            }
            function g(e) {
                return function () {
                    var i = this,
                        n = arguments;
                    return new Promise(function (a, r) {
                        var o = e.apply(i, n);
                        function t(e) {
                            k(o, a, r, t, f, "next", e);
                        }
                        function f(e) {
                            k(o, a, r, t, f, "throw", e);
                        }
                        t(void 0);
                    });
                };
            }
            var h = n(7762);
            function p(e) {
                return e && e.__esModule ? e.default : e;
            }
            function w(e, i, n) {
                return (
                    i in e
                        ? Object.defineProperty(e, i, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        })
                        : (e[i] = n),
                    e
                );
            }
            var y,
                b,
                _,
                x,
                F,
                C,
                S = {},
                M = [],
                j = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
            function L(e, i) {
                for (var n in i) e[n] = i[n];
                return e;
            }
            function E(e) {
                var i = e.parentNode;
                i && i.removeChild(e);
            }
            function B(e, i, n) {
                var a,
                    r,
                    o,
                    t = {};
                for (o in i)
                    "key" == o ? (a = i[o]) : "ref" == o ? (r = i[o]) : (t[o] = i[o]);
                if (
                    (arguments.length > 2 &&
                        (t.children = arguments.length > 3 ? y.call(arguments, 2) : n),
                        "function" == typeof e && null != e.defaultProps)
                )
                    for (o in e.defaultProps)
                        void 0 === t[o] && (t[o] = e.defaultProps[o]);
                return Z(e, t, a, r, null);
            }
            function Z(e, i, n, a, r) {
                var o = {
                    type: e,
                    props: i,
                    key: n,
                    ref: a,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == r ? ++_ : r,
                };
                return null == r && null != b.vnode && b.vnode(o), o;
            }
            function z(e) {
                return e.children;
            }
            function P(e, i) {
                (this.props = e), (this.context = i);
            }
            function W(e, i) {
                if (null == i) return e.__ ? W(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; i < e.__k.length; i++)
                    if (null != (n = e.__k[i]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? W(e) : null;
            }
            function q(e) {
                var i, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, i = 0; i < e.__k.length; i++)
                        if (null != (n = e.__k[i]) && null != n.__e) {
                            e.__e = e.__c.base = n.__e;
                            break;
                        }
                    return q(e);
                }
            }
            function R(e) {
                ((!e.__d && (e.__d = !0) && x.push(e) && !H.__r++) ||
                    C !== b.debounceRendering) &&
                    ((C = b.debounceRendering) || F)(H);
            }
            function H() {
                for (var e; (H.__r = x.length);)
                    (e = x.sort(function (e, i) {
                        return e.__v.__b - i.__v.__b;
                    })),
                        (x = []),
                        e.some(function (e) {
                            var i, n, a, r, o, t;
                            e.__d &&
                                ((o = (r = (i = e).__v).__e),
                                    (t = i.__P) &&
                                    ((n = []),
                                        ((a = L({}, r)).__v = r.__v + 1),
                                        U(
                                            t,
                                            r,
                                            a,
                                            i.__n,
                                            void 0 !== t.ownerSVGElement,
                                            null != r.__h ? [o] : null,
                                            n,
                                            null == o ? W(r) : o,
                                            r.__h
                                        ),
                                        K(n, r),
                                        r.__e != o && q(r)));
                        });
            }
            function A(e, i, n, a, r, o, t, f, s, d) {
                var l,
                    u,
                    c,
                    v,
                    m,
                    k,
                    g,
                    h = (a && a.__k) || M,
                    p = h.length;
                for (n.__k = [], l = 0; l < i.length; l++)
                    if (
                        null !=
                        (v = n.__k[l] =
                            null == (v = i[l]) || "boolean" == typeof v
                                ? null
                                : "string" == typeof v ||
                                    "number" == typeof v ||
                                    "bigint" == typeof v
                                    ? Z(null, v, null, null, v)
                                    : Array.isArray(v)
                                        ? Z(z, { children: v }, null, null, null)
                                        : v.__b > 0
                                            ? Z(v.type, v.props, v.key, null, v.__v)
                                            : v)
                    ) {
                        if (
                            ((v.__ = n),
                                (v.__b = n.__b + 1),
                                null === (c = h[l]) || (c && v.key == c.key && v.type === c.type))
                        )
                            h[l] = void 0;
                        else
                            for (u = 0; u < p; u++) {
                                if ((c = h[u]) && v.key == c.key && v.type === c.type) {
                                    h[u] = void 0;
                                    break;
                                }
                                c = null;
                            }
                        U(e, v, (c = c || S), r, o, t, f, s, d),
                            (m = v.__e),
                            (u = v.ref) &&
                            c.ref != u &&
                            (g || (g = []),
                                c.ref && g.push(c.ref, null, v),
                                g.push(u, v.__c || m, v)),
                            null != m
                                ? (null == k && (k = m),
                                    "function" == typeof v.type && v.__k === c.__k
                                        ? (v.__d = s = T(v, s, e))
                                        : (s = I(e, v, c, h, m, s)),
                                    "function" == typeof n.type && (n.__d = s))
                                : s && c.__e == s && s.parentNode != e && (s = W(c));
                    }
                for (n.__e = k, l = p; l--;)
                    null != h[l] &&
                        ("function" == typeof n.type &&
                            null != h[l].__e &&
                            h[l].__e == n.__d &&
                            (n.__d = W(a, l + 1)),
                            Y(h[l], h[l]));
                if (g) for (l = 0; l < g.length; l++) J(g[l], g[++l], g[++l]);
            }
            function T(e, i, n) {
                for (var a, r = e.__k, o = 0; r && o < r.length; o++)
                    (a = r[o]) &&
                        ((a.__ = e),
                            (i =
                                "function" == typeof a.type
                                    ? T(a, i, n)
                                    : I(n, a, a, r, a.__e, i)));
                return i;
            }
            function O(e, i) {
                return (
                    (i = i || []),
                    null == e ||
                    "boolean" == typeof e ||
                    (Array.isArray(e)
                        ? e.some(function (e) {
                            O(e, i);
                        })
                        : i.push(e)),
                    i
                );
            }
            function I(e, i, n, a, r, o) {
                var t, f, s;
                if (void 0 !== i.__d) (t = i.__d), (i.__d = void 0);
                else if (null == n || r != o || null == r.parentNode)
                    e: if (null == o || o.parentNode !== e) e.appendChild(r), (t = null);
                    else {
                        for (f = o, s = 0; (f = f.nextSibling) && s < a.length; s += 2)
                            if (f == r) break e;
                        e.insertBefore(r, o), (t = o);
                    }
                return void 0 !== t ? t : r.nextSibling;
            }
            function D(e, i, n) {
                "-" === i[0]
                    ? e.setProperty(i, n)
                    : (e[i] =
                        null == n
                            ? ""
                            : "number" != typeof n || j.test(i)
                                ? n
                                : n + "px");
            }
            function N(e, i, n, a, r) {
                var o;
                e: if ("style" === i)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if (("string" == typeof a && (e.style.cssText = a = ""), a))
                            for (i in a) (n && i in n) || D(e.style, i, "");
                        if (n) for (i in n) (a && n[i] === a[i]) || D(e.style, i, n[i]);
                    }
                else if ("o" === i[0] && "n" === i[1])
                    (o = i !== (i = i.replace(/Capture$/, ""))),
                        (i = i.toLowerCase() in e ? i.toLowerCase().slice(2) : i.slice(2)),
                        e.l || (e.l = {}),
                        (e.l[i + o] = n),
                        n
                            ? a || e.addEventListener(i, o ? G : V, o)
                            : e.removeEventListener(i, o ? G : V, o);
                else if ("dangerouslySetInnerHTML" !== i) {
                    if (r) i = i.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                    else if (
                        "href" !== i &&
                        "list" !== i &&
                        "form" !== i &&
                        "tabIndex" !== i &&
                        "download" !== i &&
                        i in e
                    )
                        try {
                            e[i] = null == n ? "" : n;
                            break e;
                        } catch (t) { }
                    "function" == typeof n ||
                        (null != n && (!1 !== n || ("a" === i[0] && "r" === i[1]))
                            ? e.setAttribute(i, n)
                            : e.removeAttribute(i));
                }
            }
            function V(e) {
                this.l[e.type + !1](b.event ? b.event(e) : e);
            }
            function G(e) {
                this.l[e.type + !0](b.event ? b.event(e) : e);
            }
            function U(e, i, n, a, r, o, t, f, s) {
                var d,
                    l,
                    u,
                    c,
                    v,
                    m,
                    k,
                    g,
                    h,
                    p,
                    w,
                    _ = i.type;
                if (void 0 !== i.constructor) return null;
                null != n.__h &&
                    ((s = n.__h), (f = i.__e = n.__e), (i.__h = null), (o = [f])),
                    (d = b.__b) && d(i);
                try {
                    e: if ("function" == typeof _) {
                        if (
                            ((g = i.props),
                                (h = (d = _.contextType) && a[d.__c]),
                                (p = d ? (h ? h.props.value : d.__) : a),
                                n.__c
                                    ? (k = (l = i.__c = n.__c).__ = l.__E)
                                    : ("prototype" in _ && _.prototype.render
                                        ? (i.__c = l = new _(g, p))
                                        : ((i.__c = l = new P(g, p)),
                                            (l.constructor = _),
                                            (l.render = X)),
                                        h && h.sub(l),
                                        (l.props = g),
                                        l.state || (l.state = {}),
                                        (l.context = p),
                                        (l.__n = a),
                                        (u = l.__d = !0),
                                        (l.__h = [])),
                                null == l.__s && (l.__s = l.state),
                                null != _.getDerivedStateFromProps &&
                                (l.__s == l.state && (l.__s = L({}, l.__s)),
                                    L(l.__s, _.getDerivedStateFromProps(g, l.__s))),
                                (c = l.props),
                                (v = l.state),
                                u)
                        )
                            null == _.getDerivedStateFromProps &&
                                null != l.componentWillMount &&
                                l.componentWillMount(),
                                null != l.componentDidMount && l.__h.push(l.componentDidMount);
                        else {
                            if (
                                (null == _.getDerivedStateFromProps &&
                                    g !== c &&
                                    null != l.componentWillReceiveProps &&
                                    l.componentWillReceiveProps(g, p),
                                    (!l.__e &&
                                        null != l.shouldComponentUpdate &&
                                        !1 === l.shouldComponentUpdate(g, l.__s, p)) ||
                                    i.__v === n.__v)
                            ) {
                                (l.props = g),
                                    (l.state = l.__s),
                                    i.__v !== n.__v && (l.__d = !1),
                                    (l.__v = i),
                                    (i.__e = n.__e),
                                    (i.__k = n.__k),
                                    i.__k.forEach(function (e) {
                                        e && (e.__ = i);
                                    }),
                                    l.__h.length && t.push(l);
                                break e;
                            }
                            null != l.componentWillUpdate &&
                                l.componentWillUpdate(g, l.__s, p),
                                null != l.componentDidUpdate &&
                                l.__h.push(function () {
                                    l.componentDidUpdate(c, v, m);
                                });
                        }
                        (l.context = p),
                            (l.props = g),
                            (l.state = l.__s),
                            (d = b.__r) && d(i),
                            (l.__d = !1),
                            (l.__v = i),
                            (l.__P = e),
                            (d = l.render(l.props, l.state, l.context)),
                            (l.state = l.__s),
                            null != l.getChildContext &&
                            (a = L(L({}, a), l.getChildContext())),
                            u ||
                            null == l.getSnapshotBeforeUpdate ||
                            (m = l.getSnapshotBeforeUpdate(c, v)),
                            (w =
                                null != d && d.type === z && null == d.key
                                    ? d.props.children
                                    : d),
                            A(e, Array.isArray(w) ? w : [w], i, n, a, r, o, t, f, s),
                            (l.base = i.__e),
                            (i.__h = null),
                            l.__h.length && t.push(l),
                            k && (l.__E = l.__ = null),
                            (l.__e = !1);
                    } else
                        null == o && i.__v === n.__v
                            ? ((i.__k = n.__k), (i.__e = n.__e))
                            : (i.__e = (function (e, i, n, a, r, o, t, f) {
                                var s,
                                    d,
                                    l,
                                    u = n.props,
                                    c = i.props,
                                    v = i.type,
                                    m = 0;
                                if (("svg" === v && (r = !0), null != o))
                                    for (; m < o.length; m++)
                                        if (
                                            (s = o[m]) &&
                                            "setAttribute" in s == !!v &&
                                            (v ? s.localName === v : 3 === s.nodeType)
                                        ) {
                                            (e = s), (o[m] = null);
                                            break;
                                        }
                                if (null == e) {
                                    if (null === v) return document.createTextNode(c);
                                    (e = r
                                        ? document.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            v
                                        )
                                        : document.createElement(v, c.is && c)),
                                        (o = null),
                                        (f = !1);
                                }
                                if (null === v)
                                    u === c || (f && e.data === c) || (e.data = c);
                                else {
                                    if (
                                        ((o = o && y.call(e.childNodes)),
                                            (d = (u = n.props || S).dangerouslySetInnerHTML),
                                            (l = c.dangerouslySetInnerHTML),
                                            !f)
                                    ) {
                                        if (null != o)
                                            for (u = {}, m = 0; m < e.attributes.length; m++)
                                                u[e.attributes[m].name] = e.attributes[m].value;
                                        (l || d) &&
                                            ((l &&
                                                ((d && l.__html == d.__html) ||
                                                    l.__html === e.innerHTML)) ||
                                                (e.innerHTML = (l && l.__html) || ""));
                                    }
                                    if (
                                        ((function (e, i, n, a, r) {
                                            var o;
                                            for (o in n)
                                                "children" === o ||
                                                    "key" === o ||
                                                    o in i ||
                                                    N(e, o, null, n[o], a);
                                            for (o in i)
                                                (r && "function" != typeof i[o]) ||
                                                    "children" === o ||
                                                    "key" === o ||
                                                    "value" === o ||
                                                    "checked" === o ||
                                                    n[o] === i[o] ||
                                                    N(e, o, i[o], n[o], a);
                                        })(e, c, u, r, f),
                                            l)
                                    )
                                        i.__k = [];
                                    else if (
                                        ((m = i.props.children),
                                            A(
                                                e,
                                                Array.isArray(m) ? m : [m],
                                                i,
                                                n,
                                                a,
                                                r && "foreignObject" !== v,
                                                o,
                                                t,
                                                o ? o[0] : n.__k && W(n, 0),
                                                f
                                            ),
                                            null != o)
                                    )
                                        for (m = o.length; m--;) null != o[m] && E(o[m]);
                                    f ||
                                        ("value" in c &&
                                            void 0 !== (m = c.value) &&
                                            (m !== u.value ||
                                                m !== e.value ||
                                                ("progress" === v && !m)) &&
                                            N(e, "value", m, u.value, !1),
                                            "checked" in c &&
                                            void 0 !== (m = c.checked) &&
                                            m !== e.checked &&
                                            N(e, "checked", m, u.checked, !1));
                                }
                                return e;
                            })(n.__e, i, n, a, r, o, t, s));
                    (d = b.diffed) && d(i);
                } catch (x) {
                    (i.__v = null),
                        (s || null != o) &&
                        ((i.__e = f), (i.__h = !!s), (o[o.indexOf(f)] = null)),
                        b.__e(x, i, n);
                }
            }
            function K(e, i) {
                b.__c && b.__c(i, e),
                    e.some(function (i) {
                        try {
                            (e = i.__h),
                                (i.__h = []),
                                e.some(function (e) {
                                    e.call(i);
                                });
                        } catch (n) {
                            b.__e(n, i.__v);
                        }
                    });
            }
            function J(e, i, n) {
                try {
                    "function" == typeof e ? e(i) : (e.current = i);
                } catch (a) {
                    b.__e(a, n);
                }
            }
            function Y(e, i, n) {
                var a, r;
                if (
                    (b.unmount && b.unmount(e),
                        (a = e.ref) && ((a.current && a.current !== e.__e) || J(a, null, i)),
                        null != (a = e.__c))
                ) {
                    if (a.componentWillUnmount)
                        try {
                            a.componentWillUnmount();
                        } catch (e) {
                            b.__e(e, i);
                        }
                    a.base = a.__P = null;
                }
                if ((a = e.__k))
                    for (r = 0; r < a.length; r++)
                        a[r] && Y(a[r], i, "function" != typeof e.type);
                n || null == e.__e || E(e.__e), (e.__e = e.__d = void 0);
            }
            function X(e, i, n) {
                return this.constructor(e, n);
            }
            function $(e, i, n) {
                var a, r, o;
                b.__ && b.__(e, i),
                    (r = (a = "function" == typeof n) ? null : (n && n.__k) || i.__k),
                    (o = []),
                    U(
                        i,
                        (e = ((!a && n) || i).__k = B(z, null, [e])),
                        r || S,
                        S,
                        void 0 !== i.ownerSVGElement,
                        !a && n
                            ? [n]
                            : r
                                ? null
                                : i.firstChild
                                    ? y.call(i.childNodes)
                                    : null,
                        o,
                        !a && n ? n : r ? r.__e : i.firstChild,
                        a
                    ),
                    K(o, e);
            }
            (y = M.slice),
                (b = {
                    __e: function (e, i) {
                        for (var n, a, r; (i = i.__);)
                            if ((n = i.__c) && !n.__)
                                try {
                                    if (
                                        ((a = n.constructor) &&
                                            null != a.getDerivedStateFromError &&
                                            (n.setState(a.getDerivedStateFromError(e)), (r = n.__d)),
                                            null != n.componentDidCatch &&
                                            (n.componentDidCatch(e), (r = n.__d)),
                                            r)
                                    )
                                        return (n.__E = n);
                                } catch (i) {
                                    e = i;
                                }
                        throw e;
                    },
                }),
                (_ = 0),
                (P.prototype.setState = function (e, i) {
                    var n;
                    (n =
                        null != this.__s && this.__s !== this.state
                            ? this.__s
                            : (this.__s = L({}, this.state))),
                        "function" == typeof e && (e = e(L({}, n), this.props)),
                        e && L(n, e),
                        null != e && this.__v && (i && this.__h.push(i), R(this));
                }),
                (P.prototype.forceUpdate = function (e) {
                    this.__v && ((this.__e = !0), e && this.__h.push(e), R(this));
                }),
                (P.prototype.render = z),
                (x = []),
                (F =
                    "function" == typeof Promise
                        ? Promise.prototype.then.bind(Promise.resolve())
                        : setTimeout),
                (H.__r = 0);
            var Q = 0;
            function ee(e, i, n, a, r) {
                var o,
                    t,
                    f = {};
                for (t in i) "ref" == t ? (o = i[t]) : (f[t] = i[t]);
                var s = {
                    type: e,
                    props: f,
                    key: n,
                    ref: o,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: --Q,
                    __source: a,
                    __self: r,
                };
                if ("function" == typeof e && (o = e.defaultProps))
                    for (t in o) void 0 === f[t] && (f[t] = o[t]);
                return b.vnode && b.vnode(s), s;
            }
            var ie = {
                set: function (e, i) {
                    try {
                        window.localStorage["emoji-mart.".concat(e)] = JSON.stringify(i);
                    } catch (n) { }
                },
                get: function (e) {
                    try {
                        var i = window.localStorage["emoji-mart.".concat(e)];
                        if (i) return JSON.parse(i);
                    } catch (n) { }
                },
            },
                ne = new Map(),
                ae = [
                    { v: 14, emoji: "\ud83e\udee0" },
                    { v: 13.1, emoji: "\ud83d\ude36\u200d\ud83c\udf2b\ufe0f" },
                    { v: 13, emoji: "\ud83e\udd78" },
                    { v: 12.1, emoji: "\ud83e\uddd1\u200d\ud83e\uddb0" },
                    { v: 12, emoji: "\ud83e\udd71" },
                    { v: 11, emoji: "\ud83e\udd70" },
                    { v: 5, emoji: "\ud83e\udd29" },
                    { v: 4, emoji: "\ud83d\udc71\u200d\u2640\ufe0f" },
                    { v: 3, emoji: "\ud83e\udd23" },
                    { v: 2, emoji: "\ud83d\udc4b\ud83c\udffb" },
                    { v: 1, emoji: "\ud83d\ude43" },
                ];
            function re(e) {
                if (ne.has(e)) return ne.get(e);
                var i = oe(e);
                return ne.set(e, i), i;
            }
            var oe = (function () {
                var e = null;
                try {
                    navigator.userAgent.includes("jsdom") ||
                        (e = document.createElement("canvas").getContext("2d"));
                } catch (a) { }
                if (!e)
                    return function () {
                        return !1;
                    };
                var i = 20,
                    n = Math.floor(12.5);
                return (
                    (e.font = n + "px Arial, Sans-Serif"),
                    (e.textBaseline = "top"),
                    (e.canvas.width = 40),
                    (e.canvas.height = 25),
                    function (n) {
                        e.clearRect(0, 0, 40, 25),
                            (e.fillStyle = "#FF0000"),
                            e.fillText(n, 0, 22),
                            (e.fillStyle = "#0000FF"),
                            e.fillText(n, i, 22);
                        for (
                            var a = e.getImageData(0, 0, i, 25).data, r = a.length, o = 0;
                            o < r && !a[o + 3];
                            o += 4
                        );
                        if (o >= r) return !1;
                        var t = i + ((o / 4) % i),
                            f = Math.floor(o / 4 / i),
                            s = e.getImageData(t, f, 1, 1).data;
                        return (
                            a[o] === s[0] &&
                            a[o + 2] === s[2] &&
                            !(e.measureText(n).width >= i)
                        );
                    }
                );
            })(),
                te = {
                    latestVersion: function () {
                        var e,
                            i = (0, h.Z)(ae);
                        try {
                            for (i.s(); !(e = i.n()).done;) {
                                var n = e.value,
                                    a = n.v;
                                if (re(n.emoji)) return a;
                            }
                        } catch (r) {
                            i.e(r);
                        } finally {
                            i.f();
                        }
                    },
                    noCountryFlags: function () {
                        return !re("\ud83c\udde8\ud83c\udde6");
                    },
                },
                fe = [
                    "+1",
                    "grinning",
                    "kissing_heart",
                    "heart_eyes",
                    "laughing",
                    "stuck_out_tongue_winking_eye",
                    "sweat_smile",
                    "joy",
                    "scream",
                    "disappointed",
                    "unamused",
                    "weary",
                    "sob",
                    "sunglasses",
                    "heart",
                ],
                se = null;
            var de,
                le = {
                    add: function (e) {
                        se || (se = ie.get("frequently") || {});
                        var i = e.id || e;
                        i &&
                            (se[i] || (se[i] = 0),
                                (se[i] += 1),
                                ie.set("last", i),
                                ie.set("frequently", se));
                    },
                    get: function (e) {
                        var i = e.maxFrequentRows,
                            n = e.perLine;
                        if (!i) return [];
                        se || (se = ie.get("frequently"));
                        var a = [];
                        if (!se) {
                            for (var r in ((se = {}), fe.slice(0, n))) {
                                var o = fe[r];
                                (se[o] = n - r), a.push(o);
                            }
                            return a;
                        }
                        var t = i * n,
                            f = ie.get("last");
                        for (var s in se) a.push(s);
                        if (
                            (a.sort(function (e, i) {
                                var n = se[i],
                                    a = se[e];
                                return n == a ? e.localeCompare(i) : n - a;
                            }),
                                a.length > t)
                        ) {
                            var d = a.slice(t);
                            a = a.slice(0, t);
                            var l,
                                u = (0, h.Z)(d);
                            try {
                                for (u.s(); !(l = u.n()).done;) {
                                    var c = l.value;
                                    c != f && delete se[c];
                                }
                            } catch (v) {
                                u.e(v);
                            } finally {
                                u.f();
                            }
                            f &&
                                -1 == a.indexOf(f) &&
                                (delete se[a[a.length - 1]], a.splice(-1, 1, f)),
                                ie.set("frequently", se);
                        }
                        return a;
                    },
                };
            de = JSON.parse(
                '{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn\u2019t be found","pick":"Pick an emoji\u2026","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}'
            );
            var ue = {
                autoFocus: { value: !1 },
                emojiButtonColors: { value: null },
                emojiButtonRadius: { value: "100%" },
                emojiButtonSize: { value: 36 },
                emojiSize: { value: 24 },
                emojiVersion: {
                    value: 14,
                    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14],
                },
                icons: { value: "auto", choices: ["auto", "outline", "solid"] },
                locale: {
                    value: "en",
                    choices: [
                        "en",
                        "ar",
                        "cs",
                        "de",
                        "es",
                        "fa",
                        "fi",
                        "fr",
                        "it",
                        "ja",
                        "nl",
                        "pl",
                        "pt",
                        "ru",
                        "uk",
                        "zh",
                    ],
                },
                maxFrequentRows: { value: 4 },
                navPosition: { value: "top", choices: ["top", "bottom", "none"] },
                noCountryFlags: { value: !1 },
                noResultsEmoji: { value: null },
                perLine: { value: 9 },
                previewEmoji: { value: null },
                previewPosition: {
                    value: "bottom",
                    choices: ["top", "bottom", "none"],
                },
                searchPosition: {
                    value: "sticky",
                    choices: ["sticky", "static", "none"],
                },
                set: {
                    value: "native",
                    choices: ["native", "apple", "facebook", "google", "twitter"],
                },
                skin: { value: 1, choices: [1, 2, 3, 4, 5, 6] },
                skinTonePosition: {
                    value: "preview",
                    choices: ["preview", "search", "none"],
                },
                theme: { value: "auto", choices: ["auto", "light", "dark"] },
                categories: null,
                categoryIcons: null,
                custom: null,
                data: null,
                i18n: null,
                getImageURL: null,
                getSpritesheetURL: null,
                onAddCustomEmoji: null,
                onClickOutside: null,
                onEmojiSelect: null,
                stickySearch: { deprecated: !0, value: !0 },
            },
                ce = null,
                ve = null,
                me = {};
            function ke(e) {
                return ge.apply(this, arguments);
            }
            function ge() {
                return (ge = g(
                    s().mark(function e(i) {
                        var n, a;
                        return s().wrap(function (e) {
                            for (; ;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (!me[i]) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return", me[i]);
                                    case 2:
                                        return (e.next = 4), fetch(i);
                                    case 4:
                                        return (n = e.sent), (e.next = 7), n.json();
                                    case 7:
                                        return (a = e.sent), (me[i] = a), e.abrupt("return", a);
                                    case 10:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            var he = null,
                pe = null,
                we = !1;
            function ye(e) {
                var i =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = i.caller;
                return (
                    he ||
                    (he = new Promise(function (e) {
                        pe = e;
                    })),
                    e
                        ? be(e)
                        : n &&
                        !we &&
                        console.warn(
                            "`".concat(
                                n,
                                "` requires data to be initialized first. Promise will be pending until `init` is called."
                            )
                        ),
                    he
                );
            }
            function be(e) {
                return _e.apply(this, arguments);
            }
            function _e() {
                return (_e = g(
                    s().mark(function e(i) {
                        var n, a, r, o, f, d, l, u, c, v, m, k, g, w, y, b, _;
                        return s().wrap(function (e) {
                            for (; ;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (
                                            ((we = !0),
                                                (n = i.emojiVersion),
                                                (a = i.set),
                                                (r = i.locale),
                                                n || (n = ue.emojiVersion.value),
                                                a || (a = ue.set.value),
                                                r || (r = ue.locale.value),
                                                ve)
                                        ) {
                                            e.next = 35;
                                            break;
                                        }
                                        if ("function" !== typeof i.data) {
                                            e.next = 12;
                                            break;
                                        }
                                        return (e.next = 9), i.data();
                                    case 9:
                                        (e.t1 = e.sent), (e.next = 13);
                                        break;
                                    case 12:
                                        e.t1 = i.data;
                                    case 13:
                                        if (((e.t0 = e.t1), e.t0)) {
                                            e.next = 18;
                                            break;
                                        }
                                        return (
                                            (e.next = 17),
                                            ke(
                                                "https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/"
                                                    .concat(n, "/")
                                                    .concat(a, ".json")
                                            )
                                        );
                                    case 17:
                                        e.t0 = e.sent;
                                    case 18:
                                        ((ve = e.t0).emoticons = {}),
                                            (ve.natives = {}),
                                            ve.categories.unshift({ id: "frequent", emojis: [] }),
                                            (e.t2 = s().keys(ve.aliases));
                                    case 23:
                                        if ((e.t3 = e.t2()).done) {
                                            e.next = 33;
                                            break;
                                        }
                                        if (
                                            ((o = e.t3.value),
                                                (f = ve.aliases[o]),
                                                (d = ve.emojis[f]))
                                        ) {
                                            e.next = 29;
                                            break;
                                        }
                                        return e.abrupt("continue", 23);
                                    case 29:
                                        d.aliases || (d.aliases = []),
                                            d.aliases.push(o),
                                            (e.next = 23);
                                        break;
                                    case 33:
                                        e.next = 36;
                                        break;
                                    case 35:
                                        ve.categories = ve.categories.filter(function (e) {
                                            return !!!e.name;
                                        });
                                    case 36:
                                        if ("function" !== typeof i.i18n) {
                                            e.next = 42;
                                            break;
                                        }
                                        return (e.next = 39), i.i18n();
                                    case 39:
                                        (e.t5 = e.sent), (e.next = 43);
                                        break;
                                    case 42:
                                        e.t5 = i.i18n;
                                    case 43:
                                        if (((e.t4 = e.t5), e.t4)) {
                                            e.next = 53;
                                            break;
                                        }
                                        if ("en" != r) {
                                            e.next = 49;
                                            break;
                                        }
                                        (e.t6 = p(de)), (e.next = 52);
                                        break;
                                    case 49:
                                        return (
                                            (e.next = 51),
                                            ke(
                                                "https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/".concat(
                                                    r,
                                                    ".json"
                                                )
                                            )
                                        );
                                    case 51:
                                        e.t6 = e.sent;
                                    case 52:
                                        e.t4 = e.t6;
                                    case 53:
                                        if (((ce = e.t4), !i.custom)) {
                                            e.next = 71;
                                            break;
                                        }
                                        e.t7 = s().keys(i.custom);
                                    case 56:
                                        if ((e.t8 = e.t7()).done) {
                                            e.next = 71;
                                            break;
                                        }
                                        if (
                                            ((l = e.t8.value),
                                                (l = parseInt(l)),
                                                (u = i.custom[l]),
                                                (c = i.custom[l - 1]),
                                                u.emojis && u.emojis.length)
                                        ) {
                                            e.next = 63;
                                            break;
                                        }
                                        return e.abrupt("continue", 56);
                                    case 63:
                                        u.id || (u.id = "custom_".concat(l + 1)),
                                            u.name || (u.name = ce.categories.custom),
                                            c && !u.icon && (u.target = c.target || c),
                                            ve.categories.push(u),
                                            (v = (0, h.Z)(u.emojis));
                                        try {
                                            for (v.s(); !(m = v.n()).done;)
                                                (k = m.value), (ve.emojis[k.id] = k);
                                        } catch (x) {
                                            v.e(x);
                                        } finally {
                                            v.f();
                                        }
                                        e.next = 56;
                                        break;
                                    case 71:
                                        i.categories &&
                                            (ve.categories = ve.categories
                                                .filter(function (e) {
                                                    return -1 != i.categories.indexOf(e.id);
                                                })
                                                .sort(function (e, n) {
                                                    return (
                                                        i.categories.indexOf(e.id) -
                                                        i.categories.indexOf(n.id)
                                                    );
                                                })),
                                            (g = null),
                                            (w = null),
                                            "native" == a &&
                                            ((g = te.latestVersion()),
                                                (w = i.noCountryFlags || te.noCountryFlags())),
                                            (y = ve.categories.length),
                                            (b = !1),
                                            (_ = function () {
                                                var e = ve.categories[y];
                                                if ("frequent" == e.id) {
                                                    var n = i.maxFrequentRows,
                                                        a = i.perLine;
                                                    n || (n = ue.maxFrequentRows.value),
                                                        a || (a = ue.perLine.value),
                                                        (e.emojis = le.get({
                                                            maxFrequentRows: n,
                                                            perLine: a,
                                                        }));
                                                }
                                                if (!e.emojis || !e.emojis.length)
                                                    return ve.categories.splice(y, 1), "continue";
                                                var r = i.categoryIcons;
                                                if (r) {
                                                    var o = r[e.id];
                                                    o && !e.icon && (e.icon = o);
                                                }
                                                for (var f = e.emojis.length; f--;) {
                                                    var s = e.emojis[f],
                                                        d = s.id ? s : ve.emojis[s],
                                                        l = function () {
                                                            e.emojis.splice(f, 1);
                                                        };
                                                    if (d)
                                                        if (g && d.version > g) l();
                                                        else if (
                                                            !w ||
                                                            "flags" != e.id ||
                                                            je.includes(d.id)
                                                        ) {
                                                            if (!d.search) {
                                                                if (
                                                                    ((b = !0),
                                                                        (d.search =
                                                                            "," +
                                                                            [
                                                                                [d.id, !1],
                                                                                [d.name, !0],
                                                                                [d.keywords, !1],
                                                                                [d.emoticons, !1],
                                                                            ]
                                                                                .map(function (e) {
                                                                                    var i = (0, t.Z)(e, 2),
                                                                                        n = i[0],
                                                                                        a = i[1];
                                                                                    if (n)
                                                                                        return (Array.isArray(n) ? n : [n])
                                                                                            .map(function (e) {
                                                                                                return (
                                                                                                    a ? e.split(/[-|_|\s]+/) : [e]
                                                                                                ).map(function (e) {
                                                                                                    return e.toLowerCase();
                                                                                                });
                                                                                            })
                                                                                            .flat();
                                                                                })
                                                                                .flat()
                                                                                .filter(function (e) {
                                                                                    return e && e.trim();
                                                                                })
                                                                                .join(",")),
                                                                        d.emoticons)
                                                                ) {
                                                                    var u,
                                                                        c = (0, h.Z)(d.emoticons);
                                                                    try {
                                                                        for (c.s(); !(u = c.n()).done;) {
                                                                            var v = u.value;
                                                                            ve.emoticons[v] ||
                                                                                (ve.emoticons[v] = d.id);
                                                                        }
                                                                    } catch (x) {
                                                                        c.e(x);
                                                                    } finally {
                                                                        c.f();
                                                                    }
                                                                }
                                                                var m,
                                                                    k = 0,
                                                                    p = (0, h.Z)(d.skins);
                                                                try {
                                                                    for (p.s(); !(m = p.n()).done;) {
                                                                        var _ = m.value;
                                                                        if (_) {
                                                                            k++;
                                                                            var F = _.native;
                                                                            F &&
                                                                                ((ve.natives[F] = d.id),
                                                                                    (d.search += ",".concat(F)));
                                                                            var C =
                                                                                1 == k
                                                                                    ? ""
                                                                                    : ":skin-tone-".concat(k, ":");
                                                                            _.shortcodes = ":"
                                                                                .concat(d.id, ":")
                                                                                .concat(C);
                                                                        }
                                                                    }
                                                                } catch (x) {
                                                                    p.e(x);
                                                                } finally {
                                                                    p.f();
                                                                }
                                                            }
                                                        } else l();
                                                    else l();
                                                }
                                            });
                                    case 78:
                                        if (!y--) {
                                            e.next = 84;
                                            break;
                                        }
                                        if ("continue" !== _()) {
                                            e.next = 82;
                                            break;
                                        }
                                        return e.abrupt("continue", 78);
                                    case 82:
                                        e.next = 78;
                                        break;
                                    case 84:
                                        b && Me.reset(), pe();
                                    case 86:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function xe(e, i, n) {
                e || (e = {});
                var a = {};
                for (var r in i) a[r] = Fe(r, e, i, n);
                return a;
            }
            function Fe(e, i, n, a) {
                var r = n[e],
                    o =
                        (a && a.getAttribute(e)) ||
                        (null != i[e] && void 0 != i[e] ? i[e] : null);
                return r
                    ? (null != o &&
                        r.value &&
                        typeof r.value != typeof o &&
                        (o =
                            "boolean" == typeof r.value
                                ? "false" != o
                                : r.value.constructor(o)),
                        r.transform && o && (o = r.transform(o)),
                        (null == o || (r.choices && -1 == r.choices.indexOf(o))) &&
                        (o = r.value),
                        o)
                    : o;
            }
            var Ce = null;
            function Se() {
                return (
                    (Se = g(
                        s().mark(function e(i) {
                            var n,
                                a,
                                r,
                                o,
                                t,
                                f,
                                d,
                                l,
                                u,
                                c,
                                v,
                                m,
                                k,
                                g,
                                p = arguments;
                            return s().wrap(
                                function (e) {
                                    for (; ;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (
                                                    ((n = p.length > 1 && void 0 !== p[1] ? p[1] : {}),
                                                        (a = n.maxResults),
                                                        (r = n.caller),
                                                        i && i.trim().length)
                                                ) {
                                                    e.next = 3;
                                                    break;
                                                }
                                                return e.abrupt("return", null);
                                            case 3:
                                                return (
                                                    a || (a = 90),
                                                    (e.next = 6),
                                                    ye(null, { caller: r || "SearchIndex.search" })
                                                );
                                            case 6:
                                                if (
                                                    (o = i
                                                        .toLowerCase()
                                                        .replace(/(\w)-/, "$1 ")
                                                        .split(/[\s|,]+/)
                                                        .filter(function (e, i, n) {
                                                            return e.trim() && n.indexOf(e) == i;
                                                        })).length
                                                ) {
                                                    e.next = 9;
                                                    break;
                                                }
                                                return e.abrupt("return");
                                            case 9:
                                                (t = Ce || (Ce = Object.values(ve.emojis))),
                                                    (l = (0, h.Z)(o)),
                                                    (e.prev = 11),
                                                    l.s();
                                            case 13:
                                                if ((u = l.n()).done) {
                                                    e.next = 45;
                                                    break;
                                                }
                                                if (((c = u.value), t.length)) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return e.abrupt("break", 45);
                                            case 17:
                                                (f = []),
                                                    (d = {}),
                                                    (v = (0, h.Z)(t)),
                                                    (e.prev = 20),
                                                    v.s();
                                            case 22:
                                                if ((m = v.n()).done) {
                                                    e.next = 34;
                                                    break;
                                                }
                                                if ((k = m.value).search) {
                                                    e.next = 26;
                                                    break;
                                                }
                                                return e.abrupt("continue", 32);
                                            case 26:
                                                if (-1 != (g = k.search.indexOf(",".concat(c)))) {
                                                    e.next = 29;
                                                    break;
                                                }
                                                return e.abrupt("continue", 32);
                                            case 29:
                                                f.push(k),
                                                    d[k.id] || (d[k.id] = 0),
                                                    (d[k.id] += k.id == c ? 0 : g + 1);
                                            case 32:
                                                e.next = 22;
                                                break;
                                            case 34:
                                                e.next = 39;
                                                break;
                                            case 36:
                                                (e.prev = 36), (e.t0 = e.catch(20)), v.e(e.t0);
                                            case 39:
                                                return (e.prev = 39), v.f(), e.finish(39);
                                            case 42:
                                                t = f;
                                            case 43:
                                                e.next = 13;
                                                break;
                                            case 45:
                                                e.next = 50;
                                                break;
                                            case 47:
                                                (e.prev = 47), (e.t1 = e.catch(11)), l.e(e.t1);
                                            case 50:
                                                return (e.prev = 50), l.f(), e.finish(50);
                                            case 53:
                                                if (!(f.length < 2)) {
                                                    e.next = 55;
                                                    break;
                                                }
                                                return e.abrupt("return", f);
                                            case 55:
                                                return (
                                                    f.sort(function (e, i) {
                                                        var n = d[e.id],
                                                            a = d[i.id];
                                                        return n == a ? e.id.localeCompare(i.id) : n - a;
                                                    }),
                                                    f.length > a && (f = f.slice(0, a)),
                                                    e.abrupt("return", f)
                                                );
                                            case 58:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [
                                    [11, 47, 50, 53],
                                    [20, 36, 39, 42],
                                ]
                            );
                        })
                    )),
                    Se.apply(this, arguments)
                );
            }
            var Me = {
                search: function (e) {
                    return Se.apply(this, arguments);
                },
                get: function (e) {
                    return e.id
                        ? e
                        : ve.emojis[e] ||
                        ve.emojis[ve.aliases[e]] ||
                        ve.emojis[ve.natives[e]];
                },
                reset: function () {
                    Ce = null;
                },
                SHORTCODES_REGEX: /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/,
            },
                je = [
                    "checkered_flag",
                    "crossed_flags",
                    "pirate_flag",
                    "rainbow-flag",
                    "transgender_flag",
                    "triangular_flag_on_post",
                    "waving_black_flag",
                    "waving_white_flag",
                ];
            function Le() {
                return Ee.apply(this, arguments);
            }
            function Ee() {
                return (
                    (Ee = g(
                        s().mark(function e() {
                            var i,
                                n = arguments;
                            return s().wrap(function (e) {
                                for (; ;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (i = n.length > 0 && void 0 !== n[0] ? n[0] : 1),
                                                (e.t0 = s().keys((0, o.Z)(Array(i).keys())));
                                        case 2:
                                            if ((e.t1 = e.t0()).done) {
                                                e.next = 8;
                                                break;
                                            }
                                            return (
                                                e.t1.value,
                                                (e.next = 6),
                                                new Promise(requestAnimationFrame)
                                            );
                                        case 6:
                                            e.next = 2;
                                            break;
                                        case 8:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    Ee.apply(this, arguments)
                );
            }
            function Be(e) {
                var i =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = i.skinIndex,
                    a = e.skins[n] || ((n = 0), e.skins[n]),
                    r = {
                        id: e.id,
                        name: e.name,
                        native: a.native,
                        unified: a.unified,
                        keywords: e.keywords,
                        shortcodes: a.shortcodes || e.shortcodes,
                    };
                return (
                    e.skins.length > 1 && (r.skin = n + 1),
                    a.src && (r.src = a.src),
                    e.aliases && e.aliases.length && (r.aliases = e.aliases),
                    e.emoticons && e.emoticons.length && (r.emoticons = e.emoticons),
                    r
                );
            }
            var Ze = {
                categories: {
                    activity: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: ee("path", {
                                d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113",
                            }),
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: ee("path", {
                                d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z",
                            }),
                        }),
                    },
                    custom: ee("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 448 512",
                        children: ee("path", {
                            d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z",
                        }),
                    }),
                    flags: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: ee("path", {
                                d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z",
                            }),
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: ee("path", {
                                d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z",
                            }),
                        }),
                    },
                    foods: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: ee("path", {
                                d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9",
                            }),
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: ee("path", {
                                d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z",
                            }),
                        }),
                    },
                    frequent: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [
                                ee("path", { d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z" }),
                                ee("path", {
                                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10",
                                }),
                            ],
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: ee("path", {
                                d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z",
                            }),
                        }),
                    },
                    nature: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [
                                ee("path", {
                                    d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8",
                                }),
                                ee("path", {
                                    d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235",
                                }),
                            ],
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 576 512",
                            children: ee("path", {
                                d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z",
                            }),
                        }),
                    },
                    objects: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [
                                ee("path", {
                                    d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z",
                                }),
                                ee("path", {
                                    d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789",
                                }),
                            ],
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 384 512",
                            children: ee("path", {
                                d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z",
                            }),
                        }),
                    },
                    people: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [
                                ee("path", {
                                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10",
                                }),
                                ee("path", {
                                    d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0",
                                }),
                            ],
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: ee("path", {
                                d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z",
                            }),
                        }),
                    },
                    places: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [
                                ee("path", {
                                    d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5",
                                }),
                                ee("path", {
                                    d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z",
                                }),
                            ],
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: ee("path", {
                                d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z",
                            }),
                        }),
                    },
                    symbols: {
                        outline: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: ee("path", {
                                d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76",
                            }),
                        }),
                        solid: ee("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: ee("path", {
                                d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z",
                            }),
                        }),
                    },
                },
                search: {
                    loupe: ee("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        children: ee("path", {
                            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
                        }),
                    }),
                    delete: ee("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        children: ee("path", {
                            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",
                        }),
                    }),
                },
            };
            function ze(e) {
                var i = e.id,
                    n = e.skin,
                    a = e.emoji;
                if (e.shortcodes) {
                    var r = e.shortcodes.match(Me.SHORTCODES_REGEX);
                    r && ((i = r[1]), r[2] && (n = r[2]));
                }
                if ((a || (a = Me.get(i || e.native)), !a)) return e.fallback;
                var o = a.skins[n - 1] || a.skins[0],
                    t =
                        o.src ||
                        ("native" == e.set || e.spritesheet
                            ? void 0
                            : "function" === typeof e.getImageURL
                                ? e.getImageURL(e.set, o.unified)
                                : "https://cdn.jsdelivr.net/npm/emoji-datasource-"
                                    .concat(e.set, "@14.0.0/img/")
                                    .concat(e.set, "/64/")
                                    .concat(o.unified, ".png")),
                    f =
                        "function" === typeof e.getSpritesheetURL
                            ? e.getSpritesheetURL(e.set)
                            : "https://cdn.jsdelivr.net/npm/emoji-datasource-"
                                .concat(e.set, "@14.0.0/img/")
                                .concat(e.set, "/sheets-256/64.png");
                return ee("span", {
                    class: "emoji-mart-emoji",
                    "data-emoji-set": e.set,
                    children: t
                        ? ee("img", {
                            style: {
                                height: e.size || "1em",
                                width: "auto",
                                display: "inline-block",
                                position: "relative",
                                top: ".1em",
                            },
                            alt: o.native || o.shortcodes,
                            src: t,
                        })
                        : "native" == e.set
                            ? ee("span", {
                                style: {
                                    fontSize: e.size,
                                    fontFamily:
                                        '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"',
                                },
                                children: o.native,
                            })
                            : ee("span", {
                                style: {
                                    display: "block",
                                    width: e.size,
                                    height: e.size,
                                    backgroundImage: "url(".concat(f, ")"),
                                    backgroundSize: ""
                                        .concat(100 * ve.sheet.cols, "% ")
                                        .concat(100 * ve.sheet.rows, "%"),
                                    backgroundPosition: ""
                                        .concat((100 / (ve.sheet.cols - 1)) * o.x, "% ")
                                        .concat((100 / (ve.sheet.rows - 1)) * o.y, "%"),
                                },
                            }),
                });
            }
            var Pe = (function (e) {
                (0, v.Z)(n, e);
                var i = (0, m.Z)(n);
                function n() {
                    var e,
                        a =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                    if (
                        ((0, l.Z)(this, n),
                            ((e = i.call(this)).props = a),
                            a.parent || a.ref)
                    ) {
                        var r = null,
                            o = a.parent || (r = a.ref && a.ref.current);
                        r && (r.innerHTML = ""), o && o.appendChild((0, c.Z)(e));
                    }
                    return e;
                }
                return (
                    (0, u.Z)(
                        n,
                        [
                            {
                                key: "update",
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                    for (var i in e)
                                        this.attributeChangedCallback(i, null, e[i]);
                                },
                            },
                            {
                                key: "attributeChangedCallback",
                                value: function (e, i, n) {
                                    if (this.component) {
                                        var a = Fe(
                                            e,
                                            (0, d.Z)({}, e, n),
                                            this.constructor.Props,
                                            this
                                        );
                                        this.component.componentWillReceiveProps
                                            ? this.component.componentWillReceiveProps(
                                                (0, d.Z)({}, e, a)
                                            )
                                            : ((this.component.props[e] = a),
                                                this.component.forceUpdate());
                                    }
                                },
                            },
                        ],
                        [
                            {
                                key: "observedAttributes",
                                get: function () {
                                    return Object.keys(this.Props);
                                },
                            },
                        ]
                    ),
                    n
                );
            })("undefined" !== typeof window ? window.HTMLElement : Object),
                We = (function (e) {
                    (0, v.Z)(n, e);
                    var i = (0, m.Z)(n);
                    function n(e) {
                        var a,
                            r =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            o = r.styles;
                        return (
                            (0, l.Z)(this, n),
                            (a = i.call(this, e)).setShadow(),
                            a.injectStyles(o),
                            a
                        );
                    }
                    return (
                        (0, u.Z)(n, [
                            {
                                key: "setShadow",
                                value: function () {
                                    this.attachShadow({ mode: "open" });
                                },
                            },
                            {
                                key: "injectStyles",
                                value: function (e) {
                                    if (e) {
                                        var i = document.createElement("style");
                                        (i.textContent = e),
                                            this.shadowRoot.insertBefore(
                                                i,
                                                this.shadowRoot.firstChild
                                            );
                                    }
                                },
                            },
                        ]),
                        n
                    );
                })(Pe),
                qe = {
                    fallback: "",
                    id: "",
                    native: "",
                    shortcodes: "",
                    size: {
                        value: "",
                        transform: function (e) {
                            return /\D/.test(e) ? e : "".concat(e, "px");
                        },
                    },
                    set: ue.set,
                    skin: ue.skin,
                },
                Re = (function (e) {
                    (0, v.Z)(n, e);
                    var i = (0, m.Z)(n);
                    function n(e) {
                        return (0, l.Z)(this, n), i.call(this, e);
                    }
                    return (
                        (0, u.Z)(n, [
                            {
                                key: "connectedCallback",
                                value: (function () {
                                    var e = g(
                                        s().mark(function e() {
                                            var i,
                                                n = this;
                                            return s().wrap(
                                                function (e) {
                                                    for (; ;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    ((i = xe(this.props, qe, this)).element =
                                                                        this),
                                                                    (i.ref = function (e) {
                                                                        n.component = e;
                                                                    }),
                                                                    (e.next = 5),
                                                                    ye()
                                                                );
                                                            case 5:
                                                                $(ee(ze, (0, a.Z)({}, i)), this);
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]),
                        n
                    );
                })(Pe);
            w(Re, "Props", qe),
                "undefined" === typeof customElements ||
                customElements.get("em-emoji") ||
                customElements.define("em-emoji", Re);
            var He,
                Ae,
                Te = [],
                Oe = b.__b,
                Ie = b.__r,
                De = b.diffed,
                Ne = b.__c,
                Ve = b.unmount;
            function Ge() {
                var e;
                for (
                    Te.sort(function (e, i) {
                        return e.__v.__b - i.__v.__b;
                    });
                    (e = Te.pop());

                )
                    if (e.__P)
                        try {
                            e.__H.__h.forEach(Ke), e.__H.__h.forEach(Je), (e.__H.__h = []);
                        } catch (i) {
                            (e.__H.__h = []), b.__e(i, e.__v);
                        }
            }
            (b.__b = function (e) {
                (He = null), Oe && Oe(e);
            }),
                (b.__r = function (e) {
                    Ie && Ie(e), 0;
                    var i = (He = e.__c).__H;
                    i && (i.__h.forEach(Ke), i.__h.forEach(Je), (i.__h = []));
                }),
                (b.diffed = function (e) {
                    De && De(e);
                    var i = e.__c;
                    i &&
                        i.__H &&
                        i.__H.__h.length &&
                        ((1 !== Te.push(i) && Ae === b.requestAnimationFrame) ||
                            (
                                (Ae = b.requestAnimationFrame) ||
                                function (e) {
                                    var i,
                                        n = function () {
                                            clearTimeout(a),
                                                Ue && cancelAnimationFrame(i),
                                                setTimeout(e);
                                        },
                                        a = setTimeout(n, 100);
                                    Ue && (i = requestAnimationFrame(n));
                                }
                            )(Ge)),
                        (He = null);
                }),
                (b.__c = function (e, i) {
                    i.some(function (e) {
                        try {
                            e.__h.forEach(Ke),
                                (e.__h = e.__h.filter(function (e) {
                                    return !e.__ || Je(e);
                                }));
                        } catch (n) {
                            i.some(function (e) {
                                e.__h && (e.__h = []);
                            }),
                                (i = []),
                                b.__e(n, e.__v);
                        }
                    }),
                        Ne && Ne(e, i);
                }),
                (b.unmount = function (e) {
                    Ve && Ve(e);
                    var i,
                        n = e.__c;
                    n &&
                        n.__H &&
                        (n.__H.__.forEach(function (e) {
                            try {
                                Ke(e);
                            } catch (n) {
                                i = n;
                            }
                        }),
                            i && b.__e(i, n.__v));
                });
            var Ue = "function" == typeof requestAnimationFrame;
            function Ke(e) {
                var i = He,
                    n = e.__c;
                "function" == typeof n && ((e.__c = void 0), n()), (He = i);
            }
            function Je(e) {
                var i = He;
                (e.__c = e.__()), (He = i);
            }
            function Ye(e, i) {
                for (var n in i) e[n] = i[n];
                return e;
            }
            function Xe(e, i) {
                for (var n in e) if ("__source" !== n && !(n in i)) return !0;
                for (var a in i) if ("__source" !== a && e[a] !== i[a]) return !0;
                return !1;
            }
            function $e(e) {
                this.props = e;
            }
            (($e.prototype = new P()).isPureReactComponent = !0),
                ($e.prototype.shouldComponentUpdate = function (e, i) {
                    return Xe(this.props, e) || Xe(this.state, i);
                });
            var Qe = b.__b;
            b.__b = function (e) {
                e.type &&
                    e.type.__f &&
                    e.ref &&
                    ((e.props.ref = e.ref), (e.ref = null)),
                    Qe && Qe(e);
            };
            "undefined" != typeof Symbol &&
                Symbol.for &&
                Symbol.for("react.forward_ref");
            var ei = b.__e;
            b.__e = function (e, i, n) {
                if (e.then)
                    for (var a, r = i; (r = r.__);)
                        if ((a = r.__c) && a.__c)
                            return (
                                null == i.__e && ((i.__e = n.__e), (i.__k = n.__k)), a.__c(e, i)
                            );
                ei(e, i, n);
            };
            var ii = b.unmount;
            function ni() {
                (this.__u = 0), (this.t = null), (this.__b = null);
            }
            function ai(e) {
                var i = e.__.__c;
                return i && i.__e && i.__e(e);
            }
            function ri() {
                (this.u = null), (this.o = null);
            }
            (b.unmount = function (e) {
                var i = e.__c;
                i && i.__R && i.__R(),
                    i && !0 === e.__h && (e.type = null),
                    ii && ii(e);
            }),
                ((ni.prototype = new P()).__c = function (e, i) {
                    var n = i.__c,
                        a = this;
                    null == a.t && (a.t = []), a.t.push(n);
                    var r = ai(a.__v),
                        o = !1,
                        t = function () {
                            o || ((o = !0), (n.__R = null), r ? r(f) : f());
                        };
                    n.__R = t;
                    var f = function () {
                        if (!--a.__u) {
                            if (a.state.__e) {
                                var e = a.state.__e;
                                a.__v.__k[0] = (function e(i, n, a) {
                                    return (
                                        i &&
                                        ((i.__v = null),
                                            (i.__k =
                                                i.__k &&
                                                i.__k.map(function (i) {
                                                    return e(i, n, a);
                                                })),
                                            i.__c &&
                                            i.__c.__P === n &&
                                            (i.__e && a.insertBefore(i.__e, i.__d),
                                                (i.__c.__e = !0),
                                                (i.__c.__P = a))),
                                        i
                                    );
                                })(e, e.__c.__P, e.__c.__O);
                            }
                            var i;
                            for (a.setState({ __e: (a.__b = null) }); (i = a.t.pop());)
                                i.forceUpdate();
                        }
                    },
                        s = !0 === i.__h;
                    a.__u++ || s || a.setState({ __e: (a.__b = a.__v.__k[0]) }),
                        e.then(t, t);
                }),
                (ni.prototype.componentWillUnmount = function () {
                    this.t = [];
                }),
                (ni.prototype.render = function (e, i) {
                    if (this.__b) {
                        if (this.__v.__k) {
                            var n = document.createElement("div"),
                                a = this.__v.__k[0].__c;
                            this.__v.__k[0] = (function e(i, n, a) {
                                return (
                                    i &&
                                    (i.__c &&
                                        i.__c.__H &&
                                        (i.__c.__H.__.forEach(function (e) {
                                            "function" == typeof e.__c && e.__c();
                                        }),
                                            (i.__c.__H = null)),
                                        null != (i = Ye({}, i)).__c &&
                                        (i.__c.__P === a && (i.__c.__P = n), (i.__c = null)),
                                        (i.__k =
                                            i.__k &&
                                            i.__k.map(function (i) {
                                                return e(i, n, a);
                                            }))),
                                    i
                                );
                            })(this.__b, n, (a.__O = a.__P));
                        }
                        this.__b = null;
                    }
                    var r = i.__e && B(z, null, e.fallback);
                    return (
                        r && (r.__h = null), [B(z, null, i.__e ? null : e.children), r]
                    );
                });
            var oi = function (e, i, n) {
                if (
                    (++n[1] === n[0] && e.o.delete(i),
                        e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                )
                    for (n = e.u; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        e.u = n = n[2];
                    }
            };
            ((ri.prototype = new P()).__e = function (e) {
                var i = this,
                    n = ai(i.__v),
                    a = i.o.get(e);
                return (
                    a[0]++,
                    function (r) {
                        var o = function () {
                            i.props.revealOrder ? (a.push(r), oi(i, e, a)) : r();
                        };
                        n ? n(o) : o();
                    }
                );
            }),
                (ri.prototype.render = function (e) {
                    (this.u = null), (this.o = new Map());
                    var i = O(e.children);
                    e.revealOrder && "b" === e.revealOrder[0] && i.reverse();
                    for (var n = i.length; n--;)
                        this.o.set(i[n], (this.u = [1, 0, this.u]));
                    return e.children;
                }),
                (ri.prototype.componentDidUpdate = ri.prototype.componentDidMount =
                    function () {
                        var e = this;
                        this.o.forEach(function (i, n) {
                            oi(e, n, i);
                        });
                    });
            var ti =
                ("undefined" != typeof Symbol &&
                    Symbol.for &&
                    Symbol.for("react.element")) ||
                60103,
                fi =
                    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                si = "undefined" != typeof document;
            (P.prototype.isReactComponent = {}),
                [
                    "componentWillMount",
                    "componentWillReceiveProps",
                    "componentWillUpdate",
                ].forEach(function (e) {
                    Object.defineProperty(P.prototype, e, {
                        configurable: !0,
                        get: function () {
                            return this["UNSAFE_" + e];
                        },
                        set: function (i) {
                            Object.defineProperty(this, e, {
                                configurable: !0,
                                writable: !0,
                                value: i,
                            });
                        },
                    });
                });
            var di = b.event;
            function li() { }
            function ui() {
                return this.cancelBubble;
            }
            function ci() {
                return this.defaultPrevented;
            }
            b.event = function (e) {
                return (
                    di && (e = di(e)),
                    (e.persist = li),
                    (e.isPropagationStopped = ui),
                    (e.isDefaultPrevented = ci),
                    (e.nativeEvent = e)
                );
            };
            var vi = {
                configurable: !0,
                get: function () {
                    return this.class;
                },
            },
                mi = b.vnode;
            b.vnode = function (e) {
                var i,
                    n = e.type,
                    a = e.props,
                    r = a;
                if ("string" == typeof n) {
                    var o = -1 === n.indexOf("-");
                    for (var t in ((r = {}), a)) {
                        var f = a[t];
                        (si && "children" === t && "noscript" === n) ||
                            ("value" === t && "defaultValue" in a && null == f) ||
                            ("defaultValue" === t && "value" in a && null == a.value
                                ? (t = "value")
                                : "download" === t && !0 === f
                                    ? (f = "")
                                    : /ondoubleclick/i.test(t)
                                        ? (t = "ondblclick")
                                        : /^onchange(textarea|input)/i.test(t + n) &&
                                            ((i = a.type),
                                                !(
                                                    "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                                                        ? /fil|che|rad/i
                                                        : /fil|che|ra/i
                                                ).test(i))
                                            ? (t = "oninput")
                                            : /^onfocus$/i.test(t)
                                                ? (t = "onfocusin")
                                                : /^onblur$/i.test(t)
                                                    ? (t = "onfocusout")
                                                    : /^on(Ani|Tra|Tou|BeforeInp)/.test(t)
                                                        ? (t = t.toLowerCase())
                                                        : o && fi.test(t)
                                                            ? (t = t.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                                                            : null === f && (f = void 0),
                                (r[t] = f));
                    }
                    "select" == n &&
                        r.multiple &&
                        Array.isArray(r.value) &&
                        (r.value = O(a.children).forEach(function (e) {
                            e.props.selected = -1 != r.value.indexOf(e.props.value);
                        })),
                        "select" == n &&
                        null != r.defaultValue &&
                        (r.value = O(a.children).forEach(function (e) {
                            e.props.selected = r.multiple
                                ? -1 != r.defaultValue.indexOf(e.props.value)
                                : r.defaultValue == e.props.value;
                        })),
                        (e.props = r),
                        a.class != a.className &&
                        ((vi.enumerable = "className" in a),
                            null != a.className && (r.class = a.className),
                            Object.defineProperty(r, "className", vi));
                }
                (e.$$typeof = ti), mi && mi(e);
            };
            var ki = b.__r;
            b.__r = function (e) {
                ki && ki(e), e.__c;
            };
            var gi = { light: "outline", dark: "solid" },
                hi = (function (e) {
                    (0, v.Z)(n, e);
                    var i = (0, m.Z)(n);
                    function n() {
                        var e;
                        return (
                            (0, l.Z)(this, n),
                            ((e = i.call(this)).categories = ve.categories.filter(function (
                                e
                            ) {
                                return !e.target;
                            })),
                            (e.state = { categoryId: e.categories[0].id }),
                            e
                        );
                    }
                    return (
                        (0, u.Z)(n, [
                            {
                                key: "renderIcon",
                                value: function (e) {
                                    var i = e.icon;
                                    if (i) {
                                        if (i.svg)
                                            return ee("span", {
                                                class: "flex",
                                                dangerouslySetInnerHTML: { __html: i.svg },
                                            });
                                        if (i.src) return ee("img", { src: i.src });
                                    }
                                    var n = Ze.categories[e.id] || Ze.categories.custom;
                                    return (
                                        n[
                                        "auto" == this.props.icons
                                            ? gi[this.props.theme]
                                            : this.props.icons
                                        ] || n
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        i = null;
                                    return ee("nav", {
                                        id: "nav",
                                        class: "padding",
                                        "data-position": this.props.position,
                                        children: ee("div", {
                                            class: "flex relative",
                                            children: [
                                                this.categories.map(function (n, a) {
                                                    var r = n.name || ce.categories[n.id],
                                                        o =
                                                            !e.props.unfocused && n.id == e.state.categoryId;
                                                    return (
                                                        o && (i = a),
                                                        ee("button", {
                                                            "aria-label": r,
                                                            "aria-selected": o || void 0,
                                                            title: r,
                                                            type: "button",
                                                            class: "flex flex-grow flex-center",
                                                            onMouseDown: function (e) {
                                                                return e.preventDefault();
                                                            },
                                                            onClick: function () {
                                                                e.props.onClick({ category: n, i: a });
                                                            },
                                                            children: e.renderIcon(n),
                                                        })
                                                    );
                                                }),
                                                ee("div", {
                                                    class: "bar",
                                                    style: {
                                                        width: "".concat(100 / this.categories.length, "%"),
                                                        opacity: null == i ? 0 : 1,
                                                        transform: "translateX(".concat(100 * i, "%)"),
                                                    },
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })($e),
                pi = (function (e) {
                    (0, v.Z)(n, e);
                    var i = (0, m.Z)(n);
                    function n() {
                        return (0, l.Z)(this, n), i.apply(this, arguments);
                    }
                    return (
                        (0, u.Z)(n, [
                            {
                                key: "shouldComponentUpdate",
                                value: function (e) {
                                    for (var i in e)
                                        if ("children" != i && e[i] != this.props[i]) return !0;
                                    return !1;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return this.props.children;
                                },
                            },
                        ]),
                        n
                    );
                })($e),
                wi = 10,
                yi = (function (e) {
                    (0, v.Z)(n, e);
                    var i = (0, m.Z)(n);
                    function n(e) {
                        var r;
                        return (
                            (0, l.Z)(this, n),
                            (r = i.call(this)),
                            w((0, c.Z)(r), "handleClickOutside", function (e) {
                                var i = r.props.element;
                                e.target != i &&
                                    (r.state.showSkins && r.closeSkins(),
                                        r.props.onClickOutside && r.props.onClickOutside());
                            }),
                            w((0, c.Z)(r), "handleBaseClick", function (e) {
                                r.state.showSkins &&
                                    (e.target.closest(".menu") ||
                                        (e.preventDefault(),
                                            e.stopImmediatePropagation(),
                                            r.closeSkins()));
                            }),
                            w((0, c.Z)(r), "handleBaseKeydown", function (e) {
                                r.state.showSkins &&
                                    "Escape" == e.key &&
                                    (e.preventDefault(),
                                        e.stopImmediatePropagation(),
                                        r.closeSkins());
                            }),
                            w((0, c.Z)(r), "handleSearchClick", function () {
                                r.getEmojiByPos(r.state.pos) && r.setState({ pos: [-1, -1] });
                            }),
                            w(
                                (0, c.Z)(r),
                                "handleSearchInput",
                                g(
                                    s().mark(function e() {
                                        var i, n, a, o, t, f, d, l, u, c;
                                        return s().wrap(function (e) {
                                            for (; ;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ((i = r.refs.searchInput.current)) {
                                                            e.next = 3;
                                                            break;
                                                        }
                                                        return e.abrupt("return");
                                                    case 3:
                                                        return (n = i.value), (e.next = 6), Me.search(n);
                                                    case 6:
                                                        if (
                                                            ((a = e.sent),
                                                                (o = function () {
                                                                    r.refs.scroll.current &&
                                                                        (r.refs.scroll.current.scrollTop = 0);
                                                                }),
                                                                a)
                                                        ) {
                                                            e.next = 10;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            "return",
                                                            r.setState({ searchResults: a, pos: [-1, -1] }, o)
                                                        );
                                                    case 10:
                                                        (t =
                                                            i.selectionStart == i.value.length
                                                                ? [0, 0]
                                                                : [-1, -1]),
                                                            ((f = []).setsize = a.length),
                                                            (d = null),
                                                            (l = (0, h.Z)(a));
                                                        try {
                                                            for (l.s(); !(u = l.n()).done;)
                                                                (c = u.value),
                                                                    (f.length && d.length != r.props.perLine) ||
                                                                    (((d = []).__categoryId = "search"),
                                                                        (d.__index = f.length),
                                                                        f.push(d)),
                                                                    d.push(c);
                                                        } catch (s) {
                                                            l.e(s);
                                                        } finally {
                                                            l.f();
                                                        }
                                                        r.ignoreMouse(),
                                                            r.setState({ searchResults: f, pos: t }, o);
                                                    case 18:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )
                            ),
                            w((0, c.Z)(r), "handleSearchKeyDown", function (e) {
                                var i = e.currentTarget;
                                switch ((e.stopImmediatePropagation(), e.key)) {
                                    case "ArrowLeft":
                                        r.navigate({ e: e, input: i, left: !0 });
                                        break;
                                    case "ArrowRight":
                                        r.navigate({ e: e, input: i, right: !0 });
                                        break;
                                    case "ArrowUp":
                                        r.navigate({ e: e, input: i, up: !0 });
                                        break;
                                    case "ArrowDown":
                                        r.navigate({ e: e, input: i, down: !0 });
                                        break;
                                    case "Enter":
                                        e.preventDefault(),
                                            r.handleEmojiClick({ pos: r.state.pos });
                                        break;
                                    case "Escape":
                                        e.preventDefault(),
                                            r.state.searchResults
                                                ? r.clearSearch()
                                                : r.unfocusSearch();
                                }
                            }),
                            w((0, c.Z)(r), "clearSearch", function () {
                                var e = r.refs.searchInput.current;
                                e && ((e.value = ""), e.focus(), r.handleSearchInput());
                            }),
                            w((0, c.Z)(r), "handleCategoryClick", function (e) {
                                var i = e.category,
                                    n = e.i;
                                r.scrollTo(0 == n ? { row: -1 } : { categoryId: i.id });
                            }),
                            w((0, c.Z)(r), "openSkins", function (e) {
                                var i = e.currentTarget.getBoundingClientRect();
                                r.setState(
                                    { showSkins: i },
                                    g(
                                        s().mark(function e() {
                                            var i;
                                            return s().wrap(function (e) {
                                                for (; ;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), Le(2);
                                                        case 2:
                                                            if ((i = r.refs.menu.current)) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return e.abrupt("return");
                                                        case 5:
                                                            i.classList.remove("hidden"),
                                                                r.refs.skinToneRadio.current.focus(),
                                                                r.base.addEventListener(
                                                                    "click",
                                                                    r.handleBaseClick,
                                                                    !0
                                                                ),
                                                                r.base.addEventListener(
                                                                    "keydown",
                                                                    r.handleBaseKeydown,
                                                                    !0
                                                                );
                                                        case 9:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )
                                );
                            }),
                            (r.state = (0, a.Z)(
                                { pos: [-1, -1], visibleRows: { 0: !0 } },
                                r.getInitialState(e)
                            )),
                            r
                        );
                    }
                    return (
                        (0, u.Z)(n, [
                            {
                                key: "getInitialState",
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                    return {
                                        skin: ie.get("skin") || e.skin,
                                        theme: this.initTheme(e.theme),
                                    };
                                },
                            },
                            {
                                key: "componentWillMount",
                                value: function () {
                                    (this.observers = []),
                                        (this.dir = ce.rtl ? "rtl" : "ltr"),
                                        (this.refs = {
                                            menu: { current: null },
                                            navigation: { current: null },
                                            scroll: { current: null },
                                            search: { current: null },
                                            searchInput: { current: null },
                                            skinToneButton: { current: null },
                                            skinToneRadio: { current: null },
                                        }),
                                        this.initGrid(),
                                        0 == this.props.stickySearch &&
                                        "sticky" == this.props.searchPosition &&
                                        (console.warn(
                                            "[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."
                                        ),
                                            (this.props.searchPosition = "static"));
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    if (
                                        (this.register(),
                                            (this.shadowRoot = this.base.parentNode),
                                            this.props.autoFocus)
                                    ) {
                                        var e = this.refs.searchInput;
                                        e.current && e.current.focus();
                                    }
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    var i = this;
                                    for (var n in (this.nextState || (this.nextState = {}), e))
                                        this.nextState[n] = e[n];
                                    clearTimeout(this.nextStateTimer),
                                        (this.nextStateTimer = setTimeout(function () {
                                            var e = !1;
                                            for (var n in i.nextState)
                                                (i.props[n] = i.nextState[n]),
                                                    ("custom" !== n && "categories" !== n) || (e = !0);
                                            delete i.nextState;
                                            var a = i.getInitialState();
                                            if (e) return i.reset(a);
                                            i.setState(a);
                                        }));
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.unregister();
                                },
                            },
                            {
                                key: "reset",
                                value: (function () {
                                    var e = g(
                                        s().mark(function e() {
                                            var i,
                                                n = this,
                                                a = arguments;
                                            return s().wrap(
                                                function (e) {
                                                    for (; ;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (i =
                                                                        a.length > 0 && void 0 !== a[0]
                                                                            ? a[0]
                                                                            : {}),
                                                                    (e.next = 3),
                                                                    ye(this.props)
                                                                );
                                                            case 3:
                                                                this.initGrid(),
                                                                    this.unobserve(),
                                                                    this.setState(i, function () {
                                                                        n.observeCategories(), n.observeRows();
                                                                    });
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "register",
                                value: function () {
                                    document.addEventListener("click", this.handleClickOutside),
                                        this.observe();
                                },
                            },
                            {
                                key: "unregister",
                                value: function () {
                                    document.removeEventListener(
                                        "click",
                                        this.handleClickOutside
                                    ),
                                        this.unobserve();
                                },
                            },
                            {
                                key: "observe",
                                value: function () {
                                    this.observeCategories(), this.observeRows();
                                },
                            },
                            {
                                key: "unobserve",
                                value: function () {
                                    var e,
                                        i = (0, h.Z)(this.observers);
                                    try {
                                        for (i.s(); !(e = i.n()).done;) {
                                            e.value.disconnect();
                                        }
                                    } catch (n) {
                                        i.e(n);
                                    } finally {
                                        i.f();
                                    }
                                },
                            },
                            {
                                key: "initGrid",
                                value: function () {
                                    var e = this,
                                        i = ve.categories;
                                    this.refs.categories = new Map();
                                    var n = ve.categories
                                        .map(function (e) {
                                            return e.id;
                                        })
                                        .join(",");
                                    this.navKey &&
                                        this.navKey != n &&
                                        this.refs.scroll.current &&
                                        (this.refs.scroll.current.scrollTop = 0),
                                        (this.navKey = n),
                                        (this.grid = []),
                                        (this.grid.setsize = 0);
                                    var a,
                                        r = function (i, n) {
                                            var a = [];
                                            (a.__categoryId = n.id),
                                                (a.__index = i.length),
                                                e.grid.push(a);
                                            var r = e.grid.length - 1,
                                                o = r % wi ? {} : { current: null };
                                            return (
                                                (o.index = r),
                                                (o.posinset = e.grid.setsize + 1),
                                                i.push(o),
                                                a
                                            );
                                        },
                                        o = (0, h.Z)(i);
                                    try {
                                        for (o.s(); !(a = o.n()).done;) {
                                            var t,
                                                f = a.value,
                                                s = [],
                                                d = r(s, f),
                                                l = (0, h.Z)(f.emojis);
                                            try {
                                                for (l.s(); !(t = l.n()).done;) {
                                                    var u = t.value;
                                                    d.length == this.props.perLine && (d = r(s, f)),
                                                        (this.grid.setsize += 1),
                                                        d.push(u);
                                                }
                                            } catch (c) {
                                                l.e(c);
                                            } finally {
                                                l.f();
                                            }
                                            this.refs.categories.set(f.id, {
                                                root: { current: null },
                                                rows: s,
                                            });
                                        }
                                    } catch (c) {
                                        o.e(c);
                                    } finally {
                                        o.f();
                                    }
                                },
                            },
                            {
                                key: "initTheme",
                                value: function (e) {
                                    var i = this;
                                    if ("auto" != e) return e;
                                    if (!this.darkMedia) {
                                        if (
                                            ((this.darkMedia = matchMedia(
                                                "(prefers-color-scheme: dark)"
                                            )),
                                                this.darkMedia.media.match(/^not/))
                                        )
                                            return "light";
                                        this.darkMedia.addListener(function () {
                                            "auto" == i.props.theme &&
                                                i.setState({
                                                    theme: i.darkMedia.matches ? "dark" : "light",
                                                });
                                        });
                                    }
                                    return this.darkMedia.matches ? "dark" : "light";
                                },
                            },
                            {
                                key: "getEmojiByPos",
                                value: function (e) {
                                    var i = (0, t.Z)(e, 2),
                                        n = i[0],
                                        a = i[1],
                                        r = this.state.searchResults || this.grid,
                                        o = r[n] && r[n][a];
                                    if (o) return Me.get(o);
                                },
                            },
                            {
                                key: "observeCategories",
                                value: function () {
                                    var e = this.refs.navigation.current;
                                    if (e) {
                                        var i,
                                            n = new Map(),
                                            a = function (i) {
                                                i != e.state.categoryId &&
                                                    e.setState({ categoryId: i });
                                            },
                                            r = { root: this.refs.scroll.current, threshold: [0, 1] },
                                            f = new IntersectionObserver(function (e) {
                                                var i,
                                                    r = (0, h.Z)(e);
                                                try {
                                                    for (r.s(); !(i = r.n()).done;) {
                                                        var f = i.value,
                                                            s = f.target.dataset.id;
                                                        n.set(s, f.intersectionRatio);
                                                    }
                                                } catch (k) {
                                                    r.e(k);
                                                } finally {
                                                    r.f();
                                                }
                                                var d = (0, o.Z)(n),
                                                    l = d[d.length - 1];
                                                if (1 == l[1]) return a(l[0]);
                                                var u,
                                                    c = (0, h.Z)(d);
                                                try {
                                                    for (c.s(); !(u = c.n()).done;) {
                                                        var v = (0, t.Z)(u.value, 2),
                                                            m = v[0];
                                                        if (v[1]) {
                                                            a(m);
                                                            break;
                                                        }
                                                    }
                                                } catch (k) {
                                                    c.e(k);
                                                } finally {
                                                    c.f();
                                                }
                                            }, r),
                                            s = (0, h.Z)(this.refs.categories.values());
                                        try {
                                            for (s.s(); !(i = s.n()).done;) {
                                                var d = i.value.root;
                                                f.observe(d.current);
                                            }
                                        } catch (l) {
                                            s.e(l);
                                        } finally {
                                            s.f();
                                        }
                                        this.observers.push(f);
                                    }
                                },
                            },
                            {
                                key: "observeRows",
                                value: function () {
                                    var e,
                                        i = this,
                                        n = (0, a.Z)({}, this.state.visibleRows),
                                        r = new IntersectionObserver(
                                            function (e) {
                                                var a,
                                                    r = (0, h.Z)(e);
                                                try {
                                                    for (r.s(); !(a = r.n()).done;) {
                                                        var o = a.value,
                                                            t = parseInt(o.target.dataset.index);
                                                        o.isIntersecting ? (n[t] = !0) : delete n[t];
                                                    }
                                                } catch (f) {
                                                    r.e(f);
                                                } finally {
                                                    r.f();
                                                }
                                                i.setState({ visibleRows: n });
                                            },
                                            {
                                                root: this.refs.scroll.current,
                                                rootMargin: ""
                                                    .concat(
                                                        this.props.emojiButtonSize * (wi + 5),
                                                        "px 0px "
                                                    )
                                                    .concat(this.props.emojiButtonSize * wi, "px"),
                                            }
                                        ),
                                        o = (0, h.Z)(this.refs.categories.values());
                                    try {
                                        for (o.s(); !(e = o.n()).done;) {
                                            var t,
                                                f = e.value.rows,
                                                s = (0, h.Z)(f);
                                            try {
                                                for (s.s(); !(t = s.n()).done;) {
                                                    var d = t.value;
                                                    d.current && r.observe(d.current);
                                                }
                                            } catch (l) {
                                                s.e(l);
                                            } finally {
                                                s.f();
                                            }
                                        }
                                    } catch (l) {
                                        o.e(l);
                                    } finally {
                                        o.f();
                                    }
                                    this.observers.push(r);
                                },
                            },
                            {
                                key: "preventDefault",
                                value: function (e) {
                                    e.preventDefault();
                                },
                            },
                            {
                                key: "unfocusSearch",
                                value: function () {
                                    var e = this.refs.searchInput.current;
                                    e && e.blur();
                                },
                            },
                            {
                                key: "navigate",
                                value: function (e) {
                                    var i = this,
                                        n = e.e,
                                        a = e.input,
                                        r = e.left,
                                        o = e.right,
                                        f = e.up,
                                        s = e.down,
                                        d = this.state.searchResults || this.grid;
                                    if (d.length) {
                                        var l = (0, t.Z)(this.state.pos, 2),
                                            u = l[0],
                                            c = l[1],
                                            v = (function () {
                                                if (0 == u && 0 == c && !n.repeat && (r || f))
                                                    return null;
                                                if (-1 == u)
                                                    return n.repeat ||
                                                        (!o && !s) ||
                                                        a.selectionStart != a.value.length
                                                        ? null
                                                        : [0, 0];
                                                if (r || o) {
                                                    var e = d[u],
                                                        i = r ? -1 : 1;
                                                    if (!e[(c += i)]) {
                                                        if (!(e = d[(u += i)]))
                                                            return (
                                                                (u = r ? 0 : d.length - 1),
                                                                (c = r ? 0 : d[u].length - 1),
                                                                [u, c]
                                                            );
                                                        c = r ? e.length - 1 : 0;
                                                    }
                                                    return [u, c];
                                                }
                                                if (f || s) {
                                                    var t = d[(u += f ? -1 : 1)];
                                                    return t
                                                        ? (t[c] || (c = t.length - 1), [u, c])
                                                        : ((u = f ? 0 : d.length - 1),
                                                            (c = f ? 0 : d[u].length - 1),
                                                            [u, c]);
                                                }
                                            })();
                                        v
                                            ? (n.preventDefault(),
                                                this.setState({ pos: v, keyboard: !0 }, function () {
                                                    i.scrollTo({ row: v[0] });
                                                }))
                                            : this.state.pos[0] > -1 &&
                                            this.setState({ pos: [-1, -1] });
                                    }
                                },
                            },
                            {
                                key: "scrollTo",
                                value: function (e) {
                                    var i = e.categoryId,
                                        n = e.row,
                                        a = this.state.searchResults || this.grid;
                                    if (a.length) {
                                        var r = this.refs.scroll.current,
                                            o = r.getBoundingClientRect(),
                                            t = 0;
                                        if ((n >= 0 && (i = a[n].__categoryId), i))
                                            t =
                                                (
                                                    this.refs[i] || this.refs.categories.get(i).root
                                                ).current.getBoundingClientRect().top -
                                                (o.top - r.scrollTop) +
                                                1;
                                        if (n >= 0)
                                            if (n) {
                                                var f = t + a[n].__index * this.props.emojiButtonSize,
                                                    s =
                                                        f +
                                                        this.props.emojiButtonSize +
                                                        0.88 * this.props.emojiButtonSize;
                                                if (f < r.scrollTop) t = f;
                                                else {
                                                    if (!(s > r.scrollTop + o.height)) return;
                                                    t = s - o.height;
                                                }
                                            } else t = 0;
                                        this.ignoreMouse(), (r.scrollTop = t);
                                    }
                                },
                            },
                            {
                                key: "ignoreMouse",
                                value: function () {
                                    var e = this;
                                    (this.mouseIsIgnored = !0),
                                        clearTimeout(this.ignoreMouseTimer),
                                        (this.ignoreMouseTimer = setTimeout(function () {
                                            delete e.mouseIsIgnored;
                                        }, 100));
                                },
                            },
                            {
                                key: "handleEmojiOver",
                                value: function (e) {
                                    this.mouseIsIgnored ||
                                        this.state.showSkins ||
                                        this.setState({ pos: e || [-1, -1], keyboard: !1 });
                                },
                            },
                            {
                                key: "handleEmojiClick",
                                value: function (e) {
                                    var i = e.emoji,
                                        n = e.pos;
                                    if (
                                        this.props.onEmojiSelect &&
                                        (!i && n && (i = this.getEmojiByPos(n)), i)
                                    ) {
                                        var a = Be(i, { skinIndex: this.state.skin - 1 });
                                        this.props.maxFrequentRows && le.add(a, this.props),
                                            this.props.onEmojiSelect(a);
                                    }
                                },
                            },
                            {
                                key: "closeSkins",
                                value: function () {
                                    this.state.showSkins &&
                                        (this.setState({ showSkins: null, tempSkin: null }),
                                            this.base.removeEventListener(
                                                "click",
                                                this.handleBaseClick
                                            ),
                                            this.base.removeEventListener(
                                                "keydown",
                                                this.handleBaseKeydown
                                            ));
                                },
                            },
                            {
                                key: "handleSkinMouseOver",
                                value: function (e) {
                                    this.setState({ tempSkin: e });
                                },
                            },
                            {
                                key: "handleSkinClick",
                                value: function (e) {
                                    this.ignoreMouse(),
                                        this.closeSkins(),
                                        this.setState({ skin: e, tempSkin: null }),
                                        ie.set("skin", e);
                                },
                            },
                            {
                                key: "renderNav",
                                value: function () {
                                    return ee(
                                        hi,
                                        {
                                            ref: this.refs.navigation,
                                            icons: this.props.icons,
                                            theme: this.state.theme,
                                            unfocused: !!this.state.searchResults,
                                            position: this.props.navPosition,
                                            onClick: this.handleCategoryClick,
                                        },
                                        this.navKey
                                    );
                                },
                            },
                            {
                                key: "renderPreview",
                                value: function () {
                                    var e = this.getEmojiByPos(this.state.pos),
                                        i =
                                            this.state.searchResults &&
                                            !this.state.searchResults.length;
                                    return ee("div", {
                                        id: "preview",
                                        class: "flex flex-middle",
                                        dir: this.dir,
                                        "data-position": this.props.previewPosition,
                                        children: [
                                            ee("div", {
                                                class: "flex flex-middle flex-grow",
                                                children: [
                                                    ee("div", {
                                                        class: "flex flex-auto flex-middle flex-center",
                                                        style: {
                                                            height: this.props.emojiButtonSize,
                                                            fontSize: this.props.emojiButtonSize,
                                                        },
                                                        children: ee(ze, {
                                                            emoji: e,
                                                            id: i
                                                                ? this.props.noResultsEmoji || "cry"
                                                                : this.props.previewEmoji ||
                                                                ("top" == this.props.previewPosition
                                                                    ? "point_down"
                                                                    : "point_up"),
                                                            set: this.props.set,
                                                            size: this.props.emojiButtonSize,
                                                            skin: this.state.tempSkin || this.state.skin,
                                                            spritesheet: !0,
                                                            getSpritesheetURL: this.props.getSpritesheetURL,
                                                        }),
                                                    }),
                                                    ee("div", {
                                                        class: "margin-".concat(this.dir[0]),
                                                        children: ee(
                                                            "div",
                                                            e
                                                                ? {
                                                                    class: "padding-"
                                                                        .concat(this.dir[2], " align-")
                                                                        .concat(this.dir[0]),
                                                                    children: [
                                                                        ee("div", {
                                                                            class: "ellipsis",
                                                                            style: { fontSize: "1.1em" },
                                                                            children: e.name,
                                                                        }),
                                                                        ee("div", {
                                                                            class: "ellipsis color-c",
                                                                            style: { fontSize: ".9em" },
                                                                            children: e.skins[0].shortcodes,
                                                                        }),
                                                                    ],
                                                                }
                                                                : i
                                                                    ? {
                                                                        class: "padding-"
                                                                            .concat(this.dir[2], " align-")
                                                                            .concat(this.dir[0]),
                                                                        children: [
                                                                            ee("div", {
                                                                                class: "ellipsis",
                                                                                style: { fontSize: "1.1em" },
                                                                                children: ce.search_no_results_1,
                                                                            }),
                                                                            ee("div", {
                                                                                class: "ellipsis color-c",
                                                                                style: { fontSize: ".9em" },
                                                                                children: ce.search_no_results_2,
                                                                            }),
                                                                        ],
                                                                    }
                                                                    : {
                                                                        class: "color-c",
                                                                        style: { fontSize: 21 },
                                                                        children: ce.pick,
                                                                    }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            !e &&
                                            "preview" == this.props.skinTonePosition &&
                                            this.renderSkinToneButton(),
                                        ],
                                    });
                                },
                            },
                            {
                                key: "renderEmojiButton",
                                value: function (e, i) {
                                    var n,
                                        a,
                                        r = this,
                                        o = i.pos,
                                        t = i.posinset,
                                        f = i.grid,
                                        s = this.props.emojiButtonSize,
                                        d = this.state.tempSkin || this.state.skin,
                                        l = (e.skins[d - 1] || e.skins[0]).native,
                                        u =
                                            ((n = this.state.pos),
                                                (a = o),
                                                Array.isArray(n) &&
                                                Array.isArray(a) &&
                                                n.length === a.length &&
                                                n.every(function (e, i) {
                                                    return e == a[i];
                                                })),
                                        c = o.concat(e.id).join("");
                                    return ee(
                                        pi,
                                        {
                                            selected: u,
                                            skin: d,
                                            size: s,
                                            children: ee("button", {
                                                "aria-label": l,
                                                "aria-selected": u || void 0,
                                                "aria-posinset": t,
                                                "aria-setsize": f.setsize,
                                                "data-keyboard": this.state.keyboard,
                                                title:
                                                    "none" == this.props.previewPosition
                                                        ? e.name
                                                        : void 0,
                                                type: "button",
                                                class: "flex flex-center flex-middle",
                                                tabindex: "-1",
                                                onClick: function () {
                                                    return r.handleEmojiClick({ emoji: e });
                                                },
                                                onMouseEnter: function () {
                                                    return r.handleEmojiOver(o);
                                                },
                                                onMouseLeave: function () {
                                                    return r.handleEmojiOver();
                                                },
                                                style: {
                                                    width: this.props.emojiButtonSize,
                                                    height: this.props.emojiButtonSize,
                                                    fontSize: this.props.emojiSize,
                                                    lineHeight: 0,
                                                },
                                                children: [
                                                    ee("div", {
                                                        "aria-hidden": "true",
                                                        class: "background",
                                                        style: {
                                                            borderRadius: this.props.emojiButtonRadius,
                                                            backgroundColor: this.props.emojiButtonColors
                                                                ? this.props.emojiButtonColors[
                                                                (t - 1) %
                                                                this.props.emojiButtonColors.length
                                                                ]
                                                                : void 0,
                                                        },
                                                    }),
                                                    ee(ze, {
                                                        emoji: e,
                                                        set: this.props.set,
                                                        size: this.props.emojiSize,
                                                        skin: d,
                                                        spritesheet: !0,
                                                        getSpritesheetURL: this.props.getSpritesheetURL,
                                                    }),
                                                ],
                                            }),
                                        },
                                        c
                                    );
                                },
                            },
                            {
                                key: "renderSearch",
                                value: function () {
                                    var e =
                                        "none" == this.props.previewPosition ||
                                        "search" == this.props.skinTonePosition;
                                    return ee("div", {
                                        children: [
                                            ee("div", { class: "spacer" }),
                                            ee("div", {
                                                class: "flex flex-middle",
                                                children: [
                                                    e && "rtl" == this.dir && this.renderSkinToneButton(),
                                                    ee("div", {
                                                        class: "search relative flex-grow",
                                                        children: [
                                                            ee("input", {
                                                                type: "search",
                                                                ref: this.refs.searchInput,
                                                                placeholder: ce.search,
                                                                onClick: this.handleSearchClick,
                                                                onInput: this.handleSearchInput,
                                                                onKeyDown: this.handleSearchKeyDown,
                                                                autoComplete: "off",
                                                            }),
                                                            ee("span", {
                                                                class: "icon loupe flex",
                                                                children: Ze.search.loupe,
                                                            }),
                                                            this.state.searchResults &&
                                                            ee("button", {
                                                                title: "Clear",
                                                                "aria-label": "Clear",
                                                                type: "button",
                                                                class: "icon delete flex",
                                                                onClick: this.clearSearch,
                                                                onMouseDown: this.preventDefault,
                                                                children: Ze.search.delete,
                                                            }),
                                                        ],
                                                    }),
                                                    e && "ltr" == this.dir && this.renderSkinToneButton(),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                            {
                                key: "renderSearchResults",
                                value: function () {
                                    var e = this,
                                        i = this.state.searchResults;
                                    return i
                                        ? ee("div", {
                                            class: "category",
                                            ref: this.refs.search,
                                            children: [
                                                ee("div", {
                                                    class: "sticky padding-small align-".concat(
                                                        this.dir[0]
                                                    ),
                                                    children: ce.categories.search,
                                                }),
                                                ee("div", {
                                                    children: i.length
                                                        ? i.map(function (n, a) {
                                                            return ee("div", {
                                                                class: "flex",
                                                                children: n.map(function (n, r) {
                                                                    return e.renderEmojiButton(n, {
                                                                        pos: [a, r],
                                                                        posinset: a * e.props.perLine + r + 1,
                                                                        grid: i,
                                                                    });
                                                                }),
                                                            });
                                                        })
                                                        : ee("div", {
                                                            class: "padding-small align-".concat(
                                                                this.dir[0]
                                                            ),
                                                            children:
                                                                this.props.onAddCustomEmoji &&
                                                                ee("a", {
                                                                    onClick: this.props.onAddCustomEmoji,
                                                                    children: ce.add_custom,
                                                                }),
                                                        }),
                                                }),
                                            ],
                                        })
                                        : null;
                                },
                            },
                            {
                                key: "renderCategories",
                                value: function () {
                                    var e = this,
                                        i = ve.categories,
                                        n = !!this.state.searchResults;
                                    return ee("div", {
                                        style: {
                                            visibility: n ? "hidden" : void 0,
                                            display: n ? "none" : void 0,
                                        },
                                        children: i.map(function (i) {
                                            var n = e.refs.categories.get(i.id),
                                                a = n.root,
                                                r = n.rows;
                                            return ee("div", {
                                                "data-id": i.target ? i.target.id : i.id,
                                                class: "category",
                                                ref: a,
                                                children: [
                                                    ee("div", {
                                                        class: "sticky padding-small align-".concat(
                                                            e.dir[0]
                                                        ),
                                                        children: i.name || ce.categories[i.id],
                                                    }),
                                                    ee("div", {
                                                        class: "relative",
                                                        style: {
                                                            height: r.length * e.props.emojiButtonSize,
                                                        },
                                                        children: r.map(function (n, a) {
                                                            var r = n.index - (n.index % wi),
                                                                o = e.state.visibleRows[r],
                                                                t = "current" in n ? n : void 0;
                                                            if (!o && !t) return null;
                                                            var f = a * e.props.perLine,
                                                                s = f + e.props.perLine,
                                                                d = i.emojis.slice(f, s);
                                                            return ee(
                                                                "div",
                                                                {
                                                                    "data-index": n.index,
                                                                    ref: t,
                                                                    class: "flex row",
                                                                    style: { top: a * e.props.emojiButtonSize },
                                                                    children:
                                                                        o &&
                                                                        d.map(function (i, a) {
                                                                            var r = Me.get(i);
                                                                            return e.renderEmojiButton(r, {
                                                                                pos: [n.index, a],
                                                                                posinset: n.posinset + a,
                                                                                grid: e.grid,
                                                                            });
                                                                        }),
                                                                },
                                                                n.index
                                                            );
                                                        }),
                                                    }),
                                                ],
                                            });
                                        }),
                                    });
                                },
                            },
                            {
                                key: "renderSkinToneButton",
                                value: function () {
                                    return "none" == this.props.skinTonePosition
                                        ? null
                                        : ee("div", {
                                            class: "flex flex-auto flex-center flex-middle",
                                            style: {
                                                position: "relative",
                                                width: this.props.emojiButtonSize,
                                                height: this.props.emojiButtonSize,
                                            },
                                            children: ee("button", {
                                                type: "button",
                                                ref: this.refs.skinToneButton,
                                                class:
                                                    "skin-tone-button flex flex-auto flex-center flex-middle",
                                                "aria-selected": this.state.showSkins ? "" : void 0,
                                                "aria-label": ce.skins.choose,
                                                title: ce.skins.choose,
                                                onClick: this.openSkins,
                                                style: {
                                                    width: this.props.emojiSize,
                                                    height: this.props.emojiSize,
                                                },
                                                children: ee("span", {
                                                    class: "skin-tone skin-tone-".concat(
                                                        this.state.skin
                                                    ),
                                                }),
                                            }),
                                        });
                                },
                            },
                            {
                                key: "renderLiveRegion",
                                value: function () {
                                    var e = this.getEmojiByPos(this.state.pos);
                                    return ee("div", {
                                        "aria-live": "polite",
                                        class: "sr-only",
                                        children: e ? e.name : "",
                                    });
                                },
                            },
                            {
                                key: "renderSkins",
                                value: function () {
                                    var e = this,
                                        i =
                                            this.refs.skinToneButton.current.getBoundingClientRect(),
                                        n = this.base.getBoundingClientRect(),
                                        a = {};
                                    return (
                                        "ltr" == this.dir
                                            ? (a.right = n.right - i.right - 3)
                                            : (a.left = i.left - n.left - 3),
                                        "bottom" == this.props.previewPosition &&
                                            "preview" == this.props.skinTonePosition
                                            ? (a.bottom = n.bottom - i.top + 6)
                                            : ((a.top = i.bottom - n.top + 3), (a.bottom = "auto")),
                                        ee("div", {
                                            ref: this.refs.menu,
                                            role: "radiogroup",
                                            dir: this.dir,
                                            "aria-label": ce.skins.choose,
                                            class: "menu hidden",
                                            "data-position": a.top ? "top" : "bottom",
                                            style: a,
                                            children: (0, o.Z)(Array(6).keys()).map(function (i) {
                                                var n = i + 1,
                                                    a = e.state.skin == n;
                                                return ee("div", {
                                                    children: [
                                                        ee("input", {
                                                            type: "radio",
                                                            name: "skin-tone",
                                                            value: n,
                                                            "aria-label": ce.skins[n],
                                                            ref: a ? e.refs.skinToneRadio : null,
                                                            defaultChecked: a,
                                                            onChange: function () {
                                                                return e.handleSkinMouseOver(n);
                                                            },
                                                            onKeyDown: function (i) {
                                                                ("Enter" != i.code &&
                                                                    "Space" != i.code &&
                                                                    "Tab" != i.code) ||
                                                                    (i.preventDefault(), e.handleSkinClick(n));
                                                            },
                                                        }),
                                                        ee("button", {
                                                            "aria-hidden": "true",
                                                            tabindex: "-1",
                                                            onClick: function () {
                                                                return e.handleSkinClick(n);
                                                            },
                                                            onMouseEnter: function () {
                                                                return e.handleSkinMouseOver(n);
                                                            },
                                                            onMouseLeave: function () {
                                                                return e.handleSkinMouseOver();
                                                            },
                                                            class: "option flex flex-grow flex-middle",
                                                            children: [
                                                                ee("span", {
                                                                    class: "skin-tone skin-tone-".concat(n),
                                                                }),
                                                                ee("span", {
                                                                    class: "margin-small-lr",
                                                                    children: ce.skins[n],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                });
                                            }),
                                        })
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return ee("section", {
                                        id: "root",
                                        class: "flex flex-column",
                                        style: {
                                            width:
                                                this.props.perLine * this.props.emojiButtonSize + 28,
                                        },
                                        "data-emoji-set": this.props.set,
                                        "data-theme": this.state.theme,
                                        "data-menu": this.state.showSkins ? "" : void 0,
                                        children: [
                                            "top" == this.props.previewPosition &&
                                            this.renderPreview(),
                                            "top" == this.props.navPosition && this.renderNav(),
                                            "sticky" == this.props.searchPosition &&
                                            ee("div", {
                                                class: "padding-lr",
                                                children: this.renderSearch(),
                                            }),
                                            ee("div", {
                                                ref: this.refs.scroll,
                                                class: "scroll flex-grow padding-lr",
                                                children: ee("div", {
                                                    style: {
                                                        width:
                                                            this.props.perLine * this.props.emojiButtonSize,
                                                    },
                                                    children: [
                                                        "static" == this.props.searchPosition &&
                                                        this.renderSearch(),
                                                        this.renderSearchResults(),
                                                        this.renderCategories(),
                                                        ee("div", { class: "spacer" }),
                                                    ],
                                                }),
                                            }),
                                            "bottom" == this.props.navPosition && this.renderNav(),
                                            "bottom" == this.props.previewPosition &&
                                            this.renderPreview(),
                                            this.state.showSkins && this.renderSkins(),
                                            this.renderLiveRegion(),
                                        ],
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(P),
                bi = (function (e) {
                    (0, v.Z)(n, e);
                    var i = (0, m.Z)(n);
                    function n(e) {
                        return (0, l.Z)(this, n), i.call(this, e, { styles: p(_i) });
                    }
                    return (
                        (0, u.Z)(n, [
                            {
                                key: "connectedCallback",
                                value: (function () {
                                    var e = g(
                                        s().mark(function e() {
                                            var i,
                                                n = this;
                                            return s().wrap(
                                                function (e) {
                                                    for (; ;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    ((i = xe(this.props, ue, this)).element =
                                                                        this),
                                                                    (i.ref = function (e) {
                                                                        n.component = e;
                                                                    }),
                                                                    (e.next = 5),
                                                                    ye(i)
                                                                );
                                                            case 5:
                                                                $(ee(yi, (0, a.Z)({}, i)), this.shadowRoot);
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    this.component && this.component.unregister();
                                },
                            },
                        ]),
                        n
                    );
                })(We);
            w(bi, "Props", ue),
                "undefined" === typeof customElements ||
                customElements.get("em-emoji-picker") ||
                customElements.define("em-emoji-picker", bi);
            var _i = {};
            function xi(e) {
                var i = (0, r.useRef)(null),
                    n = (0, r.useRef)(null);
                return (
                    n.current && n.current.update(e),
                    (0, r.useEffect)(function () {
                        return (
                            (n.current = new bi((0, a.Z)((0, a.Z)({}, e), {}, { ref: i }))),
                            function () {
                                n.current = null;
                            }
                        );
                    }, []),
                    r.createElement("div", { ref: i })
                );
            }
            _i =
                ':host {\n  display: flex;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;\n  --font-size: 15px;\n  --shadow-color: 0deg 0% 0%;\n  --shadow:\n    0.3px 0.5px 2.7px hsl(var(--shadow-color) / 0.14),\n    0.4px 0.8px 1px -3.2px hsl(var(--shadow-color) / 0.14),\n    1px 2px 2.5px -4.5px hsl(var(--shadow-color) / 0.14);\n}\n\n[data-theme=light] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme=dark] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, .0, .2, 1);\n  position: relative;\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*, *:before, *:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: 0 0 auto;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: 1 1 auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-r {\n  margin-right: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.align-l {\n  text-align: left;\n}\n\n.align-r {\n  text-align: right;\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sr-only {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n.scroll {\n  overflow: auto;\n  overflow-x: hidden;\n  padding-right: 0;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: -1px;\n  font-weight: 500;\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size) - 1px);\n}\n\n.search input[type=search] {\n  display: block;\n  border: 0;\n  outline: 0;\n  width: 100%;\n  padding: 10px 2em 10px 2.2em;\n  border-radius: 10px;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n}\n\n.search input[type=search]::-moz-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]:-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]::placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search], .search input[type=search]::-webkit-search-decoration, .search input[type=search]::-webkit-search-cancel-button, .search input[type=search]::-webkit-search-results-button, .search input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n          appearance: none;\n}\n\n.search input[type=search]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, 0.2);\n}\n\n.search .icon {\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  color: rgba(var(--em-rgb-color), 0.7);\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  left: 0.7em;\n  pointer-events: none;\n}\n\n.search .delete {\n  right: 0.7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  border: 0;\n  background-color: transparent;\n}\n\n#nav {\n  z-index: 2;\n  position: relative;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav .bar {\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  border-radius: 3px 3px 0 0;\n  transition: transform var(--duration) var(--easing);\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  position: relative;\n  padding: calc(var(--padding) + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n}\n\n#nav:before, #preview:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\n\n#nav[data-position=top]:before, #preview[data-position=top]:before {\n  top: 100%;\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n}\n\n#nav[data-position=bottom]:before, #preview[data-position=bottom]:before {\n  bottom: 100%;\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n}\n\n.category button {\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0ms;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.skin-tone-button {\n  border-radius: 100%;\n  border: 1px solid transparent;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(0.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  border-left-width: 0;\n  border-right-width: 0;\n  border-top-color: rgba(0, 0, 0, 0.05);\n  border-bottom-color: transparent;\n  background-color: var(--em-color-border);\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(0.9);\n}\n\n.menu {\n  z-index: 2;\n  position: absolute;\n  white-space: nowrap;\n  padding: 4px;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position=bottom] {\n  transform-origin: bottom right;\n}\n\n.menu[data-position=bottom].hidden {\n  transform: scale(0.9) rotate(-3deg) translateY(5%);\n}\n\n.menu[data-position=top] {\n  transform-origin: top right;\n}\n\n.menu[data-position=top].hidden {\n  transform: scale(0.9) rotate(3deg) translateY(-5%);\n}\n\n.menu input[type=radio] {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.menu input[type=radio]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  padding: 4px 6px;\n  border-radius: 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  mix-blend-mode: overlay;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-emoji-set=twitter] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.5);\n  box-shadow: none;\n}\n\n[data-emoji-set=twitter] .skin-tone-1 {\n  background-color: #FADE72;\n}\n\n[data-emoji-set=twitter] .skin-tone-2 {\n  background-color: #F3DFD0;\n}\n\n[data-emoji-set=twitter] .skin-tone-3 {\n  background-color: #EED3A8;\n}\n\n[data-emoji-set=twitter] .skin-tone-4 {\n  background-color: #CFAD8D;\n}\n\n[data-emoji-set=twitter] .skin-tone-5 {\n  background-color: #A8805D;\n}\n\n[data-emoji-set=twitter] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set=google] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.4);\n}\n\n[data-emoji-set=google] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=google] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=google] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=google] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=google] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=google] .skin-tone-6 {\n  background-color: #61493F;\n}\n\n[data-emoji-set=facebook] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set=facebook] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=facebook] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=facebook] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=facebook] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=facebook] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=facebook] .skin-tone-6 {\n  background-color: #61493F;\n}\n';
        },
        5590: function (e, i, n) {
            n.d(i, {
                Z: function () {
                    return w;
                },
            });
            var a = n(4942),
                r = n(3366),
                o = n(7462),
                t = n(2791),
                f = n(8182),
                s = n(4419),
                d = n(7491),
                l = n(9853),
                u = n(7254),
                c = n(1217);
            function v(e) {
                return (0, c.Z)("MuiFab", e);
            }
            var m = (0, n(5878).Z)("MuiFab", [
                "root",
                "primary",
                "secondary",
                "extended",
                "circular",
                "focusVisible",
                "disabled",
                "colorInherit",
                "sizeSmall",
                "sizeMedium",
                "sizeLarge",
                "info",
                "error",
                "warning",
                "success",
            ]),
                k = n(6863),
                g = n(184),
                h = [
                    "children",
                    "className",
                    "color",
                    "component",
                    "disabled",
                    "disableFocusRipple",
                    "focusVisibleClassName",
                    "size",
                    "variant",
                ],
                p = (0, k.ZP)(d.Z, {
                    name: "MuiFab",
                    slot: "Root",
                    shouldForwardProp: function (e) {
                        return (0, k.FO)(e) || "classes" === e;
                    },
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            i.root,
                            i[n.variant],
                            i["size".concat((0, l.Z)(n.size))],
                            "inherit" === n.color && i.colorInherit,
                            i[(0, l.Z)(n.size)],
                            i[n.color],
                        ];
                    },
                })(
                    function (e) {
                        var i,
                            n,
                            r,
                            t = e.theme,
                            f = e.ownerState;
                        return (0, o.Z)(
                            {},
                            t.typography.button,
                            ((i = {
                                minHeight: 36,
                                transition: t.transitions.create(
                                    ["background-color", "box-shadow", "border-color"],
                                    { duration: t.transitions.duration.short }
                                ),
                                borderRadius: "50%",
                                padding: 0,
                                minWidth: 0,
                                width: 56,
                                height: 56,
                                zIndex: (t.vars || t).zIndex.fab,
                                boxShadow: (t.vars || t).shadows[6],
                                "&:active": { boxShadow: (t.vars || t).shadows[12] },
                                color: t.vars
                                    ? t.vars.palette.text.primary
                                    : null == (n = (r = t.palette).getContrastText)
                                        ? void 0
                                        : n.call(r, t.palette.grey[300]),
                                backgroundColor: (t.vars || t).palette.grey[300],
                                "&:hover": {
                                    backgroundColor: (t.vars || t).palette.grey.A100,
                                    "@media (hover: none)": {
                                        backgroundColor: (t.vars || t).palette.grey[300],
                                    },
                                    textDecoration: "none",
                                },
                            }),
                                (0, a.Z)(i, "&.".concat(m.focusVisible), {
                                    boxShadow: (t.vars || t).shadows[6],
                                }),
                                (0, a.Z)(i, "&.".concat(m.disabled), {
                                    color: (t.vars || t).palette.action.disabled,
                                    boxShadow: (t.vars || t).shadows[0],
                                    backgroundColor: (t.vars || t).palette.action
                                        .disabledBackground,
                                }),
                                i),
                            "small" === f.size && { width: 40, height: 40 },
                            "medium" === f.size && { width: 48, height: 48 },
                            "extended" === f.variant && {
                                borderRadius: 24,
                                padding: "0 16px",
                                width: "auto",
                                minHeight: "auto",
                                minWidth: 48,
                                height: 48,
                            },
                            "extended" === f.variant &&
                            "small" === f.size && {
                                width: "auto",
                                padding: "0 8px",
                                borderRadius: 17,
                                minWidth: 34,
                                height: 34,
                            },
                            "extended" === f.variant &&
                            "medium" === f.size && {
                                width: "auto",
                                padding: "0 16px",
                                borderRadius: 20,
                                minWidth: 40,
                                height: 40,
                            },
                            "inherit" === f.color && { color: "inherit" }
                        );
                    },
                    function (e) {
                        var i = e.theme,
                            n = e.ownerState;
                        return (0, o.Z)(
                            {},
                            "inherit" !== n.color &&
                            "default" !== n.color &&
                            null != (i.vars || i).palette[n.color] && {
                                color: (i.vars || i).palette[n.color].contrastText,
                                backgroundColor: (i.vars || i).palette[n.color].main,
                                "&:hover": {
                                    backgroundColor: (i.vars || i).palette[n.color].dark,
                                    "@media (hover: none)": {
                                        backgroundColor: (i.vars || i).palette[n.color].main,
                                    },
                                },
                            }
                        );
                    }
                ),
                w = t.forwardRef(function (e, i) {
                    var n = (0, u.Z)({ props: e, name: "MuiFab" }),
                        a = n.children,
                        t = n.className,
                        d = n.color,
                        c = void 0 === d ? "default" : d,
                        m = n.component,
                        k = void 0 === m ? "button" : m,
                        w = n.disabled,
                        y = void 0 !== w && w,
                        b = n.disableFocusRipple,
                        _ = void 0 !== b && b,
                        x = n.focusVisibleClassName,
                        F = n.size,
                        C = void 0 === F ? "large" : F,
                        S = n.variant,
                        M = void 0 === S ? "circular" : S,
                        j = (0, r.Z)(n, h),
                        L = (0, o.Z)({}, n, {
                            color: c,
                            component: k,
                            disabled: y,
                            disableFocusRipple: _,
                            size: C,
                            variant: M,
                        }),
                        E = (function (e) {
                            var i = e.color,
                                n = e.variant,
                                a = e.classes,
                                r = e.size,
                                t = {
                                    root: [
                                        "root",
                                        n,
                                        "size".concat((0, l.Z)(r)),
                                        "inherit" === i ? "colorInherit" : i,
                                    ],
                                },
                                f = (0, s.Z)(t, v, a);
                            return (0, o.Z)({}, a, f);
                        })(L);
                    return (0,
                        g.jsx)(p, (0, o.Z)({ className: (0, f.Z)(E.root, t), component: k, disabled: y, focusRipple: !_, focusVisibleClassName: (0, f.Z)(E.focusVisible, x), ownerState: L, ref: i }, j, { classes: E, children: a }));
                });
        },
        8254: function (e, i, n) {
            n.d(i, {
                Z: function () {
                    return _;
                },
            });
            var a = n(4942),
                r = n(3366),
                o = n(7462),
                t = n(2791),
                f = n(8182),
                s = n(4419),
                d = n(9853),
                l = n(4565),
                u = n(1211),
                c = n(529),
                v = n(6863),
                m = n(1217);
            function k(e) {
                return (0, m.Z)("MuiInputAdornment", e);
            }
            var g,
                h = (0, n(5878).Z)("MuiInputAdornment", [
                    "root",
                    "filled",
                    "standard",
                    "outlined",
                    "positionStart",
                    "positionEnd",
                    "disablePointerEvents",
                    "hiddenLabel",
                    "sizeSmall",
                ]),
                p = n(7254),
                w = n(184),
                y = [
                    "children",
                    "className",
                    "component",
                    "disablePointerEvents",
                    "disableTypography",
                    "position",
                    "variant",
                ],
                b = (0, v.ZP)("div", {
                    name: "MuiInputAdornment",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            i.root,
                            i["position".concat((0, d.Z)(n.position))],
                            !0 === n.disablePointerEvents && i.disablePointerEvents,
                            i[n.variant],
                        ];
                    },
                })(function (e) {
                    var i = e.theme,
                        n = e.ownerState;
                    return (0,
                        o.Z)({ display: "flex", height: "0.01em", maxHeight: "2em", alignItems: "center", whiteSpace: "nowrap", color: (i.vars || i).palette.action.active }, "filled" === n.variant && (0, a.Z)({}, "&.".concat(h.positionStart, "&:not(.").concat(h.hiddenLabel, ")"), { marginTop: 16 }), "start" === n.position && { marginRight: 8 }, "end" === n.position && { marginLeft: 8 }, !0 === n.disablePointerEvents && { pointerEvents: "none" });
                }),
                _ = t.forwardRef(function (e, i) {
                    var n = (0, p.Z)({ props: e, name: "MuiInputAdornment" }),
                        a = n.children,
                        v = n.className,
                        m = n.component,
                        h = void 0 === m ? "div" : m,
                        _ = n.disablePointerEvents,
                        x = void 0 !== _ && _,
                        F = n.disableTypography,
                        C = void 0 !== F && F,
                        S = n.position,
                        M = n.variant,
                        j = (0, r.Z)(n, y),
                        L = (0, c.Z)() || {},
                        E = M;
                    M && L.variant, L && !E && (E = L.variant);
                    var B = (0, o.Z)({}, n, {
                        hiddenLabel: L.hiddenLabel,
                        size: L.size,
                        disablePointerEvents: x,
                        position: S,
                        variant: E,
                    }),
                        Z = (function (e) {
                            var i = e.classes,
                                n = e.disablePointerEvents,
                                a = e.hiddenLabel,
                                r = e.position,
                                o = e.size,
                                t = e.variant,
                                f = {
                                    root: [
                                        "root",
                                        n && "disablePointerEvents",
                                        r && "position".concat((0, d.Z)(r)),
                                        t,
                                        a && "hiddenLabel",
                                        o && "size".concat((0, d.Z)(o)),
                                    ],
                                };
                            return (0, s.Z)(f, k, i);
                        })(B);
                    return (0,
                        w.jsx)(u.Z.Provider, { value: null, children: (0, w.jsx)(b, (0, o.Z)({ as: h, ownerState: B, className: (0, f.Z)(Z.root, v), ref: i }, j, { children: "string" !== typeof a || C ? (0, w.jsxs)(t.Fragment, { children: ["start" === S ? g || (g = (0, w.jsx)("span", { className: "notranslate", children: "\u200b" })) : null, a] }) : (0, w.jsx)(l.Z, { color: "text.secondary", children: a }) })) });
                });
        },
        4998: function (e, i, n) {
            n.d(i, {
                Z: function () {
                    return ii;
                },
            });
            var a = n(7462),
                r = n(3366),
                o = n(2791),
                t = n(8182),
                f = n(4419),
                s = n(6248),
                d = n(6863),
                l = n(7254),
                u = n(4942),
                c = n(2982),
                v = n(2466),
                m = n(1169),
                k = n(1217),
                g = n(5878),
                h = n(3890);
            function p(e) {
                return (0, k.Z)("MuiInput", e);
            }
            var w = (0, a.Z)(
                {},
                h.Z,
                (0, g.Z)("MuiInput", ["root", "underline", "input"])
            ),
                y = n(184),
                b = [
                    "disableUnderline",
                    "components",
                    "componentsProps",
                    "fullWidth",
                    "inputComponent",
                    "multiline",
                    "type",
                ],
                _ = (0, d.ZP)(m.Ej, {
                    shouldForwardProp: function (e) {
                        return (0, d.FO)(e) || "classes" === e;
                    },
                    name: "MuiInput",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [].concat((0, c.Z)((0, m.Gx)(e, i)), [
                            !n.disableUnderline && i.underline,
                        ]);
                    },
                })(function (e) {
                    var i,
                        n = e.theme,
                        r = e.ownerState,
                        o =
                            "light" === n.palette.mode
                                ? "rgba(0, 0, 0, 0.42)"
                                : "rgba(255, 255, 255, 0.7)";
                    return (
                        n.vars &&
                        (o = "rgba("
                            .concat(n.vars.palette.common.onBackgroundChannel, " / ")
                            .concat(n.vars.opacity.inputUnderline, ")")),
                        (0, a.Z)(
                            { position: "relative" },
                            r.formControl && { "label + &": { marginTop: 16 } },
                            !r.disableUnderline &&
                            ((i = {
                                "&:after": {
                                    borderBottom: "2px solid ".concat(
                                        (n.vars || n).palette[r.color].main
                                    ),
                                    left: 0,
                                    bottom: 0,
                                    content: '""',
                                    position: "absolute",
                                    right: 0,
                                    transform: "scaleX(0)",
                                    transition: n.transitions.create("transform", {
                                        duration: n.transitions.duration.shorter,
                                        easing: n.transitions.easing.easeOut,
                                    }),
                                    pointerEvents: "none",
                                },
                            }),
                                (0, u.Z)(i, "&.".concat(w.focused, ":after"), {
                                    transform: "scaleX(1) translateX(0)",
                                }),
                                (0, u.Z)(i, "&.".concat(w.error, ":after"), {
                                    borderBottomColor: (n.vars || n).palette.error.main,
                                    transform: "scaleX(1)",
                                }),
                                (0, u.Z)(i, "&:before", {
                                    borderBottom: "1px solid ".concat(o),
                                    left: 0,
                                    bottom: 0,
                                    content: '"\\00a0"',
                                    position: "absolute",
                                    right: 0,
                                    transition: n.transitions.create("border-bottom-color", {
                                        duration: n.transitions.duration.shorter,
                                    }),
                                    pointerEvents: "none",
                                }),
                                (0, u.Z)(i, "&:hover:not(.".concat(w.disabled, "):before"), {
                                    borderBottom: "2px solid ".concat(
                                        (n.vars || n).palette.text.primary
                                    ),
                                    "@media (hover: none)": {
                                        borderBottom: "1px solid ".concat(o),
                                    },
                                }),
                                (0, u.Z)(i, "&.".concat(w.disabled, ":before"), {
                                    borderBottomStyle: "dotted",
                                }),
                                i)
                        )
                    );
                }),
                x = (0, d.ZP)(m.rA, {
                    name: "MuiInput",
                    slot: "Input",
                    overridesResolver: m._o,
                })({}),
                F = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ props: e, name: "MuiInput" }),
                        o = n.disableUnderline,
                        t = n.components,
                        s = void 0 === t ? {} : t,
                        d = n.componentsProps,
                        u = n.fullWidth,
                        c = void 0 !== u && u,
                        k = n.inputComponent,
                        g = void 0 === k ? "input" : k,
                        h = n.multiline,
                        w = void 0 !== h && h,
                        F = n.type,
                        C = void 0 === F ? "text" : F,
                        S = (0, r.Z)(n, b),
                        M = (function (e) {
                            var i = e.classes,
                                n = {
                                    root: ["root", !e.disableUnderline && "underline"],
                                    input: ["input"],
                                },
                                r = (0, f.Z)(n, p, i);
                            return (0, a.Z)({}, i, r);
                        })(n),
                        j = { root: { ownerState: { disableUnderline: o } } },
                        L = d ? (0, v.Z)(d, j) : j;
                    return (0,
                        y.jsx)(m.ZP, (0, a.Z)({ components: (0, a.Z)({ Root: _, Input: x }, s), componentsProps: L, fullWidth: c, inputComponent: g, multiline: w, ref: i, type: C }, S, { classes: M }));
                });
            F.muiName = "Input";
            var C = F;
            function S(e) {
                return (0, k.Z)("MuiFilledInput", e);
            }
            var M = (0, a.Z)(
                {},
                h.Z,
                (0, g.Z)("MuiFilledInput", ["root", "underline", "input"])
            ),
                j = [
                    "disableUnderline",
                    "components",
                    "componentsProps",
                    "fullWidth",
                    "hiddenLabel",
                    "inputComponent",
                    "multiline",
                    "type",
                ],
                L = (0, d.ZP)(m.Ej, {
                    shouldForwardProp: function (e) {
                        return (0, d.FO)(e) || "classes" === e;
                    },
                    name: "MuiFilledInput",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [].concat((0, c.Z)((0, m.Gx)(e, i)), [
                            !n.disableUnderline && i.underline,
                        ]);
                    },
                })(function (e) {
                    var i,
                        n,
                        r,
                        o = e.theme,
                        t = e.ownerState,
                        f = "light" === o.palette.mode,
                        s = f ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
                        d = f ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
                        l = f ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
                        c = f ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
                    return (0,
                        a.Z)(((i = { position: "relative", backgroundColor: o.vars ? o.vars.palette.FilledInput.bg : d, borderTopLeftRadius: (o.vars || o).shape.borderRadius, borderTopRightRadius: (o.vars || o).shape.borderRadius, transition: o.transitions.create("background-color", { duration: o.transitions.duration.shorter, easing: o.transitions.easing.easeOut }), "&:hover": { backgroundColor: o.vars ? o.vars.palette.FilledInput.hoverBg : l, "@media (hover: none)": { backgroundColor: o.vars ? o.vars.palette.FilledInput.bg : d } } }), (0, u.Z)(i, "&.".concat(M.focused), { backgroundColor: o.vars ? o.vars.palette.FilledInput.bg : d }), (0, u.Z)(i, "&.".concat(M.disabled), { backgroundColor: o.vars ? o.vars.palette.FilledInput.disabledBg : c }), i), !t.disableUnderline && ((n = { "&:after": { borderBottom: "2px solid ".concat(null == (r = (o.vars || o).palette[t.color || "primary"]) ? void 0 : r.main), left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: o.transitions.create("transform", { duration: o.transitions.duration.shorter, easing: o.transitions.easing.easeOut }), pointerEvents: "none" } }), (0, u.Z)(n, "&.".concat(M.focused, ":after"), { transform: "scaleX(1) translateX(0)" }), (0, u.Z)(n, "&.".concat(M.error, ":after"), { borderBottomColor: (o.vars || o).palette.error.main, transform: "scaleX(1)" }), (0, u.Z)(n, "&:before", { borderBottom: "1px solid ".concat(o.vars ? "rgba(".concat(o.vars.palette.common.onBackgroundChannel, " / ").concat(o.vars.opacity.inputUnderline, ")") : s), left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: o.transitions.create("border-bottom-color", { duration: o.transitions.duration.shorter }), pointerEvents: "none" }), (0, u.Z)(n, "&:hover:not(.".concat(M.disabled, "):before"), { borderBottom: "1px solid ".concat((o.vars || o).palette.text.primary) }), (0, u.Z)(n, "&.".concat(M.disabled, ":before"), { borderBottomStyle: "dotted" }), n), t.startAdornment && { paddingLeft: 12 }, t.endAdornment && { paddingRight: 12 }, t.multiline && (0, a.Z)({ padding: "25px 12px 8px" }, "small" === t.size && { paddingTop: 21, paddingBottom: 4 }, t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 }));
                }),
                E = (0, d.ZP)(m.rA, {
                    name: "MuiFilledInput",
                    slot: "Input",
                    overridesResolver: m._o,
                })(function (e) {
                    var i = e.theme,
                        n = e.ownerState;
                    return (0,
                        a.Z)({ paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 }, !i.vars && { "&:-webkit-autofill": { WebkitBoxShadow: "light" === i.palette.mode ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: "light" === i.palette.mode ? null : "#fff", caretColor: "light" === i.palette.mode ? null : "#fff", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" } }, i.vars && (0, u.Z)({ "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" } }, i.getColorSchemeSelector("dark"), { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } }), "small" === n.size && { paddingTop: 21, paddingBottom: 4 }, n.hiddenLabel && { paddingTop: 16, paddingBottom: 17 }, n.multiline && { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }, n.startAdornment && { paddingLeft: 0 }, n.endAdornment && { paddingRight: 0 }, n.hiddenLabel && "small" === n.size && { paddingTop: 8, paddingBottom: 9 });
                }),
                B = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ props: e, name: "MuiFilledInput" }),
                        o = n.components,
                        t = void 0 === o ? {} : o,
                        s = n.componentsProps,
                        d = n.fullWidth,
                        u = void 0 !== d && d,
                        c = n.inputComponent,
                        k = void 0 === c ? "input" : c,
                        g = n.multiline,
                        h = void 0 !== g && g,
                        p = n.type,
                        w = void 0 === p ? "text" : p,
                        b = (0, r.Z)(n, j),
                        _ = (0, a.Z)({}, n, {
                            fullWidth: u,
                            inputComponent: k,
                            multiline: h,
                            type: w,
                        }),
                        x = (function (e) {
                            var i = e.classes,
                                n = {
                                    root: ["root", !e.disableUnderline && "underline"],
                                    input: ["input"],
                                },
                                r = (0, f.Z)(n, S, i);
                            return (0, a.Z)({}, i, r);
                        })(n),
                        F = { root: { ownerState: _ }, input: { ownerState: _ } },
                        C = s ? (0, v.Z)(s, F) : F;
                    return (0,
                        y.jsx)(m.ZP, (0, a.Z)({ components: (0, a.Z)({ Root: L, Input: E }, t), componentsProps: C, fullWidth: u, inputComponent: k, multiline: h, ref: i, type: w }, b, { classes: x }));
                });
            B.muiName = "Input";
            var Z,
                z = B,
                P = ["children", "classes", "className", "label", "notched"],
                W = (0, d.ZP)("fieldset")({
                    textAlign: "left",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    top: -5,
                    left: 0,
                    margin: 0,
                    padding: "0 8px",
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    borderStyle: "solid",
                    borderWidth: 1,
                    overflow: "hidden",
                    minWidth: "0%",
                }),
                q = (0, d.ZP)("legend")(function (e) {
                    var i = e.ownerState,
                        n = e.theme;
                    return (0,
                        a.Z)({ float: "unset", width: "auto", overflow: "hidden" }, !i.withLabel && { padding: 0, lineHeight: "11px", transition: n.transitions.create("width", { duration: 150, easing: n.transitions.easing.easeOut }) }, i.withLabel && (0, a.Z)({ display: "block", padding: 0, height: 11, fontSize: "0.75em", visibility: "hidden", maxWidth: 0.01, transition: n.transitions.create("max-width", { duration: 50, easing: n.transitions.easing.easeOut }), whiteSpace: "nowrap", "& > span": { paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible" } }, i.notched && { maxWidth: "100%", transition: n.transitions.create("max-width", { duration: 100, easing: n.transitions.easing.easeOut, delay: 50 }) }));
                });
            var R = n(529),
                H = n(40);
            function A(e) {
                return (0, k.Z)("MuiOutlinedInput", e);
            }
            var T = (0, a.Z)(
                {},
                h.Z,
                (0, g.Z)("MuiOutlinedInput", ["root", "notchedOutline", "input"])
            ),
                O = [
                    "components",
                    "fullWidth",
                    "inputComponent",
                    "label",
                    "multiline",
                    "notched",
                    "type",
                ],
                I = (0, d.ZP)(m.Ej, {
                    shouldForwardProp: function (e) {
                        return (0, d.FO)(e) || "classes" === e;
                    },
                    name: "MuiOutlinedInput",
                    slot: "Root",
                    overridesResolver: m.Gx,
                })(function (e) {
                    var i,
                        n = e.theme,
                        r = e.ownerState,
                        o =
                            "light" === n.palette.mode
                                ? "rgba(0, 0, 0, 0.23)"
                                : "rgba(255, 255, 255, 0.23)";
                    return (0,
                        a.Z)(((i = { position: "relative", borderRadius: (n.vars || n).shape.borderRadius }), (0, u.Z)(i, "&:hover .".concat(T.notchedOutline), { borderColor: (n.vars || n).palette.text.primary }), (0, u.Z)(i, "@media (hover: none)", (0, u.Z)({}, "&:hover .".concat(T.notchedOutline), { borderColor: n.vars ? "rgba(".concat(n.vars.palette.common.onBackgroundChannel, " / 0.23)") : o })), (0, u.Z)(i, "&.".concat(T.focused, " .").concat(T.notchedOutline), { borderColor: (n.vars || n).palette[r.color].main, borderWidth: 2 }), (0, u.Z)(i, "&.".concat(T.error, " .").concat(T.notchedOutline), { borderColor: (n.vars || n).palette.error.main }), (0, u.Z)(i, "&.".concat(T.disabled, " .").concat(T.notchedOutline), { borderColor: (n.vars || n).palette.action.disabled }), i), r.startAdornment && { paddingLeft: 14 }, r.endAdornment && { paddingRight: 14 }, r.multiline && (0, a.Z)({ padding: "16.5px 14px" }, "small" === r.size && { padding: "8.5px 14px" }));
                }),
                D = (0, d.ZP)(
                    function (e) {
                        var i = e.className,
                            n = e.label,
                            o = e.notched,
                            t = (0, r.Z)(e, P),
                            f = null != n && "" !== n,
                            s = (0, a.Z)({}, e, { notched: o, withLabel: f });
                        return (0, y.jsx)(
                            W,
                            (0, a.Z)({ "aria-hidden": !0, className: i, ownerState: s }, t, {
                                children: (0, y.jsx)(q, {
                                    ownerState: s,
                                    children: f
                                        ? (0, y.jsx)("span", { children: n })
                                        : Z ||
                                        (Z = (0, y.jsx)("span", {
                                            className: "notranslate",
                                            children: "\u200b",
                                        })),
                                }),
                            })
                        );
                    },
                    {
                        name: "MuiOutlinedInput",
                        slot: "NotchedOutline",
                        overridesResolver: function (e, i) {
                            return i.notchedOutline;
                        },
                    }
                )(function (e) {
                    var i = e.theme,
                        n =
                            "light" === i.palette.mode
                                ? "rgba(0, 0, 0, 0.23)"
                                : "rgba(255, 255, 255, 0.23)";
                    return {
                        borderColor: i.vars
                            ? "rgba(".concat(
                                i.vars.palette.common.onBackgroundChannel,
                                " / 0.23)"
                            )
                            : n,
                    };
                }),
                N = (0, d.ZP)(m.rA, {
                    name: "MuiOutlinedInput",
                    slot: "Input",
                    overridesResolver: m._o,
                })(function (e) {
                    var i = e.theme,
                        n = e.ownerState;
                    return (0,
                        a.Z)({ padding: "16.5px 14px" }, !i.vars && { "&:-webkit-autofill": { WebkitBoxShadow: "light" === i.palette.mode ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: "light" === i.palette.mode ? null : "#fff", caretColor: "light" === i.palette.mode ? null : "#fff", borderRadius: "inherit" } }, i.vars && (0, u.Z)({ "&:-webkit-autofill": { borderRadius: "inherit" } }, i.getColorSchemeSelector("dark"), { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } }), "small" === n.size && { padding: "8.5px 14px" }, n.multiline && { padding: 0 }, n.startAdornment && { paddingLeft: 0 }, n.endAdornment && { paddingRight: 0 });
                }),
                V = o.forwardRef(function (e, i) {
                    var n,
                        t = (0, l.Z)({ props: e, name: "MuiOutlinedInput" }),
                        s = t.components,
                        d = void 0 === s ? {} : s,
                        u = t.fullWidth,
                        c = void 0 !== u && u,
                        v = t.inputComponent,
                        k = void 0 === v ? "input" : v,
                        g = t.label,
                        h = t.multiline,
                        p = void 0 !== h && h,
                        w = t.notched,
                        b = t.type,
                        _ = void 0 === b ? "text" : b,
                        x = (0, r.Z)(t, O),
                        F = (function (e) {
                            var i = e.classes,
                                n = (0, f.Z)(
                                    {
                                        root: ["root"],
                                        notchedOutline: ["notchedOutline"],
                                        input: ["input"],
                                    },
                                    A,
                                    i
                                );
                            return (0, a.Z)({}, i, n);
                        })(t),
                        C = (0, R.Z)(),
                        S = (0, H.Z)({ props: t, muiFormControl: C, states: ["required"] }),
                        M = (0, a.Z)({}, t, {
                            color: S.color || "primary",
                            disabled: S.disabled,
                            error: S.error,
                            focused: S.focused,
                            formControl: C,
                            fullWidth: c,
                            hiddenLabel: S.hiddenLabel,
                            multiline: p,
                            size: S.size,
                            type: _,
                        });
                    return (0, y.jsx)(
                        m.ZP,
                        (0, a.Z)(
                            {
                                components: (0, a.Z)({ Root: I, Input: N }, d),
                                renderSuffix: function (e) {
                                    return (0, y.jsx)(D, {
                                        ownerState: M,
                                        className: F.notchedOutline,
                                        label:
                                            null != g && "" !== g && S.required
                                                ? n ||
                                                (n = (0, y.jsxs)(o.Fragment, {
                                                    children: [g, "\xa0", "*"],
                                                }))
                                                : g,
                                        notched:
                                            "undefined" !== typeof w
                                                ? w
                                                : Boolean(e.startAdornment || e.filled || e.focused),
                                    });
                                },
                                fullWidth: c,
                                inputComponent: k,
                                multiline: p,
                                ref: i,
                                type: _,
                            },
                            x,
                            { classes: (0, a.Z)({}, F, { notchedOutline: null }) }
                        )
                    );
                });
            V.muiName = "Input";
            var G = V,
                U = n(9853);
            function K(e) {
                return (0, k.Z)("MuiFormLabel", e);
            }
            var J = (0, g.Z)("MuiFormLabel", [
                "root",
                "colorSecondary",
                "focused",
                "disabled",
                "error",
                "filled",
                "required",
                "asterisk",
            ]),
                Y = [
                    "children",
                    "className",
                    "color",
                    "component",
                    "disabled",
                    "error",
                    "filled",
                    "focused",
                    "required",
                ],
                X = (0, d.ZP)("label", {
                    name: "MuiFormLabel",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return (0, a.Z)(
                            {},
                            i.root,
                            "secondary" === n.color && i.colorSecondary,
                            n.filled && i.filled
                        );
                    },
                })(function (e) {
                    var i,
                        n = e.theme,
                        r = e.ownerState;
                    return (0,
                        a.Z)({ color: (n.vars || n).palette.text.secondary }, n.typography.body1, ((i = { lineHeight: "1.4375em", padding: 0, position: "relative" }), (0, u.Z)(i, "&.".concat(J.focused), { color: (n.vars || n).palette[r.color].main }), (0, u.Z)(i, "&.".concat(J.disabled), { color: (n.vars || n).palette.text.disabled }), (0, u.Z)(i, "&.".concat(J.error), { color: (n.vars || n).palette.error.main }), i));
                }),
                $ = (0, d.ZP)("span", {
                    name: "MuiFormLabel",
                    slot: "Asterisk",
                    overridesResolver: function (e, i) {
                        return i.asterisk;
                    },
                })(function (e) {
                    var i = e.theme;
                    return (0,
                        u.Z)({}, "&.".concat(J.error), { color: (i.vars || i).palette.error.main });
                }),
                Q = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ props: e, name: "MuiFormLabel" }),
                        o = n.children,
                        s = n.className,
                        d = n.component,
                        u = void 0 === d ? "label" : d,
                        c = (0, r.Z)(n, Y),
                        v = (0, R.Z)(),
                        m = (0, H.Z)({
                            props: n,
                            muiFormControl: v,
                            states: [
                                "color",
                                "required",
                                "focused",
                                "disabled",
                                "error",
                                "filled",
                            ],
                        }),
                        k = (0, a.Z)({}, n, {
                            color: m.color || "primary",
                            component: u,
                            disabled: m.disabled,
                            error: m.error,
                            filled: m.filled,
                            focused: m.focused,
                            required: m.required,
                        }),
                        g = (function (e) {
                            var i = e.classes,
                                n = e.color,
                                a = e.focused,
                                r = e.disabled,
                                o = e.error,
                                t = e.filled,
                                s = e.required,
                                d = {
                                    root: [
                                        "root",
                                        "color".concat((0, U.Z)(n)),
                                        r && "disabled",
                                        o && "error",
                                        t && "filled",
                                        a && "focused",
                                        s && "required",
                                    ],
                                    asterisk: ["asterisk", o && "error"],
                                };
                            return (0, f.Z)(d, K, i);
                        })(k);
                    return (0,
                        y.jsxs)(X, (0, a.Z)({ as: u, ownerState: k, className: (0, t.Z)(g.root, s), ref: i }, c, { children: [o, m.required && (0, y.jsxs)($, { ownerState: k, "aria-hidden": !0, className: g.asterisk, children: ["\u2009", "*"] })] }));
                });
            function ee(e) {
                return (0, k.Z)("MuiInputLabel", e);
            }
            (0, g.Z)("MuiInputLabel", [
                "root",
                "focused",
                "disabled",
                "error",
                "required",
                "asterisk",
                "formControl",
                "sizeSmall",
                "shrink",
                "animated",
                "standard",
                "filled",
                "outlined",
            ]);
            var ie = ["disableAnimation", "margin", "shrink", "variant", "className"],
                ne = (0, d.ZP)(Q, {
                    shouldForwardProp: function (e) {
                        return (0, d.FO)(e) || "classes" === e;
                    },
                    name: "MuiInputLabel",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            (0, u.Z)({}, "& .".concat(J.asterisk), i.asterisk),
                            i.root,
                            n.formControl && i.formControl,
                            "small" === n.size && i.sizeSmall,
                            n.shrink && i.shrink,
                            !n.disableAnimation && i.animated,
                            i[n.variant],
                        ];
                    },
                })(function (e) {
                    var i = e.theme,
                        n = e.ownerState;
                    return (0,
                        a.Z)({ display: "block", transformOrigin: "top left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }, n.formControl && { position: "absolute", left: 0, top: 0, transform: "translate(0, 20px) scale(1)" }, "small" === n.size && { transform: "translate(0, 17px) scale(1)" }, n.shrink && { transform: "translate(0, -1.5px) scale(0.75)", transformOrigin: "top left", maxWidth: "133%" }, !n.disableAnimation && { transition: i.transitions.create(["color", "transform", "max-width"], { duration: i.transitions.duration.shorter, easing: i.transitions.easing.easeOut }) }, "filled" === n.variant && (0, a.Z)({ zIndex: 1, pointerEvents: "none", transform: "translate(12px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" }, "small" === n.size && { transform: "translate(12px, 13px) scale(1)" }, n.shrink && (0, a.Z)({ userSelect: "none", pointerEvents: "auto", transform: "translate(12px, 7px) scale(0.75)", maxWidth: "calc(133% - 24px)" }, "small" === n.size && { transform: "translate(12px, 4px) scale(0.75)" })), "outlined" === n.variant && (0, a.Z)({ zIndex: 1, pointerEvents: "none", transform: "translate(14px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" }, "small" === n.size && { transform: "translate(14px, 9px) scale(1)" }, n.shrink && { userSelect: "none", pointerEvents: "auto", maxWidth: "calc(133% - 24px)", transform: "translate(14px, -9px) scale(0.75)" }));
                }),
                ae = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ name: "MuiInputLabel", props: e }),
                        o = n.disableAnimation,
                        s = void 0 !== o && o,
                        d = n.shrink,
                        u = n.className,
                        c = (0, r.Z)(n, ie),
                        v = (0, R.Z)(),
                        m = d;
                    "undefined" === typeof m &&
                        v &&
                        (m = v.filled || v.focused || v.adornedStart);
                    var k = (0, H.Z)({
                        props: n,
                        muiFormControl: v,
                        states: ["size", "variant", "required"],
                    }),
                        g = (0, a.Z)({}, n, {
                            disableAnimation: s,
                            formControl: v,
                            shrink: m,
                            size: k.size,
                            variant: k.variant,
                            required: k.required,
                        }),
                        h = (function (e) {
                            var i = e.classes,
                                n = e.formControl,
                                r = e.size,
                                o = e.shrink,
                                t = {
                                    root: [
                                        "root",
                                        n && "formControl",
                                        !e.disableAnimation && "animated",
                                        o && "shrink",
                                        "small" === r && "sizeSmall",
                                        e.variant,
                                    ],
                                    asterisk: [e.required && "asterisk"],
                                },
                                s = (0, f.Z)(t, ee, i);
                            return (0, a.Z)({}, i, s);
                        })(g);
                    return (0,
                        y.jsx)(ne, (0, a.Z)({ "data-shrink": m, ownerState: g, ref: i, className: (0, t.Z)(h.root, u) }, c, { classes: h }));
                }),
                re = n(885),
                oe = n(7272);
            var te = function (e, i) {
                return o.isValidElement(e) && -1 !== i.indexOf(e.type.muiName);
            },
                fe = n(1211);
            function se(e) {
                return (0, k.Z)("MuiFormControl", e);
            }
            (0, g.Z)("MuiFormControl", [
                "root",
                "marginNone",
                "marginNormal",
                "marginDense",
                "fullWidth",
                "disabled",
            ]);
            var de = [
                "children",
                "className",
                "color",
                "component",
                "disabled",
                "error",
                "focused",
                "fullWidth",
                "hiddenLabel",
                "margin",
                "required",
                "size",
                "variant",
            ],
                le = (0, d.ZP)("div", {
                    name: "MuiFormControl",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return (0, a.Z)(
                            {},
                            i.root,
                            i["margin".concat((0, U.Z)(n.margin))],
                            n.fullWidth && i.fullWidth
                        );
                    },
                })(function (e) {
                    var i = e.ownerState;
                    return (0,
                        a.Z)({ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top" }, "normal" === i.margin && { marginTop: 16, marginBottom: 8 }, "dense" === i.margin && { marginTop: 8, marginBottom: 4 }, i.fullWidth && { width: "100%" });
                }),
                ue = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ props: e, name: "MuiFormControl" }),
                        s = n.children,
                        d = n.className,
                        u = n.color,
                        c = void 0 === u ? "primary" : u,
                        v = n.component,
                        m = void 0 === v ? "div" : v,
                        k = n.disabled,
                        g = void 0 !== k && k,
                        h = n.error,
                        p = void 0 !== h && h,
                        w = n.focused,
                        b = n.fullWidth,
                        _ = void 0 !== b && b,
                        x = n.hiddenLabel,
                        F = void 0 !== x && x,
                        C = n.margin,
                        S = void 0 === C ? "none" : C,
                        M = n.required,
                        j = void 0 !== M && M,
                        L = n.size,
                        E = void 0 === L ? "medium" : L,
                        B = n.variant,
                        Z = void 0 === B ? "outlined" : B,
                        z = (0, r.Z)(n, de),
                        P = (0, a.Z)({}, n, {
                            color: c,
                            component: m,
                            disabled: g,
                            error: p,
                            fullWidth: _,
                            hiddenLabel: F,
                            margin: S,
                            required: j,
                            size: E,
                            variant: Z,
                        }),
                        W = (function (e) {
                            var i = e.classes,
                                n = e.margin,
                                a = e.fullWidth,
                                r = {
                                    root: [
                                        "root",
                                        "none" !== n && "margin".concat((0, U.Z)(n)),
                                        a && "fullWidth",
                                    ],
                                };
                            return (0, f.Z)(r, se, i);
                        })(P),
                        q = o.useState(function () {
                            var e = !1;
                            return (
                                s &&
                                o.Children.forEach(s, function (i) {
                                    if (te(i, ["Input", "Select"])) {
                                        var n = te(i, ["Select"]) ? i.props.input : i;
                                        n && (0, oe.B7)(n.props) && (e = !0);
                                    }
                                }),
                                e
                            );
                        }),
                        R = (0, re.Z)(q, 2),
                        H = R[0],
                        A = R[1],
                        T = o.useState(function () {
                            var e = !1;
                            return (
                                s &&
                                o.Children.forEach(s, function (i) {
                                    te(i, ["Input", "Select"]) &&
                                        (0, oe.vd)(i.props, !0) &&
                                        (e = !0);
                                }),
                                e
                            );
                        }),
                        O = (0, re.Z)(T, 2),
                        I = O[0],
                        D = O[1],
                        N = o.useState(!1),
                        V = (0, re.Z)(N, 2),
                        G = V[0],
                        K = V[1];
                    g && G && K(!1);
                    var J = void 0 === w || g ? G : w,
                        Y = o.useCallback(function () {
                            D(!0);
                        }, []),
                        X = {
                            adornedStart: H,
                            setAdornedStart: A,
                            color: c,
                            disabled: g,
                            error: p,
                            filled: I,
                            focused: J,
                            fullWidth: _,
                            hiddenLabel: F,
                            size: E,
                            onBlur: function () {
                                K(!1);
                            },
                            onEmpty: o.useCallback(function () {
                                D(!1);
                            }, []),
                            onFilled: Y,
                            onFocus: function () {
                                K(!0);
                            },
                            registerEffect: undefined,
                            required: j,
                            variant: Z,
                        };
                    return (0,
                        y.jsx)(fe.Z.Provider, { value: X, children: (0, y.jsx)(le, (0, a.Z)({ as: m, ownerState: P, className: (0, t.Z)(W.root, d), ref: i }, z, { children: s })) });
                });
            function ce(e) {
                return (0, k.Z)("MuiFormHelperText", e);
            }
            var ve,
                me = (0, g.Z)("MuiFormHelperText", [
                    "root",
                    "error",
                    "disabled",
                    "sizeSmall",
                    "sizeMedium",
                    "contained",
                    "focused",
                    "filled",
                    "required",
                ]),
                ke = [
                    "children",
                    "className",
                    "component",
                    "disabled",
                    "error",
                    "filled",
                    "focused",
                    "margin",
                    "required",
                    "variant",
                ],
                ge = (0, d.ZP)("p", {
                    name: "MuiFormHelperText",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            i.root,
                            n.size && i["size".concat((0, U.Z)(n.size))],
                            n.contained && i.contained,
                            n.filled && i.filled,
                        ];
                    },
                })(function (e) {
                    var i,
                        n = e.theme,
                        r = e.ownerState;
                    return (0,
                        a.Z)({ color: (n.vars || n).palette.text.secondary }, n.typography.caption, ((i = { textAlign: "left", marginTop: 3, marginRight: 0, marginBottom: 0, marginLeft: 0 }), (0, u.Z)(i, "&.".concat(me.disabled), { color: (n.vars || n).palette.text.disabled }), (0, u.Z)(i, "&.".concat(me.error), { color: (n.vars || n).palette.error.main }), i), "small" === r.size && { marginTop: 4 }, r.contained && { marginLeft: 14, marginRight: 14 });
                }),
                he = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ props: e, name: "MuiFormHelperText" }),
                        o = n.children,
                        s = n.className,
                        d = n.component,
                        u = void 0 === d ? "p" : d,
                        c = (0, r.Z)(n, ke),
                        v = (0, R.Z)(),
                        m = (0, H.Z)({
                            props: n,
                            muiFormControl: v,
                            states: [
                                "variant",
                                "size",
                                "disabled",
                                "error",
                                "filled",
                                "focused",
                                "required",
                            ],
                        }),
                        k = (0, a.Z)({}, n, {
                            component: u,
                            contained: "filled" === m.variant || "outlined" === m.variant,
                            variant: m.variant,
                            size: m.size,
                            disabled: m.disabled,
                            error: m.error,
                            filled: m.filled,
                            focused: m.focused,
                            required: m.required,
                        }),
                        g = (function (e) {
                            var i = e.classes,
                                n = e.contained,
                                a = e.size,
                                r = e.disabled,
                                o = e.error,
                                t = e.filled,
                                s = e.focused,
                                d = e.required,
                                l = {
                                    root: [
                                        "root",
                                        r && "disabled",
                                        o && "error",
                                        a && "size".concat((0, U.Z)(a)),
                                        n && "contained",
                                        s && "focused",
                                        t && "filled",
                                        d && "required",
                                    ],
                                };
                            return (0, f.Z)(l, ce, i);
                        })(k);
                    return (0,
                        y.jsx)(ge, (0, a.Z)({ as: u, ownerState: k, className: (0, t.Z)(g.root, s), ref: i }, c, { children: " " === o ? ve || (ve = (0, y.jsx)("span", { className: "notranslate", children: "\u200b" })) : o }));
                }),
                pe = n(6189),
                we = (n(8457), n(5783)),
                ye = n(6882);
            function be(e) {
                return (0, k.Z)("MuiNativeSelect", e);
            }
            var _e = (0, g.Z)("MuiNativeSelect", [
                "root",
                "select",
                "multiple",
                "filled",
                "outlined",
                "standard",
                "disabled",
                "icon",
                "iconOpen",
                "iconFilled",
                "iconOutlined",
                "iconStandard",
                "nativeInput",
            ]),
                xe = ["className", "disabled", "IconComponent", "inputRef", "variant"],
                Fe = function (e) {
                    var i,
                        n = e.ownerState,
                        r = e.theme;
                    return (0, a.Z)(
                        ((i = {
                            MozAppearance: "none",
                            WebkitAppearance: "none",
                            userSelect: "none",
                            borderRadius: 0,
                            cursor: "pointer",
                            "&:focus": {
                                backgroundColor:
                                    "light" === r.palette.mode
                                        ? "rgba(0, 0, 0, 0.05)"
                                        : "rgba(255, 255, 255, 0.05)",
                                borderRadius: 0,
                            },
                            "&::-ms-expand": { display: "none" },
                        }),
                            (0, u.Z)(i, "&.".concat(_e.disabled), { cursor: "default" }),
                            (0, u.Z)(i, "&[multiple]", { height: "auto" }),
                            (0, u.Z)(
                                i,
                                "&:not([multiple]) option, &:not([multiple]) optgroup",
                                { backgroundColor: r.palette.background.paper }
                            ),
                            (0, u.Z)(i, "&&&", { paddingRight: 24, minWidth: 16 }),
                            i),
                        "filled" === n.variant && { "&&&": { paddingRight: 32 } },
                        "outlined" === n.variant && {
                            borderRadius: r.shape.borderRadius,
                            "&:focus": { borderRadius: r.shape.borderRadius },
                            "&&&": { paddingRight: 32 },
                        }
                    );
                },
                Ce = (0, d.ZP)("select", {
                    name: "MuiNativeSelect",
                    slot: "Select",
                    shouldForwardProp: d.FO,
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            i.select,
                            i[n.variant],
                            (0, u.Z)({}, "&.".concat(_e.multiple), i.multiple),
                        ];
                    },
                })(Fe),
                Se = function (e) {
                    var i = e.ownerState,
                        n = e.theme;
                    return (0, a.Z)(
                        (0, u.Z)(
                            {
                                position: "absolute",
                                right: 0,
                                top: "calc(50% - .5em)",
                                pointerEvents: "none",
                                color: n.palette.action.active,
                            },
                            "&.".concat(_e.disabled),
                            { color: n.palette.action.disabled }
                        ),
                        i.open && { transform: "rotate(180deg)" },
                        "filled" === i.variant && { right: 7 },
                        "outlined" === i.variant && { right: 7 }
                    );
                },
                Me = (0, d.ZP)("svg", {
                    name: "MuiNativeSelect",
                    slot: "Icon",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            i.icon,
                            n.variant && i["icon".concat((0, U.Z)(n.variant))],
                            n.open && i.iconOpen,
                        ];
                    },
                })(Se),
                je = o.forwardRef(function (e, i) {
                    var n = e.className,
                        s = e.disabled,
                        d = e.IconComponent,
                        l = e.inputRef,
                        u = e.variant,
                        c = void 0 === u ? "standard" : u,
                        v = (0, r.Z)(e, xe),
                        m = (0, a.Z)({}, e, { disabled: s, variant: c }),
                        k = (function (e) {
                            var i = e.classes,
                                n = e.variant,
                                a = e.disabled,
                                r = e.multiple,
                                o = e.open,
                                t = {
                                    select: ["select", n, a && "disabled", r && "multiple"],
                                    icon: [
                                        "icon",
                                        "icon".concat((0, U.Z)(n)),
                                        o && "iconOpen",
                                        a && "disabled",
                                    ],
                                };
                            return (0, f.Z)(t, be, i);
                        })(m);
                    return (0,
                        y.jsxs)(o.Fragment, { children: [(0, y.jsx)(Ce, (0, a.Z)({ ownerState: m, className: (0, t.Z)(k.select, n), disabled: s, ref: l || i }, v)), e.multiple ? null : (0, y.jsx)(Me, { as: d, ownerState: m, className: k.icon })] });
                }),
                Le = n(7933),
                Ee = n(4938);
            function Be(e) {
                return (0, k.Z)("MuiSelect", e);
            }
            var Ze,
                ze = (0, g.Z)("MuiSelect", [
                    "select",
                    "multiple",
                    "filled",
                    "outlined",
                    "standard",
                    "disabled",
                    "focused",
                    "icon",
                    "iconOpen",
                    "iconFilled",
                    "iconOutlined",
                    "iconStandard",
                    "nativeInput",
                ]),
                Pe = [
                    "aria-describedby",
                    "aria-label",
                    "autoFocus",
                    "autoWidth",
                    "children",
                    "className",
                    "defaultOpen",
                    "defaultValue",
                    "disabled",
                    "displayEmpty",
                    "IconComponent",
                    "inputRef",
                    "labelId",
                    "MenuProps",
                    "multiple",
                    "name",
                    "onBlur",
                    "onChange",
                    "onClose",
                    "onFocus",
                    "onOpen",
                    "open",
                    "readOnly",
                    "renderValue",
                    "SelectDisplayProps",
                    "tabIndex",
                    "type",
                    "value",
                    "variant",
                ],
                We = (0, d.ZP)("div", {
                    name: "MuiSelect",
                    slot: "Select",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            (0, u.Z)({}, "&.".concat(ze.select), i.select),
                            (0, u.Z)({}, "&.".concat(ze.select), i[n.variant]),
                            (0, u.Z)({}, "&.".concat(ze.multiple), i.multiple),
                        ];
                    },
                })(
                    Fe,
                    (0, u.Z)({}, "&.".concat(ze.select), {
                        height: "auto",
                        minHeight: "1.4375em",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    })
                ),
                qe = (0, d.ZP)("svg", {
                    name: "MuiSelect",
                    slot: "Icon",
                    overridesResolver: function (e, i) {
                        var n = e.ownerState;
                        return [
                            i.icon,
                            n.variant && i["icon".concat((0, U.Z)(n.variant))],
                            n.open && i.iconOpen,
                        ];
                    },
                })(Se),
                Re = (0, d.ZP)("input", {
                    shouldForwardProp: function (e) {
                        return (0, d.Dz)(e) && "classes" !== e;
                    },
                    name: "MuiSelect",
                    slot: "NativeInput",
                    overridesResolver: function (e, i) {
                        return i.nativeInput;
                    },
                })({
                    bottom: 0,
                    left: 0,
                    position: "absolute",
                    opacity: 0,
                    pointerEvents: "none",
                    width: "100%",
                    boxSizing: "border-box",
                });
            function He(e, i) {
                return "object" === typeof i && null !== i
                    ? e === i
                    : String(e) === String(i);
            }
            function Ae(e) {
                return null == e || ("string" === typeof e && !e.trim());
            }
            var Te,
                Oe,
                Ie = o.forwardRef(function (e, i) {
                    var n = e["aria-describedby"],
                        s = e["aria-label"],
                        d = e.autoFocus,
                        l = e.autoWidth,
                        u = e.children,
                        c = e.className,
                        v = e.defaultOpen,
                        m = e.defaultValue,
                        k = e.disabled,
                        g = e.displayEmpty,
                        h = e.IconComponent,
                        p = e.inputRef,
                        w = e.labelId,
                        b = e.MenuProps,
                        _ = void 0 === b ? {} : b,
                        x = e.multiple,
                        F = e.name,
                        C = e.onBlur,
                        S = e.onChange,
                        M = e.onClose,
                        j = e.onFocus,
                        L = e.onOpen,
                        E = e.open,
                        B = e.readOnly,
                        Z = e.renderValue,
                        z = e.SelectDisplayProps,
                        P = void 0 === z ? {} : z,
                        W = e.tabIndex,
                        q = e.value,
                        R = e.variant,
                        H = void 0 === R ? "standard" : R,
                        A = (0, r.Z)(e, Pe),
                        T = (0, Ee.Z)({ controlled: q, default: m, name: "Select" }),
                        O = (0, re.Z)(T, 2),
                        I = O[0],
                        D = O[1],
                        N = (0, Ee.Z)({ controlled: E, default: v, name: "Select" }),
                        V = (0, re.Z)(N, 2),
                        G = V[0],
                        K = V[1],
                        J = o.useRef(null),
                        Y = o.useRef(null),
                        X = o.useState(null),
                        $ = (0, re.Z)(X, 2),
                        Q = $[0],
                        ee = $[1],
                        ie = o.useRef(null != E).current,
                        ne = o.useState(),
                        ae = (0, re.Z)(ne, 2),
                        te = ae[0],
                        fe = ae[1],
                        se = (0, Le.Z)(i, p),
                        de = o.useCallback(function (e) {
                            (Y.current = e), e && ee(e);
                        }, []);
                    o.useImperativeHandle(
                        se,
                        function () {
                            return {
                                focus: function () {
                                    Y.current.focus();
                                },
                                node: J.current,
                                value: I,
                            };
                        },
                        [I]
                    ),
                        o.useEffect(
                            function () {
                                v &&
                                    G &&
                                    Q &&
                                    !ie &&
                                    (fe(l ? null : Q.clientWidth), Y.current.focus());
                            },
                            [Q, l]
                        ),
                        o.useEffect(
                            function () {
                                d && Y.current.focus();
                            },
                            [d]
                        ),
                        o.useEffect(
                            function () {
                                if (w) {
                                    var e = (0, we.Z)(Y.current).getElementById(w);
                                    if (e) {
                                        var i = function () {
                                            getSelection().isCollapsed && Y.current.focus();
                                        };
                                        return (
                                            e.addEventListener("click", i),
                                            function () {
                                                e.removeEventListener("click", i);
                                            }
                                        );
                                    }
                                }
                            },
                            [w]
                        );
                    var le,
                        ue,
                        ce = function (e, i) {
                            e ? L && L(i) : M && M(i),
                                ie || (fe(l ? null : Q.clientWidth), K(e));
                        },
                        ve = o.Children.toArray(u),
                        me = function (e) {
                            return function (i) {
                                var n;
                                if (i.currentTarget.hasAttribute("tabindex")) {
                                    if (x) {
                                        n = Array.isArray(I) ? I.slice() : [];
                                        var a = I.indexOf(e.props.value);
                                        -1 === a ? n.push(e.props.value) : n.splice(a, 1);
                                    } else n = e.props.value;
                                    if (
                                        (e.props.onClick && e.props.onClick(i),
                                            I !== n && (D(n), S))
                                    ) {
                                        var r = i.nativeEvent || i,
                                            o = new r.constructor(r.type, r);
                                        Object.defineProperty(o, "target", {
                                            writable: !0,
                                            value: { value: n, name: F },
                                        }),
                                            S(o, e);
                                    }
                                    x || ce(!1, i);
                                }
                            };
                        },
                        ke = null !== Q && G;
                    delete A["aria-invalid"];
                    var ge = [],
                        he = !1;
                    ((0, oe.vd)({ value: I }) || g) && (Z ? (le = Z(I)) : (he = !0));
                    var be = ve.map(function (e, i, n) {
                        if (!o.isValidElement(e)) return null;
                        var a;
                        if (x) {
                            if (!Array.isArray(I)) throw new Error((0, pe.Z)(2));
                            (a = I.some(function (i) {
                                return He(i, e.props.value);
                            })) &&
                                he &&
                                ge.push(e.props.children);
                        } else (a = He(I, e.props.value)) && he && (ue = e.props.children);
                        if ((a && !0, void 0 === e.props.value))
                            return o.cloneElement(e, { "aria-readonly": !0, role: "option" });
                        return o.cloneElement(e, {
                            "aria-selected": a ? "true" : "false",
                            onClick: me(e),
                            onKeyUp: function (i) {
                                " " === i.key && i.preventDefault(),
                                    e.props.onKeyUp && e.props.onKeyUp(i);
                            },
                            role: "option",
                            selected:
                                void 0 === n[0].props.value || !0 === n[0].props.disabled
                                    ? (function () {
                                        if (I) return a;
                                        var i = n.find(function (e) {
                                            return (
                                                void 0 !== e.props.value && !0 !== e.props.disabled
                                            );
                                        });
                                        return e === i || a;
                                    })()
                                    : a,
                            value: void 0,
                            "data-value": e.props.value,
                        });
                    });
                    he &&
                        (le = x
                            ? 0 === ge.length
                                ? null
                                : ge.reduce(function (e, i, n) {
                                    return e.push(i), n < ge.length - 1 && e.push(", "), e;
                                }, [])
                            : ue);
                    var _e,
                        xe = te;
                    !l && ie && Q && (xe = Q.clientWidth),
                        (_e = "undefined" !== typeof W ? W : k ? null : 0);
                    var Fe = P.id || (F ? "mui-component-select-".concat(F) : void 0),
                        Ce = (0, a.Z)({}, e, { variant: H, value: I, open: ke }),
                        Se = (function (e) {
                            var i = e.classes,
                                n = e.variant,
                                a = e.disabled,
                                r = e.multiple,
                                o = e.open,
                                t = {
                                    select: ["select", n, a && "disabled", r && "multiple"],
                                    icon: [
                                        "icon",
                                        "icon".concat((0, U.Z)(n)),
                                        o && "iconOpen",
                                        a && "disabled",
                                    ],
                                    nativeInput: ["nativeInput"],
                                };
                            return (0, f.Z)(t, Be, i);
                        })(Ce);
                    return (0, y.jsxs)(o.Fragment, {
                        children: [
                            (0, y.jsx)(
                                We,
                                (0, a.Z)(
                                    {
                                        ref: de,
                                        tabIndex: _e,
                                        role: "button",
                                        "aria-disabled": k ? "true" : void 0,
                                        "aria-expanded": ke ? "true" : "false",
                                        "aria-haspopup": "listbox",
                                        "aria-label": s,
                                        "aria-labelledby":
                                            [w, Fe].filter(Boolean).join(" ") || void 0,
                                        "aria-describedby": n,
                                        onKeyDown: function (e) {
                                            if (!B) {
                                                -1 !==
                                                    [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(
                                                        e.key
                                                    ) && (e.preventDefault(), ce(!0, e));
                                            }
                                        },
                                        onMouseDown:
                                            k || B
                                                ? null
                                                : function (e) {
                                                    0 === e.button &&
                                                        (e.preventDefault(),
                                                            Y.current.focus(),
                                                            ce(!0, e));
                                                },
                                        onBlur: function (e) {
                                            !ke &&
                                                C &&
                                                (Object.defineProperty(e, "target", {
                                                    writable: !0,
                                                    value: { value: I, name: F },
                                                }),
                                                    C(e));
                                        },
                                        onFocus: j,
                                    },
                                    P,
                                    {
                                        ownerState: Ce,
                                        className: (0, t.Z)(P.className, Se.select, c),
                                        id: Fe,
                                        children: Ae(le)
                                            ? Ze ||
                                            (Ze = (0, y.jsx)("span", {
                                                className: "notranslate",
                                                children: "\u200b",
                                            }))
                                            : le,
                                    }
                                )
                            ),
                            (0, y.jsx)(
                                Re,
                                (0, a.Z)(
                                    {
                                        value: Array.isArray(I) ? I.join(",") : I,
                                        name: F,
                                        ref: J,
                                        "aria-hidden": !0,
                                        onChange: function (e) {
                                            var i = ve
                                                .map(function (e) {
                                                    return e.props.value;
                                                })
                                                .indexOf(e.target.value);
                                            if (-1 !== i) {
                                                var n = ve[i];
                                                D(n.props.value), S && S(e, n);
                                            }
                                        },
                                        tabIndex: -1,
                                        disabled: k,
                                        className: Se.nativeInput,
                                        autoFocus: d,
                                        ownerState: Ce,
                                    },
                                    A
                                )
                            ),
                            (0, y.jsx)(qe, { as: h, className: Se.icon, ownerState: Ce }),
                            (0, y.jsx)(
                                ye.Z,
                                (0, a.Z)(
                                    {
                                        id: "menu-".concat(F || ""),
                                        anchorEl: Q,
                                        open: ke,
                                        onClose: function (e) {
                                            ce(!1, e);
                                        },
                                        anchorOrigin: { vertical: "bottom", horizontal: "center" },
                                        transformOrigin: { vertical: "top", horizontal: "center" },
                                    },
                                    _,
                                    {
                                        MenuListProps: (0, a.Z)(
                                            {
                                                "aria-labelledby": w,
                                                role: "listbox",
                                                disableListWrap: !0,
                                            },
                                            _.MenuListProps
                                        ),
                                        PaperProps: (0, a.Z)({}, _.PaperProps, {
                                            style: (0, a.Z)(
                                                { minWidth: xe },
                                                null != _.PaperProps ? _.PaperProps.style : null
                                            ),
                                        }),
                                        children: be,
                                    }
                                )
                            ),
                        ],
                    });
                }),
                De = (0, n(233).Z)(
                    (0, y.jsx)("path", { d: "M7 10l5 5 5-5z" }),
                    "ArrowDropDown"
                ),
                Ne = [
                    "autoWidth",
                    "children",
                    "classes",
                    "className",
                    "defaultOpen",
                    "displayEmpty",
                    "IconComponent",
                    "id",
                    "input",
                    "inputProps",
                    "label",
                    "labelId",
                    "MenuProps",
                    "multiple",
                    "native",
                    "onClose",
                    "onOpen",
                    "open",
                    "renderValue",
                    "SelectDisplayProps",
                    "variant",
                ],
                Ve = {
                    name: "MuiSelect",
                    overridesResolver: function (e, i) {
                        return i.root;
                    },
                    shouldForwardProp: function (e) {
                        return (0, d.FO)(e) && "variant" !== e;
                    },
                    slot: "Root",
                },
                Ge = (0, d.ZP)(C, Ve)(""),
                Ue = (0, d.ZP)(G, Ve)(""),
                Ke = (0, d.ZP)(z, Ve)(""),
                Je = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ name: "MuiSelect", props: e }),
                        f = n.autoWidth,
                        s = void 0 !== f && f,
                        d = n.children,
                        u = n.classes,
                        c = void 0 === u ? {} : u,
                        m = n.className,
                        k = n.defaultOpen,
                        g = void 0 !== k && k,
                        h = n.displayEmpty,
                        p = void 0 !== h && h,
                        w = n.IconComponent,
                        b = void 0 === w ? De : w,
                        _ = n.id,
                        x = n.input,
                        F = n.inputProps,
                        C = n.label,
                        S = n.labelId,
                        M = n.MenuProps,
                        j = n.multiple,
                        L = void 0 !== j && j,
                        E = n.native,
                        B = void 0 !== E && E,
                        Z = n.onClose,
                        z = n.onOpen,
                        P = n.open,
                        W = n.renderValue,
                        q = n.SelectDisplayProps,
                        A = n.variant,
                        T = void 0 === A ? "outlined" : A,
                        O = (0, r.Z)(n, Ne),
                        I = B ? je : Ie,
                        D = (0, R.Z)(),
                        N =
                            (0, H.Z)({ props: n, muiFormControl: D, states: ["variant"] })
                                .variant || T,
                        V =
                            x ||
                            {
                                standard: Te || (Te = (0, y.jsx)(Ge, {})),
                                outlined: (0, y.jsx)(Ue, { label: C }),
                                filled: Oe || (Oe = (0, y.jsx)(Ke, {})),
                            }[N],
                        G = (function (e) {
                            return e.classes;
                        })((0, a.Z)({}, n, { variant: N, classes: c })),
                        U = (0, Le.Z)(i, V.ref);
                    return (0,
                        y.jsx)(o.Fragment, { children: o.cloneElement(V, (0, a.Z)({ inputComponent: I, inputProps: (0, a.Z)({ children: d, IconComponent: b, variant: N, type: void 0, multiple: L }, B ? { id: _ } : { autoWidth: s, defaultOpen: g, displayEmpty: p, labelId: S, MenuProps: M, onClose: Z, onOpen: z, open: P, renderValue: W, SelectDisplayProps: (0, a.Z)({ id: _ }, q) }, F, { classes: F ? (0, v.Z)(G, F.classes) : G }, x ? x.props.inputProps : {}) }, L && B && "outlined" === N ? { notched: !0 } : {}, { ref: U, className: (0, t.Z)(V.props.className, m) }, !x && { variant: N }, O)) });
                });
            Je.muiName = "Select";
            var Ye = Je;
            function Xe(e) {
                return (0, k.Z)("MuiTextField", e);
            }
            (0, g.Z)("MuiTextField", ["root"]);
            var $e = [
                "autoComplete",
                "autoFocus",
                "children",
                "className",
                "color",
                "defaultValue",
                "disabled",
                "error",
                "FormHelperTextProps",
                "fullWidth",
                "helperText",
                "id",
                "InputLabelProps",
                "inputProps",
                "InputProps",
                "inputRef",
                "label",
                "maxRows",
                "minRows",
                "multiline",
                "name",
                "onBlur",
                "onChange",
                "onFocus",
                "placeholder",
                "required",
                "rows",
                "select",
                "SelectProps",
                "type",
                "value",
                "variant",
            ],
                Qe = { standard: C, filled: z, outlined: G },
                ei = (0, d.ZP)(ue, {
                    name: "MuiTextField",
                    slot: "Root",
                    overridesResolver: function (e, i) {
                        return i.root;
                    },
                })({}),
                ii = o.forwardRef(function (e, i) {
                    var n = (0, l.Z)({ props: e, name: "MuiTextField" }),
                        o = n.autoComplete,
                        d = n.autoFocus,
                        u = void 0 !== d && d,
                        c = n.children,
                        v = n.className,
                        m = n.color,
                        k = void 0 === m ? "primary" : m,
                        g = n.defaultValue,
                        h = n.disabled,
                        p = void 0 !== h && h,
                        w = n.error,
                        b = void 0 !== w && w,
                        _ = n.FormHelperTextProps,
                        x = n.fullWidth,
                        F = void 0 !== x && x,
                        C = n.helperText,
                        S = n.id,
                        M = n.InputLabelProps,
                        j = n.inputProps,
                        L = n.InputProps,
                        E = n.inputRef,
                        B = n.label,
                        Z = n.maxRows,
                        z = n.minRows,
                        P = n.multiline,
                        W = void 0 !== P && P,
                        q = n.name,
                        R = n.onBlur,
                        H = n.onChange,
                        A = n.onFocus,
                        T = n.placeholder,
                        O = n.required,
                        I = void 0 !== O && O,
                        D = n.rows,
                        N = n.select,
                        V = void 0 !== N && N,
                        G = n.SelectProps,
                        U = n.type,
                        K = n.value,
                        J = n.variant,
                        Y = void 0 === J ? "outlined" : J,
                        X = (0, r.Z)(n, $e),
                        $ = (0, a.Z)({}, n, {
                            autoFocus: u,
                            color: k,
                            disabled: p,
                            error: b,
                            fullWidth: F,
                            multiline: W,
                            required: I,
                            select: V,
                            variant: Y,
                        }),
                        Q = (function (e) {
                            var i = e.classes;
                            return (0, f.Z)({ root: ["root"] }, Xe, i);
                        })($);
                    var ee = {};
                    "outlined" === Y &&
                        (M && "undefined" !== typeof M.shrink && (ee.notched = M.shrink),
                            (ee.label = B)),
                        V &&
                        ((G && G.native) || (ee.id = void 0),
                            (ee["aria-describedby"] = void 0));
                    var ie = (0, s.Z)(S),
                        ne = C && ie ? "".concat(ie, "-helper-text") : void 0,
                        re = B && ie ? "".concat(ie, "-label") : void 0,
                        oe = Qe[Y],
                        te = (0, y.jsx)(
                            oe,
                            (0, a.Z)(
                                {
                                    "aria-describedby": ne,
                                    autoComplete: o,
                                    autoFocus: u,
                                    defaultValue: g,
                                    fullWidth: F,
                                    multiline: W,
                                    name: q,
                                    rows: D,
                                    maxRows: Z,
                                    minRows: z,
                                    type: U,
                                    value: K,
                                    id: ie,
                                    inputRef: E,
                                    onBlur: R,
                                    onChange: H,
                                    onFocus: A,
                                    placeholder: T,
                                    inputProps: j,
                                },
                                ee,
                                L
                            )
                        );
                    return (0,
                        y.jsxs)(ei, (0, a.Z)({ className: (0, t.Z)(Q.root, v), disabled: p, error: b, fullWidth: F, ref: i, required: I, color: k, variant: Y, ownerState: $ }, X, { children: [null != B && "" !== B && (0, y.jsx)(ae, (0, a.Z)({ htmlFor: ie, id: re }, M, { children: B })), V ? (0, y.jsx)(Ye, (0, a.Z)({ "aria-describedby": ne, id: ie, labelId: re, value: K, input: te }, G, { children: c })) : te, C && (0, y.jsx)(he, (0, a.Z)({ id: ne }, _, { children: C }))] }));
                });
        },
        2413: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("path", {
                        d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("circle", {
                        cx: "128",
                        cy: "132",
                        r: "36",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",
                            opacity: "0.2",
                        }),
                        a.createElement("path", {
                            d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("circle", {
                            cx: "128",
                            cy: "132",
                            r: "36",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M208,56H180.3L166.7,35.6A7.9,7.9,0,0,0,160,32H96a7.9,7.9,0,0,0-6.7,3.6L75.7,56H48A24.1,24.1,0,0,0,24,80V192a24.1,24.1,0,0,0,24,24H208a24.1,24.1,0,0,0,24-24V80A24.1,24.1,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("circle", {
                            cx: "128",
                            cy: "132",
                            r: "36",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("circle", {
                            cx: "128",
                            cy: "132",
                            r: "36",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("circle", {
                            cx: "128",
                            cy: "132",
                            r: "36",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "Camera"), (i.Z = s);
        },
        9865: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("polyline", {
                        points: "208 96 128 176 48 96",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polygon", {
                            points: "208 96 128 176 48 96 208 96",
                            opacity: "0.2",
                        }),
                        a.createElement("polygon", {
                            points: "208 96 128 176 48 96 208 96",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polyline", {
                            points: "208 96 128 176 48 96",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polyline", {
                            points: "208 96 128 176 48 96",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polyline", {
                            points: "208 96 128 176 48 96",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "CaretDown"), (i.Z = s);
        },
        7863: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function () {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("circle", { cx: "128", cy: "64", r: "16" }),
                    a.createElement("circle", { cx: "128", cy: "128", r: "16" }),
                    a.createElement("circle", { cx: "128", cy: "192", r: "16" })
                );
            }),
                t.set("duotone", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", { cx: "128", cy: "128", r: "12" }),
                        a.createElement("circle", { cx: "128", cy: "64", r: "12" }),
                        a.createElement("circle", { cx: "128", cy: "192", r: "12" })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,104a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z",
                        })
                    );
                }),
                t.set("light", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", { cx: "128", cy: "64", r: "10" }),
                        a.createElement("circle", { cx: "128", cy: "128", r: "10" }),
                        a.createElement("circle", { cx: "128", cy: "192", r: "10" })
                    );
                }),
                t.set("thin", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", { cx: "128", cy: "64", r: "8" }),
                        a.createElement("circle", { cx: "128", cy: "128", r: "8" }),
                        a.createElement("circle", { cx: "128", cy: "192", r: "8" })
                    );
                }),
                t.set("regular", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", { cx: "128", cy: "128", r: "12" }),
                        a.createElement("circle", { cx: "128", cy: "64", r: "12" }),
                        a.createElement("circle", { cx: "128", cy: "192", r: "12" })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "DotsThreeVertical"), (i.Z = s);
        },
        7501: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("polyline", {
                        points: "86 110 128 152 170 110",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("line", {
                        x1: "128",
                        y1: "40",
                        x2: "128",
                        y2: "152",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("path", {
                        d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polyline", {
                            points: "86 110 128 152 170 110",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("line", {
                            x1: "128",
                            y1: "40",
                            x2: "128",
                            y2: "152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M80.3,115.7a8.2,8.2,0,0,1-1.7-8.7,8,8,0,0,1,7.4-5h34V40a8,8,0,0,1,16,0v62h34a8,8,0,0,1,7.4,5,8.2,8.2,0,0,1-1.7,8.7l-42,42a8.2,8.2,0,0,1-11.4,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polyline", {
                            points: "86 110 128 152 170 110",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("line", {
                            x1: "128",
                            y1: "40",
                            x2: "128",
                            y2: "152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("path", {
                            d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polyline", {
                            points: "86 110 128 152 170 110",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("line", {
                            x1: "128",
                            y1: "40",
                            x2: "128",
                            y2: "152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("path", {
                            d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polyline", {
                            points: "86 110 128 152 170 110",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("line", {
                            x1: "128",
                            y1: "40",
                            x2: "128",
                            y2: "152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "DownloadSimple"), (i.Z = s);
        },
        6880: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("path", {
                        d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("polyline", {
                        points: "148 32 148 92 208 92",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("polygon", {
                            points: "152 32 152 88 208 88 152 32",
                            opacity: "0.2",
                        }),
                        a.createElement("path", {
                            d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("polyline", {
                            points: "152 32 152 88 208 88",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM152,88V44l44,44Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("polyline", {
                            points: "152 32 152 88 208 88",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("polyline", {
                            points: "152 32 152 88 208 88",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("polyline", {
                            points: "152 32 152 88 208 88",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "File"), (i.Z = s);
        },
        6526: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("rect", {
                        x: "32",
                        y: "48",
                        width: "192",
                        height: "160",
                        rx: "8",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("path", {
                        d: "M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("circle", { cx: "156", cy: "100", r: "16" })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z",
                            opacity: "0.2",
                        }),
                        a.createElement("rect", {
                            x: "32",
                            y: "48",
                            width: "192",
                            height: "160",
                            rx: "8",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("circle", { cx: "156", cy: "100", r: "12" })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M168,100h0a12,12,0,0,1-12,12,12,12,0,0,1-12-12,12,12,0,0,1,24,0Zm64-44V184h0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V168h0V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,164.7V56H40v92.7L76.7,112a16.1,16.1,0,0,1,22.6,0L144,156.7,164.7,136a16.1,16.1,0,0,1,22.6,0Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("rect", {
                            x: "32",
                            y: "48",
                            width: "192",
                            height: "160",
                            rx: "8",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("path", {
                            d: "M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("circle", { cx: "156", cy: "100", r: "10" })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("rect", {
                            x: "32",
                            y: "48",
                            width: "192",
                            height: "160",
                            rx: "8",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("path", {
                            d: "M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("circle", { cx: "156", cy: "100", r: "8" })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("rect", {
                            x: "32",
                            y: "48",
                            width: "192",
                            height: "160",
                            rx: "8",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("circle", { cx: "156", cy: "100", r: "12" })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "Image"), (i.Z = s);
        },
        5355: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("line", {
                        x1: "94.1",
                        y1: "161.9",
                        x2: "161.9",
                        y2: "94",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("path", {
                        d: "M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("path", {
                        d: "M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("line", {
                            x1: "94.1",
                            y1: "161.9",
                            x2: "161.9",
                            y2: "94",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M156.3,88.4,88.4,156.3a8,8,0,0,0,0,11.3,8.1,8.1,0,0,0,11.3,0l67.9-67.9a8,8,0,0,0-11.3-11.3Z",
                        }),
                        a.createElement("path", {
                            d: "M139.3,173.3,111,201.5a39.7,39.7,0,0,1-56.5,0,40,40,0,0,1,0-56.5l28.2-28.3a8,8,0,0,0-11.3-11.3L43.1,133.7a56,56,0,0,0,79.2,79.2l28.3-28.3a8,8,0,0,0,0-11.3A7.9,7.9,0,0,0,139.3,173.3Z",
                        }),
                        a.createElement("path", {
                            d: "M212.9,43.1a56,56,0,0,0-79.2,0L105.4,71.4a8,8,0,0,0,11.3,11.3L145,54.5a39.7,39.7,0,0,1,56.5,0,40,40,0,0,1,0,56.5l-28.2,28.3a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l28.3-28.3A56.1,56.1,0,0,0,212.9,43.1Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("line", {
                            x1: "94.1",
                            y1: "161.9",
                            x2: "161.9",
                            y2: "94",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("path", {
                            d: "M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("path", {
                            d: "M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("line", {
                            x1: "94.1",
                            y1: "161.9",
                            x2: "161.9",
                            y2: "94",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("path", {
                            d: "M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("path", {
                            d: "M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("line", {
                            x1: "94.1",
                            y1: "161.9",
                            x2: "161.9",
                            y2: "94",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "LinkSimple"), (i.Z = s);
        },
        4306: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("path", {
                        d: "M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("line", {
                        x1: "110.9",
                        y1: "145.1",
                        x2: "156.1",
                        y2: "99.9",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",
                            opacity: "0.2",
                        }),
                        a.createElement("path", {
                            d: "M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("line", {
                            x1: "110.9",
                            y1: "145.1",
                            x2: "156.1",
                            y2: "99.9",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M227.7,48.3,175.3,234.2a15.9,15.9,0,0,1-14.1,11.6h-1.4a16,16,0,0,1-14.4-9.1l-35.7-75.4a4.1,4.1,0,0,1,.8-4.6l51.3-51.3a8,8,0,1,0-11.3-11.3L99.2,145.5a4.1,4.1,0,0,1-4.6.8l-75-35.5a16.6,16.6,0,0,1-9.5-15.6A15.9,15.9,0,0,1,21.8,80.7L208.1,28.2a16,16,0,0,1,17.7,6.5A16.7,16.7,0,0,1,227.7,48.3Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("line", {
                            x1: "110.9",
                            y1: "145.1",
                            x2: "156.1",
                            y2: "99.9",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("line", {
                            x1: "110.9",
                            y1: "145.1",
                            x2: "156.1",
                            y2: "99.9",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("line", {
                            x1: "110.9",
                            y1: "145.1",
                            x2: "156.1",
                            y2: "99.9",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "PaperPlaneTilt"), (i.Z = s);
        },
        9585: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("circle", {
                        cx: "128",
                        cy: "128",
                        r: "96",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("circle", { cx: "92", cy: "108", r: "16" }),
                    a.createElement("circle", { cx: "164", cy: "108", r: "16" }),
                    a.createElement("path", {
                        d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", {
                            cx: "128",
                            cy: "128",
                            r: "96",
                            opacity: "0.2",
                        }),
                        a.createElement("circle", {
                            cx: "128",
                            cy: "128",
                            r: "96",
                            fill: "none",
                            stroke: e,
                            strokeMiterlimit: "10",
                            strokeWidth: "16",
                        }),
                        a.createElement("circle", { cx: "92", cy: "108", r: "12" }),
                        a.createElement("circle", { cx: "164", cy: "108", r: "12" }),
                        a.createElement("path", {
                            d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.5,60a56,56,0,0,1-97,0,8,8,0,1,1,13.8-8,40.1,40.1,0,0,0,69.4,0,8,8,0,0,1,13.8,8Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", {
                            cx: "128",
                            cy: "128",
                            r: "96",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("circle", { cx: "92", cy: "108", r: "10" }),
                        a.createElement("circle", { cx: "164", cy: "108", r: "10" }),
                        a.createElement("path", {
                            d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", {
                            cx: "128",
                            cy: "128",
                            r: "96",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("circle", { cx: "92", cy: "108", r: "8" }),
                        a.createElement("circle", { cx: "164", cy: "108", r: "8" }),
                        a.createElement("path", {
                            d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("circle", {
                            cx: "128",
                            cy: "128",
                            r: "96",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("circle", { cx: "92", cy: "108", r: "12" }),
                        a.createElement("circle", { cx: "164", cy: "108", r: "12" }),
                        a.createElement("path", {
                            d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "Smiley"), (i.Z = s);
        },
        6206: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("path", {
                        d: "M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("path", {
                        d: "M136,216V184a48,48,0,0,1,48-48h32",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M136,216V184a48,48,0,0,1,48-48h32C208,160,160,208,136,216Z",
                            opacity: "0.2",
                        }),
                        a.createElement("path", {
                            d: "M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M136,216V184a48,48,0,0,1,48-48h32",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M168,32H88A56,56,0,0,0,32,88v80a56,56,0,0,0,56,56h48a6.9,6.9,0,0,0,2.5-.4c26.3-8.8,76.3-58.8,85.1-85.1a6.9,6.9,0,0,0,.4-2.5V88A56,56,0,0,0,168,32ZM136,207.4V176a40,40,0,0,1,40-40h31.4C198.2,157.6,157.6,198.2,136,207.4Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("path", {
                            d: "M136,216V184a48,48,0,0,1,48-48h32",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("path", {
                            d: "M136,216V184a48,48,0,0,1,48-48h32",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("path", {
                            d: "M136,216V184a48,48,0,0,1,48-48h32",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "Sticker"), (i.Z = s);
        },
        9165: function (e, i, n) {
            var a = n(2791),
                r = n(2602),
                o = n(7120),
                t = new Map();
            t.set("bold", function (e) {
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("path", {
                        d: "M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    }),
                    a.createElement("polyline", {
                        points: "184 112 240 80 240 176 184 144",
                        fill: "none",
                        stroke: e,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "24",
                    })
                );
            }),
                t.set("duotone", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z",
                            opacity: "0.2",
                        }),
                        a.createElement("path", {
                            d: "M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("polyline", {
                            points: "184 112 240 80 240 176 184 144",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                }),
                t.set("fill", function () {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M176,92v96a16,16,0,0,1-16,16H48A40,40,0,0,1,8,164V68A16,16,0,0,1,24,52H136A40,40,0,0,1,176,92Zm68-18.9a7.7,7.7,0,0,0-8,0L196,95.9a8,8,0,0,0-4,7v50.2a8,8,0,0,0,4,7l40,22.8a8.3,8.3,0,0,0,4,1.1,8,8,0,0,0,4-1.1,7.8,7.8,0,0,0,4-6.9V80A7.8,7.8,0,0,0,244,73.1Z",
                        })
                    );
                }),
                t.set("light", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        }),
                        a.createElement("polyline", {
                            points: "184 112 240 80 240 176 184 144",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "12",
                        })
                    );
                }),
                t.set("thin", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        }),
                        a.createElement("polyline", {
                            points: "184 112 240 80 240 176 184 144",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "8",
                        })
                    );
                }),
                t.set("regular", function (e) {
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("path", {
                            d: "M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        }),
                        a.createElement("polyline", {
                            points: "184 112 240 80 240 176 184 144",
                            fill: "none",
                            stroke: e,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "16",
                        })
                    );
                });
            var f = function (e, i) {
                return (0, r._)(e, i, t);
            },
                s = (0, a.forwardRef)(function (e, i) {
                    return a.createElement(
                        o.Z,
                        Object.assign({ ref: i }, e, { renderPath: f })
                    );
                });
            (s.displayName = "VideoCamera"), (i.Z = s);
        },
        6638: function (e) {
            e.exports = JSON.parse(
                '{"categories":[{"id":"people","emojis":["grinning","smiley","smile","grin","laughing","sweat_smile","rolling_on_the_floor_laughing","joy","slightly_smiling_face","upside_down_face","melting_face","wink","blush","innocent","smiling_face_with_3_hearts","heart_eyes","star-struck","kissing_heart","kissing","relaxed","kissing_closed_eyes","kissing_smiling_eyes","smiling_face_with_tear","yum","stuck_out_tongue","stuck_out_tongue_winking_eye","zany_face","stuck_out_tongue_closed_eyes","money_mouth_face","hugging_face","face_with_hand_over_mouth","face_with_open_eyes_and_hand_over_mouth","face_with_peeking_eye","shushing_face","thinking_face","saluting_face","zipper_mouth_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","dotted_line_face","face_in_clouds","smirk","unamused","face_with_rolling_eyes","grimacing","face_exhaling","lying_face","relieved","pensive","sleepy","drooling_face","sleeping","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","hot_face","cold_face","woozy_face","dizzy_face","face_with_spiral_eyes","exploding_head","face_with_cowboy_hat","partying_face","disguised_face","sunglasses","nerd_face","face_with_monocle","confused","face_with_diagonal_mouth","worried","slightly_frowning_face","white_frowning_face","open_mouth","hushed","astonished","flushed","pleading_face","face_holding_back_tears","frowning","anguished","fearful","cold_sweat","disappointed_relieved","cry","sob","scream","confounded","persevere","disappointed","sweat","weary","tired_face","yawning_face","triumph","rage","angry","face_with_symbols_on_mouth","smiling_imp","imp","skull","skull_and_crossbones","hankey","clown_face","japanese_ogre","japanese_goblin","ghost","alien","space_invader","robot_face","wave","raised_back_of_hand","raised_hand_with_fingers_splayed","hand","spock-hand","rightwards_hand","leftwards_hand","palm_down_hand","palm_up_hand","ok_hand","pinched_fingers","pinching_hand","v","crossed_fingers","hand_with_index_finger_and_thumb_crossed","i_love_you_hand_sign","the_horns","call_me_hand","point_left","point_right","point_up_2","middle_finger","point_down","point_up","index_pointing_at_the_viewer","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","clap","raised_hands","heart_hands","open_hands","palms_up_together","handshake","pray","writing_hand","nail_care","selfie","muscle","mechanical_arm","mechanical_leg","leg","foot","ear","ear_with_hearing_aid","nose","brain","anatomical_heart","lungs","tooth","bone","eyes","eye","tongue","lips","biting_lip","baby","child","boy","girl","adult","person_with_blond_hair","man","bearded_person","man_with_beard","woman_with_beard","red_haired_man","curly_haired_man","white_haired_man","bald_man","woman","red_haired_woman","red_haired_person","curly_haired_woman","curly_haired_person","white_haired_woman","white_haired_person","bald_woman","bald_person","blond-haired-woman","blond-haired-man","older_adult","older_man","older_woman","person_frowning","man-frowning","woman-frowning","person_with_pouting_face","man-pouting","woman-pouting","no_good","man-gesturing-no","woman-gesturing-no","ok_woman","man-gesturing-ok","woman-gesturing-ok","information_desk_person","man-tipping-hand","woman-tipping-hand","raising_hand","man-raising-hand","woman-raising-hand","deaf_person","deaf_man","deaf_woman","bow","man-bowing","woman-bowing","face_palm","man-facepalming","woman-facepalming","shrug","man-shrugging","woman-shrugging","health_worker","male-doctor","female-doctor","student","male-student","female-student","teacher","male-teacher","female-teacher","judge","male-judge","female-judge","farmer","male-farmer","female-farmer","cook","male-cook","female-cook","mechanic","male-mechanic","female-mechanic","factory_worker","male-factory-worker","female-factory-worker","office_worker","male-office-worker","female-office-worker","scientist","male-scientist","female-scientist","technologist","male-technologist","female-technologist","singer","male-singer","female-singer","artist","male-artist","female-artist","pilot","male-pilot","female-pilot","astronaut","male-astronaut","female-astronaut","firefighter","male-firefighter","female-firefighter","cop","male-police-officer","female-police-officer","sleuth_or_spy","male-detective","female-detective","guardsman","male-guard","female-guard","ninja","construction_worker","male-construction-worker","female-construction-worker","person_with_crown","prince","princess","man_with_turban","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","person_in_tuxedo","man_in_tuxedo","woman_in_tuxedo","bride_with_veil","man_with_veil","woman_with_veil","pregnant_woman","pregnant_man","pregnant_person","breast-feeding","woman_feeding_baby","man_feeding_baby","person_feeding_baby","angel","santa","mrs_claus","mx_claus","superhero","male_superhero","female_superhero","supervillain","male_supervillain","female_supervillain","mage","male_mage","female_mage","fairy","male_fairy","female_fairy","vampire","male_vampire","female_vampire","merperson","merman","mermaid","elf","male_elf","female_elf","genie","male_genie","female_genie","zombie","male_zombie","female_zombie","troll","massage","man-getting-massage","woman-getting-massage","haircut","man-getting-haircut","woman-getting-haircut","walking","man-walking","woman-walking","standing_person","man_standing","woman_standing","kneeling_person","man_kneeling","woman_kneeling","person_with_probing_cane","man_with_probing_cane","woman_with_probing_cane","person_in_motorized_wheelchair","man_in_motorized_wheelchair","woman_in_motorized_wheelchair","person_in_manual_wheelchair","man_in_manual_wheelchair","woman_in_manual_wheelchair","runner","man-running","woman-running","dancer","man_dancing","man_in_business_suit_levitating","dancers","men-with-bunny-ears-partying","women-with-bunny-ears-partying","person_in_steamy_room","man_in_steamy_room","woman_in_steamy_room","person_climbing","man_climbing","woman_climbing","fencer","horse_racing","skier","snowboarder","golfer","man-golfing","woman-golfing","surfer","man-surfing","woman-surfing","rowboat","man-rowing-boat","woman-rowing-boat","swimmer","man-swimming","woman-swimming","person_with_ball","man-bouncing-ball","woman-bouncing-ball","weight_lifter","man-lifting-weights","woman-lifting-weights","bicyclist","man-biking","woman-biking","mountain_bicyclist","man-mountain-biking","woman-mountain-biking","person_doing_cartwheel","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","water_polo","man-playing-water-polo","woman-playing-water-polo","handball","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","person_in_lotus_position","man_in_lotus_position","woman_in_lotus_position","bath","sleeping_accommodation","people_holding_hands","two_women_holding_hands","man_and_woman_holding_hands","two_men_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","people_hugging","footprints","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","kiss","love_letter","cupid","gift_heart","sparkling_heart","heartpulse","heartbeat","revolving_hearts","two_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","broken_heart","heart_on_fire","mending_heart","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","brown_heart","black_heart","white_heart","100","anger","boom","dizzy","sweat_drops","dash","hole","bomb","speech_balloon","eye-in-speech-bubble","left_speech_bubble","right_anger_bubble","thought_balloon","zzz"]},{"id":"nature","emojis":["monkey_face","monkey","gorilla","orangutan","dog","dog2","guide_dog","service_dog","poodle","wolf","fox_face","raccoon","cat","cat2","black_cat","lion_face","tiger","tiger2","leopard","horse","racehorse","unicorn_face","zebra_face","deer","bison","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","llama","giraffe_face","elephant","mammoth","rhinoceros","hippopotamus","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","beaver","hedgehog","bat","bear","polar_bear","koala","panda_face","sloth","otter","skunk","kangaroo","badger","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","swan","owl","dodo","feather","flamingo","peacock","parrot","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","seal","fish","tropical_fish","blowfish","shark","octopus","shell","coral","snail","butterfly","bug","ant","bee","beetle","ladybug","cricket","cockroach","spider","spider_web","scorpion","mosquito","fly","worm","microbe","bouquet","cherry_blossom","white_flower","lotus","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","seedling","potted_plant","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves","empty_nest","nest_with_eggs"]},{"id":"foods","emojis":["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","mango","apple","green_apple","pear","peach","cherries","strawberry","blueberries","kiwifruit","tomato","olive","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","bell_pepper","cucumber","leafy_green","broccoli","garlic","onion","mushroom","peanuts","beans","chestnut","bread","croissant","baguette_bread","flatbread","pretzel","bagel","pancakes","waffle","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","tamale","stuffed_flatbread","falafel","egg","fried_egg","shallow_pan_of_food","stew","fondue","bowl_with_spoon","green_salad","popcorn","butter","salt","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","moon_cake","dango","dumpling","fortune_cookie","takeout_box","crab","lobster","shrimp","squid","oyster","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","cupcake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","teapot","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","pouring_liquid","cup_with_straw","bubble_tea","beverage_box","mate_drink","ice_cube","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","jar","amphora"]},{"id":"activity","emojis":["jack_o_lantern","christmas_tree","fireworks","sparkler","firecracker","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","red_envelope","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","softball","basketball","volleyball","football","rugby_football","tennis","flying_disc","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","lacrosse","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","golf","ice_skate","fishing_pole_and_fish","diving_mask","running_shirt_with_sash","ski","sled","curling_stone","dart","yo-yo","kite","8ball","crystal_ball","magic_wand","nazar_amulet","hamsa","video_game","joystick","slot_machine","game_die","jigsaw","teddy_bear","pinata","mirror_ball","nesting_dolls","spades","hearts","diamonds","clubs","chess_pawn","black_joker","mahjong","flower_playing_cards","performing_arts","frame_with_picture","art","thread","sewing_needle","yarn","knot"]},{"id":"places","emojis":["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","compass","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","bricks","rock","wood","hut","house_buildings","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","hindu_temple","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","cityscape","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","carousel_horse","playground_slide","ferris_wheel","roller_coaster","barber","circus_tent","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","pickup_truck","truck","articulated_lorry","tractor","racing_car","racing_motorcycle","motor_scooter","manual_wheelchair","motorized_wheelchair","auto_rickshaw","bike","scooter","skateboard","roller_skate","busstop","motorway","railway_track","oil_drum","fuelpump","wheel","rotating_light","traffic_light","vertical_traffic_light","octagonal_sign","construction","anchor","ring_buoy","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","parachute","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","luggage","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","ringed_planet","star","star2","stars","milky_way","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{"id":"objects","emojis":["eyeglasses","dark_sunglasses","goggles","lab_coat","safety_vest","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","sari","one-piece_swimsuit","briefs","shorts","bikini","womans_clothes","purse","handbag","pouch","shopping_bags","school_satchel","thong_sandal","mans_shoe","athletic_shoe","hiking_boot","womans_flat_shoe","high_heel","sandal","ballet_shoes","boot","crown","womans_hat","tophat","mortar_board","billed_cap","military_helmet","helmet_with_white_cross","prayer_beads","lipstick","ring","gem","mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","accordion","guitar","musical_keyboard","trumpet","violin","banjo","drum_with_drumsticks","long_drum","iphone","calling","phone","telephone_receiver","pager","fax","battery","low_battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","abacus","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","candle","bulb","flashlight","izakaya_lantern","diya_lamp","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","coin","yen","dollar","euro","pound","money_with_wings","credit_card","receipt","chart","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","axe","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","gun","boomerang","bow_and_arrow","shield","carpentry_saw","wrench","screwdriver","nut_and_bolt","gear","compression","scales","probing_cane","link","chains","hook","toolbox","magnet","ladder","alembic","test_tube","petri_dish","dna","microscope","telescope","satellite_antenna","syringe","drop_of_blood","pill","adhesive_bandage","crutch","stethoscope","x-ray","door","elevator","mirror","window","bed","couch_and_lamp","chair","toilet","plunger","shower","bathtub","mouse_trap","razor","lotion_bottle","safety_pin","broom","basket","roll_of_paper","bucket","soap","bubbles","toothbrush","sponge","fire_extinguisher","shopping_trolley","smoking","coffin","headstone","funeral_urn","moyai","placard","identification_card"]},{"id":"symbols","emojis":["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","vibration_mode","mobile_phone_off","female_sign","male_sign","transgender_symbol","heavy_multiplication_x","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_equals_sign","infinity","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","currency_exchange","heavy_dollar_sign","medical_symbol","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","x","negative_squared_cross_mark","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","copyright","registered","tm","hash","keycap_star","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","red_circle","large_orange_circle","large_yellow_circle","large_green_circle","large_blue_circle","large_purple_circle","large_brown_circle","black_circle","white_circle","large_red_square","large_orange_square","large_yellow_square","large_green_square","large_blue_square","large_purple_square","large_brown_square","black_large_square","white_large_square","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_small_square","white_small_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","white_square_button","black_square_button"]},{"id":"flags","emojis":["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-un","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","pirate_flag","rainbow-flag","ru","transgender_flag","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}],"emojis":{"100":{"id":"100","name":"Hundred Points","keywords":["100","score","perfect","numbers","century","exam","quiz","test","pass"],"skins":[{"unified":"1f4af","native":"\ud83d\udcaf"}],"version":1},"1234":{"id":"1234","name":"Input Numbers","keywords":["1234","blue","square"],"skins":[{"unified":"1f522","native":"\ud83d\udd22"}],"version":1},"grinning":{"id":"grinning","name":"Grinning Face","emoticons":[":D"],"keywords":["smile","happy","joy",":D","grin"],"skins":[{"unified":"1f600","native":"\ud83d\ude00"}],"version":1},"smiley":{"id":"smiley","name":"Grinning Face with Big Eyes","emoticons":[":)","=)","=-)"],"keywords":["smiley","happy","joy","haha",":D",":)","smile","funny"],"skins":[{"unified":"1f603","native":"\ud83d\ude03"}],"version":1},"smile":{"id":"smile","name":"Grinning Face with Smiling Eyes","emoticons":[":)","C:","c:",":D",":-D"],"keywords":["smile","happy","joy","funny","haha","laugh","like",":D",":)"],"skins":[{"unified":"1f604","native":"\ud83d\ude04"}],"version":1},"grin":{"id":"grin","name":"Beaming Face with Smiling Eyes","keywords":["grin","happy","smile","joy","kawaii"],"skins":[{"unified":"1f601","native":"\ud83d\ude01"}],"version":1},"laughing":{"id":"laughing","name":"Grinning Squinting Face","emoticons":[":>",":->"],"keywords":["laughing","satisfied","happy","joy","lol","haha","glad","XD","laugh"],"skins":[{"unified":"1f606","native":"\ud83d\ude06"}],"version":1},"sweat_smile":{"id":"sweat_smile","name":"Grinning Face with Sweat","keywords":["smile","hot","happy","laugh","relief"],"skins":[{"unified":"1f605","native":"\ud83d\ude05"}],"version":1},"rolling_on_the_floor_laughing":{"id":"rolling_on_the_floor_laughing","name":"Rolling on the Floor Laughing","keywords":["face","lol","haha","rofl"],"skins":[{"unified":"1f923","native":"\ud83e\udd23"}],"version":3},"joy":{"id":"joy","name":"Face with Tears of Joy","keywords":["cry","weep","happy","happytears","haha"],"skins":[{"unified":"1f602","native":"\ud83d\ude02"}],"version":1},"slightly_smiling_face":{"id":"slightly_smiling_face","name":"Slightly Smiling Face","emoticons":[":)","(:",":-)"],"keywords":["smile"],"skins":[{"unified":"1f642","native":"\ud83d\ude42"}],"version":1},"upside_down_face":{"id":"upside_down_face","name":"Upside-Down Face","keywords":["upside","down","flipped","silly","smile"],"skins":[{"unified":"1f643","native":"\ud83d\ude43"}],"version":1},"melting_face":{"id":"melting_face","name":"Melting Face","keywords":["hot","heat"],"skins":[{"unified":"1fae0","native":"\ud83e\udee0"}],"version":14},"wink":{"id":"wink","name":"Winking Face","emoticons":[";)",";-)"],"keywords":["wink","happy","mischievous","secret",";)","smile","eye"],"skins":[{"unified":"1f609","native":"\ud83d\ude09"}],"version":1},"blush":{"id":"blush","name":"Smiling Face with Smiling Eyes","emoticons":[":)"],"keywords":["blush","smile","happy","flushed","crush","embarrassed","shy","joy"],"skins":[{"unified":"1f60a","native":"\ud83d\ude0a"}],"version":1},"innocent":{"id":"innocent","name":"Smiling Face with Halo","keywords":["innocent","angel","heaven"],"skins":[{"unified":"1f607","native":"\ud83d\ude07"}],"version":1},"smiling_face_with_3_hearts":{"id":"smiling_face_with_3_hearts","name":"Smiling Face with Hearts","keywords":["3","love","like","affection","valentines","infatuation","crush","adore"],"skins":[{"unified":"1f970","native":"\ud83e\udd70"}],"version":11},"heart_eyes":{"id":"heart_eyes","name":"Smiling Face with Heart-Eyes","keywords":["heart","eyes","love","like","affection","valentines","infatuation","crush"],"skins":[{"unified":"1f60d","native":"\ud83d\ude0d"}],"version":1},"star-struck":{"id":"star-struck","name":"Star-Struck","keywords":["star","struck","grinning","face","with","eyes","smile","starry"],"skins":[{"unified":"1f929","native":"\ud83e\udd29"}],"version":5},"kissing_heart":{"id":"kissing_heart","name":"Face Blowing a Kiss","emoticons":[":*",":-*"],"keywords":["kissing","heart","love","like","affection","valentines","infatuation"],"skins":[{"unified":"1f618","native":"\ud83d\ude18"}],"version":1},"kissing":{"id":"kissing","name":"Kissing Face","keywords":["love","like","3","valentines","infatuation","kiss"],"skins":[{"unified":"1f617","native":"\ud83d\ude17"}],"version":1},"relaxed":{"id":"relaxed","name":"Smiling Face","keywords":["relaxed","blush","massage","happiness"],"skins":[{"unified":"263a-fe0f","native":"\u263a\ufe0f"}],"version":1},"kissing_closed_eyes":{"id":"kissing_closed_eyes","name":"Kissing Face with Closed Eyes","keywords":["love","like","affection","valentines","infatuation","kiss"],"skins":[{"unified":"1f61a","native":"\ud83d\ude1a"}],"version":1},"kissing_smiling_eyes":{"id":"kissing_smiling_eyes","name":"Kissing Face with Smiling Eyes","keywords":["affection","valentines","infatuation","kiss"],"skins":[{"unified":"1f619","native":"\ud83d\ude19"}],"version":1},"smiling_face_with_tear":{"id":"smiling_face_with_tear","name":"Smiling Face with Tear","keywords":["sad","cry","pretend"],"skins":[{"unified":"1f972","native":"\ud83e\udd72"}],"version":13},"yum":{"id":"yum","name":"Face Savoring Food","keywords":["yum","happy","joy","tongue","smile","silly","yummy","nom","delicious","savouring"],"skins":[{"unified":"1f60b","native":"\ud83d\ude0b"}],"version":1},"stuck_out_tongue":{"id":"stuck_out_tongue","name":"Face with Tongue","emoticons":[":p",":-p",":P",":-P",":b",":-b"],"keywords":["stuck","out","prank","childish","playful","mischievous","smile"],"skins":[{"unified":"1f61b","native":"\ud83d\ude1b"}],"version":1},"stuck_out_tongue_winking_eye":{"id":"stuck_out_tongue_winking_eye","name":"Winking Face with Tongue","emoticons":[";p",";-p",";b",";-b",";P",";-P"],"keywords":["stuck","out","eye","prank","childish","playful","mischievous","smile","wink"],"skins":[{"unified":"1f61c","native":"\ud83d\ude1c"}],"version":1},"zany_face":{"id":"zany_face","name":"Zany Face","keywords":["grinning","with","one","large","and","small","eye","goofy","crazy"],"skins":[{"unified":"1f92a","native":"\ud83e\udd2a"}],"version":5},"stuck_out_tongue_closed_eyes":{"id":"stuck_out_tongue_closed_eyes","name":"Squinting Face with Tongue","keywords":["stuck","out","closed","eyes","prank","playful","mischievous","smile"],"skins":[{"unified":"1f61d","native":"\ud83d\ude1d"}],"version":1},"money_mouth_face":{"id":"money_mouth_face","name":"Money-Mouth Face","keywords":["money","mouth","rich","dollar"],"skins":[{"unified":"1f911","native":"\ud83e\udd11"}],"version":1},"hugging_face":{"id":"hugging_face","name":"Hugging Face","keywords":["smile","hug"],"skins":[{"unified":"1f917","native":"\ud83e\udd17"}],"version":1},"face_with_hand_over_mouth":{"id":"face_with_hand_over_mouth","name":"Face with Hand over Mouth","keywords":["smiling","eyes","and","covering","whoops","shock","surprise"],"skins":[{"unified":"1f92d","native":"\ud83e\udd2d"}],"version":5},"face_with_open_eyes_and_hand_over_mouth":{"id":"face_with_open_eyes_and_hand_over_mouth","name":"Face with Open Eyes and Hand over Mouth","keywords":["silence","secret","shock","surprise"],"skins":[{"unified":"1fae2","native":"\ud83e\udee2"}],"version":14},"face_with_peeking_eye":{"id":"face_with_peeking_eye","name":"Face with Peeking Eye","keywords":["scared","frightening","embarrassing"],"skins":[{"unified":"1fae3","native":"\ud83e\udee3"}],"version":14},"shushing_face":{"id":"shushing_face","name":"Shushing Face","keywords":["with","finger","covering","closed","lips","quiet","shhh"],"skins":[{"unified":"1f92b","native":"\ud83e\udd2b"}],"version":5},"thinking_face":{"id":"thinking_face","name":"Thinking Face","keywords":["hmmm","think","consider"],"skins":[{"unified":"1f914","native":"\ud83e\udd14"}],"version":1},"saluting_face":{"id":"saluting_face","name":"Saluting Face","keywords":["respect","salute"],"skins":[{"unified":"1fae1","native":"\ud83e\udee1"}],"version":14},"zipper_mouth_face":{"id":"zipper_mouth_face","name":"Zipper-Mouth Face","keywords":["zipper","mouth","sealed","secret"],"skins":[{"unified":"1f910","native":"\ud83e\udd10"}],"version":1},"face_with_raised_eyebrow":{"id":"face_with_raised_eyebrow","name":"Face with Raised Eyebrow","keywords":["one","distrust","scepticism","disapproval","disbelief","surprise"],"skins":[{"unified":"1f928","native":"\ud83e\udd28"}],"version":5},"neutral_face":{"id":"neutral_face","name":"Neutral Face","emoticons":[":|",":-|"],"keywords":["indifference","meh",":",""],"skins":[{"unified":"1f610","native":"\ud83d\ude10"}],"version":1},"expressionless":{"id":"expressionless","name":"Expressionless Face","emoticons":["-_-"],"keywords":["indifferent","-","","meh","deadpan"],"skins":[{"unified":"1f611","native":"\ud83d\ude11"}],"version":1},"no_mouth":{"id":"no_mouth","name":"Face Without Mouth","keywords":["no","hellokitty"],"skins":[{"unified":"1f636","native":"\ud83d\ude36"}],"version":1},"dotted_line_face":{"id":"dotted_line_face","name":"Dotted Line Face","keywords":["invisible","lonely","isolation","depression"],"skins":[{"unified":"1fae5","native":"\ud83e\udee5"}],"version":14},"face_in_clouds":{"id":"face_in_clouds","name":"Face in Clouds","keywords":["shower","steam","dream"],"skins":[{"unified":"1f636-200d-1f32b-fe0f","native":"\ud83d\ude36\u200d\ud83c\udf2b\ufe0f"}],"version":13.1},"smirk":{"id":"smirk","name":"Smirking Face","keywords":["smirk","smile","mean","prank","smug","sarcasm"],"skins":[{"unified":"1f60f","native":"\ud83d\ude0f"}],"version":1},"unamused":{"id":"unamused","name":"Unamused Face","emoticons":[":("],"keywords":["indifference","bored","straight","serious","sarcasm","unimpressed","skeptical","dubious","side","eye"],"skins":[{"unified":"1f612","native":"\ud83d\ude12"}],"version":1},"face_with_rolling_eyes":{"id":"face_with_rolling_eyes","name":"Face with Rolling Eyes","keywords":["eyeroll","frustrated"],"skins":[{"unified":"1f644","native":"\ud83d\ude44"}],"version":1},"grimacing":{"id":"grimacing","name":"Grimacing Face","keywords":["grimace","teeth"],"skins":[{"unified":"1f62c","native":"\ud83d\ude2c"}],"version":1},"face_exhaling":{"id":"face_exhaling","name":"Face Exhaling","keywords":["relieve","relief","tired","sigh"],"skins":[{"unified":"1f62e-200d-1f4a8","native":"\ud83d\ude2e\u200d\ud83d\udca8"}],"version":13.1},"lying_face":{"id":"lying_face","name":"Lying Face","keywords":["lie","pinocchio"],"skins":[{"unified":"1f925","native":"\ud83e\udd25"}],"version":3},"relieved":{"id":"relieved","name":"Relieved Face","keywords":["relaxed","phew","massage","happiness"],"skins":[{"unified":"1f60c","native":"\ud83d\ude0c"}],"version":1},"pensive":{"id":"pensive","name":"Pensive Face","keywords":["sad","depressed","upset"],"skins":[{"unified":"1f614","native":"\ud83d\ude14"}],"version":1},"sleepy":{"id":"sleepy","name":"Sleepy Face","keywords":["tired","rest","nap"],"skins":[{"unified":"1f62a","native":"\ud83d\ude2a"}],"version":1},"drooling_face":{"id":"drooling_face","name":"Drooling Face","keywords":[],"skins":[{"unified":"1f924","native":"\ud83e\udd24"}],"version":3},"sleeping":{"id":"sleeping","name":"Sleeping Face","keywords":["tired","sleepy","night","zzz"],"skins":[{"unified":"1f634","native":"\ud83d\ude34"}],"version":1},"mask":{"id":"mask","name":"Face with Medical Mask","keywords":["sick","ill","disease"],"skins":[{"unified":"1f637","native":"\ud83d\ude37"}],"version":1},"face_with_thermometer":{"id":"face_with_thermometer","name":"Face with Thermometer","keywords":["sick","temperature","cold","fever"],"skins":[{"unified":"1f912","native":"\ud83e\udd12"}],"version":1},"face_with_head_bandage":{"id":"face_with_head_bandage","name":"Face with Head-Bandage","keywords":["head","bandage","injured","clumsy","hurt"],"skins":[{"unified":"1f915","native":"\ud83e\udd15"}],"version":1},"nauseated_face":{"id":"nauseated_face","name":"Nauseated Face","keywords":["vomit","gross","green","sick","throw","up","ill"],"skins":[{"unified":"1f922","native":"\ud83e\udd22"}],"version":3},"face_vomiting":{"id":"face_vomiting","name":"Face Vomiting","keywords":["with","open","mouth","sick"],"skins":[{"unified":"1f92e","native":"\ud83e\udd2e"}],"version":5},"sneezing_face":{"id":"sneezing_face","name":"Sneezing Face","keywords":["gesundheit","sneeze","sick","allergy"],"skins":[{"unified":"1f927","native":"\ud83e\udd27"}],"version":3},"hot_face":{"id":"hot_face","name":"Hot Face","keywords":["feverish","heat","red","sweating"],"skins":[{"unified":"1f975","native":"\ud83e\udd75"}],"version":11},"cold_face":{"id":"cold_face","name":"Cold Face","keywords":["blue","freezing","frozen","frostbite","icicles"],"skins":[{"unified":"1f976","native":"\ud83e\udd76"}],"version":11},"woozy_face":{"id":"woozy_face","name":"Woozy Face","keywords":["dizzy","intoxicated","tipsy","wavy"],"skins":[{"unified":"1f974","native":"\ud83e\udd74"}],"version":11},"dizzy_face":{"id":"dizzy_face","name":"Dizzy Face","keywords":["spent","unconscious","xox"],"skins":[{"unified":"1f635","native":"\ud83d\ude35"}],"version":1},"face_with_spiral_eyes":{"id":"face_with_spiral_eyes","name":"Face with Spiral Eyes","keywords":["sick","ill","confused","nauseous","nausea"],"skins":[{"unified":"1f635-200d-1f4ab","native":"\ud83d\ude35\u200d\ud83d\udcab"}],"version":13.1},"exploding_head":{"id":"exploding_head","name":"Exploding Head","keywords":["shocked","face","with","mind","blown"],"skins":[{"unified":"1f92f","native":"\ud83e\udd2f"}],"version":5},"face_with_cowboy_hat":{"id":"face_with_cowboy_hat","name":"Cowboy Hat Face","keywords":["with","cowgirl"],"skins":[{"unified":"1f920","native":"\ud83e\udd20"}],"version":3},"partying_face":{"id":"partying_face","name":"Partying Face","keywords":["celebration","woohoo"],"skins":[{"unified":"1f973","native":"\ud83e\udd73"}],"version":11},"disguised_face":{"id":"disguised_face","name":"Disguised Face","keywords":["pretent","brows","glasses","moustache"],"skins":[{"unified":"1f978","native":"\ud83e\udd78"}],"version":13},"sunglasses":{"id":"sunglasses","name":"Smiling Face with Sunglasses","emoticons":["8)"],"keywords":["cool","smile","summer","beach","sunglass"],"skins":[{"unified":"1f60e","native":"\ud83d\ude0e"}],"version":1},"nerd_face":{"id":"nerd_face","name":"Nerd Face","keywords":["nerdy","geek","dork"],"skins":[{"unified":"1f913","native":"\ud83e\udd13"}],"version":1},"face_with_monocle":{"id":"face_with_monocle","name":"Face with Monocle","keywords":["stuffy","wealthy"],"skins":[{"unified":"1f9d0","native":"\ud83e\uddd0"}],"version":5},"confused":{"id":"confused","name":"Confused Face","emoticons":[":\\\\",":-\\\\",":/",":-/"],"keywords":["indifference","huh","weird","hmmm",":/"],"skins":[{"unified":"1f615","native":"\ud83d\ude15"}],"version":1},"face_with_diagonal_mouth":{"id":"face_with_diagonal_mouth","name":"Face with Diagonal Mouth","keywords":["skeptic","confuse","frustrated","indifferent"],"skins":[{"unified":"1fae4","native":"\ud83e\udee4"}],"version":14},"worried":{"id":"worried","name":"Worried Face","keywords":["concern","nervous",":("],"skins":[{"unified":"1f61f","native":"\ud83d\ude1f"}],"version":1},"slightly_frowning_face":{"id":"slightly_frowning_face","name":"Slightly Frowning Face","keywords":["disappointed","sad","upset"],"skins":[{"unified":"1f641","native":"\ud83d\ude41"}],"version":1},"white_frowning_face":{"id":"white_frowning_face","name":"Frowning Face","keywords":["white","sad","upset","frown"],"skins":[{"unified":"2639-fe0f","native":"\u2639\ufe0f"}],"version":1},"open_mouth":{"id":"open_mouth","name":"Face with Open Mouth","emoticons":[":o",":-o",":O",":-O"],"keywords":["surprise","impressed","wow","whoa",":O"],"skins":[{"unified":"1f62e","native":"\ud83d\ude2e"}],"version":1},"hushed":{"id":"hushed","name":"Hushed Face","keywords":["woo","shh"],"skins":[{"unified":"1f62f","native":"\ud83d\ude2f"}],"version":1},"astonished":{"id":"astonished","name":"Astonished Face","keywords":["xox","surprised","poisoned"],"skins":[{"unified":"1f632","native":"\ud83d\ude32"}],"version":1},"flushed":{"id":"flushed","name":"Flushed Face","keywords":["blush","shy","flattered"],"skins":[{"unified":"1f633","native":"\ud83d\ude33"}],"version":1},"pleading_face":{"id":"pleading_face","name":"Pleading Face","keywords":["begging","mercy"],"skins":[{"unified":"1f97a","native":"\ud83e\udd7a"}],"version":11},"face_holding_back_tears":{"id":"face_holding_back_tears","name":"Face Holding Back Tears","keywords":["touched","gratitude"],"skins":[{"unified":"1f979","native":"\ud83e\udd79"}],"version":14},"frowning":{"id":"frowning","name":"Frowning Face with Open Mouth","keywords":["aw","what"],"skins":[{"unified":"1f626","native":"\ud83d\ude26"}],"version":1},"anguished":{"id":"anguished","name":"Anguished Face","emoticons":["D:"],"keywords":["stunned","nervous"],"skins":[{"unified":"1f627","native":"\ud83d\ude27"}],"version":1},"fearful":{"id":"fearful","name":"Fearful Face","keywords":["scared","terrified","nervous","oops","huh"],"skins":[{"unified":"1f628","native":"\ud83d\ude28"}],"version":1},"cold_sweat":{"id":"cold_sweat","name":"Anxious Face with Sweat","keywords":["cold","nervous"],"skins":[{"unified":"1f630","native":"\ud83d\ude30"}],"version":1},"disappointed_relieved":{"id":"disappointed_relieved","name":"Sad but Relieved Face","keywords":["disappointed","phew","sweat","nervous"],"skins":[{"unified":"1f625","native":"\ud83d\ude25"}],"version":1},"cry":{"id":"cry","name":"Crying Face","emoticons":[":\'("],"keywords":["cry","tears","sad","depressed","upset",":\'("],"skins":[{"unified":"1f622","native":"\ud83d\ude22"}],"version":1},"sob":{"id":"sob","name":"Loudly Crying Face","emoticons":[":\'("],"keywords":["sob","cry","tears","sad","upset","depressed"],"skins":[{"unified":"1f62d","native":"\ud83d\ude2d"}],"version":1},"scream":{"id":"scream","name":"Face Screaming in Fear","keywords":["scream","munch","scared","omg"],"skins":[{"unified":"1f631","native":"\ud83d\ude31"}],"version":1},"confounded":{"id":"confounded","name":"Confounded Face","keywords":["confused","sick","unwell","oops",":S"],"skins":[{"unified":"1f616","native":"\ud83d\ude16"}],"version":1},"persevere":{"id":"persevere","name":"Persevering Face","keywords":["persevere","sick","no","upset","oops"],"skins":[{"unified":"1f623","native":"\ud83d\ude23"}],"version":1},"disappointed":{"id":"disappointed","name":"Disappointed Face","emoticons":["):",":(",":-("],"keywords":["sad","upset","depressed",":("],"skins":[{"unified":"1f61e","native":"\ud83d\ude1e"}],"version":1},"sweat":{"id":"sweat","name":"Face with Cold Sweat","keywords":["downcast","hot","sad","tired","exercise"],"skins":[{"unified":"1f613","native":"\ud83d\ude13"}],"version":1},"weary":{"id":"weary","name":"Weary Face","keywords":["tired","sleepy","sad","frustrated","upset"],"skins":[{"unified":"1f629","native":"\ud83d\ude29"}],"version":1},"tired_face":{"id":"tired_face","name":"Tired Face","keywords":["sick","whine","upset","frustrated"],"skins":[{"unified":"1f62b","native":"\ud83d\ude2b"}],"version":1},"yawning_face":{"id":"yawning_face","name":"Yawning Face","keywords":["tired","sleepy"],"skins":[{"unified":"1f971","native":"\ud83e\udd71"}],"version":12},"triumph":{"id":"triumph","name":"Face with Look of Triumph","keywords":["steam","from","nose","gas","phew","proud","pride"],"skins":[{"unified":"1f624","native":"\ud83d\ude24"}],"version":1},"rage":{"id":"rage","name":"Pouting Face","keywords":["rage","angry","mad","hate","despise"],"skins":[{"unified":"1f621","native":"\ud83d\ude21"}],"version":1},"angry":{"id":"angry","name":"Angry Face","emoticons":[">:(",">:-("],"keywords":["mad","annoyed","frustrated"],"skins":[{"unified":"1f620","native":"\ud83d\ude20"}],"version":1},"face_with_symbols_on_mouth":{"id":"face_with_symbols_on_mouth","name":"Face with Symbols on Mouth","keywords":["serious","covering","swearing","cursing","cussing","profanity","expletive"],"skins":[{"unified":"1f92c","native":"\ud83e\udd2c"}],"version":5},"smiling_imp":{"id":"smiling_imp","name":"Smiling Face with Horns","keywords":["imp","devil"],"skins":[{"unified":"1f608","native":"\ud83d\ude08"}],"version":1},"imp":{"id":"imp","name":"Imp","keywords":["angry","face","with","horns","devil"],"skins":[{"unified":"1f47f","native":"\ud83d\udc7f"}],"version":1},"skull":{"id":"skull","name":"Skull","keywords":["dead","skeleton","creepy","death"],"skins":[{"unified":"1f480","native":"\ud83d\udc80"}],"version":1},"skull_and_crossbones":{"id":"skull_and_crossbones","name":"Skull and Crossbones","keywords":["poison","danger","deadly","scary","death","pirate","evil"],"skins":[{"unified":"2620-fe0f","native":"\u2620\ufe0f"}],"version":1},"hankey":{"id":"hankey","name":"Pile of Poo","keywords":["hankey","poop","shit","shitface","fail","turd"],"skins":[{"unified":"1f4a9","native":"\ud83d\udca9"}],"version":1},"clown_face":{"id":"clown_face","name":"Clown Face","keywords":[],"skins":[{"unified":"1f921","native":"\ud83e\udd21"}],"version":3},"japanese_ogre":{"id":"japanese_ogre","name":"Ogre","keywords":["japanese","monster","red","mask","halloween","scary","creepy","devil","demon"],"skins":[{"unified":"1f479","native":"\ud83d\udc79"}],"version":1},"japanese_goblin":{"id":"japanese_goblin","name":"Goblin","keywords":["japanese","red","evil","mask","monster","scary","creepy"],"skins":[{"unified":"1f47a","native":"\ud83d\udc7a"}],"version":1},"ghost":{"id":"ghost","name":"Ghost","keywords":["halloween","spooky","scary"],"skins":[{"unified":"1f47b","native":"\ud83d\udc7b"}],"version":1},"alien":{"id":"alien","name":"Alien","keywords":["UFO","paul","weird","outer","space"],"skins":[{"unified":"1f47d","native":"\ud83d\udc7d"}],"version":1},"space_invader":{"id":"space_invader","name":"Alien Monster","keywords":["space","invader","game","arcade","play"],"skins":[{"unified":"1f47e","native":"\ud83d\udc7e"}],"version":1},"robot_face":{"id":"robot_face","name":"Robot","keywords":["face","computer","machine","bot"],"skins":[{"unified":"1f916","native":"\ud83e\udd16"}],"version":1},"smiley_cat":{"id":"smiley_cat","name":"Grinning Cat","keywords":["smiley","animal","cats","happy","smile"],"skins":[{"unified":"1f63a","native":"\ud83d\ude3a"}],"version":1},"smile_cat":{"id":"smile_cat","name":"Grinning Cat with Smiling Eyes","keywords":["smile","animal","cats"],"skins":[{"unified":"1f638","native":"\ud83d\ude38"}],"version":1},"joy_cat":{"id":"joy_cat","name":"Cat with Tears of Joy","keywords":["animal","cats","haha","happy"],"skins":[{"unified":"1f639","native":"\ud83d\ude39"}],"version":1},"heart_eyes_cat":{"id":"heart_eyes_cat","name":"Smiling Cat with Heart-Eyes","keywords":["heart","eyes","animal","love","like","affection","cats","valentines"],"skins":[{"unified":"1f63b","native":"\ud83d\ude3b"}],"version":1},"smirk_cat":{"id":"smirk_cat","name":"Cat with Wry Smile","keywords":["smirk","animal","cats"],"skins":[{"unified":"1f63c","native":"\ud83d\ude3c"}],"version":1},"kissing_cat":{"id":"kissing_cat","name":"Kissing Cat","keywords":["animal","cats","kiss"],"skins":[{"unified":"1f63d","native":"\ud83d\ude3d"}],"version":1},"scream_cat":{"id":"scream_cat","name":"Weary Cat","keywords":["scream","animal","cats","munch","scared"],"skins":[{"unified":"1f640","native":"\ud83d\ude40"}],"version":1},"crying_cat_face":{"id":"crying_cat_face","name":"Crying Cat","keywords":["face","animal","tears","weep","sad","cats","upset","cry"],"skins":[{"unified":"1f63f","native":"\ud83d\ude3f"}],"version":1},"pouting_cat":{"id":"pouting_cat","name":"Pouting Cat","keywords":["animal","cats"],"skins":[{"unified":"1f63e","native":"\ud83d\ude3e"}],"version":1},"see_no_evil":{"id":"see_no_evil","name":"See-No-Evil Monkey","keywords":["see","no","evil","animal","nature","haha"],"skins":[{"unified":"1f648","native":"\ud83d\ude48"}],"version":1},"hear_no_evil":{"id":"hear_no_evil","name":"Hear-No-Evil Monkey","keywords":["hear","no","evil","animal","nature"],"skins":[{"unified":"1f649","native":"\ud83d\ude49"}],"version":1},"speak_no_evil":{"id":"speak_no_evil","name":"Speak-No-Evil Monkey","keywords":["speak","no","evil","animal","nature","omg"],"skins":[{"unified":"1f64a","native":"\ud83d\ude4a"}],"version":1},"kiss":{"id":"kiss","name":"Kiss Mark","keywords":["face","lips","love","like","affection","valentines"],"skins":[{"unified":"1f48b","native":"\ud83d\udc8b"}],"version":1},"love_letter":{"id":"love_letter","name":"Love Letter","keywords":["email","like","affection","envelope","valentines"],"skins":[{"unified":"1f48c","native":"\ud83d\udc8c"}],"version":1},"cupid":{"id":"cupid","name":"Heart with Arrow","keywords":["cupid","love","like","affection","valentines"],"skins":[{"unified":"1f498","native":"\ud83d\udc98"}],"version":1},"gift_heart":{"id":"gift_heart","name":"Heart with Ribbon","keywords":["gift","love","valentines"],"skins":[{"unified":"1f49d","native":"\ud83d\udc9d"}],"version":1},"sparkling_heart":{"id":"sparkling_heart","name":"Sparkling Heart","keywords":["love","like","affection","valentines"],"skins":[{"unified":"1f496","native":"\ud83d\udc96"}],"version":1},"heartpulse":{"id":"heartpulse","name":"Growing Heart","keywords":["heartpulse","like","love","affection","valentines","pink"],"skins":[{"unified":"1f497","native":"\ud83d\udc97"}],"version":1},"heartbeat":{"id":"heartbeat","name":"Beating Heart","keywords":["heartbeat","love","like","affection","valentines","pink"],"skins":[{"unified":"1f493","native":"\ud83d\udc93"}],"version":1},"revolving_hearts":{"id":"revolving_hearts","name":"Revolving Hearts","keywords":["love","like","affection","valentines"],"skins":[{"unified":"1f49e","native":"\ud83d\udc9e"}],"version":1},"two_hearts":{"id":"two_hearts","name":"Two Hearts","keywords":["love","like","affection","valentines","heart"],"skins":[{"unified":"1f495","native":"\ud83d\udc95"}],"version":1},"heart_decoration":{"id":"heart_decoration","name":"Heart Decoration","keywords":["purple","square","love","like"],"skins":[{"unified":"1f49f","native":"\ud83d\udc9f"}],"version":1},"heavy_heart_exclamation_mark_ornament":{"id":"heavy_heart_exclamation_mark_ornament","name":"Heart Exclamation","keywords":["heavy","mark","ornament","decoration","love"],"skins":[{"unified":"2763-fe0f","native":"\u2763\ufe0f"}],"version":1},"broken_heart":{"id":"broken_heart","name":"Broken Heart","emoticons":["</3"],"keywords":["sad","sorry","break","heartbreak"],"skins":[{"unified":"1f494","native":"\ud83d\udc94"}],"version":1},"heart_on_fire":{"id":"heart_on_fire","name":"Heart on Fire","keywords":["passionate","enthusiastic"],"skins":[{"unified":"2764-fe0f-200d-1f525","native":"\u2764\ufe0f\u200d\ud83d\udd25"}],"version":13.1},"mending_heart":{"id":"mending_heart","name":"Mending Heart","keywords":["broken","bandage","wounded"],"skins":[{"unified":"2764-fe0f-200d-1fa79","native":"\u2764\ufe0f\u200d\ud83e\ude79"}],"version":13.1},"heart":{"id":"heart","name":"Red Heart","emoticons":["<3"],"keywords":["love","like","valentines"],"skins":[{"unified":"2764-fe0f","native":"\u2764\ufe0f"}],"version":1},"orange_heart":{"id":"orange_heart","name":"Orange Heart","keywords":["love","like","affection","valentines"],"skins":[{"unified":"1f9e1","native":"\ud83e\udde1"}],"version":5},"yellow_heart":{"id":"yellow_heart","name":"Yellow Heart","emoticons":["<3"],"keywords":["love","like","affection","valentines"],"skins":[{"unified":"1f49b","native":"\ud83d\udc9b"}],"version":1},"green_heart":{"id":"green_heart","name":"Green Heart","emoticons":["<3"],"keywords":["love","like","affection","valentines"],"skins":[{"unified":"1f49a","native":"\ud83d\udc9a"}],"version":1},"blue_heart":{"id":"blue_heart","name":"Blue Heart","emoticons":["<3"],"keywords":["love","like","affection","valentines"],"skins":[{"unified":"1f499","native":"\ud83d\udc99"}],"version":1},"purple_heart":{"id":"purple_heart","name":"Purple Heart","emoticons":["<3"],"keywords":["love","like","affection","valentines"],"skins":[{"unified":"1f49c","native":"\ud83d\udc9c"}],"version":1},"brown_heart":{"id":"brown_heart","name":"Brown Heart","keywords":["coffee"],"skins":[{"unified":"1f90e","native":"\ud83e\udd0e"}],"version":12},"black_heart":{"id":"black_heart","name":"Black Heart","keywords":["evil"],"skins":[{"unified":"1f5a4","native":"\ud83d\udda4"}],"version":3},"white_heart":{"id":"white_heart","name":"White Heart","keywords":["pure"],"skins":[{"unified":"1f90d","native":"\ud83e\udd0d"}],"version":12},"anger":{"id":"anger","name":"Anger Symbol","keywords":["angry","mad"],"skins":[{"unified":"1f4a2","native":"\ud83d\udca2"}],"version":1},"boom":{"id":"boom","name":"Collision","keywords":["boom","bomb","explode","explosion","blown"],"skins":[{"unified":"1f4a5","native":"\ud83d\udca5"}],"version":1},"dizzy":{"id":"dizzy","name":"Dizzy","keywords":["star","sparkle","shoot","magic"],"skins":[{"unified":"1f4ab","native":"\ud83d\udcab"}],"version":1},"sweat_drops":{"id":"sweat_drops","name":"Sweat Droplets","keywords":["drops","water","drip","oops"],"skins":[{"unified":"1f4a6","native":"\ud83d\udca6"}],"version":1},"dash":{"id":"dash","name":"Dash Symbol","keywords":["dashing","away","wind","air","fast","shoo","fart","smoke","puff"],"skins":[{"unified":"1f4a8","native":"\ud83d\udca8"}],"version":1},"hole":{"id":"hole","name":"Hole","keywords":["embarrassing"],"skins":[{"unified":"1f573-fe0f","native":"\ud83d\udd73\ufe0f"}],"version":1},"bomb":{"id":"bomb","name":"Bomb","keywords":["boom","explode","explosion","terrorism"],"skins":[{"unified":"1f4a3","native":"\ud83d\udca3"}],"version":1},"speech_balloon":{"id":"speech_balloon","name":"Speech Balloon","keywords":["bubble","words","message","talk","chatting"],"skins":[{"unified":"1f4ac","native":"\ud83d\udcac"}],"version":1},"eye-in-speech-bubble":{"id":"eye-in-speech-bubble","name":"Eye in Speech Bubble","keywords":["in-speech-bubble","info"],"skins":[{"unified":"1f441-fe0f-200d-1f5e8-fe0f","native":"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f"}],"version":2},"left_speech_bubble":{"id":"left_speech_bubble","name":"Left Speech Bubble","keywords":["words","message","talk","chatting"],"skins":[{"unified":"1f5e8-fe0f","native":"\ud83d\udde8\ufe0f"}],"version":2},"right_anger_bubble":{"id":"right_anger_bubble","name":"Right Anger Bubble","keywords":["caption","speech","thinking","mad"],"skins":[{"unified":"1f5ef-fe0f","native":"\ud83d\uddef\ufe0f"}],"version":1},"thought_balloon":{"id":"thought_balloon","name":"Thought Balloon","keywords":["bubble","cloud","speech","thinking","dream"],"skins":[{"unified":"1f4ad","native":"\ud83d\udcad"}],"version":1},"zzz":{"id":"zzz","name":"Zzz","keywords":["sleepy","tired","dream"],"skins":[{"unified":"1f4a4","native":"\ud83d\udca4"}],"version":1},"wave":{"id":"wave","name":"Waving Hand","keywords":["wave","hands","gesture","goodbye","solong","farewell","hello","hi","palm"],"skins":[{"unified":"1f44b","native":"\ud83d\udc4b"},{"unified":"1f44b-1f3fb","native":"\ud83d\udc4b\ud83c\udffb"},{"unified":"1f44b-1f3fc","native":"\ud83d\udc4b\ud83c\udffc"},{"unified":"1f44b-1f3fd","native":"\ud83d\udc4b\ud83c\udffd"},{"unified":"1f44b-1f3fe","native":"\ud83d\udc4b\ud83c\udffe"},{"unified":"1f44b-1f3ff","native":"\ud83d\udc4b\ud83c\udfff"}],"version":1},"raised_back_of_hand":{"id":"raised_back_of_hand","name":"Raised Back of Hand","keywords":["fingers","backhand"],"skins":[{"unified":"1f91a","native":"\ud83e\udd1a"},{"unified":"1f91a-1f3fb","native":"\ud83e\udd1a\ud83c\udffb"},{"unified":"1f91a-1f3fc","native":"\ud83e\udd1a\ud83c\udffc"},{"unified":"1f91a-1f3fd","native":"\ud83e\udd1a\ud83c\udffd"},{"unified":"1f91a-1f3fe","native":"\ud83e\udd1a\ud83c\udffe"},{"unified":"1f91a-1f3ff","native":"\ud83e\udd1a\ud83c\udfff"}],"version":3},"raised_hand_with_fingers_splayed":{"id":"raised_hand_with_fingers_splayed","name":"Hand with Fingers Splayed","keywords":["raised","palm"],"skins":[{"unified":"1f590-fe0f","native":"\ud83d\udd90\ufe0f"},{"unified":"1f590-1f3fb","native":"\ud83d\udd90\ud83c\udffb"},{"unified":"1f590-1f3fc","native":"\ud83d\udd90\ud83c\udffc"},{"unified":"1f590-1f3fd","native":"\ud83d\udd90\ud83c\udffd"},{"unified":"1f590-1f3fe","native":"\ud83d\udd90\ud83c\udffe"},{"unified":"1f590-1f3ff","native":"\ud83d\udd90\ud83c\udfff"}],"version":1},"hand":{"id":"hand","name":"Raised Hand","keywords":["fingers","stop","highfive","high","five","palm","ban"],"skins":[{"unified":"270b","native":"\u270b"},{"unified":"270b-1f3fb","native":"\u270b\ud83c\udffb"},{"unified":"270b-1f3fc","native":"\u270b\ud83c\udffc"},{"unified":"270b-1f3fd","native":"\u270b\ud83c\udffd"},{"unified":"270b-1f3fe","native":"\u270b\ud83c\udffe"},{"unified":"270b-1f3ff","native":"\u270b\ud83c\udfff"}],"version":1},"spock-hand":{"id":"spock-hand","name":"Vulcan Salute","keywords":["spock","hand","fingers","star","trek"],"skins":[{"unified":"1f596","native":"\ud83d\udd96"},{"unified":"1f596-1f3fb","native":"\ud83d\udd96\ud83c\udffb"},{"unified":"1f596-1f3fc","native":"\ud83d\udd96\ud83c\udffc"},{"unified":"1f596-1f3fd","native":"\ud83d\udd96\ud83c\udffd"},{"unified":"1f596-1f3fe","native":"\ud83d\udd96\ud83c\udffe"},{"unified":"1f596-1f3ff","native":"\ud83d\udd96\ud83c\udfff"}],"version":1},"rightwards_hand":{"id":"rightwards_hand","name":"Rightwards Hand","keywords":["palm","offer"],"skins":[{"unified":"1faf1","native":"\ud83e\udef1"},{"unified":"1faf1-1f3fb","native":"\ud83e\udef1\ud83c\udffb"},{"unified":"1faf1-1f3fc","native":"\ud83e\udef1\ud83c\udffc"},{"unified":"1faf1-1f3fd","native":"\ud83e\udef1\ud83c\udffd"},{"unified":"1faf1-1f3fe","native":"\ud83e\udef1\ud83c\udffe"},{"unified":"1faf1-1f3ff","native":"\ud83e\udef1\ud83c\udfff"}],"version":14},"leftwards_hand":{"id":"leftwards_hand","name":"Leftwards Hand","keywords":["palm","offer"],"skins":[{"unified":"1faf2","native":"\ud83e\udef2"},{"unified":"1faf2-1f3fb","native":"\ud83e\udef2\ud83c\udffb"},{"unified":"1faf2-1f3fc","native":"\ud83e\udef2\ud83c\udffc"},{"unified":"1faf2-1f3fd","native":"\ud83e\udef2\ud83c\udffd"},{"unified":"1faf2-1f3fe","native":"\ud83e\udef2\ud83c\udffe"},{"unified":"1faf2-1f3ff","native":"\ud83e\udef2\ud83c\udfff"}],"version":14},"palm_down_hand":{"id":"palm_down_hand","name":"Palm Down Hand","keywords":["drop"],"skins":[{"unified":"1faf3","native":"\ud83e\udef3"},{"unified":"1faf3-1f3fb","native":"\ud83e\udef3\ud83c\udffb"},{"unified":"1faf3-1f3fc","native":"\ud83e\udef3\ud83c\udffc"},{"unified":"1faf3-1f3fd","native":"\ud83e\udef3\ud83c\udffd"},{"unified":"1faf3-1f3fe","native":"\ud83e\udef3\ud83c\udffe"},{"unified":"1faf3-1f3ff","native":"\ud83e\udef3\ud83c\udfff"}],"version":14},"palm_up_hand":{"id":"palm_up_hand","name":"Palm Up Hand","keywords":["lift","offer","demand"],"skins":[{"unified":"1faf4","native":"\ud83e\udef4"},{"unified":"1faf4-1f3fb","native":"\ud83e\udef4\ud83c\udffb"},{"unified":"1faf4-1f3fc","native":"\ud83e\udef4\ud83c\udffc"},{"unified":"1faf4-1f3fd","native":"\ud83e\udef4\ud83c\udffd"},{"unified":"1faf4-1f3fe","native":"\ud83e\udef4\ud83c\udffe"},{"unified":"1faf4-1f3ff","native":"\ud83e\udef4\ud83c\udfff"}],"version":14},"ok_hand":{"id":"ok_hand","name":"Ok Hand","keywords":["fingers","limbs","perfect","okay"],"skins":[{"unified":"1f44c","native":"\ud83d\udc4c"},{"unified":"1f44c-1f3fb","native":"\ud83d\udc4c\ud83c\udffb"},{"unified":"1f44c-1f3fc","native":"\ud83d\udc4c\ud83c\udffc"},{"unified":"1f44c-1f3fd","native":"\ud83d\udc4c\ud83c\udffd"},{"unified":"1f44c-1f3fe","native":"\ud83d\udc4c\ud83c\udffe"},{"unified":"1f44c-1f3ff","native":"\ud83d\udc4c\ud83c\udfff"}],"version":1},"pinched_fingers":{"id":"pinched_fingers","name":"Pinched Fingers","keywords":["size","tiny","small"],"skins":[{"unified":"1f90c","native":"\ud83e\udd0c"},{"unified":"1f90c-1f3fb","native":"\ud83e\udd0c\ud83c\udffb"},{"unified":"1f90c-1f3fc","native":"\ud83e\udd0c\ud83c\udffc"},{"unified":"1f90c-1f3fd","native":"\ud83e\udd0c\ud83c\udffd"},{"unified":"1f90c-1f3fe","native":"\ud83e\udd0c\ud83c\udffe"},{"unified":"1f90c-1f3ff","native":"\ud83e\udd0c\ud83c\udfff"}],"version":13},"pinching_hand":{"id":"pinching_hand","name":"Pinching Hand","keywords":["tiny","small","size"],"skins":[{"unified":"1f90f","native":"\ud83e\udd0f"},{"unified":"1f90f-1f3fb","native":"\ud83e\udd0f\ud83c\udffb"},{"unified":"1f90f-1f3fc","native":"\ud83e\udd0f\ud83c\udffc"},{"unified":"1f90f-1f3fd","native":"\ud83e\udd0f\ud83c\udffd"},{"unified":"1f90f-1f3fe","native":"\ud83e\udd0f\ud83c\udffe"},{"unified":"1f90f-1f3ff","native":"\ud83e\udd0f\ud83c\udfff"}],"version":12},"v":{"id":"v","name":"Victory Hand","keywords":["v","fingers","ohyeah","peace","two"],"skins":[{"unified":"270c-fe0f","native":"\u270c\ufe0f"},{"unified":"270c-1f3fb","native":"\u270c\ud83c\udffb"},{"unified":"270c-1f3fc","native":"\u270c\ud83c\udffc"},{"unified":"270c-1f3fd","native":"\u270c\ud83c\udffd"},{"unified":"270c-1f3fe","native":"\u270c\ud83c\udffe"},{"unified":"270c-1f3ff","native":"\u270c\ud83c\udfff"}],"version":1},"crossed_fingers":{"id":"crossed_fingers","name":"Crossed Fingers","keywords":["hand","with","index","and","middle","good","lucky"],"skins":[{"unified":"1f91e","native":"\ud83e\udd1e"},{"unified":"1f91e-1f3fb","native":"\ud83e\udd1e\ud83c\udffb"},{"unified":"1f91e-1f3fc","native":"\ud83e\udd1e\ud83c\udffc"},{"unified":"1f91e-1f3fd","native":"\ud83e\udd1e\ud83c\udffd"},{"unified":"1f91e-1f3fe","native":"\ud83e\udd1e\ud83c\udffe"},{"unified":"1f91e-1f3ff","native":"\ud83e\udd1e\ud83c\udfff"}],"version":3},"hand_with_index_finger_and_thumb_crossed":{"id":"hand_with_index_finger_and_thumb_crossed","name":"Hand with Index Finger and Thumb Crossed","keywords":["heart","love","money","expensive"],"skins":[{"unified":"1faf0","native":"\ud83e\udef0"},{"unified":"1faf0-1f3fb","native":"\ud83e\udef0\ud83c\udffb"},{"unified":"1faf0-1f3fc","native":"\ud83e\udef0\ud83c\udffc"},{"unified":"1faf0-1f3fd","native":"\ud83e\udef0\ud83c\udffd"},{"unified":"1faf0-1f3fe","native":"\ud83e\udef0\ud83c\udffe"},{"unified":"1faf0-1f3ff","native":"\ud83e\udef0\ud83c\udfff"}],"version":14},"i_love_you_hand_sign":{"id":"i_love_you_hand_sign","name":"Love-You Gesture","keywords":["i","love","you","hand","sign","fingers"],"skins":[{"unified":"1f91f","native":"\ud83e\udd1f"},{"unified":"1f91f-1f3fb","native":"\ud83e\udd1f\ud83c\udffb"},{"unified":"1f91f-1f3fc","native":"\ud83e\udd1f\ud83c\udffc"},{"unified":"1f91f-1f3fd","native":"\ud83e\udd1f\ud83c\udffd"},{"unified":"1f91f-1f3fe","native":"\ud83e\udd1f\ud83c\udffe"},{"unified":"1f91f-1f3ff","native":"\ud83e\udd1f\ud83c\udfff"}],"version":5},"the_horns":{"id":"the_horns","name":"Sign of the Horns","keywords":["hand","fingers","evil","eye","rock","on"],"skins":[{"unified":"1f918","native":"\ud83e\udd18"},{"unified":"1f918-1f3fb","native":"\ud83e\udd18\ud83c\udffb"},{"unified":"1f918-1f3fc","native":"\ud83e\udd18\ud83c\udffc"},{"unified":"1f918-1f3fd","native":"\ud83e\udd18\ud83c\udffd"},{"unified":"1f918-1f3fe","native":"\ud83e\udd18\ud83c\udffe"},{"unified":"1f918-1f3ff","native":"\ud83e\udd18\ud83c\udfff"}],"version":1},"call_me_hand":{"id":"call_me_hand","name":"Call Me Hand","keywords":["hands","gesture","shaka"],"skins":[{"unified":"1f919","native":"\ud83e\udd19"},{"unified":"1f919-1f3fb","native":"\ud83e\udd19\ud83c\udffb"},{"unified":"1f919-1f3fc","native":"\ud83e\udd19\ud83c\udffc"},{"unified":"1f919-1f3fd","native":"\ud83e\udd19\ud83c\udffd"},{"unified":"1f919-1f3fe","native":"\ud83e\udd19\ud83c\udffe"},{"unified":"1f919-1f3ff","native":"\ud83e\udd19\ud83c\udfff"}],"version":3},"point_left":{"id":"point_left","name":"Backhand Index Pointing Left","keywords":["point","direction","fingers","hand"],"skins":[{"unified":"1f448","native":"\ud83d\udc48"},{"unified":"1f448-1f3fb","native":"\ud83d\udc48\ud83c\udffb"},{"unified":"1f448-1f3fc","native":"\ud83d\udc48\ud83c\udffc"},{"unified":"1f448-1f3fd","native":"\ud83d\udc48\ud83c\udffd"},{"unified":"1f448-1f3fe","native":"\ud83d\udc48\ud83c\udffe"},{"unified":"1f448-1f3ff","native":"\ud83d\udc48\ud83c\udfff"}],"version":1},"point_right":{"id":"point_right","name":"Backhand Index Pointing Right","keywords":["point","fingers","hand","direction"],"skins":[{"unified":"1f449","native":"\ud83d\udc49"},{"unified":"1f449-1f3fb","native":"\ud83d\udc49\ud83c\udffb"},{"unified":"1f449-1f3fc","native":"\ud83d\udc49\ud83c\udffc"},{"unified":"1f449-1f3fd","native":"\ud83d\udc49\ud83c\udffd"},{"unified":"1f449-1f3fe","native":"\ud83d\udc49\ud83c\udffe"},{"unified":"1f449-1f3ff","native":"\ud83d\udc49\ud83c\udfff"}],"version":1},"point_up_2":{"id":"point_up_2","name":"Backhand Index Pointing Up","keywords":["point","2","fingers","hand","direction"],"skins":[{"unified":"1f446","native":"\ud83d\udc46"},{"unified":"1f446-1f3fb","native":"\ud83d\udc46\ud83c\udffb"},{"unified":"1f446-1f3fc","native":"\ud83d\udc46\ud83c\udffc"},{"unified":"1f446-1f3fd","native":"\ud83d\udc46\ud83c\udffd"},{"unified":"1f446-1f3fe","native":"\ud83d\udc46\ud83c\udffe"},{"unified":"1f446-1f3ff","native":"\ud83d\udc46\ud83c\udfff"}],"version":1},"middle_finger":{"id":"middle_finger","name":"Middle Finger","keywords":["reversed","hand","with","extended","fingers","rude","flipping"],"skins":[{"unified":"1f595","native":"\ud83d\udd95"},{"unified":"1f595-1f3fb","native":"\ud83d\udd95\ud83c\udffb"},{"unified":"1f595-1f3fc","native":"\ud83d\udd95\ud83c\udffc"},{"unified":"1f595-1f3fd","native":"\ud83d\udd95\ud83c\udffd"},{"unified":"1f595-1f3fe","native":"\ud83d\udd95\ud83c\udffe"},{"unified":"1f595-1f3ff","native":"\ud83d\udd95\ud83c\udfff"}],"version":1},"point_down":{"id":"point_down","name":"Backhand Index Pointing Down","keywords":["point","fingers","hand","direction"],"skins":[{"unified":"1f447","native":"\ud83d\udc47"},{"unified":"1f447-1f3fb","native":"\ud83d\udc47\ud83c\udffb"},{"unified":"1f447-1f3fc","native":"\ud83d\udc47\ud83c\udffc"},{"unified":"1f447-1f3fd","native":"\ud83d\udc47\ud83c\udffd"},{"unified":"1f447-1f3fe","native":"\ud83d\udc47\ud83c\udffe"},{"unified":"1f447-1f3ff","native":"\ud83d\udc47\ud83c\udfff"}],"version":1},"point_up":{"id":"point_up","name":"Index Pointing Up","keywords":["point","hand","fingers","direction"],"skins":[{"unified":"261d-fe0f","native":"\u261d\ufe0f"},{"unified":"261d-1f3fb","native":"\u261d\ud83c\udffb"},{"unified":"261d-1f3fc","native":"\u261d\ud83c\udffc"},{"unified":"261d-1f3fd","native":"\u261d\ud83c\udffd"},{"unified":"261d-1f3fe","native":"\u261d\ud83c\udffe"},{"unified":"261d-1f3ff","native":"\u261d\ud83c\udfff"}],"version":1},"index_pointing_at_the_viewer":{"id":"index_pointing_at_the_viewer","name":"Index Pointing at the Viewer","keywords":["you","recruit"],"skins":[{"unified":"1faf5","native":"\ud83e\udef5"},{"unified":"1faf5-1f3fb","native":"\ud83e\udef5\ud83c\udffb"},{"unified":"1faf5-1f3fc","native":"\ud83e\udef5\ud83c\udffc"},{"unified":"1faf5-1f3fd","native":"\ud83e\udef5\ud83c\udffd"},{"unified":"1faf5-1f3fe","native":"\ud83e\udef5\ud83c\udffe"},{"unified":"1faf5-1f3ff","native":"\ud83e\udef5\ud83c\udfff"}],"version":14},"+1":{"id":"+1","name":"Thumbs Up","keywords":["+1","thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"skins":[{"unified":"1f44d","native":"\ud83d\udc4d"},{"unified":"1f44d-1f3fb","native":"\ud83d\udc4d\ud83c\udffb"},{"unified":"1f44d-1f3fc","native":"\ud83d\udc4d\ud83c\udffc"},{"unified":"1f44d-1f3fd","native":"\ud83d\udc4d\ud83c\udffd"},{"unified":"1f44d-1f3fe","native":"\ud83d\udc4d\ud83c\udffe"},{"unified":"1f44d-1f3ff","native":"\ud83d\udc4d\ud83c\udfff"}],"version":1},"-1":{"id":"-1","name":"Thumbs Down","keywords":["-1","thumbsdown","no","dislike","hand"],"skins":[{"unified":"1f44e","native":"\ud83d\udc4e"},{"unified":"1f44e-1f3fb","native":"\ud83d\udc4e\ud83c\udffb"},{"unified":"1f44e-1f3fc","native":"\ud83d\udc4e\ud83c\udffc"},{"unified":"1f44e-1f3fd","native":"\ud83d\udc4e\ud83c\udffd"},{"unified":"1f44e-1f3fe","native":"\ud83d\udc4e\ud83c\udffe"},{"unified":"1f44e-1f3ff","native":"\ud83d\udc4e\ud83c\udfff"}],"version":1},"fist":{"id":"fist","name":"Raised Fist","keywords":["fingers","hand","grasp"],"skins":[{"unified":"270a","native":"\u270a"},{"unified":"270a-1f3fb","native":"\u270a\ud83c\udffb"},{"unified":"270a-1f3fc","native":"\u270a\ud83c\udffc"},{"unified":"270a-1f3fd","native":"\u270a\ud83c\udffd"},{"unified":"270a-1f3fe","native":"\u270a\ud83c\udffe"},{"unified":"270a-1f3ff","native":"\u270a\ud83c\udfff"}],"version":1},"facepunch":{"id":"facepunch","name":"Oncoming Fist","keywords":["facepunch","punch","angry","violence","hit","attack","hand"],"skins":[{"unified":"1f44a","native":"\ud83d\udc4a"},{"unified":"1f44a-1f3fb","native":"\ud83d\udc4a\ud83c\udffb"},{"unified":"1f44a-1f3fc","native":"\ud83d\udc4a\ud83c\udffc"},{"unified":"1f44a-1f3fd","native":"\ud83d\udc4a\ud83c\udffd"},{"unified":"1f44a-1f3fe","native":"\ud83d\udc4a\ud83c\udffe"},{"unified":"1f44a-1f3ff","native":"\ud83d\udc4a\ud83c\udfff"}],"version":1},"left-facing_fist":{"id":"left-facing_fist","name":"Left-Facing Fist","keywords":["left","facing","hand","fistbump"],"skins":[{"unified":"1f91b","native":"\ud83e\udd1b"},{"unified":"1f91b-1f3fb","native":"\ud83e\udd1b\ud83c\udffb"},{"unified":"1f91b-1f3fc","native":"\ud83e\udd1b\ud83c\udffc"},{"unified":"1f91b-1f3fd","native":"\ud83e\udd1b\ud83c\udffd"},{"unified":"1f91b-1f3fe","native":"\ud83e\udd1b\ud83c\udffe"},{"unified":"1f91b-1f3ff","native":"\ud83e\udd1b\ud83c\udfff"}],"version":3},"right-facing_fist":{"id":"right-facing_fist","name":"Right-Facing Fist","keywords":["right","facing","hand","fistbump"],"skins":[{"unified":"1f91c","native":"\ud83e\udd1c"},{"unified":"1f91c-1f3fb","native":"\ud83e\udd1c\ud83c\udffb"},{"unified":"1f91c-1f3fc","native":"\ud83e\udd1c\ud83c\udffc"},{"unified":"1f91c-1f3fd","native":"\ud83e\udd1c\ud83c\udffd"},{"unified":"1f91c-1f3fe","native":"\ud83e\udd1c\ud83c\udffe"},{"unified":"1f91c-1f3ff","native":"\ud83e\udd1c\ud83c\udfff"}],"version":3},"clap":{"id":"clap","name":"Clapping Hands","keywords":["clap","praise","applause","congrats","yay"],"skins":[{"unified":"1f44f","native":"\ud83d\udc4f"},{"unified":"1f44f-1f3fb","native":"\ud83d\udc4f\ud83c\udffb"},{"unified":"1f44f-1f3fc","native":"\ud83d\udc4f\ud83c\udffc"},{"unified":"1f44f-1f3fd","native":"\ud83d\udc4f\ud83c\udffd"},{"unified":"1f44f-1f3fe","native":"\ud83d\udc4f\ud83c\udffe"},{"unified":"1f44f-1f3ff","native":"\ud83d\udc4f\ud83c\udfff"}],"version":1},"raised_hands":{"id":"raised_hands","name":"Raising Hands","keywords":["raised","gesture","hooray","yea","celebration"],"skins":[{"unified":"1f64c","native":"\ud83d\ude4c"},{"unified":"1f64c-1f3fb","native":"\ud83d\ude4c\ud83c\udffb"},{"unified":"1f64c-1f3fc","native":"\ud83d\ude4c\ud83c\udffc"},{"unified":"1f64c-1f3fd","native":"\ud83d\ude4c\ud83c\udffd"},{"unified":"1f64c-1f3fe","native":"\ud83d\ude4c\ud83c\udffe"},{"unified":"1f64c-1f3ff","native":"\ud83d\ude4c\ud83c\udfff"}],"version":1},"heart_hands":{"id":"heart_hands","name":"Heart Hands","keywords":["love","appreciation","support"],"skins":[{"unified":"1faf6","native":"\ud83e\udef6"},{"unified":"1faf6-1f3fb","native":"\ud83e\udef6\ud83c\udffb"},{"unified":"1faf6-1f3fc","native":"\ud83e\udef6\ud83c\udffc"},{"unified":"1faf6-1f3fd","native":"\ud83e\udef6\ud83c\udffd"},{"unified":"1faf6-1f3fe","native":"\ud83e\udef6\ud83c\udffe"},{"unified":"1faf6-1f3ff","native":"\ud83e\udef6\ud83c\udfff"}],"version":14},"open_hands":{"id":"open_hands","name":"Open Hands","keywords":["fingers","butterfly"],"skins":[{"unified":"1f450","native":"\ud83d\udc50"},{"unified":"1f450-1f3fb","native":"\ud83d\udc50\ud83c\udffb"},{"unified":"1f450-1f3fc","native":"\ud83d\udc50\ud83c\udffc"},{"unified":"1f450-1f3fd","native":"\ud83d\udc50\ud83c\udffd"},{"unified":"1f450-1f3fe","native":"\ud83d\udc50\ud83c\udffe"},{"unified":"1f450-1f3ff","native":"\ud83d\udc50\ud83c\udfff"}],"version":1},"palms_up_together":{"id":"palms_up_together","name":"Palms Up Together","keywords":["hands","gesture","cupped","prayer"],"skins":[{"unified":"1f932","native":"\ud83e\udd32"},{"unified":"1f932-1f3fb","native":"\ud83e\udd32\ud83c\udffb"},{"unified":"1f932-1f3fc","native":"\ud83e\udd32\ud83c\udffc"},{"unified":"1f932-1f3fd","native":"\ud83e\udd32\ud83c\udffd"},{"unified":"1f932-1f3fe","native":"\ud83e\udd32\ud83c\udffe"},{"unified":"1f932-1f3ff","native":"\ud83e\udd32\ud83c\udfff"}],"version":5},"handshake":{"id":"handshake","name":"Handshake","keywords":["agreement","shake"],"skins":[{"unified":"1f91d","native":"\ud83e\udd1d"},{"unified":"1f91d-1f3fb","native":"\ud83e\udd1d\ud83c\udffb"},{"unified":"1f91d-1f3fc","native":"\ud83e\udd1d\ud83c\udffc"},{"unified":"1f91d-1f3fd","native":"\ud83e\udd1d\ud83c\udffd"},{"unified":"1f91d-1f3fe","native":"\ud83e\udd1d\ud83c\udffe"},{"unified":"1f91d-1f3ff","native":"\ud83e\udd1d\ud83c\udfff"}],"version":3},"pray":{"id":"pray","name":"Folded Hands","keywords":["pray","please","hope","wish","namaste","highfive","high","five"],"skins":[{"unified":"1f64f","native":"\ud83d\ude4f"},{"unified":"1f64f-1f3fb","native":"\ud83d\ude4f\ud83c\udffb"},{"unified":"1f64f-1f3fc","native":"\ud83d\ude4f\ud83c\udffc"},{"unified":"1f64f-1f3fd","native":"\ud83d\ude4f\ud83c\udffd"},{"unified":"1f64f-1f3fe","native":"\ud83d\ude4f\ud83c\udffe"},{"unified":"1f64f-1f3ff","native":"\ud83d\ude4f\ud83c\udfff"}],"version":1},"writing_hand":{"id":"writing_hand","name":"Writing Hand","keywords":["lower","left","ballpoint","pen","stationery","write","compose"],"skins":[{"unified":"270d-fe0f","native":"\u270d\ufe0f"},{"unified":"270d-1f3fb","native":"\u270d\ud83c\udffb"},{"unified":"270d-1f3fc","native":"\u270d\ud83c\udffc"},{"unified":"270d-1f3fd","native":"\u270d\ud83c\udffd"},{"unified":"270d-1f3fe","native":"\u270d\ud83c\udffe"},{"unified":"270d-1f3ff","native":"\u270d\ud83c\udfff"}],"version":1},"nail_care":{"id":"nail_care","name":"Nail Polish","keywords":["care","beauty","manicure","finger","fashion"],"skins":[{"unified":"1f485","native":"\ud83d\udc85"},{"unified":"1f485-1f3fb","native":"\ud83d\udc85\ud83c\udffb"},{"unified":"1f485-1f3fc","native":"\ud83d\udc85\ud83c\udffc"},{"unified":"1f485-1f3fd","native":"\ud83d\udc85\ud83c\udffd"},{"unified":"1f485-1f3fe","native":"\ud83d\udc85\ud83c\udffe"},{"unified":"1f485-1f3ff","native":"\ud83d\udc85\ud83c\udfff"}],"version":1},"selfie":{"id":"selfie","name":"Selfie","keywords":["camera","phone"],"skins":[{"unified":"1f933","native":"\ud83e\udd33"},{"unified":"1f933-1f3fb","native":"\ud83e\udd33\ud83c\udffb"},{"unified":"1f933-1f3fc","native":"\ud83e\udd33\ud83c\udffc"},{"unified":"1f933-1f3fd","native":"\ud83e\udd33\ud83c\udffd"},{"unified":"1f933-1f3fe","native":"\ud83e\udd33\ud83c\udffe"},{"unified":"1f933-1f3ff","native":"\ud83e\udd33\ud83c\udfff"}],"version":3},"muscle":{"id":"muscle","name":"Flexed Biceps","keywords":["muscle","arm","flex","hand","summer","strong"],"skins":[{"unified":"1f4aa","native":"\ud83d\udcaa"},{"unified":"1f4aa-1f3fb","native":"\ud83d\udcaa\ud83c\udffb"},{"unified":"1f4aa-1f3fc","native":"\ud83d\udcaa\ud83c\udffc"},{"unified":"1f4aa-1f3fd","native":"\ud83d\udcaa\ud83c\udffd"},{"unified":"1f4aa-1f3fe","native":"\ud83d\udcaa\ud83c\udffe"},{"unified":"1f4aa-1f3ff","native":"\ud83d\udcaa\ud83c\udfff"}],"version":1},"mechanical_arm":{"id":"mechanical_arm","name":"Mechanical Arm","keywords":["accessibility"],"skins":[{"unified":"1f9be","native":"\ud83e\uddbe"}],"version":12},"mechanical_leg":{"id":"mechanical_leg","name":"Mechanical Leg","keywords":["accessibility"],"skins":[{"unified":"1f9bf","native":"\ud83e\uddbf"}],"version":12},"leg":{"id":"leg","name":"Leg","keywords":["kick","limb"],"skins":[{"unified":"1f9b5","native":"\ud83e\uddb5"},{"unified":"1f9b5-1f3fb","native":"\ud83e\uddb5\ud83c\udffb"},{"unified":"1f9b5-1f3fc","native":"\ud83e\uddb5\ud83c\udffc"},{"unified":"1f9b5-1f3fd","native":"\ud83e\uddb5\ud83c\udffd"},{"unified":"1f9b5-1f3fe","native":"\ud83e\uddb5\ud83c\udffe"},{"unified":"1f9b5-1f3ff","native":"\ud83e\uddb5\ud83c\udfff"}],"version":11},"foot":{"id":"foot","name":"Foot","keywords":["kick","stomp"],"skins":[{"unified":"1f9b6","native":"\ud83e\uddb6"},{"unified":"1f9b6-1f3fb","native":"\ud83e\uddb6\ud83c\udffb"},{"unified":"1f9b6-1f3fc","native":"\ud83e\uddb6\ud83c\udffc"},{"unified":"1f9b6-1f3fd","native":"\ud83e\uddb6\ud83c\udffd"},{"unified":"1f9b6-1f3fe","native":"\ud83e\uddb6\ud83c\udffe"},{"unified":"1f9b6-1f3ff","native":"\ud83e\uddb6\ud83c\udfff"}],"version":11},"ear":{"id":"ear","name":"Ear","keywords":["face","hear","sound","listen"],"skins":[{"unified":"1f442","native":"\ud83d\udc42"},{"unified":"1f442-1f3fb","native":"\ud83d\udc42\ud83c\udffb"},{"unified":"1f442-1f3fc","native":"\ud83d\udc42\ud83c\udffc"},{"unified":"1f442-1f3fd","native":"\ud83d\udc42\ud83c\udffd"},{"unified":"1f442-1f3fe","native":"\ud83d\udc42\ud83c\udffe"},{"unified":"1f442-1f3ff","native":"\ud83d\udc42\ud83c\udfff"}],"version":1},"ear_with_hearing_aid":{"id":"ear_with_hearing_aid","name":"Ear with Hearing Aid","keywords":["accessibility"],"skins":[{"unified":"1f9bb","native":"\ud83e\uddbb"},{"unified":"1f9bb-1f3fb","native":"\ud83e\uddbb\ud83c\udffb"},{"unified":"1f9bb-1f3fc","native":"\ud83e\uddbb\ud83c\udffc"},{"unified":"1f9bb-1f3fd","native":"\ud83e\uddbb\ud83c\udffd"},{"unified":"1f9bb-1f3fe","native":"\ud83e\uddbb\ud83c\udffe"},{"unified":"1f9bb-1f3ff","native":"\ud83e\uddbb\ud83c\udfff"}],"version":12},"nose":{"id":"nose","name":"Nose","keywords":["smell","sniff"],"skins":[{"unified":"1f443","native":"\ud83d\udc43"},{"unified":"1f443-1f3fb","native":"\ud83d\udc43\ud83c\udffb"},{"unified":"1f443-1f3fc","native":"\ud83d\udc43\ud83c\udffc"},{"unified":"1f443-1f3fd","native":"\ud83d\udc43\ud83c\udffd"},{"unified":"1f443-1f3fe","native":"\ud83d\udc43\ud83c\udffe"},{"unified":"1f443-1f3ff","native":"\ud83d\udc43\ud83c\udfff"}],"version":1},"brain":{"id":"brain","name":"Brain","keywords":["smart","intelligent"],"skins":[{"unified":"1f9e0","native":"\ud83e\udde0"}],"version":5},"anatomical_heart":{"id":"anatomical_heart","name":"Anatomical Heart","keywords":["health","heartbeat"],"skins":[{"unified":"1fac0","native":"\ud83e\udec0"}],"version":13},"lungs":{"id":"lungs","name":"Lungs","keywords":["breathe"],"skins":[{"unified":"1fac1","native":"\ud83e\udec1"}],"version":13},"tooth":{"id":"tooth","name":"Tooth","keywords":["teeth","dentist"],"skins":[{"unified":"1f9b7","native":"\ud83e\uddb7"}],"version":11},"bone":{"id":"bone","name":"Bone","keywords":["skeleton"],"skins":[{"unified":"1f9b4","native":"\ud83e\uddb4"}],"version":11},"eyes":{"id":"eyes","name":"Eyes","keywords":["look","watch","stalk","peek","see"],"skins":[{"unified":"1f440","native":"\ud83d\udc40"}],"version":1},"eye":{"id":"eye","name":"Eye","keywords":["face","look","see","watch","stare"],"skins":[{"unified":"1f441-fe0f","native":"\ud83d\udc41\ufe0f"}],"version":1},"tongue":{"id":"tongue","name":"Tongue","keywords":["mouth","playful"],"skins":[{"unified":"1f445","native":"\ud83d\udc45"}],"version":1},"lips":{"id":"lips","name":"Mouth","keywords":["lips","kiss"],"skins":[{"unified":"1f444","native":"\ud83d\udc44"}],"version":1},"biting_lip":{"id":"biting_lip","name":"Biting Lip","keywords":["flirt","sexy","pain","worry"],"skins":[{"unified":"1fae6","native":"\ud83e\udee6"}],"version":14},"baby":{"id":"baby","name":"Baby","keywords":["child","boy","girl","toddler"],"skins":[{"unified":"1f476","native":"\ud83d\udc76"},{"unified":"1f476-1f3fb","native":"\ud83d\udc76\ud83c\udffb"},{"unified":"1f476-1f3fc","native":"\ud83d\udc76\ud83c\udffc"},{"unified":"1f476-1f3fd","native":"\ud83d\udc76\ud83c\udffd"},{"unified":"1f476-1f3fe","native":"\ud83d\udc76\ud83c\udffe"},{"unified":"1f476-1f3ff","native":"\ud83d\udc76\ud83c\udfff"}],"version":1},"child":{"id":"child","name":"Child","keywords":["gender","neutral","young"],"skins":[{"unified":"1f9d2","native":"\ud83e\uddd2"},{"unified":"1f9d2-1f3fb","native":"\ud83e\uddd2\ud83c\udffb"},{"unified":"1f9d2-1f3fc","native":"\ud83e\uddd2\ud83c\udffc"},{"unified":"1f9d2-1f3fd","native":"\ud83e\uddd2\ud83c\udffd"},{"unified":"1f9d2-1f3fe","native":"\ud83e\uddd2\ud83c\udffe"},{"unified":"1f9d2-1f3ff","native":"\ud83e\uddd2\ud83c\udfff"}],"version":5},"boy":{"id":"boy","name":"Boy","keywords":["man","male","guy","teenager"],"skins":[{"unified":"1f466","native":"\ud83d\udc66"},{"unified":"1f466-1f3fb","native":"\ud83d\udc66\ud83c\udffb"},{"unified":"1f466-1f3fc","native":"\ud83d\udc66\ud83c\udffc"},{"unified":"1f466-1f3fd","native":"\ud83d\udc66\ud83c\udffd"},{"unified":"1f466-1f3fe","native":"\ud83d\udc66\ud83c\udffe"},{"unified":"1f466-1f3ff","native":"\ud83d\udc66\ud83c\udfff"}],"version":1},"girl":{"id":"girl","name":"Girl","keywords":["female","woman","teenager"],"skins":[{"unified":"1f467","native":"\ud83d\udc67"},{"unified":"1f467-1f3fb","native":"\ud83d\udc67\ud83c\udffb"},{"unified":"1f467-1f3fc","native":"\ud83d\udc67\ud83c\udffc"},{"unified":"1f467-1f3fd","native":"\ud83d\udc67\ud83c\udffd"},{"unified":"1f467-1f3fe","native":"\ud83d\udc67\ud83c\udffe"},{"unified":"1f467-1f3ff","native":"\ud83d\udc67\ud83c\udfff"}],"version":1},"adult":{"id":"adult","name":"Adult","keywords":["person","gender","neutral"],"skins":[{"unified":"1f9d1","native":"\ud83e\uddd1"},{"unified":"1f9d1-1f3fb","native":"\ud83e\uddd1\ud83c\udffb"},{"unified":"1f9d1-1f3fc","native":"\ud83e\uddd1\ud83c\udffc"},{"unified":"1f9d1-1f3fd","native":"\ud83e\uddd1\ud83c\udffd"},{"unified":"1f9d1-1f3fe","native":"\ud83e\uddd1\ud83c\udffe"},{"unified":"1f9d1-1f3ff","native":"\ud83e\uddd1\ud83c\udfff"}],"version":5},"person_with_blond_hair":{"id":"person_with_blond_hair","name":"Person Blond Hair","keywords":["with","hairstyle"],"skins":[{"unified":"1f471","native":"\ud83d\udc71"},{"unified":"1f471-1f3fb","native":"\ud83d\udc71\ud83c\udffb"},{"unified":"1f471-1f3fc","native":"\ud83d\udc71\ud83c\udffc"},{"unified":"1f471-1f3fd","native":"\ud83d\udc71\ud83c\udffd"},{"unified":"1f471-1f3fe","native":"\ud83d\udc71\ud83c\udffe"},{"unified":"1f471-1f3ff","native":"\ud83d\udc71\ud83c\udfff"}],"version":1},"man":{"id":"man","name":"Man","keywords":["mustache","father","dad","guy","classy","sir","moustache"],"skins":[{"unified":"1f468","native":"\ud83d\udc68"},{"unified":"1f468-1f3fb","native":"\ud83d\udc68\ud83c\udffb"},{"unified":"1f468-1f3fc","native":"\ud83d\udc68\ud83c\udffc"},{"unified":"1f468-1f3fd","native":"\ud83d\udc68\ud83c\udffd"},{"unified":"1f468-1f3fe","native":"\ud83d\udc68\ud83c\udffe"},{"unified":"1f468-1f3ff","native":"\ud83d\udc68\ud83c\udfff"}],"version":1},"bearded_person":{"id":"bearded_person","name":"Person Beard","keywords":["bearded","man","bewhiskered"],"skins":[{"unified":"1f9d4","native":"\ud83e\uddd4"},{"unified":"1f9d4-1f3fb","native":"\ud83e\uddd4\ud83c\udffb"},{"unified":"1f9d4-1f3fc","native":"\ud83e\uddd4\ud83c\udffc"},{"unified":"1f9d4-1f3fd","native":"\ud83e\uddd4\ud83c\udffd"},{"unified":"1f9d4-1f3fe","native":"\ud83e\uddd4\ud83c\udffe"},{"unified":"1f9d4-1f3ff","native":"\ud83e\uddd4\ud83c\udfff"}],"version":5},"man_with_beard":{"id":"man_with_beard","name":"Man: Beard","keywords":["man","with","facial","hair"],"skins":[{"unified":"1f9d4-200d-2642-fe0f","native":"\ud83e\uddd4\u200d\u2642\ufe0f"},{"unified":"1f9d4-1f3fb-200d-2642-fe0f","native":"\ud83e\uddd4\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9d4-1f3fc-200d-2642-fe0f","native":"\ud83e\uddd4\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9d4-1f3fd-200d-2642-fe0f","native":"\ud83e\uddd4\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9d4-1f3fe-200d-2642-fe0f","native":"\ud83e\uddd4\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9d4-1f3ff-200d-2642-fe0f","native":"\ud83e\uddd4\ud83c\udfff\u200d\u2642\ufe0f"}],"version":13.1},"woman_with_beard":{"id":"woman_with_beard","name":"Woman: Beard","keywords":["woman","with","facial","hair"],"skins":[{"unified":"1f9d4-200d-2640-fe0f","native":"\ud83e\uddd4\u200d\u2640\ufe0f"},{"unified":"1f9d4-1f3fb-200d-2640-fe0f","native":"\ud83e\uddd4\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9d4-1f3fc-200d-2640-fe0f","native":"\ud83e\uddd4\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9d4-1f3fd-200d-2640-fe0f","native":"\ud83e\uddd4\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9d4-1f3fe-200d-2640-fe0f","native":"\ud83e\uddd4\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9d4-1f3ff-200d-2640-fe0f","native":"\ud83e\uddd4\ud83c\udfff\u200d\u2640\ufe0f"}],"version":13.1},"red_haired_man":{"id":"red_haired_man","name":"Man: Red Hair","keywords":["haired","man","hairstyle"],"skins":[{"unified":"1f468-200d-1f9b0","native":"\ud83d\udc68\u200d\ud83e\uddb0"},{"unified":"1f468-1f3fb-200d-1f9b0","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb0"},{"unified":"1f468-1f3fc-200d-1f9b0","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb0"},{"unified":"1f468-1f3fd-200d-1f9b0","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb0"},{"unified":"1f468-1f3fe-200d-1f9b0","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb0"},{"unified":"1f468-1f3ff-200d-1f9b0","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb0"}],"version":11},"curly_haired_man":{"id":"curly_haired_man","name":"Man: Curly Hair","keywords":["haired","man","hairstyle"],"skins":[{"unified":"1f468-200d-1f9b1","native":"\ud83d\udc68\u200d\ud83e\uddb1"},{"unified":"1f468-1f3fb-200d-1f9b1","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1"},{"unified":"1f468-1f3fc-200d-1f9b1","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb1"},{"unified":"1f468-1f3fd-200d-1f9b1","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1"},{"unified":"1f468-1f3fe-200d-1f9b1","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},{"unified":"1f468-1f3ff-200d-1f9b1","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1"}],"version":11},"white_haired_man":{"id":"white_haired_man","name":"Man: White Hair","keywords":["haired","man","old","elder"],"skins":[{"unified":"1f468-200d-1f9b3","native":"\ud83d\udc68\u200d\ud83e\uddb3"},{"unified":"1f468-1f3fb-200d-1f9b3","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb3"},{"unified":"1f468-1f3fc-200d-1f9b3","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb3"},{"unified":"1f468-1f3fd-200d-1f9b3","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb3"},{"unified":"1f468-1f3fe-200d-1f9b3","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb3"},{"unified":"1f468-1f3ff-200d-1f9b3","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb3"}],"version":11},"bald_man":{"id":"bald_man","name":"Man: Bald","keywords":["man","hairless"],"skins":[{"unified":"1f468-200d-1f9b2","native":"\ud83d\udc68\u200d\ud83e\uddb2"},{"unified":"1f468-1f3fb-200d-1f9b2","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb2"},{"unified":"1f468-1f3fc-200d-1f9b2","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb2"},{"unified":"1f468-1f3fd-200d-1f9b2","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb2"},{"unified":"1f468-1f3fe-200d-1f9b2","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2"},{"unified":"1f468-1f3ff-200d-1f9b2","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2"}],"version":11},"woman":{"id":"woman","name":"Woman","keywords":["female","girls","lady"],"skins":[{"unified":"1f469","native":"\ud83d\udc69"},{"unified":"1f469-1f3fb","native":"\ud83d\udc69\ud83c\udffb"},{"unified":"1f469-1f3fc","native":"\ud83d\udc69\ud83c\udffc"},{"unified":"1f469-1f3fd","native":"\ud83d\udc69\ud83c\udffd"},{"unified":"1f469-1f3fe","native":"\ud83d\udc69\ud83c\udffe"},{"unified":"1f469-1f3ff","native":"\ud83d\udc69\ud83c\udfff"}],"version":1},"red_haired_woman":{"id":"red_haired_woman","name":"Woman: Red Hair","keywords":["haired","woman","hairstyle"],"skins":[{"unified":"1f469-200d-1f9b0","native":"\ud83d\udc69\u200d\ud83e\uddb0"},{"unified":"1f469-1f3fb-200d-1f9b0","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb0"},{"unified":"1f469-1f3fc-200d-1f9b0","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb0"},{"unified":"1f469-1f3fd-200d-1f9b0","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb0"},{"unified":"1f469-1f3fe-200d-1f9b0","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb0"},{"unified":"1f469-1f3ff-200d-1f9b0","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb0"}],"version":11},"red_haired_person":{"id":"red_haired_person","name":"Person: Red Hair","keywords":["haired","person","hairstyle"],"skins":[{"unified":"1f9d1-200d-1f9b0","native":"\ud83e\uddd1\u200d\ud83e\uddb0"},{"unified":"1f9d1-1f3fb-200d-1f9b0","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\uddb0"},{"unified":"1f9d1-1f3fc-200d-1f9b0","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\uddb0"},{"unified":"1f9d1-1f3fd-200d-1f9b0","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\uddb0"},{"unified":"1f9d1-1f3fe-200d-1f9b0","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\uddb0"},{"unified":"1f9d1-1f3ff-200d-1f9b0","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\uddb0"}],"version":12.1},"curly_haired_woman":{"id":"curly_haired_woman","name":"Woman: Curly Hair","keywords":["haired","woman","hairstyle"],"skins":[{"unified":"1f469-200d-1f9b1","native":"\ud83d\udc69\u200d\ud83e\uddb1"},{"unified":"1f469-1f3fb-200d-1f9b1","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1"},{"unified":"1f469-1f3fc-200d-1f9b1","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb1"},{"unified":"1f469-1f3fd-200d-1f9b1","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1"},{"unified":"1f469-1f3fe-200d-1f9b1","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},{"unified":"1f469-1f3ff-200d-1f9b1","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1"}],"version":11},"curly_haired_person":{"id":"curly_haired_person","name":"Person: Curly Hair","keywords":["haired","person","hairstyle"],"skins":[{"unified":"1f9d1-200d-1f9b1","native":"\ud83e\uddd1\u200d\ud83e\uddb1"},{"unified":"1f9d1-1f3fb-200d-1f9b1","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\uddb1"},{"unified":"1f9d1-1f3fc-200d-1f9b1","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\uddb1"},{"unified":"1f9d1-1f3fd-200d-1f9b1","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\uddb1"},{"unified":"1f9d1-1f3fe-200d-1f9b1","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\uddb1"},{"unified":"1f9d1-1f3ff-200d-1f9b1","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\uddb1"}],"version":12.1},"white_haired_woman":{"id":"white_haired_woman","name":"Woman: White Hair","keywords":["haired","woman","old","elder"],"skins":[{"unified":"1f469-200d-1f9b3","native":"\ud83d\udc69\u200d\ud83e\uddb3"},{"unified":"1f469-1f3fb-200d-1f9b3","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb3"},{"unified":"1f469-1f3fc-200d-1f9b3","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb3"},{"unified":"1f469-1f3fd-200d-1f9b3","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb3"},{"unified":"1f469-1f3fe-200d-1f9b3","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3"},{"unified":"1f469-1f3ff-200d-1f9b3","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3"}],"version":11},"white_haired_person":{"id":"white_haired_person","name":"Person: White Hair","keywords":["haired","person","elder","old"],"skins":[{"unified":"1f9d1-200d-1f9b3","native":"\ud83e\uddd1\u200d\ud83e\uddb3"},{"unified":"1f9d1-1f3fb-200d-1f9b3","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\uddb3"},{"unified":"1f9d1-1f3fc-200d-1f9b3","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\uddb3"},{"unified":"1f9d1-1f3fd-200d-1f9b3","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\uddb3"},{"unified":"1f9d1-1f3fe-200d-1f9b3","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\uddb3"},{"unified":"1f9d1-1f3ff-200d-1f9b3","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\uddb3"}],"version":12.1},"bald_woman":{"id":"bald_woman","name":"Woman: Bald","keywords":["woman","hairless"],"skins":[{"unified":"1f469-200d-1f9b2","native":"\ud83d\udc69\u200d\ud83e\uddb2"},{"unified":"1f469-1f3fb-200d-1f9b2","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb2"},{"unified":"1f469-1f3fc-200d-1f9b2","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb2"},{"unified":"1f469-1f3fd-200d-1f9b2","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb2"},{"unified":"1f469-1f3fe-200d-1f9b2","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb2"},{"unified":"1f469-1f3ff-200d-1f9b2","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb2"}],"version":11},"bald_person":{"id":"bald_person","name":"Person: Bald","keywords":["person","hairless"],"skins":[{"unified":"1f9d1-200d-1f9b2","native":"\ud83e\uddd1\u200d\ud83e\uddb2"},{"unified":"1f9d1-1f3fb-200d-1f9b2","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\uddb2"},{"unified":"1f9d1-1f3fc-200d-1f9b2","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\uddb2"},{"unified":"1f9d1-1f3fd-200d-1f9b2","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\uddb2"},{"unified":"1f9d1-1f3fe-200d-1f9b2","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\uddb2"},{"unified":"1f9d1-1f3ff-200d-1f9b2","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\uddb2"}],"version":12.1},"blond-haired-woman":{"id":"blond-haired-woman","name":"Woman: Blond Hair","keywords":["haired-woman","woman","female","girl","blonde","person"],"skins":[{"unified":"1f471-200d-2640-fe0f","native":"\ud83d\udc71\u200d\u2640\ufe0f"},{"unified":"1f471-1f3fb-200d-2640-fe0f","native":"\ud83d\udc71\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f471-1f3fc-200d-2640-fe0f","native":"\ud83d\udc71\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f471-1f3fd-200d-2640-fe0f","native":"\ud83d\udc71\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f471-1f3fe-200d-2640-fe0f","native":"\ud83d\udc71\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f471-1f3ff-200d-2640-fe0f","native":"\ud83d\udc71\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"blond-haired-man":{"id":"blond-haired-man","name":"Man: Blond Hair","keywords":["haired-man","man","male","boy","blonde","guy","person"],"skins":[{"unified":"1f471-200d-2642-fe0f","native":"\ud83d\udc71\u200d\u2642\ufe0f"},{"unified":"1f471-1f3fb-200d-2642-fe0f","native":"\ud83d\udc71\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f471-1f3fc-200d-2642-fe0f","native":"\ud83d\udc71\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f471-1f3fd-200d-2642-fe0f","native":"\ud83d\udc71\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f471-1f3fe-200d-2642-fe0f","native":"\ud83d\udc71\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f471-1f3ff-200d-2642-fe0f","native":"\ud83d\udc71\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"older_adult":{"id":"older_adult","name":"Older Adult","keywords":["person","human","elder","senior","gender","neutral"],"skins":[{"unified":"1f9d3","native":"\ud83e\uddd3"},{"unified":"1f9d3-1f3fb","native":"\ud83e\uddd3\ud83c\udffb"},{"unified":"1f9d3-1f3fc","native":"\ud83e\uddd3\ud83c\udffc"},{"unified":"1f9d3-1f3fd","native":"\ud83e\uddd3\ud83c\udffd"},{"unified":"1f9d3-1f3fe","native":"\ud83e\uddd3\ud83c\udffe"},{"unified":"1f9d3-1f3ff","native":"\ud83e\uddd3\ud83c\udfff"}],"version":5},"older_man":{"id":"older_man","name":"Old Man","keywords":["older","human","male","men","elder","senior"],"skins":[{"unified":"1f474","native":"\ud83d\udc74"},{"unified":"1f474-1f3fb","native":"\ud83d\udc74\ud83c\udffb"},{"unified":"1f474-1f3fc","native":"\ud83d\udc74\ud83c\udffc"},{"unified":"1f474-1f3fd","native":"\ud83d\udc74\ud83c\udffd"},{"unified":"1f474-1f3fe","native":"\ud83d\udc74\ud83c\udffe"},{"unified":"1f474-1f3ff","native":"\ud83d\udc74\ud83c\udfff"}],"version":1},"older_woman":{"id":"older_woman","name":"Old Woman","keywords":["older","human","female","women","lady","elder","senior"],"skins":[{"unified":"1f475","native":"\ud83d\udc75"},{"unified":"1f475-1f3fb","native":"\ud83d\udc75\ud83c\udffb"},{"unified":"1f475-1f3fc","native":"\ud83d\udc75\ud83c\udffc"},{"unified":"1f475-1f3fd","native":"\ud83d\udc75\ud83c\udffd"},{"unified":"1f475-1f3fe","native":"\ud83d\udc75\ud83c\udffe"},{"unified":"1f475-1f3ff","native":"\ud83d\udc75\ud83c\udfff"}],"version":1},"person_frowning":{"id":"person_frowning","name":"Person Frowning","keywords":["worried"],"skins":[{"unified":"1f64d","native":"\ud83d\ude4d"},{"unified":"1f64d-1f3fb","native":"\ud83d\ude4d\ud83c\udffb"},{"unified":"1f64d-1f3fc","native":"\ud83d\ude4d\ud83c\udffc"},{"unified":"1f64d-1f3fd","native":"\ud83d\ude4d\ud83c\udffd"},{"unified":"1f64d-1f3fe","native":"\ud83d\ude4d\ud83c\udffe"},{"unified":"1f64d-1f3ff","native":"\ud83d\ude4d\ud83c\udfff"}],"version":1},"man-frowning":{"id":"man-frowning","name":"Man Frowning","keywords":["male","boy","sad","depressed","discouraged","unhappy"],"skins":[{"unified":"1f64d-200d-2642-fe0f","native":"\ud83d\ude4d\u200d\u2642\ufe0f"},{"unified":"1f64d-1f3fb-200d-2642-fe0f","native":"\ud83d\ude4d\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f64d-1f3fc-200d-2642-fe0f","native":"\ud83d\ude4d\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f64d-1f3fd-200d-2642-fe0f","native":"\ud83d\ude4d\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f64d-1f3fe-200d-2642-fe0f","native":"\ud83d\ude4d\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f64d-1f3ff-200d-2642-fe0f","native":"\ud83d\ude4d\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-frowning":{"id":"woman-frowning","name":"Woman Frowning","keywords":["female","girl","sad","depressed","discouraged","unhappy"],"skins":[{"unified":"1f64d-200d-2640-fe0f","native":"\ud83d\ude4d\u200d\u2640\ufe0f"},{"unified":"1f64d-1f3fb-200d-2640-fe0f","native":"\ud83d\ude4d\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f64d-1f3fc-200d-2640-fe0f","native":"\ud83d\ude4d\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f64d-1f3fd-200d-2640-fe0f","native":"\ud83d\ude4d\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f64d-1f3fe-200d-2640-fe0f","native":"\ud83d\ude4d\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f64d-1f3ff-200d-2640-fe0f","native":"\ud83d\ude4d\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"person_with_pouting_face":{"id":"person_with_pouting_face","name":"Person Pouting","keywords":["with","face","upset"],"skins":[{"unified":"1f64e","native":"\ud83d\ude4e"},{"unified":"1f64e-1f3fb","native":"\ud83d\ude4e\ud83c\udffb"},{"unified":"1f64e-1f3fc","native":"\ud83d\ude4e\ud83c\udffc"},{"unified":"1f64e-1f3fd","native":"\ud83d\ude4e\ud83c\udffd"},{"unified":"1f64e-1f3fe","native":"\ud83d\ude4e\ud83c\udffe"},{"unified":"1f64e-1f3ff","native":"\ud83d\ude4e\ud83c\udfff"}],"version":1},"man-pouting":{"id":"man-pouting","name":"Man Pouting","keywords":["male","boy"],"skins":[{"unified":"1f64e-200d-2642-fe0f","native":"\ud83d\ude4e\u200d\u2642\ufe0f"},{"unified":"1f64e-1f3fb-200d-2642-fe0f","native":"\ud83d\ude4e\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f64e-1f3fc-200d-2642-fe0f","native":"\ud83d\ude4e\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f64e-1f3fd-200d-2642-fe0f","native":"\ud83d\ude4e\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f64e-1f3fe-200d-2642-fe0f","native":"\ud83d\ude4e\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f64e-1f3ff-200d-2642-fe0f","native":"\ud83d\ude4e\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-pouting":{"id":"woman-pouting","name":"Woman Pouting","keywords":["female","girl"],"skins":[{"unified":"1f64e-200d-2640-fe0f","native":"\ud83d\ude4e\u200d\u2640\ufe0f"},{"unified":"1f64e-1f3fb-200d-2640-fe0f","native":"\ud83d\ude4e\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f64e-1f3fc-200d-2640-fe0f","native":"\ud83d\ude4e\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f64e-1f3fd-200d-2640-fe0f","native":"\ud83d\ude4e\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f64e-1f3fe-200d-2640-fe0f","native":"\ud83d\ude4e\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f64e-1f3ff-200d-2640-fe0f","native":"\ud83d\ude4e\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"no_good":{"id":"no_good","name":"Person Gesturing No","keywords":["good","decline"],"skins":[{"unified":"1f645","native":"\ud83d\ude45"},{"unified":"1f645-1f3fb","native":"\ud83d\ude45\ud83c\udffb"},{"unified":"1f645-1f3fc","native":"\ud83d\ude45\ud83c\udffc"},{"unified":"1f645-1f3fd","native":"\ud83d\ude45\ud83c\udffd"},{"unified":"1f645-1f3fe","native":"\ud83d\ude45\ud83c\udffe"},{"unified":"1f645-1f3ff","native":"\ud83d\ude45\ud83c\udfff"}],"version":1},"man-gesturing-no":{"id":"man-gesturing-no","name":"Man Gesturing No","keywords":["gesturing-no","male","boy","nope"],"skins":[{"unified":"1f645-200d-2642-fe0f","native":"\ud83d\ude45\u200d\u2642\ufe0f"},{"unified":"1f645-1f3fb-200d-2642-fe0f","native":"\ud83d\ude45\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f645-1f3fc-200d-2642-fe0f","native":"\ud83d\ude45\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f645-1f3fd-200d-2642-fe0f","native":"\ud83d\ude45\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f645-1f3fe-200d-2642-fe0f","native":"\ud83d\ude45\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f645-1f3ff-200d-2642-fe0f","native":"\ud83d\ude45\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-gesturing-no":{"id":"woman-gesturing-no","name":"Woman Gesturing No","keywords":["gesturing-no","female","girl","nope"],"skins":[{"unified":"1f645-200d-2640-fe0f","native":"\ud83d\ude45\u200d\u2640\ufe0f"},{"unified":"1f645-1f3fb-200d-2640-fe0f","native":"\ud83d\ude45\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f645-1f3fc-200d-2640-fe0f","native":"\ud83d\ude45\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f645-1f3fd-200d-2640-fe0f","native":"\ud83d\ude45\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f645-1f3fe-200d-2640-fe0f","native":"\ud83d\ude45\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f645-1f3ff-200d-2640-fe0f","native":"\ud83d\ude45\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"ok_woman":{"id":"ok_woman","name":"Person Gesturing Ok","keywords":["woman","agree"],"skins":[{"unified":"1f646","native":"\ud83d\ude46"},{"unified":"1f646-1f3fb","native":"\ud83d\ude46\ud83c\udffb"},{"unified":"1f646-1f3fc","native":"\ud83d\ude46\ud83c\udffc"},{"unified":"1f646-1f3fd","native":"\ud83d\ude46\ud83c\udffd"},{"unified":"1f646-1f3fe","native":"\ud83d\ude46\ud83c\udffe"},{"unified":"1f646-1f3ff","native":"\ud83d\ude46\ud83c\udfff"}],"version":1},"man-gesturing-ok":{"id":"man-gesturing-ok","name":"Man Gesturing Ok","keywords":["gesturing-ok","men","boy","male","blue","human"],"skins":[{"unified":"1f646-200d-2642-fe0f","native":"\ud83d\ude46\u200d\u2642\ufe0f"},{"unified":"1f646-1f3fb-200d-2642-fe0f","native":"\ud83d\ude46\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f646-1f3fc-200d-2642-fe0f","native":"\ud83d\ude46\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f646-1f3fd-200d-2642-fe0f","native":"\ud83d\ude46\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f646-1f3fe-200d-2642-fe0f","native":"\ud83d\ude46\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f646-1f3ff-200d-2642-fe0f","native":"\ud83d\ude46\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-gesturing-ok":{"id":"woman-gesturing-ok","name":"Woman Gesturing Ok","keywords":["gesturing-ok","women","girl","female","pink","human"],"skins":[{"unified":"1f646-200d-2640-fe0f","native":"\ud83d\ude46\u200d\u2640\ufe0f"},{"unified":"1f646-1f3fb-200d-2640-fe0f","native":"\ud83d\ude46\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f646-1f3fc-200d-2640-fe0f","native":"\ud83d\ude46\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f646-1f3fd-200d-2640-fe0f","native":"\ud83d\ude46\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f646-1f3fe-200d-2640-fe0f","native":"\ud83d\ude46\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f646-1f3ff-200d-2640-fe0f","native":"\ud83d\ude46\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"information_desk_person":{"id":"information_desk_person","name":"Person Tipping Hand","keywords":["information","desk"],"skins":[{"unified":"1f481","native":"\ud83d\udc81"},{"unified":"1f481-1f3fb","native":"\ud83d\udc81\ud83c\udffb"},{"unified":"1f481-1f3fc","native":"\ud83d\udc81\ud83c\udffc"},{"unified":"1f481-1f3fd","native":"\ud83d\udc81\ud83c\udffd"},{"unified":"1f481-1f3fe","native":"\ud83d\udc81\ud83c\udffe"},{"unified":"1f481-1f3ff","native":"\ud83d\udc81\ud83c\udfff"}],"version":1},"man-tipping-hand":{"id":"man-tipping-hand","name":"Man Tipping Hand","keywords":["tipping-hand","male","boy","human","information"],"skins":[{"unified":"1f481-200d-2642-fe0f","native":"\ud83d\udc81\u200d\u2642\ufe0f"},{"unified":"1f481-1f3fb-200d-2642-fe0f","native":"\ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f481-1f3fc-200d-2642-fe0f","native":"\ud83d\udc81\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f481-1f3fd-200d-2642-fe0f","native":"\ud83d\udc81\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f481-1f3fe-200d-2642-fe0f","native":"\ud83d\udc81\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f481-1f3ff-200d-2642-fe0f","native":"\ud83d\udc81\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-tipping-hand":{"id":"woman-tipping-hand","name":"Woman Tipping Hand","keywords":["tipping-hand","female","girl","human","information"],"skins":[{"unified":"1f481-200d-2640-fe0f","native":"\ud83d\udc81\u200d\u2640\ufe0f"},{"unified":"1f481-1f3fb-200d-2640-fe0f","native":"\ud83d\udc81\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f481-1f3fc-200d-2640-fe0f","native":"\ud83d\udc81\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f481-1f3fd-200d-2640-fe0f","native":"\ud83d\udc81\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f481-1f3fe-200d-2640-fe0f","native":"\ud83d\udc81\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f481-1f3ff-200d-2640-fe0f","native":"\ud83d\udc81\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"raising_hand":{"id":"raising_hand","name":"Person Raising Hand","keywords":["question"],"skins":[{"unified":"1f64b","native":"\ud83d\ude4b"},{"unified":"1f64b-1f3fb","native":"\ud83d\ude4b\ud83c\udffb"},{"unified":"1f64b-1f3fc","native":"\ud83d\ude4b\ud83c\udffc"},{"unified":"1f64b-1f3fd","native":"\ud83d\ude4b\ud83c\udffd"},{"unified":"1f64b-1f3fe","native":"\ud83d\ude4b\ud83c\udffe"},{"unified":"1f64b-1f3ff","native":"\ud83d\ude4b\ud83c\udfff"}],"version":1},"man-raising-hand":{"id":"man-raising-hand","name":"Man Raising Hand","keywords":["raising-hand","male","boy"],"skins":[{"unified":"1f64b-200d-2642-fe0f","native":"\ud83d\ude4b\u200d\u2642\ufe0f"},{"unified":"1f64b-1f3fb-200d-2642-fe0f","native":"\ud83d\ude4b\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f64b-1f3fc-200d-2642-fe0f","native":"\ud83d\ude4b\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f64b-1f3fd-200d-2642-fe0f","native":"\ud83d\ude4b\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f64b-1f3fe-200d-2642-fe0f","native":"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f64b-1f3ff-200d-2642-fe0f","native":"\ud83d\ude4b\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-raising-hand":{"id":"woman-raising-hand","name":"Woman Raising Hand","keywords":["raising-hand","female","girl"],"skins":[{"unified":"1f64b-200d-2640-fe0f","native":"\ud83d\ude4b\u200d\u2640\ufe0f"},{"unified":"1f64b-1f3fb-200d-2640-fe0f","native":"\ud83d\ude4b\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f64b-1f3fc-200d-2640-fe0f","native":"\ud83d\ude4b\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f64b-1f3fd-200d-2640-fe0f","native":"\ud83d\ude4b\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f64b-1f3fe-200d-2640-fe0f","native":"\ud83d\ude4b\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f64b-1f3ff-200d-2640-fe0f","native":"\ud83d\ude4b\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"deaf_person":{"id":"deaf_person","name":"Deaf Person","keywords":["accessibility"],"skins":[{"unified":"1f9cf","native":"\ud83e\uddcf"},{"unified":"1f9cf-1f3fb","native":"\ud83e\uddcf\ud83c\udffb"},{"unified":"1f9cf-1f3fc","native":"\ud83e\uddcf\ud83c\udffc"},{"unified":"1f9cf-1f3fd","native":"\ud83e\uddcf\ud83c\udffd"},{"unified":"1f9cf-1f3fe","native":"\ud83e\uddcf\ud83c\udffe"},{"unified":"1f9cf-1f3ff","native":"\ud83e\uddcf\ud83c\udfff"}],"version":12},"deaf_man":{"id":"deaf_man","name":"Deaf Man","keywords":["accessibility"],"skins":[{"unified":"1f9cf-200d-2642-fe0f","native":"\ud83e\uddcf\u200d\u2642\ufe0f"},{"unified":"1f9cf-1f3fb-200d-2642-fe0f","native":"\ud83e\uddcf\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9cf-1f3fc-200d-2642-fe0f","native":"\ud83e\uddcf\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9cf-1f3fd-200d-2642-fe0f","native":"\ud83e\uddcf\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9cf-1f3fe-200d-2642-fe0f","native":"\ud83e\uddcf\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9cf-1f3ff-200d-2642-fe0f","native":"\ud83e\uddcf\ud83c\udfff\u200d\u2642\ufe0f"}],"version":12},"deaf_woman":{"id":"deaf_woman","name":"Deaf Woman","keywords":["accessibility"],"skins":[{"unified":"1f9cf-200d-2640-fe0f","native":"\ud83e\uddcf\u200d\u2640\ufe0f"},{"unified":"1f9cf-1f3fb-200d-2640-fe0f","native":"\ud83e\uddcf\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9cf-1f3fc-200d-2640-fe0f","native":"\ud83e\uddcf\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9cf-1f3fd-200d-2640-fe0f","native":"\ud83e\uddcf\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9cf-1f3fe-200d-2640-fe0f","native":"\ud83e\uddcf\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9cf-1f3ff-200d-2640-fe0f","native":"\ud83e\uddcf\ud83c\udfff\u200d\u2640\ufe0f"}],"version":12},"bow":{"id":"bow","name":"Person Bowing","keywords":["bow","respectiful"],"skins":[{"unified":"1f647","native":"\ud83d\ude47"},{"unified":"1f647-1f3fb","native":"\ud83d\ude47\ud83c\udffb"},{"unified":"1f647-1f3fc","native":"\ud83d\ude47\ud83c\udffc"},{"unified":"1f647-1f3fd","native":"\ud83d\ude47\ud83c\udffd"},{"unified":"1f647-1f3fe","native":"\ud83d\ude47\ud83c\udffe"},{"unified":"1f647-1f3ff","native":"\ud83d\ude47\ud83c\udfff"}],"version":1},"man-bowing":{"id":"man-bowing","name":"Man Bowing","keywords":["male","boy"],"skins":[{"unified":"1f647-200d-2642-fe0f","native":"\ud83d\ude47\u200d\u2642\ufe0f"},{"unified":"1f647-1f3fb-200d-2642-fe0f","native":"\ud83d\ude47\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f647-1f3fc-200d-2642-fe0f","native":"\ud83d\ude47\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f647-1f3fd-200d-2642-fe0f","native":"\ud83d\ude47\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f647-1f3fe-200d-2642-fe0f","native":"\ud83d\ude47\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f647-1f3ff-200d-2642-fe0f","native":"\ud83d\ude47\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-bowing":{"id":"woman-bowing","name":"Woman Bowing","keywords":["female","girl"],"skins":[{"unified":"1f647-200d-2640-fe0f","native":"\ud83d\ude47\u200d\u2640\ufe0f"},{"unified":"1f647-1f3fb-200d-2640-fe0f","native":"\ud83d\ude47\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f647-1f3fc-200d-2640-fe0f","native":"\ud83d\ude47\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f647-1f3fd-200d-2640-fe0f","native":"\ud83d\ude47\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f647-1f3fe-200d-2640-fe0f","native":"\ud83d\ude47\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f647-1f3ff-200d-2640-fe0f","native":"\ud83d\ude47\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"face_palm":{"id":"face_palm","name":"Face Palm","keywords":["person","facepalming","disappointed"],"skins":[{"unified":"1f926","native":"\ud83e\udd26"},{"unified":"1f926-1f3fb","native":"\ud83e\udd26\ud83c\udffb"},{"unified":"1f926-1f3fc","native":"\ud83e\udd26\ud83c\udffc"},{"unified":"1f926-1f3fd","native":"\ud83e\udd26\ud83c\udffd"},{"unified":"1f926-1f3fe","native":"\ud83e\udd26\ud83c\udffe"},{"unified":"1f926-1f3ff","native":"\ud83e\udd26\ud83c\udfff"}],"version":3},"man-facepalming":{"id":"man-facepalming","name":"Man Facepalming","keywords":["male","boy","disbelief"],"skins":[{"unified":"1f926-200d-2642-fe0f","native":"\ud83e\udd26\u200d\u2642\ufe0f"},{"unified":"1f926-1f3fb-200d-2642-fe0f","native":"\ud83e\udd26\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f926-1f3fc-200d-2642-fe0f","native":"\ud83e\udd26\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f926-1f3fd-200d-2642-fe0f","native":"\ud83e\udd26\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f926-1f3fe-200d-2642-fe0f","native":"\ud83e\udd26\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f926-1f3ff-200d-2642-fe0f","native":"\ud83e\udd26\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-facepalming":{"id":"woman-facepalming","name":"Woman Facepalming","keywords":["female","girl","disbelief"],"skins":[{"unified":"1f926-200d-2640-fe0f","native":"\ud83e\udd26\u200d\u2640\ufe0f"},{"unified":"1f926-1f3fb-200d-2640-fe0f","native":"\ud83e\udd26\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f926-1f3fc-200d-2640-fe0f","native":"\ud83e\udd26\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f926-1f3fd-200d-2640-fe0f","native":"\ud83e\udd26\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f926-1f3fe-200d-2640-fe0f","native":"\ud83e\udd26\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f926-1f3ff-200d-2640-fe0f","native":"\ud83e\udd26\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"shrug":{"id":"shrug","name":"Shrug","keywords":["person","shrugging","regardless"],"skins":[{"unified":"1f937","native":"\ud83e\udd37"},{"unified":"1f937-1f3fb","native":"\ud83e\udd37\ud83c\udffb"},{"unified":"1f937-1f3fc","native":"\ud83e\udd37\ud83c\udffc"},{"unified":"1f937-1f3fd","native":"\ud83e\udd37\ud83c\udffd"},{"unified":"1f937-1f3fe","native":"\ud83e\udd37\ud83c\udffe"},{"unified":"1f937-1f3ff","native":"\ud83e\udd37\ud83c\udfff"}],"version":3},"man-shrugging":{"id":"man-shrugging","name":"Man Shrugging","keywords":["male","boy","confused","indifferent","doubt"],"skins":[{"unified":"1f937-200d-2642-fe0f","native":"\ud83e\udd37\u200d\u2642\ufe0f"},{"unified":"1f937-1f3fb-200d-2642-fe0f","native":"\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f937-1f3fc-200d-2642-fe0f","native":"\ud83e\udd37\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f937-1f3fd-200d-2642-fe0f","native":"\ud83e\udd37\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f937-1f3fe-200d-2642-fe0f","native":"\ud83e\udd37\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f937-1f3ff-200d-2642-fe0f","native":"\ud83e\udd37\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-shrugging":{"id":"woman-shrugging","name":"Woman Shrugging","keywords":["female","girl","confused","indifferent","doubt"],"skins":[{"unified":"1f937-200d-2640-fe0f","native":"\ud83e\udd37\u200d\u2640\ufe0f"},{"unified":"1f937-1f3fb-200d-2640-fe0f","native":"\ud83e\udd37\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f937-1f3fc-200d-2640-fe0f","native":"\ud83e\udd37\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f937-1f3fd-200d-2640-fe0f","native":"\ud83e\udd37\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f937-1f3fe-200d-2640-fe0f","native":"\ud83e\udd37\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f937-1f3ff-200d-2640-fe0f","native":"\ud83e\udd37\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"health_worker":{"id":"health_worker","name":"Health Worker","keywords":["hospital"],"skins":[{"unified":"1f9d1-200d-2695-fe0f","native":"\ud83e\uddd1\u200d\u2695\ufe0f"},{"unified":"1f9d1-1f3fb-200d-2695-fe0f","native":"\ud83e\uddd1\ud83c\udffb\u200d\u2695\ufe0f"},{"unified":"1f9d1-1f3fc-200d-2695-fe0f","native":"\ud83e\uddd1\ud83c\udffc\u200d\u2695\ufe0f"},{"unified":"1f9d1-1f3fd-200d-2695-fe0f","native":"\ud83e\uddd1\ud83c\udffd\u200d\u2695\ufe0f"},{"unified":"1f9d1-1f3fe-200d-2695-fe0f","native":"\ud83e\uddd1\ud83c\udffe\u200d\u2695\ufe0f"},{"unified":"1f9d1-1f3ff-200d-2695-fe0f","native":"\ud83e\uddd1\ud83c\udfff\u200d\u2695\ufe0f"}],"version":12.1},"male-doctor":{"id":"male-doctor","name":"Man Health Worker","keywords":["male","doctor","nurse","therapist","healthcare","human"],"skins":[{"unified":"1f468-200d-2695-fe0f","native":"\ud83d\udc68\u200d\u2695\ufe0f"},{"unified":"1f468-1f3fb-200d-2695-fe0f","native":"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"},{"unified":"1f468-1f3fc-200d-2695-fe0f","native":"\ud83d\udc68\ud83c\udffc\u200d\u2695\ufe0f"},{"unified":"1f468-1f3fd-200d-2695-fe0f","native":"\ud83d\udc68\ud83c\udffd\u200d\u2695\ufe0f"},{"unified":"1f468-1f3fe-200d-2695-fe0f","native":"\ud83d\udc68\ud83c\udffe\u200d\u2695\ufe0f"},{"unified":"1f468-1f3ff-200d-2695-fe0f","native":"\ud83d\udc68\ud83c\udfff\u200d\u2695\ufe0f"}],"version":4},"female-doctor":{"id":"female-doctor","name":"Woman Health Worker","keywords":["female","doctor","nurse","therapist","healthcare","human"],"skins":[{"unified":"1f469-200d-2695-fe0f","native":"\ud83d\udc69\u200d\u2695\ufe0f"},{"unified":"1f469-1f3fb-200d-2695-fe0f","native":"\ud83d\udc69\ud83c\udffb\u200d\u2695\ufe0f"},{"unified":"1f469-1f3fc-200d-2695-fe0f","native":"\ud83d\udc69\ud83c\udffc\u200d\u2695\ufe0f"},{"unified":"1f469-1f3fd-200d-2695-fe0f","native":"\ud83d\udc69\ud83c\udffd\u200d\u2695\ufe0f"},{"unified":"1f469-1f3fe-200d-2695-fe0f","native":"\ud83d\udc69\ud83c\udffe\u200d\u2695\ufe0f"},{"unified":"1f469-1f3ff-200d-2695-fe0f","native":"\ud83d\udc69\ud83c\udfff\u200d\u2695\ufe0f"}],"version":4},"student":{"id":"student","name":"Student","keywords":["learn"],"skins":[{"unified":"1f9d1-200d-1f393","native":"\ud83e\uddd1\u200d\ud83c\udf93"},{"unified":"1f9d1-1f3fb-200d-1f393","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udf93"},{"unified":"1f9d1-1f3fc-200d-1f393","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udf93"},{"unified":"1f9d1-1f3fd-200d-1f393","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udf93"},{"unified":"1f9d1-1f3fe-200d-1f393","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udf93"},{"unified":"1f9d1-1f3ff-200d-1f393","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udf93"}],"version":12.1},"male-student":{"id":"male-student","name":"Man Student","keywords":["male","graduate","human"],"skins":[{"unified":"1f468-200d-1f393","native":"\ud83d\udc68\u200d\ud83c\udf93"},{"unified":"1f468-1f3fb-200d-1f393","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"},{"unified":"1f468-1f3fc-200d-1f393","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udf93"},{"unified":"1f468-1f3fd-200d-1f393","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"},{"unified":"1f468-1f3fe-200d-1f393","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93"},{"unified":"1f468-1f3ff-200d-1f393","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udf93"}],"version":4},"female-student":{"id":"female-student","name":"Woman Student","keywords":["female","graduate","human"],"skins":[{"unified":"1f469-200d-1f393","native":"\ud83d\udc69\u200d\ud83c\udf93"},{"unified":"1f469-1f3fb-200d-1f393","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf93"},{"unified":"1f469-1f3fc-200d-1f393","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udf93"},{"unified":"1f469-1f3fd-200d-1f393","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"},{"unified":"1f469-1f3fe-200d-1f393","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93"},{"unified":"1f469-1f3ff-200d-1f393","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udf93"}],"version":4},"teacher":{"id":"teacher","name":"Teacher","keywords":["professor"],"skins":[{"unified":"1f9d1-200d-1f3eb","native":"\ud83e\uddd1\u200d\ud83c\udfeb"},{"unified":"1f9d1-1f3fb-200d-1f3eb","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udfeb"},{"unified":"1f9d1-1f3fc-200d-1f3eb","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udfeb"},{"unified":"1f9d1-1f3fd-200d-1f3eb","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udfeb"},{"unified":"1f9d1-1f3fe-200d-1f3eb","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udfeb"},{"unified":"1f9d1-1f3ff-200d-1f3eb","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udfeb"}],"version":12.1},"male-teacher":{"id":"male-teacher","name":"Man Teacher","keywords":["male","instructor","professor","human"],"skins":[{"unified":"1f468-200d-1f3eb","native":"\ud83d\udc68\u200d\ud83c\udfeb"},{"unified":"1f468-1f3fb-200d-1f3eb","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfeb"},{"unified":"1f468-1f3fc-200d-1f3eb","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfeb"},{"unified":"1f468-1f3fd-200d-1f3eb","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfeb"},{"unified":"1f468-1f3fe-200d-1f3eb","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfeb"},{"unified":"1f468-1f3ff-200d-1f3eb","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfeb"}],"version":4},"female-teacher":{"id":"female-teacher","name":"Woman Teacher","keywords":["female","instructor","professor","human"],"skins":[{"unified":"1f469-200d-1f3eb","native":"\ud83d\udc69\u200d\ud83c\udfeb"},{"unified":"1f469-1f3fb-200d-1f3eb","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfeb"},{"unified":"1f469-1f3fc-200d-1f3eb","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfeb"},{"unified":"1f469-1f3fd-200d-1f3eb","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfeb"},{"unified":"1f469-1f3fe-200d-1f3eb","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfeb"},{"unified":"1f469-1f3ff-200d-1f3eb","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfeb"}],"version":4},"judge":{"id":"judge","name":"Judge","keywords":["law"],"skins":[{"unified":"1f9d1-200d-2696-fe0f","native":"\ud83e\uddd1\u200d\u2696\ufe0f"},{"unified":"1f9d1-1f3fb-200d-2696-fe0f","native":"\ud83e\uddd1\ud83c\udffb\u200d\u2696\ufe0f"},{"unified":"1f9d1-1f3fc-200d-2696-fe0f","native":"\ud83e\uddd1\ud83c\udffc\u200d\u2696\ufe0f"},{"unified":"1f9d1-1f3fd-200d-2696-fe0f","native":"\ud83e\uddd1\ud83c\udffd\u200d\u2696\ufe0f"},{"unified":"1f9d1-1f3fe-200d-2696-fe0f","native":"\ud83e\uddd1\ud83c\udffe\u200d\u2696\ufe0f"},{"unified":"1f9d1-1f3ff-200d-2696-fe0f","native":"\ud83e\uddd1\ud83c\udfff\u200d\u2696\ufe0f"}],"version":12.1},"male-judge":{"id":"male-judge","name":"Man Judge","keywords":["male","justice","court","human"],"skins":[{"unified":"1f468-200d-2696-fe0f","native":"\ud83d\udc68\u200d\u2696\ufe0f"},{"unified":"1f468-1f3fb-200d-2696-fe0f","native":"\ud83d\udc68\ud83c\udffb\u200d\u2696\ufe0f"},{"unified":"1f468-1f3fc-200d-2696-fe0f","native":"\ud83d\udc68\ud83c\udffc\u200d\u2696\ufe0f"},{"unified":"1f468-1f3fd-200d-2696-fe0f","native":"\ud83d\udc68\ud83c\udffd\u200d\u2696\ufe0f"},{"unified":"1f468-1f3fe-200d-2696-fe0f","native":"\ud83d\udc68\ud83c\udffe\u200d\u2696\ufe0f"},{"unified":"1f468-1f3ff-200d-2696-fe0f","native":"\ud83d\udc68\ud83c\udfff\u200d\u2696\ufe0f"}],"version":4},"female-judge":{"id":"female-judge","name":"Woman Judge","keywords":["female","justice","court","human"],"skins":[{"unified":"1f469-200d-2696-fe0f","native":"\ud83d\udc69\u200d\u2696\ufe0f"},{"unified":"1f469-1f3fb-200d-2696-fe0f","native":"\ud83d\udc69\ud83c\udffb\u200d\u2696\ufe0f"},{"unified":"1f469-1f3fc-200d-2696-fe0f","native":"\ud83d\udc69\ud83c\udffc\u200d\u2696\ufe0f"},{"unified":"1f469-1f3fd-200d-2696-fe0f","native":"\ud83d\udc69\ud83c\udffd\u200d\u2696\ufe0f"},{"unified":"1f469-1f3fe-200d-2696-fe0f","native":"\ud83d\udc69\ud83c\udffe\u200d\u2696\ufe0f"},{"unified":"1f469-1f3ff-200d-2696-fe0f","native":"\ud83d\udc69\ud83c\udfff\u200d\u2696\ufe0f"}],"version":4},"farmer":{"id":"farmer","name":"Farmer","keywords":["crops"],"skins":[{"unified":"1f9d1-200d-1f33e","native":"\ud83e\uddd1\u200d\ud83c\udf3e"},{"unified":"1f9d1-1f3fb-200d-1f33e","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udf3e"},{"unified":"1f9d1-1f3fc-200d-1f33e","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udf3e"},{"unified":"1f9d1-1f3fd-200d-1f33e","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udf3e"},{"unified":"1f9d1-1f3fe-200d-1f33e","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udf3e"},{"unified":"1f9d1-1f3ff-200d-1f33e","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udf3e"}],"version":12.1},"male-farmer":{"id":"male-farmer","name":"Man Farmer","keywords":["male","rancher","gardener","human"],"skins":[{"unified":"1f468-200d-1f33e","native":"\ud83d\udc68\u200d\ud83c\udf3e"},{"unified":"1f468-1f3fb-200d-1f33e","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf3e"},{"unified":"1f468-1f3fc-200d-1f33e","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udf3e"},{"unified":"1f468-1f3fd-200d-1f33e","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf3e"},{"unified":"1f468-1f3fe-200d-1f33e","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf3e"},{"unified":"1f468-1f3ff-200d-1f33e","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udf3e"}],"version":4},"female-farmer":{"id":"female-farmer","name":"Woman Farmer","keywords":["female","rancher","gardener","human"],"skins":[{"unified":"1f469-200d-1f33e","native":"\ud83d\udc69\u200d\ud83c\udf3e"},{"unified":"1f469-1f3fb-200d-1f33e","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf3e"},{"unified":"1f469-1f3fc-200d-1f33e","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udf3e"},{"unified":"1f469-1f3fd-200d-1f33e","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf3e"},{"unified":"1f469-1f3fe-200d-1f33e","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf3e"},{"unified":"1f469-1f3ff-200d-1f33e","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udf3e"}],"version":4},"cook":{"id":"cook","name":"Cook","keywords":["food","kitchen","culinary"],"skins":[{"unified":"1f9d1-200d-1f373","native":"\ud83e\uddd1\u200d\ud83c\udf73"},{"unified":"1f9d1-1f3fb-200d-1f373","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udf73"},{"unified":"1f9d1-1f3fc-200d-1f373","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udf73"},{"unified":"1f9d1-1f3fd-200d-1f373","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udf73"},{"unified":"1f9d1-1f3fe-200d-1f373","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udf73"},{"unified":"1f9d1-1f3ff-200d-1f373","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udf73"}],"version":12.1},"male-cook":{"id":"male-cook","name":"Man Cook","keywords":["male","chef","human"],"skins":[{"unified":"1f468-200d-1f373","native":"\ud83d\udc68\u200d\ud83c\udf73"},{"unified":"1f468-1f3fb-200d-1f373","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf73"},{"unified":"1f468-1f3fc-200d-1f373","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udf73"},{"unified":"1f468-1f3fd-200d-1f373","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf73"},{"unified":"1f468-1f3fe-200d-1f373","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf73"},{"unified":"1f468-1f3ff-200d-1f373","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udf73"}],"version":4},"female-cook":{"id":"female-cook","name":"Woman Cook","keywords":["female","chef","human"],"skins":[{"unified":"1f469-200d-1f373","native":"\ud83d\udc69\u200d\ud83c\udf73"},{"unified":"1f469-1f3fb-200d-1f373","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf73"},{"unified":"1f469-1f3fc-200d-1f373","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udf73"},{"unified":"1f469-1f3fd-200d-1f373","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73"},{"unified":"1f469-1f3fe-200d-1f373","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf73"},{"unified":"1f469-1f3ff-200d-1f373","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udf73"}],"version":4},"mechanic":{"id":"mechanic","name":"Mechanic","keywords":["worker","technician"],"skins":[{"unified":"1f9d1-200d-1f527","native":"\ud83e\uddd1\u200d\ud83d\udd27"},{"unified":"1f9d1-1f3fb-200d-1f527","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udd27"},{"unified":"1f9d1-1f3fc-200d-1f527","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83d\udd27"},{"unified":"1f9d1-1f3fd-200d-1f527","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd27"},{"unified":"1f9d1-1f3fe-200d-1f527","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83d\udd27"},{"unified":"1f9d1-1f3ff-200d-1f527","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83d\udd27"}],"version":12.1},"male-mechanic":{"id":"male-mechanic","name":"Man Mechanic","keywords":["male","plumber","human","wrench"],"skins":[{"unified":"1f468-200d-1f527","native":"\ud83d\udc68\u200d\ud83d\udd27"},{"unified":"1f468-1f3fb-200d-1f527","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udd27"},{"unified":"1f468-1f3fc-200d-1f527","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udd27"},{"unified":"1f468-1f3fd-200d-1f527","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udd27"},{"unified":"1f468-1f3fe-200d-1f527","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83d\udd27"},{"unified":"1f468-1f3ff-200d-1f527","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83d\udd27"}],"version":4},"female-mechanic":{"id":"female-mechanic","name":"Woman Mechanic","keywords":["female","plumber","human","wrench"],"skins":[{"unified":"1f469-200d-1f527","native":"\ud83d\udc69\u200d\ud83d\udd27"},{"unified":"1f469-1f3fb-200d-1f527","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83d\udd27"},{"unified":"1f469-1f3fc-200d-1f527","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udd27"},{"unified":"1f469-1f3fd-200d-1f527","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udd27"},{"unified":"1f469-1f3fe-200d-1f527","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83d\udd27"},{"unified":"1f469-1f3ff-200d-1f527","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83d\udd27"}],"version":4},"factory_worker":{"id":"factory_worker","name":"Factory Worker","keywords":["labor"],"skins":[{"unified":"1f9d1-200d-1f3ed","native":"\ud83e\uddd1\u200d\ud83c\udfed"},{"unified":"1f9d1-1f3fb-200d-1f3ed","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udfed"},{"unified":"1f9d1-1f3fc-200d-1f3ed","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udfed"},{"unified":"1f9d1-1f3fd-200d-1f3ed","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udfed"},{"unified":"1f9d1-1f3fe-200d-1f3ed","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udfed"},{"unified":"1f9d1-1f3ff-200d-1f3ed","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udfed"}],"version":12.1},"male-factory-worker":{"id":"male-factory-worker","name":"Man Factory Worker","keywords":["male","factory-worker","assembly","industrial","human"],"skins":[{"unified":"1f468-200d-1f3ed","native":"\ud83d\udc68\u200d\ud83c\udfed"},{"unified":"1f468-1f3fb-200d-1f3ed","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfed"},{"unified":"1f468-1f3fc-200d-1f3ed","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfed"},{"unified":"1f468-1f3fd-200d-1f3ed","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfed"},{"unified":"1f468-1f3fe-200d-1f3ed","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfed"},{"unified":"1f468-1f3ff-200d-1f3ed","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfed"}],"version":4},"female-factory-worker":{"id":"female-factory-worker","name":"Woman Factory Worker","keywords":["female","factory-worker","assembly","industrial","human"],"skins":[{"unified":"1f469-200d-1f3ed","native":"\ud83d\udc69\u200d\ud83c\udfed"},{"unified":"1f469-1f3fb-200d-1f3ed","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfed"},{"unified":"1f469-1f3fc-200d-1f3ed","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfed"},{"unified":"1f469-1f3fd-200d-1f3ed","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfed"},{"unified":"1f469-1f3fe-200d-1f3ed","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfed"},{"unified":"1f469-1f3ff-200d-1f3ed","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfed"}],"version":4},"office_worker":{"id":"office_worker","name":"Office Worker","keywords":["business"],"skins":[{"unified":"1f9d1-200d-1f4bc","native":"\ud83e\uddd1\u200d\ud83d\udcbc"},{"unified":"1f9d1-1f3fb-200d-1f4bc","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbc"},{"unified":"1f9d1-1f3fc-200d-1f4bc","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83d\udcbc"},{"unified":"1f9d1-1f3fd-200d-1f4bc","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udcbc"},{"unified":"1f9d1-1f3fe-200d-1f4bc","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83d\udcbc"},{"unified":"1f9d1-1f3ff-200d-1f4bc","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83d\udcbc"}],"version":12.1},"male-office-worker":{"id":"male-office-worker","name":"Man Office Worker","keywords":["male","office-worker","business","manager","human"],"skins":[{"unified":"1f468-200d-1f4bc","native":"\ud83d\udc68\u200d\ud83d\udcbc"},{"unified":"1f468-1f3fb-200d-1f4bc","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbc"},{"unified":"1f468-1f3fc-200d-1f4bc","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbc"},{"unified":"1f468-1f3fd-200d-1f4bc","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc"},{"unified":"1f468-1f3fe-200d-1f4bc","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc"},{"unified":"1f468-1f3ff-200d-1f4bc","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc"}],"version":4},"female-office-worker":{"id":"female-office-worker","name":"Woman Office Worker","keywords":["female","office-worker","business","manager","human"],"skins":[{"unified":"1f469-200d-1f4bc","native":"\ud83d\udc69\u200d\ud83d\udcbc"},{"unified":"1f469-1f3fb-200d-1f4bc","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbc"},{"unified":"1f469-1f3fc-200d-1f4bc","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbc"},{"unified":"1f469-1f3fd-200d-1f4bc","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc"},{"unified":"1f469-1f3fe-200d-1f4bc","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc"},{"unified":"1f469-1f3ff-200d-1f4bc","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc"}],"version":4},"scientist":{"id":"scientist","name":"Scientist","keywords":["chemistry"],"skins":[{"unified":"1f9d1-200d-1f52c","native":"\ud83e\uddd1\u200d\ud83d\udd2c"},{"unified":"1f9d1-1f3fb-200d-1f52c","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udd2c"},{"unified":"1f9d1-1f3fc-200d-1f52c","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83d\udd2c"},{"unified":"1f9d1-1f3fd-200d-1f52c","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2c"},{"unified":"1f9d1-1f3fe-200d-1f52c","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83d\udd2c"},{"unified":"1f9d1-1f3ff-200d-1f52c","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83d\udd2c"}],"version":12.1},"male-scientist":{"id":"male-scientist","name":"Man Scientist","keywords":["male","biologist","chemist","engineer","physicist","human"],"skins":[{"unified":"1f468-200d-1f52c","native":"\ud83d\udc68\u200d\ud83d\udd2c"},{"unified":"1f468-1f3fb-200d-1f52c","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udd2c"},{"unified":"1f468-1f3fc-200d-1f52c","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udd2c"},{"unified":"1f468-1f3fd-200d-1f52c","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udd2c"},{"unified":"1f468-1f3fe-200d-1f52c","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83d\udd2c"},{"unified":"1f468-1f3ff-200d-1f52c","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83d\udd2c"}],"version":4},"female-scientist":{"id":"female-scientist","name":"Woman Scientist","keywords":["female","biologist","chemist","engineer","physicist","human"],"skins":[{"unified":"1f469-200d-1f52c","native":"\ud83d\udc69\u200d\ud83d\udd2c"},{"unified":"1f469-1f3fb-200d-1f52c","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83d\udd2c"},{"unified":"1f469-1f3fc-200d-1f52c","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udd2c"},{"unified":"1f469-1f3fd-200d-1f52c","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udd2c"},{"unified":"1f469-1f3fe-200d-1f52c","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83d\udd2c"},{"unified":"1f469-1f3ff-200d-1f52c","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83d\udd2c"}],"version":4},"technologist":{"id":"technologist","name":"Technologist","keywords":["computer"],"skins":[{"unified":"1f9d1-200d-1f4bb","native":"\ud83e\uddd1\u200d\ud83d\udcbb"},{"unified":"1f9d1-1f3fb-200d-1f4bb","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb"},{"unified":"1f9d1-1f3fc-200d-1f4bb","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83d\udcbb"},{"unified":"1f9d1-1f3fd-200d-1f4bb","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udcbb"},{"unified":"1f9d1-1f3fe-200d-1f4bb","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83d\udcbb"},{"unified":"1f9d1-1f3ff-200d-1f4bb","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83d\udcbb"}],"version":12.1},"male-technologist":{"id":"male-technologist","name":"Man Technologist","keywords":["male","coder","developer","engineer","programmer","software","human","laptop","computer"],"skins":[{"unified":"1f468-200d-1f4bb","native":"\ud83d\udc68\u200d\ud83d\udcbb"},{"unified":"1f468-1f3fb-200d-1f4bb","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb"},{"unified":"1f468-1f3fc-200d-1f4bb","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb"},{"unified":"1f468-1f3fd-200d-1f4bb","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb"},{"unified":"1f468-1f3fe-200d-1f4bb","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbb"},{"unified":"1f468-1f3ff-200d-1f4bb","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbb"}],"version":4},"female-technologist":{"id":"female-technologist","name":"Woman Technologist","keywords":["female","coder","developer","engineer","programmer","software","human","laptop","computer"],"skins":[{"unified":"1f469-200d-1f4bb","native":"\ud83d\udc69\u200d\ud83d\udcbb"},{"unified":"1f469-1f3fb-200d-1f4bb","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb"},{"unified":"1f469-1f3fc-200d-1f4bb","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb"},{"unified":"1f469-1f3fd-200d-1f4bb","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb"},{"unified":"1f469-1f3fe-200d-1f4bb","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbb"},{"unified":"1f469-1f3ff-200d-1f4bb","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbb"}],"version":4},"singer":{"id":"singer","name":"Singer","keywords":["song","artist","performer"],"skins":[{"unified":"1f9d1-200d-1f3a4","native":"\ud83e\uddd1\u200d\ud83c\udfa4"},{"unified":"1f9d1-1f3fb-200d-1f3a4","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udfa4"},{"unified":"1f9d1-1f3fc-200d-1f3a4","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udfa4"},{"unified":"1f9d1-1f3fd-200d-1f3a4","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udfa4"},{"unified":"1f9d1-1f3fe-200d-1f3a4","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udfa4"},{"unified":"1f9d1-1f3ff-200d-1f3a4","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udfa4"}],"version":12.1},"male-singer":{"id":"male-singer","name":"Man Singer","keywords":["male","rockstar","entertainer","human"],"skins":[{"unified":"1f468-200d-1f3a4","native":"\ud83d\udc68\u200d\ud83c\udfa4"},{"unified":"1f468-1f3fb-200d-1f3a4","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfa4"},{"unified":"1f468-1f3fc-200d-1f3a4","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfa4"},{"unified":"1f468-1f3fd-200d-1f3a4","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfa4"},{"unified":"1f468-1f3fe-200d-1f3a4","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfa4"},{"unified":"1f468-1f3ff-200d-1f3a4","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfa4"}],"version":4},"female-singer":{"id":"female-singer","name":"Woman Singer","keywords":["female","rockstar","entertainer","human"],"skins":[{"unified":"1f469-200d-1f3a4","native":"\ud83d\udc69\u200d\ud83c\udfa4"},{"unified":"1f469-1f3fb-200d-1f3a4","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfa4"},{"unified":"1f469-1f3fc-200d-1f3a4","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfa4"},{"unified":"1f469-1f3fd-200d-1f3a4","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfa4"},{"unified":"1f469-1f3fe-200d-1f3a4","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfa4"},{"unified":"1f469-1f3ff-200d-1f3a4","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfa4"}],"version":4},"artist":{"id":"artist","name":"Artist","keywords":["painting","draw","creativity"],"skins":[{"unified":"1f9d1-200d-1f3a8","native":"\ud83e\uddd1\u200d\ud83c\udfa8"},{"unified":"1f9d1-1f3fb-200d-1f3a8","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udfa8"},{"unified":"1f9d1-1f3fc-200d-1f3a8","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udfa8"},{"unified":"1f9d1-1f3fd-200d-1f3a8","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udfa8"},{"unified":"1f9d1-1f3fe-200d-1f3a8","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udfa8"},{"unified":"1f9d1-1f3ff-200d-1f3a8","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udfa8"}],"version":12.1},"male-artist":{"id":"male-artist","name":"Man Artist","keywords":["male","painter","human"],"skins":[{"unified":"1f468-200d-1f3a8","native":"\ud83d\udc68\u200d\ud83c\udfa8"},{"unified":"1f468-1f3fb-200d-1f3a8","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfa8"},{"unified":"1f468-1f3fc-200d-1f3a8","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfa8"},{"unified":"1f468-1f3fd-200d-1f3a8","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfa8"},{"unified":"1f468-1f3fe-200d-1f3a8","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfa8"},{"unified":"1f468-1f3ff-200d-1f3a8","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfa8"}],"version":4},"female-artist":{"id":"female-artist","name":"Woman Artist","keywords":["female","painter","human"],"skins":[{"unified":"1f469-200d-1f3a8","native":"\ud83d\udc69\u200d\ud83c\udfa8"},{"unified":"1f469-1f3fb-200d-1f3a8","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfa8"},{"unified":"1f469-1f3fc-200d-1f3a8","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfa8"},{"unified":"1f469-1f3fd-200d-1f3a8","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfa8"},{"unified":"1f469-1f3fe-200d-1f3a8","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfa8"},{"unified":"1f469-1f3ff-200d-1f3a8","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfa8"}],"version":4},"pilot":{"id":"pilot","name":"Pilot","keywords":["fly","plane","airplane"],"skins":[{"unified":"1f9d1-200d-2708-fe0f","native":"\ud83e\uddd1\u200d\u2708\ufe0f"},{"unified":"1f9d1-1f3fb-200d-2708-fe0f","native":"\ud83e\uddd1\ud83c\udffb\u200d\u2708\ufe0f"},{"unified":"1f9d1-1f3fc-200d-2708-fe0f","native":"\ud83e\uddd1\ud83c\udffc\u200d\u2708\ufe0f"},{"unified":"1f9d1-1f3fd-200d-2708-fe0f","native":"\ud83e\uddd1\ud83c\udffd\u200d\u2708\ufe0f"},{"unified":"1f9d1-1f3fe-200d-2708-fe0f","native":"\ud83e\uddd1\ud83c\udffe\u200d\u2708\ufe0f"},{"unified":"1f9d1-1f3ff-200d-2708-fe0f","native":"\ud83e\uddd1\ud83c\udfff\u200d\u2708\ufe0f"}],"version":12.1},"male-pilot":{"id":"male-pilot","name":"Man Pilot","keywords":["male","aviator","plane","human"],"skins":[{"unified":"1f468-200d-2708-fe0f","native":"\ud83d\udc68\u200d\u2708\ufe0f"},{"unified":"1f468-1f3fb-200d-2708-fe0f","native":"\ud83d\udc68\ud83c\udffb\u200d\u2708\ufe0f"},{"unified":"1f468-1f3fc-200d-2708-fe0f","native":"\ud83d\udc68\ud83c\udffc\u200d\u2708\ufe0f"},{"unified":"1f468-1f3fd-200d-2708-fe0f","native":"\ud83d\udc68\ud83c\udffd\u200d\u2708\ufe0f"},{"unified":"1f468-1f3fe-200d-2708-fe0f","native":"\ud83d\udc68\ud83c\udffe\u200d\u2708\ufe0f"},{"unified":"1f468-1f3ff-200d-2708-fe0f","native":"\ud83d\udc68\ud83c\udfff\u200d\u2708\ufe0f"}],"version":4},"female-pilot":{"id":"female-pilot","name":"Woman Pilot","keywords":["female","aviator","plane","human"],"skins":[{"unified":"1f469-200d-2708-fe0f","native":"\ud83d\udc69\u200d\u2708\ufe0f"},{"unified":"1f469-1f3fb-200d-2708-fe0f","native":"\ud83d\udc69\ud83c\udffb\u200d\u2708\ufe0f"},{"unified":"1f469-1f3fc-200d-2708-fe0f","native":"\ud83d\udc69\ud83c\udffc\u200d\u2708\ufe0f"},{"unified":"1f469-1f3fd-200d-2708-fe0f","native":"\ud83d\udc69\ud83c\udffd\u200d\u2708\ufe0f"},{"unified":"1f469-1f3fe-200d-2708-fe0f","native":"\ud83d\udc69\ud83c\udffe\u200d\u2708\ufe0f"},{"unified":"1f469-1f3ff-200d-2708-fe0f","native":"\ud83d\udc69\ud83c\udfff\u200d\u2708\ufe0f"}],"version":4},"astronaut":{"id":"astronaut","name":"Astronaut","keywords":["outerspace"],"skins":[{"unified":"1f9d1-200d-1f680","native":"\ud83e\uddd1\u200d\ud83d\ude80"},{"unified":"1f9d1-1f3fb-200d-1f680","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\ude80"},{"unified":"1f9d1-1f3fc-200d-1f680","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83d\ude80"},{"unified":"1f9d1-1f3fd-200d-1f680","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\ude80"},{"unified":"1f9d1-1f3fe-200d-1f680","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83d\ude80"},{"unified":"1f9d1-1f3ff-200d-1f680","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83d\ude80"}],"version":12.1},"male-astronaut":{"id":"male-astronaut","name":"Man Astronaut","keywords":["male","space","rocket","human"],"skins":[{"unified":"1f468-200d-1f680","native":"\ud83d\udc68\u200d\ud83d\ude80"},{"unified":"1f468-1f3fb-200d-1f680","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83d\ude80"},{"unified":"1f468-1f3fc-200d-1f680","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83d\ude80"},{"unified":"1f468-1f3fd-200d-1f680","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83d\ude80"},{"unified":"1f468-1f3fe-200d-1f680","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83d\ude80"},{"unified":"1f468-1f3ff-200d-1f680","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83d\ude80"}],"version":4},"female-astronaut":{"id":"female-astronaut","name":"Woman Astronaut","keywords":["female","space","rocket","human"],"skins":[{"unified":"1f469-200d-1f680","native":"\ud83d\udc69\u200d\ud83d\ude80"},{"unified":"1f469-1f3fb-200d-1f680","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83d\ude80"},{"unified":"1f469-1f3fc-200d-1f680","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83d\ude80"},{"unified":"1f469-1f3fd-200d-1f680","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83d\ude80"},{"unified":"1f469-1f3fe-200d-1f680","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83d\ude80"},{"unified":"1f469-1f3ff-200d-1f680","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83d\ude80"}],"version":4},"firefighter":{"id":"firefighter","name":"Firefighter","keywords":["fire"],"skins":[{"unified":"1f9d1-200d-1f692","native":"\ud83e\uddd1\u200d\ud83d\ude92"},{"unified":"1f9d1-1f3fb-200d-1f692","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\ude92"},{"unified":"1f9d1-1f3fc-200d-1f692","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83d\ude92"},{"unified":"1f9d1-1f3fd-200d-1f692","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\ude92"},{"unified":"1f9d1-1f3fe-200d-1f692","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83d\ude92"},{"unified":"1f9d1-1f3ff-200d-1f692","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83d\ude92"}],"version":12.1},"male-firefighter":{"id":"male-firefighter","name":"Man Firefighter","keywords":["male","fireman","human"],"skins":[{"unified":"1f468-200d-1f692","native":"\ud83d\udc68\u200d\ud83d\ude92"},{"unified":"1f468-1f3fb-200d-1f692","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83d\ude92"},{"unified":"1f468-1f3fc-200d-1f692","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83d\ude92"},{"unified":"1f468-1f3fd-200d-1f692","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83d\ude92"},{"unified":"1f468-1f3fe-200d-1f692","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83d\ude92"},{"unified":"1f468-1f3ff-200d-1f692","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83d\ude92"}],"version":4},"female-firefighter":{"id":"female-firefighter","name":"Woman Firefighter","keywords":["female","fireman","human"],"skins":[{"unified":"1f469-200d-1f692","native":"\ud83d\udc69\u200d\ud83d\ude92"},{"unified":"1f469-1f3fb-200d-1f692","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83d\ude92"},{"unified":"1f469-1f3fc-200d-1f692","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83d\ude92"},{"unified":"1f469-1f3fd-200d-1f692","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83d\ude92"},{"unified":"1f469-1f3fe-200d-1f692","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83d\ude92"},{"unified":"1f469-1f3ff-200d-1f692","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83d\ude92"}],"version":4},"cop":{"id":"cop","name":"Police Officer","keywords":["cop"],"skins":[{"unified":"1f46e","native":"\ud83d\udc6e"},{"unified":"1f46e-1f3fb","native":"\ud83d\udc6e\ud83c\udffb"},{"unified":"1f46e-1f3fc","native":"\ud83d\udc6e\ud83c\udffc"},{"unified":"1f46e-1f3fd","native":"\ud83d\udc6e\ud83c\udffd"},{"unified":"1f46e-1f3fe","native":"\ud83d\udc6e\ud83c\udffe"},{"unified":"1f46e-1f3ff","native":"\ud83d\udc6e\ud83c\udfff"}],"version":1},"male-police-officer":{"id":"male-police-officer","name":"Man Police Officer","keywords":["male","police-officer","law","legal","enforcement","arrest","911"],"skins":[{"unified":"1f46e-200d-2642-fe0f","native":"\ud83d\udc6e\u200d\u2642\ufe0f"},{"unified":"1f46e-1f3fb-200d-2642-fe0f","native":"\ud83d\udc6e\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f46e-1f3fc-200d-2642-fe0f","native":"\ud83d\udc6e\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f46e-1f3fd-200d-2642-fe0f","native":"\ud83d\udc6e\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f46e-1f3fe-200d-2642-fe0f","native":"\ud83d\udc6e\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f46e-1f3ff-200d-2642-fe0f","native":"\ud83d\udc6e\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"female-police-officer":{"id":"female-police-officer","name":"Woman Police Officer","keywords":["female","police-officer","law","legal","enforcement","arrest","911"],"skins":[{"unified":"1f46e-200d-2640-fe0f","native":"\ud83d\udc6e\u200d\u2640\ufe0f"},{"unified":"1f46e-1f3fb-200d-2640-fe0f","native":"\ud83d\udc6e\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f46e-1f3fc-200d-2640-fe0f","native":"\ud83d\udc6e\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f46e-1f3fd-200d-2640-fe0f","native":"\ud83d\udc6e\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f46e-1f3fe-200d-2640-fe0f","native":"\ud83d\udc6e\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f46e-1f3ff-200d-2640-fe0f","native":"\ud83d\udc6e\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"sleuth_or_spy":{"id":"sleuth_or_spy","name":"Detective","keywords":["sleuth","or","spy","human"],"skins":[{"unified":"1f575-fe0f","native":"\ud83d\udd75\ufe0f"},{"unified":"1f575-1f3fb","native":"\ud83d\udd75\ud83c\udffb"},{"unified":"1f575-1f3fc","native":"\ud83d\udd75\ud83c\udffc"},{"unified":"1f575-1f3fd","native":"\ud83d\udd75\ud83c\udffd"},{"unified":"1f575-1f3fe","native":"\ud83d\udd75\ud83c\udffe"},{"unified":"1f575-1f3ff","native":"\ud83d\udd75\ud83c\udfff"}],"version":1},"male-detective":{"id":"male-detective","name":"Man Detective","keywords":["male","crime"],"skins":[{"unified":"1f575-fe0f-200d-2642-fe0f","native":"\ud83d\udd75\ufe0f\u200d\u2642\ufe0f"},{"unified":"1f575-1f3fb-200d-2642-fe0f","native":"\ud83d\udd75\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f575-1f3fc-200d-2642-fe0f","native":"\ud83d\udd75\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f575-1f3fd-200d-2642-fe0f","native":"\ud83d\udd75\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f575-1f3fe-200d-2642-fe0f","native":"\ud83d\udd75\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f575-1f3ff-200d-2642-fe0f","native":"\ud83d\udd75\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"female-detective":{"id":"female-detective","name":"Woman Detective","keywords":["female","human","spy"],"skins":[{"unified":"1f575-fe0f-200d-2640-fe0f","native":"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f"},{"unified":"1f575-1f3fb-200d-2640-fe0f","native":"\ud83d\udd75\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f575-1f3fc-200d-2640-fe0f","native":"\ud83d\udd75\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f575-1f3fd-200d-2640-fe0f","native":"\ud83d\udd75\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f575-1f3fe-200d-2640-fe0f","native":"\ud83d\udd75\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f575-1f3ff-200d-2640-fe0f","native":"\ud83d\udd75\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"guardsman":{"id":"guardsman","name":"Guard","keywords":["guardsman","protect"],"skins":[{"unified":"1f482","native":"\ud83d\udc82"},{"unified":"1f482-1f3fb","native":"\ud83d\udc82\ud83c\udffb"},{"unified":"1f482-1f3fc","native":"\ud83d\udc82\ud83c\udffc"},{"unified":"1f482-1f3fd","native":"\ud83d\udc82\ud83c\udffd"},{"unified":"1f482-1f3fe","native":"\ud83d\udc82\ud83c\udffe"},{"unified":"1f482-1f3ff","native":"\ud83d\udc82\ud83c\udfff"}],"version":1},"male-guard":{"id":"male-guard","name":"Man Guard","keywords":["male","uk","gb","british","guy","royal"],"skins":[{"unified":"1f482-200d-2642-fe0f","native":"\ud83d\udc82\u200d\u2642\ufe0f"},{"unified":"1f482-1f3fb-200d-2642-fe0f","native":"\ud83d\udc82\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f482-1f3fc-200d-2642-fe0f","native":"\ud83d\udc82\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f482-1f3fd-200d-2642-fe0f","native":"\ud83d\udc82\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f482-1f3fe-200d-2642-fe0f","native":"\ud83d\udc82\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f482-1f3ff-200d-2642-fe0f","native":"\ud83d\udc82\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"female-guard":{"id":"female-guard","name":"Woman Guard","keywords":["female","uk","gb","british","royal"],"skins":[{"unified":"1f482-200d-2640-fe0f","native":"\ud83d\udc82\u200d\u2640\ufe0f"},{"unified":"1f482-1f3fb-200d-2640-fe0f","native":"\ud83d\udc82\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f482-1f3fc-200d-2640-fe0f","native":"\ud83d\udc82\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f482-1f3fd-200d-2640-fe0f","native":"\ud83d\udc82\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f482-1f3fe-200d-2640-fe0f","native":"\ud83d\udc82\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f482-1f3ff-200d-2640-fe0f","native":"\ud83d\udc82\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"ninja":{"id":"ninja","name":"Ninja","keywords":["ninjutsu","skills","japanese"],"skins":[{"unified":"1f977","native":"\ud83e\udd77"},{"unified":"1f977-1f3fb","native":"\ud83e\udd77\ud83c\udffb"},{"unified":"1f977-1f3fc","native":"\ud83e\udd77\ud83c\udffc"},{"unified":"1f977-1f3fd","native":"\ud83e\udd77\ud83c\udffd"},{"unified":"1f977-1f3fe","native":"\ud83e\udd77\ud83c\udffe"},{"unified":"1f977-1f3ff","native":"\ud83e\udd77\ud83c\udfff"}],"version":13},"construction_worker":{"id":"construction_worker","name":"Construction Worker","keywords":["labor","build"],"skins":[{"unified":"1f477","native":"\ud83d\udc77"},{"unified":"1f477-1f3fb","native":"\ud83d\udc77\ud83c\udffb"},{"unified":"1f477-1f3fc","native":"\ud83d\udc77\ud83c\udffc"},{"unified":"1f477-1f3fd","native":"\ud83d\udc77\ud83c\udffd"},{"unified":"1f477-1f3fe","native":"\ud83d\udc77\ud83c\udffe"},{"unified":"1f477-1f3ff","native":"\ud83d\udc77\ud83c\udfff"}],"version":1},"male-construction-worker":{"id":"male-construction-worker","name":"Man Construction Worker","keywords":["male","construction-worker","human","wip","guy","build","labor"],"skins":[{"unified":"1f477-200d-2642-fe0f","native":"\ud83d\udc77\u200d\u2642\ufe0f"},{"unified":"1f477-1f3fb-200d-2642-fe0f","native":"\ud83d\udc77\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f477-1f3fc-200d-2642-fe0f","native":"\ud83d\udc77\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f477-1f3fd-200d-2642-fe0f","native":"\ud83d\udc77\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f477-1f3fe-200d-2642-fe0f","native":"\ud83d\udc77\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f477-1f3ff-200d-2642-fe0f","native":"\ud83d\udc77\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"female-construction-worker":{"id":"female-construction-worker","name":"Woman Construction Worker","keywords":["female","construction-worker","human","wip","build","labor"],"skins":[{"unified":"1f477-200d-2640-fe0f","native":"\ud83d\udc77\u200d\u2640\ufe0f"},{"unified":"1f477-1f3fb-200d-2640-fe0f","native":"\ud83d\udc77\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f477-1f3fc-200d-2640-fe0f","native":"\ud83d\udc77\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f477-1f3fd-200d-2640-fe0f","native":"\ud83d\udc77\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f477-1f3fe-200d-2640-fe0f","native":"\ud83d\udc77\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f477-1f3ff-200d-2640-fe0f","native":"\ud83d\udc77\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"person_with_crown":{"id":"person_with_crown","name":"Person with Crown","keywords":["royalty","power"],"skins":[{"unified":"1fac5","native":"\ud83e\udec5"},{"unified":"1fac5-1f3fb","native":"\ud83e\udec5\ud83c\udffb"},{"unified":"1fac5-1f3fc","native":"\ud83e\udec5\ud83c\udffc"},{"unified":"1fac5-1f3fd","native":"\ud83e\udec5\ud83c\udffd"},{"unified":"1fac5-1f3fe","native":"\ud83e\udec5\ud83c\udffe"},{"unified":"1fac5-1f3ff","native":"\ud83e\udec5\ud83c\udfff"}],"version":14},"prince":{"id":"prince","name":"Prince","keywords":["boy","man","male","crown","royal","king"],"skins":[{"unified":"1f934","native":"\ud83e\udd34"},{"unified":"1f934-1f3fb","native":"\ud83e\udd34\ud83c\udffb"},{"unified":"1f934-1f3fc","native":"\ud83e\udd34\ud83c\udffc"},{"unified":"1f934-1f3fd","native":"\ud83e\udd34\ud83c\udffd"},{"unified":"1f934-1f3fe","native":"\ud83e\udd34\ud83c\udffe"},{"unified":"1f934-1f3ff","native":"\ud83e\udd34\ud83c\udfff"}],"version":3},"princess":{"id":"princess","name":"Princess","keywords":["girl","woman","female","blond","crown","royal","queen"],"skins":[{"unified":"1f478","native":"\ud83d\udc78"},{"unified":"1f478-1f3fb","native":"\ud83d\udc78\ud83c\udffb"},{"unified":"1f478-1f3fc","native":"\ud83d\udc78\ud83c\udffc"},{"unified":"1f478-1f3fd","native":"\ud83d\udc78\ud83c\udffd"},{"unified":"1f478-1f3fe","native":"\ud83d\udc78\ud83c\udffe"},{"unified":"1f478-1f3ff","native":"\ud83d\udc78\ud83c\udfff"}],"version":1},"man_with_turban":{"id":"man_with_turban","name":"Man with Turban","keywords":["person","wearing","headdress"],"skins":[{"unified":"1f473","native":"\ud83d\udc73"},{"unified":"1f473-1f3fb","native":"\ud83d\udc73\ud83c\udffb"},{"unified":"1f473-1f3fc","native":"\ud83d\udc73\ud83c\udffc"},{"unified":"1f473-1f3fd","native":"\ud83d\udc73\ud83c\udffd"},{"unified":"1f473-1f3fe","native":"\ud83d\udc73\ud83c\udffe"},{"unified":"1f473-1f3ff","native":"\ud83d\udc73\ud83c\udfff"}],"version":1},"man-wearing-turban":{"id":"man-wearing-turban","name":"Man Wearing Turban","keywords":["wearing-turban","male","indian","hinduism","arabs"],"skins":[{"unified":"1f473-200d-2642-fe0f","native":"\ud83d\udc73\u200d\u2642\ufe0f"},{"unified":"1f473-1f3fb-200d-2642-fe0f","native":"\ud83d\udc73\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f473-1f3fc-200d-2642-fe0f","native":"\ud83d\udc73\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f473-1f3fd-200d-2642-fe0f","native":"\ud83d\udc73\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f473-1f3fe-200d-2642-fe0f","native":"\ud83d\udc73\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f473-1f3ff-200d-2642-fe0f","native":"\ud83d\udc73\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-wearing-turban":{"id":"woman-wearing-turban","name":"Woman Wearing Turban","keywords":["wearing-turban","female","indian","hinduism","arabs"],"skins":[{"unified":"1f473-200d-2640-fe0f","native":"\ud83d\udc73\u200d\u2640\ufe0f"},{"unified":"1f473-1f3fb-200d-2640-fe0f","native":"\ud83d\udc73\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f473-1f3fc-200d-2640-fe0f","native":"\ud83d\udc73\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f473-1f3fd-200d-2640-fe0f","native":"\ud83d\udc73\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f473-1f3fe-200d-2640-fe0f","native":"\ud83d\udc73\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f473-1f3ff-200d-2640-fe0f","native":"\ud83d\udc73\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"man_with_gua_pi_mao":{"id":"man_with_gua_pi_mao","name":"Man with Gua Pi Mao","keywords":["skullcap","male","boy","chinese"],"skins":[{"unified":"1f472","native":"\ud83d\udc72"},{"unified":"1f472-1f3fb","native":"\ud83d\udc72\ud83c\udffb"},{"unified":"1f472-1f3fc","native":"\ud83d\udc72\ud83c\udffc"},{"unified":"1f472-1f3fd","native":"\ud83d\udc72\ud83c\udffd"},{"unified":"1f472-1f3fe","native":"\ud83d\udc72\ud83c\udffe"},{"unified":"1f472-1f3ff","native":"\ud83d\udc72\ud83c\udfff"}],"version":1},"person_with_headscarf":{"id":"person_with_headscarf","name":"Woman with Headscarf","keywords":["person","female","hijab","mantilla","tichel"],"skins":[{"unified":"1f9d5","native":"\ud83e\uddd5"},{"unified":"1f9d5-1f3fb","native":"\ud83e\uddd5\ud83c\udffb"},{"unified":"1f9d5-1f3fc","native":"\ud83e\uddd5\ud83c\udffc"},{"unified":"1f9d5-1f3fd","native":"\ud83e\uddd5\ud83c\udffd"},{"unified":"1f9d5-1f3fe","native":"\ud83e\uddd5\ud83c\udffe"},{"unified":"1f9d5-1f3ff","native":"\ud83e\uddd5\ud83c\udfff"}],"version":5},"person_in_tuxedo":{"id":"person_in_tuxedo","name":"Man in Tuxedo","keywords":["person","couple","marriage","wedding","groom"],"skins":[{"unified":"1f935","native":"\ud83e\udd35"},{"unified":"1f935-1f3fb","native":"\ud83e\udd35\ud83c\udffb"},{"unified":"1f935-1f3fc","native":"\ud83e\udd35\ud83c\udffc"},{"unified":"1f935-1f3fd","native":"\ud83e\udd35\ud83c\udffd"},{"unified":"1f935-1f3fe","native":"\ud83e\udd35\ud83c\udffe"},{"unified":"1f935-1f3ff","native":"\ud83e\udd35\ud83c\udfff"}],"version":3},"man_in_tuxedo":{"id":"man_in_tuxedo","name":"Man in Tuxedo","keywords":["formal","fashion"],"skins":[{"unified":"1f935-200d-2642-fe0f","native":"\ud83e\udd35\u200d\u2642\ufe0f"},{"unified":"1f935-1f3fb-200d-2642-fe0f","native":"\ud83e\udd35\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f935-1f3fc-200d-2642-fe0f","native":"\ud83e\udd35\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f935-1f3fd-200d-2642-fe0f","native":"\ud83e\udd35\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f935-1f3fe-200d-2642-fe0f","native":"\ud83e\udd35\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f935-1f3ff-200d-2642-fe0f","native":"\ud83e\udd35\ud83c\udfff\u200d\u2642\ufe0f"}],"version":13},"woman_in_tuxedo":{"id":"woman_in_tuxedo","name":"Woman in Tuxedo","keywords":["formal","fashion"],"skins":[{"unified":"1f935-200d-2640-fe0f","native":"\ud83e\udd35\u200d\u2640\ufe0f"},{"unified":"1f935-1f3fb-200d-2640-fe0f","native":"\ud83e\udd35\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f935-1f3fc-200d-2640-fe0f","native":"\ud83e\udd35\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f935-1f3fd-200d-2640-fe0f","native":"\ud83e\udd35\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f935-1f3fe-200d-2640-fe0f","native":"\ud83e\udd35\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f935-1f3ff-200d-2640-fe0f","native":"\ud83e\udd35\ud83c\udfff\u200d\u2640\ufe0f"}],"version":13},"bride_with_veil":{"id":"bride_with_veil","name":"Bride with Veil","keywords":["couple","marriage","wedding","woman"],"skins":[{"unified":"1f470","native":"\ud83d\udc70"},{"unified":"1f470-1f3fb","native":"\ud83d\udc70\ud83c\udffb"},{"unified":"1f470-1f3fc","native":"\ud83d\udc70\ud83c\udffc"},{"unified":"1f470-1f3fd","native":"\ud83d\udc70\ud83c\udffd"},{"unified":"1f470-1f3fe","native":"\ud83d\udc70\ud83c\udffe"},{"unified":"1f470-1f3ff","native":"\ud83d\udc70\ud83c\udfff"}],"version":1},"man_with_veil":{"id":"man_with_veil","name":"Man with Veil","keywords":["wedding","marriage"],"skins":[{"unified":"1f470-200d-2642-fe0f","native":"\ud83d\udc70\u200d\u2642\ufe0f"},{"unified":"1f470-1f3fb-200d-2642-fe0f","native":"\ud83d\udc70\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f470-1f3fc-200d-2642-fe0f","native":"\ud83d\udc70\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f470-1f3fd-200d-2642-fe0f","native":"\ud83d\udc70\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f470-1f3fe-200d-2642-fe0f","native":"\ud83d\udc70\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f470-1f3ff-200d-2642-fe0f","native":"\ud83d\udc70\ud83c\udfff\u200d\u2642\ufe0f"}],"version":13},"woman_with_veil":{"id":"woman_with_veil","name":"Woman with Veil","keywords":["wedding","marriage"],"skins":[{"unified":"1f470-200d-2640-fe0f","native":"\ud83d\udc70\u200d\u2640\ufe0f"},{"unified":"1f470-1f3fb-200d-2640-fe0f","native":"\ud83d\udc70\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f470-1f3fc-200d-2640-fe0f","native":"\ud83d\udc70\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f470-1f3fd-200d-2640-fe0f","native":"\ud83d\udc70\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f470-1f3fe-200d-2640-fe0f","native":"\ud83d\udc70\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f470-1f3ff-200d-2640-fe0f","native":"\ud83d\udc70\ud83c\udfff\u200d\u2640\ufe0f"}],"version":13},"pregnant_woman":{"id":"pregnant_woman","name":"Pregnant Woman","keywords":["baby"],"skins":[{"unified":"1f930","native":"\ud83e\udd30"},{"unified":"1f930-1f3fb","native":"\ud83e\udd30\ud83c\udffb"},{"unified":"1f930-1f3fc","native":"\ud83e\udd30\ud83c\udffc"},{"unified":"1f930-1f3fd","native":"\ud83e\udd30\ud83c\udffd"},{"unified":"1f930-1f3fe","native":"\ud83e\udd30\ud83c\udffe"},{"unified":"1f930-1f3ff","native":"\ud83e\udd30\ud83c\udfff"}],"version":3},"pregnant_man":{"id":"pregnant_man","name":"Pregnant Man","keywords":["baby","belly"],"skins":[{"unified":"1fac3","native":"\ud83e\udec3"},{"unified":"1fac3-1f3fb","native":"\ud83e\udec3\ud83c\udffb"},{"unified":"1fac3-1f3fc","native":"\ud83e\udec3\ud83c\udffc"},{"unified":"1fac3-1f3fd","native":"\ud83e\udec3\ud83c\udffd"},{"unified":"1fac3-1f3fe","native":"\ud83e\udec3\ud83c\udffe"},{"unified":"1fac3-1f3ff","native":"\ud83e\udec3\ud83c\udfff"}],"version":14},"pregnant_person":{"id":"pregnant_person","name":"Pregnant Person","keywords":["baby","belly"],"skins":[{"unified":"1fac4","native":"\ud83e\udec4"},{"unified":"1fac4-1f3fb","native":"\ud83e\udec4\ud83c\udffb"},{"unified":"1fac4-1f3fc","native":"\ud83e\udec4\ud83c\udffc"},{"unified":"1fac4-1f3fd","native":"\ud83e\udec4\ud83c\udffd"},{"unified":"1fac4-1f3fe","native":"\ud83e\udec4\ud83c\udffe"},{"unified":"1fac4-1f3ff","native":"\ud83e\udec4\ud83c\udfff"}],"version":14},"breast-feeding":{"id":"breast-feeding","name":"Breast-Feeding","keywords":["breast","feeding","nursing","baby"],"skins":[{"unified":"1f931","native":"\ud83e\udd31"},{"unified":"1f931-1f3fb","native":"\ud83e\udd31\ud83c\udffb"},{"unified":"1f931-1f3fc","native":"\ud83e\udd31\ud83c\udffc"},{"unified":"1f931-1f3fd","native":"\ud83e\udd31\ud83c\udffd"},{"unified":"1f931-1f3fe","native":"\ud83e\udd31\ud83c\udffe"},{"unified":"1f931-1f3ff","native":"\ud83e\udd31\ud83c\udfff"}],"version":5},"woman_feeding_baby":{"id":"woman_feeding_baby","name":"Woman Feeding Baby","keywords":["birth","food"],"skins":[{"unified":"1f469-200d-1f37c","native":"\ud83d\udc69\u200d\ud83c\udf7c"},{"unified":"1f469-1f3fb-200d-1f37c","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf7c"},{"unified":"1f469-1f3fc-200d-1f37c","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83c\udf7c"},{"unified":"1f469-1f3fd-200d-1f37c","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf7c"},{"unified":"1f469-1f3fe-200d-1f37c","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf7c"},{"unified":"1f469-1f3ff-200d-1f37c","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udf7c"}],"version":13},"man_feeding_baby":{"id":"man_feeding_baby","name":"Man Feeding Baby","keywords":["birth","food"],"skins":[{"unified":"1f468-200d-1f37c","native":"\ud83d\udc68\u200d\ud83c\udf7c"},{"unified":"1f468-1f3fb-200d-1f37c","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf7c"},{"unified":"1f468-1f3fc-200d-1f37c","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83c\udf7c"},{"unified":"1f468-1f3fd-200d-1f37c","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf7c"},{"unified":"1f468-1f3fe-200d-1f37c","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf7c"},{"unified":"1f468-1f3ff-200d-1f37c","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83c\udf7c"}],"version":13},"person_feeding_baby":{"id":"person_feeding_baby","name":"Person Feeding Baby","keywords":["birth","food"],"skins":[{"unified":"1f9d1-200d-1f37c","native":"\ud83e\uddd1\u200d\ud83c\udf7c"},{"unified":"1f9d1-1f3fb-200d-1f37c","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udf7c"},{"unified":"1f9d1-1f3fc-200d-1f37c","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udf7c"},{"unified":"1f9d1-1f3fd-200d-1f37c","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udf7c"},{"unified":"1f9d1-1f3fe-200d-1f37c","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udf7c"},{"unified":"1f9d1-1f3ff-200d-1f37c","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udf7c"}],"version":13},"angel":{"id":"angel","name":"Baby Angel","keywords":["heaven","wings","halo"],"skins":[{"unified":"1f47c","native":"\ud83d\udc7c"},{"unified":"1f47c-1f3fb","native":"\ud83d\udc7c\ud83c\udffb"},{"unified":"1f47c-1f3fc","native":"\ud83d\udc7c\ud83c\udffc"},{"unified":"1f47c-1f3fd","native":"\ud83d\udc7c\ud83c\udffd"},{"unified":"1f47c-1f3fe","native":"\ud83d\udc7c\ud83c\udffe"},{"unified":"1f47c-1f3ff","native":"\ud83d\udc7c\ud83c\udfff"}],"version":1},"santa":{"id":"santa","name":"Santa Claus","keywords":["festival","man","male","xmas","father","christmas"],"skins":[{"unified":"1f385","native":"\ud83c\udf85"},{"unified":"1f385-1f3fb","native":"\ud83c\udf85\ud83c\udffb"},{"unified":"1f385-1f3fc","native":"\ud83c\udf85\ud83c\udffc"},{"unified":"1f385-1f3fd","native":"\ud83c\udf85\ud83c\udffd"},{"unified":"1f385-1f3fe","native":"\ud83c\udf85\ud83c\udffe"},{"unified":"1f385-1f3ff","native":"\ud83c\udf85\ud83c\udfff"}],"version":1},"mrs_claus":{"id":"mrs_claus","name":"Mrs. Claus","keywords":["mrs","mother","christmas","woman","female","xmas"],"skins":[{"unified":"1f936","native":"\ud83e\udd36"},{"unified":"1f936-1f3fb","native":"\ud83e\udd36\ud83c\udffb"},{"unified":"1f936-1f3fc","native":"\ud83e\udd36\ud83c\udffc"},{"unified":"1f936-1f3fd","native":"\ud83e\udd36\ud83c\udffd"},{"unified":"1f936-1f3fe","native":"\ud83e\udd36\ud83c\udffe"},{"unified":"1f936-1f3ff","native":"\ud83e\udd36\ud83c\udfff"}],"version":3},"mx_claus":{"id":"mx_claus","name":"Mx Claus","keywords":["christmas"],"skins":[{"unified":"1f9d1-200d-1f384","native":"\ud83e\uddd1\u200d\ud83c\udf84"},{"unified":"1f9d1-1f3fb-200d-1f384","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83c\udf84"},{"unified":"1f9d1-1f3fc-200d-1f384","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83c\udf84"},{"unified":"1f9d1-1f3fd-200d-1f384","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83c\udf84"},{"unified":"1f9d1-1f3fe-200d-1f384","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83c\udf84"},{"unified":"1f9d1-1f3ff-200d-1f384","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83c\udf84"}],"version":13},"superhero":{"id":"superhero","name":"Superhero","keywords":["marvel"],"skins":[{"unified":"1f9b8","native":"\ud83e\uddb8"},{"unified":"1f9b8-1f3fb","native":"\ud83e\uddb8\ud83c\udffb"},{"unified":"1f9b8-1f3fc","native":"\ud83e\uddb8\ud83c\udffc"},{"unified":"1f9b8-1f3fd","native":"\ud83e\uddb8\ud83c\udffd"},{"unified":"1f9b8-1f3fe","native":"\ud83e\uddb8\ud83c\udffe"},{"unified":"1f9b8-1f3ff","native":"\ud83e\uddb8\ud83c\udfff"}],"version":11},"male_superhero":{"id":"male_superhero","name":"Man Superhero","keywords":["male","good","hero","superpowers"],"skins":[{"unified":"1f9b8-200d-2642-fe0f","native":"\ud83e\uddb8\u200d\u2642\ufe0f"},{"unified":"1f9b8-1f3fb-200d-2642-fe0f","native":"\ud83e\uddb8\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9b8-1f3fc-200d-2642-fe0f","native":"\ud83e\uddb8\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9b8-1f3fd-200d-2642-fe0f","native":"\ud83e\uddb8\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9b8-1f3fe-200d-2642-fe0f","native":"\ud83e\uddb8\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9b8-1f3ff-200d-2642-fe0f","native":"\ud83e\uddb8\ud83c\udfff\u200d\u2642\ufe0f"}],"version":11},"female_superhero":{"id":"female_superhero","name":"Woman Superhero","keywords":["female","good","heroine","superpowers"],"skins":[{"unified":"1f9b8-200d-2640-fe0f","native":"\ud83e\uddb8\u200d\u2640\ufe0f"},{"unified":"1f9b8-1f3fb-200d-2640-fe0f","native":"\ud83e\uddb8\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9b8-1f3fc-200d-2640-fe0f","native":"\ud83e\uddb8\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9b8-1f3fd-200d-2640-fe0f","native":"\ud83e\uddb8\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9b8-1f3fe-200d-2640-fe0f","native":"\ud83e\uddb8\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9b8-1f3ff-200d-2640-fe0f","native":"\ud83e\uddb8\ud83c\udfff\u200d\u2640\ufe0f"}],"version":11},"supervillain":{"id":"supervillain","name":"Supervillain","keywords":["marvel"],"skins":[{"unified":"1f9b9","native":"\ud83e\uddb9"},{"unified":"1f9b9-1f3fb","native":"\ud83e\uddb9\ud83c\udffb"},{"unified":"1f9b9-1f3fc","native":"\ud83e\uddb9\ud83c\udffc"},{"unified":"1f9b9-1f3fd","native":"\ud83e\uddb9\ud83c\udffd"},{"unified":"1f9b9-1f3fe","native":"\ud83e\uddb9\ud83c\udffe"},{"unified":"1f9b9-1f3ff","native":"\ud83e\uddb9\ud83c\udfff"}],"version":11},"male_supervillain":{"id":"male_supervillain","name":"Man Supervillain","keywords":["male","evil","bad","criminal","hero","superpowers"],"skins":[{"unified":"1f9b9-200d-2642-fe0f","native":"\ud83e\uddb9\u200d\u2642\ufe0f"},{"unified":"1f9b9-1f3fb-200d-2642-fe0f","native":"\ud83e\uddb9\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9b9-1f3fc-200d-2642-fe0f","native":"\ud83e\uddb9\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9b9-1f3fd-200d-2642-fe0f","native":"\ud83e\uddb9\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9b9-1f3fe-200d-2642-fe0f","native":"\ud83e\uddb9\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9b9-1f3ff-200d-2642-fe0f","native":"\ud83e\uddb9\ud83c\udfff\u200d\u2642\ufe0f"}],"version":11},"female_supervillain":{"id":"female_supervillain","name":"Woman Supervillain","keywords":["female","evil","bad","criminal","heroine","superpowers"],"skins":[{"unified":"1f9b9-200d-2640-fe0f","native":"\ud83e\uddb9\u200d\u2640\ufe0f"},{"unified":"1f9b9-1f3fb-200d-2640-fe0f","native":"\ud83e\uddb9\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9b9-1f3fc-200d-2640-fe0f","native":"\ud83e\uddb9\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9b9-1f3fd-200d-2640-fe0f","native":"\ud83e\uddb9\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9b9-1f3fe-200d-2640-fe0f","native":"\ud83e\uddb9\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9b9-1f3ff-200d-2640-fe0f","native":"\ud83e\uddb9\ud83c\udfff\u200d\u2640\ufe0f"}],"version":11},"mage":{"id":"mage","name":"Mage","keywords":["magic"],"skins":[{"unified":"1f9d9","native":"\ud83e\uddd9"},{"unified":"1f9d9-1f3fb","native":"\ud83e\uddd9\ud83c\udffb"},{"unified":"1f9d9-1f3fc","native":"\ud83e\uddd9\ud83c\udffc"},{"unified":"1f9d9-1f3fd","native":"\ud83e\uddd9\ud83c\udffd"},{"unified":"1f9d9-1f3fe","native":"\ud83e\uddd9\ud83c\udffe"},{"unified":"1f9d9-1f3ff","native":"\ud83e\uddd9\ud83c\udfff"}],"version":5},"male_mage":{"id":"male_mage","name":"Man Mage","keywords":["male","sorcerer"],"skins":[{"unified":"1f9d9-200d-2642-fe0f","native":"\ud83e\uddd9\u200d\u2642\ufe0f"},{"unified":"1f9d9-1f3fb-200d-2642-fe0f","native":"\ud83e\uddd9\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9d9-1f3fc-200d-2642-fe0f","native":"\ud83e\uddd9\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9d9-1f3fd-200d-2642-fe0f","native":"\ud83e\uddd9\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9d9-1f3fe-200d-2642-fe0f","native":"\ud83e\uddd9\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9d9-1f3ff-200d-2642-fe0f","native":"\ud83e\uddd9\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"female_mage":{"id":"female_mage","name":"Woman Mage","keywords":["female","witch"],"skins":[{"unified":"1f9d9-200d-2640-fe0f","native":"\ud83e\uddd9\u200d\u2640\ufe0f"},{"unified":"1f9d9-1f3fb-200d-2640-fe0f","native":"\ud83e\uddd9\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9d9-1f3fc-200d-2640-fe0f","native":"\ud83e\uddd9\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9d9-1f3fd-200d-2640-fe0f","native":"\ud83e\uddd9\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9d9-1f3fe-200d-2640-fe0f","native":"\ud83e\uddd9\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9d9-1f3ff-200d-2640-fe0f","native":"\ud83e\uddd9\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"fairy":{"id":"fairy","name":"Fairy","keywords":["wings","magical"],"skins":[{"unified":"1f9da","native":"\ud83e\uddda"},{"unified":"1f9da-1f3fb","native":"\ud83e\uddda\ud83c\udffb"},{"unified":"1f9da-1f3fc","native":"\ud83e\uddda\ud83c\udffc"},{"unified":"1f9da-1f3fd","native":"\ud83e\uddda\ud83c\udffd"},{"unified":"1f9da-1f3fe","native":"\ud83e\uddda\ud83c\udffe"},{"unified":"1f9da-1f3ff","native":"\ud83e\uddda\ud83c\udfff"}],"version":5},"male_fairy":{"id":"male_fairy","name":"Man Fairy","keywords":["male"],"skins":[{"unified":"1f9da-200d-2642-fe0f","native":"\ud83e\uddda\u200d\u2642\ufe0f"},{"unified":"1f9da-1f3fb-200d-2642-fe0f","native":"\ud83e\uddda\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9da-1f3fc-200d-2642-fe0f","native":"\ud83e\uddda\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9da-1f3fd-200d-2642-fe0f","native":"\ud83e\uddda\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9da-1f3fe-200d-2642-fe0f","native":"\ud83e\uddda\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9da-1f3ff-200d-2642-fe0f","native":"\ud83e\uddda\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"female_fairy":{"id":"female_fairy","name":"Woman Fairy","keywords":["female"],"skins":[{"unified":"1f9da-200d-2640-fe0f","native":"\ud83e\uddda\u200d\u2640\ufe0f"},{"unified":"1f9da-1f3fb-200d-2640-fe0f","native":"\ud83e\uddda\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9da-1f3fc-200d-2640-fe0f","native":"\ud83e\uddda\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9da-1f3fd-200d-2640-fe0f","native":"\ud83e\uddda\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9da-1f3fe-200d-2640-fe0f","native":"\ud83e\uddda\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9da-1f3ff-200d-2640-fe0f","native":"\ud83e\uddda\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"vampire":{"id":"vampire","name":"Vampire","keywords":["blood","twilight"],"skins":[{"unified":"1f9db","native":"\ud83e\udddb"},{"unified":"1f9db-1f3fb","native":"\ud83e\udddb\ud83c\udffb"},{"unified":"1f9db-1f3fc","native":"\ud83e\udddb\ud83c\udffc"},{"unified":"1f9db-1f3fd","native":"\ud83e\udddb\ud83c\udffd"},{"unified":"1f9db-1f3fe","native":"\ud83e\udddb\ud83c\udffe"},{"unified":"1f9db-1f3ff","native":"\ud83e\udddb\ud83c\udfff"}],"version":5},"male_vampire":{"id":"male_vampire","name":"Man Vampire","keywords":["male","dracula"],"skins":[{"unified":"1f9db-200d-2642-fe0f","native":"\ud83e\udddb\u200d\u2642\ufe0f"},{"unified":"1f9db-1f3fb-200d-2642-fe0f","native":"\ud83e\udddb\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9db-1f3fc-200d-2642-fe0f","native":"\ud83e\udddb\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9db-1f3fd-200d-2642-fe0f","native":"\ud83e\udddb\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9db-1f3fe-200d-2642-fe0f","native":"\ud83e\udddb\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9db-1f3ff-200d-2642-fe0f","native":"\ud83e\udddb\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"female_vampire":{"id":"female_vampire","name":"Woman Vampire","keywords":["female"],"skins":[{"unified":"1f9db-200d-2640-fe0f","native":"\ud83e\udddb\u200d\u2640\ufe0f"},{"unified":"1f9db-1f3fb-200d-2640-fe0f","native":"\ud83e\udddb\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9db-1f3fc-200d-2640-fe0f","native":"\ud83e\udddb\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9db-1f3fd-200d-2640-fe0f","native":"\ud83e\udddb\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9db-1f3fe-200d-2640-fe0f","native":"\ud83e\udddb\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9db-1f3ff-200d-2640-fe0f","native":"\ud83e\udddb\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"merperson":{"id":"merperson","name":"Merperson","keywords":["sea"],"skins":[{"unified":"1f9dc","native":"\ud83e\udddc"},{"unified":"1f9dc-1f3fb","native":"\ud83e\udddc\ud83c\udffb"},{"unified":"1f9dc-1f3fc","native":"\ud83e\udddc\ud83c\udffc"},{"unified":"1f9dc-1f3fd","native":"\ud83e\udddc\ud83c\udffd"},{"unified":"1f9dc-1f3fe","native":"\ud83e\udddc\ud83c\udffe"},{"unified":"1f9dc-1f3ff","native":"\ud83e\udddc\ud83c\udfff"}],"version":5},"merman":{"id":"merman","name":"Merman","keywords":["man","male","triton"],"skins":[{"unified":"1f9dc-200d-2642-fe0f","native":"\ud83e\udddc\u200d\u2642\ufe0f"},{"unified":"1f9dc-1f3fb-200d-2642-fe0f","native":"\ud83e\udddc\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9dc-1f3fc-200d-2642-fe0f","native":"\ud83e\udddc\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9dc-1f3fd-200d-2642-fe0f","native":"\ud83e\udddc\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9dc-1f3fe-200d-2642-fe0f","native":"\ud83e\udddc\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9dc-1f3ff-200d-2642-fe0f","native":"\ud83e\udddc\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"mermaid":{"id":"mermaid","name":"Mermaid","keywords":["woman","female","merwoman","ariel"],"skins":[{"unified":"1f9dc-200d-2640-fe0f","native":"\ud83e\udddc\u200d\u2640\ufe0f"},{"unified":"1f9dc-1f3fb-200d-2640-fe0f","native":"\ud83e\udddc\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9dc-1f3fc-200d-2640-fe0f","native":"\ud83e\udddc\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9dc-1f3fd-200d-2640-fe0f","native":"\ud83e\udddc\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9dc-1f3fe-200d-2640-fe0f","native":"\ud83e\udddc\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9dc-1f3ff-200d-2640-fe0f","native":"\ud83e\udddc\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"elf":{"id":"elf","name":"Elf","keywords":["magical"],"skins":[{"unified":"1f9dd","native":"\ud83e\udddd"},{"unified":"1f9dd-1f3fb","native":"\ud83e\udddd\ud83c\udffb"},{"unified":"1f9dd-1f3fc","native":"\ud83e\udddd\ud83c\udffc"},{"unified":"1f9dd-1f3fd","native":"\ud83e\udddd\ud83c\udffd"},{"unified":"1f9dd-1f3fe","native":"\ud83e\udddd\ud83c\udffe"},{"unified":"1f9dd-1f3ff","native":"\ud83e\udddd\ud83c\udfff"}],"version":5},"male_elf":{"id":"male_elf","name":"Man Elf","keywords":["male"],"skins":[{"unified":"1f9dd-200d-2642-fe0f","native":"\ud83e\udddd\u200d\u2642\ufe0f"},{"unified":"1f9dd-1f3fb-200d-2642-fe0f","native":"\ud83e\udddd\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9dd-1f3fc-200d-2642-fe0f","native":"\ud83e\udddd\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9dd-1f3fd-200d-2642-fe0f","native":"\ud83e\udddd\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9dd-1f3fe-200d-2642-fe0f","native":"\ud83e\udddd\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9dd-1f3ff-200d-2642-fe0f","native":"\ud83e\udddd\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"female_elf":{"id":"female_elf","name":"Woman Elf","keywords":["female"],"skins":[{"unified":"1f9dd-200d-2640-fe0f","native":"\ud83e\udddd\u200d\u2640\ufe0f"},{"unified":"1f9dd-1f3fb-200d-2640-fe0f","native":"\ud83e\udddd\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9dd-1f3fc-200d-2640-fe0f","native":"\ud83e\udddd\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9dd-1f3fd-200d-2640-fe0f","native":"\ud83e\udddd\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9dd-1f3fe-200d-2640-fe0f","native":"\ud83e\udddd\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9dd-1f3ff-200d-2640-fe0f","native":"\ud83e\udddd\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"genie":{"id":"genie","name":"Genie","keywords":["magical","wishes"],"skins":[{"unified":"1f9de","native":"\ud83e\uddde"}],"version":5},"male_genie":{"id":"male_genie","name":"Man Genie","keywords":["male"],"skins":[{"unified":"1f9de-200d-2642-fe0f","native":"\ud83e\uddde\u200d\u2642\ufe0f"}],"version":5},"female_genie":{"id":"female_genie","name":"Woman Genie","keywords":["female"],"skins":[{"unified":"1f9de-200d-2640-fe0f","native":"\ud83e\uddde\u200d\u2640\ufe0f"}],"version":5},"zombie":{"id":"zombie","name":"Zombie","keywords":["dead"],"skins":[{"unified":"1f9df","native":"\ud83e\udddf"}],"version":5},"male_zombie":{"id":"male_zombie","name":"Man Zombie","keywords":["male","dracula","undead","walking","dead"],"skins":[{"unified":"1f9df-200d-2642-fe0f","native":"\ud83e\udddf\u200d\u2642\ufe0f"}],"version":5},"female_zombie":{"id":"female_zombie","name":"Woman Zombie","keywords":["female","undead","walking","dead"],"skins":[{"unified":"1f9df-200d-2640-fe0f","native":"\ud83e\udddf\u200d\u2640\ufe0f"}],"version":5},"troll":{"id":"troll","name":"Troll","keywords":["mystical","monster"],"skins":[{"unified":"1f9cc","native":"\ud83e\uddcc"}],"version":14},"massage":{"id":"massage","name":"Face Massage","keywords":["person","getting","relax"],"skins":[{"unified":"1f486","native":"\ud83d\udc86"},{"unified":"1f486-1f3fb","native":"\ud83d\udc86\ud83c\udffb"},{"unified":"1f486-1f3fc","native":"\ud83d\udc86\ud83c\udffc"},{"unified":"1f486-1f3fd","native":"\ud83d\udc86\ud83c\udffd"},{"unified":"1f486-1f3fe","native":"\ud83d\udc86\ud83c\udffe"},{"unified":"1f486-1f3ff","native":"\ud83d\udc86\ud83c\udfff"}],"version":1},"man-getting-massage":{"id":"man-getting-massage","name":"Man Getting Massage","keywords":["getting-massage","male","boy","head"],"skins":[{"unified":"1f486-200d-2642-fe0f","native":"\ud83d\udc86\u200d\u2642\ufe0f"},{"unified":"1f486-1f3fb-200d-2642-fe0f","native":"\ud83d\udc86\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f486-1f3fc-200d-2642-fe0f","native":"\ud83d\udc86\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f486-1f3fd-200d-2642-fe0f","native":"\ud83d\udc86\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f486-1f3fe-200d-2642-fe0f","native":"\ud83d\udc86\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f486-1f3ff-200d-2642-fe0f","native":"\ud83d\udc86\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-getting-massage":{"id":"woman-getting-massage","name":"Woman Getting Massage","keywords":["getting-massage","female","girl","head"],"skins":[{"unified":"1f486-200d-2640-fe0f","native":"\ud83d\udc86\u200d\u2640\ufe0f"},{"unified":"1f486-1f3fb-200d-2640-fe0f","native":"\ud83d\udc86\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f486-1f3fc-200d-2640-fe0f","native":"\ud83d\udc86\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f486-1f3fd-200d-2640-fe0f","native":"\ud83d\udc86\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f486-1f3fe-200d-2640-fe0f","native":"\ud83d\udc86\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f486-1f3ff-200d-2640-fe0f","native":"\ud83d\udc86\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"haircut":{"id":"haircut","name":"Haircut","keywords":["person","getting","hairstyle"],"skins":[{"unified":"1f487","native":"\ud83d\udc87"},{"unified":"1f487-1f3fb","native":"\ud83d\udc87\ud83c\udffb"},{"unified":"1f487-1f3fc","native":"\ud83d\udc87\ud83c\udffc"},{"unified":"1f487-1f3fd","native":"\ud83d\udc87\ud83c\udffd"},{"unified":"1f487-1f3fe","native":"\ud83d\udc87\ud83c\udffe"},{"unified":"1f487-1f3ff","native":"\ud83d\udc87\ud83c\udfff"}],"version":1},"man-getting-haircut":{"id":"man-getting-haircut","name":"Man Getting Haircut","keywords":["getting-haircut","male","boy"],"skins":[{"unified":"1f487-200d-2642-fe0f","native":"\ud83d\udc87\u200d\u2642\ufe0f"},{"unified":"1f487-1f3fb-200d-2642-fe0f","native":"\ud83d\udc87\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f487-1f3fc-200d-2642-fe0f","native":"\ud83d\udc87\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f487-1f3fd-200d-2642-fe0f","native":"\ud83d\udc87\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f487-1f3fe-200d-2642-fe0f","native":"\ud83d\udc87\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f487-1f3ff-200d-2642-fe0f","native":"\ud83d\udc87\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-getting-haircut":{"id":"woman-getting-haircut","name":"Woman Getting Haircut","keywords":["getting-haircut","female","girl"],"skins":[{"unified":"1f487-200d-2640-fe0f","native":"\ud83d\udc87\u200d\u2640\ufe0f"},{"unified":"1f487-1f3fb-200d-2640-fe0f","native":"\ud83d\udc87\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f487-1f3fc-200d-2640-fe0f","native":"\ud83d\udc87\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f487-1f3fd-200d-2640-fe0f","native":"\ud83d\udc87\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f487-1f3fe-200d-2640-fe0f","native":"\ud83d\udc87\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f487-1f3ff-200d-2640-fe0f","native":"\ud83d\udc87\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"walking":{"id":"walking","name":"Pedestrian","keywords":["walking","person","move"],"skins":[{"unified":"1f6b6","native":"\ud83d\udeb6"},{"unified":"1f6b6-1f3fb","native":"\ud83d\udeb6\ud83c\udffb"},{"unified":"1f6b6-1f3fc","native":"\ud83d\udeb6\ud83c\udffc"},{"unified":"1f6b6-1f3fd","native":"\ud83d\udeb6\ud83c\udffd"},{"unified":"1f6b6-1f3fe","native":"\ud83d\udeb6\ud83c\udffe"},{"unified":"1f6b6-1f3ff","native":"\ud83d\udeb6\ud83c\udfff"}],"version":1},"man-walking":{"id":"man-walking","name":"Man Walking","keywords":["human","feet","steps"],"skins":[{"unified":"1f6b6-200d-2642-fe0f","native":"\ud83d\udeb6\u200d\u2642\ufe0f"},{"unified":"1f6b6-1f3fb-200d-2642-fe0f","native":"\ud83d\udeb6\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f6b6-1f3fc-200d-2642-fe0f","native":"\ud83d\udeb6\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f6b6-1f3fd-200d-2642-fe0f","native":"\ud83d\udeb6\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f6b6-1f3fe-200d-2642-fe0f","native":"\ud83d\udeb6\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f6b6-1f3ff-200d-2642-fe0f","native":"\ud83d\udeb6\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-walking":{"id":"woman-walking","name":"Woman Walking","keywords":["human","feet","steps","female"],"skins":[{"unified":"1f6b6-200d-2640-fe0f","native":"\ud83d\udeb6\u200d\u2640\ufe0f"},{"unified":"1f6b6-1f3fb-200d-2640-fe0f","native":"\ud83d\udeb6\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f6b6-1f3fc-200d-2640-fe0f","native":"\ud83d\udeb6\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f6b6-1f3fd-200d-2640-fe0f","native":"\ud83d\udeb6\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f6b6-1f3fe-200d-2640-fe0f","native":"\ud83d\udeb6\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f6b6-1f3ff-200d-2640-fe0f","native":"\ud83d\udeb6\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"standing_person":{"id":"standing_person","name":"Standing Person","keywords":["still"],"skins":[{"unified":"1f9cd","native":"\ud83e\uddcd"},{"unified":"1f9cd-1f3fb","native":"\ud83e\uddcd\ud83c\udffb"},{"unified":"1f9cd-1f3fc","native":"\ud83e\uddcd\ud83c\udffc"},{"unified":"1f9cd-1f3fd","native":"\ud83e\uddcd\ud83c\udffd"},{"unified":"1f9cd-1f3fe","native":"\ud83e\uddcd\ud83c\udffe"},{"unified":"1f9cd-1f3ff","native":"\ud83e\uddcd\ud83c\udfff"}],"version":12},"man_standing":{"id":"man_standing","name":"Man Standing","keywords":["still"],"skins":[{"unified":"1f9cd-200d-2642-fe0f","native":"\ud83e\uddcd\u200d\u2642\ufe0f"},{"unified":"1f9cd-1f3fb-200d-2642-fe0f","native":"\ud83e\uddcd\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9cd-1f3fc-200d-2642-fe0f","native":"\ud83e\uddcd\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9cd-1f3fd-200d-2642-fe0f","native":"\ud83e\uddcd\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9cd-1f3fe-200d-2642-fe0f","native":"\ud83e\uddcd\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9cd-1f3ff-200d-2642-fe0f","native":"\ud83e\uddcd\ud83c\udfff\u200d\u2642\ufe0f"}],"version":12},"woman_standing":{"id":"woman_standing","name":"Woman Standing","keywords":["still"],"skins":[{"unified":"1f9cd-200d-2640-fe0f","native":"\ud83e\uddcd\u200d\u2640\ufe0f"},{"unified":"1f9cd-1f3fb-200d-2640-fe0f","native":"\ud83e\uddcd\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9cd-1f3fc-200d-2640-fe0f","native":"\ud83e\uddcd\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9cd-1f3fd-200d-2640-fe0f","native":"\ud83e\uddcd\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9cd-1f3fe-200d-2640-fe0f","native":"\ud83e\uddcd\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9cd-1f3ff-200d-2640-fe0f","native":"\ud83e\uddcd\ud83c\udfff\u200d\u2640\ufe0f"}],"version":12},"kneeling_person":{"id":"kneeling_person","name":"Kneeling Person","keywords":["pray","respectful"],"skins":[{"unified":"1f9ce","native":"\ud83e\uddce"},{"unified":"1f9ce-1f3fb","native":"\ud83e\uddce\ud83c\udffb"},{"unified":"1f9ce-1f3fc","native":"\ud83e\uddce\ud83c\udffc"},{"unified":"1f9ce-1f3fd","native":"\ud83e\uddce\ud83c\udffd"},{"unified":"1f9ce-1f3fe","native":"\ud83e\uddce\ud83c\udffe"},{"unified":"1f9ce-1f3ff","native":"\ud83e\uddce\ud83c\udfff"}],"version":12},"man_kneeling":{"id":"man_kneeling","name":"Man Kneeling","keywords":["pray","respectful"],"skins":[{"unified":"1f9ce-200d-2642-fe0f","native":"\ud83e\uddce\u200d\u2642\ufe0f"},{"unified":"1f9ce-1f3fb-200d-2642-fe0f","native":"\ud83e\uddce\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9ce-1f3fc-200d-2642-fe0f","native":"\ud83e\uddce\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9ce-1f3fd-200d-2642-fe0f","native":"\ud83e\uddce\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9ce-1f3fe-200d-2642-fe0f","native":"\ud83e\uddce\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9ce-1f3ff-200d-2642-fe0f","native":"\ud83e\uddce\ud83c\udfff\u200d\u2642\ufe0f"}],"version":12},"woman_kneeling":{"id":"woman_kneeling","name":"Woman Kneeling","keywords":["respectful","pray"],"skins":[{"unified":"1f9ce-200d-2640-fe0f","native":"\ud83e\uddce\u200d\u2640\ufe0f"},{"unified":"1f9ce-1f3fb-200d-2640-fe0f","native":"\ud83e\uddce\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9ce-1f3fc-200d-2640-fe0f","native":"\ud83e\uddce\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9ce-1f3fd-200d-2640-fe0f","native":"\ud83e\uddce\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9ce-1f3fe-200d-2640-fe0f","native":"\ud83e\uddce\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9ce-1f3ff-200d-2640-fe0f","native":"\ud83e\uddce\ud83c\udfff\u200d\u2640\ufe0f"}],"version":12},"person_with_probing_cane":{"id":"person_with_probing_cane","name":"Person with White Cane","keywords":["probing","blind"],"skins":[{"unified":"1f9d1-200d-1f9af","native":"\ud83e\uddd1\u200d\ud83e\uddaf"},{"unified":"1f9d1-1f3fb-200d-1f9af","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\uddaf"},{"unified":"1f9d1-1f3fc-200d-1f9af","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\uddaf"},{"unified":"1f9d1-1f3fd-200d-1f9af","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\uddaf"},{"unified":"1f9d1-1f3fe-200d-1f9af","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\uddaf"},{"unified":"1f9d1-1f3ff-200d-1f9af","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\uddaf"}],"version":12.1},"man_with_probing_cane":{"id":"man_with_probing_cane","name":"Man with White Cane","keywords":["probing","blind"],"skins":[{"unified":"1f468-200d-1f9af","native":"\ud83d\udc68\u200d\ud83e\uddaf"},{"unified":"1f468-1f3fb-200d-1f9af","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddaf"},{"unified":"1f468-1f3fc-200d-1f9af","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddaf"},{"unified":"1f468-1f3fd-200d-1f9af","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddaf"},{"unified":"1f468-1f3fe-200d-1f9af","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddaf"},{"unified":"1f468-1f3ff-200d-1f9af","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddaf"}],"version":12},"woman_with_probing_cane":{"id":"woman_with_probing_cane","name":"Woman with White Cane","keywords":["probing","blind"],"skins":[{"unified":"1f469-200d-1f9af","native":"\ud83d\udc69\u200d\ud83e\uddaf"},{"unified":"1f469-1f3fb-200d-1f9af","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddaf"},{"unified":"1f469-1f3fc-200d-1f9af","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddaf"},{"unified":"1f469-1f3fd-200d-1f9af","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddaf"},{"unified":"1f469-1f3fe-200d-1f9af","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddaf"},{"unified":"1f469-1f3ff-200d-1f9af","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddaf"}],"version":12},"person_in_motorized_wheelchair":{"id":"person_in_motorized_wheelchair","name":"Person in Motorized Wheelchair","keywords":["disability","accessibility"],"skins":[{"unified":"1f9d1-200d-1f9bc","native":"\ud83e\uddd1\u200d\ud83e\uddbc"},{"unified":"1f9d1-1f3fb-200d-1f9bc","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\uddbc"},{"unified":"1f9d1-1f3fc-200d-1f9bc","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\uddbc"},{"unified":"1f9d1-1f3fd-200d-1f9bc","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\uddbc"},{"unified":"1f9d1-1f3fe-200d-1f9bc","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\uddbc"},{"unified":"1f9d1-1f3ff-200d-1f9bc","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\uddbc"}],"version":12.1},"man_in_motorized_wheelchair":{"id":"man_in_motorized_wheelchair","name":"Man in Motorized Wheelchair","keywords":["disability","accessibility"],"skins":[{"unified":"1f468-200d-1f9bc","native":"\ud83d\udc68\u200d\ud83e\uddbc"},{"unified":"1f468-1f3fb-200d-1f9bc","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddbc"},{"unified":"1f468-1f3fc-200d-1f9bc","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddbc"},{"unified":"1f468-1f3fd-200d-1f9bc","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddbc"},{"unified":"1f468-1f3fe-200d-1f9bc","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddbc"},{"unified":"1f468-1f3ff-200d-1f9bc","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddbc"}],"version":12},"woman_in_motorized_wheelchair":{"id":"woman_in_motorized_wheelchair","name":"Woman in Motorized Wheelchair","keywords":["disability","accessibility"],"skins":[{"unified":"1f469-200d-1f9bc","native":"\ud83d\udc69\u200d\ud83e\uddbc"},{"unified":"1f469-1f3fb-200d-1f9bc","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddbc"},{"unified":"1f469-1f3fc-200d-1f9bc","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddbc"},{"unified":"1f469-1f3fd-200d-1f9bc","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddbc"},{"unified":"1f469-1f3fe-200d-1f9bc","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddbc"},{"unified":"1f469-1f3ff-200d-1f9bc","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddbc"}],"version":12},"person_in_manual_wheelchair":{"id":"person_in_manual_wheelchair","name":"Person in Manual Wheelchair","keywords":["disability","accessibility"],"skins":[{"unified":"1f9d1-200d-1f9bd","native":"\ud83e\uddd1\u200d\ud83e\uddbd"},{"unified":"1f9d1-1f3fb-200d-1f9bd","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\uddbd"},{"unified":"1f9d1-1f3fc-200d-1f9bd","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\uddbd"},{"unified":"1f9d1-1f3fd-200d-1f9bd","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\uddbd"},{"unified":"1f9d1-1f3fe-200d-1f9bd","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\uddbd"},{"unified":"1f9d1-1f3ff-200d-1f9bd","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\uddbd"}],"version":12.1},"man_in_manual_wheelchair":{"id":"man_in_manual_wheelchair","name":"Man in Manual Wheelchair","keywords":["disability","accessibility"],"skins":[{"unified":"1f468-200d-1f9bd","native":"\ud83d\udc68\u200d\ud83e\uddbd"},{"unified":"1f468-1f3fb-200d-1f9bd","native":"\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddbd"},{"unified":"1f468-1f3fc-200d-1f9bd","native":"\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddbd"},{"unified":"1f468-1f3fd-200d-1f9bd","native":"\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddbd"},{"unified":"1f468-1f3fe-200d-1f9bd","native":"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddbd"},{"unified":"1f468-1f3ff-200d-1f9bd","native":"\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddbd"}],"version":12},"woman_in_manual_wheelchair":{"id":"woman_in_manual_wheelchair","name":"Woman in Manual Wheelchair","keywords":["disability","accessibility"],"skins":[{"unified":"1f469-200d-1f9bd","native":"\ud83d\udc69\u200d\ud83e\uddbd"},{"unified":"1f469-1f3fb-200d-1f9bd","native":"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddbd"},{"unified":"1f469-1f3fc-200d-1f9bd","native":"\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddbd"},{"unified":"1f469-1f3fd-200d-1f9bd","native":"\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddbd"},{"unified":"1f469-1f3fe-200d-1f9bd","native":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddbd"},{"unified":"1f469-1f3ff-200d-1f9bd","native":"\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddbd"}],"version":12},"runner":{"id":"runner","name":"Runner","keywords":["running","person","move"],"skins":[{"unified":"1f3c3","native":"\ud83c\udfc3"},{"unified":"1f3c3-1f3fb","native":"\ud83c\udfc3\ud83c\udffb"},{"unified":"1f3c3-1f3fc","native":"\ud83c\udfc3\ud83c\udffc"},{"unified":"1f3c3-1f3fd","native":"\ud83c\udfc3\ud83c\udffd"},{"unified":"1f3c3-1f3fe","native":"\ud83c\udfc3\ud83c\udffe"},{"unified":"1f3c3-1f3ff","native":"\ud83c\udfc3\ud83c\udfff"}],"version":1},"man-running":{"id":"man-running","name":"Man Running","keywords":["walking","exercise","race"],"skins":[{"unified":"1f3c3-200d-2642-fe0f","native":"\ud83c\udfc3\u200d\u2642\ufe0f"},{"unified":"1f3c3-1f3fb-200d-2642-fe0f","native":"\ud83c\udfc3\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f3c3-1f3fc-200d-2642-fe0f","native":"\ud83c\udfc3\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f3c3-1f3fd-200d-2642-fe0f","native":"\ud83c\udfc3\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f3c3-1f3fe-200d-2642-fe0f","native":"\ud83c\udfc3\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f3c3-1f3ff-200d-2642-fe0f","native":"\ud83c\udfc3\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-running":{"id":"woman-running","name":"Woman Running","keywords":["walking","exercise","race","female"],"skins":[{"unified":"1f3c3-200d-2640-fe0f","native":"\ud83c\udfc3\u200d\u2640\ufe0f"},{"unified":"1f3c3-1f3fb-200d-2640-fe0f","native":"\ud83c\udfc3\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f3c3-1f3fc-200d-2640-fe0f","native":"\ud83c\udfc3\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f3c3-1f3fd-200d-2640-fe0f","native":"\ud83c\udfc3\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f3c3-1f3fe-200d-2640-fe0f","native":"\ud83c\udfc3\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f3c3-1f3ff-200d-2640-fe0f","native":"\ud83c\udfc3\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"dancer":{"id":"dancer","name":"Dancer","keywords":["woman","dancing","female","girl","fun"],"skins":[{"unified":"1f483","native":"\ud83d\udc83"},{"unified":"1f483-1f3fb","native":"\ud83d\udc83\ud83c\udffb"},{"unified":"1f483-1f3fc","native":"\ud83d\udc83\ud83c\udffc"},{"unified":"1f483-1f3fd","native":"\ud83d\udc83\ud83c\udffd"},{"unified":"1f483-1f3fe","native":"\ud83d\udc83\ud83c\udffe"},{"unified":"1f483-1f3ff","native":"\ud83d\udc83\ud83c\udfff"}],"version":1},"man_dancing":{"id":"man_dancing","name":"Man Dancing","keywords":["male","boy","fun","dancer"],"skins":[{"unified":"1f57a","native":"\ud83d\udd7a"},{"unified":"1f57a-1f3fb","native":"\ud83d\udd7a\ud83c\udffb"},{"unified":"1f57a-1f3fc","native":"\ud83d\udd7a\ud83c\udffc"},{"unified":"1f57a-1f3fd","native":"\ud83d\udd7a\ud83c\udffd"},{"unified":"1f57a-1f3fe","native":"\ud83d\udd7a\ud83c\udffe"},{"unified":"1f57a-1f3ff","native":"\ud83d\udd7a\ud83c\udfff"}],"version":3},"man_in_business_suit_levitating":{"id":"man_in_business_suit_levitating","name":"Person in Suit Levitating","keywords":["man","business","levitate","hover","jump"],"skins":[{"unified":"1f574-fe0f","native":"\ud83d\udd74\ufe0f"},{"unified":"1f574-1f3fb","native":"\ud83d\udd74\ud83c\udffb"},{"unified":"1f574-1f3fc","native":"\ud83d\udd74\ud83c\udffc"},{"unified":"1f574-1f3fd","native":"\ud83d\udd74\ud83c\udffd"},{"unified":"1f574-1f3fe","native":"\ud83d\udd74\ud83c\udffe"},{"unified":"1f574-1f3ff","native":"\ud83d\udd74\ud83c\udfff"}],"version":1},"dancers":{"id":"dancers","name":"Woman with Bunny Ears","keywords":["dancers","people","perform","costume"],"skins":[{"unified":"1f46f","native":"\ud83d\udc6f"}],"version":1},"men-with-bunny-ears-partying":{"id":"men-with-bunny-ears-partying","name":"Men with Bunny Ears","keywords":["with-bunny-ears-partying","man","male","boys"],"skins":[{"unified":"1f46f-200d-2642-fe0f","native":"\ud83d\udc6f\u200d\u2642\ufe0f"}],"version":4},"women-with-bunny-ears-partying":{"id":"women-with-bunny-ears-partying","name":"Women with Bunny Ears","keywords":["with-bunny-ears-partying","woman","female","girls"],"skins":[{"unified":"1f46f-200d-2640-fe0f","native":"\ud83d\udc6f\u200d\u2640\ufe0f"}],"version":4},"person_in_steamy_room":{"id":"person_in_steamy_room","name":"Person in Steamy Room","keywords":["relax","spa"],"skins":[{"unified":"1f9d6","native":"\ud83e\uddd6"},{"unified":"1f9d6-1f3fb","native":"\ud83e\uddd6\ud83c\udffb"},{"unified":"1f9d6-1f3fc","native":"\ud83e\uddd6\ud83c\udffc"},{"unified":"1f9d6-1f3fd","native":"\ud83e\uddd6\ud83c\udffd"},{"unified":"1f9d6-1f3fe","native":"\ud83e\uddd6\ud83c\udffe"},{"unified":"1f9d6-1f3ff","native":"\ud83e\uddd6\ud83c\udfff"}],"version":5},"man_in_steamy_room":{"id":"man_in_steamy_room","name":"Man in Steamy Room","keywords":["male","spa","steamroom","sauna"],"skins":[{"unified":"1f9d6-200d-2642-fe0f","native":"\ud83e\uddd6\u200d\u2642\ufe0f"},{"unified":"1f9d6-1f3fb-200d-2642-fe0f","native":"\ud83e\uddd6\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9d6-1f3fc-200d-2642-fe0f","native":"\ud83e\uddd6\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9d6-1f3fd-200d-2642-fe0f","native":"\ud83e\uddd6\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9d6-1f3fe-200d-2642-fe0f","native":"\ud83e\uddd6\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9d6-1f3ff-200d-2642-fe0f","native":"\ud83e\uddd6\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"woman_in_steamy_room":{"id":"woman_in_steamy_room","name":"Woman in Steamy Room","keywords":["female","spa","steamroom","sauna"],"skins":[{"unified":"1f9d6-200d-2640-fe0f","native":"\ud83e\uddd6\u200d\u2640\ufe0f"},{"unified":"1f9d6-1f3fb-200d-2640-fe0f","native":"\ud83e\uddd6\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9d6-1f3fc-200d-2640-fe0f","native":"\ud83e\uddd6\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9d6-1f3fd-200d-2640-fe0f","native":"\ud83e\uddd6\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9d6-1f3fe-200d-2640-fe0f","native":"\ud83e\uddd6\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9d6-1f3ff-200d-2640-fe0f","native":"\ud83e\uddd6\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"person_climbing":{"id":"person_climbing","name":"Person Climbing","keywords":["sport"],"skins":[{"unified":"1f9d7","native":"\ud83e\uddd7"},{"unified":"1f9d7-1f3fb","native":"\ud83e\uddd7\ud83c\udffb"},{"unified":"1f9d7-1f3fc","native":"\ud83e\uddd7\ud83c\udffc"},{"unified":"1f9d7-1f3fd","native":"\ud83e\uddd7\ud83c\udffd"},{"unified":"1f9d7-1f3fe","native":"\ud83e\uddd7\ud83c\udffe"},{"unified":"1f9d7-1f3ff","native":"\ud83e\uddd7\ud83c\udfff"}],"version":5},"man_climbing":{"id":"man_climbing","name":"Man Climbing","keywords":["sports","hobby","male","rock"],"skins":[{"unified":"1f9d7-200d-2642-fe0f","native":"\ud83e\uddd7\u200d\u2642\ufe0f"},{"unified":"1f9d7-1f3fb-200d-2642-fe0f","native":"\ud83e\uddd7\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9d7-1f3fc-200d-2642-fe0f","native":"\ud83e\uddd7\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9d7-1f3fd-200d-2642-fe0f","native":"\ud83e\uddd7\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9d7-1f3fe-200d-2642-fe0f","native":"\ud83e\uddd7\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9d7-1f3ff-200d-2642-fe0f","native":"\ud83e\uddd7\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"woman_climbing":{"id":"woman_climbing","name":"Woman Climbing","keywords":["sports","hobby","female","rock"],"skins":[{"unified":"1f9d7-200d-2640-fe0f","native":"\ud83e\uddd7\u200d\u2640\ufe0f"},{"unified":"1f9d7-1f3fb-200d-2640-fe0f","native":"\ud83e\uddd7\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9d7-1f3fc-200d-2640-fe0f","native":"\ud83e\uddd7\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9d7-1f3fd-200d-2640-fe0f","native":"\ud83e\uddd7\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9d7-1f3fe-200d-2640-fe0f","native":"\ud83e\uddd7\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9d7-1f3ff-200d-2640-fe0f","native":"\ud83e\uddd7\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"fencer":{"id":"fencer","name":"Fencer","keywords":["person","fencing","sports","sword"],"skins":[{"unified":"1f93a","native":"\ud83e\udd3a"}],"version":3},"horse_racing":{"id":"horse_racing","name":"Horse Racing","keywords":["animal","betting","competition","gambling","luck"],"skins":[{"unified":"1f3c7","native":"\ud83c\udfc7"},{"unified":"1f3c7-1f3fb","native":"\ud83c\udfc7\ud83c\udffb"},{"unified":"1f3c7-1f3fc","native":"\ud83c\udfc7\ud83c\udffc"},{"unified":"1f3c7-1f3fd","native":"\ud83c\udfc7\ud83c\udffd"},{"unified":"1f3c7-1f3fe","native":"\ud83c\udfc7\ud83c\udffe"},{"unified":"1f3c7-1f3ff","native":"\ud83c\udfc7\ud83c\udfff"}],"version":1},"skier":{"id":"skier","name":"Skier","keywords":["sports","winter","snow"],"skins":[{"unified":"26f7-fe0f","native":"\u26f7\ufe0f"}],"version":1},"snowboarder":{"id":"snowboarder","name":"Snowboarder","keywords":["sports","winter"],"skins":[{"unified":"1f3c2","native":"\ud83c\udfc2"},{"unified":"1f3c2-1f3fb","native":"\ud83c\udfc2\ud83c\udffb"},{"unified":"1f3c2-1f3fc","native":"\ud83c\udfc2\ud83c\udffc"},{"unified":"1f3c2-1f3fd","native":"\ud83c\udfc2\ud83c\udffd"},{"unified":"1f3c2-1f3fe","native":"\ud83c\udfc2\ud83c\udffe"},{"unified":"1f3c2-1f3ff","native":"\ud83c\udfc2\ud83c\udfff"}],"version":1},"golfer":{"id":"golfer","name":"Person Golfing","keywords":["golfer","sports","business"],"skins":[{"unified":"1f3cc-fe0f","native":"\ud83c\udfcc\ufe0f"},{"unified":"1f3cc-1f3fb","native":"\ud83c\udfcc\ud83c\udffb"},{"unified":"1f3cc-1f3fc","native":"\ud83c\udfcc\ud83c\udffc"},{"unified":"1f3cc-1f3fd","native":"\ud83c\udfcc\ud83c\udffd"},{"unified":"1f3cc-1f3fe","native":"\ud83c\udfcc\ud83c\udffe"},{"unified":"1f3cc-1f3ff","native":"\ud83c\udfcc\ud83c\udfff"}],"version":1},"man-golfing":{"id":"man-golfing","name":"Man Golfing","keywords":["sport"],"skins":[{"unified":"1f3cc-fe0f-200d-2642-fe0f","native":"\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f"},{"unified":"1f3cc-1f3fb-200d-2642-fe0f","native":"\ud83c\udfcc\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f3cc-1f3fc-200d-2642-fe0f","native":"\ud83c\udfcc\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f3cc-1f3fd-200d-2642-fe0f","native":"\ud83c\udfcc\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f3cc-1f3fe-200d-2642-fe0f","native":"\ud83c\udfcc\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f3cc-1f3ff-200d-2642-fe0f","native":"\ud83c\udfcc\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-golfing":{"id":"woman-golfing","name":"Woman Golfing","keywords":["sports","business","female"],"skins":[{"unified":"1f3cc-fe0f-200d-2640-fe0f","native":"\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f"},{"unified":"1f3cc-1f3fb-200d-2640-fe0f","native":"\ud83c\udfcc\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f3cc-1f3fc-200d-2640-fe0f","native":"\ud83c\udfcc\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f3cc-1f3fd-200d-2640-fe0f","native":"\ud83c\udfcc\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f3cc-1f3fe-200d-2640-fe0f","native":"\ud83c\udfcc\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f3cc-1f3ff-200d-2640-fe0f","native":"\ud83c\udfcc\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"surfer":{"id":"surfer","name":"Surfer","keywords":["person","surfing","sport","sea"],"skins":[{"unified":"1f3c4","native":"\ud83c\udfc4"},{"unified":"1f3c4-1f3fb","native":"\ud83c\udfc4\ud83c\udffb"},{"unified":"1f3c4-1f3fc","native":"\ud83c\udfc4\ud83c\udffc"},{"unified":"1f3c4-1f3fd","native":"\ud83c\udfc4\ud83c\udffd"},{"unified":"1f3c4-1f3fe","native":"\ud83c\udfc4\ud83c\udffe"},{"unified":"1f3c4-1f3ff","native":"\ud83c\udfc4\ud83c\udfff"}],"version":1},"man-surfing":{"id":"man-surfing","name":"Man Surfing","keywords":["sports","ocean","sea","summer","beach"],"skins":[{"unified":"1f3c4-200d-2642-fe0f","native":"\ud83c\udfc4\u200d\u2642\ufe0f"},{"unified":"1f3c4-1f3fb-200d-2642-fe0f","native":"\ud83c\udfc4\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f3c4-1f3fc-200d-2642-fe0f","native":"\ud83c\udfc4\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f3c4-1f3fd-200d-2642-fe0f","native":"\ud83c\udfc4\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f3c4-1f3fe-200d-2642-fe0f","native":"\ud83c\udfc4\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f3c4-1f3ff-200d-2642-fe0f","native":"\ud83c\udfc4\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-surfing":{"id":"woman-surfing","name":"Woman Surfing","keywords":["sports","ocean","sea","summer","beach","female"],"skins":[{"unified":"1f3c4-200d-2640-fe0f","native":"\ud83c\udfc4\u200d\u2640\ufe0f"},{"unified":"1f3c4-1f3fb-200d-2640-fe0f","native":"\ud83c\udfc4\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f3c4-1f3fc-200d-2640-fe0f","native":"\ud83c\udfc4\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f3c4-1f3fd-200d-2640-fe0f","native":"\ud83c\udfc4\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f3c4-1f3fe-200d-2640-fe0f","native":"\ud83c\udfc4\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f3c4-1f3ff-200d-2640-fe0f","native":"\ud83c\udfc4\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"rowboat":{"id":"rowboat","name":"Rowboat","keywords":["person","rowing","boat","sport","move"],"skins":[{"unified":"1f6a3","native":"\ud83d\udea3"},{"unified":"1f6a3-1f3fb","native":"\ud83d\udea3\ud83c\udffb"},{"unified":"1f6a3-1f3fc","native":"\ud83d\udea3\ud83c\udffc"},{"unified":"1f6a3-1f3fd","native":"\ud83d\udea3\ud83c\udffd"},{"unified":"1f6a3-1f3fe","native":"\ud83d\udea3\ud83c\udffe"},{"unified":"1f6a3-1f3ff","native":"\ud83d\udea3\ud83c\udfff"}],"version":1},"man-rowing-boat":{"id":"man-rowing-boat","name":"Man Rowing Boat","keywords":["rowing-boat","sports","hobby","water","ship"],"skins":[{"unified":"1f6a3-200d-2642-fe0f","native":"\ud83d\udea3\u200d\u2642\ufe0f"},{"unified":"1f6a3-1f3fb-200d-2642-fe0f","native":"\ud83d\udea3\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f6a3-1f3fc-200d-2642-fe0f","native":"\ud83d\udea3\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f6a3-1f3fd-200d-2642-fe0f","native":"\ud83d\udea3\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f6a3-1f3fe-200d-2642-fe0f","native":"\ud83d\udea3\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f6a3-1f3ff-200d-2642-fe0f","native":"\ud83d\udea3\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-rowing-boat":{"id":"woman-rowing-boat","name":"Woman Rowing Boat","keywords":["rowing-boat","sports","hobby","water","ship","female"],"skins":[{"unified":"1f6a3-200d-2640-fe0f","native":"\ud83d\udea3\u200d\u2640\ufe0f"},{"unified":"1f6a3-1f3fb-200d-2640-fe0f","native":"\ud83d\udea3\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f6a3-1f3fc-200d-2640-fe0f","native":"\ud83d\udea3\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f6a3-1f3fd-200d-2640-fe0f","native":"\ud83d\udea3\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f6a3-1f3fe-200d-2640-fe0f","native":"\ud83d\udea3\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f6a3-1f3ff-200d-2640-fe0f","native":"\ud83d\udea3\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"swimmer":{"id":"swimmer","name":"Swimmer","keywords":["person","swimming","sport","pool"],"skins":[{"unified":"1f3ca","native":"\ud83c\udfca"},{"unified":"1f3ca-1f3fb","native":"\ud83c\udfca\ud83c\udffb"},{"unified":"1f3ca-1f3fc","native":"\ud83c\udfca\ud83c\udffc"},{"unified":"1f3ca-1f3fd","native":"\ud83c\udfca\ud83c\udffd"},{"unified":"1f3ca-1f3fe","native":"\ud83c\udfca\ud83c\udffe"},{"unified":"1f3ca-1f3ff","native":"\ud83c\udfca\ud83c\udfff"}],"version":1},"man-swimming":{"id":"man-swimming","name":"Man Swimming","keywords":["sports","exercise","human","athlete","water","summer"],"skins":[{"unified":"1f3ca-200d-2642-fe0f","native":"\ud83c\udfca\u200d\u2642\ufe0f"},{"unified":"1f3ca-1f3fb-200d-2642-fe0f","native":"\ud83c\udfca\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f3ca-1f3fc-200d-2642-fe0f","native":"\ud83c\udfca\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f3ca-1f3fd-200d-2642-fe0f","native":"\ud83c\udfca\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f3ca-1f3fe-200d-2642-fe0f","native":"\ud83c\udfca\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f3ca-1f3ff-200d-2642-fe0f","native":"\ud83c\udfca\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-swimming":{"id":"woman-swimming","name":"Woman Swimming","keywords":["sports","exercise","human","athlete","water","summer","female"],"skins":[{"unified":"1f3ca-200d-2640-fe0f","native":"\ud83c\udfca\u200d\u2640\ufe0f"},{"unified":"1f3ca-1f3fb-200d-2640-fe0f","native":"\ud83c\udfca\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f3ca-1f3fc-200d-2640-fe0f","native":"\ud83c\udfca\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f3ca-1f3fd-200d-2640-fe0f","native":"\ud83c\udfca\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f3ca-1f3fe-200d-2640-fe0f","native":"\ud83c\udfca\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f3ca-1f3ff-200d-2640-fe0f","native":"\ud83c\udfca\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"person_with_ball":{"id":"person_with_ball","name":"Person Bouncing Ball","keywords":["with","sports","human"],"skins":[{"unified":"26f9-fe0f","native":"\u26f9\ufe0f"},{"unified":"26f9-1f3fb","native":"\u26f9\ud83c\udffb"},{"unified":"26f9-1f3fc","native":"\u26f9\ud83c\udffc"},{"unified":"26f9-1f3fd","native":"\u26f9\ud83c\udffd"},{"unified":"26f9-1f3fe","native":"\u26f9\ud83c\udffe"},{"unified":"26f9-1f3ff","native":"\u26f9\ud83c\udfff"}],"version":1},"man-bouncing-ball":{"id":"man-bouncing-ball","name":"Man Bouncing Ball","keywords":["bouncing-ball","sport"],"skins":[{"unified":"26f9-fe0f-200d-2642-fe0f","native":"\u26f9\ufe0f\u200d\u2642\ufe0f"},{"unified":"26f9-1f3fb-200d-2642-fe0f","native":"\u26f9\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"26f9-1f3fc-200d-2642-fe0f","native":"\u26f9\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"26f9-1f3fd-200d-2642-fe0f","native":"\u26f9\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"26f9-1f3fe-200d-2642-fe0f","native":"\u26f9\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"26f9-1f3ff-200d-2642-fe0f","native":"\u26f9\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-bouncing-ball":{"id":"woman-bouncing-ball","name":"Woman Bouncing Ball","keywords":["bouncing-ball","sports","human","female"],"skins":[{"unified":"26f9-fe0f-200d-2640-fe0f","native":"\u26f9\ufe0f\u200d\u2640\ufe0f"},{"unified":"26f9-1f3fb-200d-2640-fe0f","native":"\u26f9\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"26f9-1f3fc-200d-2640-fe0f","native":"\u26f9\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"26f9-1f3fd-200d-2640-fe0f","native":"\u26f9\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"26f9-1f3fe-200d-2640-fe0f","native":"\u26f9\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"26f9-1f3ff-200d-2640-fe0f","native":"\u26f9\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"weight_lifter":{"id":"weight_lifter","name":"Person Lifting Weights","keywords":["weight","lifter","sports","training","exercise"],"skins":[{"unified":"1f3cb-fe0f","native":"\ud83c\udfcb\ufe0f"},{"unified":"1f3cb-1f3fb","native":"\ud83c\udfcb\ud83c\udffb"},{"unified":"1f3cb-1f3fc","native":"\ud83c\udfcb\ud83c\udffc"},{"unified":"1f3cb-1f3fd","native":"\ud83c\udfcb\ud83c\udffd"},{"unified":"1f3cb-1f3fe","native":"\ud83c\udfcb\ud83c\udffe"},{"unified":"1f3cb-1f3ff","native":"\ud83c\udfcb\ud83c\udfff"}],"version":1},"man-lifting-weights":{"id":"man-lifting-weights","name":"Man Lifting Weights","keywords":["lifting-weights","sport"],"skins":[{"unified":"1f3cb-fe0f-200d-2642-fe0f","native":"\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f"},{"unified":"1f3cb-1f3fb-200d-2642-fe0f","native":"\ud83c\udfcb\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f3cb-1f3fc-200d-2642-fe0f","native":"\ud83c\udfcb\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f3cb-1f3fd-200d-2642-fe0f","native":"\ud83c\udfcb\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f3cb-1f3fe-200d-2642-fe0f","native":"\ud83c\udfcb\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f3cb-1f3ff-200d-2642-fe0f","native":"\ud83c\udfcb\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-lifting-weights":{"id":"woman-lifting-weights","name":"Woman Lifting Weights","keywords":["lifting-weights","sports","training","exercise","female"],"skins":[{"unified":"1f3cb-fe0f-200d-2640-fe0f","native":"\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f"},{"unified":"1f3cb-1f3fb-200d-2640-fe0f","native":"\ud83c\udfcb\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f3cb-1f3fc-200d-2640-fe0f","native":"\ud83c\udfcb\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f3cb-1f3fd-200d-2640-fe0f","native":"\ud83c\udfcb\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f3cb-1f3fe-200d-2640-fe0f","native":"\ud83c\udfcb\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f3cb-1f3ff-200d-2640-fe0f","native":"\ud83c\udfcb\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"bicyclist":{"id":"bicyclist","name":"Bicyclist","keywords":["person","biking","sport","move"],"skins":[{"unified":"1f6b4","native":"\ud83d\udeb4"},{"unified":"1f6b4-1f3fb","native":"\ud83d\udeb4\ud83c\udffb"},{"unified":"1f6b4-1f3fc","native":"\ud83d\udeb4\ud83c\udffc"},{"unified":"1f6b4-1f3fd","native":"\ud83d\udeb4\ud83c\udffd"},{"unified":"1f6b4-1f3fe","native":"\ud83d\udeb4\ud83c\udffe"},{"unified":"1f6b4-1f3ff","native":"\ud83d\udeb4\ud83c\udfff"}],"version":1},"man-biking":{"id":"man-biking","name":"Man Biking","keywords":["sports","bike","exercise","hipster"],"skins":[{"unified":"1f6b4-200d-2642-fe0f","native":"\ud83d\udeb4\u200d\u2642\ufe0f"},{"unified":"1f6b4-1f3fb-200d-2642-fe0f","native":"\ud83d\udeb4\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f6b4-1f3fc-200d-2642-fe0f","native":"\ud83d\udeb4\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f6b4-1f3fd-200d-2642-fe0f","native":"\ud83d\udeb4\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f6b4-1f3fe-200d-2642-fe0f","native":"\ud83d\udeb4\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f6b4-1f3ff-200d-2642-fe0f","native":"\ud83d\udeb4\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-biking":{"id":"woman-biking","name":"Woman Biking","keywords":["sports","bike","exercise","hipster","female"],"skins":[{"unified":"1f6b4-200d-2640-fe0f","native":"\ud83d\udeb4\u200d\u2640\ufe0f"},{"unified":"1f6b4-1f3fb-200d-2640-fe0f","native":"\ud83d\udeb4\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f6b4-1f3fc-200d-2640-fe0f","native":"\ud83d\udeb4\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f6b4-1f3fd-200d-2640-fe0f","native":"\ud83d\udeb4\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f6b4-1f3fe-200d-2640-fe0f","native":"\ud83d\udeb4\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f6b4-1f3ff-200d-2640-fe0f","native":"\ud83d\udeb4\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"mountain_bicyclist":{"id":"mountain_bicyclist","name":"Mountain Bicyclist","keywords":["person","biking","sport","move"],"skins":[{"unified":"1f6b5","native":"\ud83d\udeb5"},{"unified":"1f6b5-1f3fb","native":"\ud83d\udeb5\ud83c\udffb"},{"unified":"1f6b5-1f3fc","native":"\ud83d\udeb5\ud83c\udffc"},{"unified":"1f6b5-1f3fd","native":"\ud83d\udeb5\ud83c\udffd"},{"unified":"1f6b5-1f3fe","native":"\ud83d\udeb5\ud83c\udffe"},{"unified":"1f6b5-1f3ff","native":"\ud83d\udeb5\ud83c\udfff"}],"version":1},"man-mountain-biking":{"id":"man-mountain-biking","name":"Man Mountain Biking","keywords":["mountain-biking","transportation","sports","human","race","bike"],"skins":[{"unified":"1f6b5-200d-2642-fe0f","native":"\ud83d\udeb5\u200d\u2642\ufe0f"},{"unified":"1f6b5-1f3fb-200d-2642-fe0f","native":"\ud83d\udeb5\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f6b5-1f3fc-200d-2642-fe0f","native":"\ud83d\udeb5\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f6b5-1f3fd-200d-2642-fe0f","native":"\ud83d\udeb5\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f6b5-1f3fe-200d-2642-fe0f","native":"\ud83d\udeb5\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f6b5-1f3ff-200d-2642-fe0f","native":"\ud83d\udeb5\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-mountain-biking":{"id":"woman-mountain-biking","name":"Woman Mountain Biking","keywords":["mountain-biking","transportation","sports","human","race","bike","female"],"skins":[{"unified":"1f6b5-200d-2640-fe0f","native":"\ud83d\udeb5\u200d\u2640\ufe0f"},{"unified":"1f6b5-1f3fb-200d-2640-fe0f","native":"\ud83d\udeb5\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f6b5-1f3fc-200d-2640-fe0f","native":"\ud83d\udeb5\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f6b5-1f3fd-200d-2640-fe0f","native":"\ud83d\udeb5\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f6b5-1f3fe-200d-2640-fe0f","native":"\ud83d\udeb5\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f6b5-1f3ff-200d-2640-fe0f","native":"\ud83d\udeb5\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"person_doing_cartwheel":{"id":"person_doing_cartwheel","name":"Person Cartwheeling","keywords":["doing","cartwheel","sport","gymnastic"],"skins":[{"unified":"1f938","native":"\ud83e\udd38"},{"unified":"1f938-1f3fb","native":"\ud83e\udd38\ud83c\udffb"},{"unified":"1f938-1f3fc","native":"\ud83e\udd38\ud83c\udffc"},{"unified":"1f938-1f3fd","native":"\ud83e\udd38\ud83c\udffd"},{"unified":"1f938-1f3fe","native":"\ud83e\udd38\ud83c\udffe"},{"unified":"1f938-1f3ff","native":"\ud83e\udd38\ud83c\udfff"}],"version":3},"man-cartwheeling":{"id":"man-cartwheeling","name":"Man Cartwheeling","keywords":["gymnastics"],"skins":[{"unified":"1f938-200d-2642-fe0f","native":"\ud83e\udd38\u200d\u2642\ufe0f"},{"unified":"1f938-1f3fb-200d-2642-fe0f","native":"\ud83e\udd38\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f938-1f3fc-200d-2642-fe0f","native":"\ud83e\udd38\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f938-1f3fd-200d-2642-fe0f","native":"\ud83e\udd38\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f938-1f3fe-200d-2642-fe0f","native":"\ud83e\udd38\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f938-1f3ff-200d-2642-fe0f","native":"\ud83e\udd38\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-cartwheeling":{"id":"woman-cartwheeling","name":"Woman Cartwheeling","keywords":["gymnastics"],"skins":[{"unified":"1f938-200d-2640-fe0f","native":"\ud83e\udd38\u200d\u2640\ufe0f"},{"unified":"1f938-1f3fb-200d-2640-fe0f","native":"\ud83e\udd38\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f938-1f3fc-200d-2640-fe0f","native":"\ud83e\udd38\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f938-1f3fd-200d-2640-fe0f","native":"\ud83e\udd38\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f938-1f3fe-200d-2640-fe0f","native":"\ud83e\udd38\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f938-1f3ff-200d-2640-fe0f","native":"\ud83e\udd38\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"wrestlers":{"id":"wrestlers","name":"Wrestlers","keywords":["people","wrestling","sport"],"skins":[{"unified":"1f93c","native":"\ud83e\udd3c"}],"version":3},"man-wrestling":{"id":"man-wrestling","name":"Men Wrestling","keywords":["man","sports","wrestlers"],"skins":[{"unified":"1f93c-200d-2642-fe0f","native":"\ud83e\udd3c\u200d\u2642\ufe0f"}],"version":4},"woman-wrestling":{"id":"woman-wrestling","name":"Women Wrestling","keywords":["woman","sports","wrestlers"],"skins":[{"unified":"1f93c-200d-2640-fe0f","native":"\ud83e\udd3c\u200d\u2640\ufe0f"}],"version":4},"water_polo":{"id":"water_polo","name":"Water Polo","keywords":["person","playing","sport"],"skins":[{"unified":"1f93d","native":"\ud83e\udd3d"},{"unified":"1f93d-1f3fb","native":"\ud83e\udd3d\ud83c\udffb"},{"unified":"1f93d-1f3fc","native":"\ud83e\udd3d\ud83c\udffc"},{"unified":"1f93d-1f3fd","native":"\ud83e\udd3d\ud83c\udffd"},{"unified":"1f93d-1f3fe","native":"\ud83e\udd3d\ud83c\udffe"},{"unified":"1f93d-1f3ff","native":"\ud83e\udd3d\ud83c\udfff"}],"version":3},"man-playing-water-polo":{"id":"man-playing-water-polo","name":"Man Playing Water Polo","keywords":["playing-water-polo","sports","pool"],"skins":[{"unified":"1f93d-200d-2642-fe0f","native":"\ud83e\udd3d\u200d\u2642\ufe0f"},{"unified":"1f93d-1f3fb-200d-2642-fe0f","native":"\ud83e\udd3d\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f93d-1f3fc-200d-2642-fe0f","native":"\ud83e\udd3d\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f93d-1f3fd-200d-2642-fe0f","native":"\ud83e\udd3d\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f93d-1f3fe-200d-2642-fe0f","native":"\ud83e\udd3d\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f93d-1f3ff-200d-2642-fe0f","native":"\ud83e\udd3d\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-playing-water-polo":{"id":"woman-playing-water-polo","name":"Woman Playing Water Polo","keywords":["playing-water-polo","sports","pool"],"skins":[{"unified":"1f93d-200d-2640-fe0f","native":"\ud83e\udd3d\u200d\u2640\ufe0f"},{"unified":"1f93d-1f3fb-200d-2640-fe0f","native":"\ud83e\udd3d\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f93d-1f3fc-200d-2640-fe0f","native":"\ud83e\udd3d\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f93d-1f3fd-200d-2640-fe0f","native":"\ud83e\udd3d\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f93d-1f3fe-200d-2640-fe0f","native":"\ud83e\udd3d\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f93d-1f3ff-200d-2640-fe0f","native":"\ud83e\udd3d\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"handball":{"id":"handball","name":"Handball","keywords":["person","playing","sport"],"skins":[{"unified":"1f93e","native":"\ud83e\udd3e"},{"unified":"1f93e-1f3fb","native":"\ud83e\udd3e\ud83c\udffb"},{"unified":"1f93e-1f3fc","native":"\ud83e\udd3e\ud83c\udffc"},{"unified":"1f93e-1f3fd","native":"\ud83e\udd3e\ud83c\udffd"},{"unified":"1f93e-1f3fe","native":"\ud83e\udd3e\ud83c\udffe"},{"unified":"1f93e-1f3ff","native":"\ud83e\udd3e\ud83c\udfff"}],"version":3},"man-playing-handball":{"id":"man-playing-handball","name":"Man Playing Handball","keywords":["playing-handball","sports"],"skins":[{"unified":"1f93e-200d-2642-fe0f","native":"\ud83e\udd3e\u200d\u2642\ufe0f"},{"unified":"1f93e-1f3fb-200d-2642-fe0f","native":"\ud83e\udd3e\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f93e-1f3fc-200d-2642-fe0f","native":"\ud83e\udd3e\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f93e-1f3fd-200d-2642-fe0f","native":"\ud83e\udd3e\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f93e-1f3fe-200d-2642-fe0f","native":"\ud83e\udd3e\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f93e-1f3ff-200d-2642-fe0f","native":"\ud83e\udd3e\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-playing-handball":{"id":"woman-playing-handball","name":"Woman Playing Handball","keywords":["playing-handball","sports"],"skins":[{"unified":"1f93e-200d-2640-fe0f","native":"\ud83e\udd3e\u200d\u2640\ufe0f"},{"unified":"1f93e-1f3fb-200d-2640-fe0f","native":"\ud83e\udd3e\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f93e-1f3fc-200d-2640-fe0f","native":"\ud83e\udd3e\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f93e-1f3fd-200d-2640-fe0f","native":"\ud83e\udd3e\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f93e-1f3fe-200d-2640-fe0f","native":"\ud83e\udd3e\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f93e-1f3ff-200d-2640-fe0f","native":"\ud83e\udd3e\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"juggling":{"id":"juggling","name":"Juggling","keywords":["person","performance","balance"],"skins":[{"unified":"1f939","native":"\ud83e\udd39"},{"unified":"1f939-1f3fb","native":"\ud83e\udd39\ud83c\udffb"},{"unified":"1f939-1f3fc","native":"\ud83e\udd39\ud83c\udffc"},{"unified":"1f939-1f3fd","native":"\ud83e\udd39\ud83c\udffd"},{"unified":"1f939-1f3fe","native":"\ud83e\udd39\ud83c\udffe"},{"unified":"1f939-1f3ff","native":"\ud83e\udd39\ud83c\udfff"}],"version":3},"man-juggling":{"id":"man-juggling","name":"Man Juggling","keywords":["juggle","balance","skill","multitask"],"skins":[{"unified":"1f939-200d-2642-fe0f","native":"\ud83e\udd39\u200d\u2642\ufe0f"},{"unified":"1f939-1f3fb-200d-2642-fe0f","native":"\ud83e\udd39\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f939-1f3fc-200d-2642-fe0f","native":"\ud83e\udd39\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f939-1f3fd-200d-2642-fe0f","native":"\ud83e\udd39\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f939-1f3fe-200d-2642-fe0f","native":"\ud83e\udd39\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f939-1f3ff-200d-2642-fe0f","native":"\ud83e\udd39\ud83c\udfff\u200d\u2642\ufe0f"}],"version":4},"woman-juggling":{"id":"woman-juggling","name":"Woman Juggling","keywords":["juggle","balance","skill","multitask"],"skins":[{"unified":"1f939-200d-2640-fe0f","native":"\ud83e\udd39\u200d\u2640\ufe0f"},{"unified":"1f939-1f3fb-200d-2640-fe0f","native":"\ud83e\udd39\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f939-1f3fc-200d-2640-fe0f","native":"\ud83e\udd39\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f939-1f3fd-200d-2640-fe0f","native":"\ud83e\udd39\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f939-1f3fe-200d-2640-fe0f","native":"\ud83e\udd39\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f939-1f3ff-200d-2640-fe0f","native":"\ud83e\udd39\ud83c\udfff\u200d\u2640\ufe0f"}],"version":4},"person_in_lotus_position":{"id":"person_in_lotus_position","name":"Person in Lotus Position","keywords":["meditate"],"skins":[{"unified":"1f9d8","native":"\ud83e\uddd8"},{"unified":"1f9d8-1f3fb","native":"\ud83e\uddd8\ud83c\udffb"},{"unified":"1f9d8-1f3fc","native":"\ud83e\uddd8\ud83c\udffc"},{"unified":"1f9d8-1f3fd","native":"\ud83e\uddd8\ud83c\udffd"},{"unified":"1f9d8-1f3fe","native":"\ud83e\uddd8\ud83c\udffe"},{"unified":"1f9d8-1f3ff","native":"\ud83e\uddd8\ud83c\udfff"}],"version":5},"man_in_lotus_position":{"id":"man_in_lotus_position","name":"Man in Lotus Position","keywords":["male","meditation","yoga","serenity","zen","mindfulness"],"skins":[{"unified":"1f9d8-200d-2642-fe0f","native":"\ud83e\uddd8\u200d\u2642\ufe0f"},{"unified":"1f9d8-1f3fb-200d-2642-fe0f","native":"\ud83e\uddd8\ud83c\udffb\u200d\u2642\ufe0f"},{"unified":"1f9d8-1f3fc-200d-2642-fe0f","native":"\ud83e\uddd8\ud83c\udffc\u200d\u2642\ufe0f"},{"unified":"1f9d8-1f3fd-200d-2642-fe0f","native":"\ud83e\uddd8\ud83c\udffd\u200d\u2642\ufe0f"},{"unified":"1f9d8-1f3fe-200d-2642-fe0f","native":"\ud83e\uddd8\ud83c\udffe\u200d\u2642\ufe0f"},{"unified":"1f9d8-1f3ff-200d-2642-fe0f","native":"\ud83e\uddd8\ud83c\udfff\u200d\u2642\ufe0f"}],"version":5},"woman_in_lotus_position":{"id":"woman_in_lotus_position","name":"Woman in Lotus Position","keywords":["female","meditation","yoga","serenity","zen","mindfulness"],"skins":[{"unified":"1f9d8-200d-2640-fe0f","native":"\ud83e\uddd8\u200d\u2640\ufe0f"},{"unified":"1f9d8-1f3fb-200d-2640-fe0f","native":"\ud83e\uddd8\ud83c\udffb\u200d\u2640\ufe0f"},{"unified":"1f9d8-1f3fc-200d-2640-fe0f","native":"\ud83e\uddd8\ud83c\udffc\u200d\u2640\ufe0f"},{"unified":"1f9d8-1f3fd-200d-2640-fe0f","native":"\ud83e\uddd8\ud83c\udffd\u200d\u2640\ufe0f"},{"unified":"1f9d8-1f3fe-200d-2640-fe0f","native":"\ud83e\uddd8\ud83c\udffe\u200d\u2640\ufe0f"},{"unified":"1f9d8-1f3ff-200d-2640-fe0f","native":"\ud83e\uddd8\ud83c\udfff\u200d\u2640\ufe0f"}],"version":5},"bath":{"id":"bath","name":"Bath","keywords":["person","taking","clean","shower","bathroom"],"skins":[{"unified":"1f6c0","native":"\ud83d\udec0"},{"unified":"1f6c0-1f3fb","native":"\ud83d\udec0\ud83c\udffb"},{"unified":"1f6c0-1f3fc","native":"\ud83d\udec0\ud83c\udffc"},{"unified":"1f6c0-1f3fd","native":"\ud83d\udec0\ud83c\udffd"},{"unified":"1f6c0-1f3fe","native":"\ud83d\udec0\ud83c\udffe"},{"unified":"1f6c0-1f3ff","native":"\ud83d\udec0\ud83c\udfff"}],"version":1},"sleeping_accommodation":{"id":"sleeping_accommodation","name":"Person in Bed","keywords":["sleeping","accommodation","rest"],"skins":[{"unified":"1f6cc","native":"\ud83d\udecc"},{"unified":"1f6cc-1f3fb","native":"\ud83d\udecc\ud83c\udffb"},{"unified":"1f6cc-1f3fc","native":"\ud83d\udecc\ud83c\udffc"},{"unified":"1f6cc-1f3fd","native":"\ud83d\udecc\ud83c\udffd"},{"unified":"1f6cc-1f3fe","native":"\ud83d\udecc\ud83c\udffe"},{"unified":"1f6cc-1f3ff","native":"\ud83d\udecc\ud83c\udfff"}],"version":1},"people_holding_hands":{"id":"people_holding_hands","name":"People Holding Hands","keywords":["friendship"],"skins":[{"unified":"1f9d1-200d-1f91d-200d-1f9d1","native":"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1"},{"unified":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb","native":"\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb"},{"unified":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc","native":"\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffc"},{"unified":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd","native":"\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffd"},{"unified":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe","native":"\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffe"},{"unified":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff","native":"\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udfff"}],"version":12},"two_women_holding_hands":{"id":"two_women_holding_hands","name":"Women Holding Hands","keywords":["two","pair","friendship","couple","love","like","female","people","human"],"skins":[{"unified":"1f46d","native":"\ud83d\udc6d"},{"unified":"1f46d-1f3fb","native":"\ud83d\udc6d\ud83c\udffb"},{"unified":"1f46d-1f3fc","native":"\ud83d\udc6d\ud83c\udffc"},{"unified":"1f46d-1f3fd","native":"\ud83d\udc6d\ud83c\udffd"},{"unified":"1f46d-1f3fe","native":"\ud83d\udc6d\ud83c\udffe"},{"unified":"1f46d-1f3ff","native":"\ud83d\udc6d\ud83c\udfff"}],"version":1},"man_and_woman_holding_hands":{"id":"man_and_woman_holding_hands","name":"Man and Woman Holding Hands","keywords":["couple","pair","people","human","love","date","dating","like","affection","valentines","marriage"],"skins":[{"unified":"1f46b","native":"\ud83d\udc6b"},{"unified":"1f46b-1f3fb","native":"\ud83d\udc6b\ud83c\udffb"},{"unified":"1f46b-1f3fc","native":"\ud83d\udc6b\ud83c\udffc"},{"unified":"1f46b-1f3fd","native":"\ud83d\udc6b\ud83c\udffd"},{"unified":"1f46b-1f3fe","native":"\ud83d\udc6b\ud83c\udffe"},{"unified":"1f46b-1f3ff","native":"\ud83d\udc6b\ud83c\udfff"}],"version":1},"two_men_holding_hands":{"id":"two_men_holding_hands","name":"Men Holding Hands","keywords":["two","pair","couple","love","like","bromance","friendship","people","human"],"skins":[{"unified":"1f46c","native":"\ud83d\udc6c"},{"unified":"1f46c-1f3fb","native":"\ud83d\udc6c\ud83c\udffb"},{"unified":"1f46c-1f3fc","native":"\ud83d\udc6c\ud83c\udffc"},{"unified":"1f46c-1f3fd","native":"\ud83d\udc6c\ud83c\udffd"},{"unified":"1f46c-1f3fe","native":"\ud83d\udc6c\ud83c\udffe"},{"unified":"1f46c-1f3ff","native":"\ud83d\udc6c\ud83c\udfff"}],"version":1},"couplekiss":{"id":"couplekiss","name":"Kiss","keywords":["couplekiss","pair","valentines","love","like","dating","marriage"],"skins":[{"unified":"1f48f","native":"\ud83d\udc8f"},{"unified":"1f48f-1f3fb","native":"\ud83d\udc8f\ud83c\udffb"},{"unified":"1f48f-1f3fc","native":"\ud83d\udc8f\ud83c\udffc"},{"unified":"1f48f-1f3fd","native":"\ud83d\udc8f\ud83c\udffd"},{"unified":"1f48f-1f3fe","native":"\ud83d\udc8f\ud83c\udffe"},{"unified":"1f48f-1f3ff","native":"\ud83d\udc8f\ud83c\udfff"}],"version":1},"woman-kiss-man":{"id":"woman-kiss-man","name":"Kiss: Woman, Man","keywords":["woman","kiss-man","kiss","love"],"skins":[{"unified":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468","native":"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","native":"\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","native":"\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","native":"\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","native":"\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","native":"\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udfff"}],"version":2},"man-kiss-man":{"id":"man-kiss-man","name":"Kiss: Man, Man","keywords":["kiss-man","kiss","pair","valentines","love","like","dating","marriage"],"skins":[{"unified":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","native":"\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68"},{"unified":"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","native":"\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffb"},{"unified":"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","native":"\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffc"},{"unified":"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","native":"\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffd"},{"unified":"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","native":"\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udffe"},{"unified":"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","native":"\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c\udfff"}],"version":2},"woman-kiss-woman":{"id":"woman-kiss-woman","name":"Kiss: Woman, Woman","keywords":["kiss-woman","kiss","pair","valentines","love","like","dating","marriage"],"skins":[{"unified":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","native":"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","native":"\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c\udffb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","native":"\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c\udffc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","native":"\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c\udffd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","native":"\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c\udffe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","native":"\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c\udfff"}],"version":2},"couple_with_heart":{"id":"couple_with_heart","name":"Couple with Heart","keywords":["pair","love","like","affection","human","dating","valentines","marriage"],"skins":[{"unified":"1f491","native":"\ud83d\udc91"},{"unified":"1f491-1f3fb","native":"\ud83d\udc91\ud83c\udffb"},{"unified":"1f491-1f3fc","native":"\ud83d\udc91\ud83c\udffc"},{"unified":"1f491-1f3fd","native":"\ud83d\udc91\ud83c\udffd"},{"unified":"1f491-1f3fe","native":"\ud83d\udc91\ud83c\udffe"},{"unified":"1f491-1f3ff","native":"\ud83d\udc91\ud83c\udfff"}],"version":1},"woman-heart-man":{"id":"woman-heart-man","name":"Couple with Heart: Woman, Man","keywords":["woman","heart-man","heart","love"],"skins":[{"unified":"1f469-200d-2764-fe0f-200d-1f468","native":"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","native":"\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","native":"\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","native":"\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","native":"\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff","native":"\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udfff"}],"version":2},"man-heart-man":{"id":"man-heart-man","name":"Couple with Heart: Man, Man","keywords":["heart-man","heart","pair","love","like","affection","human","dating","valentines","marriage"],"skins":[{"unified":"1f468-200d-2764-fe0f-200d-1f468","native":"\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68"},{"unified":"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","native":"\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffb"},{"unified":"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","native":"\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffc"},{"unified":"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","native":"\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffd"},{"unified":"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","native":"\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udffe"},{"unified":"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff","native":"\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c\udfff"}],"version":2},"woman-heart-woman":{"id":"woman-heart-woman","name":"Couple with Heart: Woman, Woman","keywords":["heart-woman","heart","pair","love","like","affection","human","dating","valentines","marriage"],"skins":[{"unified":"1f469-200d-2764-fe0f-200d-1f469","native":"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb","native":"\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c\udffb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc","native":"\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c\udffc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd","native":"\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c\udffd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe","native":"\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c\udffe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff","native":"\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c\udfff"}],"version":2},"family":{"id":"family","name":"Family","keywords":["home","parents","child","mom","dad","father","mother","people","human"],"skins":[{"unified":"1f46a","native":"\ud83d\udc6a"}],"version":1},"man-woman-boy":{"id":"man-woman-boy","name":"Family: Man, Woman, Boy","keywords":["man","woman-boy","family","woman","love"],"skins":[{"unified":"1f468-200d-1f469-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66"}],"version":2},"man-woman-girl":{"id":"man-woman-girl","name":"Family: Man, Woman, Girl","keywords":["man","woman-girl","family","woman","home","parents","people","human","child"],"skins":[{"unified":"1f468-200d-1f469-200d-1f467","native":"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67"}],"version":2},"man-woman-girl-boy":{"id":"man-woman-girl-boy","name":"Family: Man, Woman, Girl, Boy","keywords":["man","woman-girl-boy","family","woman","girl","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f469-200d-1f467-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}],"version":2},"man-woman-boy-boy":{"id":"man-woman-boy-boy","name":"Family: Man, Woman, Boy, Boy","keywords":["man","woman-boy-boy","family","woman","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f469-200d-1f466-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66"}],"version":2},"man-woman-girl-girl":{"id":"man-woman-girl-girl","name":"Family: Man, Woman, Girl, Girl","keywords":["man","woman-girl-girl","family","woman","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f469-200d-1f467-200d-1f467","native":"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67"}],"version":2},"man-man-boy":{"id":"man-man-boy","name":"Family: Man, Man, Boy","keywords":["man","man-boy","family","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f468-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66"}],"version":2},"man-man-girl":{"id":"man-man-girl","name":"Family: Man, Man, Girl","keywords":["man","man-girl","family","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f468-200d-1f467","native":"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67"}],"version":2},"man-man-girl-boy":{"id":"man-man-girl-boy","name":"Family: Man, Man, Girl, Boy","keywords":["man","man-girl-boy","family","girl","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f468-200d-1f467-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66"}],"version":2},"man-man-boy-boy":{"id":"man-man-boy-boy","name":"Family: Man, Man, Boy, Boy","keywords":["man","man-boy-boy","family","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f468-200d-1f466-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66"}],"version":2},"man-man-girl-girl":{"id":"man-man-girl-girl","name":"Family: Man, Man, Girl, Girl","keywords":["man","man-girl-girl","family","home","parents","people","human","children"],"skins":[{"unified":"1f468-200d-1f468-200d-1f467-200d-1f467","native":"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67"}],"version":2},"woman-woman-boy":{"id":"woman-woman-boy","name":"Family: Woman, Woman, Boy","keywords":["woman","woman-boy","family","home","parents","people","human","children"],"skins":[{"unified":"1f469-200d-1f469-200d-1f466","native":"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66"}],"version":2},"woman-woman-girl":{"id":"woman-woman-girl","name":"Family: Woman, Woman, Girl","keywords":["woman","woman-girl","family","home","parents","people","human","children"],"skins":[{"unified":"1f469-200d-1f469-200d-1f467","native":"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67"}],"version":2},"woman-woman-girl-boy":{"id":"woman-woman-girl-boy","name":"Family: Woman, Woman, Girl, Boy","keywords":["woman","woman-girl-boy","family","girl","home","parents","people","human","children"],"skins":[{"unified":"1f469-200d-1f469-200d-1f467-200d-1f466","native":"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}],"version":2},"woman-woman-boy-boy":{"id":"woman-woman-boy-boy","name":"Family: Woman, Woman, Boy, Boy","keywords":["woman","woman-boy-boy","family","home","parents","people","human","children"],"skins":[{"unified":"1f469-200d-1f469-200d-1f466-200d-1f466","native":"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66"}],"version":2},"woman-woman-girl-girl":{"id":"woman-woman-girl-girl","name":"Family: Woman, Woman, Girl, Girl","keywords":["woman","woman-girl-girl","family","home","parents","people","human","children"],"skins":[{"unified":"1f469-200d-1f469-200d-1f467-200d-1f467","native":"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67"}],"version":2},"man-boy":{"id":"man-boy","name":"Family: Man, Boy","keywords":["man","family","home","parent","people","human","child"],"skins":[{"unified":"1f468-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc66"}],"version":4},"man-boy-boy":{"id":"man-boy-boy","name":"Family: Man, Boy, Boy","keywords":["man","boy-boy","family","home","parent","people","human","children"],"skins":[{"unified":"1f468-200d-1f466-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66"}],"version":4},"man-girl":{"id":"man-girl","name":"Family: Man, Girl","keywords":["man","family","home","parent","people","human","child"],"skins":[{"unified":"1f468-200d-1f467","native":"\ud83d\udc68\u200d\ud83d\udc67"}],"version":4},"man-girl-boy":{"id":"man-girl-boy","name":"Family: Man, Girl, Boy","keywords":["man","girl-boy","family","girl","home","parent","people","human","children"],"skins":[{"unified":"1f468-200d-1f467-200d-1f466","native":"\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66"}],"version":4},"man-girl-girl":{"id":"man-girl-girl","name":"Family: Man, Girl, Girl","keywords":["man","girl-girl","family","home","parent","people","human","children"],"skins":[{"unified":"1f468-200d-1f467-200d-1f467","native":"\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67"}],"version":4},"woman-boy":{"id":"woman-boy","name":"Family: Woman, Boy","keywords":["woman","family","home","parent","people","human","child"],"skins":[{"unified":"1f469-200d-1f466","native":"\ud83d\udc69\u200d\ud83d\udc66"}],"version":4},"woman-boy-boy":{"id":"woman-boy-boy","name":"Family: Woman, Boy, Boy","keywords":["woman","boy-boy","family","home","parent","people","human","children"],"skins":[{"unified":"1f469-200d-1f466-200d-1f466","native":"\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66"}],"version":4},"woman-girl":{"id":"woman-girl","name":"Family: Woman, Girl","keywords":["woman","family","home","parent","people","human","child"],"skins":[{"unified":"1f469-200d-1f467","native":"\ud83d\udc69\u200d\ud83d\udc67"}],"version":4},"woman-girl-boy":{"id":"woman-girl-boy","name":"Family: Woman, Girl, Boy","keywords":["woman","girl-boy","family","girl","home","parent","people","human","children"],"skins":[{"unified":"1f469-200d-1f467-200d-1f466","native":"\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}],"version":4},"woman-girl-girl":{"id":"woman-girl-girl","name":"Family: Woman, Girl, Girl","keywords":["woman","girl-girl","family","home","parent","people","human","children"],"skins":[{"unified":"1f469-200d-1f467-200d-1f467","native":"\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67"}],"version":4},"speaking_head_in_silhouette":{"id":"speaking_head_in_silhouette","name":"Speaking Head","keywords":["in","silhouette","user","person","human","sing","say","talk"],"skins":[{"unified":"1f5e3-fe0f","native":"\ud83d\udde3\ufe0f"}],"version":1},"bust_in_silhouette":{"id":"bust_in_silhouette","name":"Bust in Silhouette","keywords":["user","person","human"],"skins":[{"unified":"1f464","native":"\ud83d\udc64"}],"version":1},"busts_in_silhouette":{"id":"busts_in_silhouette","name":"Busts in Silhouette","keywords":["user","person","human","group","team"],"skins":[{"unified":"1f465","native":"\ud83d\udc65"}],"version":1},"people_hugging":{"id":"people_hugging","name":"People Hugging","keywords":["care"],"skins":[{"unified":"1fac2","native":"\ud83e\udec2"}],"version":13},"footprints":{"id":"footprints","name":"Footprints","keywords":["feet","tracking","walking","beach"],"skins":[{"unified":"1f463","native":"\ud83d\udc63"}],"version":1},"monkey_face":{"id":"monkey_face","name":"Monkey Face","emoticons":[":o)"],"keywords":["animal","nature","circus"],"skins":[{"unified":"1f435","native":"\ud83d\udc35"}],"version":1},"monkey":{"id":"monkey","name":"Monkey","keywords":["animal","nature","banana","circus"],"skins":[{"unified":"1f412","native":"\ud83d\udc12"}],"version":1},"gorilla":{"id":"gorilla","name":"Gorilla","keywords":["animal","nature","circus"],"skins":[{"unified":"1f98d","native":"\ud83e\udd8d"}],"version":3},"orangutan":{"id":"orangutan","name":"Orangutan","keywords":["animal"],"skins":[{"unified":"1f9a7","native":"\ud83e\udda7"}],"version":12},"dog":{"id":"dog","name":"Dog Face","keywords":["animal","friend","nature","woof","puppy","pet","faithful"],"skins":[{"unified":"1f436","native":"\ud83d\udc36"}],"version":1},"dog2":{"id":"dog2","name":"Dog","keywords":["dog2","animal","nature","friend","doge","pet","faithful"],"skins":[{"unified":"1f415","native":"\ud83d\udc15"}],"version":1},"guide_dog":{"id":"guide_dog","name":"Guide Dog","keywords":["animal","blind"],"skins":[{"unified":"1f9ae","native":"\ud83e\uddae"}],"version":12},"service_dog":{"id":"service_dog","name":"Service Dog","keywords":["blind","animal"],"skins":[{"unified":"1f415-200d-1f9ba","native":"\ud83d\udc15\u200d\ud83e\uddba"}],"version":12},"poodle":{"id":"poodle","name":"Poodle","keywords":["dog","animal","101","nature","pet"],"skins":[{"unified":"1f429","native":"\ud83d\udc29"}],"version":1},"wolf":{"id":"wolf","name":"Wolf","keywords":["animal","nature","wild"],"skins":[{"unified":"1f43a","native":"\ud83d\udc3a"}],"version":1},"fox_face":{"id":"fox_face","name":"Fox","keywords":["face","animal","nature"],"skins":[{"unified":"1f98a","native":"\ud83e\udd8a"}],"version":3},"raccoon":{"id":"raccoon","name":"Raccoon","keywords":["animal","nature"],"skins":[{"unified":"1f99d","native":"\ud83e\udd9d"}],"version":11},"cat":{"id":"cat","name":"Cat Face","keywords":["animal","meow","nature","pet","kitten"],"skins":[{"unified":"1f431","native":"\ud83d\udc31"}],"version":1},"cat2":{"id":"cat2","name":"Cat","keywords":["cat2","animal","meow","pet","cats"],"skins":[{"unified":"1f408","native":"\ud83d\udc08"}],"version":1},"black_cat":{"id":"black_cat","name":"Black Cat","keywords":["superstition","luck"],"skins":[{"unified":"1f408-200d-2b1b","native":"\ud83d\udc08\u200d\u2b1b"}],"version":13},"lion_face":{"id":"lion_face","name":"Lion","keywords":["face","animal","nature"],"skins":[{"unified":"1f981","native":"\ud83e\udd81"}],"version":1},"tiger":{"id":"tiger","name":"Tiger Face","keywords":["animal","cat","danger","wild","nature","roar"],"skins":[{"unified":"1f42f","native":"\ud83d\udc2f"}],"version":1},"tiger2":{"id":"tiger2","name":"Tiger","keywords":["tiger2","animal","nature","roar"],"skins":[{"unified":"1f405","native":"\ud83d\udc05"}],"version":1},"leopard":{"id":"leopard","name":"Leopard","keywords":["animal","nature"],"skins":[{"unified":"1f406","native":"\ud83d\udc06"}],"version":1},"horse":{"id":"horse","name":"Horse Face","keywords":["animal","brown","nature"],"skins":[{"unified":"1f434","native":"\ud83d\udc34"}],"version":1},"racehorse":{"id":"racehorse","name":"Horse","keywords":["racehorse","animal","gamble","luck"],"skins":[{"unified":"1f40e","native":"\ud83d\udc0e"}],"version":1},"unicorn_face":{"id":"unicorn_face","name":"Unicorn","keywords":["face","animal","nature","mystical"],"skins":[{"unified":"1f984","native":"\ud83e\udd84"}],"version":1},"zebra_face":{"id":"zebra_face","name":"Zebra","keywords":["face","animal","nature","stripes","safari"],"skins":[{"unified":"1f993","native":"\ud83e\udd93"}],"version":5},"deer":{"id":"deer","name":"Deer","keywords":["animal","nature","horns","venison"],"skins":[{"unified":"1f98c","native":"\ud83e\udd8c"}],"version":3},"bison":{"id":"bison","name":"Bison","keywords":["ox"],"skins":[{"unified":"1f9ac","native":"\ud83e\uddac"}],"version":13},"cow":{"id":"cow","name":"Cow Face","keywords":["beef","ox","animal","nature","moo","milk"],"skins":[{"unified":"1f42e","native":"\ud83d\udc2e"}],"version":1},"ox":{"id":"ox","name":"Ox","keywords":["animal","cow","beef"],"skins":[{"unified":"1f402","native":"\ud83d\udc02"}],"version":1},"water_buffalo":{"id":"water_buffalo","name":"Water Buffalo","keywords":["animal","nature","ox","cow"],"skins":[{"unified":"1f403","native":"\ud83d\udc03"}],"version":1},"cow2":{"id":"cow2","name":"Cow","keywords":["cow2","beef","ox","animal","nature","moo","milk"],"skins":[{"unified":"1f404","native":"\ud83d\udc04"}],"version":1},"pig":{"id":"pig","name":"Pig Face","keywords":["animal","oink","nature"],"skins":[{"unified":"1f437","native":"\ud83d\udc37"}],"version":1},"pig2":{"id":"pig2","name":"Pig","keywords":["pig2","animal","nature"],"skins":[{"unified":"1f416","native":"\ud83d\udc16"}],"version":1},"boar":{"id":"boar","name":"Boar","keywords":["animal","nature"],"skins":[{"unified":"1f417","native":"\ud83d\udc17"}],"version":1},"pig_nose":{"id":"pig_nose","name":"Pig Nose","keywords":["animal","oink"],"skins":[{"unified":"1f43d","native":"\ud83d\udc3d"}],"version":1},"ram":{"id":"ram","name":"Ram","keywords":["animal","sheep","nature"],"skins":[{"unified":"1f40f","native":"\ud83d\udc0f"}],"version":1},"sheep":{"id":"sheep","name":"Ewe","keywords":["sheep","animal","nature","wool","shipit"],"skins":[{"unified":"1f411","native":"\ud83d\udc11"}],"version":1},"goat":{"id":"goat","name":"Goat","keywords":["animal","nature"],"skins":[{"unified":"1f410","native":"\ud83d\udc10"}],"version":1},"dromedary_camel":{"id":"dromedary_camel","name":"Camel","keywords":["dromedary","animal","hot","desert","hump"],"skins":[{"unified":"1f42a","native":"\ud83d\udc2a"}],"version":1},"camel":{"id":"camel","name":"Bactrian Camel","keywords":["two","hump","animal","nature","hot","desert"],"skins":[{"unified":"1f42b","native":"\ud83d\udc2b"}],"version":1},"llama":{"id":"llama","name":"Llama","keywords":["animal","nature","alpaca"],"skins":[{"unified":"1f999","native":"\ud83e\udd99"}],"version":11},"giraffe_face":{"id":"giraffe_face","name":"Giraffe","keywords":["face","animal","nature","spots","safari"],"skins":[{"unified":"1f992","native":"\ud83e\udd92"}],"version":5},"elephant":{"id":"elephant","name":"Elephant","keywords":["animal","nature","nose","th","circus"],"skins":[{"unified":"1f418","native":"\ud83d\udc18"}],"version":1},"mammoth":{"id":"mammoth","name":"Mammoth","keywords":["elephant","tusks"],"skins":[{"unified":"1f9a3","native":"\ud83e\udda3"}],"version":13},"rhinoceros":{"id":"rhinoceros","name":"Rhinoceros","keywords":["animal","nature","horn"],"skins":[{"unified":"1f98f","native":"\ud83e\udd8f"}],"version":3},"hippopotamus":{"id":"hippopotamus","name":"Hippopotamus","keywords":["animal","nature"],"skins":[{"unified":"1f99b","native":"\ud83e\udd9b"}],"version":11},"mouse":{"id":"mouse","name":"Mouse Face","keywords":["animal","nature","cheese","wedge","rodent"],"skins":[{"unified":"1f42d","native":"\ud83d\udc2d"}],"version":1},"mouse2":{"id":"mouse2","name":"Mouse","keywords":["mouse2","animal","nature","rodent"],"skins":[{"unified":"1f401","native":"\ud83d\udc01"}],"version":1},"rat":{"id":"rat","name":"Rat","keywords":["animal","mouse","rodent"],"skins":[{"unified":"1f400","native":"\ud83d\udc00"}],"version":1},"hamster":{"id":"hamster","name":"Hamster","keywords":["animal","nature"],"skins":[{"unified":"1f439","native":"\ud83d\udc39"}],"version":1},"rabbit":{"id":"rabbit","name":"Rabbit Face","keywords":["animal","nature","pet","spring","magic","bunny"],"skins":[{"unified":"1f430","native":"\ud83d\udc30"}],"version":1},"rabbit2":{"id":"rabbit2","name":"Rabbit","keywords":["rabbit2","animal","nature","pet","magic","spring"],"skins":[{"unified":"1f407","native":"\ud83d\udc07"}],"version":1},"chipmunk":{"id":"chipmunk","name":"Chipmunk","keywords":["animal","nature","rodent","squirrel"],"skins":[{"unified":"1f43f-fe0f","native":"\ud83d\udc3f\ufe0f"}],"version":1},"beaver":{"id":"beaver","name":"Beaver","keywords":["animal","rodent"],"skins":[{"unified":"1f9ab","native":"\ud83e\uddab"}],"version":13},"hedgehog":{"id":"hedgehog","name":"Hedgehog","keywords":["animal","nature","spiny"],"skins":[{"unified":"1f994","native":"\ud83e\udd94"}],"version":5},"bat":{"id":"bat","name":"Bat","keywords":["animal","nature","blind","vampire"],"skins":[{"unified":"1f987","native":"\ud83e\udd87"}],"version":3},"bear":{"id":"bear","name":"Bear","keywords":["animal","nature","wild"],"skins":[{"unified":"1f43b","native":"\ud83d\udc3b"}],"version":1},"polar_bear":{"id":"polar_bear","name":"Polar Bear","keywords":["animal","arctic"],"skins":[{"unified":"1f43b-200d-2744-fe0f","native":"\ud83d\udc3b\u200d\u2744\ufe0f"}],"version":13},"koala":{"id":"koala","name":"Koala","keywords":["animal","nature"],"skins":[{"unified":"1f428","native":"\ud83d\udc28"}],"version":1},"panda_face":{"id":"panda_face","name":"Panda","keywords":["face","animal","nature"],"skins":[{"unified":"1f43c","native":"\ud83d\udc3c"}],"version":1},"sloth":{"id":"sloth","name":"Sloth","keywords":["animal"],"skins":[{"unified":"1f9a5","native":"\ud83e\udda5"}],"version":12},"otter":{"id":"otter","name":"Otter","keywords":["animal"],"skins":[{"unified":"1f9a6","native":"\ud83e\udda6"}],"version":12},"skunk":{"id":"skunk","name":"Skunk","keywords":["animal"],"skins":[{"unified":"1f9a8","native":"\ud83e\udda8"}],"version":12},"kangaroo":{"id":"kangaroo","name":"Kangaroo","keywords":["animal","nature","australia","joey","hop","marsupial"],"skins":[{"unified":"1f998","native":"\ud83e\udd98"}],"version":11},"badger":{"id":"badger","name":"Badger","keywords":["animal","nature","honey"],"skins":[{"unified":"1f9a1","native":"\ud83e\udda1"}],"version":11},"feet":{"id":"feet","name":"Paw Prints","keywords":["feet","animal","tracking","footprints","dog","cat","pet"],"skins":[{"unified":"1f43e","native":"\ud83d\udc3e"}],"version":1},"turkey":{"id":"turkey","name":"Turkey","keywords":["animal","bird"],"skins":[{"unified":"1f983","native":"\ud83e\udd83"}],"version":1},"chicken":{"id":"chicken","name":"Chicken","keywords":["animal","cluck","nature","bird"],"skins":[{"unified":"1f414","native":"\ud83d\udc14"}],"version":1},"rooster":{"id":"rooster","name":"Rooster","keywords":["animal","nature","chicken"],"skins":[{"unified":"1f413","native":"\ud83d\udc13"}],"version":1},"hatching_chick":{"id":"hatching_chick","name":"Hatching Chick","keywords":["animal","chicken","egg","born","baby","bird"],"skins":[{"unified":"1f423","native":"\ud83d\udc23"}],"version":1},"baby_chick":{"id":"baby_chick","name":"Baby Chick","keywords":["animal","chicken","bird"],"skins":[{"unified":"1f424","native":"\ud83d\udc24"}],"version":1},"hatched_chick":{"id":"hatched_chick","name":"Front-Facing Baby Chick","keywords":["hatched","front","facing","animal","chicken","bird"],"skins":[{"unified":"1f425","native":"\ud83d\udc25"}],"version":1},"bird":{"id":"bird","name":"Bird","keywords":["animal","nature","fly","tweet","spring"],"skins":[{"unified":"1f426","native":"\ud83d\udc26"}],"version":1},"penguin":{"id":"penguin","name":"Penguin","keywords":["animal","nature"],"skins":[{"unified":"1f427","native":"\ud83d\udc27"}],"version":1},"dove_of_peace":{"id":"dove_of_peace","name":"Dove","keywords":["of","peace","animal","bird"],"skins":[{"unified":"1f54a-fe0f","native":"\ud83d\udd4a\ufe0f"}],"version":1},"eagle":{"id":"eagle","name":"Eagle","keywords":["animal","nature","bird"],"skins":[{"unified":"1f985","native":"\ud83e\udd85"}],"version":3},"duck":{"id":"duck","name":"Duck","keywords":["animal","nature","bird","mallard"],"skins":[{"unified":"1f986","native":"\ud83e\udd86"}],"version":3},"swan":{"id":"swan","name":"Swan","keywords":["animal","nature","bird"],"skins":[{"unified":"1f9a2","native":"\ud83e\udda2"}],"version":11},"owl":{"id":"owl","name":"Owl","keywords":["animal","nature","bird","hoot"],"skins":[{"unified":"1f989","native":"\ud83e\udd89"}],"version":3},"dodo":{"id":"dodo","name":"Dodo","keywords":["animal","bird"],"skins":[{"unified":"1f9a4","native":"\ud83e\udda4"}],"version":13},"feather":{"id":"feather","name":"Feather","keywords":["bird","fly"],"skins":[{"unified":"1fab6","native":"\ud83e\udeb6"}],"version":13},"flamingo":{"id":"flamingo","name":"Flamingo","keywords":["animal"],"skins":[{"unified":"1f9a9","native":"\ud83e\udda9"}],"version":12},"peacock":{"id":"peacock","name":"Peacock","keywords":["animal","nature","peahen","bird"],"skins":[{"unified":"1f99a","native":"\ud83e\udd9a"}],"version":11},"parrot":{"id":"parrot","name":"Parrot","keywords":["animal","nature","bird","pirate","talk"],"skins":[{"unified":"1f99c","native":"\ud83e\udd9c"}],"version":11},"frog":{"id":"frog","name":"Frog","keywords":["animal","nature","croak","toad"],"skins":[{"unified":"1f438","native":"\ud83d\udc38"}],"version":1},"crocodile":{"id":"crocodile","name":"Crocodile","keywords":["animal","nature","reptile","lizard","alligator"],"skins":[{"unified":"1f40a","native":"\ud83d\udc0a"}],"version":1},"turtle":{"id":"turtle","name":"Turtle","keywords":["animal","slow","nature","tortoise"],"skins":[{"unified":"1f422","native":"\ud83d\udc22"}],"version":1},"lizard":{"id":"lizard","name":"Lizard","keywords":["animal","nature","reptile"],"skins":[{"unified":"1f98e","native":"\ud83e\udd8e"}],"version":3},"snake":{"id":"snake","name":"Snake","keywords":["animal","evil","nature","hiss","python"],"skins":[{"unified":"1f40d","native":"\ud83d\udc0d"}],"version":1},"dragon_face":{"id":"dragon_face","name":"Dragon Face","keywords":["animal","myth","nature","chinese","green"],"skins":[{"unified":"1f432","native":"\ud83d\udc32"}],"version":1},"dragon":{"id":"dragon","name":"Dragon","keywords":["animal","myth","nature","chinese","green"],"skins":[{"unified":"1f409","native":"\ud83d\udc09"}],"version":1},"sauropod":{"id":"sauropod","name":"Sauropod","keywords":["animal","nature","dinosaur","brachiosaurus","brontosaurus","diplodocus","extinct"],"skins":[{"unified":"1f995","native":"\ud83e\udd95"}],"version":5},"t-rex":{"id":"t-rex","name":"T-Rex","keywords":["t","rex","animal","nature","dinosaur","tyrannosaurus","extinct"],"skins":[{"unified":"1f996","native":"\ud83e\udd96"}],"version":5},"whale":{"id":"whale","name":"Spouting Whale","keywords":["animal","nature","sea","ocean"],"skins":[{"unified":"1f433","native":"\ud83d\udc33"}],"version":1},"whale2":{"id":"whale2","name":"Whale","keywords":["whale2","animal","nature","sea","ocean"],"skins":[{"unified":"1f40b","native":"\ud83d\udc0b"}],"version":1},"dolphin":{"id":"dolphin","name":"Dolphin","keywords":["flipper","animal","nature","fish","sea","ocean","fins","beach"],"skins":[{"unified":"1f42c","native":"\ud83d\udc2c"}],"version":1},"seal":{"id":"seal","name":"Seal","keywords":["animal","creature","sea"],"skins":[{"unified":"1f9ad","native":"\ud83e\uddad"}],"version":13},"fish":{"id":"fish","name":"Fish","keywords":["animal","food","nature"],"skins":[{"unified":"1f41f","native":"\ud83d\udc1f"}],"version":1},"tropical_fish":{"id":"tropical_fish","name":"Tropical Fish","keywords":["animal","swim","ocean","beach","nemo"],"skins":[{"unified":"1f420","native":"\ud83d\udc20"}],"version":1},"blowfish":{"id":"blowfish","name":"Blowfish","keywords":["animal","nature","food","sea","ocean"],"skins":[{"unified":"1f421","native":"\ud83d\udc21"}],"version":1},"shark":{"id":"shark","name":"Shark","keywords":["animal","nature","fish","sea","ocean","jaws","fins","beach"],"skins":[{"unified":"1f988","native":"\ud83e\udd88"}],"version":3},"octopus":{"id":"octopus","name":"Octopus","keywords":["animal","creature","ocean","sea","nature","beach"],"skins":[{"unified":"1f419","native":"\ud83d\udc19"}],"version":1},"shell":{"id":"shell","name":"Spiral Shell","keywords":["nature","sea","beach"],"skins":[{"unified":"1f41a","native":"\ud83d\udc1a"}],"version":1},"coral":{"id":"coral","name":"Coral","keywords":["ocean","sea","reef"],"skins":[{"unified":"1fab8","native":"\ud83e\udeb8"}],"version":14},"snail":{"id":"snail","name":"Snail","keywords":["slow","animal","shell"],"skins":[{"unified":"1f40c","native":"\ud83d\udc0c"}],"version":1},"butterfly":{"id":"butterfly","name":"Butterfly","keywords":["animal","insect","nature","caterpillar"],"skins":[{"unified":"1f98b","native":"\ud83e\udd8b"}],"version":3},"bug":{"id":"bug","name":"Bug","keywords":["animal","insect","nature","worm"],"skins":[{"unified":"1f41b","native":"\ud83d\udc1b"}],"version":1},"ant":{"id":"ant","name":"Ant","keywords":["animal","insect","nature","bug"],"skins":[{"unified":"1f41c","native":"\ud83d\udc1c"}],"version":1},"bee":{"id":"bee","name":"Honeybee","keywords":["bee","animal","insect","nature","bug","spring","honey"],"skins":[{"unified":"1f41d","native":"\ud83d\udc1d"}],"version":1},"beetle":{"id":"beetle","name":"Beetle","keywords":["insect"],"skins":[{"unified":"1fab2","native":"\ud83e\udeb2"}],"version":13},"ladybug":{"id":"ladybug","name":"Lady Beetle","keywords":["ladybug","animal","insect","nature"],"skins":[{"unified":"1f41e","native":"\ud83d\udc1e"}],"version":1},"cricket":{"id":"cricket","name":"Cricket","keywords":["animal","chirp"],"skins":[{"unified":"1f997","native":"\ud83e\udd97"}],"version":5},"cockroach":{"id":"cockroach","name":"Cockroach","keywords":["insect","pests"],"skins":[{"unified":"1fab3","native":"\ud83e\udeb3"}],"version":13},"spider":{"id":"spider","name":"Spider","keywords":["animal","arachnid"],"skins":[{"unified":"1f577-fe0f","native":"\ud83d\udd77\ufe0f"}],"version":1},"spider_web":{"id":"spider_web","name":"Spider Web","keywords":["animal","insect","arachnid","silk"],"skins":[{"unified":"1f578-fe0f","native":"\ud83d\udd78\ufe0f"}],"version":1},"scorpion":{"id":"scorpion","name":"Scorpion","keywords":["animal","arachnid"],"skins":[{"unified":"1f982","native":"\ud83e\udd82"}],"version":1},"mosquito":{"id":"mosquito","name":"Mosquito","keywords":["animal","nature","insect","malaria"],"skins":[{"unified":"1f99f","native":"\ud83e\udd9f"}],"version":11},"fly":{"id":"fly","name":"Fly","keywords":["insect"],"skins":[{"unified":"1fab0","native":"\ud83e\udeb0"}],"version":13},"worm":{"id":"worm","name":"Worm","keywords":["animal"],"skins":[{"unified":"1fab1","native":"\ud83e\udeb1"}],"version":13},"microbe":{"id":"microbe","name":"Microbe","keywords":["amoeba","bacteria","germs","virus"],"skins":[{"unified":"1f9a0","native":"\ud83e\udda0"}],"version":11},"bouquet":{"id":"bouquet","name":"Bouquet","keywords":["flowers","nature","spring"],"skins":[{"unified":"1f490","native":"\ud83d\udc90"}],"version":1},"cherry_blossom":{"id":"cherry_blossom","name":"Cherry Blossom","keywords":["nature","plant","spring","flower"],"skins":[{"unified":"1f338","native":"\ud83c\udf38"}],"version":1},"white_flower":{"id":"white_flower","name":"White Flower","keywords":["japanese","spring"],"skins":[{"unified":"1f4ae","native":"\ud83d\udcae"}],"version":1},"lotus":{"id":"lotus","name":"Lotus","keywords":["flower","calm","meditation"],"skins":[{"unified":"1fab7","native":"\ud83e\udeb7"}],"version":14},"rosette":{"id":"rosette","name":"Rosette","keywords":["flower","decoration","military"],"skins":[{"unified":"1f3f5-fe0f","native":"\ud83c\udff5\ufe0f"}],"version":1},"rose":{"id":"rose","name":"Rose","keywords":["flowers","valentines","love","spring"],"skins":[{"unified":"1f339","native":"\ud83c\udf39"}],"version":1},"wilted_flower":{"id":"wilted_flower","name":"Wilted Flower","keywords":["plant","nature"],"skins":[{"unified":"1f940","native":"\ud83e\udd40"}],"version":3},"hibiscus":{"id":"hibiscus","name":"Hibiscus","keywords":["plant","vegetable","flowers","beach"],"skins":[{"unified":"1f33a","native":"\ud83c\udf3a"}],"version":1},"sunflower":{"id":"sunflower","name":"Sunflower","keywords":["nature","plant","fall"],"skins":[{"unified":"1f33b","native":"\ud83c\udf3b"}],"version":1},"blossom":{"id":"blossom","name":"Blossom","keywords":["nature","flowers","yellow"],"skins":[{"unified":"1f33c","native":"\ud83c\udf3c"}],"version":1},"tulip":{"id":"tulip","name":"Tulip","keywords":["flowers","plant","nature","summer","spring"],"skins":[{"unified":"1f337","native":"\ud83c\udf37"}],"version":1},"seedling":{"id":"seedling","name":"Seedling","keywords":["plant","nature","grass","lawn","spring"],"skins":[{"unified":"1f331","native":"\ud83c\udf31"}],"version":1},"potted_plant":{"id":"potted_plant","name":"Potted Plant","keywords":["greenery","house"],"skins":[{"unified":"1fab4","native":"\ud83e\udeb4"}],"version":13},"evergreen_tree":{"id":"evergreen_tree","name":"Evergreen Tree","keywords":["plant","nature"],"skins":[{"unified":"1f332","native":"\ud83c\udf32"}],"version":1},"deciduous_tree":{"id":"deciduous_tree","name":"Deciduous Tree","keywords":["plant","nature"],"skins":[{"unified":"1f333","native":"\ud83c\udf33"}],"version":1},"palm_tree":{"id":"palm_tree","name":"Palm Tree","keywords":["plant","vegetable","nature","summer","beach","mojito","tropical"],"skins":[{"unified":"1f334","native":"\ud83c\udf34"}],"version":1},"cactus":{"id":"cactus","name":"Cactus","keywords":["vegetable","plant","nature"],"skins":[{"unified":"1f335","native":"\ud83c\udf35"}],"version":1},"ear_of_rice":{"id":"ear_of_rice","name":"Ear of Rice","keywords":["sheaf","nature","plant"],"skins":[{"unified":"1f33e","native":"\ud83c\udf3e"}],"version":1},"herb":{"id":"herb","name":"Herb","keywords":["vegetable","plant","medicine","weed","grass","lawn"],"skins":[{"unified":"1f33f","native":"\ud83c\udf3f"}],"version":1},"shamrock":{"id":"shamrock","name":"Shamrock","keywords":["vegetable","plant","nature","irish","clover"],"skins":[{"unified":"2618-fe0f","native":"\u2618\ufe0f"}],"version":1},"four_leaf_clover":{"id":"four_leaf_clover","name":"Four Leaf Clover","keywords":["vegetable","plant","nature","lucky","irish"],"skins":[{"unified":"1f340","native":"\ud83c\udf40"}],"version":1},"maple_leaf":{"id":"maple_leaf","name":"Maple Leaf","keywords":["nature","plant","vegetable","ca","fall"],"skins":[{"unified":"1f341","native":"\ud83c\udf41"}],"version":1},"fallen_leaf":{"id":"fallen_leaf","name":"Fallen Leaf","keywords":["nature","plant","vegetable","leaves"],"skins":[{"unified":"1f342","native":"\ud83c\udf42"}],"version":1},"leaves":{"id":"leaves","name":"Leaf Fluttering in Wind","keywords":["leaves","nature","plant","tree","vegetable","grass","lawn","spring"],"skins":[{"unified":"1f343","native":"\ud83c\udf43"}],"version":1},"empty_nest":{"id":"empty_nest","name":"Empty Nest","keywords":["bird"],"skins":[{"unified":"1fab9","native":"\ud83e\udeb9"}],"version":14},"nest_with_eggs":{"id":"nest_with_eggs","name":"Nest with Eggs","keywords":["bird"],"skins":[{"unified":"1faba","native":"\ud83e\udeba"}],"version":14},"grapes":{"id":"grapes","name":"Grapes","keywords":["fruit","food","wine"],"skins":[{"unified":"1f347","native":"\ud83c\udf47"}],"version":1},"melon":{"id":"melon","name":"Melon","keywords":["fruit","nature","food"],"skins":[{"unified":"1f348","native":"\ud83c\udf48"}],"version":1},"watermelon":{"id":"watermelon","name":"Watermelon","keywords":["fruit","food","picnic","summer"],"skins":[{"unified":"1f349","native":"\ud83c\udf49"}],"version":1},"tangerine":{"id":"tangerine","name":"Tangerine","keywords":["food","fruit","nature","orange"],"skins":[{"unified":"1f34a","native":"\ud83c\udf4a"}],"version":1},"lemon":{"id":"lemon","name":"Lemon","keywords":["fruit","nature"],"skins":[{"unified":"1f34b","native":"\ud83c\udf4b"}],"version":1},"banana":{"id":"banana","name":"Banana","keywords":["fruit","food","monkey"],"skins":[{"unified":"1f34c","native":"\ud83c\udf4c"}],"version":1},"pineapple":{"id":"pineapple","name":"Pineapple","keywords":["fruit","nature","food"],"skins":[{"unified":"1f34d","native":"\ud83c\udf4d"}],"version":1},"mango":{"id":"mango","name":"Mango","keywords":["fruit","food","tropical"],"skins":[{"unified":"1f96d","native":"\ud83e\udd6d"}],"version":11},"apple":{"id":"apple","name":"Red Apple","keywords":["fruit","mac","school"],"skins":[{"unified":"1f34e","native":"\ud83c\udf4e"}],"version":1},"green_apple":{"id":"green_apple","name":"Green Apple","keywords":["fruit","nature"],"skins":[{"unified":"1f34f","native":"\ud83c\udf4f"}],"version":1},"pear":{"id":"pear","name":"Pear","keywords":["fruit","nature","food"],"skins":[{"unified":"1f350","native":"\ud83c\udf50"}],"version":1},"peach":{"id":"peach","name":"Peach","keywords":["fruit","nature","food"],"skins":[{"unified":"1f351","native":"\ud83c\udf51"}],"version":1},"cherries":{"id":"cherries","name":"Cherries","keywords":["food","fruit"],"skins":[{"unified":"1f352","native":"\ud83c\udf52"}],"version":1},"strawberry":{"id":"strawberry","name":"Strawberry","keywords":["fruit","food","nature"],"skins":[{"unified":"1f353","native":"\ud83c\udf53"}],"version":1},"blueberries":{"id":"blueberries","name":"Blueberries","keywords":["fruit"],"skins":[{"unified":"1fad0","native":"\ud83e\uded0"}],"version":13},"kiwifruit":{"id":"kiwifruit","name":"Kiwifruit","keywords":["kiwi","fruit","food"],"skins":[{"unified":"1f95d","native":"\ud83e\udd5d"}],"version":3},"tomato":{"id":"tomato","name":"Tomato","keywords":["fruit","vegetable","nature","food"],"skins":[{"unified":"1f345","native":"\ud83c\udf45"}],"version":1},"olive":{"id":"olive","name":"Olive","keywords":["fruit"],"skins":[{"unified":"1fad2","native":"\ud83e\uded2"}],"version":13},"coconut":{"id":"coconut","name":"Coconut","keywords":["fruit","nature","food","palm"],"skins":[{"unified":"1f965","native":"\ud83e\udd65"}],"version":5},"avocado":{"id":"avocado","name":"Avocado","keywords":["fruit","food"],"skins":[{"unified":"1f951","native":"\ud83e\udd51"}],"version":3},"eggplant":{"id":"eggplant","name":"Eggplant","keywords":["vegetable","nature","food","aubergine"],"skins":[{"unified":"1f346","native":"\ud83c\udf46"}],"version":1},"potato":{"id":"potato","name":"Potato","keywords":["food","tuber","vegatable","starch"],"skins":[{"unified":"1f954","native":"\ud83e\udd54"}],"version":3},"carrot":{"id":"carrot","name":"Carrot","keywords":["vegetable","food","orange"],"skins":[{"unified":"1f955","native":"\ud83e\udd55"}],"version":3},"corn":{"id":"corn","name":"Ear of Corn","keywords":["food","vegetable","plant"],"skins":[{"unified":"1f33d","native":"\ud83c\udf3d"}],"version":1},"hot_pepper":{"id":"hot_pepper","name":"Hot Pepper","keywords":["food","spicy","chilli","chili"],"skins":[{"unified":"1f336-fe0f","native":"\ud83c\udf36\ufe0f"}],"version":1},"bell_pepper":{"id":"bell_pepper","name":"Bell Pepper","keywords":["fruit","plant"],"skins":[{"unified":"1fad1","native":"\ud83e\uded1"}],"version":13},"cucumber":{"id":"cucumber","name":"Cucumber","keywords":["fruit","food","pickle"],"skins":[{"unified":"1f952","native":"\ud83e\udd52"}],"version":3},"leafy_green":{"id":"leafy_green","name":"Leafy Green","keywords":["food","vegetable","plant","bok","choy","cabbage","kale","lettuce"],"skins":[{"unified":"1f96c","native":"\ud83e\udd6c"}],"version":11},"broccoli":{"id":"broccoli","name":"Broccoli","keywords":["fruit","food","vegetable"],"skins":[{"unified":"1f966","native":"\ud83e\udd66"}],"version":5},"garlic":{"id":"garlic","name":"Garlic","keywords":["food","spice","cook"],"skins":[{"unified":"1f9c4","native":"\ud83e\uddc4"}],"version":12},"onion":{"id":"onion","name":"Onion","keywords":["cook","food","spice"],"skins":[{"unified":"1f9c5","native":"\ud83e\uddc5"}],"version":12},"mushroom":{"id":"mushroom","name":"Mushroom","keywords":["plant","vegetable"],"skins":[{"unified":"1f344","native":"\ud83c\udf44"}],"version":1},"peanuts":{"id":"peanuts","name":"Peanuts","keywords":["food","nut"],"skins":[{"unified":"1f95c","native":"\ud83e\udd5c"}],"version":3},"beans":{"id":"beans","name":"Beans","keywords":["food"],"skins":[{"unified":"1fad8","native":"\ud83e\uded8"}],"version":14},"chestnut":{"id":"chestnut","name":"Chestnut","keywords":["food","squirrel"],"skins":[{"unified":"1f330","native":"\ud83c\udf30"}],"version":1},"bread":{"id":"bread","name":"Bread","keywords":["food","wheat","breakfast","toast"],"skins":[{"unified":"1f35e","native":"\ud83c\udf5e"}],"version":1},"croissant":{"id":"croissant","name":"Croissant","keywords":["food","bread","french"],"skins":[{"unified":"1f950","native":"\ud83e\udd50"}],"version":3},"baguette_bread":{"id":"baguette_bread","name":"Baguette Bread","keywords":["food","french"],"skins":[{"unified":"1f956","native":"\ud83e\udd56"}],"version":3},"flatbread":{"id":"flatbread","name":"Flatbread","keywords":["flour","food"],"skins":[{"unified":"1fad3","native":"\ud83e\uded3"}],"version":13},"pretzel":{"id":"pretzel","name":"Pretzel","keywords":["food","bread","twisted"],"skins":[{"unified":"1f968","native":"\ud83e\udd68"}],"version":5},"bagel":{"id":"bagel","name":"Bagel","keywords":["food","bread","bakery","schmear"],"skins":[{"unified":"1f96f","native":"\ud83e\udd6f"}],"version":11},"pancakes":{"id":"pancakes","name":"Pancakes","keywords":["food","breakfast","flapjacks","hotcakes"],"skins":[{"unified":"1f95e","native":"\ud83e\udd5e"}],"version":3},"waffle":{"id":"waffle","name":"Waffle","keywords":["food","breakfast"],"skins":[{"unified":"1f9c7","native":"\ud83e\uddc7"}],"version":12},"cheese_wedge":{"id":"cheese_wedge","name":"Cheese Wedge","keywords":["food","chadder"],"skins":[{"unified":"1f9c0","native":"\ud83e\uddc0"}],"version":1},"meat_on_bone":{"id":"meat_on_bone","name":"Meat on Bone","keywords":["good","food","drumstick"],"skins":[{"unified":"1f356","native":"\ud83c\udf56"}],"version":1},"poultry_leg":{"id":"poultry_leg","name":"Poultry Leg","keywords":["food","meat","drumstick","bird","chicken","turkey"],"skins":[{"unified":"1f357","native":"\ud83c\udf57"}],"version":1},"cut_of_meat":{"id":"cut_of_meat","name":"Cut of Meat","keywords":["food","cow","chop","lambchop","porkchop"],"skins":[{"unified":"1f969","native":"\ud83e\udd69"}],"version":5},"bacon":{"id":"bacon","name":"Bacon","keywords":["food","breakfast","pork","pig","meat"],"skins":[{"unified":"1f953","native":"\ud83e\udd53"}],"version":3},"hamburger":{"id":"hamburger","name":"Hamburger","keywords":["meat","fast","food","beef","cheeseburger","mcdonalds","burger","king"],"skins":[{"unified":"1f354","native":"\ud83c\udf54"}],"version":1},"fries":{"id":"fries","name":"French Fries","keywords":["chips","snack","fast","food"],"skins":[{"unified":"1f35f","native":"\ud83c\udf5f"}],"version":1},"pizza":{"id":"pizza","name":"Pizza","keywords":["food","party"],"skins":[{"unified":"1f355","native":"\ud83c\udf55"}],"version":1},"hotdog":{"id":"hotdog","name":"Hot Dog","keywords":["hotdog","food","frankfurter"],"skins":[{"unified":"1f32d","native":"\ud83c\udf2d"}],"version":1},"sandwich":{"id":"sandwich","name":"Sandwich","keywords":["food","lunch","bread"],"skins":[{"unified":"1f96a","native":"\ud83e\udd6a"}],"version":5},"taco":{"id":"taco","name":"Taco","keywords":["food","mexican"],"skins":[{"unified":"1f32e","native":"\ud83c\udf2e"}],"version":1},"burrito":{"id":"burrito","name":"Burrito","keywords":["food","mexican"],"skins":[{"unified":"1f32f","native":"\ud83c\udf2f"}],"version":1},"tamale":{"id":"tamale","name":"Tamale","keywords":["food","masa"],"skins":[{"unified":"1fad4","native":"\ud83e\uded4"}],"version":13},"stuffed_flatbread":{"id":"stuffed_flatbread","name":"Stuffed Flatbread","keywords":["food","gyro"],"skins":[{"unified":"1f959","native":"\ud83e\udd59"}],"version":3},"falafel":{"id":"falafel","name":"Falafel","keywords":["food"],"skins":[{"unified":"1f9c6","native":"\ud83e\uddc6"}],"version":12},"egg":{"id":"egg","name":"Egg","keywords":["food","chicken","breakfast"],"skins":[{"unified":"1f95a","native":"\ud83e\udd5a"}],"version":3},"fried_egg":{"id":"fried_egg","name":"Cooking","keywords":["fried","egg","food","breakfast","kitchen"],"skins":[{"unified":"1f373","native":"\ud83c\udf73"}],"version":1},"shallow_pan_of_food":{"id":"shallow_pan_of_food","name":"Shallow Pan of Food","keywords":["cooking","casserole","paella"],"skins":[{"unified":"1f958","native":"\ud83e\udd58"}],"version":3},"stew":{"id":"stew","name":"Pot of Food","keywords":["stew","meat","soup"],"skins":[{"unified":"1f372","native":"\ud83c\udf72"}],"version":1},"fondue":{"id":"fondue","name":"Fondue","keywords":["cheese","pot","food"],"skins":[{"unified":"1fad5","native":"\ud83e\uded5"}],"version":13},"bowl_with_spoon":{"id":"bowl_with_spoon","name":"Bowl with Spoon","keywords":["food","breakfast","cereal","oatmeal","porridge"],"skins":[{"unified":"1f963","native":"\ud83e\udd63"}],"version":5},"green_salad":{"id":"green_salad","name":"Green Salad","keywords":["food","healthy","lettuce"],"skins":[{"unified":"1f957","native":"\ud83e\udd57"}],"version":3},"popcorn":{"id":"popcorn","name":"Popcorn","keywords":["food","movie","theater","films","snack"],"skins":[{"unified":"1f37f","native":"\ud83c\udf7f"}],"version":1},"butter":{"id":"butter","name":"Butter","keywords":["food","cook"],"skins":[{"unified":"1f9c8","native":"\ud83e\uddc8"}],"version":12},"salt":{"id":"salt","name":"Salt","keywords":["condiment","shaker"],"skins":[{"unified":"1f9c2","native":"\ud83e\uddc2"}],"version":11},"canned_food":{"id":"canned_food","name":"Canned Food","keywords":["soup"],"skins":[{"unified":"1f96b","native":"\ud83e\udd6b"}],"version":5},"bento":{"id":"bento","name":"Bento Box","keywords":["food","japanese"],"skins":[{"unified":"1f371","native":"\ud83c\udf71"}],"version":1},"rice_cracker":{"id":"rice_cracker","name":"Rice Cracker","keywords":["food","japanese"],"skins":[{"unified":"1f358","native":"\ud83c\udf58"}],"version":1},"rice_ball":{"id":"rice_ball","name":"Rice Ball","keywords":["food","japanese"],"skins":[{"unified":"1f359","native":"\ud83c\udf59"}],"version":1},"rice":{"id":"rice","name":"Cooked Rice","keywords":["food","china","asian"],"skins":[{"unified":"1f35a","native":"\ud83c\udf5a"}],"version":1},"curry":{"id":"curry","name":"Curry Rice","keywords":["food","spicy","hot","indian"],"skins":[{"unified":"1f35b","native":"\ud83c\udf5b"}],"version":1},"ramen":{"id":"ramen","name":"Steaming Bowl","keywords":["ramen","food","japanese","noodle","chopsticks"],"skins":[{"unified":"1f35c","native":"\ud83c\udf5c"}],"version":1},"spaghetti":{"id":"spaghetti","name":"Spaghetti","keywords":["food","italian","noodle"],"skins":[{"unified":"1f35d","native":"\ud83c\udf5d"}],"version":1},"sweet_potato":{"id":"sweet_potato","name":"Roasted Sweet Potato","keywords":["food","nature"],"skins":[{"unified":"1f360","native":"\ud83c\udf60"}],"version":1},"oden":{"id":"oden","name":"Oden","keywords":["food","japanese"],"skins":[{"unified":"1f362","native":"\ud83c\udf62"}],"version":1},"sushi":{"id":"sushi","name":"Sushi","keywords":["food","fish","japanese","rice"],"skins":[{"unified":"1f363","native":"\ud83c\udf63"}],"version":1},"fried_shrimp":{"id":"fried_shrimp","name":"Fried Shrimp","keywords":["food","animal","appetizer","summer"],"skins":[{"unified":"1f364","native":"\ud83c\udf64"}],"version":1},"fish_cake":{"id":"fish_cake","name":"Fish Cake with Swirl","keywords":["food","japan","sea","beach","narutomaki","pink","kamaboko","surimi","ramen"],"skins":[{"unified":"1f365","native":"\ud83c\udf65"}],"version":1},"moon_cake":{"id":"moon_cake","name":"Moon Cake","keywords":["food","autumn"],"skins":[{"unified":"1f96e","native":"\ud83e\udd6e"}],"version":11},"dango":{"id":"dango","name":"Dango","keywords":["food","dessert","sweet","japanese","barbecue","meat"],"skins":[{"unified":"1f361","native":"\ud83c\udf61"}],"version":1},"dumpling":{"id":"dumpling","name":"Dumpling","keywords":["food","empanada","pierogi","potsticker"],"skins":[{"unified":"1f95f","native":"\ud83e\udd5f"}],"version":5},"fortune_cookie":{"id":"fortune_cookie","name":"Fortune Cookie","keywords":["food","prophecy"],"skins":[{"unified":"1f960","native":"\ud83e\udd60"}],"version":5},"takeout_box":{"id":"takeout_box","name":"Takeout Box","keywords":["food","leftovers"],"skins":[{"unified":"1f961","native":"\ud83e\udd61"}],"version":5},"crab":{"id":"crab","name":"Crab","keywords":["animal","crustacean"],"skins":[{"unified":"1f980","native":"\ud83e\udd80"}],"version":1},"lobster":{"id":"lobster","name":"Lobster","keywords":["animal","nature","bisque","claws","seafood"],"skins":[{"unified":"1f99e","native":"\ud83e\udd9e"}],"version":11},"shrimp":{"id":"shrimp","name":"Shrimp","keywords":["animal","ocean","nature","seafood"],"skins":[{"unified":"1f990","native":"\ud83e\udd90"}],"version":3},"squid":{"id":"squid","name":"Squid","keywords":["animal","nature","ocean","sea"],"skins":[{"unified":"1f991","native":"\ud83e\udd91"}],"version":3},"oyster":{"id":"oyster","name":"Oyster","keywords":["food"],"skins":[{"unified":"1f9aa","native":"\ud83e\uddaa"}],"version":12},"icecream":{"id":"icecream","name":"Soft Ice Cream","keywords":["icecream","food","hot","dessert","summer"],"skins":[{"unified":"1f366","native":"\ud83c\udf66"}],"version":1},"shaved_ice":{"id":"shaved_ice","name":"Shaved Ice","keywords":["hot","dessert","summer"],"skins":[{"unified":"1f367","native":"\ud83c\udf67"}],"version":1},"ice_cream":{"id":"ice_cream","name":"Ice Cream","keywords":["food","hot","dessert"],"skins":[{"unified":"1f368","native":"\ud83c\udf68"}],"version":1},"doughnut":{"id":"doughnut","name":"Doughnut","keywords":["food","dessert","snack","sweet","donut"],"skins":[{"unified":"1f369","native":"\ud83c\udf69"}],"version":1},"cookie":{"id":"cookie","name":"Cookie","keywords":["food","snack","oreo","chocolate","sweet","dessert"],"skins":[{"unified":"1f36a","native":"\ud83c\udf6a"}],"version":1},"birthday":{"id":"birthday","name":"Birthday Cake","keywords":["food","dessert"],"skins":[{"unified":"1f382","native":"\ud83c\udf82"}],"version":1},"cake":{"id":"cake","name":"Shortcake","keywords":["cake","food","dessert"],"skins":[{"unified":"1f370","native":"\ud83c\udf70"}],"version":1},"cupcake":{"id":"cupcake","name":"Cupcake","keywords":["food","dessert","bakery","sweet"],"skins":[{"unified":"1f9c1","native":"\ud83e\uddc1"}],"version":11},"pie":{"id":"pie","name":"Pie","keywords":["food","dessert","pastry"],"skins":[{"unified":"1f967","native":"\ud83e\udd67"}],"version":5},"chocolate_bar":{"id":"chocolate_bar","name":"Chocolate Bar","keywords":["food","snack","dessert","sweet"],"skins":[{"unified":"1f36b","native":"\ud83c\udf6b"}],"version":1},"candy":{"id":"candy","name":"Candy","keywords":["snack","dessert","sweet","lolly"],"skins":[{"unified":"1f36c","native":"\ud83c\udf6c"}],"version":1},"lollipop":{"id":"lollipop","name":"Lollipop","keywords":["food","snack","candy","sweet"],"skins":[{"unified":"1f36d","native":"\ud83c\udf6d"}],"version":1},"custard":{"id":"custard","name":"Custard","keywords":["dessert","food"],"skins":[{"unified":"1f36e","native":"\ud83c\udf6e"}],"version":1},"honey_pot":{"id":"honey_pot","name":"Honey Pot","keywords":["bees","sweet","kitchen"],"skins":[{"unified":"1f36f","native":"\ud83c\udf6f"}],"version":1},"baby_bottle":{"id":"baby_bottle","name":"Baby Bottle","keywords":["food","container","milk"],"skins":[{"unified":"1f37c","native":"\ud83c\udf7c"}],"version":1},"glass_of_milk":{"id":"glass_of_milk","name":"Glass of Milk","keywords":["beverage","drink","cow"],"skins":[{"unified":"1f95b","native":"\ud83e\udd5b"}],"version":3},"coffee":{"id":"coffee","name":"Hot Beverage","keywords":["coffee","caffeine","latte","espresso"],"skins":[{"unified":"2615","native":"\u2615"}],"version":1},"teapot":{"id":"teapot","name":"Teapot","keywords":["drink","hot"],"skins":[{"unified":"1fad6","native":"\ud83e\uded6"}],"version":13},"tea":{"id":"tea","name":"Teacup Without Handle","keywords":["tea","drink","bowl","breakfast","green","british"],"skins":[{"unified":"1f375","native":"\ud83c\udf75"}],"version":1},"sake":{"id":"sake","name":"Sake","keywords":["wine","drink","drunk","beverage","japanese","alcohol","booze"],"skins":[{"unified":"1f376","native":"\ud83c\udf76"}],"version":1},"champagne":{"id":"champagne","name":"Bottle with Popping Cork","keywords":["champagne","drink","wine","celebration"],"skins":[{"unified":"1f37e","native":"\ud83c\udf7e"}],"version":1},"wine_glass":{"id":"wine_glass","name":"Wine Glass","keywords":["drink","beverage","drunk","alcohol","booze"],"skins":[{"unified":"1f377","native":"\ud83c\udf77"}],"version":1},"cocktail":{"id":"cocktail","name":"Cocktail Glass","keywords":["drink","drunk","alcohol","beverage","booze","mojito"],"skins":[{"unified":"1f378","native":"\ud83c\udf78"}],"version":1},"tropical_drink":{"id":"tropical_drink","name":"Tropical Drink","keywords":["beverage","cocktail","summer","beach","alcohol","booze","mojito"],"skins":[{"unified":"1f379","native":"\ud83c\udf79"}],"version":1},"beer":{"id":"beer","name":"Beer Mug","keywords":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"skins":[{"unified":"1f37a","native":"\ud83c\udf7a"}],"version":1},"beers":{"id":"beers","name":"Clinking Beer Mugs","keywords":["beers","relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"skins":[{"unified":"1f37b","native":"\ud83c\udf7b"}],"version":1},"clinking_glasses":{"id":"clinking_glasses","name":"Clinking Glasses","keywords":["beverage","drink","party","alcohol","celebrate","cheers","wine","champagne","toast"],"skins":[{"unified":"1f942","native":"\ud83e\udd42"}],"version":3},"tumbler_glass":{"id":"tumbler_glass","name":"Tumbler Glass","keywords":["drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","shot"],"skins":[{"unified":"1f943","native":"\ud83e\udd43"}],"version":3},"pouring_liquid":{"id":"pouring_liquid","name":"Pouring Liquid","keywords":["cup","water"],"skins":[{"unified":"1fad7","native":"\ud83e\uded7"}],"version":14},"cup_with_straw":{"id":"cup_with_straw","name":"Cup with Straw","keywords":["drink","soda"],"skins":[{"unified":"1f964","native":"\ud83e\udd64"}],"version":5},"bubble_tea":{"id":"bubble_tea","name":"Bubble Tea","keywords":["taiwan","boba","milk","straw"],"skins":[{"unified":"1f9cb","native":"\ud83e\uddcb"}],"version":13},"beverage_box":{"id":"beverage_box","name":"Beverage Box","keywords":["drink"],"skins":[{"unified":"1f9c3","native":"\ud83e\uddc3"}],"version":12},"mate_drink":{"id":"mate_drink","name":"Mate","keywords":["drink","tea","beverage"],"skins":[{"unified":"1f9c9","native":"\ud83e\uddc9"}],"version":12},"ice_cube":{"id":"ice_cube","name":"Ice","keywords":["cube","water","cold"],"skins":[{"unified":"1f9ca","native":"\ud83e\uddca"}],"version":12},"chopsticks":{"id":"chopsticks","name":"Chopsticks","keywords":["food"],"skins":[{"unified":"1f962","native":"\ud83e\udd62"}],"version":5},"knife_fork_plate":{"id":"knife_fork_plate","name":"Fork and Knife with Plate","keywords":["food","eat","meal","lunch","dinner","restaurant"],"skins":[{"unified":"1f37d-fe0f","native":"\ud83c\udf7d\ufe0f"}],"version":1},"fork_and_knife":{"id":"fork_and_knife","name":"Fork and Knife","keywords":["cutlery","kitchen"],"skins":[{"unified":"1f374","native":"\ud83c\udf74"}],"version":1},"spoon":{"id":"spoon","name":"Spoon","keywords":["cutlery","kitchen","tableware"],"skins":[{"unified":"1f944","native":"\ud83e\udd44"}],"version":3},"hocho":{"id":"hocho","name":"Hocho","keywords":["knife","kitchen","blade","cutlery","weapon"],"skins":[{"unified":"1f52a","native":"\ud83d\udd2a"}],"version":1},"jar":{"id":"jar","name":"Jar","keywords":["container","sauce"],"skins":[{"unified":"1fad9","native":"\ud83e\uded9"}],"version":14},"amphora":{"id":"amphora","name":"Amphora","keywords":["vase","jar"],"skins":[{"unified":"1f3fa","native":"\ud83c\udffa"}],"version":1},"earth_africa":{"id":"earth_africa","name":"Earth Globe Europe-Africa","keywords":["africa","showing","europe","world","international"],"skins":[{"unified":"1f30d","native":"\ud83c\udf0d"}],"version":1},"earth_americas":{"id":"earth_americas","name":"Earth Globe Americas","keywords":["showing","world","USA","international"],"skins":[{"unified":"1f30e","native":"\ud83c\udf0e"}],"version":1},"earth_asia":{"id":"earth_asia","name":"Earth Globe Asia-Australia","keywords":["asia","showing","australia","world","east","international"],"skins":[{"unified":"1f30f","native":"\ud83c\udf0f"}],"version":1},"globe_with_meridians":{"id":"globe_with_meridians","name":"Globe with Meridians","keywords":["earth","international","world","internet","interweb","i18n"],"skins":[{"unified":"1f310","native":"\ud83c\udf10"}],"version":1},"world_map":{"id":"world_map","name":"World Map","keywords":["location","direction"],"skins":[{"unified":"1f5fa-fe0f","native":"\ud83d\uddfa\ufe0f"}],"version":1},"japan":{"id":"japan","name":"Map of Japan","keywords":["nation","country","japanese","asia"],"skins":[{"unified":"1f5fe","native":"\ud83d\uddfe"}],"version":1},"compass":{"id":"compass","name":"Compass","keywords":["magnetic","navigation","orienteering"],"skins":[{"unified":"1f9ed","native":"\ud83e\udded"}],"version":11},"snow_capped_mountain":{"id":"snow_capped_mountain","name":"Snow-Capped Mountain","keywords":["snow","capped","photo","nature","environment","winter","cold"],"skins":[{"unified":"1f3d4-fe0f","native":"\ud83c\udfd4\ufe0f"}],"version":1},"mountain":{"id":"mountain","name":"Mountain","keywords":["photo","nature","environment"],"skins":[{"unified":"26f0-fe0f","native":"\u26f0\ufe0f"}],"version":1},"volcano":{"id":"volcano","name":"Volcano","keywords":["photo","nature","disaster"],"skins":[{"unified":"1f30b","native":"\ud83c\udf0b"}],"version":1},"mount_fuji":{"id":"mount_fuji","name":"Mount Fuji","keywords":["photo","mountain","nature","japanese"],"skins":[{"unified":"1f5fb","native":"\ud83d\uddfb"}],"version":1},"camping":{"id":"camping","name":"Camping","keywords":["photo","outdoors","tent"],"skins":[{"unified":"1f3d5-fe0f","native":"\ud83c\udfd5\ufe0f"}],"version":1},"beach_with_umbrella":{"id":"beach_with_umbrella","name":"Beach with Umbrella","keywords":["weather","summer","sunny","sand","mojito"],"skins":[{"unified":"1f3d6-fe0f","native":"\ud83c\udfd6\ufe0f"}],"version":1},"desert":{"id":"desert","name":"Desert","keywords":["photo","warm","saharah"],"skins":[{"unified":"1f3dc-fe0f","native":"\ud83c\udfdc\ufe0f"}],"version":1},"desert_island":{"id":"desert_island","name":"Desert Island","keywords":["photo","tropical","mojito"],"skins":[{"unified":"1f3dd-fe0f","native":"\ud83c\udfdd\ufe0f"}],"version":1},"national_park":{"id":"national_park","name":"National Park","keywords":["photo","environment","nature"],"skins":[{"unified":"1f3de-fe0f","native":"\ud83c\udfde\ufe0f"}],"version":1},"stadium":{"id":"stadium","name":"Stadium","keywords":["photo","place","sports","concert","venue"],"skins":[{"unified":"1f3df-fe0f","native":"\ud83c\udfdf\ufe0f"}],"version":1},"classical_building":{"id":"classical_building","name":"Classical Building","keywords":["art","culture","history"],"skins":[{"unified":"1f3db-fe0f","native":"\ud83c\udfdb\ufe0f"}],"version":1},"building_construction":{"id":"building_construction","name":"Building Construction","keywords":["wip","working","progress"],"skins":[{"unified":"1f3d7-fe0f","native":"\ud83c\udfd7\ufe0f"}],"version":1},"bricks":{"id":"bricks","name":"Brick","keywords":["bricks"],"skins":[{"unified":"1f9f1","native":"\ud83e\uddf1"}],"version":11},"rock":{"id":"rock","name":"Rock","keywords":["stone"],"skins":[{"unified":"1faa8","native":"\ud83e\udea8"}],"version":13},"wood":{"id":"wood","name":"Wood","keywords":["nature","timber","trunk"],"skins":[{"unified":"1fab5","native":"\ud83e\udeb5"}],"version":13},"hut":{"id":"hut","name":"Hut","keywords":["house","structure"],"skins":[{"unified":"1f6d6","native":"\ud83d\uded6"}],"version":13},"house_buildings":{"id":"house_buildings","name":"Houses","keywords":["house","buildings","photo"],"skins":[{"unified":"1f3d8-fe0f","native":"\ud83c\udfd8\ufe0f"}],"version":1},"derelict_house_building":{"id":"derelict_house_building","name":"Derelict House","keywords":["building","abandon","evict","broken"],"skins":[{"unified":"1f3da-fe0f","native":"\ud83c\udfda\ufe0f"}],"version":1},"house":{"id":"house","name":"House","keywords":["building","home"],"skins":[{"unified":"1f3e0","native":"\ud83c\udfe0"}],"version":1},"house_with_garden":{"id":"house_with_garden","name":"House with Garden","keywords":["home","plant","nature"],"skins":[{"unified":"1f3e1","native":"\ud83c\udfe1"}],"version":1},"office":{"id":"office","name":"Office Building","keywords":["bureau","work"],"skins":[{"unified":"1f3e2","native":"\ud83c\udfe2"}],"version":1},"post_office":{"id":"post_office","name":"Japanese Post Office","keywords":["building","envelope","communication"],"skins":[{"unified":"1f3e3","native":"\ud83c\udfe3"}],"version":1},"european_post_office":{"id":"european_post_office","name":"Post Office","keywords":["european","building","email"],"skins":[{"unified":"1f3e4","native":"\ud83c\udfe4"}],"version":1},"hospital":{"id":"hospital","name":"Hospital","keywords":["building","health","surgery","doctor"],"skins":[{"unified":"1f3e5","native":"\ud83c\udfe5"}],"version":1},"bank":{"id":"bank","name":"Bank","keywords":["building","money","sales","cash","business","enterprise"],"skins":[{"unified":"1f3e6","native":"\ud83c\udfe6"}],"version":1},"hotel":{"id":"hotel","name":"Hotel","keywords":["building","accomodation","checkin"],"skins":[{"unified":"1f3e8","native":"\ud83c\udfe8"}],"version":1},"love_hotel":{"id":"love_hotel","name":"Love Hotel","keywords":["like","affection","dating"],"skins":[{"unified":"1f3e9","native":"\ud83c\udfe9"}],"version":1},"convenience_store":{"id":"convenience_store","name":"Convenience Store","keywords":["building","shopping","groceries"],"skins":[{"unified":"1f3ea","native":"\ud83c\udfea"}],"version":1},"school":{"id":"school","name":"School","keywords":["building","student","education","learn","teach"],"skins":[{"unified":"1f3eb","native":"\ud83c\udfeb"}],"version":1},"department_store":{"id":"department_store","name":"Department Store","keywords":["building","shopping","mall"],"skins":[{"unified":"1f3ec","native":"\ud83c\udfec"}],"version":1},"factory":{"id":"factory","name":"Factory","keywords":["building","industry","pollution","smoke"],"skins":[{"unified":"1f3ed","native":"\ud83c\udfed"}],"version":1},"japanese_castle":{"id":"japanese_castle","name":"Japanese Castle","keywords":["photo","building"],"skins":[{"unified":"1f3ef","native":"\ud83c\udfef"}],"version":1},"european_castle":{"id":"european_castle","name":"Castle","keywords":["european","building","royalty","history"],"skins":[{"unified":"1f3f0","native":"\ud83c\udff0"}],"version":1},"wedding":{"id":"wedding","name":"Wedding","keywords":["love","like","affection","couple","marriage","bride","groom"],"skins":[{"unified":"1f492","native":"\ud83d\udc92"}],"version":1},"tokyo_tower":{"id":"tokyo_tower","name":"Tokyo Tower","keywords":["photo","japanese"],"skins":[{"unified":"1f5fc","native":"\ud83d\uddfc"}],"version":1},"statue_of_liberty":{"id":"statue_of_liberty","name":"Statue of Liberty","keywords":["american","newyork"],"skins":[{"unified":"1f5fd","native":"\ud83d\uddfd"}],"version":1},"church":{"id":"church","name":"Church","keywords":["building","religion","christ"],"skins":[{"unified":"26ea","native":"\u26ea"}],"version":1},"mosque":{"id":"mosque","name":"Mosque","keywords":["islam","worship","minaret"],"skins":[{"unified":"1f54c","native":"\ud83d\udd4c"}],"version":1},"hindu_temple":{"id":"hindu_temple","name":"Hindu Temple","keywords":["religion"],"skins":[{"unified":"1f6d5","native":"\ud83d\uded5"}],"version":12},"synagogue":{"id":"synagogue","name":"Synagogue","keywords":["judaism","worship","temple","jewish"],"skins":[{"unified":"1f54d","native":"\ud83d\udd4d"}],"version":1},"shinto_shrine":{"id":"shinto_shrine","name":"Shinto Shrine","keywords":["temple","japan","kyoto"],"skins":[{"unified":"26e9-fe0f","native":"\u26e9\ufe0f"}],"version":1},"kaaba":{"id":"kaaba","name":"Kaaba","keywords":["mecca","mosque","islam"],"skins":[{"unified":"1f54b","native":"\ud83d\udd4b"}],"version":1},"fountain":{"id":"fountain","name":"Fountain","keywords":["photo","summer","water","fresh"],"skins":[{"unified":"26f2","native":"\u26f2"}],"version":1},"tent":{"id":"tent","name":"Tent","keywords":["photo","camping","outdoors"],"skins":[{"unified":"26fa","native":"\u26fa"}],"version":1},"foggy":{"id":"foggy","name":"Foggy","keywords":["photo","mountain"],"skins":[{"unified":"1f301","native":"\ud83c\udf01"}],"version":1},"night_with_stars":{"id":"night_with_stars","name":"Night with Stars","keywords":["evening","city","downtown"],"skins":[{"unified":"1f303","native":"\ud83c\udf03"}],"version":1},"cityscape":{"id":"cityscape","name":"Cityscape","keywords":["photo","night","life","urban"],"skins":[{"unified":"1f3d9-fe0f","native":"\ud83c\udfd9\ufe0f"}],"version":1},"sunrise_over_mountains":{"id":"sunrise_over_mountains","name":"Sunrise over Mountains","keywords":["view","vacation","photo"],"skins":[{"unified":"1f304","native":"\ud83c\udf04"}],"version":1},"sunrise":{"id":"sunrise","name":"Sunrise","keywords":["morning","view","vacation","photo"],"skins":[{"unified":"1f305","native":"\ud83c\udf05"}],"version":1},"city_sunset":{"id":"city_sunset","name":"Cityscape at Dusk","keywords":["city","sunset","photo","evening","sky","buildings"],"skins":[{"unified":"1f306","native":"\ud83c\udf06"}],"version":1},"city_sunrise":{"id":"city_sunrise","name":"Sunset","keywords":["city","sunrise","photo","good","morning","dawn"],"skins":[{"unified":"1f307","native":"\ud83c\udf07"}],"version":1},"bridge_at_night":{"id":"bridge_at_night","name":"Bridge at Night","keywords":["photo","sanfrancisco"],"skins":[{"unified":"1f309","native":"\ud83c\udf09"}],"version":1},"hotsprings":{"id":"hotsprings","name":"Hot Springs","keywords":["hotsprings","bath","warm","relax"],"skins":[{"unified":"2668-fe0f","native":"\u2668\ufe0f"}],"version":1},"carousel_horse":{"id":"carousel_horse","name":"Carousel Horse","keywords":["photo","carnival"],"skins":[{"unified":"1f3a0","native":"\ud83c\udfa0"}],"version":1},"playground_slide":{"id":"playground_slide","name":"Playground Slide","keywords":["fun","park"],"skins":[{"unified":"1f6dd","native":"\ud83d\udedd"}],"version":14},"ferris_wheel":{"id":"ferris_wheel","name":"Ferris Wheel","keywords":["photo","carnival","londoneye"],"skins":[{"unified":"1f3a1","native":"\ud83c\udfa1"}],"version":1},"roller_coaster":{"id":"roller_coaster","name":"Roller Coaster","keywords":["carnival","playground","photo","fun"],"skins":[{"unified":"1f3a2","native":"\ud83c\udfa2"}],"version":1},"barber":{"id":"barber","name":"Barber Pole","keywords":["hair","salon","style"],"skins":[{"unified":"1f488","native":"\ud83d\udc88"}],"version":1},"circus_tent":{"id":"circus_tent","name":"Circus Tent","keywords":["festival","carnival","party"],"skins":[{"unified":"1f3aa","native":"\ud83c\udfaa"}],"version":1},"steam_locomotive":{"id":"steam_locomotive","name":"Locomotive","keywords":["steam","transportation","vehicle","train"],"skins":[{"unified":"1f682","native":"\ud83d\ude82"}],"version":1},"railway_car":{"id":"railway_car","name":"Railway Car","keywords":["transportation","vehicle"],"skins":[{"unified":"1f683","native":"\ud83d\ude83"}],"version":1},"bullettrain_side":{"id":"bullettrain_side","name":"High-Speed Train","keywords":["bullettrain","side","high","speed","transportation","vehicle"],"skins":[{"unified":"1f684","native":"\ud83d\ude84"}],"version":1},"bullettrain_front":{"id":"bullettrain_front","name":"Bullet Train","keywords":["bullettrain","front","transportation","vehicle","speed","fast","public","travel"],"skins":[{"unified":"1f685","native":"\ud83d\ude85"}],"version":1},"train2":{"id":"train2","name":"Train","keywords":["train2","transportation","vehicle"],"skins":[{"unified":"1f686","native":"\ud83d\ude86"}],"version":1},"metro":{"id":"metro","name":"Metro","keywords":["transportation","blue","square","mrt","underground","tube"],"skins":[{"unified":"1f687","native":"\ud83d\ude87"}],"version":1},"light_rail":{"id":"light_rail","name":"Light Rail","keywords":["transportation","vehicle"],"skins":[{"unified":"1f688","native":"\ud83d\ude88"}],"version":1},"station":{"id":"station","name":"Station","keywords":["transportation","vehicle","public"],"skins":[{"unified":"1f689","native":"\ud83d\ude89"}],"version":1},"tram":{"id":"tram","name":"Tram","keywords":["transportation","vehicle"],"skins":[{"unified":"1f68a","native":"\ud83d\ude8a"}],"version":1},"monorail":{"id":"monorail","name":"Monorail","keywords":["transportation","vehicle"],"skins":[{"unified":"1f69d","native":"\ud83d\ude9d"}],"version":1},"mountain_railway":{"id":"mountain_railway","name":"Mountain Railway","keywords":["transportation","vehicle"],"skins":[{"unified":"1f69e","native":"\ud83d\ude9e"}],"version":1},"train":{"id":"train","name":"Tram Car","keywords":["train","transportation","vehicle","carriage","public","travel"],"skins":[{"unified":"1f68b","native":"\ud83d\ude8b"}],"version":1},"bus":{"id":"bus","name":"Bus","keywords":["car","vehicle","transportation"],"skins":[{"unified":"1f68c","native":"\ud83d\ude8c"}],"version":1},"oncoming_bus":{"id":"oncoming_bus","name":"Oncoming Bus","keywords":["vehicle","transportation"],"skins":[{"unified":"1f68d","native":"\ud83d\ude8d"}],"version":1},"trolleybus":{"id":"trolleybus","name":"Trolleybus","keywords":["bart","transportation","vehicle"],"skins":[{"unified":"1f68e","native":"\ud83d\ude8e"}],"version":1},"minibus":{"id":"minibus","name":"Minibus","keywords":["vehicle","car","transportation"],"skins":[{"unified":"1f690","native":"\ud83d\ude90"}],"version":1},"ambulance":{"id":"ambulance","name":"Ambulance","keywords":["health","911","hospital"],"skins":[{"unified":"1f691","native":"\ud83d\ude91"}],"version":1},"fire_engine":{"id":"fire_engine","name":"Fire Engine","keywords":["transportation","cars","vehicle"],"skins":[{"unified":"1f692","native":"\ud83d\ude92"}],"version":1},"police_car":{"id":"police_car","name":"Police Car","keywords":["vehicle","cars","transportation","law","legal","enforcement"],"skins":[{"unified":"1f693","native":"\ud83d\ude93"}],"version":1},"oncoming_police_car":{"id":"oncoming_police_car","name":"Oncoming Police Car","keywords":["vehicle","law","legal","enforcement","911"],"skins":[{"unified":"1f694","native":"\ud83d\ude94"}],"version":1},"taxi":{"id":"taxi","name":"Taxi","keywords":["uber","vehicle","cars","transportation"],"skins":[{"unified":"1f695","native":"\ud83d\ude95"}],"version":1},"oncoming_taxi":{"id":"oncoming_taxi","name":"Oncoming Taxi","keywords":["vehicle","cars","uber"],"skins":[{"unified":"1f696","native":"\ud83d\ude96"}],"version":1},"car":{"id":"car","name":"Automobile","keywords":["car","red","transportation","vehicle"],"skins":[{"unified":"1f697","native":"\ud83d\ude97"}],"version":1},"oncoming_automobile":{"id":"oncoming_automobile","name":"Oncoming Automobile","keywords":["car","vehicle","transportation"],"skins":[{"unified":"1f698","native":"\ud83d\ude98"}],"version":1},"blue_car":{"id":"blue_car","name":"Recreational Vehicle","keywords":["blue","car","sport","utility","transportation"],"skins":[{"unified":"1f699","native":"\ud83d\ude99"}],"version":1},"pickup_truck":{"id":"pickup_truck","name":"Pickup Truck","keywords":["car","transportation"],"skins":[{"unified":"1f6fb","native":"\ud83d\udefb"}],"version":13},"truck":{"id":"truck","name":"Delivery Truck","keywords":["cars","transportation"],"skins":[{"unified":"1f69a","native":"\ud83d\ude9a"}],"version":1},"articulated_lorry":{"id":"articulated_lorry","name":"Articulated Lorry","keywords":["vehicle","cars","transportation","express"],"skins":[{"unified":"1f69b","native":"\ud83d\ude9b"}],"version":1},"tractor":{"id":"tractor","name":"Tractor","keywords":["vehicle","car","farming","agriculture"],"skins":[{"unified":"1f69c","native":"\ud83d\ude9c"}],"version":1},"racing_car":{"id":"racing_car","name":"Racing Car","keywords":["sports","race","fast","formula","f1"],"skins":[{"unified":"1f3ce-fe0f","native":"\ud83c\udfce\ufe0f"}],"version":1},"racing_motorcycle":{"id":"racing_motorcycle","name":"Motorcycle","keywords":["racing","race","sports","fast"],"skins":[{"unified":"1f3cd-fe0f","native":"\ud83c\udfcd\ufe0f"}],"version":1},"motor_scooter":{"id":"motor_scooter","name":"Motor Scooter","keywords":["vehicle","vespa","sasha"],"skins":[{"unified":"1f6f5","native":"\ud83d\udef5"}],"version":3},"manual_wheelchair":{"id":"manual_wheelchair","name":"Manual Wheelchair","keywords":["accessibility"],"skins":[{"unified":"1f9bd","native":"\ud83e\uddbd"}],"version":12},"motorized_wheelchair":{"id":"motorized_wheelchair","name":"Motorized Wheelchair","keywords":["accessibility"],"skins":[{"unified":"1f9bc","native":"\ud83e\uddbc"}],"version":12},"auto_rickshaw":{"id":"auto_rickshaw","name":"Auto Rickshaw","keywords":["move","transportation"],"skins":[{"unified":"1f6fa","native":"\ud83d\udefa"}],"version":12},"bike":{"id":"bike","name":"Bicycle","keywords":["bike","sports","exercise","hipster"],"skins":[{"unified":"1f6b2","native":"\ud83d\udeb2"}],"version":1},"scooter":{"id":"scooter","name":"Scooter","keywords":["kick","vehicle","razor"],"skins":[{"unified":"1f6f4","native":"\ud83d\udef4"}],"version":3},"skateboard":{"id":"skateboard","name":"Skateboard","keywords":["board"],"skins":[{"unified":"1f6f9","native":"\ud83d\udef9"}],"version":11},"roller_skate":{"id":"roller_skate","name":"Roller Skate","keywords":["footwear","sports"],"skins":[{"unified":"1f6fc","native":"\ud83d\udefc"}],"version":13},"busstop":{"id":"busstop","name":"Bus Stop","keywords":["busstop","transportation","wait"],"skins":[{"unified":"1f68f","native":"\ud83d\ude8f"}],"version":1},"motorway":{"id":"motorway","name":"Motorway","keywords":["road","cupertino","interstate","highway"],"skins":[{"unified":"1f6e3-fe0f","native":"\ud83d\udee3\ufe0f"}],"version":1},"railway_track":{"id":"railway_track","name":"Railway Track","keywords":["train","transportation"],"skins":[{"unified":"1f6e4-fe0f","native":"\ud83d\udee4\ufe0f"}],"version":1},"oil_drum":{"id":"oil_drum","name":"Oil Drum","keywords":["barrell"],"skins":[{"unified":"1f6e2-fe0f","native":"\ud83d\udee2\ufe0f"}],"version":1},"fuelpump":{"id":"fuelpump","name":"Fuel Pump","keywords":["fuelpump","gas","station","petroleum"],"skins":[{"unified":"26fd","native":"\u26fd"}],"version":1},"wheel":{"id":"wheel","name":"Wheel","keywords":["car","transport"],"skins":[{"unified":"1f6de","native":"\ud83d\udede"}],"version":14},"rotating_light":{"id":"rotating_light","name":"Police Car Light","keywords":["rotating","ambulance","911","emergency","alert","error","pinged","law","legal"],"skins":[{"unified":"1f6a8","native":"\ud83d\udea8"}],"version":1},"traffic_light":{"id":"traffic_light","name":"Horizontal Traffic Light","keywords":["transportation","signal"],"skins":[{"unified":"1f6a5","native":"\ud83d\udea5"}],"version":1},"vertical_traffic_light":{"id":"vertical_traffic_light","name":"Vertical Traffic Light","keywords":["transportation","driving"],"skins":[{"unified":"1f6a6","native":"\ud83d\udea6"}],"version":1},"octagonal_sign":{"id":"octagonal_sign","name":"Stop Sign","keywords":["octagonal"],"skins":[{"unified":"1f6d1","native":"\ud83d\uded1"}],"version":3},"construction":{"id":"construction","name":"Construction","keywords":["wip","progress","caution","warning"],"skins":[{"unified":"1f6a7","native":"\ud83d\udea7"}],"version":1},"anchor":{"id":"anchor","name":"Anchor","keywords":["ship","ferry","sea","boat"],"skins":[{"unified":"2693","native":"\u2693"}],"version":1},"ring_buoy":{"id":"ring_buoy","name":"Ring Buoy","keywords":["life","saver","preserver"],"skins":[{"unified":"1f6df","native":"\ud83d\udedf"}],"version":14},"boat":{"id":"boat","name":"Sailboat","keywords":["boat","ship","summer","transportation","water","sailing"],"skins":[{"unified":"26f5","native":"\u26f5"}],"version":1},"canoe":{"id":"canoe","name":"Canoe","keywords":["boat","paddle","water","ship"],"skins":[{"unified":"1f6f6","native":"\ud83d\udef6"}],"version":3},"speedboat":{"id":"speedboat","name":"Speedboat","keywords":["ship","transportation","vehicle","summer"],"skins":[{"unified":"1f6a4","native":"\ud83d\udea4"}],"version":1},"passenger_ship":{"id":"passenger_ship","name":"Passenger Ship","keywords":["yacht","cruise","ferry"],"skins":[{"unified":"1f6f3-fe0f","native":"\ud83d\udef3\ufe0f"}],"version":1},"ferry":{"id":"ferry","name":"Ferry","keywords":["boat","ship","yacht"],"skins":[{"unified":"26f4-fe0f","native":"\u26f4\ufe0f"}],"version":1},"motor_boat":{"id":"motor_boat","name":"Motor Boat","keywords":["ship"],"skins":[{"unified":"1f6e5-fe0f","native":"\ud83d\udee5\ufe0f"}],"version":1},"ship":{"id":"ship","name":"Ship","keywords":["transportation","titanic","deploy"],"skins":[{"unified":"1f6a2","native":"\ud83d\udea2"}],"version":1},"airplane":{"id":"airplane","name":"Airplane","keywords":["vehicle","transportation","flight","fly"],"skins":[{"unified":"2708-fe0f","native":"\u2708\ufe0f"}],"version":1},"small_airplane":{"id":"small_airplane","name":"Small Airplane","keywords":["flight","transportation","fly","vehicle"],"skins":[{"unified":"1f6e9-fe0f","native":"\ud83d\udee9\ufe0f"}],"version":1},"airplane_departure":{"id":"airplane_departure","name":"Airplane Departure","keywords":["airport","flight","landing"],"skins":[{"unified":"1f6eb","native":"\ud83d\udeeb"}],"version":1},"airplane_arriving":{"id":"airplane_arriving","name":"Airplane Arrival","keywords":["arriving","airport","flight","boarding"],"skins":[{"unified":"1f6ec","native":"\ud83d\udeec"}],"version":1},"parachute":{"id":"parachute","name":"Parachute","keywords":["fly","glide"],"skins":[{"unified":"1fa82","native":"\ud83e\ude82"}],"version":12},"seat":{"id":"seat","name":"Seat","keywords":["sit","airplane","transport","bus","flight","fly"],"skins":[{"unified":"1f4ba","native":"\ud83d\udcba"}],"version":1},"helicopter":{"id":"helicopter","name":"Helicopter","keywords":["transportation","vehicle","fly"],"skins":[{"unified":"1f681","native":"\ud83d\ude81"}],"version":1},"suspension_railway":{"id":"suspension_railway","name":"Suspension Railway","keywords":["vehicle","transportation"],"skins":[{"unified":"1f69f","native":"\ud83d\ude9f"}],"version":1},"mountain_cableway":{"id":"mountain_cableway","name":"Mountain Cableway","keywords":["transportation","vehicle","ski"],"skins":[{"unified":"1f6a0","native":"\ud83d\udea0"}],"version":1},"aerial_tramway":{"id":"aerial_tramway","name":"Aerial Tramway","keywords":["transportation","vehicle","ski"],"skins":[{"unified":"1f6a1","native":"\ud83d\udea1"}],"version":1},"satellite":{"id":"satellite","name":"Satellite","keywords":["communication","gps","orbit","spaceflight","NASA","ISS"],"skins":[{"unified":"1f6f0-fe0f","native":"\ud83d\udef0\ufe0f"}],"version":1},"rocket":{"id":"rocket","name":"Rocket","keywords":["launch","ship","staffmode","NASA","outer","space","fly"],"skins":[{"unified":"1f680","native":"\ud83d\ude80"}],"version":1},"flying_saucer":{"id":"flying_saucer","name":"Flying Saucer","keywords":["transportation","vehicle","ufo"],"skins":[{"unified":"1f6f8","native":"\ud83d\udef8"}],"version":5},"bellhop_bell":{"id":"bellhop_bell","name":"Bellhop Bell","keywords":["service"],"skins":[{"unified":"1f6ce-fe0f","native":"\ud83d\udece\ufe0f"}],"version":1},"luggage":{"id":"luggage","name":"Luggage","keywords":["packing","travel"],"skins":[{"unified":"1f9f3","native":"\ud83e\uddf3"}],"version":11},"hourglass":{"id":"hourglass","name":"Hourglass","keywords":["done","time","clock","oldschool","limit","exam","quiz","test"],"skins":[{"unified":"231b","native":"\u231b"}],"version":1},"hourglass_flowing_sand":{"id":"hourglass_flowing_sand","name":"Hourglass Not Done","keywords":["flowing","sand","oldschool","time","countdown"],"skins":[{"unified":"23f3","native":"\u23f3"}],"version":1},"watch":{"id":"watch","name":"Watch","keywords":["time","accessories"],"skins":[{"unified":"231a","native":"\u231a"}],"version":1},"alarm_clock":{"id":"alarm_clock","name":"Alarm Clock","keywords":["time","wake"],"skins":[{"unified":"23f0","native":"\u23f0"}],"version":1},"stopwatch":{"id":"stopwatch","name":"Stopwatch","keywords":["time","deadline"],"skins":[{"unified":"23f1-fe0f","native":"\u23f1\ufe0f"}],"version":1},"timer_clock":{"id":"timer_clock","name":"Timer Clock","keywords":["alarm"],"skins":[{"unified":"23f2-fe0f","native":"\u23f2\ufe0f"}],"version":1},"mantelpiece_clock":{"id":"mantelpiece_clock","name":"Mantelpiece Clock","keywords":["time"],"skins":[{"unified":"1f570-fe0f","native":"\ud83d\udd70\ufe0f"}],"version":1},"clock12":{"id":"clock12","name":"Twelve O\u2019clock","keywords":["clock12","o","clock","time","noon","midnight","midday","late","early","schedule"],"skins":[{"unified":"1f55b","native":"\ud83d\udd5b"}],"version":1},"clock1230":{"id":"clock1230","name":"Twelve-Thirty","keywords":["clock1230","twelve","thirty","time","late","early","schedule"],"skins":[{"unified":"1f567","native":"\ud83d\udd67"}],"version":1},"clock1":{"id":"clock1","name":"One O\u2019clock","keywords":["clock1","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f550","native":"\ud83d\udd50"}],"version":1},"clock130":{"id":"clock130","name":"One-Thirty","keywords":["clock130","one","thirty","time","late","early","schedule"],"skins":[{"unified":"1f55c","native":"\ud83d\udd5c"}],"version":1},"clock2":{"id":"clock2","name":"Two O\u2019clock","keywords":["clock2","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f551","native":"\ud83d\udd51"}],"version":1},"clock230":{"id":"clock230","name":"Two-Thirty","keywords":["clock230","two","thirty","time","late","early","schedule"],"skins":[{"unified":"1f55d","native":"\ud83d\udd5d"}],"version":1},"clock3":{"id":"clock3","name":"Three O\u2019clock","keywords":["clock3","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f552","native":"\ud83d\udd52"}],"version":1},"clock330":{"id":"clock330","name":"Three-Thirty","keywords":["clock330","three","thirty","time","late","early","schedule"],"skins":[{"unified":"1f55e","native":"\ud83d\udd5e"}],"version":1},"clock4":{"id":"clock4","name":"Four O\u2019clock","keywords":["clock4","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f553","native":"\ud83d\udd53"}],"version":1},"clock430":{"id":"clock430","name":"Four-Thirty","keywords":["clock430","four","thirty","time","late","early","schedule"],"skins":[{"unified":"1f55f","native":"\ud83d\udd5f"}],"version":1},"clock5":{"id":"clock5","name":"Five O\u2019clock","keywords":["clock5","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f554","native":"\ud83d\udd54"}],"version":1},"clock530":{"id":"clock530","name":"Five-Thirty","keywords":["clock530","five","thirty","time","late","early","schedule"],"skins":[{"unified":"1f560","native":"\ud83d\udd60"}],"version":1},"clock6":{"id":"clock6","name":"Six O\u2019clock","keywords":["clock6","o","clock","time","late","early","schedule","dawn","dusk"],"skins":[{"unified":"1f555","native":"\ud83d\udd55"}],"version":1},"clock630":{"id":"clock630","name":"Six-Thirty","keywords":["clock630","six","thirty","time","late","early","schedule"],"skins":[{"unified":"1f561","native":"\ud83d\udd61"}],"version":1},"clock7":{"id":"clock7","name":"Seven O\u2019clock","keywords":["clock7","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f556","native":"\ud83d\udd56"}],"version":1},"clock730":{"id":"clock730","name":"Seven-Thirty","keywords":["clock730","seven","thirty","time","late","early","schedule"],"skins":[{"unified":"1f562","native":"\ud83d\udd62"}],"version":1},"clock8":{"id":"clock8","name":"Eight O\u2019clock","keywords":["clock8","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f557","native":"\ud83d\udd57"}],"version":1},"clock830":{"id":"clock830","name":"Eight-Thirty","keywords":["clock830","eight","thirty","time","late","early","schedule"],"skins":[{"unified":"1f563","native":"\ud83d\udd63"}],"version":1},"clock9":{"id":"clock9","name":"Nine O\u2019clock","keywords":["clock9","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f558","native":"\ud83d\udd58"}],"version":1},"clock930":{"id":"clock930","name":"Nine-Thirty","keywords":["clock930","nine","thirty","time","late","early","schedule"],"skins":[{"unified":"1f564","native":"\ud83d\udd64"}],"version":1},"clock10":{"id":"clock10","name":"Ten O\u2019clock","keywords":["clock10","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f559","native":"\ud83d\udd59"}],"version":1},"clock1030":{"id":"clock1030","name":"Ten-Thirty","keywords":["clock1030","ten","thirty","time","late","early","schedule"],"skins":[{"unified":"1f565","native":"\ud83d\udd65"}],"version":1},"clock11":{"id":"clock11","name":"Eleven O\u2019clock","keywords":["clock11","o","clock","time","late","early","schedule"],"skins":[{"unified":"1f55a","native":"\ud83d\udd5a"}],"version":1},"clock1130":{"id":"clock1130","name":"Eleven-Thirty","keywords":["clock1130","eleven","thirty","time","late","early","schedule"],"skins":[{"unified":"1f566","native":"\ud83d\udd66"}],"version":1},"new_moon":{"id":"new_moon","name":"New Moon","keywords":["nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f311","native":"\ud83c\udf11"}],"version":1},"waxing_crescent_moon":{"id":"waxing_crescent_moon","name":"Waxing Crescent Moon","keywords":["nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f312","native":"\ud83c\udf12"}],"version":1},"first_quarter_moon":{"id":"first_quarter_moon","name":"First Quarter Moon","keywords":["nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f313","native":"\ud83c\udf13"}],"version":1},"moon":{"id":"moon","name":"Waxing Gibbous Moon","keywords":["nature","night","sky","gray","twilight","planet","space","evening","sleep"],"skins":[{"unified":"1f314","native":"\ud83c\udf14"}],"version":1},"full_moon":{"id":"full_moon","name":"Full Moon","keywords":["nature","yellow","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f315","native":"\ud83c\udf15"}],"version":1},"waning_gibbous_moon":{"id":"waning_gibbous_moon","name":"Waning Gibbous Moon","keywords":["nature","twilight","planet","space","night","evening","sleep","waxing"],"skins":[{"unified":"1f316","native":"\ud83c\udf16"}],"version":1},"last_quarter_moon":{"id":"last_quarter_moon","name":"Last Quarter Moon","keywords":["nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f317","native":"\ud83c\udf17"}],"version":1},"waning_crescent_moon":{"id":"waning_crescent_moon","name":"Waning Crescent Moon","keywords":["nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f318","native":"\ud83c\udf18"}],"version":1},"crescent_moon":{"id":"crescent_moon","name":"Crescent Moon","keywords":["night","sleep","sky","evening","magic"],"skins":[{"unified":"1f319","native":"\ud83c\udf19"}],"version":1},"new_moon_with_face":{"id":"new_moon_with_face","name":"New Moon Face","keywords":["with","nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f31a","native":"\ud83c\udf1a"}],"version":1},"first_quarter_moon_with_face":{"id":"first_quarter_moon_with_face","name":"First Quarter Moon Face","keywords":["with","nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f31b","native":"\ud83c\udf1b"}],"version":1},"last_quarter_moon_with_face":{"id":"last_quarter_moon_with_face","name":"Last Quarter Moon Face","keywords":["with","nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f31c","native":"\ud83c\udf1c"}],"version":1},"thermometer":{"id":"thermometer","name":"Thermometer","keywords":["weather","temperature","hot","cold"],"skins":[{"unified":"1f321-fe0f","native":"\ud83c\udf21\ufe0f"}],"version":1},"sunny":{"id":"sunny","name":"Sun","keywords":["sunny","weather","nature","brightness","summer","beach","spring"],"skins":[{"unified":"2600-fe0f","native":"\u2600\ufe0f"}],"version":1},"full_moon_with_face":{"id":"full_moon_with_face","name":"Full Moon Face","keywords":["with","nature","twilight","planet","space","night","evening","sleep"],"skins":[{"unified":"1f31d","native":"\ud83c\udf1d"}],"version":1},"sun_with_face":{"id":"sun_with_face","name":"Sun with Face","keywords":["nature","morning","sky"],"skins":[{"unified":"1f31e","native":"\ud83c\udf1e"}],"version":1},"ringed_planet":{"id":"ringed_planet","name":"Ringed Planet","keywords":["outerspace"],"skins":[{"unified":"1fa90","native":"\ud83e\ude90"}],"version":12},"star":{"id":"star","name":"Star","keywords":["night","yellow"],"skins":[{"unified":"2b50","native":"\u2b50"}],"version":1},"star2":{"id":"star2","name":"Glowing Star","keywords":["star2","night","sparkle","awesome","good","magic"],"skins":[{"unified":"1f31f","native":"\ud83c\udf1f"}],"version":1},"stars":{"id":"stars","name":"Shooting Star","keywords":["stars","night","photo"],"skins":[{"unified":"1f320","native":"\ud83c\udf20"}],"version":1},"milky_way":{"id":"milky_way","name":"Milky Way","keywords":["photo","space","stars"],"skins":[{"unified":"1f30c","native":"\ud83c\udf0c"}],"version":1},"cloud":{"id":"cloud","name":"Cloud","keywords":["weather","sky"],"skins":[{"unified":"2601-fe0f","native":"\u2601\ufe0f"}],"version":1},"partly_sunny":{"id":"partly_sunny","name":"Sun Behind Cloud","keywords":["partly","sunny","weather","nature","cloudy","morning","fall","spring"],"skins":[{"unified":"26c5","native":"\u26c5"}],"version":1},"thunder_cloud_and_rain":{"id":"thunder_cloud_and_rain","name":"Cloud with Lightning and Rain","keywords":["thunder","weather"],"skins":[{"unified":"26c8-fe0f","native":"\u26c8\ufe0f"}],"version":1},"mostly_sunny":{"id":"mostly_sunny","name":"Sun Behind Small Cloud","keywords":["mostly","sunny","weather"],"skins":[{"unified":"1f324-fe0f","native":"\ud83c\udf24\ufe0f"}],"version":1},"barely_sunny":{"id":"barely_sunny","name":"Sun Behind Large Cloud","keywords":["barely","sunny","weather"],"skins":[{"unified":"1f325-fe0f","native":"\ud83c\udf25\ufe0f"}],"version":1},"partly_sunny_rain":{"id":"partly_sunny_rain","name":"Sun Behind Rain Cloud","keywords":["partly","sunny","weather"],"skins":[{"unified":"1f326-fe0f","native":"\ud83c\udf26\ufe0f"}],"version":1},"rain_cloud":{"id":"rain_cloud","name":"Cloud with Rain","keywords":["weather"],"skins":[{"unified":"1f327-fe0f","native":"\ud83c\udf27\ufe0f"}],"version":1},"snow_cloud":{"id":"snow_cloud","name":"Cloud with Snow","keywords":["weather"],"skins":[{"unified":"1f328-fe0f","native":"\ud83c\udf28\ufe0f"}],"version":1},"lightning":{"id":"lightning","name":"Cloud with Lightning","keywords":["weather","thunder"],"skins":[{"unified":"1f329-fe0f","native":"\ud83c\udf29\ufe0f"}],"version":1},"tornado":{"id":"tornado","name":"Tornado","keywords":["cloud","weather","cyclone","twister"],"skins":[{"unified":"1f32a-fe0f","native":"\ud83c\udf2a\ufe0f"}],"version":1},"fog":{"id":"fog","name":"Fog","keywords":["weather"],"skins":[{"unified":"1f32b-fe0f","native":"\ud83c\udf2b\ufe0f"}],"version":1},"wind_blowing_face":{"id":"wind_blowing_face","name":"Wind Face","keywords":["blowing","gust","air"],"skins":[{"unified":"1f32c-fe0f","native":"\ud83c\udf2c\ufe0f"}],"version":1},"cyclone":{"id":"cyclone","name":"Cyclone","keywords":["weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],"skins":[{"unified":"1f300","native":"\ud83c\udf00"}],"version":1},"rainbow":{"id":"rainbow","name":"Rainbow","keywords":["nature","happy","unicorn","face","photo","sky","spring"],"skins":[{"unified":"1f308","native":"\ud83c\udf08"}],"version":1},"closed_umbrella":{"id":"closed_umbrella","name":"Closed Umbrella","keywords":["weather","rain","drizzle"],"skins":[{"unified":"1f302","native":"\ud83c\udf02"}],"version":1},"umbrella":{"id":"umbrella","name":"Umbrella","keywords":["weather","spring"],"skins":[{"unified":"2602-fe0f","native":"\u2602\ufe0f"}],"version":1},"umbrella_with_rain_drops":{"id":"umbrella_with_rain_drops","name":"Umbrella with Rain Drops","keywords":["rainy","weather","spring"],"skins":[{"unified":"2614","native":"\u2614"}],"version":1},"umbrella_on_ground":{"id":"umbrella_on_ground","name":"Umbrella on Ground","keywords":["weather","summer"],"skins":[{"unified":"26f1-fe0f","native":"\u26f1\ufe0f"}],"version":1},"zap":{"id":"zap","name":"High Voltage","keywords":["zap","thunder","weather","lightning","bolt","fast"],"skins":[{"unified":"26a1","native":"\u26a1"}],"version":1},"snowflake":{"id":"snowflake","name":"Snowflake","keywords":["winter","season","cold","weather","christmas","xmas"],"skins":[{"unified":"2744-fe0f","native":"\u2744\ufe0f"}],"version":1},"snowman":{"id":"snowman","name":"Snowman","keywords":["winter","season","cold","weather","christmas","xmas","frozen"],"skins":[{"unified":"2603-fe0f","native":"\u2603\ufe0f"}],"version":1},"snowman_without_snow":{"id":"snowman_without_snow","name":"Snowman Without Snow","keywords":["winter","season","cold","weather","christmas","xmas","frozen"],"skins":[{"unified":"26c4","native":"\u26c4"}],"version":1},"comet":{"id":"comet","name":"Comet","keywords":["space"],"skins":[{"unified":"2604-fe0f","native":"\u2604\ufe0f"}],"version":1},"fire":{"id":"fire","name":"Fire","keywords":["hot","cook","flame"],"skins":[{"unified":"1f525","native":"\ud83d\udd25"}],"version":1},"droplet":{"id":"droplet","name":"Droplet","keywords":["water","drip","faucet","spring"],"skins":[{"unified":"1f4a7","native":"\ud83d\udca7"}],"version":1},"ocean":{"id":"ocean","name":"Water Wave","keywords":["ocean","sea","nature","tsunami","disaster"],"skins":[{"unified":"1f30a","native":"\ud83c\udf0a"}],"version":1},"jack_o_lantern":{"id":"jack_o_lantern","name":"Jack-O-Lantern","keywords":["jack","o","lantern","halloween","light","pumpkin","creepy","fall"],"skins":[{"unified":"1f383","native":"\ud83c\udf83"}],"version":1},"christmas_tree":{"id":"christmas_tree","name":"Christmas Tree","keywords":["festival","vacation","december","xmas","celebration"],"skins":[{"unified":"1f384","native":"\ud83c\udf84"}],"version":1},"fireworks":{"id":"fireworks","name":"Fireworks","keywords":["photo","festival","carnival","congratulations"],"skins":[{"unified":"1f386","native":"\ud83c\udf86"}],"version":1},"sparkler":{"id":"sparkler","name":"Sparkler","keywords":["stars","night","shine"],"skins":[{"unified":"1f387","native":"\ud83c\udf87"}],"version":1},"firecracker":{"id":"firecracker","name":"Firecracker","keywords":["dynamite","boom","explode","explosion","explosive"],"skins":[{"unified":"1f9e8","native":"\ud83e\udde8"}],"version":11},"sparkles":{"id":"sparkles","name":"Sparkles","keywords":["stars","shine","shiny","cool","awesome","good","magic"],"skins":[{"unified":"2728","native":"\u2728"}],"version":1},"balloon":{"id":"balloon","name":"Balloon","keywords":["party","celebration","birthday","circus"],"skins":[{"unified":"1f388","native":"\ud83c\udf88"}],"version":1},"tada":{"id":"tada","name":"Party Popper","keywords":["tada","congratulations","birthday","magic","circus","celebration"],"skins":[{"unified":"1f389","native":"\ud83c\udf89"}],"version":1},"confetti_ball":{"id":"confetti_ball","name":"Confetti Ball","keywords":["festival","party","birthday","circus"],"skins":[{"unified":"1f38a","native":"\ud83c\udf8a"}],"version":1},"tanabata_tree":{"id":"tanabata_tree","name":"Tanabata Tree","keywords":["plant","nature","branch","summer"],"skins":[{"unified":"1f38b","native":"\ud83c\udf8b"}],"version":1},"bamboo":{"id":"bamboo","name":"Pine Decoration","keywords":["bamboo","plant","nature","vegetable","panda"],"skins":[{"unified":"1f38d","native":"\ud83c\udf8d"}],"version":1},"dolls":{"id":"dolls","name":"Japanese Dolls","keywords":["toy","kimono"],"skins":[{"unified":"1f38e","native":"\ud83c\udf8e"}],"version":1},"flags":{"id":"flags","name":"Carp Streamer","keywords":["flags","fish","japanese","koinobori","banner"],"skins":[{"unified":"1f38f","native":"\ud83c\udf8f"}],"version":1},"wind_chime":{"id":"wind_chime","name":"Wind Chime","keywords":["nature","ding","spring","bell"],"skins":[{"unified":"1f390","native":"\ud83c\udf90"}],"version":1},"rice_scene":{"id":"rice_scene","name":"Moon Viewing Ceremony","keywords":["rice","scene","photo","japan","asia","tsukimi"],"skins":[{"unified":"1f391","native":"\ud83c\udf91"}],"version":1},"red_envelope":{"id":"red_envelope","name":"Red Envelope","keywords":["gift"],"skins":[{"unified":"1f9e7","native":"\ud83e\udde7"}],"version":11},"ribbon":{"id":"ribbon","name":"Ribbon","keywords":["decoration","pink","girl","bowtie"],"skins":[{"unified":"1f380","native":"\ud83c\udf80"}],"version":1},"gift":{"id":"gift","name":"Wrapped Gift","keywords":["present","birthday","christmas","xmas"],"skins":[{"unified":"1f381","native":"\ud83c\udf81"}],"version":1},"reminder_ribbon":{"id":"reminder_ribbon","name":"Reminder Ribbon","keywords":["sports","cause","support","awareness"],"skins":[{"unified":"1f397-fe0f","native":"\ud83c\udf97\ufe0f"}],"version":1},"admission_tickets":{"id":"admission_tickets","name":"Admission Tickets","keywords":["sports","concert","entrance"],"skins":[{"unified":"1f39f-fe0f","native":"\ud83c\udf9f\ufe0f"}],"version":1},"ticket":{"id":"ticket","name":"Ticket","keywords":["event","concert","pass"],"skins":[{"unified":"1f3ab","native":"\ud83c\udfab"}],"version":1},"medal":{"id":"medal","name":"Military Medal","keywords":["award","winning","army"],"skins":[{"unified":"1f396-fe0f","native":"\ud83c\udf96\ufe0f"}],"version":1},"trophy":{"id":"trophy","name":"Trophy","keywords":["win","award","contest","place","ftw","ceremony"],"skins":[{"unified":"1f3c6","native":"\ud83c\udfc6"}],"version":1},"sports_medal":{"id":"sports_medal","name":"Sports Medal","keywords":["award","winning"],"skins":[{"unified":"1f3c5","native":"\ud83c\udfc5"}],"version":1},"first_place_medal":{"id":"first_place_medal","name":"1st Place Medal","keywords":["first","award","winning"],"skins":[{"unified":"1f947","native":"\ud83e\udd47"}],"version":3},"second_place_medal":{"id":"second_place_medal","name":"2nd Place Medal","keywords":["second","award"],"skins":[{"unified":"1f948","native":"\ud83e\udd48"}],"version":3},"third_place_medal":{"id":"third_place_medal","name":"3rd Place Medal","keywords":["third","award"],"skins":[{"unified":"1f949","native":"\ud83e\udd49"}],"version":3},"soccer":{"id":"soccer","name":"Soccer Ball","keywords":["sports","football"],"skins":[{"unified":"26bd","native":"\u26bd"}],"version":1},"baseball":{"id":"baseball","name":"Baseball","keywords":["sports","balls"],"skins":[{"unified":"26be","native":"\u26be"}],"version":1},"softball":{"id":"softball","name":"Softball","keywords":["sports","balls"],"skins":[{"unified":"1f94e","native":"\ud83e\udd4e"}],"version":11},"basketball":{"id":"basketball","name":"Basketball","keywords":["sports","balls","NBA"],"skins":[{"unified":"1f3c0","native":"\ud83c\udfc0"}],"version":1},"volleyball":{"id":"volleyball","name":"Volleyball","keywords":["sports","balls"],"skins":[{"unified":"1f3d0","native":"\ud83c\udfd0"}],"version":1},"football":{"id":"football","name":"American Football","keywords":["sports","balls","NFL"],"skins":[{"unified":"1f3c8","native":"\ud83c\udfc8"}],"version":1},"rugby_football":{"id":"rugby_football","name":"Rugby Football","keywords":["sports","team"],"skins":[{"unified":"1f3c9","native":"\ud83c\udfc9"}],"version":1},"tennis":{"id":"tennis","name":"Tennis","keywords":["sports","balls","green"],"skins":[{"unified":"1f3be","native":"\ud83c\udfbe"}],"version":1},"flying_disc":{"id":"flying_disc","name":"Flying Disc","keywords":["sports","frisbee","ultimate"],"skins":[{"unified":"1f94f","native":"\ud83e\udd4f"}],"version":11},"bowling":{"id":"bowling","name":"Bowling","keywords":["sports","fun","play"],"skins":[{"unified":"1f3b3","native":"\ud83c\udfb3"}],"version":1},"cricket_bat_and_ball":{"id":"cricket_bat_and_ball","name":"Cricket Game","keywords":["bat","and","ball","sports"],"skins":[{"unified":"1f3cf","native":"\ud83c\udfcf"}],"version":1},"field_hockey_stick_and_ball":{"id":"field_hockey_stick_and_ball","name":"Field Hockey","keywords":["stick","and","ball","sports"],"skins":[{"unified":"1f3d1","native":"\ud83c\udfd1"}],"version":1},"ice_hockey_stick_and_puck":{"id":"ice_hockey_stick_and_puck","name":"Ice Hockey","keywords":["stick","and","puck","sports"],"skins":[{"unified":"1f3d2","native":"\ud83c\udfd2"}],"version":1},"lacrosse":{"id":"lacrosse","name":"Lacrosse","keywords":["sports","ball","stick"],"skins":[{"unified":"1f94d","native":"\ud83e\udd4d"}],"version":11},"table_tennis_paddle_and_ball":{"id":"table_tennis_paddle_and_ball","name":"Ping Pong","keywords":["table","tennis","paddle","and","ball","sports","pingpong"],"skins":[{"unified":"1f3d3","native":"\ud83c\udfd3"}],"version":1},"badminton_racquet_and_shuttlecock":{"id":"badminton_racquet_and_shuttlecock","name":"Badminton","keywords":["racquet","and","shuttlecock","sports"],"skins":[{"unified":"1f3f8","native":"\ud83c\udff8"}],"version":1},"boxing_glove":{"id":"boxing_glove","name":"Boxing Glove","keywords":["sports","fighting"],"skins":[{"unified":"1f94a","native":"\ud83e\udd4a"}],"version":3},"martial_arts_uniform":{"id":"martial_arts_uniform","name":"Martial Arts Uniform","keywords":["judo","karate","taekwondo"],"skins":[{"unified":"1f94b","native":"\ud83e\udd4b"}],"version":3},"goal_net":{"id":"goal_net","name":"Goal Net","keywords":["sports"],"skins":[{"unified":"1f945","native":"\ud83e\udd45"}],"version":3},"golf":{"id":"golf","name":"Flag in Hole","keywords":["golf","sports","business","summer"],"skins":[{"unified":"26f3","native":"\u26f3"}],"version":1},"ice_skate":{"id":"ice_skate","name":"Ice Skate","keywords":["sports"],"skins":[{"unified":"26f8-fe0f","native":"\u26f8\ufe0f"}],"version":1},"fishing_pole_and_fish":{"id":"fishing_pole_and_fish","name":"Fishing Pole","keywords":["and","fish","food","hobby","summer"],"skins":[{"unified":"1f3a3","native":"\ud83c\udfa3"}],"version":1},"diving_mask":{"id":"diving_mask","name":"Diving Mask","keywords":["sport","ocean"],"skins":[{"unified":"1f93f","native":"\ud83e\udd3f"}],"version":12},"running_shirt_with_sash":{"id":"running_shirt_with_sash","name":"Running Shirt","keywords":["with","sash","play","pageant"],"skins":[{"unified":"1f3bd","native":"\ud83c\udfbd"}],"version":1},"ski":{"id":"ski","name":"Skis","keywords":["ski","sports","winter","cold","snow"],"skins":[{"unified":"1f3bf","native":"\ud83c\udfbf"}],"version":1},"sled":{"id":"sled","name":"Sled","keywords":["sleigh","luge","toboggan"],"skins":[{"unified":"1f6f7","native":"\ud83d\udef7"}],"version":5},"curling_stone":{"id":"curling_stone","name":"Curling Stone","keywords":["sports"],"skins":[{"unified":"1f94c","native":"\ud83e\udd4c"}],"version":5},"dart":{"id":"dart","name":"Bullseye","keywords":["dart","direct","hit","game","play","bar","target"],"skins":[{"unified":"1f3af","native":"\ud83c\udfaf"}],"version":1},"yo-yo":{"id":"yo-yo","name":"Yo-Yo","keywords":["yo","toy"],"skins":[{"unified":"1fa80","native":"\ud83e\ude80"}],"version":12},"kite":{"id":"kite","name":"Kite","keywords":["wind","fly"],"skins":[{"unified":"1fa81","native":"\ud83e\ude81"}],"version":12},"8ball":{"id":"8ball","name":"Billiards","keywords":["8ball","pool","8","ball","hobby","game","luck","magic"],"skins":[{"unified":"1f3b1","native":"\ud83c\udfb1"}],"version":1},"crystal_ball":{"id":"crystal_ball","name":"Crystal Ball","keywords":["disco","party","magic","circus","fortune","teller"],"skins":[{"unified":"1f52e","native":"\ud83d\udd2e"}],"version":1},"magic_wand":{"id":"magic_wand","name":"Magic Wand","keywords":["supernature","power"],"skins":[{"unified":"1fa84","native":"\ud83e\ude84"}],"version":13},"nazar_amulet":{"id":"nazar_amulet","name":"Nazar Amulet","keywords":["bead","charm"],"skins":[{"unified":"1f9ff","native":"\ud83e\uddff"}],"version":11},"hamsa":{"id":"hamsa","name":"Hamsa","keywords":["religion","protection"],"skins":[{"unified":"1faac","native":"\ud83e\udeac"}],"version":14},"video_game":{"id":"video_game","name":"Video Game","keywords":["play","console","PS4","controller"],"skins":[{"unified":"1f3ae","native":"\ud83c\udfae"}],"version":1},"joystick":{"id":"joystick","name":"Joystick","keywords":["game","play"],"skins":[{"unified":"1f579-fe0f","native":"\ud83d\udd79\ufe0f"}],"version":1},"slot_machine":{"id":"slot_machine","name":"Slot Machine","keywords":["bet","gamble","vegas","fruit","luck","casino"],"skins":[{"unified":"1f3b0","native":"\ud83c\udfb0"}],"version":1},"game_die":{"id":"game_die","name":"Game Die","keywords":["dice","random","tabletop","play","luck"],"skins":[{"unified":"1f3b2","native":"\ud83c\udfb2"}],"version":1},"jigsaw":{"id":"jigsaw","name":"Puzzle Piece","keywords":["jigsaw","interlocking"],"skins":[{"unified":"1f9e9","native":"\ud83e\udde9"}],"version":11},"teddy_bear":{"id":"teddy_bear","name":"Teddy Bear","keywords":["plush","stuffed"],"skins":[{"unified":"1f9f8","native":"\ud83e\uddf8"}],"version":11},"pinata":{"id":"pinata","name":"Pinata","keywords":["mexico","candy","celebration"],"skins":[{"unified":"1fa85","native":"\ud83e\ude85"}],"version":13},"mirror_ball":{"id":"mirror_ball","name":"Mirror Ball","keywords":["disco","dance","party"],"skins":[{"unified":"1faa9","native":"\ud83e\udea9"}],"version":14},"nesting_dolls":{"id":"nesting_dolls","name":"Nesting Dolls","keywords":["matryoshka","toy"],"skins":[{"unified":"1fa86","native":"\ud83e\ude86"}],"version":13},"spades":{"id":"spades","name":"Spade Suit","keywords":["spades","poker","cards","suits","magic"],"skins":[{"unified":"2660-fe0f","native":"\u2660\ufe0f"}],"version":1},"hearts":{"id":"hearts","name":"Heart Suit","keywords":["hearts","poker","cards","magic","suits"],"skins":[{"unified":"2665-fe0f","native":"\u2665\ufe0f"}],"version":1},"diamonds":{"id":"diamonds","name":"Diamond Suit","keywords":["diamonds","poker","cards","magic","suits"],"skins":[{"unified":"2666-fe0f","native":"\u2666\ufe0f"}],"version":1},"clubs":{"id":"clubs","name":"Club Suit","keywords":["clubs","poker","cards","magic","suits"],"skins":[{"unified":"2663-fe0f","native":"\u2663\ufe0f"}],"version":1},"chess_pawn":{"id":"chess_pawn","name":"Chess Pawn","keywords":["expendable"],"skins":[{"unified":"265f-fe0f","native":"\u265f\ufe0f"}],"version":11},"black_joker":{"id":"black_joker","name":"Joker","keywords":["black","poker","cards","game","play","magic"],"skins":[{"unified":"1f0cf","native":"\ud83c\udccf"}],"version":1},"mahjong":{"id":"mahjong","name":"Mahjong Red Dragon","keywords":["game","play","chinese","kanji"],"skins":[{"unified":"1f004","native":"\ud83c\udc04"}],"version":1},"flower_playing_cards":{"id":"flower_playing_cards","name":"Flower Playing Cards","keywords":["game","sunset","red"],"skins":[{"unified":"1f3b4","native":"\ud83c\udfb4"}],"version":1},"performing_arts":{"id":"performing_arts","name":"Performing Arts","keywords":["acting","theater","drama"],"skins":[{"unified":"1f3ad","native":"\ud83c\udfad"}],"version":1},"frame_with_picture":{"id":"frame_with_picture","name":"Framed Picture","keywords":["frame","with","photography"],"skins":[{"unified":"1f5bc-fe0f","native":"\ud83d\uddbc\ufe0f"}],"version":1},"art":{"id":"art","name":"Artist Palette","keywords":["art","design","paint","draw","colors"],"skins":[{"unified":"1f3a8","native":"\ud83c\udfa8"}],"version":1},"thread":{"id":"thread","name":"Thread","keywords":["needle","sewing","spool","string"],"skins":[{"unified":"1f9f5","native":"\ud83e\uddf5"}],"version":11},"sewing_needle":{"id":"sewing_needle","name":"Sewing Needle","keywords":["stitches"],"skins":[{"unified":"1faa1","native":"\ud83e\udea1"}],"version":13},"yarn":{"id":"yarn","name":"Yarn","keywords":["ball","crochet","knit"],"skins":[{"unified":"1f9f6","native":"\ud83e\uddf6"}],"version":11},"knot":{"id":"knot","name":"Knot","keywords":["rope","scout"],"skins":[{"unified":"1faa2","native":"\ud83e\udea2"}],"version":13},"eyeglasses":{"id":"eyeglasses","name":"Glasses","keywords":["eyeglasses","fashion","accessories","eyesight","nerdy","dork","geek"],"skins":[{"unified":"1f453","native":"\ud83d\udc53"}],"version":1},"dark_sunglasses":{"id":"dark_sunglasses","name":"Sunglasses","keywords":["dark","face","cool","accessories"],"skins":[{"unified":"1f576-fe0f","native":"\ud83d\udd76\ufe0f"}],"version":1},"goggles":{"id":"goggles","name":"Goggles","keywords":["eyes","protection","safety"],"skins":[{"unified":"1f97d","native":"\ud83e\udd7d"}],"version":11},"lab_coat":{"id":"lab_coat","name":"Lab Coat","keywords":["doctor","experiment","scientist","chemist"],"skins":[{"unified":"1f97c","native":"\ud83e\udd7c"}],"version":11},"safety_vest":{"id":"safety_vest","name":"Safety Vest","keywords":["protection"],"skins":[{"unified":"1f9ba","native":"\ud83e\uddba"}],"version":12},"necktie":{"id":"necktie","name":"Necktie","keywords":["shirt","suitup","formal","fashion","cloth","business"],"skins":[{"unified":"1f454","native":"\ud83d\udc54"}],"version":1},"shirt":{"id":"shirt","name":"T-Shirt","keywords":["shirt","tshirt","t","fashion","cloth","casual","tee"],"skins":[{"unified":"1f455","native":"\ud83d\udc55"}],"version":1},"jeans":{"id":"jeans","name":"Jeans","keywords":["fashion","shopping"],"skins":[{"unified":"1f456","native":"\ud83d\udc56"}],"version":1},"scarf":{"id":"scarf","name":"Scarf","keywords":["neck","winter","clothes"],"skins":[{"unified":"1f9e3","native":"\ud83e\udde3"}],"version":5},"gloves":{"id":"gloves","name":"Gloves","keywords":["hands","winter","clothes"],"skins":[{"unified":"1f9e4","native":"\ud83e\udde4"}],"version":5},"coat":{"id":"coat","name":"Coat","keywords":["jacket"],"skins":[{"unified":"1f9e5","native":"\ud83e\udde5"}],"version":5},"socks":{"id":"socks","name":"Socks","keywords":["stockings","clothes"],"skins":[{"unified":"1f9e6","native":"\ud83e\udde6"}],"version":5},"dress":{"id":"dress","name":"Dress","keywords":["clothes","fashion","shopping"],"skins":[{"unified":"1f457","native":"\ud83d\udc57"}],"version":1},"kimono":{"id":"kimono","name":"Kimono","keywords":["dress","fashion","women","female","japanese"],"skins":[{"unified":"1f458","native":"\ud83d\udc58"}],"version":1},"sari":{"id":"sari","name":"Sari","keywords":["dress"],"skins":[{"unified":"1f97b","native":"\ud83e\udd7b"}],"version":12},"one-piece_swimsuit":{"id":"one-piece_swimsuit","name":"One-Piece Swimsuit","keywords":["one","piece","fashion"],"skins":[{"unified":"1fa71","native":"\ud83e\ude71"}],"version":12},"briefs":{"id":"briefs","name":"Briefs","keywords":["clothing"],"skins":[{"unified":"1fa72","native":"\ud83e\ude72"}],"version":12},"shorts":{"id":"shorts","name":"Shorts","keywords":["clothing"],"skins":[{"unified":"1fa73","native":"\ud83e\ude73"}],"version":12},"bikini":{"id":"bikini","name":"Bikini","keywords":["swimming","female","woman","girl","fashion","beach","summer"],"skins":[{"unified":"1f459","native":"\ud83d\udc59"}],"version":1},"womans_clothes":{"id":"womans_clothes","name":"Womans Clothes","keywords":["woman","s","fashion","shopping","bags","female"],"skins":[{"unified":"1f45a","native":"\ud83d\udc5a"}],"version":1},"purse":{"id":"purse","name":"Purse","keywords":["fashion","accessories","money","sales","shopping"],"skins":[{"unified":"1f45b","native":"\ud83d\udc5b"}],"version":1},"handbag":{"id":"handbag","name":"Handbag","keywords":["fashion","accessory","accessories","shopping"],"skins":[{"unified":"1f45c","native":"\ud83d\udc5c"}],"version":1},"pouch":{"id":"pouch","name":"Pouch","keywords":["clutch","bag","accessories","shopping"],"skins":[{"unified":"1f45d","native":"\ud83d\udc5d"}],"version":1},"shopping_bags":{"id":"shopping_bags","name":"Shopping Bags","keywords":["mall","buy","purchase"],"skins":[{"unified":"1f6cd-fe0f","native":"\ud83d\udecd\ufe0f"}],"version":1},"school_satchel":{"id":"school_satchel","name":"Backpack","keywords":["school","satchel","student","education","bag"],"skins":[{"unified":"1f392","native":"\ud83c\udf92"}],"version":1},"thong_sandal":{"id":"thong_sandal","name":"Thong Sandal","keywords":["footwear","summer"],"skins":[{"unified":"1fa74","native":"\ud83e\ude74"}],"version":13},"mans_shoe":{"id":"mans_shoe","name":"Mans Shoe","keywords":["man","s","fashion","male"],"skins":[{"unified":"1f45e","native":"\ud83d\udc5e"}],"version":1},"athletic_shoe":{"id":"athletic_shoe","name":"Running Shoe","keywords":["athletic","shoes","sports","sneakers"],"skins":[{"unified":"1f45f","native":"\ud83d\udc5f"}],"version":1},"hiking_boot":{"id":"hiking_boot","name":"Hiking Boot","keywords":["backpacking","camping"],"skins":[{"unified":"1f97e","native":"\ud83e\udd7e"}],"version":11},"womans_flat_shoe":{"id":"womans_flat_shoe","name":"Flat Shoe","keywords":["womans","ballet","slip","on","slipper"],"skins":[{"unified":"1f97f","native":"\ud83e\udd7f"}],"version":11},"high_heel":{"id":"high_heel","name":"High-Heeled Shoe","keywords":["high","heel","heeled","fashion","shoes","female","pumps","stiletto"],"skins":[{"unified":"1f460","native":"\ud83d\udc60"}],"version":1},"sandal":{"id":"sandal","name":"Womans Sandal","keywords":["woman","s","shoes","fashion","flip","flops"],"skins":[{"unified":"1f461","native":"\ud83d\udc61"}],"version":1},"ballet_shoes":{"id":"ballet_shoes","name":"Ballet Shoes","keywords":["dance"],"skins":[{"unified":"1fa70","native":"\ud83e\ude70"}],"version":12},"boot":{"id":"boot","name":"Womans Boots","keywords":["boot","woman","s","shoes","fashion"],"skins":[{"unified":"1f462","native":"\ud83d\udc62"}],"version":1},"crown":{"id":"crown","name":"Crown","keywords":["king","kod","leader","royalty","lord"],"skins":[{"unified":"1f451","native":"\ud83d\udc51"}],"version":1},"womans_hat":{"id":"womans_hat","name":"Womans Hat","keywords":["woman","s","fashion","accessories","female","lady","spring"],"skins":[{"unified":"1f452","native":"\ud83d\udc52"}],"version":1},"tophat":{"id":"tophat","name":"Top Hat","keywords":["tophat","magic","gentleman","classy","circus"],"skins":[{"unified":"1f3a9","native":"\ud83c\udfa9"}],"version":1},"mortar_board":{"id":"mortar_board","name":"Graduation Cap","keywords":["mortar","board","school","college","degree","university","hat","legal","learn","education"],"skins":[{"unified":"1f393","native":"\ud83c\udf93"}],"version":1},"billed_cap":{"id":"billed_cap","name":"Billed Cap","keywords":["baseball"],"skins":[{"unified":"1f9e2","native":"\ud83e\udde2"}],"version":5},"military_helmet":{"id":"military_helmet","name":"Military Helmet","keywords":["army","protection"],"skins":[{"unified":"1fa96","native":"\ud83e\ude96"}],"version":13},"helmet_with_white_cross":{"id":"helmet_with_white_cross","name":"Rescue Worker\u2019s Helmet","keywords":["with","white","cross","worker","s","construction","build"],"skins":[{"unified":"26d1-fe0f","native":"\u26d1\ufe0f"}],"version":1},"prayer_beads":{"id":"prayer_beads","name":"Prayer Beads","keywords":["dhikr","religious"],"skins":[{"unified":"1f4ff","native":"\ud83d\udcff"}],"version":1},"lipstick":{"id":"lipstick","name":"Lipstick","keywords":["female","girl","fashion","woman"],"skins":[{"unified":"1f484","native":"\ud83d\udc84"}],"version":1},"ring":{"id":"ring","name":"Ring","keywords":["wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],"skins":[{"unified":"1f48d","native":"\ud83d\udc8d"}],"version":1},"gem":{"id":"gem","name":"Gem Stone","keywords":["blue","ruby","diamond","jewelry"],"skins":[{"unified":"1f48e","native":"\ud83d\udc8e"}],"version":1},"mute":{"id":"mute","name":"Muted Speaker","keywords":["mute","sound","volume","silence","quiet"],"skins":[{"unified":"1f507","native":"\ud83d\udd07"}],"version":1},"speaker":{"id":"speaker","name":"Speaker","keywords":["low","volume","sound","silence","broadcast"],"skins":[{"unified":"1f508","native":"\ud83d\udd08"}],"version":1},"sound":{"id":"sound","name":"Speaker Medium Volume","keywords":["sound","broadcast"],"skins":[{"unified":"1f509","native":"\ud83d\udd09"}],"version":1},"loud_sound":{"id":"loud_sound","name":"Speaker High Volume","keywords":["loud","sound","noise","noisy","broadcast"],"skins":[{"unified":"1f50a","native":"\ud83d\udd0a"}],"version":1},"loudspeaker":{"id":"loudspeaker","name":"Loudspeaker","keywords":["volume","sound"],"skins":[{"unified":"1f4e2","native":"\ud83d\udce2"}],"version":1},"mega":{"id":"mega","name":"Megaphone","keywords":["mega","sound","speaker","volume"],"skins":[{"unified":"1f4e3","native":"\ud83d\udce3"}],"version":1},"postal_horn":{"id":"postal_horn","name":"Postal Horn","keywords":["instrument","music"],"skins":[{"unified":"1f4ef","native":"\ud83d\udcef"}],"version":1},"bell":{"id":"bell","name":"Bell","keywords":["sound","notification","christmas","xmas","chime"],"skins":[{"unified":"1f514","native":"\ud83d\udd14"}],"version":1},"no_bell":{"id":"no_bell","name":"Bell with Slash","keywords":["no","sound","volume","mute","quiet","silent"],"skins":[{"unified":"1f515","native":"\ud83d\udd15"}],"version":1},"musical_score":{"id":"musical_score","name":"Musical Score","keywords":["treble","clef","compose"],"skins":[{"unified":"1f3bc","native":"\ud83c\udfbc"}],"version":1},"musical_note":{"id":"musical_note","name":"Musical Note","keywords":["score","tone","sound"],"skins":[{"unified":"1f3b5","native":"\ud83c\udfb5"}],"version":1},"notes":{"id":"notes","name":"Musical Notes","keywords":["music","score"],"skins":[{"unified":"1f3b6","native":"\ud83c\udfb6"}],"version":1},"studio_microphone":{"id":"studio_microphone","name":"Studio Microphone","keywords":["sing","recording","artist","talkshow"],"skins":[{"unified":"1f399-fe0f","native":"\ud83c\udf99\ufe0f"}],"version":1},"level_slider":{"id":"level_slider","name":"Level Slider","keywords":["scale"],"skins":[{"unified":"1f39a-fe0f","native":"\ud83c\udf9a\ufe0f"}],"version":1},"control_knobs":{"id":"control_knobs","name":"Control Knobs","keywords":["dial"],"skins":[{"unified":"1f39b-fe0f","native":"\ud83c\udf9b\ufe0f"}],"version":1},"microphone":{"id":"microphone","name":"Microphone","keywords":["sound","music","PA","sing","talkshow"],"skins":[{"unified":"1f3a4","native":"\ud83c\udfa4"}],"version":1},"headphones":{"id":"headphones","name":"Headphone","keywords":["headphones","music","score","gadgets"],"skins":[{"unified":"1f3a7","native":"\ud83c\udfa7"}],"version":1},"radio":{"id":"radio","name":"Radio","keywords":["communication","music","podcast","program"],"skins":[{"unified":"1f4fb","native":"\ud83d\udcfb"}],"version":1},"saxophone":{"id":"saxophone","name":"Saxophone","keywords":["music","instrument","jazz","blues"],"skins":[{"unified":"1f3b7","native":"\ud83c\udfb7"}],"version":1},"accordion":{"id":"accordion","name":"Accordion","keywords":["music"],"skins":[{"unified":"1fa97","native":"\ud83e\ude97"}],"version":13},"guitar":{"id":"guitar","name":"Guitar","keywords":["music","instrument"],"skins":[{"unified":"1f3b8","native":"\ud83c\udfb8"}],"version":1},"musical_keyboard":{"id":"musical_keyboard","name":"Musical Keyboard","keywords":["piano","instrument","compose"],"skins":[{"unified":"1f3b9","native":"\ud83c\udfb9"}],"version":1},"trumpet":{"id":"trumpet","name":"Trumpet","keywords":["music","brass"],"skins":[{"unified":"1f3ba","native":"\ud83c\udfba"}],"version":1},"violin":{"id":"violin","name":"Violin","keywords":["music","instrument","orchestra","symphony"],"skins":[{"unified":"1f3bb","native":"\ud83c\udfbb"}],"version":1},"banjo":{"id":"banjo","name":"Banjo","keywords":["music","instructment"],"skins":[{"unified":"1fa95","native":"\ud83e\ude95"}],"version":12},"drum_with_drumsticks":{"id":"drum_with_drumsticks","name":"Drum","keywords":["with","drumsticks","music","instrument","snare"],"skins":[{"unified":"1f941","native":"\ud83e\udd41"}],"version":3},"long_drum":{"id":"long_drum","name":"Long Drum","keywords":["music"],"skins":[{"unified":"1fa98","native":"\ud83e\ude98"}],"version":13},"iphone":{"id":"iphone","name":"Mobile Phone","keywords":["iphone","technology","apple","gadgets","dial"],"skins":[{"unified":"1f4f1","native":"\ud83d\udcf1"}],"version":1},"calling":{"id":"calling","name":"Mobile Phone with Arrow","keywords":["calling","iphone","incoming"],"skins":[{"unified":"1f4f2","native":"\ud83d\udcf2"}],"version":1},"phone":{"id":"phone","name":"Telephone","keywords":["phone","technology","communication","dial"],"skins":[{"unified":"260e-fe0f","native":"\u260e\ufe0f"}],"version":1},"telephone_receiver":{"id":"telephone_receiver","name":"Telephone Receiver","keywords":["technology","communication","dial"],"skins":[{"unified":"1f4de","native":"\ud83d\udcde"}],"version":1},"pager":{"id":"pager","name":"Pager","keywords":["bbcall","oldschool","90s"],"skins":[{"unified":"1f4df","native":"\ud83d\udcdf"}],"version":1},"fax":{"id":"fax","name":"Fax Machine","keywords":["communication","technology"],"skins":[{"unified":"1f4e0","native":"\ud83d\udce0"}],"version":1},"battery":{"id":"battery","name":"Battery","keywords":["power","energy","sustain"],"skins":[{"unified":"1f50b","native":"\ud83d\udd0b"}],"version":1},"low_battery":{"id":"low_battery","name":"Low Battery","keywords":["drained","dead"],"skins":[{"unified":"1faab","native":"\ud83e\udeab"}],"version":14},"electric_plug":{"id":"electric_plug","name":"Electric Plug","keywords":["charger","power"],"skins":[{"unified":"1f50c","native":"\ud83d\udd0c"}],"version":1},"computer":{"id":"computer","name":"Laptop","keywords":["computer","technology","screen","display","monitor"],"skins":[{"unified":"1f4bb","native":"\ud83d\udcbb"}],"version":1},"desktop_computer":{"id":"desktop_computer","name":"Desktop Computer","keywords":["technology","computing","screen"],"skins":[{"unified":"1f5a5-fe0f","native":"\ud83d\udda5\ufe0f"}],"version":1},"printer":{"id":"printer","name":"Printer","keywords":["paper","ink"],"skins":[{"unified":"1f5a8-fe0f","native":"\ud83d\udda8\ufe0f"}],"version":1},"keyboard":{"id":"keyboard","name":"Keyboard","keywords":["technology","computer","type","input","text"],"skins":[{"unified":"2328-fe0f","native":"\u2328\ufe0f"}],"version":1},"three_button_mouse":{"id":"three_button_mouse","name":"Computer Mouse","keywords":["three","button","click"],"skins":[{"unified":"1f5b1-fe0f","native":"\ud83d\uddb1\ufe0f"}],"version":1},"trackball":{"id":"trackball","name":"Trackball","keywords":["technology","trackpad"],"skins":[{"unified":"1f5b2-fe0f","native":"\ud83d\uddb2\ufe0f"}],"version":1},"minidisc":{"id":"minidisc","name":"Minidisc","keywords":["computer","disk","technology","record","data","90s"],"skins":[{"unified":"1f4bd","native":"\ud83d\udcbd"}],"version":1},"floppy_disk":{"id":"floppy_disk","name":"Floppy Disk","keywords":["oldschool","technology","save","90s","80s"],"skins":[{"unified":"1f4be","native":"\ud83d\udcbe"}],"version":1},"cd":{"id":"cd","name":"Optical Disc","keywords":["cd","disk","technology","dvd","90s"],"skins":[{"unified":"1f4bf","native":"\ud83d\udcbf"}],"version":1},"dvd":{"id":"dvd","name":"Dvd","keywords":["cd","disk","disc"],"skins":[{"unified":"1f4c0","native":"\ud83d\udcc0"}],"version":1},"abacus":{"id":"abacus","name":"Abacus","keywords":["calculation"],"skins":[{"unified":"1f9ee","native":"\ud83e\uddee"}],"version":11},"movie_camera":{"id":"movie_camera","name":"Movie Camera","keywords":["film","record"],"skins":[{"unified":"1f3a5","native":"\ud83c\udfa5"}],"version":1},"film_frames":{"id":"film_frames","name":"Film Frames","keywords":["movie"],"skins":[{"unified":"1f39e-fe0f","native":"\ud83c\udf9e\ufe0f"}],"version":1},"film_projector":{"id":"film_projector","name":"Film Projector","keywords":["video","tape","record","movie"],"skins":[{"unified":"1f4fd-fe0f","native":"\ud83d\udcfd\ufe0f"}],"version":1},"clapper":{"id":"clapper","name":"Clapper Board","keywords":["movie","film","record"],"skins":[{"unified":"1f3ac","native":"\ud83c\udfac"}],"version":1},"tv":{"id":"tv","name":"Television","keywords":["tv","technology","program","oldschool","show"],"skins":[{"unified":"1f4fa","native":"\ud83d\udcfa"}],"version":1},"camera":{"id":"camera","name":"Camera","keywords":["gadgets","photography"],"skins":[{"unified":"1f4f7","native":"\ud83d\udcf7"}],"version":1},"camera_with_flash":{"id":"camera_with_flash","name":"Camera with Flash","keywords":["photography","gadgets"],"skins":[{"unified":"1f4f8","native":"\ud83d\udcf8"}],"version":1},"video_camera":{"id":"video_camera","name":"Video Camera","keywords":["film","record"],"skins":[{"unified":"1f4f9","native":"\ud83d\udcf9"}],"version":1},"vhs":{"id":"vhs","name":"Videocassette","keywords":["vhs","record","video","oldschool","90s","80s"],"skins":[{"unified":"1f4fc","native":"\ud83d\udcfc"}],"version":1},"mag":{"id":"mag","name":"Magnifying Glass Tilted Left","keywords":["mag","search","zoom","find","detective"],"skins":[{"unified":"1f50d","native":"\ud83d\udd0d"}],"version":1},"mag_right":{"id":"mag_right","name":"Magnifying Glass Tilted Right","keywords":["mag","search","zoom","find","detective"],"skins":[{"unified":"1f50e","native":"\ud83d\udd0e"}],"version":1},"candle":{"id":"candle","name":"Candle","keywords":["fire","wax"],"skins":[{"unified":"1f56f-fe0f","native":"\ud83d\udd6f\ufe0f"}],"version":1},"bulb":{"id":"bulb","name":"Light Bulb","keywords":["electricity","idea"],"skins":[{"unified":"1f4a1","native":"\ud83d\udca1"}],"version":1},"flashlight":{"id":"flashlight","name":"Flashlight","keywords":["dark","camping","sight","night"],"skins":[{"unified":"1f526","native":"\ud83d\udd26"}],"version":1},"izakaya_lantern":{"id":"izakaya_lantern","name":"Izakaya Lantern","keywords":["red","paper","light","halloween","spooky"],"skins":[{"unified":"1f3ee","native":"\ud83c\udfee"}],"version":1},"diya_lamp":{"id":"diya_lamp","name":"Diya Lamp","keywords":["lighting"],"skins":[{"unified":"1fa94","native":"\ud83e\ude94"}],"version":12},"notebook_with_decorative_cover":{"id":"notebook_with_decorative_cover","name":"Notebook with Decorative Cover","keywords":["classroom","notes","record","paper","study"],"skins":[{"unified":"1f4d4","native":"\ud83d\udcd4"}],"version":1},"closed_book":{"id":"closed_book","name":"Closed Book","keywords":["read","library","knowledge","textbook","learn"],"skins":[{"unified":"1f4d5","native":"\ud83d\udcd5"}],"version":1},"book":{"id":"book","name":"Open Book","keywords":["read","library","knowledge","literature","learn","study"],"skins":[{"unified":"1f4d6","native":"\ud83d\udcd6"}],"version":1},"green_book":{"id":"green_book","name":"Green Book","keywords":["read","library","knowledge","study"],"skins":[{"unified":"1f4d7","native":"\ud83d\udcd7"}],"version":1},"blue_book":{"id":"blue_book","name":"Blue Book","keywords":["read","library","knowledge","learn","study"],"skins":[{"unified":"1f4d8","native":"\ud83d\udcd8"}],"version":1},"orange_book":{"id":"orange_book","name":"Orange Book","keywords":["read","library","knowledge","textbook","study"],"skins":[{"unified":"1f4d9","native":"\ud83d\udcd9"}],"version":1},"books":{"id":"books","name":"Books","keywords":["literature","library","study"],"skins":[{"unified":"1f4da","native":"\ud83d\udcda"}],"version":1},"notebook":{"id":"notebook","name":"Notebook","keywords":["stationery","record","notes","paper","study"],"skins":[{"unified":"1f4d3","native":"\ud83d\udcd3"}],"version":1},"ledger":{"id":"ledger","name":"Ledger","keywords":["notes","paper"],"skins":[{"unified":"1f4d2","native":"\ud83d\udcd2"}],"version":1},"page_with_curl":{"id":"page_with_curl","name":"Page with Curl","keywords":["documents","office","paper"],"skins":[{"unified":"1f4c3","native":"\ud83d\udcc3"}],"version":1},"scroll":{"id":"scroll","name":"Scroll","keywords":["documents","ancient","history","paper"],"skins":[{"unified":"1f4dc","native":"\ud83d\udcdc"}],"version":1},"page_facing_up":{"id":"page_facing_up","name":"Page Facing Up","keywords":["documents","office","paper","information"],"skins":[{"unified":"1f4c4","native":"\ud83d\udcc4"}],"version":1},"newspaper":{"id":"newspaper","name":"Newspaper","keywords":["press","headline"],"skins":[{"unified":"1f4f0","native":"\ud83d\udcf0"}],"version":1},"rolled_up_newspaper":{"id":"rolled_up_newspaper","name":"Rolled-Up Newspaper","keywords":["rolled","up","press","headline"],"skins":[{"unified":"1f5de-fe0f","native":"\ud83d\uddde\ufe0f"}],"version":1},"bookmark_tabs":{"id":"bookmark_tabs","name":"Bookmark Tabs","keywords":["favorite","save","order","tidy"],"skins":[{"unified":"1f4d1","native":"\ud83d\udcd1"}],"version":1},"bookmark":{"id":"bookmark","name":"Bookmark","keywords":["favorite","label","save"],"skins":[{"unified":"1f516","native":"\ud83d\udd16"}],"version":1},"label":{"id":"label","name":"Label","keywords":["sale","tag"],"skins":[{"unified":"1f3f7-fe0f","native":"\ud83c\udff7\ufe0f"}],"version":1},"moneybag":{"id":"moneybag","name":"Money Bag","keywords":["moneybag","dollar","payment","coins","sale"],"skins":[{"unified":"1f4b0","native":"\ud83d\udcb0"}],"version":1},"coin":{"id":"coin","name":"Coin","keywords":["money","currency"],"skins":[{"unified":"1fa99","native":"\ud83e\ude99"}],"version":13},"yen":{"id":"yen","name":"Yen Banknote","keywords":["money","sales","japanese","dollar","currency"],"skins":[{"unified":"1f4b4","native":"\ud83d\udcb4"}],"version":1},"dollar":{"id":"dollar","name":"Dollar Banknote","keywords":["money","sales","bill","currency"],"skins":[{"unified":"1f4b5","native":"\ud83d\udcb5"}],"version":1},"euro":{"id":"euro","name":"Euro Banknote","keywords":["money","sales","dollar","currency"],"skins":[{"unified":"1f4b6","native":"\ud83d\udcb6"}],"version":1},"pound":{"id":"pound","name":"Pound Banknote","keywords":["british","sterling","money","sales","bills","uk","england","currency"],"skins":[{"unified":"1f4b7","native":"\ud83d\udcb7"}],"version":1},"money_with_wings":{"id":"money_with_wings","name":"Money with Wings","keywords":["dollar","bills","payment","sale"],"skins":[{"unified":"1f4b8","native":"\ud83d\udcb8"}],"version":1},"credit_card":{"id":"credit_card","name":"Credit Card","keywords":["money","sales","dollar","bill","payment","shopping"],"skins":[{"unified":"1f4b3","native":"\ud83d\udcb3"}],"version":1},"receipt":{"id":"receipt","name":"Receipt","keywords":["accounting","expenses"],"skins":[{"unified":"1f9fe","native":"\ud83e\uddfe"}],"version":11},"chart":{"id":"chart","name":"Chart Increasing with Yen","keywords":["green","square","graph","presentation","stats"],"skins":[{"unified":"1f4b9","native":"\ud83d\udcb9"}],"version":1},"email":{"id":"email","name":"Envelope","keywords":["email","letter","postal","inbox","communication"],"skins":[{"unified":"2709-fe0f","native":"\u2709\ufe0f"}],"version":1},"e-mail":{"id":"e-mail","name":"E-Mail","keywords":["e","mail","communication","inbox"],"skins":[{"unified":"1f4e7","native":"\ud83d\udce7"}],"version":1},"incoming_envelope":{"id":"incoming_envelope","name":"Incoming Envelope","keywords":["email","inbox"],"skins":[{"unified":"1f4e8","native":"\ud83d\udce8"}],"version":1},"envelope_with_arrow":{"id":"envelope_with_arrow","name":"Envelope with Arrow","keywords":["email","communication"],"skins":[{"unified":"1f4e9","native":"\ud83d\udce9"}],"version":1},"outbox_tray":{"id":"outbox_tray","name":"Outbox Tray","keywords":["inbox","email"],"skins":[{"unified":"1f4e4","native":"\ud83d\udce4"}],"version":1},"inbox_tray":{"id":"inbox_tray","name":"Inbox Tray","keywords":["email","documents"],"skins":[{"unified":"1f4e5","native":"\ud83d\udce5"}],"version":1},"package":{"id":"package","name":"Package","keywords":["mail","gift","cardboard","box","moving"],"skins":[{"unified":"1f4e6","native":"\ud83d\udce6"}],"version":1},"mailbox":{"id":"mailbox","name":"Closed Mailbox with Raised Flag","keywords":["email","inbox","communication"],"skins":[{"unified":"1f4eb","native":"\ud83d\udceb"}],"version":1},"mailbox_closed":{"id":"mailbox_closed","name":"Closed Mailbox with Lowered Flag","keywords":["email","communication","inbox"],"skins":[{"unified":"1f4ea","native":"\ud83d\udcea"}],"version":1},"mailbox_with_mail":{"id":"mailbox_with_mail","name":"Open Mailbox with Raised Flag","keywords":["mail","email","inbox","communication"],"skins":[{"unified":"1f4ec","native":"\ud83d\udcec"}],"version":1},"mailbox_with_no_mail":{"id":"mailbox_with_no_mail","name":"Open Mailbox with Lowered Flag","keywords":["no","mail","email","inbox"],"skins":[{"unified":"1f4ed","native":"\ud83d\udced"}],"version":1},"postbox":{"id":"postbox","name":"Postbox","keywords":["email","letter","envelope"],"skins":[{"unified":"1f4ee","native":"\ud83d\udcee"}],"version":1},"ballot_box_with_ballot":{"id":"ballot_box_with_ballot","name":"Ballot Box with Ballot","keywords":["election","vote"],"skins":[{"unified":"1f5f3-fe0f","native":"\ud83d\uddf3\ufe0f"}],"version":1},"pencil2":{"id":"pencil2","name":"Pencil","keywords":["pencil2","stationery","write","paper","writing","school","study"],"skins":[{"unified":"270f-fe0f","native":"\u270f\ufe0f"}],"version":1},"black_nib":{"id":"black_nib","name":"Black Nib","keywords":["pen","stationery","writing","write"],"skins":[{"unified":"2712-fe0f","native":"\u2712\ufe0f"}],"version":1},"lower_left_fountain_pen":{"id":"lower_left_fountain_pen","name":"Fountain Pen","keywords":["lower","left","stationery","writing","write"],"skins":[{"unified":"1f58b-fe0f","native":"\ud83d\udd8b\ufe0f"}],"version":1},"lower_left_ballpoint_pen":{"id":"lower_left_ballpoint_pen","name":"Pen","keywords":["lower","left","ballpoint","stationery","writing","write"],"skins":[{"unified":"1f58a-fe0f","native":"\ud83d\udd8a\ufe0f"}],"version":1},"lower_left_paintbrush":{"id":"lower_left_paintbrush","name":"Paintbrush","keywords":["lower","left","drawing","creativity","art"],"skins":[{"unified":"1f58c-fe0f","native":"\ud83d\udd8c\ufe0f"}],"version":1},"lower_left_crayon":{"id":"lower_left_crayon","name":"Crayon","keywords":["lower","left","drawing","creativity"],"skins":[{"unified":"1f58d-fe0f","native":"\ud83d\udd8d\ufe0f"}],"version":1},"memo":{"id":"memo","name":"Memo","keywords":["pencil","write","documents","stationery","paper","writing","legal","exam","quiz","test","study","compose"],"skins":[{"unified":"1f4dd","native":"\ud83d\udcdd"}],"version":1},"briefcase":{"id":"briefcase","name":"Briefcase","keywords":["business","documents","work","law","legal","job","career"],"skins":[{"unified":"1f4bc","native":"\ud83d\udcbc"}],"version":1},"file_folder":{"id":"file_folder","name":"File Folder","keywords":["documents","business","office"],"skins":[{"unified":"1f4c1","native":"\ud83d\udcc1"}],"version":1},"open_file_folder":{"id":"open_file_folder","name":"Open File Folder","keywords":["documents","load"],"skins":[{"unified":"1f4c2","native":"\ud83d\udcc2"}],"version":1},"card_index_dividers":{"id":"card_index_dividers","name":"Card Index Dividers","keywords":["organizing","business","stationery"],"skins":[{"unified":"1f5c2-fe0f","native":"\ud83d\uddc2\ufe0f"}],"version":1},"date":{"id":"date","name":"Calendar","keywords":["date","schedule"],"skins":[{"unified":"1f4c5","native":"\ud83d\udcc5"}],"version":1},"calendar":{"id":"calendar","name":"Tear-off Calendar","keywords":["tear","off","schedule","date","planning"],"skins":[{"unified":"1f4c6","native":"\ud83d\udcc6"}],"version":1},"spiral_note_pad":{"id":"spiral_note_pad","name":"Spiral Notepad","keywords":["note","pad","memo","stationery"],"skins":[{"unified":"1f5d2-fe0f","native":"\ud83d\uddd2\ufe0f"}],"version":1},"spiral_calendar_pad":{"id":"spiral_calendar_pad","name":"Spiral Calendar","keywords":["pad","date","schedule","planning"],"skins":[{"unified":"1f5d3-fe0f","native":"\ud83d\uddd3\ufe0f"}],"version":1},"card_index":{"id":"card_index","name":"Card Index","keywords":["business","stationery"],"skins":[{"unified":"1f4c7","native":"\ud83d\udcc7"}],"version":1},"chart_with_upwards_trend":{"id":"chart_with_upwards_trend","name":"Chart Increasing","keywords":["with","upwards","trend","graph","presentation","stats","recovery","business","economics","money","sales","good","success"],"skins":[{"unified":"1f4c8","native":"\ud83d\udcc8"}],"version":1},"chart_with_downwards_trend":{"id":"chart_with_downwards_trend","name":"Chart Decreasing","keywords":["with","downwards","trend","graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],"skins":[{"unified":"1f4c9","native":"\ud83d\udcc9"}],"version":1},"bar_chart":{"id":"bar_chart","name":"Bar Chart","keywords":["graph","presentation","stats"],"skins":[{"unified":"1f4ca","native":"\ud83d\udcca"}],"version":1},"clipboard":{"id":"clipboard","name":"Clipboard","keywords":["stationery","documents"],"skins":[{"unified":"1f4cb","native":"\ud83d\udccb"}],"version":1},"pushpin":{"id":"pushpin","name":"Pushpin","keywords":["stationery","mark","here"],"skins":[{"unified":"1f4cc","native":"\ud83d\udccc"}],"version":1},"round_pushpin":{"id":"round_pushpin","name":"Round Pushpin","keywords":["stationery","location","map","here"],"skins":[{"unified":"1f4cd","native":"\ud83d\udccd"}],"version":1},"paperclip":{"id":"paperclip","name":"Paperclip","keywords":["documents","stationery"],"skins":[{"unified":"1f4ce","native":"\ud83d\udcce"}],"version":1},"linked_paperclips":{"id":"linked_paperclips","name":"Linked Paperclips","keywords":["documents","stationery"],"skins":[{"unified":"1f587-fe0f","native":"\ud83d\udd87\ufe0f"}],"version":1},"straight_ruler":{"id":"straight_ruler","name":"Straight Ruler","keywords":["stationery","calculate","length","math","school","drawing","architect","sketch"],"skins":[{"unified":"1f4cf","native":"\ud83d\udccf"}],"version":1},"triangular_ruler":{"id":"triangular_ruler","name":"Triangular Ruler","keywords":["stationery","math","architect","sketch"],"skins":[{"unified":"1f4d0","native":"\ud83d\udcd0"}],"version":1},"scissors":{"id":"scissors","name":"Scissors","keywords":["stationery","cut"],"skins":[{"unified":"2702-fe0f","native":"\u2702\ufe0f"}],"version":1},"card_file_box":{"id":"card_file_box","name":"Card File Box","keywords":["business","stationery"],"skins":[{"unified":"1f5c3-fe0f","native":"\ud83d\uddc3\ufe0f"}],"version":1},"file_cabinet":{"id":"file_cabinet","name":"File Cabinet","keywords":["filing","organizing"],"skins":[{"unified":"1f5c4-fe0f","native":"\ud83d\uddc4\ufe0f"}],"version":1},"wastebasket":{"id":"wastebasket","name":"Wastebasket","keywords":["bin","trash","rubbish","garbage","toss"],"skins":[{"unified":"1f5d1-fe0f","native":"\ud83d\uddd1\ufe0f"}],"version":1},"lock":{"id":"lock","name":"Lock","keywords":["locked","security","password","padlock"],"skins":[{"unified":"1f512","native":"\ud83d\udd12"}],"version":1},"unlock":{"id":"unlock","name":"Unlocked","keywords":["unlock","privacy","security"],"skins":[{"unified":"1f513","native":"\ud83d\udd13"}],"version":1},"lock_with_ink_pen":{"id":"lock_with_ink_pen","name":"Locked with Pen","keywords":["lock","ink","security","secret"],"skins":[{"unified":"1f50f","native":"\ud83d\udd0f"}],"version":1},"closed_lock_with_key":{"id":"closed_lock_with_key","name":"Locked with Key","keywords":["closed","lock","security","privacy"],"skins":[{"unified":"1f510","native":"\ud83d\udd10"}],"version":1},"key":{"id":"key","name":"Key","keywords":["lock","door","password"],"skins":[{"unified":"1f511","native":"\ud83d\udd11"}],"version":1},"old_key":{"id":"old_key","name":"Old Key","keywords":["lock","door","password"],"skins":[{"unified":"1f5dd-fe0f","native":"\ud83d\udddd\ufe0f"}],"version":1},"hammer":{"id":"hammer","name":"Hammer","keywords":["tools","build","create"],"skins":[{"unified":"1f528","native":"\ud83d\udd28"}],"version":1},"axe":{"id":"axe","name":"Axe","keywords":["tool","chop","cut"],"skins":[{"unified":"1fa93","native":"\ud83e\ude93"}],"version":12},"pick":{"id":"pick","name":"Pick","keywords":["tools","dig"],"skins":[{"unified":"26cf-fe0f","native":"\u26cf\ufe0f"}],"version":1},"hammer_and_pick":{"id":"hammer_and_pick","name":"Hammer and Pick","keywords":["tools","build","create"],"skins":[{"unified":"2692-fe0f","native":"\u2692\ufe0f"}],"version":1},"hammer_and_wrench":{"id":"hammer_and_wrench","name":"Hammer and Wrench","keywords":["tools","build","create"],"skins":[{"unified":"1f6e0-fe0f","native":"\ud83d\udee0\ufe0f"}],"version":1},"dagger_knife":{"id":"dagger_knife","name":"Dagger","keywords":["knife","weapon"],"skins":[{"unified":"1f5e1-fe0f","native":"\ud83d\udde1\ufe0f"}],"version":1},"crossed_swords":{"id":"crossed_swords","name":"Crossed Swords","keywords":["weapon"],"skins":[{"unified":"2694-fe0f","native":"\u2694\ufe0f"}],"version":1},"gun":{"id":"gun","name":"Pistol","keywords":["gun","violence","weapon","revolver"],"skins":[{"unified":"1f52b","native":"\ud83d\udd2b"}],"version":1},"boomerang":{"id":"boomerang","name":"Boomerang","keywords":["weapon"],"skins":[{"unified":"1fa83","native":"\ud83e\ude83"}],"version":13},"bow_and_arrow":{"id":"bow_and_arrow","name":"Bow and Arrow","keywords":["sports"],"skins":[{"unified":"1f3f9","native":"\ud83c\udff9"}],"version":1},"shield":{"id":"shield","name":"Shield","keywords":["protection","security"],"skins":[{"unified":"1f6e1-fe0f","native":"\ud83d\udee1\ufe0f"}],"version":1},"carpentry_saw":{"id":"carpentry_saw","name":"Carpentry Saw","keywords":["cut","chop"],"skins":[{"unified":"1fa9a","native":"\ud83e\ude9a"}],"version":13},"wrench":{"id":"wrench","name":"Wrench","keywords":["tools","diy","ikea","fix","maintainer"],"skins":[{"unified":"1f527","native":"\ud83d\udd27"}],"version":1},"screwdriver":{"id":"screwdriver","name":"Screwdriver","keywords":["tools"],"skins":[{"unified":"1fa9b","native":"\ud83e\ude9b"}],"version":13},"nut_and_bolt":{"id":"nut_and_bolt","name":"Nut and Bolt","keywords":["handy","tools","fix"],"skins":[{"unified":"1f529","native":"\ud83d\udd29"}],"version":1},"gear":{"id":"gear","name":"Gear","keywords":["cog"],"skins":[{"unified":"2699-fe0f","native":"\u2699\ufe0f"}],"version":1},"compression":{"id":"compression","name":"Clamp","keywords":["compression","tool"],"skins":[{"unified":"1f5dc-fe0f","native":"\ud83d\udddc\ufe0f"}],"version":1},"scales":{"id":"scales","name":"Balance Scale","keywords":["scales","law","fairness","weight"],"skins":[{"unified":"2696-fe0f","native":"\u2696\ufe0f"}],"version":1},"probing_cane":{"id":"probing_cane","name":"White Cane","keywords":["probing","accessibility"],"skins":[{"unified":"1f9af","native":"\ud83e\uddaf"}],"version":12},"link":{"id":"link","name":"Link","keywords":["rings","url"],"skins":[{"unified":"1f517","native":"\ud83d\udd17"}],"version":1},"chains":{"id":"chains","name":"Chains","keywords":["lock","arrest"],"skins":[{"unified":"26d3-fe0f","native":"\u26d3\ufe0f"}],"version":1},"hook":{"id":"hook","name":"Hook","keywords":["tools"],"skins":[{"unified":"1fa9d","native":"\ud83e\ude9d"}],"version":13},"toolbox":{"id":"toolbox","name":"Toolbox","keywords":["tools","diy","fix","maintainer","mechanic"],"skins":[{"unified":"1f9f0","native":"\ud83e\uddf0"}],"version":11},"magnet":{"id":"magnet","name":"Magnet","keywords":["attraction","magnetic"],"skins":[{"unified":"1f9f2","native":"\ud83e\uddf2"}],"version":11},"ladder":{"id":"ladder","name":"Ladder","keywords":["tools"],"skins":[{"unified":"1fa9c","native":"\ud83e\ude9c"}],"version":13},"alembic":{"id":"alembic","name":"Alembic","keywords":["distilling","science","experiment","chemistry"],"skins":[{"unified":"2697-fe0f","native":"\u2697\ufe0f"}],"version":1},"test_tube":{"id":"test_tube","name":"Test Tube","keywords":["chemistry","experiment","lab","science"],"skins":[{"unified":"1f9ea","native":"\ud83e\uddea"}],"version":11},"petri_dish":{"id":"petri_dish","name":"Petri Dish","keywords":["bacteria","biology","culture","lab"],"skins":[{"unified":"1f9eb","native":"\ud83e\uddeb"}],"version":11},"dna":{"id":"dna","name":"Dna","keywords":["biologist","genetics","life"],"skins":[{"unified":"1f9ec","native":"\ud83e\uddec"}],"version":11},"microscope":{"id":"microscope","name":"Microscope","keywords":["laboratory","experiment","zoomin","science","study"],"skins":[{"unified":"1f52c","native":"\ud83d\udd2c"}],"version":1},"telescope":{"id":"telescope","name":"Telescope","keywords":["stars","space","zoom","science","astronomy"],"skins":[{"unified":"1f52d","native":"\ud83d\udd2d"}],"version":1},"satellite_antenna":{"id":"satellite_antenna","name":"Satellite Antenna","keywords":["communication","future","radio","space"],"skins":[{"unified":"1f4e1","native":"\ud83d\udce1"}],"version":1},"syringe":{"id":"syringe","name":"Syringe","keywords":["health","hospital","drugs","blood","medicine","needle","doctor","nurse"],"skins":[{"unified":"1f489","native":"\ud83d\udc89"}],"version":1},"drop_of_blood":{"id":"drop_of_blood","name":"Drop of Blood","keywords":["period","hurt","harm","wound"],"skins":[{"unified":"1fa78","native":"\ud83e\ude78"}],"version":12},"pill":{"id":"pill","name":"Pill","keywords":["health","medicine","doctor","pharmacy","drug"],"skins":[{"unified":"1f48a","native":"\ud83d\udc8a"}],"version":1},"adhesive_bandage":{"id":"adhesive_bandage","name":"Adhesive Bandage","keywords":["heal"],"skins":[{"unified":"1fa79","native":"\ud83e\ude79"}],"version":12},"crutch":{"id":"crutch","name":"Crutch","keywords":["accessibility","assist"],"skins":[{"unified":"1fa7c","native":"\ud83e\ude7c"}],"version":14},"stethoscope":{"id":"stethoscope","name":"Stethoscope","keywords":["health"],"skins":[{"unified":"1fa7a","native":"\ud83e\ude7a"}],"version":12},"x-ray":{"id":"x-ray","name":"X-Ray","keywords":["x","ray","skeleton","medicine"],"skins":[{"unified":"1fa7b","native":"\ud83e\ude7b"}],"version":14},"door":{"id":"door","name":"Door","keywords":["house","entry","exit"],"skins":[{"unified":"1f6aa","native":"\ud83d\udeaa"}],"version":1},"elevator":{"id":"elevator","name":"Elevator","keywords":["lift"],"skins":[{"unified":"1f6d7","native":"\ud83d\uded7"}],"version":13},"mirror":{"id":"mirror","name":"Mirror","keywords":["reflection"],"skins":[{"unified":"1fa9e","native":"\ud83e\ude9e"}],"version":13},"window":{"id":"window","name":"Window","keywords":["scenery"],"skins":[{"unified":"1fa9f","native":"\ud83e\ude9f"}],"version":13},"bed":{"id":"bed","name":"Bed","keywords":["sleep","rest"],"skins":[{"unified":"1f6cf-fe0f","native":"\ud83d\udecf\ufe0f"}],"version":1},"couch_and_lamp":{"id":"couch_and_lamp","name":"Couch and Lamp","keywords":["read","chill"],"skins":[{"unified":"1f6cb-fe0f","native":"\ud83d\udecb\ufe0f"}],"version":1},"chair":{"id":"chair","name":"Chair","keywords":["sit","furniture"],"skins":[{"unified":"1fa91","native":"\ud83e\ude91"}],"version":12},"toilet":{"id":"toilet","name":"Toilet","keywords":["restroom","wc","washroom","bathroom","potty"],"skins":[{"unified":"1f6bd","native":"\ud83d\udebd"}],"version":1},"plunger":{"id":"plunger","name":"Plunger","keywords":["toilet"],"skins":[{"unified":"1faa0","native":"\ud83e\udea0"}],"version":13},"shower":{"id":"shower","name":"Shower","keywords":["clean","water","bathroom"],"skins":[{"unified":"1f6bf","native":"\ud83d\udebf"}],"version":1},"bathtub":{"id":"bathtub","name":"Bathtub","keywords":["clean","shower","bathroom"],"skins":[{"unified":"1f6c1","native":"\ud83d\udec1"}],"version":1},"mouse_trap":{"id":"mouse_trap","name":"Mouse Trap","keywords":["cheese"],"skins":[{"unified":"1faa4","native":"\ud83e\udea4"}],"version":13},"razor":{"id":"razor","name":"Razor","keywords":["cut"],"skins":[{"unified":"1fa92","native":"\ud83e\ude92"}],"version":12},"lotion_bottle":{"id":"lotion_bottle","name":"Lotion Bottle","keywords":["moisturizer","sunscreen"],"skins":[{"unified":"1f9f4","native":"\ud83e\uddf4"}],"version":11},"safety_pin":{"id":"safety_pin","name":"Safety Pin","keywords":["diaper"],"skins":[{"unified":"1f9f7","native":"\ud83e\uddf7"}],"version":11},"broom":{"id":"broom","name":"Broom","keywords":["cleaning","sweeping","witch"],"skins":[{"unified":"1f9f9","native":"\ud83e\uddf9"}],"version":11},"basket":{"id":"basket","name":"Basket","keywords":["laundry"],"skins":[{"unified":"1f9fa","native":"\ud83e\uddfa"}],"version":11},"roll_of_paper":{"id":"roll_of_paper","name":"Roll of Paper","keywords":[],"skins":[{"unified":"1f9fb","native":"\ud83e\uddfb"}],"version":11},"bucket":{"id":"bucket","name":"Bucket","keywords":["water","container"],"skins":[{"unified":"1faa3","native":"\ud83e\udea3"}],"version":13},"soap":{"id":"soap","name":"Soap","keywords":["bar","bathing","cleaning","lather"],"skins":[{"unified":"1f9fc","native":"\ud83e\uddfc"}],"version":11},"bubbles":{"id":"bubbles","name":"Bubbles","keywords":["soap","fun","carbonation","sparkling"],"skins":[{"unified":"1fae7","native":"\ud83e\udee7"}],"version":14},"toothbrush":{"id":"toothbrush","name":"Toothbrush","keywords":["hygiene","dental"],"skins":[{"unified":"1faa5","native":"\ud83e\udea5"}],"version":13},"sponge":{"id":"sponge","name":"Sponge","keywords":["absorbing","cleaning","porous"],"skins":[{"unified":"1f9fd","native":"\ud83e\uddfd"}],"version":11},"fire_extinguisher":{"id":"fire_extinguisher","name":"Fire Extinguisher","keywords":["quench"],"skins":[{"unified":"1f9ef","native":"\ud83e\uddef"}],"version":11},"shopping_trolley":{"id":"shopping_trolley","name":"Shopping Cart","keywords":["trolley"],"skins":[{"unified":"1f6d2","native":"\ud83d\uded2"}],"version":3},"smoking":{"id":"smoking","name":"Cigarette","keywords":["smoking","kills","tobacco","joint","smoke"],"skins":[{"unified":"1f6ac","native":"\ud83d\udeac"}],"version":1},"coffin":{"id":"coffin","name":"Coffin","keywords":["vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],"skins":[{"unified":"26b0-fe0f","native":"\u26b0\ufe0f"}],"version":1},"headstone":{"id":"headstone","name":"Headstone","keywords":["death","rip","grave"],"skins":[{"unified":"1faa6","native":"\ud83e\udea6"}],"version":13},"funeral_urn":{"id":"funeral_urn","name":"Funeral Urn","keywords":["dead","die","death","rip","ashes"],"skins":[{"unified":"26b1-fe0f","native":"\u26b1\ufe0f"}],"version":1},"moyai":{"id":"moyai","name":"Moai","keywords":["moyai","rock","easter","island"],"skins":[{"unified":"1f5ff","native":"\ud83d\uddff"}],"version":1},"placard":{"id":"placard","name":"Placard","keywords":["announcement"],"skins":[{"unified":"1faa7","native":"\ud83e\udea7"}],"version":13},"identification_card":{"id":"identification_card","name":"Identification Card","keywords":["document"],"skins":[{"unified":"1faaa","native":"\ud83e\udeaa"}],"version":14},"atm":{"id":"atm","name":"Atm Sign","keywords":["money","sales","cash","blue","square","payment","bank"],"skins":[{"unified":"1f3e7","native":"\ud83c\udfe7"}],"version":1},"put_litter_in_its_place":{"id":"put_litter_in_its_place","name":"Litter in Bin Sign","keywords":["put","its","place","blue","square","human","info"],"skins":[{"unified":"1f6ae","native":"\ud83d\udeae"}],"version":1},"potable_water":{"id":"potable_water","name":"Potable Water","keywords":["blue","square","liquid","restroom","cleaning","faucet"],"skins":[{"unified":"1f6b0","native":"\ud83d\udeb0"}],"version":1},"wheelchair":{"id":"wheelchair","name":"Wheelchair Symbol","keywords":["blue","square","disabled","accessibility"],"skins":[{"unified":"267f","native":"\u267f"}],"version":1},"mens":{"id":"mens","name":"Men\u2019s Room","keywords":["mens","men","s","toilet","restroom","wc","blue","square","gender","male"],"skins":[{"unified":"1f6b9","native":"\ud83d\udeb9"}],"version":1},"womens":{"id":"womens","name":"Women\u2019s Room","keywords":["womens","women","s","purple","square","woman","female","toilet","loo","restroom","gender"],"skins":[{"unified":"1f6ba","native":"\ud83d\udeba"}],"version":1},"restroom":{"id":"restroom","name":"Restroom","keywords":["blue","square","toilet","refresh","wc","gender"],"skins":[{"unified":"1f6bb","native":"\ud83d\udebb"}],"version":1},"baby_symbol":{"id":"baby_symbol","name":"Baby Symbol","keywords":["orange","square","child"],"skins":[{"unified":"1f6bc","native":"\ud83d\udebc"}],"version":1},"wc":{"id":"wc","name":"Water Closet","keywords":["wc","toilet","restroom","blue","square"],"skins":[{"unified":"1f6be","native":"\ud83d\udebe"}],"version":1},"passport_control":{"id":"passport_control","name":"Passport Control","keywords":["custom","blue","square"],"skins":[{"unified":"1f6c2","native":"\ud83d\udec2"}],"version":1},"customs":{"id":"customs","name":"Customs","keywords":["passport","border","blue","square"],"skins":[{"unified":"1f6c3","native":"\ud83d\udec3"}],"version":1},"baggage_claim":{"id":"baggage_claim","name":"Baggage Claim","keywords":["blue","square","airport","transport"],"skins":[{"unified":"1f6c4","native":"\ud83d\udec4"}],"version":1},"left_luggage":{"id":"left_luggage","name":"Left Luggage","keywords":["blue","square","travel"],"skins":[{"unified":"1f6c5","native":"\ud83d\udec5"}],"version":1},"warning":{"id":"warning","name":"Warning","keywords":["exclamation","wip","alert","error","problem","issue"],"skins":[{"unified":"26a0-fe0f","native":"\u26a0\ufe0f"}],"version":1},"children_crossing":{"id":"children_crossing","name":"Children Crossing","keywords":["school","warning","danger","sign","driving","yellow","diamond"],"skins":[{"unified":"1f6b8","native":"\ud83d\udeb8"}],"version":1},"no_entry":{"id":"no_entry","name":"No Entry","keywords":["limit","security","privacy","bad","denied","stop","circle"],"skins":[{"unified":"26d4","native":"\u26d4"}],"version":1},"no_entry_sign":{"id":"no_entry_sign","name":"Prohibited","keywords":["no","entry","sign","forbid","stop","limit","denied","disallow","circle"],"skins":[{"unified":"1f6ab","native":"\ud83d\udeab"}],"version":1},"no_bicycles":{"id":"no_bicycles","name":"No Bicycles","keywords":["cyclist","prohibited","circle"],"skins":[{"unified":"1f6b3","native":"\ud83d\udeb3"}],"version":1},"no_smoking":{"id":"no_smoking","name":"No Smoking","keywords":["cigarette","blue","square","smell","smoke"],"skins":[{"unified":"1f6ad","native":"\ud83d\udead"}],"version":1},"do_not_litter":{"id":"do_not_litter","name":"No Littering","keywords":["do","not","litter","trash","bin","garbage","circle"],"skins":[{"unified":"1f6af","native":"\ud83d\udeaf"}],"version":1},"non-potable_water":{"id":"non-potable_water","name":"Non-Potable Water","keywords":["non","potable","drink","faucet","tap","circle"],"skins":[{"unified":"1f6b1","native":"\ud83d\udeb1"}],"version":1},"no_pedestrians":{"id":"no_pedestrians","name":"No Pedestrians","keywords":["rules","crossing","walking","circle"],"skins":[{"unified":"1f6b7","native":"\ud83d\udeb7"}],"version":1},"no_mobile_phones":{"id":"no_mobile_phones","name":"No Mobile Phones","keywords":["iphone","mute","circle"],"skins":[{"unified":"1f4f5","native":"\ud83d\udcf5"}],"version":1},"underage":{"id":"underage","name":"No One Under Eighteen","keywords":["underage","18","drink","pub","night","minor","circle"],"skins":[{"unified":"1f51e","native":"\ud83d\udd1e"}],"version":1},"radioactive_sign":{"id":"radioactive_sign","name":"Radioactive","keywords":["sign","nuclear","danger"],"skins":[{"unified":"2622-fe0f","native":"\u2622\ufe0f"}],"version":1},"biohazard_sign":{"id":"biohazard_sign","name":"Biohazard","keywords":["sign","danger"],"skins":[{"unified":"2623-fe0f","native":"\u2623\ufe0f"}],"version":1},"arrow_up":{"id":"arrow_up","name":"Up Arrow","keywords":["blue","square","continue","top","direction"],"skins":[{"unified":"2b06-fe0f","native":"\u2b06\ufe0f"}],"version":1},"arrow_upper_right":{"id":"arrow_upper_right","name":"Up-Right Arrow","keywords":["upper","right","up","blue","square","point","direction","diagonal","northeast"],"skins":[{"unified":"2197-fe0f","native":"\u2197\ufe0f"}],"version":1},"arrow_right":{"id":"arrow_right","name":"Right Arrow","keywords":["blue","square","next"],"skins":[{"unified":"27a1-fe0f","native":"\u27a1\ufe0f"}],"version":1},"arrow_lower_right":{"id":"arrow_lower_right","name":"South East Arrow","keywords":["lower","right","down","blue","square","direction","diagonal","southeast"],"skins":[{"unified":"2198-fe0f","native":"\u2198\ufe0f"}],"version":1},"arrow_down":{"id":"arrow_down","name":"Down Arrow","keywords":["blue","square","direction","bottom"],"skins":[{"unified":"2b07-fe0f","native":"\u2b07\ufe0f"}],"version":1},"arrow_lower_left":{"id":"arrow_lower_left","name":"Down-Left Arrow","keywords":["lower","left","down","blue","square","direction","diagonal","southwest"],"skins":[{"unified":"2199-fe0f","native":"\u2199\ufe0f"}],"version":1},"arrow_left":{"id":"arrow_left","name":"Left Arrow","keywords":["blue","square","previous","back"],"skins":[{"unified":"2b05-fe0f","native":"\u2b05\ufe0f"}],"version":1},"arrow_upper_left":{"id":"arrow_upper_left","name":"Up-Left Arrow","keywords":["upper","left","up","blue","square","point","direction","diagonal","northwest"],"skins":[{"unified":"2196-fe0f","native":"\u2196\ufe0f"}],"version":1},"arrow_up_down":{"id":"arrow_up_down","name":"Up Down Arrow","keywords":["blue","square","direction","way","vertical"],"skins":[{"unified":"2195-fe0f","native":"\u2195\ufe0f"}],"version":1},"left_right_arrow":{"id":"left_right_arrow","name":"Left Right Arrow","keywords":["shape","direction","horizontal","sideways"],"skins":[{"unified":"2194-fe0f","native":"\u2194\ufe0f"}],"version":1},"leftwards_arrow_with_hook":{"id":"leftwards_arrow_with_hook","name":"Right Arrow Curving Left","keywords":["leftwards","with","hook","back","return","blue","square","undo","enter"],"skins":[{"unified":"21a9-fe0f","native":"\u21a9\ufe0f"}],"version":1},"arrow_right_hook":{"id":"arrow_right_hook","name":"Left Arrow Curving Right","keywords":["hook","blue","square","return","rotate","direction"],"skins":[{"unified":"21aa-fe0f","native":"\u21aa\ufe0f"}],"version":1},"arrow_heading_up":{"id":"arrow_heading_up","name":"Right Arrow Curving Up","keywords":["heading","blue","square","direction","top"],"skins":[{"unified":"2934-fe0f","native":"\u2934\ufe0f"}],"version":1},"arrow_heading_down":{"id":"arrow_heading_down","name":"Right Arrow Curving Down","keywords":["heading","blue","square","direction","bottom"],"skins":[{"unified":"2935-fe0f","native":"\u2935\ufe0f"}],"version":1},"arrows_clockwise":{"id":"arrows_clockwise","name":"Clockwise Vertical Arrows","keywords":["sync","cycle","round","repeat"],"skins":[{"unified":"1f503","native":"\ud83d\udd03"}],"version":1},"arrows_counterclockwise":{"id":"arrows_counterclockwise","name":"Counterclockwise Arrows Button","keywords":["blue","square","sync","cycle"],"skins":[{"unified":"1f504","native":"\ud83d\udd04"}],"version":1},"back":{"id":"back","name":"Back Arrow","keywords":["words","return"],"skins":[{"unified":"1f519","native":"\ud83d\udd19"}],"version":1},"end":{"id":"end","name":"End Arrow","keywords":["words"],"skins":[{"unified":"1f51a","native":"\ud83d\udd1a"}],"version":1},"on":{"id":"on","name":"On! Arrow","keywords":["on","words"],"skins":[{"unified":"1f51b","native":"\ud83d\udd1b"}],"version":1},"soon":{"id":"soon","name":"Soon Arrow","keywords":["words"],"skins":[{"unified":"1f51c","native":"\ud83d\udd1c"}],"version":1},"top":{"id":"top","name":"Top Arrow","keywords":["words","blue","square"],"skins":[{"unified":"1f51d","native":"\ud83d\udd1d"}],"version":1},"place_of_worship":{"id":"place_of_worship","name":"Place of Worship","keywords":["religion","church","temple","prayer"],"skins":[{"unified":"1f6d0","native":"\ud83d\uded0"}],"version":1},"atom_symbol":{"id":"atom_symbol","name":"Atom Symbol","keywords":["science","physics","chemistry"],"skins":[{"unified":"269b-fe0f","native":"\u269b\ufe0f"}],"version":1},"om_symbol":{"id":"om_symbol","name":"Om","keywords":["symbol","hinduism","buddhism","sikhism","jainism"],"skins":[{"unified":"1f549-fe0f","native":"\ud83d\udd49\ufe0f"}],"version":1},"star_of_david":{"id":"star_of_david","name":"Star of David","keywords":["judaism"],"skins":[{"unified":"2721-fe0f","native":"\u2721\ufe0f"}],"version":1},"wheel_of_dharma":{"id":"wheel_of_dharma","name":"Wheel of Dharma","keywords":["hinduism","buddhism","sikhism","jainism"],"skins":[{"unified":"2638-fe0f","native":"\u2638\ufe0f"}],"version":1},"yin_yang":{"id":"yin_yang","name":"Yin Yang","keywords":["balance"],"skins":[{"unified":"262f-fe0f","native":"\u262f\ufe0f"}],"version":1},"latin_cross":{"id":"latin_cross","name":"Latin Cross","keywords":["christianity"],"skins":[{"unified":"271d-fe0f","native":"\u271d\ufe0f"}],"version":1},"orthodox_cross":{"id":"orthodox_cross","name":"Orthodox Cross","keywords":["suppedaneum","religion"],"skins":[{"unified":"2626-fe0f","native":"\u2626\ufe0f"}],"version":1},"star_and_crescent":{"id":"star_and_crescent","name":"Star and Crescent","keywords":["islam"],"skins":[{"unified":"262a-fe0f","native":"\u262a\ufe0f"}],"version":1},"peace_symbol":{"id":"peace_symbol","name":"Peace Symbol","keywords":["hippie"],"skins":[{"unified":"262e-fe0f","native":"\u262e\ufe0f"}],"version":1},"menorah_with_nine_branches":{"id":"menorah_with_nine_branches","name":"Menorah","keywords":["with","nine","branches","hanukkah","candles","jewish"],"skins":[{"unified":"1f54e","native":"\ud83d\udd4e"}],"version":1},"six_pointed_star":{"id":"six_pointed_star","name":"Dotted Six-Pointed Star","keywords":["six","pointed","purple","square","religion","jewish","hexagram"],"skins":[{"unified":"1f52f","native":"\ud83d\udd2f"}],"version":1},"aries":{"id":"aries","name":"Aries","keywords":["sign","purple","square","zodiac","astrology"],"skins":[{"unified":"2648","native":"\u2648"}],"version":1},"taurus":{"id":"taurus","name":"Taurus","keywords":["purple","square","sign","zodiac","astrology"],"skins":[{"unified":"2649","native":"\u2649"}],"version":1},"gemini":{"id":"gemini","name":"Gemini","keywords":["sign","zodiac","purple","square","astrology"],"skins":[{"unified":"264a","native":"\u264a"}],"version":1},"cancer":{"id":"cancer","name":"Cancer","keywords":["sign","zodiac","purple","square","astrology"],"skins":[{"unified":"264b","native":"\u264b"}],"version":1},"leo":{"id":"leo","name":"Leo","keywords":["sign","purple","square","zodiac","astrology"],"skins":[{"unified":"264c","native":"\u264c"}],"version":1},"virgo":{"id":"virgo","name":"Virgo","keywords":["sign","zodiac","purple","square","astrology"],"skins":[{"unified":"264d","native":"\u264d"}],"version":1},"libra":{"id":"libra","name":"Libra","keywords":["sign","purple","square","zodiac","astrology"],"skins":[{"unified":"264e","native":"\u264e"}],"version":1},"scorpius":{"id":"scorpius","name":"Scorpio","keywords":["scorpius","sign","zodiac","purple","square","astrology"],"skins":[{"unified":"264f","native":"\u264f"}],"version":1},"sagittarius":{"id":"sagittarius","name":"Sagittarius","keywords":["sign","zodiac","purple","square","astrology"],"skins":[{"unified":"2650","native":"\u2650"}],"version":1},"capricorn":{"id":"capricorn","name":"Capricorn","keywords":["sign","zodiac","purple","square","astrology"],"skins":[{"unified":"2651","native":"\u2651"}],"version":1},"aquarius":{"id":"aquarius","name":"Aquarius","keywords":["sign","purple","square","zodiac","astrology"],"skins":[{"unified":"2652","native":"\u2652"}],"version":1},"pisces":{"id":"pisces","name":"Pisces","keywords":["purple","square","sign","zodiac","astrology"],"skins":[{"unified":"2653","native":"\u2653"}],"version":1},"ophiuchus":{"id":"ophiuchus","name":"Ophiuchus","keywords":["sign","purple","square","constellation","astrology"],"skins":[{"unified":"26ce","native":"\u26ce"}],"version":1},"twisted_rightwards_arrows":{"id":"twisted_rightwards_arrows","name":"Shuffle Tracks Button","keywords":["twisted","rightwards","arrows","blue","square","music","random"],"skins":[{"unified":"1f500","native":"\ud83d\udd00"}],"version":1},"repeat":{"id":"repeat","name":"Repeat Button","keywords":["loop","record"],"skins":[{"unified":"1f501","native":"\ud83d\udd01"}],"version":1},"repeat_one":{"id":"repeat_one","name":"Repeat Single Button","keywords":["one","blue","square","loop"],"skins":[{"unified":"1f502","native":"\ud83d\udd02"}],"version":1},"arrow_forward":{"id":"arrow_forward","name":"Play Button","keywords":["arrow","forward","blue","square","right","direction"],"skins":[{"unified":"25b6-fe0f","native":"\u25b6\ufe0f"}],"version":1},"fast_forward":{"id":"fast_forward","name":"Fast-Forward Button","keywords":["fast","forward","blue","square","play","speed","continue"],"skins":[{"unified":"23e9","native":"\u23e9"}],"version":1},"black_right_pointing_double_triangle_with_vertical_bar":{"id":"black_right_pointing_double_triangle_with_vertical_bar","name":"Next Track Button","keywords":["black","right","pointing","double","triangle","with","vertical","bar","forward","blue","square"],"skins":[{"unified":"23ed-fe0f","native":"\u23ed\ufe0f"}],"version":1},"black_right_pointing_triangle_with_double_vertical_bar":{"id":"black_right_pointing_triangle_with_double_vertical_bar","name":"Play or Pause Button","keywords":["black","right","pointing","triangle","with","double","vertical","bar","blue","square"],"skins":[{"unified":"23ef-fe0f","native":"\u23ef\ufe0f"}],"version":1},"arrow_backward":{"id":"arrow_backward","name":"Reverse Button","keywords":["arrow","backward","blue","square","left","direction"],"skins":[{"unified":"25c0-fe0f","native":"\u25c0\ufe0f"}],"version":1},"rewind":{"id":"rewind","name":"Fast Reverse Button","keywords":["rewind","play","blue","square"],"skins":[{"unified":"23ea","native":"\u23ea"}],"version":1},"black_left_pointing_double_triangle_with_vertical_bar":{"id":"black_left_pointing_double_triangle_with_vertical_bar","name":"Last Track Button","keywords":["black","left","pointing","double","triangle","with","vertical","bar","backward"],"skins":[{"unified":"23ee-fe0f","native":"\u23ee\ufe0f"}],"version":1},"arrow_up_small":{"id":"arrow_up_small","name":"Upwards Button","keywords":["arrow","up","small","blue","square","triangle","direction","point","forward","top"],"skins":[{"unified":"1f53c","native":"\ud83d\udd3c"}],"version":1},"arrow_double_up":{"id":"arrow_double_up","name":"Fast Up Button","keywords":["arrow","double","blue","square","direction","top"],"skins":[{"unified":"23eb","native":"\u23eb"}],"version":1},"arrow_down_small":{"id":"arrow_down_small","name":"Downwards Button","keywords":["arrow","down","small","blue","square","direction","bottom"],"skins":[{"unified":"1f53d","native":"\ud83d\udd3d"}],"version":1},"arrow_double_down":{"id":"arrow_double_down","name":"Fast Down Button","keywords":["arrow","double","blue","square","direction","bottom"],"skins":[{"unified":"23ec","native":"\u23ec"}],"version":1},"double_vertical_bar":{"id":"double_vertical_bar","name":"Pause Button","keywords":["double","vertical","bar","blue","square"],"skins":[{"unified":"23f8-fe0f","native":"\u23f8\ufe0f"}],"version":1},"black_square_for_stop":{"id":"black_square_for_stop","name":"Stop Button","keywords":["black","square","for","blue"],"skins":[{"unified":"23f9-fe0f","native":"\u23f9\ufe0f"}],"version":1},"black_circle_for_record":{"id":"black_circle_for_record","name":"Record Button","keywords":["black","circle","for","blue","square"],"skins":[{"unified":"23fa-fe0f","native":"\u23fa\ufe0f"}],"version":1},"eject":{"id":"eject","name":"Eject Button","keywords":["blue","square"],"skins":[{"unified":"23cf-fe0f","native":"\u23cf\ufe0f"}],"version":1},"cinema":{"id":"cinema","name":"Cinema","keywords":["blue","square","record","film","movie","curtain","stage","theater"],"skins":[{"unified":"1f3a6","native":"\ud83c\udfa6"}],"version":1},"low_brightness":{"id":"low_brightness","name":"Dim Button","keywords":["low","brightness","sun","afternoon","warm","summer"],"skins":[{"unified":"1f505","native":"\ud83d\udd05"}],"version":1},"high_brightness":{"id":"high_brightness","name":"Bright Button","keywords":["high","brightness","sun","light"],"skins":[{"unified":"1f506","native":"\ud83d\udd06"}],"version":1},"signal_strength":{"id":"signal_strength","name":"Antenna Bars","keywords":["signal","strength","blue","square","reception","phone","internet","connection","wifi","bluetooth"],"skins":[{"unified":"1f4f6","native":"\ud83d\udcf6"}],"version":1},"vibration_mode":{"id":"vibration_mode","name":"Vibration Mode","keywords":["orange","square","phone"],"skins":[{"unified":"1f4f3","native":"\ud83d\udcf3"}],"version":1},"mobile_phone_off":{"id":"mobile_phone_off","name":"Mobile Phone off","keywords":["mute","orange","square","silence","quiet"],"skins":[{"unified":"1f4f4","native":"\ud83d\udcf4"}],"version":1},"female_sign":{"id":"female_sign","name":"Female Sign","keywords":["woman","women","lady","girl"],"skins":[{"unified":"2640-fe0f","native":"\u2640\ufe0f"}],"version":4},"male_sign":{"id":"male_sign","name":"Male Sign","keywords":["man","boy","men"],"skins":[{"unified":"2642-fe0f","native":"\u2642\ufe0f"}],"version":4},"transgender_symbol":{"id":"transgender_symbol","name":"Transgender Symbol","keywords":["lgbtq"],"skins":[{"unified":"26a7-fe0f","native":"\u26a7\ufe0f"}],"version":13},"heavy_multiplication_x":{"id":"heavy_multiplication_x","name":"Multiply","keywords":["heavy","multiplication","x","sign","math","calculation"],"skins":[{"unified":"2716-fe0f","native":"\u2716\ufe0f"}],"version":1},"heavy_plus_sign":{"id":"heavy_plus_sign","name":"Plus","keywords":["heavy","sign","math","calculation","addition","more","increase"],"skins":[{"unified":"2795","native":"\u2795"}],"version":1},"heavy_minus_sign":{"id":"heavy_minus_sign","name":"Minus","keywords":["heavy","sign","math","calculation","subtract","less"],"skins":[{"unified":"2796","native":"\u2796"}],"version":1},"heavy_division_sign":{"id":"heavy_division_sign","name":"Divide","keywords":["heavy","division","sign","math","calculation"],"skins":[{"unified":"2797","native":"\u2797"}],"version":1},"heavy_equals_sign":{"id":"heavy_equals_sign","name":"Heavy Equals Sign","keywords":["math"],"skins":[{"unified":"1f7f0","native":"\ud83d\udff0"}],"version":14},"infinity":{"id":"infinity","name":"Infinity","keywords":["forever"],"skins":[{"unified":"267e-fe0f","native":"\u267e\ufe0f"}],"version":11},"bangbang":{"id":"bangbang","name":"Double Exclamation Mark","keywords":["bangbang","surprise"],"skins":[{"unified":"203c-fe0f","native":"\u203c\ufe0f"}],"version":1},"interrobang":{"id":"interrobang","name":"Exclamation Question Mark","keywords":["interrobang","wat","punctuation","surprise"],"skins":[{"unified":"2049-fe0f","native":"\u2049\ufe0f"}],"version":1},"question":{"id":"question","name":"Red Question Mark","keywords":["doubt","confused"],"skins":[{"unified":"2753","native":"\u2753"}],"version":1},"grey_question":{"id":"grey_question","name":"White Question Mark","keywords":["grey","doubts","gray","huh","confused"],"skins":[{"unified":"2754","native":"\u2754"}],"version":1},"grey_exclamation":{"id":"grey_exclamation","name":"White Exclamation Mark","keywords":["grey","surprise","punctuation","gray","wow","warning"],"skins":[{"unified":"2755","native":"\u2755"}],"version":1},"exclamation":{"id":"exclamation","name":"Red Exclamation Mark","keywords":["heavy","danger","surprise","punctuation","wow","warning"],"skins":[{"unified":"2757","native":"\u2757"}],"version":1},"wavy_dash":{"id":"wavy_dash","name":"Wavy Dash","keywords":["draw","line","moustache","mustache","squiggle","scribble"],"skins":[{"unified":"3030-fe0f","native":"\u3030\ufe0f"}],"version":1},"currency_exchange":{"id":"currency_exchange","name":"Currency Exchange","keywords":["money","sales","dollar","travel"],"skins":[{"unified":"1f4b1","native":"\ud83d\udcb1"}],"version":1},"heavy_dollar_sign":{"id":"heavy_dollar_sign","name":"Heavy Dollar Sign","keywords":["money","sales","payment","currency","buck"],"skins":[{"unified":"1f4b2","native":"\ud83d\udcb2"}],"version":1},"medical_symbol":{"id":"medical_symbol","name":"Medical Symbol","keywords":["staff","of","aesculapius","health","hospital"],"skins":[{"unified":"2695-fe0f","native":"\u2695\ufe0f"}],"version":4},"recycle":{"id":"recycle","name":"Recycling Symbol","keywords":["recycle","arrow","environment","garbage","trash"],"skins":[{"unified":"267b-fe0f","native":"\u267b\ufe0f"}],"version":1},"fleur_de_lis":{"id":"fleur_de_lis","name":"Fleur-De-Lis","keywords":["fleur","de","lis","decorative","scout"],"skins":[{"unified":"269c-fe0f","native":"\u269c\ufe0f"}],"version":1},"trident":{"id":"trident","name":"Trident Emblem","keywords":["weapon","spear"],"skins":[{"unified":"1f531","native":"\ud83d\udd31"}],"version":1},"name_badge":{"id":"name_badge","name":"Name Badge","keywords":["fire","forbid"],"skins":[{"unified":"1f4db","native":"\ud83d\udcdb"}],"version":1},"beginner":{"id":"beginner","name":"Japanese Symbol for Beginner","keywords":["badge","shield"],"skins":[{"unified":"1f530","native":"\ud83d\udd30"}],"version":1},"o":{"id":"o","name":"Hollow Red Circle","keywords":["o","round"],"skins":[{"unified":"2b55","native":"\u2b55"}],"version":1},"white_check_mark":{"id":"white_check_mark","name":"Check Mark Button","keywords":["white","green","square","ok","agree","vote","election","answer","tick"],"skins":[{"unified":"2705","native":"\u2705"}],"version":1},"ballot_box_with_check":{"id":"ballot_box_with_check","name":"Check Box with Check","keywords":["ballot","ok","agree","confirm","black","square","vote","election","yes","tick"],"skins":[{"unified":"2611-fe0f","native":"\u2611\ufe0f"}],"version":1},"heavy_check_mark":{"id":"heavy_check_mark","name":"Check Mark","keywords":["heavy","ok","nike","answer","yes","tick"],"skins":[{"unified":"2714-fe0f","native":"\u2714\ufe0f"}],"version":1},"x":{"id":"x","name":"Cross Mark","keywords":["x","no","delete","remove","cancel","red"],"skins":[{"unified":"274c","native":"\u274c"}],"version":1},"negative_squared_cross_mark":{"id":"negative_squared_cross_mark","name":"Cross Mark Button","keywords":["negative","squared","x","green","square","no","deny"],"skins":[{"unified":"274e","native":"\u274e"}],"version":1},"curly_loop":{"id":"curly_loop","name":"Curly Loop","keywords":["scribble","draw","shape","squiggle"],"skins":[{"unified":"27b0","native":"\u27b0"}],"version":1},"loop":{"id":"loop","name":"Double Curly Loop","keywords":["tape","cassette"],"skins":[{"unified":"27bf","native":"\u27bf"}],"version":1},"part_alternation_mark":{"id":"part_alternation_mark","name":"Part Alternation Mark","keywords":["graph","presentation","stats","business","economics","bad"],"skins":[{"unified":"303d-fe0f","native":"\u303d\ufe0f"}],"version":1},"eight_spoked_asterisk":{"id":"eight_spoked_asterisk","name":"Eight Spoked Asterisk","keywords":["star","sparkle","green","square"],"skins":[{"unified":"2733-fe0f","native":"\u2733\ufe0f"}],"version":1},"eight_pointed_black_star":{"id":"eight_pointed_black_star","name":"Eight-Pointed Star","keywords":["eight","pointed","black","orange","square","shape","polygon"],"skins":[{"unified":"2734-fe0f","native":"\u2734\ufe0f"}],"version":1},"sparkle":{"id":"sparkle","name":"Sparkle","keywords":["stars","green","square","awesome","good","fireworks"],"skins":[{"unified":"2747-fe0f","native":"\u2747\ufe0f"}],"version":1},"copyright":{"id":"copyright","name":"Copyright","keywords":["ip","license","circle","law","legal"],"skins":[{"unified":"00a9-fe0f","native":"\xa9\ufe0f"}],"version":1},"registered":{"id":"registered","name":"Registered","keywords":["alphabet","circle"],"skins":[{"unified":"00ae-fe0f","native":"\xae\ufe0f"}],"version":1},"tm":{"id":"tm","name":"Trade Mark","keywords":["tm","trademark","brand","law","legal"],"skins":[{"unified":"2122-fe0f","native":"\u2122\ufe0f"}],"version":1},"hash":{"id":"hash","name":"Hash Key","keywords":["keycap","","symbol","blue","square","twitter"],"skins":[{"unified":"0023-fe0f-20e3","native":"#\ufe0f\u20e3"}],"version":1},"keycap_star":{"id":"keycap_star","name":"Keycap: *","keywords":["keycap","star",""],"skins":[{"unified":"002a-fe0f-20e3","native":"*\ufe0f\u20e3"}],"version":2},"zero":{"id":"zero","name":"Keycap 0","keywords":["zero","numbers","blue","square","null"],"skins":[{"unified":"0030-fe0f-20e3","native":"0\ufe0f\u20e3"}],"version":1},"one":{"id":"one","name":"Keycap 1","keywords":["one","blue","square","numbers"],"skins":[{"unified":"0031-fe0f-20e3","native":"1\ufe0f\u20e3"}],"version":1},"two":{"id":"two","name":"Keycap 2","keywords":["two","numbers","prime","blue","square"],"skins":[{"unified":"0032-fe0f-20e3","native":"2\ufe0f\u20e3"}],"version":1},"three":{"id":"three","name":"Keycap 3","keywords":["three","numbers","prime","blue","square"],"skins":[{"unified":"0033-fe0f-20e3","native":"3\ufe0f\u20e3"}],"version":1},"four":{"id":"four","name":"Keycap 4","keywords":["four","numbers","blue","square"],"skins":[{"unified":"0034-fe0f-20e3","native":"4\ufe0f\u20e3"}],"version":1},"five":{"id":"five","name":"Keycap 5","keywords":["five","numbers","blue","square","prime"],"skins":[{"unified":"0035-fe0f-20e3","native":"5\ufe0f\u20e3"}],"version":1},"six":{"id":"six","name":"Keycap 6","keywords":["six","numbers","blue","square"],"skins":[{"unified":"0036-fe0f-20e3","native":"6\ufe0f\u20e3"}],"version":1},"seven":{"id":"seven","name":"Keycap 7","keywords":["seven","numbers","blue","square","prime"],"skins":[{"unified":"0037-fe0f-20e3","native":"7\ufe0f\u20e3"}],"version":1},"eight":{"id":"eight","name":"Keycap 8","keywords":["eight","blue","square","numbers"],"skins":[{"unified":"0038-fe0f-20e3","native":"8\ufe0f\u20e3"}],"version":1},"nine":{"id":"nine","name":"Keycap 9","keywords":["nine","blue","square","numbers"],"skins":[{"unified":"0039-fe0f-20e3","native":"9\ufe0f\u20e3"}],"version":1},"keycap_ten":{"id":"keycap_ten","name":"Keycap 10","keywords":["ten","numbers","blue","square"],"skins":[{"unified":"1f51f","native":"\ud83d\udd1f"}],"version":1},"capital_abcd":{"id":"capital_abcd","name":"Input Latin Uppercase","keywords":["capital","abcd","alphabet","words","blue","square"],"skins":[{"unified":"1f520","native":"\ud83d\udd20"}],"version":1},"abcd":{"id":"abcd","name":"Input Latin Lowercase","keywords":["abcd","blue","square","alphabet"],"skins":[{"unified":"1f521","native":"\ud83d\udd21"}],"version":1},"symbols":{"id":"symbols","name":"Input Symbols","keywords":["blue","square","music","note","ampersand","percent","glyphs","characters"],"skins":[{"unified":"1f523","native":"\ud83d\udd23"}],"version":1},"abc":{"id":"abc","name":"Input Latin Letters","keywords":["abc","blue","square","alphabet"],"skins":[{"unified":"1f524","native":"\ud83d\udd24"}],"version":1},"a":{"id":"a","name":"A Button (blood Type)","keywords":["red","square","alphabet","letter"],"skins":[{"unified":"1f170-fe0f","native":"\ud83c\udd70\ufe0f"}],"version":1},"ab":{"id":"ab","name":"Negative Squared Ab","keywords":["button","red","square","alphabet"],"skins":[{"unified":"1f18e","native":"\ud83c\udd8e"}],"version":1},"b":{"id":"b","name":"B Button (blood Type)","keywords":["red","square","alphabet","letter"],"skins":[{"unified":"1f171-fe0f","native":"\ud83c\udd71\ufe0f"}],"version":1},"cl":{"id":"cl","name":"Cl Button","keywords":["alphabet","words","red","square"],"skins":[{"unified":"1f191","native":"\ud83c\udd91"}],"version":1},"cool":{"id":"cool","name":"Cool Button","keywords":["words","blue","square"],"skins":[{"unified":"1f192","native":"\ud83c\udd92"}],"version":1},"free":{"id":"free","name":"Free Button","keywords":["blue","square","words"],"skins":[{"unified":"1f193","native":"\ud83c\udd93"}],"version":1},"information_source":{"id":"information_source","name":"Information","keywords":["source","blue","square","alphabet","letter"],"skins":[{"unified":"2139-fe0f","native":"\u2139\ufe0f"}],"version":1},"id":{"id":"id","name":"Id Button","keywords":["purple","square","words"],"skins":[{"unified":"1f194","native":"\ud83c\udd94"}],"version":1},"m":{"id":"m","name":"Circled M","keywords":["alphabet","blue","circle","letter"],"skins":[{"unified":"24c2-fe0f","native":"\u24c2\ufe0f"}],"version":1},"new":{"id":"new","name":"New Button","keywords":["blue","square","words","start"],"skins":[{"unified":"1f195","native":"\ud83c\udd95"}],"version":1},"ng":{"id":"ng","name":"Ng Button","keywords":["blue","square","words","shape","icon"],"skins":[{"unified":"1f196","native":"\ud83c\udd96"}],"version":1},"o2":{"id":"o2","name":"O Button (blood Type)","keywords":["o2","alphabet","red","square","letter"],"skins":[{"unified":"1f17e-fe0f","native":"\ud83c\udd7e\ufe0f"}],"version":1},"ok":{"id":"ok","name":"Ok Button","keywords":["good","agree","yes","blue","square"],"skins":[{"unified":"1f197","native":"\ud83c\udd97"}],"version":1},"parking":{"id":"parking","name":"P Button","keywords":["parking","cars","blue","square","alphabet","letter"],"skins":[{"unified":"1f17f-fe0f","native":"\ud83c\udd7f\ufe0f"}],"version":1},"sos":{"id":"sos","name":"Sos Button","keywords":["help","red","square","words","emergency","911"],"skins":[{"unified":"1f198","native":"\ud83c\udd98"}],"version":1},"up":{"id":"up","name":"Up! Button","keywords":["up","blue","square","above","high"],"skins":[{"unified":"1f199","native":"\ud83c\udd99"}],"version":1},"vs":{"id":"vs","name":"Vs Button","keywords":["words","orange","square"],"skins":[{"unified":"1f19a","native":"\ud83c\udd9a"}],"version":1},"koko":{"id":"koko","name":"Squared Katakana Koko","keywords":["japanese","here","button","blue","square","destination"],"skins":[{"unified":"1f201","native":"\ud83c\ude01"}],"version":1},"sa":{"id":"sa","name":"Squared Katakana Sa","keywords":["japanese","service","charge","button","blue","square"],"skins":[{"unified":"1f202-fe0f","native":"\ud83c\ude02\ufe0f"}],"version":1},"u6708":{"id":"u6708","name":"Japanese \u201cmonthly Amount\u201d Button","keywords":["u6708","monthly","amount","chinese","month","moon","orange","square","kanji"],"skins":[{"unified":"1f237-fe0f","native":"\ud83c\ude37\ufe0f"}],"version":1},"u6709":{"id":"u6709","name":"Squared Cjk Unified Ideograph-6709","keywords":["u6709","japanese","not","free","of","charge","button","orange","square","chinese","have","kanji"],"skins":[{"unified":"1f236","native":"\ud83c\ude36"}],"version":1},"u6307":{"id":"u6307","name":"Japanese \u201creserved\u201d Button","keywords":["u6307","reserved","chinese","point","green","square","kanji"],"skins":[{"unified":"1f22f","native":"\ud83c\ude2f"}],"version":1},"ideograph_advantage":{"id":"ideograph_advantage","name":"Japanese \u201cbargain\u201d Button","keywords":["ideograph","advantage","bargain","chinese","kanji","obtain","get","circle"],"skins":[{"unified":"1f250","native":"\ud83c\ude50"}],"version":1},"u5272":{"id":"u5272","name":"Japanese \u201cdiscount\u201d Button","keywords":["u5272","discount","cut","divide","chinese","kanji","pink","square"],"skins":[{"unified":"1f239","native":"\ud83c\ude39"}],"version":1},"u7121":{"id":"u7121","name":"Japanese \u201cfree of Charge\u201d Button","keywords":["u7121","free","charge","nothing","chinese","kanji","orange","square"],"skins":[{"unified":"1f21a","native":"\ud83c\ude1a"}],"version":1},"u7981":{"id":"u7981","name":"Japanese \u201cprohibited\u201d Button","keywords":["u7981","prohibited","kanji","chinese","forbidden","limit","restricted","red","square"],"skins":[{"unified":"1f232","native":"\ud83c\ude32"}],"version":1},"accept":{"id":"accept","name":"Circled Ideograph Accept","keywords":["japanese","acceptable","button","ok","good","chinese","kanji","agree","yes","orange","circle"],"skins":[{"unified":"1f251","native":"\ud83c\ude51"}],"version":1},"u7533":{"id":"u7533","name":"Japanese \u201capplication\u201d Button","keywords":["u7533","application","chinese","kanji","orange","square"],"skins":[{"unified":"1f238","native":"\ud83c\ude38"}],"version":1},"u5408":{"id":"u5408","name":"Japanese \u201cpassing Grade\u201d Button","keywords":["u5408","passing","grade","chinese","join","kanji","red","square"],"skins":[{"unified":"1f234","native":"\ud83c\ude34"}],"version":1},"u7a7a":{"id":"u7a7a","name":"Japanese \u201cvacancy\u201d Button","keywords":["u7a7a","vacancy","kanji","chinese","empty","sky","blue","square"],"skins":[{"unified":"1f233","native":"\ud83c\ude33"}],"version":1},"congratulations":{"id":"congratulations","name":"Circled Ideograph Congratulation","keywords":["congratulations","japanese","button","chinese","kanji","red","circle"],"skins":[{"unified":"3297-fe0f","native":"\u3297\ufe0f"}],"version":1},"secret":{"id":"secret","name":"Circled Ideograph Secret","keywords":["japanese","button","privacy","chinese","sshh","kanji","red","circle"],"skins":[{"unified":"3299-fe0f","native":"\u3299\ufe0f"}],"version":1},"u55b6":{"id":"u55b6","name":"Squared Cjk Unified Ideograph-55b6","keywords":["u55b6","japanese","open","for","business","button","opening","hours","orange","square"],"skins":[{"unified":"1f23a","native":"\ud83c\ude3a"}],"version":1},"u6e80":{"id":"u6e80","name":"Japanese \u201cno Vacancy\u201d Button","keywords":["u6e80","no","vacancy","full","chinese","red","square","kanji"],"skins":[{"unified":"1f235","native":"\ud83c\ude35"}],"version":1},"red_circle":{"id":"red_circle","name":"Red Circle","keywords":["shape","error","danger"],"skins":[{"unified":"1f534","native":"\ud83d\udd34"}],"version":1},"large_orange_circle":{"id":"large_orange_circle","name":"Orange Circle","keywords":["large","round"],"skins":[{"unified":"1f7e0","native":"\ud83d\udfe0"}],"version":12},"large_yellow_circle":{"id":"large_yellow_circle","name":"Yellow Circle","keywords":["large","round"],"skins":[{"unified":"1f7e1","native":"\ud83d\udfe1"}],"version":12},"large_green_circle":{"id":"large_green_circle","name":"Green Circle","keywords":["large","round"],"skins":[{"unified":"1f7e2","native":"\ud83d\udfe2"}],"version":12},"large_blue_circle":{"id":"large_blue_circle","name":"Blue Circle","keywords":["large","shape","icon","button"],"skins":[{"unified":"1f535","native":"\ud83d\udd35"}],"version":1},"large_purple_circle":{"id":"large_purple_circle","name":"Purple Circle","keywords":["large","round"],"skins":[{"unified":"1f7e3","native":"\ud83d\udfe3"}],"version":12},"large_brown_circle":{"id":"large_brown_circle","name":"Brown Circle","keywords":["large","round"],"skins":[{"unified":"1f7e4","native":"\ud83d\udfe4"}],"version":12},"black_circle":{"id":"black_circle","name":"Black Circle","keywords":["shape","button","round"],"skins":[{"unified":"26ab","native":"\u26ab"}],"version":1},"white_circle":{"id":"white_circle","name":"White Circle","keywords":["shape","round"],"skins":[{"unified":"26aa","native":"\u26aa"}],"version":1},"large_red_square":{"id":"large_red_square","name":"Red Square","keywords":["large"],"skins":[{"unified":"1f7e5","native":"\ud83d\udfe5"}],"version":12},"large_orange_square":{"id":"large_orange_square","name":"Orange Square","keywords":["large"],"skins":[{"unified":"1f7e7","native":"\ud83d\udfe7"}],"version":12},"large_yellow_square":{"id":"large_yellow_square","name":"Yellow Square","keywords":["large"],"skins":[{"unified":"1f7e8","native":"\ud83d\udfe8"}],"version":12},"large_green_square":{"id":"large_green_square","name":"Green Square","keywords":["large"],"skins":[{"unified":"1f7e9","native":"\ud83d\udfe9"}],"version":12},"large_blue_square":{"id":"large_blue_square","name":"Blue Square","keywords":["large"],"skins":[{"unified":"1f7e6","native":"\ud83d\udfe6"}],"version":12},"large_purple_square":{"id":"large_purple_square","name":"Purple Square","keywords":["large"],"skins":[{"unified":"1f7ea","native":"\ud83d\udfea"}],"version":12},"large_brown_square":{"id":"large_brown_square","name":"Brown Square","keywords":["large"],"skins":[{"unified":"1f7eb","native":"\ud83d\udfeb"}],"version":12},"black_large_square":{"id":"black_large_square","name":"Black Large Square","keywords":["shape","icon","button"],"skins":[{"unified":"2b1b","native":"\u2b1b"}],"version":1},"white_large_square":{"id":"white_large_square","name":"White Large Square","keywords":["shape","icon","stone","button"],"skins":[{"unified":"2b1c","native":"\u2b1c"}],"version":1},"black_medium_square":{"id":"black_medium_square","name":"Black Medium Square","keywords":["shape","button","icon"],"skins":[{"unified":"25fc-fe0f","native":"\u25fc\ufe0f"}],"version":1},"white_medium_square":{"id":"white_medium_square","name":"White Medium Square","keywords":["shape","stone","icon"],"skins":[{"unified":"25fb-fe0f","native":"\u25fb\ufe0f"}],"version":1},"black_medium_small_square":{"id":"black_medium_small_square","name":"Black Medium Small Square","keywords":["icon","shape","button"],"skins":[{"unified":"25fe","native":"\u25fe"}],"version":1},"white_medium_small_square":{"id":"white_medium_small_square","name":"White Medium Small Square","keywords":["shape","stone","icon","button"],"skins":[{"unified":"25fd","native":"\u25fd"}],"version":1},"black_small_square":{"id":"black_small_square","name":"Black Small Square","keywords":["shape","icon"],"skins":[{"unified":"25aa-fe0f","native":"\u25aa\ufe0f"}],"version":1},"white_small_square":{"id":"white_small_square","name":"White Small Square","keywords":["shape","icon"],"skins":[{"unified":"25ab-fe0f","native":"\u25ab\ufe0f"}],"version":1},"large_orange_diamond":{"id":"large_orange_diamond","name":"Large Orange Diamond","keywords":["shape","jewel","gem"],"skins":[{"unified":"1f536","native":"\ud83d\udd36"}],"version":1},"large_blue_diamond":{"id":"large_blue_diamond","name":"Large Blue Diamond","keywords":["shape","jewel","gem"],"skins":[{"unified":"1f537","native":"\ud83d\udd37"}],"version":1},"small_orange_diamond":{"id":"small_orange_diamond","name":"Small Orange Diamond","keywords":["shape","jewel","gem"],"skins":[{"unified":"1f538","native":"\ud83d\udd38"}],"version":1},"small_blue_diamond":{"id":"small_blue_diamond","name":"Small Blue Diamond","keywords":["shape","jewel","gem"],"skins":[{"unified":"1f539","native":"\ud83d\udd39"}],"version":1},"small_red_triangle":{"id":"small_red_triangle","name":"Red Triangle Pointed Up","keywords":["small","shape","direction","top"],"skins":[{"unified":"1f53a","native":"\ud83d\udd3a"}],"version":1},"small_red_triangle_down":{"id":"small_red_triangle_down","name":"Red Triangle Pointed Down","keywords":["small","shape","direction","bottom"],"skins":[{"unified":"1f53b","native":"\ud83d\udd3b"}],"version":1},"diamond_shape_with_a_dot_inside":{"id":"diamond_shape_with_a_dot_inside","name":"Diamond with a Dot","keywords":["shape","inside","jewel","blue","gem","crystal","fancy"],"skins":[{"unified":"1f4a0","native":"\ud83d\udca0"}],"version":1},"radio_button":{"id":"radio_button","name":"Radio Button","keywords":["input","old","music","circle"],"skins":[{"unified":"1f518","native":"\ud83d\udd18"}],"version":1},"white_square_button":{"id":"white_square_button","name":"White Square Button","keywords":["shape","input"],"skins":[{"unified":"1f533","native":"\ud83d\udd33"}],"version":1},"black_square_button":{"id":"black_square_button","name":"Black Square Button","keywords":["shape","input","frame"],"skins":[{"unified":"1f532","native":"\ud83d\udd32"}],"version":1},"checkered_flag":{"id":"checkered_flag","name":"Chequered Flag","keywords":["checkered","contest","finishline","race","gokart"],"skins":[{"unified":"1f3c1","native":"\ud83c\udfc1"}],"version":1},"triangular_flag_on_post":{"id":"triangular_flag_on_post","name":"Triangular Flag","keywords":["on","post","mark","milestone","place"],"skins":[{"unified":"1f6a9","native":"\ud83d\udea9"}],"version":1},"crossed_flags":{"id":"crossed_flags","name":"Crossed Flags","keywords":["japanese","nation","country","border"],"skins":[{"unified":"1f38c","native":"\ud83c\udf8c"}],"version":1},"waving_black_flag":{"id":"waving_black_flag","name":"Black Flag","keywords":["waving","pirate"],"skins":[{"unified":"1f3f4","native":"\ud83c\udff4"}],"version":1},"waving_white_flag":{"id":"waving_white_flag","name":"White Flag","keywords":["waving","losing","loser","lost","surrender","give","up","fail"],"skins":[{"unified":"1f3f3-fe0f","native":"\ud83c\udff3\ufe0f"}],"version":1},"rainbow-flag":{"id":"rainbow-flag","name":"Rainbow Flag","keywords":["pride","gay","lgbt","glbt","queer","homosexual","lesbian","bisexual","transgender"],"skins":[{"unified":"1f3f3-fe0f-200d-1f308","native":"\ud83c\udff3\ufe0f\u200d\ud83c\udf08"}],"version":4},"transgender_flag":{"id":"transgender_flag","name":"Transgender Flag","keywords":["lgbtq"],"skins":[{"unified":"1f3f3-fe0f-200d-26a7-fe0f","native":"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f"}],"version":13},"pirate_flag":{"id":"pirate_flag","name":"Pirate Flag","keywords":["skull","crossbones","banner"],"skins":[{"unified":"1f3f4-200d-2620-fe0f","native":"\ud83c\udff4\u200d\u2620\ufe0f"}],"version":11},"flag-ac":{"id":"flag-ac","name":"Ascension Island Flag","keywords":["ac"],"skins":[{"unified":"1f1e6-1f1e8","native":"\ud83c\udde6\ud83c\udde8"}],"version":2},"flag-ad":{"id":"flag-ad","name":"Andorra Flag","keywords":["ad","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1e9","native":"\ud83c\udde6\ud83c\udde9"}],"version":2},"flag-ae":{"id":"flag-ae","name":"United Arab Emirates Flag","keywords":["ae","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1ea","native":"\ud83c\udde6\ud83c\uddea"}],"version":2},"flag-af":{"id":"flag-af","name":"Afghanistan Flag","keywords":["af","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1eb","native":"\ud83c\udde6\ud83c\uddeb"}],"version":2},"flag-ag":{"id":"flag-ag","name":"Antigua & Barbuda Flag","keywords":["ag","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1ec","native":"\ud83c\udde6\ud83c\uddec"}],"version":2},"flag-ai":{"id":"flag-ai","name":"Anguilla Flag","keywords":["ai","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1ee","native":"\ud83c\udde6\ud83c\uddee"}],"version":2},"flag-al":{"id":"flag-al","name":"Albania Flag","keywords":["al","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1f1","native":"\ud83c\udde6\ud83c\uddf1"}],"version":2},"flag-am":{"id":"flag-am","name":"Armenia Flag","keywords":["am","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1f2","native":"\ud83c\udde6\ud83c\uddf2"}],"version":2},"flag-ao":{"id":"flag-ao","name":"Angola Flag","keywords":["ao","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1f4","native":"\ud83c\udde6\ud83c\uddf4"}],"version":2},"flag-aq":{"id":"flag-aq","name":"Antarctica Flag","keywords":["aq","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1f6","native":"\ud83c\udde6\ud83c\uddf6"}],"version":2},"flag-ar":{"id":"flag-ar","name":"Argentina Flag","keywords":["ar","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1f7","native":"\ud83c\udde6\ud83c\uddf7"}],"version":2},"flag-as":{"id":"flag-as","name":"American Samoa Flag","keywords":["as","ws","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1f8","native":"\ud83c\udde6\ud83c\uddf8"}],"version":2},"flag-at":{"id":"flag-at","name":"Austria Flag","keywords":["at","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1f9","native":"\ud83c\udde6\ud83c\uddf9"}],"version":2},"flag-au":{"id":"flag-au","name":"Australia Flag","keywords":["au","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1fa","native":"\ud83c\udde6\ud83c\uddfa"}],"version":2},"flag-aw":{"id":"flag-aw","name":"Aruba Flag","keywords":["aw","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1fc","native":"\ud83c\udde6\ud83c\uddfc"}],"version":2},"flag-ax":{"id":"flag-ax","name":"\xc5land Islands Flag","keywords":["ax","aland","Aland","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1fd","native":"\ud83c\udde6\ud83c\uddfd"}],"version":2},"flag-az":{"id":"flag-az","name":"Azerbaijan Flag","keywords":["az","nation","country","banner"],"skins":[{"unified":"1f1e6-1f1ff","native":"\ud83c\udde6\ud83c\uddff"}],"version":2},"flag-ba":{"id":"flag-ba","name":"Bosnia & Herzegovina Flag","keywords":["ba","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1e6","native":"\ud83c\udde7\ud83c\udde6"}],"version":2},"flag-bb":{"id":"flag-bb","name":"Barbados Flag","keywords":["bb","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1e7","native":"\ud83c\udde7\ud83c\udde7"}],"version":2},"flag-bd":{"id":"flag-bd","name":"Bangladesh Flag","keywords":["bd","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1e9","native":"\ud83c\udde7\ud83c\udde9"}],"version":2},"flag-be":{"id":"flag-be","name":"Belgium Flag","keywords":["be","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1ea","native":"\ud83c\udde7\ud83c\uddea"}],"version":2},"flag-bf":{"id":"flag-bf","name":"Burkina Faso Flag","keywords":["bf","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1eb","native":"\ud83c\udde7\ud83c\uddeb"}],"version":2},"flag-bg":{"id":"flag-bg","name":"Bulgaria Flag","keywords":["bg","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1ec","native":"\ud83c\udde7\ud83c\uddec"}],"version":2},"flag-bh":{"id":"flag-bh","name":"Bahrain Flag","keywords":["bh","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1ed","native":"\ud83c\udde7\ud83c\udded"}],"version":2},"flag-bi":{"id":"flag-bi","name":"Burundi Flag","keywords":["bi","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1ee","native":"\ud83c\udde7\ud83c\uddee"}],"version":2},"flag-bj":{"id":"flag-bj","name":"Benin Flag","keywords":["bj","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1ef","native":"\ud83c\udde7\ud83c\uddef"}],"version":2},"flag-bl":{"id":"flag-bl","name":"St. Barth\xe9lemy Flag","keywords":["bl","st","barthelemy","saint","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f1","native":"\ud83c\udde7\ud83c\uddf1"}],"version":2},"flag-bm":{"id":"flag-bm","name":"Bermuda Flag","keywords":["bm","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f2","native":"\ud83c\udde7\ud83c\uddf2"}],"version":2},"flag-bn":{"id":"flag-bn","name":"Brunei Flag","keywords":["bn","darussalam","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f3","native":"\ud83c\udde7\ud83c\uddf3"}],"version":2},"flag-bo":{"id":"flag-bo","name":"Bolivia Flag","keywords":["bo","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f4","native":"\ud83c\udde7\ud83c\uddf4"}],"version":2},"flag-bq":{"id":"flag-bq","name":"Caribbean Netherlands Flag","keywords":["bq","bonaire","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f6","native":"\ud83c\udde7\ud83c\uddf6"}],"version":2},"flag-br":{"id":"flag-br","name":"Brazil Flag","keywords":["br","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f7","native":"\ud83c\udde7\ud83c\uddf7"}],"version":2},"flag-bs":{"id":"flag-bs","name":"Bahamas Flag","keywords":["bs","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f8","native":"\ud83c\udde7\ud83c\uddf8"}],"version":2},"flag-bt":{"id":"flag-bt","name":"Bhutan Flag","keywords":["bt","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1f9","native":"\ud83c\udde7\ud83c\uddf9"}],"version":2},"flag-bv":{"id":"flag-bv","name":"Bouvet Island Flag","keywords":["bv","norway"],"skins":[{"unified":"1f1e7-1f1fb","native":"\ud83c\udde7\ud83c\uddfb"}],"version":2},"flag-bw":{"id":"flag-bw","name":"Botswana Flag","keywords":["bw","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1fc","native":"\ud83c\udde7\ud83c\uddfc"}],"version":2},"flag-by":{"id":"flag-by","name":"Belarus Flag","keywords":["by","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1fe","native":"\ud83c\udde7\ud83c\uddfe"}],"version":2},"flag-bz":{"id":"flag-bz","name":"Belize Flag","keywords":["bz","nation","country","banner"],"skins":[{"unified":"1f1e7-1f1ff","native":"\ud83c\udde7\ud83c\uddff"}],"version":2},"flag-ca":{"id":"flag-ca","name":"Canada Flag","keywords":["ca","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1e6","native":"\ud83c\udde8\ud83c\udde6"}],"version":2},"flag-cc":{"id":"flag-cc","name":"Cocos (keeling) Islands Flag","keywords":["cc","keeling","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1e8","native":"\ud83c\udde8\ud83c\udde8"}],"version":2},"flag-cd":{"id":"flag-cd","name":"Congo - Kinshasa Flag","keywords":["cd","democratic","republic","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1e9","native":"\ud83c\udde8\ud83c\udde9"}],"version":2},"flag-cf":{"id":"flag-cf","name":"Central African Republic Flag","keywords":["cf","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1eb","native":"\ud83c\udde8\ud83c\uddeb"}],"version":2},"flag-cg":{"id":"flag-cg","name":"Congo - Brazzaville Flag","keywords":["cg","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1ec","native":"\ud83c\udde8\ud83c\uddec"}],"version":2},"flag-ch":{"id":"flag-ch","name":"Switzerland Flag","keywords":["ch","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1ed","native":"\ud83c\udde8\ud83c\udded"}],"version":2},"flag-ci":{"id":"flag-ci","name":"C\xf4te D\u2019ivoire Flag","keywords":["ci","cote","d","ivoire","ivory","coast","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1ee","native":"\ud83c\udde8\ud83c\uddee"}],"version":2},"flag-ck":{"id":"flag-ck","name":"Cook Islands Flag","keywords":["ck","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1f0","native":"\ud83c\udde8\ud83c\uddf0"}],"version":2},"flag-cl":{"id":"flag-cl","name":"Chile Flag","keywords":["cl","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1f1","native":"\ud83c\udde8\ud83c\uddf1"}],"version":2},"flag-cm":{"id":"flag-cm","name":"Cameroon Flag","keywords":["cm","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1f2","native":"\ud83c\udde8\ud83c\uddf2"}],"version":2},"cn":{"id":"cn","name":"China Flag","keywords":["cn","chinese","prc","country","nation","banner"],"skins":[{"unified":"1f1e8-1f1f3","native":"\ud83c\udde8\ud83c\uddf3"}],"version":1},"flag-co":{"id":"flag-co","name":"Colombia Flag","keywords":["co","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1f4","native":"\ud83c\udde8\ud83c\uddf4"}],"version":2},"flag-cp":{"id":"flag-cp","name":"Clipperton Island Flag","keywords":["cp"],"skins":[{"unified":"1f1e8-1f1f5","native":"\ud83c\udde8\ud83c\uddf5"}],"version":2},"flag-cr":{"id":"flag-cr","name":"Costa Rica Flag","keywords":["cr","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1f7","native":"\ud83c\udde8\ud83c\uddf7"}],"version":2},"flag-cu":{"id":"flag-cu","name":"Cuba Flag","keywords":["cu","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1fa","native":"\ud83c\udde8\ud83c\uddfa"}],"version":2},"flag-cv":{"id":"flag-cv","name":"Cape Verde Flag","keywords":["cv","cabo","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1fb","native":"\ud83c\udde8\ud83c\uddfb"}],"version":2},"flag-cw":{"id":"flag-cw","name":"Cura\xe7ao Flag","keywords":["cw","curacao","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1fc","native":"\ud83c\udde8\ud83c\uddfc"}],"version":2},"flag-cx":{"id":"flag-cx","name":"Christmas Island Flag","keywords":["cx","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1fd","native":"\ud83c\udde8\ud83c\uddfd"}],"version":2},"flag-cy":{"id":"flag-cy","name":"Cyprus Flag","keywords":["cy","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1fe","native":"\ud83c\udde8\ud83c\uddfe"}],"version":2},"flag-cz":{"id":"flag-cz","name":"Czechia Flag","keywords":["cz","nation","country","banner"],"skins":[{"unified":"1f1e8-1f1ff","native":"\ud83c\udde8\ud83c\uddff"}],"version":2},"de":{"id":"de","name":"Germany Flag","keywords":["de","german","nation","country","banner"],"skins":[{"unified":"1f1e9-1f1ea","native":"\ud83c\udde9\ud83c\uddea"}],"version":1},"flag-dg":{"id":"flag-dg","name":"Diego Garcia Flag","keywords":["dg"],"skins":[{"unified":"1f1e9-1f1ec","native":"\ud83c\udde9\ud83c\uddec"}],"version":2},"flag-dj":{"id":"flag-dj","name":"Djibouti Flag","keywords":["dj","nation","country","banner"],"skins":[{"unified":"1f1e9-1f1ef","native":"\ud83c\udde9\ud83c\uddef"}],"version":2},"flag-dk":{"id":"flag-dk","name":"Denmark Flag","keywords":["dk","nation","country","banner"],"skins":[{"unified":"1f1e9-1f1f0","native":"\ud83c\udde9\ud83c\uddf0"}],"version":2},"flag-dm":{"id":"flag-dm","name":"Dominica Flag","keywords":["dm","nation","country","banner"],"skins":[{"unified":"1f1e9-1f1f2","native":"\ud83c\udde9\ud83c\uddf2"}],"version":2},"flag-do":{"id":"flag-do","name":"Dominican Republic Flag","keywords":["do","nation","country","banner"],"skins":[{"unified":"1f1e9-1f1f4","native":"\ud83c\udde9\ud83c\uddf4"}],"version":2},"flag-dz":{"id":"flag-dz","name":"Algeria Flag","keywords":["dz","nation","country","banner"],"skins":[{"unified":"1f1e9-1f1ff","native":"\ud83c\udde9\ud83c\uddff"}],"version":2},"flag-ea":{"id":"flag-ea","name":"Ceuta & Melilla Flag","keywords":["ea"],"skins":[{"unified":"1f1ea-1f1e6","native":"\ud83c\uddea\ud83c\udde6"}],"version":2},"flag-ec":{"id":"flag-ec","name":"Ecuador Flag","keywords":["ec","nation","country","banner"],"skins":[{"unified":"1f1ea-1f1e8","native":"\ud83c\uddea\ud83c\udde8"}],"version":2},"flag-ee":{"id":"flag-ee","name":"Estonia Flag","keywords":["ee","nation","country","banner"],"skins":[{"unified":"1f1ea-1f1ea","native":"\ud83c\uddea\ud83c\uddea"}],"version":2},"flag-eg":{"id":"flag-eg","name":"Egypt Flag","keywords":["eg","nation","country","banner"],"skins":[{"unified":"1f1ea-1f1ec","native":"\ud83c\uddea\ud83c\uddec"}],"version":2},"flag-eh":{"id":"flag-eh","name":"Western Sahara Flag","keywords":["eh","nation","country","banner"],"skins":[{"unified":"1f1ea-1f1ed","native":"\ud83c\uddea\ud83c\udded"}],"version":2},"flag-er":{"id":"flag-er","name":"Eritrea Flag","keywords":["er","nation","country","banner"],"skins":[{"unified":"1f1ea-1f1f7","native":"\ud83c\uddea\ud83c\uddf7"}],"version":2},"es":{"id":"es","name":"Spain Flag","keywords":["es","nation","country","banner"],"skins":[{"unified":"1f1ea-1f1f8","native":"\ud83c\uddea\ud83c\uddf8"}],"version":1},"flag-et":{"id":"flag-et","name":"Ethiopia Flag","keywords":["et","nation","country","banner"],"skins":[{"unified":"1f1ea-1f1f9","native":"\ud83c\uddea\ud83c\uddf9"}],"version":2},"flag-eu":{"id":"flag-eu","name":"European Union Flag","keywords":["eu","banner"],"skins":[{"unified":"1f1ea-1f1fa","native":"\ud83c\uddea\ud83c\uddfa"}],"version":2},"flag-fi":{"id":"flag-fi","name":"Finland Flag","keywords":["fi","nation","country","banner"],"skins":[{"unified":"1f1eb-1f1ee","native":"\ud83c\uddeb\ud83c\uddee"}],"version":2},"flag-fj":{"id":"flag-fj","name":"Fiji Flag","keywords":["fj","nation","country","banner"],"skins":[{"unified":"1f1eb-1f1ef","native":"\ud83c\uddeb\ud83c\uddef"}],"version":2},"flag-fk":{"id":"flag-fk","name":"Falkland Islands Flag","keywords":["fk","malvinas","nation","country","banner"],"skins":[{"unified":"1f1eb-1f1f0","native":"\ud83c\uddeb\ud83c\uddf0"}],"version":2},"flag-fm":{"id":"flag-fm","name":"Micronesia Flag","keywords":["fm","federated","states","nation","country","banner"],"skins":[{"unified":"1f1eb-1f1f2","native":"\ud83c\uddeb\ud83c\uddf2"}],"version":2},"flag-fo":{"id":"flag-fo","name":"Faroe Islands Flag","keywords":["fo","nation","country","banner"],"skins":[{"unified":"1f1eb-1f1f4","native":"\ud83c\uddeb\ud83c\uddf4"}],"version":2},"fr":{"id":"fr","name":"France Flag","keywords":["fr","banner","nation","french","country"],"skins":[{"unified":"1f1eb-1f1f7","native":"\ud83c\uddeb\ud83c\uddf7"}],"version":1},"flag-ga":{"id":"flag-ga","name":"Gabon Flag","keywords":["ga","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1e6","native":"\ud83c\uddec\ud83c\udde6"}],"version":2},"gb":{"id":"gb","name":"United Kingdom Flag","keywords":["gb","uk","great","britain","northern","ireland","nation","country","banner","british","UK","english","england","union","jack"],"skins":[{"unified":"1f1ec-1f1e7","native":"\ud83c\uddec\ud83c\udde7"}],"version":1},"flag-gd":{"id":"flag-gd","name":"Grenada Flag","keywords":["gd","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1e9","native":"\ud83c\uddec\ud83c\udde9"}],"version":2},"flag-ge":{"id":"flag-ge","name":"Georgia Flag","keywords":["ge","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1ea","native":"\ud83c\uddec\ud83c\uddea"}],"version":2},"flag-gf":{"id":"flag-gf","name":"French Guiana Flag","keywords":["gf","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1eb","native":"\ud83c\uddec\ud83c\uddeb"}],"version":2},"flag-gg":{"id":"flag-gg","name":"Guernsey Flag","keywords":["gg","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1ec","native":"\ud83c\uddec\ud83c\uddec"}],"version":2},"flag-gh":{"id":"flag-gh","name":"Ghana Flag","keywords":["gh","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1ed","native":"\ud83c\uddec\ud83c\udded"}],"version":2},"flag-gi":{"id":"flag-gi","name":"Gibraltar Flag","keywords":["gi","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1ee","native":"\ud83c\uddec\ud83c\uddee"}],"version":2},"flag-gl":{"id":"flag-gl","name":"Greenland Flag","keywords":["gl","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f1","native":"\ud83c\uddec\ud83c\uddf1"}],"version":2},"flag-gm":{"id":"flag-gm","name":"Gambia Flag","keywords":["gm","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f2","native":"\ud83c\uddec\ud83c\uddf2"}],"version":2},"flag-gn":{"id":"flag-gn","name":"Guinea Flag","keywords":["gn","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f3","native":"\ud83c\uddec\ud83c\uddf3"}],"version":2},"flag-gp":{"id":"flag-gp","name":"Guadeloupe Flag","keywords":["gp","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f5","native":"\ud83c\uddec\ud83c\uddf5"}],"version":2},"flag-gq":{"id":"flag-gq","name":"Equatorial Guinea Flag","keywords":["gq","gn","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f6","native":"\ud83c\uddec\ud83c\uddf6"}],"version":2},"flag-gr":{"id":"flag-gr","name":"Greece Flag","keywords":["gr","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f7","native":"\ud83c\uddec\ud83c\uddf7"}],"version":2},"flag-gs":{"id":"flag-gs","name":"South Georgia & South Sandwich Islands Flag","keywords":["gs","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f8","native":"\ud83c\uddec\ud83c\uddf8"}],"version":2},"flag-gt":{"id":"flag-gt","name":"Guatemala Flag","keywords":["gt","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1f9","native":"\ud83c\uddec\ud83c\uddf9"}],"version":2},"flag-gu":{"id":"flag-gu","name":"Guam Flag","keywords":["gu","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1fa","native":"\ud83c\uddec\ud83c\uddfa"}],"version":2},"flag-gw":{"id":"flag-gw","name":"Guinea-Bissau Flag","keywords":["gw","guinea","bissau","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1fc","native":"\ud83c\uddec\ud83c\uddfc"}],"version":2},"flag-gy":{"id":"flag-gy","name":"Guyana Flag","keywords":["gy","nation","country","banner"],"skins":[{"unified":"1f1ec-1f1fe","native":"\ud83c\uddec\ud83c\uddfe"}],"version":2},"flag-hk":{"id":"flag-hk","name":"Hong Kong Sar China Flag","keywords":["hk","nation","country","banner"],"skins":[{"unified":"1f1ed-1f1f0","native":"\ud83c\udded\ud83c\uddf0"}],"version":2},"flag-hm":{"id":"flag-hm","name":"Heard & Mcdonald Islands Flag","keywords":["hm"],"skins":[{"unified":"1f1ed-1f1f2","native":"\ud83c\udded\ud83c\uddf2"}],"version":2},"flag-hn":{"id":"flag-hn","name":"Honduras Flag","keywords":["hn","nation","country","banner"],"skins":[{"unified":"1f1ed-1f1f3","native":"\ud83c\udded\ud83c\uddf3"}],"version":2},"flag-hr":{"id":"flag-hr","name":"Croatia Flag","keywords":["hr","nation","country","banner"],"skins":[{"unified":"1f1ed-1f1f7","native":"\ud83c\udded\ud83c\uddf7"}],"version":2},"flag-ht":{"id":"flag-ht","name":"Haiti Flag","keywords":["ht","nation","country","banner"],"skins":[{"unified":"1f1ed-1f1f9","native":"\ud83c\udded\ud83c\uddf9"}],"version":2},"flag-hu":{"id":"flag-hu","name":"Hungary Flag","keywords":["hu","nation","country","banner"],"skins":[{"unified":"1f1ed-1f1fa","native":"\ud83c\udded\ud83c\uddfa"}],"version":2},"flag-ic":{"id":"flag-ic","name":"Canary Islands Flag","keywords":["ic","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1e8","native":"\ud83c\uddee\ud83c\udde8"}],"version":2},"flag-id":{"id":"flag-id","name":"Indonesia Flag","keywords":["id","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1e9","native":"\ud83c\uddee\ud83c\udde9"}],"version":2},"flag-ie":{"id":"flag-ie","name":"Ireland Flag","keywords":["ie","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1ea","native":"\ud83c\uddee\ud83c\uddea"}],"version":2},"flag-il":{"id":"flag-il","name":"Israel Flag","keywords":["il","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f1","native":"\ud83c\uddee\ud83c\uddf1"}],"version":2},"flag-im":{"id":"flag-im","name":"Isle of Man Flag","keywords":["im","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f2","native":"\ud83c\uddee\ud83c\uddf2"}],"version":2},"flag-in":{"id":"flag-in","name":"India Flag","keywords":["in","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f3","native":"\ud83c\uddee\ud83c\uddf3"}],"version":2},"flag-io":{"id":"flag-io","name":"British Indian Ocean Territory Flag","keywords":["io","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f4","native":"\ud83c\uddee\ud83c\uddf4"}],"version":2},"flag-iq":{"id":"flag-iq","name":"Iraq Flag","keywords":["iq","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f6","native":"\ud83c\uddee\ud83c\uddf6"}],"version":2},"flag-ir":{"id":"flag-ir","name":"Iran Flag","keywords":["ir","islamic","republic","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f7","native":"\ud83c\uddee\ud83c\uddf7"}],"version":2},"flag-is":{"id":"flag-is","name":"Iceland Flag","keywords":["is","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f8","native":"\ud83c\uddee\ud83c\uddf8"}],"version":2},"it":{"id":"it","name":"Italy Flag","keywords":["it","nation","country","banner"],"skins":[{"unified":"1f1ee-1f1f9","native":"\ud83c\uddee\ud83c\uddf9"}],"version":1},"flag-je":{"id":"flag-je","name":"Jersey Flag","keywords":["je","nation","country","banner"],"skins":[{"unified":"1f1ef-1f1ea","native":"\ud83c\uddef\ud83c\uddea"}],"version":2},"flag-jm":{"id":"flag-jm","name":"Jamaica Flag","keywords":["jm","nation","country","banner"],"skins":[{"unified":"1f1ef-1f1f2","native":"\ud83c\uddef\ud83c\uddf2"}],"version":2},"flag-jo":{"id":"flag-jo","name":"Jordan Flag","keywords":["jo","nation","country","banner"],"skins":[{"unified":"1f1ef-1f1f4","native":"\ud83c\uddef\ud83c\uddf4"}],"version":2},"jp":{"id":"jp","name":"Japan Flag","keywords":["jp","japanese","nation","country","banner"],"skins":[{"unified":"1f1ef-1f1f5","native":"\ud83c\uddef\ud83c\uddf5"}],"version":1},"flag-ke":{"id":"flag-ke","name":"Kenya Flag","keywords":["ke","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1ea","native":"\ud83c\uddf0\ud83c\uddea"}],"version":2},"flag-kg":{"id":"flag-kg","name":"Kyrgyzstan Flag","keywords":["kg","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1ec","native":"\ud83c\uddf0\ud83c\uddec"}],"version":2},"flag-kh":{"id":"flag-kh","name":"Cambodia Flag","keywords":["kh","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1ed","native":"\ud83c\uddf0\ud83c\udded"}],"version":2},"flag-ki":{"id":"flag-ki","name":"Kiribati Flag","keywords":["ki","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1ee","native":"\ud83c\uddf0\ud83c\uddee"}],"version":2},"flag-km":{"id":"flag-km","name":"Comoros Flag","keywords":["km","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1f2","native":"\ud83c\uddf0\ud83c\uddf2"}],"version":2},"flag-kn":{"id":"flag-kn","name":"St. Kitts & Nevis Flag","keywords":["kn","st","saint","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1f3","native":"\ud83c\uddf0\ud83c\uddf3"}],"version":2},"flag-kp":{"id":"flag-kp","name":"North Korea Flag","keywords":["kp","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1f5","native":"\ud83c\uddf0\ud83c\uddf5"}],"version":2},"kr":{"id":"kr","name":"South Korea Flag","keywords":["kr","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1f7","native":"\ud83c\uddf0\ud83c\uddf7"}],"version":1},"flag-kw":{"id":"flag-kw","name":"Kuwait Flag","keywords":["kw","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1fc","native":"\ud83c\uddf0\ud83c\uddfc"}],"version":2},"flag-ky":{"id":"flag-ky","name":"Cayman Islands Flag","keywords":["ky","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1fe","native":"\ud83c\uddf0\ud83c\uddfe"}],"version":2},"flag-kz":{"id":"flag-kz","name":"Kazakhstan Flag","keywords":["kz","nation","country","banner"],"skins":[{"unified":"1f1f0-1f1ff","native":"\ud83c\uddf0\ud83c\uddff"}],"version":2},"flag-la":{"id":"flag-la","name":"Laos Flag","keywords":["la","lao","democratic","republic","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1e6","native":"\ud83c\uddf1\ud83c\udde6"}],"version":2},"flag-lb":{"id":"flag-lb","name":"Lebanon Flag","keywords":["lb","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1e7","native":"\ud83c\uddf1\ud83c\udde7"}],"version":2},"flag-lc":{"id":"flag-lc","name":"St. Lucia Flag","keywords":["lc","st","saint","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1e8","native":"\ud83c\uddf1\ud83c\udde8"}],"version":2},"flag-li":{"id":"flag-li","name":"Liechtenstein Flag","keywords":["li","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1ee","native":"\ud83c\uddf1\ud83c\uddee"}],"version":2},"flag-lk":{"id":"flag-lk","name":"Sri Lanka Flag","keywords":["lk","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1f0","native":"\ud83c\uddf1\ud83c\uddf0"}],"version":2},"flag-lr":{"id":"flag-lr","name":"Liberia Flag","keywords":["lr","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1f7","native":"\ud83c\uddf1\ud83c\uddf7"}],"version":2},"flag-ls":{"id":"flag-ls","name":"Lesotho Flag","keywords":["ls","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1f8","native":"\ud83c\uddf1\ud83c\uddf8"}],"version":2},"flag-lt":{"id":"flag-lt","name":"Lithuania Flag","keywords":["lt","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1f9","native":"\ud83c\uddf1\ud83c\uddf9"}],"version":2},"flag-lu":{"id":"flag-lu","name":"Luxembourg Flag","keywords":["lu","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1fa","native":"\ud83c\uddf1\ud83c\uddfa"}],"version":2},"flag-lv":{"id":"flag-lv","name":"Latvia Flag","keywords":["lv","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1fb","native":"\ud83c\uddf1\ud83c\uddfb"}],"version":2},"flag-ly":{"id":"flag-ly","name":"Libya Flag","keywords":["ly","nation","country","banner"],"skins":[{"unified":"1f1f1-1f1fe","native":"\ud83c\uddf1\ud83c\uddfe"}],"version":2},"flag-ma":{"id":"flag-ma","name":"Morocco Flag","keywords":["ma","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1e6","native":"\ud83c\uddf2\ud83c\udde6"}],"version":2},"flag-mc":{"id":"flag-mc","name":"Monaco Flag","keywords":["mc","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1e8","native":"\ud83c\uddf2\ud83c\udde8"}],"version":2},"flag-md":{"id":"flag-md","name":"Moldova Flag","keywords":["md","republic","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1e9","native":"\ud83c\uddf2\ud83c\udde9"}],"version":2},"flag-me":{"id":"flag-me","name":"Montenegro Flag","keywords":["me","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1ea","native":"\ud83c\uddf2\ud83c\uddea"}],"version":2},"flag-mf":{"id":"flag-mf","name":"St. Martin Flag","keywords":["mf","st"],"skins":[{"unified":"1f1f2-1f1eb","native":"\ud83c\uddf2\ud83c\uddeb"}],"version":2},"flag-mg":{"id":"flag-mg","name":"Madagascar Flag","keywords":["mg","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1ec","native":"\ud83c\uddf2\ud83c\uddec"}],"version":2},"flag-mh":{"id":"flag-mh","name":"Marshall Islands Flag","keywords":["mh","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1ed","native":"\ud83c\uddf2\ud83c\udded"}],"version":2},"flag-mk":{"id":"flag-mk","name":"North Macedonia Flag","keywords":["mk","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f0","native":"\ud83c\uddf2\ud83c\uddf0"}],"version":2},"flag-ml":{"id":"flag-ml","name":"Mali Flag","keywords":["ml","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f1","native":"\ud83c\uddf2\ud83c\uddf1"}],"version":2},"flag-mm":{"id":"flag-mm","name":"Myanmar (burma) Flag","keywords":["mm","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f2","native":"\ud83c\uddf2\ud83c\uddf2"}],"version":2},"flag-mn":{"id":"flag-mn","name":"Mongolia Flag","keywords":["mn","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f3","native":"\ud83c\uddf2\ud83c\uddf3"}],"version":2},"flag-mo":{"id":"flag-mo","name":"Macao Sar China Flag","keywords":["mo","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f4","native":"\ud83c\uddf2\ud83c\uddf4"}],"version":2},"flag-mp":{"id":"flag-mp","name":"Northern Mariana Islands Flag","keywords":["mp","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f5","native":"\ud83c\uddf2\ud83c\uddf5"}],"version":2},"flag-mq":{"id":"flag-mq","name":"Martinique Flag","keywords":["mq","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f6","native":"\ud83c\uddf2\ud83c\uddf6"}],"version":2},"flag-mr":{"id":"flag-mr","name":"Mauritania Flag","keywords":["mr","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f7","native":"\ud83c\uddf2\ud83c\uddf7"}],"version":2},"flag-ms":{"id":"flag-ms","name":"Montserrat Flag","keywords":["ms","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f8","native":"\ud83c\uddf2\ud83c\uddf8"}],"version":2},"flag-mt":{"id":"flag-mt","name":"Malta Flag","keywords":["mt","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1f9","native":"\ud83c\uddf2\ud83c\uddf9"}],"version":2},"flag-mu":{"id":"flag-mu","name":"Mauritius Flag","keywords":["mu","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1fa","native":"\ud83c\uddf2\ud83c\uddfa"}],"version":2},"flag-mv":{"id":"flag-mv","name":"Maldives Flag","keywords":["mv","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1fb","native":"\ud83c\uddf2\ud83c\uddfb"}],"version":2},"flag-mw":{"id":"flag-mw","name":"Malawi Flag","keywords":["mw","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1fc","native":"\ud83c\uddf2\ud83c\uddfc"}],"version":2},"flag-mx":{"id":"flag-mx","name":"Mexico Flag","keywords":["mx","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1fd","native":"\ud83c\uddf2\ud83c\uddfd"}],"version":2},"flag-my":{"id":"flag-my","name":"Malaysia Flag","keywords":["my","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1fe","native":"\ud83c\uddf2\ud83c\uddfe"}],"version":2},"flag-mz":{"id":"flag-mz","name":"Mozambique Flag","keywords":["mz","nation","country","banner"],"skins":[{"unified":"1f1f2-1f1ff","native":"\ud83c\uddf2\ud83c\uddff"}],"version":2},"flag-na":{"id":"flag-na","name":"Namibia Flag","keywords":["na","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1e6","native":"\ud83c\uddf3\ud83c\udde6"}],"version":2},"flag-nc":{"id":"flag-nc","name":"New Caledonia Flag","keywords":["nc","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1e8","native":"\ud83c\uddf3\ud83c\udde8"}],"version":2},"flag-ne":{"id":"flag-ne","name":"Niger Flag","keywords":["ne","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1ea","native":"\ud83c\uddf3\ud83c\uddea"}],"version":2},"flag-nf":{"id":"flag-nf","name":"Norfolk Island Flag","keywords":["nf","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1eb","native":"\ud83c\uddf3\ud83c\uddeb"}],"version":2},"flag-ng":{"id":"flag-ng","name":"Nigeria Flag","keywords":["ng","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1ec","native":"\ud83c\uddf3\ud83c\uddec"}],"version":2},"flag-ni":{"id":"flag-ni","name":"Nicaragua Flag","keywords":["ni","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1ee","native":"\ud83c\uddf3\ud83c\uddee"}],"version":2},"flag-nl":{"id":"flag-nl","name":"Netherlands Flag","keywords":["nl","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1f1","native":"\ud83c\uddf3\ud83c\uddf1"}],"version":2},"flag-no":{"id":"flag-no","name":"Norway Flag","keywords":["no","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1f4","native":"\ud83c\uddf3\ud83c\uddf4"}],"version":2},"flag-np":{"id":"flag-np","name":"Nepal Flag","keywords":["np","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1f5","native":"\ud83c\uddf3\ud83c\uddf5"}],"version":2},"flag-nr":{"id":"flag-nr","name":"Nauru Flag","keywords":["nr","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1f7","native":"\ud83c\uddf3\ud83c\uddf7"}],"version":2},"flag-nu":{"id":"flag-nu","name":"Niue Flag","keywords":["nu","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1fa","native":"\ud83c\uddf3\ud83c\uddfa"}],"version":2},"flag-nz":{"id":"flag-nz","name":"New Zealand Flag","keywords":["nz","nation","country","banner"],"skins":[{"unified":"1f1f3-1f1ff","native":"\ud83c\uddf3\ud83c\uddff"}],"version":2},"flag-om":{"id":"flag-om","name":"Oman Flag","keywords":["om","symbol","nation","country","banner"],"skins":[{"unified":"1f1f4-1f1f2","native":"\ud83c\uddf4\ud83c\uddf2"}],"version":2},"flag-pa":{"id":"flag-pa","name":"Panama Flag","keywords":["pa","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1e6","native":"\ud83c\uddf5\ud83c\udde6"}],"version":2},"flag-pe":{"id":"flag-pe","name":"Peru Flag","keywords":["pe","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1ea","native":"\ud83c\uddf5\ud83c\uddea"}],"version":2},"flag-pf":{"id":"flag-pf","name":"French Polynesia Flag","keywords":["pf","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1eb","native":"\ud83c\uddf5\ud83c\uddeb"}],"version":2},"flag-pg":{"id":"flag-pg","name":"Papua New Guinea Flag","keywords":["pg","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1ec","native":"\ud83c\uddf5\ud83c\uddec"}],"version":2},"flag-ph":{"id":"flag-ph","name":"Philippines Flag","keywords":["ph","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1ed","native":"\ud83c\uddf5\ud83c\udded"}],"version":2},"flag-pk":{"id":"flag-pk","name":"Pakistan Flag","keywords":["pk","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1f0","native":"\ud83c\uddf5\ud83c\uddf0"}],"version":2},"flag-pl":{"id":"flag-pl","name":"Poland Flag","keywords":["pl","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1f1","native":"\ud83c\uddf5\ud83c\uddf1"}],"version":2},"flag-pm":{"id":"flag-pm","name":"St. Pierre & Miquelon Flag","keywords":["pm","st","saint","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1f2","native":"\ud83c\uddf5\ud83c\uddf2"}],"version":2},"flag-pn":{"id":"flag-pn","name":"Pitcairn Islands Flag","keywords":["pn","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1f3","native":"\ud83c\uddf5\ud83c\uddf3"}],"version":2},"flag-pr":{"id":"flag-pr","name":"Puerto Rico Flag","keywords":["pr","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1f7","native":"\ud83c\uddf5\ud83c\uddf7"}],"version":2},"flag-ps":{"id":"flag-ps","name":"Palestinian Territories Flag","keywords":["ps","palestine","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1f8","native":"\ud83c\uddf5\ud83c\uddf8"}],"version":2},"flag-pt":{"id":"flag-pt","name":"Portugal Flag","keywords":["pt","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1f9","native":"\ud83c\uddf5\ud83c\uddf9"}],"version":2},"flag-pw":{"id":"flag-pw","name":"Palau Flag","keywords":["pw","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1fc","native":"\ud83c\uddf5\ud83c\uddfc"}],"version":2},"flag-py":{"id":"flag-py","name":"Paraguay Flag","keywords":["py","nation","country","banner"],"skins":[{"unified":"1f1f5-1f1fe","native":"\ud83c\uddf5\ud83c\uddfe"}],"version":2},"flag-qa":{"id":"flag-qa","name":"Qatar Flag","keywords":["qa","nation","country","banner"],"skins":[{"unified":"1f1f6-1f1e6","native":"\ud83c\uddf6\ud83c\udde6"}],"version":2},"flag-re":{"id":"flag-re","name":"R\xe9union Flag","keywords":["re","reunion","nation","country","banner"],"skins":[{"unified":"1f1f7-1f1ea","native":"\ud83c\uddf7\ud83c\uddea"}],"version":2},"flag-ro":{"id":"flag-ro","name":"Romania Flag","keywords":["ro","nation","country","banner"],"skins":[{"unified":"1f1f7-1f1f4","native":"\ud83c\uddf7\ud83c\uddf4"}],"version":2},"flag-rs":{"id":"flag-rs","name":"Serbia Flag","keywords":["rs","nation","country","banner"],"skins":[{"unified":"1f1f7-1f1f8","native":"\ud83c\uddf7\ud83c\uddf8"}],"version":2},"ru":{"id":"ru","name":"Russia Flag","keywords":["ru","russian","federation","nation","country","banner"],"skins":[{"unified":"1f1f7-1f1fa","native":"\ud83c\uddf7\ud83c\uddfa"}],"version":1},"flag-rw":{"id":"flag-rw","name":"Rwanda Flag","keywords":["rw","nation","country","banner"],"skins":[{"unified":"1f1f7-1f1fc","native":"\ud83c\uddf7\ud83c\uddfc"}],"version":2},"flag-sa":{"id":"flag-sa","name":"Saudi Arabia Flag","keywords":["sa","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1e6","native":"\ud83c\uddf8\ud83c\udde6"}],"version":2},"flag-sb":{"id":"flag-sb","name":"Solomon Islands Flag","keywords":["sb","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1e7","native":"\ud83c\uddf8\ud83c\udde7"}],"version":2},"flag-sc":{"id":"flag-sc","name":"Seychelles Flag","keywords":["sc","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1e8","native":"\ud83c\uddf8\ud83c\udde8"}],"version":2},"flag-sd":{"id":"flag-sd","name":"Sudan Flag","keywords":["sd","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1e9","native":"\ud83c\uddf8\ud83c\udde9"}],"version":2},"flag-se":{"id":"flag-se","name":"Sweden Flag","keywords":["se","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1ea","native":"\ud83c\uddf8\ud83c\uddea"}],"version":2},"flag-sg":{"id":"flag-sg","name":"Singapore Flag","keywords":["sg","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1ec","native":"\ud83c\uddf8\ud83c\uddec"}],"version":2},"flag-sh":{"id":"flag-sh","name":"St. Helena Flag","keywords":["sh","st","saint","ascension","tristan","cunha","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1ed","native":"\ud83c\uddf8\ud83c\udded"}],"version":2},"flag-si":{"id":"flag-si","name":"Slovenia Flag","keywords":["si","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1ee","native":"\ud83c\uddf8\ud83c\uddee"}],"version":2},"flag-sj":{"id":"flag-sj","name":"Svalbard & Jan Mayen Flag","keywords":["sj"],"skins":[{"unified":"1f1f8-1f1ef","native":"\ud83c\uddf8\ud83c\uddef"}],"version":2},"flag-sk":{"id":"flag-sk","name":"Slovakia Flag","keywords":["sk","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f0","native":"\ud83c\uddf8\ud83c\uddf0"}],"version":2},"flag-sl":{"id":"flag-sl","name":"Sierra Leone Flag","keywords":["sl","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f1","native":"\ud83c\uddf8\ud83c\uddf1"}],"version":2},"flag-sm":{"id":"flag-sm","name":"San Marino Flag","keywords":["sm","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f2","native":"\ud83c\uddf8\ud83c\uddf2"}],"version":2},"flag-sn":{"id":"flag-sn","name":"Senegal Flag","keywords":["sn","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f3","native":"\ud83c\uddf8\ud83c\uddf3"}],"version":2},"flag-so":{"id":"flag-so","name":"Somalia Flag","keywords":["so","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f4","native":"\ud83c\uddf8\ud83c\uddf4"}],"version":2},"flag-sr":{"id":"flag-sr","name":"Suriname Flag","keywords":["sr","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f7","native":"\ud83c\uddf8\ud83c\uddf7"}],"version":2},"flag-ss":{"id":"flag-ss","name":"South Sudan Flag","keywords":["ss","sd","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f8","native":"\ud83c\uddf8\ud83c\uddf8"}],"version":2},"flag-st":{"id":"flag-st","name":"S\xe3o Tom\xe9 & Pr\xedncipe Flag","keywords":["st","sao","tome","principe","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1f9","native":"\ud83c\uddf8\ud83c\uddf9"}],"version":2},"flag-sv":{"id":"flag-sv","name":"El Salvador Flag","keywords":["sv","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1fb","native":"\ud83c\uddf8\ud83c\uddfb"}],"version":2},"flag-sx":{"id":"flag-sx","name":"Sint Maarten Flag","keywords":["sx","dutch","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1fd","native":"\ud83c\uddf8\ud83c\uddfd"}],"version":2},"flag-sy":{"id":"flag-sy","name":"Syria Flag","keywords":["sy","syrian","arab","republic","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1fe","native":"\ud83c\uddf8\ud83c\uddfe"}],"version":2},"flag-sz":{"id":"flag-sz","name":"Eswatini Flag","keywords":["sz","nation","country","banner"],"skins":[{"unified":"1f1f8-1f1ff","native":"\ud83c\uddf8\ud83c\uddff"}],"version":2},"flag-ta":{"id":"flag-ta","name":"Tristan Da Cunha Flag","keywords":["ta"],"skins":[{"unified":"1f1f9-1f1e6","native":"\ud83c\uddf9\ud83c\udde6"}],"version":2},"flag-tc":{"id":"flag-tc","name":"Turks & Caicos Islands Flag","keywords":["tc","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1e8","native":"\ud83c\uddf9\ud83c\udde8"}],"version":2},"flag-td":{"id":"flag-td","name":"Chad Flag","keywords":["td","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1e9","native":"\ud83c\uddf9\ud83c\udde9"}],"version":2},"flag-tf":{"id":"flag-tf","name":"French Southern Territories Flag","keywords":["tf","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1eb","native":"\ud83c\uddf9\ud83c\uddeb"}],"version":2},"flag-tg":{"id":"flag-tg","name":"Togo Flag","keywords":["tg","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1ec","native":"\ud83c\uddf9\ud83c\uddec"}],"version":2},"flag-th":{"id":"flag-th","name":"Thailand Flag","keywords":["th","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1ed","native":"\ud83c\uddf9\ud83c\udded"}],"version":2},"flag-tj":{"id":"flag-tj","name":"Tajikistan Flag","keywords":["tj","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1ef","native":"\ud83c\uddf9\ud83c\uddef"}],"version":2},"flag-tk":{"id":"flag-tk","name":"Tokelau Flag","keywords":["tk","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1f0","native":"\ud83c\uddf9\ud83c\uddf0"}],"version":2},"flag-tl":{"id":"flag-tl","name":"Timor-Leste Flag","keywords":["tl","timor","leste","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1f1","native":"\ud83c\uddf9\ud83c\uddf1"}],"version":2},"flag-tm":{"id":"flag-tm","name":"Turkmenistan Flag","keywords":["tm","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1f2","native":"\ud83c\uddf9\ud83c\uddf2"}],"version":2},"flag-tn":{"id":"flag-tn","name":"Tunisia Flag","keywords":["tn","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1f3","native":"\ud83c\uddf9\ud83c\uddf3"}],"version":2},"flag-to":{"id":"flag-to","name":"Tonga Flag","keywords":["to","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1f4","native":"\ud83c\uddf9\ud83c\uddf4"}],"version":2},"flag-tr":{"id":"flag-tr","name":"Turkey Flag","keywords":["tr","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1f7","native":"\ud83c\uddf9\ud83c\uddf7"}],"version":2},"flag-tt":{"id":"flag-tt","name":"Trinidad & Tobago Flag","keywords":["tt","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1f9","native":"\ud83c\uddf9\ud83c\uddf9"}],"version":2},"flag-tv":{"id":"flag-tv","name":"Tuvalu Flag","keywords":["tv","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1fb","native":"\ud83c\uddf9\ud83c\uddfb"}],"version":2},"flag-tw":{"id":"flag-tw","name":"Taiwan Flag","keywords":["tw","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1fc","native":"\ud83c\uddf9\ud83c\uddfc"}],"version":2},"flag-tz":{"id":"flag-tz","name":"Tanzania Flag","keywords":["tz","united","republic","nation","country","banner"],"skins":[{"unified":"1f1f9-1f1ff","native":"\ud83c\uddf9\ud83c\uddff"}],"version":2},"flag-ua":{"id":"flag-ua","name":"Ukraine Flag","keywords":["ua","nation","country","banner"],"skins":[{"unified":"1f1fa-1f1e6","native":"\ud83c\uddfa\ud83c\udde6"}],"version":2},"flag-ug":{"id":"flag-ug","name":"Uganda Flag","keywords":["ug","nation","country","banner"],"skins":[{"unified":"1f1fa-1f1ec","native":"\ud83c\uddfa\ud83c\uddec"}],"version":2},"flag-um":{"id":"flag-um","name":"U.s. Outlying Islands Flag","keywords":["um","u","s"],"skins":[{"unified":"1f1fa-1f1f2","native":"\ud83c\uddfa\ud83c\uddf2"}],"version":2},"flag-un":{"id":"flag-un","name":"United Nations Flag","keywords":["un","banner"],"skins":[{"unified":"1f1fa-1f1f3","native":"\ud83c\uddfa\ud83c\uddf3"}],"version":4},"us":{"id":"us","name":"United States Flag","keywords":["us","america","nation","country","banner"],"skins":[{"unified":"1f1fa-1f1f8","native":"\ud83c\uddfa\ud83c\uddf8"}],"version":1},"flag-uy":{"id":"flag-uy","name":"Uruguay Flag","keywords":["uy","nation","country","banner"],"skins":[{"unified":"1f1fa-1f1fe","native":"\ud83c\uddfa\ud83c\uddfe"}],"version":2},"flag-uz":{"id":"flag-uz","name":"Uzbekistan Flag","keywords":["uz","nation","country","banner"],"skins":[{"unified":"1f1fa-1f1ff","native":"\ud83c\uddfa\ud83c\uddff"}],"version":2},"flag-va":{"id":"flag-va","name":"Vatican City Flag","keywords":["va","nation","country","banner"],"skins":[{"unified":"1f1fb-1f1e6","native":"\ud83c\uddfb\ud83c\udde6"}],"version":2},"flag-vc":{"id":"flag-vc","name":"St. Vincent & Grenadines Flag","keywords":["vc","st","saint","nation","country","banner"],"skins":[{"unified":"1f1fb-1f1e8","native":"\ud83c\uddfb\ud83c\udde8"}],"version":2},"flag-ve":{"id":"flag-ve","name":"Venezuela Flag","keywords":["ve","bolivarian","republic","nation","country","banner"],"skins":[{"unified":"1f1fb-1f1ea","native":"\ud83c\uddfb\ud83c\uddea"}],"version":2},"flag-vg":{"id":"flag-vg","name":"British Virgin Islands Flag","keywords":["vg","bvi","nation","country","banner"],"skins":[{"unified":"1f1fb-1f1ec","native":"\ud83c\uddfb\ud83c\uddec"}],"version":2},"flag-vi":{"id":"flag-vi","name":"U.s. Virgin Islands Flag","keywords":["vi","u","s","us","nation","country","banner"],"skins":[{"unified":"1f1fb-1f1ee","native":"\ud83c\uddfb\ud83c\uddee"}],"version":2},"flag-vn":{"id":"flag-vn","name":"Vietnam Flag","keywords":["vn","viet","nam","nation","country","banner"],"skins":[{"unified":"1f1fb-1f1f3","native":"\ud83c\uddfb\ud83c\uddf3"}],"version":2},"flag-vu":{"id":"flag-vu","name":"Vanuatu Flag","keywords":["vu","nation","country","banner"],"skins":[{"unified":"1f1fb-1f1fa","native":"\ud83c\uddfb\ud83c\uddfa"}],"version":2},"flag-wf":{"id":"flag-wf","name":"Wallis & Futuna Flag","keywords":["wf","nation","country","banner"],"skins":[{"unified":"1f1fc-1f1eb","native":"\ud83c\uddfc\ud83c\uddeb"}],"version":2},"flag-ws":{"id":"flag-ws","name":"Samoa Flag","keywords":["ws","nation","country","banner"],"skins":[{"unified":"1f1fc-1f1f8","native":"\ud83c\uddfc\ud83c\uddf8"}],"version":2},"flag-xk":{"id":"flag-xk","name":"Kosovo Flag","keywords":["xk","nation","country","banner"],"skins":[{"unified":"1f1fd-1f1f0","native":"\ud83c\uddfd\ud83c\uddf0"}],"version":2},"flag-ye":{"id":"flag-ye","name":"Yemen Flag","keywords":["ye","nation","country","banner"],"skins":[{"unified":"1f1fe-1f1ea","native":"\ud83c\uddfe\ud83c\uddea"}],"version":2},"flag-yt":{"id":"flag-yt","name":"Mayotte Flag","keywords":["yt","nation","country","banner"],"skins":[{"unified":"1f1fe-1f1f9","native":"\ud83c\uddfe\ud83c\uddf9"}],"version":2},"flag-za":{"id":"flag-za","name":"South Africa Flag","keywords":["za","nation","country","banner"],"skins":[{"unified":"1f1ff-1f1e6","native":"\ud83c\uddff\ud83c\udde6"}],"version":2},"flag-zm":{"id":"flag-zm","name":"Zambia Flag","keywords":["zm","nation","country","banner"],"skins":[{"unified":"1f1ff-1f1f2","native":"\ud83c\uddff\ud83c\uddf2"}],"version":2},"flag-zw":{"id":"flag-zw","name":"Zimbabwe Flag","keywords":["zw","nation","country","banner"],"skins":[{"unified":"1f1ff-1f1fc","native":"\ud83c\uddff\ud83c\uddfc"}],"version":2},"flag-england":{"id":"flag-england","name":"England Flag","keywords":["english"],"skins":[{"unified":"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f","native":"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f"}],"version":5},"flag-scotland":{"id":"flag-scotland","name":"Scotland Flag","keywords":["scottish"],"skins":[{"unified":"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f","native":"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f"}],"version":5},"flag-wales":{"id":"flag-wales","name":"Wales Flag","keywords":["welsh"],"skins":[{"unified":"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f","native":"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f"}],"version":5}},"aliases":{"satisfied":"laughing","grinning_face_with_star_eyes":"star-struck","grinning_face_with_one_large_and_one_small_eye":"zany_face","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"face_with_hand_over_mouth","face_with_finger_covering_closed_lips":"shushing_face","face_with_one_eyebrow_raised":"face_with_raised_eyebrow","face_with_open_mouth_vomiting":"face_vomiting","shocked_face_with_exploding_head":"exploding_head","serious_face_with_symbols_covering_mouth":"face_with_symbols_on_mouth","poop":"hankey","shit":"hankey","collision":"boom","raised_hand":"hand","hand_with_index_and_middle_fingers_crossed":"crossed_fingers","sign_of_the_horns":"the_horns","reversed_hand_with_middle_finger_extended":"middle_finger","thumbsup":"+1","thumbsdown":"-1","punch":"facepunch","mother_christmas":"mrs_claus","running":"runner","man-with-bunny-ears-partying":"men-with-bunny-ears-partying","woman-with-bunny-ears-partying":"women-with-bunny-ears-partying","women_holding_hands":"two_women_holding_hands","woman_and_man_holding_hands":"man_and_woman_holding_hands","couple":"man_and_woman_holding_hands","men_holding_hands":"two_men_holding_hands","paw_prints":"feet","flipper":"dolphin","honeybee":"bee","lady_beetle":"ladybug","cooking":"fried_egg","knife":"hocho","red_car":"car","sailboat":"boat","waxing_gibbous_moon":"moon","sun_small_cloud":"mostly_sunny","sun_behind_cloud":"barely_sunny","sun_behind_rain_cloud":"partly_sunny_rain","lightning_cloud":"lightning","tornado_cloud":"tornado","tshirt":"shirt","shoe":"mans_shoe","telephone":"phone","lantern":"izakaya_lantern","open_book":"book","envelope":"email","pencil":"memo","heavy_exclamation_mark":"exclamation","staff_of_aesculapius":"medical_symbol","flag-cn":"cn","flag-de":"de","flag-es":"es","flag-fr":"fr","uk":"gb","flag-gb":"gb","flag-it":"it","flag-jp":"jp","flag-kr":"kr","flag-ru":"ru","flag-us":"us"},"sheet":{"cols":61,"rows":61}}'
            );
        },
    },
]);
//# sourceMappingURL=147.bb72a7f4.chunk.js.map
