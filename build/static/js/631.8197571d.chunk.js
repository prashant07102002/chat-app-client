"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [631],
  {
    7631: function (t, e, n) {
      n.d(e, {
        g: function () {
          return Fo;
        },
      });
      var i = n(1413),
        r = n(2791),
        o = n(5671),
        a = n(3144);
      function s(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function u(t) {
        return !!t.touches;
      }
      function l(t) {
        return function (e) {
          var n = e instanceof MouseEvent;
          (!n || (n && 0 === e.button)) && t(e);
        };
      }
      var c = { pageX: 0, pageY: 0 };
      function v(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "page",
          n = t.touches[0] || t.changedTouches[0],
          i = n || c;
        return { x: i[e + "X"], y: i[e + "Y"] };
      }
      function d(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { x: t[e + "X"], y: t[e + "Y"] };
      }
      function f(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: u(t) ? v(t, e) : d(t, e) };
      }
      var h = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = function (e) {
              return t(e, f(e));
            };
          return e ? l(n) : n;
        },
        p = n(2968),
        m = function (t) {
          return 1e3 * t;
        };
      function g(t, e, n) {
        var i =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          t.addEventListener(e, n, i),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      function y(t, e, n, i) {
        (0, r.useEffect)(
          function () {
            var r = t.current;
            if (n && r) return g(r, e, n, i);
          },
          [t, e, n, i]
        );
      }
      var x = n(6219),
        b = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        P = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function k(t) {
        return x.j && null === window.onpointerdown
          ? t
          : x.j && null === window.ontouchstart
          ? P[t]
          : x.j && null === window.onmousedown
          ? b[t]
          : t;
      }
      function E(t, e, n, i) {
        return g(t, k(e), h(n, "pointerdown" === e), i);
      }
      function A(t, e, n, i) {
        return y(t, k(e), n && h(n, "pointerdown" === e), i);
      }
      var T = function (t) {
          return t.hasOwnProperty("x") && t.hasOwnProperty("y");
        },
        w = function (t) {
          return T(t) && t.hasOwnProperty("z");
        },
        S = function (t) {
          return "number" === typeof t;
        },
        V = function (t, e) {
          return Math.abs(t - e);
        };
      function C(t, e) {
        if (S(t) && S(e)) return V(t, e);
        if (T(t) && T(e)) {
          var n = V(t.x, e.x),
            i = V(t.y, e.y),
            r = w(t) && w(e) ? V(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2) + Math.pow(r, 2));
        }
      }
      var Z = function (t, e) {
          return function (n) {
            return e(t(n));
          };
        },
        M = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return e.reduce(Z);
        },
        R = (function () {
          function t(e, n) {
            var r = this,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              l = a.transformPagePoint;
            if (
              ((0, o.Z)(this, t),
              (this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var t = j(r.lastMoveEventInfo, r.history),
                    e = null !== r.startEvent,
                    n = C(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var o = t.point,
                      a = (0, p.$B)().timestamp;
                    r.history.push(
                      (0, i.Z)((0, i.Z)({}, o), {}, { timestamp: a })
                    );
                    var s = r.handlers,
                      u = s.onStart,
                      l = s.onMove;
                    e ||
                      (u && u(r.lastMoveEvent, t),
                      (r.startEvent = r.lastMoveEvent)),
                      l && l(r.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                (r.lastMoveEvent = t),
                  (r.lastMoveEventInfo = D(e, r.transformPagePoint)),
                  s(t) && 0 === t.buttons
                    ? r.handlePointerUp(t, e)
                    : p.ZP.update(r.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                r.end();
                var n = r.handlers,
                  i = n.onEnd,
                  o = n.onSessionEnd,
                  a = j(D(e, r.transformPagePoint), r.history);
                r.startEvent && i && i(t, a), o && o(t, a);
              }),
              !(u(e) && e.touches.length > 1))
            ) {
              (this.handlers = n), (this.transformPagePoint = l);
              var c = f(e),
                v = D(c, this.transformPagePoint),
                d = v.point,
                h = (0, p.$B)(),
                m = h.timestamp;
              this.history = [(0, i.Z)((0, i.Z)({}, d), {}, { timestamp: m })];
              var g = n.onSessionStart;
              g && g(e, j(v, this.history)),
                (this.removeListeners = M(
                  E(window, "pointermove", this.handlePointerMove),
                  E(window, "pointerup", this.handlePointerUp),
                  E(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (0, a.Z)(t, [
              {
                key: "updateHandlers",
                value: function (t) {
                  this.handlers = t;
                },
              },
              {
                key: "end",
                value: function () {
                  this.removeListeners && this.removeListeners(),
                    p.qY.update(this.updatePoint);
                },
              },
            ]),
            t
          );
        })();
      function D(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function L(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function j(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: L(n, F(e)),
          offset: L(n, O(e)),
          velocity: I(e, 0.1),
        };
      }
      function O(t) {
        return t[0];
      }
      function F(t) {
        return t[t.length - 1];
      }
      function I(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, i = null, r = F(t);
          n >= 0 && ((i = t[n]), !(r.timestamp - i.timestamp > m(e)));

        )
          n--;
        if (!i) return { x: 0, y: 0 };
        var o = (r.timestamp - i.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (r.x - i.x) / o, y: (r.y - i.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function U(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var B = U("dragHorizontal"),
        N = U("dragVertical");
      function z(t) {
        var e = !1;
        if ("y" === t) e = N();
        else if ("x" === t) e = B();
        else {
          var n = B(),
            i = N();
          n && i
            ? (e = function () {
                n(), i();
              })
            : (n && n(), i && i());
        }
        return e;
      }
      function H() {
        var t = z(!0);
        return !t || (t(), !1);
      }
      var G = n(8753),
        Y = function (t, e, n) {
          return -n * t + n * e + t;
        },
        q = function (t, e, n) {
          var i = e - t;
          return 0 === i ? 1 : (n - t) / i;
        },
        W = function (t, e, n) {
          return Math.min(Math.max(n, t), e);
        };
      function X(t) {
        return t.max - t.min;
      }
      function $(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return C(t, e) < n;
      }
      function K(t, e, n) {
        var i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (t.origin = i),
          (t.originPoint = Y(e.min, e.max, t.origin)),
          (t.scale = X(n) / X(e)),
          ($(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = Y(n.min, n.max, t.origin) - t.originPoint),
          ($(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function Q(t, e, n, i) {
        K(t.x, e.x, n.x, null === i || void 0 === i ? void 0 : i.originX),
          K(t.y, e.y, n.y, null === i || void 0 === i ? void 0 : i.originY);
      }
      function _(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + X(e));
      }
      function J(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + X(e));
      }
      function tt(t, e, n) {
        J(t.x, e.x, n.x), J(t.y, e.y, n.y);
      }
      function et(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function nt(t, e) {
        var n = e.min - t.min,
          i = e.max - t.max;
        if (e.max - e.min < t.max - t.min) {
          var r = [i, n];
          (n = r[0]), (i = r[1]);
        }
        return { min: n, max: i };
      }
      var it,
        rt = 0.35;
      function ot(t, e, n) {
        return { min: at(t, e), max: at(t, n) };
      }
      function at(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(it || (it = {}));
      function st(t) {
        return [t("x"), t("y")];
      }
      function ut(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      var lt = n(885);
      function ct(t) {
        return void 0 === t || 1 === t;
      }
      function vt(t) {
        var e = t.scale,
          n = t.scaleX,
          i = t.scaleY;
        return !ct(e) || !ct(n) || !ct(i);
      }
      function dt(t) {
        return (
          vt(t) ||
          ft(t.x) ||
          ft(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function ft(t) {
        return t && "0%" !== t;
      }
      function ht(t, e, n) {
        return n + e * (t - n);
      }
      function pt(t, e, n, i, r) {
        return void 0 !== r && (t = ht(t, r, i)), ht(t, n, i) + e;
      }
      function mt(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          i = arguments.length > 3 ? arguments[3] : void 0,
          r = arguments.length > 4 ? arguments[4] : void 0;
        (t.min = pt(t.min, e, n, i, r)), (t.max = pt(t.max, e, n, i, r));
      }
      function gt(t, e) {
        var n = e.x,
          i = e.y;
        mt(t.x, n.translate, n.scale, n.originPoint),
          mt(t.y, i.translate, i.scale, i.originPoint);
      }
      function yt(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function xt(t, e, n) {
        var i = (0, lt.Z)(n, 3),
          r = i[0],
          o = i[1],
          a = i[2],
          s = void 0 !== e[a] ? e[a] : 0.5,
          u = Y(t.min, t.max, s);
        mt(t, e[r], e[o], u, e.scale);
      }
      var bt = ["x", "scaleX", "originX"],
        Pt = ["y", "scaleY", "originY"];
      function kt(t, e) {
        xt(t.x, e, bt), xt(t.y, e, Pt);
      }
      function Et(t, e) {
        return ut(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var At = n(2982),
        Tt = n(5987);
      function wt(t, e) {
        var n = {};
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) &&
            e.indexOf(i) < 0 &&
            (n[i] = t[i]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
            e.indexOf(i[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
              (n[i[r]] = t[i[r]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      var St = 0.001;
      function Vt(t) {
        var e,
          n,
          i = t.duration,
          r = void 0 === i ? 800 : i,
          o = t.bounce,
          a = void 0 === o ? 0.25 : o,
          s = t.velocity,
          u = void 0 === s ? 0 : s,
          l = t.mass,
          c = void 0 === l ? 1 : l,
          v = 1 - a;
        (v = W(0.05, 1, v)),
          (r = W(0.01, 10, r / 1e3)),
          v < 1
            ? ((e = function (t) {
                var e = t * v,
                  n = e * r,
                  i = e - u,
                  o = Ct(t, v),
                  a = Math.exp(-n);
                return St - (i / o) * a;
              }),
              (n = function (t) {
                var n = t * v * r,
                  i = n * u + u,
                  o = Math.pow(v, 2) * Math.pow(t, 2) * r,
                  a = Math.exp(-n),
                  s = Ct(Math.pow(t, 2), v);
                return ((-e(t) + St > 0 ? -1 : 1) * ((i - o) * a)) / s;
              }))
            : ((e = function (t) {
                return Math.exp(-t * r) * ((t - u) * r + 1) - 0.001;
              }),
              (n = function (t) {
                return Math.exp(-t * r) * (r * r * (u - t));
              }));
        var d = (function (t, e, n) {
          for (var i = n, r = 1; r < 12; r++) i -= t(i) / e(i);
          return i;
        })(e, n, 5 / r);
        if (((r *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: r };
        var f = Math.pow(d, 2) * c;
        return { stiffness: f, damping: 2 * v * Math.sqrt(c * f), duration: r };
      }
      function Ct(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      var Zt = ["duration", "bounce"],
        Mt = ["stiffness", "damping", "mass"];
      function Rt(t, e) {
        return e.some(function (e) {
          return void 0 !== t[e];
        });
      }
      function Dt(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          i = t.to,
          r = void 0 === i ? 1 : i,
          o = t.restSpeed,
          a = void 0 === o ? 2 : o,
          s = t.restDelta,
          u = wt(t, ["from", "to", "restSpeed", "restDelta"]),
          l = { done: !1, value: n },
          c = (function (t) {
            var e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!Rt(t, Mt) && Rt(t, Zt)) {
              var n = Vt(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(u),
          v = c.stiffness,
          d = c.damping,
          f = c.mass,
          h = c.velocity,
          p = c.duration,
          m = c.isResolvedFromDuration,
          g = Lt,
          y = Lt;
        function x() {
          var t = h ? -h / 1e3 : 0,
            e = r - n,
            i = d / (2 * Math.sqrt(v * f)),
            o = Math.sqrt(v / f) / 1e3;
          if (
            (void 0 === s && (s = Math.min(Math.abs(r - n) / 100, 0.4)), i < 1)
          ) {
            var a = Ct(o, i);
            (g = function (n) {
              var s = Math.exp(-i * o * n);
              return (
                r -
                s *
                  (((t + i * o * e) / a) * Math.sin(a * n) +
                    e * Math.cos(a * n))
              );
            }),
              (y = function (n) {
                var r = Math.exp(-i * o * n);
                return (
                  i *
                    o *
                    r *
                    ((Math.sin(a * n) * (t + i * o * e)) / a +
                      e * Math.cos(a * n)) -
                  r *
                    (Math.cos(a * n) * (t + i * o * e) -
                      a * e * Math.sin(a * n))
                );
              });
          } else if (1 === i)
            g = function (n) {
              return r - Math.exp(-o * n) * (e + (t + o * e) * n);
            };
          else {
            var u = o * Math.sqrt(i * i - 1);
            g = function (n) {
              var a = Math.exp(-i * o * n),
                s = Math.min(u * n, 300);
              return (
                r -
                (a * ((t + i * o * e) * Math.sinh(s) + u * e * Math.cosh(s))) /
                  u
              );
            };
          }
        }
        return (
          x(),
          {
            next: function (t) {
              var e = g(t);
              if (m) l.done = t >= p;
              else {
                var n = 1e3 * y(t),
                  i = Math.abs(n) <= a,
                  o = Math.abs(r - e) <= s;
                l.done = i && o;
              }
              return (l.value = l.done ? r : e), l;
            },
            flipTarget: function () {
              h = -h;
              var t = [r, n];
              (n = t[0]), (r = t[1]), x();
            },
          }
        );
      }
      Dt.needsInterpolation = function (t, e) {
        return "string" === typeof t || "string" === typeof e;
      };
      var Lt = function (t) {
          return 0;
        },
        jt = n(97),
        Ot = n(9983),
        Ft = n(4942),
        It = function (t, e) {
          return function (n) {
            return Boolean(
              ((0, Ot.HD)(n) && Ot.mj.test(n) && n.startsWith(t)) ||
                (e && Object.prototype.hasOwnProperty.call(n, e))
            );
          };
        },
        Ut = function (t, e, n) {
          return function (i) {
            var r;
            if (!(0, Ot.HD)(i)) return i;
            var o = i.match(Ot.KP),
              a = (0, lt.Z)(o, 4),
              s = a[0],
              u = a[1],
              l = a[2],
              c = a[3];
            return (
              (r = {}),
              (0, Ft.Z)(r, t, parseFloat(s)),
              (0, Ft.Z)(r, e, parseFloat(u)),
              (0, Ft.Z)(r, n, parseFloat(l)),
              (0, Ft.Z)(r, "alpha", void 0 !== c ? parseFloat(c) : 1),
              r
            );
          };
        },
        Bt = (0, Ot.uZ)(0, 255),
        Nt = Object.assign(Object.assign({}, jt.Rx), {
          transform: function (t) {
            return Math.round(Bt(t));
          },
        }),
        zt = {
          test: It("rgb", "red"),
          parse: Ut("red", "green", "blue"),
          transform: function (t) {
            var e = t.red,
              n = t.green,
              i = t.blue,
              r = t.alpha,
              o = void 0 === r ? 1 : r;
            return (
              "rgba(" +
              Nt.transform(e) +
              ", " +
              Nt.transform(n) +
              ", " +
              Nt.transform(i) +
              ", " +
              (0, Ot.Nw)(jt.Fq.transform(o)) +
              ")"
            );
          },
        };
      var Ht = {
          test: It("#"),
          parse: function (t) {
            var e = "",
              n = "",
              i = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (i = t.substr(5, 2)),
                  (r = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (i = t.substr(3, 1)),
                  (r = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (i += i),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(i, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: zt.transform,
        },
        Gt = n(4468),
        Yt = {
          test: It("hsl", "hue"),
          parse: Ut("hue", "saturation", "lightness"),
          transform: function (t) {
            var e = t.hue,
              n = t.saturation,
              i = t.lightness,
              r = t.alpha,
              o = void 0 === r ? 1 : r;
            return (
              "hsla(" +
              Math.round(e) +
              ", " +
              Gt.aQ.transform((0, Ot.Nw)(n)) +
              ", " +
              Gt.aQ.transform((0, Ot.Nw)(i)) +
              ", " +
              (0, Ot.Nw)(jt.Fq.transform(o)) +
              ")"
            );
          },
        };
      function qt(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function Wt(t) {
        var e = t.hue,
          n = t.saturation,
          i = t.lightness,
          r = t.alpha;
        (e /= 360), (i /= 100);
        var o = 0,
          a = 0,
          s = 0;
        if ((n /= 100)) {
          var u = i < 0.5 ? i * (1 + n) : i + n - i * n,
            l = 2 * i - u;
          (o = qt(l, u, e + 1 / 3)),
            (a = qt(l, u, e)),
            (s = qt(l, u, e - 1 / 3));
        } else o = a = s = i;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * a),
          blue: Math.round(255 * s),
          alpha: r,
        };
      }
      var Xt = function (t, e, n) {
          var i = t * t,
            r = e * e;
          return Math.sqrt(Math.max(0, n * (r - i) + i));
        },
        $t = [Ht, zt, Yt],
        Kt = function (t) {
          return $t.find(function (e) {
            return e.test(t);
          });
        },
        Qt = function (t) {
          return "'".concat(
            t,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        _t = function (t, e) {
          var n = Kt(t),
            i = Kt(e);
          Qt(t), Qt(e);
          var r = n.parse(t),
            o = i.parse(e);
          n === Yt && ((r = Wt(r)), (n = zt)),
            i === Yt && ((o = Wt(o)), (i = zt));
          var a = Object.assign({}, r);
          return function (t) {
            for (var e in a) "alpha" !== e && (a[e] = Xt(r[e], o[e], t));
            return (a.alpha = Y(r.alpha, o.alpha, t)), n.transform(a);
          };
        },
        Jt = {
          test: function (t) {
            return zt.test(t) || Ht.test(t) || Yt.test(t);
          },
          parse: function (t) {
            return zt.test(t)
              ? zt.parse(t)
              : Yt.test(t)
              ? Yt.parse(t)
              : Ht.parse(t);
          },
          transform: function (t) {
            return (0, Ot.HD)(t)
              ? t
              : t.hasOwnProperty("red")
              ? zt.transform(t)
              : Yt.transform(t);
          },
        },
        te = "${c}",
        ee = "${n}";
      function ne(t) {
        "number" === typeof t && (t = "".concat(t));
        var e = [],
          n = 0,
          i = t.match(Ot.dA);
        i &&
          ((n = i.length),
          (t = t.replace(Ot.dA, te)),
          e.push.apply(e, (0, At.Z)(i.map(Jt.parse))));
        var r = t.match(Ot.KP);
        return (
          r &&
            ((t = t.replace(Ot.KP, ee)),
            e.push.apply(e, (0, At.Z)(r.map(jt.Rx.parse)))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function ie(t) {
        return ne(t).values;
      }
      function re(t) {
        var e = ne(t),
          n = e.values,
          i = e.numColors,
          r = e.tokenised,
          o = n.length;
        return function (t) {
          for (var e = r, n = 0; n < o; n++)
            e = e.replace(
              n < i ? te : ee,
              n < i ? Jt.transform(t[n]) : (0, Ot.Nw)(t[n])
            );
          return e;
        };
      }
      var oe = function (t) {
        return "number" === typeof t ? 0 : t;
      };
      var ae = {
        test: function (t) {
          var e, n, i, r;
          return (
            isNaN(t) &&
            (0, Ot.HD)(t) &&
            (null !==
              (n =
                null === (e = t.match(Ot.KP)) || void 0 === e
                  ? void 0
                  : e.length) && void 0 !== n
              ? n
              : 0) +
              (null !==
                (r =
                  null === (i = t.match(Ot.dA)) || void 0 === i
                    ? void 0
                    : i.length) && void 0 !== r
                ? r
                : 0) >
              0
          );
        },
        parse: ie,
        createTransformer: re,
        getAnimatableNone: function (t) {
          var e = ie(t);
          return re(t)(e.map(oe));
        },
      };
      function se(t, e) {
        return S(t)
          ? function (n) {
              return Y(t, e, n);
            }
          : Jt.test(t)
          ? _t(t, e)
          : ve(t, e);
      }
      var ue = function (t, e) {
          var n = (0, At.Z)(t),
            i = n.length,
            r = t.map(function (t, n) {
              return se(t, e[n]);
            });
          return function (t) {
            for (var e = 0; e < i; e++) n[e] = r[e](t);
            return n;
          };
        },
        le = function (t, e) {
          var n = Object.assign(Object.assign({}, t), e),
            i = {};
          for (var r in n)
            void 0 !== t[r] && void 0 !== e[r] && (i[r] = se(t[r], e[r]));
          return function (t) {
            for (var e in i) n[e] = i[e](t);
            return n;
          };
        };
      function ce(t) {
        for (
          var e = ae.parse(t), n = e.length, i = 0, r = 0, o = 0, a = 0;
          a < n;
          a++
        )
          i || "number" === typeof e[a] ? i++ : void 0 !== e[a].hue ? o++ : r++;
        return { parsed: e, numNumbers: i, numRGB: r, numHSL: o };
      }
      var ve = function (t, e) {
          var n = ae.createTransformer(e),
            i = ce(t),
            r = ce(e);
          return i.numHSL === r.numHSL &&
            i.numRGB === r.numRGB &&
            i.numNumbers >= r.numNumbers
            ? M(ue(i.parsed, r.parsed), n)
            : ("Complex values '"
                .concat(t, "' and '")
                .concat(
                  e,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return "".concat(n > 0 ? e : t);
              });
        },
        de = function (t, e) {
          return function (n) {
            return Y(t, e, n);
          };
        };
      function fe(t, e, n) {
        for (
          var i,
            r = [],
            o =
              n ||
              ("number" === typeof (i = t[0])
                ? de
                : "string" === typeof i
                ? Jt.test(i)
                  ? _t
                  : ve
                : Array.isArray(i)
                ? ue
                : "object" === typeof i
                ? le
                : void 0),
            a = t.length - 1,
            s = 0;
          s < a;
          s++
        ) {
          var u = o(t[s], t[s + 1]);
          if (e) {
            var l = Array.isArray(e) ? e[s] : e;
            u = M(l, u);
          }
          r.push(u);
        }
        return r;
      }
      function he(t, e) {
        var n = (0, lt.Z)(t, 2),
          i = n[0],
          r = n[1],
          o = (0, lt.Z)(e, 1)[0];
        return function (t) {
          return o(q(i, r, t));
        };
      }
      function pe(t, e) {
        var n = t.length,
          i = n - 1;
        return function (r) {
          var o = 0,
            a = !1;
          if (
            (r <= t[0] ? (a = !0) : r >= t[i] && ((o = i - 1), (a = !0)), !a)
          ) {
            for (var s = 1; s < n && !(t[s] > r || s === i); s++);
            o = s - 1;
          }
          var u = q(t[o], t[o + 1], r);
          return e[o](u);
        };
      }
      function me(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = n.clamp,
          r = void 0 === i || i,
          o = n.ease,
          a = n.mixer,
          s = t.length;
        e.length,
          !o || !Array.isArray(o) || o.length,
          t[0] > t[s - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        var u = fe(e, o, a),
          l = 2 === s ? he(t, u) : pe(t, u);
        return r
          ? function (e) {
              return l(W(t[0], t[s - 1], e));
            }
          : l;
      }
      var ge,
        ye = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        xe = function (t) {
          return function (e) {
            return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
          };
        },
        be = function (t) {
          return function (e) {
            return e * e * ((t + 1) * e - t);
          };
        },
        Pe = function (t) {
          return t;
        },
        ke =
          ((ge = 2),
          function (t) {
            return Math.pow(t, ge);
          }),
        Ee = ye(ke),
        Ae = xe(ke),
        Te = function (t) {
          return 1 - Math.sin(Math.acos(t));
        },
        we = ye(Te),
        Se = xe(we),
        Ve = be(1.525),
        Ce = ye(Ve),
        Ze = xe(Ve),
        Me = (function (t) {
          var e = be(t);
          return function (t) {
            return (t *= 2) < 1
              ? 0.5 * e(t)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
          };
        })(1.525),
        Re = function (t) {
          if (1 === t || 0 === t) return t;
          var e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        De = ye(Re);
      function Le(t, e) {
        return t
          .map(function () {
            return e || Ae;
          })
          .splice(0, t.length - 1);
      }
      function je(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          i = t.to,
          r = void 0 === i ? 1 : i,
          o = t.ease,
          a = t.offset,
          s = t.duration,
          u = void 0 === s ? 300 : s,
          l = { done: !1, value: n },
          c = Array.isArray(r) ? r : [n, r],
          v = (function (t, e) {
            return t.map(function (t) {
              return t * e;
            });
          })(
            a && a.length === c.length
              ? a
              : (function (t) {
                  var e = t.length;
                  return t.map(function (t, n) {
                    return 0 !== n ? n / (e - 1) : 0;
                  });
                })(c),
            u
          );
        function d() {
          return me(v, c, { ease: Array.isArray(o) ? o : Le(c, o) });
        }
        var f = d();
        return {
          next: function (t) {
            return (l.value = f(t)), (l.done = t >= u), l;
          },
          flipTarget: function () {
            c.reverse(), (f = d());
          },
        };
      }
      var Oe = {
        keyframes: je,
        spring: Dt,
        decay: function (t) {
          var e = t.velocity,
            n = void 0 === e ? 0 : e,
            i = t.from,
            r = void 0 === i ? 0 : i,
            o = t.power,
            a = void 0 === o ? 0.8 : o,
            s = t.timeConstant,
            u = void 0 === s ? 350 : s,
            l = t.restDelta,
            c = void 0 === l ? 0.5 : l,
            v = t.modifyTarget,
            d = { done: !1, value: r },
            f = a * n,
            h = r + f,
            p = void 0 === v ? h : v(h);
          return (
            p !== h && (f = p - r),
            {
              next: function (t) {
                var e = -f * Math.exp(-t / u);
                return (
                  (d.done = !(e > c || e < -c)),
                  (d.value = d.done ? p : p + e),
                  d
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      function Fe(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return t - e - n;
      }
      var Ie = function (t) {
        var e = function (e) {
          var n = e.delta;
          return t(n);
        };
        return {
          start: function () {
            return p.ZP.update(e, !0);
          },
          stop: function () {
            return p.qY.update(e);
          },
        };
      };
      function Ue(t) {
        var e,
          n,
          i,
          r,
          o,
          a = t.from,
          s = t.autoplay,
          u = void 0 === s || s,
          l = t.driver,
          c = void 0 === l ? Ie : l,
          v = t.elapsed,
          d = void 0 === v ? 0 : v,
          f = t.repeat,
          h = void 0 === f ? 0 : f,
          p = t.repeatType,
          m = void 0 === p ? "loop" : p,
          g = t.repeatDelay,
          y = void 0 === g ? 0 : g,
          x = t.onPlay,
          b = t.onStop,
          P = t.onComplete,
          k = t.onRepeat,
          E = t.onUpdate,
          A = wt(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          T = A.to,
          w = 0,
          S = A.duration,
          V = !1,
          C = !0,
          Z = (function (t) {
            if (Array.isArray(t.to)) return je;
            if (Oe[t.type]) return Oe[t.type];
            var e = new Set(Object.keys(t));
            return e.has("ease") ||
              (e.has("duration") && !e.has("dampingRatio"))
              ? je
              : e.has("dampingRatio") ||
                e.has("stiffness") ||
                e.has("mass") ||
                e.has("damping") ||
                e.has("restSpeed") ||
                e.has("restDelta")
              ? Dt
              : je;
          })(A);
        (null === (n = (e = Z).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, a, T)) &&
          ((o = me([0, 100], [a, T], { clamp: !1 })), (a = 0), (T = 100));
        var M = Z(Object.assign(Object.assign({}, A), { from: a, to: T }));
        function R() {
          w++,
            "reverse" === m
              ? (d = (function (t, e) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  return arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                    ? e - (t - e) + n
                    : Fe(e + -t, e, n);
                })(d, S, y, (C = w % 2 === 0)))
              : ((d = Fe(d, S, y)), "mirror" === m && M.flipTarget()),
            (V = !1),
            k && k();
        }
        function D(t) {
          if ((C || (t = -t), (d += t), !V)) {
            var e = M.next(Math.max(0, d));
            (r = e.value), o && (r = o(r)), (V = C ? e.done : d <= 0);
          }
          null === E || void 0 === E || E(r),
            V &&
              (0 === w && ((null !== S && void 0 !== S) || (S = d)),
              w < h
                ? (function (t, e, n, i) {
                    return i ? t >= e + n : t <= -n;
                  })(d, S, y, C) && R()
                : (i.stop(), P && P()));
        }
        return (
          u && (null === x || void 0 === x || x(), (i = c(D)).start()),
          {
            stop: function () {
              null === b || void 0 === b || b(), i.stop();
            },
          }
        );
      }
      function Be(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      var Ne = function (t, e) {
          return 1 - 3 * e + 3 * t;
        },
        ze = function (t, e) {
          return 3 * e - 6 * t;
        },
        He = function (t) {
          return 3 * t;
        },
        Ge = function (t, e, n) {
          return ((Ne(e, n) * t + ze(e, n)) * t + He(e)) * t;
        },
        Ye = function (t, e, n) {
          return 3 * Ne(e, n) * t * t + 2 * ze(e, n) * t + He(e);
        };
      var qe = 0.1;
      function We(t, e, n, i) {
        if (t === e && n === i) return Pe;
        for (var r = new Float32Array(11), o = 0; o < 11; ++o)
          r[o] = Ge(o * qe, t, n);
        function a(e) {
          for (var i = 0, o = 1; 10 !== o && r[o] <= e; ++o) i += qe;
          --o;
          var a = i + ((e - r[o]) / (r[o + 1] - r[o])) * qe,
            s = Ye(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, i) {
                for (var r = 0; r < 8; ++r) {
                  var o = Ye(e, n, i);
                  if (0 === o) return e;
                  e -= (Ge(e, n, i) - t) / o;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, i, r) {
                var o,
                  a,
                  s = 0;
                do {
                  (o = Ge((a = e + (n - e) / 2), i, r) - t) > 0
                    ? (n = a)
                    : (e = a);
                } while (Math.abs(o) > 1e-7 && ++s < 10);
                return a;
              })(e, i, i + qe, t, n);
        }
        return function (t) {
          return 0 === t || 1 === t ? t : Ge(a(t), e, i);
        };
      }
      var Xe = {
          linear: Pe,
          easeIn: ke,
          easeInOut: Ae,
          easeOut: Ee,
          circIn: Te,
          circInOut: Se,
          circOut: we,
          backIn: Ve,
          backInOut: Ze,
          backOut: Ce,
          anticipate: Me,
          bounceIn: De,
          bounceInOut: function (t) {
            return t < 0.5
              ? 0.5 * (1 - Re(1 - 2 * t))
              : 0.5 * Re(2 * t - 1) + 0.5;
          },
          bounceOut: Re,
        },
        $e = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = (0, lt.Z)(t, 4);
            return We(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), Xe[t])
            : t;
        },
        Ke = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !ae.test(e) || e.startsWith("url(")))
          );
        },
        Qe = n(1112),
        _e = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Je = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        tn = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        en = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        nn = {
          x: _e,
          y: _e,
          z: _e,
          rotate: _e,
          rotateX: _e,
          rotateY: _e,
          rotateZ: _e,
          scaleX: Je,
          scaleY: Je,
          scale: Je,
          opacity: tn,
          backgroundColor: tn,
          color: tn,
          default: Je,
        },
        rn = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function on(t) {
        var e = t.slice(0, -1).split("("),
          n = (0, lt.Z)(e, 2),
          i = n[0],
          r = n[1];
        if ("drop-shadow" === i) return t;
        var o = r.match(Ot.KP) || [],
          a = (0, lt.Z)(o, 1)[0];
        if (!a) return t;
        var s = r.replace(a, ""),
          u = rn.has(i) ? 1 : 0;
        return a !== r && (u *= 100), i + "(" + u + s + ")";
      }
      var an = /([a-z-]*)\(.*?\)/g,
        sn = Object.assign(Object.assign({}, ae), {
          getAnimatableNone: function (t) {
            var e = t.match(an);
            return e ? e.map(on).join(" ") : t;
          },
        }),
        un = n(7212),
        ln = (0, i.Z)(
          (0, i.Z)({}, un.j),
          {},
          {
            color: Jt,
            backgroundColor: Jt,
            outlineColor: Jt,
            fill: Jt,
            stroke: Jt,
            borderColor: Jt,
            borderTopColor: Jt,
            borderRightColor: Jt,
            borderBottomColor: Jt,
            borderLeftColor: Jt,
            filter: sn,
            WebkitFilter: sn,
          }
        ),
        cn = function (t) {
          return ln[t];
        };
      function vn(t, e) {
        var n,
          i = cn(t);
        return (
          i !== sn && (i = ae),
          null === (n = i.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(i, e)
        );
      }
      var dn = !1,
        fn = n(1471),
        hn = [
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
        ],
        pn = ["ease", "times", "yoyo", "flip", "loop"];
      function mn(t) {
        var e = t.ease,
          n = t.times,
          r = t.yoyo,
          o = t.flip,
          a = t.loop,
          s = (0, Tt.Z)(t, pn),
          u = (0, i.Z)({}, s);
        return (
          n && (u.offset = n),
          s.duration && (u.duration = m(s.duration)),
          s.repeatDelay && (u.repeatDelay = m(s.repeatDelay)),
          e &&
            (u.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map($e)
              : $e(e)),
          "tween" === s.type && (u.type = "keyframes"),
          (r || a || o) &&
            (!0,
            r
              ? (u.repeatType = "reverse")
              : a
              ? (u.repeatType = "loop")
              : o && (u.repeatType = "mirror"),
            (u.repeat = a || r || o || s.repeat)),
          "spring" !== s.type && (u.type = "keyframes"),
          u
        );
      }
      function gn(t, e) {
        var n, i;
        return null !==
          (i =
            null !== (n = (kn(t, e) || {}).delay) && void 0 !== n
              ? n
              : t.delay) && void 0 !== i
          ? i
          : 0;
      }
      function yn(t, e, n) {
        return (
          Array.isArray(e.to) && void 0 === t.duration && (t.duration = 0.8),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, At.Z)(t.to)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, Tt.Z)(t, hn);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, i.Z)(
              (0, i.Z)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = (0, Qe.C)(e) ? en : nn[t] || nn.default),
                  (0, i.Z)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, i.Z)((0, i.Z)({}, e), mn(t))
        );
      }
      function xn(t, e, n, r, o) {
        var a = kn(r, t) || {},
          s = void 0 !== a.from ? a.from : e.get(),
          u = Ke(t, n);
        "none" === s && u && "string" === typeof n
          ? (s = vn(t, n))
          : bn(s) && "string" === typeof n
          ? (s = Pn(n))
          : !Array.isArray(n) && bn(n) && "string" === typeof s && (n = Pn(s));
        var l = Ke(t, s);
        return (
          "You are trying to animate "
            .concat(t, ' from "')
            .concat(s, '" to "')
            .concat(n, '". ')
            .concat(
              s,
              " is not an animatable value - to enable this animation set "
            )
            .concat(s, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          l && u && !1 !== a.type
            ? function () {
                var r = {
                  from: s,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === a.type || "decay" === a.type
                  ? (function (t) {
                      var e,
                        n = t.from,
                        i = void 0 === n ? 0 : n,
                        r = t.velocity,
                        o = void 0 === r ? 0 : r,
                        a = t.min,
                        s = t.max,
                        u = t.power,
                        l = void 0 === u ? 0.8 : u,
                        c = t.timeConstant,
                        v = void 0 === c ? 750 : c,
                        d = t.bounceStiffness,
                        f = void 0 === d ? 500 : d,
                        h = t.bounceDamping,
                        m = void 0 === h ? 10 : h,
                        g = t.restDelta,
                        y = void 0 === g ? 1 : g,
                        x = t.modifyTarget,
                        b = t.driver,
                        P = t.onUpdate,
                        k = t.onComplete,
                        E = t.onStop;
                      function A(t) {
                        return (
                          (void 0 !== a && t < a) || (void 0 !== s && t > s)
                        );
                      }
                      function T(t) {
                        return void 0 === a
                          ? s
                          : void 0 === s || Math.abs(a - t) < Math.abs(s - t)
                          ? a
                          : s;
                      }
                      function w(t) {
                        null === e || void 0 === e || e.stop(),
                          (e = Ue(
                            Object.assign(Object.assign({}, t), {
                              driver: b,
                              onUpdate: function (e) {
                                var n;
                                null === P || void 0 === P || P(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: k,
                              onStop: E,
                            })
                          ));
                      }
                      function S(t) {
                        w(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: f,
                              damping: m,
                              restDelta: y,
                            },
                            t
                          )
                        );
                      }
                      if (A(i)) S({ from: i, velocity: o, to: T(i) });
                      else {
                        var V = l * o + i;
                        "undefined" !== typeof x && (V = x(V));
                        var C,
                          Z,
                          M = T(V),
                          R = M === a ? -1 : 1;
                        w({
                          type: "decay",
                          from: i,
                          velocity: o,
                          timeConstant: v,
                          power: l,
                          restDelta: y,
                          modifyTarget: x,
                          onUpdate: A(V)
                            ? function (t) {
                                (C = Z),
                                  (Z = t),
                                  (o = Be(t - C, (0, p.$B)().delta)),
                                  ((1 === R && t > M) || (-1 === R && t < M)) &&
                                    S({ from: t, to: M, velocity: o });
                              }
                            : void 0,
                        });
                      }
                      return {
                        stop: function () {
                          return null === e || void 0 === e ? void 0 : e.stop();
                        },
                      };
                    })((0, i.Z)((0, i.Z)({}, r), a))
                  : Ue(
                      (0, i.Z)(
                        (0, i.Z)({}, yn(a, r, t)),
                        {},
                        {
                          onUpdate: function (t) {
                            r.onUpdate(t), a.onUpdate && a.onUpdate(t);
                          },
                          onComplete: function () {
                            r.onComplete(), a.onComplete && a.onComplete();
                          },
                        }
                      )
                    );
              }
            : function () {
                var t = (0, fn.Y)(n);
                return (
                  e.set(t),
                  o(),
                  a.onUpdate && a.onUpdate(t),
                  a.onComplete && a.onComplete(),
                  { stop: function () {} }
                );
              }
        );
      }
      function bn(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function Pn(t) {
        return "number" === typeof t ? 0 : vn("", t);
      }
      function kn(t, e) {
        return t[e] || t.default || t;
      }
      function En(t, e, n) {
        var i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          dn && (i = { type: !1 }),
          e.start(function (r) {
            var o,
              a,
              s = xn(t, e, n, i, r),
              u = gn(i, t),
              l = function () {
                return (a = s());
              };
            return (
              u ? (o = window.setTimeout(l, m(u))) : l(),
              function () {
                clearTimeout(o), a && a.stop();
              }
            );
          })
        );
      }
      var An = new WeakMap(),
        Tn = (function () {
          function t(e) {
            (0, o.Z)(this, t),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = e);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "start",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = n.snapToCursor,
                    r = void 0 !== i && i;
                  if (!1 !== this.visualElement.isPresent) {
                    var o = function (t) {
                        e.stopAnimation(),
                          r && e.snapToCursor(f(t, "page").point);
                      },
                      a = function (t, n) {
                        var i,
                          r = e.getProps(),
                          o = r.drag,
                          a = r.dragPropagation,
                          s = r.onDragStart;
                        (!o ||
                          a ||
                          (e.openGlobalLock && e.openGlobalLock(),
                          (e.openGlobalLock = z(o)),
                          e.openGlobalLock)) &&
                          ((e.isDragging = !0),
                          (e.currentDirection = null),
                          e.resolveConstraints(),
                          e.visualElement.projection &&
                            ((e.visualElement.projection.isAnimationBlocked =
                              !0),
                            (e.visualElement.projection.target = void 0)),
                          st(function (t) {
                            var n,
                              i,
                              r = e.getAxisMotionValue(t).get() || 0;
                            if (Gt.aQ.test(r)) {
                              var o =
                                null ===
                                  (i =
                                    null === (n = e.visualElement.projection) ||
                                    void 0 === n
                                      ? void 0
                                      : n.layout) || void 0 === i
                                  ? void 0
                                  : i.actual[t];
                              if (o) r = X(o) * (parseFloat(r) / 100);
                            }
                            e.originPoint[t] = r;
                          }),
                          null === s || void 0 === s || s(t, n),
                          null === (i = e.visualElement.animationState) ||
                            void 0 === i ||
                            i.setActive(it.Drag, !0));
                      },
                      s = function (t, n) {
                        var i = e.getProps(),
                          r = i.dragPropagation,
                          o = i.dragDirectionLock,
                          a = i.onDirectionLock,
                          s = i.onDrag;
                        if (r || e.openGlobalLock) {
                          var u = n.offset;
                          if (o && null === e.currentDirection)
                            return (
                              (e.currentDirection = Sn(u)),
                              void (
                                null !== e.currentDirection &&
                                (null === a ||
                                  void 0 === a ||
                                  a(e.currentDirection))
                              )
                            );
                          e.updateAxis("x", n.point, u),
                            e.updateAxis("y", n.point, u),
                            e.visualElement.syncRender(),
                            null === s || void 0 === s || s(t, n);
                        }
                      },
                      u = function (t, n) {
                        return e.stop(t, n);
                      };
                    this.panSession = new R(
                      t,
                      {
                        onSessionStart: o,
                        onStart: a,
                        onMove: s,
                        onSessionEnd: u,
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (t, e) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var i = e.velocity;
                    this.startAnimation(i);
                    var r = this.getProps().onDragEnd;
                    null === r || void 0 === r || r(t, e);
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  var t, e;
                  (this.isDragging = !1),
                    this.visualElement.projection &&
                      (this.visualElement.projection.isAnimationBlocked = !1),
                    null === (t = this.panSession) || void 0 === t || t.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    null === (e = this.visualElement.animationState) ||
                      void 0 === e ||
                      e.setActive(it.Drag, !1);
                },
              },
              {
                key: "updateAxis",
                value: function (t, e, n) {
                  var i = this.getProps().drag;
                  if (n && wn(t, i, this.currentDirection)) {
                    var r = this.getAxisMotionValue(t),
                      o = this.originPoint[t] + n[t];
                    this.constraints &&
                      this.constraints[t] &&
                      (o = (function (t, e, n) {
                        var i = e.min,
                          r = e.max;
                        return (
                          void 0 !== i && t < i
                            ? (t = n ? Y(i, t, n.min) : Math.max(t, i))
                            : void 0 !== r &&
                              t > r &&
                              (t = n ? Y(r, t, n.max) : Math.min(t, r)),
                          t
                        );
                      })(o, this.constraints[t], this.elastic[t])),
                      r.set(o);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var t = this,
                    e = this.getProps(),
                    n = e.dragConstraints,
                    i = e.dragElastic,
                    r = (this.visualElement.projection || {}).layout,
                    o = this.constraints;
                  n && (0, G.I)(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !r) &&
                        (function (t, e) {
                          var n = e.top,
                            i = e.left,
                            r = e.bottom,
                            o = e.right;
                          return { x: et(t.x, i, o), y: et(t.y, n, r) };
                        })(r.actual, n)),
                    (this.elastic = (function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : rt;
                      return (
                        !1 === t ? (t = 0) : !0 === t && (t = rt),
                        { x: ot(t, "left", "right"), y: ot(t, "top", "bottom") }
                      );
                    })(i)),
                    o !== this.constraints &&
                      r &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      st(function (e) {
                        t.getAxisMotionValue(e) &&
                          (t.constraints[e] = (function (t, e) {
                            var n = {};
                            return (
                              void 0 !== e.min && (n.min = e.min - t.min),
                              void 0 !== e.max && (n.max = e.max - t.min),
                              n
                            );
                          })(r.actual[e], t.constraints[e]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var t = this.getProps(),
                    e = t.dragConstraints,
                    n = t.onMeasureDragConstraints;
                  if (!e || !(0, G.I)(e)) return !1;
                  var i = e.current,
                    r = this.visualElement.projection;
                  if (!r || !r.layout) return !1;
                  var o = (function (t, e, n) {
                      var i = Et(t, n),
                        r = e.scroll;
                      return r && (yt(i.x, r.x), yt(i.y, r.y)), i;
                    })(i, r.root, this.visualElement.getTransformPagePoint()),
                    a = (function (t, e) {
                      return { x: nt(t.x, e.x), y: nt(t.y, e.y) };
                    })(r.layout.actual, o);
                  if (n) {
                    var s = n(
                      (function (t) {
                        var e = t.x,
                          n = t.y;
                        return {
                          top: n.min,
                          right: e.max,
                          bottom: n.max,
                          left: e.min,
                        };
                      })(a)
                    );
                    (this.hasMutatedConstraints = !!s), s && (a = ut(s));
                  }
                  return a;
                },
              },
              {
                key: "startAnimation",
                value: function (t) {
                  var e = this,
                    n = this.getProps(),
                    r = n.drag,
                    o = n.dragMomentum,
                    a = n.dragElastic,
                    s = n.dragTransition,
                    u = n.dragSnapToOrigin,
                    l = n.onDragTransitionEnd,
                    c = this.constraints || {},
                    v = st(function (n) {
                      var l;
                      if (wn(n, r, e.currentDirection)) {
                        var v =
                          null !==
                            (l = null === c || void 0 === c ? void 0 : c[n]) &&
                          void 0 !== l
                            ? l
                            : {};
                        u && (v = { min: 0, max: 0 });
                        var d = a ? 200 : 1e6,
                          f = a ? 40 : 1e7,
                          h = (0, i.Z)(
                            (0, i.Z)(
                              {
                                type: "inertia",
                                velocity: o ? t[n] : 0,
                                bounceStiffness: d,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              s
                            ),
                            v
                          );
                        return e.startAxisValueAnimation(n, h);
                      }
                    });
                  return Promise.all(v).then(l);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (t, e) {
                  return En(t, this.getAxisMotionValue(t), 0, e);
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var t = this;
                  st(function (e) {
                    return t.getAxisMotionValue(e).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (t) {
                  var e,
                    n,
                    i = "_drag" + t.toUpperCase(),
                    r = this.visualElement.getProps()[i];
                  return (
                    r ||
                    this.visualElement.getValue(
                      t,
                      null !==
                        (n =
                          null ===
                            (e = this.visualElement.getProps().initial) ||
                          void 0 === e
                            ? void 0
                            : e[t]) && void 0 !== n
                        ? n
                        : 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (t) {
                  var e = this;
                  st(function (n) {
                    if (wn(n, e.getProps().drag, e.currentDirection)) {
                      var i = e.visualElement.projection,
                        r = e.getAxisMotionValue(n);
                      if (i && i.layout) {
                        var o = i.layout.actual[n],
                          a = o.min,
                          s = o.max;
                        r.set(t[n] - Y(a, s, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var t,
                    e = this,
                    n = this.getProps(),
                    i = n.drag,
                    r = n.dragConstraints,
                    o = this.visualElement.projection;
                  if ((0, G.I)(r) && o && this.constraints) {
                    this.stopAnimation();
                    var a = { x: 0, y: 0 };
                    st(function (t) {
                      var n = e.getAxisMotionValue(t);
                      if (n) {
                        var i = n.get();
                        a[t] = (function (t, e) {
                          var n = 0.5,
                            i = X(t),
                            r = X(e);
                          return (
                            r > i
                              ? (n = q(e.min, e.max - i, t.min))
                              : i > r && (n = q(t.min, t.max - r, e.min)),
                            W(0, 1, n)
                          );
                        })({ min: i, max: i }, e.constraints[t]);
                      }
                    });
                    var s = this.visualElement.getProps().transformTemplate;
                    (this.visualElement.getInstance().style.transform = s
                      ? s({}, "")
                      : "none"),
                      null === (t = o.root) || void 0 === t || t.updateScroll(),
                      o.updateLayout(),
                      this.resolveConstraints(),
                      st(function (t) {
                        if (wn(t, i, null)) {
                          var n = e.getAxisMotionValue(t),
                            r = e.constraints[t],
                            o = r.min,
                            s = r.max;
                          n.set(Y(o, s, a[t]));
                        }
                      });
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var t,
                    e = this;
                  An.set(this.visualElement, this);
                  var n = E(
                      this.visualElement.getInstance(),
                      "pointerdown",
                      function (t) {
                        var n = e.getProps(),
                          i = n.drag,
                          r = n.dragListener;
                        i && (void 0 === r || r) && e.start(t);
                      }
                    ),
                    i = function () {
                      var t = e.getProps().dragConstraints;
                      (0, G.I)(t) &&
                        (e.constraints = e.resolveRefConstraints());
                    },
                    r = this.visualElement.projection,
                    o = r.addEventListener("measure", i);
                  r &&
                    !r.layout &&
                    (null === (t = r.root) || void 0 === t || t.updateScroll(),
                    r.updateLayout()),
                    i();
                  var a = g(window, "resize", function () {
                      return e.scalePositionWithinConstraints();
                    }),
                    s = r.addEventListener("didUpdate", function (t) {
                      var n = t.delta,
                        i = t.hasLayoutChanged;
                      e.isDragging &&
                        i &&
                        (st(function (t) {
                          var i = e.getAxisMotionValue(t);
                          i &&
                            ((e.originPoint[t] += n[t].translate),
                            i.set(i.get() + n[t].translate));
                        }),
                        e.visualElement.syncRender());
                    });
                  return function () {
                    a(), n(), o(), null === s || void 0 === s || s();
                  };
                },
              },
              {
                key: "getProps",
                value: function () {
                  var t = this.visualElement.getProps(),
                    e = t.drag,
                    n = void 0 !== e && e,
                    r = t.dragDirectionLock,
                    o = void 0 !== r && r,
                    a = t.dragPropagation,
                    s = void 0 !== a && a,
                    u = t.dragConstraints,
                    l = void 0 !== u && u,
                    c = t.dragElastic,
                    v = void 0 === c ? rt : c,
                    d = t.dragMomentum,
                    f = void 0 === d || d;
                  return (0, i.Z)(
                    (0, i.Z)({}, t),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: o,
                      dragPropagation: s,
                      dragConstraints: l,
                      dragElastic: v,
                      dragMomentum: f,
                    }
                  );
                },
              },
            ]),
            t
          );
        })();
      function wn(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      function Sn(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          n = null;
        return (
          Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n
        );
      }
      var Vn = n(9829);
      var Cn = n(9090),
        Zn = n(1475);
      var Mn = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Rn = {
          pan: Mn(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              i = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || i || o,
              u = (0, r.useRef)(null),
              l = (0, r.useContext)(Cn._).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (u.current = null), i && i(t, e);
                },
              };
            (0, r.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(c);
            }),
              A(
                a,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new R(t, c, { transformPagePoint: l });
                  }
              ),
              (0, Zn.z)(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Mn(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              i = (0, Vn.h)(function () {
                return new Tn(n);
              });
            (0, r.useEffect)(
              function () {
                return e && e.subscribe(i);
              },
              [i, e]
            ),
              (0, r.useEffect)(
                function () {
                  return i.addListeners();
                },
                [i]
              );
          }),
        },
        Dn = n(136),
        Ln = n(7277),
        jn = n(131);
      function On() {
        var t = (0, r.useContext)(jn.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          i = t.register,
          o = (0, r.useId)();
        (0, r.useEffect)(function () {
          return i(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return n && n(o);
              },
            ]
          : [!0];
      }
      var Fn = n(7497),
        In = n(3919),
        Un = n(3719);
      function Bn(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var Nn = {
        correct: function (t, e) {
          if (!e.target) return t;
          if ("string" === typeof t) {
            if (!Gt.px.test(t)) return t;
            t = parseFloat(t);
          }
          var n = Bn(t, e.target.x),
            i = Bn(t, e.target.y);
          return "".concat(n, "% ").concat(i, "%");
        },
      };
      function zn(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Hn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Gn(t) {
        var e = Hn.exec(t);
        if (!e) return [,];
        var n = (0, lt.Z)(e, 3);
        return [n[1], n[2]];
      }
      function Yn(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        'Max CSS variable fallback depth detected in property "'.concat(
          t,
          '". This may indicate a circular fallback dependency.'
        );
        var i = Gn(t),
          r = (0, lt.Z)(i, 2),
          o = r[0],
          a = r[1];
        if (o) {
          var s = window.getComputedStyle(e).getPropertyValue(o);
          return s ? s.trim() : zn(a) ? Yn(a, e, n + 1) : a;
        }
      }
      var qn = "_$css",
        Wn = {
          correct: function (t, e) {
            var n = e.treeScale,
              i = e.projectionDelta,
              r = t,
              o = t.includes("var("),
              a = [];
            o &&
              (t = t.replace(Hn, function (t) {
                return a.push(t), qn;
              }));
            var s = ae.parse(t);
            if (s.length > 5) return r;
            var u = ae.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = i.x.scale * n.x,
              v = i.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= v);
            var d = Y(c, v, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= d),
              "number" === typeof s[3 + l] && (s[3 + l] /= d);
            var f = u(s);
            if (o) {
              var h = 0;
              f = f.replace(qn, function () {
                var t = a[h];
                return h++, t;
              });
            }
            return f;
          },
        },
        Xn = n(1066),
        $n = (function (t) {
          (0, Dn.Z)(n, t);
          var e = (0, Ln.Z)(n);
          function n() {
            return (0, o.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, a.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.visualElement,
                    r = e.layoutGroup,
                    o = e.switchLayoutGroup,
                    a = e.layoutId,
                    s = n.projection;
                  (0, Xn.B)(Kn),
                    s &&
                      (r.group && r.group.add(s),
                      o && o.register && a && o.register(s),
                      s.root.didUpdate(),
                      s.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      s.setOptions(
                        (0, i.Z)(
                          (0, i.Z)({}, s.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (Un.V.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (t) {
                  var e = this,
                    n = this.props,
                    i = n.layoutDependency,
                    r = n.visualElement,
                    o = n.drag,
                    a = n.isPresent,
                    s = r.projection;
                  return s
                    ? ((s.isPresent = a),
                      o || t.layoutDependency !== i || void 0 === i
                        ? s.willUpdate()
                        : this.safeToRemove(),
                      t.isPresent !== a &&
                        (a
                          ? s.promote()
                          : s.relegate() ||
                            p.ZP.postRender(function () {
                              var t;
                              (null === (t = s.getStack()) || void 0 === t
                                ? void 0
                                : t.members.length) || e.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t = this.props.visualElement.projection;
                  t &&
                    (t.root.didUpdate(),
                    !t.currentAnimation && t.isLead() && this.safeToRemove());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var t = this.props,
                    e = t.visualElement,
                    n = t.layoutGroup,
                    i = t.switchLayoutGroup,
                    r = e.projection;
                  r &&
                    (r.scheduleCheckAfterUnmount(),
                    (null === n || void 0 === n ? void 0 : n.group) &&
                      n.group.remove(r),
                    (null === i || void 0 === i ? void 0 : i.deregister) &&
                      i.deregister(r));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var t = this.props.safeToRemove;
                  null === t || void 0 === t || t();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(r.Component);
      var Kn = {
          borderRadius: (0, i.Z)(
            (0, i.Z)({}, Nn),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: Nn,
          borderTopRightRadius: Nn,
          borderBottomLeftRadius: Nn,
          borderBottomRightRadius: Nn,
          boxShadow: Wn,
        },
        Qn = {
          measureLayout: function (t) {
            var e = On(),
              n = (0, lt.Z)(e, 2),
              o = n[0],
              a = n[1],
              s = (0, r.useContext)(Fn.p);
            return r.createElement(
              $n,
              (0, i.Z)(
                (0, i.Z)({}, t),
                {},
                {
                  layoutGroup: s,
                  switchLayoutGroup: (0, r.useContext)(In.g),
                  isPresent: o,
                  safeToRemove: a,
                }
              )
            );
          },
        },
        _n = n(8597);
      function Jn(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var ti = function (t) {
        return /^0[^.\s]+$/.test(t);
      };
      function ei(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function ni(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var ii = (function () {
          function t() {
            (0, o.Z)(this, t), (this.subscriptions = []);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "add",
                value: function (t) {
                  var e = this;
                  return (
                    ei(this.subscriptions, t),
                    function () {
                      return ni(e.subscriptions, t);
                    }
                  );
                },
              },
              {
                key: "notify",
                value: function (t, e, n) {
                  var i = this.subscriptions.length;
                  if (i)
                    if (1 === i) this.subscriptions[0](t, e, n);
                    else
                      for (var r = 0; r < i; r++) {
                        var o = this.subscriptions[r];
                        o && o(t, e, n);
                      }
                },
              },
              {
                key: "getSize",
                value: function () {
                  return this.subscriptions.length;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.subscriptions.length = 0;
                },
              },
            ]),
            t
          );
        })(),
        ri = (function () {
          function t(e) {
            var n,
              i = this;
            (0, o.Z)(this, t),
              (this.version = "7.5.3"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new ii()),
              (this.velocityUpdateSubscribers = new ii()),
              (this.renderSubscribers = new ii()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t) {
                var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (i.prev = i.current), (i.current = t);
                var n = (0, p.$B)(),
                  r = n.delta,
                  o = n.timestamp;
                i.lastUpdated !== o &&
                  ((i.timeDelta = r),
                  (i.lastUpdated = o),
                  p.ZP.postRender(i.scheduleVelocityCheck)),
                  i.prev !== i.current && i.updateSubscribers.notify(i.current),
                  i.velocityUpdateSubscribers.getSize() &&
                    i.velocityUpdateSubscribers.notify(i.getVelocity()),
                  e && i.renderSubscribers.notify(i.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return p.ZP.postRender(i.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== i.lastUpdated &&
                  ((i.prev = i.current),
                  i.velocityUpdateSubscribers.notify(i.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n))));
          }
          return (
            (0, a.Z)(t, [
              {
                key: "onChange",
                value: function (t) {
                  return this.updateSubscribers.add(t);
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  this.updateSubscribers.clear();
                },
              },
              {
                key: "onRenderRequest",
                value: function (t) {
                  return t(this.get()), this.renderSubscribers.add(t);
                },
              },
              {
                key: "attach",
                value: function (t) {
                  this.passiveEffect = t;
                },
              },
              {
                key: "set",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  e && this.passiveEffect
                    ? this.passiveEffect(t, this.updateAndNotify)
                    : this.updateAndNotify(t, e);
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? Be(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (t) {
                  var e = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (e.hasAnimated = !0), (e.stopAnimation = t(n));
                    }).then(function () {
                      return e.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.stopAnimation && this.stopAnimation(),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.stopAnimation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  this.stopAnimation = null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.updateSubscribers.clear(),
                    this.renderSubscribers.clear(),
                    this.stop();
                },
              },
            ]),
            t
          );
        })();
      function oi(t) {
        return new ri(t);
      }
      var ai = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        si = [
          jt.Rx,
          Gt.px,
          Gt.aQ,
          Gt.RW,
          Gt.vw,
          Gt.vh,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        ui = function (t) {
          return si.find(ai(t));
        },
        li = [].concat((0, At.Z)(si), [Jt, ae]),
        ci = function (t) {
          return li.find(ai(t));
        },
        vi = n(6275);
      function di(t, e, n) {
        var i = t.getProps();
        return (0, vi.o)(
          i,
          e,
          void 0 !== n ? n : i.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      var fi = ["transitionEnd", "transition"];
      function hi(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, oi(n));
      }
      function pi(t, e) {
        var n = di(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          a = void 0 === o ? {} : o,
          s = (r.transition, (0, Tt.Z)(r, fi));
        for (var u in (s = (0, i.Z)((0, i.Z)({}, s), a))) {
          hi(t, u, (0, fn.Y)(s[u]));
        }
      }
      function mi(t, e, n) {
        var i,
          r,
          o = Object.keys(e).filter(function (e) {
            return !t.hasValue(e);
          }),
          a = o.length;
        if (a)
          for (var s = 0; s < a; s++) {
            var u = o[s],
              l = e[u],
              c = null;
            Array.isArray(l) && (c = l[0]),
              null === c &&
                (c =
                  null !==
                    (r =
                      null !== (i = n[u]) && void 0 !== i
                        ? i
                        : t.readValue(u)) && void 0 !== r
                    ? r
                    : e[u]),
              void 0 !== c &&
                null !== c &&
                ("string" === typeof c && (/^\-?\d*\.?\d+$/.test(c) || ti(c))
                  ? (c = parseFloat(c))
                  : !ci(c) && ae.test(l) && (c = vn(u, l)),
                t.addValue(u, oi(c)),
                void 0 === n[u] && (n[u] = c),
                t.setBaseTarget(u, c));
          }
      }
      function gi(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function yi(t, e, n) {
        var i,
          r = {};
        for (var o in t) {
          var a = gi(o, e);
          r[o] =
            void 0 !== a
              ? a
              : null === (i = n.getValue(o)) || void 0 === i
              ? void 0
              : i.get();
        }
        return r;
      }
      var xi = n(2284),
        bi = n(1453);
      function Pi(t) {
        return Boolean((0, bi.i)(t) && t.add);
      }
      var ki = ["transition", "transitionEnd"];
      function Ei(t, e) {
        var n,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = di(t, e, i.custom),
          o = r || {},
          a = o.transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        i.transitionOverride && (s = i.transitionOverride);
        var u = r
            ? function () {
                return Ai(t, r, i);
              }
            : function () {
                return Promise.resolve();
              },
          l = (
            null === (n = t.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  r = s,
                  o = r.delayChildren,
                  a = void 0 === o ? 0 : o,
                  u = r.staggerChildren,
                  l = r.staggerDirection;
                return Ti(t, e, a + n, u, l, i);
              }
            : function () {
                return Promise.resolve();
              },
          c = s,
          v = c.when;
        if (v) {
          var d = "beforeChildren" === v ? [u, l] : [l, u],
            f = (0, lt.Z)(d, 2),
            h = f[0],
            p = f[1];
          return h().then(p);
        }
        return Promise.all([u(), l(i.delay)]);
      }
      function Ai(t, e) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = r.delay,
          a = void 0 === o ? 0 : o,
          s = r.transitionOverride,
          u = r.type,
          l = t.makeTargetAnimatable(e),
          c = l.transition,
          v = void 0 === c ? t.getDefaultTransition() : c,
          d = l.transitionEnd,
          f = (0, Tt.Z)(l, ki),
          h = t.getValue("willChange");
        s && (v = s);
        var p = [],
          m =
            u &&
            (null === (n = t.animationState) || void 0 === n
              ? void 0
              : n.getState()[u]),
          g = function (e) {
            var n = t.getValue(e),
              r = f[e];
            if (!n || void 0 === r || (m && Si(m, e))) return "continue";
            var o = (0, i.Z)({ delay: a }, v);
            t.shouldReduceMotion &&
              xi.G.has(e) &&
              (o = (0, i.Z)((0, i.Z)({}, o), {}, { type: !1, delay: 0 }));
            var s = En(e, n, r, o);
            Pi(h) &&
              (h.add(e),
              (s = s.then(function () {
                return h.remove(e);
              }))),
              p.push(s);
          };
        for (var y in f) g(y);
        return Promise.all(p).then(function () {
          d && pi(t, d);
        });
      }
      function Ti(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          a = arguments.length > 5 ? arguments[5] : void 0,
          s = [],
          u = (t.variantChildren.size - 1) * r,
          l =
            1 === o
              ? function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return t * r;
                }
              : function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return u - t * r;
                };
        return (
          Array.from(t.variantChildren)
            .sort(wi)
            .forEach(function (t, r) {
              s.push(
                Ei(
                  t,
                  e,
                  (0, i.Z)((0, i.Z)({}, a), {}, { delay: n + l(r) })
                ).then(function () {
                  return t.notifyAnimationComplete(e);
                })
              );
            }),
          Promise.all(s)
        );
      }
      function wi(t, e) {
        return t.sortNodePosition(e);
      }
      function Si(t, e) {
        var n = t.protectedKeys,
          i = t.needsAnimating,
          r = n.hasOwnProperty(e) && !0 !== i[e];
        return (i[e] = !1), r;
      }
      var Vi = n(5069),
        Ci = ["transition", "transitionEnd"],
        Zi = [
          it.Animate,
          it.InView,
          it.Focus,
          it.Hover,
          it.Tap,
          it.Drag,
          it.Exit,
        ],
        Mi = [].concat(Zi).reverse(),
        Ri = Zi.length;
      function Di(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                i = e.options;
              return (function (t, e) {
                var n,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((t.notifyAnimationStart(e), Array.isArray(e))) {
                  var r = e.map(function (e) {
                    return Ei(t, e, i);
                  });
                  n = Promise.all(r);
                } else if ("string" === typeof e) n = Ei(t, e, i);
                else {
                  var o = "function" === typeof e ? di(t, e, i.custom) : e;
                  n = Ai(t, o, i);
                }
                return n.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, i);
            })
          );
        };
      }
      function Li(t) {
        var e = Di(t),
          n = (function () {
            var t;
            return (
              (t = {}),
              (0, Ft.Z)(t, it.Animate, ji(!0)),
              (0, Ft.Z)(t, it.InView, ji()),
              (0, Ft.Z)(t, it.Hover, ji()),
              (0, Ft.Z)(t, it.Tap, ji()),
              (0, Ft.Z)(t, it.Drag, ji()),
              (0, Ft.Z)(t, it.Focus, ji()),
              (0, Ft.Z)(t, it.Exit, ji()),
              t
            );
          })(),
          r = !0,
          o = function (e, n) {
            var r = di(t, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                a = (0, Tt.Z)(r, Ci);
              e = (0, i.Z)((0, i.Z)((0, i.Z)({}, e), a), o);
            }
            return e;
          };
        function a(a, s) {
          for (
            var u,
              l = t.getProps(),
              c = t.getVariantContext(!0) || {},
              v = [],
              d = new Set(),
              f = {},
              h = 1 / 0,
              p = function (e) {
                var p = Mi[e],
                  m = n[p],
                  g = null !== (u = l[p]) && void 0 !== u ? u : c[p],
                  y = (0, Vi.$)(g),
                  x = p === s ? m.isActive : null;
                !1 === x && (h = e);
                var b = g === c[p] && g !== l[p] && y;
                if (
                  (b && r && t.manuallyAnimateOnMount && (b = !1),
                  (m.protectedKeys = (0, i.Z)({}, f)),
                  (!m.isActive && null === x) ||
                    (!g && !m.prevProp) ||
                    (0, _n.H)(g) ||
                    "boolean" === typeof g)
                )
                  return "continue";
                var P = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (Array.isArray(e)) return !Jn(e, t);
                    return !1;
                  })(m.prevProp, g),
                  k = P || (p === s && m.isActive && !b && y) || (e > h && y),
                  E = Array.isArray(g) ? g : [g],
                  A = E.reduce(o, {});
                !1 === x && (A = {});
                var T = m.prevResolvedValues,
                  w = void 0 === T ? {} : T,
                  S = (0, i.Z)((0, i.Z)({}, w), A),
                  V = function (t) {
                    (k = !0), d.delete(t), (m.needsAnimating[t] = !0);
                  };
                for (var C in S) {
                  var Z = A[C],
                    M = w[C];
                  f.hasOwnProperty(C) ||
                    (Z !== M
                      ? (0, Qe.C)(Z) && (0, Qe.C)(M)
                        ? !Jn(Z, M) || P
                          ? V(C)
                          : (m.protectedKeys[C] = !0)
                        : void 0 !== Z
                        ? V(C)
                        : d.add(C)
                      : void 0 !== Z && d.has(C)
                      ? V(C)
                      : (m.protectedKeys[C] = !0));
                }
                (m.prevProp = g),
                  (m.prevResolvedValues = A),
                  m.isActive && (f = (0, i.Z)((0, i.Z)({}, f), A)),
                  r && t.blockInitialAnimation && (k = !1),
                  k &&
                    !b &&
                    v.push.apply(
                      v,
                      (0, At.Z)(
                        E.map(function (t) {
                          return {
                            animation: t,
                            options: (0, i.Z)({ type: p }, a),
                          };
                        })
                      )
                    );
              },
              m = 0;
            m < Ri;
            m++
          )
            p(m);
          if (d.size) {
            var g = {};
            d.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (g[e] = n);
            }),
              v.push({ animation: g });
          }
          var y = Boolean(v.length);
          return (
            r && !1 === l.initial && !t.manuallyAnimateOnMount && (y = !1),
            (r = !1),
            y ? e(v) : Promise.resolve()
          );
        }
        return {
          animateChanges: a,
          setActive: function (e, i, r) {
            var o;
            if (n[e].isActive === i) return Promise.resolve();
            null === (o = t.variantChildren) ||
              void 0 === o ||
              o.forEach(function (t) {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, i);
              }),
              (n[e].isActive = i);
            var s = a(r, e);
            for (var u in n) n[u].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function ji() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var Oi = {
        animation: Mn(function (t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState || (e.animationState = Li(e)),
            (0, _n.H)(n) &&
              (0, r.useEffect)(
                function () {
                  return n.subscribe(e);
                },
                [n]
              );
        }),
        exit: Mn(function (t) {
          var e = t.custom,
            n = t.visualElement,
            i = On(),
            o = (0, lt.Z)(i, 2),
            a = o[0],
            s = o[1],
            u = (0, r.useContext)(jn.O);
          (0, r.useEffect)(
            function () {
              n.isPresent = a;
              var t =
                n.animationState &&
                n.animationState.setActive(it.Exit, !a, {
                  custom: (u && u.custom) || e,
                });
              t && !a && t.then(s);
            },
            [a]
          );
        }),
      };
      function Fi(t, e, n) {
        return function (i, r) {
          s(i) &&
            !H() &&
            (t.animationState && t.animationState.setActive(it.Hover, e),
            n && n(i, r));
        };
      }
      var Ii = function t(e, n) {
        return !!n && (e === n || t(e, n.parentElement));
      };
      var Ui = n(9606),
        Bi = n(2317),
        Ni = ["root"],
        zi = new WeakMap(),
        Hi = new WeakMap(),
        Gi = function (t) {
          var e = zi.get(t.target);
          e && e(t);
        },
        Yi = function (t) {
          t.forEach(Gi);
        };
      function qi(t, e, n) {
        var r = (function (t) {
          var e = t.root,
            n = (0, Tt.Z)(t, Ni),
            r = e || document;
          Hi.has(r) || Hi.set(r, {});
          var o = Hi.get(r),
            a = JSON.stringify(n);
          return (
            o[a] ||
              (o[a] = new IntersectionObserver(Yi, (0, i.Z)({ root: e }, n))),
            o[a]
          );
        })(e);
        return (
          zi.set(t, n),
          r.observe(t),
          function () {
            zi.delete(t), r.unobserve(t);
          }
        );
      }
      var Wi = { some: 0, all: 1 };
      function Xi(t, e, n, i) {
        var o = i.root,
          a = i.margin,
          s = i.amount,
          u = void 0 === s ? "some" : s,
          l = i.once;
        (0, r.useEffect)(
          function () {
            if (t) {
              var i = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof u ? u : Wi[u],
              };
              return qi(n.getInstance(), i, function (t) {
                var i = t.isIntersecting;
                if (
                  e.isInView !== i &&
                  ((e.isInView = i), !l || i || !e.hasEnteredView)
                ) {
                  i && (e.hasEnteredView = !0),
                    n.animationState &&
                      n.animationState.setActive(it.InView, i);
                  var r = n.getProps(),
                    o = i ? r.onViewportEnter : r.onViewportLeave;
                  o && o(t);
                }
              });
            }
          },
          [t, o, a, u]
        );
      }
      function $i(t, e, n, i) {
        var o = i.fallback,
          a = void 0 === o || o;
        (0, r.useEffect)(
          function () {
            t &&
              a &&
              ("production" !== Ui.O &&
                (0, Bi.O)(
                  !1,
                  "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
                ),
              requestAnimationFrame(function () {
                e.hasEnteredView = !0;
                var t = n.getProps().onViewportEnter;
                t && t(null),
                  n.animationState && n.animationState.setActive(it.InView, !0);
              }));
          },
          [t]
        );
      }
      var Ki = {
          inView: Mn(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              i = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, r.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || i || o);
            s.once && u.current.hasEnteredView && (l = !1),
              ("undefined" === typeof IntersectionObserver ? $i : Xi)(
                l,
                u.current,
                e,
                s
              );
          }),
          tap: Mn(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              i = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || n || i || o,
              u = (0, r.useRef)(!1),
              l = (0, r.useRef)(null),
              c = { passive: !(n || e || i || p) };
            function v() {
              l.current && l.current(), (l.current = null);
            }
            function d() {
              return (
                v(),
                (u.current = !1),
                a.animationState && a.animationState.setActive(it.Tap, !1),
                !H()
              );
            }
            function f(t, n) {
              d() &&
                (Ii(a.getInstance(), t.target) ? e && e(t, n) : i && i(t, n));
            }
            function h(t, e) {
              d() && i && i(t, e);
            }
            function p(t, e) {
              v(),
                u.current ||
                  ((u.current = !0),
                  (l.current = M(
                    E(window, "pointerup", f, c),
                    E(window, "pointercancel", h, c)
                  )),
                  a.animationState && a.animationState.setActive(it.Tap, !0),
                  n && n(t, e));
            }
            A(a, "pointerdown", s ? p : void 0, c), (0, Zn.z)(v);
          }),
          focus: Mn(function (t) {
            var e = t.whileFocus,
              n = t.visualElement,
              i = n.animationState;
            y(
              n,
              "focus",
              e
                ? function () {
                    i && i.setActive(it.Focus, !0);
                  }
                : void 0
            ),
              y(
                n,
                "blur",
                e
                  ? function () {
                      i && i.setActive(it.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Mn(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              i = t.whileHover,
              r = t.visualElement;
            A(r, "pointerenter", e || i ? Fi(r, !0, e) : void 0, {
              passive: !e,
            }),
              A(r, "pointerleave", n || i ? Fi(r, !1, n) : void 0, {
                passive: !n,
              });
          }),
        },
        Qi = { current: null },
        _i = { current: !1 };
      function Ji() {
        if (((_i.current = !0), x.j))
          if (window.matchMedia) {
            var t = window.matchMedia("(prefers-reduced-motion)"),
              e = function () {
                return (Qi.current = t.matches);
              };
            t.addListener(e), e();
          } else Qi.current = !1;
      }
      var tr = [
        "LayoutMeasure",
        "BeforeLayoutMeasure",
        "LayoutUpdate",
        "ViewportBoxUpdate",
        "Update",
        "Render",
        "AnimationComplete",
        "LayoutAnimationComplete",
        "AnimationStart",
        "LayoutAnimationStart",
        "SetAxisTarget",
        "Unmount",
      ];
      function er() {
        var t = tr.map(function () {
            return new ii();
          }),
          e = {},
          n = {
            clearAllListeners: function () {
              return t.forEach(function (t) {
                return t.clear();
              });
            },
            updatePropListeners: function (t) {
              tr.forEach(function (i) {
                var r,
                  o = "on" + i,
                  a = t[o];
                null === (r = e[i]) || void 0 === r || r.call(e),
                  a && (e[i] = n[o](a));
              });
            },
          };
        return (
          t.forEach(function (t, e) {
            (n["on" + tr[e]] = function (e) {
              return t.add(e);
            }),
              (n["notify" + tr[e]] = function () {
                return t.notify.apply(t, arguments);
              });
          }),
          n
        );
      }
      function nr(t, e, n) {
        var i = e.willChange;
        for (var r in e) {
          var o = e[r],
            a = n[r];
          if ((0, bi.i)(o)) t.addValue(r, o), Pi(i) && i.add(r);
          else if ((0, bi.i)(a)) t.addValue(r, oi(o)), Pi(i) && i.remove(r);
          else if (a !== o)
            if (t.hasValue(r)) {
              var s = t.getValue(r);
              !s.hasAnimated && s.set(o);
            } else {
              var u = t.getStaticValue(r);
              t.addValue(r, oi(void 0 !== u ? u : o));
            }
        }
        for (var l in n) void 0 === e[l] && t.removeValue(l);
        return e;
      }
      var ir,
        rr = n(5195),
        or = n(3552),
        ar = ["willChange"],
        sr = Object.keys(or.A),
        ur = sr.length,
        lr = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            o = t.build,
            a = t.getBaseTarget,
            s = t.makeTargetAnimatable,
            u = t.measureViewportBox,
            l = t.render,
            c = t.readValueFromInstance,
            v = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            f = t.scrapeMotionValuesFromProps;
          return function (t) {
            var e,
              h,
              m = t.parent,
              g = t.props,
              y = t.presenceId,
              x = t.blockInitialAnimation,
              b = t.visualState,
              P = t.reducedMotionConfig,
              k =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              E = !1,
              A = b.latestValues,
              T = b.renderState,
              w = er(),
              S = new Map(),
              V = new Map(),
              C = {},
              Z = (0, i.Z)({}, A),
              M = g.initial ? (0, i.Z)({}, A) : {};
            function R() {
              e && E && (D(), l(e, T, g.style, q.projection));
            }
            function D() {
              o(q, T, A, k, g);
            }
            function L() {
              w.notifyUpdate(A);
            }
            function j(t, e) {
              var n = e.onChange(function (e) {
                  (A[t] = e), g.onUpdate && p.ZP.update(L, !1, !0);
                }),
                i = e.onRenderRequest(q.scheduleRender);
              V.set(t, function () {
                n(), i();
              });
            }
            var O = f(g),
              F = O.willChange,
              I = (0, Tt.Z)(O, ar);
            for (var U in I) {
              var B = I[U];
              void 0 !== A[U] &&
                (0, bi.i)(B) &&
                (B.set(A[U], !1), Pi(F) && F.add(U));
            }
            if (g.values)
              for (var N in g.values) {
                var z = g.values[N];
                void 0 !== A[N] && (0, bi.i)(z) && z.set(A[N]);
              }
            var H = (0, rr.G)(g),
              Y = (0, rr.M)(g),
              q = (0, i.Z)(
                (0, i.Z)(
                  {
                    treeType: n,
                    current: null,
                    depth: m ? m.depth + 1 : 0,
                    parent: m,
                    children: new Set(),
                    presenceId: y,
                    shouldReduceMotion: null,
                    variantChildren: Y ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === m || void 0 === m ? void 0 : m.isMounted()
                    ),
                    blockInitialAnimation: x,
                    isMounted: function () {
                      return Boolean(e);
                    },
                    mount: function (t) {
                      (E = !0),
                        (e = q.current = t),
                        q.projection && q.projection.mount(t),
                        Y &&
                          m &&
                          !H &&
                          (h =
                            null === m || void 0 === m
                              ? void 0
                              : m.addVariantChild(q)),
                        S.forEach(function (t, e) {
                          return j(e, t);
                        }),
                        _i.current || Ji(),
                        (q.shouldReduceMotion =
                          "never" !== P && ("always" === P || Qi.current)),
                        null === m || void 0 === m || m.children.add(q),
                        q.setProps(g);
                    },
                    unmount: function () {
                      var t;
                      null === (t = q.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        p.qY.update(L),
                        p.qY.render(R),
                        V.forEach(function (t) {
                          return t();
                        }),
                        null === h || void 0 === h || h(),
                        null === m || void 0 === m || m.children.delete(q),
                        w.clearAllListeners(),
                        (e = void 0),
                        (E = !1);
                    },
                    loadFeatures: function (t, e, n, o, a, s) {
                      var u = [];
                      Ui.O;
                      for (var l = 0; l < ur; l++) {
                        var c = sr[l],
                          v = or.A[c],
                          d = v.isEnabled,
                          f = v.Component;
                        d(t) &&
                          f &&
                          u.push(
                            (0, r.createElement)(
                              f,
                              (0, i.Z)(
                                (0, i.Z)({ key: c }, t),
                                {},
                                { visualElement: q }
                              )
                            )
                          );
                      }
                      if (!q.projection && a) {
                        q.projection = new a(
                          o,
                          q.getLatestValues(),
                          m && m.projection
                        );
                        var h = t.layoutId,
                          p = t.layout,
                          g = t.drag,
                          y = t.dragConstraints,
                          x = t.layoutScroll;
                        q.projection.setOptions({
                          layoutId: h,
                          layout: p,
                          alwaysMeasureLayout: Boolean(g) || (y && (0, G.I)(y)),
                          visualElement: q,
                          scheduleRender: function () {
                            return q.scheduleRender();
                          },
                          animationType: "string" === typeof p ? p : "both",
                          initialPromotionConfig: s,
                          layoutScroll: x,
                        });
                      }
                      return u;
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = q.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(q.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return Y
                        ? q
                        : null === m || void 0 === m
                        ? void 0
                        : m.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return g.layoutId;
                    },
                    getInstance: function () {
                      return e;
                    },
                    getStaticValue: function (t) {
                      return A[t];
                    },
                    setStaticValue: function (t, e) {
                      return (A[t] = e);
                    },
                    getLatestValues: function () {
                      return A;
                    },
                    setVisibility: function (t) {
                      q.isVisible !== t &&
                        ((q.isVisible = t), q.scheduleRender());
                    },
                    makeTargetAnimatable: function (t) {
                      var e =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      return s(q, t, g, e);
                    },
                    measureViewportBox: function () {
                      return u(e, g);
                    },
                    addValue: function (t, e) {
                      q.hasValue(t) && q.removeValue(t),
                        S.set(t, e),
                        (A[t] = e.get()),
                        j(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      S.delete(t),
                        null === (e = V.get(t)) || void 0 === e || e(),
                        V.delete(t),
                        delete A[t],
                        v(t, T);
                    },
                    hasValue: function (t) {
                      return S.has(t);
                    },
                    getValue: function (t, e) {
                      if (g.values && g.values[t]) return g.values[t];
                      var n = S.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = oi(e)), q.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return S.forEach(t);
                    },
                    readValue: function (t) {
                      return void 0 !== A[t] ? A[t] : c(e, t, k);
                    },
                    setBaseTarget: function (t, e) {
                      Z[t] = e;
                    },
                    getBaseTarget: function (t) {
                      var e,
                        n = g.initial,
                        i =
                          "string" === typeof n || "object" === typeof n
                            ? null === (e = (0, vi.o)(g, n)) || void 0 === e
                              ? void 0
                              : e[t]
                            : void 0;
                      if (n && void 0 !== i) return i;
                      if (a) {
                        var r = a(g, t);
                        if (void 0 !== r && !(0, bi.i)(r)) return r;
                      }
                      return void 0 !== M[t] && void 0 === i ? void 0 : Z[t];
                    },
                  },
                  w
                ),
                {},
                {
                  build: function () {
                    return D(), T;
                  },
                  scheduleRender: function () {
                    p.ZP.render(R, !1, !0);
                  },
                  syncRender: R,
                  setProps: function (t) {
                    (t.transformTemplate || g.transformTemplate) &&
                      q.scheduleRender(),
                      (g = t),
                      w.updatePropListeners(t),
                      (C = nr(q, f(g), C));
                  },
                  getProps: function () {
                    return g;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = g.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return g.transition;
                  },
                  getTransformPagePoint: function () {
                    return g.transformPagePoint;
                  },
                  getVariantContext: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (t)
                      return null === m || void 0 === m
                        ? void 0
                        : m.getVariantContext();
                    if (!H) {
                      var e =
                        (null === m || void 0 === m
                          ? void 0
                          : m.getVariantContext()) || {};
                      return void 0 !== g.initial && (e.initial = g.initial), e;
                    }
                    for (var n = {}, i = 0; i < vr; i++) {
                      var r = cr[i],
                        o = g[r];
                      ((0, Vi.$)(o) || !1 === o) && (n[r] = o);
                    }
                    return n;
                  },
                }
              );
            return q;
          };
        },
        cr = ["initial"].concat((0, At.Z)(Zi)),
        vr = cr.length,
        dr = n(9634),
        fr = n(4558),
        hr = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        pr = function (t) {
          return hr.has(t);
        },
        mr = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        gr = function (t) {
          return t === jt.Rx || t === Gt.px;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(ir || (ir = {}));
      var yr = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        xr = function (t, e) {
          return function (n, i) {
            var r = i.transform;
            if ("none" === r || !r) return 0;
            var o = r.match(/^matrix3d\((.+)\)$/);
            if (o) return yr(o[1], e);
            var a = r.match(/^matrix\((.+)\)$/);
            return a ? yr(a[1], t) : 0;
          };
        },
        br = new Set(["x", "y", "z"]),
        Pr = xi._.filter(function (t) {
          return !br.has(t);
        });
      function kr(t) {
        var e = [];
        return (
          Pr.forEach(function (n) {
            var i = t.getValue(n);
            void 0 !== i &&
              (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
          }),
          e.length && t.syncRender(),
          e
        );
      }
      var Er = {
          width: function (t, e) {
            var n = t.x,
              i = e.paddingLeft,
              r = void 0 === i ? "0" : i,
              o = e.paddingRight,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(r) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              i = e.paddingTop,
              r = void 0 === i ? "0" : i,
              o = e.paddingBottom,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(r) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              i = e.top;
            return parseFloat(i) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              i = e.left;
            return parseFloat(i) + (n.max - n.min);
          },
          x: xr(4, 13),
          y: xr(5, 14),
        },
        Ar = function (t, e, n) {
          var i = e.measureViewportBox(),
            r = e.getInstance(),
            o = getComputedStyle(r),
            a = o.display,
            s = {};
          "none" === a && e.setStaticValue("display", t.display || "block"),
            n.forEach(function (t) {
              s[t] = Er[t](i, o);
            }),
            e.syncRender();
          var u = e.measureViewportBox();
          return (
            n.forEach(function (n) {
              var i = e.getValue(n);
              mr(i, s[n]), (t[n] = Er[n](u, o));
            }),
            t
          );
        };
      function Tr(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(pr);
        })(e)
          ? (function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
              (e = (0, i.Z)({}, e)), (r = (0, i.Z)({}, r));
              var o = Object.keys(e).filter(pr),
                a = [],
                s = !1,
                u = [];
              if (
                (o.forEach(function (i) {
                  var o = t.getValue(i);
                  if (t.hasValue(i)) {
                    var l,
                      c = n[i],
                      v = ui(c),
                      d = e[i];
                    if ((0, Qe.C)(d)) {
                      var f = d.length,
                        h = null === d[0] ? 1 : 0;
                      (c = d[h]), (v = ui(c));
                      for (var p = h; p < f; p++)
                        l ? ui(d[p]) : (l = ui(d[p])) === v || (gr(v) && gr(l));
                    } else l = ui(d);
                    if (v !== l)
                      if (gr(v) && gr(l)) {
                        var m = o.get();
                        "string" === typeof m && o.set(parseFloat(m)),
                          "string" === typeof d
                            ? (e[i] = parseFloat(d))
                            : Array.isArray(d) &&
                              l === Gt.px &&
                              (e[i] = d.map(parseFloat));
                      } else
                        (null === v || void 0 === v ? void 0 : v.transform) &&
                        (null === l || void 0 === l ? void 0 : l.transform) &&
                        (0 === c || 0 === d)
                          ? 0 === c
                            ? o.set(l.transform(c))
                            : (e[i] = v.transform(d))
                          : (s || ((a = kr(t)), (s = !0)),
                            u.push(i),
                            (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                            mr(o, d));
                  }
                }),
                u.length)
              ) {
                var l = u.indexOf("height") >= 0 ? window.pageYOffset : null,
                  c = Ar(e, t, u);
                return (
                  a.length &&
                    a.forEach(function (e) {
                      var n = (0, lt.Z)(e, 2),
                        i = n[0],
                        r = n[1];
                      t.getValue(i).set(r);
                    }),
                  t.syncRender(),
                  x.j && null !== l && window.scrollTo({ top: l }),
                  { target: c, transitionEnd: r }
                );
              }
              return { target: e, transitionEnd: r };
            })(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var wr = function (t, e, n, r) {
          var o = (function (t, e, n) {
            var r = Object.assign({}, e),
              o = t.getInstance();
            if (!(o instanceof Element)) return { target: r, transitionEnd: n };
            for (var a in (n && (n = (0, i.Z)({}, n)),
            t.forEachValue(function (t) {
              var e = t.get();
              if (zn(e)) {
                var n = Yn(e, o);
                n && t.set(n);
              }
            }),
            r)) {
              var s = r[a];
              if (zn(s)) {
                var u = Yn(s, o);
                u && ((r[a] = u), n && void 0 === n[a] && (n[a] = s));
              }
            }
            return { target: r, transitionEnd: n };
          })(t, e, r);
          return Tr(t, (e = o.target), n, (r = o.transitionEnd));
        },
        Sr = n(2034),
        Vr = n(7047),
        Cr = ["transition", "transitionEnd"];
      var Zr = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (xi.G.has(e)) {
              var n = cn(e);
              return (n && n.default) || 0;
            }
            var i,
              r = ((i = t), window.getComputedStyle(i)),
              o = ((0, fr.o)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" === typeof o ? o.trim() : o;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return Et(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var i = n.transformTemplate;
            (e.style.transform = i ? i({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              i = e.style;
            delete n[t], delete i[t];
          },
          makeTargetAnimatable: function (t, e, n) {
            var r = e.transition,
              o = e.transitionEnd,
              a = (0, Tt.Z)(e, Cr),
              s = n.transformValues,
              u =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              l = yi(a, r || {}, t);
            if ((s && (o && (o = s(o)), a && (a = s(a)), l && (l = s(l))), u)) {
              mi(t, a, l);
              var c = wr(t, a, l, o);
              (o = c.transitionEnd), (a = c.target);
            }
            return (0, i.Z)({ transition: r, transitionEnd: o }, a);
          },
          scrapeMotionValuesFromProps: Sr.U,
          build: function (t, e, n, i, r) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              (0, dr.r)(e, n, i, r.transformTemplate);
          },
          render: Vr.N,
        },
        Mr = lr(Zr),
        Rr = n(8927),
        Dr = n(919),
        Lr = n(2673),
        jr = n(28),
        Or = n(9014),
        Fr = lr(
          (0, i.Z)(
            (0, i.Z)({}, Zr),
            {},
            {
              getBaseTarget: function (t, e) {
                return t[e];
              },
              readValueFromInstance: function (t, e) {
                var n;
                return xi.G.has(e)
                  ? (null === (n = cn(e)) || void 0 === n
                      ? void 0
                      : n.default) || 0
                  : ((e = jr.s.has(e) ? e : (0, Lr.D)(e)), t.getAttribute(e));
              },
              scrapeMotionValuesFromProps: Rr.U,
              build: function (t, e, n, i, r) {
                (0, Dr.i)(e, n, i, r.transformTemplate);
              },
              render: Or.K,
            }
          )
        ),
        Ir = n(7171),
        Ur = (0, i.Z)(
          (0, i.Z)(
            {
              renderer: function (t, e) {
                return (0, Ir.q)(t)
                  ? Fr(e, { enableHardwareAcceleration: !1 })
                  : Mr(e, { enableHardwareAcceleration: !0 });
              },
            },
            Oi
          ),
          Ki
        );
      function Br(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = (0, bi.i)(t) ? t : oi(t);
        return (
          En("", i, e, n),
          {
            stop: function () {
              return i.stop();
            },
            isAnimating: function () {
              return i.isAnimating();
            },
          }
        );
      }
      var Nr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        zr = Nr.length,
        Hr = function (t) {
          return "string" === typeof t ? parseFloat(t) : t;
        },
        Gr = function (t) {
          return "number" === typeof t || Gt.px.test(t);
        };
      function Yr(t, e, n, i, r, o) {
        var a, s, u, l;
        r
          ? ((t.opacity = Y(
              0,
              null !== (a = n.opacity) && void 0 !== a ? a : 1,
              Wr(i)
            )),
            (t.opacityExit = Y(
              null !== (s = e.opacity) && void 0 !== s ? s : 1,
              0,
              Xr(i)
            )))
          : o &&
            (t.opacity = Y(
              null !== (u = e.opacity) && void 0 !== u ? u : 1,
              null !== (l = n.opacity) && void 0 !== l ? l : 1,
              i
            ));
        for (var c = 0; c < zr; c++) {
          var v = "border".concat(Nr[c], "Radius"),
            d = qr(e, v),
            f = qr(n, v);
          if (void 0 !== d || void 0 !== f)
            d || (d = 0),
              f || (f = 0),
              0 === d || 0 === f || Gr(d) === Gr(f)
                ? ((t[v] = Math.max(Y(Hr(d), Hr(f), i), 0)),
                  (Gt.aQ.test(f) || Gt.aQ.test(d)) && (t[v] += "%"))
                : (t[v] = f);
        }
        (e.rotate || n.rotate) &&
          (t.rotate = Y(e.rotate || 0, n.rotate || 0, i));
      }
      function qr(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var Wr = $r(0, 0.5, we),
        Xr = $r(0.5, 0.95, Pe);
      function $r(t, e, n) {
        return function (i) {
          return i < t ? 0 : i > e ? 1 : n(q(t, e, i));
        };
      }
      function Kr(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function Qr(t, e) {
        Kr(t.x, e.x), Kr(t.y, e.y);
      }
      function _r(t, e, n, i, r) {
        return (
          (t = ht((t -= e), 1 / n, i)), void 0 !== r && (t = ht(t, 1 / r, i)), t
        );
      }
      function Jr(t, e, n, i, r) {
        var o = (0, lt.Z)(n, 3),
          a = o[0],
          s = o[1],
          u = o[2];
        !(function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            r = arguments.length > 4 ? arguments[4] : void 0,
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : t,
            a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : t;
          if (Gt.aQ.test(e)) {
            (e = parseFloat(e)), (e = Y(a.min, a.max, e / 100) - a.min);
          }
          if ("number" === typeof e) {
            var s = Y(o.min, o.max, i);
            t === o && (s -= e),
              (t.min = _r(t.min, e, n, s, r)),
              (t.max = _r(t.max, e, n, s, r));
          }
        })(t, e[a], e[s], e[u], e.scale, i, r);
      }
      var to = ["x", "scaleX", "originX"],
        eo = ["y", "scaleY", "originY"];
      function no(t, e, n, i) {
        Jr(
          t.x,
          e,
          to,
          null === n || void 0 === n ? void 0 : n.x,
          null === i || void 0 === i ? void 0 : i.x
        ),
          Jr(
            t.y,
            e,
            eo,
            null === n || void 0 === n ? void 0 : n.y,
            null === i || void 0 === i ? void 0 : i.y
          );
      }
      function io(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ro(t) {
        return io(t.x) && io(t.y);
      }
      function oo(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function ao(t) {
        return X(t.x) / X(t.y);
      }
      var so = (function () {
        function t() {
          (0, o.Z)(this, t), (this.members = []);
        }
        return (
          (0, a.Z)(t, [
            {
              key: "add",
              value: function (t) {
                ei(this.members, t), t.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (t) {
                if (
                  (ni(this.members, t),
                  t === this.prevLead && (this.prevLead = void 0),
                  t === this.lead)
                ) {
                  var e = this.members[this.members.length - 1];
                  e && this.promote(e);
                }
              },
            },
            {
              key: "relegate",
              value: function (t) {
                var e,
                  n = this.members.findIndex(function (e) {
                    return t === e;
                  });
                if (0 === n) return !1;
                for (var i = n; i >= 0; i--) {
                  var r = this.members[i];
                  if (!1 !== r.isPresent) {
                    e = r;
                    break;
                  }
                }
                return !!e && (this.promote(e), !0);
              },
            },
            {
              key: "promote",
              value: function (t, e) {
                var n,
                  i = this.lead;
                t !== i &&
                  ((this.prevLead = i),
                  (this.lead = t),
                  t.show(),
                  i &&
                    (i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    (t.resumeFrom = i),
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot &&
                      ((t.snapshot = i.snapshot),
                      (t.snapshot.latestValues =
                        i.animationValues || i.latestValues),
                      (t.snapshot.isShared = !0)),
                    (null === (n = t.root) || void 0 === n
                      ? void 0
                      : n.isUpdating) && (t.isLayoutDirty = !0),
                    !1 === t.options.crossfade && i.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (t) {
                  var e, n, i, r, o;
                  null === (n = (e = t.options).onExitComplete) ||
                    void 0 === n ||
                    n.call(e),
                    null ===
                      (o =
                        null === (i = t.resumingFrom) || void 0 === i
                          ? void 0
                          : (r = i.options).onExitComplete) ||
                      void 0 === o ||
                      o.call(r);
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (t) {
                  t.instance && t.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          t
        );
      })();
      function uo(t, e, n) {
        var i = t.x.translate / e.x,
          r = t.y.translate / e.y,
          o = "translate3d(".concat(i, "px, ").concat(r, "px, 0) ");
        if (((o += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), n)) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
          (o += "scale(".concat(l, ", ").concat(c, ")"))
          ? "none"
          : o;
      }
      var lo = function (t, e) {
          return t.depth - e.depth;
        },
        co = (function () {
          function t() {
            (0, o.Z)(this, t), (this.children = []), (this.isDirty = !1);
          }
          return (
            (0, a.Z)(t, [
              {
                key: "add",
                value: function (t) {
                  ei(this.children, t), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (t) {
                  ni(this.children, t), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (t) {
                  this.isDirty && this.children.sort(lo),
                    (this.isDirty = !1),
                    this.children.forEach(t);
                },
              },
            ]),
            t
          );
        })(),
        vo = n(4285),
        fo = ["", "X", "Y", "Z"];
      function ho(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          s = t.checkIsScrollRoot,
          u = t.resetTransform;
        return (function () {
          function t(e) {
            var i = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            (0, o.Z)(this, t),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                i.nodes.forEach(Po), i.nodes.forEach(ko);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = e),
              (this.latestValues = r),
              (this.root = a ? a.root || a : this),
              (this.path = a ? [].concat((0, At.Z)(a.path), [a]) : []),
              (this.parent = a),
              (this.depth = a ? a.depth + 1 : 0),
              e && this.root.registerPotentialNode(e, this);
            for (var s = 0; s < this.path.length; s++)
              this.path[s].shouldResetTransform = !0;
            this.root === this && (this.nodes = new co());
          }
          return (
            (0, a.Z)(t, [
              {
                key: "addEventListener",
                value: function (t, e) {
                  return (
                    this.eventHandlers.has(t) ||
                      this.eventHandlers.set(t, new ii()),
                    this.eventHandlers.get(t).add(e)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (t) {
                  for (
                    var e = this.eventHandlers.get(t),
                      n = arguments.length,
                      i = new Array(n > 1 ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    i[r - 1] = arguments[r];
                  null === e || void 0 === e || e.notify.apply(e, i);
                },
              },
              {
                key: "hasListeners",
                value: function (t) {
                  return this.eventHandlers.has(t);
                },
              },
              {
                key: "registerPotentialNode",
                value: function (t, e) {
                  this.potentialNodes.set(t, e);
                },
              },
              {
                key: "mount",
                value: function (t) {
                  var n,
                    r = this,
                    o =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!this.instance) {
                    (this.isSVG =
                      t instanceof SVGElement && "svg" !== t.tagName),
                      (this.instance = t);
                    var a = this.options,
                      s = a.layoutId,
                      u = a.layout,
                      l = a.visualElement;
                    if (
                      (l && !l.getInstance() && l.mount(t),
                      this.root.nodes.add(this),
                      null === (n = this.parent) ||
                        void 0 === n ||
                        n.children.add(this),
                      this.id && this.root.potentialNodes.delete(this.id),
                      o && (u || s) && (this.isLayoutDirty = !0),
                      e)
                    ) {
                      var c,
                        v = function () {
                          return (r.root.updateBlockedByResize = !1);
                        };
                      e(t, function () {
                        (r.root.updateBlockedByResize = !0),
                          clearTimeout(c),
                          (c = window.setTimeout(v, 250)),
                          Un.V.hasAnimatedSinceResize &&
                            ((Un.V.hasAnimatedSinceResize = !1),
                            r.nodes.forEach(bo));
                      });
                    }
                    s && this.root.registerSharedNode(s, this),
                      !1 !== this.options.animate &&
                        l &&
                        (s || u) &&
                        this.addEventListener("didUpdate", function (t) {
                          var e,
                            n,
                            o,
                            a,
                            s,
                            u = t.delta,
                            c = t.hasLayoutChanged,
                            v = t.hasRelativeTargetChanged,
                            d = t.layout;
                          if (r.isTreeAnimationBlocked())
                            return (
                              (r.target = void 0),
                              void (r.relativeTarget = void 0)
                            );
                          var f =
                              null !==
                                (n =
                                  null !== (e = r.options.transition) &&
                                  void 0 !== e
                                    ? e
                                    : l.getDefaultTransition()) && void 0 !== n
                                ? n
                                : Co,
                            h = l.getProps(),
                            p = h.onLayoutAnimationStart,
                            m = h.onLayoutAnimationComplete,
                            g = !r.targetLayout || !oo(r.targetLayout, d) || v,
                            y = !c && v;
                          if (
                            (null === (o = r.resumeFrom) || void 0 === o
                              ? void 0
                              : o.instance) ||
                            y ||
                            (c && (g || !r.currentAnimation))
                          ) {
                            r.resumeFrom &&
                              ((r.resumingFrom = r.resumeFrom),
                              (r.resumingFrom.resumingFrom = void 0)),
                              r.setAnimationOrigin(u, y);
                            var x = (0, i.Z)(
                              (0, i.Z)({}, kn(f, "layout")),
                              {},
                              { onPlay: p, onComplete: m }
                            );
                            l.shouldReduceMotion &&
                              ((x.delay = 0), (x.type = !1)),
                              r.startAnimation(x);
                          } else c || 0 !== r.animationProgress || r.finishAnimation(), r.isLead() && (null === (s = (a = r.options).onExitComplete) || void 0 === s || s.call(a));
                          r.targetLayout = d;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  var t, e;
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (t = this.getStack()) ||
                      void 0 === t ||
                      t.remove(this),
                    null === (e = this.parent) ||
                      void 0 === e ||
                      e.children.delete(this),
                    (this.instance = void 0),
                    p.qY.preRender(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  var t;
                  return (
                    this.isAnimationBlocked ||
                    (null === (t = this.parent) || void 0 === t
                      ? void 0
                      : t.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  var t;
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    null === (t = this.nodes) || void 0 === t || t.forEach(Eo));
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var t,
                    e,
                    n,
                    i =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  if (this.root.isUpdateBlocked())
                    null === (e = (t = this.options).onExitComplete) ||
                      void 0 === e ||
                      e.call(t);
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var r = 0; r < this.path.length; r++) {
                      var o = this.path[r];
                      (o.shouldResetTransform = !0), o.updateScroll();
                    }
                    var a = this.options,
                      s = a.layoutId,
                      u = a.layout;
                    if (void 0 !== s || u) {
                      var l =
                        null === (n = this.options.visualElement) ||
                        void 0 === n
                          ? void 0
                          : n.getProps().transformTemplate;
                      (this.prevTransformTemplateValue =
                        null === l || void 0 === l
                          ? void 0
                          : l(this.latestValues, "")),
                        this.updateSnapshot(),
                        i && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  if (this.isUpdateBlocked())
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(yo)
                    );
                  this.isUpdating &&
                    ((this.isUpdating = !1),
                    this.potentialNodes.size &&
                      (this.potentialNodes.forEach(Zo),
                      this.potentialNodes.clear()),
                    this.nodes.forEach(xo),
                    this.nodes.forEach(po),
                    this.nodes.forEach(mo),
                    this.clearAllSnapshots(),
                    p.iW.update(),
                    p.iW.preRender(),
                    p.iW.render());
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(go), this.sharedNodes.forEach(Ao);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  p.ZP.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var t = this;
                  p.ZP.postRender(function () {
                    t.isLayoutDirty
                      ? t.root.didUpdate()
                      : t.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  if (!this.snapshot && this.instance) {
                    var t = this.measure(),
                      e = this.removeTransform(this.removeElementScroll(t));
                    Ro(e),
                      (this.snapshot = {
                        measured: t,
                        layout: e,
                        latestValues: {},
                      });
                  }
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  var t;
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var e = 0; e < this.path.length; e++) {
                        this.path[e].updateScroll();
                      }
                    var n = this.measure();
                    Ro(n);
                    var i = this.layout;
                    (this.layout = {
                      measured: n,
                      actual: this.removeElementScroll(n),
                    }),
                      (this.layoutCorrected = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.actual),
                      null === (t = this.options.visualElement) ||
                        void 0 === t ||
                        t.notifyLayoutMeasure(
                          this.layout.actual,
                          null === i || void 0 === i ? void 0 : i.actual
                        );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  this.options.layoutScroll &&
                    this.instance &&
                    ((this.isScrollRoot = s(this.instance)),
                    (this.scroll = r(this.instance)));
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  var t;
                  if (u) {
                    var e = this.isLayoutDirty || this.shouldResetTransform,
                      n = this.projectionDelta && !ro(this.projectionDelta),
                      i =
                        null === (t = this.options.visualElement) ||
                        void 0 === t
                          ? void 0
                          : t.getProps().transformTemplate,
                      r =
                        null === i || void 0 === i
                          ? void 0
                          : i(this.latestValues, ""),
                      o = r !== this.prevTransformTemplateValue;
                    e &&
                      (n || dt(this.latestValues) || o) &&
                      (u(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var t = this.options.visualElement;
                  if (!t)
                    return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  var e = t.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (yt(e.x, n.x), yt(e.y, n.y)), e;
                },
              },
              {
                key: "removeElementScroll",
                value: function (t) {
                  var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Qr(e, t);
                  for (var n = 0; n < this.path.length; n++) {
                    var i = this.path[n],
                      r = i.scroll,
                      o = i.options,
                      a = i.isScrollRoot;
                    if (i !== this.root && r && o.layoutScroll) {
                      if (a) {
                        Qr(e, t);
                        var s = this.root.scroll;
                        s && (yt(e.x, -s.x), yt(e.y, -s.y));
                      }
                      yt(e.x, r.x), yt(e.y, r.y);
                    }
                  }
                  return e;
                },
              },
              {
                key: "applyTransform",
                value: function (t) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Qr(n, t);
                  for (var i = 0; i < this.path.length; i++) {
                    var r = this.path[i];
                    !e &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      kt(n, { x: -r.scroll.x, y: -r.scroll.y }),
                      dt(r.latestValues) && kt(n, r.latestValues);
                  }
                  return dt(this.latestValues) && kt(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (t) {
                  var e,
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Qr(n, t);
                  for (var i = 0; i < this.path.length; i++) {
                    var r = this.path[i];
                    if (r.instance && dt(r.latestValues)) {
                      vt(r.latestValues) && r.updateSnapshot();
                      var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                      Qr(o, r.measure()),
                        no(
                          n,
                          r.latestValues,
                          null === (e = r.snapshot) || void 0 === e
                            ? void 0
                            : e.layout,
                          o
                        );
                    }
                  }
                  return dt(this.latestValues) && no(n, this.latestValues), n;
                },
              },
              {
                key: "setTargetDelta",
                value: function (t) {
                  (this.targetDelta = t), this.root.scheduleUpdateProjection();
                },
              },
              {
                key: "setOptions",
                value: function (t) {
                  this.options = (0, i.Z)(
                    (0, i.Z)((0, i.Z)({}, this.options), t),
                    {},
                    { crossfade: void 0 === t.crossfade || t.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var t,
                    e,
                    n,
                    i,
                    r = this.options,
                    o = r.layout,
                    a = r.layoutId;
                  this.layout &&
                    (o || a) &&
                    (this.targetDelta ||
                      this.relativeTarget ||
                      ((this.relativeParent =
                        this.getClosestProjectingParent()),
                      this.relativeParent &&
                        this.relativeParent.layout &&
                        ((this.relativeTarget = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        (this.relativeTargetOrigin = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        tt(
                          this.relativeTargetOrigin,
                          this.layout.actual,
                          this.relativeParent.layout.actual
                        ),
                        Qr(this.relativeTarget, this.relativeTargetOrigin))),
                    (this.relativeTarget || this.targetDelta) &&
                      (this.target ||
                        ((this.target = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        (this.targetWithTransforms = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        })),
                      this.relativeTarget &&
                      this.relativeTargetOrigin &&
                      (null === (t = this.relativeParent) || void 0 === t
                        ? void 0
                        : t.target)
                        ? ((e = this.target),
                          (n = this.relativeTarget),
                          (i = this.relativeParent.target),
                          _(e.x, n.x, i.x),
                          _(e.y, n.y, i.y))
                        : this.targetDelta
                        ? (Boolean(this.resumingFrom)
                            ? (this.target = this.applyTransform(
                                this.layout.actual
                              ))
                            : Qr(this.target, this.layout.actual),
                          gt(this.target, this.targetDelta))
                        : Qr(this.target, this.layout.actual),
                      this.attemptToResolveRelativeTarget &&
                        ((this.attemptToResolveRelativeTarget = !1),
                        (this.relativeParent =
                          this.getClosestProjectingParent()),
                        this.relativeParent &&
                          Boolean(this.relativeParent.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !this.relativeParent.options.layoutScroll &&
                          this.relativeParent.target &&
                          ((this.relativeTarget = {
                            x: { min: 0, max: 0 },
                            y: { min: 0, max: 0 },
                          }),
                          (this.relativeTargetOrigin = {
                            x: { min: 0, max: 0 },
                            y: { min: 0, max: 0 },
                          }),
                          tt(
                            this.relativeTargetOrigin,
                            this.target,
                            this.relativeParent.target
                          ),
                          Qr(
                            this.relativeTarget,
                            this.relativeTargetOrigin
                          )))));
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (this.parent && !dt(this.parent.latestValues))
                    return (this.parent.relativeTarget ||
                      this.parent.targetDelta) &&
                      this.parent.layout
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var t,
                    e = this.options,
                    n = e.layout,
                    i = e.layoutId;
                  if (
                    ((this.isTreeAnimating = Boolean(
                      (null === (t = this.parent) || void 0 === t
                        ? void 0
                        : t.isTreeAnimating) ||
                        this.currentAnimation ||
                        this.pendingAnimation
                    )),
                    this.isTreeAnimating ||
                      (this.targetDelta = this.relativeTarget = void 0),
                    this.layout && (n || i))
                  ) {
                    var r = this.getLead();
                    Qr(this.layoutCorrected, this.layout.actual),
                      (function (t, e, n) {
                        var i,
                          r,
                          o =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          a = n.length;
                        if (a) {
                          var s, u;
                          e.x = e.y = 1;
                          for (var l = 0; l < a; l++)
                            (u = (s = n[l]).projectionDelta),
                              "contents" !==
                                (null ===
                                  (r =
                                    null === (i = s.instance) || void 0 === i
                                      ? void 0
                                      : i.style) || void 0 === r
                                  ? void 0
                                  : r.display) &&
                                (o &&
                                  s.options.layoutScroll &&
                                  s.scroll &&
                                  s !== s.root &&
                                  kt(t, { x: -s.scroll.x, y: -s.scroll.y }),
                                u &&
                                  ((e.x *= u.x.scale),
                                  (e.y *= u.y.scale),
                                  gt(t, u)),
                                o &&
                                  dt(s.latestValues) &&
                                  kt(t, s.latestValues));
                        }
                      })(
                        this.layoutCorrected,
                        this.treeScale,
                        this.path,
                        Boolean(this.resumingFrom) || this !== r
                      );
                    var o = r.target;
                    if (o) {
                      this.projectionDelta ||
                        ((this.projectionDelta = {
                          x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                          y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                        }),
                        (this.projectionDeltaWithTransform = {
                          x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                          y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                        }));
                      var a = this.treeScale.x,
                        s = this.treeScale.y,
                        u = this.projectionTransform;
                      Q(
                        this.projectionDelta,
                        this.layoutCorrected,
                        o,
                        this.latestValues
                      ),
                        (this.projectionTransform = uo(
                          this.projectionDelta,
                          this.treeScale
                        )),
                        (this.projectionTransform === u &&
                          this.treeScale.x === a &&
                          this.treeScale.y === s) ||
                          ((this.hasProjected = !0),
                          this.scheduleRender(),
                          this.notifyListeners("projectionUpdate", o));
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var t,
                    e,
                    n,
                    i =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  null === (e = (t = this.options).scheduleRender) ||
                    void 0 === e ||
                    e.call(t),
                    i &&
                      (null === (n = this.getStack()) ||
                        void 0 === n ||
                        n.scheduleRender()),
                    this.resumingFrom &&
                      !this.resumingFrom.instance &&
                      (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (t) {
                  var e,
                    n = this,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    o = this.snapshot,
                    a =
                      (null === o || void 0 === o ? void 0 : o.latestValues) ||
                      {},
                    s = (0, i.Z)({}, this.latestValues),
                    u = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    };
                  (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !r);
                  var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                    c = null === o || void 0 === o ? void 0 : o.isShared,
                    v =
                      ((null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.members.length) || 0) <= 1,
                    d = Boolean(
                      c &&
                        !v &&
                        !0 === this.options.crossfade &&
                        !this.path.some(Vo)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (e) {
                      var i,
                        r = e / 1e3;
                      To(u.x, t.x, r),
                        To(u.y, t.y, r),
                        n.setTargetDelta(u),
                        n.relativeTarget &&
                          n.relativeTargetOrigin &&
                          n.layout &&
                          (null === (i = n.relativeParent) || void 0 === i
                            ? void 0
                            : i.layout) &&
                          (tt(
                            l,
                            n.layout.actual,
                            n.relativeParent.layout.actual
                          ),
                          So(n.relativeTarget, n.relativeTargetOrigin, l, r)),
                        c &&
                          ((n.animationValues = s),
                          Yr(s, a, n.latestValues, r, d, v)),
                        n.root.scheduleUpdateProjection(),
                        n.scheduleRender(),
                        (n.animationProgress = r);
                    }),
                    this.mixTargetDelta(0);
                },
              },
              {
                key: "startAnimation",
                value: function (t) {
                  var e,
                    n,
                    r = this;
                  this.notifyListeners("animationStart"),
                    null === (e = this.currentAnimation) ||
                      void 0 === e ||
                      e.stop(),
                    this.resumingFrom &&
                      (null === (n = this.resumingFrom.currentAnimation) ||
                        void 0 === n ||
                        n.stop()),
                    this.pendingAnimation &&
                      (p.qY.update(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = p.ZP.update(function () {
                      (Un.V.hasAnimatedSinceResize = !0),
                        (r.currentAnimation = Br(
                          0,
                          1e3,
                          (0, i.Z)(
                            (0, i.Z)({}, t),
                            {},
                            {
                              onUpdate: function (e) {
                                var n;
                                r.mixTargetDelta(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: function () {
                                var e;
                                null === (e = t.onComplete) ||
                                  void 0 === e ||
                                  e.call(t),
                                  r.completeAnimation();
                              },
                            }
                          )
                        )),
                        r.resumingFrom &&
                          (r.resumingFrom.currentAnimation =
                            r.currentAnimation),
                        (r.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  var t;
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0)),
                    null === (t = this.getStack()) ||
                      void 0 === t ||
                      t.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  var t;
                  this.currentAnimation &&
                    (null === (t = this.mixTargetDelta) ||
                      void 0 === t ||
                      t.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var t = this.getLead(),
                    e = t.targetWithTransforms,
                    n = t.target,
                    i = t.layout,
                    r = t.latestValues;
                  if (e && n && i) {
                    if (
                      this !== t &&
                      this.layout &&
                      i &&
                      Do(
                        this.options.animationType,
                        this.layout.actual,
                        i.actual
                      )
                    ) {
                      n = this.target || {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      };
                      var o = X(this.layout.actual.x);
                      (n.x.min = t.target.x.min), (n.x.max = n.x.min + o);
                      var a = X(this.layout.actual.y);
                      (n.y.min = t.target.y.min), (n.y.max = n.y.min + a);
                    }
                    Qr(e, n),
                      kt(e, r),
                      Q(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        e,
                        r
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (t, e) {
                  var n, i, r;
                  this.sharedNodes.has(t) || this.sharedNodes.set(t, new so()),
                    this.sharedNodes.get(t).add(e),
                    e.promote({
                      transition:
                        null === (n = e.options.initialPromotionConfig) ||
                        void 0 === n
                          ? void 0
                          : n.transition,
                      preserveFollowOpacity:
                        null ===
                          (r =
                            null === (i = e.options.initialPromotionConfig) ||
                            void 0 === i
                              ? void 0
                              : i.shouldPreserveFollowOpacity) || void 0 === r
                          ? void 0
                          : r.call(i, e),
                    });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var t = this.getStack();
                  return !t || t.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var t;
                  return (
                    (this.options.layoutId &&
                      (null === (t = this.getStack()) || void 0 === t
                        ? void 0
                        : t.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var t;
                  return this.options.layoutId
                    ? null === (t = this.getStack()) || void 0 === t
                      ? void 0
                      : t.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var t = this.options.layoutId;
                  if (t) return this.root.sharedNodes.get(t);
                },
              },
              {
                key: "promote",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.needsReset,
                    n = t.transition,
                    i = t.preserveFollowOpacity,
                    r = this.getStack();
                  r && r.promote(this, i),
                    e &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var t = this.getStack();
                  return !!t && t.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var t = this.options.visualElement;
                  if (t) {
                    for (var e = !1, n = {}, i = 0; i < fo.length; i++) {
                      var r = "rotate" + fo[i];
                      t.getStaticValue(r) &&
                        ((e = !0),
                        (n[r] = t.getStaticValue(r)),
                        t.setStaticValue(r, 0));
                    }
                    if (e) {
                      for (var o in (null === t ||
                        void 0 === t ||
                        t.syncRender(),
                      n))
                        t.setStaticValue(o, n[o]);
                      t.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var t,
                    e,
                    n,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return { visibility: "hidden" };
                  r.visibility = "";
                  var o =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate;
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (r.opacity = ""),
                      (r.pointerEvents = (0, vo.b)(i.pointerEvents) || ""),
                      (r.transform = o ? o(this.latestValues, "") : "none"),
                      r
                    );
                  var a = this.getLead();
                  if (!this.projectionDelta || !this.layout || !a.target) {
                    var s = {};
                    return (
                      this.options.layoutId &&
                        ((s.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (s.pointerEvents = (0, vo.b)(i.pointerEvents) || "")),
                      this.hasProjected &&
                        !dt(this.latestValues) &&
                        ((s.transform = o ? o({}, "") : "none"),
                        (this.hasProjected = !1)),
                      s
                    );
                  }
                  var u = a.animationValues || a.latestValues;
                  this.applyTransformsToTarget(),
                    (r.transform = uo(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      u
                    )),
                    o && (r.transform = o(u, r.transform));
                  var l = this.projectionDelta,
                    c = l.x,
                    v = l.y;
                  for (var d in ((r.transformOrigin = ""
                    .concat(100 * c.origin, "% ")
                    .concat(100 * v.origin, "% 0")),
                  a.animationValues
                    ? (r.opacity =
                        a === this
                          ? null !==
                              (n =
                                null !== (e = u.opacity) && void 0 !== e
                                  ? e
                                  : this.latestValues.opacity) && void 0 !== n
                            ? n
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : u.opacityExit)
                    : (r.opacity =
                        a === this
                          ? void 0 !== u.opacity
                            ? u.opacity
                            : ""
                          : void 0 !== u.opacityExit
                          ? u.opacityExit
                          : 0),
                  Xn.P))
                    if (void 0 !== u[d]) {
                      var f = Xn.P[d],
                        h = f.correct,
                        p = f.applyTo,
                        m = h(u[d], a);
                      if (p)
                        for (var g = p.length, y = 0; y < g; y++) r[p[y]] = m;
                      else r[d] = m;
                    }
                  return (
                    this.options.layoutId &&
                      (r.pointerEvents =
                        a === this ? (0, vo.b)(i.pointerEvents) || "" : "none"),
                    r
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (t) {
                    var e;
                    return null === (e = t.currentAnimation) || void 0 === e
                      ? void 0
                      : e.stop();
                  }),
                    this.root.nodes.forEach(yo),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            t
          );
        })();
      }
      function po(t) {
        t.updateLayout();
      }
      function mo(t) {
        var e,
          n,
          i,
          r =
            (null === (e = t.resumeFrom) || void 0 === e
              ? void 0
              : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          var o = t.layout,
            a = o.actual,
            s = o.measured,
            u = t.options.animationType;
          "size" === u
            ? st(function (t) {
                var e = r.isShared ? r.measured[t] : r.layout[t],
                  n = X(e);
                (e.min = a[t].min), (e.max = e.min + n);
              })
            : Do(u, r.layout, a) &&
              st(function (t) {
                var e = r.isShared ? r.measured[t] : r.layout[t],
                  n = X(a[t]);
                e.max = e.min + n;
              });
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          Q(l, a, r.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          r.isShared
            ? Q(c, t.applyTransform(s, !0), r.measured)
            : Q(c, a, r.layout);
          var v = !ro(l),
            d = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var f = t.relativeParent,
              h = f.snapshot,
              p = f.layout;
            if (h && p) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              tt(m, r.layout, h.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              tt(g, a, p.actual), oo(m, g) || (d = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: a,
            snapshot: r,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: v,
            hasRelativeTargetChanged: d,
          });
        } else
          t.isLead() &&
            (null === (i = (n = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(n));
        t.options.transition = void 0;
      }
      function go(t) {
        t.clearSnapshot();
      }
      function yo(t) {
        t.clearMeasurements();
      }
      function xo(t) {
        var e = t.options.visualElement;
        (null === e || void 0 === e
          ? void 0
          : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function bo(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function Po(t) {
        t.resolveTargetDelta();
      }
      function ko(t) {
        t.calcProjection();
      }
      function Eo(t) {
        t.resetRotation();
      }
      function Ao(t) {
        t.removeLeadSnapshot();
      }
      function To(t, e, n) {
        (t.translate = Y(e.translate, 0, n)),
          (t.scale = Y(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function wo(t, e, n, i) {
        (t.min = Y(e.min, n.min, i)), (t.max = Y(e.max, n.max, i));
      }
      function So(t, e, n, i) {
        wo(t.x, e.x, n.x, i), wo(t.y, e.y, n.y, i);
      }
      function Vo(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var Co = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Zo(t, e) {
        for (var n = t.root, i = t.path.length - 1; i >= 0; i--)
          if (Boolean(t.path[i].instance)) {
            n = t.path[i];
            break;
          }
        var r = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        r && t.mount(r, !0);
      }
      function Mo(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function Ro(t) {
        Mo(t.x), Mo(t.y);
      }
      function Do(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t &&
            !(function (t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0.1;
              return C(t, e) <= n;
            })(ao(e), ao(n), 0.2))
        );
      }
      var Lo = ho({
          attachResizeListener: function (t, e) {
            return g(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        jo = { current: void 0 },
        Oo = ho({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!jo.current) {
              var t = new Lo(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (jo.current = t);
            }
            return jo.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return Boolean("fixed" === window.getComputedStyle(t).position);
          },
        }),
        Fo = (0, i.Z)(
          (0, i.Z)((0, i.Z)((0, i.Z)({}, Ur), Rn), Qn),
          {},
          { projectionNodeConstructor: Oo }
        );
    },
  },
]);
//# sourceMappingURL=631.8197571d.chunk.js.map
