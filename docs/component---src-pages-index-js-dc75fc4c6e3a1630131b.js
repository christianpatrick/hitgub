;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    226: function (e, t, n) {
      "use strict"
      n.r(t)
      n(34), n(156)
      var r = n(0),
        o = n.n(r),
        i = n(224),
        a = n(223),
        l = (n(18), n(227)),
        s = n.n(l),
        c = n(228),
        u = n.n(c),
        d = (n(12), n(10), n(4), n(20), n(19), n(24), n(44)),
        f = n.n(d)
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      function m(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      var h = function (e) {
        var t = e.color,
          n = e.size,
          r = m(e, ["color", "size"])
        return o.a.createElement(
          "svg",
          p(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: n,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            r
          ),
          o.a.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          o.a.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        )
      }
      ;(h.propTypes = {
        color: f.a.string,
        size: f.a.oneOfType([f.a.string, f.a.number]),
      }),
        (h.defaultProps = { color: "currentColor", size: "24" })
      var g = h
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      function b(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      var v = function (e) {
        var t = e.color,
          n = e.size,
          r = b(e, ["color", "size"])
        return o.a.createElement(
          "svg",
          y(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: n,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            r
          ),
          o.a.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
          o.a.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
          o.a.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
        )
      }
      ;(v.propTypes = {
        color: f.a.string,
        size: f.a.oneOfType([f.a.string, f.a.number]),
      }),
        (v.defaultProps = { color: "currentColor", size: "24" })
      var w = v,
        x = n(63),
        S = x.c.div.withConfig({
          displayName: "global__Container",
          componentId: "sc-102h78z-0",
        })(
          [
            "max-width:1200px;width:100%;margin:0 auto;padding:0 16px;@media (min-width:",
            "){max-width:540px;}@media (min-width:",
            "){max-width:720px;}@media (min-width:",
            "){max-width:960px;}@media (min-width:",
            "){max-width:1200px;}",
            ";",
          ],
          function (e) {
            return e.theme.screen.xs
          },
          function (e) {
            return e.theme.screen.sm
          },
          function (e) {
            return e.theme.screen.md
          },
          function (e) {
            return e.theme.screen.lg
          },
          function (e) {
            return e.fluid && "\n    max-width: 1200px !important;\n  "
          }
        ),
        E = x.c.section.withConfig({
          displayName: "global__Section",
          componentId: "sc-102h78z-1",
        })(
          [
            "padding:80px 0;overflow:hidden;background-color:",
            ";@media (max-width:",
            "){padding:80px 0;}",
            ";",
          ],
          function (e) {
            switch (e.accent) {
              case "secondary":
                return e.theme.color.white.dark
              case "main":
                return e.theme.color.primary
              default:
                return "white"
            }
          },
          function (e) {
            return e.theme.screen.md
          },
          function (e) {
            return (
              e.accent &&
              "background-color: " +
                ("secondary" === e.accent
                  ? e.theme.color.white.dark
                  : e.theme.color.primary)
            )
          }
        ),
        _ = x.c.nav.withConfig({
          displayName: "style__Nav",
          componentId: "sc-14bhlyt-0",
        })(
          [
            "padding:",
            ";position:fixed;width:100%;top:0;z-index:1000;background:",
            ";transition:0.4s cubic-bezier(0.2,0.8,0.2,1);",
          ],
          function (e) {
            return e.scrolled ? "16px 0" : "24px 0"
          },
          function (e) {
            return e.scrolled ? "white" : null
          }
        ),
        O = Object(x.c)(S).withConfig({
          displayName: "style__StyledContainer",
          componentId: "sc-14bhlyt-1",
        })(["display:flex;justify-content:space-between;align-items:center;"]),
        k = x.c.div.withConfig({
          displayName: "style__NavListWrapper",
          componentId: "sc-14bhlyt-2",
        })(
          [
            "ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;",
            ";}",
          ],
          function (e) {
            return (
              e.mobile &&
              "\n        flex-direction: column;\n        margin-top: 1em;\n\n        > " +
                C +
                " {\n          margin: 0;\n          margin-top: 0.75em;\n        }\n      "
            )
          }
        ),
        C = x.c.li.withConfig({
          displayName: "style__NavItem",
          componentId: "sc-14bhlyt-3",
        })(
          [
            "margin:0 0.75em;font-family:",
            ";",
            ";a{text-decoration:none;opacity:0.9;color:",
            ";&.button{font-weight:500;font-size:14px;color:white;letter-spacing:1px;display:block;text-transform:uppercase;cursor:pointer;white-space:nowrap;background:",
            ";border-radius:4px;padding:8px;margin-top:-6px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;outline:0px;&:hover{box-shadow:rgba(110,120,152,0.22) 0px 2px 10px 0px;}}}&.active{a{opacity:1;}}",
          ],
          function (e) {
            return e.theme.font.medium
          },
          function (e) {
            return e.theme.font_size.xsmall
          },
          function (e) {
            return e.theme.color.black.regular
          },
          function (e) {
            return e.theme.color.secondary
          }
        ),
        I = x.c.div.withConfig({
          displayName: "style__MobileMenu",
          componentId: "sc-14bhlyt-4",
        })(["width:100%;height:100vh;z-index:1000;background:", ";"], function (
          e
        ) {
          return e.theme.color.regular
        }),
        j = x.c.div.withConfig({
          displayName: "style__Brand",
          componentId: "sc-14bhlyt-5",
        })(
          [
            "font-family:",
            ";",
            ";color:",
            ";text-decoration:none;letter-spacing:1px;margin:0;ul{list-style:none;margin:0;padding:0;a{color:",
            ";text-decoration:none;}}",
          ],
          function (e) {
            return e.theme.font.extrabold
          },
          function (e) {
            return e.theme.font_size.regular
          },
          function (e) {
            return e.theme.color.black.regular
          },
          function (e) {
            return e.theme.color.black.regular
          }
        ),
        L =
          (x.c.div.withConfig({
            displayName: "style__ActionsContainer",
            componentId: "sc-14bhlyt-6",
          })(
            [
              "display:flex;align-items:center;@media (max-width:",
              "){display:none;}button{font-family:",
              ";",
              ";color:white;background:#098b8c;border-radius:4px;padding:10px 16px;text-transform:uppercase;font-size:12px;}",
            ],
            function (e) {
              return e.theme.screen.xs
            },
            function (e) {
              return e.theme.font.normal
            },
            function (e) {
              return e.theme.font_size.xsmall
            }
          ),
          x.c.div.withConfig({
            displayName: "style__Mobile",
            componentId: "sc-14bhlyt-7",
          })(
            ["display:none;@media (max-width:", "){display:block;}", ""],
            function (e) {
              return e.theme.screen.xs
            },
            function (e) {
              return (
                e.hide &&
                "\n    display: block;\n\n    @media (max-width: " +
                  e.theme.screen.xs +
                  ") {\n      display: none;\n    }\n  "
              )
            }
          ))
      var N = ["Features"],
        T = (function (e) {
          var t, n
          function r() {
            for (
              var t, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i]
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).state = {
                mobileMenuOpen: !1,
                hasScrolled: !1,
              }),
              (t.handleScroll = function (e) {
                window.pageYOffset > 32
                  ? t.setState({ hasScrolled: !0 })
                  : t.setState({ hasScrolled: !1 })
              }),
              (t.toggleMobileMenu = function () {
                t.setState(function (e) {
                  return { mobileMenuOpen: !e.mobileMenuOpen }
                })
              }),
              (t.closeMobileMenu = function () {
                t.state.mobileMenuOpen && t.setState({ mobileMenuOpen: !1 })
              }),
              (t.getNavAnchorLink = function (e) {
                return o.a.createElement(
                  s.a,
                  { href: "#" + e.toLowerCase(), onClick: t.closeMobileMenu },
                  e
                )
              }),
              (t.getNavList = function (e) {
                var n = e.mobile,
                  r = void 0 !== n && n
                return o.a.createElement(
                  k,
                  { mobile: r },
                  o.a.createElement(
                    u.a,
                    {
                      items: N.map(function (e) {
                        return e.toLowerCase()
                      }),
                      currentClassName: "active",
                      mobile: r,
                      offset: -64,
                    },
                    N.map(function (e) {
                      return o.a.createElement(
                        C,
                        { key: e },
                        t.getNavAnchorLink(e)
                      )
                    }),
                    o.a.createElement(
                      C,
                      null,
                      o.a.createElement(
                        "a",
                        { href: "https://github.com/christianpatrick/hitgub" },
                        "View on GitHub"
                      )
                    ),
                    o.a.createElement(
                      C,
                      null,
                      o.a.createElement(
                        "a",
                        { className: "button", href: t.props.downloadLink },
                        "Download"
                      )
                    )
                  )
                )
              }),
              t
            )
          }
          ;(n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n)
          var i = r.prototype
          return (
            (i.componentDidMount = function () {
              window.addEventListener("scroll", this.handleScroll)
            }),
            (i.render = function () {
              var e = this.state.mobileMenuOpen
              return o.a.createElement(
                _,
                Object.assign({}, this.props, {
                  scrolled: this.state.hasScrolled,
                }),
                o.a.createElement(
                  O,
                  null,
                  o.a.createElement(
                    j,
                    null,
                    o.a.createElement(
                      u.a,
                      {
                        offset: -64,
                        item: ["top"],
                        currentClassName: "active",
                      },
                      o.a.createElement(
                        s.a,
                        { href: "#top", onClick: this.closeMobileMenu },
                        "HitGub"
                      )
                    )
                  ),
                  o.a.createElement(
                    L,
                    null,
                    o.a.createElement(
                      "button",
                      {
                        onClick: this.toggleMobileMenu,
                        style: { color: "black", background: "none" },
                      },
                      this.state.mobileMenuOpen
                        ? o.a.createElement(g, { size: 24, alt: "close menu" })
                        : o.a.createElement(w, { size: 24, alt: "open menu" })
                    )
                  ),
                  o.a.createElement(L, { hide: !0 }, this.getNavList({}))
                ),
                o.a.createElement(
                  L,
                  null,
                  e &&
                    o.a.createElement(
                      I,
                      null,
                      o.a.createElement(
                        S,
                        null,
                        this.getNavList({ mobile: !0 })
                      )
                    )
                )
              )
            }),
            r
          )
        })(r.Component),
        P = n(242),
        M = n(243),
        z = n.n(M),
        V = function (e) {
          var t = P.data
          return o.a.createElement(
            R,
            { id: "top" },
            o.a.createElement(
              S,
              null,
              o.a.createElement(
                W,
                null,
                o.a.createElement(
                  H,
                  null,
                  o.a.createElement(
                    "h1",
                    null,
                    "A dedicated browser for GitHub"
                  )
                ),
                o.a.createElement(
                  A,
                  null,
                  o.a.createElement(q, { fluid: t.file.childImageSharp.fluid })
                ),
                o.a.createElement(B, { href: e.downloadLink }, "Download")
              )
            )
          )
        },
        R = x.c.header.withConfig({
          displayName: "header__HeaderWrapper",
          componentId: "kn5alt-0",
        })(
          [
            "background-color:#f8f8f8;padding:120px 0 80px 0;position:relative;clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 5vw));@media (max-width:",
            "){}",
          ],
          function (e) {
            return e.theme.screen.md
          }
        ),
        H = x.c.div.withConfig({
          displayName: "header__HeaderTextGroup",
          componentId: "kn5alt-1",
        })(
          [
            "margin:0;> div{width:120%;margin-bottom:-4.5%;@media (max-width:",
            "){margin:0 16px;}}h1{margin:0 0 24px;color:",
            ";text-align:center;}",
          ],
          function (e) {
            return e.theme.screen.md
          },
          function (e) {
            return e.theme.color.primary
          }
        ),
        W = x.c.div.withConfig({
          displayName: "header__Flex",
          componentId: "kn5alt-2",
        })(
          [
            "display:grid;justify-content:space-between;align-content:center;@media (max-width:",
            "){grid-template-columns:1fr;grid-gap:64px;}",
          ],
          function (e) {
            return e.theme.screen.md
          }
        ),
        B = x.c.a.withConfig({
          displayName: "header__HeaderButton",
          componentId: "kn5alt-3",
        })(
          [
            "font-weight:500;font-size:14px;color:white;letter-spacing:1px;display:block;margin-top:20px;margin-left:auto;margin-right:auto;margin-bottom:20px;text-transform:uppercase;text-decoration:none;cursor:pointer;white-space:nowrap;background:",
            ";border-radius:4px;padding:25px 100px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;outline:0px;&:hover{box-shadow:rgba(110,120,152,0.22) 0px 2px 10px 0px;}",
          ],
          function (e) {
            return e.theme.color.secondary
          }
        ),
        A = x.c.div.withConfig({
          displayName: "header__ImageWrapper",
          componentId: "kn5alt-4",
        })(
          [
            "justify-self:start;text-align:center;align-self:center;@media (max-width:",
            "){justify-self:center;}",
          ],
          function (e) {
            return e.theme.screen.md
          }
        ),
        q = Object(x.c)(z.a).withConfig({
          displayName: "header__StyledImage",
          componentId: "kn5alt-5",
        })(
          ["width:100vw;max-width:1200px;@media (max-width:", "){width:80vw;}"],
          function (e) {
            return e.theme.screen.md
          }
        ),
        G = function () {
          return o.a.createElement(
            E,
            { id: "features" },
            o.a.createElement(
              F,
              null,
              o.a.createElement(
                Y,
                null,
                "Manage all of GitHub.com in one place."
              ),
              o.a.createElement(
                D,
                null,
                o.a.createElement(
                  X,
                  null,
                  o.a.createElement(U, null, "Notifications"),
                  o.a.createElement(
                    J,
                    null,
                    "Receive desktop notifications for new GitHub events."
                  )
                ),
                o.a.createElement(
                  X,
                  null,
                  o.a.createElement(U, null, "Pinned Tabs"),
                  o.a.createElement(
                    J,
                    null,
                    "Keep the tabs you use the most pinned at the top for easy access."
                  )
                ),
                o.a.createElement(
                  X,
                  null,
                  o.a.createElement(U, null, "Keyboard Shortcuts"),
                  o.a.createElement(
                    J,
                    null,
                    "It's just a browser, so you can use the shortcuts you already love. Easily create new tabs or switch between open ones."
                  )
                ),
                o.a.createElement(
                  X,
                  null,
                  o.a.createElement(U, null, "Privacy in Mind"),
                  o.a.createElement(
                    J,
                    null,
                    "The app doesn't track you or touch a bit of your data. HitGub is simply a wrapper for GitHub.com."
                  )
                )
              )
            )
          )
        },
        F = Object(x.c)(S).withConfig({
          displayName: "features__StyledContainer",
          componentId: "sc-1ncf7zy-0",
        })([""]),
        Y = x.c.h3.withConfig({
          displayName: "features__SectionTitle",
          componentId: "sc-1ncf7zy-1",
        })(
          [
            "color:",
            ";display:flex;justify-content:center;margin:0 auto 40px;text-align:center;",
          ],
          function (e) {
            return e.theme.color.primary
          }
        ),
        D = x.c.div.withConfig({
          displayName: "features__FeaturesGrid",
          componentId: "sc-1ncf7zy-2",
        })(
          [
            "max-width:670px;display:grid;grid-template-columns:1fr 1fr;margin:0px auto;grid-column-gap:40px;grid-row-gap:35px;@media (max-width:",
            "){grid-template-columns:1fr;padding:0 64px;}",
          ],
          function (e) {
            return e.theme.screen.sm
          }
        ),
        X = x.c.div.withConfig({
          displayName: "features__FeatureItem",
          componentId: "sc-1ncf7zy-3",
        })([
          "display:flex;justify-content:center;align-items:center;flex-direction:column;",
        ]),
        U = x.c.h4.withConfig({
          displayName: "features__FeatureTitle",
          componentId: "sc-1ncf7zy-4",
        })(
          [
            "color:",
            ";letter-spacing:0px;line-height:30px;margin-bottom:10px;",
          ],
          function (e) {
            return e.theme.color.primary
          }
        ),
        J = x.c.p.withConfig({
          displayName: "features__FeatureText",
          componentId: "sc-1ncf7zy-5",
        })(["text-align:center;"]),
        K = x.c.footer.withConfig({
          displayName: "footer__FooterWrapper",
          componentId: "swqm6g-0",
        })(
          [
            "background-color:#f8f8f8;clip-path:polygon(0 calc(100% - 5vw),100% 0,100% 100%,0 100%);margin:80px 0 0;padding:50px 0 40px;text-align:center;@media (max-width:",
            "){clip-path:polygon(0 calc(100% - 20vw),100% 0,100% 100%,0 100%);}",
          ],
          function (e) {
            return e.theme.screen.sm
          }
        ),
        Q = function () {
          return o.a.createElement(
            K,
            { id: "footer" },
            "Made with ♥ by ",
            o.a.createElement(
              "a",
              {
                href: "https://mynameischristian.com/",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "Christian Helvin"
            )
          )
        }
      function Z() {
        var e = window.navigator.platform,
          t = null
        return (
          -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(e)
            ? (t = "macOS")
            : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(e)
            ? (t = "Windows")
            : !t && /Linux/.test(e) && (t = "Linux"),
          t
        )
      }
      t.default = function () {
        var e = Object(r.useState)(""),
          t = e[0],
          n = e[1]
        return (
          Object(r.useEffect)(function () {
            fetch(
              "https://api.github.com/repos/christianpatrick/hitgub/releases/latest"
            )
              .then(function (e) {
                return e.json()
              })
              .then(function (e) {
                e.assets.map(function (e) {
                  e.name.endsWith(".dmg") &&
                    "macOS" === Z() &&
                    n(e.browser_download_url),
                    e.name.endsWith(".AppImage") &&
                      "Linux" === Z() &&
                      n(e.browser_download_url),
                    e.name.endsWith(".exe") &&
                      "Windows" === Z() &&
                      n(e.browser_download_url)
                })
              })
          }, []),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(a.a, { title: "Home" }),
            o.a.createElement(T, { downloadLink: t }),
            o.a.createElement(V, { downloadLink: t }),
            o.a.createElement(G, null),
            o.a.createElement(Q, null)
          )
        )
      }
    },
    227: function (e, t, n) {
      var r
      n(112),
        n(65),
        n(51),
        n(64),
        n(52),
        n(19),
        n(18),
        n(45),
        "undefined" != typeof self && self,
        (r = function (e) {
          return (function (e) {
            var t = {}
            function n(r) {
              if (t[r]) return t[r].exports
              var o = (t[r] = { i: r, l: !1, exports: {} })
              return (
                e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
              )
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r,
                  })
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default
                      }
                    : function () {
                        return e
                      }
                return n.d(t, "a", t), t
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
              }),
              (n.p = ""),
              n((n.s = 0))
            )
          })([
            function (e, t, n) {
              "use strict"
              Object.defineProperty(t, "__esModule", { value: !0 })
              var r,
                o = n(1),
                i = (r = o) && r.__esModule ? r : { default: r }
              t.default = i.default
            },
            function (e, t, n) {
              "use strict"
              Object.defineProperty(t, "__esModule", { value: !0 })
              var r,
                o =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r])
                    }
                    return e
                  },
                i = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n]
                      ;(r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                  }
                })(),
                a = n(2),
                l = (r = a) && r.__esModule ? r : { default: r },
                s = (function (e) {
                  function t(e) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                    })(this, t)
                    var n = (function (e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        )
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    )
                    return (n.smoothScroll = n.smoothScroll.bind(n)), n
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        )
                      ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t))
                    })(t, e),
                    i(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          n(3).polyfill()
                        },
                      },
                      {
                        key: "smoothScroll",
                        value: function (e) {
                          var t = this
                          e.preventDefault()
                          var n = function () {
                            return 0
                          }
                          void 0 !== this.props.offset &&
                            (n =
                              this.props.offset &&
                              this.props.offset.constructor &&
                              this.props.offset.apply
                                ? this.props.offset
                                : function () {
                                    return parseInt(t.props.offset)
                                  })
                          var r = e.currentTarget.getAttribute("href").slice(1),
                            o =
                              document.getElementById(r).getBoundingClientRect()
                                .top + window.pageYOffset
                          window.scroll({ top: o - n(), behavior: "smooth" }),
                            this.props.onClick && this.props.onClick(e)
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.props,
                            t =
                              (e.offset,
                              (function (e, t) {
                                var n = {}
                                for (var r in e)
                                  t.indexOf(r) >= 0 ||
                                    (Object.prototype.hasOwnProperty.call(
                                      e,
                                      r
                                    ) &&
                                      (n[r] = e[r]))
                                return n
                              })(e, ["offset"]))
                          return l.default.createElement(
                            "a",
                            o({}, t, { onClick: this.smoothScroll })
                          )
                        },
                      },
                    ]),
                    t
                  )
                })(a.Component)
              t.default = s
            },
            function (t, n) {
              t.exports = e
            },
            function (e, t, n) {
              !(function () {
                "use strict"
                e.exports = {
                  polyfill: function () {
                    var e = window,
                      t = document
                    if (
                      !(
                        "scrollBehavior" in t.documentElement.style &&
                        !0 !== e.__forceSmoothScrollPolyfill__
                      )
                    ) {
                      var n,
                        r = e.HTMLElement || e.Element,
                        o = 468,
                        i = {
                          scroll: e.scroll || e.scrollTo,
                          scrollBy: e.scrollBy,
                          elementScroll: r.prototype.scroll || s,
                          scrollIntoView: r.prototype.scrollIntoView,
                        },
                        a =
                          e.performance && e.performance.now
                            ? e.performance.now.bind(e.performance)
                            : Date.now,
                        l =
                          ((n = e.navigator.userAgent),
                          new RegExp(
                            ["MSIE ", "Trident/", "Edge/"].join("|")
                          ).test(n)
                            ? 1
                            : 0)
                      ;(e.scroll = e.scrollTo = function () {
                        void 0 !== arguments[0] &&
                          (!0 !== c(arguments[0])
                            ? h.call(
                                e,
                                t.body,
                                void 0 !== arguments[0].left
                                  ? ~~arguments[0].left
                                  : e.scrollX || e.pageXOffset,
                                void 0 !== arguments[0].top
                                  ? ~~arguments[0].top
                                  : e.scrollY || e.pageYOffset
                              )
                            : i.scroll.call(
                                e,
                                void 0 !== arguments[0].left
                                  ? arguments[0].left
                                  : "object" != typeof arguments[0]
                                  ? arguments[0]
                                  : e.scrollX || e.pageXOffset,
                                void 0 !== arguments[0].top
                                  ? arguments[0].top
                                  : void 0 !== arguments[1]
                                  ? arguments[1]
                                  : e.scrollY || e.pageYOffset
                              ))
                      }),
                        (e.scrollBy = function () {
                          void 0 !== arguments[0] &&
                            (c(arguments[0])
                              ? i.scrollBy.call(
                                  e,
                                  void 0 !== arguments[0].left
                                    ? arguments[0].left
                                    : "object" != typeof arguments[0]
                                    ? arguments[0]
                                    : 0,
                                  void 0 !== arguments[0].top
                                    ? arguments[0].top
                                    : void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 0
                                )
                              : h.call(
                                  e,
                                  t.body,
                                  ~~arguments[0].left +
                                    (e.scrollX || e.pageXOffset),
                                  ~~arguments[0].top +
                                    (e.scrollY || e.pageYOffset)
                                ))
                        }),
                        (r.prototype.scroll = r.prototype.scrollTo = function () {
                          if (void 0 !== arguments[0])
                            if (!0 !== c(arguments[0])) {
                              var e = arguments[0].left,
                                t = arguments[0].top
                              h.call(
                                this,
                                this,
                                void 0 === e ? this.scrollLeft : ~~e,
                                void 0 === t ? this.scrollTop : ~~t
                              )
                            } else {
                              if (
                                "number" == typeof arguments[0] &&
                                void 0 === arguments[1]
                              )
                                throw new SyntaxError(
                                  "Value could not be converted"
                                )
                              i.elementScroll.call(
                                this,
                                void 0 !== arguments[0].left
                                  ? ~~arguments[0].left
                                  : "object" != typeof arguments[0]
                                  ? ~~arguments[0]
                                  : this.scrollLeft,
                                void 0 !== arguments[0].top
                                  ? ~~arguments[0].top
                                  : void 0 !== arguments[1]
                                  ? ~~arguments[1]
                                  : this.scrollTop
                              )
                            }
                        }),
                        (r.prototype.scrollBy = function () {
                          void 0 !== arguments[0] &&
                            (!0 !== c(arguments[0])
                              ? this.scroll({
                                  left: ~~arguments[0].left + this.scrollLeft,
                                  top: ~~arguments[0].top + this.scrollTop,
                                  behavior: arguments[0].behavior,
                                })
                              : i.elementScroll.call(
                                  this,
                                  void 0 !== arguments[0].left
                                    ? ~~arguments[0].left + this.scrollLeft
                                    : ~~arguments[0] + this.scrollLeft,
                                  void 0 !== arguments[0].top
                                    ? ~~arguments[0].top + this.scrollTop
                                    : ~~arguments[1] + this.scrollTop
                                ))
                        }),
                        (r.prototype.scrollIntoView = function () {
                          if (!0 !== c(arguments[0])) {
                            var n = p(this),
                              r = n.getBoundingClientRect(),
                              o = this.getBoundingClientRect()
                            n !== t.body
                              ? (h.call(
                                  this,
                                  n,
                                  n.scrollLeft + o.left - r.left,
                                  n.scrollTop + o.top - r.top
                                ),
                                "fixed" !== e.getComputedStyle(n).position &&
                                  e.scrollBy({
                                    left: r.left,
                                    top: r.top,
                                    behavior: "smooth",
                                  }))
                              : e.scrollBy({
                                  left: o.left,
                                  top: o.top,
                                  behavior: "smooth",
                                })
                          } else
                            i.scrollIntoView.call(
                              this,
                              void 0 === arguments[0] || arguments[0]
                            )
                        })
                    }
                    function s(e, t) {
                      ;(this.scrollLeft = e), (this.scrollTop = t)
                    }
                    function c(e) {
                      if (
                        null === e ||
                        "object" != typeof e ||
                        void 0 === e.behavior ||
                        "auto" === e.behavior ||
                        "instant" === e.behavior
                      )
                        return !0
                      if ("object" == typeof e && "smooth" === e.behavior)
                        return !1
                      throw new TypeError(
                        "behavior member of ScrollOptions " +
                          e.behavior +
                          " is not a valid value for enumeration ScrollBehavior."
                      )
                    }
                    function u(e, t) {
                      return "Y" === t
                        ? e.clientHeight + l < e.scrollHeight
                        : "X" === t
                        ? e.clientWidth + l < e.scrollWidth
                        : void 0
                    }
                    function d(t, n) {
                      var r = e.getComputedStyle(t, null)["overflow" + n]
                      return "auto" === r || "scroll" === r
                    }
                    function f(e) {
                      var t = u(e, "Y") && d(e, "Y"),
                        n = u(e, "X") && d(e, "X")
                      return t || n
                    }
                    function p(e) {
                      var n
                      do {
                        n = (e = e.parentNode) === t.body
                      } while (!1 === n && !1 === f(e))
                      return (n = null), e
                    }
                    function m(t) {
                      var n,
                        r,
                        i,
                        l,
                        s = (a() - t.startTime) / o
                      ;(l = s = s > 1 ? 1 : s),
                        (n = 0.5 * (1 - Math.cos(Math.PI * l))),
                        (r = t.startX + (t.x - t.startX) * n),
                        (i = t.startY + (t.y - t.startY) * n),
                        t.method.call(t.scrollable, r, i),
                        (r === t.x && i === t.y) ||
                          e.requestAnimationFrame(m.bind(e, t))
                    }
                    function h(n, r, o) {
                      var l,
                        c,
                        u,
                        d,
                        f = a()
                      n === t.body
                        ? ((l = e),
                          (c = e.scrollX || e.pageXOffset),
                          (u = e.scrollY || e.pageYOffset),
                          (d = i.scroll))
                        : ((l = n),
                          (c = n.scrollLeft),
                          (u = n.scrollTop),
                          (d = s)),
                        m({
                          scrollable: l,
                          method: d,
                          startTime: f,
                          startX: c,
                          startY: u,
                          x: r,
                          y: o,
                        })
                    }
                  },
                }
              })()
            },
          ])
        }),
        (e.exports = r(n(0)))
    },
    228: function (e, t, n) {
      "use strict"
      n(19), n(66), n(27), n(51), n(33), n(45)
      var r = n(22)
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var o = r(n(154)),
        i = r(n(83)),
        a = r(n(229)),
        l = r(n(233)),
        s = r(n(234)),
        c = r(n(236)),
        u = r(n(81)),
        d = r(n(237)),
        f = r(n(238)),
        p = r(n(44)),
        m = r(n(0)),
        h = r(n(240)),
        g = r(n(241))
      var y = (function (e) {
        function t(e) {
          var n
          return (
            (0, l.default)(this, t),
            ((n = (0, s.default)(
              this,
              (0, c.default)(t).call(this, e)
            )).state = {
              targetItems: [],
              inViewState: [],
              isScrolledPast: [],
            }),
            (n._handleSpy = n._handleSpy.bind((0, u.default)(n))),
            n
          )
        }
        return (
          (0, f.default)(t, e),
          (0, d.default)(t, null, [
            {
              key: "propTypes",
              get: function () {
                return {
                  items: p.default.arrayOf(p.default.string).isRequired,
                  currentClassName: p.default.string.isRequired,
                  scrolledPastClassName: p.default.string,
                  style: p.default.object,
                  componentTag: p.default.oneOfType([
                    p.default.string,
                    p.default.func,
                  ]),
                  offset: p.default.number,
                  rootEl: p.default.string,
                  onUpdate: p.default.func,
                }
              },
            },
            {
              key: "defaultProps",
              get: function () {
                return {
                  items: [],
                  currentClassName: "",
                  style: {},
                  componentTag: "ul",
                  offset: 0,
                  onUpdate: function () {},
                }
              },
            },
          ]),
          (0, d.default)(t, [
            {
              key: "_initSpyTarget",
              value: function (e) {
                return e.map(function (e) {
                  return document.getElementById(e)
                })
              },
            },
            {
              key: "_fillArray",
              value: function (e, t) {
                for (var n = [], r = 0, o = e.length; r < o; r++) n[r] = t
                return n
              },
            },
            {
              key: "_isScrolled",
              value: function () {
                return this._getScrollDimension().scrollTop > 0
              },
            },
            {
              key: "_getScrollDimension",
              value: function () {
                var e = document,
                  t = this.props.rootEl
                return {
                  scrollTop: t
                    ? e.querySelector(t).scrollTop
                    : e.documentElement.scrollTop ||
                      e.body.parentNode.scrollTop ||
                      e.body.scrollTop,
                  scrollHeight: t
                    ? e.querySelector(t).scrollHeight
                    : e.documentElement.scrollHeight ||
                      e.body.parentNode.scrollHeight ||
                      e.body.scrollHeight,
                }
              },
            },
            {
              key: "_getElemsViewState",
              value: function (e) {
                for (
                  var t = [],
                    n = [],
                    r = [],
                    o = e || this.state.targetItems,
                    i = !1,
                    l = 0,
                    s = o.length;
                  l < s;
                  l++
                ) {
                  var c = o[l],
                    u = !i && this._isInView(c)
                  u ? ((i = !0), t.push(c)) : n.push(c)
                  var d = l === s - 1,
                    f = this._isScrolled()
                  this._isAtBottom() &&
                    this._isInView(c) &&
                    !u &&
                    d &&
                    f &&
                    (n.pop(),
                    n.push.apply(n, (0, a.default)(t)),
                    (t = [c]),
                    (r = this._fillArray(r, !1)),
                    (u = !0)),
                    r.push(u)
                }
                return {
                  inView: t,
                  outView: n,
                  viewStatusList: r,
                  scrolledPast:
                    this.props.scrolledPastClassName &&
                    this._getScrolledPast(r),
                }
              },
            },
            {
              key: "_isInView",
              value: function (e) {
                if (!e) return !1
                var t,
                  n = this.props,
                  r = n.rootEl,
                  o = n.offset
                r && (t = document.querySelector(r).getBoundingClientRect())
                var i = e.getBoundingClientRect(),
                  a = r ? t.height : window.innerHeight,
                  l = this._getScrollDimension().scrollTop,
                  s = l + a,
                  c = r ? i.top + l - t.top + o : i.top + l + o,
                  u = c + e.offsetHeight
                return c < s && u > l
              },
            },
            {
              key: "_isAtBottom",
              value: function () {
                var e = this.props.rootEl,
                  t = this._getScrollDimension(),
                  n = t.scrollTop,
                  r = t.scrollHeight
                return (
                  n +
                    (e
                      ? document.querySelector(e).getBoundingClientRect().height
                      : window.innerHeight) >=
                  r
                )
              },
            },
            {
              key: "_getScrolledPast",
              value: function (e) {
                if (
                  !e.some(function (e) {
                    return e
                  })
                )
                  return e
                var t = !1
                return e.map(function (e) {
                  return e && !t ? ((t = !0), !1) : !t
                })
              },
            },
            {
              key: "_spy",
              value: function (e) {
                var t = this,
                  n = this._getElemsViewState(e),
                  r = this.state.inViewState
                this.setState(
                  {
                    inViewState: n.viewStatusList,
                    isScrolledPast: n.scrolledPast,
                  },
                  function () {
                    t._update(r)
                  }
                )
              },
            },
            {
              key: "_update",
              value: function (e) {
                var t, n
                ;((t = this.state.inViewState),
                (n = e),
                t.length === n.length &&
                  t.every(function (e, t) {
                    return e === n[t]
                  })) ||
                  this.props.onUpdate(
                    this.state.targetItems[this.state.inViewState.indexOf(!0)]
                  )
              },
            },
            {
              key: "_handleSpy",
              value: function () {
                ;(0, g.default)(this._spy(), 100)
              },
            },
            {
              key: "_initFromProps",
              value: function () {
                var e = this._initSpyTarget(this.props.items)
                this.setState({ targetItems: e }), this._spy(e)
              },
            },
            {
              key: "offEvent",
              value: function () {
                ;(this.props.rootEl
                  ? document.querySelector(this.props.rootEl)
                  : window
                ).removeEventListener("scroll", this._handleSpy)
              },
            },
            {
              key: "onEvent",
              value: function () {
                ;(this.props.rootEl
                  ? document.querySelector(this.props.rootEl)
                  : window
                ).addEventListener("scroll", this._handleSpy)
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this._initFromProps(), this.onEvent()
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.offEvent()
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function () {
                this._initFromProps()
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.componentTag,
                  n = this.props,
                  r = n.children,
                  a = n.className,
                  l = n.scrolledPastClassName,
                  s = n.style,
                  c = 0,
                  u = m.default.Children.map(r, function (t, n) {
                    var r
                    if (!t) return null
                    var a = t.type,
                      s = l && e.state.isScrolledPast[n],
                      u = (0, h.default)(
                        ((r = {}),
                        (0, i.default)(
                          r,
                          "".concat(t.props.className),
                          t.props.className
                        ),
                        (0, i.default)(
                          r,
                          "".concat(e.props.currentClassName),
                          e.state.inViewState[n]
                        ),
                        (0, i.default)(
                          r,
                          "".concat(e.props.scrolledPastClassName),
                          s
                        ),
                        r)
                      )
                    return m.default.createElement(
                      a,
                      (0, o.default)({}, t.props, { className: u, key: c++ }),
                      t.props.children
                    )
                  }),
                  d = (0, h.default)((0, i.default)({}, "".concat(a), a))
                return m.default.createElement(t, { className: d, style: s }, u)
              },
            },
          ]),
          t
        )
      })(m.default.Component)
      t.default = y
    },
    229: function (e, t, n) {
      var r = n(230),
        o = n(231),
        i = n(232)
      e.exports = function (e) {
        return r(e) || o(e) || i()
      }
    },
    230: function (e, t) {
      e.exports = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t]
          return n
        }
      }
    },
    231: function (e, t) {
      e.exports = function (e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e)
      }
    },
    232: function (e, t) {
      e.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }
    },
    233: function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
    },
    234: function (e, t, n) {
      var r = n(235),
        o = n(81)
      e.exports = function (e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t
      }
    },
    235: function (e, t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      function r(t) {
        return (
          "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
            ? (e.exports = r = function (e) {
                return n(e)
              })
            : (e.exports = r = function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : n(e)
              }),
          r(t)
        )
      }
      e.exports = r
    },
    236: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          n(t)
        )
      }
      e.exports = n
    },
    237: function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
      }
    },
    238: function (e, t, n) {
      var r = n(239)
      e.exports = function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t)
      }
    },
    239: function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          n(t, r)
        )
      }
      e.exports = n
    },
    240: function (e, t, n) {
      var r
      n(33),
        (function () {
          "use strict"
          var n = {}.hasOwnProperty
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t]
              if (r) {
                var i = typeof r
                if ("string" === i || "number" === i) e.push(r)
                else if (Array.isArray(r) && r.length) {
                  var a = o.apply(null, r)
                  a && e.push(a)
                } else if ("object" === i)
                  for (var l in r) n.call(r, l) && r[l] && e.push(l)
              }
            }
            return e.join(" ")
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (r = function () {
                  return o
                }.apply(t, [])) || (e.exports = r)
        })()
    },
    241: function (e, t, n) {
      "use strict"
      n(45),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var r = function (e) {
        var t,
          n,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
        return function () {
          var o = +new Date()
          !!t && o < t + r
            ? (clearTimeout(n),
              (n = setTimeout(function () {
                ;(t = o), e()
              }, r)))
            : ((t = o), e())
        }
      }
      t.default = r
    },
    242: function (e) {
      e.exports = JSON.parse(
        '{"data":{"file":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'238\'%3e%3cpath%20d=\'M9%207c-2%201-2%202-2%208v8h386V7H9m73%2027v5h51V29l-26-1H82v6\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.6774193548387097,"src":"/static/fa48d170dbd6ab9e96db96258652b342/e9c7b/hitgub.png","srcSet":"/static/fa48d170dbd6ab9e96db96258652b342/69781/hitgub.png 250w,\\n/static/fa48d170dbd6ab9e96db96258652b342/3fa08/hitgub.png 500w,\\n/static/fa48d170dbd6ab9e96db96258652b342/e9c7b/hitgub.png 1000w,\\n/static/fa48d170dbd6ab9e96db96258652b342/67d8d/hitgub.png 1300w","sizes":"(max-width: 1000px) 100vw, 1000px"}}}}}'
      )
    },
    243: function (e, t, n) {
      "use strict"
      n(12), n(10), n(4), n(84), n(157), n(244)
      var r = n(22)
      ;(t.__esModule = !0), (t.default = void 0)
      var o,
        i = r(n(81)),
        a = r(n(82)),
        l = r(n(155)),
        s = r(n(154)),
        c = r(n(0)),
        u = r(n(44)),
        d = function (e) {
          var t = (0, s.default)({}, e),
            n = t.resolutions,
            r = t.sizes,
            o = t.critical
          return (
            n && ((t.fixed = n), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            o && (t.loading = "eager"),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          )
        },
        f = function (e) {
          var t = e.fluid,
            n = e.fixed
          return ((t && t[0]) || (n && n[0])).src
        },
        p = Object.create({}),
        m = function (e) {
          var t = d(e),
            n = f(t)
          return p[n] || !1
        },
        h =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        g = "undefined" != typeof window,
        y = g && window.IntersectionObserver,
        b = new WeakMap()
      function v(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.srcSet,
            r = e.srcSetWebp,
            o = e.media,
            i = e.sizes
          return c.default.createElement(
            c.default.Fragment,
            { key: t },
            r &&
              c.default.createElement("source", {
                type: "image/webp",
                media: o,
                srcSet: r,
                sizes: i,
              }),
            c.default.createElement("source", { media: o, srcSet: n, sizes: i })
          )
        })
      }
      function w(e) {
        var t = [],
          n = []
        return (
          e.forEach(function (e) {
            return (e.media ? t : n).push(e)
          }),
          [].concat(t, n)
        )
      }
      function x(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.media,
            r = e.tracedSVG
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r,
          })
        })
      }
      function S(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.media,
            r = e.base64
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r,
          })
        })
      }
      function E(e, t) {
        var n = e.srcSet,
          r = e.srcSetWebp,
          o = e.media,
          i = e.sizes
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (o ? 'media="' + o + '" ' : "") +
          'srcset="' +
          (t ? r : n) +
          '" ' +
          (i ? 'sizes="' + i + '" ' : "") +
          "/>"
        )
      }
      var _ = function (e, t) {
          var n =
            (void 0 === o &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (o = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (b.has(e.target)) {
                      var t = b.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (o.unobserve(e.target), b.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: "200px" }
              )),
            o)
          return (
            n && (n.observe(e), b.set(e, t)),
            function () {
              n.unobserve(e), b.delete(e)
            }
          )
        },
        O = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            o = e.title ? 'title="' + e.title + '" ' : "",
            i = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            a = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            s = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            c = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : ""
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? E(e, !0) : "") + E(e)
              })
              .join("") +
            "<img " +
            c +
            a +
            l +
            n +
            r +
            t +
            i +
            o +
            s +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        k = function (e) {
          var t = e.src,
            n = e.imageVariants,
            r = e.generateSources,
            o = e.spreadProps,
            i = c.default.createElement(C, (0, s.default)({ src: t }, o))
          return n.length > 1
            ? c.default.createElement("picture", null, r(n), i)
            : i
        },
        C = c.default.forwardRef(function (e, t) {
          var n = e.sizes,
            r = e.srcSet,
            o = e.src,
            i = e.style,
            a = e.onLoad,
            u = e.onError,
            d = e.loading,
            f = e.draggable,
            p = (0, l.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
            ])
          return c.default.createElement(
            "img",
            (0, s.default)({ sizes: n, srcSet: r, src: o }, p, {
              onLoad: a,
              onError: u,
              ref: t,
              loading: d,
              draggable: f,
              style: (0, s.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                },
                i
              ),
            })
          )
        })
      C.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      }
      var I = (function (e) {
        function t(t) {
          var n
          ;((n = e.call(this, t) || this).seenBefore = g && m(t)),
            (n.isCritical = "eager" === t.loading || t.critical),
            (n.addNoScript = !(n.isCritical && !t.fadeIn)),
            (n.useIOSupport = !h && y && !n.isCritical && !n.seenBefore)
          var r = n.isCritical || (g && (h || !n.useIOSupport))
          return (
            (n.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !n.seenBefore && t.fadeIn,
            }),
            (n.imageRef = c.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind((0, i.default)(n))),
            (n.handleRef = n.handleRef.bind((0, i.default)(n))),
            n
          )
        }
        ;(0, a.default)(t, e)
        var n = t.prototype
        return (
          (n.componentDidMount = function () {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current
              e && e.complete && this.handleImageLoaded()
            }
          }),
          (n.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners()
          }),
          (n.handleRef = function (e) {
            var t = this
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = _(e, function () {
                var e = m(t.props)
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc,
                    })
                  })
              }))
          }),
          (n.handleImageLoaded = function () {
            var e, t, n
            ;(e = this.props),
              (t = d(e)),
              (n = f(t)),
              (p[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (n.render = function () {
            var e = d(this.props),
              t = e.title,
              n = e.alt,
              r = e.className,
              o = e.style,
              i = void 0 === o ? {} : o,
              a = e.imgStyle,
              l = void 0 === a ? {} : a,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              p = e.placeholderClassName,
              m = e.fluid,
              h = e.fixed,
              g = e.backgroundColor,
              y = e.durationFadeIn,
              b = e.Tag,
              w = e.itemProp,
              E = e.loading,
              _ = e.draggable,
              I = !1 === this.state.fadeIn || this.state.imgLoaded,
              j = !0 === this.state.fadeIn && !this.state.imgCached,
              L = (0, s.default)(
                {
                  opacity: I ? 1 : 0,
                  transition: j ? "opacity " + y + "ms" : "none",
                },
                l
              ),
              N = "boolean" == typeof g ? "lightgray" : g,
              T = { transitionDelay: y + "ms" },
              P = (0, s.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                j && T,
                {},
                l,
                {},
                f
              ),
              M = {
                title: t,
                alt: this.state.isVisible ? "" : n,
                style: P,
                className: p,
              }
            if (m) {
              var z = m,
                V = z[0]
              return c.default.createElement(
                b,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, s.default)(
                    { position: "relative", overflow: "hidden" },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(V.srcSet),
                },
                c.default.createElement(b, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / V.aspectRatio + "%",
                  },
                }),
                N &&
                  c.default.createElement(b, {
                    title: t,
                    style: (0, s.default)(
                      {
                        backgroundColor: N,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      j && T
                    ),
                  }),
                V.base64 &&
                  c.default.createElement(k, {
                    src: V.base64,
                    spreadProps: M,
                    imageVariants: z,
                    generateSources: S,
                  }),
                V.tracedSVG &&
                  c.default.createElement(k, {
                    src: V.tracedSVG,
                    spreadProps: M,
                    imageVariants: z,
                    generateSources: x,
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    v(z),
                    c.default.createElement(C, {
                      alt: n,
                      title: t,
                      sizes: V.sizes,
                      src: V.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: V.srcSet,
                      style: L,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: w,
                      loading: E,
                      draggable: _,
                    })
                  ),
                this.addNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: O(
                        (0, s.default)({ alt: n, title: t, loading: E }, V, {
                          imageVariants: z,
                        })
                      ),
                    },
                  })
              )
            }
            if (h) {
              var R = h,
                H = R[0],
                W = (0, s.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: H.width,
                    height: H.height,
                  },
                  i
                )
              return (
                "inherit" === i.display && delete W.display,
                c.default.createElement(
                  b,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: W,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(H.srcSet),
                  },
                  N &&
                    c.default.createElement(b, {
                      title: t,
                      style: (0, s.default)(
                        {
                          backgroundColor: N,
                          width: H.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: H.height,
                        },
                        j && T
                      ),
                    }),
                  H.base64 &&
                    c.default.createElement(k, {
                      src: H.base64,
                      spreadProps: M,
                      imageVariants: R,
                      generateSources: S,
                    }),
                  H.tracedSVG &&
                    c.default.createElement(k, {
                      src: H.tracedSVG,
                      spreadProps: M,
                      imageVariants: R,
                      generateSources: x,
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      v(R),
                      c.default.createElement(C, {
                        alt: n,
                        title: t,
                        width: H.width,
                        height: H.height,
                        sizes: H.sizes,
                        src: H.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: H.srcSet,
                        style: L,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: w,
                        loading: E,
                        draggable: _,
                      })
                    ),
                  this.addNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: O(
                          (0, s.default)({ alt: n, title: t, loading: E }, H, {
                            imageVariants: R,
                          })
                        ),
                      },
                    })
                )
              )
            }
            return null
          }),
          t
        )
      })(c.default.Component)
      I.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      }
      var j = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        L = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        })
      I.propTypes = {
        resolutions: j,
        sizes: L,
        fixed: u.default.oneOfType([j, u.default.arrayOf(j)]),
        fluid: u.default.oneOfType([L, u.default.arrayOf(L)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool,
      }
      var N = I
      t.default = N
    },
    244: function (e, t, n) {
      "use strict"
      n(111)("fixed", function (e) {
        return function () {
          return e(this, "tt", "", "")
        }
      })
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-dc75fc4c6e3a1630131b.js.map
