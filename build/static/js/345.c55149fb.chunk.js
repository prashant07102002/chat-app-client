"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [345],
  {
    2345: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return oe;
          },
        });
      var i = t(6015),
        r = t(4162),
        o = t(2791),
        a = t(4142),
        s = t(7578),
        c = t(885),
        l = t(6863),
        d = t(294),
        x = t(3978),
        p = t(4565),
        u = t(3811),
        h = t(1872),
        j = t(6882),
        g = t(7962),
        m = t(4020),
        Z = t(9165),
        b = t(4059),
        f = t(703),
        w = t(9865),
        v = t(155),
        y = t(1087),
        k = t(8685),
        C = t(184),
        F = (0, l.ZP)(d.Z)(function (e) {
          var n = e.theme;
          return {
            "& .MuiBadge-badge": {
              backgroundColor: "#44b700",
              color: "#44b700",
              boxShadow: "0 0 0 2px ".concat(n.palette.background.paper),
              "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
              },
            },
            "@keyframes ripple": {
              "0%": { transform: "scale(.8)", opacity: 1 },
              "100%": { transform: "scale(2.4)", opacity: 0 },
            },
          };
        }),
        I = [
          { title: "Contact info" },
          { title: "Mute notifications" },
          { title: "Clear messages" },
          { title: "Delete chat" },
        ],
        R = function () {
          var e = (0, k.Z)("between", "md", "xs", "sm"),
            n = (0, y.lr)(),
            t = (0, c.Z)(n, 2),
            s = t[0],
            l = t[1],
            d = (0, a.Z)(),
            R = o.useState(null),
            z = (0, c.Z)(R, 2),
            P = z[0],
            S = z[1],
            M = Boolean(P),
            q = function () {
              S(null);
            };
          return (0, C.jsx)(i.Z, {
            p: 2,
            width: "100%",
            sx: {
              backgroundColor:
                "light" === d.palette.mode ? "#F8FAFF" : d.palette.background,
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            },
            children: (0, C.jsxs)(r.Z, {
              alignItems: "center",
              direction: "row",
              sx: { width: "100%", height: "100%" },
              justifyContent: "space-between",
              children: [
                (0, C.jsxs)(r.Z, {
                  onClick: function () {
                    s.set("open", !0), l(s);
                  },
                  spacing: 2,
                  direction: "row",
                  children: [
                    (0, C.jsx)(i.Z, {
                      children: (0, C.jsx)(F, {
                        overlap: "circular",
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "right",
                        },
                        variant: "dot",
                        children: (0, C.jsx)(x.Z, {
                          alt: v.We.name.fullName(),
                          src: v.We.image.avatar(),
                        }),
                      }),
                    }),
                    (0, C.jsxs)(r.Z, {
                      spacing: 0.2,
                      children: [
                        (0, C.jsx)(p.Z, {
                          variant: "subtitle2",
                          children: v.We.name.fullName(),
                        }),
                        (0, C.jsx)(p.Z, {
                          variant: "caption",
                          children: "Online",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsxs)(r.Z, {
                  direction: "row",
                  alignItems: "center",
                  spacing: e ? 1 : 3,
                  children: [
                    (0, C.jsx)(u.Z, { children: (0, C.jsx)(Z.Z, {}) }),
                    (0, C.jsx)(u.Z, { children: (0, C.jsx)(b.Z, {}) }),
                    !e && (0, C.jsx)(u.Z, { children: (0, C.jsx)(f.Z, {}) }),
                    (0, C.jsx)(h.Z, { orientation: "vertical", flexItem: !0 }),
                    (0, C.jsx)(u.Z, {
                      id: "conversation-positioned-button",
                      "aria-controls": M
                        ? "conversation-positioned-menu"
                        : void 0,
                      "aria-haspopup": "true",
                      "aria-expanded": M ? "true" : void 0,
                      onClick: function (e) {
                        S(e.currentTarget);
                      },
                      children: (0, C.jsx)(w.Z, {}),
                    }),
                    (0, C.jsx)(j.Z, {
                      MenuListProps: { "aria-labelledby": "fade-button" },
                      TransitionComponent: g.Z,
                      id: "conversation-positioned-menu",
                      "aria-labelledby": "conversation-positioned-button",
                      anchorEl: P,
                      open: M,
                      onClose: q,
                      anchorOrigin: { vertical: "bottom", horizontal: "right" },
                      transformOrigin: { vertical: "top", horizontal: "right" },
                      children: (0, C.jsx)(i.Z, {
                        p: 1,
                        children: (0, C.jsx)(r.Z, {
                          spacing: 1,
                          children: I.map(function (e) {
                            return (0,
                            C.jsxs)(m.Z, { onClick: q, children: [(0, C.jsx)(r.Z, { sx: { minWidth: 100 }, direction: "row", alignItems: "center", justifyContent: "space-between", children: (0, C.jsx)("span", { children: e.title }) }), " "] });
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        z = t(4998),
        P = t(5152),
        S = t(5590),
        M = t(8254),
        q = t(6526),
        A = t(6206),
        O = t(2413),
        T = t(6880),
        W = t(9134),
        B = t(5355),
        E = t(9585),
        H = t(4306),
        N = t(6638),
        D = t(3932),
        G = (0, l.ZP)(z.Z)(function (e) {
          e.theme;
          return {
            "& .MuiInputBase-input": {
              paddingTop: "12px !important",
              paddingBottom: "12px !important",
            },
          };
        }),
        L = [
          {
            color: "#4da5fe",
            icon: (0, C.jsx)(q.Z, { size: 24 }),
            y: 102,
            title: "Photo/Video",
          },
          {
            color: "#1b8cfe",
            icon: (0, C.jsx)(A.Z, { size: 24 }),
            y: 172,
            title: "Stickers",
          },
          {
            color: "#0172e4",
            icon: (0, C.jsx)(O.Z, { size: 24 }),
            y: 242,
            title: "Image",
          },
          {
            color: "#0159b2",
            icon: (0, C.jsx)(T.Z, { size: 24 }),
            y: 312,
            title: "Document",
          },
          {
            color: "#013f7f",
            icon: (0, C.jsx)(W.Z, { size: 24 }),
            y: 382,
            title: "Contact",
          },
        ],
        U = function (e) {
          var n = e.openPicker,
            t = e.setOpenPicker,
            i = o.useState(!1),
            a = (0, c.Z)(i, 2),
            s = a[0],
            l = a[1];
          return (0, C.jsx)(G, {
            fullWidth: !0,
            placeholder: "Write a message...",
            variant: "filled",
            InputProps: {
              disableUnderline: !0,
              startAdornment: (0, C.jsxs)(r.Z, {
                sx: { width: "max-content" },
                children: [
                  (0, C.jsx)(r.Z, {
                    sx: {
                      position: "relative",
                      display: s ? "inline-block" : "none",
                    },
                    children: L.map(function (e) {
                      return (0, C.jsx)(P.Z, {
                        placement: "right",
                        title: e.title,
                        children: (0, C.jsx)(S.Z, {
                          onClick: function () {
                            l(!s);
                          },
                          sx: {
                            position: "absolute",
                            top: -e.y,
                            backgroundColor: e.color,
                          },
                          "aria-label": "add",
                          children: e.icon,
                        }),
                      });
                    }),
                  }),
                  (0, C.jsx)(M.Z, {
                    children: (0, C.jsx)(u.Z, {
                      onClick: function () {
                        l(!s);
                      },
                      children: (0, C.jsx)(B.Z, {}),
                    }),
                  }),
                ],
              }),
              endAdornment: (0, C.jsx)(r.Z, {
                sx: { position: "relative" },
                children: (0, C.jsx)(M.Z, {
                  children: (0, C.jsx)(u.Z, {
                    onClick: function () {
                      t(!n);
                    },
                    children: (0, C.jsx)(E.Z, {}),
                  }),
                }),
              }),
            },
          });
        },
        V = function () {
          var e = (0, a.Z)(),
            n = (0, k.Z)("between", "md", "xs", "sm"),
            t = (0, y.lr)(),
            s = (0, c.Z)(t, 1)[0],
            l = o.useState(!1),
            d = (0, c.Z)(l, 2),
            x = d[0],
            p = d[1];
          return (0, C.jsx)(i.Z, {
            sx: {
              position: "relative",
              backgroundColor: "transparent !important",
            },
            children: (0, C.jsx)(i.Z, {
              p: n ? 1 : 2,
              width: "100%",
              sx: {
                backgroundColor:
                  "light" === e.palette.mode ? "#F8FAFF" : e.palette.background,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              },
              children: (0, C.jsxs)(r.Z, {
                direction: "row",
                alignItems: "center",
                spacing: n ? 1 : 3,
                children: [
                  (0, C.jsxs)(r.Z, {
                    sx: { width: "100%" },
                    children: [
                      (0, C.jsx)(i.Z, {
                        style: {
                          zIndex: 10,
                          position: "fixed",
                          display: x ? "inline" : "none",
                          bottom: 81,
                          right: n ? 20 : "true" === s.get("open") ? 420 : 100,
                        },
                        children: (0, C.jsx)(D.Z, {
                          theme: e.palette.mode,
                          data: N,
                          onEmojiSelect: console.log,
                        }),
                      }),
                      (0, C.jsx)(U, { openPicker: x, setOpenPicker: p }),
                    ],
                  }),
                  (0, C.jsx)(i.Z, {
                    sx: {
                      height: 48,
                      width: 48,
                      backgroundColor: e.palette.primary.main,
                      borderRadius: 1.5,
                    },
                    children: (0, C.jsx)(r.Z, {
                      sx: { height: "100%" },
                      alignItems: "center",
                      justifyContent: "center",
                      children: (0, C.jsx)(u.Z, {
                        children: (0, C.jsx)(H.Z, { color: "#ffffff" }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Y = t(5122),
        J = t(2065),
        K = t(7863),
        Q = t(7501),
        X = function () {
          var e = o.useState(null),
            n = (0, c.Z)(e, 2),
            t = n[0],
            i = n[1],
            a = Boolean(t),
            s = function () {
              i(null);
            };
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)(K.Z, {
                size: 20,
                id: "basic-button",
                "aria-controls": a ? "basic-menu" : void 0,
                "aria-haspopup": "true",
                "aria-expanded": a ? "true" : void 0,
                onClick: function (e) {
                  i(e.currentTarget);
                },
              }),
              (0, C.jsx)(j.Z, {
                id: "basic-menu",
                anchorEl: t,
                open: a,
                onClose: s,
                MenuListProps: { "aria-labelledby": "basic-button" },
                children: (0, C.jsx)(r.Z, {
                  spacing: 1,
                  px: 1,
                  children: Y.GF.map(function (e) {
                    return (0, C.jsx)(m.Z, { onClick: s, children: e.title });
                  }),
                }),
              }),
            ],
          });
        },
        $ = function (e) {
          var n = e.el,
            t = (0, a.Z)();
          return (0, C.jsxs)(r.Z, {
            direction: "row",
            justifyContent: n.incoming ? "start" : "end",
            children: [
              (0, C.jsx)(i.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: n.incoming
                    ? (0, J.Fq)(t.palette.background.default, 1)
                    : t.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, C.jsx)(p.Z, {
                  variant: "body2",
                  color: n.incoming ? t.palette.text : "#fff",
                  children: n.message,
                }),
              }),
              (0, C.jsx)(X, {}),
            ],
          });
        },
        _ = function (e) {
          var n = e.el,
            t = (0, a.Z)();
          return (0, C.jsxs)(r.Z, {
            direction: "row",
            justifyContent: n.incoming ? "start" : "end",
            children: [
              (0, C.jsx)(i.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: n.incoming
                    ? (0, J.Fq)(t.palette.background.default, 1)
                    : t.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, C.jsxs)(r.Z, {
                  spacing: 1,
                  children: [
                    (0, C.jsx)("img", {
                      src: n.img,
                      alt: n.message,
                      style: { maxHeight: 210, borderRadius: "10px" },
                    }),
                    (0, C.jsx)(p.Z, {
                      variant: "body2",
                      color: n.incoming ? t.palette.text : "#fff",
                      children: n.message,
                    }),
                  ],
                }),
              }),
              (0, C.jsx)(X, {}),
            ],
          });
        },
        ee = function (e) {
          var n = e.el,
            t = (0, a.Z)();
          return (0, C.jsxs)(r.Z, {
            direction: "row",
            justifyContent: n.incoming ? "start" : "end",
            children: [
              (0, C.jsx)(i.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: n.incoming
                    ? (0, J.Fq)(t.palette.background.default, 1)
                    : t.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, C.jsxs)(r.Z, {
                  spacing: 2,
                  children: [
                    (0, C.jsxs)(r.Z, {
                      p: 2,
                      direction: "row",
                      spacing: 3,
                      alignItems: "center",
                      sx: {
                        backgroundColor: t.palette.background.paper,
                        borderRadius: 1,
                      },
                      children: [
                        (0, C.jsx)(q.Z, { size: 48 }),
                        (0, C.jsx)(p.Z, {
                          variant: "caption",
                          children: "Abstract.png",
                        }),
                        (0, C.jsx)(u.Z, { children: (0, C.jsx)(Q.Z, {}) }),
                      ],
                    }),
                    (0, C.jsx)(p.Z, {
                      variant: "body2",
                      color: n.incoming ? t.palette.text : "#fff",
                      children: n.message,
                    }),
                  ],
                }),
              }),
              (0, C.jsx)(X, {}),
            ],
          });
        },
        ne = function (e) {
          var n = e.el,
            t = (0, a.Z)();
          return (0, C.jsxs)(r.Z, {
            direction: "row",
            justifyContent: n.incoming ? "start" : "end",
            children: [
              (0, C.jsx)(i.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: n.incoming
                    ? (0, J.Fq)(t.palette.background.default, 1)
                    : t.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, C.jsxs)(r.Z, {
                  spacing: 2,
                  children: [
                    (0, C.jsxs)(r.Z, {
                      p: 2,
                      direction: "column",
                      spacing: 3,
                      alignItems: "center",
                      sx: {
                        backgroundColor: t.palette.background.paper,
                        borderRadius: 1,
                      },
                      children: [
                        (0, C.jsx)("img", {
                          src: n.preview,
                          alt: n.message,
                          style: { maxHeight: 210, borderRadius: "10px" },
                        }),
                        (0, C.jsxs)(r.Z, {
                          direction: "column",
                          spacing: 2,
                          children: [
                            (0, C.jsx)(p.Z, {
                              variant: "subtitle2",
                              children: "Creating Chat App using MERN",
                            }),
                            (0, C.jsx)(p.Z, {
                              component: y.rU,
                              to: "//https://www.youtube.com",
                              variant: "subtitle2",
                              sx: { color: t.palette.primary.main },
                              children: "www.youtube.com/watch/v12uqywHTY2",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsx)(p.Z, {
                      variant: "body2",
                      color: n.incoming ? t.palette.text : "#fff",
                      children: n.message,
                    }),
                  ],
                }),
              }),
              (0, C.jsx)(X, {}),
            ],
          });
        },
        te = function (e) {
          var n = e.el,
            t = (0, a.Z)();
          return (0, C.jsxs)(r.Z, {
            direction: "row",
            justifyContent: n.incoming ? "start" : "end",
            children: [
              (0, C.jsx)(i.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: n.incoming
                    ? (0, J.Fq)(t.palette.background.paper, 1)
                    : t.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, C.jsxs)(r.Z, {
                  spacing: 2,
                  children: [
                    (0, C.jsx)(r.Z, {
                      p: 2,
                      direction: "column",
                      spacing: 3,
                      alignItems: "center",
                      sx: {
                        backgroundColor: (0, J.Fq)(
                          t.palette.background.paper,
                          1
                        ),
                        borderRadius: 1,
                      },
                      children: (0, C.jsx)(p.Z, {
                        variant: "body2",
                        color: t.palette.text,
                        children: n.message,
                      }),
                    }),
                    (0, C.jsx)(p.Z, {
                      variant: "body2",
                      color: n.incoming ? t.palette.text : "#fff",
                      children: n.reply,
                    }),
                  ],
                }),
              }),
              (0, C.jsx)(X, {}),
            ],
          });
        },
        ie = function (e) {
          var n = e.el,
            t = (0, a.Z)();
          return (0, C.jsxs)(r.Z, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              (0, C.jsx)(h.Z, { width: "46%" }),
              (0, C.jsx)(p.Z, {
                variant: "caption",
                sx: { color: t.palette.text },
                children: n.text,
              }),
              (0, C.jsx)(h.Z, { width: "46%" }),
            ],
          });
        },
        re = function (e) {
          var n = e.isMobile;
          return (0, C.jsx)(i.Z, {
            p: n ? 1 : 3,
            children: (0, C.jsx)(r.Z, {
              spacing: 3,
              children: Y.I3.map(function (e, n) {
                switch (e.type) {
                  case "divider":
                    return (0, C.jsx)(ie, { el: e });
                  case "msg":
                    switch (e.subtype) {
                      case "img":
                        return (0, C.jsx)(_, { el: e });
                      case "doc":
                        return (0, C.jsx)(ee, { el: e });
                      case "link":
                        return (0, C.jsx)(ne, { el: e });
                      case "reply":
                        return (0, C.jsx)(te, { el: e });
                      default:
                        return (0, C.jsx)($, { el: e });
                    }
                  default:
                    return (0, C.jsx)(C.Fragment, {});
                }
              }),
            }),
          });
        },
        oe = function () {
          var e = (0, k.Z)("between", "md", "xs", "sm"),
            n = (0, a.Z)();
          return (0, C.jsxs)(r.Z, {
            height: "100%",
            maxHeight: "100vh",
            width: e ? "100vw" : "auto",
            children: [
              (0, C.jsx)(R, {}),
              (0, C.jsx)(i.Z, {
                width: "100%",
                sx: {
                  position: "relative",
                  flexGrow: 1,
                  overflow: "scroll",
                  backgroundColor:
                    "light" === n.palette.mode
                      ? "#F0F4FA"
                      : n.palette.background,
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                },
                children: (0, C.jsx)(s.l, {
                  timeout: 500,
                  clickOnTrack: !1,
                  children: (0, C.jsx)(re, { isMobile: e }),
                }),
              }),
              (0, C.jsx)(V, {}),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=345.c55149fb.chunk.js.map
