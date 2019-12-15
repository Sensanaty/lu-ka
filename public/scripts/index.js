"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function t(r) {
    if (n[r]) return n[r].exports;
    var a = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: r
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (t.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var a in e) {
      t.d(r, a, function (n) {
        return e[n];
      }.bind(null, a));
    }
    return r;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 0);
}([function (e, n, t) {
  "use strict";

  t.r(n);
  var r = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    timelineOffset: 0
  },
      a = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0
  },
      u = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
      o = {
    CSS: {},
    springs: {}
  };

  function i(e, n, t) {
    return Math.min(Math.max(e, n), t);
  }

  function c(e, n) {
    return e.indexOf(n) > -1;
  }

  function s(e, n) {
    return e.apply(null, n);
  }

  var l = {
    arr: function arr(e) {
      return Array.isArray(e);
    },
    obj: function obj(e) {
      return c(Object.prototype.toString.call(e), "Object");
    },
    pth: function pth(e) {
      return l.obj(e) && e.hasOwnProperty("totalLength");
    },
    svg: function svg(e) {
      return e instanceof SVGElement;
    },
    inp: function inp(e) {
      return e instanceof HTMLInputElement;
    },
    dom: function dom(e) {
      return e.nodeType || l.svg(e);
    },
    str: function str(e) {
      return "string" == typeof e;
    },
    fnc: function fnc(e) {
      return "function" == typeof e;
    },
    und: function und(e) {
      return void 0 === e;
    },
    hex: function hex(e) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
    },
    rgb: function rgb(e) {
      return /^rgb/.test(e);
    },
    hsl: function hsl(e) {
      return /^hsl/.test(e);
    },
    col: function col(e) {
      return l.hex(e) || l.rgb(e) || l.hsl(e);
    },
    key: function key(e) {
      return !r.hasOwnProperty(e) && !a.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e;
    }
  };

  function f(e) {
    var n = /\(([^)]+)\)/.exec(e);
    return n ? n[1].split(",").map(function (e) {
      return parseFloat(e);
    }) : [];
  }

  function d(e, n) {
    var t = f(e),
        r = i(l.und(t[0]) ? 1 : t[0], .1, 100),
        a = i(l.und(t[1]) ? 100 : t[1], .1, 100),
        u = i(l.und(t[2]) ? 10 : t[2], .1, 100),
        c = i(l.und(t[3]) ? 0 : t[3], .1, 100),
        s = Math.sqrt(a / r),
        d = u / (2 * Math.sqrt(a * r)),
        p = d < 1 ? s * Math.sqrt(1 - d * d) : 0,
        v = 1,
        h = d < 1 ? (d * s - c) / p : -c + s;

    function g(e) {
      var t = n ? n * e / 1e3 : e;
      return t = d < 1 ? Math.exp(-t * d * s) * (v * Math.cos(p * t) + h * Math.sin(p * t)) : (v + h * t) * Math.exp(-t * s), 0 === e || 1 === e ? e : 1 - t;
    }

    return n ? g : function () {
      var n = o.springs[e];
      if (n) return n;

      for (var t = 0, r = 0;;) {
        if (1 === g(t += 1 / 6)) {
          if (++r >= 16) break;
        } else r = 0;
      }

      var a = t * (1 / 6) * 1e3;
      return o.springs[e] = a, a;
    };
  }

  function p(e) {
    return void 0 === e && (e = 10), function (n) {
      return Math.round(n * e) * (1 / e);
    };
  }

  var v,
      h,
      g = function () {
    var e = 11,
        n = 1 / (e - 1);

    function t(e, n) {
      return 1 - 3 * n + 3 * e;
    }

    function r(e, n) {
      return 3 * n - 6 * e;
    }

    function a(e) {
      return 3 * e;
    }

    function u(e, n, u) {
      return ((t(n, u) * e + r(n, u)) * e + a(n)) * e;
    }

    function o(e, n, u) {
      return 3 * t(n, u) * e * e + 2 * r(n, u) * e + a(n);
    }

    return function (t, r, a, i) {
      if (0 <= t && t <= 1 && 0 <= a && a <= 1) {
        var c = new Float32Array(e);
        if (t !== r || a !== i) for (var s = 0; s < e; ++s) {
          c[s] = u(s * n, t, a);
        }
        return function (e) {
          return t === r && a === i ? e : 0 === e || 1 === e ? e : u(l(e), r, i);
        };
      }

      function l(r) {
        for (var i = 0, s = 1, l = e - 1; s !== l && c[s] <= r; ++s) {
          i += n;
        }

        --s;
        var f = i + (r - c[s]) / (c[s + 1] - c[s]) * n,
            d = o(f, t, a);
        return d >= .001 ? function (e, n, t, r) {
          for (var a = 0; a < 4; ++a) {
            var i = o(n, t, r);
            if (0 === i) return n;
            n -= (u(n, t, r) - e) / i;
          }

          return n;
        }(r, f, t, a) : 0 === d ? f : function (e, n, t, r, a) {
          var o,
              i,
              c = 0;

          do {
            (o = u(i = n + (t - n) / 2, r, a) - e) > 0 ? t = i : n = i;
          } while (Math.abs(o) > 1e-7 && ++c < 10);

          return i;
        }(r, i, i + n, t, a);
      }
    };
  }(),
      m = (v = {
    linear: function linear() {
      return function (e) {
        return e;
      };
    }
  }, h = {
    Sine: function Sine() {
      return function (e) {
        return 1 - Math.cos(e * Math.PI / 2);
      };
    },
    Circ: function Circ() {
      return function (e) {
        return 1 - Math.sqrt(1 - e * e);
      };
    },
    Back: function Back() {
      return function (e) {
        return e * e * (3 * e - 2);
      };
    },
    Bounce: function Bounce() {
      return function (e) {
        for (var n, t = 4; e < ((n = Math.pow(2, --t)) - 1) / 11;) {
          ;
        }

        return 1 / Math.pow(4, 3 - t) - 7.5625 * Math.pow((3 * n - 2) / 22 - e, 2);
      };
    },
    Elastic: function Elastic(e, n) {
      void 0 === e && (e = 1), void 0 === n && (n = .5);
      var t = i(e, 1, 10),
          r = i(n, .1, 2);
      return function (e) {
        return 0 === e || 1 === e ? e : -t * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - r / (2 * Math.PI) * Math.asin(1 / t)) * (2 * Math.PI) / r);
      };
    }
  }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, n) {
    h[e] = function () {
      return function (e) {
        return Math.pow(e, n + 2);
      };
    };
  }), Object.keys(h).forEach(function (e) {
    var n = h[e];
    v["easeIn" + e] = n, v["easeOut" + e] = function (e, t) {
      return function (r) {
        return 1 - n(e, t)(1 - r);
      };
    }, v["easeInOut" + e] = function (e, t) {
      return function (r) {
        return r < .5 ? n(e, t)(2 * r) / 2 : 1 - n(e, t)(-2 * r + 2) / 2;
      };
    };
  }), v);

  function y(e, n) {
    if (l.fnc(e)) return e;
    var t = e.split("(")[0],
        r = m[t],
        a = f(e);

    switch (t) {
      case "spring":
        return d(e, n);

      case "cubicBezier":
        return s(g, a);

      case "steps":
        return s(p, a);

      default:
        return s(r, a);
    }
  }

  function b(e) {
    try {
      return document.querySelectorAll(e);
    } catch (e) {
      return;
    }
  }

  function M(e, n) {
    for (var t = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, a = [], u = 0; u < t; u++) {
      if (u in e) {
        var o = e[u];
        n.call(r, o, u, e) && a.push(o);
      }
    }

    return a;
  }

  function w(e) {
    return e.reduce(function (e, n) {
      return e.concat(l.arr(n) ? w(n) : n);
    }, []);
  }

  function x(e) {
    return l.arr(e) ? e : (l.str(e) && (e = b(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
  }

  function O(e, n) {
    return e.some(function (e) {
      return e === n;
    });
  }

  function k(e) {
    var n = {};

    for (var t in e) {
      n[t] = e[t];
    }

    return n;
  }

  function P(e, n) {
    var t = k(e);

    for (var r in e) {
      t[r] = n.hasOwnProperty(r) ? n[r] : e[r];
    }

    return t;
  }

  function C(e, n) {
    var t = k(e);

    for (var r in n) {
      t[r] = l.und(e[r]) ? n[r] : e[r];
    }

    return t;
  }

  function E(e) {
    return l.rgb(e) ? (t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n = e)) ? "rgba(" + t[1] + ",1)" : n : l.hex(e) ? function (e) {
      var n = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, n, t, r) {
        return n + n + t + t + r + r;
      }),
          t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
      return "rgba(" + parseInt(t[1], 16) + "," + parseInt(t[2], 16) + "," + parseInt(t[3], 16) + ",1)";
    }(e) : l.hsl(e) ? function (e) {
      var n,
          t,
          r,
          a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
          u = parseInt(a[1], 10) / 360,
          o = parseInt(a[2], 10) / 100,
          i = parseInt(a[3], 10) / 100,
          c = a[4] || 1;

      function s(e, n, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + 6 * (n - e) * t : t < .5 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
      }

      if (0 == o) n = t = r = i;else {
        var l = i < .5 ? i * (1 + o) : i + o - i * o,
            f = 2 * i - l;
        n = s(f, l, u + 1 / 3), t = s(f, l, u), r = s(f, l, u - 1 / 3);
      }
      return "rgba(" + 255 * n + "," + 255 * t + "," + 255 * r + "," + c + ")";
    }(e) : void 0;
    var n, t;
  }

  function B(e) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
    if (n) return n[1];
  }

  function S(e, n) {
    return l.fnc(e) ? e(n.target, n.id, n.total) : e;
  }

  function D(e, n) {
    return e.getAttribute(n);
  }

  function T(e, n, t) {
    if (O([t, "deg", "rad", "turn"], B(n))) return n;
    var r = o.CSS[n + t];
    if (!l.und(r)) return r;
    var a = document.createElement(e.tagName),
        u = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
    u.appendChild(a), a.style.position = "absolute", a.style.width = 100 + t;
    var i = 100 / a.offsetWidth;
    u.removeChild(a);
    var c = i * parseFloat(n);
    return o.CSS[n + t] = c, c;
  }

  function I(e, n, t) {
    if (n in e.style) {
      var r = n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          a = e.style[n] || getComputedStyle(e).getPropertyValue(r) || "0";
      return t ? T(e, a, t) : a;
    }
  }

  function j(e, n) {
    return l.dom(e) && !l.inp(e) && (D(e, n) || l.svg(e) && e[n]) ? "attribute" : l.dom(e) && O(u, n) ? "transform" : l.dom(e) && "transform" !== n && I(e, n) ? "css" : null != e[n] ? "object" : void 0;
  }

  function A(e) {
    if (l.dom(e)) {
      for (var n, t = e.style.transform || "", r = /(\w+)\(([^)]*)\)/g, a = new Map(); n = r.exec(t);) {
        a.set(n[1], n[2]);
      }

      return a;
    }
  }

  function L(e, n, t, r) {
    var a = c(n, "scale") ? 1 : 0 + function (e) {
      return c(e, "translate") || "perspective" === e ? "px" : c(e, "rotate") || c(e, "skew") ? "deg" : void 0;
    }(n),
        u = A(e).get(n) || a;
    return t && (t.transforms.list.set(n, u), t.transforms.last = n), r ? T(e, u, r) : u;
  }

  function F(e, n, t, r) {
    switch (j(e, n)) {
      case "transform":
        return L(e, n, r, t);

      case "css":
        return I(e, n, t);

      case "attribute":
        return D(e, n);

      default:
        return e[n] || 0;
    }
  }

  function N(e, n) {
    var t = /^(\*=|\+=|-=)/.exec(e);
    if (!t) return e;
    var r = B(e) || 0,
        a = parseFloat(n),
        u = parseFloat(e.replace(t[0], ""));

    switch (t[0][0]) {
      case "+":
        return a + u + r;

      case "-":
        return a - u + r;

      case "*":
        return a * u + r;
    }
  }

  function q(e, n) {
    if (l.col(e)) return E(e);
    if (/\s/g.test(e)) return e;
    var t = B(e),
        r = t ? e.substr(0, e.length - t.length) : e;
    return n ? r + n : r;
  }

  function $(e, n) {
    return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
  }

  function _(e) {
    for (var n, t = e.points, r = 0, a = 0; a < t.numberOfItems; a++) {
      var u = t.getItem(a);
      a > 0 && (r += $(n, u)), n = u;
    }

    return r;
  }

  function X(e) {
    if (e.getTotalLength) return e.getTotalLength();

    switch (e.tagName.toLowerCase()) {
      case "circle":
        return function (e) {
          return 2 * Math.PI * D(e, "r");
        }(e);

      case "rect":
        return function (e) {
          return 2 * D(e, "width") + 2 * D(e, "height");
        }(e);

      case "line":
        return function (e) {
          return $({
            x: D(e, "x1"),
            y: D(e, "y1")
          }, {
            x: D(e, "x2"),
            y: D(e, "y2")
          });
        }(e);

      case "polyline":
        return _(e);

      case "polygon":
        return function (e) {
          var n = e.points;
          return _(e) + $(n.getItem(n.numberOfItems - 1), n.getItem(0));
        }(e);
    }
  }

  function Y(e, n) {
    var t = n || {},
        r = t.el || function (e) {
      for (var n = e.parentNode; l.svg(n) && l.svg(n.parentNode);) {
        n = n.parentNode;
      }

      return n;
    }(e),
        a = r.getBoundingClientRect(),
        u = D(r, "viewBox"),
        o = a.width,
        i = a.height,
        c = t.viewBox || (u ? u.split(" ") : [0, 0, o, i]);

    return {
      el: r,
      viewBox: c,
      x: c[0] / 1,
      y: c[1] / 1,
      w: o / c[2],
      h: i / c[3]
    };
  }

  function Z(e, n) {
    function t(t) {
      void 0 === t && (t = 0);
      var r = n + t >= 1 ? n + t : 0;
      return e.el.getPointAtLength(r);
    }

    var r = Y(e.el, e.svg),
        a = t(),
        u = t(-1),
        o = t(1);

    switch (e.property) {
      case "x":
        return (a.x - r.x) * r.w;

      case "y":
        return (a.y - r.y) * r.h;

      case "angle":
        return 180 * Math.atan2(o.y - u.y, o.x - u.x) / Math.PI;
    }
  }

  function Q(e, n) {
    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        r = q(l.pth(e) ? e.totalLength : e, n) + "";
    return {
      original: r,
      numbers: r.match(t) ? r.match(t).map(Number) : [0],
      strings: l.str(e) || n ? r.split(t) : []
    };
  }

  function V(e) {
    return M(e ? w(l.arr(e) ? e.map(x) : x(e)) : [], function (e, n, t) {
      return t.indexOf(e) === n;
    });
  }

  function z(e) {
    var n = V(e);
    return n.map(function (e, t) {
      return {
        target: e,
        id: t,
        total: n.length,
        transforms: {
          list: A(e)
        }
      };
    });
  }

  function H(e, n) {
    var t = k(n);

    if (/^spring/.test(t.easing) && (t.duration = d(t.easing)), l.arr(e)) {
      var r = e.length;
      2 === r && !l.obj(e[0]) ? e = {
        value: e
      } : l.fnc(n.duration) || (t.duration = n.duration / r);
    }

    var a = l.arr(e) ? e : [e];
    return a.map(function (e, t) {
      var r = l.obj(e) && !l.pth(e) ? e : {
        value: e
      };
      return l.und(r.delay) && (r.delay = t ? 0 : n.delay), l.und(r.endDelay) && (r.endDelay = t === a.length - 1 ? n.endDelay : 0), r;
    }).map(function (e) {
      return C(e, t);
    });
  }

  function G(e, n) {
    var t = [],
        r = n.keyframes;

    for (var a in r && (n = C(function (e) {
      for (var n = M(w(e.map(function (e) {
        return Object.keys(e);
      })), function (e) {
        return l.key(e);
      }).reduce(function (e, n) {
        return e.indexOf(n) < 0 && e.push(n), e;
      }, []), t = {}, r = function r(_r) {
        var a = n[_r];
        t[a] = e.map(function (e) {
          var n = {};

          for (var t in e) {
            l.key(t) ? t == a && (n.value = e[t]) : n[t] = e[t];
          }

          return n;
        });
      }, a = 0; a < n.length; a++) {
        r(a);
      }

      return t;
    }(r), n)), n) {
      l.key(a) && t.push({
        name: a,
        tweens: H(n[a], e)
      });
    }

    return t;
  }

  function R(e, n) {
    var t;
    return e.tweens.map(function (r) {
      var a = function (e, n) {
        var t = {};

        for (var r in e) {
          var a = S(e[r], n);
          l.arr(a) && 1 === (a = a.map(function (e) {
            return S(e, n);
          })).length && (a = a[0]), t[r] = a;
        }

        return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t;
      }(r, n),
          u = a.value,
          o = l.arr(u) ? u[1] : u,
          i = B(o),
          c = F(n.target, e.name, i, n),
          s = t ? t.to.original : c,
          f = l.arr(u) ? u[0] : s,
          d = B(f) || B(c),
          p = i || d;

      return l.und(o) && (o = s), a.from = Q(f, p), a.to = Q(N(o, f), p), a.start = t ? t.end : 0, a.end = a.start + a.delay + a.duration + a.endDelay, a.easing = y(a.easing, a.duration), a.isPath = l.pth(u), a.isColor = l.col(a.from.original), a.isColor && (a.round = 1), t = a, a;
    });
  }

  var W = {
    css: function css(e, n, t) {
      return e.style[n] = t;
    },
    attribute: function attribute(e, n, t) {
      return e.setAttribute(n, t);
    },
    object: function object(e, n, t) {
      return e[n] = t;
    },
    transform: function transform(e, n, t, r, a) {
      if (r.list.set(n, t), n === r.last || a) {
        var u = "";
        r.list.forEach(function (e, n) {
          u += n + "(" + e + ") ";
        }), e.style.transform = u;
      }
    }
  };

  function J(e, n) {
    z(e).forEach(function (e) {
      for (var t in n) {
        var r = S(n[t], e),
            a = e.target,
            u = B(r),
            o = F(a, t, u, e),
            i = N(q(r, u || B(o)), o),
            c = j(a, t);
        W[c](a, t, i, e.transforms, !0);
      }
    });
  }

  function K(e, n) {
    return M(w(e.map(function (e) {
      return n.map(function (n) {
        return function (e, n) {
          var t = j(e.target, n.name);

          if (t) {
            var r = R(n, e),
                a = r[r.length - 1];
            return {
              type: t,
              property: n.name,
              animatable: e,
              tweens: r,
              duration: a.end,
              delay: r[0].delay,
              endDelay: a.endDelay
            };
          }
        }(e, n);
      });
    })), function (e) {
      return !l.und(e);
    });
  }

  function U(e, n) {
    var t = e.length,
        r = function r(e) {
      return e.timelineOffset ? e.timelineOffset : 0;
    },
        a = {};

    return a.duration = t ? Math.max.apply(Math, e.map(function (e) {
      return r(e) + e.duration;
    })) : n.duration, a.delay = t ? Math.min.apply(Math, e.map(function (e) {
      return r(e) + e.delay;
    })) : n.delay, a.endDelay = t ? a.duration - Math.max.apply(Math, e.map(function (e) {
      return r(e) + e.duration - e.endDelay;
    })) : n.endDelay, a;
  }

  var ee = 0;

  var ne,
      te = [],
      re = [],
      ae = function () {
    function e() {
      ne = requestAnimationFrame(n);
    }

    function n(n) {
      var t = te.length;

      if (t) {
        for (var r = 0; r < t;) {
          var a = te[r];

          if (a.paused) {
            var u = te.indexOf(a);
            u > -1 && (te.splice(u, 1), t = te.length);
          } else a.tick(n);

          r++;
        }

        e();
      } else ne = cancelAnimationFrame(ne);
    }

    return e;
  }();

  function ue(e) {
    void 0 === e && (e = {});
    var n,
        t = 0,
        u = 0,
        o = 0,
        c = 0,
        s = null;

    function l(e) {
      var n = window.Promise && new Promise(function (e) {
        return s = e;
      });
      return e.finished = n, n;
    }

    var f = function (e) {
      var n = P(r, e),
          t = P(a, e),
          u = G(t, e),
          o = z(e.targets),
          i = K(o, u),
          c = U(i, t),
          s = ee;
      return ee++, C(n, {
        id: s,
        children: [],
        animatables: o,
        animations: i,
        duration: c.duration,
        delay: c.delay,
        endDelay: c.endDelay
      });
    }(e);

    l(f);

    function d() {
      var e = f.direction;
      "alternate" !== e && (f.direction = "normal" !== e ? "normal" : "reverse"), f.reversed = !f.reversed, n.forEach(function (e) {
        return e.reversed = f.reversed;
      });
    }

    function p(e) {
      return f.reversed ? f.duration - e : e;
    }

    function v() {
      t = 0, u = p(f.currentTime) * (1 / ue.speed);
    }

    function h(e, n) {
      n && n.seek(e - n.timelineOffset);
    }

    function g(e) {
      for (var n = 0, t = f.animations, r = t.length; n < r;) {
        var a = t[n],
            u = a.animatable,
            o = a.tweens,
            c = o.length - 1,
            s = o[c];
        c && (s = M(o, function (n) {
          return e < n.end;
        })[0] || s);

        for (var l = i(e - s.start - s.delay, 0, s.duration) / s.duration, d = isNaN(l) ? 1 : s.easing(l), p = s.to.strings, v = s.round, h = [], g = s.to.numbers.length, m = void 0, y = 0; y < g; y++) {
          var b = void 0,
              w = s.to.numbers[y],
              x = s.from.numbers[y] || 0;
          b = s.isPath ? Z(s.value, d * w) : x + d * (w - x), v && (s.isColor && y > 2 || (b = Math.round(b * v) / v)), h.push(b);
        }

        var O = p.length;

        if (O) {
          m = p[0];

          for (var k = 0; k < O; k++) {
            p[k];
            var P = p[k + 1],
                C = h[k];
            isNaN(C) || (m += P ? C + P : C + " ");
          }
        } else m = h[0];

        W[a.type](u.target, a.property, m, u.transforms), a.currentValue = m, n++;
      }
    }

    function m(e) {
      f[e] && !f.passThrough && f[e](f);
    }

    function y(e) {
      var r = f.duration,
          a = f.delay,
          v = r - f.endDelay,
          y = p(e);
      f.progress = i(y / r * 100, 0, 100), f.reversePlayback = y < f.currentTime, n && function (e) {
        if (f.reversePlayback) for (var t = c; t--;) {
          h(e, n[t]);
        } else for (var r = 0; r < c; r++) {
          h(e, n[r]);
        }
      }(y), !f.began && f.currentTime > 0 && (f.began = !0, m("begin")), !f.loopBegan && f.currentTime > 0 && (f.loopBegan = !0, m("loopBegin")), y <= a && 0 !== f.currentTime && g(0), (y >= v && f.currentTime !== r || !r) && g(r), y > a && y < v ? (f.changeBegan || (f.changeBegan = !0, f.changeCompleted = !1, m("changeBegin")), m("change"), g(y)) : f.changeBegan && (f.changeCompleted = !0, f.changeBegan = !1, m("changeComplete")), f.currentTime = i(y, 0, r), f.began && m("update"), e >= r && (u = 0, f.remaining && !0 !== f.remaining && f.remaining--, f.remaining ? (t = o, m("loopComplete"), f.loopBegan = !1, "alternate" === f.direction && d()) : (f.paused = !0, f.completed || (f.completed = !0, m("loopComplete"), m("complete"), !f.passThrough && "Promise" in window && (s(), l(f)))));
    }

    return f.reset = function () {
      var e = f.direction;
      f.passThrough = !1, f.currentTime = 0, f.progress = 0, f.paused = !0, f.began = !1, f.loopBegan = !1, f.changeBegan = !1, f.completed = !1, f.changeCompleted = !1, f.reversePlayback = !1, f.reversed = "reverse" === e, f.remaining = f.loop, n = f.children;

      for (var t = c = n.length; t--;) {
        f.children[t].reset();
      }

      (f.reversed && !0 !== f.loop || "alternate" === e && 1 === f.loop) && f.remaining++, g(f.reversed ? f.duration : 0);
    }, f.set = function (e, n) {
      return J(e, n), f;
    }, f.tick = function (e) {
      o = e, t || (t = o), y((o + (u - t)) * ue.speed);
    }, f.seek = function (e) {
      y(p(e));
    }, f.pause = function () {
      f.paused = !0, v();
    }, f.play = function () {
      f.paused && (f.completed && f.reset(), f.paused = !1, te.push(f), v(), ne || ae());
    }, f.reverse = function () {
      d(), v();
    }, f.restart = function () {
      f.reset(), f.play();
    }, f.reset(), f.autoplay && f.play(), f;
  }

  function oe(e, n) {
    for (var t = n.length; t--;) {
      O(e, n[t].animatable.target) && n.splice(t, 1);
    }
  }

  "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
    document.hidden ? (te.forEach(function (e) {
      return e.pause();
    }), re = te.slice(0), ue.running = te = []) : re.forEach(function (e) {
      return e.play();
    });
  }), ue.version = "3.1.0", ue.speed = 1, ue.running = te, ue.remove = function (e) {
    for (var n = V(e), t = te.length; t--;) {
      var r = te[t],
          a = r.animations,
          u = r.children;
      oe(n, a);

      for (var o = u.length; o--;) {
        var i = u[o],
            c = i.animations;
        oe(n, c), c.length || i.children.length || u.splice(o, 1);
      }

      a.length || u.length || r.pause();
    }
  }, ue.get = F, ue.set = J, ue.convertPx = T, ue.path = function (e, n) {
    var t = l.str(e) ? b(e)[0] : e,
        r = n || 100;
    return function (e) {
      return {
        property: e,
        el: t,
        svg: Y(t),
        totalLength: X(t) * (r / 100)
      };
    };
  }, ue.setDashoffset = function (e) {
    var n = X(e);
    return e.setAttribute("stroke-dasharray", n), n;
  }, ue.stagger = function (e, n) {
    void 0 === n && (n = {});
    var t = n.direction || "normal",
        r = n.easing ? y(n.easing) : null,
        a = n.grid,
        u = n.axis,
        o = n.from || 0,
        i = "first" === o,
        c = "center" === o,
        s = "last" === o,
        f = l.arr(e),
        d = f ? parseFloat(e[0]) : parseFloat(e),
        p = f ? parseFloat(e[1]) : 0,
        v = B(f ? e[1] : e) || 0,
        h = n.start || 0 + (f ? d : 0),
        g = [],
        m = 0;
    return function (e, n, l) {
      if (i && (o = 0), c && (o = (l - 1) / 2), s && (o = l - 1), !g.length) {
        for (var y = 0; y < l; y++) {
          if (a) {
            var b = c ? (a[0] - 1) / 2 : o % a[0],
                M = c ? (a[1] - 1) / 2 : Math.floor(o / a[0]),
                w = b - y % a[0],
                x = M - Math.floor(y / a[0]),
                O = Math.sqrt(w * w + x * x);
            "x" === u && (O = -w), "y" === u && (O = -x), g.push(O);
          } else g.push(Math.abs(o - y));

          m = Math.max.apply(Math, g);
        }

        r && (g = g.map(function (e) {
          return r(e / m) * m;
        })), "reverse" === t && (g = g.map(function (e) {
          return u ? e < 0 ? -1 * e : -e : Math.abs(m - e);
        }));
      }

      return h + (f ? (p - d) / m : d) * (Math.round(100 * g[n]) / 100) + v;
    };
  }, ue.timeline = function (e) {
    void 0 === e && (e = {});
    var n = ue(e);
    return n.duration = 0, n.add = function (t, r) {
      var u = te.indexOf(n),
          o = n.children;

      function i(e) {
        e.passThrough = !0;
      }

      u > -1 && te.splice(u, 1);

      for (var c = 0; c < o.length; c++) {
        i(o[c]);
      }

      var s = C(t, P(a, e));
      s.targets = s.targets || e.targets;
      var f = n.duration;
      s.autoplay = !1, s.direction = n.direction, s.timelineOffset = l.und(r) ? f : N(r, f), i(n), n.seek(s.timelineOffset);
      var d = ue(s);
      i(d), o.push(d);
      var p = U(o, e);
      return n.delay = p.delay, n.endDelay = p.endDelay, n.duration = p.duration, n.seek(0), n.reset(), n.autoplay && n.play(), n;
    }, n;
  }, ue.easing = y, ue.penner = m, ue.random = function (e, n) {
    return Math.floor(Math.random() * (n - e + 1)) + e;
  };
  var ie = ue;
  var ce = [{
    value: "5%"
  }, {
    value: "10%"
  }, {
    value: "15%"
  }, {
    value: "20%"
  }, {
    value: "25%"
  }, {
    value: "30%"
  }, {
    value: "35%"
  }, {
    value: "40%"
  }, {
    value: "45%"
  }, {
    value: "50%"
  }, {
    value: "55%"
  }, {
    value: "60%"
  }, {
    value: "65%"
  }, {
    value: "70%"
  }, {
    value: "75%"
  }, {
    value: "80%"
  }, {
    value: "85%"
  }, {
    value: "90%"
  }, {
    value: "95%"
  }, {
    value: "100%"
  }],
      se = document.querySelectorAll(".animationBox");
  var le = 0;

  if (se.forEach(function (e) {
    e.setAttribute("style", "left: ".concat(le, "%;")), le += 10;
  }), window.location.pathname + window.location.search == "/public/") {
    var _e = document.querySelector(".about-button"),
        _n = document.querySelector(".projects-button"),
        _t = document.querySelector(".contact-button"),
        _r2 = document.querySelector(".todo-button");

    _e.addEventListener("click", function (e) {
      e.preventDefault(), fe(this);
    }), _n.addEventListener("click", function (e) {
      e.preventDefault(), fe(this);
    }), _t.addEventListener("click", function (e) {
      e.preventDefault(), fe(this);
    }), _r2.addEventListener("click", function (e) {
      e.preventDefault(), fe(this);
    });
  }

  function fe(e) {
    ie({
      targets: se,
      height: ce,
      delay: ie.stagger(50, {
        start: 200,
        from: "center"
      }),
      duration: 175,
      easing: "easeOutElastic",
      elasticity: 500
    }), setTimeout(function () {
      window.location.href = e.getAttribute("href");
    }, 750);
  }
}]);