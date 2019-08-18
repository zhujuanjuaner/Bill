(window.shark_list_jsonp = window.shark_list_jsonp || []).push([[5], {
    "0aa78": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/history-default-pic_a7bc6ea.png"
    }, "0ec84": function (e, t, o) {
    }, 1: function (e, t, o) {
        e.exports = o("5ef51")
    }, "13c31": function (e, t, o) {
    }, "1c767": function (e, t) {
        e.exports = sdkd96911f1719081126911
    }, 20304: function (e, t, o) {
    }, "20f6c": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/0_d61d6b3.png"
    }, "2837a": function (e, t, o) {
    }, "3105c": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/guild_entry_banner_59e315f.jpg"
    }, "3477e": function (e, t, o) {
    }, "34aaf": function (e, t, o) {
    }, "36f07": function (e, t, o) {
    }, "3bfdc": function (e, t, o) {
    }, 40407: function (e, t, o) {
    }, "41b9a": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/on-play_a8df6bc.gif"
    }, "42b85": function (e, t, o) {
    }, "436d3": function (e, t, o) {
    }, "4b4d4": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/4_bca95f9.png"
    }, "4cf69": function (e, t, o) {
    }, "4e099": function (e, t, o) {
    }, "50af3": function (e, t, o) {
    }, 53196: function (e, t, o) {
    }, "58ade": function (e, t, o) {
    }, "5ef51": function (e, t, o) {
        "use strict";
        o.r(t);
        o("c4dc3"), o("8f58d");
        var r = o("7ca7d"), n = o.n(r), i = o("eb3e2"), a = o("f6898"), l = o("b0067"), c = o("2f135"), s = o("96089"),
            u = o("58638"), p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : p(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var f = "RECEIVE_PRIVATE_LETTER", b = "SET_ANCHOR_RECRUIT", d = "SET_PRIVATE_LETTER_STATUS", y = function (e) {
                function BaseConfigAction() {
                    return function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, BaseConfigAction), function _possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : p(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return _inherits(BaseConfigAction, e), BaseConfigAction.receivePrivateLetter = function receivePrivateLetter(e) {
                    return {type: f, payload: e}
                }, BaseConfigAction.getAnchorRecruit = function getAnchorRecruit() {
                    return {type: "GET_ANCHOR_RECRUIT"}
                }, BaseConfigAction.setAnchorRecruit = function setAnchorRecruit(e) {
                    return {type: b, payload: e}
                }, BaseConfigAction.setPrivateLetterStatus = function setPrivateLetterStatus(e) {
                    return {type: d, payload: e}
                }, BaseConfigAction
            }(u.Action), m = o("fc794"), h = o.n(m),
            v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function yubaMessageActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : v(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function yubaMessageActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var _, g, D, S, w, O, E, C, N, P = "SET_UNREAD_MESSAGE", j = function (e) {
            function YubaMessageAction() {
                return function yubaMessageActions_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, YubaMessageAction), function yubaMessageActions_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : v(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return yubaMessageActions_inherits(YubaMessageAction, e), YubaMessageAction.setUnreadMessage = function setUnreadMessage(e) {
                return {type: P, payload: e}
            }, YubaMessageAction
        }(u.Action), T = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function _initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function baseConfigServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : T(t)) && "function" !== typeof t ? e : t
        }

        function baseConfigServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : T(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function baseConfigServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function _applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var k, z, I, R = n.a.Service, M = n.a.Store, A = "ImJsSdk.js?v=20190614", L = 0,
            B = (_ = R(i.DataCenter.common), g = R(i.DataCenter.global), D = R(i.DataCenter.cookie), S = M(), w = function (e) {
                function BaseConfigService() {
                    var t, o;
                    !function baseConfigServices_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, BaseConfigService);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = baseConfigServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), _initDefineProp(o, "common", O, o), _initDefineProp(o, "global", E, o), _initDefineProp(o, "cookie", C, o), _initDefineProp(o, "store", N, o), baseConfigServices_possibleConstructorReturn(o, t)
                }

                return baseConfigServices_inherits(BaseConfigService, e), BaseConfigService.prototype.privateLetterCreate = function privateLetterCreate() {
                    return new Promise(function (e, t) {
                        L ? e() : window.loader ? window.loader.loadFile("//bjfesdk.douyucdn.cn/" + A, function (o) {
                            o ? t([A]) : (L = 1, e())
                        }) : t([A])
                    })
                }, BaseConfigService.prototype.embedMsg = function embedMsg() {
                    var e = this.store, t = this.common;
                    window.ImJsSdk.init({
                        target: document.querySelector(".PrivateLetter-frame"),
                        onMessage: function onMessage(o) {
                            t.push("PrivateLetter", {unread: o}), e.dispatch(y.receivePrivateLetter(o))
                        },
                        onMonitMessage: function onMonitMessage(t) {
                            var o = t.SYSTEM_1003, r = void 0 === o ? 0 : o, n = t.SYSTEM_1004,
                                i = void 0 === n ? 0 : n, a = t.SYSTEM_1005, l = void 0 === a ? 0 : a,
                                c = t.SYSTEM_1006, s = void 0 === c ? 0 : c;
                            e.dispatch(j.setUnreadMessage({comment: r, at: i, like: l, group: s}))
                        },
                        onClose: function onClose() {
                            t.push("PrivateLetter", {isShow: !1})
                        },
                        initShowState: !1
                    }), window.ImJsSdk.beforeShow()
                }, BaseConfigService.prototype.subscribePrivateLetter = function subscribePrivateLetter() {
                    var e = this;
                    this.common.get("PrivateLetter").subscribe(function (t) {
                        var o = t.isShow, r = t.uid, n = o;
                        o && (window.ImJsSdk.beforeShow(), r && (window.ImJsSdk.showChatDetail(r), e.common.push("PrivateLetter", {uid: ""})), h.a.check() || (h.a.show(), n = !1)), e.setPrivateLetterStatus(n)
                    })
                }, BaseConfigService.prototype.setPrivateLetterStatus = function setPrivateLetterStatus(e) {
                    this.store.dispatch(y.setPrivateLetterStatus(e))
                }, BaseConfigService.prototype.invokePrivateLetter = function invokePrivateLetter() {
                    var e = this;
                    window.invokePrivateLetter = function (t) {
                        e.common.push("PrivateLetter", {isShow: 1, uid: t})
                    }
                }, BaseConfigService.prototype.getAnchorRecruitByEpic = function getAnchorRecruitByEpic() {
                    this.store.dispatch(y.getAnchorRecruit())
                }, BaseConfigService.prototype.checkRecruitStatus = function checkRecruitStatus() {
                    var e = this.global.get("USER_INFO.uid");
                    return !!+this.cookie.get("recruiteMsg" + e)
                }, BaseConfigService.prototype.fetchAnchorRecruit = function fetchAnchorRecruit() {
                    return i.jsonpClient.get(String, "//webconf.douyucdn.cn//resource/common/anchor_recruit_new.json", "anchorRecruitNew")
                }, BaseConfigService
            }(u.Service), O = _applyDecoratedDescriptor(w.prototype, "common", [_], {
                enumerable: !0,
                initializer: null
            }), E = _applyDecoratedDescriptor(w.prototype, "global", [g], {
                enumerable: !0,
                initializer: null
            }), C = _applyDecoratedDescriptor(w.prototype, "cookie", [D], {
                enumerable: !0,
                initializer: null
            }), N = _applyDecoratedDescriptor(w.prototype, "store", [S], {enumerable: !0, initializer: null}), w);
        var x = (k = (0, n.a.Service)(B), z = function () {
                function BaseConfigEpic() {
                    !function baseConfigEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, BaseConfigEpic), function baseConfigEpics_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(this, "baseConfigServices", I, this)
                }

                return BaseConfigEpic.prototype.getAnchorRecruit = function getAnchorRecruit(e) {
                    var t = this;
                    return e.ofType("GET_ANCHOR_RECRUIT").pipe(Object(l.switchMap)(function () {
                        return t.baseConfigServices.checkRecruitStatus() ? t.baseConfigServices.fetchAnchorRecruit() : Object(s.of)({data: "{}"})
                    }), Object(a.map)(y.setAnchorRecruit), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, BaseConfigEpic
            }(), I = function baseConfigEpics_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(z.prototype, "baseConfigServices", [k], {enumerable: !0, initializer: null}), z),
            F = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function userInfoActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : F(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function userInfoActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var H, U, G, W, Y, $, q, V, Z, K, J, X, Q, ee, te, oe, re, ne, ie, ae, le, ce, se, ue, pe, fe, be, de, ye, me,
            he, ve, _e, ge, De, Se, we, Oe, Ee, Ce, Ne, Pe, je, Te, ke, ze, Ie, Re, Me, Ae, Le, Be, xe, Fe, He, Ue, Ge,
            We, Ye, $e, qe, Ve, Ze, Ke, Je, Xe, Qe = function (e) {
                function UserInfoAction() {
                    return function userInfoActions_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, UserInfoAction), function userInfoActions_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : F(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return userInfoActions_inherits(UserInfoAction, e), UserInfoAction.defaultAction = function defaultAction() {
                    return {type: "USER_INFO_DEFAULT"}
                }, UserInfoAction.getUserInfo = function getUserInfo(e) {
                    return {type: "GET_USER_INFO", payload: e}
                }, UserInfoAction
            }(u.Action), et = o("54992"),
            tt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function UserInfoDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function UserInfoDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function UserInfoDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : tt(t)) && "function" !== typeof t ? e : t
        }

        function UserInfoDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : tt(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function UserInfoDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function UserInfoDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var ot, rt, nt, it, at = i.basicTypes.string, lt = i.basicTypes.number, ct = i.basicTypes.mapping,
            st = i.basicTypes.typed, ut = i.basicTypes.optional, pt = i.basicTypes.oneOf, ft = (H = ct({
                emailStatus: "ems",
                certificationStatus: "its",
                bindPhoneStatus: "pos"
            }), Object(et.log)(U = H((G = function (e) {
                function AuthenticationData() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, AuthenticationData);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "emailStatus", W, o), UserInfoDto_initDefineProp(o, "certificationStatus", Y, o), UserInfoDto_initDefineProp(o, "bindPhoneStatus", $, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(AuthenticationData, e), AuthenticationData
            }(i.EntityDto), W = UserInfoDto_applyDecoratedDescriptor(G.prototype, "emailStatus", [at], {
                enumerable: !0,
                initializer: null
            }), Y = UserInfoDto_applyDecoratedDescriptor(G.prototype, "certificationStatus", [at], {
                enumerable: !0,
                initializer: null
            }), $ = UserInfoDto_applyDecoratedDescriptor(G.prototype, "bindPhoneStatus", [at], {
                enumerable: !0,
                initializer: null
            }), U = G)) || U) || U), bt = (q = ct({
                webBg: "web_bg",
                webPic1: "web_pic1",
                webPic2: "web_pic2",
                webPic3: "web_pic3"
            }), Object(et.log)(V = q((Z = function (e) {
                function _Symbol2() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, _Symbol2);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "ck", K, o), UserInfoDto_initDefineProp(o, "ht", J, o), UserInfoDto_initDefineProp(o, "webBg", X, o), UserInfoDto_initDefineProp(o, "webPic1", Q, o), UserInfoDto_initDefineProp(o, "webPic2", ee, o), UserInfoDto_initDefineProp(o, "webPic3", te, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(_Symbol2, e), _Symbol2
            }(i.EntityDto), K = UserInfoDto_applyDecoratedDescriptor(Z.prototype, "ck", [at], {
                enumerable: !0,
                initializer: null
            }), J = UserInfoDto_applyDecoratedDescriptor(Z.prototype, "ht", [at], {
                enumerable: !0,
                initializer: null
            }), X = UserInfoDto_applyDecoratedDescriptor(Z.prototype, "webBg", [at], {
                enumerable: !0,
                initializer: null
            }), Q = UserInfoDto_applyDecoratedDescriptor(Z.prototype, "webPic1", [at], {
                enumerable: !0,
                initializer: null
            }), ee = UserInfoDto_applyDecoratedDescriptor(Z.prototype, "webPic2", [at], {
                enumerable: !0,
                initializer: null
            }), te = UserInfoDto_applyDecoratedDescriptor(Z.prototype, "webPic3", [at], {
                enumerable: !0,
                initializer: null
            }), V = Z)) || V) || V), dt = Object(et.log)((re = function (e) {
                function Nr() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, Nr);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "ba", ne, o), UserInfoDto_initDefineProp(o, "bp", ie, o), UserInfoDto_initDefineProp(o, "fg", ae, o), UserInfoDto_initDefineProp(o, "gh", le, o), UserInfoDto_initDefineProp(o, "ic", ce, o), UserInfoDto_initDefineProp(o, "mic", se, o), UserInfoDto_initDefineProp(o, "ml", ue, o), UserInfoDto_initDefineProp(o, "rkh", pe, o), UserInfoDto_initDefineProp(o, "rmh", fe, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(Nr, e), Nr
            }(i.EntityDto), ne = UserInfoDto_applyDecoratedDescriptor(re.prototype, "ba", [at], {
                enumerable: !0,
                initializer: null
            }), ie = UserInfoDto_applyDecoratedDescriptor(re.prototype, "bp", [at], {
                enumerable: !0,
                initializer: null
            }), ae = UserInfoDto_applyDecoratedDescriptor(re.prototype, "fg", [at], {
                enumerable: !0,
                initializer: null
            }), le = UserInfoDto_applyDecoratedDescriptor(re.prototype, "gh", [at], {
                enumerable: !0,
                initializer: null
            }), ce = UserInfoDto_applyDecoratedDescriptor(re.prototype, "ic", [at], {
                enumerable: !0,
                initializer: null
            }), se = UserInfoDto_applyDecoratedDescriptor(re.prototype, "mic", [at], {
                enumerable: !0,
                initializer: null
            }), ue = UserInfoDto_applyDecoratedDescriptor(re.prototype, "ml", [at], {
                enumerable: !0,
                initializer: null
            }), pe = UserInfoDto_applyDecoratedDescriptor(re.prototype, "rkh", [at], {
                enumerable: !0,
                initializer: null
            }), fe = UserInfoDto_applyDecoratedDescriptor(re.prototype, "rmh", [at], {
                enumerable: !0,
                initializer: null
            }), oe = re)) || oe, yt = (be = st(bt), Object(et.log)((ye = function (e) {
                function Confpn() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, Confpn);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "nbn", me, o), UserInfoDto_initDefineProp(o, "symbol", he, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(Confpn, e), Confpn
            }(i.EntityDto), me = UserInfoDto_applyDecoratedDescriptor(ye.prototype, "nbn", [at], {
                enumerable: !0,
                initializer: null
            }), he = UserInfoDto_applyDecoratedDescriptor(ye.prototype, "symbol", [be], {
                enumerable: !0,
                initializer: null
            }), de = ye)) || de),
            mt = (ve = ct({confPn: "conf_pn"}), _e = st(yt), Object(et.log)(ge = ve((De = function (e) {
                function Pn() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, Pn);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "confPn", Se, o), UserInfoDto_initDefineProp(o, "ep", we, o), UserInfoDto_initDefineProp(o, "pl", Oe, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(Pn, e), Pn
            }(i.EntityDto), Se = UserInfoDto_applyDecoratedDescriptor(De.prototype, "confPn", [_e], {
                enumerable: !0,
                initializer: null
            }), we = UserInfoDto_applyDecoratedDescriptor(De.prototype, "ep", [at], {
                enumerable: !0,
                initializer: null
            }), Oe = UserInfoDto_applyDecoratedDescriptor(De.prototype, "pl", [lt], {
                enumerable: !0,
                initializer: null
            }), ge = De)) || ge) || ge), ht = (Te = st((Ee = st(bt), Object(et.log)((Ne = function (e) {
                function Conf() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, Conf);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "nbn", Pe, o), UserInfoDto_initDefineProp(o, "symbol", je, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(Conf, e), Conf
            }(i.EntityDto), Pe = UserInfoDto_applyDecoratedDescriptor(Ne.prototype, "nbn", [at], {
                enumerable: !0,
                initializer: null
            }), je = UserInfoDto_applyDecoratedDescriptor(Ne.prototype, "symbol", [Ee], {
                enumerable: !0,
                initializer: null
            }), Ce = Ne)) || Ce)), ke = st(dt), ze = st(mt), Object(et.log)((Re = function (e) {
                function NobleInfo() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, NobleInfo);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "conf", Me, o), UserInfoDto_initDefineProp(o, "et", Ae, o), UserInfoDto_initDefineProp(o, "lv", Le, o), UserInfoDto_initDefineProp(o, "trial", Be, o), UserInfoDto_initDefineProp(o, "nr", xe, o), UserInfoDto_initDefineProp(o, "pn", Fe, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(NobleInfo, e), NobleInfo
            }(i.EntityDto), Me = UserInfoDto_applyDecoratedDescriptor(Re.prototype, "conf", [ut, Te], {
                enumerable: !0,
                initializer: null
            }), Ae = UserInfoDto_applyDecoratedDescriptor(Re.prototype, "et", [lt], {
                enumerable: !0,
                initializer: null
            }), Le = UserInfoDto_applyDecoratedDescriptor(Re.prototype, "lv", [lt], {
                enumerable: !0,
                initializer: null
            }), Be = UserInfoDto_applyDecoratedDescriptor(Re.prototype, "trial", [lt], {
                enumerable: !0,
                initializer: null
            }), xe = UserInfoDto_applyDecoratedDescriptor(Re.prototype, "nr", [ut, ke], {
                enumerable: !0,
                initializer: null
            }), Fe = UserInfoDto_applyDecoratedDescriptor(Re.prototype, "pn", [ut, ze], {
                enumerable: !0,
                initializer: null
            }), Ie = Re)) || Ie), vt = (He = ct({
                totalExperience: "exp",
                nobleInfo: "nbl_spl",
                authenticationData: "info"
            }), Ue = pt(lt, at), Ge = st(ft), We = st(ht), Object(et.log)(Ye = He(($e = function (e) {
                function UserInfoDto() {
                    var t, o;
                    UserInfoDto_classCallCheck(this, UserInfoDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserInfoDto_initDefineProp(o, "totalExperience", qe, o), UserInfoDto_initDefineProp(o, "hs", Ve, o), UserInfoDto_initDefineProp(o, "authenticationData", Ze, o), UserInfoDto_initDefineProp(o, "nobleInfo", Ke, o), UserInfoDto_initDefineProp(o, "silver", Je, o), UserInfoDto_initDefineProp(o, "uid", Xe, o), UserInfoDto_possibleConstructorReturn(o, t)
                }

                return UserInfoDto_inherits(UserInfoDto, e), UserInfoDto
            }(i.EntityDto), qe = UserInfoDto_applyDecoratedDescriptor($e.prototype, "totalExperience", [Ue], {
                enumerable: !0,
                initializer: null
            }), Ve = UserInfoDto_applyDecoratedDescriptor($e.prototype, "hs", [ut, at], {
                enumerable: !0,
                initializer: null
            }), Ze = UserInfoDto_applyDecoratedDescriptor($e.prototype, "authenticationData", [Ge], {
                enumerable: !0,
                initializer: null
            }), Ke = UserInfoDto_applyDecoratedDescriptor($e.prototype, "nobleInfo", [ut, We], {
                enumerable: !0,
                initializer: null
            }), Je = UserInfoDto_applyDecoratedDescriptor($e.prototype, "silver", [lt], {
                enumerable: !0,
                initializer: null
            }), Xe = UserInfoDto_applyDecoratedDescriptor($e.prototype, "uid", [lt], {
                enumerable: !0,
                initializer: null
            }), Ye = $e)) || Ye) || Ye),
            _t = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function userInfoServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : _t(t)) && "function" !== typeof t ? e : t
        }

        function userInfoServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : _t(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function userInfoServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var gt, Dt, St, wt = (ot = (0, n.a.Store)(), Object(et.log)((nt = function (e) {
                function UserInfoServices() {
                    var t, o;
                    !function userInfoServices_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, UserInfoServices);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = userInfoServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function userInfoServices_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(o, "store", it, o), userInfoServices_possibleConstructorReturn(o, t)
                }

                return userInfoServices_inherits(UserInfoServices, e), UserInfoServices.prototype.getInfoByEpic = function getInfoByEpic() {
                    this.store.dispatch(Qe.getUserInfo())
                }, UserInfoServices
            }(u.Service), it = function userInfoServices_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(nt.prototype, "store", [ot], {enumerable: !0, initializer: null}), rt = nt)) || rt),
            Ot = function formatDecimals(e, t) {
                var o = new RegExp("(\\.\\d{" + t + "})\\d*$");
                return function formatDotZero(e) {
                    var t = e.replace(/(\.\d+)0+$/, "$1");
                    return parseInt(e, 10) == e && (t = parseInt(e, 10)), t
                }(("" + e).replace(o, "$1"))
            }, Et = function formatTime(e) {
                var t = void 0, o = e || 0;
                return o > 0 ? {
                    Y: (t = new Date(1e3 * o)).getFullYear(),
                    M: t.getMonth() + 1,
                    d: t.getDate(),
                    h: t.getHours() > 9 ? t.getHours() : "0" + t.getHours(),
                    m: t.getMinutes() > 9 ? t.getMinutes() : "0" + t.getMinutes()
                } : {Y: "--", M: "--", d: "--", h: "--", m: "--"}
            }, Ct = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function commonDataServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Ct(t)) && "function" !== typeof t ? e : t
        }

        function commonDataServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Ct(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function commonDataServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Nt, Pt, jt, Tt, kt, zt, It, Rt = (gt = (0, n.a.Service)(i.DataCenter.common), Dt = function (e) {
                function CommonDataServices() {
                    var t, o;
                    !function commonDataServices_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, CommonDataServices);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = commonDataServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function commonDataServices_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(o, "common", St, o), commonDataServices_possibleConstructorReturn(o, t)
                }

                return commonDataServices_inherits(CommonDataServices, e), CommonDataServices.prototype.getIdentity = function getIdentity() {
                    return this.common.get("GLOBAL_USER_IDENTITY")
                }, CommonDataServices.prototype.getUserExp = function getUserExp() {
                    return this.common.get("GLOBAL_USER_EXP")
                }, CommonDataServices.prototype.getTotalGold = function getTotalGold() {
                    return this.common.get("GLOBAL_USER_TOTAL_GOLD")
                }, CommonDataServices.prototype.getSilver = function getSilver() {
                    return this.common.get("GLOBAL_USER_SILVER")
                }, CommonDataServices.prototype.getNobelInfo = function getNobelInfo() {
                    return this.common.get("GLOBAL_USER_NOBEL_INFO")
                }, CommonDataServices.prototype.updateUserExp = function updateUserExp(e) {
                    var t = e.data;
                    this.common.push("GLOBAL_USER_EXP", {data: t})
                }, CommonDataServices.prototype.updateSilver = function updateSilver(e) {
                    var t = e.data;
                    this.common.push("GLOBAL_USER_SILVER", {data: t})
                }, CommonDataServices.prototype.updateTotalGold = function updateTotalGold(e) {
                    var t = e.data, o = Ot(t / 100, 2);
                    this.common.push("GLOBAL_USER_TOTAL_GOLD", {data: o})
                }, CommonDataServices.prototype.updateIdentity = function updateIdentity(e) {
                    var t = e.data;
                    this.common.push("GLOBAL_USER_IDENTITY", {data: t})
                }, CommonDataServices.prototype.updateNobelInfo = function updateNobelInfo(e) {
                    var t = e.data;
                    this.common.push("GLOBAL_USER_NOBEL_INFO", {data: t})
                }, CommonDataServices
            }(u.Service), St = function commonDataServices_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(Dt.prototype, "common", [gt], {enumerable: !0, initializer: null}), Dt),
            Mt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function userInfoEpics_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function userInfoEpics_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var At = n.a.Service, Lt = function handleNobleData(e) {
            var t = e.hs, o = e.nbl_spl, r = void 0 === o ? {} : o, n = e.gold, i = void 0 === n ? {} : n, a = r.pn,
                l = void 0 === a ? {} : a, c = r.nr, s = void 0 === c ? {} : c, u = r.enl, p = void 0 === u ? 0 : u,
                f = r.enpl, b = void 0 === f ? 0 : f, d = t || 0, y = r.lv || 0, m = l.pl || 0, h = r.et || 0,
                v = i.ngets || 0, _ = i.ngb || 0, g = r.trial || 0, D = l.conf_pn || r.conf || {},
                S = (m > 0 ? m : 0) || (y > 0 ? y : 0), w = (new Date).getTime() / 1e3,
                O = h > 0 ? Math.ceil((h - w) / 3600 / 24) : 0, E = h > 0 ? new Date(1e3 * h) : 0,
                C = E ? E.getFullYear() + "-" + (E.getMonth() + 1) + "-" + E.getDate() : "", N = !y && m, P = +p || 0,
                j = +b || 0, T = D.nbn, k = (D.symbol || {}).web_pic2;
            return {
                hasHiddenRights: s.rmh > 0 ? 1 : 0,
                hasNobleBarrageRights: s.ic > 0 ? 1 : 0,
                hasLinkMikeRights: s.mic > 0 ? 1 : 0,
                hasCustomGiftRights: s.fg > 0 ? 1 : 0,
                hasDefenseMuteRights: s.bp > 0 ? 1 : 0,
                isHidden: d > 0 ? 1 : 0,
                isTrial: g,
                nobleLevel: y,
                nobleProtectLevel: m,
                levelToShow4Rights: S,
                nobleEndSeconds: h,
                nobleGoldEndSeconds: v,
                isInProtected: N,
                lowProtectNobleLevel: j,
                lowNobleLevel: P,
                nobleGold: Ot(_ / 100, 2),
                nobleName: T,
                nobleIcon: k,
                expireDate: C,
                daysLeft: O
            }
        }, Bt = (Nt = At(i.DataCenter.common), Pt = At(Rt), jt = At(wt), Tt = function () {
            function UserPaneEpics() {
                !function userInfoEpics_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, UserPaneEpics), userInfoEpics_initDefineProp(this, "common", kt, this), userInfoEpics_initDefineProp(this, "commonDataServices", zt, this), userInfoEpics_initDefineProp(this, "userInfoService", It, this)
            }

            return UserPaneEpics.prototype.getInfo = function getInfo(e) {
                var t = this;
                return e.ofType("GET_USER_INFO").pipe(Object(l.switchMap)(function () {
                    return i.httpClient.get(i.Empty, "/lapi/member/api/getInfo", {client_type: 0, d: +new Date})
                }), Object(a.map)(function (e) {
                    if (0 === +e.error && e.msg) {
                        var o = vt.fromJSON(e.msg), r = e.msg.gold, n = "undefined" === typeof r ? "undefined" : Mt(r),
                            i = "string" === n || "number" === n ? {totalGold: r} : {
                                totalGold: r.gold,
                                nobilityIsFreeze: r.ingf,
                                nobleGold: r.ngb,
                                nobilityEffectiveTime: r.ngbts,
                                nobilityExpirationTime: r.ngets
                            };
                        t.commonDataServices.updateIdentity({data: o.authenticationData}), t.commonDataServices.updateUserExp({data: o.totalExperience}), t.commonDataServices.updateTotalGold({data: i.totalGold}), t.commonDataServices.updateSilver({data: o.silver});
                        var a = e.msg || {}, l = Lt(a);
                        t.commonDataServices.updateNobelInfo({data: l})
                    }
                    return Qe.defaultAction()
                }), Object(c.catchError)(function (e) {
                    return Object(s.of)({type: "error", payload: e})
                }))
            }, UserPaneEpics
        }(), kt = userInfoEpics_applyDecoratedDescriptor(Tt.prototype, "common", [Nt], {
            enumerable: !0,
            initializer: null
        }), zt = userInfoEpics_applyDecoratedDescriptor(Tt.prototype, "commonDataServices", [Pt], {
            enumerable: !0,
            initializer: null
        }), It = userInfoEpics_applyDecoratedDescriptor(Tt.prototype, "userInfoService", [jt], {
            enumerable: !0,
            initializer: null
        }), Tt), xt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function categoryActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : xt(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function categoryActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Ft, Ht, Ut, Gt, Wt, Yt, $t, qt, Vt, Zt, Kt, Jt, Xt = "CATEGORY_GET", Qt = "CATEGORY_RECEIVE",
            eo = function (e) {
                function CategoryAction() {
                    return function categoryActions_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, CategoryAction), function categoryActions_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : xt(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return categoryActions_inherits(CategoryAction, e), CategoryAction.getCategory = function getCategory() {
                    return {type: Xt}
                }, CategoryAction.receiveCategory = function receiveCategory(e) {
                    return {type: Qt, payload: e}
                }, CategoryAction
            }(u.Action), to = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function categoryDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function categoryDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function categoryDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : to(t)) && "function" !== typeof t ? e : t
        }

        function categoryDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : to(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function categoryDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function categoryDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var oo, ro, no, io, ao = i.basicTypes.string, lo = i.basicTypes.number, co = i.basicTypes.array,
            so = i.basicTypes.oneOf,
            uo = (qt = co((Ft = (0, i.basicTypes.mapping)({tid: "tag_id"}), Ht = so(ao, lo), Object(et.log)(Ut = Ft((Gt = function (e) {
                function Category() {
                    var t, o;
                    categoryDto_classCallCheck(this, Category);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = categoryDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), categoryDto_initDefineProp(o, "name", Wt, o), categoryDto_initDefineProp(o, "url", Yt, o), categoryDto_initDefineProp(o, "tid", $t, o), categoryDto_possibleConstructorReturn(o, t)
                }

                return categoryDto_inherits(Category, e), Category
            }(i.EntityDto), Wt = categoryDto_applyDecoratedDescriptor(Gt.prototype, "name", [ao], {
                enumerable: !0,
                initializer: null
            }), Yt = categoryDto_applyDecoratedDescriptor(Gt.prototype, "url", [ao], {
                enumerable: !0,
                initializer: null
            }), $t = categoryDto_applyDecoratedDescriptor(Gt.prototype, "tid", [Ht], {
                enumerable: !0,
                initializer: null
            }), Ut = Gt)) || Ut) || Ut)), Object(et.log)((Zt = function (e) {
                function CategoryDto() {
                    var t, o;
                    categoryDto_classCallCheck(this, CategoryDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = categoryDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), categoryDto_initDefineProp(o, "name", Kt, o), categoryDto_initDefineProp(o, "list", Jt, o), categoryDto_possibleConstructorReturn(o, t)
                }

                return categoryDto_inherits(CategoryDto, e), CategoryDto
            }(i.EntityDto), Kt = categoryDto_applyDecoratedDescriptor(Zt.prototype, "name", [ao], {
                enumerable: !0,
                initializer: null
            }), Jt = categoryDto_applyDecoratedDescriptor(Zt.prototype, "list", [qt], {
                enumerable: !0,
                initializer: null
            }), Vt = Zt)) || Vt),
            po = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function categoryServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : po(t)) && "function" !== typeof t ? e : t
        }

        function categoryServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : po(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function categoryServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var fo, bo, yo, mo = (oo = (0, n.a.Store)(), Object(et.log)((no = function (e) {
            function CategoryServices() {
                var t, o;
                !function categoryServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, CategoryServices);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = categoryServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function categoryServices_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "store", io, o), categoryServices_possibleConstructorReturn(o, t)
            }

            return categoryServices_inherits(CategoryServices, e), CategoryServices.prototype.getCategoryByEpic = function getCategoryByEpic() {
                this.store.dispatch(eo.getCategory())
            }, CategoryServices.prototype.getCategory = function getCategory() {
                return i.httpClient.get(uo, "/ajax_api_cache/header/cate")
            }, CategoryServices
        }(u.Service), io = function categoryServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(no.prototype, "store", [oo], {enumerable: !0, initializer: null}), ro = no)) || ro);
        var ho = (fo = (0, n.a.Service)(mo), bo = function () {
                function CategoryEpics() {
                    !function categoryEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, CategoryEpics), function categoryEpics_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(this, "CategoryService", yo, this)
                }

                return CategoryEpics.prototype.getCategory = function getCategory(e) {
                    return e.ofType(Xt).pipe(Object(l.switchMap)(this.CategoryService.getCategory), Object(a.map)(eo.receiveCategory), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, CategoryEpics
            }(), yo = function categoryEpics_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(bo.prototype, "CategoryService", [fo], {enumerable: !0, initializer: null}), bo),
            vo = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function gameActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : vo(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function gameActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var _o, go, Do, So, wo, Oo, Eo, Co, No, Po, jo, To, ko, zo, Io, Ro, Mo, Ao = "GAME_GET", Lo = "GAME_RECEIVE",
            Bo = function (e) {
                function GameAction() {
                    return function gameActions_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, GameAction), function gameActions_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : vo(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return gameActions_inherits(GameAction, e), GameAction.getGame = function getGame() {
                    return {type: Ao}
                }, GameAction.receiveGame = function receiveGame(e) {
                    return {type: Lo, payload: e}
                }, GameAction
            }(u.Action), xo = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function gameDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function gameDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function gameDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : xo(t)) && "function" !== typeof t ? e : t
        }

        function gameDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : xo(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function gameDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function gameDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Fo, Ho, Uo, Go, Wo = i.basicTypes.string, Yo = i.basicTypes.number, $o = i.basicTypes.optional,
            qo = i.basicTypes.array, Vo = i.basicTypes.mapping, Zo = (_o = Vo({
                icon: "game_icon",
                hasGift: "has_gift",
                hasTask: "has_task",
                description: "memo"
            }), Object(et.log)(go = _o((Do = function (e) {
                function Game() {
                    var t, o;
                    gameDto_classCallCheck(this, Game);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = gameDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), gameDto_initDefineProp(o, "id", So, o), gameDto_initDefineProp(o, "link", wo, o), gameDto_initDefineProp(o, "name", Oo, o), gameDto_initDefineProp(o, "icon", Eo, o), gameDto_initDefineProp(o, "hasGift", Co, o), gameDto_initDefineProp(o, "hasTask", No, o), gameDto_initDefineProp(o, "description", Po, o), gameDto_possibleConstructorReturn(o, t)
                }

                return gameDto_inherits(Game, e), Game
            }(i.EntityDto), So = gameDto_applyDecoratedDescriptor(Do.prototype, "id", [Yo], {
                enumerable: !0,
                initializer: null
            }), wo = gameDto_applyDecoratedDescriptor(Do.prototype, "link", [Wo], {
                enumerable: !0,
                initializer: null
            }), Oo = gameDto_applyDecoratedDescriptor(Do.prototype, "name", [Wo], {
                enumerable: !0,
                initializer: null
            }), Eo = gameDto_applyDecoratedDescriptor(Do.prototype, "icon", [Wo], {
                enumerable: !0,
                initializer: null
            }), Co = gameDto_applyDecoratedDescriptor(Do.prototype, "hasGift", [$o, Yo], {
                enumerable: !0,
                initializer: null
            }), No = gameDto_applyDecoratedDescriptor(Do.prototype, "hasTask", [$o, Yo], {
                enumerable: !0,
                initializer: null
            }), Po = gameDto_applyDecoratedDescriptor(Do.prototype, "description", [$o, Wo], {
                enumerable: !0,
                initializer: null
            }), go = Do)) || go) || go), Ko = (jo = Vo({
                web: "page_game",
                mobile: "mobile_game"
            }), To = qo(Zo), ko = qo(Zo), Object(et.log)(zo = jo((Io = function (e) {
                function GameDto() {
                    var t, o;
                    gameDto_classCallCheck(this, GameDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = gameDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), gameDto_initDefineProp(o, "web", Ro, o), gameDto_initDefineProp(o, "mobile", Mo, o), gameDto_possibleConstructorReturn(o, t)
                }

                return gameDto_inherits(GameDto, e), GameDto
            }(i.EntityDto), Ro = gameDto_applyDecoratedDescriptor(Io.prototype, "web", [$o, To], {
                enumerable: !0,
                initializer: null
            }), Mo = gameDto_applyDecoratedDescriptor(Io.prototype, "mobile", [$o, ko], {
                enumerable: !0,
                initializer: null
            }), zo = Io)) || zo) || zo),
            Jo = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function gameServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Jo(t)) && "function" !== typeof t ? e : t
        }

        function gameServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Jo(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function gameServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Xo, Qo, er, tr = (Fo = (0, n.a.Store)(), Object(et.log)((Uo = function (e) {
            function GameServices() {
                var t, o;
                !function gameServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, GameServices);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = gameServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function gameServices_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "store", Go, o), gameServices_possibleConstructorReturn(o, t)
            }

            return gameServices_inherits(GameServices, e), GameServices.prototype.getGameByEpic = function getGameByEpic() {
                this.store.dispatch(Bo.getGame())
            }, GameServices.prototype.getGame = function getGame() {
                return i.httpClient.get(Ko, "/ztCache/mobilegame/getHoverPromo")
            }, GameServices
        }(u.Service), Go = function gameServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(Uo.prototype, "store", [Fo], {enumerable: !0, initializer: null}), Ho = Uo)) || Ho);
        var or = (Xo = (0, n.a.Service)(tr), Qo = function () {
                function GameEpics() {
                    !function gameEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, GameEpics), function gameEpics_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(this, "GameService", er, this)
                }

                return GameEpics.prototype.getGame = function getGame(e) {
                    return e.ofType(Ao).pipe(Object(l.switchMap)(this.GameService.getGame), Object(a.map)(Bo.receiveGame), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, GameEpics
            }(), er = function gameEpics_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(Qo.prototype, "GameService", [Xo], {enumerable: !0, initializer: null}), Qo), rr = o("13c85"),
            nr = o("8dd4e"), ir = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function searchActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : ir(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function searchActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var ar, lr, cr, sr, ur, pr, fr, br, dr, yr, mr, hr, vr, _r, gr, Dr, Sr, wr, Or, Er, Cr, Pr, jr, Tr, kr, zr, Ir,
            Rr, Mr, Ar, Lr, Br, xr, Fr, Hr, Ur = "RECEIVE_HOT_LIST", Gr = "RECEIVE_RECOMMEND_LIST", Wr = function (e) {
                function SearchAction() {
                    return function searchActions_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, SearchAction), function searchActions_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : ir(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return searchActions_inherits(SearchAction, e), SearchAction.getRecommendList = function getRecommendList(e) {
                    return {type: "SEARCH_RECOMMEND", payload: e}
                }, SearchAction.getHotList = function getHotList(e) {
                    return {type: "SEARCH_HOT", payload: e}
                }, SearchAction.receiveHotList = function receiveHotList(e) {
                    return {type: Ur, payload: e}
                }, SearchAction.receiveRecommendList = function receiveRecommendList(e) {
                    return {type: Gr, payload: e}
                }, SearchAction
            }(u.Action), Yr = o("9b0dc"), $r = o.n(Yr),
            qr = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function SearchDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function SearchDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function SearchDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : qr(t)) && "function" !== typeof t ? e : t
        }

        function SearchDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : qr(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function SearchDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function SearchDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Vr, Zr, Kr, Jr, Xr = i.basicTypes.string, Qr = i.basicTypes.number, en = i.basicTypes.array,
            tn = i.basicTypes.oneOf, on = i.basicTypes.optional, rn = i.basicTypes.mapping,
            nn = (ar = rn({kw: "sk", link: "url"}), lr = tn(Xr, Qr), Object(et.log)(cr = ar((sr = function (e) {
                function HotListDto() {
                    var t, o;
                    SearchDto_classCallCheck(this, HotListDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = SearchDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), SearchDto_initDefineProp(o, "kw", ur, o), SearchDto_initDefineProp(o, "link", pr, o), SearchDto_initDefineProp(o, "type", fr, o), SearchDto_initDefineProp(o, "isAd", br, o), SearchDto_possibleConstructorReturn(o, t)
                }

                return SearchDto_inherits(HotListDto, e), HotListDto
            }(i.EntityDto), ur = SearchDto_applyDecoratedDescriptor(sr.prototype, "kw", [Xr], {
                enumerable: !0,
                initializer: null
            }), pr = SearchDto_applyDecoratedDescriptor(sr.prototype, "link", [on, Xr], {
                enumerable: !0,
                initializer: null
            }), fr = SearchDto_applyDecoratedDescriptor(sr.prototype, "type", [on, Qr], {
                enumerable: !0,
                initializer: null
            }), br = SearchDto_applyDecoratedDescriptor(sr.prototype, "isAd", [lr], {
                enumerable: !0,
                initializer: null
            }), cr = sr)) || cr) || cr), an = (dr = tn(Xr, Qr), yr = tn(Xr, Qr), mr = tn(Xr, Qr), hr = function (e) {
                function roomList() {
                    var t, o;
                    SearchDto_classCallCheck(this, roomList);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = SearchDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), SearchDto_initDefineProp(o, "kw", vr, o), SearchDto_initDefineProp(o, "nickName", _r, o), SearchDto_initDefineProp(o, "avatar", gr, o), SearchDto_initDefineProp(o, "isLive", Dr, o), SearchDto_initDefineProp(o, "cateName", Sr, o), SearchDto_initDefineProp(o, "rid", wr, o), SearchDto_initDefineProp(o, "cid", Or, o), SearchDto_initDefineProp(o, "vipId", Er, o), SearchDto_possibleConstructorReturn(o, t)
                }

                return SearchDto_inherits(roomList, e), roomList
            }(i.EntityDto), vr = SearchDto_applyDecoratedDescriptor(hr.prototype, "kw", [Xr], {
                enumerable: !0,
                initializer: null
            }), _r = SearchDto_applyDecoratedDescriptor(hr.prototype, "nickName", [Xr], {
                enumerable: !0,
                initializer: null
            }), gr = SearchDto_applyDecoratedDescriptor(hr.prototype, "avatar", [Xr], {
                enumerable: !0,
                initializer: null
            }), Dr = SearchDto_applyDecoratedDescriptor(hr.prototype, "isLive", [Qr], {
                enumerable: !0,
                initializer: null
            }), Sr = SearchDto_applyDecoratedDescriptor(hr.prototype, "cateName", [Xr], {
                enumerable: !0,
                initializer: null
            }), wr = SearchDto_applyDecoratedDescriptor(hr.prototype, "rid", [dr], {
                enumerable: !0,
                initializer: null
            }), Or = SearchDto_applyDecoratedDescriptor(hr.prototype, "cid", [yr], {
                enumerable: !0,
                initializer: null
            }), Er = SearchDto_applyDecoratedDescriptor(hr.prototype, "vipId", [mr], {
                enumerable: !0,
                initializer: null
            }), hr), ln = (Cr = tn(Xr, Qr), Pr = function (e) {
                function cateList() {
                    var t, o;
                    SearchDto_classCallCheck(this, cateList);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = SearchDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), SearchDto_initDefineProp(o, "kw", jr, o), SearchDto_initDefineProp(o, "icon", Tr, o), SearchDto_initDefineProp(o, "name", kr, o), SearchDto_initDefineProp(o, "showNum", zr, o), SearchDto_initDefineProp(o, "shortName", Ir, o), SearchDto_initDefineProp(o, "cid", Rr, o), SearchDto_possibleConstructorReturn(o, t)
                }

                return SearchDto_inherits(cateList, e), cateList
            }(i.EntityDto), jr = SearchDto_applyDecoratedDescriptor(Pr.prototype, "kw", [Xr], {
                enumerable: !0,
                initializer: null
            }), Tr = SearchDto_applyDecoratedDescriptor(Pr.prototype, "icon", [Xr], {
                enumerable: !0,
                initializer: null
            }), kr = SearchDto_applyDecoratedDescriptor(Pr.prototype, "name", [Xr], {
                enumerable: !0,
                initializer: null
            }), zr = SearchDto_applyDecoratedDescriptor(Pr.prototype, "showNum", [Qr], {
                enumerable: !0,
                initializer: null
            }), Ir = SearchDto_applyDecoratedDescriptor(Pr.prototype, "shortName", [Xr], {
                enumerable: !0,
                initializer: null
            }), Rr = SearchDto_applyDecoratedDescriptor(Pr.prototype, "cid", [Cr], {
                enumerable: !0,
                initializer: null
            }), Pr), cn = (Mr = rn({
                roomList: "roomResult",
                cateList: "cateResult"
            }), Ar = en(an), Lr = en(ln), Object(et.log)(Br = Mr((xr = function (e) {
                function RecommendListDto() {
                    var t, o;
                    SearchDto_classCallCheck(this, RecommendListDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = SearchDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), SearchDto_initDefineProp(o, "roomList", Fr, o), SearchDto_initDefineProp(o, "cateList", Hr, o), SearchDto_possibleConstructorReturn(o, t)
                }

                return SearchDto_inherits(RecommendListDto, e), RecommendListDto
            }(i.EntityDto), Fr = SearchDto_applyDecoratedDescriptor(xr.prototype, "roomList", [on, Ar], {
                enumerable: !0,
                initializer: null
            }), Hr = SearchDto_applyDecoratedDescriptor(xr.prototype, "cateList", [on, Lr], {
                enumerable: !0,
                initializer: null
            }), Br = xr)) || Br) || Br), sn = o("db47a"), un = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            }, pn = function dysHandle(e) {
                return function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = t.com,
                        r = void 0 === o ? {} : o, n = t.ext, i = void 0 === n ? {} : n;
                    if (e) {
                        var a = e.split("."), l = a[0], c = void 0 === l ? "" : l, s = a[1], u = void 0 === s ? 1 : s,
                            p = a[2], f = void 0 === p ? 1 : p;
                        Object(sn.dysub2)(un({action_code: c, event_id: u, type: f}, r, i && {ext: i}))
                    }
                }
            }, fn = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, bn = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function searchServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : fn(t)) && "function" !== typeof t ? e : t
        }

        function searchServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : fn(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function searchServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var dn = function setLocalStorage(e, t, o) {
            return i.DataCenter.localStorage.set(e, t, o)
        }, yn = function getLocalStorage(e) {
            return i.DataCenter.localStorage.get(e)
        }, mn = {}, hn = void 0;
        var vn, _n, gn, Dn, Sn, wn = (Vr = (0, n.a.Store)(), Object(et.log)((Kr = function (e) {
            function SearchServices() {
                var t, o;
                !function searchServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, SearchServices);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = searchServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function searchServices_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "store", Jr, o), searchServices_possibleConstructorReturn(o, t)
            }

            return searchServices_inherits(SearchServices, e), SearchServices.prototype.getKeyword = function getKeyword() {
                if (this.keyword) return this.keyword;
                var e = window.location.href.split("?")[1], t = $r.a.parse(e || "").kw, o = void 0 === t ? "" : t;
                return this.keyword = o, this.keyword
            }, SearchServices.prototype.getRecommendByEpic = function getRecommendByEpic(e) {
                this.store.dispatch(Wr.getRecommendList(e))
            }, SearchServices.prototype.getHotListByEpic = function getHotListByEpic() {
                this.store.dispatch(Wr.getHotList())
            }, SearchServices.prototype.getRecommendFromBackend = function getRecommendFromBackend(e) {
                var t = e.payload, o = void 0 === t ? "" : t;
                return i.httpClient.get(cn, "/japi/search/api/getSearchRec", {kw: o})
            }, SearchServices.prototype.getHotListFromBackend = function getHotListFromBackend() {
                return i.httpClient.get(nn, "/japi/search/api/getHotList")
            }, SearchServices.prototype.setLocalHotList = function setLocalHotList(e) {
                dn("search-source-hotest", e, 60)
            }, SearchServices.prototype.getLocalHotList = function getLocalHotList() {
                return yn("search-source-hotest")
            }, SearchServices.prototype.setLocalOwnList = function setLocalOwnList(e) {
                dn("search-source-own", e)
            }, SearchServices.prototype.getLocalOwnList = function getLocalOwnList() {
                return yn("search-source-own")
            }, SearchServices.prototype.getSearchSid = function getSearchSid() {
                if (!hn) {
                    var e = ("" + +new Date).slice(-8), t = i.DataCenter.global.get("USER_INFO.uid"),
                        o = function getRandomWords(e) {
                            for (var t = []; t.length < e;) {
                                var o = Math.floor(62 * Math.random());
                                t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[o])
                            }
                            return t.join("")
                        }(6);
                    return hn = [t, e, o].join("-")
                }
                return hn
            }, SearchServices.prototype.getFirstClick = function getFirstClick(e) {
                return mn[e] ? 0 : (mn[e] = 1, 1)
            }, SearchServices.prototype.dySubV2 = function dySubV2(e, t) {
                var o = this;
                return function () {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = r.com,
                        i = void 0 === n ? {} : n, a = r.ext, l = void 0 === a ? {} : a;
                    pn(e)({com: i, ext: bn({}, l, t && {_sid: o.getSearchSid()})})
                }
            }, SearchServices
        }(u.Service), Jr = function searchServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(Kr.prototype, "store", [Vr], {enumerable: !0, initializer: null}), Zr = Kr)) || Zr);

        function searchEpics_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function searchEpics_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var On = n.a.Service, En = (vn = On(wn), _n = On(i.DataCenter.common), gn = function () {
                function SearchEpics() {
                    !function searchEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, SearchEpics), searchEpics_initDefineProp(this, "searchService", Dn, this), searchEpics_initDefineProp(this, "common", Sn, this)
                }

                return SearchEpics.prototype.getRecommendList = function getRecommendList(e) {
                    var t = this;
                    return e.ofType("SEARCH_RECOMMEND").pipe(Object(rr.debounce)(function () {
                        return Object(nr.timer)(350)
                    }), Object(l.switchMap)(function (e) {
                        return t.searchService.getRecommendFromBackend(e)
                    }), Object(a.map)(function () {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).data;
                        return void 0 === e ? {} : e
                    }), Object(a.map)(Wr.receiveRecommendList), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, SearchEpics.prototype.getHotList = function getHotList(e) {
                    var t = this;
                    return e.ofType("SEARCH_HOT").pipe(Object(l.switchMap)(this.searchService.getHotListFromBackend), Object(a.map)(function () {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).data,
                            o = void 0 === e ? [] : e;
                        return t.searchService.setLocalHotList(o), t.common.push("SearchData", {hotList: o}), o
                    }), Object(a.map)(Wr.receiveHotList), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, SearchEpics
            }(), Dn = searchEpics_applyDecoratedDescriptor(gn.prototype, "searchService", [vn], {
                enumerable: !0,
                initializer: null
            }), Sn = searchEpics_applyDecoratedDescriptor(gn.prototype, "common", [_n], {
                enumerable: !0,
                initializer: null
            }), gn), Cn = o("c8aea"),
            Nn = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function historyActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Nn(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function historyActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var jn, Tn, kn, zn, In, Rn, Mn, An, Ln, Bn, xn, Fn, Hn, Un = "HISTORY_RECEIVE", Gn = function (e) {
            function HistoryAction() {
                return function historyActions_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, HistoryAction), function historyActions_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : Nn(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return historyActions_inherits(HistoryAction, e), HistoryAction.getHistory = function getHistory() {
                return {type: "HISTORY_GET"}
            }, HistoryAction.receiveHistory = function receiveHistory(e) {
                return {type: Un, payload: e}
            }, HistoryAction
        }(u.Action), Wn = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function HistoryDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function HistoryDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Wn(t)) && "function" !== typeof t ? e : t
        }

        function HistoryDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Wn(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function HistoryDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function HistoryDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Yn, $n, qn, Vn, Zn = i.basicTypes.string, Kn = i.basicTypes.number, Jn = i.basicTypes.mapping,
            Xn = i.basicTypes.oneOf, Qn = i.basicTypes.optional, ei = (jn = Jn({
                roomId: "rid",
                roomTitle: "roomName",
                liveStatus: "isLive",
                nickname: "nickName",
                roomCover: "roomSrc"
            }), Tn = Xn(Zn, Kn), kn = Xn(Zn, Kn), zn = Xn(Zn, Kn), Object(et.log)(In = jn((Rn = function (e) {
                function HistoryDto() {
                    var t, o;
                    !function HistoryDto_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, HistoryDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = HistoryDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), HistoryDto_initDefineProp(o, "roomId", Mn, o), HistoryDto_initDefineProp(o, "liveStatus", An, o), HistoryDto_initDefineProp(o, "roomTitle", Ln, o), HistoryDto_initDefineProp(o, "nickname", Bn, o), HistoryDto_initDefineProp(o, "roomCover", xn, o), HistoryDto_initDefineProp(o, "interval", Fn, o), HistoryDto_initDefineProp(o, "vipId", Hn, o), HistoryDto_possibleConstructorReturn(o, t)
                }

                return HistoryDto_inherits(HistoryDto, e), HistoryDto
            }(i.EntityDto), Mn = HistoryDto_applyDecoratedDescriptor(Rn.prototype, "roomId", [Tn], {
                enumerable: !0,
                initializer: null
            }), An = HistoryDto_applyDecoratedDescriptor(Rn.prototype, "liveStatus", [kn], {
                enumerable: !0,
                initializer: null
            }), Ln = HistoryDto_applyDecoratedDescriptor(Rn.prototype, "roomTitle", [Zn], {
                enumerable: !0,
                initializer: null
            }), Bn = HistoryDto_applyDecoratedDescriptor(Rn.prototype, "nickname", [Zn], {
                enumerable: !0,
                initializer: null
            }), xn = HistoryDto_applyDecoratedDescriptor(Rn.prototype, "roomCover", [Zn], {
                enumerable: !0,
                initializer: null
            }), Fn = HistoryDto_applyDecoratedDescriptor(Rn.prototype, "interval", [Kn], {
                enumerable: !0,
                initializer: null
            }), Hn = HistoryDto_applyDecoratedDescriptor(Rn.prototype, "vipId", [Qn, zn], {
                enumerable: !0,
                initializer: null
            }), In = Rn)) || In) || In),
            ti = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function historyServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : ti(t)) && "function" !== typeof t ? e : t
        }

        function historyServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : ti(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function historyServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var oi, ri, ni, ii = (Yn = (0, n.a.Store)(), Object(et.log)((qn = function (e) {
            function HistoryServices() {
                var t, o;
                !function historyServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, HistoryServices);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = historyServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function historyServices_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "store", Vn, o), historyServices_possibleConstructorReturn(o, t)
            }

            return historyServices_inherits(HistoryServices, e), HistoryServices.prototype.getHistoryByEpic = function getHistoryByEpic() {
                this.store.dispatch(Gn.getHistory())
            }, HistoryServices.prototype.getHistory = function getHistory() {
                return i.httpClient.get(ei, "/japi/watchHistory/apinc/getHistoryList", {num: 5})
            }, HistoryServices
        }(u.Service), Vn = function historyServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(qn.prototype, "store", [Yn], {enumerable: !0, initializer: null}), $n = qn)) || $n);
        var ai = (oi = (0, n.a.Service)(ii), ri = function () {
                function HistoryEpics() {
                    !function historyEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, HistoryEpics), function historyEpics_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(this, "historyService", ni, this)
                }

                return HistoryEpics.prototype.findCount = function findCount(e) {
                    return e.ofType("HISTORY_GET").pipe(Object(Cn.throttleTime)(2e4), Object(l.switchMap)(this.historyService.getHistory), Object(a.map)(Gn.receiveHistory), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, HistoryEpics
            }(), ni = function historyEpics_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(ri.prototype, "historyService", [oi], {enumerable: !0, initializer: null}), ri),
            li = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function followActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : li(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function followActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var ci, si, ui, pi, fi, bi, di, yi, mi, hi, vi, _i, gi, Di, Si, wi, Oi, Ei, Ci = "FOLLOW_RECEIVE",
            Ni = function (e) {
                function FollowAction() {
                    return function followActions_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, FollowAction), function followActions_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : li(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return followActions_inherits(FollowAction, e), FollowAction.getFollow = function getFollow() {
                    return {type: "FOLLOW_GET"}
                }, FollowAction.receiveFollow = function receiveFollow(e) {
                    return {type: Ci, payload: e}
                }, FollowAction
            }(u.Action), Pi = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function FollowDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function FollowDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function FollowDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Pi(t)) && "function" !== typeof t ? e : t
        }

        function FollowDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Pi(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function FollowDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function FollowDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var ji, Ti, ki, zi, Ii = i.basicTypes.string, Ri = i.basicTypes.number, Mi = i.basicTypes.array,
            Ai = i.basicTypes.mapping, Li = i.basicTypes.optional, Bi = i.basicTypes.oneOf, xi = (ci = Ai({
                roomId: "room_id",
                roomName: "room_name",
                showTime: "show_time",
                avatar: "avatar_small"
            }), si = Bi(Ii, Ri), ui = Bi(Ii, Ri), pi = Bi(Ii, Ri), Object(et.log)(fi = ci((bi = function (e) {
                function List() {
                    var t, o;
                    FollowDto_classCallCheck(this, List);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = FollowDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), FollowDto_initDefineProp(o, "roomId", di, o), FollowDto_initDefineProp(o, "roomName", yi, o), FollowDto_initDefineProp(o, "showTime", mi, o), FollowDto_initDefineProp(o, "nickname", hi, o), FollowDto_initDefineProp(o, "avatar", vi, o), FollowDto_initDefineProp(o, "online", _i, o), FollowDto_possibleConstructorReturn(o, t)
                }

                return FollowDto_inherits(List, e), List
            }(i.EntityDto), di = FollowDto_applyDecoratedDescriptor(bi.prototype, "roomId", [si], {
                enumerable: !0,
                initializer: null
            }), yi = FollowDto_applyDecoratedDescriptor(bi.prototype, "roomName", [Ii], {
                enumerable: !0,
                initializer: null
            }), mi = FollowDto_applyDecoratedDescriptor(bi.prototype, "showTime", [ui], {
                enumerable: !0,
                initializer: null
            }), hi = FollowDto_applyDecoratedDescriptor(bi.prototype, "nickname", [Ii], {
                enumerable: !0,
                initializer: null
            }), vi = FollowDto_applyDecoratedDescriptor(bi.prototype, "avatar", [Li, Ii], {
                enumerable: !0,
                initializer: null
            }), _i = FollowDto_applyDecoratedDescriptor(bi.prototype, "online", [pi], {
                enumerable: !0,
                initializer: null
            }), fi = bi)) || fi) || fi), Fi = (gi = Ai({
                nowTime: "nowtime",
                roomList: "room_list"
            }), Di = Mi(xi), Object(et.log)(Si = gi((wi = function (e) {
                function FollowDto() {
                    var t, o;
                    FollowDto_classCallCheck(this, FollowDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = FollowDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), FollowDto_initDefineProp(o, "nowTime", Oi, o), FollowDto_initDefineProp(o, "roomList", Ei, o), FollowDto_possibleConstructorReturn(o, t)
                }

                return FollowDto_inherits(FollowDto, e), FollowDto
            }(i.EntityDto), Oi = FollowDto_applyDecoratedDescriptor(wi.prototype, "nowTime", [Ri], {
                enumerable: !0,
                initializer: null
            }), Ei = FollowDto_applyDecoratedDescriptor(wi.prototype, "roomList", [Di], {
                enumerable: !0,
                initializer: null
            }), Si = wi)) || Si) || Si),
            Hi = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function followServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Hi(t)) && "function" !== typeof t ? e : t
        }

        function followServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Hi(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function followServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Ui, Gi, Wi, Yi = (ji = (0, n.a.Store)(), Object(et.log)((ki = function (e) {
            function FollowServices() {
                var t, o;
                !function followServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, FollowServices);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = followServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function followServices_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "store", zi, o), followServices_possibleConstructorReturn(o, t)
            }

            return followServices_inherits(FollowServices, e), FollowServices.prototype.getFollowByEpic = function getFollowByEpic() {
                this.store.dispatch(Ni.getFollow())
            }, FollowServices.prototype.getFollow = function getFollow() {
                return h.a.check() ? i.httpClient.get(Fi, "/wgapi/livenc/home/followList") : Object(s.of)({data: {}})
            }, FollowServices
        }(u.Service), zi = function followServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(ki.prototype, "store", [ji], {enumerable: !0, initializer: null}), Ti = ki)) || Ti);
        var $i = (Ui = (0, n.a.Service)(Yi), Gi = function () {
                function FollowEpics() {
                    !function followEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, FollowEpics), function followEpics_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(this, "followService", Wi, this)
                }

                return FollowEpics.prototype.findCount = function findCount(e) {
                    return e.ofType("FOLLOW_GET").pipe(Object(Cn.throttleTime)(2e4), Object(l.switchMap)(this.followService.getFollow), Object(a.map)(Ni.receiveFollow), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, FollowEpics
            }(), Wi = function followEpics_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(Gi.prototype, "followService", [Ui], {enumerable: !0, initializer: null}), Gi),
            qi = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function nobleInfoActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : qi(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function nobleInfoActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Vi, Zi, Ki, Ji, Xi, Qi, ea, ta, oa, ra, na, ia, aa = function (e) {
            function NobleInfoAction() {
                return function nobleInfoActions_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, NobleInfoAction), function nobleInfoActions_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : qi(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return nobleInfoActions_inherits(NobleInfoAction, e), NobleInfoAction.defaultAction = function defaultAction() {
                return {type: "NOBLE_CONFIG_DEFAULT"}
            }, NobleInfoAction.getNobleRightsConfig = function getNobleRightsConfig(e) {
                return {type: "GET_NOBLE_RIGHTS_CONFIG", payload: e}
            }, NobleInfoAction.getNobleBaseConfig = function getNobleBaseConfig(e) {
                return {type: "GET_NOBLE_BASE_CONFIG", payload: e}
            }, NobleInfoAction.fetchNobleEnterRoomHidden = function fetchNobleEnterRoomHidden(e) {
                return {type: "FETCH_NOBLE_ENTER_ROOM_HIDDEN_STATE", payload: e}
            }, NobleInfoAction.getNobleSuperProgress = function getNobleSuperProgress(e) {
                return {type: "GET_NOBLE_SUPER_PROGRESS", payload: e}
            }, NobleInfoAction
        }(u.Action), la = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function NobleInfoDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function NobleInfoDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function NobleInfoDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : la(t)) && "function" !== typeof t ? e : t
        }

        function NobleInfoDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : la(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function NobleInfoDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function NobleInfoDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var ca, sa, ua, pa, fa, ba = i.basicTypes.string, da = i.basicTypes.number, ya = i.basicTypes.mapping, ma = ya({
                usable: "usable",
                sorting: "sorting",
                desc: "description",
                smallThumb: "icon1",
                bigThumb: "icon4",
                name: "long_name"
            })((Zi = function (e) {
                function NobleRightsDto() {
                    var t, o;
                    NobleInfoDto_classCallCheck(this, NobleRightsDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = NobleInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), NobleInfoDto_initDefineProp(o, "usable", Ki, o), NobleInfoDto_initDefineProp(o, "sorting", Ji, o), NobleInfoDto_initDefineProp(o, "desc", Xi, o), NobleInfoDto_initDefineProp(o, "smallThumb", Qi, o), NobleInfoDto_initDefineProp(o, "bigThumb", ea, o), NobleInfoDto_initDefineProp(o, "name", ta, o), NobleInfoDto_possibleConstructorReturn(o, t)
                }

                return NobleInfoDto_inherits(NobleRightsDto, e), NobleRightsDto
            }(i.EntityDto), Ki = NobleInfoDto_applyDecoratedDescriptor(Zi.prototype, "usable", [da], {
                enumerable: !0,
                initializer: null
            }), Ji = NobleInfoDto_applyDecoratedDescriptor(Zi.prototype, "sorting", [da], {
                enumerable: !0,
                initializer: null
            }), Xi = NobleInfoDto_applyDecoratedDescriptor(Zi.prototype, "desc", [ba], {
                enumerable: !0,
                initializer: null
            }), Qi = NobleInfoDto_applyDecoratedDescriptor(Zi.prototype, "smallThumb", [ba], {
                enumerable: !0,
                initializer: null
            }), ea = NobleInfoDto_applyDecoratedDescriptor(Zi.prototype, "bigThumb", [ba], {
                enumerable: !0,
                initializer: null
            }), ta = NobleInfoDto_applyDecoratedDescriptor(Zi.prototype, "name", [ba], {
                enumerable: !0,
                initializer: null
            }), Vi = Zi)) || Vi,
            ha = ya({promotionIcon: "home_drop_pub_img", moreIcon: "more_privilege_icon"})((ra = function (e) {
                function NobleBaseConfDto() {
                    var t, o;
                    NobleInfoDto_classCallCheck(this, NobleBaseConfDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = NobleInfoDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), NobleInfoDto_initDefineProp(o, "promotionIcon", na, o), NobleInfoDto_initDefineProp(o, "moreIcon", ia, o), NobleInfoDto_possibleConstructorReturn(o, t)
                }

                return NobleInfoDto_inherits(NobleBaseConfDto, e), NobleBaseConfDto
            }(i.EntityDto), na = NobleInfoDto_applyDecoratedDescriptor(ra.prototype, "promotionIcon", [ba], {
                enumerable: !0,
                initializer: null
            }), ia = NobleInfoDto_applyDecoratedDescriptor(ra.prototype, "moreIcon", [ba], {
                enumerable: !0,
                initializer: null
            }), oa = ra)) || oa, va = o("104af"),
            _a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function nobleInfoServices_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function nobleInfoServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : _a(t)) && "function" !== typeof t ? e : t
        }

        function nobleInfoServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : _a(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function nobleInfoServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function nobleInfoServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var ga, Da, Sa, wa = n.a.Store, Oa = (ca = (0, n.a.Service)(i.DataCenter.global), sa = wa(), ua = function (e) {
            function NobleInfoServices() {
                var t, o;
                !function nobleInfoServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, NobleInfoServices);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = nobleInfoServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), nobleInfoServices_initDefineProp(o, "global", pa, o), nobleInfoServices_initDefineProp(o, "store", fa, o), o.nobleRightsStream$ = new va.Subject, o.nobleHiddenStream$ = new va.Subject, o.nobleSuperProgressStream$ = new va.Subject, o.isOpenHss$ = new va.Subject, nobleInfoServices_possibleConstructorReturn(o, t)
            }

            return nobleInfoServices_inherits(NobleInfoServices, e), NobleInfoServices.prototype.getNobleRightsByEpics = function getNobleRightsByEpics(e) {
                this.store.dispatch(aa.getNobleRightsConfig(e))
            }, NobleInfoServices.prototype.setRightsConfig = function setRightsConfig(e) {
                this.nobleRightsStream$.next({nobleRights: e})
            }, NobleInfoServices.prototype.getNobleBaseConfigByEpics = function getNobleBaseConfigByEpics() {
                this.store.dispatch(aa.getNobleBaseConfig())
            }, NobleInfoServices.prototype.setNobleBaseConfig = function setNobleBaseConfig(e) {
                this.nobleRightsStream$.next({nobleBaseConf: e})
            }, NobleInfoServices.prototype.fetchNobleEnterRoomHidden = function fetchNobleEnterRoomHidden(e) {
                this.store.dispatch(aa.fetchNobleEnterRoomHidden(e))
            }, NobleInfoServices.prototype.setEnterRoomHiddenState = function setEnterRoomHiddenState() {
                this.nobleHiddenStream$.next()
            }, NobleInfoServices.prototype.getNobleSuperProgress = function getNobleSuperProgress() {
                this.store.dispatch(aa.getNobleSuperProgress()), this.updateHsFooter()
            }, NobleInfoServices.prototype.setNobleSuperProgress = function setNobleSuperProgress(e) {
                this.nobleSuperProgressStream$.next({nobleSuperProgress: e})
            }, NobleInfoServices.prototype.getHsConfigs = function getHsConfigs() {
                var e = this.global.get("$SYS").webconfUrl + "resource/noble/actcdi.json";
                return i.jsonpClient.get(String, e, "noblehs")
            }, NobleInfoServices.prototype.updateHsFooter = function updateHsFooter() {
                var e = this;
                this.getHsConfigs().subscribe(function (t) {
                    var o = u.GSON.parse(t.data) || {};
                    e.isOpenHss$.next({isOpenHss: o})
                })
            }, NobleInfoServices
        }(u.Service), pa = nobleInfoServices_applyDecoratedDescriptor(ua.prototype, "global", [ca], {
            enumerable: !0,
            initializer: null
        }), fa = nobleInfoServices_applyDecoratedDescriptor(ua.prototype, "store", [sa], {
            enumerable: !0,
            initializer: null
        }), ua);
        var Ea = "//webconf.douyucdn.cn/", Ca = (ga = (0, n.a.Service)(Oa), Da = function () {
                function NobleInfoEpic() {
                    !function nobleInfoEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, NobleInfoEpic), function nobleInfoEpics_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(this, "nobleInfoService", Sa, this), this.config = {
                        rights: Ea + "/resource/noble/copywriting/web",
                        baseConfig: Ea + "/resource/noble/global/web.json",
                        setEnterRoomHidden: "/member/noble/setHideStatus",
                        nobleSuperProgress: "/member/noble/progress"
                    }
                }

                return NobleInfoEpic.prototype.getNobleRightsConfig = function getNobleRightsConfig(e) {
                    var t = this;
                    return e.ofType("GET_NOBLE_RIGHTS_CONFIG").pipe(Object(l.switchMap)(function (e) {
                        var o = e.payload;
                        return i.jsonpClient.get(ma, "" + t.config.rights + o + ".json", "nobleCopywriting" + o)
                    }), Object(a.map)(function (e) {
                        var o = e.data, r = (void 0 === o ? [] : o).filter(function (e) {
                            return e.usable
                        }).slice(0, 5);
                        return t.nobleInfoService.setRightsConfig(r), r
                    }), Object(a.map)(aa.defaultAction), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, NobleInfoEpic.prototype.getNobleSuperProgress = function getNobleSuperProgress(e) {
                    var t = this;
                    return e.ofType("GET_NOBLE_SUPER_PROGRESS").pipe(Object(l.switchMap)(function () {
                        return i.httpClient.get(String, t.config.nobleSuperProgress)
                    }), Object(a.map)(function (e) {
                        var o = (e || {}).error;
                        if (e && !o) {
                            var r = e.data, n = void 0 === r ? {} : r, i = u.GSON.parse(n) || {};
                            t.nobleInfoService.setNobleSuperProgress(i)
                        }
                        return {type: ""}
                    }), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, NobleInfoEpic.prototype.getNobleBaseConfig = function getNobleBaseConfig(e) {
                    var t = this;
                    return e.ofType("GET_NOBLE_BASE_CONFIG").pipe(Object(l.switchMap)(function () {
                        return i.jsonpClient.get(ha, t.config.baseConfig, "nobleGlobalConfig")
                    }), Object(a.map)(function (e) {
                        var o = e.data, r = {promotionIcon: o.promotionIcon, moreIcon: o.moreIcon};
                        return t.nobleInfoService.setNobleBaseConfig(r), r
                    }), Object(a.map)(aa.defaultAction), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, NobleInfoEpic.prototype.fetchNobleEnterRoomHidden = function fetchNobleEnterRoomHidden(e) {
                    var t = this;
                    return e.ofType("FETCH_NOBLE_ENTER_ROOM_HIDDEN_STATE").pipe(Object(l.switchMap)(function (e) {
                        var o = e.payload;
                        return i.httpClient.post(String, t.config.setEnterRoomHidden, $r.a.stringify({
                            type: 1,
                            rid: 0,
                            status: o
                        }))
                    }), Object(a.map)(function (e) {
                        var o = (e || {}).error;
                        return e && !o && t.nobleInfoService.setEnterRoomHiddenState(), e
                    }), Object(a.map)(aa.defaultAction), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, NobleInfoEpic
            }(), Sa = function nobleInfoEpics_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(Da.prototype, "nobleInfoService", [ga], {enumerable: !0, initializer: null}), Da), Na = o("eeb07"),
            Pa = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function nobleBuyModalActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Pa(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function nobleBuyModalActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var ja, Ta, ka, za, Ia, Ra, Ma, Aa, La, Ba, xa, Fa, Ha, Ua, Ga, Wa, Ya, $a = "OPEN_NOBLE_BARRAGE_MODAL",
            qa = "IS_SHOW_COMPARE", Va = "RECEIVE_NOBLE_BUY_DATA", Za = "SWITCH_NOBLE_BUY_TAB",
            Ka = "SWITCH_NOBLE_LEVEL", Ja = "UPDATE_NOBLE_CON", Xa = "UPDATE_NOBLE_INFO", Qa = "UPDATE_HS_FOOTER",
            el = function (e) {
                function nobleBuyModalAction() {
                    return function nobleBuyModalActions_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, nobleBuyModalAction), function nobleBuyModalActions_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Pa(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return nobleBuyModalActions_inherits(nobleBuyModalAction, e), nobleBuyModalAction.openNobleBuyModal = function openNobleBuyModal(e) {
                    return {type: $a, payload: e}
                }, nobleBuyModalAction.isShowCompare = function isShowCompare(e) {
                    return {type: qa, payload: e}
                }, nobleBuyModalAction.swithcNobleBuyTab = function swithcNobleBuyTab(e) {
                    return {type: Za, payload: e}
                }, nobleBuyModalAction.swithcNobleLevel = function swithcNobleLevel(e) {
                    return {type: Ka, payload: e}
                }, nobleBuyModalAction.getNobleBuyData = function getNobleBuyData(e) {
                    return {type: "GET_NOBLEE_BUY_DATA", payload: e}
                }, nobleBuyModalAction.receiveNobleBuyData = function receiveNobleBuyData(e) {
                    return {type: Va, payload: e}
                }, nobleBuyModalAction.getNobleCon = function getNobleCon(e) {
                    return {type: "GET_NOBLE_CON", payload: e}
                }, nobleBuyModalAction.updateNobleCon = function updateNobleCon(e) {
                    return {type: Ja, payload: e}
                }, nobleBuyModalAction.updateNobleInfo = function updateNobleInfo(e) {
                    return {type: Xa, payload: e}
                }, nobleBuyModalAction.updateHsFooter = function updateHsFooter(e) {
                    return {type: Qa, payload: e}
                }, nobleBuyModalAction
            }(u.Action), tl = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function NobleConDataDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function NobleConDataDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : tl(t)) && "function" !== typeof t ? e : t
        }

        function NobleConDataDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : tl(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function NobleConDataDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function NobleConDataDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var ol, rl, nl, il, al, ll = i.basicTypes.mapping, cl = i.basicTypes.string, sl = i.basicTypes.number,
            ul = (ja = ll({longName: "long_name", shortName: "short_name"}), Object(et.log)(Ta = ja((ka = function (e) {
                function NobleConDataDto() {
                    var t, o;
                    !function NobleConDataDto_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, NobleConDataDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = NobleConDataDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), NobleConDataDto_initDefineProp(o, "usable", za, o), NobleConDataDto_initDefineProp(o, "privilege", Ia, o), NobleConDataDto_initDefineProp(o, "longName", Ra, o), NobleConDataDto_initDefineProp(o, "shortName", Ma, o), NobleConDataDto_initDefineProp(o, "intro", Aa, o), NobleConDataDto_initDefineProp(o, "description", La, o), NobleConDataDto_initDefineProp(o, "sorting", Ba, o), NobleConDataDto_initDefineProp(o, "icon1", xa, o), NobleConDataDto_initDefineProp(o, "icon2", Fa, o), NobleConDataDto_initDefineProp(o, "icon3", Ha, o), NobleConDataDto_initDefineProp(o, "icon4", Ua, o), NobleConDataDto_initDefineProp(o, "icon5", Ga, o), NobleConDataDto_initDefineProp(o, "icon6", Wa, o), NobleConDataDto_initDefineProp(o, "icon7", Ya, o), NobleConDataDto_possibleConstructorReturn(o, t)
                }

                return NobleConDataDto_inherits(NobleConDataDto, e), NobleConDataDto
            }(i.EntityDto), za = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "usable", [sl], {
                enumerable: !0,
                initializer: null
            }), Ia = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "privilege", [cl], {
                enumerable: !0,
                initializer: null
            }), Ra = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "longName", [cl], {
                enumerable: !0,
                initializer: null
            }), Ma = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "shortName", [cl], {
                enumerable: !0,
                initializer: null
            }), Aa = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "intro", [cl], {
                enumerable: !0,
                initializer: null
            }), La = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "description", [cl], {
                enumerable: !0,
                initializer: null
            }), Ba = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "sorting", [sl], {
                enumerable: !0,
                initializer: null
            }), xa = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "icon1", [cl], {
                enumerable: !0,
                initializer: null
            }), Fa = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "icon2", [cl], {
                enumerable: !0,
                initializer: null
            }), Ha = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "icon3", [cl], {
                enumerable: !0,
                initializer: null
            }), Ua = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "icon4", [cl], {
                enumerable: !0,
                initializer: null
            }), Ga = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "icon5", [cl], {
                enumerable: !0,
                initializer: null
            }), Wa = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "icon6", [cl], {
                enumerable: !0,
                initializer: null
            }), Ya = NobleConDataDto_applyDecoratedDescriptor(ka.prototype, "icon7", [cl], {
                enumerable: !0,
                initializer: null
            }), Ta = ka)) || Ta) || Ta),
            pl = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, fl = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function nobleBuyModalServices_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function nobleBuyModalServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : pl(t)) && "function" !== typeof t ? e : t
        }

        function nobleBuyModalServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : pl(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function nobleBuyModalServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function nobleBuyModalServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var bl, dl, yl, ml = n.a.Store, hl = (ol = (0, n.a.Service)(i.DataCenter.global), rl = ml(), nl = function (e) {
            function NobleBuyServices() {
                var t, o;
                !function nobleBuyModalServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, NobleBuyServices);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = nobleBuyModalServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), nobleBuyModalServices_initDefineProp(o, "global", il, o), nobleBuyModalServices_initDefineProp(o, "store", al, o), nobleBuyModalServices_possibleConstructorReturn(o, t)
            }

            return nobleBuyModalServices_inherits(NobleBuyServices, e), NobleBuyServices.prototype.setDYSub = function setDYSub(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object(sn.dysub)(e, fl({}, t))
            }, NobleBuyServices.prototype.openNobleBuyModal = function openNobleBuyModal() {
                this.setDYSub("click_noblebuy_noblelabel", {level: 7}), this.store.dispatch(el.getNobleBuyData()), this.store.dispatch(el.openNobleBuyModal(!0))
            }, NobleBuyServices.prototype.closeNobleBuyModal = function closeNobleBuyModal() {
                this.store.dispatch(el.openNobleBuyModal(!1))
            }, NobleBuyServices.prototype.showCompare = function showCompare() {
                this.store.dispatch(el.isShowCompare(!0)), this.setDYSub("click_noblebuy_viewpri")
            }, NobleBuyServices.prototype.closeCompare = function closeCompare() {
                this.store.dispatch(el.isShowCompare(!1))
            }, NobleBuyServices.prototype.swithcNobleBuyTab = function swithcNobleBuyTab(e) {
                this.store.dispatch(el.swithcNobleBuyTab(e))
            }, NobleBuyServices.prototype.getNobleBuyData = function getNobleBuyData() {
                this.store.dispatch(el.getNobleBuyData())
            }, NobleBuyServices.prototype.loadNobleConData = function loadNobleConData(e) {
                var t = this.global.get("$SYS"), o = e || 7,
                    r = t.webconfUrl + "resource/noble/copywriting/web" + o + ".json";
                return i.jsonpClient.get(ul, r, "nobleCopywriting" + o)
            }, NobleBuyServices.prototype.updateNobleConData = function updateNobleConData(e) {
                var t = this;
                this.loadNobleConData(e).subscribe(function (o) {
                    t.store.dispatch(el.updateNobleCon(o.data)), t.store.dispatch(el.swithcNobleLevel(e))
                })
            }, NobleBuyServices.prototype.getHsConfigs = function getHsConfigs() {
                var e = this.global.get("$SYS").webconfUrl + "resource/noble/actcdi.json";
                return i.jsonpClient.get(String, e, "noblehs")
            }, NobleBuyServices.prototype.updateHsFooter = function updateHsFooter() {
                var e = this;
                this.getHsConfigs().subscribe(function (t) {
                    var o = u.GSON.parse(t.data) || {};
                    e.store.dispatch(el.updateHsFooter(o))
                })
            }, NobleBuyServices.prototype.updateNobleInfo = function updateNobleInfo() {
                this.store.dispatch(el.updateNobleInfo())
            }, NobleBuyServices.prototype.formatSymbolImages = function formatSymbolImages(e) {
                return {
                    name: e.name,
                    webSymbolPic1: e.web_symbol_pic1,
                    webSymbolPic5: e.web_symbol_pic5,
                    webSymbolPic6: e.web_symbol_pic6
                }
            }, NobleBuyServices.prototype.formateNw = function formateNw(e) {
                var t = this;
                return (e || []).map(function (e) {
                    var o = u.GSON.parse(e);
                    return {
                        level: parseInt(o.level, 10) || 0,
                        nobleName: o.noble_name,
                        isOnSell: parseInt(o.is_on_sell, 10) || 0,
                        openNofity: o.open_nofity,
                        speakerNumber: parseInt(o.speaker_number, 10) || 0,
                        siteSpeakerNumber: parseInt(o.site_speaker_number, 10) || 0,
                        linkMike: parseInt(o.link_mike, 10) || 0,
                        nobleGift: parseInt(o.noble_gift, 10) || 0,
                        nobleBarrage: parseInt(o.noble_barrage, 10) || 0,
                        intoRoomHide: parseInt(o.into_room_hide, 10) || 0,
                        topListHide: parseInt(o.top_list_hide, 10) || 0,
                        avoidBanSpeaking: parseInt(o.avoid_ban_speaking, 10) || 0,
                        superAdminHelper: parseInt(o.super_admin_helper, 10) || 0,
                        customizeGift: parseInt(o.customize_gift, 10) || 0,
                        recommendAnchor: parseInt(o.recommend_anchor, 10) || 0,
                        customNicknameColor: parseInt(o.custom_nickname_color, 10) || 0,
                        expAddition: parseInt(o.exp_addition, 10) || 0,
                        firstOpenPrice: parseInt(o.first_open_price, 10) || 0,
                        firstRemandGold: parseInt(o.first_remand_gold, 10) || 0,
                        renewPrice: parseInt(o.renew_price, 10) || 0,
                        renewRemandGold: parseInt(o.renew_remand_gold, 10) || 0,
                        symbolImages: t.formatSymbolImages(o.symbol || {}) || {},
                        wlcm: o.wlcm || {},
                        opEffect: o.op_effect || {}
                    }
                })
            }, NobleBuyServices.prototype.formateInfo = function formateInfo(e) {
                var t = e || {};
                t.nbl_spl;
                return {nblSpl: t.nbl_spl}
            }, NobleBuyServices.prototype.formateData = function formateData(e) {
                var t = {
                    confignwData: this.formateNw(e[0].data),
                    getNobleInfo: this.formateInfo(e[1].msg) || {},
                    currentTabIndex: 7,
                    currentIndex: 7,
                    selectedLevel: 7,
                    inProtected: 0,
                    protectedLvl: 0,
                    level: 7,
                    disBtnName: ""
                }, o = (t.confignwData.reverse() || []).filter(function (e) {
                    return 1 === e.isOnSell
                }), r = t.getNobleInfo.nblSpl, n = r.lv ? r.lv : 0, i = r.pn || 0, a = parseInt(i.pl, 10) || 0;
                t.protectedLvl = i ? !n && a : 0, t.level = parseInt(n, 10) || 0;
                var l = 7;
                o.map(function (e, o) {
                    return e.level === t.level || e.level === t.protectedLvl ? l = o : l
                }), 9 === t.level ? t.currentTabIndex = 2 : t.currentTabIndex = l + 1, t.inProtected = i ? !n && parseInt(i.ep, 10) : 0;
                var c = o[t.currentTabIndex - 1] || {}, s = parseInt(c.level, 10) || 0;
                return t.selectedLevel = s || 7, t.disBtnName = l ? "is-disabled" : "", t
            }, NobleBuyServices
        }(u.Service), il = nobleBuyModalServices_applyDecoratedDescriptor(nl.prototype, "global", [ol], {
            enumerable: !0,
            initializer: null
        }), al = nobleBuyModalServices_applyDecoratedDescriptor(nl.prototype, "store", [rl], {
            enumerable: !0,
            initializer: null
        }), nl), vl = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };
        var _l = (bl = (0, n.a.Service)(hl), dl = function () {
                function NobleBuyModalEpics() {
                    !function nobleBuyModalEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, NobleBuyModalEpics), function nobleBuyModalEpics_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(this, "nobleBuyModalServices", yl, this)
                }

                return NobleBuyModalEpics.prototype.getConfignwByEpic = function getConfignwByEpic(e) {
                    var t = this;
                    return e.ofType("GET_NOBLEE_BUY_DATA").pipe(Object(l.switchMap)(function () {
                        return Object(Na.forkJoin)(i.httpClient.get(String, "/noble/confignw"), i.httpClient.get(String, "/lapi/member/api/getInfo", {client_type: 0}), i.httpClient.get(String, "/api/v1/timestamp"), i.jsonpClient.get(String, "//webconf.douyucdn.cn/resource/noble/activity.json", "nobleActivity"), i.jsonpClient.get(String, "//webconf.douyucdn.cn/resource/noble/snsw.json", "noble"))
                    }), Object(a.map)(function (e) {
                        var o = e[3].data || [], r = o[0] && "string" === typeof o[0] ? u.GSON.parse(o[0]) : {},
                            n = +e[2].data || 0, i = u.GSON.parse(e[4].data) || {}, a = !1,
                            l = ["--\u6708--\u65e5", "--\u6708--\u65e5"];
                        n > r.stime && n < r.etime && (a = !0, l = [Et(r.stime).M + "\u6708" + Et(r.stime).d + "\u65e5", Et(r.etime).M + "\u6708" + Et(r.etime).d + "\u65e5"]);
                        e[0].data, e[1] && e[1].msg;
                        return e ? vl({}, t.nobleBuyModalServices.formateData(e), {
                            getNobleSwitch: a,
                            openForFriendData: i,
                            getNobleAct: vl({}, r, {nobleLv: +r.lvl, timeArray: l})
                        }) : {}
                    }), Object(l.switchMap)(function (e) {
                        return e ? Object(Na.forkJoin)(Object(s.of)(e), t.nobleBuyModalServices.loadNobleConData(e.selectedLevel)) : Object(s.of)(null)
                    }), Object(a.map)(function (e) {
                        var t = e[0];
                        return t.nobleConData = e[1].data || [], el.receiveNobleBuyData(t)
                    }))
                }, NobleBuyModalEpics
            }(), yl = function nobleBuyModalEpics_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(dl.prototype, "nobleBuyModalServices", [bl], {enumerable: !0, initializer: null}), dl),
            gl = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function taskAction_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : gl(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function taskAction_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Dl, Sl, wl, Ol, El, Cl, Nl, Pl, jl, Tl, kl, zl, Il, Rl, Ml, Al, Ll, Bl, xl, Fl, Hl, Ul, Gl, Wl, Yl, $l, ql,
            Vl = "USERINFO_GET_TASK_DATA_BACK", Zl = function (e) {
                function TaskAction() {
                    return function taskAction_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, TaskAction), function taskAction_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : gl(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return taskAction_inherits(TaskAction, e), TaskAction.getTaskData = function getTaskData(e) {
                    return {type: "USERINFO_GET_TASK_DATA", payload: e}
                }, TaskAction.receiveTaskData = function receiveTaskData(e) {
                    return {type: Vl, payload: e}
                }, TaskAction
            }(u.Action), Kl = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function TaskDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function TaskDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function TaskDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Kl(t)) && "function" !== typeof t ? e : t
        }

        function TaskDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Kl(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function TaskDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function TaskDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Jl = i.basicTypes.string, Xl = i.basicTypes.number, Ql = i.basicTypes.mapping, ec = i.basicTypes.typed,
            tc = i.basicTypes.array, oc = (kl = ec((Cl = tc(Object(et.log)((Sl = function (e) {
                function TaskRewardModel() {
                    var t, o;
                    TaskDto_classCallCheck(this, TaskRewardModel);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = TaskDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), TaskDto_initDefineProp(o, "id", wl, o), TaskDto_initDefineProp(o, "name", Ol, o), TaskDto_initDefineProp(o, "num", El, o), TaskDto_possibleConstructorReturn(o, t)
                }

                return TaskDto_inherits(TaskRewardModel, e), TaskRewardModel
            }(i.EntityDto), wl = TaskDto_applyDecoratedDescriptor(Sl.prototype, "id", [Xl], {
                enumerable: !0,
                initializer: null
            }), Ol = TaskDto_applyDecoratedDescriptor(Sl.prototype, "name", [Jl], {
                enumerable: !0,
                initializer: null
            }), El = TaskDto_applyDecoratedDescriptor(Sl.prototype, "num", [Xl], {
                enumerable: !0,
                initializer: null
            }), Dl = Sl)) || Dl), Object(et.log)((Pl = function (e) {
                function TaskReward() {
                    var t, o;
                    TaskDto_classCallCheck(this, TaskReward);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = TaskDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), TaskDto_initDefineProp(o, "silver", jl, o), TaskDto_initDefineProp(o, "props", Tl, o), TaskDto_possibleConstructorReturn(o, t)
                }

                return TaskDto_inherits(TaskReward, e), TaskReward
            }(i.EntityDto), jl = TaskDto_applyDecoratedDescriptor(Pl.prototype, "silver", [Xl], {
                enumerable: !0,
                initializer: null
            }), Tl = TaskDto_applyDecoratedDescriptor(Pl.prototype, "props", [Cl], {
                enumerable: !0,
                initializer: null
            }), Nl = Pl)) || Nl)), Object(et.log)((Il = function (e) {
                function TaskDataDto() {
                    var t, o;
                    TaskDto_classCallCheck(this, TaskDataDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = TaskDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), TaskDto_initDefineProp(o, "gName", Rl, o), TaskDto_initDefineProp(o, "gIcon", Ml, o), TaskDto_initDefineProp(o, "gLink", Al, o), TaskDto_initDefineProp(o, "reward", Ll, o), TaskDto_possibleConstructorReturn(o, t)
                }

                return TaskDto_inherits(TaskDataDto, e), TaskDataDto
            }(i.EntityDto), Rl = TaskDto_applyDecoratedDescriptor(Il.prototype, "gName", [Jl], {
                enumerable: !0,
                initializer: null
            }), Ml = TaskDto_applyDecoratedDescriptor(Il.prototype, "gIcon", [Jl], {
                enumerable: !0,
                initializer: null
            }), Al = TaskDto_applyDecoratedDescriptor(Il.prototype, "gLink", [Jl], {
                enumerable: !0,
                initializer: null
            }), Ll = TaskDto_applyDecoratedDescriptor(Il.prototype, "reward", [kl], {
                enumerable: !0,
                initializer: null
            }), zl = Il)) || zl), rc = Ql({propName: "prop_name", propCnt: "prop_cnt"})((xl = function (e) {
                function TaskDetail() {
                    var t, o;
                    TaskDto_classCallCheck(this, TaskDetail);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = TaskDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), TaskDto_initDefineProp(o, "icon", Fl, o), TaskDto_initDefineProp(o, "propName", Hl, o), TaskDto_initDefineProp(o, "propCnt", Ul, o), TaskDto_possibleConstructorReturn(o, t)
                }

                return TaskDto_inherits(TaskDetail, e), TaskDetail
            }(i.EntityDto), Fl = TaskDto_applyDecoratedDescriptor(xl.prototype, "icon", [Jl], {
                enumerable: !0,
                initializer: null
            }), Hl = TaskDto_applyDecoratedDescriptor(xl.prototype, "propName", [Jl], {
                enumerable: !0,
                initializer: null
            }), Ul = TaskDto_applyDecoratedDescriptor(xl.prototype, "propCnt", [Xl], {
                enumerable: !0,
                initializer: null
            }), Bl = xl)) || Bl, nc = (Gl = Ql({giftData: "gift_data"}), Wl = tc(rc), Gl(($l = function (e) {
                function TaskDetailDto() {
                    var t, o;
                    TaskDto_classCallCheck(this, TaskDetailDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = TaskDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), TaskDto_initDefineProp(o, "giftData", ql, o), TaskDto_possibleConstructorReturn(o, t)
                }

                return TaskDto_inherits(TaskDetailDto, e), TaskDetailDto
            }(i.EntityDto), ql = TaskDto_applyDecoratedDescriptor($l.prototype, "giftData", [Wl], {
                enumerable: !0,
                initializer: null
            }), Yl = $l)) || Yl);
        var ic = i.DataCenter.global.get("$SYS"), ac = function () {
            function TaskEpics() {
                !function taskEpics_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, TaskEpics)
            }

            return TaskEpics.prototype.getTask = function getTask(e) {
                return e.ofType("USERINFO_GET_TASK_DATA").pipe(Object(l.switchMap)(function () {
                    return i.jsonpClient.get(Object(i.Nullable)(oc), ic.webconfUrl + "/resource/mgame/task/nav_popup_task.json", "navPopupPromoteTask")
                }), Object(a.map)(function (e) {
                    return e.data && e.data.gIcon ? e.data : {}
                }), Object(a.map)(Zl.receiveTaskData))
            }, TaskEpics
        }(), lc = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function matchFocusActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : lc(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function matchFocusActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var cc, sc, uc, pc, fc, bc = "RECEIVE_MATCH_FOCUS_DATA", dc = "SET_FOCUS_DOT", yc = function (e) {
            function MatchFocusAction() {
                return function matchFocusActions_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, MatchFocusAction), function matchFocusActions_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : lc(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return matchFocusActions_inherits(MatchFocusAction, e), MatchFocusAction.receiveMatchFocusData = function receiveMatchFocusData(e) {
                return {type: bc, payload: e}
            }, MatchFocusAction.getMatchFocusData = function getMatchFocusData() {
                return {type: "GET_MATCH_FOCUS_DATA"}
            }, MatchFocusAction.getFocusDot = function getFocusDot() {
                return {type: "GET_FOCUS_DOT"}
            }, MatchFocusAction.setFocusDot = function setFocusDot(e) {
                return {type: dc, payload: e}
            }, MatchFocusAction
        }(u.Action);

        function matchFocusEpics_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function matchFocusEpics_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var mc = n.a.Service, hc = (cc = mc(i.DataCenter.localStorage), sc = mc(i.DataCenter.global), uc = function () {
                function MatchFocusEpics() {
                    !function matchFocusEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, MatchFocusEpics), matchFocusEpics_initDefineProp(this, "localStorage", pc, this), matchFocusEpics_initDefineProp(this, "global", fc, this)
                }

                return MatchFocusEpics.prototype.findCount = function findCount(e) {
                    return e.ofType("GET_MATCH_FOCUS_DATA").pipe(Object(l.switchMap)(function () {
                        return i.httpClient.get(String, "/wgapi/live/match/getFocusConfig")
                    }), Object(a.map)(function (e) {
                        return 0 === e.error ? yc.receiveMatchFocusData(e.data ? u.GSON.parse(e.data) : null) : yc.receiveMatchFocusData(null)
                    }), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, MatchFocusEpics.prototype.getFocusDot = function getFocusDot(e) {
                    var t = this;
                    return e.ofType("GET_FOCUS_DOT").pipe(Object(l.switchMap)(function () {
                        var e = (t.global.get("USER_INFO") || {}).uid, o = void 0 === e ? 0 : e,
                            r = t.localStorage.get("follow_show_dot_" + o),
                            n = t.localStorage.get("follow_show_dot_value_" + o), a = t.global.get("headerActiveMenu"),
                            l = {error: 0, data: {reddot: 0, fromCache: !0}};
                        return r ? Object(s.of)(l) : "follow" === a ? (t.localStorage.set("follow_show_dot_" + o, 1, 86400), Object(s.of)(l)) : null !== n ? (l.data.reddot = +n || 0, Object(s.of)(l)) : i.httpClient.get(String, "/wgapi/livenc/liveweb/follow/reddot")
                    }), Object(a.map)(function (e) {
                        var o = e.error, r = e.data, n = "string" === typeof r ? u.GSON.parse(r) : r,
                            i = (t.global.get("USER_INFO") || {}).uid, a = void 0 === i ? 0 : i;
                        return 0 === +o && (n.fromCache || t.localStorage.set("follow_show_dot_value_" + a, n.reddot, 600)), yc.setFocusDot(n.reddot || 0)
                    }), Object(c.catchError)(function (e) {
                        return Object(s.of)({type: "error", payload: e})
                    }))
                }, MatchFocusEpics
            }(), pc = matchFocusEpics_applyDecoratedDescriptor(uc.prototype, "localStorage", [cc], {
                enumerable: !0,
                initializer: null
            }), fc = matchFocusEpics_applyDecoratedDescriptor(uc.prototype, "global", [sc], {
                enumerable: !0,
                initializer: null
            }), uc), vc = (0, n.a.combineEpicsClass)(x, Bt, ho, or, En, ai, $i, Ca, _l, ac, hc),
            _c = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            }, gc = {logo: "", privateLetters: 0, anchorRecruitMessages: 0}, Dc = function getNum() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.keys(e).map(function (t) {
                    return e[t].length
                }).filter(Boolean).reduce(function (e, t) {
                    return e + t
                }, 0)
            };
        var Sc = function baseConfig() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gc, t = arguments[1], o = t.type,
                r = t.payload;
            switch (o) {
                case f:
                    return _c({}, e, {privateLetters: r});
                case b:
                    var n = r.data, i = void 0 === n ? "{}" : n;
                    return _c({}, e, {anchorRecruitMessages: Dc(JSON.parse(i).newRecruit)});
                case d:
                    return _c({}, e, {isShow: r});
                default:
                    return e
            }
        }, wc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, Oc = {loaded: 0, category: []};
        var Ec = function categoryReducers_CategoryData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oc, t = arguments[1], o = t.type,
                r = t.payload;
            switch (o) {
                case Xt:
                    return wc({}, e, {loaded: 1});
                case Qt:
                    var n = r.data, i = (void 0 === n ? [] : n).map(function (e) {
                        return e.list && e.list.length ? e : null
                    }).filter(Boolean);
                    return wc({}, e, {category: i}, {loaded: 2});
                default:
                    return e
            }
        }, Cc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, Nc = {loaded: 0, game: []};
        var Pc = function gameReducers_GameData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nc, t = arguments[1], o = t.type,
                r = t.payload;
            switch (o) {
                case Ao:
                    return Cc({}, e, {loaded: 1});
                case Lo:
                    var n = r.data, i = void 0 === n ? {} : n, a = Object.keys(i).map(function (e) {
                        return {
                            name: "web" === e ? "\u7f51\u6e38\u63a8\u8350" : "\u624b\u6e38\u63a8\u8350",
                            channel: e,
                            list: i[e]
                        }
                    });
                    return Cc({}, e, {game: a}, {loaded: 2});
                default:
                    return e
            }
        }, jc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, Tc = {hotList: [], recommendList: {}};
        var kc = function searchData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tc, t = arguments[1], o = t.type,
                r = t.payload;
            switch (o) {
                case Ur:
                    return jc({}, e, {hotList: r});
                case Gr:
                    return jc({}, e, {recommendList: r});
                default:
                    return e
            }
        };
        var zc = function historyReducers_HistoryData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {loaded: 0, historyList: []},
                t = arguments[1];
            switch (t.type) {
                case Un:
                    return {loaded: 1, historyList: t.payload.data || []};
                default:
                    return e
            }
        }, Ic = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };
        var Rc = function followReducers_FollowData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                loaded: 0,
                nowTime: 0,
                roomList: []
            }, t = arguments[1];
            switch (t.type) {
                case Ci:
                    return Ic({loaded: 1}, t.payload.data);
                default:
                    return e
            }
        }, Mc = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function actNavActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Mc(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function actNavActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Ac = "GET_ACT_NAV_CONFIG", Lc = function (e) {
            function ActNavAction() {
                return function actNavActions_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, ActNavAction), function actNavActions_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : Mc(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return actNavActions_inherits(ActNavAction, e), ActNavAction.getActNavConfig = function getActNavConfig(e) {
                return {type: Ac, payload: e}
            }, ActNavAction
        }(u.Action), Bc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };
        var xc = function actNavReducers_actNavConfig() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
            switch (t.type) {
                case Ac:
                    return Bc({}, e, t.payload);
                default:
                    return e
            }
        }, Fc = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function iframePayActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Fc(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function iframePayActions_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Hc = "IFRAMEPAY_SHOW", Uc = "IFRAMEPAY_HIDE", Gc = function (e) {
            function IframePayAction() {
                return function iframePayActions_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, IframePayAction), function iframePayActions_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : Fc(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return iframePayActions_inherits(IframePayAction, e), IframePayAction.iframePayShow = function iframePayShow(e) {
                return {type: Hc, payload: e}
            }, IframePayAction.iframePayHide = function iframePayHide(e) {
                return {type: Uc, payload: e}
            }, IframePayAction
        }(u.Action), Wc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, Yc = {flag: !1, type: "room"};
        var $c = function iframePayStatus() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yc, t = arguments[1];
            switch (t.type) {
                case Hc:
                    var o = t.payload || "room";
                    return Wc({}, e, {flag: !0, type: o});
                case Uc:
                    return Wc({}, e, {flag: !1});
                default:
                    return e
            }
        }, qc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, Vc = {
            openNobleBuyModal: !1,
            isShowCompare: !1,
            confignwData: [],
            getNobleInfo: {},
            getNobleAct: {},
            nobleConData: [],
            actStatus: 0,
            currentTabIndex: 7,
            currentIndex: 7,
            selectedLevel: 7,
            inProtected: 0,
            protectedLvl: 0,
            level: 7,
            disBtnName: "",
            nobleBuyModalData: {},
            nobleHsConfig: {}
        };
        var Zc = function nobleBuyModalData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vc, t = arguments[1];
            switch (t.type) {
                case $a:
                    return qc({}, e, {openNobleBuyModal: t.payload});
                case qa:
                    return qc({}, e, {isShowCompare: t.payload});
                case Za:
                    return qc({}, e, {currentTabIndex: t.payload});
                case Ka:
                    return qc({}, e, {selectedLevel: t.payload});
                case Ja:
                    return qc({}, e, {nobleConData: t.payload});
                case Xa:
                    return qc({}, e, {getNobleInfo: t.payload});
                case Va:
                    return qc({}, e, t.payload);
                case Qa:
                    return qc({}, e, {nobleHsConfig: t.payload});
                default:
                    return e
            }
        }, Kc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, Jc = {gName: "", gIcon: "", gLink: "", reward: {silver: 0, props: []}};
        var Xc = function gameTaskData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jc, t = arguments[1];
            switch (t.type) {
                case Vl:
                    var o = t.payload;
                    return Kc({}, e, o);
                default:
                    return e
            }
        }, Qc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, es = {at: 0, comment: 0, group: 0, like: 0};
        var ts = function yubaMessageReducers_yubaMessageData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : es, t = arguments[1], o = t.type,
                r = t.payload;
            switch (o) {
                case P:
                    return Qc({}, e, r);
                default:
                    return e
            }
        }, os = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, rs = {matchFocusData: null, redDot: 0};
        var ns, is, as, ls = {
                baseConfig: Sc,
                CategoryData: Ec,
                GameData: Pc,
                SearchData: kc,
                HistoryData: zc,
                FollowData: Rc,
                actNavConfig: xc,
                iframePayStatus: $c,
                nobleBuyModalData: Zc,
                TaskData: Xc,
                yubaMessageData: ts,
                matchFocusData: function matchFocusDetail() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rs, t = arguments[1],
                        o = t.type, r = t.payload;
                    switch (o) {
                        case bc:
                            var n = r;
                            return n && "{}" !== JSON.stringify(n) ? os({}, e, {matchFocusData: n}) : e;
                        case dc:
                            return os({}, e, {redDot: +r || 0});
                        default:
                            return e
                    }
                }
            }, cs = o("1a22b"), ss = o.n(cs), us = o("447d8"),
            ps = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function actNavServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : ps(t)) && "function" !== typeof t ? e : t
        }

        function actNavServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : ps(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function actNavServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var fs, bs, ds, ys, ms = (ns = (0, n.a.Store)(), is = function (e) {
                function ActNavService() {
                    var t, o;
                    !function actNavServices_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, ActNavService);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = actNavServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function actNavServices_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(o, "store", as, o), actNavServices_possibleConstructorReturn(o, t)
                }

                return actNavServices_inherits(ActNavService, e), ActNavService.prototype.getActConfig = function getActConfig() {
                    var e = this;
                    Object(Na.forkJoin)(this.getActNavConfig()).pipe(Object(a.map)(function (t) {
                        var o = t[0] || {};
                        return e.initNavConfig(o)
                    })).subscribe(function (t) {
                        e.store.dispatch(Lc.getActNavConfig(t))
                    })
                }, ActNavService.prototype.initNavConfig = function initNavConfig(e) {
                    for (var t = e || {}, o = t.navigation_bar || [], r = t.logo || [], n = t.activity_entrance || [], i = parseInt((new Date).getTime() / 1e3, 10), a = [], l = 0, c = 0, s = 0, u = {}, p = {}; l < o.length; l++) {
                        var f = o[l] || {};
                        if (i >= f.start_time && i <= f.end_time) {
                            u = f;
                            break
                        }
                    }
                    for (; c < r.length; c++) {
                        var b = r[c] || {};
                        if (i >= b.start_time && i <= b.end_time) {
                            p = b;
                            break
                        }
                    }
                    for (; s < n.length; s++) {
                        var d = n[s] || {};
                        i >= d.start_time && i <= d.end_time && a.push(d)
                    }
                    return {
                        switcher: {
                            backdrop: t.is_open_navigation_bar && Object.keys(u).length > 1 ? 1 : 0,
                            logo: t.is_open_logo || 0,
                            entry: t.is_open_activity_entrance || 0
                        }, backdrop: u || {}, logo: p || {}, entry: a || []
                    }
                }, ActNavService.prototype.getActNavConfig = function getActNavConfig() {
                    return i.jsonpClient.get(String, "//webconf.douyucdn.cn/resource/common/home_top_activity_info.json", "getHomeTopActivityInfo")
                }, ActNavService
            }(u.Service), as = function actNavServices_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(is.prototype, "store", [ns], {enumerable: !0, initializer: null}), is),
            hs = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function matchFocusServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : hs(t)) && "function" !== typeof t ? e : t
        }

        function matchFocusServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : hs(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function matchFocusServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var vs = (fs = (0, n.a.Store)(), Object(et.log)((ds = function (e) {
                function MatchFocusServices() {
                    var t, o;
                    !function matchFocusServices_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, MatchFocusServices);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = matchFocusServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function matchFocusServices_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(o, "store", ys, o), matchFocusServices_possibleConstructorReturn(o, t)
                }

                return matchFocusServices_inherits(MatchFocusServices, e), MatchFocusServices.prototype.getMatchFocusData = function getMatchFocusData() {
                    this.store.dispatch(yc.getMatchFocusData())
                }, MatchFocusServices.prototype.getFocusDot = function getFocusDot(e) {
                    e && this.store.dispatch(yc.getFocusDot())
                }, MatchFocusServices
            }(u.Service), ys = function matchFocusServices_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(ds.prototype, "store", [fs], {enumerable: !0, initializer: null}), bs = ds)) || bs),
            _s = (o("82543"), o("29218")), gs = o.n(_s), Ds = o("2b78b"), Ss = "10010010100", ws = [{
                text: "\u9996\u9875",
                link: "/",
                hasDrop: !1,
                targetBlank: !1,
                type: "home",
                dysCode: "130100101016"
            }, {
                text: "\u76f4\u64ad",
                link: "/directory/all",
                hasDrop: !1,
                targetBlank: !1,
                type: "live",
                dysCode: Ss + "1"
            }, {
                text: "\u5206\u7c7b",
                link: "/directory",
                hasDrop: !0,
                targetBlank: !1,
                type: "directory",
                dysCode: Ss + "2"
            }, {
                text: "\u89c6\u9891",
                link: "//v.douyu.com",
                hasDrop: !1,
                targetBlank: !0,
                dysCode: Ss + "3"
            }, {
                text: "\u6e38\u620f",
                link: "//wan.douyu.com",
                hasDrop: !0,
                targetBlank: !0,
                dysCode: "13010010100Q"
            }, {text: "\u9c7c\u5427", link: "//yuba.douyu.com", hasDrop: !1, targetBlank: !0, dysCode: Ss + "4"}],
            Os = function Icon(e) {
                var t = e.symbol;
                return ss.a.createElement("svg", {
                    className: "Header-icon",
                    __self: void 0
                }, ss.a.createElement("use", {xlinkHref: "#" + t, __self: void 0}))
            }, Es = o("59cf4"), Cs = o.n(Es), Ns = o("21a65"), Ps = o.n(Ns), js = new Cs.a({
                id: "logo_ce438c6",
                use: "logo_ce438c6-usage",
                viewBox: "0 0 2684 1024",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2684 1024" id="logo_ce438c6">\n<title>logo</title>\n<path fill="#ff552e" d="M1691.669 670.897l-8.688 70.621h-129.326l8.662-70.621h-503.007l11.452-54.367c1.993-9.485 10.162-16.254 19.604-16.254h480.614l60.828-495.911c2.511-19.355 17.777-33.744 35.786-33.744h97.923l-65.16 529.655h100.47l-7.248 49.836c-1.593 11.912-11.495 20.785-23.196 20.785h-78.715zM2516.731 459.034h-169.341l-12.722 106.274h136.836c8.367 0 16.057-3.524 23.064-10.572 6.979-7.054 11.188-15.785 12.62-26.221l9.544-69.48zM2526.432 388.414l14.623-106.462h-172.466l-12.745 106.462h170.587zM2227.348 281.952h-154.883l12.933-70.090h421.892l36.669-70.878h-473.425l-15.925 35.568h-125.423l25.798-80.431c10.594-15.62 30.145-25.26 51.316-25.299l84.138-0.202h579.259c12.069 0 16.412 10.88 12.48 20.035l-50.448 121.207h40.008l-37.165 340.942c-3.107 22.697-12.576 42.164-28.418 58.403-15.87 16.261-33.733 24.38-53.635 24.38h-620.671c-19.924 0-35.568-8.119-46.959-24.38-11.397-16.238-15.55-35.706-12.443-58.403l46.967-340.942h132.831l-21.621 176.552h183.981l12.745-106.462zM2021.974 459.034l-8.509 69.48c-1.427 10.436 0.386 19.167 5.437 26.221 5.051 7.048 12.030 10.572 20.948 10.572h153.577l12.722-106.274h-184.175zM2616.798 741.517h-780.66l11.84-54.367c2.067-9.485 10.507-16.254 20.27-16.254h780.027l-7.494 49.836c-1.647 11.912-11.885 20.785-23.983 20.785zM1129.931 141.241l459.034 69.098-14.122 72.143-359.627-53.944c-29.178-4.376-54.027-22.18-66.118-47.365l-19.168-39.933zM1094.621 353.103l459.034 59.995-10.952 81.246-360.541-46.997c-28.869-3.763-54.028-22.647-66.95-50.26l-20.591-43.985z" />\n<path d="M1077.659 812.138l-18.349 105.931h39.635c20.812 0 37.058-5.216 48.756-15.663 11.685-10.437 17.54-23.747 17.54-39.92 0-14.886-6.045-26.994-18.122-36.335-12.070-9.341-28.43-14.012-49.059-14.012h-20.402zM1046.208 796.224c1.575-11.12 11.201-19.397 22.565-19.397h39.545c29.845 0 52.683 8.008 68.506 24.014 15.818 16.005 23.727 36.65 23.727 61.923 0 26.040-8.073 47.647-24.237 64.833-16.163 17.192-36.191 25.782-60.065 25.782h-84.12c-3.9 0-7.062-3.162-7.062-7.062 0-0.331 0.023-0.661 0.069-0.988l21.071-149.105zM1331.917 776.828c23.708 0 43.054 7.311 58.032 21.926 14.973 14.621 22.465 33.471 22.465 56.554 0 28.997-8.818 52.587-26.444 70.782-17.626 18.189-40.204 27.289-67.741 27.289-23.869 0-43.567-7.518-59.089-22.548-15.517-15.030-23.278-34.169-23.278-57.41 0-27.677 9.103-50.705 27.319-69.053 18.211-18.369 41.126-27.54 68.736-27.54zM1318.399 918.069c16.331 0 30.199-5.816 41.603-17.439 11.399-11.633 17.101-25.761 17.101-42.397 0-13.331-4.476-24.334-13.438-33.041-8.952-8.701-20.293-13.055-34.025-13.055-15.938 0-29.664 5.816-41.184 17.444-11.525 11.633-17.285 25.531-17.285 41.701 0 13.791 4.402 25.030 13.197 33.731 8.8 8.707 20.141 13.055 34.030 13.055zM1624.276 776.828l-15.745 108.379c-6.453 45.136-33.77 67.707-81.931 67.707-25.404 0-44.897-5.582-58.491-16.741-13.588-11.153-20.385-26.693-20.385-46.602 0-4.397 0.339-9.004 1.022-13.815l11.85-79.979c1.615-10.878 11.166-18.95 22.429-18.95h18.246l-14.407 98.433c-0.429 3.317-0.638 6.425-0.638 9.335 0 11.947 3.737 20.962 11.217 27.067 7.48 6.089 17.213 9.142 29.198 9.142 12.154 0 22.18-3.301 30.084-9.886 7.909-6.602 12.747-16.201 14.537-28.814l12.425-86.238c1.575-10.916 11.144-19.039 22.44-19.039h18.15zM1800.828 776.828l-66.535 102.49-10.351 74.061h-37.471l10.351-74.061-37.236-102.49h21.312c9.658 0 18.232 6.173 21.306 15.334l17.718 52.779 34.229-57.194c4.058-6.772 11.363-10.918 19.25-10.918h27.427zM1977.379 776.828l-15.739 108.666c-6.458 45.255-33.776 67.886-81.936 67.886-25.404 0-44.897-5.597-58.491-16.785-13.588-11.183-20.385-26.763-20.385-46.725 0-4.409 0.339-9.028 1.022-13.851l11.85-80.19c1.615-10.906 11.166-19.001 22.429-19.001h18.246l-14.407 98.693c-0.429 3.326-0.638 6.442-0.638 9.359 0 11.978 3.737 21.017 11.217 27.139 7.48 6.105 17.213 9.166 29.198 9.166 12.154 0 22.18-3.309 30.084-9.912 7.909-6.619 12.747-16.244 14.537-28.89l12.425-86.466c1.575-10.945 11.144-19.089 22.44-19.089h18.15zM1995.034 953.379c-9.751 0-17.655-7.904-17.655-17.655s7.904-17.655 17.655-17.655c9.751 0 17.655 7.904 17.655 17.655s-7.904 17.655-17.655 17.655zM2189.241 783.113l-5.362 31.785c-12.116-4.19-24.456-6.285-37.009-6.285-20.659 0-36.703 6.656-48.121 19.962-11.428 13.306-17.139 28.953-17.139 46.941 0 14.043 3.942 25.233 11.825 33.574 7.884 8.336 18.507 12.499 31.864 12.499 16.422 0 34.962-6.689 55.622-20.077l-4.708 38.315c-18.177 9.035-36.097 13.552-53.76 13.552-22.192 0-40.146-7.272-53.872-21.806-13.726-14.539-20.582-33.509-20.582-56.919 0-28.664 9.265-52.14 27.806-70.417 18.545-18.271 42.526-27.409 71.937-27.409 12.849 0 26.676 2.095 41.498 6.285zM2320.612 776.828c23.708 0 43.054 7.311 58.032 21.926 14.968 14.621 22.459 33.471 22.459 56.554 0 28.997-8.813 52.587-26.444 70.782-17.62 18.189-40.204 27.289-67.741 27.289-23.864 0-43.562-7.518-59.084-22.548-15.517-15.030-23.283-34.169-23.283-57.41 0-27.677 9.103-50.705 27.319-69.053 18.216-18.369 41.126-27.54 68.741-27.54zM2307.086 918.069c16.337 0 30.205-5.816 41.605-17.439 11.4-11.633 17.102-25.761 17.102-42.397 0-13.331-4.476-24.334-13.433-33.041-8.952-8.701-20.294-13.055-34.026-13.055-15.944 0-29.671 5.816-41.191 17.444-11.52 11.633-17.28 25.531-17.28 41.701 0 13.791 4.397 25.030 13.197 33.731 8.8 8.707 20.142 13.055 34.026 13.055zM2639.538 776.828l8.737 176.552h-38.3l-6.176-119.302-68.875 119.302h-18.799l-33.183-122.715-42.127 122.715h-39.713l60.744-176.552h43.169l29.921 111.12 62.634-111.12h41.968z" />\n<path fill="#231815" d="M1117.645 179.111c8.602-1.575 12.757-11.581 7.86-18.911l-12.851-19.217c-33.891-50.922-76.709-88.765-127.249-112.473-40.328-18.916-84.596-28.511-131.569-28.511-42.246-0.006-79.023 8.031-102.553 16.612-20.326-5.265-67.612-15.427-129.667-15.427-57.691 0-113.722 8.715-166.538 25.917-65.606 21.365-125.539 53.354-178.119 95.082-42.065 33.369-79.501 72.982-111.271 117.727-54.245 76.394-73.252 141.351-74.032 144.083l-1.902 6.623c-2.166 7.558 0.764 15.661 7.239 20.013l5.672 3.818c61.396 41.305 140.314 64.996 216.517 64.996 49.254 0 97.381-9.444 143.057-28.065 106.807-43.548 166.692-116.942 198.12-170.841 2.952-5.064 5.716-10.051 8.305-14.943 0.802 25.572-1.297 55.524-9.245 88.27-16.204 66.738-50.337 122.568-101.448 165.933-38.706 32.84-73.219 45.891-73.565 46.019l-9.767 3.556-4.826 9.227c-5.502 10.374-31.896 64.712-11.361 116.001 6.392 15.955 21.31 25.483 39.921 25.483 17.66 0 37.321-8.298 53.349-17.224 8.432 9.717 15.005 16.089 20.628 20.836-1.803 22.239-15.16 33.58-30.457 46.703-12.356 10.591-27.888 13.622-43.52 13.622-28.125-44.31-69.349-55.689-120.4-55.689-20.843 0-41.059 4.497-60.093 13.368-21.761 10.134-20.733 41.784 1.632 50.46 0.599 0.234 65.216 26.045 103.493 78.887 36.969 51.039 15.577 103.307 14.087 106.78l-14.263 30.163c-3.897 8.237 3.314 17.402 12.114 15.393l32.545-7.418c13.181-2.916 47.451-12.845 80.859-41.834 29.043-25.205 49.507-58.451 59.884-96.996 65.551-10.624 125.974-34.443 179.85-70.94 55.075-37.309 102.179-87.942 136.208-146.426 34.727-59.687 56.070-127.722 61.72-196.753 5.398-65.992-3.617-133.259-26.114-195.578 59.104-68.959 134.438-84.057 135.235-84.207l22.514-4.118z" />\n<path fill="#f0f1f2" d="M585.932 852.978c288.922-35.094 445.671-334.998 343.068-590.202 67.816-89.055 161.223-106.145 161.223-106.145-110.078-165.393-288.070-132.486-337.418-110.859-22.959-6.918-148.141-38.272-289.439 7.747-274.258 89.316-345.728 338.454-345.728 338.454 78.413 52.753 206.486 86.528 334.499 34.332 193.119-78.737 225.015-259.651 225.015-259.651s35.854 81.547 8.536 194.081c-42.916 176.829-192.036 231.162-192.036 231.162-7.261 13.69-24.905 55.847-10.125 92.75 7.305 18.248 43.417 4.068 74.049-17.297 25.009 32.306 35.364 38.355 42.065 43.158 1.369 36.118-12.485 60.885-37.142 82.027-24.789 21.265-50.766 30.073-68.846 33.821-29.637-64.262-104.208-87.516-164.46-59.439 0 0 71.888 27.882 115.629 88.264 47.907 66.143 16.88 134.367 16.88 134.367 34.749-7.708 107.962-42.457 124.231-136.57z" />\n<path fill="#bcbcbc" d="M491.003 45.415c129.68-33.899 240.352-6.107 261.802 0.356 19.28-8.45 58.199-18.621 105.032-18.015-42.96 3.843-67.909 15.787-86.383 23.162-0.859 0.343-1.704 0.676-2.537 0.998l-0.107 0.602c39.403 25.41 64.004 61.855 64.004 61.855-79.389-100.992-288.72-62.958-322.211-53.434-5.297-5.303-13.452-11.287-19.6-15.525z" />\n<path fill="#bcbcbc" d="M1071.083 161.784c-30.87 9.933-93.141 36.721-142.083 100.991 30.944 76.967 38.298 157.999 25.552 234.607-1.936 6.357-4.086 12.681-6.451 18.975 17.209-153.353-34.511-247.714-82.64-335.238 35.986 42.313 42.707 55.813 42.707 55.813 62.010-63.343 168.466-79.090 168.466-79.090-1.883 1.337-3.733 2.651-5.55 3.941z" />\n<path fill="#231815" d="M680.604 364.334c24.053-81.007-6.722-136.76-6.722-136.76-23.316 88.459-66.815 153.739-160.074 203.164-67.48 35.757-184.621 42.162-184.621 42.162l159.068 87.624c97.409-22.433 162.52-95.744 192.349-196.191z" />\n<path fill="#fff" d="M664.598 240.419c12.637 52.681 4.766 90.391 0.158 99.212-6.303 12.042-30.358-4.749-30.358-4.749s9.849 80.358 0.251 90.047c-9.604 9.69-57.872-26.518-57.872-26.518s22.416 85.244 6.406 96.010c-16.004 10.767-91.891-48.827-91.891-48.827s25.188 97.302 9.511 101.704c-14.037 3.946-35.987-2.648-59.623-13.65l-36.806-19.547c-26.208-15.358-50.584-32.26-64.74-42.439 30.327-1.775 103.497-10.437 167.939-52.179 85.586-55.439 140.61-122.897 157.026-179.065z" />\n<path fill="#2d0a03" stroke="#231815" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="35.3103" d="M496.533 506.619c97.632 60.955 125.441 167.458 69.942 244.77-55.504 77.318-164.2 83.488-251.675 8.389-78.682-67.556-114.492-180.069-68.701-243.857 45.802-63.799 162.614-64.125 250.434-9.302z" />\n<path fill="#231815" d="M610.523 624.884c-17.758-59.853-65.458-114.001-127.607-144.858-100.814-50.036-215.487-27.802-261.054 50.64-44.632 76.809-7.328 187.739 84.911 252.539 54.082 37.989 118.993 54.751 176.127 45.969 4.063-0.625 8.083-1.378 12.059-2.258 45.124-10.033 80.536-35.234 102.406-72.88 21.974-37.818 26.645-83.687 13.158-129.153z" />\n<path fill="#f8c100" d="M471.194 494.97c102.997 51.127 153.655 163.949 105.791 246.336-47.864 82.381-168.268 89.603-262.504 23.402-84.763-59.543-118.342-158.487-78.851-226.459s142.925-89.265 235.564-43.28z" />\n<path fill="#231815" d="M444.805 479.517c0 0-166.65 37.652-175.651 245.539l6.716 9.136c0 0-7.64-64.231 65.337-158.72 58.020-75.121 106.825-93.1 106.825-93.1l-3.227-2.855z" />\n<path fill="#231815" d="M196.833 705.283c-108.137-54.934-177.719-127.57-159.392-170.634 20.323-47.756 141.022-41.061 269.581 14.958 10.418 4.538 20.53 9.275 30.369 14.144 3.265-4.671 6.645-9.363 10.287-13.89-11.769-5.866-23.894-11.56-36.39-17.005-146.043-63.633-283.154-71.242-306.239-16.989-16.276 38.238 28.466 96.99 107.443 150.629 31.118 21.133 65.288 30.165 84.342 38.786z" />\n<path fill="#f0f1f2" d="M626.083 527.481c-43.177 57.667-111.594 94.915-188.602 94.915-5.857 0-11.654-0.21-17.397-0.631l-0.109-0.133c37.982 47.187 95.849 77.323 160.672 77.323 99.245 0 182.181-70.622 202.406-164.907z" />\n<path fill="#231815" d="M454.2 635.335v0.181c5.46 4.686 11.13 9.107 17.019 13.205 7.443 5.052 15.127 9.756 23.188 13.696 8.007 4.056 16.314 7.46 24.807 10.287 8.428 2.999 17.085 5.351 25.863 7.111 8.778 1.787 17.692 2.889 26.656 3.381l8.827 0.343c-0.263 0.011 0.738-0.011-0.558 0.017h0.109l0.23-0.006 0.908-0.039 3.626-0.127 14.405-0.47c8.542-0.902 17.162-1.688 26.098-3.769 4.468-0.703 8.794-1.998 13.125-3.287 4.342-1.251 8.739-2.38 12.907-4.178 4.178-1.754 8.592-2.972 12.704-4.914l12.409-5.761c7.963-4.46 16.008-8.909 23.418-14.399 3.877-2.512 7.465-5.401 11.080-8.295 3.648-2.855 7.334-5.7 10.615-8.998 7.028-6.148 13.175-13.181 19.48-20.187 5.885-7.327 11.786-14.759 16.779-22.888 2.767-3.907 4.938-8.146 7.345-12.307 2.428-4.15 4.774-8.373 6.645-12.822 4.299-8.694 7.755-17.786 11.168-27.060-1.449 9.69-2.581 19.65-5.447 29.207-1.099 4.892-2.702 9.612-4.419 14.321-1.641 4.737-3.216 9.551-5.507 14.017-3.97 9.291-8.975 18.046-14.121 26.828-5.704 8.367-11.589 16.706-18.398 24.315-3.183 4.018-6.814 7.598-10.446 11.211-3.577 3.663-7.203 7.31-11.271 10.42-7.733 6.779-16.237 12.54-24.796 18.3-8.882 5.18-17.807 10.431-27.394 14.349-4.665 2.263-9.582 3.846-14.476 5.534-4.878 1.732-9.773 3.442-14.843 4.543-5.075 1.168-9.926 2.728-15.226 3.547l-15.904 2.463c-5.031 0.548-9.718 0.719-14.597 0.991l-4.534 0.238-1.613 0.022-1.947-0.033-7.788-0.166c-10.38-0.393-20.749-1.5-30.992-3.392-10.249-1.865-20.377-4.444-30.271-7.769-19.77-6.757-38.332-16.795-55.368-28.82-8.406-6.17-16.647-12.634-24.009-20.054-3.974-3.797-7.718-7.824-11.319-11.974-4.158-3.352-9.463-9.959-10.28-12.51l-0.002-0.007c-4.189-6.035-3.208-14.414 2.461-19.266 3.754-3.212 8.676-4.118 13.078-2.858 0.251 0.020 0.537 0.052 0.86 0.096l10.826 0.676c3.921 0.31 9.062 0.050 13.541 0.116 9.27-0.266 18.545-0.802 27.799-1.981l13.809-2.258 13.672-3.171c8.996-2.584 18.069-5.152 26.863-8.644 4.348-1.832 8.854-3.392 13.082-5.545 4.293-2.031 8.625-4.023 12.775-6.369 8.504-4.338 16.757-9.302 24.665-14.831 4.052-2.645 7.832-5.65 11.753-8.528 3.998-2.806 7.558-6.12 11.37-9.208 7.317-6.369 14.591-13.154 21.444-20.381-5.234 8.445-10.61 16.889-17.047 24.714-3.265 3.807-6.322 7.869-9.855 11.46-3.434 3.708-6.88 7.443-10.681 10.78-7.35 6.978-15.215 13.475-23.511 19.418-4.074 3.104-8.46 5.7-12.786 8.439-4.277 2.839-8.871 5.086-13.344 7.614-9.078 4.776-18.458 9.075-28.16 12.584l-14.728 4.765-15.034 3.791c-8.825 1.823-17.738 3.418-26.738 4.289z" />\n<path fill="#231815" d="M560.372 147.064c0 70.621-55.246 127.873-123.399 127.873-68.148 0-123.394-57.251-123.394-127.873 0-70.627 55.246-127.879 123.394-127.879 68.153 0 123.399 57.251 123.399 127.879z" />\n<path fill="#e9e9e9" d="M560.372 162.855c0 61.903-48.424 112.085-108.159 112.085s-108.159-50.182-108.159-112.085c0-61.903 48.424-112.085 108.159-112.085s108.159 50.182 108.159 112.085z" />\n<path fill="#fff" d="M556.487 161.403c0 54.908-44.622 99.415-99.662 99.415s-99.662-44.506-99.662-99.415c0-54.908 44.622-99.421 99.662-99.421s99.662 44.512 99.662 99.421z" />\n<path fill="#231815" d="M539.742 161.403c0 45.681-37.125 82.713-82.919 82.713-45.789 0-82.914-37.032-82.914-82.713s37.125-82.713 82.914-82.713c45.795 0 82.919 37.032 82.919 82.713z" />\n<path fill="#fff" d="M552.151 167.872c0 23.997-19.506 43.459-43.567 43.459-24.056 0-43.562-19.462-43.562-43.459 0-24.003 19.506-43.459 43.562-43.459 24.061 0 43.567 19.456 43.567 43.459z" />\n<path fill="#fff" d="M416.269 135.985c0 13.416-10.903 24.298-24.357 24.298-13.449 0-24.357-10.882-24.357-24.298s10.909-24.298 24.357-24.298c13.454 0 24.357 10.882 24.357 24.298z" />\n</symbol>'
            }), Ts = (Ps.a.add(js), js), ks = function Logo(e) {
                var t = e.isDarkMode, o = e.switcher.logo, r = e.logo.logo_pic;
                return ss.a.createElement("a", {
                    className: "Header-logo",
                    href: "/",
                    onMouseDown: pn("13010010100E"),
                    __self: void 0
                }, !t && o && r ? ss.a.createElement("img", {
                    src: r + Ds.imgSuffix,
                    alt: "\u6597\u9c7c\u76f4\u64ad",
                    __self: void 0
                }) : ss.a.createElement(Os, {symbol: Ts.id, __self: void 0}))
            };
        ks.propTypes = {switcher: gs.a.object, logo: gs.a.object}, ks.defaultProps = {switcher: {}, logo: {}};
        var zs, Is = ks, Rs = (o("2837a"), new Cs.a({
                id: "arrow_6bd6266",
                use: "arrow_6bd6266-usage",
                viewBox: "0 0 48 32",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" id="arrow_6bd6266">\n<title>arrow</title>\n<path d="M26.56 29.653l17.6-23.467c1.060-1.414 0.774-3.42-0.64-4.48-0.554-0.415-1.228-0.64-1.92-0.64h-35.2c-1.767 0-3.2 1.433-3.2 3.2 0 0.692 0.225 1.366 0.64 1.92l17.6 23.467c1.060 1.414 3.066 1.7 4.48 0.64 0.243-0.182 0.458-0.397 0.64-0.64z" />\n</symbol>'
            })), Ms = (Ps.a.add(Rs), Rs),
            As = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function UnionDropMenu_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : As(t)) && "function" !== typeof t ? e : t
        }

        function UnionDropMenu_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : As(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function UnionDropMenu_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Ls = Object(et.log)(zs = function (e) {
            function UnionDropMenu() {
                var t, o;
                !function UnionDropMenu_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, UnionDropMenu);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = UnionDropMenu_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), o.state = {dropShow: 0}, o.dropShowHandle = function () {
                    o.state.dropShow || (o.timer && (clearTimeout(o.timer), o.timer = null), o.timer = setTimeout(function () {
                        return o.props.onExpose()
                    }, 50)), o.props.onShow(), o.setState({dropShow: 1})
                }, o.dropHideHandle = function () {
                    o.setState({dropShow: 0})
                }, UnionDropMenu_possibleConstructorReturn(o, t)
            }

            return UnionDropMenu_inherits(UnionDropMenu, e), UnionDropMenu.prototype.render = function render() {
                var e = this.props, t = e.wrapClassName, o = e.children, r = e.link, n = e.placeholder, i = e.dropIcon,
                    a = e.targetBlank;
                return ss.a.createElement("div", {
                    className: "public-DropMenu " + t + " " + (this.state.dropShow ? "is-hover" : ""),
                    onMouseEnter: this.dropShowHandle,
                    onMouseLeave: this.dropHideHandle,
                    __self: this
                }, ss.a.createElement("a", {
                    className: "public-DropMenu-link",
                    href: r,
                    target: a ? "_blank" : "_self",
                    __self: this
                }, n), i ? ss.a.createElement(Os, {
                    symbol: Ms.id,
                    __self: this
                }) : null, ss.a.createElement("div", {
                    className: "public-DropMenu-drop",
                    __self: this
                }, ss.a.createElement("div", {
                    className: "public-DropMenu-drop-main",
                    __self: this
                }, o), ss.a.createElement("i", {__self: this})))
            }, UnionDropMenu
        }(ss.a.Component)) || zs;
        Ls.propTypes = {
            wrapClassName: gs.a.string,
            children: gs.a.object,
            link: gs.a.string,
            placeholder: gs.a.object,
            dropIcon: gs.a.bool,
            targetBlank: gs.a.bool,
            onShow: gs.a.func,
            onExpose: gs.a.func
        }, Ls.defaultProps = {
            wrapClassName: "",
            children: {},
            link: "",
            placeholder: {},
            dropIcon: !0,
            targetBlank: !1,
            onShow: function onShow() {
            },
            onExpose: function onExpose() {
            }
        };
        var Bs = Ls, xs = (o("436d3"), function LinkAll(e) {
            var t = e.link, o = (t = void 0 === t ? {} : t).placeholder, r = t.link, n = t.dysCode, i = e.dysHandle;
            return o && r ? ss.a.createElement("a", {
                className: "DropMenuList-linkAll",
                target: "_blank",
                href: r,
                onMouseDown: i(n),
                __self: void 0
            }, o) : null
        });
        xs.propTypes = {link: gs.a.object, dysHandle: gs.a.func}, xs.defaultProps = {
            link: {},
            dysHandle: function dysHandle() {
            }
        };
        var Fs = xs, Hs = (o("e5241"), function Loading() {
            return ss.a.createElement("div", {
                className: "Header-loading",
                __self: void 0
            }, ss.a.createElement("i", {__self: void 0}), ss.a.createElement("span", {__self: void 0}, "\u6570\u636e\u52a0\u8f7d\u4e2d"))
        }), Us = function Category(e) {
            var t = e.name, o = void 0 === t ? "" : t, r = e.url, n = void 0 === r ? "" : r, i = e.dysHandle;
            return ss.a.createElement("a", {
                className: "Category-item",
                href: n,
                target: "_blank",
                onMouseDown: i,
                __self: void 0
            }, o)
        };
        Us.propTypes = {name: gs.a.string, url: gs.a.string, dysHandle: gs.a.func};
        var Gs = Us, Ws = o("7912b"), Ys = o("79618"), $s = o.n(Ys), qs = function Game(e) {
            var t = e.channel, o = e.name, r = void 0 === o ? "" : o, n = e.link, i = void 0 === n ? "" : n, a = e.icon,
                l = void 0 === a ? "" : a, c = e.hasTask, s = e.hasGift, u = e.description, p = e.dysHandle;
            return ss.a.createElement("a", {
                className: "Game-item",
                href: i,
                target: "_blank",
                onMouseDown: p,
                __self: void 0
            }, ss.a.createElement(Ws.b, {
                className: "Game-thumb",
                isLazyable: !1,
                src: l,
                defaultSrc: $s.a,
                alt: r,
                __self: void 0
            }), ss.a.createElement("div", {
                className: "Game-info",
                __self: void 0
            }, ss.a.createElement("h4", {
                className: t,
                dangerouslySetInnerHTML: {__html: r},
                __self: void 0
            }), "web" === t ? ss.a.createElement("span", {
                className: "Game-link",
                href: i,
                target: "_blank",
                __self: void 0
            }, "\u5f00\u59cb\u6e38\u620f") : ss.a.createElement(ss.a.Fragment, {__self: void 0}, u ? ss.a.createElement("p", {__self: void 0}, u) : null, ss.a.createElement("h5", {__self: void 0}, c ? ss.a.createElement("span", {
                href: i,
                target: "_blank",
                __self: void 0
            }, "\u4efb\u52a1") : null, c && s ? ss.a.createElement("i", {__self: void 0}, " | ") : null, s ? ss.a.createElement("span", {
                href: i,
                target: "_blank",
                __self: void 0
            }, "\u793c\u5305") : null))))
        };
        qs.propTypes = {
            channel: gs.a.string,
            name: gs.a.string,
            link: gs.a.string,
            icon: gs.a.string,
            dysHandle: gs.a.func
        };
        var Vs = qs, Zs = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }, Ks = n.a.Region, Js = "13010010100", Xs = {
            category: [{}, {placeholder: "\u5168\u90e8\u5206\u7c7b", link: "/directory", dysCode: Js + "P"}],
            game: [{
                placeholder: "\u7f51\u6e38\u4e2d\u5fc3 >>",
                link: "//wan.douyu.com",
                dysCode: Js + "S"
            }, {placeholder: "\u624b\u6e38\u4e2d\u5fc3 >>", link: "//mgame.douyu.com", dysCode: Js + "U"}]
        }, Qs = function dysHandleCombine(e, t, o) {
            return function () {
                var r = {category: "O", web: "R", mobile: "T"}[o], n = e ? {tid: e} : {};
                Object(sn.dys)("click_topnavi_class", Zs({}, n, {pos: t})), pn("" + (Js + r))({com: Zs({}, n, {p: t})})
            }
        }, eu = function DropList(e) {
            var t = e.loading, o = e.data, r = void 0 === o ? [] : o, n = e.type, i = r.map(function (e) {
                var t = e.list;
                return (void 0 === t ? [] : t).length
            }).reduce(function (e, t, o) {
                return [].concat(e, [e[o] + t])
            }, [0]);
            return ss.a.createElement(ss.a.Fragment, {__self: void 0}, 2 === t ? function renderList(e, t, o) {
                return e.length ? ss.a.createElement("div", {
                    className: "DropMenuList-wrapper",
                    __self: void 0
                }, e.map(function (e, r) {
                    var n = e.list, i = void 0 === n ? [] : n, a = e.name, l = e.channel, c = void 0 === l ? "" : l;
                    return ss.a.createElement("div", {
                        key: a,
                        className: "DropMenuList",
                        __self: void 0
                    }, ss.a.createElement("h3", {
                        className: "DropMenuList-name is-" + c,
                        __self: void 0
                    }, a), ss.a.createElement("ul", {
                        className: "DropMenuList-list",
                        __self: void 0
                    }, i.map(function (e, n) {
                        return ss.a.createElement("li", {
                            className: "DropMenuList-item",
                            key: e.name,
                            __self: void 0
                        }, "category" === t ? ss.a.createElement(Gs, {
                            name: e.name,
                            url: e.url,
                            dysHandle: Qs(+e.tid, o[r] + n + 1, t),
                            __self: void 0
                        }) : ss.a.createElement(Vs, {
                            channel: c,
                            name: e.name,
                            link: e.link,
                            icon: e.icon,
                            hasTask: e.hasTask,
                            hasGift: e.hasGift,
                            description: e.description,
                            dysHandle: Qs(+e.tid, o[r] + n + 1, c),
                            __self: void 0
                        }))
                    })), ss.a.createElement(Fs, {link: Xs[t][r], dysHandle: pn, __self: void 0}))
                })) : null
            }(r, n, i) : ss.a.createElement(Hs, {__self: void 0}), ss.a.createElement(Ks, {
                className: "DropMenuList-ad",
                name: "sign",
                belongTo: "HeaderApp",
                data: {id: {category: "1021102", game: "1021105"}[n], type: "common"},
                __self: void 0
            }))
        };
        eu.propTypes = {
            loading: gs.a.number,
            data: gs.a.array,
            type: gs.a.string.isRequired
        }, eu.defaultProps = {loading: 0, data: [], type: "category"};
        var tu, ou = eu,
            ru = (o("13c31"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            });

        function DropMenu_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : ru(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function DropMenu_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var nu = Object(et.log)(tu = function (e) {
            function DropMenu() {
                return function DropMenu_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, DropMenu), function DropMenu_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : ru(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return DropMenu_inherits(DropMenu, e), DropMenu.prototype.render = function render() {
                var e = this.props, t = e.CategoryData, o = e.GameData, r = 2 === e.sourceData ? "category" : "game",
                    n = "category" === r ? t.category : o.game, i = "category" === r ? t.loaded : o.loaded;
                return ss.a.createElement(ou, {loading: i, type: r, data: n, __self: this})
            }, DropMenu
        }(ss.a.Component)) || tu;
        nu.propTypes = {
            CategoryData: gs.a.object.isRequired,
            GameData: gs.a.object.isRequired,
            sourceData: gs.a.number
        }, nu.defaultProps = {sourceData: 0};
        var iu, au, lu, cu, su, uu, pu, fu, bu, du, yu, mu, hu = Object(us.connect)(function mapStateToProps(e) {
            return {CategoryData: e.CategoryData, GameData: e.GameData}
        })(nu), vu = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function Menu_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function Menu_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : vu(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Menu_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function Menu_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var _u = n.a.Service, gu = "13010010100",
            Du = (iu = _u(mo), au = _u(tr), lu = _u(i.DataCenter.event), cu = _u(i.DataCenter.global), Object(et.log)((mu = yu = function (e) {
                function Menu() {
                    !function Menu_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Menu);
                    var t = function Menu_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : vu(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return Menu_initDefineProp(t, "categoryServices", pu, t), Menu_initDefineProp(t, "gameServices", fu, t), Menu_initDefineProp(t, "event", bu, t), Menu_initDefineProp(t, "global", du, t), t.triggerScroll = function (e) {
                        Menu.scrollLock[e] || (Menu.scrollLock[e] = 1, t.event.trigger(window, "scroll"))
                    }, t.onShow = function (e) {
                        return function () {
                            var o = t.props, r = o.CategoryData, n = o.GameData;
                            switch (e) {
                                case 2:
                                    0 === r.loaded && (t.categoryServices.getCategoryByEpic(), t.triggerScroll("category"));
                                    break;
                                case 4:
                                    0 === n.loaded && (t.gameServices.getGameByEpic(), t.triggerScroll("game"))
                            }
                        }
                    }, t.onExpose = function (e) {
                        return function () {
                            switch (e) {
                                case 2:
                                    pn(gu + "O.3.1")();
                                    break;
                                case 4:
                                    pn(gu + "R.3.1")()
                            }
                        }
                    }, t.activeMenu = t.global.get("headerActiveMenu"), t
                }

                return Menu_inherits(Menu, e), Menu.prototype.render = function render() {
                    var e = this, t = this.activeMenu, o = {2: "Category", 4: "Game"};
                    return ss.a.createElement("ul", {className: "Header-menu", __self: this}, ws.map(function (r, n) {
                        return ss.a.createElement("li", {
                            key: "header-menu-" + n,
                            className: "Header-menu-link " + (t && r.type === t ? "active" : ""),
                            __self: e
                        }, r.hasDrop ? ss.a.createElement(Bs, {
                            wrapClassName: o[n],
                            placeholder: ss.a.createElement("span", {onMouseDown: pn(r.dysCode), __self: e}, r.text),
                            link: r.link,
                            targetBlank: r.targetBlank,
                            onShow: e.onShow(n),
                            onExpose: e.onExpose(n),
                            __self: e
                        }, ss.a.createElement(hu, {sourceData: n, __self: e})) : ss.a.createElement("a", {
                            href: r.link,
                            target: r.targetBlank ? "_blank" : "_self",
                            onMouseDown: pn(r.dysCode),
                            __self: e
                        }, r.text))
                    }))
                }, Menu
            }(ss.a.Component), yu.scrollLock = {}, pu = Menu_applyDecoratedDescriptor((uu = mu).prototype, "categoryServices", [iu], {
                enumerable: !0,
                initializer: null
            }), fu = Menu_applyDecoratedDescriptor(uu.prototype, "gameServices", [au], {
                enumerable: !0,
                initializer: null
            }), bu = Menu_applyDecoratedDescriptor(uu.prototype, "event", [lu], {
                enumerable: !0,
                initializer: null
            }), du = Menu_applyDecoratedDescriptor(uu.prototype, "global", [cu], {
                enumerable: !0,
                initializer: null
            }), su = uu)) || su);
        Du.propTypes = {CategoryData: gs.a.object.isRequired, GameData: gs.a.object.isRequired};
        var Su = Object(us.connect)(function mapStateToProps(e) {
            return {CategoryData: e.CategoryData, GameData: e.GameData}
        })(Du), wu = (o("53196"), function EmptyPane(e) {
            var t = e.scope;
            return ss.a.createElement("div", {
                className: "DropPane-none",
                __self: void 0
            }, ss.a.createElement("i", {__self: void 0}), ss.a.createElement("p", {__self: void 0}, "\u4f60\u7684", t, "\u5217\u8868\u7a7a\u7a7a\u5982\u4e5f ~"), "\u5386\u53f2" === t ? ss.a.createElement("a", {
                className: "DropPane-watchLive",
                href: "/directory/all",
                __self: void 0
            }, "\u53bb\u770b\u76f4\u64ad") : null)
        }), Ou = o("0aa78"), Eu = o.n(Ou), Cu = function renderFragment(e) {
            var t = ss.a.createElement(wu, {scope: "\u5386\u53f2", __self: void 0});
            return e.length && (t = ss.a.createElement(ss.a.Fragment, {__self: void 0}, ss.a.createElement("ul", {
                className: "DropPane-drop",
                __self: void 0
            }, e.map(function (e, t) {
                return ss.a.createElement("li", {
                    key: e.roomId,
                    className: "DropPaneList HistoryList",
                    onMouseDown: function dysHandleCombine(e, t) {
                        return function () {
                            pn("13010010100W")({com: {p: t}, ext: {_rid: e}})
                        }
                    }(e.roomId, t + 1),
                    __self: void 0
                }, ss.a.createElement("a", {
                    href: "/" + (e.vipId || e.roomId),
                    target: "_blank",
                    __self: void 0
                }, ss.a.createElement("div", {
                    className: "DropPaneList-cover",
                    __self: void 0
                }, ss.a.createElement(Ws.b, {
                    isLazyable: !1,
                    src: e.roomCover,
                    defaultSrc: Eu.a,
                    alt: e.roomTitle,
                    __self: void 0
                }), 1 === e.liveStatus ? ss.a.createElement("i", {__self: void 0}, "\u76f4\u64ad\u4e2d") : null), ss.a.createElement("div", {
                    className: "DropPaneList-info",
                    __self: void 0
                }, ss.a.createElement("p", {
                    className: "DropPaneList-title",
                    dangerouslySetInnerHTML: {__html: e.roomTitle},
                    __self: void 0
                }), ss.a.createElement("p", {__self: void 0}, ss.a.createElement("span", {
                    className: "DropPaneList-name",
                    __self: void 0
                }, ss.a.createElement("i", {__self: void 0}), e.nickname), ss.a.createElement("span", {
                    className: "DropPaneList-live " + (1 === e.liveStatus ? "is-live" : ""),
                    __self: void 0
                }, ss.a.createElement("i", {__self: void 0}), function historyFormatTime(e) {
                    var t = e;
                    return t >= 604800 ? "\u5f88\u4e45\u4ee5\u524d" : t >= 86400 ? Math.floor(t / 86400) + "\u5929\u524d" : t >= 3600 ? Math.floor(t / 3600) + "\u5c0f\u65f6\u524d" : t >= 1200 ? 15 * Math.floor(Math.floor(t / 60) / 15) + "\u5206\u949f\u524d" : t >= 900 ? "15\u5206\u949f\u524d" : t >= 60 ? Math.floor(t / 60) + "\u5206\u949f\u524d" : "\u521a\u521a"
                }(e.interval))))))
            })), ss.a.createElement("a", {
                className: "DropPane-linkAll",
                href: "/directory/watchHistory",
                target: "_blank",
                onMouseDown: function onMouseDown() {
                    pn("13010010101A")()
                },
                __self: void 0
            }, "\u67e5\u770b\u5168\u90e8"))), t
        }, Nu = function History(e) {
            var t = e.data, o = (t = void 0 === t ? {} : t).loaded, r = void 0 !== o && o, n = t.historyList;
            return function renderLoading(e, t) {
                return e ? t : ss.a.createElement(Hs, {__self: void 0})
            }(r, Cu(void 0 === n ? [] : n))
        };
        Nu.propTypes = {data: gs.a.object.isRequired}, Nu.defaultProps = {data: {nowTime: "", historyList: []}};
        var Pu = Nu, ju = o("c26de"), Tu = o.n(ju), ku = function renderFragment(e, t) {
            var o = ss.a.createElement(wu, {scope: "\u5173\u6ce8", __self: void 0});
            return e.length && (o = ss.a.createElement(ss.a.Fragment, {__self: void 0}, ss.a.createElement("ul", {
                className: "DropPane-drop",
                __self: void 0
            }, e.map(function (e, o) {
                return ss.a.createElement("li", {
                    key: e.roomId,
                    className: "DropPaneList FollowList",
                    onMouseDown: function dysHandleCombine(e, t) {
                        return function () {
                            pn("13010010100X")({com: {p: t}, ext: {_rid: e}})
                        }
                    }(e.roomId, o + 1),
                    __self: void 0
                }, ss.a.createElement("a", {
                    href: "/" + e.roomId,
                    target: "_blank",
                    __self: void 0
                }, ss.a.createElement("div", {
                    className: "DropPaneList-cover",
                    __self: void 0
                }, ss.a.createElement(Ws.b, {
                    isLazyable: !1,
                    src: e.avatar,
                    defaultSrc: Tu.a,
                    alt: e.nickname,
                    __self: void 0
                })), ss.a.createElement("div", {
                    className: "DropPaneList-info",
                    __self: void 0
                }, ss.a.createElement("p", {__self: void 0}, ss.a.createElement("span", {
                    className: "DropPaneList-hot",
                    __self: void 0
                }, ss.a.createElement("i", {__self: void 0}), e.online), ss.a.createElement("span", {
                    className: "DropPaneList-title",
                    dangerouslySetInnerHTML: {__html: e.roomName},
                    __self: void 0
                })), ss.a.createElement("p", {__self: void 0}, ss.a.createElement("span", {
                    className: "DropPaneList-name",
                    __self: void 0
                }, e.nickname), ss.a.createElement("span", {
                    className: "DropPaneList-time",
                    __self: void 0
                }, "\u5df2\u64ad", function followFormatTime(e) {
                    var t = Math.floor(e / 3600);
                    if (t >= 1e3) return "999+\u5c0f\u65f6";
                    var o = Math.floor((e - 3600 * t) / 60), r = function join(e, t) {
                        return e > 0 ? e + t : ""
                    };
                    return r(t, "\u5c0f\u65f6") + r(o, "\u5206\u949f")
                }(t - e.showTime))))))
            })), ss.a.createElement("a", {
                className: "DropPane-linkAll",
                href: "/directory/myFollow",
                target: "_blank",
                onMouseDown: pn("13010010100N"),
                __self: void 0
            }, "\u67e5\u770b\u5168\u90e8"))), o
        }, zu = function Follow(e) {
            var t = e.data, o = (t = void 0 === t ? {} : t).loaded, r = void 0 !== o && o, n = t.nowTime,
                i = void 0 === n ? 0 : n, a = t.roomList;
            return function renderLoading(e, t) {
                return e ? t : ss.a.createElement(Hs, {__self: void 0})
            }(r, ku(void 0 === a ? [] : a, i))
        };
        zu.propTypes = {data: gs.a.object.isRequired}, zu.defaultProps = {data: {nowTime: 0, roomList: []}};
        var Iu, Ru, Mu, Au, Lu, Bu, xu, Fu, Hu, Uu, Gu = zu, Wu = new Cs.a({
                id: "follow_ab4e0a1",
                use: "follow_ab4e0a1-usage",
                viewBox: "0 0 32 32",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="follow_ab4e0a1">\n<title>follow</title>\n<path d="M20.801 3.2c5.371 0.002 9.597 4.082 9.597 9.6 0 6.126-4.669 11.381-13.686 15.835-0.447 0.221-0.97 0.221-1.417 0-9.023-4.454-13.695-9.709-13.695-15.835 0-5.524 4.244-9.6 9.598-9.6 1.757 0 3.343 0.559 4.811 1.596 0.346-0.241 0.695-0.456 1.051-0.644 1.078-0.595 2.335-0.952 3.74-0.952h0.001zM13.926 7.248c-0.878-0.566-1.769-0.848-2.726-0.848-3.615 0-6.398 2.673-6.398 6.4 0 4.509 3.637 8.733 11.203 12.609 7.561-3.875 11.195-8.1 11.195-12.609 0-3.726-2.77-6.4-6.4-6.4-0.897 0-1.75 0.263-2.614 0.794-0.405 0.31-0.764 0.695-1.083 1.141-0.685 0.96-1.103 2.213-1.103 2.864 0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-1.306 0.395-2.7 1.126-3.952z" />\n</symbol>'
            }), Yu = (Ps.a.add(Wu), Wu), $u = new Cs.a({
                id: "history_249a1bf",
                use: "history_249a1bf-usage",
                viewBox: "0 0 32 32",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="history_249a1bf">\n<title>history</title>\n<path d="M16 27.2c6.186 0 11.2-5.014 11.2-11.2s-5.014-11.2-11.2-11.2c-6.186 0-11.2 5.014-11.2 11.2s5.014 11.2 11.2 11.2zM16 30.4c-7.953 0-14.4-6.447-14.4-14.4s6.447-14.4 14.4-14.4c7.953 0 14.4 6.447 14.4 14.4s-6.447 14.4-14.4 14.4z" />\n<path d="M20.331 18.069c0.625 0.625 0.625 1.638 0 2.263s-1.638 0.625-2.263 0l-3.2-3.2c-0.3-0.3-0.469-0.707-0.469-1.131v-4.8c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6v4.137l2.731 2.731z" />\n</symbol>'
            }), qu = (Ps.a.add($u), $u), Vu = o("41b9a"), Zu = o.n(Vu),
            Ku = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function DropPane_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function DropPane_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Ku(t)) && "function" !== typeof t ? e : t
        }

        function DropPane_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Ku(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function DropPane_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function DropPane_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Ju = n.a.Service, Xu = n.a.Region, Qu = {
            History: {
                text: "\u5386\u53f2",
                link: "/directory/watchHistory",
                targetBlank: !0,
                dysCode: "13010010100V",
                exposeCode: "13010010100W"
            },
            Follow: {
                text: "\u5173\u6ce8",
                link: "/directory/myFollow",
                targetBlank: !1,
                dysCode: "100100101005",
                exposeCode: "13010010100X"
            }
        }, ep = (Iu = Ju(ii), Ru = Ju(Yi), Mu = Ju(i.DataCenter.event), Object(et.log)((Uu = Hu = function (e) {
            function DropPane() {
                var t, o;
                !function DropPane_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, DropPane);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = DropPane_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), DropPane_initDefineProp(o, "historyServices", Bu, o), DropPane_initDefineProp(o, "followServices", xu, o), DropPane_initDefineProp(o, "event", Fu, o), o.triggerScroll = function (e) {
                    DropPane.scrollLock[e] || (DropPane.scrollLock[e] = 1, o.event.trigger(window, "scroll"))
                }, o.getData = function (e) {
                    return function () {
                        switch (e) {
                            case"History":
                                o.historyServices.getHistoryByEpic(), o.triggerScroll("history");
                                break;
                            case"Follow":
                                o.followServices.getFollowByEpic(), o.triggerScroll("follow")
                        }
                    }
                }, DropPane_possibleConstructorReturn(o, t)
            }

            return DropPane_inherits(DropPane, e), DropPane.prototype.render = function render() {
                var e = this.props, t = e.HistoryData, o = e.FollowData, r = e.type, n = e.redDot, i = Qu[r],
                    a = i.text, l = i.link, c = i.targetBlank, s = i.dysCode, u = i.exposeCode,
                    p = {History: qu.id, Follow: Yu.id}[r], f = {};
                return "Follow" === r && (f = {_state1: n}), ss.a.createElement("div", {
                    className: "DropPane " + r,
                    __self: this
                }, ss.a.createElement(Bs, {
                    placeholder: ss.a.createElement("span", {
                        onMouseDown: function onMouseDown() {
                            pn(s)({ext: f})
                        }, __self: this
                    }, ss.a.createElement("i", {
                        className: "DropPane-icon " + r + "-icon",
                        __self: this
                    }, ss.a.createElement(Os, {
                        symbol: p,
                        __self: this
                    })), a, "Follow" === r && !!n && ss.a.createElement("img", {
                        className: "follow-onplay",
                        src: Zu.a,
                        __self: this
                    })),
                    link: l,
                    targetBlank: c,
                    dropIcon: !1,
                    onShow: this.getData(r),
                    onExpose: pn(u + ".3.1"),
                    __self: this
                }, ss.a.createElement("div", {__self: this}, "History" === r ? ss.a.createElement(Pu, {
                    data: t,
                    __self: this
                }) : ss.a.createElement(Gu, {data: o, __self: this}), ss.a.createElement(Xu, {
                    className: "DropPane-ad",
                    name: "sign",
                    belongTo: "HeaderApp",
                    data: {id: {Follow: "1021103", History: "1021104"}[r], type: "common"},
                    __self: this
                }))))
            }, DropPane
        }(ss.a.Component), Hu.scrollLock = {}, Bu = DropPane_applyDecoratedDescriptor((Lu = Uu).prototype, "historyServices", [Iu], {
            enumerable: !0,
            initializer: null
        }), xu = DropPane_applyDecoratedDescriptor(Lu.prototype, "followServices", [Ru], {
            enumerable: !0,
            initializer: null
        }), Fu = DropPane_applyDecoratedDescriptor(Lu.prototype, "event", [Mu], {
            enumerable: !0,
            initializer: null
        }), Au = Lu)) || Au);
        ep.propTypes = {
            HistoryData: gs.a.object.isRequired,
            FollowData: gs.a.object.isRequired,
            type: gs.a.string.isRequired,
            redDot: gs.a.number.isRequired
        };
        var tp, op, rp, np, ip, ap, lp, cp, sp, up, pp, fp, bp = Object(us.connect)(function mapStateToProps(e) {
                return {HistoryData: e.HistoryData, FollowData: e.FollowData, redDot: e.matchFocusData.redDot}
            })(ep), dp = (o("4e099"), new Cs.a({
                id: "download_3db9f1c",
                use: "download_3db9f1c-usage",
                viewBox: "0 0 32 32",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="download_3db9f1c">\n<title>download</title>\n<path d="M21.64 25.6l-2.753-3.873c-0.753-1.059 0.005-2.527 1.304-2.527h7.008v-12.8h-20.8v12.8h6.969c1.3 0 2.057 1.468 1.304 2.527l-2.753 3.873h9.72zM25.34 25.282c0.713 1.003 0.477 2.393-0.525 3.106-0.377 0.268-0.828 0.412-1.29 0.412h-13.424c-1.249 0-2.261-1.012-2.261-2.261 0-0.469 0.146-0.927 0.418-1.31l2.011-2.83h-3.869c-1.767 0-3.2-1.433-3.2-3.2v-12.8c0-1.767 1.433-3.2 3.2-3.2h20.8c1.767 0 3.2 1.433 3.2 3.2v12.8c0 1.767-1.433 3.2-3.2 3.2h-3.908l2.049 2.882z" />\n<path d="M13.931 14.125l3.394-3.394c0.625-0.625 1.638-0.625 2.263 0s0.625 1.638 0 2.263l-3.394 3.394c-0.625 0.625-1.638 0.625-2.263 0s-0.625-1.638 0-2.263z" />\n</symbol>'
            })), yp = (Ps.a.add(dp), dp), mp = new Cs.a({
                id: "download-corner_e0da5c2",
                use: "download-corner_e0da5c2-usage",
                viewBox: "0 0 17 14",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14" id="download-corner_e0da5c2">\n  <defs>\n    <style>\n      #download-corner_e0da5c2 .cls-1, #download-corner_e0da5c2 .cls-3 {\n        fill: #ff2323;\n      }\n\n      #download-corner_e0da5c2 .cls-2 {\n        fill: #fff;\n      }\n\n      #download-corner_e0da5c2 .cls-2, #download-corner_e0da5c2 .cls-3 {\n        fill-rule: evenodd;\n      }\n    </style>\n  </defs>\n  <rect id="download-corner_e0da5c2_\u5706\u89d2\u77e9\u5f62_2" data-name="\u5706\u89d2\u77e9\u5f62 2" class="cls-1" width="17" height="11" rx="2" ry="2" />\n  <path id="download-corner_e0da5c2_\u5f62\u72b6_3" data-name="\u5f62\u72b6 3" class="cls-2" d="M9,5h3L6.211,10,8,6H6L8,2h3Z" />\n  <path id="download-corner_e0da5c2_\u5f62\u72b6_2" data-name="\u5f62\u72b6 2" class="cls-3" d="M6,11v3l4-3H6Z" />\n</symbol>'
            }), hp = (Ps.a.add(mp), mp), vp = "/client?tab=", _p = [{
                link: vp + "client#" + function genDevice() {
                    var e = navigator.platform;
                    return "Mac68K" === e || "MacPPC" === e || "Macintosh" === e || "MacIntel" === e ? "mac" : "pc"
                }(), type: "pc", text: "PC"
            }, {link: "/topic/tvguide", type: "tv", text: "\u7535\u89c6"}, {
                link: vp + "client#mobile",
                type: "mobile",
                text: "\u79fb\u52a8\u7aef"
            }, {link: vp + "partner#livetool", type: "tool", text: "\u4e3b\u64ad\u5de5\u5177"}], gp = function Download() {
                return ss.a.createElement("div", {
                    className: "Download",
                    __self: void 0
                }, ss.a.createElement(Bs, {
                    placeholder: ss.a.createElement("span", {
                        onMouseDown: pn("100100101007"),
                        __self: void 0
                    }, ss.a.createElement("i", {
                        className: "Download-icon",
                        __self: void 0
                    }, ss.a.createElement(Os, {
                        symbol: yp.id,
                        __self: void 0
                    })), "\u5ba2\u6237\u7aef", ss.a.createElement("i", {
                        className: "Download-iconAdd",
                        __self: void 0
                    }, ss.a.createElement(Os, {symbol: hp.id, __self: void 0}))),
                    link: _p[0].link,
                    dropIcon: !1,
                    onExpose: pn("13010010100Y.3.1"),
                    targetBlank: !0,
                    __self: void 0
                }, ss.a.createElement("div", {
                    className: "Download-contentWrap",
                    __self: void 0
                }, ss.a.createElement("div", {
                    className: "Download-content",
                    __self: void 0
                }, ss.a.createElement("div", {className: "Download-cellWrap", __self: void 0}, _p.map(function (e, t) {
                    var o = e.text, r = e.link, n = e.type;
                    return ss.a.createElement("a", {
                        key: o,
                        className: "Download-cell",
                        href: r,
                        target: "_blank",
                        onMouseDown: function dysHandleCombine(e, t) {
                            return function () {
                                Object(sn.dysub)("click_topnavi_ct", {type: e}), pn("13010010100Y")({com: {p: t}})
                            }
                        }(n, t + 1),
                        __self: void 0
                    }, ss.a.createElement("div", {className: "Download-cellItem is-" + n, __self: void 0}, o))
                }))), ss.a.createElement("a", {
                    className: "Download-footerBtn",
                    href: vp + "client",
                    target: "_blank",
                    onMouseDown: pn("130100101017"),
                    __self: void 0
                }, "\u4e0b\u8f7d\u4e2d\u5fc3 >>"))))
            }, Dp = (o("58ade"), [{i: "barrage", t: "\u53d1\u5f39\u5e55"}, {
                i: "hd",
                t: "\u770b\u9ad8\u6e05"
            }, {i: "follow", t: "\u5173\u6ce8\u4e3b\u64ad"}]), Sp = function showLoginIframe(e) {
                return function (t) {
                    var o = {login: {source: "click_topnavi_login", p: 1}, reg: {source: "click_topnavi_sign", p: 2}}[e],
                        r = o.source, n = o.p;
                    "function" === typeof h.a.show && (t.preventDefault(), h.a.show(e, {source: r})), pn("13010010100H")({com: {p: n}})
                }
            }, wp = function unLoginHandle() {
                h.a.show(), pn("13010010100G")()
            }, Op = function UnLogin() {
                return ss.a.createElement("div", {
                    className: "UnLogin",
                    __self: void 0
                }, ss.a.createElement(Bs, {
                    placeholder: ss.a.createElement("span", {
                        className: "UnLogin-icon",
                        onClick: wp,
                        __self: void 0
                    }, "\xa0"), link: "javascript:void(0);", onExpose: pn("13010010100H.3.1"), dropIcon: !1, __self: void 0
                }, ss.a.createElement("div", {
                    className: "UnLogin-content",
                    __self: void 0
                }, ss.a.createElement("h3", {__self: void 0}, "\u767b\u5f55\u4e4b\u540e\u53ef\u4ee5"), ss.a.createElement("ul", {
                    className: "UnLogin-privilege",
                    __self: void 0
                }, Dp.map(function (e) {
                    var t = e.i, o = e.t;
                    return ss.a.createElement("li", {
                        key: t,
                        __self: void 0
                    }, ss.a.createElement("i", {className: "UnLogin-privilegeIcon is-" + t, __self: void 0}), o)
                })), ss.a.createElement("a", {
                    className: "UnLogin-btn",
                    href: "/member/login",
                    onClick: Sp("login"),
                    __self: void 0
                }, "\u767b\u5f55"), ss.a.createElement("a", {
                    className: "UnLogin-btn",
                    onClick: Sp("reg"),
                    __self: void 0
                }, "\u6ce8\u518c"))))
            }, Ep = o("00779"),
            Cp = (o("3bfdc"), o("20304"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }), Np = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function Icon_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        function Icon_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Cp(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Icon_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Pp, jp, Tp, kp, zp, Ip, Rp, Mp, Ap, Lp,
            Bp = Object(Ep.addNote)("\u56fe\u7247\u7ec4\u4ef6")((rp = op = function (e) {
                function Icon(t) {
                    !function Icon_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Icon);
                    var o = function Icon_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Cp(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this, t));
                    return o.state = {isError: !1}, o.handleError = o.handleError.bind(o), o
                }

                return Icon_inherits(Icon, e), Icon.prototype.handleError = function handleError() {
                    this.setState({isError: !0})
                }, Icon.prototype.render = function render() {
                    var e = this.props, t = e.src, o = e.defaultSrc, r = e.className, n = e.alt,
                        i = function _objectWithoutProperties(e, t) {
                            var o = {};
                            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
                            return o
                        }(e, ["src", "defaultSrc", "className", "alt"]);
                    return this.state.isError ? ss.a.createElement("img", Np({}, i, {
                        className: r || "",
                        src: o || t,
                        alt: n,
                        __self: this
                    })) : ss.a.createElement("img", Np({}, i, {
                        className: r || "",
                        src: t || o,
                        alt: n,
                        onError: this.handleError,
                        __self: this
                    }))
                }, Icon
            }(ss.a.Component), op.propTypes = (np = Object(Ep.addNoteToProp)("src"), ip = Object(Ep.addNoteToProp)("defaultSrc"), ap = Object(Ep.addNoteToProp)("className"), lp = Object(Ep.addNoteToProp)("alt"), Icon_applyDecoratedDescriptor(cp = {
                src: _s.string,
                defaultSrc: _s.string,
                className: _s.string,
                alt: _s.string
            }, "src", [np], (sp = (sp = Object.getOwnPropertyDescriptor(cp, "src")) ? sp.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return sp
                }
            }), cp), Icon_applyDecoratedDescriptor(cp, "defaultSrc", [ip], (up = (up = Object.getOwnPropertyDescriptor(cp, "defaultSrc")) ? up.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return up
                }
            }), cp), Icon_applyDecoratedDescriptor(cp, "className", [ap], (pp = (pp = Object.getOwnPropertyDescriptor(cp, "className")) ? pp.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return pp
                }
            }), cp), Icon_applyDecoratedDescriptor(cp, "alt", [lp], (fp = (fp = Object.getOwnPropertyDescriptor(cp, "alt")) ? fp.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return fp
                }
            }), cp), cp), op.defaultProps = {src: "", defaultSrc: "", className: "", alt: ""}, tp = rp)) || tp,
            xp = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Fp = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function Avatar_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        function Avatar_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : xp(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Avatar_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Hp, Up, Gp, Wp, Yp, $p, qp, Vp, Zp, Kp, Jp, Xp = o("c26de"),
            Qp = Object(Ep.addNote)("\u6b63\u65b9\u5f62\u5934\u50cf\u7ec4\u4ef6")((Tp = jp = function (e) {
                function Avatar() {
                    return function Avatar_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Avatar), function Avatar_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : xp(t)) && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return Avatar_inherits(Avatar, e), Avatar.prototype.render = function render() {
                    var e = this.props, t = e.src, o = e.width, r = e.round,
                        n = function Avatar_objectWithoutProperties(e, t) {
                            var o = {};
                            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
                            return o
                        }(e, ["src", "width", "round"]), i = "undefined" !== typeof o ? o : "100%";
                    return ss.a.createElement("div", Fp({}, n, {
                        style: {width: i},
                        __self: this
                    }), ss.a.createElement("div", {
                        className: "Avatar " + (r ? "is-circle" : ""),
                        __self: this
                    }, ss.a.createElement(Bp, Fp({}, n, {
                        className: "Avatar-img",
                        src: t,
                        defaultSrc: Xp,
                        __self: this
                    }))))
                }, Avatar
            }(ss.a.Component), jp.propTypes = (kp = Object(Ep.addNoteToProp)("\u56fe\u7247\u5730\u5740"), zp = Object(Ep.addNoteToProp)("\u5360\u4f4d\u5bbd\u5ea6"), Ip = Object(Ep.addNoteToProp)("\u662f\u5426\u5706\u89d2\u5934\u50cf"), Avatar_applyDecoratedDescriptor(Rp = {
                src: _s.node,
                width: _s.string,
                radius: _s.bool
            }, "src", [kp], (Mp = (Mp = Object.getOwnPropertyDescriptor(Rp, "src")) ? Mp.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return Mp
                }
            }), Rp), Avatar_applyDecoratedDescriptor(Rp, "width", [zp], (Ap = (Ap = Object.getOwnPropertyDescriptor(Rp, "width")) ? Ap.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return Ap
                }
            }), Rp), Avatar_applyDecoratedDescriptor(Rp, "radius", [Ip], (Lp = (Lp = Object.getOwnPropertyDescriptor(Rp, "radius")) ? Lp.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return Lp
                }
            }), Rp), Rp), jp.defaultProps = {src: Xp}, Pp = Tp)) || Pp,
            ef = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function AvatarSelfDto_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function AvatarSelfDto_classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function AvatarSelfDto_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : ef(t)) && "function" !== typeof t ? e : t
        }

        function AvatarSelfDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : ef(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function AvatarSelfDto_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function AvatarSelfDto_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var tf = i.basicTypes.typed, of = i.basicTypes.string, rf = i.basicTypes.number, nf = i.basicTypes.mapping,
            af = i.basicTypes.oneOf,
            lf = (Vp = tf((Hp = nf({path: "msg"}), Up = af(of, rf), Object(et.log)(Gp = Hp((Wp = function (e) {
                function Icon() {
                    var t, o;
                    AvatarSelfDto_classCallCheck(this, Icon);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = AvatarSelfDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), AvatarSelfDto_initDefineProp(o, "code", Yp, o), AvatarSelfDto_initDefineProp(o, "path", $p, o), AvatarSelfDto_initDefineProp(o, "size", qp, o), AvatarSelfDto_possibleConstructorReturn(o, t)
                }

                return AvatarSelfDto_inherits(Icon, e), Icon
            }(i.EntityDto), Yp = AvatarSelfDto_applyDecoratedDescriptor(Wp.prototype, "code", [Up], {
                enumerable: !0,
                initializer: null
            }), $p = AvatarSelfDto_applyDecoratedDescriptor(Wp.prototype, "path", [of], {
                enumerable: !0,
                initializer: null
            }), qp = AvatarSelfDto_applyDecoratedDescriptor(Wp.prototype, "size", [of], {
                enumerable: !0,
                initializer: null
            }), Gp = Wp)) || Gp) || Gp)), Object(et.log)((Kp = function (e) {
                function AvatarSelfDto() {
                    var t, o;
                    AvatarSelfDto_classCallCheck(this, AvatarSelfDto);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = AvatarSelfDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), AvatarSelfDto_initDefineProp(o, "icon", Jp, o), AvatarSelfDto_possibleConstructorReturn(o, t)
                }

                return AvatarSelfDto_inherits(AvatarSelfDto, e), AvatarSelfDto
            }(i.EntityDto), Jp = AvatarSelfDto_applyDecoratedDescriptor(Kp.prototype, "icon", [Vp], {
                enumerable: !0,
                initializer: null
            }), Zp = Kp)) || Zp), cf = o("c26de"), sf = i.DataCenter.global.get("USER_INFO") || {}, uf = "";
        try {
            uf = "//apic.douyucdn.cn/"
        } catch (e) {
            uf = "//apic.douyucdn.cn/"
        }
        var pf = {
            cacheKey: "avatar",
            selfUid: sf.uid,
            avatarDomain: uf,
            defaultAvatarUrl: cf,
            avatarCache: {},
            cookieSaveTime: 31536e3
        }, ff = i.DataCenter.cookie(), bf = function avatarMap(e) {
            if (!e) return pf.defaultAvatarUrl;
            if (e.isCompletion) return e.avatar;
            if (e.data) {
                if (e.data.icon) {
                    var t = e.data.icon;
                    if (0 !== t.code) return pf.defaultAvatarUrl;
                    var o = pf.avatarDomain + "upload/" + t.path;
                    return function saveCookie(e) {
                        var t = e.indexOf("_small.jpg") + 1 || e.indexOf("_middle.jpg") + 1 || e.indexOf("_big.jpg") + 1 || e.indexOf("size=") + 5;
                        t && ff.set(pf.cacheKey, e.substring(0, t), pf.cookieSaveTime)
                    }(o), o
                }
                return pf.avatarDomain + "upload/" + e.data
            }
            return pf.defaultAvatarUrl
        }, df = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function avatarService_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : df(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function avatarService_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var yf, mf, hf, vf, _f, gf, Df, Sf, wf, Of, Ef, Cf, Nf = i.DataCenter.cookie(), Pf = function (e) {
            function AvatarServices() {
                return function avatarService_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, AvatarServices), function avatarService_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : df(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return avatarService_inherits(AvatarServices, e), AvatarServices.prototype.getAvatar = function getAvatar(e, t, o) {
                this.getAvatarObservable(e, t).pipe(Object(a.map)(bf)).subscribe(function (e) {
                    o(e)
                }, function () {
                    o(pf.defaultAvatarUrl)
                })
            }, AvatarServices.prototype.getAvatarObservable = function getAvatarObservable(e, t) {
                var o = this.getAvatarFromCache(e, t);
                if (o) return Object(s.of)({isCompletion: 1, avatar: o});
                if (pf.selfUid === e) {
                    var r = this.getAvatarFromCookie(e, t);
                    return r ? Object(s.of)({isCompletion: 1, avatar: r}) : this.getAvatarFromSelfApi(e, t)
                }
                return this.getAvatarFromOthersApi(e, t)
            }, AvatarServices.prototype.getAvatarFromCache = function getAvatarFromCache(e, t) {
                var o = pf.avatarCache[e];
                return o && o[t] || ""
            }, AvatarServices.prototype.getAvatarFromCookie = function getAvatarFromCookie(e, t) {
                var o = Nf.get(pf.cacheKey);
                if (o) switch (o.charAt(o.length - 1)) {
                    case"_":
                        o += t + ".jpg";
                        break;
                    case"=":
                        o += t
                }
                return o
            }, AvatarServices.prototype.getAvatarFromSelfApi = function getAvatarFromSelfApi(e, t) {
                var o = "/lapi/member/userInfo/getInfo/" + e, r = {size: t, icon: 1};
                return i.httpClient.get(lf, o, r)
            }, AvatarServices.prototype.getAvatarFromOthersApi = function getAvatarFromOthersApi(e, t) {
                var o = {uid: e, size: t};
                return i.httpClient.get(String, "/lapi/member/avatar/getAvatar", o)
            }, AvatarServices
        }(u.Service), jf = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Tf = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };

        function components_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : jf(t)) && "function" !== typeof t ? e : t
        }

        function components_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : jf(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function components_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function components_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var kf, zf = n.a.Service,
            If = (yf = Object(Ep.addNote)("\u5934\u50cf\u7ec4\u4ef6ByUid"), mf = zf(Pf), yf((Df = gf = function (e) {
                function AvatarByUid() {
                    var t, o;
                    !function components_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, AvatarByUid);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = components_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function components_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(o, "avatarService", _f, o), o.state = {src: ""}, components_possibleConstructorReturn(o, t)
                }

                return components_inherits(AvatarByUid, e), AvatarByUid.prototype.componentWillMount = function componentWillMount() {
                    var e = this, t = this.props, o = t.uid, r = t.size;
                    o ? this.avatarService.getAvatar(o, r, function (t) {
                        e.setState({src: t})
                    }) : this.setState({src: pf.defaultAvatarUrl})
                }, AvatarByUid.prototype.render = function render() {
                    var e = this.props, t = this.state.src;
                    return ss.a.createElement(Qp, Tf({src: t}, e, {__self: this}))
                }, AvatarByUid
            }(ss.a.Component), gf.propTypes = (Sf = Object(Ep.addNoteToProp)("\u7528\u6237id"), wf = Object(Ep.addNoteToProp)("\u5934\u50cf\u5c3a\u5bf8"), components_applyDecoratedDescriptor(Of = {
                uid: _s.string,
                size: _s.string
            }, "uid", [Sf], (Ef = (Ef = Object.getOwnPropertyDescriptor(Of, "uid")) ? Ef.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return Ef
                }
            }), Of), components_applyDecoratedDescriptor(Of, "size", [wf], (Cf = (Cf = Object.getOwnPropertyDescriptor(Of, "size")) ? Cf.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return Cf
                }
            }), Of), Of), gf.defaultProps = {size: "middle"}, _f = components_applyDecoratedDescriptor((vf = Df).prototype, "avatarService", [mf], {
                enumerable: !0,
                initializer: null
            }), hf = vf)) || hf), Rf = o("ed724"),
            Mf = (o("f0f6a"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            });

        function Exit_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Mf(t)) && "function" !== typeof t ? e : t
        }

        function Exit_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Mf(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Exit_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Af = Object(et.log)(kf = function (e) {
            function Exit() {
                var t, o;
                !function Exit_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, Exit);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = Exit_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), o.state = {visible: !1}, o.showModal = function () {
                    o.setState({visible: !0}), pn("130100101015.1.1")()
                }, o.closeHandle = function (e) {
                    return function () {
                        e && h.a.exit(), o.setState({visible: !1})
                    }
                }, Exit_possibleConstructorReturn(o, t)
            }

            return Exit_inherits(Exit, e), Exit.prototype.render = function render() {
                var e = this.state.visible;
                return ss.a.createElement("div", {
                    className: "Exit",
                    __self: this
                }, ss.a.createElement("span", {
                    className: "Exit-btn",
                    onClick: this.showModal,
                    __self: this
                }, ss.a.createElement("i", {__self: this}), "\u767b\u51fa"), ss.a.createElement(Rf.a, {
                    width: 260,
                    title: "\u63d0\u793a",
                    onCancel: this.closeHandle(0),
                    visible: e,
                    destroyOnClose: !0,
                    center: !0,
                    draggable: !0,
                    footer: [ss.a.createElement("button", {
                        className: "dy-btn",
                        key: "ok",
                        onClick: this.closeHandle(1),
                        __self: this
                    }, "\u786e\u8ba4"), ss.a.createElement("button", {
                        className: "dy-btn",
                        key: "cancel",
                        onClick: this.closeHandle(0),
                        __self: this
                    }, "\u53d6\u6d88")],
                    __self: this
                }, ss.a.createElement("div", {
                    className: "Exit-dialogTitle",
                    __self: this
                }, ss.a.createElement("i", {__self: this}), "\u786e\u8ba4\u9000\u51fa\u5417\uff1f")))
            }, Exit
        }(ss.a.Component)) || kf, Lf = (o("3477e"), {
            notNamed: {
                name: "name",
                title: "\u5b9e\u540d\u8ba4\u8bc1",
                href: "/member/cp/changeIdent"
            },
            notBoundPhone: {name: "phone", title: "\u7ed1\u5b9a\u624b\u673a", href: "/member/cp/cpBindPhone"},
            notEmailed: {name: "email", title: "\u7ed1\u5b9a\u90ae\u7bb1", href: "/member/cp/changeEmail"},
            Named: {name: "name", title: "\u5df2\u8ba4\u8bc1"},
            boundPhone: {name: "phone", title: "\u5df2\u7ed1\u5b9a\u624b\u673a"},
            Emailed: {name: "email", title: "\u5df2\u7ed1\u5b9a\u90ae\u7bb1"}
        }), Bf = (o("34aaf"), Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        }), xf = function Authentication(e) {
            var t = function (e) {
                var t = e.certificationStatus, o = e.bindPhoneStatus, r = e.emailStatus;
                return ["2" === t ? Lf.Named : Lf.notNamed, "1" === o ? Lf.boundPhone : Lf.notBoundPhone, "1" === r ? Lf.Emailed : Lf.notEmailed]
            }(e.authenticationData);
            return ss.a.createElement("div", {className: "Authentication", __self: void 0}, t.map(function (e) {
                return function CreateDom(e) {
                    var t = e.title, o = e.name, r = e.href;
                    return ss.a.createElement("a", Bf({
                        key: t,
                        className: "Authentication-" + o + (r ? "" : " is-active"),
                        title: t
                    }, r ? {href: r, target: "_blank"} : {}, {__self: void 0}))
                }(e)
            }), ss.a.createElement("a", {
                className: "Authentication-clientSign",
                href: "/client/pcclientsign",
                target: "_blank",
                __self: void 0
            }))
        };
        xf.propTypes = {authenticationData: gs.a.object.isRequired};
        var Ff, Hf, Uf, Gf, Wf, Yf, $f, qf, Vf = xf,
            Zf = (o("b72af"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            });

        function User_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function User_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Zf(t)) && "function" !== typeof t ? e : t
        }

        function User_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Zf(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function User_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function User_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Kf = n.a.Service,
            Jf = (Ff = Kf(i.DataCenter.global), Hf = Kf(i.DataCenter.localStorage), Uf = Kf(Oa), Object(et.log)((Wf = function (e) {
                function User() {
                    var t, o;
                    !function User_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, User);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = User_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), User_initDefineProp(o, "global", Yf, o), User_initDefineProp(o, "localStorage", $f, o), User_initDefineProp(o, "nobleInfoService", qf, o), o.state = {showHiddenLead: !0}, o.config = {hiddenLeadStorage: "room-user-enterHiddenLead"}, o.handleHidden = function () {
                        var e = o.props.nobleState.nobleInfo.isHidden > 0 ? 0 : 1;
                        o.localStorage.get(o.config.hiddenLeadStorage) || o.localStorage.set(o.config.hiddenLeadStorage, !0), o.handLeadTip(), o.nobleInfoService.fetchNobleEnterRoomHidden(e)
                    }, o.handLeadTip = function () {
                        o.setState({showHiddenLead: !1})
                    }, User_possibleConstructorReturn(o, t)
                }

                return User_inherits(User, e), User.prototype.render = function render() {
                    var e = this.global.get("USER_INFO.nickname"), t = this.global.get("USER_INFO.uid"), o = this.props,
                        r = o.nobleState, n = o.authenticationData, i = r.nobleInfo, a = i.nobleLevel, l = i.nobleName,
                        c = i.nobleIcon, s = i.hasHiddenRights, u = i.isHidden,
                        p = this.state.showHiddenLead && !this.localStorage.get(this.config.hiddenLeadStorage),
                        f = c ? "//res.douyucdn.cn//resource/" + c : "";
                    return ss.a.createElement("div", {
                        className: "User",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "User-avatarWrap",
                        __self: this
                    }, a > 0 && s ? ss.a.createElement("div", {
                        className: "User-enterRoomHiddenCtrller" + (u ? " is-hidden" : ""),
                        onMouseEnter: this.handLeadTip,
                        onClick: this.handleHidden,
                        __self: this
                    }, ss.a.createElement("i", {__self: this}), "\u8fdb\u623f\u9690\u8eab", p ? ss.a.createElement("div", {
                        className: "User-tip User-tip--enterRoomHiddenLead",
                        __self: this
                    }, "\u65b0\u7279\u6743") : null, ss.a.createElement("div", {
                        className: "User-tip User-tip--enterRoomHiddenCtrl",
                        __self: this
                    })) : null, ss.a.createElement("a", {
                        className: "User-avatar",
                        href: "/member/cp",
                        target: "_blank",
                        __self: this
                    }, ss.a.createElement(If, {
                        uid: t,
                        round: !0,
                        __self: this
                    }), a > 0 && c ? ss.a.createElement("img", {
                        className: "User-nobleIcon",
                        alt: l,
                        src: f + Ds.imgSuffix,
                        __self: this
                    }) : null)), ss.a.createElement("div", {
                        className: "User-nickname",
                        __self: this
                    }, ss.a.createElement("a", {
                        href: "/member/cp",
                        target: "_blank",
                        title: e,
                        __self: this
                    }, e)), ss.a.createElement(Vf, {authenticationData: n, __self: this}))
                }, User
            }(ss.a.Component), Yf = User_applyDecoratedDescriptor(Wf.prototype, "global", [Ff], {
                enumerable: !0,
                initializer: null
            }), $f = User_applyDecoratedDescriptor(Wf.prototype, "localStorage", [Hf], {
                enumerable: !0,
                initializer: null
            }), qf = User_applyDecoratedDescriptor(Wf.prototype, "nobleInfoService", [Uf], {
                enumerable: !0,
                initializer: null
            }), Gf = Wf)) || Gf), Xf = o("5ae9d"),
            Qf = [0, 10, 40, 106, 216, 378, 600, 890, 1256, 1672, 2162, 2750, 3460, 4316, 5342, 6562, 8e3, 9680, 11626, 13862, 16412, 19300, 22550, 26186, 30232, 34712, 39650, 45070, 50996, 58572, 67798, 78674, 91200, 105376, 121202, 138678, 157804, 178580, 201006, 231006, 265006, 304006, 349006, 401006, 461006, 530006, 609006, 699006, 801006, 951006, 1101006, 1251006, 1401006, 1551006, 1701006, 1851006, 2001006, 2151006, 2301006, 2601006, 2901006, 3201006, 3501006, 3801006, 4101006, 4401006, 4701006, 5001006, 5301006, 5801006, 6301006, 6801006, 7301006, 7801006, 8301006, 8801006, 9301006, 9801006, 10301006, 11001006, 11701006, 12401006, 13101006, 13801006, 14501006, 15201006, 15901006, 16601006, 17301006, 18201006, 19101006, 20001006, 20901006, 21801006, 22701006, 23601006, 24501006, 25401006, 26301006, 27501006, 28701006, 29901006, 31101006, 32301006, 33501006, 34701006, 35901006, 37101006, 38301006, 39801006, 41301006, 42801006, 44301006, 45801006, 47301006, 48801006, 50301006, 51801006, 53301006, 54801006],
            eb = 56601006, tb = 120, ob = Qf.length, rb = Qf[ob - 1], nb = function handleUserLevelData(e) {
                var t = parseFloat(e) / 100, o = {maxLevel: tb};
                return t >= eb ? (o.curLevel = tb, o.curProgress = 100) : t >= rb ? (o.curLevel = tb, o.curProgress = Ot((t - rb) / (eb - rb) * 100, 1)) : Qf.every(function (e, r) {
                    var n = e, i = Qf[r + 1];
                    return !(t >= e && t < i) || (o.curLevel = r + 1, o.upLevelNeedExp = Ot(i - t, 2), o.curProgress = Ot((t - n) / (i - n) * 100, 1), !1)
                }), o
            }, ib = (o("36f07"), function isMaxLevel(e, t) {
                return t >= e
            }), ab = function Level(e) {
                var t = e.levelData, o = nb(t), r = o.maxLevel, n = o.curLevel, i = o.upLevelNeedExp, a = o.curProgress,
                    l = function createLevelTip(e, t, o) {
                        return ib(e, t) ? ss.a.createElement("span", {__self: void 0}, "\u60a8\u5df2\u7ecf\u8fbe\u5230\u6700\u9ad8\u7b49\u7ea7") : ss.a.createElement("span", {__self: void 0}, "\u8fd8\u9700", ss.a.createElement("span", {
                            className: "HeaderUserLevel-tip-upExp",
                            __self: void 0
                        }, o), "\u7ecf\u9a8c\u5230\u8fbe\u4e0b\u4e00\u7ea7")
                    }(r, n, i), c = function createNextLevel(e, t) {
                        return ib(e, t) ? null : ss.a.createElement(Xf.a, {userLevel: t + 1, isNext: !0, __self: void 0})
                    }(r, n);
                return ss.a.createElement("div", {
                    className: "HeaderUserLevel",
                    __self: void 0
                }, ss.a.createElement("a", {
                    href: "/member/mylevel",
                    target: "_blank",
                    __self: void 0
                }, ss.a.createElement(Xf.a, {
                    userLevel: n,
                    __self: void 0
                }), ss.a.createElement("div", {
                    className: "HeaderUserLevel-progress",
                    __self: void 0
                }, ss.a.createElement("div", {
                    className: "HeaderUserLevel-bar",
                    __self: void 0
                }, ss.a.createElement("span", {
                    className: "HeaderUserLevel-bar-per",
                    style: {width: a + "%"},
                    __self: void 0
                })), ss.a.createElement("span", {
                    className: "HeaderUserLevel-bar-num",
                    __self: void 0
                }, a + "%"), ss.a.createElement("div", {
                    className: "HeaderUserLevel-tip",
                    __self: void 0
                }, ss.a.createElement("p", {__self: void 0}, l), ss.a.createElement("i", {__self: void 0}))), c))
            };
        ab.propTypes = {levelData: gs.a.oneOfType([gs.a.number, gs.a.string]).isRequired};
        var lb, cb, sb, ub, pb, fb, bb, db, yb, mb, hb, vb, _b, gb, Db = ab, Sb = (o("7a9cd"), o("3105c")),
            wb = o.n(Sb), Ob = function GuildEntry() {
                return ss.a.createElement("a", {
                    className: "head-guild-entry",
                    href: "//mp.douyu.com/club/home",
                    target: "_blank",
                    title: "\u76f4\u64ad\u6709\u7ec4\u7ec7\uff0c\u66f4\u4e0a\u4e00\u5c42\u697c",
                    __self: void 0
                }, ss.a.createElement("img", {
                    className: "Promotion-guildEntryImg",
                    src: wb.a + Ds.imgSuffix,
                    __self: void 0
                }))
            }, Eb = (o("bac8f"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }), Cb = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function Grayscale_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        function Grayscale_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Eb(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Grayscale_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        !function insertGrayscaleSvg() {
            var e = "js-svg-grayscale";
            if (!document.querySelector("#" + e)) {
                var t = "http://www.w3.org/2000/svg", o = document.createElementNS(t, "svg"),
                    r = document.createElementNS(t, "filter"), n = document.createElementNS(t, "feColorMatrix");
                o.setAttributeNS(null, "version", "1.1"), o.setAttributeNS(null, "style", "position:absolute;left:-1000px;top:-1000px;"), r.setAttributeNS(null, "id", e), n.setAttributeNS(null, "type", "matrix"), n.setAttributeNS(null, "values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.appendChild(n), o.appendChild(r), (document.body || document.documentElement).appendChild(o)
            }
        }();
        var Nb, Pb, jb, Tb = Object(Ep.addNote)("\u56fe\u7247\u7070\u5316\u7ec4\u4ef6")((sb = cb = function (e) {
                function Grayscale(t) {
                    !function Grayscale_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Grayscale);
                    var o = function Grayscale_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Eb(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this, t));
                    return o.state = t, o
                }

                return Grayscale_inherits(Grayscale, e), Grayscale.prototype.componentDidMount = function componentDidMount() {
                    var e = this, t = this.props, o = t.src, r = t.width, n = t.height, i = t.errorsrc,
                        a = "undefined" === typeof r || "undefined" === typeof n;
                    if (a || i) {
                        var l = new Image;
                        a && (l.onload = function () {
                            e.setState({width: l.width, height: l.height}), l.onload = null
                        }), i && (l.onerror = function () {
                            e.setState({src: i}), l.onerror = null
                        }), l.src = o
                    }
                }, Grayscale.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    var t = e.src, o = e.width, r = e.height, n = e.errorsrc, i = e.title, a = this.state, l = a.src,
                        c = a.width, s = a.height, u = a.errorsrc, p = a.title, f = {};
                    t === l && o === c && r === s && n === u && i === p || (f = Cb({}, e), this.setState(f))
                }, Grayscale.prototype.render = function render() {
                    var e = this.state, t = e.src, o = e.width, r = e.height, n = e.title;
                    return window.navigator.msPointerEnabled || window.navigator.pointerEnabled ? ss.a.createElement("svg", {
                        width: o,
                        height: r,
                        __self: this
                    }, ss.a.createElement("g", {__self: this}, ss.a.createElement("title", {__self: this}, n), ss.a.createElement("image", {
                        xlinkHref: t,
                        x: "0",
                        y: "0",
                        filter: "url(#js-svg-grayscale)",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        preserveAspectRatio: "none meet",
                        width: o,
                        height: r,
                        __self: this
                    }))) : ss.a.createElement("img", {
                        className: "Grayscale",
                        src: t,
                        width: o,
                        height: r,
                        title: n,
                        __self: this
                    })
                }, Grayscale
            }(ss.a.Component), cb.propTypes = (ub = Object(Ep.addNoteToProp)("\u56fe\u7247\u5730\u5740"), pb = Object(Ep.addNoteToProp)("\u5bbd"), fb = Object(Ep.addNoteToProp)("\u9ad8"), bb = Object(Ep.addNoteToProp)("title\u5c5e\u6027"), db = Object(Ep.addNoteToProp)("\u56fe\u7247\u52a0\u8f7d\u9519\u8bef\u65f6\u5c55\u793a\u7684\u5730\u5740"), Grayscale_applyDecoratedDescriptor(yb = {
                src: _s.string.isRequired,
                width: _s.number,
                height: _s.number,
                title: _s.string,
                errorsrc: _s.string
            }, "src", [ub], (mb = (mb = Object.getOwnPropertyDescriptor(yb, "src")) ? mb.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return mb
                }
            }), yb), Grayscale_applyDecoratedDescriptor(yb, "width", [pb], (hb = (hb = Object.getOwnPropertyDescriptor(yb, "width")) ? hb.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return hb
                }
            }), yb), Grayscale_applyDecoratedDescriptor(yb, "height", [fb], (vb = (vb = Object.getOwnPropertyDescriptor(yb, "height")) ? vb.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return vb
                }
            }), yb), Grayscale_applyDecoratedDescriptor(yb, "title", [bb], (_b = (_b = Object.getOwnPropertyDescriptor(yb, "title")) ? _b.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return _b
                }
            }), yb), Grayscale_applyDecoratedDescriptor(yb, "errorsrc", [db], (gb = (gb = Object.getOwnPropertyDescriptor(yb, "errorsrc")) ? gb.value : void 0, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                initializer: function initializer() {
                    return gb
                }
            }), yb), yb), cb.defaultProps = {src: "//live.dz11.com/resource/2017/02/21/common/0f7b7519fdd8a74165d51b75534a6f39.gif"}, lb = sb)) || lb,
            kb = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function NobleState_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : kb(t)) && "function" !== typeof t ? e : t
        }

        function NobleState_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : kb(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function NobleState_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var zb, Ib, Rb, Mb, Ab, Lb = (Nb = (0, n.a.Service)(i.DataCenter.common), Pb = function (e) {
                function NobleState() {
                    var t, o;
                    !function NobleState_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, NobleState);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = NobleState_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function NobleState_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(o, "common", jb, o), o.handleOpenNoble = function () {
                        o.common.push("NobleBuyModelOpen")
                    }, NobleState_possibleConstructorReturn(o, t)
                }

                return NobleState_inherits(NobleState, e), NobleState.prototype.render = function render() {
                    var e = this.props.nobleState.nobleInfo, t = e.isTrial, o = e.isInProtected, r = e.lowNobleLevel,
                        n = e.lowProtectNobleLevel, i = e.nobleName, a = e.expireDate, l = e.daysLeft, c = "\u7eed\u8d39",
                        s = "\u4eab\u6709\u4ee5\u4e0b\u7279\u6743", u = "\u6709\u6548\u671f\u81f3\uff1a" + a;
                    return 9 === +e.nobleLevel ? c = r || n ? "\u7eed\u8d39" : "\u5f00\u901a" : o ? (c = "\u7eed\u8d39", s = "\u7279\u6743\u5df2\u8fc7\u671f", u = "\u5f53\u524d\u5728\u7eed\u8d39\u4fdd\u62a4\u671f\uff0c\u8bf7\u53ca\u65f6\u7eed\u8d39") : t && (c = "\u5f00\u901a", u = "\u4f53\u9a8c\u5361" + u), [ss.a.createElement("div", {
                        key: "nobleheader",
                        className: "NobleRights-header",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleRights-nobleName",
                        __self: this
                    }, i, s), ss.a.createElement("div", {
                        className: "NobleRights-btnGroup",
                        __self: this
                    }, ss.a.createElement("a", {
                        className: "NobleRights-btn--hollow NobleRights-btn",
                        href: "/cms/gong/201701/16/4753.shtml",
                        target: "_blank",
                        __self: this
                    }, "\u8d35\u65cfFAQ"), ss.a.createElement("span", {
                        className: "NobleRights-btn--solid NobleRights-btn",
                        onClick: this.handleOpenNoble,
                        __self: this
                    }, c))), ss.a.createElement("div", {
                        key: "nobleexpiretime",
                        className: "NobleRights-expireTime",
                        __self: this
                    }, u, l > 0 ? ss.a.createElement("span", {
                        className: "NobleRights-timeLeft",
                        __self: this
                    }, "\u8d35\u65cf\u8fd8\u5269", l, "\u5929\u5230\u671f") : null)]
                }, NobleState
            }(ss.a.Component), jb = function NobleState_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(Pb.prototype, "common", [Nb], {enumerable: !0, initializer: null}), Pb),
            Bb = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, xb = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function NobleSuperProgress_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function NobleSuperProgress_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Bb(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function NobleSuperProgress_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function NobleSuperProgress_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Fb, Hb, Ub, Gb, Wb, Yb, $b, qb = n.a.Service,
            Vb = (zb = qb(i.DataCenter.common), Ib = qb(Oa), Rb = function (e) {
                function NobleSuperProgress(t) {
                    !function NobleSuperProgress_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, NobleSuperProgress);
                    var o = function NobleSuperProgress_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Bb(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this, t));
                    return NobleSuperProgress_initDefineProp(o, "common", Mb, o), NobleSuperProgress_initDefineProp(o, "nobleInfoService", Ab, o), o.state = {
                        nobleSuperProgress: {},
                        isOpenHss: {}
                    }, o
                }

                return NobleSuperProgress_inherits(NobleSuperProgress, e), NobleSuperProgress.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.nobleSp = this.nobleInfoService.nobleSuperProgressStream$.subscribe(function (t) {
                        if (t) {
                            var o = t || {};
                            e.setState({nobleSuperProgress: xb({}, o.nobleSuperProgress, {isGet: !0})})
                        }
                    }), this.isopen = this.nobleInfoService.isOpenHss$.subscribe(function (t) {
                        if (t) {
                            var o = t || {};
                            e.setState({isOpenHss: xb({}, o.isOpenHss)})
                        }
                    })
                }, NobleSuperProgress.prototype.componentWillUnmount = function componentWillUnmount() {
                    this.nobleSp && this.nobleSp.unsubscribe(), this.isopen && this.isopen.unsubscribe()
                }, NobleSuperProgress.prototype.formatContribute = function formatContribute(e, t) {
                    return e >= 1e4 ? this.formatDecimals(e / 1e4, t) + "\u4e07" : this.formatDecimals(e, 0)
                }, NobleSuperProgress.prototype.formatDecimals = function formatDecimals(e, t) {
                    var o = new RegExp("(\\.\\d{" + t + "})\\d*$"), r = ("" + e).replace(o, "$1");
                    return r = this.formatDotZero(r)
                }, NobleSuperProgress.prototype.formatDotZero = function formatDotZero(e) {
                    return String(e).replace(/(\.\d*?)0+$/g, "$1").replace(/\.$/, "")
                }, NobleSuperProgress.prototype.renderProgress01 = function renderProgress01(e) {
                    var t = e.isOpenHs, o = e.isGet, r = e.nobleLevel, n = e.lastYc, i = e.curProgress8,
                        a = e.curProgress9, l = e.sopcg, c = e.soptg, s = e.srecg, u = e.sretg, p = e.max, f = e.red;
                    if (+o) {
                        if (8 === +r && +t) return ss.a.createElement("div", {
                            className: "NobleRights-superProgress",
                            __self: this
                        }, ss.a.createElement("div", {
                            className: "NobleRights-superTxt",
                            __self: this
                        }, ss.a.createElement("p", {__self: this}, "\u8ddd\u79bb\u5f00\u901a\u5e7b\u795e\uff0c\u8fd8\u9700\u6d88\u8d39", n, "\u9c7c\u7fc5")), ss.a.createElement("div", {
                            className: "NobleRights-superBar",
                            __self: this
                        }, ss.a.createElement("span", {
                            className: "NobleRights-bar",
                            __self: this
                        }, ss.a.createElement("span", {
                            className: "NobleRights-barInner",
                            style: {width: i + "%"},
                            __self: this
                        }), ss.a.createElement("span", {className: "NobleRights-barNum", __self: this}, l + "/" + c))));
                        if (9 === +r) return 1 === +p ? ss.a.createElement("div", {
                            className: "NobleRights-superProgress",
                            __self: this
                        }, ss.a.createElement("div", {
                            className: "NobleRights-superTxt",
                            __self: this
                        }, ss.a.createElement("p", {__self: this}, "\u60a8\u7684\u5e7b\u795e\u5df2\u8fbe\u5230\u7eed\u8d39\u6700\u9ad8\u5929\u6570")), ss.a.createElement("div", {
                            className: "NobleRights-superBar",
                            __self: this
                        }, ss.a.createElement("span", {
                            className: "NobleRights-bar",
                            __self: this
                        }, ss.a.createElement("span", {
                            className: "NobleRights-barInner",
                            style: {width: "100%"},
                            __self: this
                        }), ss.a.createElement("span", {
                            className: "NobleRights-barNum",
                            __self: this
                        }, "Max")))) : ss.a.createElement("div", {
                            className: "NobleRights-superProgress",
                            __self: this
                        }, ss.a.createElement("div", {
                            className: "NobleRights-superTxt",
                            __self: this
                        }, ss.a.createElement("p", {__self: this}, "\u6bcf\u6d88\u8d39", u, "\u9c7c\u7fc5\u53ef\u7eed\u8d39", f, "\u5929\u5e7b\u795e")), ss.a.createElement("div", {
                            className: "NobleRights-superBar",
                            __self: this
                        }, ss.a.createElement("span", {
                            className: "NobleRights-bar",
                            __self: this
                        }, ss.a.createElement("span", {
                            className: "NobleRights-barInner",
                            style: {width: a + "%"},
                            __self: this
                        }), ss.a.createElement("span", {className: "NobleRights-barNum", __self: this}, s + "/" + u))))
                    }
                    return 8 !== +r || t ? null : this.renderTxt()
                }, NobleSuperProgress.prototype.renderProgress = function renderProgress(e) {
                    var t = e || {}, o = t.nobleLevel, r = t.lastYc, n = t.curProgress8, i = t.curProgress9,
                        a = t.sopcg, l = t.soptg, c = t.srecg, s = t.sretg, u = t.max, p = t.red;
                    return 8 === +o ? ss.a.createElement("div", {
                        className: "NobleRights-superProgress",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleRights-superTxt",
                        __self: this
                    }, ss.a.createElement("p", {__self: this}, "\u8ddd\u79bb\u5f00\u901a\u5e7b\u795e\uff0c\u8fd8\u9700\u6d88\u8d39", r, "\u9c7c\u7fc5")), ss.a.createElement("div", {
                        className: "NobleRights-superBar",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleRights-bar",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleRights-barInner",
                        style: {width: n + "%"},
                        __self: this
                    }), ss.a.createElement("span", {
                        className: "NobleRights-barNum",
                        __self: this
                    }, a + "/" + l)))) : 9 === +o ? 1 === +u ? ss.a.createElement("div", {
                        className: "NobleRights-superProgress",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleRights-superTxt",
                        __self: this
                    }, ss.a.createElement("p", {__self: this}, "\u60a8\u7684\u5e7b\u795e\u5df2\u8fbe\u5230\u7eed\u8d39\u6700\u9ad8\u5929\u6570")), ss.a.createElement("div", {
                        className: "NobleRights-superBar",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleRights-bar",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleRights-barInner",
                        style: {width: "100%"},
                        __self: this
                    }), ss.a.createElement("span", {
                        className: "NobleRights-barNum",
                        __self: this
                    }, "Max")))) : ss.a.createElement("div", {
                        className: "NobleRights-superProgress",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleRights-superTxt",
                        __self: this
                    }, ss.a.createElement("p", {__self: this}, "\u6bcf\u6d88\u8d39", s, "\u9c7c\u7fc5\u53ef\u7eed\u8d39", p, "\u5929\u5e7b\u795e")), ss.a.createElement("div", {
                        className: "NobleRights-superBar",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleRights-bar",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleRights-barInner",
                        style: {width: i + "%"},
                        __self: this
                    }), ss.a.createElement("span", {
                        className: "NobleRights-barNum",
                        __self: this
                    }, c + "/" + s)))) : null
                }, NobleSuperProgress.prototype.renderTxt = function renderTxt() {
                    return ss.a.createElement("div", {
                        className: "NobleRights-superProgress",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleRights-superTxt",
                        __self: this
                    }, ss.a.createElement("p", {__self: this}, "\u76ee\u524d\u5e7b\u795e\u8d35\u65cf\u53ea\u80fd\u901a\u8fc7<\u521b\u4e16\u5e7b\u795e\u964d\u4e34>\u6d3b\u52a8\u4ea7\u751f")))
                }, NobleSuperProgress.prototype.render = function render() {
                    var e = this.state, t = e.nobleSuperProgress, o = t.isGet, r = void 0 !== o && o, n = t.opcg,
                        i = void 0 === n ? 0 : n, a = t.optg, l = void 0 === a ? 0 : a, c = t.recg,
                        s = void 0 === c ? 0 : c, u = t.retg, p = void 0 === u ? 0 : u, f = t.max,
                        b = void 0 === f ? 0 : f, d = t.red, y = void 0 === d ? "--" : d, m = e.isOpenHss.god_act_time,
                        h = void 0 === m ? 0 : m, v = this.props.nobleLevel, _ = this.formatContribute(i / 100, 1) || 0,
                        g = this.formatContribute(l / 100, 1) || 0, D = this.formatContribute(s / 100, 1) || 0,
                        S = this.formatContribute(p / 100, 1) || 0, w = 0, O = 0;
                    w = 0 === l || 0 === i ? 0 : i / l < .01 ? Math.ceil(i / l) : i / l * 100, O = 0 === p || 0 === s ? 0 : s / p < .01 ? Math.ceil(s / p) : s / p * 100;
                    var E = "--";
                    E = l < i ? "--" : this.formatContribute((l - i) / 100, 1) || 0;
                    var C = new Date, N = Math.floor(C.getTime() / 1e3) > h ? 1 : 0;
                    return ss.a.createElement("div", {__self: this}, this.renderProgress01({
                        isOpenHs: N,
                        isGet: r,
                        nobleLevel: v,
                        lastYc: E,
                        curProgress8: w,
                        curProgress9: O,
                        sopcg: _,
                        soptg: g,
                        srecg: D,
                        sretg: S,
                        max: b,
                        red: y
                    }))
                }, NobleSuperProgress
            }(ss.a.Component), Mb = NobleSuperProgress_applyDecoratedDescriptor(Rb.prototype, "common", [zb], {
                enumerable: !0,
                initializer: null
            }), Ab = NobleSuperProgress_applyDecoratedDescriptor(Rb.prototype, "nobleInfoService", [Ib], {
                enumerable: !0,
                initializer: null
            }), Rb),
            Zb = (o("b2f4b"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }), Kb = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function NobleEntry_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function NobleEntry_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Zb(t)) && "function" !== typeof t ? e : t
        }

        function NobleEntry_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Zb(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function NobleEntry_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function NobleEntry_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Jb = n.a.Service, Xb = (Fb = Jb(Oa), Hb = Jb(Rt), Ub = Jb(i.DataCenter.common), Gb = function (e) {
            function NobleEntry() {
                var t, o;
                !function NobleEntry_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, NobleEntry);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = NobleEntry_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), NobleEntry_initDefineProp(o, "nobleInfoService", Wb, o), NobleEntry_initDefineProp(o, "commonDataService", Yb, o), NobleEntry_initDefineProp(o, "common", $b, o), o.config = {
                    small: 50,
                    big: 90
                }, o.handleOpenNoble = function () {
                    o.common.push("NobleBuyModelOpen")
                }, NobleEntry_possibleConstructorReturn(o, t)
            }

            return NobleEntry_inherits(NobleEntry, e), NobleEntry.prototype.componentDidMount = function componentDidMount() {
                var e = this;
                this.commonDataService.getNobelInfo().subscribe(function (t) {
                    var o = (t.data || {}).levelToShow4Rights;
                    +o > 0 ? (e.nobleInfoService.getNobleRightsByEpics(o), e.nobleInfoService.getNobleBaseConfigByEpics(), 8 !== +o && 9 !== +o || e.nobleInfoService.getNobleSuperProgress()) : e.nobleInfoService.getNobleBaseConfigByEpics()
                })
            }, NobleEntry.prototype.render = function render() {
                var e = this, t = this.props, o = t.nobleRights, r = void 0 === o ? [] : o, n = t.nobleInfo,
                    i = n.nobleEndSeconds, a = n.nobleLevel, l = n.nobleProtectLevel, c = t.nobleBaseConf,
                    s = c.moreIcon, u = c.promotionIcon, p = this.config, f = p.small, b = p.big,
                    d = s ? "//res.douyucdn.cn//resource/" + s : "", y = u ? "//res.douyucdn.cn//resource/" + u : "";
                return !(l > 0 || a > 0) ? ss.a.createElement("div", {
                    className: "Promotion-nobleRights",
                    onClick: this.handleOpenNoble,
                    __self: this
                }, ss.a.createElement("img", {
                    className: "Promotion-nobleRightsImg",
                    src: y,
                    __self: this
                })) : ss.a.createElement("div", {
                    className: "NobleRights",
                    __self: this
                }, ss.a.createElement(Lb, {
                    nobleState: Kb({}, this.props),
                    __self: this
                }), ss.a.createElement("ul", {className: "NobleRights-list", __self: this}, r.map(function (t, o) {
                    var r = "//res.douyucdn.cn//resource/" + t.smallThumb,
                        n = "//res.douyucdn.cn//resource/" + t.bigThumb;
                    return ss.a.createElement("li", {
                        key: o,
                        className: "NobleRights-item",
                        __self: e
                    }, i > 0 ? ss.a.createElement("img", {
                        src: r + Ds.imgSuffix,
                        width: f,
                        height: f,
                        __self: e
                    }) : ss.a.createElement(Tb, {
                        src: r,
                        width: f,
                        height: f,
                        __self: e
                    }), ss.a.createElement("div", {
                        className: "NobleRights-triangle",
                        __self: e
                    }), ss.a.createElement("div", {
                        className: "NobleRights-detail",
                        __self: e
                    }, ss.a.createElement("div", {
                        className: "NobleRights-bigThumb",
                        __self: e
                    }, i > 0 ? ss.a.createElement("img", {
                        src: n + Ds.imgSuffix,
                        width: b,
                        height: b,
                        __self: e
                    }) : ss.a.createElement(Tb, {
                        src: n,
                        width: b,
                        height: b,
                        __self: e
                    })), ss.a.createElement("div", {
                        className: "NobleRights-descTxt",
                        __self: e
                    }, ss.a.createElement("h6", {
                        className: "NobleRights-name",
                        __self: e
                    }, t.name), ss.a.createElement("p", {className: "NobleRights-desc", __self: e}, t.desc))))
                }), s ? ss.a.createElement("li", {
                    className: "NobleRights-item",
                    __self: this
                }, ss.a.createElement("a", {
                    className: "NobleRights-moreRights",
                    href: "/member/noble/privilege",
                    target: "_blank",
                    __self: this
                }, i > 0 ? ss.a.createElement("img", {
                    src: d + Ds.imgSuffix,
                    width: f,
                    height: f,
                    __self: this
                }) : ss.a.createElement(Tb, {
                    src: d,
                    width: f,
                    height: f,
                    __self: this
                }))) : null), ss.a.createElement(Vb, {nobleLevel: a, __self: this}))
            }, NobleEntry
        }(ss.a.Component), Wb = NobleEntry_applyDecoratedDescriptor(Gb.prototype, "nobleInfoService", [Fb], {
            enumerable: !0,
            initializer: null
        }), Yb = NobleEntry_applyDecoratedDescriptor(Gb.prototype, "commonDataService", [Hb], {
            enumerable: !0,
            initializer: null
        }), $b = NobleEntry_applyDecoratedDescriptor(Gb.prototype, "common", [Ub], {
            enumerable: !0,
            initializer: null
        }), Gb);
        Xb.propTypes = {nobleInfo: gs.a.object.isRequired};
        var Qb, ed, td, od, rd = Xb,
            nd = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function Promotion_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : nd(t)) && "function" !== typeof t ? e : t
        }

        function Promotion_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : nd(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Promotion_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var id = (Qb = (0, n.a.Service)(i.DataCenter.global), Object(et.log)((td = function (e) {
            function Promotion() {
                var t, o;
                !function Promotion_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, Promotion);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = Promotion_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function Promotion_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "global", od, o), Promotion_possibleConstructorReturn(o, t)
            }

            return Promotion_inherits(Promotion, e), Promotion.prototype.render = function render() {
                var e = this.global.get("USER_INFO.ownRoom") || 0, t = this.props.sourceData || {}, o = t.nobleInfo,
                    r = void 0 === o ? {} : o, n = t.nobleRights, i = void 0 === n ? [] : n, a = t.nobleBaseConf,
                    l = void 0 === a ? {} : a, c = r.nobleLevel, s = r.nobleProtectLevel, u = !s && !c && +e,
                    p = !(s > 0 || c > 0);
                return ss.a.createElement("div", {
                    className: "Promotion" + (u || p ? " is-promotion" : ""),
                    __self: this
                }, u ? ss.a.createElement(Ob, {__self: this}) : ss.a.createElement(rd, {
                    nobleInfo: r,
                    nobleRights: i,
                    nobleBaseConf: l,
                    __self: this
                }))
            }, Promotion
        }(ss.a.Component), od = function Promotion_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(td.prototype, "global", [Qb], {enumerable: !0, initializer: null}), ed = td)) || ed);
        id.propTypes = {sourceData: gs.a.object.isRequired};
        var ad, ld, cd, sd, ud, pd, fd, bd = id,
            dd = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function iframePayServices_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function iframePayServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : dd(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function iframePayServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function iframePayServices_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var yd, md, hd, vd, _d, gd, Dd = n.a.Service, Sd = n.a.Store,
            wd = (ad = Dd(Rt), ld = Dd(i.DataCenter.common), cd = Sd(), sd = function (e) {
                function IframePayServices() {
                    !function iframePayServices_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, IframePayServices);
                    var t = function iframePayServices_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : dd(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    iframePayServices_initDefineProp(t, "commonDataServices", ud, t), iframePayServices_initDefineProp(t, "common", pd, t), iframePayServices_initDefineProp(t, "store", fd, t);
                    var o = "https://cz.douyu.com/".replace(/^http(s?):/, "").replace(/\/$/g, "");
                    return window.addEventListener("message", function (e) {
                        var r = {};
                        if (e.origin && e.origin.replace(/^http(s?):/, "").replace(/\/$/g, "") === o) {
                            try {
                                r = JSON.parse(e.data)
                            } catch (e) {
                                return
                            }
                            r.type && "iframepay" === r.type.toString() && t.commonDataServices.updateTotalGold({data: 100 * r.num})
                        }
                    }), t.common.get("RoomShowIframePay").subscribe(function () {
                        t.store.dispatch(Gc.iframePayShow())
                    }), t
                }

                return iframePayServices_inherits(IframePayServices, e), IframePayServices.prototype.showIframePay = function showIframePay() {
                    this.store.dispatch(Gc.iframePayShow("head"))
                }, IframePayServices
            }(u.Service), ud = iframePayServices_applyDecoratedDescriptor(sd.prototype, "commonDataServices", [ad], {
                enumerable: !0,
                initializer: null
            }), pd = iframePayServices_applyDecoratedDescriptor(sd.prototype, "common", [ld], {
                enumerable: !0,
                initializer: null
            }), fd = iframePayServices_applyDecoratedDescriptor(sd.prototype, "store", [cd], {
                enumerable: !0,
                initializer: null
            }), sd),
            Od = (o("0ec84"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            });

        function Wallet_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function Wallet_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Od(t)) && "function" !== typeof t ? e : t
        }

        function Wallet_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Od(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Wallet_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function Wallet_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Ed = n.a.Service, Cd = (yd = Ed(i.DataCenter.common), md = Ed(wd), Object(et.log)((vd = function (e) {
            function Wallet() {
                var t, o;
                !function Wallet_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, Wallet);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = Wallet_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), Wallet_initDefineProp(o, "common", _d, o), Wallet_initDefineProp(o, "iframePayServices", gd, o), o.openRecharge = function (e) {
                    e.preventDefault(), o.iframePayServices.showIframePay()
                }, Wallet_possibleConstructorReturn(o, t)
            }

            return Wallet_inherits(Wallet, e), Wallet.prototype.render = function render() {
                var e = this.props.walletData, t = e.silver, o = void 0 === t ? 0 : t, r = e.totalGold,
                    n = void 0 === r ? 0 : r, i = e.nobleInfo, a = i.isTrial, l = i.nobleEndSeconds, c = i.nobleGold,
                    s = i.nobleLevel, u = i.nobleProtectLevel;
                return ss.a.createElement("div", {
                    className: "Wallet",
                    __self: this
                }, ss.a.createElement("div", {
                    className: "Wallet-content",
                    __self: this
                }, ss.a.createElement("div", {
                    className: "Wallet-content-mywallet",
                    __self: this
                }, ss.a.createElement("h5", {
                    className: "Wallet-content-mywallet-title",
                    __self: this
                }, ss.a.createElement("a", {
                    onClick: this.openRecharge,
                    className: "Wallet-content-recharge",
                    href: "/web_game/welcome/18",
                    target: "_blank",
                    __self: this
                }, "\u5145\u503c"), "\u6211\u7684\u94b1\u5305"), ss.a.createElement("div", {
                    className: "Wallet-content-mywallet-wealth",
                    __self: this
                }, ss.a.createElement("span", {
                    className: "Wallet-content-mywallet-wealth-sliver",
                    title: "\u505a\u4efb\u52a1\u53ef\u83b7\u5f97\u9c7c\u4e38",
                    __self: this
                }, ss.a.createElement("i", {__self: this}), "\u9c7c\u4e38", ss.a.createElement("span", {__self: this}, o)), ss.a.createElement("span", {
                    className: "Wallet-content-mywallet-wealth-gold",
                    title: "\u9c7c\u7fc5" + n,
                    __self: this
                }, ss.a.createElement("i", {__self: this}), "\u9c7c\u7fc5", ss.a.createElement("span", {__self: this}, n)), !a && (u || s) && l > 0 ? ss.a.createElement("a", {
                    className: "Wallet-nobleGold",
                    href: "/member/noble/record",
                    target: "_blank",
                    __self: this
                }, "(\u8d35\u65cf\u9c7c\u7fc5", c, ")", c > 0 ? ss.a.createElement("span", {
                    className: "Wallet-nobleGoldTip",
                    __self: this
                }, "\u5728\u8d35\u65cf\u751f\u6548\u671f\u95f4\u4e00\u76f4\u6709\u6548") : "") : ""))))
            }, Wallet
        }(ss.a.Component), _d = Wallet_applyDecoratedDescriptor(vd.prototype, "common", [yd], {
            enumerable: !0,
            initializer: null
        }), gd = Wallet_applyDecoratedDescriptor(vd.prototype, "iframePayServices", [md], {
            enumerable: !0,
            initializer: null
        }), hd = vd)) || hd), Nd = (o("50af3"), function Badge(e) {
            var t = e.number;
            return t ? ss.a.createElement("span", {className: "Badge", __self: void 0}, t > 99 ? "99+" : t) : null
        });
        Nd.propTypes = {number: gs.a.number.isRequired};
        var Pd, jd, Td, kd, zd = Nd, Id = [{
            link: "/member",
            text: "\u4e2a\u4eba\u4e2d\u5fc3",
            icon: "center",
            badge: !0
        }, {link: "/directory/myFollow", text: "\u6211\u7684\u5173\u6ce8", icon: "attention"}, {
            link: "/member/pm",
            text: "\u7ad9\u5185\u4fe1",
            icon: "message",
            badge: !0
        }, {link: "/cms/zt/anchor_guide.html", text: "\u6211\u8981\u76f4\u64ad", icon: "guide"}, {
            link: "/room/my",
            text: "\u76f4\u64ad\u8bbe\u7f6e",
            icon: "live"
        }], Rd = (o("7024a"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        });

        function Shortcut_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Rd(t)) && "function" !== typeof t ? e : t
        }

        function Shortcut_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Rd(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Shortcut_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Md = (Pd = (0, n.a.Service)(i.DataCenter.global), Object(et.log)((Td = function (e) {
            function Shortcut() {
                var t, o;
                !function Shortcut_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, Shortcut);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = Shortcut_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function Shortcut_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "global", kd, o), Shortcut_possibleConstructorReturn(o, t)
            }

            return Shortcut_inherits(Shortcut, e), Shortcut.prototype.render = function render() {
                var e = this, t = this.props.baseConfig, o = t.privateLetters, r = void 0 === o ? 0 : o,
                    n = t.anchorRecruitMessages, i = void 0 === n ? 0 : n, a = {
                        message: ss.a.createElement(zd, {number: +r, __self: this}),
                        center: ss.a.createElement(zd, {number: +i, __self: this})
                    }, l = this.global.get("USER_INFO.ownRoom") || 0;
                return ss.a.createElement("div", {
                    className: "Shortcut",
                    __self: this
                }, ss.a.createElement("ul", {className: "Shortcut-list", __self: this}, Id.filter(function (e) {
                    return e.icon !== (+l ? "guide" : "live")
                }).map(function (t, o) {
                    var r = t.link, n = t.icon, i = t.text, l = t.badge;
                    return ss.a.createElement("li", {
                        className: "Shortcut-listItem",
                        key: o,
                        "data-index": o,
                        __self: e
                    }, ss.a.createElement("a", {
                        className: "Shortcut-listItem-link",
                        href: r,
                        target: "_blank",
                        onMouseDown: function dysHandleCombine(e) {
                            return function () {
                                pn("130100101014")({com: {p: e}})
                            }
                        }(o + 1),
                        __self: e
                    }, ss.a.createElement("i", {
                        className: "is-" + n,
                        __self: e
                    }), ss.a.createElement("p", {__self: e}, i), l ? a[n] : null))
                })))
            }, Shortcut
        }(ss.a.Component), kd = function Shortcut_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(Td.prototype, "global", [Pd], {enumerable: !0, initializer: null}), jd = Td)) || jd);
        Md.propTypes = {baseConfig: gs.a.object.isRequired};
        var Ad, Ld = Object(us.connect)(function mapStateToProps(e) {
            return {baseConfig: e.baseConfig}
        })(Md), Bd = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function taskServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Bd(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function taskServices_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var xd, Fd, Hd, Ud, Gd = n.a.StoreFactory, Wd = Object(et.log)(Ad = function (e) {
            function UserInfoServices() {
                return function taskServices_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, UserInfoServices), function taskServices_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : Bd(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return taskServices_inherits(UserInfoServices, e), UserInfoServices.prototype.gameTaskDataByEpic = function gameTaskDataByEpic() {
                Gd.getInstance().dispatch(Zl.getTaskData())
            }, UserInfoServices.prototype.getTaskDetails = function getTaskDetails(e) {
                return new Promise(function (t) {
                    i.httpClient.get(nc, "/ztCache/mobilegame/getPropPacks", {propid: e}).subscribe(function (e) {
                        0 === e.error && t(e.data.giftData)
                    })
                })
            }, UserInfoServices
        }(u.Service)) || Ad, Yd = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function TaskHoverModal_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Yd(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function TaskHoverModal_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var $d, qd, Vd, Zd, Kd = (xd = (0, n.a.Service)(Wd), Object(et.log)((Hd = function (e) {
                function TaskHoverModal() {
                    !function TaskHoverModal_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, TaskHoverModal);
                    var t = function TaskHoverModal_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Yd(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return function TaskHoverModal_initDefineProp(e, t, o, r) {
                        o && Object.defineProperty(e, t, {
                            enumerable: o.enumerable,
                            configurable: o.configurable,
                            writable: o.writable,
                            value: o.initializer ? o.initializer.call(r) : void 0
                        })
                    }(t, "userInfoServices", Ud, t), t.getTaskDetails = function () {
                        t.state.giftList.length ? t.setState({showTaskDetail: !0}) : t.userInfoServices.getTaskDetails(t.ID).then(function (e) {
                            e.length && t.setState({giftList: e, showTaskDetail: !0})
                        })
                    }, t.hideTaskDetailModal = function () {
                        t.setState({showTaskDetail: !1})
                    }, t.state = {giftList: [], showTaskDetail: !1}, t
                }

                return TaskHoverModal_inherits(TaskHoverModal, e), TaskHoverModal.prototype.render = function render() {
                    var e = this, t = this.props, o = t.id, r = t.name, n = t.num, i = this.state.giftList;
                    return this.ID = o, ss.a.createElement("div", {
                        className: "Task-content-game-list-gift",
                        __self: this
                    }, ss.a.createElement("i", {
                        className: "Task-content-game-list-gift-icon",
                        __self: this
                    }), n > 1 ? ss.a.createElement("span", {
                        className: "Task-content-game-list-gift-bag",
                        __self: this
                    }, n, "\u4e2a", r) : ss.a.createElement("span", {
                        className: "Task-content-game-list-gift-bag",
                        __self: this
                    }, r), this.state.showTaskDetail && i.length ? ss.a.createElement("div", {
                        className: "Task-content-game-list-gift-info",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "Task-content-game-list-gift-info-arrow",
                        __self: this
                    }), i.map(function (t, o) {
                        return ss.a.createElement("div", {
                            className: "Task-content-game-list-gift-info-prop",
                            key: o,
                            __self: e
                        }, ss.a.createElement("img", {
                            className: "Task-content-game-list-gift-info-prop-icon",
                            src: t.icon + Ds.imgSuffix,
                            __self: e
                        }), ss.a.createElement("div", {
                            className: "Task-content-game-list-gift-info-prop-name",
                            __self: e
                        }, t.propName, "\xd7", t.propCnt))
                    })) : "")
                }, TaskHoverModal
            }(ss.a.Component), Ud = function TaskHoverModal_applyDecoratedDescriptor(e, t, o, r, n) {
                var i = {};
                return Object.keys(r).forEach(function (e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                    return r(e, t, o) || o
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(Hd.prototype, "userInfoServices", [xd], {enumerable: !0, initializer: null}), Fd = Hd)) || Fd),
            Jd = (o("cfe5e"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }), Xd = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function MyTask_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Jd(t)) && "function" !== typeof t ? e : t
        }

        function MyTask_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Jd(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function MyTask_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Qd = function dysHandleCombine() {
            Object(sn.dys)("click_topnavi_tab_dotask"), pn("130100101013")()
        }, ey = ($d = (0, n.a.Service)(Wd), Object(et.log)((Vd = function (e) {
            function Task() {
                var t, o;
                !function MyTask_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, Task);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = MyTask_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function MyTask_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "taskServices", Zd, o), MyTask_possibleConstructorReturn(o, t)
            }

            return MyTask_inherits(Task, e), Task.prototype.componentDidMount = function componentDidMount() {
                this.taskServices.gameTaskDataByEpic()
            }, Task.prototype.renderTaskList = function renderTaskList(e) {
                var t = this, o = e.silver, r = e.props;
                return ss.a.createElement("div", {
                    className: "Task-content-game-list",
                    __self: this
                }, [0, 1, 2].map(function (e) {
                    var o = r[e];
                    return o ? ss.a.createElement(Kd, Xd({}, o, {key: e, __self: t})) : ""
                }), r.length < 3 && o ? ss.a.createElement("div", {
                    className: "Task-content-game-list-gift",
                    __self: this
                }, ss.a.createElement("i", {
                    className: "Task-content-game-list-gift-icon is-silver",
                    __self: this
                }), ss.a.createElement("span", {
                    className: "Task-content-game-list-gift-bag",
                    __self: this
                }, o, "\u9c7c\u4e38")) : "")
            }, Task.prototype.render = function render() {
                var e = this.props.TaskData, t = e.gName, o = e.gIcon, r = e.gLink, n = e.reward;
                return t && o && r ? ss.a.createElement("div", {
                    className: "Task",
                    __self: this
                }, ss.a.createElement("h2", {
                    className: "Task-title",
                    __self: this
                }, "\u6211\u7684\u4efb\u52a1"), ss.a.createElement("div", {
                    className: "Task-content",
                    __self: this
                }, ss.a.createElement("img", {
                    className: "Task-content-gIcon",
                    src: o + Ds.imgSuffix,
                    __self: this
                }), ss.a.createElement("div", {
                    className: "Task-content-game",
                    __self: this
                }, ss.a.createElement("div", {
                    className: "Task-content-game-title",
                    __self: this
                }, ss.a.createElement("span", {
                    className: "Task-content-game-title-name",
                    __self: this
                }, t), ss.a.createElement("span", {
                    className: "Task-content-game-title-reward",
                    __self: this
                }, "\u6700\u9ad8\u53ef\u83b7\u5f97")), this.renderTaskList(n), ss.a.createElement("a", {
                    onMouseDown: Qd,
                    className: "Task-content-game-link",
                    href: r,
                    target: "_blank",
                    __self: this
                }, "\u505a\u4efb\u52a1")))) : ""
            }, Task
        }(ss.a.Component), Zd = function MyTask_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(Vd.prototype, "taskServices", [$d], {enumerable: !0, initializer: null}), qd = Vd)) || qd);
        ey.prototype.PropTypes = {TaskData: gs.a.object.isRequired};
        var ty, oy, ry, ny, iy, ay, ly, cy, sy = Object(us.connect)(function mapStateToProps(e) {
            return {TaskData: e.TaskData}
        })(ey), uy = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function UserPane_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function UserPane_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : uy(t)) && "function" !== typeof t ? e : t
        }

        function UserPane_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : uy(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function UserPane_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function UserPane_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var py = n.a.Service,
            fy = (ty = py(i.DataCenter.global), oy = py(i.DataCenter.common), ry = py(wt), Object(et.log)((iy = function (e) {
                function UserPane() {
                    var t, o;
                    !function UserPane_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, UserPane);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = UserPane_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), UserPane_initDefineProp(o, "global", ay, o), UserPane_initDefineProp(o, "common", ly, o), UserPane_initDefineProp(o, "userInfoServices", cy, o), UserPane_possibleConstructorReturn(o, t)
                }

                return UserPane_inherits(UserPane, e), UserPane.prototype.componentWillMount = function componentWillMount() {
                    this.global.get("$ROOM.room_id") || this.userInfoServices.getInfoByEpic()
                }, UserPane.prototype.render = function render() {
                    var e = this.props.userInfoData, t = void 0 === e ? {} : e, o = t.loading, r = t.totalExperience,
                        n = t.silver, i = t.totalGold, a = t.nobleGold, l = t.authenticationData, c = t.nobleInfo,
                        s = {silver: n, totalGold: i, nobleGold: a, nobleInfo: c},
                        u = {nobleInfo: c, nobleRights: t.nobleRights, nobleBaseConf: t.nobleBaseConf};
                    return ss.a.createElement("div", {
                        className: "Header-UserPane public-DropMenu-drop" + (o ? " Exit-loading" : ""),
                        __self: this
                    }, ss.a.createElement("i", {__self: this}), ss.a.createElement("div", {
                        className: "public-DropMenu-drop-main",
                        __self: this
                    }, o ? ss.a.createElement(Hs, {__self: this}) : ss.a.createElement(ss.a.Fragment, {__self: this}, ss.a.createElement("i", {__self: this}), ss.a.createElement("div", {
                        className: "Header-UserPane-top",
                        __self: this
                    }, ss.a.createElement(Jf, {
                        nobleState: u,
                        authenticationData: l,
                        __self: this
                    }), ss.a.createElement(Db, {levelData: r, __self: this})), ss.a.createElement(bd, {
                        sourceData: u,
                        __self: this
                    }), ss.a.createElement(Cd, {
                        walletData: s,
                        __self: this
                    }), ss.a.createElement(sy, {__self: this}), ss.a.createElement(Ld, {__self: this})), ss.a.createElement(Af, {__self: this})))
                }, UserPane
            }(ss.a.Component), ay = UserPane_applyDecoratedDescriptor(iy.prototype, "global", [ty], {
                enumerable: !0,
                initializer: null
            }), ly = UserPane_applyDecoratedDescriptor(iy.prototype, "common", [oy], {
                enumerable: !0,
                initializer: null
            }), cy = UserPane_applyDecoratedDescriptor(iy.prototype, "userInfoServices", [ry], {
                enumerable: !0,
                initializer: null
            }), ny = iy)) || ny);
        fy.propTypes = {userInfoData: gs.a.object.isRequired};
        var by, dy, yy, my, hy, vy, _y, gy, Dy, Sy, wy, Oy, Ey = fy,
            Cy = (o("820d2"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }), Ny = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function UserInfo_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function UserInfo_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Cy(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function UserInfo_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function UserInfo_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Py = n.a.Service,
            jy = (by = Py(i.DataCenter.global), dy = Py(i.DataCenter.common), yy = Py(i.DataCenter.localStorage), my = Py(Rt), hy = Py(Oa), Object(et.log)((_y = function (e) {
                function UserInfo(t) {
                    !function UserInfo_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, UserInfo);
                    var o = function UserInfo_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Cy(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this, t));
                    UserInfo_initDefineProp(o, "global", gy, o), UserInfo_initDefineProp(o, "common", Dy, o), UserInfo_initDefineProp(o, "localStorage", Sy, o), UserInfo_initDefineProp(o, "commonDataServices", wy, o), UserInfo_initDefineProp(o, "nobleInfoService", Oy, o), o.config = {
                        minTipDays: 7,
                        expireDaysStorage: "room-user-nobleExpireTip",
                        hiddenLeadStorage: "room-user-enterHiddenLead",
                        defualtColor: "#868686",
                        hoverColor: "#ff630e"
                    }, o.showUserPane = function () {
                        o.setState({userPaneShowStatus: !0}), pn("130100101018.3.1")()
                    }, o.hideUserPane = function () {
                        o.setState({userPaneShowStatus: !1})
                    }, o.handleEnterHiddenLead = function () {
                        o.localStorage.get(o.config.hiddenLeadStorage) || o.localStorage.set(o.config.hiddenLeadStorage, !0), o.setState({showTryEnterHiddenLead: !1})
                    };
                    var r = o.global.get("$ROOM.room_id");
                    return o.state = {
                        userPaneShowStatus: !1,
                        showExpireDaysLead: !1,
                        showTryEnterHiddenLead: !0,
                        loading: !0,
                        totalExperience: 0,
                        silver: 0,
                        totalGold: 0,
                        nobleGold: 0,
                        authenticationData: {},
                        nobleInfo: {},
                        room: {rid: r}
                    }, o
                }

                return UserInfo_inherits(UserInfo, e), UserInfo.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.commonDataServices.getIdentity().subscribe(function (t) {
                        var o = t.data;
                        e.setState({authenticationData: o})
                    }), this.commonDataServices.getUserExp().subscribe(function (t) {
                        var o = t.data;
                        e.setState({totalExperience: o})
                    }), this.commonDataServices.getTotalGold().subscribe(function (t) {
                        var o = t.data;
                        e.setState({totalGold: o})
                    }), this.commonDataServices.getSilver().subscribe(function (t) {
                        var o = t.data;
                        e.setState({silver: o, loading: !1})
                    }), this.nobleInfoService.nobleRightsStream$.subscribe(function (t) {
                        t.nobleRights && e.setState({nobleRights: t.nobleRights}), t.nobleBaseConf && e.setState({nobleBaseConf: t.nobleBaseConf})
                    }), this.nobleInfoService.nobleHiddenStream$.subscribe(function () {
                        var t = e.state.nobleInfo.isHidden;
                        e.setState({nobleInfo: Ny({}, e.state.nobleInfo, {isHidden: t > 0 ? 0 : 1})})
                    }), this.commonDataServices.getNobelInfo().subscribe(function (t) {
                        var o = t.data;
                        e.setState({nobleInfo: o})
                    }), this.localStorage.get(this.config.expireDaysStorage) || this.setState({showExpireDaysLead: !0})
                }, UserInfo.prototype.render = function render() {
                    var e = this, t = this.props.baseConfig, o = t.privateLetters, r = void 0 === o ? 0 : o,
                        n = t.anchorRecruitMessages, i = void 0 === n ? 0 : n,
                        a = (this.global.get("USER_INFO") || {}).uid, l = this.state, c = l.userPaneShowStatus,
                        s = l.showTryEnterHiddenLead, u = l.showExpireDaysLead, p = l.nobleInfo, f = p.nobleLevel,
                        b = p.hasHiddenRights, d = p.daysLeft, y = l.room.rid, m = parseInt(r, 10) + parseInt(i, 10),
                        h = [ss.a.createElement("div", {
                            key: "UserInfo",
                            className: "UserInfo public-DropMenu " + (c ? "is-hover" : ""),
                            onMouseEnter: this.showUserPane,
                            onMouseLeave: this.hideUserPane,
                            __self: this
                        }, ss.a.createElement("a", {
                            className: "UserInfo-link",
                            href: "/member/cp",
                            target: "_blank",
                            onMouseDown: pn("130100101011"),
                            __self: this
                        }, ss.a.createElement("span", {
                            className: "UserInfo-avatar",
                            __self: this
                        }, ss.a.createElement(If, {
                            round: !0,
                            uid: a,
                            __self: this
                        }))), ss.a.createElement(zd, {
                            number: m,
                            __self: this
                        }), c ? ss.a.createElement(Ey, {userInfoData: Ny({}, this.state), __self: this}) : null)];
                    return f > 0 && b > 0 && s && !this.localStorage.get(this.config.hiddenLeadStorage) && h.push(ss.a.createElement("div", {
                        key: "tryEnterHiddenLead",
                        className: "UserInfo-tryEnterHiddenLead",
                        __self: this
                    }, "\u8bd5\u8bd5\u5168\u7ad9\u8fdb\u623f\u9690\u8eab\u5427\uff01", ss.a.createElement("span", {
                        className: "UserInfo-closetryEnterHiddenLead",
                        onClick: this.handleEnterHiddenLead,
                        __self: this
                    }, "\xd7"))), y && f > 0 && d > 0 && d < this.config.minTipDays && u && (h.unshift(ss.a.createElement("div", {
                        key: "nobleExpiredDays",
                        className: "UserInfo-nobleExpiredDays",
                        __self: this
                    }, "\u8d35\u65cf\u8fd8\u5269", d, "\u5929\u5230\u671f")), setTimeout(function () {
                        e.setState({showExpireDaysLead: !1})
                    }, 5e3), this.localStorage.set(this.config.expireDaysStorage, !0, 86400)), h
                }, UserInfo
            }(ss.a.Component), gy = UserInfo_applyDecoratedDescriptor(_y.prototype, "global", [by], {
                enumerable: !0,
                initializer: null
            }), Dy = UserInfo_applyDecoratedDescriptor(_y.prototype, "common", [dy], {
                enumerable: !0,
                initializer: null
            }), Sy = UserInfo_applyDecoratedDescriptor(_y.prototype, "localStorage", [yy], {
                enumerable: !0,
                initializer: null
            }), wy = UserInfo_applyDecoratedDescriptor(_y.prototype, "commonDataServices", [my], {
                enumerable: !0,
                initializer: null
            }), Oy = UserInfo_applyDecoratedDescriptor(_y.prototype, "nobleInfoService", [hy], {
                enumerable: !0,
                initializer: null
            }), vy = _y)) || vy);
        jy.propTypes = {baseConfig: gs.a.object.isRequired};
        var Ty, ky = Object(us.connect)(function mapStateToProps(e) {
            return {baseConfig: e.baseConfig}
        })(jy), zy = (o("4cf69"), function TopSearch(e) {
            var t = e.hotItem, o = e.hover, r = e.searching;
            return o || r ? null : ss.a.createElement("label", {
                htmlFor: "header-search-input",
                className: "Search-label",
                __self: void 0
            }, t)
        }), Iy = function Placeholder(e) {
            var t = e.placeholderText, o = e.hover, r = e.searching;
            return o && !r ? ss.a.createElement("label", {
                htmlFor: "header-search-input",
                className: "Search-label",
                __self: void 0
            }, t) : null
        }, Ry = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function HistoryList_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Ry(t)) && "function" !== typeof t ? e : t
        }

        function HistoryList_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Ry(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function HistoryList_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var My, Ay = Object(et.log)(Ty = function (e) {
                function SuggestBox() {
                    var t, o;
                    !function HistoryList_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, SuggestBox);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = HistoryList_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), o.goSearch = function (e, t) {
                        (0, o.props.searchItem)(t, "history"), window.open("/search?kw=" + encodeURIComponent(e))
                    }, HistoryList_possibleConstructorReturn(o, t)
                }

                return HistoryList_inherits(SuggestBox, e), SuggestBox.prototype.render = function render() {
                    var e = this, t = this.props, o = t.localOwnSource, r = void 0 === o ? [] : o, n = t.removeSource,
                        i = t.removeAllOwnSource;
                    return r.length ? ss.a.createElement("div", {
                        className: "Search-history",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "Search-history-title",
                        __self: this
                    }, ss.a.createElement("a", {
                        onClick: i,
                        __self: this
                    }, "\u6e05\u7a7a"), ss.a.createElement("i", {__self: this}), ss.a.createElement("span", {__self: this}, "\u5386\u53f2\u641c\u7d22")), ss.a.createElement("ul", {
                        className: "Search-historyList",
                        __self: this
                    }, r.map(function (t, o) {
                        return ss.a.createElement("li", {
                            key: o,
                            "data-name": t,
                            "data-type": "4",
                            "data-index": o + 1,
                            onClick: function onClick(o) {
                                e.goSearch(t, o)
                            },
                            __self: e
                        }, ss.a.createElement("i", {
                            "data-index": o,
                            "data-name": t,
                            onClick: n,
                            __self: e
                        }, "\xd7"), ss.a.createElement("span", {dangerouslySetInnerHTML: {__html: t}, __self: e}))
                    }))) : null
                }, SuggestBox
            }(ss.a.Component)) || Ty,
            Ly = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function HotList_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Ly(t)) && "function" !== typeof t ? e : t
        }

        function HotList_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Ly(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function HotList_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var By, xy = {1: "\u76f4\u64ad\u95f4", 2: "\u5206\u533a"}, Fy = Object(et.log)(My = function (e) {
                function SuggestBox() {
                    var t, o;
                    !function HotList_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, SuggestBox);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = HotList_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), o.clickHotItem = function (e) {
                        var t = e.link, r = e.type, n = e.kw, i = e.isAd;
                        return function (e) {
                            (0, o.props.searchItem)(e, "rank", {
                                ext: {
                                    _is_arrange: i,
                                    _s_result: r >= 3 ? 2 : 1,
                                    _sr_type: r
                                }
                            }), t && r >= 3 ? window.open(t) : window.open("/search?kw=" + encodeURIComponent(n))
                        }
                    }, HotList_possibleConstructorReturn(o, t)
                }

                return HotList_inherits(SuggestBox, e), SuggestBox.prototype.render = function render() {
                    var e = this, t = this.props.hotList, o = void 0 === t ? [] : t;
                    return o.length ? ss.a.createElement("div", {
                        className: "Search-hot",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "Search-hot-title",
                        __self: this
                    }, ss.a.createElement("i", {__self: this}), ss.a.createElement("span", {__self: this}, "\u4eca\u65e5\u70ed\u641c")), ss.a.createElement("ul", {
                        className: "Search-hotList",
                        __self: this
                    }, o.map(function (t, o) {
                        return ss.a.createElement("li", {key: o, __self: e}, ss.a.createElement("a", {
                            "data-name": t.kw,
                            "data-type": "3",
                            "data-index": o + 1,
                            onClick: e.clickHotItem(t),
                            __self: e
                        }, ss.a.createElement("i", {__self: e}, o + 1), ss.a.createElement("span", {
                            dangerouslySetInnerHTML: {__html: t.kw},
                            __self: e
                        })), 1 === t.type || 2 === t.type ? ss.a.createElement("a", {
                            className: "Search-direct",
                            target: "_blank",
                            href: t.link,
                            __self: e
                        }, xy[t.type]) : null)
                    }))) : null
                }, SuggestBox
            }(ss.a.Component)) || My,
            Hy = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function SuggestBox_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Hy(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function SuggestBox_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Uy = n.a.Region, Gy = Object(et.log)(By = function (e) {
            function SuggestBox() {
                return function SuggestBox_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, SuggestBox), function SuggestBox_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : Hy(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return SuggestBox_inherits(SuggestBox, e), SuggestBox.prototype.render = function render() {
                var e = this.props, t = e.hotList, o = void 0 === t ? [] : t, r = e.localOwnSource,
                    n = void 0 === r ? [] : r, i = e.searchItem, a = e.goSearchTarget, l = e.removeSource,
                    c = e.removeAllOwnSource;
                return ss.a.createElement("div", {
                    className: "Search-suggestBoxContent",
                    __self: this
                }, ss.a.createElement(Ay, {
                    localOwnSource: n,
                    goSearchTarget: a,
                    removeSource: l,
                    removeAllOwnSource: c,
                    searchItem: i,
                    __self: this
                }), ss.a.createElement(Fy, {
                    hotList: o,
                    searchItem: i,
                    __self: this
                }), ss.a.createElement(Uy, {
                    className: "Search-ad",
                    name: "sign",
                    belongTo: "HeaderApp",
                    data: {id: "1021106", type: "common"},
                    __self: this
                }))
            }, SuggestBox
        }(ss.a.Component)) || By, Wy = function RecommendAnchor(e) {
            var t = e.kw, o = e.cid, r = e.position, n = e.expand, i = e.keyWord, a = e.avatar, l = e.nickName,
                c = e.isLive, s = e.cateName, u = e.rid, p = e.vipId, f = e.highLightKeyword, b = e.searchItem;
            return ss.a.createElement("div", {
                className: "Search-recommendAnchor",
                __self: void 0
            }, ss.a.createElement("a", {
                className: "Search-recommendAnchor-link",
                href: "/search?kw=" + encodeURIComponent(t),
                target: "_blank",
                "data-name": t,
                "data-index": r + 1,
                onClick: function onClick(e) {
                    return b(e, "recommend", {
                        com: {tid: o},
                        ext: {_s_result: 1, _rid: u, _is_on: c, _is_detail: 1, _siw: i}
                    })
                },
                __self: void 0
            }, ss.a.createElement("span", {
                className: "Search-recommendAnchor-avatar" + (1 === c ? " is-live" : ""),
                __self: void 0
            }, ss.a.createElement(Ws.b, {
                isLazyable: !1,
                src: a,
                defaultSrc: Tu.a,
                alt: l,
                __self: void 0
            })), ss.a.createElement("div", {
                className: "Search-recommendAnchor-info",
                __self: void 0
            }, ss.a.createElement("h3", {__self: void 0}, f(r === n ? l : t, i)), ss.a.createElement("p", {__self: void 0}, f(+i >= 0 || !s ? p ? "\u9753\u53f7\uff1a" + p : "\u623f\u95f4\u53f7\uff1a" + u : s, i)))), ss.a.createElement("a", {
                className: "Search-direct",
                href: "/" + u,
                target: "_blank",
                "data-name": t,
                "data-index": r + 1,
                onClick: function onClick(e) {
                    return b(e, "recommend", {
                        com: {p: r, tid: o},
                        ext: {_s_result: 2, _rid: u, _is_on: c, _is_detail: 1, _siw: i}
                    })
                },
                __self: void 0
            }, "\u76f4\u64ad\u95f4"))
        }, Yy = function RecommendCategory(e) {
            var t = e.kw, o = e.cid, r = e.keyWord, n = e.shortName, i = e.highLightKeyword, a = e.searchItem;
            return ss.a.createElement("div", {
                className: "Search-recommendCategory",
                __self: void 0
            }, ss.a.createElement("h3", {__self: void 0}, "\u5206\u533a"), ss.a.createElement("a", {
                href: "/g_" + n,
                target: "_blank",
                "data-name": t,
                "data-index": 1,
                onClick: function onClick(e) {
                    return a(e, "recommend", {
                        com: {tid: o},
                        ext: {_s_result: 2, _rid: "", _is_on: 0, _is_detail: 0, _siw: r}
                    })
                },
                __self: void 0
            }, i(t, r)))
        }, $y = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, qy = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };

        function RecommendBox_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : $y(t)) && "function" !== typeof t ? e : t
        }

        function RecommendBox_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : $y(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function RecommendBox_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Vy = function highLightKeyword(e, t) {
            if (t) {
                var o = e.toLowerCase(), r = t.toLowerCase(), n = o.indexOf(r);
                if (n >= 0) {
                    var i = e.slice(0, n), a = e.slice(n + t.length), l = e.slice(n, n + t.length);
                    return ss.a.createElement(ss.a.Fragment, {__self: void 0}, ss.a.createElement("span", {
                        dangerouslySetInnerHTML: {__html: i},
                        __self: void 0
                    }), ss.a.createElement("span", {
                        className: "Search-keyword",
                        __self: void 0
                    }, l), ss.a.createElement("span", {dangerouslySetInnerHTML: {__html: a}, __self: void 0}))
                }
            }
            return ss.a.createElement("span", {dangerouslySetInnerHTML: {__html: e}, __self: void 0})
        }, Zy = function (e) {
            function RecommendBox() {
                var t, o;
                !function RecommendBox_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, RecommendBox);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = RecommendBox_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), o.state = {expand: 0}, o.mouseEnter = function (e) {
                    return function () {
                        o.setState({expand: e})
                    }
                }, RecommendBox_possibleConstructorReturn(o, t)
            }

            return RecommendBox_inherits(RecommendBox, e), RecommendBox.prototype.render = function render() {
                var e = this, t = this.props, o = t.recommendList, r = o.roomList, n = o.cateList, i = t.searchItem,
                    a = t.keyWord, l = this.state.expand;
                return ss.a.createElement("div", {
                    className: "Search-suggestBoxContent",
                    __self: this
                }, ss.a.createElement("ul", {__self: this}, r.map(function (t, o) {
                    return ss.a.createElement("li", {
                        key: o,
                        className: "Search-recommendAnchor-item" + (o === l ? " is-expand" : ""),
                        onMouseEnter: e.mouseEnter(o),
                        __self: e
                    }, ss.a.createElement(Wy, qy({}, t, {
                        position: o,
                        expand: l,
                        keyWord: a,
                        highLightKeyword: Vy,
                        searchItem: i,
                        __self: e
                    })))
                })), n.map(function (t, o) {
                    return ss.a.createElement(Yy, qy({key: o}, t, {
                        keyWord: a,
                        highLightKeyword: Vy,
                        searchItem: i,
                        __self: e
                    }))
                }))
            }, RecommendBox
        }(ss.a.Component), Ky = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };

        function SearchPane_objectWithoutProperties(e, t) {
            var o = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
            return o
        }

        var Jy, Xy, Qy, em, tm, om, rm, nm, im, am, lm = function SearchPanWrapper(e) {
                var t = e.children;
                return ss.a.createElement("div", {
                    className: "public-DropMenu-drop",
                    __self: void 0
                }, ss.a.createElement("i", {__self: void 0}), ss.a.createElement("div", {
                    className: "public-DropMenu-drop-main",
                    __self: void 0
                }, t))
            }, cm = function RecommendList(e) {
                var t = e.hover, o = e.recommendList, r = o.roomList, n = void 0 === r ? [] : r, i = o.cateList,
                    a = void 0 === i ? [] : i, l = SearchPane_objectWithoutProperties(e, ["hover", "recommendList"]);
                return t && (n.length || a.length) ? ss.a.createElement(lm, {__self: void 0}, ss.a.createElement(Zy, Ky({
                    recommendList: {
                        roomList: n,
                        cateList: a
                    }
                }, l, {__self: void 0}))) : null
            }, sm = function SuggestList(e) {
                var t = e.hover, o = SearchPane_objectWithoutProperties(e, ["hover"]);
                return t ? ss.a.createElement(lm, {__self: void 0}, ss.a.createElement(Gy, Ky({}, o, {__self: void 0}))) : null
            }, um = function SearchPane(e) {
                var t = e.keyWord, o = e.searching, r = e.hover, n = e.hotList, i = e.searchItem, a = e.localOwnSource,
                    l = e.goSearchTarget, c = e.removeSource, s = e.removeAllOwnSource, u = e.recommendList;
                return o ? ss.a.createElement(cm, {
                    keyWord: t,
                    hover: r,
                    searching: o,
                    recommendList: u,
                    searchItem: i,
                    __self: void 0
                }) : ss.a.createElement(sm, {
                    hover: r,
                    searching: o,
                    hotList: n,
                    searchItem: i,
                    localOwnSource: a,
                    goSearchTarget: l,
                    removeSource: c,
                    removeAllOwnSource: s,
                    __self: void 0
                })
            }, pm = function trim(e) {
                return e.replace(/(^\s*)|(\s*$)/g, "")
            }, fm = new Cs.a({
                id: "search_13586fe",
                use: "search_13586fe-usage",
                viewBox: "0 0 32 32",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="search_13586fe">\n<title>search</title>\n<path d="M14.933 25.6c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667zM26.894 23.877l3.491 3.491c0.833 0.833 0.833 2.184 0 3.017s-2.184 0.833-3.017 0l-3.491-3.491c-2.493 1.867-5.589 2.973-8.943 2.973-8.247 0-14.933-6.686-14.933-14.933s6.686-14.933 14.933-14.933c8.247 0 14.933 6.686 14.933 14.933 0 3.354-1.106 6.45-2.973 8.943z" />\n</symbol>'
            }), bm = (Ps.a.add(fm), fm),
            dm = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ym = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function Search_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function Search_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : dm(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Search_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function Search_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var mm = n.a.Service, hm = navigator.userAgent.indexOf("Firefox") >= 0,
            vm = (Jy = mm(wn), Xy = mm(i.DataCenter.common), Qy = mm(i.DataCenter.event), im = nm = function (e) {
                function Search() {
                    !function Search_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Search);
                    var t = function Search_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : dm(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    am.call(t);
                    var o = t.searchService.getKeyword(), r = (t.searchService.getLocalOwnList() || []).slice(0, 5),
                        n = (t.searchService.getLocalHotList() || []).slice(0, 10);
                    return t.state = {
                        hover: !1,
                        reset: !1,
                        searching: !!o,
                        searchContent: o,
                        historyList: r,
                        hotList: n,
                        showTips: !1,
                        SearchData: {},
                        value: o
                    }, t
                }

                return Search_inherits(Search, e), Search.prototype.componentDidMount = function componentDidMount() {
                    document.onmousedown = this.unfocused, this.common.get("DocumentMouseDownForHeader").subscribe(this.unfocused), 0 === this.state.hotList.length && this.searchService.getHotListByEpic()
                }, Search.prototype.render = function render() {
                    var e = this.state, t = e.showTips, o = e.hover, r = e.reset, n = e.searching, i = e.searchContent,
                        a = void 0 === i ? "" : i, l = e.historyList, c = this.props.SearchData, s = c.recommendList,
                        u = c.hotList, p = this.state.hotList.length > 0 ? this.state.hotList : (u || []).slice(0, 10),
                        f = p[0] && p[0].kw || "", b = [ss.a.createElement("button", {
                            className: "dy-btn",
                            key: "ok",
                            onClick: this.closeTips,
                            __self: this
                        }, "\u786e\u5b9a")];
                    return ss.a.createElement("div", {
                        onMouseDown: this.interMouseDown,
                        __self: this
                    }, ss.a.createElement("div", {
                        className: o ? "Search is-hover" : "Search",
                        __self: this
                    }, ss.a.createElement("input", ym({
                        className: "Search-text",
                        id: "header-search-input",
                        type: "text",
                        onFocus: this.focusInput,
                        onClick: this.clickInput,
                        onKeyUp: this.onKeyUp,
                        value: this.state.value,
                        onChange: this.handleValue,
                        "data-name": a || f,
                        "data-type": "1",
                        autoComplete: "off"
                    }, !r && hm ? {readonly: "readonly"} : {}, {__self: this})), ss.a.createElement("span", {
                        className: "Search-link",
                        __self: this
                    }, ss.a.createElement("i", {
                        className: "Search-linkIcon",
                        "data-name": a || f,
                        "data-type": (a || f) === f ? 2 : 1,
                        onClick: this.goSearchTarget,
                        __self: this
                    }, ss.a.createElement(Os, {symbol: bm.id, __self: this}))), ss.a.createElement(zy, {
                        hotItem: f,
                        hover: o,
                        searching: n,
                        __self: this
                    }), ss.a.createElement(Iy, {
                        placeholderText: "\u4e3b\u64ad\u3001\u623f\u95f4\u3001\u5206\u7c7b\u3001\u89c6\u9891",
                        hover: o,
                        searching: n,
                        __self: this
                    }), ss.a.createElement(um, {
                        hover: o,
                        searching: n,
                        hotList: p,
                        searchItem: this.searchItem,
                        localOwnSource: l,
                        goSearchTarget: this.goSearchTarget,
                        removeSource: this.removeSource,
                        removeAllOwnSource: this.removeAllOwnSource,
                        keyWord: this.state.value,
                        recommendList: s,
                        __self: this
                    })), ss.a.createElement(Rf.a, {
                        title: "\u63d0\u793a",
                        visible: t,
                        footer: b,
                        maskClosable: !1,
                        width: 262,
                        onCancel: this.closeTips,
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "Search-tips",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "Search-tipsIcon",
                        __self: this
                    }), ss.a.createElement("span", {
                        className: "Search-tipsText",
                        __self: this
                    }, "\u641c\u7d22\u5173\u952e\u8bcd\u8fd8\u6ca1\u6709\u586b\u5199"))))
                }, Search
            }(ss.a.Component), nm.scrollLock = 0, am = function _initialiseProps() {
                var e = this;
                Search_initDefineProp(this, "searchService", tm, this), Search_initDefineProp(this, "common", om, this), Search_initDefineProp(this, "event", rm, this), this.interMouseDown = function (e) {
                    e.nativeEvent.stopImmediatePropagation()
                }, this.focusInput = function (t) {
                    t.nativeEvent.stopImmediatePropagation();
                    var o = e.state.value;
                    e.setState({
                        hover: !0,
                        reset: !0
                    }), pm(o) && (e.setState({searching: !0}), e.searchService.getRecommendByEpic(o)), e.common.push("DocumentMouseDownForSearch", {mousedown: 1}), vm.scrollLock || (vm.scrollLock = 1, e.event.trigger(window, "scroll"))
                }, this.clickInput = function () {
                    var t = e.state.value;
                    e.searchService.dySubV2("130100Z01.1.1")({ext: {_com_type: 1, _kv: t}}), e.suggestExpose()
                }, this.suggestExpose = function () {
                    var t = e.state, o = t.hover, r = t.searching, n = t.historyList, i = t.hotList;
                    o && !r && (n.length && e.searchService.dySubV2("130100Z02001.3.1")({ext: {_com_type: 1}}), i.length && e.searchService.dySubV2("130100Z02002.3.1")({ext: {_com_type: 1}}))
                }, this.unfocused = function () {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mousedown || e.common.push("DocumentMouseDownForSearch", {mousedown: 1}), e.setState({
                        hover: !1,
                        reset: !1,
                        searchContent: e.state.value || (e.state.hotList[0] ? e.state.hotList[0].kw : "")
                    })
                }, this.handleValue = function (t) {
                    var o = t.target.value;
                    pm(o) && e.searchService.getRecommendByEpic(o), e.setState({
                        searching: !!pm(o),
                        searchContent: o,
                        value: o
                    }, e.suggestExpose)
                }, this.searchCompleteDys = function (t) {
                    e.searchService.dySubV2("130100Z04.1.1", 1)({ext: {_search_type: t ? 1 : 2, _kv: t, _com_type: 1}})
                }, this.onKeyUp = function (t) {
                    switch (t.keyCode) {
                        case 13:
                            e.goSearchTarget(t)
                    }
                }, this.addMySource = function (t) {
                    var o = e.searchService.getLocalOwnList() || [], r = pm(t);
                    if ("" !== r) {
                        for (var n = 0, i = o.length; n < i; n++) if (r === o[n]) {
                            o.splice(n, 1);
                            break
                        }
                        o.unshift(t), e.setState({historyList: o.slice(0, 5)}), e.searchService.setLocalOwnList(o)
                    }
                }, this.goSearchTarget = function (t) {
                    var o = t.currentTarget.getAttribute("data-name"), r = e.state.value;
                    e.setState({reset: !1}), r && !pm(r) ? e.setState({showTips: !0}) : (e.searchCompleteDys(o), e.addMySource(o), window.open("/search?kw=" + encodeURIComponent(o)))
                }, this.removeSource = function (t) {
                    var o = e.searchService.getLocalOwnList() || [], r = t.currentTarget.getAttribute("data-index"),
                        n = t.currentTarget.getAttribute("data-name");
                    e.searchService.dySubV2("130100Z02003.1.1")({
                        com: {p: r},
                        ext: {_kv: n}
                    }), o.splice(r, 1), e.setState({historyList: o.slice(0, 5)}), e.searchService.setLocalOwnList(o), t.stopPropagation(), t.nativeEvent.stopImmediatePropagation()
                }, this.removeAllOwnSource = function (t) {
                    e.searchService.dySubV2("130100Z02004.1.1")(), e.setState({historyList: []}), e.searchService.setLocalOwnList([]), t.stopPropagation(), t.nativeEvent.stopImmediatePropagation()
                }, this.searchItem = function (t, o) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = r.com,
                        i = void 0 === n ? {} : n, a = r.ext, l = void 0 === a ? {} : a,
                        c = t.currentTarget.getAttribute("data-name"), s = {_kv: c, _com_type: 1},
                        u = {p: t.currentTarget.getAttribute("data-index")},
                        p = {history: "130100Z02001.1.1", rank: "130100Z02002.1.1", recommend: "130100Z03001.1.1"}[o];
                    e.searchService.dySubV2(p, 1)({com: ym({}, u, i), ext: ym({}, s, l)}), e.setState({
                        searchContent: c,
                        value: c,
                        searching: !0
                    }), e.searchService.getRecommendByEpic(c), e.addMySource(c), t.nativeEvent.stopImmediatePropagation()
                }, this.closeTips = function () {
                    e.setState({showTips: !1})
                }
            }, tm = Search_applyDecoratedDescriptor((em = im).prototype, "searchService", [Jy], {
                enumerable: !0,
                initializer: null
            }), om = Search_applyDecoratedDescriptor(em.prototype, "common", [Xy], {
                enumerable: !0,
                initializer: null
            }), rm = Search_applyDecoratedDescriptor(em.prototype, "event", [Qy], {
                enumerable: !0,
                initializer: null
            }), em);
        vm.propTypes = {SearchData: gs.a.object.isRequired};
        var _m, gm, Dm, Sm, wm, Om, Em, Cm, Nm = Object(us.connect)(function mapStateToProps(e) {
                return {SearchData: e.SearchData}
            })(vm), Pm = (o("bc1bc"), new Cs.a({
                id: "broadcast_9bdefa5",
                use: "broadcast_9bdefa5-usage",
                viewBox: "0 0 32 32",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="broadcast_9bdefa5">\n<title>broadcast</title>\n<path d="M20.8 19.753c0-1.247 1.364-2.015 2.43-1.368l3.97 2.41v-11.192l-4.022 2.238c-1.066 0.594-2.378-0.178-2.378-1.398v-2.444c0-0.884-0.716-1.6-1.6-1.6h-14.4c-0.884 0-1.6 0.716-1.6 1.6v14.4c0 0.884 0.716 1.6 1.6 1.6h14.4c0.884 0 1.6-0.716 1.6-1.6v-2.647zM19.2 27.2h-14.4c-2.651 0-4.8-2.149-4.8-4.8v-14.4c0-2.651 2.149-4.8 4.8-4.8h14.4c2.559 0 4.651 2.003 4.792 4.527l1.651-0.919c1.544-0.859 3.493-0.304 4.352 1.24 0.265 0.476 0.404 1.011 0.404 1.556v11.192c0 1.767-1.433 3.2-3.2 3.2-0.586 0-1.16-0.161-1.661-0.465l-1.543-0.937c-0.102 2.561-2.21 4.606-4.796 4.606z" />\n<path d="M8 9.6h4.8c0.884 0 1.6 0.716 1.6 1.6s-0.716 1.6-1.6 1.6h-4.8c-0.884 0-1.6-0.716-1.6-1.6s0.716-1.6 1.6-1.6z" />\n</symbol>'
            })), jm = (Ps.a.add(Pm), Pm), Tm = function OpenBroadcast() {
                return ss.a.createElement("div", {
                    className: "Broadcast",
                    __self: void 0
                }, ss.a.createElement("div", {
                    className: "public-DropMenu",
                    __self: void 0
                }, ss.a.createElement("a", {
                    className: "public-DropMenu-link",
                    href: "/special/guide/anchor",
                    target: "_blank",
                    onMouseDown: pn("100100101006"),
                    __self: void 0
                }, ss.a.createElement("span", {__self: void 0}, ss.a.createElement("i", {
                    className: "Broadcast-icon",
                    __self: void 0
                }, ss.a.createElement(Os, {symbol: jm.id, __self: void 0})), "\u5f00\u64ad"))))
            }, km = o("3b6ec"), zm = o.n(km),
            Im = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function PrivateLetter_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function PrivateLetter_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Im(t)) && "function" !== typeof t ? e : t
        }

        function PrivateLetter_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Im(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function PrivateLetter_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function PrivateLetter_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Rm = n.a.Service, Mm = document.querySelector("body"),
            Am = (_m = Rm(B), gm = Rm(i.DataCenter.common), Dm = Rm(et.Logger), Object(et.log)((wm = function (e) {
                function PrivateLetter() {
                    var t, o;
                    !function PrivateLetter_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, PrivateLetter);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = PrivateLetter_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), PrivateLetter_initDefineProp(o, "baseConfigServices", Om, o), PrivateLetter_initDefineProp(o, "common", Em, o), PrivateLetter_initDefineProp(o, "logger", Cm, o), o.state = {created: 0}, PrivateLetter_possibleConstructorReturn(o, t)
                }

                return PrivateLetter_inherits(PrivateLetter, e), PrivateLetter.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.baseConfigServices.privateLetterCreate().then(function () {
                        e.baseConfigServices.subscribePrivateLetter(), e.setState({created: 1}, function () {
                            setTimeout(function () {
                                e.baseConfigServices.embedMsg(), e.baseConfigServices.invokePrivateLetter()
                            }, 1e3)
                        })
                    }).catch(function (t) {
                        var o = t[0];
                        return e.logger.error(o + " loading failed")
                    })
                }, PrivateLetter.prototype.render = function render() {
                    var e = this.state.created, t = this.props.baseConfig.isShow, o = void 0 !== t && t;
                    return e ? Object(km.createPortal)(ss.a.createElement("div", {
                        className: "PrivateLetter " + (o ? "is-show" : ""),
                        __self: this
                    }, ss.a.createElement("div", {className: "PrivateLetter-frame", __self: this})), Mm) : null
                }, PrivateLetter
            }(ss.a.Component), Om = PrivateLetter_applyDecoratedDescriptor(wm.prototype, "baseConfigServices", [_m], {
                enumerable: !0,
                initializer: null
            }), Em = PrivateLetter_applyDecoratedDescriptor(wm.prototype, "common", [gm], {
                enumerable: !0,
                initializer: null
            }), Cm = PrivateLetter_applyDecoratedDescriptor(wm.prototype, "logger", [Dm], {
                enumerable: !0,
                initializer: null
            }), Sm = wm)) || Sm);
        Am.propTypes = {baseConfig: gs.a.object.isRequired};
        var Lm = Object(us.connect)(function mapStateToProps(e) {
            return {baseConfig: e.baseConfig}
        })(Am), Bm = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function Link_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Bm(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Link_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var xm = function (e) {
            function Link() {
                return function Link_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, Link), function Link_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : Bm(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return Link_inherits(Link, e), Link.prototype.render = function render() {
                var e = this.props, t = e.children || null;
                return ss.a.createElement("div", {
                    className: "u-inlineBlock ActEntry",
                    __self: this
                }, e.isLink && e.link ? ss.a.createElement("a", {
                    className: "" + (e.styleName ? e.styleName : ""),
                    href: e.link,
                    target: "_blank",
                    __self: this
                }, t) : ss.a.createElement("span", {className: "" + (e.styleName ? e.styleName : ""), __self: this}, t))
            }, Link
        }(ss.a.Component), Fm = function EntryNav(e) {
            var t = e.actNavConfig, o = (t = void 0 === t ? {} : t).entry;
            return (void 0 === o ? [] : o).map(function (e, t) {
                return ss.a.createElement("div", {
                    className: "EntryNav " + (1 === +e.en_type ? "is-all" : "") + " EntryNav" + t + " ActEntry",
                    key: t,
                    __self: void 0
                }, 1 === +e.en_type ? ss.a.createElement(xm, {
                    styleName: "EntryNav-desc",
                    link: e.url,
                    isLink: "1",
                    __self: void 0
                }, ss.a.createElement("span", {__self: void 0}, e.en_word)) : ss.a.createElement(xm, {
                    styleName: "EntryNav-icon u-fontSizeNone",
                    link: e.url,
                    isLink: "1",
                    __self: void 0
                }, ss.a.createElement("img", {
                    src: e.en_pic + Ds.imgSuffix,
                    __self: void 0
                })), 1 === +e.en_type && e.en_pic ? ss.a.createElement("img", {
                    className: "EntryNav-logo",
                    src: e.en_pic + Ds.imgSuffix,
                    __self: void 0
                }) : null)
            })
        }, Hm = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Um = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };

        function Count_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Hm(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Count_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Gm = function (e) {
            function Count() {
                !function Count_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, Count);
                var t = function Count_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : Hm(t)) && "function" !== typeof t ? e : t
                }(this, e.call(this));
                return t.state = {type: 0, endTimestamp: 0, restTime: 0}, t.timer = null, t.isTimerRunning = !1, t
            }

            return Count_inherits(Count, e), Count.prototype.getRestDay = function getRestDay(e) {
                return parseInt(e / 86400, 10).toString()
            }, Count.prototype.formateTime = function formateTime(e) {
                var t, o, r, n = e, i = this.getRestDay(n);
                return i > 0 && (n = e - 24 * i * 60 * 60), t = Math.floor(n / 3600), o = Math.floor(n % 3600 / 60), r = Math.floor(n % 3600 % 60), {
                    lastDay: i,
                    hour: ("00" + t).slice(-2).split(""),
                    min: ("00" + o).slice(-2).split(""),
                    second: ("00" + r).slice(-2).split("")
                }
            }, Count.prototype.componentWillMount = function componentWillMount() {
                var e = this.props || {};
                this.mergeDate(e)
            }, Count.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                var t = e || {};
                this.mergeDate(t)
            }, Count.prototype.componentWillUnmount = function componentWillUnmount() {
                clearTimeout(this.timer)
            }, Count.prototype.mergeDate = function mergeDate(e) {
                var t = parseInt((new Date).getTime() / 1e3, 10), o = 0, r = 0;
                1 === +e.type ? (o = e.time + t || 0, r = e.time || 0) : (o = e.time || 0, r = e.time - t || 0), Um(this.state, {
                    endTimestamp: o,
                    restTime: r
                }), this.checkTimer(o)
            }, Count.prototype.checkTimer = function checkTimer(e) {
                var t = e > parseInt((new Date).getTime() / 1e3, 10) ? 1 : 0;
                t && !this.isTimerRunning ? (clearTimeout(this.timer), this.isTimerRunning = !0, this.runCount()) : t || (clearTimeout(this.timer), this.isTimerRunning = !1)
            }, Count.prototype.runCount = function runCount() {
                var e = this, t = this.state.endTimestamp, o = parseInt((new Date).getTime() / 1e3, 10);
                if (t < o) {
                    var r = this.props.callBack;
                    return clearTimeout(this.timer), this.isTimerRunning = !1, r && "function" === typeof r && r(), !1
                }
                return this.timer = setTimeout(function () {
                    e.setState({restTime: t - o}), e.runCount()
                }, 1e3), !1
            }, Count.prototype.render = function render() {
                var e = this.formateTime(this.state.restTime) || {}, t = e.lastDay || 0;
                return ss.a.createElement("span", {
                    className: "ScheduleNav-time",
                    __self: this
                }, t > 0 ? ss.a.createElement("span", {
                    className: "ScheduleNav-timeMain",
                    __self: this
                }, ss.a.createElement("span", {
                    className: "ScheduleNav-num",
                    __self: this
                }, ss.a.createElement("em", {__self: this}, t)), ss.a.createElement("i", {__self: this}, "\u5929"), ss.a.createElement("span", {
                    className: "ScheduleNav-num",
                    __self: this
                }, ss.a.createElement("em", {__self: this}, e.hour[0]), ss.a.createElement("em", {__self: this}, e.hour[1])), ss.a.createElement("i", {__self: this}, "\u65f6"), ss.a.createElement("span", {
                    className: "ScheduleNav-num",
                    __self: this
                }, ss.a.createElement("em", {__self: this}, e.min[0]), ss.a.createElement("em", {__self: this}, e.min[1])), ss.a.createElement("i", {__self: this}, "\u5206")) : ss.a.createElement("span", {
                    className: "ScheduleNav-timeMain",
                    __self: this
                }, ss.a.createElement("span", {
                    className: "ScheduleNav-num is-plus",
                    __self: this
                }, ss.a.createElement("em", {__self: this}, e.hour[0]), ss.a.createElement("em", {__self: this}, e.hour[1])), ss.a.createElement("i", {__self: this}, ":"), ss.a.createElement("span", {
                    className: "ScheduleNav-num is-plus",
                    __self: this
                }, ss.a.createElement("em", {__self: this}, e.min[0]), ss.a.createElement("em", {__self: this}, e.min[1])), ss.a.createElement("i", {__self: this}, ":"), ss.a.createElement("span", {
                    className: "ScheduleNav-num is-plus",
                    __self: this
                }, ss.a.createElement("em", {__self: this}, e.second[0]), ss.a.createElement("em", {__self: this}, e.second[1]))))
            }, Count
        }(ss.a.Component), Wm = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Ym = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };

        function ScheduleNav_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Wm(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function ScheduleNav_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var $m = function (e) {
                function ScheduleNav() {
                    !function ScheduleNav_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, ScheduleNav);
                    var t = function ScheduleNav_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Wm(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return t.state = {isOpen: !1, showConfig: {}}, t.loopTimer = null, t.config = {}, t
                }

                return ScheduleNav_inherits(ScheduleNav, e), ScheduleNav.prototype.componentWillMount = function componentWillMount() {
                    var e = (this.props.data || [])[0] || {};
                    this.mergeDate(e)
                }, ScheduleNav.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    var t = (e.data || [])[0] || {};
                    this.mergeDate(t)
                }, ScheduleNav.prototype.mergeDate = function mergeDate(e) {
                    Ym(this.config, e), this.checkStage()
                }, ScheduleNav.prototype.checkStage = function checkStage() {
                    for (var e = this, t = this.config || {}, o = parseInt((new Date).getTime() / 1e3, 10), r = t.course_open || 0, n = t.course || [], i = n.length || 0, a = {}, l = 0, c = 0; l < i; l++) {
                        var s = n[l] || {};
                        if (o >= s.start_time && o <= s.end_time) {
                            a = s, c = 1;
                            break
                        }
                    }
                    Object.keys(a).length && 1 === +a.type ? this.loopTimer = setTimeout(function () {
                        e.setState({isOpen: r && c, showConfig: a}), e.checkStage()
                    }, 1e3) : this.setState({isOpen: r && c, showConfig: a})
                }, ScheduleNav.prototype.render = function render() {
                    var e = this.state, t = this.checkStage, o = e.showConfig || {};
                    return e.isOpen ? ss.a.createElement(xm, {
                        styleName: "ScheduleNav",
                        isLink: "1",
                        link: o.url,
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "ScheduleNav-content",
                        style: {backgroundImage: "url(" + o.pic + ")"},
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "ScheduleNav-title",
                        __self: this
                    }, o.name), 1 === +o.type ? ss.a.createElement("span", {
                        className: "ScheduleNav-time is-ing",
                        __self: this
                    }, o.text) : ss.a.createElement(Gm, {
                        type: "2",
                        time: o.end_time,
                        callBack: t.bind(this),
                        __self: this
                    }))) : null
                }, ScheduleNav
            }(ss.a.Component),
            qm = (o("e4932"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            });

        function ActNav_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : qm(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function ActNav_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Vm, Zm, Km, Jm, Xm, Qm = function (e) {
            function index() {
                return function ActNav_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, index), function ActNav_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : qm(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return ActNav_inherits(index, e), index.prototype.render = function render() {
                var e = this.props.actNavConfig || {};
                return ss.a.createElement("div", {
                    className: "HeaderNav",
                    __self: this
                }, ss.a.createElement(Fm, {
                    actNavConfig: e,
                    __self: this
                }), e.entry && 1 === e.entry.length ? ss.a.createElement($m, {
                    data: e.entry,
                    switcher: e.switcher,
                    __self: this
                }) : null)
            }, index
        }(ss.a.Component), eh = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function IframePay_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function IframePay_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : eh(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function IframePay_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function IframePay_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var th, oh, rh, nh, ih, ah, lh, ch, sh = n.a.Store, uh = n.a.Service,
            ph = (Vm = sh(), Zm = uh(i.DataCenter.global), Km = function (e) {
                function IframePay() {
                    !function IframePay_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, IframePay);
                    var t = function IframePay_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : eh(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return IframePay_initDefineProp(t, "store", Jm, t), IframePay_initDefineProp(t, "global", Xm, t), t.config = {
                        url: "https://cz.douyu.com/".replace(/^http(s?):/, "").replace(/\/$/g, "") + "/item/gold/iframe",
                        pageCode: t.global.get("pageType.pageCode")
                    }, t
                }

                return IframePay_inherits(IframePay, e), IframePay.prototype.hideIframePay = function hideIframePay() {
                    this.store.dispatch(Gc.iframePayHide())
                }, IframePay.prototype.render = function render() {
                    var e = this.props.iframePayData || {}, t = e.flag, o = e.type, r = this.config.url,
                        n = this.config.pageCode;
                    return r = "head" === o ? r + "?pageCode=" + n + "&source=0" : r + "?pageCode=" + n + "&source=1", t ? h.a.check() ? zm.a.createPortal(ss.a.createElement("div", {
                        className: "common-pay-mask",
                        style: {
                            position: "fixed",
                            zIndex: 9999,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(0, 0 , 0, .6)",
                            textAlign: "center",
                            margin: "auto"
                        },
                        __self: this
                    }, ss.a.createElement("div", {
                        style: {
                            position: "relative",
                            display: "inline-block",
                            width: "712px",
                            height: "542px",
                            border: "none",
                            verticalAlign: "middle",
                            borderRadius: "5px",
                            overflow: "hidden"
                        }, __self: this
                    }, ss.a.createElement("span", {
                        className: "close J_pay_iframe_close",
                        onClick: this.hideIframePay.bind(this),
                        style: {
                            position: "absolute",
                            right: "10px",
                            top: "2px",
                            padding: "0px 10px",
                            cursor: "pointer",
                            zIndex: 5
                        },
                        __self: this
                    }, ss.a.createElement("em", {
                        style: {
                            display: "inline-block",
                            fontSize: "30px",
                            color: "#fff",
                            fontWeight: 400
                        }, __self: this
                    }, "\xd7")), ss.a.createElement("iframe", {
                        style: {
                            position: "relative",
                            display: "inline-block",
                            width: "712px",
                            height: "542px",
                            borderRadius: "5px",
                            verticalAlign: "middle"
                        }, id: "login-passport-frame", scrolling: "no", frameBorder: "0", src: r, __self: this
                    })), ss.a.createElement("div", {
                        className: "common-pay-holder",
                        style: {
                            display: "inline-block",
                            verticalAlign: "middle",
                            height: "100%",
                            width: "1px",
                            visibility: "hidden"
                        },
                        __self: this
                    })), document.body) : (h.a.show(), this.store.dispatch(Gc.iframePayHide()), !1) : null
                }, IframePay
            }(ss.a.Component), Jm = IframePay_applyDecoratedDescriptor(Km.prototype, "store", [Vm], {
                enumerable: !0,
                initializer: null
            }), Xm = IframePay_applyDecoratedDescriptor(Km.prototype, "global", [Zm], {
                enumerable: !0,
                initializer: null
            }), Km), fh = Object(us.connect)(function mapStateToProps(e) {
                return {iframePayData: e.iframePayStatus}
            })(ph), bh = (o("6262a"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            });

        function NobleBuyModalHead_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function NobleBuyModalHead_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : bh(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function NobleBuyModalHead_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function NobleBuyModalHead_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var dh, yh = n.a.Service,
            mh = (th = yh(i.DataCenter.global), oh = yh(i.DataCenter.common), rh = yh(hl), Object(et.log)((ih = function (e) {
                function NobleBuyModalHead() {
                    !function NobleBuyModalHead_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, NobleBuyModalHead);
                    var t = function NobleBuyModalHead_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : bh(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return NobleBuyModalHead_initDefineProp(t, "global", ah, t), NobleBuyModalHead_initDefineProp(t, "common", lh, t), NobleBuyModalHead_initDefineProp(t, "nobleBuyModalServices", ch, t), t.state = {}, t
                }

                return NobleBuyModalHead_inherits(NobleBuyModalHead, e), NobleBuyModalHead.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.common.get("$DATA").subscribe(function (t) {
                        t.get && e.setState({ROOM: t.get("room")})
                    }), this.userId = +this.global.get("USER_INFO.uid")
                }, NobleBuyModalHead.prototype.render = function render() {
                    var e = this;
                    this.$ROOM = this.state.ROOM || {};
                    var t = this.$ROOM.vipId || "", o = this.$ROOM.avatar || {}, r = {
                            path: "//res.douyucdn.cn/",
                            buyNobleUrl: "https://cz.douyu.com/noble?vipId=" + t + "&",
                            roomId: this.$ROOM.room_id || "",
                            anchorAvatar: o.big,
                            anchorName: this.$ROOM.owner_name || this.$ROOM.owner_uid
                        }, n = r.anchorName ? encodeURIComponent(r.anchorName) : "",
                        i = r.buyNobleUrl + "rid=" + r.roomId + "&anchorname=" + n + "&send=1",
                        a = this.props.openForFriendData, l = a.op, c = a.wl,
                        s = 1 === l || 0 === l && (void 0 === c ? [] : c).indexOf(this.userId) > -1;
                    return ss.a.createElement("h3", {
                        className: "NobleBuyModalHead clearfix",
                        __self: this
                    }, r.anchorAvatar && r.anchorName ? ss.a.createElement("div", {
                        className: "NobleBuyModalHead-left",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleBuyModalHead-pic",
                        __self: this
                    }, ss.a.createElement("img", {
                        src: r.anchorAvatar + Ds.imgSuffix,
                        width: "100%",
                        height: "100%",
                        __self: this
                    })), ss.a.createElement("p", {
                        className: "NobleBuyModalHead-ac",
                        __self: this
                    }, ss.a.createElement("strong", {
                        className: "NobleBuyModalHead-pNkname",
                        __self: this
                    }, r.anchorName, "\uff1a"), ss.a.createElement("br", {__self: this}), "\u652f\u6301\u6211\uff0c\u6210\u4e3a\u5168\u5e73\u53f0\u8d35\u65cf\uff01")) : "", ss.a.createElement("a", {
                        className: "NobleBuyModalHead-btn NobleBuyModalHead-btn--compare",
                        target: "_blank",
                        href: "/cms/gong/201701/16/4753.shtml",
                        title: "\u67e5\u770b\u7279\u6743\u5bf9\u6bd4",
                        __self: this
                    }, "\u8d35\u65cfFAQ"), ss.a.createElement("p", {
                        className: "NobleBuyModalHead-btn NobleBuyModalHead-btn--comparePop",
                        title: "\u7279\u6743\u5bf9\u6bd4",
                        onClick: function onClick() {
                            return e.nobleBuyModalServices.showCompare()
                        },
                        __self: this
                    }, "\u7279\u6743\u5bf9\u6bd4"), s ? ss.a.createElement("a", {
                        title: "\u8d60\u9001\u597d\u53cb\u8d35\u65cf",
                        target: "_blank",
                        href: i,
                        className: "NobleBuyModalHead-btn NobleBuyModalHead-btn--present",
                        __self: this
                    }, "\u8d60\u9001\u597d\u53cb\u8d35\u65cf") : null)
                }, NobleBuyModalHead
            }(ss.a.Component), ah = NobleBuyModalHead_applyDecoratedDescriptor(ih.prototype, "global", [th], {
                enumerable: !0,
                initializer: null
            }), lh = NobleBuyModalHead_applyDecoratedDescriptor(ih.prototype, "common", [oh], {
                enumerable: !0,
                initializer: null
            }), ch = NobleBuyModalHead_applyDecoratedDescriptor(ih.prototype, "nobleBuyModalServices", [rh], {
                enumerable: !0,
                initializer: null
            }), nh = ih)) || nh), hh = o("20f6c"), vh = o.n(hh), _h = o("b32b8"), gh = o.n(_h), Dh = o("d57f7"),
            Sh = o.n(Dh), wh = o("7ccef"), Oh = o.n(wh), Eh = o("4b4d4"), Ch = o.n(Eh), Nh = o("838dc"), Ph = o.n(Nh),
            jh = o("d570a"), Th = o.n(jh), kh = o("66218"), zh = o.n(kh),
            Ih = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function TabTitle_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Ih(t)) && "function" !== typeof t ? e : t
        }

        function TabTitle_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Ih(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function TabTitle_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Rh, Mh = [vh.a, gh.a, Sh.a, Oh.a, Ch.a, Ph.a, Th.a, zh.a], Ah = Object(et.log)(dh = function (e) {
                function TabTitle() {
                    var t, o;
                    !function TabTitle_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, TabTitle);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = TabTitle_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), o.config = {path: "//res.douyucdn.cn/resource/"}, TabTitle_possibleConstructorReturn(o, t)
                }

                return TabTitle_inherits(TabTitle, e), TabTitle.prototype.renderIcon = function renderIcon(e) {
                    var t = e || {}, o = t.inProtected, r = t.protectedLvl, n = t.trial, i = t.level, a = t.itemLevel,
                        l = t.index, c = t.lowNobleLevel, s = t.lowProtectNobleLevel;
                    if (9 === i && 1 === l) {
                        if (c || s) return ss.a.createElement("span", {
                            className: "NobleTabTitle-itemRenewalIcon",
                            __self: this
                        })
                    } else {
                        if (9 === i && 0 === l) return null;
                        if (o && r && r === a && 1 !== n || i && i === a && 1 !== n) return ss.a.createElement("span", {
                            className: "NobleTabTitle-itemRenewalIcon",
                            __self: this
                        })
                    }
                    return null
                }, TabTitle.prototype.render = function render() {
                    var e = this, t = this.props, o = t.nobleConf, r = t.switchTab, n = t.currentIndex, i = t.getInfo,
                        a = (o || []).filter(function (e) {
                            return 1 === e.isOnSell
                        }), l = i.nblSpl, c = void 0 === l ? {} : l, s = c.lv ? c.lv : 0, u = c.pn || 0,
                        p = parseInt(u.pl, 10) || 0, f = u ? !s && parseInt(u.ep, 10) : 0, b = u ? !s && p : 0,
                        d = parseInt(c.trial, 10) || 0, y = parseInt(c.enl, 10) || 0, m = parseInt(c.enpl, 10) || 0,
                        h = parseInt(s, 10) || 0;
                    return ss.a.createElement("div", {className: "NobleTabTitle", __self: this}, a.map(function (t, o) {
                        var i = t.symbolImages || {}, a = i.webSymbolPic5 ? "" + e.config.path + i.webSymbolPic5 : Mh[o];
                        return ss.a.createElement("div", {
                            onClick: function onClick() {
                                r(o + 1, t.level)
                            }, className: "NobleTabTitle-item " + (n === o + 1 ? "is-cur" : ""), key: o, __self: e
                        }, ss.a.createElement("div", {
                            className: "NobleTabTitle-itemCon",
                            title: t.nobleName,
                            __self: e
                        }, ss.a.createElement("span", {
                            className: "NobleTabTitle-itemIcon",
                            __self: e
                        }, ss.a.createElement("img", {
                            src: a + Ds.imgSuffix,
                            alt: t.nobleName,
                            __self: e
                        })), ss.a.createElement("span", {
                            className: "NobleTabTitle-itemTxt",
                            __self: e
                        }, t.nobleName), e.renderIcon({
                            index: o,
                            inProtected: f,
                            protectedLvl: b,
                            trial: d,
                            level: h,
                            itemLevel: t.level,
                            lowNobleLevel: y,
                            lowProtectNobleLevel: m
                        })))
                    }))
                }, TabTitle
            }(ss.a.Component)) || dh, Lh = o("f2b8b"),
            Bh = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, xh = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function TabCon_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Bh(t)) && "function" !== typeof t ? e : t
        }

        function TabCon_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Bh(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function TabCon_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Fh, Hh, Uh, Gh, Wh, Yh, $h, qh, Vh = Object(et.log)(Rh = function (e) {
                function TabCon() {
                    var t, o;
                    !function TabCon_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, TabCon);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = TabCon_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), o.config = {
                        bannerUrl: "/topic/GUIZU",
                        path: "//res.douyucdn.cn/resource/"
                    }, TabCon_possibleConstructorReturn(o, t)
                }

                return TabCon_inherits(TabCon, e), TabCon.prototype.searchNum = function searchNum(e) {
                    var t = 0;
                    return e.forEach(function (e) {
                        e && e.usable && (t += 1)
                    }), t
                }, TabCon.prototype.searchPic = function searchPic(e) {
                    var t = [];
                    return e.forEach(function (e) {
                        t.push(e.symbolImages)
                    }), t
                }, TabCon.prototype.renderThumbVertical = function renderThumbVertical(e) {
                    var t = e.style, o = function TabCon_objectWithoutProperties(e, t) {
                        var o = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
                        return o
                    }(e, ["style"]);
                    return ss.a.createElement("div", xh({className: "CustomScrollbar--vertical"}, o, t, {__self: this}))
                }, TabCon.prototype.renderBanner = function renderBanner(e) {
                    return 8 === e ? ss.a.createElement("a", {
                        className: "NobleTabCon-banner",
                        target: "_blank",
                        href: this.config.bannerUrl,
                        __self: this
                    }, "8\u670820\u65e5\u524d\u4ee5\u7687\u5e1d\u8eab\u4efd\u5f00\u901a\u8d85\u7ea7\u7687\u5e1d\u4f1a\u6709\u8d85\u7ba1\u8d85\u706b\u606d\u8d3a", ss.a.createElement("span", {
                        className: "NobleTabCon-bannerTips",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleTabCon-bannerTipCon",
                        __self: this
                    }, "\u8d35\u65cf\u7687\u5e1d\u5df2\u4e8e2019\u5e7408\u670809\u65e5\u4e0b\u7ebf\uff0c\u4e0b\u7ebf\u540e\u65e0\u6cd5\u5f00\u901a\u6216\u7eed\u8d39\u7687\u5e1d\uff0c\u5df2\u7ecf\u5f00\u901a\u7684\u7687\u5e1d\u7279\u6743\u53ef\u7ee7\u7eed\u4f7f\u7528"))) : 9 === e ? ss.a.createElement("a", {
                        className: "NobleTabCon-banner NobleTabCon-banner--hs",
                        target: "_blank",
                        href: this.config.bannerUrl,
                        __self: this
                    }, "\u7eb5\u6a2a\u4e09\u754c\uff0c\u552f\u6211\u72ec\u5c0a\uff0c\u901a\u8fc7<\u521b\u4e16\u5e7b\u795e\u964d\u4e34>\u6d3b\u52a8\u5f00\u901a") : null
                }, TabCon.prototype.render = function render() {
                    var e = this, t = this.props, o = t.currentIndex, r = t.nobleConf, n = t.nobleConData,
                        i = t.selectedLevel, a = (r || []).filter(function (e) {
                            return 1 === e.isOnSell
                        }), l = a[o - 1] || {}, c = n || [], s = ((this.searchPic(a) || [])[o - 1] || {}).webSymbolPic6, u = "";
                    return u = s ? "" + this.config.path + s : "", ss.a.createElement("div", {
                        className: "NobleTabCon",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleTabCon-item clearfix",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleTabCon-cover",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleTabCon-itemPic",
                        __self: this
                    }, ss.a.createElement("img", {
                        src: u + Ds.imgSuffix,
                        __self: this
                    })), ss.a.createElement("div", {
                        className: "NobleTabCon-itemPicMask",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleTabCon-itemNk",
                        title: l.nobleName,
                        __self: this
                    }, l.nobleName))), ss.a.createElement("div", {
                        className: "NobleTabCon-itemConMain",
                        __self: this
                    }, ss.a.createElement(Lh.Scrollbars, {
                        renderThumbVertical: this.renderThumbVertical,
                        autoHide: !0,
                        autoHeight: !0,
                        autoHeightMax: 311,
                        __self: this
                    }, this.renderBanner(i), ss.a.createElement("h4", {
                        className: "NobleTabCon-itemConMainTq",
                        __self: this
                    }, "\u4e13\u5c5e\u7279\u6743\uff1a", this.searchNum(c), "/18"), c.map(function (t, o) {
                        return t && t.usable ? ss.a.createElement("div", {
                            className: "NobleTabCon-itemConMainItem",
                            key: o,
                            __self: e
                        }, ss.a.createElement("div", {
                            className: "NobleTabCon-itemConMainItemPic",
                            __self: e
                        }, ss.a.createElement("img", {
                            src: "" + e.config.path + t.icon6 + Ds.imgSuffix,
                            __self: e
                        })), ss.a.createElement("div", {
                            className: "NobleTabCon-itemConMainItemTxt",
                            __self: e
                        }, ss.a.createElement("p", {
                            className: "NobleTabCon-itemConMainItemTxtTitle",
                            title: t.longName,
                            __self: e
                        }, t.shortName), ss.a.createElement("span", {
                            className: "NobleTabCon-itemConMainItemTxt",
                            title: t.intro,
                            __self: e
                        }, t.intro))) : null
                    })))))
                }, TabCon
            }(ss.a.Component)) || Rh,
            Zh = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function TabConFooter_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function TabConFooter_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Zh(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function TabConFooter_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function TabConFooter_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var Kh, Jh = n.a.Service,
            Xh = (Fh = Jh(i.DataCenter.global), Hh = Jh(i.DataCenter.common), Uh = Jh(hl), Object(et.log)((Wh = function (e) {
                function TabConFooter() {
                    !function TabConFooter_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, TabConFooter);
                    var t = function TabConFooter_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : Zh(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return TabConFooter_initDefineProp(t, "global", Yh, t), TabConFooter_initDefineProp(t, "common", $h, t), TabConFooter_initDefineProp(t, "nobleBuyModalServices", qh, t), t.state = {}, t
                }

                return TabConFooter_inherits(TabConFooter, e), TabConFooter.prototype.tips = function tips() {
                    return ss.a.createElement("div", {
                        className: "NobleTabConFooter-pTipCon",
                        __self: this
                    }, ss.a.createElement("h4", {__self: this}, "\u8d35\u65cf\u9c7c\u7fc5\u4f7f\u7528\u8bf4\u660e\uff1a"), ss.a.createElement("ul", {__self: this}, ss.a.createElement("li", {__self: this}, "1. \u8d35\u65cf\u9c7c\u7fc5\u4e0e\u666e\u901a\u9c7c\u7fc5\u7b49\u503c\uff0c\u53ef\u4ee5\u7528\u6765\u9001\u793c\u7269\uff0c\u4e3b\u64ad\u6536\u5230\u540e\u83b7\u5f97", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, "\u540c\u7b49\u6536\u76ca"), "\uff1b\u4f7f\u7528\u9c7c\u7fc5\u65f6\u4f1a\u4f18\u5148\u6d88\u8017\u8d35\u65cf\u9c7c\u7fc5\u3002"), ss.a.createElement("li", {__self: this}, "2. \u81ea2018\u5e7410\u670830\u65e5\u8d77\uff0c\u8d35\u65cf\u9c7c\u7fc5\u6c38\u4e45\u6709\u6548\uff0c\u5728\u6b64\u4e4b\u524d\u5df2\u8fc7\u671f\u7684\u8d35\u65cf\u9c7c\u7fc5\u4e0d\u4e88\u8fd4\u8fd8\uff1b\u8d35\u65cf\u8fc7\u671f\u540e\u672a\u4f7f\u7528\u5b8c\u7684\u8d35\u65cf\u9c7c\u7fc5\u5c06\u4f1a\u88ab\u51bb\u7ed3\uff0c\u7eed\u8d39\u8d35\u65cf\u6216\u91cd\u65b0\u5f00\u901a\u4efb\u610f\u7b49\u7ea7\u8d35\u65cf\u5747\u53ef\u89e3\u51bb\u8d35\u65cf\u9c7c\u7fc5\u3002"), ss.a.createElement("li", {__self: this}, "3. \u8d35\u65cf\u9c7c\u7fc5\u4e0d\u80fd\u7528\u4e8e\u8d2d\u4e70\u8d35\u65cf\u3001\u916c\u52e4\u6216\u95e8\u7968\u3002"), ss.a.createElement("li", {__self: this}, "4. \u7eed\u8d39\u8d35\u65cf\u540e\uff0c\u7acb\u5373\u8fd4\u8fd8\u6240\u5f97\u7684\u8d35\u65cf\u9c7c\u7fc5\u3002")))
                }, TabConFooter.prototype.tip4protect = function tip4protect() {
                    return ss.a.createElement("div", {
                        className: "NobleTabConFooter-pTipCon",
                        __self: this
                    }, ss.a.createElement("h4", {__self: this}, "\u7eed\u8d39\u4fdd\u62a4\u671f\u8bf4\u660e\uff1a"), ss.a.createElement("ul", {__self: this}, ss.a.createElement("li", {__self: this}, "\u8d35\u65cf\u7279\u6743\u5931\u6548\u540e\u4f1a\u670915\u5929\u7684\u7eed\u8d39\u4fdd\u62a4\u671f\uff0c\u5728\u6b64\u671f\u95f4\u8d2d\u4e70\u8d35\u65cf\u4ecd\u53ef\u4eab\u53d7\u7eed\u8d39\u4ef7\u683c")))
                }, TabConFooter.prototype.openActTpl = function openActTpl() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e.icon && e.pop_img ? ss.a.createElement("div", {
                        className: "NobleTabConFooter-anniversary",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleTabConFooter-anniversaryCon",
                        style: {backgroundImage: "url(//shark2.douyucdn.cn/" + e.icon + ")"},
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleTabConFooter-pTipCon",
                        style: {backgroundImage: "url(//shark2.douyucdn.cn/" + e.pop_img + ")"},
                        __self: this
                    }, "\u6d3b\u52a8\u65f6\u95f4\uff1a", e.timeArray[0], "~", e.timeArray[1]))) : null
                }, TabConFooter.prototype.repayActTpl = function repayActTpl(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return ss.a.createElement("div", {
                        className: "NobleTabConFooter-anniversary",
                        __self: this
                    }, o.icon && o.pop_img ? ss.a.createElement("div", {
                        className: "NobleTabConFooter-anniversaryCon",
                        style: {backgroundImage: "url(//shark2.douyucdn.cn/" + o.icon + ")"},
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleTabConFooter-pTipCon",
                        style: {backgroundImage: "url(//shark2.douyucdn.cn/" + o.pop_img + ")"},
                        __self: this
                    }, "\u6d3b\u52a8\u65f6\u95f4\uff1a", o.timeArray[0], "~", o.timeArray[1])) : null, ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, t / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()))
                }, TabConFooter.prototype.equalFree = function equalFree(e, t) {
                    return e === t ? ss.a.createElement("span", {__self: this}, "\u76f8\u5f53\u4e8e\u7eed\u8d39", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, "\u514d\u8d39"), "\u3002") : null
                }, TabConFooter.prototype.footTxt = function footTxt(e) {
                    var t = e.trial, o = e.foorterItem, r = e.selectedLevel, n = e.inProtected, i = e.protectedLvl,
                        a = e.level, l = e.activityData, c = e.lowNobleLevel, s = e.lowProtectNobleLevel,
                        u = e.activitySwitch, p = o.nobleName, f = void 0 === p ? "" : p, b = o.firstOpenPrice,
                        d = void 0 === b ? 0 : b, y = o.firstRemandGold, m = void 0 === y ? 0 : y, h = o.renewPrice,
                        v = void 0 === h ? 0 : h, _ = o.renewRemandGold, g = void 0 === _ ? 0 : _, D = u,
                        S = parseInt(g / v * 100, 10) + "%", w = parseInt(m / d * 100, 10) + "%", O = null;
                    return O = d - m > 0 ? ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, "\u76f8\u5f53\u4e8e\u5f00\u901a\u4ec5\u9700", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, (d - m) / 100), "\u9c7c\u7fc5\u3002") : d - m < 0 ? ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, "\u76f8\u5f53\u4e8e\u8fd4\u5229", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, w), "\u3002") : ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, "\u76f8\u5f53\u4e8e", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, "\u514d\u8d39\u5f00\u901a"), "\u3002"), 1 === t ? ss.a.createElement("div", {
                        className: "NobleTabConFooter-txt",
                        __self: this
                    }, "\u5f00\u901a", f, "\uff08\u9996\u6708\uff09\uff1a", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, d / 100), "\u9c7c\u7fc5\uff0c", ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, m / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()), O, ss.a.createElement("br", {__self: this}), D && r === l.nobleLv ? this.openActTpl(l) : "", ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, "\u5f80\u540e\u7eed\u8d39\u53ea\u9700", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5/\u6708\uff0c\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5\u3002", this.equalFree(v, g))) : 9 === a ? c || s ? r < 8 ? ss.a.createElement("div", {
                        className: "NobleTabConFooter-txt",
                        __self: this
                    }, "\u5f00\u901a", f, "\uff08\u9996\u6708\uff09\uff1a", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, d / 100), " \u9c7c\u7fc5\uff0c", ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, m / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()), O, ss.a.createElement("br", {__self: this}), D && r === l.nobleLv ? ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, this.openActTpl(l), ss.a.createElement("span", {__self: this}, "\u5f80\u540e\u7eed\u8d39\u53ea\u9700", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5/\u6708\uff0c\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5\uff0c\u8fd4\u5229\u9ad8\u8fbe", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, S), "\u3002")) : ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, "\u5f80\u540e\u7eed\u8d39\u53ea\u9700", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5/\u6708\uff0c\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5\u3002", this.equalFree(v, g))) : ss.a.createElement("div", {
                        className: "NobleTabConFooter-txt",
                        __self: this
                    }, "\u7eed\u8d39", f, "\uff08\u6708\uff09\uff1a", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5", ss.a.createElement("br", {__self: this}), D && r === l.nobleLv ? ss.a.createElement("span", {__self: this}, this.repayActTpl(v, g, l), "\u8fd4\u5229\u9ad8\u8fbe", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, S), "\u3002") : ss.a.createElement("span", {__self: this}, ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()), this.equalFree(v, g), ss.a.createElement("span", {
                        className: "NobleTabConFooter-right",
                        __self: this
                    }, "\u60a8\u5f53\u524d\u5728\u7eed\u8d39\u4fdd\u62a4\u671f\u5185", this.tip4protect()))) : ss.a.createElement("div", {
                        className: "NobleTabConFooter-txt",
                        __self: this
                    }, "\u5f00\u901a", f, "\uff08\u9996\u6708\uff09\uff1a", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, d / 100), " \u9c7c\u7fc5\uff0c", ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, m / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()), O, ss.a.createElement("br", {__self: this}), D && r === l.nobleLv ? ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, this.openActTpl(l), ss.a.createElement("span", {__self: this}, "\u5f80\u540e\u7eed\u8d39\u53ea\u9700", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5/\u6708\uff0c\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5\uff0c\u8fd4\u5229\u9ad8\u8fbe", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, S), "\u3002")) : ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, "\u5f80\u540e\u7eed\u8d39\u53ea\u9700", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5/\u6708\uff0c\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5\u3002", this.equalFree(v, g))) : n && i && i === r ? ss.a.createElement("div", {
                        className: "NobleTabConFooter-txt",
                        __self: this
                    }, "\u7eed\u8d39", f, "\uff08\u6708\uff09\uff1a", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5", ss.a.createElement("br", {__self: this}), D && r === l.nobleLv ? ss.a.createElement("span", {__self: this}, this.repayActTpl(v, g, l), "\u8fd4\u5229\u9ad8\u8fbe", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, S), "\u3002") : ss.a.createElement("span", {__self: this}, ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()), this.equalFree(v, g), ss.a.createElement("span", {
                        className: "NobleTabConFooter-right",
                        __self: this
                    }, "\u60a8\u5f53\u524d\u5728\u7eed\u8d39\u4fdd\u62a4\u671f\u5185", this.tip4protect()))) : a && a === r ? ss.a.createElement("div", {
                        className: "NobleTabConFooter-txt",
                        __self: this
                    }, "\u7eed\u8d39", f, "\uff08\u6708\uff09\uff1a", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), " \u9c7c\u7fc5", ss.a.createElement("br", {__self: this}), D && r === l.nobleLv ? ss.a.createElement("span", {__self: this}, this.repayActTpl(v, g, l), "\u8fd4\u5229\u9ad8\u8fbe", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, S), "\u3002") : ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()), this.equalFree(v, g))) : ss.a.createElement("div", {
                        className: "NobleTabConFooter-txt",
                        __self: this
                    }, "\u5f00\u901a", f, "\uff08\u9996\u6708\uff09\uff1a", ss.a.createElement("strong", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, d / 100), " \u9c7c\u7fc5\uff0c", ss.a.createElement("span", {
                        className: "NobleTabConFooter-pTip",
                        __self: this
                    }, "\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, m / 100), "\u8d35\u65cf\u9c7c\u7fc5", this.tips()), O, ss.a.createElement("br", {__self: this}), D && r === l.nobleLv ? ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, this.openActTpl(l), ss.a.createElement("span", {__self: this}, "\u5f80\u540e\u7eed\u8d39\u53ea\u9700", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5/\u6708\uff0c\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5\uff0c\u8fd4\u5229\u9ad8\u8fbe", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, S), "\u3002")) : ss.a.createElement("span", {
                        className: "NobleTabConFooter-txtSpan",
                        __self: this
                    }, "\u5f80\u540e\u7eed\u8d39\u53ea\u9700", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, v / 100), "\u9c7c\u7fc5/\u6708\uff0c\u8fd4\u8fd8", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, g / 100), "\u8d35\u65cf\u9c7c\u7fc5\u3002", this.equalFree(v, g)))
                }, TabConFooter.prototype.preCheck = function preCheck(e) {
                    return !!h.a.check() || (h.a.show(), e.preventDefault(), !1)
                }, TabConFooter.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.common.get("$DATA").subscribe(function (t) {
                        t.get && e.setState({ROOM: t.get("room")})
                    }), this.nobleBuyModalServices.updateHsFooter()
                }, TabConFooter.prototype.footBtn = function footBtn(e) {
                    var t = this, o = e.trial, r = e.selectedLevel, n = e.inProtected, i = e.protectedLvl, a = e.level,
                        l = e.lowNobleLevel, c = e.lowProtectNobleLevel,
                        s = e.currentTabIndex - 1 > e.currentLvIndex && !n ? "is-disabled" : "";
                    this.$ROOM = this.state.ROOM || {};
                    var u = this.$ROOM.vipId || "";
                    this.config = {
                        url: "https://cz.douyu.com/noble?vipId=" + u + "&",
                        roomId: this.$ROOM.room_id || ""
                    };
                    var p = this.config.url + "level=" + r + "&rid=" + this.config.roomId;
                    return 1 === o ? ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn",
                        target: "_blank",
                        onClick: function onClick(e) {
                            t.nobleBuyModalServices.setDYSub("click_noblebuy_open", {level: r}), t.preCheck(e)
                        },
                        href: p,
                        title: "\u7acb\u5373\u5f00\u901a",
                        __self: this
                    }, "\u7acb\u5373\u5f00\u901a") : 9 === +a ? l || c ? r < 8 ? ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn is-disabled",
                        title: "\u7acb\u5373\u5f00\u901a",
                        __self: this
                    }, "\u7acb\u5373\u5f00\u901a") : ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn",
                        target: "_blank",
                        onClick: function onClick(e) {
                            t.nobleBuyModalServices.setDYSub("click_noblebuy_renewal", {level: r}), t.preCheck(e)
                        },
                        href: p,
                        title: "\u7acb\u5373\u7eed\u8d39",
                        __self: this
                    }, "\u7acb\u5373\u7eed\u8d39") : r < 8 ? ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn is-disabled",
                        title: "\u7acb\u5373\u5f00\u901a",
                        __self: this
                    }, "\u7acb\u5373\u5f00\u901a") : ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn",
                        target: "_blank",
                        onClick: function onClick(e) {
                            t.nobleBuyModalServices.setDYSub("click_noblebuy_open", {level: r}), t.preCheck(e)
                        },
                        href: p,
                        title: "\u7acb\u5373\u5f00\u901a",
                        __self: this
                    }, "\u7acb\u5373\u5f00\u901a") : n && i && i === r || a && a === r ? ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn",
                        target: "_blank",
                        onClick: function onClick(e) {
                            t.nobleBuyModalServices.setDYSub("click_noblebuy_renewal", {level: r}), t.preCheck(e)
                        },
                        href: p,
                        title: "\u7acb\u5373\u7eed\u8d39",
                        __self: this
                    }, "\u7acb\u5373\u7eed\u8d39") : s ? ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn " + s,
                        target: "_blank",
                        onClick: function onClick(e) {
                            t.nobleBuyModalServices.setDYSub("click_noblebuy_open", {level: r}), t.preCheck(e)
                        },
                        title: "\u7acb\u5373\u5f00\u901a",
                        __self: this
                    }, "\u7acb\u5373\u5f00\u901a") : ss.a.createElement("a", {
                        className: "NobleTabConFooter-Btn " + s,
                        target: "_blank",
                        onClick: function onClick(e) {
                            t.nobleBuyModalServices.setDYSub("click_noblebuy_open", {level: r}), t.preCheck(e)
                        },
                        href: p,
                        title: "\u7acb\u5373\u5f00\u901a",
                        __self: this
                    }, "\u7acb\u5373\u5f00\u901a")
                }, TabConFooter.prototype.formatContribute = function formatContribute(e, t) {
                    var o = e;
                    return e >= 1e4 && (o = this.formatDecimals(e / 1e4, t) + "\u4e07"), o
                }, TabConFooter.prototype.formatDecimals = function formatDecimals(e, t) {
                    var o = new RegExp("(\\.\\d{" + t + "})\\d*$"), r = ("" + e).replace(o, "$1");
                    return r = this.formatDotZero(r)
                }, TabConFooter.prototype.formatDotZero = function formatDotZero(e) {
                    return String(e).replace(/(\.\d*?)0+$/g, "$1").replace(/\.$/, "")
                }, TabConFooter.prototype.footHsTxt = function footHsTxt(e) {
                    var t = new Date, o = Math.floor(t.getTime() / 1e3), r = e || {}, n = r.open_price_limit,
                        i = void 0 === n ? "--" : n, a = r.open_day_limit, l = void 0 === a ? "--" : a,
                        c = r.open_last_day_limit, s = void 0 === c ? "--" : c, u = r.renew_price_limit,
                        p = void 0 === u ? "--" : u, f = r.renew_day_limit, b = void 0 === f ? "--" : f,
                        d = r.god_act_time, y = void 0 === d ? 0 : d;
                    return ss.a.createElement("div", {
                        className: "NobleTabConFooter-hsTxt",
                        __self: this
                    }, o < y ? ss.a.createElement("div", {__self: this}, "\u76ee\u524d\u5e7b\u795e\u8d35\u65cf\u53ea\u80fd\u901a\u8fc7", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, "<\u521b\u4e16\u5e7b\u795e\u964d\u4e34>"), "\u6d3b\u52a8\u4ea7\u751f") : ss.a.createElement("div", {__self: this}, "\u62e5\u6709\u8d85\u7ea7\u7687\u5e1d\u8eab\u4efd\uff0c\u4e14\u5728\u8d85\u7ea7\u7687\u5e1d\u671f\u95f4\u7684\u6700\u8fd1", l, "\u5929", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, "\u6d88\u8d39\u6ee1", this.formatContribute(i / 100, 1), "\u9c7c\u7fc5"), "\uff0c\u5c06\u81ea\u52a8\u83b7\u5f97\u5e7b\u795e\u8eab\u4efd\uff08\u6709\u6548\u671f", s, "\u5929\uff09"), ss.a.createElement("div", {__self: this}, "\u5728\u62e5\u6709\u5e7b\u795e\u8eab\u4efd\u671f\u95f4\uff0c\u6bcf\u6d88\u8d39", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, "\u6ee1", this.formatContribute(p / 100, 1), "\u9c7c\u7fc5"), "\u81ea\u52a8\u5ef6\u957f", ss.a.createElement("span", {
                        className: "NobleTabConFooter-spec",
                        __self: this
                    }, "\u6709\u6548\u671f", b, "\u5929")))
                }, TabConFooter.prototype.render = function render() {
                    var e = this.props, t = e.currentTabIndex, o = e.nobleConf, r = e.getInfo, n = e.activityData,
                        i = e.activitySwitch, a = e.nobleHsConfig, l = void 0 === a ? {} : a,
                        c = (o || []).filter(function (e) {
                            return 1 === e.isOnSell
                        }), s = c[t - 1] || {}, u = r.nblSpl, p = void 0 === u ? {} : u, f = p.lv ? p.lv : 0,
                        b = p.pn || 0, d = parseInt(b.pl, 10) || 0, y = b ? !f && parseInt(b.ep, 10) : 0,
                        m = b ? !f && d : 0, h = parseInt(p.trial, 10) || 0, v = parseInt(p.enl, 10) || 0,
                        _ = parseInt(p.enpl, 10) || 0, g = parseInt(f, 10) || 0, D = 7;
                    c.map(function (e, t) {
                        return e.level !== g && e.level !== m || (D = t), D
                    });
                    var S = c[t - 1] || {}, w = parseInt(S.level, 10) || 7 || 7;
                    return ss.a.createElement("div", {
                        className: "NobleTabConFooter clearfix",
                        __self: this
                    }, 9 === w ? null : this.footBtn({
                        trial: h,
                        selectedLevel: w,
                        inProtected: y,
                        protectedLvl: m,
                        lowNobleLevel: v,
                        lowProtectNobleLevel: _,
                        currentTabIndex: t,
                        currentLvIndex: D,
                        level: g
                    }), 9 === w ? this.footHsTxt(l) : this.footTxt({
                        trial: h,
                        foorterItem: s,
                        selectedLevel: w,
                        inProtected: y,
                        protectedLvl: m,
                        level: g,
                        activityData: n,
                        lowNobleLevel: v,
                        lowProtectNobleLevel: _,
                        activitySwitch: i
                    }))
                }, TabConFooter
            }(ss.a.Component), Yh = TabConFooter_applyDecoratedDescriptor(Wh.prototype, "global", [Fh], {
                enumerable: !0,
                initializer: null
            }), $h = TabConFooter_applyDecoratedDescriptor(Wh.prototype, "common", [Hh], {
                enumerable: !0,
                initializer: null
            }), qh = TabConFooter_applyDecoratedDescriptor(Wh.prototype, "nobleBuyModalServices", [Uh], {
                enumerable: !0,
                initializer: null
            }), Gh = Wh)) || Gh), Qh = Object(us.connect)(function mapStateToProps(e) {
                return {nobleHsConfig: e.nobleBuyModalData.nobleHsConfig}
            })(Xh), ev = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, tv = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function TabConCompare_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : ev(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function TabConCompare_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var ov, rv, nv, iv, av, lv, cv = {
            openNofity: {name: "\u5f00\u901a\u901a\u77e5", key: "openNofity", unit: ""},
            opEffect: {name: "\u5f00\u901a\u7279\u6548", key: "opEffect", unit: ""},
            wlcm: {name: "\u8fdb\u573a\u6b22\u8fce", key: "wlcm", unit: ""},
            js_noble_badge: {name: "\u8d35\u65cf\u52cb\u7ae0", key: "js_noble_badge", isYESorNO: 1, unit: ""},
            nobleGift: {name: "\u8d35\u65cf\u793c\u7269", key: "nobleGift", isYESorNO: 1, unit: ""},
            linkMike: {name: "\u8fde\u9ea6", key: "linkMike", isYESorNO: 1, unit: ""},
            js_noble_card: {name: "\u8d35\u65cf\u7528\u6237\u540d\u7247", key: "js_noble_card", isYESorNO: 1, unit: ""},
            expAddition: {name: "\u5347\u7ea7\u52a0\u901f", key: "expAddition", unit: "%"},
            speakerNumber: {name: "\u5206\u533a\u5587\u53ed", key: "speakerNumber", isNoNmixin: 1, unit: ""},
            siteSpeakerNumber: {name: "\u5168\u7ad9\u5587\u53ed", key: "siteSpeakerNumber", isNoNmixin: 1, unit: ""},
            nobleBarrage: {name: "\u8d35\u65cf\u5f39\u5e55", key: "nobleBarrage", isYESorNO: 1, unit: ""},
            intoRoomHide: {name: "\u8fdb\u623f\u95f4\u9690\u8eab", key: "intoRoomHide", isYESorNO: 1, unit: ""},
            superAdminHelper: {
                name: "\u4e13\u5c5e\u8d85\u7ba1\u52a9\u624b",
                key: "superAdminHelper",
                isYESorNO: 1,
                unit: ""
            },
            topListHide: {name: "\u8d21\u732e\u699c\u9690\u8eab", key: "topListHide", isYESorNO: 1, unit: ""},
            avoidBanSpeaking: {name: "\u9632\u7981\u8a00", key: "avoidBanSpeaking", isYESorNO: 1, unit: ""},
            customizeGift: {name: "\u5b9a\u5236\u706b\u7bad", key: "customizeGift", isYESorNO: 1, unit: ""},
            recommendAnchor: {
                name: "\u63a8\u8350\u4e3b\u64ad\u4e0a\u70ed\u95e8",
                key: "recommendAnchor",
                isYESorNO: 1,
                unit: ""
            },
            customNicknameColor: {
                name: "\u81ea\u5b9a\u4e49\u5f39\u5e55\u6635\u79f0\u989c\u8272",
                key: "customNicknameColor",
                isYESorNO: 1,
                unit: ""
            },
            firstOpenPrice: {
                name: "\u5f00\u901a\u4ef7\u683c",
                key: "firstOpenPrice",
                devide100: 1,
                unit: "\u9c7c\u7fc5"
            },
            firstRemandGold: {
                name: "\u5f00\u901a\u5373\u8d60",
                key: "firstRemandGold",
                devide100: 1,
                unit: "\u8d35\u65cf\u9c7c\u7fc5"
            },
            renewPrice: {name: "\u7eed\u8d39\u4ef7\u683c", key: "renewPrice", devide100: 1, unit: "\u9c7c\u7fc5"},
            renewRemandGold: {
                name: "\u7eed\u8d39\u5373\u8d60",
                key: "renewRemandGold",
                devide100: 1,
                unit: "\u8d35\u65cf\u9c7c\u7fc5"
            }
        }, sv = Object(et.log)(Kh = function (e) {
            function TabConCompare() {
                return function TabConCompare_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, TabConCompare), function TabConCompare_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : ev(t)) && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return TabConCompare_inherits(TabConCompare, e), TabConCompare.prototype.tdItem = function tdItem(e) {
                var t = e.tdkey, o = e.trKey, r = e.i;
                return 0 === +e.isOpenHs && "firstOpenPrice" === o && 0 === r ? "\u4ec5\u6d3b\u52a8\u5f00\u901a" : 0 === t || 1 === t ? ss.a.createElement("i", {
                    className: "NobleTabConCompare-tdIcon " + (t ? "is-yes" : "is-no"),
                    __self: this
                }) : "" === t ? "\u65e0" : cv[o].devide100 ? "" + t / 100 + (cv[o].unit || "") : cv[o].isNoNmixin ? t + "\u4e2a/\u6708" : "expAddition" === cv[o].key ? "" + t + (cv[o].unit || "") : t
            }, TabConCompare.prototype.formatData = function formatData(e) {
                var t = {};
                return e.forEach(function (e) {
                    e.isOnSell && Object.keys(cv).forEach(function (o) {
                        var r = cv[o], n = r.key, i = e[n];
                        "undefined" === typeof t[n] && (t[n] = []), "opEffect" === n || "wlcm" === n ? t[n].push(i.name) : n.indexOf("js_") > -1 ? t[n].push(r.isYESorNO) : t[n].push(e[n])
                    })
                }), t
            }, TabConCompare.prototype.renderThumbVertical = function renderThumbVertical(e) {
                var t = e.style, o = function TabConCompare_objectWithoutProperties(e, t) {
                    var o = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
                    return o
                }(e, ["style"]);
                return ss.a.createElement("div", tv({className: "CustomScrollbar--vertical"}, o, t, {__self: this}))
            }, TabConCompare.prototype.render = function render() {
                var e = this, t = this.props.nobleConf || [], o = this.formatData(t), r = Object.keys(o),
                    n = t.filter(function (e) {
                        return 1 === e.isOnSell
                    }), i = new Date, a = Math.floor(i.getTime() / 1e3), l = this.props.nobleHsConfig,
                    c = (void 0 === l ? {} : l).god_act_time, s = a > (void 0 === c ? 0 : c) ? 1 : 0;
                return ss.a.createElement("div", {
                    className: "NobleTabConCompare",
                    __self: this
                }, ss.a.createElement("div", {
                    className: "NobleTabConCompare-nobleTitle",
                    __self: this
                }, ss.a.createElement("span", {
                    className: "NobleTabConCompare-first",
                    __self: this
                }, "\u7279\u6743\u5bf9\u6bd4"), n.map(function (t, o) {
                    return ss.a.createElement("span", {
                        key: o,
                        className: "NobleTabConCompare-nobleTxt",
                        __self: e
                    }, t.nobleName)
                })), ss.a.createElement(Lh.Scrollbars, {
                    renderThumbVertical: this.renderThumbVertical,
                    autoHide: !0,
                    autoHeight: !0,
                    autoHeightMax: 399,
                    __self: this
                }, ss.a.createElement("table", {
                    className: "NobleTabConCompare-table",
                    __self: this
                }, ss.a.createElement("tbody", {__self: this}, r.map(function (t, r) {
                    var n = o[t].map(function (o, r) {
                        return ss.a.createElement("td", {
                            key: r,
                            className: "NobleTabConCompare-td",
                            __self: e
                        }, ss.a.createElement("span", {
                            className: "NobleTabConCompare-tableSpan",
                            __self: e
                        }, e.tdItem({tdkey: o, trKey: t, i: r, isOpenHs: s})))
                    }), i = cv[t].name;
                    return ss.a.createElement("tr", {
                        key: r,
                        __self: e
                    }, ss.a.createElement("th", {
                        className: "NobleTabConCompare-th",
                        __self: e
                    }, ss.a.createElement("strong", {className: "NobleTabConCompare-tableStrong", __self: e}, i)), n)
                })))))
            }, TabConCompare
        }(ss.a.Component)) || Kh, uv = Object(us.connect)(function mapStateToProps(e) {
            return {nobleHsConfig: e.nobleBuyModalData.nobleHsConfig}
        })(sv), pv = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, fv = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };

        function NobleBuyModal_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function NobleBuyModal_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : pv(t)) && "function" !== typeof t ? e : t
        }

        function NobleBuyModal_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : pv(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function NobleBuyModal_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function NobleBuyModal_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var bv, dv, yv = n.a.Service,
            mv = (ov = yv(i.DataCenter.common), rv = yv(hl), Object(et.log)((iv = function (e) {
                function NobleBuyModal() {
                    var t, o;
                    !function NobleBuyModal_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, NobleBuyModal);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = NobleBuyModal_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), NobleBuyModal_initDefineProp(o, "common", av, o), NobleBuyModal_initDefineProp(o, "nobleBuyModalServices", lv, o), NobleBuyModal_possibleConstructorReturn(o, t)
                }

                return NobleBuyModal_inherits(NobleBuyModal, e), NobleBuyModal.prototype.componentWillMount = function componentWillMount() {
                    var e = this;
                    this.common.get("NobleBuyModelOpen").subscribe(function () {
                        e.checkLoginStatus() && e.nobleBuyModalServices.openNobleBuyModal()
                    })
                }, NobleBuyModal.prototype.closeNobleBuyModal = function closeNobleBuyModal() {
                    this.nobleBuyModalServices.closeNobleBuyModal(), this.nobleBuyModalServices.closeCompare()
                }, NobleBuyModal.prototype.switchTab = function switchTab(e, t) {
                    this.nobleBuyModalServices.swithcNobleBuyTab(e), this.nobleBuyModalServices.updateNobleConData(t), 9 === t && this.nobleBuyModalServices.updateHsFooter(), this.setDYSub("click_noblebuy_noblelabel", {level: t})
                }, NobleBuyModal.prototype.setDYSub = function setDYSub(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(sn.dysub)(e, fv({}, t))
                }, NobleBuyModal.prototype.checkLoginStatus = function checkLoginStatus() {
                    return !!h.a.check() || (h.a.show(), !1)
                }, NobleBuyModal.prototype.render = function render() {
                    var e = this, t = this.props.nobleBuyModalData || {}, o = t.openNobleBuyModal, r = t.isShowCompare,
                        n = t.confignwData, i = t.getNobleInfo, a = t.getNobleAct, l = t.nobleConData,
                        c = t.currentTabIndex, s = t.selectedLevel, u = t.getNobleSwitch, p = t.openForFriendData,
                        f = n || [], b = i || {}, d = a || {};
                    return o ? zm.a.createPortal(ss.a.createElement("div", {
                        className: "NobleBuyModal",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleBuyModal-wrap",
                        __self: this
                    }, f.length && b.nblSpl ? ss.a.createElement("div", {
                        className: "NobleBuyModal-wrapCon",
                        __self: this
                    }, ss.a.createElement(mh, {
                        openForFriendData: p,
                        __self: this
                    }), ss.a.createElement("div", {
                        className: "TabContainer",
                        __self: this
                    }, ss.a.createElement(Ah, {
                        switchTab: this.switchTab.bind(this),
                        nobleConf: f,
                        getInfo: b,
                        currentIndex: c,
                        __self: this
                    }), ss.a.createElement("div", {
                        className: "TabConNoble",
                        __self: this
                    }, ss.a.createElement(Vh, {
                        currentIndex: c,
                        nobleConf: f,
                        nobleConData: l,
                        selectedLevel: s,
                        __self: this
                    }), ss.a.createElement(Qh, fv({
                        currentIndex: c,
                        getInfo: b,
                        nobleConf: f,
                        activityData: d,
                        activitySwitch: u,
                        selectedLevel: s
                    }, this.props.nobleBuyModalData, {__self: this}))))) : ss.a.createElement("div", {
                        className: "NobleBuyModal-loading",
                        __self: this
                    }), r ? ss.a.createElement("div", {
                        className: "NobleBuyModalComparePop",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "NobleBuyModalComparePop-close",
                        onClick: function onClick() {
                            return e.nobleBuyModalServices.closeCompare()
                        },
                        __self: this
                    }, "\u8fd4\u56de"), ss.a.createElement("div", {
                        className: "NobleBuyModalComparePop-title",
                        __self: this
                    }, "\u7279\u6743\u5bf9\u6bd4"), ss.a.createElement("div", {
                        className: "NobleBuyModalComparePop-wrap",
                        __self: this
                    }, ss.a.createElement(uv, {
                        nobleConf: f,
                        __self: this
                    }))) : null), ss.a.createElement("span", {
                        className: "NobleBuyModal-close",
                        title: "\u5173\u95ed",
                        onClick: function onClick() {
                            return e.closeNobleBuyModal()
                        },
                        __self: this
                    })), document.body) : ""
                }, NobleBuyModal
            }(ss.a.Component), av = NobleBuyModal_applyDecoratedDescriptor(iv.prototype, "common", [ov], {
                enumerable: !0,
                initializer: null
            }), lv = NobleBuyModal_applyDecoratedDescriptor(iv.prototype, "nobleBuyModalServices", [rv], {
                enumerable: !0,
                initializer: null
            }), nv = iv)) || nv), hv = Object(us.connect)(function mapStateToProps(e) {
                return {nobleBuyModalData: e.nobleBuyModalData}
            })(mv), vv = (o("dc648"), o("80ba1")), _v = o.n(vv),
            gv = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Dv = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            };

        function ZoomTip_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : gv(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function ZoomTip_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Sv, wv, Ov, Ev = (dv = bv = function (e) {
                function ZoomTip() {
                    !function ZoomTip_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, ZoomTip);
                    var t = function ZoomTip_possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== ("undefined" === typeof t ? "undefined" : gv(t)) && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return t.state = {wrapperStyle: {}, visible: !1}, t.init = function () {
                        var e = t.calculateRatio();
                        t.localStorage.get(t.storageName) || t.state.visible || 100 === e || t.setState({visible: !0}), t.localStorage.get(t.storageName) || t.bindEvents(), t.resize()
                    }, t.calculateRatio = function () {
                        var e = 0, t = window.screen;
                        return void 0 !== window.devicePixelRatio ? e = window.devicePixelRatio : -1 !== navigator.userAgent.toLowerCase().indexOf("msie") ? t.deviceXDPI && t.logicalXDPI && (e = t.deviceXDPI / t.logicalXDPI) : void 0 !== window.outerWidth && void 0 !== window.innerWidth && (e = window.outerWidth / window.innerWidth), e && (e = Math.round(100 * e)), 99 !== e && 101 !== e || (e = 100), e
                    }, t.resize = function () {
                        var e = t.calculateRatio();
                        if (t.state.visible && e && 100 === e) t.setState({visible: !1}); else {
                            var o = 54e3 / e, r = 43200 / e;
                            t.setState({
                                visible: !t.localStorage.get(t.storageName) && e && 100 !== e,
                                wrapperStyle: {width: o, height: r, marginLeft: -o / 2, marginTop: -r / 2}
                            })
                        }
                    }, t.detect = function () {
                        return -1 !== navigator.userAgent.toLowerCase().indexOf("windows") && !t.localStorage.get(t.storageName)
                    }, t.bindEvents = function () {
                        t.clientWidth = 0, t.clientHeight = 0, window.addEventListener("resize", function () {
                            var e = window.innerWidth || document.documentElement.clientWidth,
                                o = window.innerHeight || document.documentElement.clientHeight;
                            t.clientWidth === e && t.clientHeight === o || (t.clientWidth = e, t.clientHeight = o, t.resize())
                        })
                    }, t.handleCancel = function () {
                        t.setState({visible: !1})
                    }, t.handleCookie = function () {
                        t.cookie.get(t.storageName) && (t.cookie.remove(t.storageName), t.localStorage.set(t.storageName, t.storageVal, t.storageTime))
                    }, t.handleHide = function () {
                        t.localStorage.set(t.storageName, t.storageVal, t.storageTime), t.setState({visible: !1})
                    }, t.cookie = i.DataCenter.cookie(), t.localStorage = i.DataCenter.localStorage, t.storageName = "zoomtip", t.storageVal = "1", t.storageTime = 604800, t.mountPoint = document.getElementsByTagName("body")[0], t
                }

                return ZoomTip_inherits(ZoomTip, e), ZoomTip.prototype.componentDidMount = function componentDidMount() {
                    this.detect() && (this.init(), this.handleCookie())
                }, ZoomTip.prototype.render = function render() {
                    return this.state.visible ? zm.a.createPortal(ss.a.createElement("div", {
                        className: "ZoomTip",
                        style: Dv({}, this.state.wrapperStyle),
                        __self: this
                    }, ss.a.createElement("img", {
                        className: "ZoomTip-tipImg",
                        src: this.props.tipImage + Ds.imgSuffix,
                        __self: this
                    }), ss.a.createElement("span", {
                        className: "ZoomTip-tipClose",
                        onClick: this.handleCancel,
                        __self: this
                    }), ss.a.createElement("span", {
                        className: "ZoomTip-tipHide",
                        onClick: this.handleHide,
                        __self: this
                    })), this.mountPoint) : null
                }, ZoomTip
            }(ss.a.Component), bv.propTypes = {tipImage: gs.a.string}, bv.defaultProps = {tipImage: _v.a}, dv),
            Cv = (o("40407"), new Cs.a({
                id: "yubamessage_b498d0e",
                use: "yubamessage_b498d0e-usage",
                viewBox: "0 0 32 32",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="yubamessage_b498d0e">\n<title>yubamessage</title>\n<path d="M24 22.4v-8c0-4.418-3.582-8-8-8s-8 3.582-8 8v8h16zM14.4 3.313v-0.113c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6v0.113c5.428 0.776 9.6 5.444 9.6 11.087v8c0.884 0 1.6 0.716 1.6 1.6s-0.716 1.6-1.6 1.6h-8c0 1.767-1.433 3.2-3.2 3.2s-3.2-1.433-3.2-3.2h-8c-0.884 0-1.6-0.716-1.6-1.6s0.716-1.6 1.6-1.6v-8c0-5.642 4.172-10.31 9.6-11.087z" />\n</symbol>'
            })), Nv = (Ps.a.add(Cv), Cv),
            Pv = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function YubaMessage_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : Pv(t)) && "function" !== typeof t ? e : t
        }

        function YubaMessage_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : Pv(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function YubaMessage_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var jv = "130100101010", Tv = [{f: "like", n: "\u8d5e", l: "message/like/in"}, {
            f: "comment",
            n: "\u8bc4\u8bba",
            l: "message/comment/in"
        }, {f: "at", n: "@\u6211\u7684", l: "message/at/all"}, {
            f: "group",
            n: "\u9c7c\u5427\u6d88\u606f",
            l: "message/team/all"
        }], kv = function convertNumber(e) {
            return e > 99 ? 99 : e
        }, zv = (Sv = (0, n.a.Service)(i.DataCenter.global), wv = function (e) {
            function YubaMessage() {
                var t, o;
                !function YubaMessage_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, YubaMessage);
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                return t = o = YubaMessage_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function YubaMessage_initDefineProp(e, t, o, r) {
                    o && Object.defineProperty(e, t, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(r) : void 0
                    })
                }(o, "global", Ov, o), o.unreadClick = function (e) {
                    return function () {
                        pn(jv)({com: {p: e}}), o.delayFetch(1)
                    }
                }, YubaMessage_possibleConstructorReturn(o, t)
            }

            return YubaMessage_inherits(YubaMessage, e), YubaMessage.prototype.render = function render() {
                var e = this, t = this.props.yubaMessageData, o = Object.keys(t).reduce(function (e, o) {
                    return +e + +t[o]
                }, 0);
                return ss.a.createElement("div", {
                    className: "YubaMessage",
                    __self: this
                }, ss.a.createElement(Bs, {
                    placeholder: ss.a.createElement("span", {
                        onMouseDown: pn("13010010100Z"),
                        __self: this
                    }, ss.a.createElement("i", {
                        className: "DropPane-icon YubaMessage-icon",
                        __self: this
                    }, ss.a.createElement(Os, {
                        symbol: Nv.id,
                        __self: this
                    })), "\u6d88\u606f", ss.a.createElement(zd, {number: kv(o), __self: this})),
                    link: "//yuba.douyu.com/homepage/main",
                    onExpose: pn(jv + ".3.1"),
                    dropIcon: !1,
                    __self: this
                }, ss.a.createElement(ss.a.Fragment, {__self: this}, Tv.map(function (o, r) {
                    var n = o.f, i = o.n, a = o.l;
                    return ss.a.createElement("a", {
                        key: i,
                        className: "YubaMessage-link",
                        href: "//yuba.douyu.com/" + a,
                        target: "_blank",
                        onClick: e.unreadClick(r + 1),
                        __self: e
                    }, i, ss.a.createElement(zd, {number: kv(t[n]), __self: e}))
                }))))
            }, YubaMessage
        }(ss.a.Component), Ov = function YubaMessage_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }(wv.prototype, "global", [Sv], {enumerable: !0, initializer: null}), wv);
        zv.propTypes = {yubaMessageData: gs.a.object.isRequired};
        var Iv = Object(us.connect)(function mapStateToProps(e) {
            return {yubaMessageData: e.yubaMessageData}
        })(zv), Rv = (o("cc20d"), function HeaderGif(e) {
            var t = e.isDarkMode, o = e.switcher, r = e.backdrop, n = e.direction;
            return o.backdrop && r[n + "_pic"] && !t ? ss.a.createElement("span", {
                className: "HeaderGif-" + n,
                style: {backgroundImage: "url(" + r[n + "_pic"] + ")"},
                __self: void 0
            }) : null
        });
        Rv.propTypes = {
            switcher: gs.a.object,
            backdrop: gs.a.object,
            direction: gs.a.string
        }, Rv.defaultProps = {switcher: {}, backdrop: {}, direction: ""};
        var Mv = Rv, Av = document.querySelector("body"), Lv = function StyleInserter(e) {
            var t = e.getStyleContainer;
            return Object(km.createPortal)(ss.a.createElement("style", {ref: t, __self: void 0}), Av)
        };
        Lv.propTypes = {getStyleContainer: gs.a.func}, Lv.defaultProps = {
            getStyleContainer: function getStyleContainer() {
            }
        };
        var Bv = Lv,
            xv = (o("42b85"), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            });

        function MatchFocus_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : xv(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function MatchFocus_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var Fv = function (e) {
            function MatchFocus(t) {
                !function MatchFocus_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, MatchFocus);
                var o = function MatchFocus_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== ("undefined" === typeof t ? "undefined" : xv(t)) && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return o.state = {show: !1}, o
            }

            return MatchFocus_inherits(MatchFocus, e), MatchFocus.prototype.componentDidMount = function componentDidMount() {
                var e = this;
                this.timer = setTimeout(function () {
                    (document.querySelector(".Header") ? document.querySelector(".Header").offsetWidth : 0) - (document.querySelector(".Header-left") ? document.querySelector(".Header-left").offsetWidth : 0) - (document.querySelector(".HeaderNav") ? document.querySelector(".HeaderNav").offsetWidth : 0) - (document.querySelector(".Header-right") ? document.querySelector(".Header-right").offsetWidth + 36 : 0) < 200 ? e.setState({show: !1}) : e.props.matchDetail.matchFocusData && e.setState({show: !0})
                }, 2e3)
            }, MatchFocus.prototype.componentWillUnmount = function componentWillUnmount() {
                clearTimeout(this.timer)
            }, MatchFocus.prototype.handleClickMatchFocus = function handleClickMatchFocus() {
                var e = this.props.matchDetail.matchFocusData;
                pn("100100101019.1.1")(), e.rid && window.open("/" + e.rid)
            }, MatchFocus.prototype.render = function render() {
                var e = this.props.matchDetail.matchFocusData;
                if (this.state.show && e && e.btime && e.team1_pic && e.team2_pic) {
                    var t, o = "MatchFocus", r = new Date(1e3 * e.btime), n = r.getHours(), i = r.getMinutes();
                    return 2 === e.match_id && (o = "MatchFocus-kpl"), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t = n + ":" + i, ss.a.createElement("div", {
                        className: o,
                        onClick: this.handleClickMatchFocus.bind(this),
                        __self: this
                    }, ss.a.createElement("img", {
                        src: e.team1_pic,
                        className: "team-avatar1",
                        __self: this
                    }), ss.a.createElement("img", {
                        src: e.team2_pic,
                        className: "team-avatar2",
                        __self: this
                    }), ss.a.createElement("div", {
                        className: "team-name1",
                        __self: this
                    }, e.team1_name), ss.a.createElement("div", {
                        className: "team-name2",
                        __self: this
                    }, e.team2_name), ss.a.createElement("div", {className: "match-time", __self: this}, t))
                }
                return null
            }, MatchFocus
        }(ss.a.Component), Hv = n.a.Service, Uv = {};
        window.webMarketTools || (window.webMarketTools = {}), Hv(Rt)(window.webMarketTools, "commonDataServices"), Hv(i.DataCenter.common)(Uv, "common"), window.webMarketTools.showPayModal = function () {
            Uv.common.push("RoomShowIframePay")
        };
        var Gv, Wv, Yv, $v, qv, Vv, Zv, Kv, Jv, Xv, Qv, e_,
            t_ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function headerModule_components_initDefineProp(e, t, o, r) {
            o && Object.defineProperty(e, t, {
                enumerable: o.enumerable,
                configurable: o.configurable,
                writable: o.writable,
                value: o.initializer ? o.initializer.call(r) : void 0
            })
        }

        function headerModule_components_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" === typeof t ? "undefined" : t_(t)) && "function" !== typeof t ? e : t
        }

        function headerModule_components_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : t_(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function headerModule_components_defaults(e, t) {
                for (var o = Object.getOwnPropertyNames(t), r = 0; r < o.length; r++) {
                    var n = o[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function headerModule_components_applyDecoratedDescriptor(e, t, o, r, n) {
            var i = {};
            return Object.keys(r).forEach(function (e) {
                i[e] = r[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce(function (o, r) {
                return r(e, t, o) || o
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var o_ = n.a.Service, r_ = n.a.Region,
            n_ = (Gv = o_(B), Wv = o_(i.DataCenter.global), Yv = o_(i.DataCenter.event), $v = o_(ms), qv = o_(vs), Object(et.log)((Zv = function (e) {
                function Header() {
                    var t, o;
                    !function headerModule_components_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Header);
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    return t = o = headerModule_components_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), headerModule_components_initDefineProp(o, "baseConfigServices", Kv, o), headerModule_components_initDefineProp(o, "global", Jv, o), headerModule_components_initDefineProp(o, "event", Xv, o), headerModule_components_initDefineProp(o, "actNavServices", Qv, o), headerModule_components_initDefineProp(o, "matchFocusServices", e_, o), o.state = {
                        loginStatus: 0,
                        homePage: 0,
                        darkMode: 1,
                        loaded: !1
                    }, o.getStyleContainer = function (e) {
                        o.styleContainer = e
                    }, headerModule_components_possibleConstructorReturn(o, t)
                }

                return headerModule_components_inherits(Header, e), Header.prototype.componentWillMount = function componentWillMount() {
                    var e = this;
                    this.baseConfigServices.getAnchorRecruitByEpic(), this.actNavServices.getActConfig(), this.matchFocusServices.getMatchFocusData();
                    var t = h.a.check(), o = "home" === this.global.get("headerActiveMenu");
                    this.setState({loginStatus: t, homePage: o}), this.event.load().subscribe(function () {
                        e.setState({loaded: !0}), e.actNavServices.getActConfig(), e.matchFocusServices.getFocusDot(t)
                    }), o && (this.scrollHandle = this.event.register(window, "scroll", {debounce: 100}).subscribe(function () {
                        var t = document.documentElement.scrollTop || document.body.scrollTop;
                        e.setState({darkMode: t < 600})
                    }), this.event.trigger(window, "scroll"))
                }, Header.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    var t = e.actNavConfig, o = (t = void 0 === t ? {} : t).backdrop, r = void 0 === o ? {} : o,
                        n = t.switcher;
                    if ((void 0 === n ? {} : n).backdrop) {
                        var i, a, l, c = (a = (i = r).default, l = i.hover, {
                            defaultColor: a ? "\n        .Header-wrap .Header-menu-link > a,\n        .Header-wrap .public-DropMenu-link,\n        .Header-wrap .public-DropMenu-link ~ svg,\n        .Header-wrap .EntryNav-desc,\n        .Header-wrap .ScheduleNav {\n            color: rgba(" + a.join(",") + ");\n        }\n        " : "",
                            hoverColor: l ? "\n        .Header-wrap .Header-menu-link:hover > a,\n        .Header-wrap .Header-menu-link.active > a,\n        .Header-wrap .Header-menu-link.active svg,\n        .Header-wrap .public-DropMenu-link:hover,\n        .Header-wrap .Header-menu-link.active .public-DropMenu-link,\n        .Header-wrap .public-DropMenu-link:hover ~ svg,\n        .Header-wrap .EntryNav-desc:hover,\n        .Header-wrap .ScheduleNav:hover {\n            color: rgba(" + l.join(",") + ");\n        }\n    " : ""
                        }), s = c.defaultColor, u = c.hoverColor;
                        this.styleContainer.innerHTML = s + u
                    }
                }, Header.prototype.componentWillUnmount = function componentWillUnmount() {
                    this.scrollHandle && this.scrollHandle.unsubscribe()
                }, Header.prototype.render = function render() {
                    var e = this.state, t = e.loginStatus, o = e.homePage, r = e.darkMode, n = this.props,
                        i = n.actNavConfig, a = void 0 === i ? {} : i, l = n.matchFocusData, c = a.switcher,
                        s = void 0 === c ? {} : c, u = a.backdrop, p = void 0 === u ? {} : u, f = a.logo,
                        b = void 0 === f ? {} : f, d = o && r, y = this.state.loaded,
                        m = ["Header-wrap", d && "is-darkMode", s.backdrop && "is-start"].filter(Boolean).join(" "),
                        h = s.backdrop && p.banner && !d ? {background: "rgba(" + p.banner.join(",") + ")"} : null;
                    return ss.a.createElement("div", {
                        className: m,
                        style: h,
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "Header",
                        __self: this
                    }, ss.a.createElement(Mv, {
                        isDarkMode: d,
                        switcher: s,
                        backdrop: p,
                        direction: "left",
                        __self: this
                    }), ss.a.createElement("div", {
                        className: "Header-left",
                        __self: this
                    }, ss.a.createElement(Is, {
                        isDarkMode: d,
                        switcher: s,
                        logo: b,
                        __self: this
                    }), ss.a.createElement("div", {
                        className: "Header-menu-wrap",
                        __self: this
                    }, ss.a.createElement(Su, {
                        actNavConfig: a,
                        __self: this
                    }))), s.entry ? ss.a.createElement(Qm, {
                        actNavConfig: a,
                        __self: this
                    }) : null, l && "{}" !== JSON.stringify(this.props.actNavConfig) && y ? ss.a.createElement(Fv, {
                        matchDetail: l,
                        __self: this
                    }) : null, y && ss.a.createElement("div", {
                        className: "Header-right",
                        __self: this
                    }, ss.a.createElement("div", {
                        className: "Header-search-wrap",
                        __self: this
                    }, ss.a.createElement(Nm, {__self: this})), ss.a.createElement("div", {
                        className: "Header-history-wrap",
                        __self: this
                    }, t ? ss.a.createElement(bp, {
                        type: "History",
                        __self: this
                    }) : null), ss.a.createElement("div", {
                        className: "Header-follow-wrap",
                        __self: this
                    }, ss.a.createElement(bp, {
                        type: "Follow",
                        __self: this
                    })), ss.a.createElement("div", {
                        className: "Header-broadcast-wrap",
                        __self: this
                    }, ss.a.createElement(Tm, {__self: this})), ss.a.createElement("div", {
                        className: "Header-download-wrap",
                        __self: this
                    }, ss.a.createElement(gp, {__self: this})), ss.a.createElement("div", {
                        className: "Header-yubamessage-wrap",
                        __self: this
                    }, t ? ss.a.createElement(Iv, {__self: this}) : null), ss.a.createElement("div", {
                        className: "Header-login-wrap",
                        __self: this
                    }, t ? ss.a.createElement(ky, {
                        actNavConfig: a,
                        __self: this
                    }) : ss.a.createElement(Op, {__self: this}), ss.a.createElement(r_, {
                        name: "GameGift",
                        belongTo: "HeaderApp",
                        __self: this
                    }))), ss.a.createElement(Mv, {
                        isDarkMode: d,
                        switcher: s,
                        backdrop: p,
                        direction: "right",
                        __self: this
                    })), ss.a.createElement(hv, {__self: this}), y && ss.a.createElement(Lm, {__self: this}), ss.a.createElement(fh, {__self: this}), ss.a.createElement(Ev, {__self: this}), ss.a.createElement(Bv, {
                        switcher: s,
                        getStyleContainer: this.getStyleContainer,
                        __self: this
                    }))
                }, Header
            }(ss.a.Component), Kv = headerModule_components_applyDecoratedDescriptor(Zv.prototype, "baseConfigServices", [Gv], {
                enumerable: !0,
                initializer: null
            }), Jv = headerModule_components_applyDecoratedDescriptor(Zv.prototype, "global", [Wv], {
                enumerable: !0,
                initializer: null
            }), Xv = headerModule_components_applyDecoratedDescriptor(Zv.prototype, "event", [Yv], {
                enumerable: !0,
                initializer: null
            }), Qv = headerModule_components_applyDecoratedDescriptor(Zv.prototype, "actNavServices", [$v], {
                enumerable: !0,
                initializer: null
            }), e_ = headerModule_components_applyDecoratedDescriptor(Zv.prototype, "matchFocusServices", [qv], {
                enumerable: !0,
                initializer: null
            }), Vv = Zv)) || Vv), i_ = Object(us.connect)(function mapStateToProps(e) {
                return {actNavConfig: e.actNavConfig, matchFocusData: e.matchFocusData}
            })(n_), a_ = n.a.StoreFactory, l_ = n.a.createApp({
                name: "HeaderApp", providers: [{
                    name: "component", useFactory: function useFactory() {
                        return i_
                    }
                }, {
                    name: "store", useFactory: function useFactory() {
                        return a_.getInstance(window.__INITIAL_STATE__, ls, vc)
                    }
                }]
            });
        i.DataCenter.event.load().subscribe(function () {
            var e = new l_;
            window.HeaderApp = e, e.push = function (t) {
                return e.registerApp.apply(e, t)
            }, n.a.render(e, document.getElementById("js-header"))
        }), o.d(t, "CommonDataServices", function () {
            return Rt
        })
    }, "6262a": function (e, t, o) {
    }, 66218: function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/7_3f08612.png"
    }, "7024a": function (e, t, o) {
    }, 79618: function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/default-pic_09083b0.png"
    }, "7a9cd": function (e, t, o) {
    }, "7ccef": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/3_08757b6.png"
    }, "80ba1": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/sg_zoom_error_9749c86.png"
    }, "820d2": function (e, t, o) {
    }, 82543: function (e, t, o) {
    }, "838dc": function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/5_8c4629c.png"
    }, 86962: function (e, t) {
        e.exports = vendorb74966ba39e6c70fa608
    }, b2f4b: function (e, t, o) {
    }, b32b8: function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/1_0272d9e.png"
    }, b72af: function (e, t, o) {
    }, bac8f: function (e, t, o) {
    }, bc1bc: function (e, t, o) {
    }, cc20d: function (e, t, o) {
    }, cfe5e: function (e, t, o) {
    }, d570a: function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/6_32be5ec.png"
    }, d57f7: function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/2_73d8774.png"
    }, dc648: function (e, t, o) {
    }, e4932: function (e, t, o) {
    }, e5241: function (e, t, o) {
    }, f0f6a: function (e, t, o) {
    }
}, [[1, 0, 1, 2, 3]]]);
//# sourceMappingURL=http://fedci.dz11.com:4567/list/online/sourcemaps/header_b069ddb.js.map