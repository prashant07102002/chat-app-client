"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [338, 345],
  {
    3472: function (e, C, i) {
      i.r(C);
      var n = i(885),
        t = (i(2791), i(4142)),
        l = i(1087),
        r = i(6015),
        s = i(4162),
        o = i(4565),
        d = i(3811),
        a = i(3978),
        c = i(1872),
        x = i(997),
        p = i(155),
        h = i(2910),
        u = i(4059),
        Z = i(9165),
        j = i(8180),
        f = i(8037),
        L = i(1093),
        g = i(5041),
        v = i(4198),
        m = i(8685),
        b = i(2040),
        M = i(184);
      C.default = function () {
        var e = (0, t.Z)(),
          C = (0, l.lr)(),
          i = (0, n.Z)(C, 2),
          w = i[0],
          F = i[1],
          y = (0, m.Z)("up", "md");
        return (0, M.jsx)(r.Z, {
          sx: { width: y ? 320 : "100vw", maxHeight: "100vh" },
          children: (0, M.jsxs)(s.Z, {
            sx: { height: "100%" },
            children: [
              (0, M.jsx)(r.Z, {
                sx: {
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                  width: "100%",
                  backgroundColor:
                    "light" === e.palette.mode
                      ? "#F8FAFF"
                      : e.palette.background,
                },
                children: (0, M.jsxs)(s.Z, {
                  sx: { height: "100%", p: 2 },
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  spacing: 3,
                  children: [
                    (0, M.jsx)(o.Z, {
                      variant: "subtitle2",
                      children: "Contact Info",
                    }),
                    (0, M.jsx)(d.Z, {
                      onClick: function () {
                        w.set("open", !1), F(w);
                      },
                      children: (0, M.jsx)(h.Z, {}),
                    }),
                  ],
                }),
              }),
              (0, M.jsxs)(s.Z, {
                sx: {
                  height: "100%",
                  position: "relative",
                  flexGrow: 1,
                  overflow: "scroll",
                },
                p: 3,
                spacing: 3,
                children: [
                  (0, M.jsxs)(s.Z, {
                    alignItems: "center",
                    direction: "row",
                    spacing: 2,
                    children: [
                      (0, M.jsx)(a.Z, {
                        src: p.We.image.avatar(),
                        alt: p.We.name.firstName(),
                        sx: { height: 64, width: 64 },
                      }),
                      (0, M.jsxs)(s.Z, {
                        spacing: 0.5,
                        children: [
                          (0, M.jsx)(o.Z, {
                            variant: "article",
                            fontWeight: 600,
                            children: p.We.name.fullName(),
                          }),
                          (0, M.jsx)(o.Z, {
                            variant: "body2",
                            fontWeight: 500,
                            children: "+91 62543 28 739",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, M.jsxs)(s.Z, {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    children: [
                      (0, M.jsxs)(s.Z, {
                        alignItems: "center",
                        spacing: 1,
                        children: [
                          (0, M.jsx)(d.Z, { children: (0, M.jsx)(u.Z, {}) }),
                          (0, M.jsx)(o.Z, {
                            variant: "overline",
                            children: "Voice",
                          }),
                        ],
                      }),
                      (0, M.jsxs)(s.Z, {
                        alignItems: "center",
                        spacing: 1,
                        children: [
                          (0, M.jsx)(d.Z, { children: (0, M.jsx)(Z.Z, {}) }),
                          (0, M.jsx)(o.Z, {
                            variant: "overline",
                            children: "Video",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, M.jsx)(c.Z, {}),
                  (0, M.jsxs)(s.Z, {
                    spacing: 0.5,
                    children: [
                      (0, M.jsx)(o.Z, {
                        variant: "article",
                        fontWeight: 600,
                        children: "About",
                      }),
                      (0, M.jsx)(o.Z, {
                        variant: "body2",
                        fontWeight: 500,
                        children: "Imagination is the only limit",
                      }),
                    ],
                  }),
                  (0, M.jsx)(c.Z, {}),
                  (0, M.jsxs)(s.Z, {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                      (0, M.jsx)(o.Z, {
                        variant: "subtitle2",
                        children: "Media, Links & Docs",
                      }),
                      (0, M.jsx)(x.Z, {
                        endIcon: (0, M.jsx)(j.Z, {}),
                        children: "401",
                      }),
                    ],
                  }),
                  (0, M.jsx)(s.Z, {
                    direction: "row",
                    alignItems: "center",
                    spacing: 2,
                    children: [1, 2, 3].map(function (e) {
                      return (0,
                      M.jsx)(r.Z, { children: (0, M.jsx)("img", { src: p.We.image.city(), alt: p.We.internet.userName() }) });
                    }),
                  }),
                  (0, M.jsx)(c.Z, {}),
                  (0, M.jsxs)(s.Z, {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                      (0, M.jsxs)(s.Z, {
                        direction: "row",
                        alignItems: "center",
                        spacing: 2,
                        children: [
                          (0, M.jsx)(f.Z, { size: 21 }),
                          (0, M.jsx)(o.Z, {
                            variant: "subtitle2",
                            children: "Starred Messages",
                          }),
                        ],
                      }),
                      (0, M.jsx)(d.Z, { children: (0, M.jsx)(j.Z, {}) }),
                    ],
                  }),
                  (0, M.jsx)(c.Z, {}),
                  (0, M.jsxs)(s.Z, {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                      (0, M.jsxs)(s.Z, {
                        direction: "row",
                        alignItems: "center",
                        spacing: 2,
                        children: [
                          (0, M.jsx)(L.Z, { size: 21 }),
                          (0, M.jsx)(o.Z, {
                            variant: "subtitle2",
                            children: "Mute Notifications",
                          }),
                        ],
                      }),
                      (0, M.jsx)(b.Z, {}),
                    ],
                  }),
                  (0, M.jsx)(c.Z, {}),
                  (0, M.jsx)(o.Z, {
                    variant: "body2",
                    children: "1 group in common",
                  }),
                  (0, M.jsxs)(s.Z, {
                    direction: "row",
                    alignItems: "center",
                    spacing: 2,
                    children: [
                      (0, M.jsx)(a.Z, {
                        src: p.We.image.imageUrl(),
                        alt: p.We.name.fullName(),
                      }),
                      (0, M.jsxs)(s.Z, {
                        direction: "column",
                        spacing: 0.5,
                        children: [
                          (0, M.jsx)(o.Z, {
                            variant: "subtitle2",
                            children: "Camel\u2019s Gang",
                          }),
                          (0, M.jsx)(o.Z, {
                            variant: "caption",
                            children: "Owl, Parrot, Rabbit , You",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, M.jsx)(c.Z, {}),
                  (0, M.jsxs)(s.Z, {
                    direction: "row",
                    alignItems: "center",
                    spacing: 2,
                    children: [
                      (0, M.jsx)(x.Z, {
                        fullWidth: !0,
                        startIcon: (0, M.jsx)(g.Z, {}),
                        variant: "outlined",
                        children: "Block",
                      }),
                      (0, M.jsx)(x.Z, {
                        fullWidth: !0,
                        startIcon: (0, M.jsx)(v.Z, {}),
                        variant: "outlined",
                        children: "Delete",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    2345: function (e, C, i) {
      i.r(C),
        i.d(C, {
          default: function () {
            return le;
          },
        });
      var n = i(6015),
        t = i(4162),
        l = i(2791),
        r = i(4142),
        s = i(7578),
        o = i(885),
        d = i(6863),
        a = i(294),
        c = i(3978),
        x = i(4565),
        p = i(3811),
        h = i(1872),
        u = i(6882),
        Z = i(7962),
        j = i(4020),
        f = i(9165),
        L = i(4059),
        g = i(703),
        v = i(9865),
        m = i(155),
        b = i(1087),
        M = i(8685),
        w = i(184),
        F = (0, d.ZP)(a.Z)(function (e) {
          var C = e.theme;
          return {
            "& .MuiBadge-badge": {
              backgroundColor: "#44b700",
              color: "#44b700",
              boxShadow: "0 0 0 2px ".concat(C.palette.background.paper),
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
        y = [
          { title: "Contact info" },
          { title: "Mute notifications" },
          { title: "Clear messages" },
          { title: "Delete chat" },
        ],
        k = function () {
          var e = (0, M.Z)("between", "md", "xs", "sm"),
            C = (0, b.lr)(),
            i = (0, o.Z)(C, 2),
            s = i[0],
            d = i[1],
            a = (0, r.Z)(),
            k = l.useState(null),
            E = (0, o.Z)(k, 2),
            I = E[0],
            B = E[1],
            H = Boolean(I),
            D = function () {
              B(null);
            };
          return (0, w.jsx)(n.Z, {
            p: 2,
            width: "100%",
            sx: {
              backgroundColor:
                "light" === a.palette.mode ? "#F8FAFF" : a.palette.background,
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            },
            children: (0, w.jsxs)(t.Z, {
              alignItems: "center",
              direction: "row",
              sx: { width: "100%", height: "100%" },
              justifyContent: "space-between",
              children: [
                (0, w.jsxs)(t.Z, {
                  onClick: function () {
                    s.set("open", !0), d(s);
                  },
                  spacing: 2,
                  direction: "row",
                  children: [
                    (0, w.jsx)(n.Z, {
                      children: (0, w.jsx)(F, {
                        overlap: "circular",
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "right",
                        },
                        variant: "dot",
                        children: (0, w.jsx)(c.Z, {
                          alt: m.We.name.fullName(),
                          src: m.We.image.avatar(),
                        }),
                      }),
                    }),
                    (0, w.jsxs)(t.Z, {
                      spacing: 0.2,
                      children: [
                        (0, w.jsx)(x.Z, {
                          variant: "subtitle2",
                          children: m.We.name.fullName(),
                        }),
                        (0, w.jsx)(x.Z, {
                          variant: "caption",
                          children: "Online",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, w.jsxs)(t.Z, {
                  direction: "row",
                  alignItems: "center",
                  spacing: e ? 1 : 3,
                  children: [
                    (0, w.jsx)(p.Z, { children: (0, w.jsx)(f.Z, {}) }),
                    (0, w.jsx)(p.Z, { children: (0, w.jsx)(L.Z, {}) }),
                    !e && (0, w.jsx)(p.Z, { children: (0, w.jsx)(g.Z, {}) }),
                    (0, w.jsx)(h.Z, { orientation: "vertical", flexItem: !0 }),
                    (0, w.jsx)(p.Z, {
                      id: "conversation-positioned-button",
                      "aria-controls": H
                        ? "conversation-positioned-menu"
                        : void 0,
                      "aria-haspopup": "true",
                      "aria-expanded": H ? "true" : void 0,
                      onClick: function (e) {
                        B(e.currentTarget);
                      },
                      children: (0, w.jsx)(v.Z, {}),
                    }),
                    (0, w.jsx)(u.Z, {
                      MenuListProps: { "aria-labelledby": "fade-button" },
                      TransitionComponent: Z.Z,
                      id: "conversation-positioned-menu",
                      "aria-labelledby": "conversation-positioned-button",
                      anchorEl: I,
                      open: H,
                      onClose: D,
                      anchorOrigin: { vertical: "bottom", horizontal: "right" },
                      transformOrigin: { vertical: "top", horizontal: "right" },
                      children: (0, w.jsx)(n.Z, {
                        p: 1,
                        children: (0, w.jsx)(t.Z, {
                          spacing: 1,
                          children: y.map(function (e) {
                            return (0,
                            w.jsxs)(j.Z, { onClick: D, children: [(0, w.jsx)(t.Z, { sx: { minWidth: 100 }, direction: "row", alignItems: "center", justifyContent: "space-between", children: (0, w.jsx)("span", { children: e.title }) }), " "] });
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
        E = i(4998),
        I = i(5152),
        B = i(5590),
        H = i(8254),
        D = i(6526),
        A = i(6206),
        W = i(2413),
        R = i(6880),
        z = i(9134),
        S = i(5355),
        P = i(9585),
        O = i(4306),
        N = i(6638),
        q = i(3932),
        V = (0, d.ZP)(E.Z)(function (e) {
          e.theme;
          return {
            "& .MuiInputBase-input": {
              paddingTop: "12px !important",
              paddingBottom: "12px !important",
            },
          };
        }),
        T = [
          {
            color: "#4da5fe",
            icon: (0, w.jsx)(D.Z, { size: 24 }),
            y: 102,
            title: "Photo/Video",
          },
          {
            color: "#1b8cfe",
            icon: (0, w.jsx)(A.Z, { size: 24 }),
            y: 172,
            title: "Stickers",
          },
          {
            color: "#0172e4",
            icon: (0, w.jsx)(W.Z, { size: 24 }),
            y: 242,
            title: "Image",
          },
          {
            color: "#0159b2",
            icon: (0, w.jsx)(R.Z, { size: 24 }),
            y: 312,
            title: "Document",
          },
          {
            color: "#013f7f",
            icon: (0, w.jsx)(z.Z, { size: 24 }),
            y: 382,
            title: "Contact",
          },
        ],
        G = function (e) {
          var C = e.openPicker,
            i = e.setOpenPicker,
            n = l.useState(!1),
            r = (0, o.Z)(n, 2),
            s = r[0],
            d = r[1];
          return (0, w.jsx)(V, {
            fullWidth: !0,
            placeholder: "Write a message...",
            variant: "filled",
            InputProps: {
              disableUnderline: !0,
              startAdornment: (0, w.jsxs)(t.Z, {
                sx: { width: "max-content" },
                children: [
                  (0, w.jsx)(t.Z, {
                    sx: {
                      position: "relative",
                      display: s ? "inline-block" : "none",
                    },
                    children: T.map(function (e) {
                      return (0, w.jsx)(I.Z, {
                        placement: "right",
                        title: e.title,
                        children: (0, w.jsx)(B.Z, {
                          onClick: function () {
                            d(!s);
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
                  (0, w.jsx)(H.Z, {
                    children: (0, w.jsx)(p.Z, {
                      onClick: function () {
                        d(!s);
                      },
                      children: (0, w.jsx)(S.Z, {}),
                    }),
                  }),
                ],
              }),
              endAdornment: (0, w.jsx)(t.Z, {
                sx: { position: "relative" },
                children: (0, w.jsx)(H.Z, {
                  children: (0, w.jsx)(p.Z, {
                    onClick: function () {
                      i(!C);
                    },
                    children: (0, w.jsx)(P.Z, {}),
                  }),
                }),
              }),
            },
          });
        },
        U = function () {
          var e = (0, r.Z)(),
            C = (0, M.Z)("between", "md", "xs", "sm"),
            i = (0, b.lr)(),
            s = (0, o.Z)(i, 1)[0],
            d = l.useState(!1),
            a = (0, o.Z)(d, 2),
            c = a[0],
            x = a[1];
          return (0, w.jsx)(n.Z, {
            sx: {
              position: "relative",
              backgroundColor: "transparent !important",
            },
            children: (0, w.jsx)(n.Z, {
              p: C ? 1 : 2,
              width: "100%",
              sx: {
                backgroundColor:
                  "light" === e.palette.mode ? "#F8FAFF" : e.palette.background,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              },
              children: (0, w.jsxs)(t.Z, {
                direction: "row",
                alignItems: "center",
                spacing: C ? 1 : 3,
                children: [
                  (0, w.jsxs)(t.Z, {
                    sx: { width: "100%" },
                    children: [
                      (0, w.jsx)(n.Z, {
                        style: {
                          zIndex: 10,
                          position: "fixed",
                          display: c ? "inline" : "none",
                          bottom: 81,
                          right: C ? 20 : "true" === s.get("open") ? 420 : 100,
                        },
                        children: (0, w.jsx)(q.Z, {
                          theme: e.palette.mode,
                          data: N,
                          onEmojiSelect: console.log,
                        }),
                      }),
                      (0, w.jsx)(G, { openPicker: c, setOpenPicker: x }),
                    ],
                  }),
                  (0, w.jsx)(n.Z, {
                    sx: {
                      height: 48,
                      width: 48,
                      backgroundColor: e.palette.primary.main,
                      borderRadius: 1.5,
                    },
                    children: (0, w.jsx)(t.Z, {
                      sx: { height: "100%" },
                      alignItems: "center",
                      justifyContent: "center",
                      children: (0, w.jsx)(p.Z, {
                        children: (0, w.jsx)(O.Z, { color: "#ffffff" }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Y = i(5122),
        J = i(2065),
        K = i(7863),
        Q = i(7501),
        X = function () {
          var e = l.useState(null),
            C = (0, o.Z)(e, 2),
            i = C[0],
            n = C[1],
            r = Boolean(i),
            s = function () {
              n(null);
            };
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(K.Z, {
                size: 20,
                id: "basic-button",
                "aria-controls": r ? "basic-menu" : void 0,
                "aria-haspopup": "true",
                "aria-expanded": r ? "true" : void 0,
                onClick: function (e) {
                  n(e.currentTarget);
                },
              }),
              (0, w.jsx)(u.Z, {
                id: "basic-menu",
                anchorEl: i,
                open: r,
                onClose: s,
                MenuListProps: { "aria-labelledby": "basic-button" },
                children: (0, w.jsx)(t.Z, {
                  spacing: 1,
                  px: 1,
                  children: Y.GF.map(function (e) {
                    return (0, w.jsx)(j.Z, { onClick: s, children: e.title });
                  }),
                }),
              }),
            ],
          });
        },
        $ = function (e) {
          var C = e.el,
            i = (0, r.Z)();
          return (0, w.jsxs)(t.Z, {
            direction: "row",
            justifyContent: C.incoming ? "start" : "end",
            children: [
              (0, w.jsx)(n.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: C.incoming
                    ? (0, J.Fq)(i.palette.background.default, 1)
                    : i.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, w.jsx)(x.Z, {
                  variant: "body2",
                  color: C.incoming ? i.palette.text : "#fff",
                  children: C.message,
                }),
              }),
              (0, w.jsx)(X, {}),
            ],
          });
        },
        _ = function (e) {
          var C = e.el,
            i = (0, r.Z)();
          return (0, w.jsxs)(t.Z, {
            direction: "row",
            justifyContent: C.incoming ? "start" : "end",
            children: [
              (0, w.jsx)(n.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: C.incoming
                    ? (0, J.Fq)(i.palette.background.default, 1)
                    : i.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, w.jsxs)(t.Z, {
                  spacing: 1,
                  children: [
                    (0, w.jsx)("img", {
                      src: C.img,
                      alt: C.message,
                      style: { maxHeight: 210, borderRadius: "10px" },
                    }),
                    (0, w.jsx)(x.Z, {
                      variant: "body2",
                      color: C.incoming ? i.palette.text : "#fff",
                      children: C.message,
                    }),
                  ],
                }),
              }),
              (0, w.jsx)(X, {}),
            ],
          });
        },
        ee = function (e) {
          var C = e.el,
            i = (0, r.Z)();
          return (0, w.jsxs)(t.Z, {
            direction: "row",
            justifyContent: C.incoming ? "start" : "end",
            children: [
              (0, w.jsx)(n.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: C.incoming
                    ? (0, J.Fq)(i.palette.background.default, 1)
                    : i.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, w.jsxs)(t.Z, {
                  spacing: 2,
                  children: [
                    (0, w.jsxs)(t.Z, {
                      p: 2,
                      direction: "row",
                      spacing: 3,
                      alignItems: "center",
                      sx: {
                        backgroundColor: i.palette.background.paper,
                        borderRadius: 1,
                      },
                      children: [
                        (0, w.jsx)(D.Z, { size: 48 }),
                        (0, w.jsx)(x.Z, {
                          variant: "caption",
                          children: "Abstract.png",
                        }),
                        (0, w.jsx)(p.Z, { children: (0, w.jsx)(Q.Z, {}) }),
                      ],
                    }),
                    (0, w.jsx)(x.Z, {
                      variant: "body2",
                      color: C.incoming ? i.palette.text : "#fff",
                      children: C.message,
                    }),
                  ],
                }),
              }),
              (0, w.jsx)(X, {}),
            ],
          });
        },
        Ce = function (e) {
          var C = e.el,
            i = (0, r.Z)();
          return (0, w.jsxs)(t.Z, {
            direction: "row",
            justifyContent: C.incoming ? "start" : "end",
            children: [
              (0, w.jsx)(n.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: C.incoming
                    ? (0, J.Fq)(i.palette.background.default, 1)
                    : i.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, w.jsxs)(t.Z, {
                  spacing: 2,
                  children: [
                    (0, w.jsxs)(t.Z, {
                      p: 2,
                      direction: "column",
                      spacing: 3,
                      alignItems: "center",
                      sx: {
                        backgroundColor: i.palette.background.paper,
                        borderRadius: 1,
                      },
                      children: [
                        (0, w.jsx)("img", {
                          src: C.preview,
                          alt: C.message,
                          style: { maxHeight: 210, borderRadius: "10px" },
                        }),
                        (0, w.jsxs)(t.Z, {
                          direction: "column",
                          spacing: 2,
                          children: [
                            (0, w.jsx)(x.Z, {
                              variant: "subtitle2",
                              children: "Creating Chat App using MERN",
                            }),
                            (0, w.jsx)(x.Z, {
                              component: b.rU,
                              to: "//https://www.youtube.com",
                              variant: "subtitle2",
                              sx: { color: i.palette.primary.main },
                              children: "www.youtube.com/watch/v12uqywHTY2",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, w.jsx)(x.Z, {
                      variant: "body2",
                      color: C.incoming ? i.palette.text : "#fff",
                      children: C.message,
                    }),
                  ],
                }),
              }),
              (0, w.jsx)(X, {}),
            ],
          });
        },
        ie = function (e) {
          var C = e.el,
            i = (0, r.Z)();
          return (0, w.jsxs)(t.Z, {
            direction: "row",
            justifyContent: C.incoming ? "start" : "end",
            children: [
              (0, w.jsx)(n.Z, {
                px: 1.5,
                py: 1.5,
                sx: {
                  backgroundColor: C.incoming
                    ? (0, J.Fq)(i.palette.background.paper, 1)
                    : i.palette.primary.main,
                  borderRadius: 1.5,
                  width: "max-content",
                },
                children: (0, w.jsxs)(t.Z, {
                  spacing: 2,
                  children: [
                    (0, w.jsx)(t.Z, {
                      p: 2,
                      direction: "column",
                      spacing: 3,
                      alignItems: "center",
                      sx: {
                        backgroundColor: (0, J.Fq)(
                          i.palette.background.paper,
                          1
                        ),
                        borderRadius: 1,
                      },
                      children: (0, w.jsx)(x.Z, {
                        variant: "body2",
                        color: i.palette.text,
                        children: C.message,
                      }),
                    }),
                    (0, w.jsx)(x.Z, {
                      variant: "body2",
                      color: C.incoming ? i.palette.text : "#fff",
                      children: C.reply,
                    }),
                  ],
                }),
              }),
              (0, w.jsx)(X, {}),
            ],
          });
        },
        ne = function (e) {
          var C = e.el,
            i = (0, r.Z)();
          return (0, w.jsxs)(t.Z, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              (0, w.jsx)(h.Z, { width: "46%" }),
              (0, w.jsx)(x.Z, {
                variant: "caption",
                sx: { color: i.palette.text },
                children: C.text,
              }),
              (0, w.jsx)(h.Z, { width: "46%" }),
            ],
          });
        },
        te = function (e) {
          var C = e.isMobile;
          return (0, w.jsx)(n.Z, {
            p: C ? 1 : 3,
            children: (0, w.jsx)(t.Z, {
              spacing: 3,
              children: Y.I3.map(function (e, C) {
                switch (e.type) {
                  case "divider":
                    return (0, w.jsx)(ne, { el: e });
                  case "msg":
                    switch (e.subtype) {
                      case "img":
                        return (0, w.jsx)(_, { el: e });
                      case "doc":
                        return (0, w.jsx)(ee, { el: e });
                      case "link":
                        return (0, w.jsx)(Ce, { el: e });
                      case "reply":
                        return (0, w.jsx)(ie, { el: e });
                      default:
                        return (0, w.jsx)($, { el: e });
                    }
                  default:
                    return (0, w.jsx)(w.Fragment, {});
                }
              }),
            }),
          });
        },
        le = function () {
          var e = (0, M.Z)("between", "md", "xs", "sm"),
            C = (0, r.Z)();
          return (0, w.jsxs)(t.Z, {
            height: "100%",
            maxHeight: "100vh",
            width: e ? "100vw" : "auto",
            children: [
              (0, w.jsx)(k, {}),
              (0, w.jsx)(n.Z, {
                width: "100%",
                sx: {
                  position: "relative",
                  flexGrow: 1,
                  overflow: "scroll",
                  backgroundColor:
                    "light" === C.palette.mode
                      ? "#F0F4FA"
                      : C.palette.background,
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                },
                children: (0, w.jsx)(s.l, {
                  timeout: 500,
                  clickOnTrack: !1,
                  children: (0, w.jsx)(te, { isMobile: e }),
                }),
              }),
              (0, w.jsx)(U, {}),
            ],
          });
        };
    },
    4338: function (e, C, i) {
      i.r(C),
        i.d(C, {
          default: function () {
            return j;
          },
        });
      var n = i(885),
        t = i(2791),
        l = i(4142),
        r = i(4162),
        s = i(6015),
        o = i(4565),
        d = i(1087),
        a = i(2345),
        c = i(7376),
        x = i(3472),
        p = i(1413),
        h = i(184);
      function u(e) {
        var C = Object.assign({}, e),
          i = (0, l.Z)().palette.primary.main;
        return (0, h.jsx)(
          s.Z,
          (0, p.Z)(
            (0, p.Z)({}, C),
            {},
            {
              children: (0, h.jsxs)("svg", {
                width: "360",
                height: "360",
                viewBox: "0 0 750 750",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M356.607 560.305C264.098 540.058 140.839 499.879 161.094 362.018C181.349 224.156 268.175 171 375.595 171C483.01 171 605.051 252.041 581.094 419.925C557.136 587.809 449.117 580.551 356.607 560.305ZM660.68 394.122C664.5 355.761 660.441 317.805 649.538 282.225L680.646 265.561C685.889 262.754 687.861 256.229 685.058 250.987L642.588 171.698C639.776 166.456 633.251 164.484 628.007 167.291L596.9 183.954C573.318 155.169 543.97 130.76 509.927 112.683L520.131 78.919C521.855 73.2271 518.637 67.2188 512.942 65.4981L426.844 39.4636C421.15 37.7428 415.146 40.9614 413.422 46.6533L403.218 80.4177C364.851 76.5987 336.9 90.6574 301.318 101.554L284.654 70.4455C281.847 65.2038 275.322 63.2311 270.081 66.0385L190.792 108.511C185.55 111.318 183.577 117.843 186.385 123.084L203.048 154.193C174.263 177.775 139.853 197.122 121.777 231.172L88.0118 220.962C82.3209 219.242 76.3116 222.46 74.5909 228.151L48.5573 314.25C46.8366 319.942 50.0552 325.95 55.7461 327.672L89.5114 337.881C85.6924 376.241 89.7511 414.197 100.647 449.777L69.5393 466.442C64.2975 469.249 62.3248 475.774 65.1322 481.016L107.605 560.305C110.412 565.546 116.937 567.519 122.178 564.711L153.287 548.047C176.868 576.834 206.216 601.243 240.265 619.319L230.056 653.084C228.335 658.775 231.554 664.784 237.245 666.505L323.345 692.535C329.031 694.259 335.043 691.04 336.768 685.346L346.972 651.585C385.33 655.404 423.29 651.345 458.871 640.448L475.53 671.557C478.342 676.798 484.868 678.767 490.111 675.963L569.4 633.491C574.635 630.684 576.616 624.159 573.804 618.918L557.136 587.809C585.927 564.227 610.332 534.879 628.414 500.83L662.174 511.04C667.869 512.76 673.881 509.543 675.597 503.851L701.629 417.752C703.353 412.061 700.134 406.052 694.44 404.331L660.68 394.122Z",
                    fill: i,
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M494.093 200.551L491.095 200.449L491.01 203.113C490.868 207.906 490.933 213.034 491.005 218.624C491.055 222.52 491.107 226.641 491.095 231.031L490.597 239.698C490.61 247.773 490.667 259.013 490.767 273.417L491.093 314.421C488.889 315.152 487.233 317.054 486.901 319.369C485.083 319.646 483.687 321.19 483.687 323.047C483.687 324.362 484.387 325.518 485.441 326.181L484.158 329.281C483.589 330.659 482.649 331.836 481.44 332.687C476.141 336.414 473.021 342.451 473.095 348.836C473.097 349.006 473.101 349.175 473.108 349.344C473.131 349.956 473.655 350.427 474.281 350.411C474.906 350.388 475.394 349.873 475.371 349.261C475.365 349.112 475.361 348.962 475.359 348.811C475.294 343.149 479.061 337.795 483.76 334.489C485.317 333.393 486.527 331.881 487.257 330.114L487.641 326.77H489.251C489.251 326.77 489.81 329.78 489.81 332.133C489.81 334.487 489.251 339.148 489.251 339.148H487.395C485.27 339.148 483.541 340.842 483.541 342.924C483.541 345.005 485.27 346.699 487.395 346.699H487.661C489.786 346.699 490.515 345.612 490.515 342.924C490.515 341.517 490.671 340.51 492.967 340.51C495.264 340.51 494.672 342.924 494.672 342.924C494.672 345.005 496.401 346.699 498.527 346.699H498.792C500.918 346.699 502.647 345.005 502.647 342.924C502.647 340.842 499.062 339.081 496.937 339.081C496.937 339.081 496.371 334.845 496.371 332.687C496.371 330.868 496.937 327.148 496.937 327.148H494.672C494.672 327.148 495.145 330.62 495.145 332.738C495.145 334.857 494.672 339.081 494.672 339.081C494.672 339.081 493.424 339.306 492.828 339.319C492.233 339.332 491.515 339.148 491.515 339.148C491.515 339.148 491.019 334.817 491.019 332.738C491.019 330.66 491.515 326.77 491.515 326.77H494.672H496.937H498.547L499.93 330.114C500.625 331.793 502.705 333.268 504.291 334.392L504.492 334.534C509.086 337.797 510.829 343.059 510.829 348.609C510.829 353.298 508.952 357.692 505.542 360.983C502.134 364.274 497.62 367.049 492.828 366.98C489.029 366.926 485.145 364.832 482.108 362.563C479.168 360.366 475.359 354.357 474.725 352.969C474.091 351.582 473.793 353.771 473.978 354.357C475.198 358.225 477.694 361.718 481.006 364.193C484.431 366.752 488.508 368.137 492.795 368.198C498.199 368.274 503.288 366.274 507.132 362.563C510.976 358.852 513.094 353.896 513.094 348.609C513.094 342.35 510.001 336.417 504.821 332.738C503.559 331.842 502.594 330.647 502.029 329.281L500.747 326.181C501.8 325.519 502.5 324.362 502.5 323.047C502.5 321.19 501.104 319.646 499.286 319.369C498.912 316.759 496.854 314.673 494.226 314.2L494.081 314.2L492.344 276.07C492.24 261.556 493.598 232.546 493.598 232.546C493.622 221.39 493.759 211.61 494.009 203.205L494.093 200.551ZM498.527 344.481C497.65 344.481 496.937 343.782 496.937 342.924V340.51C496.937 340.51 500.382 341.2 500.382 342.924C500.382 344.505 499.782 344.496 499.006 344.483H499.004C498.935 344.482 498.864 344.481 498.792 344.481H498.527ZM484.939 342.924C485.085 345.092 489.584 346.038 489.251 342.924V340.51C489.251 340.51 484.792 340.755 484.939 342.924ZM489.21 319.324C489.626 317.602 491.21 316.316 493.094 316.316C494.978 316.316 496.561 317.602 496.977 319.324H489.21ZM498.7 321.543H498.216H487.972H487.488C486.641 321.543 485.952 322.218 485.952 323.047C485.952 323.877 486.641 324.551 487.488 324.551H498.7C499.547 324.551 500.236 323.877 500.236 323.047C500.236 322.218 499.547 321.543 498.7 321.543ZM518.104 331.2H520.083C520.641 331.2 521.094 330.752 521.094 330.2C521.094 329.648 520.641 329.2 520.083 329.2H518.104C517.546 329.2 517.094 329.648 517.094 330.2C517.094 330.752 517.546 331.2 518.104 331.2ZM516.532 338.279L518.436 339.081C518.973 339.307 519.234 339.947 519.018 340.51C518.803 341.073 518.193 341.347 517.656 341.121L515.751 340.319C515.215 340.093 514.954 339.453 515.169 338.89C515.333 338.461 515.726 338.2 516.142 338.2C516.272 338.2 516.404 338.225 516.532 338.279ZM514.832 321.972L516.616 320.54C517.119 320.137 517.245 319.337 516.897 318.753C516.682 318.393 516.336 318.2 515.985 318.2C515.767 318.2 515.548 318.274 515.355 318.428L513.571 319.86C513.068 320.264 512.943 321.064 513.291 321.647C513.639 322.23 514.329 322.375 514.832 321.972ZM467.083 331.2H465.104C464.546 331.2 464.094 330.752 464.094 330.2C464.094 329.648 464.546 329.2 465.104 329.2H467.083C467.641 329.2 468.094 329.648 468.094 330.2C468.094 330.752 467.641 331.2 467.083 331.2ZM468.656 338.279L466.752 339.081C466.215 339.307 465.954 339.947 466.169 340.51C466.385 341.073 466.995 341.347 467.532 341.121L469.436 340.319C469.973 340.093 470.234 339.453 470.018 338.89C469.854 338.461 469.461 338.2 469.046 338.2C468.916 338.2 468.784 338.225 468.656 338.279ZM470.356 321.972L468.571 320.54C468.068 320.137 467.943 319.337 468.291 318.754C468.506 318.393 468.851 318.2 469.203 318.2C469.42 318.2 469.64 318.274 469.832 318.428L471.616 319.86C472.119 320.263 472.245 321.063 471.897 321.647C471.549 322.23 470.859 322.375 470.356 321.972Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    d: "M346.364 479.782C357.394 482.685 363.054 489.594 367.834 496.029C372.624 502.463 362.094 499.402 356.284 497.079C350.474 494.757 336.484 486.168 336.484 486.168L290.104 472.14V450.688L303.974 449.878C303.974 449.878 335.324 476.878 346.364 479.782Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M298.305 322.67C308.225 360.214 313.345 396.137 314.155 430.598C314.155 430.598 323.445 431.759 322.285 439.888C321.125 448.017 296.735 470.08 296.735 470.08L288.285 442.071L285.125 338.859L298.305 322.67Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M301.69 341.885L295.994 338.106C295.63 337.865 295.15 338.053 295.019 338.487L293.033 345.084C292.867 345.634 293.361 346.148 293.874 345.961L301.556 343.142C302.08 342.95 302.16 342.196 301.69 341.885ZM301 342.975L294 345L296.084 339L301 342.975Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M299.19 389.385L293.494 385.606C293.13 385.365 292.65 385.553 292.519 385.987L290.533 392.584C290.367 393.134 290.861 393.648 291.374 393.461L299.056 390.642C299.58 390.45 299.66 389.696 299.19 389.385ZM298.5 390.475L291.5 392.5L293.584 386.5L298.5 390.475Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M296.195 416.071L296.619 409.249C296.646 408.813 296.244 408.491 295.802 408.595L289.095 410.173C288.537 410.305 288.338 410.99 288.757 411.34L295.04 416.584C295.468 416.941 296.16 416.634 296.195 416.071ZM294.906 416.019L289.652 410.969L295.89 409.773L294.906 416.019Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M306.991 411.038L300.169 410.614C299.733 410.587 299.411 410.989 299.515 411.431L301.094 418.137C301.225 418.696 301.91 418.894 302.26 418.476L307.504 412.193C307.862 411.765 307.554 411.073 306.991 411.038ZM306.939 412.327L301.889 417.58L300.694 411.342L306.939 412.327Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M301.724 445.815L295.604 448.859C295.213 449.053 295.136 449.563 295.447 449.893L300.167 454.912C300.56 455.33 301.253 455.16 301.346 454.622L302.746 446.559C302.842 446.01 302.23 445.564 301.724 445.815ZM302.324 446.958L300.578 454.032L296.423 449.228L302.324 446.958Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M304.724 426.815L298.604 429.859C298.213 430.053 298.136 430.563 298.447 430.893L303.167 435.912C303.56 436.33 304.253 436.16 304.346 435.622L305.746 427.559C305.842 427.01 305.23 426.564 304.724 426.815ZM305.324 427.958L303.578 435.032L299.423 430.228L305.324 427.958Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    d: "M265.047 345.246L258.318 365.563C242.935 412.092 235.36 435.709 235.133 437.923C234.991 439.298 235.825 440.327 237.112 440.676C237.885 440.886 238.83 440.875 240.004 440.701C241.831 440.43 244.273 439.745 247.222 438.726C249.501 437.939 251.965 436.994 254.46 435.972L255.51 435.539C255.851 435.397 256.182 435.258 256.503 435.121L258.171 434.403L258.646 434.193L258.923 433.752C259.415 432.97 260.115 431.586 260.806 429.688C261.413 428.021 261.897 426.236 262.215 424.349L262.326 423.637C262.425 422.944 263.376 421.341 265.337 418.604L266.704 416.733C267.825 415.222 269.982 412.335 270.199 412.043L271.467 410.325C272.679 408.673 273.737 407.197 274.771 405.709C279.956 398.244 283.62 391.709 285.782 385.421C287.616 380.087 288.259 375.145 287.533 370.601C286.421 363.666 286.847 357.039 288.47 350.819C289.818 345.652 285.553 340.884 279.404 339.132C273.05 337.321 266.997 339.372 265.047 345.246Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M276.311 315.203C280.059 319.181 283.204 322.214 285.745 324.303C290.026 327.822 296.164 331.594 304.157 335.618C279.707 341.28 264.777 342.399 259.368 338.976C259.368 338.976 261.621 328.374 264.858 323.832C267.269 320.45 276.311 315.203 276.311 315.203Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M315.204 264.092C310.124 283.386 296.244 303.529 281.464 299.639C266.684 295.748 258.504 269.377 263.584 250.083C268.664 230.789 284.764 218.302 299.544 222.192C314.324 226.082 320.284 244.799 315.204 264.092Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M318.585 270.245C312.836 292.325 297.128 315.377 280.402 310.925C263.675 306.472 254.418 276.293 260.167 254.213C265.916 232.133 284.136 217.843 300.863 222.294C317.589 226.746 324.334 248.166 318.585 270.245Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M291.892 224.834C303.29 225.481 311.608 229.226 316.271 235.824L316.797 236.587C319.103 239.915 321.042 242.01 321.89 248.309L321.972 248.979C322.456 253.123 322.598 257.495 322.349 258.946C322.215 259.559 321.952 259.773 321.62 259.708C320.867 259.56 318.916 256.094 315.768 249.308L313.126 252.4C311.688 254.061 308.639 255.627 306.832 256.803C305.025 257.98 291.892 224.834 291.892 224.834Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M303.399 287.511C309.746 290.158 314.567 293.596 315.846 292.166C317.124 290.736 312.764 286.382 309.377 280.468C305.831 274.588 302.463 267.18 301.833 264.166L300.221 256.549C295.505 262.5 291.089 282.468 303.399 287.511Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M377.188 651.122L376.844 672.303H364.796L361.188 648L377.188 651.122Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M245.24 538.488C245.24 538.488 323.413 536.762 347.987 533.217C375.267 529.282 390.185 519.983 396.118 521.082C398.898 521.597 415.307 524.505 449.546 528.147C464.027 529.687 501.616 529.923 501.616 529.923L516.205 498.872C516.205 498.872 413.541 478.26 381.082 487.181C370.872 489.987 348.763 494.037 322.476 492.558C299.745 491.279 237.923 479.272 237.923 479.272C237.923 479.272 212.962 488.232 217.48 510.267C221.998 532.301 245.24 538.488 245.24 538.488Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M507.84 512.157L512.646 498.242C512.646 498.242 410.155 479.125 377.696 488.046C367.487 490.852 358.26 495.479 331.973 494C321.91 493.434 304.704 491.079 280.356 486.934C268.039 484.838 266.061 485.614 275.741 491.944C298.189 506.624 348.123 503.164 393.428 496.549C477.63 484.255 507.84 512.157 507.84 512.157Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    d: "M363.587 655.932C358.487 661.567 351.727 670.847 355.207 680.137L415.597 698.717C415.597 698.717 417.917 691.747 414.437 685.947C410.947 680.137 377.999 657.215 377.999 657.215L363.587 655.932Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M391.462 668.517C391.862 668.408 392.273 668.645 392.382 669.044C392.49 669.444 392.254 669.856 391.854 669.964C389.887 670.497 388.591 671.74 388.136 673.314C387.546 675.348 387.482 677.429 388.15 680.76C388.232 681.166 387.969 681.561 387.563 681.643C387.157 681.724 386.761 681.461 386.68 681.055C385.965 677.493 386.037 675.168 386.695 672.896C387.298 670.813 388.996 669.185 391.462 668.517Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M358.207 681.137L417.619 698.618C417.619 698.618 425.164 697.032 417.362 695.923C409.346 694.784 362.413 673.293 357.251 677.207C356.517 677.764 357.753 679.923 358.207 681.137Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    d: "M210.171 534.056C210.171 534.056 236.979 542.518 258.567 545.69C280.155 548.862 323.216 550.667 323.216 550.667C323.216 550.667 336.66 557.975 337.527 561.359C337.865 562.677 339.902 580.097 345.535 602.349C348.184 612.816 362.342 660.152 362.342 660.152L381.082 651.856C381.082 651.856 380.33 564.854 368.367 535.998C356.405 507.142 233.442 479.115 233.442 479.115C233.442 479.115 207.345 474.394 200.241 495.736C193.136 517.078 210.171 534.056 210.171 534.056Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M365.342 657.152L384.082 648.856C383.58 590.855 379.342 552.235 371.367 532.998C371.367 532.998 379.517 635.409 365.342 657.152Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    d: "M528.755 513.299C533.418 519.3 541.383 527.569 551.137 525.755L579.921 469.509C579.921 469.509 572.514 466.233 566.198 468.653C559.871 471.081 532.047 500.116 532.047 500.116L528.755 513.299Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M403.73 678.504C404.029 678.218 404.504 678.228 404.791 678.527C405.077 678.826 405.067 679.301 404.768 679.587C403.025 681.257 402.702 684.055 403.702 685.744C403.913 686.1 403.795 686.56 403.438 686.771C403.082 686.982 402.622 686.864 402.411 686.508C401.063 684.23 401.475 680.665 403.73 678.504Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M397.604 673.559C397.906 673.275 398.38 673.29 398.664 673.592C398.947 673.893 398.933 674.368 398.631 674.652L398.225 675.042C395.071 678.145 394.167 680.859 396.944 683.77C397.23 684.07 397.219 684.545 396.919 684.83C396.619 685.116 396.144 685.105 395.859 684.805C393.806 682.654 393.385 680.33 394.294 678.004C394.921 676.4 396.012 675.054 397.604 673.559Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M368.737 672.576C370.459 675.867 379.599 674.516 378.008 665.414C377.256 661.108 363.969 663.461 368.737 672.576Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M545.43 526.801C557.509 512.998 564.451 481.956 574.398 471.274C577.909 467.504 582.463 466.658 577.561 475.584C568.592 491.915 551.354 526.801 551.354 526.801C550.442 527.258 549.314 526.801 548.294 526.801H545.43Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    d: "M346.364 479.782C357.394 482.685 363.054 489.594 367.834 496.029C372.624 502.463 362.094 499.402 356.284 497.079C350.474 494.757 339.36 485.943 339.36 485.943L346.364 479.782Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M245.894 453.654C245.894 453.654 307.984 480.327 316.734 480.362C325.474 480.398 346.924 490.813 348.084 498.942C349.494 508.831 312.084 494.297 312.084 494.297C312.084 494.297 228.474 494.297 214.544 480.362C200.605 466.427 209.894 437.396 209.894 437.396L245.894 453.654Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M230.794 329.401C230.794 329.401 245.894 338.69 248.214 368.883C250.534 399.075 241.244 435.074 241.244 435.074C241.244 435.074 247.054 439.719 248.214 444.364C249.374 449.009 245.844 455.14 245.844 455.14C245.844 455.14 211.056 472.234 208.733 473.395C206.411 474.556 197.121 471.072 197.121 461.782C197.121 452.493 200.605 444.364 200.605 444.364C202.272 383.079 192.476 323.594 230.794 329.401Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M292.304 265.155C295.875 260.372 303.425 258.815 305.439 266.365C305.439 266.365 306.987 270.921 303.867 273.736C294.31 282.36 288.732 269.938 292.304 265.155Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M312.249 270.343C315.642 265.799 322.814 264.32 324.728 271.493C324.728 271.493 326.199 275.821 323.235 278.496C314.155 286.688 308.856 274.887 312.249 270.343Z",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    d: "M284.464 328.504C284.464 328.504 284.464 384.324 285.284 415.517C286.104 446.71 278.954 477.444 265.294 501.479C251.634 525.515 253.493 559.898 243.424 562.454C163.779 582.669 185.222 335.282 214.691 319.474C244.16 303.665 253.894 300.317 253.894 300.317",
                    fill: "white",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M243.617 344.165L236.754 354.413C236.184 355.263 236.614 356.421 237.6 356.694L246.759 359.226C247.824 359.52 248.83 358.602 248.635 357.515L246.34 344.735C246.102 343.407 244.368 343.044 243.617 344.165ZM245.109 345.742L247.159 357.78L239.194 354.413L245.109 345.742Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M221.534 334.156L213.445 347.139C212.929 347.969 213.33 349.063 214.261 349.361L228.384 353.889C229.56 354.266 230.662 353.139 230.26 351.971L224.225 334.46C223.814 333.266 222.202 333.084 221.534 334.156ZM223.452 335.738L227.584 351.971L215.339 347.139L223.452 335.738Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M216.551 432.386L222.053 453.063C222.391 454.333 224.084 454.585 224.777 453.468L232.957 440.278C233.411 439.546 233.158 438.584 232.403 438.171L218.72 430.684C217.563 430.051 216.212 431.111 216.551 432.386ZM218 433L230.683 439.487L223.502 452.677L218 433Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M205.532 508.311L208.532 522.484C208.808 523.785 210.513 524.111 211.249 523.004L219.354 510.81C219.952 509.91 219.431 508.692 218.368 508.503L207.263 506.523C206.216 506.337 205.312 507.27 205.532 508.311ZM208.15 508.087L217.774 511.498L209.47 520.98L208.15 508.087Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M231.532 505.311L234.532 519.484C234.808 520.785 236.513 521.111 237.249 520.004L245.354 507.81C245.952 506.91 245.431 505.692 244.368 505.503L233.263 503.523C232.216 503.337 231.312 504.27 231.532 505.311ZM232.921 506.543L244.125 506.234L234.905 518.081L232.921 506.543Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M217.532 476.311L220.532 490.484C220.808 491.785 222.513 492.111 223.249 491.004L231.354 478.81C231.952 477.91 231.431 476.692 230.368 476.503L219.263 474.523C218.216 474.337 217.312 475.27 217.532 476.311ZM219 476L229.105 478.979L221 489.174L219 476Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M549.59 522.175C548.836 523.647 547.6 524.262 545.951 524.354C540.079 524.68 535.424 522.09 531.271 518.315C529.696 516.884 528.3 515.257 526.723 513.83C525.613 512.827 524.423 512.173 522.691 512.794C521.365 513.27 519.808 513.09 518.358 513.238C515.087 513.572 511.825 514.008 508.548 514.246C506.459 514.398 506.407 516.18 505.917 517.41C504.808 520.191 503.979 523.087 503.097 525.955C502.755 527.069 502.21 527.509 500.959 527.493C494.713 527.417 488.465 527.423 482.218 527.474C479.373 527.497 476.526 527.838 473.686 527.773C468.342 527.653 462.991 527.481 457.664 527.072C452.51 526.676 447.383 525.933 442.24 525.384C438.628 524.999 434.993 524.795 431.396 524.307C427.213 523.739 423.065 522.911 418.891 522.27C416.802 521.949 414.679 521.854 412.588 521.547C409.003 521.019 405.418 520.47 401.855 519.807C398.55 519.191 395.44 519.83 392.329 520.857C386.271 522.857 380.198 524.81 374.122 526.754C373.042 527.099 372.722 527.383 373.21 528.695C375 533.511 376.676 538.38 378.133 543.306C379.161 546.782 379.873 550.363 380.532 553.933C381.341 558.308 382.017 562.71 382.62 567.118C383.08 570.486 383.372 573.879 383.675 577.266C384.059 581.571 384.422 585.879 384.712 590.191C385.001 594.485 385.243 598.784 385.406 603.085C385.683 610.389 385.89 617.694 386.11 625C386.243 629.423 386.326 633.848 386.471 638.271C386.514 639.555 386.926 640.872 386.73 642.105C386.583 643.034 385.922 644.335 385.164 644.627C383.212 645.38 382.648 646.832 382.665 648.832C382.687 651.387 383.007 653.944 382.941 656.493C382.898 658.117 383.52 659.251 384.701 660.112C390.068 664.027 395.488 667.869 400.852 671.788C403.398 673.648 405.909 675.562 408.35 677.558C410.963 679.695 413.524 681.902 416.016 684.18C418.499 686.451 419.819 689.227 420.238 692.689C420.563 695.373 420.218 697.867 419.771 700.421C419.538 701.751 418.778 702.295 417.395 701.844C411.585 699.948 405.786 698.016 399.948 696.21C390.305 693.225 380.635 690.327 370.975 687.394C367.532 686.349 364.089 685.306 360.642 684.274C358.53 683.642 358.084 681.748 357.692 680.033C356.578 675.159 358.017 670.722 360.588 666.635C362.162 664.133 363.996 661.795 365.716 659.386C367.121 657.418 366.758 655.403 366.063 653.274C363.798 646.344 361.572 639.399 359.431 632.43C357.318 625.55 355.224 618.661 353.31 611.724C351.286 604.392 349.45 597.008 347.6 589.629C346.599 585.637 345.655 581.626 344.844 577.591C344.238 574.574 343.895 571.505 343.419 568.461C342.85 564.826 342.508 561.128 341.572 557.588C341.169 556.065 339.69 554.671 338.401 553.567C335.594 551.163 332.369 549.372 328.866 548.148C328 547.845 327.062 547.637 326.149 547.602C321.803 547.438 317.452 547.395 313.106 547.22C308.861 547.049 304.617 546.813 300.379 546.528C296.007 546.234 291.638 545.881 287.274 545.489C282.603 545.069 277.915 544.736 273.278 544.067C268.362 543.357 263.491 542.325 258.612 541.37C257.026 541.06 255.867 542.023 255.621 544.26C255.083 549.151 253.421 553.696 251.447 558.147C250.023 561.356 247.337 562.961 244.024 563.508C241.659 563.899 239.236 564.272 236.857 564.182C230.085 563.926 224.046 561.692 218.675 557.398C211.862 551.95 207.876 544.672 204.482 536.913C202.961 533.436 201.003 530.118 199.809 526.539C198.513 522.651 197.857 518.549 196.954 514.533C196.251 511.407 195.535 508.282 194.944 505.135C194.476 502.646 194.182 500.124 193.827 497.614C193.355 494.28 192.89 490.945 192.441 487.608C192.293 486.504 192.146 485.394 192.1 484.283C191.955 480.805 191.883 477.324 191.736 473.847C191.529 468.969 191.143 464.095 191.078 459.216C190.968 450.872 190.979 442.525 191.079 434.18C191.123 430.516 191.433 426.848 191.763 423.195C192.137 419.042 192.704 414.907 193.118 410.757C193.413 407.795 193.506 404.812 193.845 401.855C194.344 397.518 194.89 393.182 195.584 388.872C196.409 383.747 197.352 378.638 198.35 373.543C200.237 363.9 202.433 354.316 206.027 345.155C208.318 339.318 210.708 333.363 215.383 328.957C217.406 327.05 220.218 325.951 222.732 324.597C229.633 320.882 236.571 317.233 243.474 313.522C243.797 313.349 244.074 312.845 244.127 312.461C244.31 311.13 244.229 309.745 244.555 308.459C244.768 307.621 245.356 306.702 246.051 306.196C248.38 304.497 250.819 302.948 253.248 301.391C253.683 301.112 254.298 300.868 254.776 300.945C257.336 301.358 258.621 299.783 259.499 297.844C260.687 295.219 261.772 292.533 262.694 289.804C264.221 285.283 265.761 280.751 266.916 276.129C267.315 274.534 266.702 272.632 266.342 270.915C265.609 267.419 265.001 263.859 263.822 260.509C263.067 258.367 261.541 256.424 260.083 254.617C256.312 249.943 254.332 244.709 254.966 238.712C255.241 236.108 256.358 233.681 258.306 231.789C260.598 229.562 262.948 227.395 265.248 225.176C266.924 223.558 266.804 222.321 264.621 220.739C261.566 218.526 258.637 216.134 255.715 213.745C253.219 211.704 252.145 208.788 251.484 205.799C250.585 201.733 250.477 197.63 252.135 193.661C254.788 187.313 258.61 182.075 265.607 180.1C271.774 178.359 277.927 178.477 283.461 181.973C288.49 185.149 291.684 189.88 293.089 195.72C294.738 202.573 292.861 208.74 289.398 214.606C289.108 215.097 289.078 215.742 288.928 216.316C289.443 216.413 289.955 216.574 290.473 216.598C297.134 216.901 303.755 217.641 309.721 220.816C317.551 224.983 322.477 231.588 324.649 240.185C324.974 241.472 324.971 242.855 325.014 244.197C325.159 248.774 325.171 253.357 325.441 257.925C325.498 258.879 326.228 260.05 327.008 260.66C330.752 263.593 332.025 270.773 328.544 275.023C328.195 275.449 327.899 275.916 327.557 276.347C326.219 278.031 324.279 278.848 322.348 278.504C320.702 278.211 320.563 278.765 320.02 279.98C318.861 282.571 317.471 285.078 315.974 287.494C313.966 290.733 311.917 293.967 309.596 296.981C308.194 298.801 306.301 300.266 304.525 301.769C302.372 303.592 300.095 305.269 297.903 307.047C296.809 307.934 295.61 308.392 294.213 308.19C292.764 307.981 291.948 308.796 291.524 309.97C290.705 312.236 289.964 314.536 289.317 316.857C289.181 317.346 289.47 318.059 289.766 318.546C292.351 322.801 294.919 327.069 297.62 331.251C299.812 334.644 302.305 337.848 304.426 341.282C305.738 343.407 306.607 345.805 307.67 348.082C309.523 352.056 311.417 356.012 313.188 360.022C313.552 360.847 313.652 361.904 313.525 362.805C313.339 364.116 312.046 364.534 310.645 363.688C309.016 362.705 307.483 361.555 305.958 360.411C305.014 359.703 304.165 358.868 303.267 358.097C303.163 358.007 303.024 357.959 302.902 357.892C302.882 358.048 302.827 358.21 302.849 358.361C303.1 360.125 303.301 361.898 303.638 363.646C303.987 365.451 304.517 367.22 304.884 369.022C305.612 372.602 306.316 376.187 306.967 379.781C307.7 383.823 308.405 387.871 309.042 391.929C309.369 394.015 309.481 396.134 309.763 398.229C310.189 401.395 310.724 404.548 311.123 407.718C311.341 409.449 311.389 411.203 311.485 412.949C311.616 415.329 311.703 417.711 311.839 420.09C312.176 425.96 312.516 431.83 312.887 437.698C312.979 439.152 313.833 440.271 315.143 440.687C318.87 441.871 321.474 446.221 320.847 449.853C320.702 450.697 320.514 451.57 320.143 452.331C319.251 454.158 320.414 455.195 321.57 456.145C323.447 457.687 325.403 459.136 327.364 460.573C332.018 463.985 336.705 467.352 341.359 470.763C345.576 473.853 350.228 476.001 355.22 477.524C359.228 478.747 362.637 481.065 365.842 483.736C367.416 485.048 368.778 486.99 371.271 486.511C374.799 485.833 378.317 485.098 381.836 484.372C382.897 484.153 383.939 483.833 385.005 483.65C388.717 483.011 390.91 480.384 393.095 477.666C394.721 475.644 396.534 473.773 398.226 471.803C401.555 467.926 404.847 464.019 408.174 460.141C409.827 458.213 411.53 456.327 413.2 454.414C417.906 449.021 422.585 443.604 427.321 438.237C429.804 435.424 432.39 432.702 434.916 429.927C435.596 429.18 436.323 428.451 436.861 427.607C437.679 426.323 438.513 425.929 440.111 426.447C443.604 427.577 443.541 427.362 441.099 430.041C436.725 434.84 432.496 439.771 428.189 444.631C426.083 447.007 423.907 449.321 421.819 451.712C418.154 455.907 414.544 460.15 410.887 464.352C408.291 467.335 405.663 470.289 403.035 473.244C401.002 475.53 398.941 477.791 396.914 480.083C396.737 480.283 396.598 480.838 396.661 480.877C397.156 481.188 397.714 481.647 398.235 481.626C402.48 481.461 406.72 481.136 410.965 480.991C414.143 480.883 417.33 480.882 420.508 480.992C424.58 481.132 428.658 481.308 432.712 481.697C437.23 482.13 441.722 482.826 446.227 483.396C450.845 483.982 455.479 484.464 460.08 485.158C464.679 485.852 469.241 486.787 473.83 487.55C477.631 488.182 481.459 488.652 485.254 489.312C490.094 490.155 494.911 491.135 499.743 492.022C503.137 492.646 506.544 493.189 509.937 493.813C513.209 494.414 516.463 495.112 519.739 495.693C521.803 496.059 523.885 496.429 525.971 496.515C526.845 496.551 527.959 496.076 528.608 495.459C533.569 490.739 538.378 485.858 543.362 481.162C548.939 475.906 554.772 470.945 561.06 466.534C563.938 464.516 567.16 464.868 570.295 465.14C572.122 465.298 573.889 466.179 575.679 466.748C577.147 467.214 577.278 468.121 576.625 469.403C573.658 475.226 570.744 481.076 567.775 486.899C565.21 491.931 562.597 496.94 559.919 502.046C556.419 508.814 553.01 515.497 549.59 522.175ZM275.005 479.232C276.565 474.722 277.934 470.136 279.164 465.523C279.963 462.527 280.417 459.433 280.93 456.367C281.458 453.217 281.899 450.051 282.325 446.885C282.821 443.208 283.591 439.529 283.651 435.841C283.771 428.436 283.465 421.024 283.383 413.615C283.333 409.087 283.307 404.556 283.396 400.03C283.465 396.469 281.393 393.814 279.883 390.894C278.878 388.95 277.817 386.988 277.175 384.912C275.997 381.105 275.039 377.223 274.127 373.341C273.502 370.686 273.043 367.987 272.632 365.289C272.157 362.167 271.131 359.235 269.798 356.402C269.686 356.164 268.75 355.991 268.649 356.125C268.112 356.844 267.712 357.667 267.278 358.461C266.506 359.875 265.333 361.221 265.065 362.727C264.529 365.735 263.143 368.317 261.726 370.898C260.844 372.505 259.358 372.547 258.326 371.072C257.217 369.487 256.019 367.888 255.311 366.114C253.647 361.945 252.157 357.699 250.771 353.428C248.95 347.815 247.233 342.166 245.598 336.495C244.744 333.535 243.894 330.528 243.535 327.484C243.184 324.5 243.462 321.441 243.453 318.416C243.452 318.145 243.369 317.875 243.325 317.604C243.202 317.701 243.09 317.816 242.955 317.89C239.784 319.635 236.632 321.417 233.431 323.104C230.256 324.777 227.065 326.429 223.816 327.952C220.256 329.621 216.683 331.343 214.621 334.84C212.39 338.623 209.783 342.228 208.439 346.493C207.053 350.889 205.486 355.235 204.28 359.679C203.046 364.224 202.207 368.876 201.095 373.456C200.385 376.382 199.215 379.221 198.749 382.177C198.038 386.686 197.599 391.254 197.344 395.815C197.126 399.729 197.142 403.652 196.614 407.551C196.204 410.578 195.925 413.623 195.556 416.656C194.993 421.274 193.983 425.882 193.91 430.506C193.75 440.743 194.172 450.988 194.124 461.229C194.099 466.596 194.9 471.843 195.532 477.133C196.234 483.006 196.649 488.913 197.319 494.79C197.774 498.785 198.23 502.802 199.082 506.723C200.469 513.106 201.959 519.484 203.811 525.745C206.122 533.556 209.514 540.915 214.291 547.589C217.276 551.76 220.921 555.176 225.419 557.631C231.518 560.96 238.059 560.672 244.612 559.656C245.686 559.489 247.077 558.663 247.537 557.747C248.827 555.181 249.954 552.475 250.688 549.704C251.732 545.765 252.193 541.674 253.217 537.729C254.905 531.225 257.028 524.831 258.619 518.305C259.929 512.929 262.426 508.079 264.595 503.081C266.192 499.404 268.08 495.852 270.011 492.071C271.689 487.796 273.506 483.569 275.005 479.232ZM332.573 545.629C335.729 547.558 338.823 549.604 341.825 551.763C343.7 553.112 345.047 555.071 345.458 557.337C346.41 562.583 347.041 567.887 347.961 573.139C348.607 576.826 349.535 580.462 350.302 584.128C350.927 587.112 351.505 590.107 352.097 593.097C352.68 596.037 353.247 598.979 353.836 601.916C354.286 604.155 354.75 606.391 355.224 608.625C355.99 612.238 356.599 615.894 357.589 619.445C358.564 622.942 360.03 626.3 361.1 629.775C362.88 635.557 365.09 641.155 367.649 646.635C368.256 647.934 369.277 647.673 369.882 647.436C373.711 645.937 377.488 644.3 381.241 642.615C382.425 642.084 383.055 641.054 383 639.646C382.852 635.822 382.749 631.996 382.644 628.171C382.519 623.595 382.412 619.018 382.295 614.441C382.18 609.96 382.155 605.475 381.922 601C381.694 596.628 381.265 592.267 380.904 587.903C380.453 582.467 380.034 577.027 379.5 571.598C379.132 567.85 378.794 564.079 378.085 560.387C376.858 553.995 375.35 547.656 373.966 541.293C372.352 533.878 369.236 527.417 363.073 522.564C358.38 518.868 353.457 515.568 348.134 512.931C342.245 510.014 336.29 507.174 330.178 504.776C323.19 502.036 316.403 498.573 308.709 497.942C305.013 497.639 301.347 496.991 297.656 496.598C294.696 496.284 291.711 496.194 288.752 495.87C284.068 495.357 279.403 494.676 274.715 494.216C274.058 494.152 273.068 494.769 272.665 495.364C271.738 496.73 271.041 498.26 270.317 499.755C268.058 504.426 265.412 508.964 263.693 513.828C261.422 520.255 259.881 526.939 258.039 533.517C256.996 537.244 256.973 537.41 260.223 538.091C263.982 538.88 267.801 539.403 271.61 539.927C274.101 540.27 276.626 540.365 279.126 540.652C283.864 541.196 288.59 541.847 293.331 542.359C296.348 542.684 299.381 542.881 302.411 543.06C306.94 543.329 311.47 543.581 316.004 543.746C318.718 543.845 321.439 543.764 324.504 543.764C327.351 543.712 330.132 544.137 332.573 545.629ZM468.603 523.985C471.524 524.122 474.445 524.265 477.367 524.327C484.142 524.471 490.918 524.585 497.695 524.668C499.047 524.684 500.266 524.124 500.63 522.731C502.594 515.236 506.454 508.286 506.95 500.357C507.076 498.346 506.204 496.925 504.151 496.566C502.01 496.191 499.895 495.666 497.759 495.258C495.073 494.746 492.375 494.297 489.685 493.803C487.27 493.359 484.858 492.898 482.447 492.432C480.682 492.091 478.925 491.715 477.159 491.381C473.778 490.742 470.394 490.116 467.01 489.496C464.696 489.072 462.384 488.638 460.062 488.265C458.261 487.976 456.443 487.794 454.638 487.531C450.824 486.974 447.013 486.397 443.201 485.826C441.023 485.5 438.851 485.142 436.669 484.848C433.759 484.455 430.841 483.791 427.929 483.808C420.622 483.849 413.315 484.17 406.011 484.455C402.518 484.592 399.018 484.786 395.547 485.178C393.604 485.397 391.735 486.012 390.326 487.649C388.03 490.316 385.565 492.837 383.245 495.484C381.781 497.156 380.41 498.914 379.071 500.689C377.3 503.038 375.14 504.465 372.052 504.226C366.995 503.835 361.93 503.547 356.872 503.159C354.995 503.015 353.127 502.735 351.261 502.474C348.095 502.031 344.94 501.517 341.771 501.102C338.741 500.706 335.701 500.377 332.661 500.064C331.802 499.976 330.926 500.025 330.061 500.073C329.889 500.083 329.732 500.377 329.569 500.54C329.745 500.622 329.925 500.696 330.098 500.786C331.619 501.58 333.101 502.465 334.667 503.157C339.261 505.186 343.999 506.92 348.477 509.172C354.98 512.443 361.048 516.436 366.565 521.237C368.276 522.726 369.918 523.831 372.724 523.458C377.171 522.866 381.327 521.769 385.318 519.828C390.689 517.214 396.153 515.071 402.329 516.351C405.903 517.092 409.495 517.741 413.064 518.506C415.324 518.991 417.529 519.79 419.807 520.128C422.633 520.547 425.508 520.621 428.36 520.87C433.548 521.322 438.733 521.801 443.92 522.251C447.442 522.557 450.967 522.833 454.664 523.295C459.31 523.526 463.956 523.768 468.603 523.985ZM287.871 423.757C287.922 425.143 287.867 426.532 287.89 427.919C287.998 434.404 288.1 440.889 288.245 447.373C288.287 449.255 288.204 451.195 288.635 453C289.508 456.653 290.653 460.244 291.768 463.835C292.245 465.373 292.91 466.838 294.648 467.447C296.16 467.976 297.625 468.642 299.141 469.163C301.389 469.935 302.079 469.643 303.545 467.585C304.03 466.905 304.59 466.276 305.135 465.64C308.648 461.543 312.268 457.532 315.651 453.331C318.149 450.23 317.716 445.24 313.534 443.639C313.084 443.467 312.638 443.26 312.171 443.163C309.7 442.651 309.814 442.658 309.732 440.323C309.439 431.98 310.418 423.614 309.107 415.281C308.584 411.954 308.799 408.513 308.318 405.176C307.569 399.984 306.533 394.832 305.582 389.67C304.683 384.788 303.782 379.905 302.797 375.039C302.061 371.408 301.178 367.808 300.386 364.188C299.782 361.427 299.308 358.634 298.579 355.908C298.382 355.171 297.467 354.626 296.882 353.993C296.197 354.654 294.998 355.257 294.915 355.986C294.495 359.685 293.925 363.455 294.25 367.125C294.623 371.341 295.256 375.521 294.451 379.706C293.534 384.476 292.008 389.056 289.424 393.229C287.991 395.542 286.921 397.942 287.165 400.804C287.406 403.636 287.484 406.487 287.525 409.33C287.582 413.376 287.539 417.424 287.539 421.818C287.655 422.464 287.847 423.107 287.871 423.757ZM269.672 280.451C269.38 280.903 268.975 281.318 268.814 281.813C267.166 286.857 265.66 291.951 263.898 296.954C262.837 299.969 261.171 302.659 258.417 304.553C256.416 305.929 254.549 307.5 252.591 308.941C251.626 309.651 251.83 310.267 252.432 311.13C254.234 313.711 256.138 316.251 257.642 319.004C259.718 322.803 261.496 326.767 263.343 330.688C265.143 334.508 267.023 338.302 268.581 342.221C269.906 345.55 270.618 349.126 271.981 352.436C273.212 355.429 274.534 358.379 274.98 361.584C275.132 362.674 275.485 362.683 276.311 362.68C281.274 362.663 286.067 362.007 290.252 359.052C290.61 358.799 290.912 358.28 290.98 357.844C291.145 356.79 291.116 355.707 291.24 354.645C291.327 353.895 291.816 353.085 291.641 352.431C290.989 350.002 290.121 347.631 289.363 345.23C287.914 340.642 286.014 336.103 285.884 331.263C285.752 326.338 286.195 321.391 286.533 316.464C286.67 314.454 287.064 312.437 287.573 310.483C288.169 308.192 288.027 307.565 285.959 306.447C282.555 304.607 279.621 302.134 277.524 298.944C274.1 293.737 271.47 288.134 270.532 281.657C270.245 281.255 269.959 280.853 269.672 280.451ZM319.045 278.915C319.139 278.727 319.981 278.143 318.729 277.932C317.464 277.719 316.035 277.105 315.166 276.199C313.462 274.422 312.052 272.352 310.62 270.333C310.215 269.761 310.071 269.414 309.501 270.1C309.14 270.535 308.67 270.88 308.309 271.315C305.178 275.097 300.675 276.703 296.459 275.652C291.404 274.392 288.323 269.003 288.254 264.328C288.226 262.464 287.637 260.902 286.148 259.83C283.671 258.046 281.122 256.358 278.576 254.672C277.15 253.728 275.792 254.036 275.424 255.525C274.513 259.21 273.379 262.904 273.061 266.656C272.668 271.297 272.855 275.984 273.963 280.616C275.83 288.419 278.254 295.834 284.622 301.333C288.728 304.879 293.799 305.676 298.688 303.531C303.533 301.404 306.509 297.471 309.405 293.377C311.839 289.936 314.265 286.489 316.868 282.872C317.604 281.558 318.367 280.258 319.045 278.915ZM528.856 510.675C532.222 514.959 536.137 518.535 541.495 520.264C544.804 521.333 546.016 521.144 547.847 517.653C551.584 510.532 555.276 503.387 558.958 496.238C560.428 493.382 561.788 490.469 563.261 487.615C566.138 482.04 569.053 476.484 571.97 470.928C572.502 469.915 571.996 468.997 571.212 468.892C568.491 468.529 565.618 467.752 563.091 469.433C559.758 471.649 556.404 473.879 553.338 476.438C548.688 480.32 544.209 484.415 539.798 488.569C537.798 490.454 536.108 492.675 534.33 494.787C532.925 496.456 531.122 497.861 530.587 500.141C530.093 502.25 529.605 504.36 529.115 506.816C528.538 508.074 527.893 509.449 528.856 510.675ZM414.223 696.875C415.016 696.938 416.544 696.578 416.552 696.364C416.654 693.378 417.219 690.213 414.539 687.882C411.056 684.851 407.681 681.681 404.048 678.841C398.187 674.259 392.155 669.895 386.191 665.444C384.06 663.853 381.941 662.165 379.229 661.75C376.801 661.379 374.326 661.33 371.89 661.005C369.835 660.73 368.437 661.621 367.189 663.1C364.163 666.687 361.962 670.675 361.13 675.333C360.477 678.984 361.652 680.995 364.599 681.862C370.21 683.514 375.781 685.302 381.381 686.991C385.394 688.201 389.444 689.292 393.449 690.528C399.289 692.331 405.104 694.217 411.277 696.067C412.258 696.353 413.226 696.797 414.223 696.875ZM296.39 471.941C292.515 470.407 288.663 468.815 284.779 467.305C283.632 466.859 282.655 466.727 282.276 468.494C281.866 470.413 280.99 472.23 280.357 474.104C278.952 478.264 277.541 482.422 276.211 486.606C275.965 487.379 275.591 488.464 277.119 488.612C279.108 488.804 281.086 489.136 283.079 489.281C286.97 489.564 290.864 489.842 294.762 489.97C300.553 490.161 306.347 490.23 312.141 490.332C313.991 490.364 315.842 490.331 317.693 490.341C318.143 490.343 318.62 490.311 319.038 490.442C324.054 492.009 329.052 493.634 334.073 495.186C339.123 496.747 344.181 498.281 349.576 497.98C351.449 497.875 351.793 497.524 351.104 495.8C350.728 494.86 350.206 493.902 349.514 493.177C346.135 489.635 342.009 487.163 337.595 485.13C334.079 483.511 330.641 481.704 326.686 481.297C324.834 481.107 322.969 480.84 321.171 480.375C318.314 479.635 315.481 478.779 312.687 477.827C309.196 476.638 305.754 475.303 301.944 474.031C300.091 473.336 298.229 472.669 296.39 471.941ZM252.814 318.788C251.19 316.271 249.481 313.81 247.802 311.328C247.569 310.982 247.314 310.651 247.069 310.314C246.907 310.882 246.679 311.441 246.595 312.021C246.317 313.936 246.161 315.872 245.832 317.777C245.181 321.55 244.826 325.257 247.272 328.61C247.426 328.822 247.548 329.077 247.618 329.331C248.517 332.599 249.4 335.872 250.297 339.141C250.524 339.969 250.761 340.795 251.033 341.609C252.202 345.11 253.62 348.549 254.501 352.12C255.406 355.789 256.1 359.476 257.98 362.827C258.52 363.789 258.695 364.952 259.094 366.001C259.213 366.315 259.605 366.819 259.729 366.78C260.127 366.656 260.65 366.393 260.784 366.051C262.336 362.064 263.084 357.71 266.029 354.362C268.531 351.519 268.012 348.613 266.477 345.577C265.878 344.391 265.507 343.091 264.971 341.87C263.814 339.229 262.706 336.561 261.411 333.987C260.279 331.739 258.909 329.612 257.663 327.421C256.787 325.88 255.944 324.32 254.913 322.595C254.218 321.323 253.598 320.003 252.814 318.788ZM346.566 478.01C341.497 474.736 336.358 471.555 331.446 468.056C327.333 465.127 323.522 461.777 319.525 458.681C318.446 457.846 317.208 457.568 316.106 458.828C314.32 460.868 312.5 462.879 310.717 464.922C309.389 466.444 308.113 468.011 306.783 469.531C305.743 470.719 305.852 471.356 307.374 471.811C312.265 473.273 317.191 474.619 322.067 476.128C328.723 478.189 335.372 480.282 341.968 482.525C344.078 483.243 345.938 484.693 348.046 485.42C350.187 486.16 352.475 486.545 354.731 486.859C357.336 487.223 359.975 487.368 362.603 487.531C363.023 487.557 363.467 487.182 363.899 486.993C363.643 486.637 363.448 486.205 363.12 485.936C358.953 482.526 353.976 480.765 348.801 478.888C348.052 478.602 347.225 478.436 346.566 478.01ZM280.566 386.63C281.21 389.074 282.741 390.263 285.099 390.485C287.135 390.676 287.733 389.559 288.229 388.072C288.94 385.941 289.644 383.808 290.311 381.663C291.793 376.9 291.581 372.1 290.694 367.258C290.405 365.679 290.473 364.033 290.4 362.417C290.39 362.183 290.509 361.942 290.569 361.704C290.331 361.774 290.084 361.822 289.856 361.916C288.427 362.507 287.051 363.326 285.565 363.66C282.782 364.285 279.944 364.699 277.112 365.061C276.018 365.2 275.37 365.315 275.717 366.653C276.045 367.917 276.176 369.231 276.437 370.514C276.999 373.278 277.589 376.037 278.168 379.145C278.978 381.637 279.899 384.1 280.566 386.63ZM310.227 360.532C310.497 360.761 310.797 360.954 311.083 361.163C311.081 360.776 311.188 360.347 311.06 360.007C310.308 358.009 309.607 355.981 308.69 354.058C306.732 349.953 304.933 345.732 302.544 341.885C300.195 338.103 297.032 334.834 294.536 331.131C292.749 328.479 291.484 325.475 289.957 322.644C289.723 322.208 289.335 321.855 289.018 321.464C288.872 321.924 288.591 322.387 288.602 322.842C288.675 325.8 288.714 328.764 288.962 331.709C289.131 333.718 289.47 335.742 290.01 337.682C290.609 339.836 291.696 341.858 292.256 344.019C292.912 346.548 294.113 348.148 296.562 349.499C300.623 351.739 304.814 354.067 307.671 358.329C308.522 359.065 309.369 359.805 310.227 360.532ZM292.148 262.501C290.816 264.441 293.287 271.24 294.631 271.746C304.037 275.286 306.718 269.228 306.842 267.565C307.087 264.263 307.494 260.916 304.373 258.24C296.141 256.602 294.302 259.364 292.148 262.501ZM328.165 265.249C326.901 262.1 324.988 260.046 321.656 260.764C319.956 261.131 318.459 262.479 316.895 263.425C313.536 265.456 313.097 266.568 314.271 270.17C315.446 273.775 318.187 275.84 321.675 276.541C324.561 277.121 326.624 275.331 328.149 272.637C328.533 270.177 329.166 267.742 328.165 265.249ZM315.709 261.177C317.065 260.213 318.535 258.785 319.998 258.732C322.529 258.641 322.118 257.095 321.845 255.878C321.082 252.477 320.085 249.125 319.112 245.775C318.446 243.481 317.883 243.349 316.267 244.965C313.499 247.732 310.695 250.446 307.218 252.357C306.131 252.955 305.981 254.331 306.759 255.416C307.048 255.819 307.441 256.166 307.658 256.602C308.727 258.752 309.697 260.953 310.838 263.063C311.091 263.529 310.899 265.179 312.53 263.964C313.583 263.026 314.566 261.99 315.709 261.177ZM519.962 510.053C522.323 509.613 524.853 509.008 525.218 505.867C525.279 505.339 525.52 504.835 525.64 504.312C526.385 501.064 525.541 500.024 522.29 499.675C519.229 499.347 516.19 498.799 513.148 498.308C511.521 498.045 511.221 498.35 511.041 500.006C510.792 502.3 510.435 504.588 510.006 506.857C509.63 508.844 510.186 510.417 511.934 510.806C514.613 510.574 517.33 510.542 519.962 510.053ZM378.225 657.853C378.555 657.838 379.117 657.183 379.129 656.809C379.211 654.327 379.151 651.842 379.179 649.358C379.195 647.962 378.125 647.916 377.358 648.161C375.687 648.693 374.097 649.487 372.484 650.196C371.319 650.709 370.009 651.124 370.15 652.805C370.25 653.991 370.25 655.205 370.523 656.353C370.977 658.258 372.622 657.352 373.965 657.731C375.386 657.789 376.81 657.916 378.225 657.853ZM285.778 456.038C285.678 455.756 285.268 455.583 285 455.36C284.805 455.639 284.466 455.904 284.439 456.198C284.276 457.982 284.137 459.771 284.082 461.561C284.028 463.31 285.267 464.444 287.045 464.282C287.347 464.255 287.881 463.724 287.842 463.511C287.58 462.09 287.192 460.692 286.672 459.113C286.382 458.085 286.133 457.043 285.778 456.038ZM383.569 488.813C383.761 488.432 384.166 487.369 382.989 487.59C381.193 487.927 379.428 488.436 377.662 488.918C377.339 489.006 377.075 489.308 376.784 489.512C377.122 489.671 377.455 489.956 377.798 489.968C379.237 490.02 380.68 489.99 382.295 489.816C382.737 489.491 383.348 489.25 383.569 488.813ZM249.533 306.81C249.256 306.971 248.979 307.132 248.703 307.293C248.92 307.535 249.099 307.872 249.37 307.985C249.533 308.053 249.889 307.82 250.076 307.639C251.144 306.604 252.193 305.549 253.236 304.488C253.444 304.275 253.596 304.007 253.774 303.764C253.423 303.833 252.982 303.79 252.737 303.989C251.695 304.833 250.711 305.748 249.533 306.81Z",
                    fill: "#00160A",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M286.726 286.601C285.1 285.721 283.491 285 283.153 283.041C282.497 279.235 283.868 274.75 288.829 275.011C293.302 275.246 296.14 278.961 294.558 283.156C293.391 286.25 290.559 287.784 286.726 286.601Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M308.784 272.401C308.873 271.817 308.962 271.409 309.051 271C309.192 271.356 309.373 271.702 309.467 272.07C310.165 274.801 312.376 281.599 309.742 284.727C309.523 284.988 308.412 285.029 307.72 284.985C306.36 284.899 304.774 282.893 305.027 281.599C305.065 281.405 308.347 284.591 309.051 282.866C310.226 279.991 308.784 273.389 308.784 272.401Z",
                    fill: "#00160A",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M290.268 292.322C290.131 292.253 289.942 292.271 289.778 292.278C289.374 292.295 288.821 291.571 289.056 291.264C289.411 290.803 289.813 290.338 290.294 290.034C290.58 289.853 291.053 290.439 291.017 290.699C290.991 290.892 291.175 291.196 291.353 291.327C294.071 293.323 297.088 294.617 300.389 295.239C300.607 295.28 300.797 295.475 301 295.598C300.798 295.739 300.596 296.012 300.393 296C296.791 295.789 292.627 293.519 290.268 292.322Z",
                    fill: "#00160A",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M202.521 448.658L199.1 463.268C198.836 464.398 199.899 465.387 201.007 465.042L212.883 461.345C213.882 461.034 214.263 459.821 213.622 458.994L205.168 448.081C204.394 447.083 202.809 447.429 202.521 448.658ZM203.982 451L211.437 459.913L200.561 463.61L203.982 451Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M213.134 364.365C211.884 364.252 211.057 365.634 211.747 366.683L220.447 379.909C221.033 380.801 222.337 380.812 222.939 379.931L230.946 368.204C231.592 367.258 230.982 365.966 229.842 365.864L213.134 364.365ZM214.311 365.864L229.269 368.771L220.447 378.005L214.311 365.864Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M268.271 465.5H256C254.983 465.5 254.261 466.491 254.572 467.459L258.694 480.271C259.083 481.481 260.706 481.689 261.388 480.617L269.537 467.805C270.172 466.806 269.455 465.5 268.271 465.5ZM267.271 468L261.122 479.812L257 467L267.271 468Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M228.063 534.924L227.502 546.032C227.443 547.196 228.677 547.979 229.705 547.431L243.973 539.831C245.181 539.187 244.966 537.393 243.639 537.054L229.933 533.547C229.014 533.312 228.111 533.977 228.063 534.924ZM229.147 535.985L242.259 537.805L229.705 545.226L229.147 535.985Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M209.146 398.507L198.146 406.131C197.215 406.777 197.307 408.181 198.315 408.699L211.188 415.307C212.264 415.86 213.518 414.976 213.36 413.777L211.487 399.544C211.341 398.431 210.068 397.867 209.146 398.507ZM209.587 401.156L211.873 413.973L199 407.364L209.587 401.156Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M259.618 431.165L252.754 441.413C252.163 442.296 252.651 443.496 253.69 443.716L261.715 445.413C262.707 445.623 263.617 444.809 263.519 443.8L262.357 431.855C262.221 430.453 260.401 429.995 259.618 431.165ZM261.487 433.219V444.193L254.586 441.413L261.487 433.219Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M260.918 382.886C262.915 381.583 264.667 381.892 263.241 384.76C263.241 384.76 252.83 411.156 249.72 411.469C246.77 411.765 245.346 407.95 241.227 397.043L241.052 396.579C241.036 396.538 241.023 396.496 241.011 396.456L240.989 396.368L240.962 396.32L240.905 396.187L240.413 394.855C239.831 393.267 238.366 390.646 237.592 389.735C236.767 388.765 238.608 388.164 239.968 388.164C242.506 388.164 245.612 388.873 250.496 387.463C256.217 385.812 258.18 384.673 260.918 382.886ZM256.49 396.447L256.353 396.536C254.9 397.43 253.295 398.118 251.541 398.597C249.443 399.171 246.399 399.242 244.429 398.812L244.1 398.735L244.222 399.038C245.333 401.808 246.321 405.011 247.182 406.64L247.483 407.195C248.023 408.165 248.497 408.869 248.88 409.293L249 409.418L249.149 409.238C249.791 408.417 252.077 405.329 253.664 402.244L253.83 401.92C254.51 400.587 255.251 399.072 256.054 397.376L256.49 396.447ZM260.775 385.936L260.534 386.073C258.275 387.331 254.539 389.419 251.328 390.345C247.485 391.455 244.226 391.851 241.545 391.496L241.381 391.471L241.475 391.737C241.731 392.453 242.817 395.846 243.201 396.368C244.757 397.805 246.664 397.942 249 397.376L249.335 397.29C257.698 395.674 260.775 385.936 260.775 385.936Z",
                    fill: "#FFB61D",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M554.479 478.216C554.812 477.97 555.282 478.041 555.528 478.374C557.259 480.722 560.19 480.838 564.087 478.674C564.449 478.473 564.906 478.604 565.107 478.966C565.308 479.328 565.178 479.784 564.815 479.985C560.332 482.475 556.578 482.327 554.32 479.264C554.074 478.931 554.145 478.461 554.479 478.216Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M548.809 484.224C549.116 483.945 549.59 483.968 549.869 484.274C552.495 487.163 555.985 487.328 558.823 485.812C559.189 485.617 559.643 485.755 559.838 486.12C560.033 486.486 559.895 486.94 559.53 487.135C556.14 488.946 551.907 488.746 548.759 485.283C548.48 484.977 548.503 484.503 548.809 484.224Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M542.668 490.175C542.969 489.891 543.444 489.905 543.728 490.207C546.259 492.896 551.405 494.21 554.925 492.345C555.291 492.151 555.745 492.29 555.939 492.656C556.133 493.022 555.993 493.476 555.627 493.67C551.459 495.879 545.598 494.382 542.636 491.235C542.352 490.933 542.366 490.459 542.668 490.175Z",
                    fill: "#E7EAEE",
                  }),
                  (0, h.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M547.435 513.696C552.7 511.149 547.257 501.709 542.162 505.53C538.894 507.98 542.477 516.095 547.435 513.696Z",
                    fill: "#E7EAEE",
                  }),
                ],
              }),
            }
          )
        );
      }
      var Z = (0, t.memo)(u),
        j = function () {
          var e = (0, d.lr)(),
            C = (0, n.Z)(e, 1)[0],
            i = (0, l.Z)();
          return (0, h.jsx)(h.Fragment, {
            children: (0, h.jsxs)(r.Z, {
              direction: "row",
              sx: { width: "100%" },
              children: [
                (0, h.jsx)(c.default, {}),
                (0, h.jsx)(s.Z, {
                  sx: {
                    height: "100%",
                    width:
                      "true" === C.get("open")
                        ? "calc(100vw - 740px )"
                        : "calc(100vw - 420px )",
                    backgroundColor:
                      "light" === i.palette.mode
                        ? "#FFF"
                        : i.palette.background.paper,
                    borderBottom:
                      "individual-chat" === C.get("type") && C.get("id")
                        ? "0px"
                        : "6px solid #0162C4",
                  },
                  children:
                    "individual-chat" === C.get("type") && C.get("id")
                      ? (0, h.jsx)(a.default, {})
                      : (0, h.jsxs)(r.Z, {
                          spacing: 2,
                          sx: { height: "100%", width: "100%" },
                          alignItems: "center",
                          justifyContent: "center",
                          children: [
                            (0, h.jsx)(Z, {}),
                            (0, h.jsxs)(o.Z, {
                              variant: "subtitle2",
                              children: [
                                "Select a conversation or start a",
                                " ",
                                (0, h.jsx)(d.rU, {
                                  style: {
                                    color: i.palette.primary.main,
                                    textDecoration: "none",
                                  },
                                  to: "/",
                                  children: "new one",
                                }),
                              ],
                            }),
                          ],
                        }),
                }),
                "true" === C.get("open") && (0, h.jsx)(x.default, {}),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=338.ce6ba00d.chunk.js.map
