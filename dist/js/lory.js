!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t()
  else if ("function" == typeof define && define.amd) define([], t)
  else {
    var n = t()
    for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i]
  }
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(i) {
      if (n[i]) return n[i].exports
      var o = (n[i] = { i: i, l: !1, exports: {} })
      return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
    }
    var n = {}
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, i) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i,
          })
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return t.d(n, "a", n), n
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (t.p = ""),
      t((t.s = 8))
    )
  })([
    function (e, t, n) {
      "use strict"
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function o(e, t) {
        function n(e, t) {
          var n = F,
            i = n.classNameActiveSlide
          e.forEach(function (e, t) {
            e.classList.contains(i) && e.classList.remove(i)
          }),
            e[t].classList.add(i)
        }
        function i(e) {
          var t = F,
            n = t.infinite,
            i = e.slice(0, n),
            o = e.slice(e.length - n, e.length)
          return (
            i.forEach(function (e) {
              var t = e.cloneNode(!0)
              k.appendChild(t)
            }),
            o.reverse().forEach(function (e) {
              var t = e.cloneNode(!0)
              k.insertBefore(t, k.firstChild)
            }),
            k.addEventListener(A.transitionEnd, x),
            m.call(k.children)
          )
        }
        function o(t, n, i) {
          ;(0, u.default)(e, t + ".lory." + n, i)
        }
        function s(e, t, n) {
          var i = k && k.style
          i &&
            ((i[A.transition + "TimingFunction"] = n),
            (i[A.transition + "Duration"] = t + "ms"),
            (i[A.transform] = "translateX(" + e + "px)"))
        }
        function d(e) {
          return e.getBoundingClientRect().width || e.offsetWidth
        }
        function c(e, t) {
          var i = F,
            r = i.slideSpeed,
            a = i.slidesToScroll,
            d = i.infinite,
            l = i.rewind,
            c = i.rewindPrev,
            u = i.rewindSpeed,
            v = i.ease,
            f = i.classNameActiveSlide,
            h = i.classNameDisabledNextCtrl,
            p = void 0 === h ? "disabled" : h,
            b = i.classNameDisabledPrevCtrl,
            y = void 0 === b ? "disabled" : b,
            E = r,
            L = t ? z + 1 : z - 1,
            x = Math.round(_ - S)
          o("before", "slide", { index: z, nextSlide: L }),
            B && B.classList.remove(y),
            T && T.classList.remove(p),
            "number" != typeof e &&
              (e = t
                ? d && z + 2 * d !== P.length
                  ? z + (d - (z % d))
                  : z + a
                : d && z % d != 0
                ? z - (z % d)
                : z - a),
            (e = Math.min(Math.max(e, 0), P.length - 1)),
            d && void 0 === t && (e += d),
            c &&
              0 === Math.abs(M.x) &&
              !1 === t &&
              ((e = P.length - 1), (E = u))
          var w = Math.min(Math.max(-1 * P[e].offsetLeft, -1 * x), 0)
          l && Math.abs(M.x) === x && t && ((w = 0), (e = 0), (E = u)),
            s(w, E, v),
            (M.x = w),
            P[e].offsetLeft <= x && (z = e),
            !d ||
              (e !== P.length - d &&
                e !== P.length - (P.length % d) &&
                0 !== e) ||
              (t && (z = d),
              t || (z = P.length - 2 * d),
              (M.x = -1 * P[z].offsetLeft),
              (D = function () {
                s(-1 * P[z].offsetLeft, 0, void 0)
              })),
            f && n(m.call(P), z),
            !B || d || c || 0 !== e || B.classList.add(y),
            !T || d || l || e + 1 !== P.length || T.classList.add(p),
            o("after", "slide", { currentSlide: z })
        }
        function v() {
          o("before", "init"), (A = (0, a.default)()), (F = r({}, f.default, t))
          var s = F,
            d = s.classNameFrame,
            l = s.classNameSlideContainer,
            c = s.classNamePrevCtrl,
            u = s.classNameNextCtrl,
            v = s.classNameDisabledNextCtrl,
            p = void 0 === v ? "disabled" : v,
            b = s.classNameDisabledPrevCtrl,
            L = void 0 === b ? "disabled" : b,
            x = s.enableMouseEvents,
            g = s.classNameActiveSlide,
            N = s.initialIndex
          ;(z = N),
            (O = e.getElementsByClassName(d)[0]),
            (k = O.getElementsByClassName(l)[0]),
            (B = e.getElementsByClassName(c)[0]),
            (T = e.getElementsByClassName(u)[0]),
            (M = { x: k.offsetLeft, y: k.offsetTop }),
            F.infinite
              ? (P = i(m.call(k.children)))
              : ((P = m.call(k.children)),
                B && !F.rewindPrev && B.classList.add(L),
                T && 1 === P.length && !F.rewind && T.classList.add(p)),
            h(),
            g && n(P, z),
            B &&
              T &&
              (B.addEventListener("click", y), T.addEventListener("click", E)),
            O.addEventListener("touchstart", w, I),
            x &&
              (O.addEventListener("mousedown", w),
              O.addEventListener("click", C)),
            F.window.addEventListener("resize", j),
            o("after", "init")
        }
        function h() {
          var e = F,
            t = e.infinite,
            i = e.ease,
            o = e.rewindSpeed,
            r = e.rewindOnResize,
            a = e.classNameActiveSlide,
            l = e.initialIndex
          ;(_ = d(k)),
            (S = d(O)),
            S === _ &&
              (_ = P.reduce(function (e, t) {
                return e + d(t)
              }, 0)),
            r ? (z = l) : ((i = null), (o = 0)),
            t
              ? (s(-1 * P[z + t].offsetLeft, 0, null),
                (z += t),
                (M.x = -1 * P[z].offsetLeft))
              : (s(-1 * P[z].offsetLeft, o, i), (M.x = -1 * P[z].offsetLeft)),
            a && n(m.call(P), z)
        }
        function p(e) {
          c(e)
        }
        function b() {
          return z - F.infinite || 0
        }
        function y() {
          c(!1, !1)
        }
        function E() {
          c(!1, !0)
        }
        function L() {
          o("before", "destroy"),
            O.removeEventListener(A.transitionEnd, x),
            O.removeEventListener("touchstart", w, I),
            O.removeEventListener("touchmove", g, I),
            O.removeEventListener("touchend", N),
            O.removeEventListener("mousemove", g),
            O.removeEventListener("mousedown", w),
            O.removeEventListener("mouseup", N),
            O.removeEventListener("mouseleave", N),
            O.removeEventListener("click", C),
            F.window.removeEventListener("resize", j),
            B && B.removeEventListener("click", y),
            T && T.removeEventListener("click", E),
            F.infinite &&
              Array.apply(null, Array(F.infinite)).forEach(function () {
                k.removeChild(k.firstChild), k.removeChild(k.lastChild)
              }),
            o("after", "destroy")
        }
        function x() {
          D && (D(), (D = void 0))
        }
        function w(e) {
          var t = F,
            n = t.enableMouseEvents,
            i = e.touches ? e.touches[0] : e
          n &&
            (O.addEventListener("mousemove", g),
            O.addEventListener("mouseup", N),
            O.addEventListener("mouseleave", N)),
            O.addEventListener("touchmove", g, I),
            O.addEventListener("touchend", N)
          var r = i.pageX,
            s = i.pageY
          ;(Q = { x: r, y: s, time: Date.now() }),
            (R = void 0),
            (X = {}),
            o("on", "touchstart", { event: e })
        }
        function g(e) {
          var t = e.touches ? e.touches[0] : e,
            n = t.pageX,
            i = t.pageY
          ;(X = { x: n - Q.x, y: i - Q.y }),
            void 0 === R && (R = !!(R || Math.abs(X.x) < Math.abs(X.y))),
            !R && Q && s(M.x + X.x, 0, null),
            o("on", "touchmove", { event: e })
        }
        function N(e) {
          var t = Q ? Date.now() - Q.time : void 0,
            n =
              (Number(t) < 300 && Math.abs(X.x) > 25) || Math.abs(X.x) > S / 3,
            i = (!z && X.x > 0) || (z === P.length - 1 && X.x < 0),
            r = X.x < 0
          R || (n && !i ? c(!1, r) : s(M.x, F.snapBackSpeed)),
            (Q = void 0),
            O.removeEventListener("touchmove", g),
            O.removeEventListener("touchend", N),
            O.removeEventListener("mousemove", g),
            O.removeEventListener("mouseup", N),
            O.removeEventListener("mouseleave", N),
            o("on", "touchend", { event: e })
        }
        function C(e) {
          X.x && e.preventDefault()
        }
        function j(e) {
          S !== d(O) && (h(), o("on", "resize", { event: e }))
        }
        var M = void 0,
          _ = void 0,
          S = void 0,
          P = void 0,
          O = void 0,
          k = void 0,
          B = void 0,
          T = void 0,
          A = void 0,
          D = void 0,
          z = 0,
          F = {},
          I = !!(0, l.default)() && { passive: !0 }
        "undefined" != typeof jQuery && e instanceof jQuery && (e = e[0])
        var Q = void 0,
          X = void 0,
          R = void 0
        return (
          v(),
          {
            setup: v,
            reset: h,
            slideTo: p,
            returnIndex: b,
            prev: y,
            next: E,
            destroy: L,
          }
        )
      }
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }
      t.lory = o
      var s = n(1),
        a = i(s),
        d = n(2),
        l = i(d),
        c = n(3),
        u = i(c),
        v = n(6),
        f = i(v),
        m = Array.prototype.slice
    },
    function (e, t, n) {
      "use strict"
      function i() {
        var e = void 0,
          t = void 0,
          n = void 0
        return (
          (function () {
            var i = document.createElement("_"),
              o = i.style,
              r = void 0
            "" === o[(r = "webkitTransition")] &&
              ((n = "webkitTransitionEnd"), (t = r)),
              "" === o[(r = "transition")] && ((n = "transitionend"), (t = r)),
              "" === o[(r = "webkitTransform")] && (e = r),
              "" === o[(r = "msTransform")] && (e = r),
              "" === o[(r = "transform")] && (e = r),
              document.body.insertBefore(i, null),
              (o[e] = "translateX(0)"),
              document.body.removeChild(i)
          })(),
          { transform: e, transition: t, transitionEnd: n }
        )
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i)
    },
    function (e, t, n) {
      "use strict"
      function i() {
        var e = !1
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0
            },
          })
          window.addEventListener("testPassive", null, t),
            window.removeEventListener("testPassive", null, t)
        } catch (e) {}
        return e
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i)
    },
    function (e, t, n) {
      "use strict"
      function i(e, t, n) {
        var i = new r.default(t, { bubbles: !0, cancelable: !0, detail: n })
        e.dispatchEvent(i)
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i)
      var o = n(4),
        r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(o)
    },
    function (e, t, n) {
      ;(function (t) {
        var n = t.CustomEvent
        e.exports = (function () {
          try {
            var e = new n("cat", { detail: { foo: "bar" } })
            return "cat" === e.type && "bar" === e.detail.foo
          } catch (e) {}
          return !1
        })()
          ? n
          : "undefined" != typeof document &&
            "function" == typeof document.createEvent
          ? function (e, t) {
              var n = document.createEvent("CustomEvent")
              return (
                t
                  ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
                  : n.initCustomEvent(e, !1, !1, void 0),
                n
              )
            }
          : function (e, t) {
              var n = document.createEventObject()
              return (
                (n.type = e),
                t
                  ? ((n.bubbles = Boolean(t.bubbles)),
                    (n.cancelable = Boolean(t.cancelable)),
                    (n.detail = t.detail))
                  : ((n.bubbles = !1),
                    (n.cancelable = !1),
                    (n.detail = void 0)),
                n
              )
            }
      }).call(t, n(5))
    },
    function (e, t) {
      var n
      n = (function () {
        return this
      })()
      try {
        n = n || Function("return this")() || (0, eval)("this")
      } catch (e) {
        "object" == typeof window && (n = window)
      }
      e.exports = n
    },
    function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          slidesToScroll: 1,
          slideSpeed: 300,
          rewindSpeed: 600,
          snapBackSpeed: 200,
          ease: "ease",
          rewind: !1,
          infinite: !1,
          initialIndex: 0,
          classNameFrame: "js_frame",
          classNameSlideContainer: "js_slides",
          classNamePrevCtrl: "js_prev",
          classNameNextCtrl: "js_next",
          classNameActiveSlide: "active",
          enableMouseEvents: !1,
          window: "undefined" != typeof window ? window : null,
          rewindOnResize: !0,
        })
    },
    ,
    function (e, t, n) {
      "use strict"
      var i = n(0)
      "undefined" != typeof jQuery &&
        (function (e) {
          e.fn.lory = function (t) {
            return this.each(function () {
              var n
              e.data(this, "lory") ||
                ((n = e.extend({}, t, e(this).data())),
                e.data(this, "lory", (0, i.lory)(this, n)))
            })
          }
        })(jQuery)
    },
  ])
})
//# sourceMappingURL=jquery.lory.min.js.map
