!(function () {
  function e(e) {
    return e && e.__esModule ? e.default : e;
  }
  var t =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    r = {},
    n = {},
    o = t.parcelRequireee4c;
  null == o &&
    (((o = function (e) {
      if (e in r) return r[e].exports;
      if (e in n) {
        var t = n[e];
        delete n[e];
        var o = { id: e, exports: {} };
        return (r[e] = o), t.call(o.exports, o, o.exports), o.exports;
      }
      var i = new Error("Cannot find module '" + e + "'");
      throw ((i.code = "MODULE_NOT_FOUND"), i);
    }).register = function (e, t) {
      n[e] = t;
    }),
    (t.parcelRequireee4c = o)),
    o.register("3vySj", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t) {
          if (null == e) return {};
          var r,
            n,
            o = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o;
        });
    }),
    o.register("ccXXu", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          if (Array.isArray(e)) return e;
        });
    }),
    o.register("4LjYB", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        });
    }),
    o.register("aoAno", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        });
    }),
    o.register("gqnvV", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return n.default(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(r);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return n.default(e, t);
        });
      var r,
        n = (r = o("7bh60")) && r.__esModule ? r : { default: r };
    }),
    o.register("7bh60", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        });
    });
  var i = {};
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.default = function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = u.default(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (o[r] = e[r]));
      }
      return o;
    });
  var a,
    u = (a = o("3vySj")) && a.__esModule ? a : { default: a };
  var l = {};
  Object.defineProperty(l, "__esModule", { value: !0 }),
    (l.default = function (e, t) {
      return d.default(e) || s.default(e, t) || f.default(e, t) || c.default();
    });
  var d = p(o("ccXXu")),
    s = p(o("4LjYB")),
    c = p(o("aoAno")),
    f = p(o("gqnvV"));
  function p(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var v,
    b = function (t) {
      var r = t.prefix,
        n = t.inbox,
        o = t.outbox,
        i = (function () {
          try {
            return new EventTarget();
          } catch (e) {
            return document.createDocumentFragment();
          }
        })();
      return (
        n.addEventListener("message", function (t) {
          if (
            (function (e) {
              var t;
              return (
                (null === (t = e.data) || void 0 === t ? void 0 : t[0]) === r
              );
            })(t)
          ) {
            var n = e(l)(t.data, 3),
              o = n[1],
              a = n[2],
              u = new Event(o);
            (u.args = a), i.dispatchEvent(u);
          }
        }),
        {
          addMessageListener: i.addEventListener.bind(i),
          removeMessageListener: i.removeEventListener.bind(i),
          sendMessage: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            o.postMessage([r, e, t], "*");
          },
        }
      );
    },
    _ = function (t) {
      var r = (function (t) {
        return Object.fromEntries(
          Object.entries(t).filter(function (t) {
            return null != e(l)(t, 2)[1];
          })
        );
      })(t);
      return r && Object.keys(r).length >= 1
        ? "?".concat(new URLSearchParams(r))
        : "";
    };
  window.__STRAVA_EMBED_BOOTSTRAP__ ||
    ((v = function () {
      var t = ["route"];
      document
        .querySelectorAll(".strava-embed-placeholder")
        .forEach(function (r) {
          var n,
            o,
            a = r.dataset,
            u = a.embedType,
            l = a.embedId,
            d = e(i)(a, ["embedType", "embedId"]),
            s = document.createElement("iframe");
          s.setAttribute("frameborder", 0);
          var c = "true" === d.fullWidth && t.includes(u),
            f = "\n        ".concat(
              c ? "width: 100%;" : "width: 554px;",
              "\n        min-width: 250px;\n        max-width: 100%;\n        height: 650px;\n        display: block;\n      "
            );
          s.setAttribute("style", f);
          var p = _(d),
            v =
              (null === (n = window.crypto) ||
              void 0 === n ||
              null === (o = n.randomUUID) ||
              void 0 === o
                ? void 0
                : o.call(n)) || (Math.random() + 1).toString(36).substring(2),
            y = new URLSearchParams({
              ns: v,
              hostOrigin: window.location.origin,
              hostPath: window.location.pathname,
              hostTitle: document.title,
            }),
            m = "https://strava-embeds.com/"
              .concat(u, "/")
              .concat(l)
              .concat(p, "#")
              .concat(y);
          s.setAttribute("src", m),
            r.replaceWith(s),
            b({
              prefix: v,
              inbox: window,
              outbox: s.contentWindow,
            }).addMessageListener("BROADCAST_IFRAME_HEIGHT", function (e) {
              var t = e.args;
              s.style.height = "".concat(t, "px");
            });
        });
    }),
    (window.__STRAVA_EMBED_BOOTSTRAP__ = v)),
    window.__STRAVA_EMBED_BOOTSTRAP__();
})();
//# sourceMappingURL=embed.js.map
