(window.shark_list_jsonp = window.shark_list_jsonp || []).push([[3], {
    "00d1b": function (e, t, r) {
        e.exports = r("1c767")("368f5")
    }, "04443": function (e, t, r) {
        e.exports = r("86962")("83406")
    }, "074d1": function (e, t, r) {
        e.exports = r("1c767")("bcfe5")
    }, "0861a": function (e, t, r) {
        e.exports = r("1c767")("ba55e")
    }, "09446": function (e, t, r) {
        e.exports = r("1c767")("6020e")
    }, "0ee47": function (e, t, r) {
        e.exports = r("1c767")("698d7")
    }, "104af": function (e, t, r) {
        e.exports = r("1c767")("b2b3f")
    }, "17b02": function (e, t, r) {
        e.exports = r("1c767")("f594f")
    }, "1a22b": function (e, t, r) {
        e.exports = r("1c767")("8af19")
    }, "22c57": function (e, t, r) {
        e.exports = r("1c767")("43fb7")
    }, 26464: function (e, t, r) {
        e.exports = r("1c767")("76be8")
    }, 29218: function (e, t, r) {
        e.exports = r("1c767")("8a2d1")
    }, "2f135": function (e, t, r) {
        e.exports = r("1c767")("38686")
    }, "304af": function (e, t, r) {
        e.exports = r("1c767")("d74cd")
    }, 31031: function (e, t, r) {
        e.exports = r("1c767")("cfb79")
    }, "37f07": function (e, t, r) {
        e.exports = r("1c767")("c7364")
    }, "3836f": function (e, t, r) {
        e.exports = r("1c767")("3a76a")
    }, "3b6ec": function (e, t, r) {
        e.exports = r("1c767")("63f14")
    }, "3b947": function (e, t, r) {
        "use strict";
        r.d(t, "k", function () {
            return n
        }), r.d(t, "e", function () {
            return i
        }), r.d(t, "g", function () {
            return a
        }), r.d(t, "h", function () {
            return c
        }), r.d(t, "a", function () {
            return u
        }), r.d(t, "d", function () {
            return l
        }), r.d(t, "c", function () {
            return s
        }), r.d(t, "f", function () {
            return p
        }), r.d(t, "b", function () {
            return f
        }), r.d(t, "i", function () {
            return d
        }), r.d(t, "j", function () {
            return b
        });
        var o = r("58638");

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var n = "CUSTOM_GROUP_UPDATE_DATA", i = "CUSTOM_GROUP_CLOSE_MODAL", a = "CUSTOM_GROUP_GET_GROUP_LIST",
            c = "CUSTOM_GROUP_GET_PURE_GROUP_LIST", u = "CUSTOM_GROUP_ADD_GROUP", l = "CUSTOM_GROUP_ADD_TO_GROUPS",
            s = "CUSTOM_GROUP_ADD_SPECIAL", p = "CUSTOM_GROUP_DEL_SPECIAL", f = "CUSTOM_GROUP_ADD_ROOMS_TO_GROUP",
            d = "CUSTOM_GROUP_REMOVE_ROOMS_FROM_GROUP", b = "CUSTOM_GROUP_REMOVE_ROOM_FROM_GROUPS", m = function (e) {
                function CustomGroupAction() {
                    return function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, CustomGroupAction), function _possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return _inherits(CustomGroupAction, e), CustomGroupAction.update = function update(e) {
                    return {type: n, payload: e}
                }, CustomGroupAction.closeDialog = function closeDialog() {
                    return {type: i}
                }, CustomGroupAction.getGroupList = function getGroupList(e) {
                    return {type: a, payload: e}
                }, CustomGroupAction.getPureGroupList = function getPureGroupList() {
                    return {type: c}
                }, CustomGroupAction.addGroup = function addGroup(e) {
                    return {type: u, payload: e}
                }, CustomGroupAction.addToGroups = function addToGroups(e) {
                    return {type: l, payload: e}
                }, CustomGroupAction.addRoomsToGroup = function addRoomsToGroup(e) {
                    return {type: f, payload: e}
                }, CustomGroupAction.addSpecial = function addSpecial(e) {
                    return {type: s, payload: e}
                }, CustomGroupAction.delSpecial = function delSpecial(e) {
                    return {type: p, payload: e}
                }, CustomGroupAction.removeRoomsFromGroup = function removeRoomsFromGroup(e) {
                    return {type: d, payload: e}
                }, CustomGroupAction.removeRoomFromGroups = function removeRoomFromGroups(e) {
                    return {type: b, payload: e}
                }, CustomGroupAction.default = function _default() {
                    return {type: "CUSTOM_GROUP_DEFAULT_OPERAT"}
                }, CustomGroupAction
            }(o.Action);
        t.l = m
    }, "3cabc": function (e, t, r) {
        e.exports = r("1c767")("3d39e")
    }, "447d8": function (e, t, r) {
        e.exports = r("1c767")("0a81c")
    }, 45156: function (e, t, r) {
        e.exports = r("1c767")("db60f")
    }, "4a826": function (e, t, r) {
        e.exports = r("1c767")("a6152")
    }, "4df59": function (e, t, r) {
        e.exports = r("1c767")("8ea98")
    }, "54e7d": function (e, t, r) {
        e.exports = r("1c767")("8759a")
    }, "57abc": function (e, t, r) {
        "use strict";
        var o, n, i, a, c, u, l, s, p, f = r("58638"), d = r("7ca7d"), b = r.n(d), m = r("eb3e2"), y = r("83292"),
            h = r.n(y), v = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            };

        function _initDefineProp(e, t, r, o) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(o) : void 0
            })
        }

        function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function _applyDecoratedDescriptor(e, t, r, o, n) {
            var i = {};
            return Object.keys(o).forEach(function (e) {
                i[e] = o[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce(function (r, o) {
                return o(e, t, r) || r
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var g = b.a.Store, _ = b.a.Service,
            O = (o = g(), n = _(m.DataCenter.global), i = _(m.DataCenter.cookie), a = _(m.DataCenter.localStorage), c = function (e) {
                function RoomListServices() {
                    var t, r;
                    !function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, RoomListServices);
                    for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return t = r = _possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), _initDefineProp(r, "store", u, r), _initDefineProp(r, "global", l, r), _initDefineProp(r, "cookie", s, r), _initDefineProp(r, "localStorage", p, r), _possibleConstructorReturn(r, t)
                }

                return _inherits(RoomListServices, e), RoomListServices.prototype.getStream = function getStream(e) {
                    var t = this, r = e.rid;
                    if (r) {
                        var o = Date.parse(new Date) / 1e3, n = this.global.get("USER_INFO.uid") || 0,
                            i = this.cookie.get("did") || "", a = this.localStorage.get("player_storage_cdn_h5p_room"),
                            c = this.localStorage.get("rateRecordTime_h5p_room") >= 3 ? 1 : 0,
                            u = this.localStorage.get("realRateModel_h5p_room") || -1,
                            l = h()(r + "#" + o).toString().slice(-16),
                            s = v({tt: o, uid: n, did: i, ive: c, rate: u, sign: l}, a ? {cdn: a} : {});
                        m.httpClient.post(String, "/lapi/live/getH5Preload/" + r, s, {headers: {"content-type": "application/x-www-form-urlencoded"}}).subscribe(function (e) {
                            var r = e.error, o = e.data;
                            if (0 === +r) {
                                var n = o ? f.GSON.parse(o) : {};
                                t.localStorage.set("h5StreamPreload_h5p_room", n, 120)
                            }
                        })
                    }
                }, RoomListServices
            }(f.Service), u = _applyDecoratedDescriptor(c.prototype, "store", [o], {
                enumerable: !0,
                initializer: null
            }), l = _applyDecoratedDescriptor(c.prototype, "global", [n], {
                enumerable: !0,
                initializer: null
            }), s = _applyDecoratedDescriptor(c.prototype, "cookie", [i], {
                enumerable: !0,
                initializer: null
            }), p = _applyDecoratedDescriptor(c.prototype, "localStorage", [a], {
                enumerable: !0,
                initializer: null
            }), c);
        t.a = O
    }, "5a155": function (e, t, r) {
        e.exports = r("1c767")("0d2a9")
    }, "5da8e": function (e, t, r) {
        e.exports = r("1c767")("25ca4")
    }, "60e77": function (e, t, r) {
        e.exports = r("1c767")("19a03")
    }, "621f1": function (e, t, r) {
        e.exports = r("1c767")("20847")
    }, "6fc3d": function (e, t, r) {
        e.exports = r("1c767")("5751b")
    }, "7018b": function (e, t, r) {
    }, "7313d": function (e, t, r) {
        e.exports = r("86962")("277cf")
    }, "73c21": function (e, t, r) {
        e.exports = r("1c767")("4644e")
    }, "748d2": function (e, t, r) {
        e.exports = r("1c767")("980ef")
    }, "770eb": function (e, t, r) {
        e.exports = r("1c767")("9a554")
    }, 79814: function (e, t, r) {
        "use strict";
        var o, n, i, a = r("58638"), c = r("83292"), u = r.n(c), l = r("7ca7d"), s = r.n(l), p = r("96089"),
            f = r("8a82b"), d = r("9b0dc"), b = r("eb3e2"), m = r("fc794"), y = r.n(m), h = r("722b8");
        r("37e3a");

        function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var v = s.a.Service, g = b.DataCenter.global.get("$SYS.stream_url") || "https://playweb.douyucdn.cn/",
            _ = (o = v(b.DataCenter.cookie), n = function (e) {
                function ListCommonServices() {
                    var t, r;
                    !function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, ListCommonServices);
                    for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
                    return t = r = _possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), function _initDefineProp(e, t, r, o) {
                        r && Object.defineProperty(e, t, {
                            enumerable: r.enumerable,
                            configurable: r.configurable,
                            writable: r.writable,
                            value: r.initializer ? r.initializer.call(o) : void 0
                        })
                    }(r, "cookie", i, r), _possibleConstructorReturn(r, t)
                }

                return _inherits(ListCommonServices, e), ListCommonServices.prototype.getVideoHls = function getVideoHls(e, t) {
                    var r = this.cookie.get("did") || "", o = (new Date).getTime(), n = u()(String(e) + o).toString(),
                        i = g + "lapi/live/hlsH5Preview/" + e,
                        a = {rid: e, time: o, auth: n, "Content-Type": "application/x-www-form-urlencoded"},
                        c = {rid: e, did: r},
                        l = navigator.appVersion.indexOf("MSIE") > 0 || navigator.appVersion.indexOf("Trident/7.0") > 0,
                        s = -1 !== [405, 422, 441, 447, 435].indexOf(t);
                    return l || s ? Object(p.of)({
                        error: 1,
                        msg: "\u5f53\u524d\u5206\u533a\u6216\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u89c6\u9891\u9884\u89c8"
                    }) : Object(f.fromPromise)(new Promise(function (t, r) {
                        e > 0 ? b.httpClient.post(String, i, c, {headers: a, noXReq: !0}).subscribe(function (e) {
                            var r = e.error, o = e.data;
                            if (0 === Number(r)) {
                                var n = "string" === typeof o ? JSON.parse(o) : o, i = n.rtmp_live,
                                    a = void 0 === i ? "" : i, c = n.room_id, u = void 0 === c ? 0 : c, l = n.rtmp_url;
                                t({error: r, videoSrc: l + "/" + a, videoId: u})
                            } else t({error: r})
                        }) : r(new Error("rid\u4e0d\u5408\u6cd5"))
                    }))
                }, ListCommonServices.prototype.checkFollow = function checkFollow(e) {
                    var t = "/room/follow/check/" + e;
                    return Object(f.fromPromise)(new Promise(function (r, o) {
                        e > 0 ? b.httpClient.get(String, t, null, {noCache: !0}).subscribe(function (e) {
                            r(e)
                        }) : o(new Error("rid\u4e0d\u5408\u6cd5"))
                    }))
                }, ListCommonServices.prototype.reqFollow = function reqFollow(e) {
                    if (!y.a.check()) return y.a.show(), Object(p.of)({error: -1});
                    var t = "/room/follow/add_confuse/" + e;
                    return Object(f.fromPromise)(new Promise(function (r, o) {
                        e > 0 ? b.httpClient.post(String, t, Object(d.stringify)({room_id: e})).subscribe(function (e) {
                            e && 2 === e.error && h.a.info(e.msg), r(e)
                        }) : o(new Error("rid\u4e0d\u5408\u6cd5"))
                    }))
                }, ListCommonServices
            }(a.Service), i = function _applyDecoratedDescriptor(e, t, r, o, n) {
                var i = {};
                return Object.keys(o).forEach(function (e) {
                    i[e] = o[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce(function (r, o) {
                    return o(e, t, r) || r
                }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }(n.prototype, "cookie", [o], {enumerable: !0, initializer: null}), n);
        t.a = _
    }, "7ba92": function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n
        });
        var o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n = function formatOnline(e) {
            var t = "undefined" === typeof e ? "undefined" : o(e), r = +e;
            return "string" !== t && "number" !== t ? "" : r ? r <= 0 ? 0 : r < 1e4 ? Math.round(r) : r < 1e8 ? Math.round(r / 1e4 * 10) / 10 + "\u4e07" : Math.round(r / 1e8 * 10) / 10 + "\u4ebf" : e
        }
    }, "7d66c": function (e, t, r) {
        e.exports = r("1c767")("85bd3")
    }, "7ee67": function (e, t, r) {
        e.exports = r("1c767")("c5150")
    }, 83292: function (e, t, r) {
        e.exports = r("86962")("2a973")
    }, "8a82b": function (e, t, r) {
        e.exports = r("1c767")("f57e5")
    }, "8c110": function (e, t, r) {
        e.exports = r("1c767")("ab109")
    }, "94d43": function (e, t, r) {
        e.exports = r("1c767")("f2ac4")
    }, 96089: function (e, t, r) {
        e.exports = r("1c767")("c9c82")
    }, "9a655": function (e, t, r) {
        e.exports = r("1c767")("a6646")
    }, "9b0dc": function (e, t, r) {
        e.exports = r("1c767")("a63b0")
    }, a0161: function (e, t, r) {
        e.exports = r("1c767")("ed531")
    }, ac24d: function (e, t, r) {
        e.exports = r("1c767")("1e152")
    }, aca43: function (e, t, r) {
        e.exports = r("1c767")("41bad")
    }, b0067: function (e, t, r) {
        e.exports = r("1c767")("86f8b")
    }, b1219: function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return o
        });
        var o = function () {
            function DateFormat() {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, DateFormat)
            }

            return DateFormat.isDate = function isDate(e) {
                return "[object Date]" === {}.toString.call(e)
            }, DateFormat.formatDate = function formatDate(e, t) {
                if (!DateFormat.isDate(e)) return e;
                var r = [{key: "M+", val: e.getMonth() + 1}, {key: "d+", val: e.getDate()}, {
                    key: "h+",
                    val: e.getHours()
                }, {key: "m+", val: e.getMinutes()}, {key: "s+", val: e.getSeconds()}, {
                    key: "q+",
                    val: Math.floor((e.getMonth() + 3) / 3)
                }, {key: "S", val: e.getMilliseconds()}], o = t;
                return /(y+)/.test(o) && (o = o.replace(RegExp.$1, ("" + e.getFullYear()).substr(4 - RegExp.$1.length))), r.forEach(function (e) {
                    new RegExp("(" + e.key + ")").test(o) && (o = o.replace(RegExp.$1, 1 === RegExp.$1.length ? e.val : ("00" + e.val).substr(("" + e.val).length)))
                }), o
            }, DateFormat.formatSecond = function formatSecond(e, t) {
                if ("number" !== typeof e || "string" !== typeof t) return e;

                function fill(e) {
                    return e < 10 ? "0" + e : e
                }

                var r = e % 60, o = e - r, n = "", i = "", a = t;
                return /h/.test(t) ? (i = Math.floor(o % 3600), n = Math.floor(e / 3600), a = a.replace(/h+/i, fill(n))) : /s/.test(t) && (i = Math.floor(o / 60)), a.replace(/m+/g, fill(i)).replace(/s+/g, fill(r))
            }, DateFormat
        }()
    }, b66a4: function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return o
        });
        var o = function () {
            function DomHelper() {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, DomHelper)
            }

            return DomHelper.find = function find(e) {
                return document.querySelector(e)
            }, DomHelper.findAll = function findAll(e) {
                return document.querySelectorAll(e)
            }, DomHelper.getStyle = function getStyle(e, t) {
                return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null)[t]
            }, DomHelper.getElementOffset = function getElementOffset(e) {
                var t = e;
                if ("string" === typeof e && (t = DomHelper.find(e)), !t.getBoundingClientRect) return null;
                var r = document.documentElement, o = document.body, n = t.getBoundingClientRect(),
                    i = r.clientTop || o.clientTop || 0, a = r.clientLeft || o.clientLeft || 0,
                    c = window.pageYOffset || r.scrollTop, u = window.pageXOffset || r.scrollLeft;
                return {top: n.top + (c - i), left: n.left + (u - a)}
            }, DomHelper.getPositionByRef = function getPositionByRef(e) {
                if (!e.getBoundingClientRect) return null;
                for (var t = e.getBoundingClientRect(), r = 0, o = 0, n = e; n && "BODY" !== n.tagName;) r += n.offsetTop, o += n.offsetLeft, n = n.offsetParent;
                var i = o;
                return {top: r, left: i, bottom: r + t.height, right: i + t.width}
            }, DomHelper
        }()
    }, b9730: function (e, t, r) {
        "use strict";
        var o, n, i, a, c, u = r("58638"), l = r("7ca7d"), s = r.n(l), p = r("eb3e2"), f = r("db47a"), d = r("3b947"),
            b = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            };

        function _initDefineProp(e, t, r, o) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(o) : void 0
            })
        }

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function _applyDecoratedDescriptor(e, t, r, o, n) {
            var i = {};
            return Object.keys(o).forEach(function (e) {
                i[e] = o[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce(function (r, o) {
                return o(e, t, r) || r
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var m = s.a.Store, y = s.a.Service, h = "CustomGroupTitleNotify_",
            v = (o = m(), n = y(p.DataCenter.global), i = function (e) {
                function CustomGroupServices() {
                    !function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, CustomGroupServices);
                    var t = function _possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return _initDefineProp(t, "store", a, t), _initDefineProp(t, "global", c, t), t.toastTimer = null, t
                }

                return _inherits(CustomGroupServices, e), CustomGroupServices.prototype.getTitleNotifyCache = function getTitleNotifyCache() {
                    var e = this.global.get("USER_INFO.uid");
                    return !!function getLocalStorage(e) {
                        return p.DataCenter.localStorage.get(e)
                    }("" + h + e)
                }, CustomGroupServices.prototype.setTitleNotifyCache = function setTitleNotifyCache(e) {
                    var t = this.global.get("USER_INFO.uid");
                    !function setLocalStorage(e, t, r) {
                        p.DataCenter.localStorage.set(e, t, r)
                    }("" + h + t, e, 31536e3)
                }, CustomGroupServices.prototype.close = function close() {
                    this.store.dispatch(d.l.closeDialog())
                }, CustomGroupServices.prototype.update = function update(e) {
                    this.store.dispatch(d.l.update(b({}, e)))
                }, CustomGroupServices.prototype.showGroupSetting = function showGroupSetting() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = (e.roomId, e.isBranch), o = void 0 !== r && r, n = (e.rids, e.gid, e.from);
                    o ? this.getPureGroupList() : this.getGroupList(e.roomId);
                    var i = !1, a = this.getTitleNotifyCache();
                    "undefined" !== typeof a && (i = a), this.store.dispatch(d.l.update(b({
                        visible: !0,
                        isBranch: o,
                        closeNotify: i
                    }, e)));
                    var c = "";
                    "follow_page" === n && (c = "130100C08"), "room_page" === n && (c = "13010021H"), c && Object(f.dysub2)({
                        action_code: c,
                        event_id: 3,
                        type: 1,
                        ext: b({}, t)
                    })
                }, CustomGroupServices.prototype.getGroupList = function getGroupList(e) {
                    this.store.dispatch(d.l.getGroupList({rid: e}))
                }, CustomGroupServices.prototype.getPureGroupList = function getPureGroupList() {
                    this.store.dispatch(d.l.getPureGroupList())
                }, CustomGroupServices.prototype.addGroup = function addGroup(e) {
                    this.store.dispatch(d.l.addGroup(e))
                }, CustomGroupServices.prototype.addToGroups = function addToGroups(e) {
                    this.store.dispatch(d.l.addToGroups(e))
                }, CustomGroupServices.prototype.addRoomsToGroup = function addRoomsToGroup(e) {
                    this.store.dispatch(d.l.addRoomsToGroup(e))
                }, CustomGroupServices.prototype.addSpecial = function addSpecial(e) {
                    this.store.dispatch(d.l.addSpecial({rid: e}))
                }, CustomGroupServices.prototype.delSpecial = function delSpecial(e) {
                    this.store.dispatch(d.l.delSpecial({rid: e}))
                }, CustomGroupServices.prototype.removeFromGroup = function removeFromGroup(e) {
                    this.store.dispatch(d.l.removeRoomsFromGroup(e))
                }, CustomGroupServices.prototype.removeFromGroups = function removeFromGroups(e) {
                    this.store.dispatch(d.l.removeRoomFromGroups(e))
                }, CustomGroupServices
            }(u.Service), a = _applyDecoratedDescriptor(i.prototype, "store", [o], {
                enumerable: !0,
                initializer: null
            }), c = _applyDecoratedDescriptor(i.prototype, "global", [n], {enumerable: !0, initializer: null}), i);
        t.a = v
    }, c0090: function (e, t, r) {
        e.exports = r("1c767")("b8540")
    }, c1f2c: function (e, t, r) {
        e.exports = r("86962")("5ef9d")
    }, c8aea: function (e, t, r) {
        e.exports = r("1c767")("89992")
    }, ca1c3: function (e, t, r) {
        "use strict";
        var o, n = r("770a3"), i = r("1a22b"), a = r.n(i), c = r("722b8"), u = r("54992"),
            l = (r("d34d9"), "/shark/live/src/common/components/ListPagination/ListPagination.js");

        function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var s = function isInteger(e) {
            return Math.floor(e) === e
        }, p = Object(u.log)(o = function (e) {
            function ListPagination() {
                var t, r;
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, ListPagination);
                for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                return t = r = _possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), r.inputElem = null, r.handleClick = function () {
                    var e = r.inputElem, t = r.props, o = t.total, n = (t.current, t.onChange);
                    if (e) {
                        var i = Number(e.value);
                        s(i) && i > 0 && i <= o ? n(i) : c.a.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9875\u7801\uff01")
                    }
                }, r.handleKeyDown = function (e) {
                    13 === e.keyCode && r.handleClick()
                }, _possibleConstructorReturn(r, t)
            }

            return _inherits(ListPagination, e), ListPagination.prototype.render = function render() {
                var e = this, t = this.props, r = t.total, o = t.current, i = t.onChange;
                return r < 2 ? "" : a.a.createElement("div", {
                    className: "ListFooter",
                    __source: {fileName: l, lineNumber: 48},
                    __self: this
                }, a.a.createElement(n.a, {
                    current: o,
                    total: r,
                    pageSize: 1,
                    onChange: i,
                    preNextOptions: ["\u4e0a\u4e00\u9875", "\u4e0b\u4e00\u9875"],
                    customClass: "ListPagination",
                    __source: {fileName: l, lineNumber: 49},
                    __self: this
                }), a.a.createElement("span", {
                    className: "ListFooter-btn",
                    __source: {fileName: l, lineNumber: 57},
                    __self: this
                }, "\u8df3\u8f6c\u5230:", a.a.createElement("span", {
                    className: "ListFooter-btn-wrap",
                    __source: {fileName: l, lineNumber: 59},
                    __self: this
                }, a.a.createElement("input", {
                    className: "ListFooter-btn-input", type: "text", ref: function ref(t) {
                        e.inputElem = t
                    }, onKeyDown: this.handleKeyDown, __source: {fileName: l, lineNumber: 60}, __self: this
                }), a.a.createElement("span", {
                    className: "ListFooter-btn-label",
                    onClick: this.handleClick,
                    __source: {fileName: l, lineNumber: 66},
                    __self: this
                }, "GO"))))
            }, ListPagination
        }(a.a.Component)) || o;
        t.a = p
    }, d2d7b: function (e, t, r) {
        "use strict";
        var o = r("1a22b"), n = r.n(o), i = r("7ca7d"), a = r.n(i), c = r("eb3e2"), u = r("7912b"),
            l = "/shark/live/src/common/components/BannerAd/empty.js";

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var s = function (e) {
                function ActivityItemEmpty() {
                    return function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, ActivityItemEmpty), function _possibleConstructorReturn(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
                }

                return _inherits(ActivityItemEmpty, e), ActivityItemEmpty.prototype.render = function render() {
                    return this.props.placeHolder ? n.a.createElement("div", {
                        className: "layout-Banner-container",
                        __source: {fileName: l, lineNumber: 11},
                        __self: this
                    }, n.a.createElement(u.b, {
                        className: "list-Banner-empty",
                        src: "https://shark2.douyucdn.cn/front-publish/sdk-file-master/list_banner_adv_empty_312a6ee.png",
                        alt: "\u5e7f\u544a\u56fe\u7247",
                        __source: {fileName: l, lineNumber: 12},
                        __self: this
                    })) : ""
                }, ActivityItemEmpty
            }(n.a.Component), p = r("e92f2"), f = r.n(p), d = r("770d6"),
            b = (r("3c4e2"), "/shark/live/src/common/components/BannerAd/base.js");

        function base_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function base_defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        var m, y, h, v, g, _ = function (e) {
            function BaseAd() {
                return function base_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, BaseAd), function base_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return base_inherits(BaseAd, e), BaseAd.prototype.render = function render() {
                var e = this.state, t = e.exConfig, r = void 0 === t ? {} : t, o = e.link, i = e.src, a = r.innerlink,
                    c = "";
                return a && 1 === parseInt(a, 10) && (c = "bannerAd-adBox"), n.a.createElement("div", {
                    className: "layout-Banner-container " + c,
                    __source: {fileName: b, lineNumber: 19},
                    __self: this
                }, n.a.createElement(d.SignTemplate, {
                    src: i,
                    link: o,
                    EC: r,
                    handleShowSign: this.handleShowSign,
                    handleClickSign: this.handleClickSign,
                    __source: {fileName: b, lineNumber: 20},
                    __self: this
                }))
            }, BaseAd
        }(f.a), O = (r("7018b"), "/shark/live/src/common/components/BannerAd/BannerAd.js");

        function _initDefineProp(e, t, r, o) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(o) : void 0
            })
        }

        function BannerAd_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function BannerAd_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function BannerAd_defaults(e, t) {
                for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                    var n = r[o], i = Object.getOwnPropertyDescriptor(t, n);
                    i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
                }
                return e
            }(e, t))
        }

        function _applyDecoratedDescriptor(e, t, r, o, n) {
            var i = {};
            return Object.keys(o).forEach(function (e) {
                i[e] = o[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce(function (r, o) {
                return o(e, t, r) || r
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var C = a.a.Region, S = a.a.Service,
            w = (m = S(c.DataCenter.common), y = S(c.DataCenter.global), h = function (e) {
                function BannerAd() {
                    var t, r;
                    !function BannerAd_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, BannerAd);
                    for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return t = r = BannerAd_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))), _initDefineProp(r, "common", v, r), _initDefineProp(r, "global", g, r), r.state = {
                        showPlaceHolder: !1,
                        hideAd: !0
                    }, BannerAd_possibleConstructorReturn(r, t)
                }

                return BannerAd_inherits(BannerAd, e), BannerAd.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.common.get("adDataReady").subscribe(function () {
                        var t = e.global.get("pageAdvar") || {}, r = e.props.ids, o = 0;
                        (void 0 === r ? [] : r).forEach(function (e) {
                            t[e] && (o += 1)
                        }), o >= 1 && e.setState({showPlaceHolder: !0, hideAd: !1})
                    })
                }, BannerAd.prototype.render = function render() {
                    var e = this, t = this.state, r = t.showPlaceHolder, o = t.hideAd, i = this.props, a = i.className,
                        c = void 0 === a ? "list-Banner-adv" : a, u = i.name, l = void 0 === u ? "sign" : u,
                        p = i.belongTo, f = i.ids, d = (void 0 === f ? [] : f).slice(0, 2);
                    return o ? null : n.a.createElement("section", {
                        className: "layout-Banner",
                        __source: {fileName: O, lineNumber: 47},
                        __self: this
                    }, d.map(function (t) {
                        return n.a.createElement("div", {
                            className: "layout-Banner-item",
                            key: t,
                            __source: {fileName: O, lineNumber: 50},
                            __self: e
                        }, n.a.createElement(C, {
                            className: c,
                            name: l,
                            belongTo: p,
                            data: {
                                id: t, viewRender: function viewRender() {
                                    return n.a.createElement(_, {
                                        data: {id: t},
                                        __source: {fileName: O, lineNumber: 57},
                                        __self: e
                                    })
                                }, cleanRender: function cleanRender() {
                                    return n.a.createElement(s, {
                                        placeHolder: r,
                                        __source: {fileName: O, lineNumber: 58},
                                        __self: e
                                    })
                                }
                            },
                            __source: {fileName: O, lineNumber: 51},
                            __self: e
                        }))
                    }))
                }, BannerAd
            }(n.a.Component), v = _applyDecoratedDescriptor(h.prototype, "common", [m], {
                enumerable: !0,
                initializer: null
            }), g = _applyDecoratedDescriptor(h.prototype, "global", [y], {enumerable: !0, initializer: null}), h);
        t.a = w
    }, d3461: function (e, t, r) {
        e.exports = r("1c767")("0b47a")
    }, d34d9: function (e, t, r) {
    }, d4a4f: function (e, t, r) {
        e.exports = r("1c767")("7e5be")
    }, e5846: function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return o
        });
        var o = "LEFT_MENU_STATE$"
    }, eb4d3: function (e, t, r) {
        "use strict";
        var o, n, i, a, c, u = r("7ca7d"), l = r.n(u), s = r("eb3e2"), p = r("722b8"), f = r("96089"), d = r("f6898");

        function _initDefineProp(e, t, r, o) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(o) : void 0
            })
        }

        function _applyDecoratedDescriptor(e, t, r, o, n) {
            var i = {};
            return Object.keys(o).forEach(function (e) {
                i[e] = o[e]
            }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce(function (r, o) {
                return o(e, t, r) || r
            }, i), n && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(n) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
        }

        var b = l.a.Service,
            m = (o = b(s.DataCenter.global), n = b(s.DataCenter.cookie), a = _applyDecoratedDescriptor((i = function CSRFCookie() {
                var e = this;
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, CSRFCookie), _initDefineProp(this, "globalData", a, this), _initDefineProp(this, "cookie", c, this), this.getCSRFCookie = function (t) {
                    var r = e.globalData.get("$SYS.tn"), o = e.globalData.get("$SYS.tvk"), n = e.cookie.get(o);
                    return n ? Object(f.of)({
                        name: r,
                        value: n,
                        payload: t
                    }) : s.httpClient.get(s.Empty, "/curl/csrfApi/getCsrfCookie", {}, {noCache: !0}).pipe(Object(d.map)(function (n) {
                        if (0 === +n.error) {
                            var i = e.cookie.get(o);
                            if (i) return {name: r, value: i, payload: t}
                        } else p.a.error("\u670d\u52a1\u5668\u9519\u8bef");
                        return {}
                    }))
                }
            }).prototype, "globalData", [o], {
                enumerable: !0,
                initializer: null
            }), c = _applyDecoratedDescriptor(i.prototype, "cookie", [n], {enumerable: !0, initializer: null}), i);
        t.a = (new m).getCSRFCookie
    }, eeb07: function (e, t, r) {
        e.exports = r("1c767")("5371a")
    }, f0698: function (e, t, r) {
        e.exports = r("1c767")("def2f")
    }, f5ecb: function (e, t, r) {
        e.exports = r("1c767")("24b91")
    }, f6898: function (e, t, r) {
        e.exports = r("1c767")("53a00")
    }, fb778: function (e, t, r) {
        e.exports = r("1c767")("db392")
    }
}]);
//# sourceMappingURL=http://fedci.dz11.com:4567/list/online/sourcemaps/common_b714670.js.map