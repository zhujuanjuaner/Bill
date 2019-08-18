!function (c) {
    function e(e) {
        for (var t, n, r = e[0], o = e[1], i = 0, a = []; i < r.length; i++) n = r[i], s[n] && a.push(s[n][0]), s[n] = 0;
        for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (c[t] = o[t]);
        for (u && u(e); a.length;) a.shift()()
    }

    var n = {}, f = {1: 0}, s = {1: 0};

    function d(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {i: e, l: !1, exports: {}};
        return c[e].call(t.exports, t, t.exports, d), t.l = !0, t.exports
    }

    d.e = function (l) {
        var e = [];
        f[l] ? e.push(f[l]) : 0 !== f[l] && {
            0: 1,
            2: 1,
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1
        }[l] && e.push(f[l] = new Promise(function (e, r) {
            for (var t = l + ".style.a51d5c6b51.css", o = d.p + t, n = document.getElementsByTagName("link"), i = 0; i < n.length; i++) {
                var a = (s = n[i]).getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (a === t || a === o)) return e()
            }
            var c = document.getElementsByTagName("style");
            for (i = 0; i < c.length; i++) {
                var s;
                if ((a = (s = c[i]).getAttribute("data-href")) === t || a === o) return e()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet", u.type = "text/css", u.onload = e, u.onerror = function (e) {
                var t = e && e.target && e.target.src || o,
                    n = new Error("Loading CSS chunk " + l + " failed.\n(" + t + ")");
                n.request = t, delete f[l], u.parentNode.removeChild(u), r(n)
            }, u.href = o, document.getElementsByTagName("head")[0].appendChild(u)
        }).then(function () {
            f[l] = 0
        }));
        var n = s[l];
        if (0 !== n) if (n) e.push(n[2]); else {
            var t = new Promise(function (e, t) {
                n = s[l] = [e, t]
            });
            e.push(n[2] = t);
            var r, i = document.createElement("script");
            i.charset = "utf-8", i.timeout = 120, d.nc && i.setAttribute("nonce", d.nc), i.src = function (e) {
                return d.p + "" + ({}[e] || e) + ".bundle.a51d5c6.js"
            }(l), r = function (e) {
                i.onerror = i.onload = null, clearTimeout(a);
                var t = s[l];
                if (0 !== t) {
                    if (t) {
                        var n = e && ("load" === e.type ? "missing" : e.type), r = e && e.target && e.target.src,
                            o = new Error("Loading chunk " + l + " failed.\n(" + n + ": " + r + ")");
                        o.type = n, o.request = r, t[1](o)
                    }
                    s[l] = void 0
                }
            };
            var a = setTimeout(function () {
                r({type: "timeout", target: i})
            }, 12e4);
            i.onerror = i.onload = r, document.head.appendChild(i)
        }
        return Promise.all(e)
    }, d.m = c, d.c = n, d.d = function (e, t, n) {
        d.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, d.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, d.t = function (t, e) {
        if (1 & e && (t = d(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (d.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) d.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, d.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return d.d(t, "a", t), t
    }, d.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, d.p = "//msgstatic.douyucdn.cn/", d.oe = function (e) {
        throw console.error(e), e
    };
    var t = window.webpackJsonp = window.webpackJsonp || [], r = t.push.bind(t);
    t.push = e, t = t.slice();
    for (var o = 0; o < t.length; o++) e(t[o]);
    var u = r;
    d(d.s = 240)
}([function (e, t, n) {
    e.exports = n(17)(1)
}, function (e, t, n) {
    "use strict";
    var r = n(94), o = n(199), h = n(5), g = n(37), i = n(34), b = n.n(i), a = n(79), v = n.n(a),
        y = function (e, t, n) {
            if (!v.a.isSupported || "granted" !== v.a.permission) return !1;
            v()("新消息", {
                body: "".concat(e, " \n\n ").concat(t, " "),
                icon: n || "https://www.douyu.com/favicon.ico",
                tag: "imNotify",
                renotify: !0
            })
        }, S = function (e) {
            if (!v.a.isSupported || "granted" !== v.a.permission) return !1;
            var t = e.getState().chatList || {}, r = e.getState().groupStore.groupStore || {},
                o = e.getState().userStore.userStore || {}, n = t.chatList || [], i = e.getState().friendList.friendList,
                a = t.addBySelfMap || {}, c = e.getState().mobileConfig, s = c.rich_level || "30", u = [];
            c.official_white_list && "string" == typeof c.official_white_list && JSON.parse(c.official_white_list).length && (u = JSON.parse(c.official_white_list).map(function (e) {
                return "SYSTEM_".concat(e)
            }));
            var l = n.filter(function (t) {
                var n = t.uid;
                if (0 < t.count) {
                    if (h.n.some(function (e) {
                        return e === t.uid
                    })) return !1;
                    if (r[n]) {
                        var e = r[n];
                        return !e.mySelf || !e.mySelf.msgFlagEn || "AcceptNotNotify" !== e.mySelf.msgFlagEn && "Discard" !== e.mySelf.msgFlagEn
                    }
                    return !!(i.some(function (e) {
                        return n === e
                    }) || n === h.f || n === h.g || (0 <= n.indexOf("SYSTEM") ? u.some(function (e) {
                        return e === n
                    }) : a[n] || o[t.uid] && (o[t.uid].approve || o[t.uid].level >= s || "1" === o[t.uid].identity)))
                }
            }), f = null, d = 0;
            if (l.length && l.forEach(function (e) {
                e.time > d && (d = e.time, f = e)
            }), f) {
                var p = f.uid, m = f.msgShow;
                "string" == typeof m && (m = 20 < m.length ? m.slice(0, 18) + "..." : m), r[p] ? y(r[p].name, m, r[p].faceUrl) : o[p] && y(o[p].remark_name || o[p].nickname, m, o[p].img)
            }
        }, w = !1, E = null;

    function c(s) {
        return function (c) {
            return function (e) {
                if ("CHAT_LIST_CAN_PUSH_MSG_COUNT" === e.type && (w = !0), w) {
                    var t = s.getState().chatList.chatList, n = s.getState().friendList.friendList,
                        r = s.getState().groupStore.groupStore;
                    c(e);
                    var o = s.getState().chatList.chatList, i = s.getState().friendList.friendList,
                        a = s.getState().groupStore.groupStore;
                    o === t && i === n && a === r || function (e) {
                        var r = e.getState().userInfo || {}, t = e.getState().chatList || {},
                            o = e.getState().groupStore.groupStore || {}, i = e.getState().userStore.userStore || {},
                            n = t.chatList || [], a = e.getState().friendList.friendList, c = t.addBySelfMap || {},
                            s = e.getState().mobileConfig, u = s.rich_level || "30", l = [];
                        s.official_white_list && "string" == typeof s.official_white_list && JSON.parse(s.official_white_list).length && (l = JSON.parse(s.official_white_list).map(function (e) {
                            return "SYSTEM_".concat(e)
                        }));
                        var f = 0, d = {}, p = window.monitAccounts || h.n;
                        p = p.filter(function (e) {
                            return !r.dndList.includes(e)
                        }), n.forEach(function (t) {
                            var n = t.uid;
                            if (0 < t.count) {
                                if (p.some(function (e) {
                                    return e === t.uid
                                }) && (d[t.uid] = t.count), h.n.some(function (e) {
                                    return e === t.uid
                                })) return;
                                if (o[n]) {
                                    var e = o[n];
                                    e.mySelf && e.mySelf.msgFlagEn && ("AcceptNotNotify" === e.mySelf.msgFlagEn || "Discard" === e.mySelf.msgFlagEn) || (f += t.count)
                                } else a.some(function (e) {
                                    return n === e
                                }) ? f += t.count : n === h.f ? f += t.count : n === h.g ? f += t.count : h.p.some(function (e) {
                                    return e === n
                                }) || (0 <= n.indexOf("SYSTEM") ? l.some(function (e) {
                                    return e === n
                                }) && -1 === r.dndList.indexOf(n) && (f += t.count) : c[n] ? f += t.count : i[t.uid] && (i[t.uid].approve || i[t.uid].level >= u || "1" === i[t.uid].identity) && (f += t.count))
                            }
                        });
                        var m = b.a.get("msgUnread") || 0;
                        b.a.set("msgUnread", f, 7), E && clearTimeout(E), w && 0 < f && m < f && S(e), E = setTimeout(function () {
                            w && (Object(g.a)("unreadCount", f), Object(g.a)("monitUnreadCount", d), window.localStorage.setItem("monitMessageData", JSON.stringify(d))), localStorage.setItem("unreadCountTrigger", ~~(1e3 * Math.random()))
                        }, 1e3)
                    }(s)
                } else c(e)
            }
        }
    }

    var s = n(21), I = n(4), u = n(3), f = n(14);

    function l(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var T = {loading: !1, chatList: [], error: !1, addBySelfMap: {}};
    var O = {
        CHAT_LIST_LOADING: "CHAT_LIST_LOADING",
        CHAT_LIST_ERROR: "CHAT_LIST_ERROR",
        CHAT_LIST_INIT_SUCCESS: "CHAT_LIST_INIT_SUCCESS",
        CHAT_LIST_CLEAR_UNREAD: "CHAT_LIST_CLEAR_UNREAD",
        CHAT_LIST_CHANGE_MSG_SHOW: "CHAT_LIST_CHANGE_MSG_SHOW",
        CHAT_LIST_CHANGE_COUNT: "CHAT_LIST_CHANGE_COUNT",
        CHAT_LIST_SUBTRACT_COUNT: "CHAT_LIST_SUBTRACT_COUNT",
        CHAT_LIST_SET_ITEM: "CHAT_LIST_SET_ITEM",
        CHAT_LIST_CAN_PUSH_MSG_COUNT: "CHAT_LIST_CAN_PUSH_MSG_COUNT",
        CHAT_LIST_REMOVE_ITEM: "CHAT_LIST_REMOVE_ITEM"
    };

    function d() {
        return {type: O.CHAT_LIST_CAN_PUSH_MSG_COUNT}
    }

    function p(e, t) {
        var n = e;
        return n = n.filter(function (e) {
            return "peApObaJ8zdl" !== e.uid
        }), {type: O.CHAT_LIST_INIT_SUCCESS, chatList: n, addBySelfMap: t}
    }

    function m(e) {
        var s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], u = e;
        return function (e, t) {
            var n = "", r = St.getState().msgStore.msgStore;
            "string" == typeof u ? u = {uid: n = u} : n = u.uid;
            var o = t().chatList, i = o.chatList, a = o.addBySelfMap;
            i = i.filter(function (e) {
                return e.uid === n && ((u = Object.assign({}, e, u)).isFail = !1), e.uid !== n
            });
            var c = r[u.uid];
            !u.msgShow && c && c.msgList && (u.msgShow = c.msgList[c.msgList.length - 1].content), i.unshift(u), s && (a[n] = !0, e(Tt.hide())), e(p(i, a))
        }
    }

    function _(e) {
        return {type: O.CHAT_LIST_SET_ITEM, item: e}
    }

    var N = {
        init: function () {
            return function (i, a) {
                return i(N.loading()), Promise.all([new Promise(function (l, t) {
                    webim.getRecentContactList({Count: s.b.reqRecentSessCount}, function (e) {
                        var a = [], c = St.getState().userInfo;
                        if (e.SessionItem && e.SessionItem.length) for (var t = 0; t < e.SessionItem.length; t++) {
                            var n = e.SessionItem[t], r = {}, o = n.Type;
                            if (o === webim.RECENT_CONTACT_TYPE.C2C) {
                                var i = n.To_Account;
                                if ("@TIM#SYSTEM" === i) continue;
                                r.uid = i, r.msgShow = n.MsgShow, r.count = n.UnreadMsgCount, r.time = n.MsgTimeStamp || 0, a.push(r)
                            } else if (o === webim.RECENT_CONTACT_TYPE.GROUP) {
                                var s = n.ToAccount;
                                if ("@TIM#SYSTEM" === s) continue;
                                if (r.uid = s, r.contactType = "GROUP", n.MsgShow) {
                                    var u = n.MsgGroupFromCardName || n.MsgGroupFromNickName;
                                    n.MsgGroupFrom_Account !== c.uid && u ? r.msgShow = "".concat(u, ":").concat(n.MsgShow) : r.msgShow = "".concat(n.MsgShow)
                                }
                                r.count = n.UnreadMsgCount, r.time = n.MsgTimeStamp || 0, a.push(r)
                            }
                        }
                        webim.syncMsgs(function (e) {
                            if (e && e.length) {
                                var i = {};
                                e.forEach(function (e) {
                                    var t = e.fromAccount,
                                        n = e.elems && e.elems[0] && e.elems[0].content && e.elems[0].content.text,
                                        r = i && i[t] && i[t].count ? i[t].count + 1 : 1, o = e.time;
                                    i[t] = {uid: t, msgShow: n, count: r, time: o}
                                });
                                var t = function (n) {
                                    if (!function (e, t) {
                                        return e.hasOwnProperty(t)
                                    }(i, n)) return "continue";
                                    if (c.uid === n) return "continue";
                                    var r = i[n], o = !1;
                                    a = a.map(function (e) {
                                        var t = e;
                                        return t.uid === n && (t.count = Math.max(r.count, webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.C2C, n).unread()), t.time = r.time, o = !0), t
                                    }), o || a.push(r)
                                };
                                for (var n in i) t(n)
                            }
                            var r = [];
                            a.forEach(function (e) {
                                0 <= e.uid.indexOf("SYSTEM") && r.push(e.uid)
                            }), r.length && Object(f.e)() ? I.a.fetchUserInfoAndRefreshStore(r).then(function () {
                                l(a)
                            }) : l(a)
                        })
                    }, function (e) {
                        e && e.ErrorCode && "50602" === String(e.ErrorCode) ? l([]) : t(e)
                    })
                }), I.a.getFriendRequestHistoryAndRefreshStore(), I.a.getGroupPendencyHistoryAndRefreshStore()]).then(function (e) {
                    var t = e[0], n = a().chatList.chatList || [];
                    (n = [].concat(l(t), l(n))).sort(function (e, t) {
                        var n = "".concat(e.time).slice(0, 10) - 0, r = "".concat(t.time).slice(0, 10) - 0;
                        return n < r ? 1 : r < n ? -1 : 0
                    });
                    var r = a().userStore.userStore, o = [];
                    n.forEach(function (e) {
                        "GROUP" === e.contactType || e.uid === h.f || h.g === e.uid || r[e.uid] || o.push(e.uid)
                    }), o.length ? I.a.fetchUserInfoAndRefreshStore(o).then(function () {
                        i(d()), i(p(n))
                    }) : (i(d()), i(p(n)))
                }).catch(function (e) {
                    if (!e || !e.ErrorCode) throw u.a.notice("会话列表加载失败！"), e;
                    switch (e.ErrorCode - 0) {
                        case 50002:
                            throw u.a.notice("账号异常"), e;
                        case 50606:
                            u.a.notice("获取最近联系人失败，请重试");
                            break;
                        default:
                            throw u.a.notice("会话列表加载失败！"), e
                    }
                })
            }
        }, loading: function () {
            return {type: O.CHAT_LIST_LOADING}
        }, loadSuccess: p, unshiftItem: m, clearUnread: function (e) {
            return {type: O.CHAT_LIST_CLEAR_UNREAD, uid: e}
        }, changeMsgShow: function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            return {type: O.CHAT_LIST_CHANGE_MSG_SHOW, uid: e, msgShow: t, isFail: n}
        }, changeCount: function (e, t) {
            return {type: O.CHAT_LIST_CHANGE_COUNT, count: t, uid: e}
        }, addItem: function (e) {
            var r = e;
            return function (e, t) {
                var n = "";
                "string" == typeof r ? r = {uid: n = r} : n = r.uid, t().chatList.chatList.some(function (e) {
                    return e.uid === n
                }) ? e(_(r)) : e(m(r))
            }
        }, setItem: _, subtractCount: function (e, t, n) {
            return {type: O.CHAT_LIST_SUBTRACT_COUNT, uid: e, subtractCount: t, msgShow: n}
        }, deleteChat: function (e) {
            return {type: O.CHAT_LIST_REMOVE_ITEM, uid: e}
        }
    }, C = n(80), k = n(81), M = n(91), L = n(92), A = n(82), P = {
        CHAT_DETAIL_SHOW: "CHAT_DETAIL_SHOW",
        CHAT_DETAIL_CLEAR: "CHAT_DETAIL_CLEAR",
        CHAT_DETAIL_LOADING: "CHAT_DETAIL_LOADING",
        CHAT_DETAIL_CONTENT_LOADING: "CHAT_DETAIL_CONTENT_LOADING",
        CHAT_DETAIL_HISTORY_LOADING: "CHAT_DETAIL_HISTORY_LOADING",
        CHAT_DETAIL_SCROLL_BOTTOM: "CHAT_DETAIL_SCROLL_BOTTOM",
        CHAT_DETAIL_NEW_MESSAGE: "CHAT_DETAIL_NEW_MESSAGE"
    };

    function j() {
        return {type: P.CHAT_DETAIL_HISTORY_LOADING}
    }

    function R(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        return {type: P.CHAT_DETAIL_SHOW, chatWithId: e, isGroup: t}
    }

    function x(e) {
        return {type: P.CHAT_DETAIL_SHOW, chatWithId: e, isGroup: !0}
    }

    function D() {
        return {type: P.CHAT_DETAIL_CONTENT_LOADING}
    }

    function G(i, a) {
        return function (e) {
            var t = St.getState().msgStore.msgStore, n = a || webim.SESSION_TYPE.C2C,
                r = webim.MsgStore.sessByTypeId(n, i);
            if (t && t[i] && t[i].msgList) {
                var o = t[i].msgList[t[i].msgList.length - 1].seq;
                r || "GROUP" !== n || webim.groupMsgReaded({GroupId: i, MsgReadedSeq: o})
            }
            r && webim.setAutoRead(r, !0, !0), e(It.clearUnread(i))
        }
    }

    function F(e, t) {
        if (e) {
            var n = t ? webim.SESSION_TYPE.GROUP : webim.SESSION_TYPE.C2C, r = webim.MsgStore.sessByTypeId(n, e);
            r && webim.setAutoRead(r, !1, !1)
        }
    }

    var U = /^\d+$/;
    var H = {
        showChatDetail: function (e) {
            var o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];

            function n(n, r) {
                (function (t) {
                    return new Promise(function (e) {
                        U.test(t) ? e(I.a.encryptUid(t)) : e(t)
                    })
                })(e).then(function (e) {
                    var t = e;
                    t === h.f ? function (e, t) {
                        var n = t().chatDetail.chatWithId;
                        I.a.getFriendPendencyRead(), n !== h.f && (F(n, t().chatDetail.isGroup), e(Ct.changeType("chatDetail")), e(R(h.f)))
                    }(n, r) : t === h.g ? function (e, t) {
                        var n = t().chatDetail.chatWithId;
                        I.a.getPendencyGroupRead(), n !== h.g && (F(n, t().chatDetail.isGroup), e(Ct.changeType("chatDetail")), e(R(h.g)))
                    }(n, r) : 0 <= t.indexOf("@TGS#") ? n(W(t)) : function (n) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            r = 2 < arguments.length ? arguments[2] : void 0,
                            o = 3 < arguments.length ? arguments[3] : void 0, e = o().userInfo;
                        if (n === e.uid) return;

                        function i() {
                            var e = o().userStore.userStore, t = e[n];
                            t.loadedNoticeSetting = !1, r(Et.setItem(t))
                        }

                        var a = o().chatDetail.chatWithId;
                        if (n === a) i(), r(D()), Object(I.e)(n).then(function () {
                            r(R(n)), "SYSTEM_1000" === n && r(G(n))
                        }).catch(function (e) {
                            u.a.notice("初始化聊天失败:", 1), setTimeout(function () {
                                throw e
                            })
                        }); else {
                            var c = o().chatDetail.isGroup;
                            F(a, c), r(Ct.changeType("chatDetail")), r(H.loading()), I.a.getUserInfoReady(n).then(function () {
                                i(), t && r(It.unshiftItem(n));
                                var e = o().msgStore.msgStore || {};
                                return e[n] && (r(H.loadSuccess(n)), r(H.contentLoading())), Object(I.e)(n).then(function () {
                                    r(H.loadSuccess(n)), "SYSTEM_1000" === n && r(G(n))
                                })
                            }).catch(function (e) {
                                if (!(e instanceof A.a)) throw u.a.notice("初始化聊天失败"), e;
                                u.a.notice(e.desc), r(Ct.changeType())
                            })
                        }
                    }(t, o, n, r)
                })
            }

            return function (e, t) {
                Object(f.e)() ? n(e, t) : Object(f.b)(function () {
                    n(e, t)
                })
            }
        }, showGroupChatDetail: W, loadError: function () {
        }, loading: function () {
            return {type: P.CHAT_DETAIL_LOADING}
        }, contentLoading: D, loadSuccess: R, loadGroupSuccess: x, clear: function () {
            return {type: P.CHAT_DETAIL_CLEAR}
        }, loadHistoryMsg: function (t) {
            return function (e) {
                e(j()), Object(I.e)(t, !0).then(function () {
                    e(R(t))
                }).catch(function (e) {
                    throw e
                })
            }
        }, loadGroupHistoryMsg: function (t) {
            return function (e) {
                e(j()), Object(I.h)(t, !0).then(function () {
                    e(x(t))
                }).catch(function (e) {
                    throw e
                })
            }
        }, scrollToBottom: function () {
            return {type: P.CHAT_DETAIL_SCROLL_BOTTOM}
        }, newMessage: function () {
            return {type: P.CHAT_DETAIL_NEW_MESSAGE}
        }, clearUnread: G
    };

    function W(r) {
        var o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];

        function n(t, e) {
            var n = e().chatDetail.chatWithId;
            r === n ? (t(D()), Object(I.h)(r).then(function () {
                t(x(r))
            }).catch(function (e) {
                u.a.notice("初始化聊天失败:", 1), setTimeout(function () {
                    throw e
                })
            })) : (F(n, e().chatDetail.isGroup), t(Ct.changeType("chatDetail")), t(H.loading()), I.a.getGroupInfoReady(r).then(function () {
                return o && t(It.unshiftItem({
                    uid: r,
                    contactType: "GROUP"
                })), (e().msgStore.msgStore || {})[r] && (t(H.loadGroupSuccess(r)), t(H.contentLoading())), Object(I.h)(r).then(function () {
                    t(H.loadGroupSuccess(r))
                })
            }).catch(function (e) {
                if (!(e instanceof A.a)) throw u.a.notice("初始化群聊天失败"), e;
                u.a.notice(e.desc), t(Ct.changeType())
            }))
        }

        return function (e, t) {
            Object(f.e)() ? n(e, t) : Object(f.b)(function () {
                n(e, t)
            })
        }
    }

    var B = {loading: !0, contentLoading: !1, historyLoading: !1, chatWithId: null, scrollBottom: 0, newMessageTip: 0},
        V = {CONTAINER_RIGHT_CHANGE_CONTENT: "CONTAINER_RIGHT_CHANGE_CONTENT"};

    function q() {
        return {type: V.CONTAINER_RIGHT_CHANGE_CONTENT, data: {type: "chatDetail"}}
    }

    function z() {
        return {type: V.CONTAINER_RIGHT_CHANGE_CONTENT, data: {type: "friendCard"}}
    }

    function Y() {
        return {type: V.CONTAINER_RIGHT_CHANGE_CONTENT, data: {type: "groupCard"}}
    }

    function J() {
        return {type: V.CONTAINER_RIGHT_CHANGE_CONTENT, data: {type: "none"}}
    }

    var K = {
        changeType: function (t) {
            return function (e) {
                "none" === t && e(J()), "chatDetail" === t ? e(q()) : "friendCard" === t ? (e(H.clear()), e(z())) : "groupCard" === t ? (e(H.clear()), e(Y())) : (e(H.clear()), e(J()))
            }
        }, showNone: J, showChatDetail: q, showFriendCard: z, showGroupCard: Y
    }, Q = {type: "none"}, $ = n(8), X = {
        currentSequence: 0,
        startTime: 0,
        friendRequestList: [],
        contentLoading: !1,
        historyLoading: !1,
        scrollToBottom: 0
    }, Z = {
        FRIEND_REQUEST_REMOVE_ITEM: "FRIEND_REQUEST_REMOVE_ITEM",
        FRIEND_REQUEST_CONTENT_LOADING: "FRIEND_REQUEST_CONTENT_LOADING",
        FRIEND_REQUEST_HISTORY_LOADING: "FRIEND_REQUEST_HISTORY_LOADING",
        FRIEND_REQUEST_LOAD_SUCCESS: "FRIEND_REQUEST_LOAD_SUCCESS",
        FRIEND_REQUEST_LOAD_END: "FRIEND_REQUEST_LOAD_END",
        FRIEND_REQUEST_CLEAR: "FRIEND_REQUEST_CLEAR",
        FRIEND_REQUEST_SET_LIST: "FRIEND_REQUEST_SET_LIST",
        FRIEND_REQUEST_PUSH_ITEMS: "FRIEND_REQUEST_PUSH_ITEMS"
    };

    function ee() {
        return {type: Z.FRIEND_REQUEST_HISTORY_LOADING}
    }

    var te = {
        loading: function () {
            return function (e) {
                e(Mt.loading())
            }
        }, contentLoading: function () {
            return {type: Z.FRIEND_REQUEST_CONTENT_LOADING}
        }, historyLoading: ee, clear: function () {
            return {type: Z.FRIEND_REQUEST_CLEAR}
        }, loadEnd: function () {
            return {type: Z.FRIEND_REQUEST_LOAD_END}
        }, loadSuccess: function (e) {
            if (e) {
                var t = null;
                return e.friendRequestList && (t = e.friendRequestList), {
                    type: Z.FRIEND_REQUEST_LOAD_SUCCESS,
                    currentSequence: e.currentSequence || 0,
                    startTime: e.startTime || 0,
                    friendRequestList: t,
                    complete: e.complete || 0
                }
            }
            return {
                type: Z.FRIEND_REQUEST_LOAD_SUCCESS,
                currentSequence: 0,
                startTime: 0,
                friendRequestList: null,
                complete: 1
            }
        }, removeItem: function (e) {
            var r = e;
            return function (e, t) {
                "string" == typeof r && (r = [r]);
                var n = t().friendRequest.friendRequestList || [];
                n = n.filter(function (t) {
                    return !r.some(function (e) {
                        return e === t.uid
                    })
                }), e(function (e) {
                    return {type: Z.FRIEND_REQUEST_SET_LIST, friendRequestList: e}
                }(n = $.a.processChatDetailTime(n, !0))), e(It.subtractCount(h.f, r.length, n && n.length && n[0].nickName || null))
            }
        }, loadHistoryFriendRequest: function () {
            return function (e, t) {
                var n = t().friendRequest;
                if (!n.complete) {
                    var r = n.currentSequence, o = n.startTime;
                    e(ee()), I.a.getFriendRequestHistoryAndRefreshStore(r, o).catch(function (e) {
                        throw e
                    })
                }
            }
        }
    }, ne = n(141), re = n(9), oe = n.n(re), ie = {
        GROUP_CARD_SHOW: "GROUP_CARD_SHOW",
        GROUP_CARD_CLOSE: "GROUP_CARD_CLOSE",
        GROUP_CARD_LOADING: "GROUP_CARD_LOADING"
    };

    function ae() {
        return {type: ie.GROUP_CARD_LOADING}
    }

    function ce(e) {
        return {type: ie.GROUP_CARD_SHOW, uid: e}
    }

    var se = {uid: null, loading: !1}, ue = {
        showGroupCard: function (n) {
            return function (e, t) {
                t().groupStore.groupStore[n] ? (e(ae()), I.a.getGroupInfoReady(n).then(function () {
                    e(ce(n))
                })) : u.a.notice("初始化群名片失败")
            }
        }, loadSuccess: ce, loading: ae, close: function () {
            return {type: ie.GROUP_CARD_CLOSE}
        }
    }, le = n(142), fe = n(90), de = n(114), pe = n(41);

    function me(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var he = {groupSystemMsg: [], scrollToBottom: 0, historyLoading: !1, everLoadedHistory: !1, complete: 0}, ge = {
        SET_MSG_LIST: "GROUP_SYSTEM_MSG_SET_MSG_LIST",
        LOAD_SUCCESS: "GROUP_SYSTEM_MSG_LOAD_SUCCESS",
        CLEAR: "GROUP_SYSTEM_MSG_CLEAR",
        LOAD_END: "GROUP_SYSTEM_MSG_LOAD_END",
        HISTORY_LOADING: "GROUP_SYSTEM_MSG_HISTORY_LOADING"
    };

    function be() {
        return {type: ge.HISTORY_LOADING}
    }

    function ve(p) {
        var m = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
        return function (e, t) {
            var n = t(), r = n.chatDetail.chatWithId, o = n.chatList.chatList || [], i = null;
            if (o.some(function (e) {
                return e.uid === h.g && (i = e, !0)
            }), r !== h.g) if (i) {
                var a, c = i.count + p;
                if (a = 0 < c ? "有新消息" : (c = 0, "没有新消息"), m.length) {
                    var s = {uid: h.g, time: m[0].MsgTime, count: c, msgShow: a};
                    e(It.unshiftItem(s))
                } else {
                    var u = {uid: h.g, count: c, msgShow: a};
                    e(It.setItem(u))
                }
            } else {
                var l = 0;
                if (m.forEach(function (e) {
                    1 !== Number(e.ReportType) && 12 !== Number(e.ReportType) || e.handleMsg || l++
                }), l) {
                    var f = {uid: h.g, time: m[0].MsgTime, count: l, msgShow: "有新消息"};
                    e(It.unshiftItem(f))
                } else {
                    var d = {uid: h.g, count: 0, msgShow: "没有新消息"};
                    e(It.setItem(d))
                }
            } else I.a.getPendencyGroupRead()
        }
    }

    function ye(r) {
        return function (e, t) {
            var n = t().groupSystemMsg.groupSystemMsg || [];
            n.some(function (e, t) {
                e.MsgRandom === r.MsgRandom && (n[t] = Object.assign({}, e, r))
            }), e(ve(-1, n)), e({type: ge.SET_MSG_LIST, groupSystemMsg: n})
        }
    }

    var Se = {
        clear: function () {
            return {type: ge.CLEAR}
        }, loadSuccess: function (e) {
            if (e) {
                var t = e.groupSystemMsg || [];
                return {
                    type: ge.LOAD_SUCCESS,
                    startTime: e.startTime || 0,
                    groupSystemMsg: t,
                    complete: e.complete || 0
                }
            }
            return {type: ge.LOAD_SUCCESS, startTime: 0, groupSystemMsg: [], complete: 1}
        }, loadHistory: function () {
            return function (e, t) {
                var n = t().groupSystemMsg;
                if (!n.complete) {
                    var r = n.startTime;
                    e(be()), I.a.getGroupPendencyHistoryAndRefreshStore(r).catch(function (e) {
                        throw e
                    })
                }
            }
        }, loadEnd: function () {
            return {type: ge.LOAD_END}
        }, historyLoading: be, pushItems: function (e) {
            var o = e;
            return Array.isArray(o) || (o = [o]), function (e, t) {
                var i = t().groupSystemMsg.groupSystemMsg || [], n = o.reverse(), a = [];
                if (n.forEach(function (o) {
                    i.forEach(function (e, t) {
                        var n = e;
                        if (!n.handleMsg && n.GroupId === o.GroupId && n.ReportType === o.ReportType && (12 === Number(o.ReportType) || 1 === Number(o.ReportType) && o.Operator_Account === n.Operator_Account)) {
                            n.ReportType = "20", i[t] = Object.assign({}, n);
                            var r = {From_Account: n.Operator_Account, MsgSeq: n.MsgSeq, MsgRandom: n.MsgRandom};
                            a.push(r)
                        }
                    })
                }), a.length) {
                    var r = {DelMsgList: a};
                    I.a.deleteApplyJoinGroupPendency(r)
                }
                i = [].concat(me(n), me(i)), i = $.a.processChatDetailTime(i, !0), e(ve(n.length - a.length, i)), e({
                    type: ge.SET_MSG_LIST,
                    groupSystemMsg: i
                })
            }
        }, updateItem: ye, agreeApplyJoin: function (e) {
            var t = e;
            return function (e) {
                return I.a.handleApplyJoinGroupPendency(t, "Agree").then(function () {
                    t.handleMsg = "Agree", e(ye(t))
                })
            }
        }, rejectApplyJoin: function (e, t) {
            var n = e;
            return function (e) {
                return I.a.handleApplyJoinGroupPendency(n, "Reject", t).then(function () {
                    n.handleMsg = "Reject", e(ye(n))
                })
            }
        }, agreeInvite: function (e) {
            var t = e;
            return function (e) {
                return I.a.handleInviteJoinGroupPendency(t, "Agree").then(function () {
                    t.handleMsg = "Agree", e(ye(t))
                })
            }
        }, rejectInvite: function (e, t) {
            var n = e;
            return function (e) {
                return I.a.handleInviteJoinGroupPendency(n, "Reject", t).then(function () {
                    n.handleMsg = "Reject", e(ye(n))
                })
            }
        }
    }, we = "fansModal_logging";
    var Ee = {
        deposit: function (e) {
            return {type: "fansModal_logging", data: e}
        }
    }, Ie = "CONTAINER_LEFT_SET_STATUS", Te = {
        showSet: function (e) {
            return {type: Ie, isShow: e}
        }
    }, Oe = {showSet: !1}, _e = "CONTAINER_LEFT_SEARCH", Ne = {
        setValue: function (e) {
            return {type: _e, value: e}
        }
    }, Ce = {value: ""}, ke = "CONTAINER_RIGHT_OPERATE_SET", Me = "CONTAINER_RIGHT_OPERATE_INFO_CARD", Le = {
        operateSetting: function (e) {
            return {type: ke, isShow: e}
        }, operateInfocard: function (e) {
            return {type: Me, isShow: e}
        }
    }, Ae = {isShowSetting: !1, isShowInfocard: !1};
    var Pe = "USER_INFO_LOGIN", je = "USER_INFO_LOGIN_ERROR", Re = "USER_INFO_ACTIVE", xe = "USER_INFO_EDIT", De = {
        set: function (e) {
            return {type: xe, data: e}
        }, login: function (e) {
            return {type: Pe, data: e}
        }, loginError: function () {
            return {type: je}
        }, active: function () {
            return {type: Re}
        }
    }, Ge = {
        isLogin: !1,
        dndList: [],
        uid: "",
        identity: "",
        icon: "",
        level: "",
        reg_time: "",
        nickname: "",
        sex: "",
        source: ""
    }, Fe = n(31);
    var Ue = h.p[0];
    Object.assign = oe.a;
    var He, We, Be, Ve = Object.assign({}, Fe.a.yuniang, {uid: Ue}), qe = {
        userStore: (He = {}, We = Ue, Be = Ve, We in He ? Object.defineProperty(He, We, {
            value: Be,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : He[We] = Be, He)
    }, ze = {USER_STORE_SET: "USER_STORE_SET", USER_STORE_CLEAR_REMARK: "USER_STORE_CLEAR_REMARK"};
    var Ye = {
        setItem: function (n) {
            return function (e) {
                if (n) {
                    var t = n;
                    Array.isArray(n) || (t = [n]), e(function (e) {
                        return {type: ze.USER_STORE_SET, data: e}
                    }(t))
                }
            }
        }, clearRemarkName: function (e) {
            return {type: ze.USER_STORE_CLEAR_REMARK, uid: e}
        }
    };

    function Je(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var Ke = {msgStore: {}}, Qe = "MSG_STORE_STORE_SET", $e = "MSG_STORE_CHANGE_ITEM_STATE",
        Xe = "MSG_STORE_CHANGE_APPEND_ITEM", Ze = "MSG_STORE_CHANGE_ITEM_HIDE_STRANG_TIP",
        et = "MSG_STORE_CHANGE_ITEM_HIDE_GROUPVOICE_TIP", tt = "MSG_STORE_CLEAR_CHAT", nt = "MSG_STORE_REMOVE_MSG",
        rt = "MSG_STORE_READ_SOUND", ot = "MSG_STORE_AFTER_RESEND";
    var it = {
        setItem: function (t) {
            return function (e) {
                t.isGroup && e(Gt.checkMsgAndUpdateMember(t.uid, t.msgList, t.isNewest)), e({type: Qe, item: t})
            }
        }, changeItemState: function (e, t, n, r) {
            return {type: $e, uid: e, msgId: t, state: n, tip: r}
        }, appendItem: function (t, n, r) {
            return function (e) {
                r && e(Gt.checkMsgAndUpdateMember(n.chatWithId, [n], !0)), e({type: Xe, uid: t, item: n})
            }
        }, hideStrangerTip: function (e) {
            return {type: Ze, uid: e}
        }, hideGroupVoiceTip: function (e) {
            return {type: et, uid: e}
        }, clearChat: function (e) {
            return {type: tt, uid: e}
        }, removeMsg: function (e, t) {
            return {type: nt, uid: e, msgId: t}
        }, readSountMsg: function (e, t) {
            return {type: rt, uid: e, msgId: t}
        }, afterResend: function (e, t) {
            return {type: ot, uid: e, msgId: t}
        }
    }, at = n(68);

    function ct(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var st = {
        GROUP_STORE_SET_ITEM: "GROUP_STORE_SET_ITEM",
        GROUP_STORE_UPDATE_MEMBER: "GROUP_STORE_UPDATE_MEMBER",
        GROUP_STORE_REMOVE_MEMBER: "GROUP_STORE_REMOVE_MEMBER",
        GROUP_STORE_APPEND_MEMBER: "GROUP_STORE_APPEND_MEMBER"
    };

    function ut(e) {
        if (e) {
            var t = e;
            return Array.isArray(e) || (t = [e]), {type: st.GROUP_STORE_SET_ITEM, data: t}
        }
    }

    function lt(e, t) {
        return e.joinTime > t.joinTime ? -1 : e.joinTime < t.joinTime ? 1 : 0
    }

    function ft(n) {
        var r = null, o = I.a.getCurrentUserInfo().uid, i = null, a = [], c = [];
        Object.keys(n).forEach(function (e) {
            var t = n[e];
            "Owner" === t.role ? r = t : t.uid === o ? i = t : "Admin" === t.role ? a.push(t) : c.push(t)
        }), a.sort(lt), c.sort(lt), i && ("Admin" === i.role ? a = [i].concat(ct(a)) : c = [i].concat(ct(c)));
        var e = [r].concat(ct(a), ct(c));
        return e = (e = e.map(function (e) {
            return e && e.uid ? e.uid : null
        })).filter(function (e) {
            return e
        })
    }

    function dt(e, t) {
        var n = t;
        return Array.isArray(t) || (n = [t]), {
            type: st.GROUP_STORE_UPDATE_MEMBER,
            groupId: e,
            memberList: n,
            signAddedIconAndName: !0
        }
    }

    var pt = {
        loadJoinedGroup: function () {
            return function (n) {
                return I.a.getJoinedGroup().then(function (e) {
                    var t = e.filter(function (e) {
                        return "isCarTeam" === Object(h.d)(e.groupId) || "isCommonGroup" === Object(h.d)(e.groupId)
                    });
                    return n(ut(e)), t
                })
            }
        }, setItem: ut, checkMsgAndUpdateMember: function (d) {
            var p = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                m = 2 < arguments.length ? arguments[2] : void 0;
            return function (l, e) {
                var f = (e().groupStore.groupStore || {})[d];
                f && function () {
                    for (var i = f.members || {}, a = [], c = {}, e = p.length - 1; 0 <= e; e--) {
                        var t = p[e], n = t.fromAccount;
                        if ("@TIM#SYSTEM" === n && -1 === t.type) {
                            var r = [];
                            t.content.MsgMemberExtraInfo && t.content.MsgMemberExtraInfo.length && (r = t.content.MsgMemberExtraInfo), t.content.MsgOperatorMemberExtraInfo && r.push(t.content.MsgOperatorMemberExtraInfo), r.forEach(function (e) {
                                if (!e.old) {
                                    var t = e.UserId;
                                    if (!c[t]) {
                                        var n = !1, r = {UID: t}, o = i[t];
                                        r.isNewest = m, o && (m ? (e.ImageUrl && e.ImageUrl !== o.fromAccountHeadUrl && (r.fromAccountHeadUrl = e.ImageUrl, n = !0), e.NickName && e.NickName !== o.fromAccountNick && (r.fromAccountNick = e.NickName, n = !0)) : o.isNewest || (e.ImageUrl && !o.fromAccountHeadUrl && (r.fromAccountHeadUrl = e.ImageUrl, n = !0), e.NickName && !o.fromAccountNick && (r.fromAccountNick = e.NickName, n = !0)), n && (a.push(r), c[t] = !0))
                                    }
                                }
                            })
                        } else {
                            if (c[n]) continue;
                            var o = !1, s = {uid: n}, u = i[n];
                            if (s.isNewest = m, !u) continue;
                            m ? (t.fromAccountHeadUrl && t.fromAccountHeadUrl !== u.fromAccountHeadUrl && (s.fromAccountHeadUrl = t.fromAccountHeadUrl, o = !0), t.fromAccountNick && t.fromAccountNick !== u.fromAccountNick && (s.fromAccountNick = t.fromAccountNick, o = !0), t.nameCard !== u.nameCard && (s.nameCard = t.nameCard, o = !0)) : u.isNewest || (t.fromAccountHeadUrl && !u.fromAccountHeadUrl && (s.fromAccountHeadUrl = t.fromAccountHeadUrl, o = !0), t.fromAccountNick && !u.fromAccountNick && (s.fromAccountNick = t.fromAccountNick, o = !0)), o && (a.push(s), c[n] = !0)
                        }
                    }
                    0 < a.length && l(dt(d, a))
                }()
            }
        }, getMemberIdList: function (o) {
            return function (e, t) {
                var n = t().groupStore.groupStore[o];
                if (n && n.members) {
                    var r = n.members;
                    n.memberIdList = ft(r), e(ut(n))
                }
            }
        }, getMemberInfo: function (a, c) {
            return function (e, i) {
                return new Promise(function (e, t) {
                    var n = i().groupStore.groupStore[a];
                    if (n) {
                        var r = n.members;
                        if (r) {
                            var o = [];
                            c.forEach(function (e) {
                                var t = r[e];
                                t && t.addedIconAndName || o.push(e)
                            }), 0 < o.length ? I.a.fetchGroupMemberInfoAndRefreshStore(a, o).then(function () {
                                e()
                            }).catch(function () {
                                t("加载群成员资料失败")
                            }) : e()
                        } else t("尚未加载群资料")
                    } else t("未知群信息")
                })
            }
        }, updateMember: function (e, t) {
            var n = t;
            return Array.isArray(t) || (n = [t]), {
                type: st.GROUP_STORE_UPDATE_MEMBER,
                groupId: e,
                memberList: n,
                signAddedIconAndName: !1
            }
        }, updateMemberAndSignLoaded: dt, removeMember: function (e, t) {
            return {type: st.GROUP_STORE_REMOVE_MEMBER, groupId: e, memberId: t}
        }, appendMembers: function (e, t) {
            var n = t.map(function (e) {
                return $.a.formatMember(e)
            });
            return {type: st.GROUP_STORE_APPEND_MEMBER, groupId: e, membersVar: n}
        }
    }, mt = {groupStore: {}}, ht = "mobile_config";
    var gt = {
        deposit: function (e) {
            return {type: "mobile_config", data: e}
        }
    };
    n.d(t, "y", function () {
        return wt
    }), n.d(t, "z", function () {
        return Et
    }), n.d(t, "d", function () {
        return It
    }), n.d(t, "x", function () {
        return Tt
    }), n.d(t, "u", function () {
        return Ot
    }), n.d(t, "l", function () {
        return _t
    }), n.d(t, "e", function () {
        return Nt
    }), n.d(t, "f", function () {
        return Ct
    }), n.d(t, "t", function () {
        return kt
    }), n.d(t, "c", function () {
        return Mt
    }), n.d(t, "m", function () {
        return Lt
    }), n.d(t, "k", function () {
        return At
    }), n.d(t, "n", function () {
        return Pt
    }), n.d(t, "b", function () {
        return jt
    }), n.d(t, "i", function () {
        return Rt
    }), n.d(t, "h", function () {
        return xt
    }), n.d(t, "a", function () {
        return Dt
    }), n.d(t, "p", function () {
        return Gt
    }), n.d(t, "o", function () {
        return Ft
    }), n.d(t, "q", function () {
        return Ut
    }), n.d(t, "j", function () {
        return Ht
    }), n.d(t, "r", function () {
        return Wt
    }), n.d(t, "w", function () {
        return Bt
    }), n.d(t, "v", function () {
        return Vt
    }), n.d(t, "s", function () {
        return qt
    });
    var bt, vt = Object(r.combineReducers)({
            userInfo: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ge,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case xe:
                        return function (o) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {}, t = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                                }))), t.forEach(function (e) {
                                    var t, n, r;
                                    t = o, r = i[n = e], n in t ? Object.defineProperty(t, n, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[n] = r
                                })
                            }
                            return o
                        }({}, e, t.data);
                    case Pe:
                        return Object.assign(t.data, {isLogin: !0});
                    case je:
                        return Object.assign(e, {isLogin: !1});
                    case Re:
                        return Object.assign(e, {isLogin: !0});
                    default:
                        return e
                }
            }, userStore: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : qe,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case ze.USER_STORE_SET:
                        var n = t.data, r = e.userStore, o = {};
                        n.forEach(function (e) {
                            o[e.uid] = Object.assign({}, r[e.uid], e)
                        });
                        var i = Object.assign({}, e.userStore, o);
                        return Object.assign({}, e, {userStore: i});
                    case ze.USER_STORE_CLEAR_REMARK:
                        var a = e.userStore;
                        return a[t.uid] ? (a[t.uid].remark_name = "", a[t.uid] = Object.assign({}, a[t.uid]), a = Object.assign({}, e.userStore, a), Object.assign({}, e, {userStore: a})) : e;
                    default:
                        return e
                }
            }, chatList: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : T,
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = e;
                switch (n.type) {
                    case O.CHAT_LIST_LOADING:
                        t = Object.assign({}, e, {loading: !0});
                        break;
                    case O.CHAT_LIST_INIT_SUCCESS:
                        var r = {loading: !1, chatList: n.chatList.slice()};
                        n.addBySelfMap && (r.addBySelfMap = Object.assign({}, n.addBySelfMap)), t = Object.assign({}, e, r);
                        break;
                    case O.CHAT_LIST_CLEAR_UNREAD:
                        var o = n.uid, i = e.chatList;
                        i = i.map(function (e) {
                            var t = e;
                            return t.uid === o ? (t.count = 0, Object.assign({}, t)) : t
                        }), t = Object.assign({}, e, {chatList: i});
                        break;
                    case O.CHAT_LIST_CHANGE_MSG_SHOW:
                        var a = n.uid, c = e.chatList;
                        c = c.map(function (e) {
                            var t = e;
                            return t.uid === a && (t.msgShow = n.msgShow, t.sending = !1, t.isFail = n.isFail), Object.assign({}, t)
                        }), t = Object.assign({}, e, {chatList: c});
                        break;
                    case O.CHAT_LIST_CHANGE_COUNT:
                        var s = n.uid, u = e.chatList;
                        u = u.map(function (e) {
                            var t = e;
                            return t.uid === s && (t.count = n.count), t
                        }), t = Object.assign({}, e, {chatList: u});
                        break;
                    case O.CHAT_LIST_SUBTRACT_COUNT:
                        var l = n.uid, f = e.chatList;
                        f = f.map(function (e) {
                            var t = e;
                            return t.uid === l ? (t.count -= n.subtractCount, void 0 !== n.msgShow && (t.msgShow = n.msgShow), Object.assign({}, t)) : t
                        }), t = Object.assign({}, e, {chatList: f});
                        break;
                    case O.CHAT_LIST_SET_ITEM:
                        var d = n.item, p = "";
                        "string" == typeof d ? d = {uid: p = d} : p = d.uid;
                        var m = e.chatList;
                        m.some(function (e) {
                            return e.uid === p
                        }) && (m = m.map(function (e) {
                            return e.uid === p ? Object.assign({}, e, d) : e
                        })), t = Object.assign({}, e, {chatList: m});
                        break;
                    case O.CHAT_LIST_REMOVE_ITEM:
                        for (var h = n.uid, g = e.chatList.slice(), b = 0; b < g.length; b++) if (g[b].uid === h) {
                            g.splice(b, 1);
                            break
                        }
                        t = Object.assign({}, e, {chatList: g});
                        break;
                    default:
                        t = e
                }
                return t
            }, strangerList: C.b, officialList: k.b, friendList: M.b, containerRight: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Q,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case V.CONTAINER_RIGHT_CHANGE_CONTENT:
                        return Object.assign({}, e, t.data);
                    default:
                        return e
                }
            }, containerLeft: L.b, chatDetail: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : B,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = e;
                switch (t.type) {
                    case P.CHAT_DETAIL_SHOW:
                        return Object.assign({}, n, {
                            contentLoading: !1,
                            historyLoading: !1,
                            loading: !1,
                            isGroup: t.isGroup,
                            chatWithId: t.chatWithId
                        });
                    case P.CHAT_DETAIL_LOADING:
                        return Object.assign({}, n, {loading: !0, chatWithId: ""});
                    case P.CHAT_DETAIL_CONTENT_LOADING:
                        return Object.assign({}, n, {contentLoading: !0});
                    case P.CHAT_DETAIL_HISTORY_LOADING:
                        return Object.assign({}, n, {historyLoading: !0});
                    case P.CHAT_DETAIL_CLEAR:
                        return B;
                    case P.CHAT_DETAIL_SCROLL_BOTTOM:
                        return Object.assign({}, n, {scrollBottom: ++n.scrollBottom});
                    case P.CHAT_DETAIL_NEW_MESSAGE:
                        return Object.assign({}, n, {newMessageTip: ++n.newMessageTip});
                    default:
                        return n
                }
            }, friendRequest: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : X,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case Z.FRIEND_REQUEST_CLEAR:
                        return X;
                    case Z.FRIEND_REQUEST_CONTENT_LOADING:
                        return Object.assign({}, e, {contentLoading: !0});
                    case Z.FRIEND_REQUEST_HISTORY_LOADING:
                        return Object.assign({}, e, {historyLoading: !0, loadedHistory: !0});
                    case Z.FRIEND_REQUEST_LOAD_SUCCESS:
                        return Object.assign({}, e, {
                            historyLoading: !1,
                            contentLoading: !1,
                            currentSequence: t.currentSequence || 0,
                            startTime: t.startTime || 0,
                            friendRequestList: t.friendRequestList || null,
                            complete: t.complete
                        });
                    case Z.FRIEND_REQUEST_LOAD_END:
                        return Object.assign({}, e, {
                            historyLoading: !1,
                            contentLoading: !1,
                            currentSequence: 0,
                            startTime: 0,
                            complete: 1
                        });
                    case Z.FRIEND_REQUEST_SET_LIST:
                        return Object.assign({}, e, {friendRequestList: t.friendRequestList || null});
                    default:
                        return e
                }
            }, msgStore: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ke,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case Qe:
                        var n = Object.assign({}, t.item), r = Object.assign({}, e.msgStore);
                        return r[n.uid] = Object.assign({}, r[n.uid], n), Object.assign({}, e, {msgStore: r});
                    case $e:
                        for (var o = e.msgStore, i = o[t.uid], a = i.msgList || [], c = 0; c < a.length; c++) {
                            var s = a[c];
                            if (String(s.id) === String(t.msgId)) {
                                var u = t.tip || a[c].tip;
                                t.state ? null === t.tip && (u = null) : u = null, a[c] = Object.assign({}, s, {
                                    state: t.state,
                                    tip: u
                                })
                            }
                        }
                        o[t.uid] = Object.assign({}, i);
                        var l = e;
                        return l.msgStore = Object.assign({}, o), Object.assign({}, l);
                    case Ze:
                        var f = e.msgStore, d = f[t.uid];
                        d = Object.assign({}, d, {hideStrangerTip: !0}), f[t.uid] = Object.assign({}, d);
                        var p = e;
                        return p.msgStore = Object.assign({}, f), Object.assign({}, p);
                    case et:
                        var m = e.msgStore, h = m[t.uid];
                        h = Object.assign({}, h, {hideGroupVoiceTip: !0}), m[t.uid] = Object.assign({}, h);
                        var g = e;
                        return g.msgStore = Object.assign({}, m), Object.assign({}, g);
                    case Xe:
                        var b = t.item, v = e.msgStore || {},
                            y = v[t.uid] || {msgKey: 0, lastMsgTime: 0, qcloudComplete: 0, msgList: []},
                            S = y.msgList || [];
                        S.length && (b = $.a.processChatDetailTime([Object.assign({}, S[S.length - 1]), b])[1]), S.push(b), y.msgList = S.slice(), v[t.uid] = Object.assign({}, y);
                        var w = e;
                        return w.msgStore = Object.assign({}, v), Object.assign({}, w);
                    case tt:
                        var E = e.msgStore || {};
                        return E[t.uid] = null, delete E[t.uid], E = Object.assign({}, E), Object.assign({}, e, {msgStore: E});
                    case nt:
                        var I = e.msgStore || {}, T = I[t.uid] || {}, O = T.msgList || [];
                        return O = O.filter(function (e) {
                            return e.id !== t.msgId
                        }), T = Object.assign({}, T, {msgList: O}), I = Object.assign({}, I, Je({}, t.uid, T)), Object.assign({}, e, {msgStore: I});
                    case rt:
                        for (var _ = e.msgStore, N = _[t.uid], C = N.msgList || [], k = 0; k < C.length; k++) {
                            var M = C[k];
                            String(M.id) === String(t.msgId) && (C[k] = Object.assign({}, M, {soundUnread: !1}))
                        }
                        _[t.uid] = Object.assign({}, N);
                        var L = e;
                        return L.msgStore = Object.assign({}, _), Object.assign({}, L);
                    case ot:
                        var A = e.msgStore || {}, P = A[t.uid] || {}, j = P.msgList || [], R = null;
                        return j = j.filter(function (e) {
                            return e.id !== t.msgId || (R = Object.assign({}, e), !1)
                        }), R && j.push(R), j = $.a.processChatDetailTime(j), P = Object.assign({}, P, {msgList: j}), A = Object.assign({}, A, Je({}, t.uid, P)), Object.assign({}, e, {msgStore: A});
                    default:
                        return e
                }
            }, friendCard: ne.b, groupCard: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : se,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case ie.GROUP_CARD_SHOW:
                        return oe()({}, e, {uid: t.uid, loading: !1});
                    case ie.GROUP_CARD_CLOSE:
                        return oe()({}, e, {uid: null});
                    case ie.GROUP_CARD_LOADING:
                        return oe()({}, e, {uid: null, loading: !0});
                    default:
                        return e
                }
            }, blackList: at.c, dialogReport: le.b, dialogAddFriend: fe.b, dialogSetup: de.b, groupStore: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : mt,
                    r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (r.type) {
                    case st.GROUP_STORE_REMOVE_MEMBER:
                        var t = Object.assign({}, e.groupStore), n = t[r.groupId], o = r.memberId;
                        if (n && n.members && o) {
                            n = Object.assign({}, n);
                            var i = Object.assign({}, n.members);
                            if (delete i[o], n.members = i, n.memberIdList) {
                                var a = n.memberIdList.slice(), c = a.indexOf(o);
                                0 <= c && a.splice(c, 1), n.memberIdList = a
                            }
                            return t[r.groupId] = Object.assign({}, n), t = Object.assign({}, t), Object.assign({}, e, {groupStore: t})
                        }
                        return e;
                    case st.GROUP_STORE_SET_ITEM:
                        var s = r.data, u = e.groupStore, l = {};
                        s.forEach(function (e) {
                            var t = u[e.groupId] || {}, n = Object.assign({}, t.mySelf, e.mySelf), r = null;
                            if (e.members) if (t.members) {
                                var o = e.members, i = t.members;
                                Object.keys(o).forEach(function (e) {
                                    var t = i[e];
                                    t && (o[e].fromAccountHeadUrl = t.fromAccountHeadUrl || "", o[e].fromAccountNick = t.fromAccountNick || "", o[e].icon = o[e].fromAccountHeadUrl, o[e].nickName = o[e].fromAccountNick, o[e].addedIconAndName = t.addedIconAndName)
                                }), r = o
                            } else r = e.members;
                            var a = e;
                            a.mySelf = n, a.members = r || t.members || null, a.members && t.memberIdList && (a.memberIdList = ft(a.members)), l[a.groupId] = Object.assign({}, t, a)
                        });
                        var f = Object.assign({}, e.groupStore, l);
                        return Object.assign({}, e, {groupStore: f});
                    case st.GROUP_STORE_APPEND_MEMBER:
                        var d = Object.assign({}, e.groupStore), p = d[r.groupId], m = r.members;
                        if (p && m && m.length) {
                            p = Object.assign({}, p);
                            var h = [], g = p.members || {};
                            return m.forEach(function (e) {
                                var t = g[e.uid];
                                if (t) g[e.uid] = Object.assign({}, t, e); else {
                                    var n = e;
                                    n.role || (n.role = "Member"), g[n.uid] = n, h.push(n.uid)
                                }
                            }), p.members = Object.assign({}, g), p.memberIdList && (p.memberIdList = [].concat(ct(p.memberIdList), h)), d[r.groupId] = Object.assign({}, p), d = Object.assign({}, d), Object.assign({}, e, {groupStore: d})
                        }
                        return e;
                    case st.GROUP_STORE_UPDATE_MEMBER:
                        var b = e.groupStore, v = b[r.groupId], y = r.memberList;
                        if (v && y && y.length) {
                            var S = v.members || {};
                            return y.forEach(function (e) {
                                var t = e;
                                r.signAddedIconAndName && (t.addedIconAndName = !0);
                                var n = S[t.uid] || {};
                                S[t.uid] = Object.assign({}, n, t)
                            }), v.members = Object.assign({}, S), b[r.groupId] = Object.assign({}, v), b = Object.assign({}, b), Object.assign({}, e, {groupStore: b})
                        }
                        return e;
                    default:
                        return e
                }
            }, groupMemberManageDialog: pe.b, groupSystemMsg: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : he,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case ge.LOAD_SUCCESS:
                        return Object.assign({}, e, {
                            historyLoading: !1,
                            startTime: t.startTime || 0,
                            groupSystemMsg: t.groupSystemMsg || [],
                            complete: t.complete,
                            everLoadedHistory: !0
                        });
                    case ge.LOAD_END:
                        return Object.assign({}, e, {historyLoading: !1, startTime: 0, complete: 1, everLoadedHistory: !0});
                    case ge.CLEAR:
                        return he;
                    case ge.HISTORY_LOADING:
                        return Object.assign({}, e, {historyLoading: !0, loadedHistory: !0});
                    case ge.SET_MSG_LIST:
                        return Object.assign({}, e, {groupSystemMsg: t.groupSystemMsg || []});
                    default:
                        return e
                }
            }, fansMedal: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case we:
                        return Object.assign({}, e, t.data)
                }
                return e
            }, iconSet: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Oe,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case Ie:
                        return {showSet: t.isShow};
                    default:
                        return e
                }
            }, search: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ce,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case _e:
                        return {value: t.value};
                    default:
                        return e
                }
            }, operate: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ae,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case ke:
                        return Object.assign({}, e, {isShowSetting: t.isShow});
                    case Me:
                        return Object.assign({}, e, {isShowInfocard: t.isShow});
                    default:
                        return e
                }
            }, mobileConfig: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case ht:
                        return Object.assign({}, e, t.data)
                }
                return e
            }
        }),
        yt = (bt = {}, Object(r.createStore)(vt, bt, Object(r.compose)(Object(r.applyMiddleware)(o.default, c), function (e) {
            return e
        }))), St = t.g = yt, wt = De, Et = Ye, It = N, Tt = C.a, Ot = k.a, _t = M.a, Nt = L.a, Ct = K, kt = it, Mt = H,
        Lt = te, At = ne.a, Pt = ue, jt = at.a, Rt = de.a, xt = le.a, Dt = fe.a, Gt = pt, Ft = pe.a, Ut = Se, Ht = Ee,
        Wt = Te, Bt = Ne, Vt = Le, qt = gt
}, function (e, t, n) {
    e.exports = n(17)(0)
}, function (e, t, n) {
    "use strict";
    var c, s, r = n(0), u = n.n(r), l = n(203), o = (n(424), 1.5), f = "45%", d = 1, p = "global-toast";

    function i(e, t, n, r) {
        var o = d, i = c = c || l.default.newInstance({
            prefixCls: p,
            transitionName: "move-up",
            style: {top: f},
            getContainer: s
        });

        function a() {
            return d++, function () {
                i.removeNotice(o)
            }
        }

        return i.notice({
            key: d, duration: t, style: {}, content: u.a.createElement("div", {
                onClick: function () {
                    a()(), r && r()
                }, className: "".concat(p, "-custom-content ").concat(n ? "".concat(p, "-").concat(n) : "")
            }, u.a.createElement("span", null, e)), onClose: r
        }), a()
    }

    t.a = {
        notice: function () {
            return i(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : o, "info", 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function () {
            })
        }, config: function (e) {
            void 0 !== e.top && (f = e.top, c = null), void 0 !== e.duration && (o = e.duration), void 0 !== e.getContainer && (s = e.getContainer)
        }, destroy: function () {
            c && (c.destroy(), c = null)
        }
    }
}, function (e, t, n) {
    "use strict";
    var p = n(5), m = n(8), h = n(7), g = n(3), b = n(1), v = n(21), s = n(82), r = n(14), i = n(29), l = n(108),
        o = n(30), a = n.n(o), c = n(0), f = n.n(c), u = n(2), d = n(20), y = n.n(d), S = n(23), w = n(16), E = n(155);
    n(470);

    function I(e) {
        return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function N(e, t) {
        return (N = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var C = !1, k = null, M = !1;

    function L() {
        k && (y.a.unmountComponentAtNode(k) && k.parentNode && (k.parentNode.removeChild(k), k = null));
        M = !1
    }

    var A = function (e) {
        function t(e) {
            var o;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (o = function (e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? _(e) : t
            }(this, O(t).call(this, e))).onValueChange = function () {
                o.setState(Object.assign({}, o.state, {value: o.textInput.value}))
            }, o.onGtSuccess = function (e) {
                o.setState(Object.assign({}, o.state, {gt: e}))
            }, o.groupAddMember = function (e, t) {
                var n = o.props.groupId;
                return Se.groupAddMember(n, e, t).then(function (e) {
                    if (e && 200 === e.status_code) g.a.notice("已加入群聊"), Object(v.a)(n), L(); else if (e && e.status_code) switch (e.status_code - 0) {
                        case 5007:
                        case 5008:
                            o.getAddMemberConfig();
                            break;
                        case 5100:
                            L();
                            var t = h.b.confirm({
                                title: "你还不是主播的粉丝，无法加入粉丝群",
                                footer: f.a.createElement("div", {className: "g-modal-confirm-btns"}, f.a.createElement(S.a, {
                                    onClick: function () {
                                        t(), setTimeout(function () {
                                            window.open("http://www.douyu.com/t/fans")
                                        })
                                    }, className: "g-modal-btn-cancel"
                                }, "如何成为粉丝"), f.a.createElement(S.a, {
                                    onClick: function () {
                                        t()
                                    }, className: "g-modal-btn-ok"
                                }, "我知道了")),
                                cancelClose: !1,
                                okClose: !1
                            }).destroy;
                            break;
                        case 5101:
                            L(), h.b.info({title: "你的粉丝等级未能达到最低要求，无法加入", okText: "我知道了", width: 210});
                            break;
                        default:
                            L(), h.b.info({title: "申请加群失败", okText: "我知道了", width: 210})
                    } else L(), h.b.info({title: "申请加群失败", okText: "我知道了", width: 210})
                }).catch(function (e) {
                    throw L(), h.b.info({title: "申请加群失败", okText: "我知道了"}), e
                })
            }, o.applyGroup = function () {
                var t = o.props.groupId, e = o.state.value, n = o.state.gt, r = webim.Tool.getStrBytes(e);
                e && 120 < r ? h.b.info({
                    content: "验证信息最多120个字节!",
                    width: 306
                }) : n ? C || (C = !0, e = e.replace(/(\n)+|(\r\n)+/g, " "), o.setState(Object.assign({}, o.state, {loading: !0})), Se.applyGroup(t, e).then(function (e) {
                    e && "JoinedSuccess" === e.JoinedStatus ? (g.a.notice("已加入群聊"), Object(v.a)(t)) : g.a.notice("入群申请已发送"), C = !1, o.setState(Object.assign({}, o.state, {loading: !1})), L()
                }).catch(function (e) {
                    if (C = !1, o.setState(Object.assign({}, o.state, {loading: !1})), !e || !e.ErrorCode) throw h.b.info({
                        title: "申请加群失败",
                        okText: "我知道了",
                        width: 210
                    }), e;
                    switch (e.ErrorCode - 0) {
                        case 10013:
                            L(), g.a.notice("你已经是群成员了"), Object(v.a)(t);
                            break;
                        case 10007:
                            L(), h.b.info({title: "该群禁止任何人加入", okText: "我知道了", width: 210});
                            break;
                        case 10014:
                            L(), h.b.info({title: "群成员已达上限，无法加入", okText: "我知道了", width: 210});
                            break;
                        default:
                            throw h.b.info({title: "申请加群失败", okText: "我知道了", width: 210}), e
                    }
                })) : h.b.info({content: "请完成用户验证！", width: 306})
            }, o.state = {
                loading: !0,
                gtCode: null,
                value: "",
                type: 0,
                groupName: ""
            }, o.getAddMemberConfig = o.getAddMemberConfig.bind(_(o)), o
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && N(e, t)
        }(t, c["PureComponent"]), function (e, t, n) {
            t && T(e.prototype, t), n && T(e, n)
        }(t, [{
            key: "componentDidMount", value: function () {
                var t = this, e = this.props.groupName;
                if (e) this.setState(Object.assign({}, this.state, {groupName: e})), this.getAddMemberConfig(); else {
                    var n = this.props.groupId;
                    Se.getQcloudGroupInfo(n).then(function (e) {
                        e && e.Name && t.setState(Object.assign({}, t.state, {groupName: e.Name})), t.getAddMemberConfig()
                    }).catch(function (e) {
                        throw h.b.info({title: "获取群资料失败", okText: "我知道了", width: 210}), L(), e
                    })
                }
            }
        }, {
            key: "getAddMemberConfig", value: function () {
                var r = this, o = this.props.groupId;
                return Se.getGroupAddMemberConfig(o).then(function (e) {
                    if (200 !== e.status_code) throw e.message;
                    var t = e.data;
                    switch (t.type - 0) {
                        case 1:
                            ee().then(function (e) {
                                r.setState(Object.assign({}, r.state, {gtCode: e}))
                            }), r.setState(Object.assign({}, r.state, {
                                value: "你好，我是 ".concat(Se.getCurrentUserInfo().nickname),
                                loading: !1,
                                type: 1
                            }));
                            break;
                        case 2:
                            r.setState(Object.assign({}, r.state, {loading: !0})), Se.applyGroup(o, "").then(function () {
                                r.setState(Object.assign({}, r.state, {loading: !1})), g.a.notice("已加入群聊"), Object(v.a)(o), L()
                            }).catch(function (e) {
                                if (C = !1, r.setState(Object.assign({}, r.state, {loading: !1})), e && e.ErrorCode) switch (e.ErrorCode - 0) {
                                    case 10013:
                                        g.a.notice("你已经是群成员了"), Object(v.a)(o);
                                        break;
                                    case 10007:
                                        h.b.info({title: "该群禁止任何人加入", okText: "我知道了", width: 210});
                                        break;
                                    case 10014:
                                        h.b.info({title: "群成员已达上限，无法加入", okText: "我知道了", width: 210});
                                        break;
                                    default:
                                        h.b.info({title: "申请加群失败", okText: "我知道了", width: 210})
                                } else h.b.info({title: "申请加群失败", okText: "我知道了", width: 210});
                                throw L(), e
                            });
                            break;
                        case 3:
                            L(), h.b.info({title: "该群禁止任何人加入", okText: "我知道了", width: 210});
                            break;
                        case 4:
                            var n = t.level;
                            r.groupAddMember(4, n);
                            break;
                        default:
                            h.b.info({title: "未知加群方式", okText: "我知道了", width: 210}), L()
                    }
                }).catch(function (e) {
                    throw h.b.info({title: "获取加群方式失败", okText: "我知道了", width: 210}), L(), e
                })
            }
        }, {
            key: "render", value: function () {
                var t = this, e = this.state, n = e.loading, r = e.type, o = e.value, i = e.gtCode || {}, a = i.gt,
                    c = i.challenge, s = i.success, u = this.state.groupName;
                if (n && 1 !== Number(r)) return f.a.createElement(w.a, {spinning: n, className: "g-loading"});
                if (1 !== Number(r)) return null;
                var l = webim.Tool.getStrBytes(o);
                return f.a.createElement(h.a, {
                    visible: !0,
                    className: "apply-group-dialog",
                    maskClosable: !1,
                    onCancel: L
                }, f.a.createElement(w.a, {spinning: n}, f.a.createElement("div", {className: "add-friend-dialog-header"}, u ? f.a.createElement("div", {className: "add-friend-dialog-title"}, "申请加入 ".concat(u)) : f.a.createElement("div", {className: "add-friend-dialog-title"}, "申请入群"), f.a.createElement("i", {
                    onClick: L,
                    className: "add-friend-dialog-close"
                })), f.a.createElement("div", {className: "add-friend-dialog-content"}, f.a.createElement("textarea", {
                    placeholder: "请输入验证信息",
                    ref: function (e) {
                        t.textInput = e
                    },
                    onChange: this.onValueChange,
                    value: o
                }), f.a.createElement("div", {className: "add-friend-dialog-word-count"}, f.a.createElement("span", {className: 120 < l ? "worning" : ""}, l), "/120")), f.a.createElement("div", {className: "add-friend-dialog-gt"}, a && c ? f.a.createElement(E.a, {
                    gt: a,
                    challenge: c,
                    offline: !s,
                    onSuccess: this.onGtSuccess,
                    width: "260px"
                }) : f.a.createElement("div", {className: "geetest-wrapper"}, "验证码加载中...")), f.a.createElement("div", {className: "add-friend-dialog-footer"}, f.a.createElement(S.a, {
                    className: "add-friend-dialog-btn",
                    canDisableClick: !0,
                    onClick: this.applyGroup
                }, "发送入群申请"))))
            }
        }]), t
    }();
    A.defaultProps = {groupName: "", groupId: ""}, A.propTypes = {
        groupName: u.PropTypes.node,
        groupId: u.PropTypes.node
    };
    var P = {
        show: function (t, e) {
            M ? t !== M && g.a.notice("尚有加群申请在处理中") : (M = t, b.g.getState().friendList.groupList.some(function (e) {
                return e === t
            }) ? (g.a.notice("你已经是该群的成员了"), Se.showChatDetail(t), M = !1) : (k = document.createElement("div"), document.body.appendChild(k), y.a.render(f.a.createElement(A, {
                groupId: t,
                groupName: e
            }), k)))
        }, close: L
    }, j = n(107);

    function R(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (e) {
                x(t, e, n[e])
            })
        }
        return t
    }

    function x(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function G(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function F(e) {
        b.g.dispatch(b.c.showChatDetail(e))
    }

    function U(o) {
        return new Promise(function (e, t) {
            var n = o, r = n.DelMsgList || [];
            r = r.filter(function (e) {
                return e.MsgSeq
            }), n.DelMsgList = r, o.DelMsgList.length ? webim.deleteApplyJoinGroupPendency(o, function () {
                e()
            }, function (e) {
                t(e)
            }) : e()
        })
    }

    function H() {
        var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Promise(function (t, n) {
            var e = {PendencyType: "Pendency_Type_ComeIn", StartTime: r, MaxLimited: v.b.getPendencyCount};
            webim.getPendency(e, function (e) {
                t(e)
            }, function (e) {
                n(e)
            })
        })
    }

    n.d(t, "i", function () {
        return V
    }), n.d(t, "j", function () {
        return q
    }), n.d(t, "d", function () {
        return J
    }), n.d(t, "f", function () {
        return Q
    }), n.d(t, "b", function () {
        return $
    }), n.d(t, "e", function () {
        return Z
    }), n.d(t, "g", function () {
        return ee
    }), n.d(t, "c", function () {
        return ce
    }), n.d(t, "h", function () {
        return le
    }), n.d(t, "k", function () {
        return fe
    }), a.a.getHashParam("chatWithId") && F(a.a.getHashParam("chatWithId"));
    var W, B = {
        userConfig: "/config",
        messageHistory: "/message/history",
        friendSearch: "/friend/search",
        captcha: "/geetest",
        usersInfo: "/user/batchInfo",
        report: "/report",
        takeOutFin: "/friend/friendsAdd",
        remarkUser: "/friend/attr",
        feedBack: "/feedback",
        getUserInfo: "/login/getusersig",
        getCode: "/getcode",
        officialInfo: "/user/official",
        groupNum: "/group/num",
        createGroup: "/group/apply",
        upHeadIco: "/upload/icon",
        rAdmin: "/user/rAdmin",
        queryAddFriendSet: "/user/getFriendConfig",
        setAddFriendSet: "/user/addFriendConfig",
        followStatus: "/user/follow/status",
        followUser: "/user/follow",
        friendConfig: "/user/getFriendConfig",
        addFriend: "/friend/add",
        groupAddMemberApi: "/group/addMember",
        memberConfig: "/group/joinType",
        addMemberConfig: "/group/addMemberConfig",
        agreeInvite: "/motorcade/agreeInvite",
        invite: "/motorcade/invite",
        memberNum: "/motorcade/online/member/num",
        callSetting: "/motorcade/call/setting",
        bigRCall: "/motorcade/call",
        callsendBarrage: "/motorcade/sendBarrage",
        groupSpeaking: "/group/speaking",
        motorcadeSetting: "/motorcade/getSetting",
        messageDays: "/message/days",
        messageDaily: "/message/daily",
        messageGroupDays: "/message/groupdays",
        messageGroupDaily: "/message/groupdaily"
    };
    W = B, Object.keys(W).forEach(function (e) {
        return W[e] = "/v3" + W[e]
    });
    var V = B;

    function q(e) {
        return fetch(B.report, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: Object(i.a)(e)
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 !== Number(e.status_code)) throw e
        }).catch(function (e) {
            throw h.b.info({content: "操作失败".concat(e.message ? ":".concat(e.message) : ""), width: 306}), e
        })
    }

    function z(e) {
        return fetch("".concat(B.followStatus, "?to_uid=").concat(e), {method: "GET"}).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 === Number(e.status_code)) return e.data.status;
            throw e.message || "获取关注关系失败"
        })
    }

    function Y(e) {
        for (var t, n = e.length, r = Math.ceil(n / p.a), o = [], i = 0; i < r; i++) {
            var a = e.slice(i * p.a, (i + 1) * p.a);
            o.push((t = a, fetch(B.usersInfo, {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: "uids=".concat(JSON.stringify(t))
            }).then(function (e) {
                return e.json()
            }).then(function (e) {
                if (200 === Number(e.status_code)) return e.data;
                throw e.message || "获取用户信息失败"
            })))
        }
        return Promise.all(o).then(function (e) {
            var t;
            return (t = []).concat.apply(t, G(e))
        })
    }

    function J(e) {
        var t = e;
        "string" == typeof t && (t = [t]);
        var n = [], r = [];
        return t.forEach(function (e) {
            0 <= e.indexOf("SYSTEM") ? n.push(e) : r.push(e)
        }), n.length && r.length ? Promise.all([n, Y(r)]).then(function (e) {
            var t = D(e, 2), n = t[0], r = t[1];
            return [].concat(G(n), G(r))
        }) : n.length ? function (e) {
            return fetch("".concat(B.officialInfo, "?id=").concat(JSON.stringify(e)), {method: "GET"}).then(function (e) {
                return e.json()
            }).then(function (e) {
                if (200 !== Number(e.status_code)) throw e.message || "获取用户信息失败";
                return e.data.map(function (e) {
                    return {
                        uid: e.uid,
                        img: e.icon,
                        nickname: e.name,
                        signature: e.signature,
                        type_info: e.type_info,
                        approve: !0
                    }
                })
            })
        }(n) : r.length ? Y(r) : []
    }

    function K(r, o) {
        return new Promise(function (n, t) {
            J(r).then(function (e) {
                var t = e;
                1 === r.length && 1 === t.length && o ? z(r[0]).then(function (e) {
                    t[0].followStatus = e, b.g.dispatch(b.z.setItem(t)), n(t)
                }).catch(function () {
                    t[0].followStatus = 6, b.g.dispatch(b.z.setItem(t)), n(t)
                }) : (b.g.dispatch(b.z.setItem(t)), n(t))
            }).catch(function (e) {
                t(e), e ? g.a.notice(e) : g.a.notice("获取用户信息失败")
            })
        })
    }

    function Q(l) {
        return new Promise(function (r, t) {
            var o = [], e = l, n = [], i = b.g.getState().userStore.userStore || {}, a = {};
            "string" == typeof e && (e = [e]);
            for (var c = 0; c < e.length; c++) {
                var s = e[c], u = i[s];
                u ? (a[s] = u, o.push(u)) : n.push(s)
            }
            n.length ? K(n).then(function (e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    a[n.uid] = n
                }
                o = o.concat(e), r(o)
            }).catch(function (e) {
                t(e)
            }) : (o.sort(m.a.userNameSorter), r(o))
        })
    }

    function $(e, t) {
        h.b.confirm({
            title: "确认删除好友",
            content: "你正在尝试将 ".concat(e.remark_name || e.nickname, " 从你的好友列表中删除"),
            onOk: function () {
                (function (e) {
                    var n = {To_Account: [e], DeleteType: v.b.deleteFriendType};
                    return new Promise(function (e, t) {
                        webim.deleteFriend(n, function () {
                            h.b.info({content: "删除好友成功", width: 306}), e()
                        }, function (e) {
                            31704 === Number(e.ResultItem[0].ResultCode) ? g.a.notice("删除失败，还不是好友") : h.b.info({
                                content: "删除失败",
                                width: 306
                            }), t(e)
                        })
                    })
                })(e.uid).then(function () {
                    t && t()
                })
            }
        })
    }

    function X(r) {
        var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
        return new Promise(function (t, n) {
            var e = {Peer_Account: r, MaxCnt: v.b.getC2CHistoryCount, LastMsgTime: o, MsgKey: i};
            webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.C2C, r);
            webim.getC2CHistoryMsgs(e, function (e) {
                t(e)
            }, function (e) {
                n(e)
            })
        })
    }

    function Z(d) {
        var o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        return new Promise(function (u, t) {
            function n(e) {
                g.a.notice("拉取聊天记录失败"), t(e)
            }

            var l = b.g.getState().msgStore.msgStore[d] || {uid: d}, f = l.msgList || [];
            if (o) {
                l.loaded && (l.loadedHistory = !0), l.loaded = !0;
                var e = l.lastMsgTime || 0;
                if (l.qcloudComplete) b.g.dispatch(b.t.setItem(l)), u(); else {
                    var r = l.msgKey || 0;
                    X(d, e, r).then(function (e) {
                        if (0 < e.MsgList.length) {
                            var t = e.MsgList.map(function (e) {
                                return m.a.convertMsg(e)
                            });
                            t = m.a.processChatDetailTime(t), f = [].concat(G(t), G(f)), 0 === Number(e.Complete) ? l.qcloudComplete = 0 : l.qcloudComplete = 1, l.lastMsgTime = e.LastMsgTime, l.msgKey = e.MsgKey, l.msgList = f, b.g.dispatch(b.t.setItem(l)), u()
                        } else l.qcloudComplete = 1, b.g.dispatch(b.t.setItem(l)), u()
                    }).catch(function (e) {
                        n(e)
                    })
                }
            } else l.loaded ? u() : (l.loaded = !0, X(d).then(function (e) {
                if (0 < e.MsgList.length) {
                    for (var t = e.MsgList.map(function (e) {
                        return m.a.convertMsg(e)
                    }), n = "", r = f.length; 0 < r; r--) {
                        var o = f[r - 1];
                        if (o.random && !o.state) {
                            n = o.random;
                            break
                        }
                    }
                    for (var i = -1, a = t.length; 0 < a; a--) {
                        if (t[a - 1].random === n) {
                            i = a;
                            break
                        }
                    }
                    if (0 < i) {
                        var c = t.slice(i);
                        c = m.a.processChatDetailTime(c), f = [].concat(G(f), G(c))
                    } else t = m.a.processChatDetailTime(t), f = t, 0 === Number(e.Complete) ? l.qcloudComplete = 0 : l.qcloudComplete = 1, l.lastMsgTime = e.LastMsgTime, l.msgKey = e.MsgKey;
                    var s = (l.msgList = f) && f.length && f[f.length - 1];
                    s = m.a.getMsgShow(s), b.g.dispatch(b.d.changeMsgShow(d, s)), b.g.dispatch(b.t.setItem(l)), u()
                } else l.qcloudComplete = 1, b.g.dispatch(b.t.setItem(l)), u()
            }).catch(function (e) {
                n(e)
            }))
        })
    }

    function ee(e) {
        return new Promise(function (t, n) {
            fetch("".concat(B.captcha, "?").concat(e ? "".concat(e, "&") : "", "t=").concat((new Date).getTime()), {method: "GET"}).then(function (e) {
                return e.json()
            }).then(function (e) {
                200 === e.status_code ? t(e.data) : n(e.message || "获取极验失败")
            }).catch(function (e) {
                n(e)
            })
        })
    }

    function te(i) {
        return new Promise(function (t) {
            var n = !1, r = b.g.getState(), o = r.userStore.userStore[i];

            function e() {
                var e = r.friendList.friendList;
                n = e.some(function (e) {
                    return e === i
                }) ? o.pushFriendMsg : o.pushStrangerMsg, t(n)
            }

            o ? o.loadedNoticeSetting ? e() : function (n) {
                return new Promise(function (e) {
                    if (0 <= n.indexOf("SYSTEM") || n === p.p[0]) e(); else {
                        var t = b.g.getState().userStore.userStore[n];
                        t && !t.loadedNoticeSetting && (t.loadedNoticeSetting = !0, b.g.dispatch(b.z.setItem(t))), e()
                    }
                })
            }(i).then(function () {
                e()
            }) : t(!1)
        })
    }

    var ne = null;

    function re() {
        if (ne) return ne;
        var e = b.g.getState().userInfo;
        return e.uid ? ne = e : void 0
    }

    function oe(e) {
        var p = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], m = e;
        return new Promise(function (i, a) {
            var c = m.getSession().id(), s = m.getSession().type(), u = "", l = 0;

            function f() {
                if (b.g.getState().chatDetail && b.g.getState().chatDetail.isGroup && b.g.getState().chatDetail.chatWithId) {
                    var e = b.g.getState().chatDetail.chatWithId;
                    b.g.dispatch(b.c.clear(e)), b.g.dispatch(b.c.showGroupChatDetail(e))
                }
            }

            m.getElems().forEach(function (e) {
                var t = e.getType(), n = e.getContent();
                switch (t) {
                    case webim.MSG_ELEMENT_TYPE.TEXT:
                        l = 1, u += n.getText();
                        break;
                    case webim.MSG_ELEMENT_TYPE.IMAGE:
                        l = 3, u = "[图片]";
                        break;
                    default:
                        l = 0, u = "[未知消息类型]", webim.Log.error("未知消息元素类型: elemType=".concat(l))
                }
            });
            var d = "".concat(m.getRandom(), ".").concat(m.getSeq());

            function t() {
                var e = re(), t = e.nickname;
                if (s === webim.SESSION_TYPE.GROUP) {
                    var n = c, r = b.g.getState().groupStore.groupStore, o = r && r[n];
                    o && o.members && o.members[e.uid] && o.members[e.uid].nameCard && (t = o.members[e.uid].nameCard)
                }
                m.pushInfo = {
                    nickname: t,
                    content: u
                }, "peApObaJ8zdl" === m.fromAccount && (m.offlinePush = 0), webim.sendMsg(m, function () {
                    b.g.dispatch(b.t.changeItemState(c, d, "")), b.g.dispatch(b.d.changeMsgShow(c, u)), i()
                }, function (e) {
                    var t = null;
                    if (e && e.ErrorCode) switch (e.ErrorCode) {
                        case 120001:
                            g.a.notice("用户id和目标id不能为空");
                            break;
                        case 120002:
                            t = "非好友暂不能发送语音消息";
                            break;
                        case 120003:
                            t = 120003;
                            break;
                        case 120020:
                            t = 120020;
                            break;
                        case 120004:
                            g.a.notice("获取等级出错");
                            break;
                        case 120005:
                            t = "等级未达到对方要求，无法发送";
                            break;
                        case 120008:
                            h.b.info({
                                content: "绑定手机号才能与朋友聊天",
                                okText: "去绑定",
                                width: 250,
                                closable: !0,
                                onOk: function () {
                                    window.open("//www.douyu.com/member/cp")
                                }
                            });
                            break;
                        case 120015:
                            t = 120015;
                            break;
                        case 120016:
                            t = 120016;
                            break;
                        case 10102:
                            h.b.info({
                                content: "绑定手机号才能与朋友聊天",
                                okText: "去绑定",
                                width: 250,
                                closable: !0,
                                onOk: function () {
                                    window.open("//www.douyu.com/member/cp")
                                }
                            });
                            break;
                        case 10017:
                            f(), g.a.notice("已被禁言，无法发送");
                            break;
                        case 80001:
                            g.a.notice("内容包含敏感词汇 ");
                            break;
                        case 90992:
                            g.a.notice("请求超时，请重试");
                            break;
                        case 20012:
                            f(), g.a.notice("已被禁言，无法发送");
                            break;
                        case 20007:
                            if (1 === Number(l)) return b.g.dispatch(b.t.changeItemState(c, d, "")), b.g.dispatch(b.d.changeMsgShow(c, u)), void i();
                            3 === Number(l) && (t = 120003);
                            break;
                        case 120014:
                        case 10103:
                            g.a.notice("内容包含敏感词汇");
                            break;
                        default:
                            g.a.notice("发送失败")
                    }
                    b.g.dispatch(b.t.changeItemState(c, d, "worning", t)), t && !p && b.g.dispatch(b.c.scrollToBottom()), b.g.dispatch(b.d.changeMsgShow(c, u, !0)), a(e)
                })
            }

            s === webim.SESSION_TYPE.GROUP ? (b.g.dispatch(b.d.unshiftItem({
                uid: c,
                contactType: "GROUP",
                msgShow: u,
                sending: !0
            }, !0)), t()) : (b.g.getState().friendList.friendList.some(function (e) {
                return e === c
            }) || 0 <= c.indexOf("SYSTEM") ? b.g.dispatch(b.d.unshiftItem({
                uid: c,
                msgShow: u,
                sending: !0
            }, !1)) : b.g.dispatch(b.d.unshiftItem({uid: c, msgShow: u, sending: !0}, !0)), te(c).then(function (e) {
                m.offlinePush = e, t()
            }))
        }).catch(function () {
        })
    }

    function ie(r, o) {
        return new Promise(function (t, n) {
            var e = {ResponseFriendItem: [{To_Account: r, ResponseAction: o}]};
            webim.responseFriend(e, function (e) {
                t(e)
            }, function (e) {
                n(e.ErrorInfo)
            })
        })
    }

    B.getFriendList = Q, B.getUserInfoReady = function (e, a, c) {
        return new Promise(function (t, n) {
            var r = b.g.getState, o = b.g.dispatch, i = r().userStore.userStore[e];
            i ? (a || setTimeout(function () {
                K([e], c).then(function (e) {
                    var t = e && e[0];
                    if (t) {
                        var n = t.uid;
                        r().friendList.friendList.some(function (e) {
                            return e === n
                        }) && (i.remark_name || i.nickname) !== (t.remark_name || t.nickname) && o(b.l.sortFriend())
                    }
                })
            }), t(i)) : K([e], c).then(function (e) {
                1 === e.length ? t(e) : n(new s.a("该用户不存在"))
            }).catch(function (e) {
                n(e)
            })
        })
    }, B.sendMsg = oe, B.sendMsgFn = function (e, t) {
        var n = oe(e), r = e.getSession().id(), o = e.time, i = b.g.getState().msgStore.msgStore[r],
            a = i && i.msgList || [], c = a.length ? a[a.length - 1].time : 0, s = m.a.convertMsg(e);
        return (!c || 6e4 < o - c) && (s.showTime = 1, s.timeString = m.a.getChatDetailDate(o)), s.state = "loading", s.origins = t, b.g.dispatch(b.t.appendItem(r, s)), b.g.dispatch(b.c.scrollToBottom()), n
    }, B.fetchPendency = H, B.getFriendRequestHistoryAndRefreshStore = function (e, n) {
        var d = !Object(r.e)();
        return new Promise(function (u, t) {
            var l = !1;
            e && n || (l = !0, b.g.dispatch(b.m.clear()));
            var f = b.g.getState().friendRequest;
            H(n).then(function (e) {
                if (e && e.PendencyItem && 0 < e.PendencyItem.length) {
                    if ((e.PendencyItem.length < v.b.getPendencyCount || 0 === Number(e.StartTime)) && (f.complete = !0), l) {
                        var t = e.UnreadPendencyCount;
                        b.g.getState().chatDetail.chatWithId === p.f && (t = 0);
                        var n = e.PendencyItem[0].Nick, r = e.PendencyItem[0].AddTime;
                        b.g.dispatch(b.d.addItem({uid: p.f, msgShow: n, count: t, time: r}))
                    }
                    var i = [], a = [], c = b.g.getState().userStore.userStore;
                    e.PendencyItem.forEach(function (e) {
                        var t = webim.Tool.formatText2Html(e.Nick) || "", n = webim.Tool.formatText2Html(e.AddWording),
                            r = e.To_Account, o = e.AddTime + r;
                        c[r] && c[r].level || i.push(r), a.push({
                            content: n,
                            time: e.AddTime,
                            uid: r,
                            id: o,
                            nickName: t
                        })
                    }), a = m.a.processChatDetailTime(a, !0);
                    var o = e.CurrentSequence, s = e.StartTime;
                    f.currentSequence = o, f.startTime = s, i.length && !d ? K(i).then(function () {
                        var t = b.g.getState().userStore.userStore;
                        a = a.filter(function (e) {
                            return t[e.uid] && t[e.uid].level
                        }), f.friendRequestList = l ? a : [].concat(G(f.friendRequestList), G(a)), b.g.dispatch(b.m.loadSuccess(f)), u(e)
                    }) : (f.friendRequestList = l ? a : [].concat(G(f.friendRequestList), G(a)), b.g.dispatch(b.m.loadSuccess(f)), u(e))
                } else l ? (b.g.dispatch(b.d.setItem({
                    uid: p.f,
                    msgShow: null,
                    count: 0
                })), b.g.dispatch(b.m.loadSuccess())) : b.g.dispatch(b.m.loadEnd()), u(e)
            }).catch(function (e) {
                g.a.notice("获取好友申请失败", 1), t(e)
            })
        })
    }, B.fetchUserInfo = J, B.fetchUserInfoAndRefreshStore = K, B.agreePendency = function (e) {
        return ie(e, "Response_Action_AgreeAndAdd")
    }, B.refusePendency = function (e) {
        return ie(e, "Response_Action_Reject")
    }, B.deletePendency = function (r) {
        return new Promise(function (t, n) {
            var e = {PendencyType: "Pendency_Type_ComeIn", To_Account: [r]};
            webim.deletePendency(e, function (e) {
                t(e)
            }, function (e) {
                n(e.ErrorInfo)
            })
        })
    }, B.getChatHistory = Z, B.encryptUid = function (e) {
        return fetch(B.getCode, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: "uid=".concat(JSON.stringify([e]))
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 === e.status_code) return e.data[0];
            throw e
        })
    }, B.showChatDetail = F, B.getCurrentUserInfo = re, B.clearRight = function () {
        b.g.dispatch(b.f.changeType("none"))
    }, B.getCurrentChatWithId = function () {
        return b.g.getState().chatDetail.chatWithId
    }, B.getRoomAdminList = function () {
        return fetch(B.rAdmin, {method: "GET"}).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 === e.status_code) return e.data;
            throw e
        })
    }, B.getFollowStatus = z, B.followUserAndRefreshStore = function (n) {
        return function (e) {
            return fetch(B.followUser, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: Object(i.a)({to_uid: e, is_cancel: 0}),
                method: "POST"
            }).then(function (e) {
                return e.json()
            }).then(function (e) {
                if (200 === Number(e.status_code) || 1001 === Number(e.status_code)) return e.status_code;
                throw e.message || "关注失败"
            })
        }(n).then(function (e) {
            var t = b.g.getState().userStore.userStore[n];
            t.followStatus = 1, b.g.dispatch(b.z.setItem(t)), 1001 === Number(e) ? g.a.notice("你已关注对方") : g.a.notice("关注成功，并已订阅对方的动态")
        }).catch(function (e) {
            throw g.a.notice("关注失败"), e
        })
    }, B.getFriendConfig = function (e) {
        return fetch("".concat(B.friendConfig, "?uid=").concat(e, "&t=").concat(+new Date), {
            method: "GET",
            headers: {Accept: "application/vnd.".concat(j.a.production, ".v1.0.0+json")}
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 === Number(e.status_code)) return e.data;
            throw e.message || "获取添加好友方式失败"
        })
    }, B.requestReport = q, B.requestAddFriend = function (e) {
        var t = e;
        return t.source = 2, fetch(B.addFriend, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/vnd.".concat(j.a.production, ".v1.0.0+json")
            },
            body: Object(i.a)(t)
        }).then(function (e) {
            return e.json()
        })
    }, B.getFriendPendencyRead = function () {
        return new Promise(function (e, t) {
            b.g.dispatch(b.d.setItem({uid: p.f, count: 0}));
            var n = b.g.getState().friendRequest.friendRequestList, r = (new Date).getTime();
            n && n.length && (r = n[0].time), webim.getPendencyReport({LatestPendencyTimeStamp: r}, function () {
                e()
            }, function () {
                t()
            })
        })
    };
    var ae = {
        GroupBaseInfoFilter: ["GroupId", "Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption"],
        SelfInfoFilter: ["Role", "JoinTime", "MsgFlag", "UnreadMsgNum", "NameCard"],
        MemberInfoFilter: ["Account", "Role", "JoinTime", "LastSendMsgTime", "ShutUpUntil", "NameCard", "Tag_Profile_IM_Image"],
        AppDefinedDataFilter_Group: ["JoinGroupType", "AnchorRoomId", "FansMedalName", "LevelConf", "GroupVoice"],
        AppDefinedDataFilter_GroupMember: ["GroupFansLevel", "Level"]
    };

    function ce(e) {
        var t = e;
        return "string" == typeof t && (t = [t]), new Promise(function (n, r) {
            var e = R({GroupIdList: t}, ae);
            webim.getGroupInfo(e, function (e) {
                var t = e.GroupInfo;
                t && t.length ? (t = t.map(function (e) {
                    return m.a.convertGroupInfo(e)
                }), n(t)) : r()
            }, function (e) {
                r(e)
            })
        })
    }

    function se(e) {
        return new Promise(function (n, t) {
            ce(e).then(function (e) {
                var t = e;
                t = t.map(function (e) {
                    var t = e;
                    return t.loaded = !0, t
                }), b.g.dispatch(b.p.setItem(t)), n(t)
            }).catch(function (e) {
                t(e), g.a.notice("获取群组信息失败")
            })
        })
    }

    function ue(t, r) {
        return new Promise(function (n) {
            var e = {GroupId: t, ReqMsgNumber: v.b.getGroupHistoryCount};
            r && (e.ReqMsgSeq = r), r ? e.ReqMsgSeq = r : webim.MsgStore.delSessByTypeId(webim.SESSION_TYPE.GROUP, t), webim.syncGroupMsgs(e, function (e) {
                var t = 0;
                e.length < 15 && (t = 1), n({MsgList: e, Complete: t})
            }, function (e) {
                if (e && e.ErrorCode) switch (e.ErrorCode) {
                    case 10010:
                        g.a.notice("已解散");
                        break;
                    default:
                        g.a.notice("操作失败")
                } else g.a.notice("操作失败")
            })
        })
    }

    function le(d, r) {
        return new Promise(function (u, t) {
            function n(e) {
                g.a.notice("拉取聊天记录失败"), t(e)
            }

            var l = b.g.getState().msgStore.msgStore[d] || {uid: d};
            l.isGroup = !0;
            var f = l.msgList || [];
            if (r) {
                l.isNewest = !1, l.loaded && (l.loadedHistory = !0), l.loaded = !0;
                var e = l && l.msgList[0] && l.msgList[0].seq ? l.msgList[0].seq - 1 : 0;
                l.qcloudComplete ? (l.ownHistoryComplete = 1, b.g.dispatch(b.t.setItem(l)), u()) : ue(d, e).then(function (e) {
                    if (0 < e.MsgList.length) {
                        var t = e.MsgList.map(function (e) {
                            return m.a.convertMsg(e)
                        });
                        t = m.a.processChatDetailTime(t), f = [].concat(G(t), G(f)), 0 === Number(e.Complete) ? l.qcloudComplete = 0 : l.qcloudComplete = 1, l.msgList = f, b.g.dispatch(b.t.setItem(l)), u()
                    } else l.qcloudComplete = 1, b.g.dispatch(b.t.setItem(l)), u()
                }).catch(function (e) {
                    n(e)
                })
            } else l.isNewest = !0, l.loaded ? u() : (l.loaded = !0, ue(d).then(function (e) {
                if (0 < e.MsgList.length) {
                    for (var t = e.MsgList.map(function (e) {
                        return m.a.convertMsg(e)
                    }), n = "", r = f.length; 0 < r; r--) {
                        var o = f[r - 1];
                        if (o.random && !o.state) {
                            n = o.random;
                            break
                        }
                    }
                    for (var i = -1, a = t.length; 0 < a; a--) {
                        if (t[a - 1].random === n) {
                            i = a;
                            break
                        }
                    }
                    if (0 < i) {
                        var c = t.slice(i);
                        c = m.a.processChatDetailTime(c), f = [].concat(G(f), G(c))
                    } else t = m.a.processChatDetailTime(t), f = t, 0 === Number(e.Complete) ? l.qcloudComplete = 0 : l.qcloudComplete = 1;
                    var s = (l.msgList = f) && f.length && f[f.length - 1];
                    s = m.a.getMsgShow(s), b.g.dispatch(b.d.changeMsgShow(d, s)), b.g.dispatch(b.t.setItem(l)), u()
                } else l.qcloudComplete = 1, b.g.dispatch(b.t.setItem(l)), u()
            }).catch(function (e) {
                n(e)
            }))
        })
    }

    function fe(t, e) {
        var n = b.g.getState().userInfo, r = n ? n.dndList : [];
        e ? -1 === r.indexOf(t) && (r = [].concat(G(r), [t])) : r = r.filter(function (e) {
            return e !== t
        }), b.g.dispatch(b.y.set({dndList: r}))
    }

    function de(t) {
        var e = t;
        return Array.isArray(e) || (e = [e]), new Promise(function (r, a) {
            var e = {To_Account: t, TagList: ["Tag_Profile_IM_Nick", "Tag_Profile_IM_Image"]};
            webim.getProfilePortrait(e, function (e) {
                if (e.UserProfileItem && 0 < e.UserProfileItem.length) {
                    for (var o = [], i = e.UserProfileItem, t = function (e) {
                        var t = {}, n = i[e];
                        t.uid = n.To_Account;
                        var r = n.ProfileItem;
                        r && (r.forEach(function (e) {
                            "Tag_Profile_IM_Nick" === e.Tag ? (t.nickName = e.Value, t.fromAccountNick = t.nickName) : "Tag_Profile_IM_Image" === e.Tag && (t.icon = e.Value, t.fromAccountHeadUrl = t.icon)
                        }), o.push(t))
                    }, n = 0; n < i.length; n++) t(n);
                    r(o)
                } else a("获取腾讯云用户资料失败")
            }, function (e) {
                throw a("获取腾讯云用户资料失败"), e
            })
        })
    }

    function pe(r, o, i) {
        return new Promise(function (e, t) {
            var n = {GroupId: r, Member_Account: o, Role: i};
            webim.modifyGroupMember(n, function () {
                e()
            }, function (e) {
                t(e)
            })
        })
    }

    function me(t, n, r) {
        return pe(t, n, r).then(function () {
            var e = {uid: n, role: r};
            b.g.dispatch(b.p.updateMember(t, [e]))
        })
    }

    function he(r, o, i) {
        return new Promise(function (e, t) {
            var n = {GroupId: r, Member_Account: o, NameCard: i};
            webim.modifyGroupMember(n, function () {
                e()
            }, function (e) {
                t(e)
            })
        })
    }

    function ge(e, t) {
        return function (r, o) {
            return new Promise(function (e, t) {
                var n = {GroupId: r, MemberToDel_Account: [o]};
                webim.deleteGroupMember(n, function () {
                    e()
                }, function (e) {
                    t(e)
                })
            })
        }(e, t).then(function () {
            b.g.dispatch(b.p.removeMember(e, t))
        })
    }

    function be(e, t) {
        var n = b.g.getState(), r = n.chatDetail.chatWithId, o = n.containerRight.type, i = n.groupMemberManageDialog,
            a = i.visible ? i.groupId : null, c = n.groupCard.uid, s = n.dialogReport, u = 2 === Number(e[5]);
        if (s.visible && "GROUP" === s.type && s.relateId === e && b.g.dispatch(b.h.hide()), a === e && b.g.dispatch(b.o.hide()), r === e && "chatDetail" === o) switch (b.g.dispatch(b.f.showNone()), b.g.dispatch(b.c.clear()), t) {
            case"kicked":
                h.b.info({content: u ? "您已经不在该群聊中" : "您已经不在该车队中", width: 306});
                break;
            case"destory":
                h.b.info({content: u ? "该群已解散" : "该车队已解散", width: 306});
                break;
            default:
                h.b.info({content: u ? "您已经不在该群聊中" : "您已经不在该车队中", width: 306})
        }
        if (c === e && "groupCard" === o) switch (b.g.dispatch(b.f.showNone()), b.g.dispatch(b.n.close()), l.a.close(c), t) {
            case"kicked":
                h.b.info({content: "您已被踢出此群", width: 306});
                break;
            case"destory":
                h.b.info({content: "该群已解散", width: 306})
        }
        b.g.dispatch(b.l.deleteGroup(e)), b.g.dispatch(b.d.deleteChat(e)), b.g.dispatch(b.t.clearChat(e)), webim.MsgStore.delSessByTypeId(webim.SESSION_TYPE.GROUP, e)
    }

    function ve(e) {
        return function (r) {
            return new Promise(function (e, t) {
                var n = null;
                r && (n = {GroupId: r}), webim.destroyGroup(n, function () {
                    e()
                }, function (e) {
                    t(e)
                })
            })
        }(e).then(function () {
            be(e, "destroy")
        }).catch(function (e) {
            throw g.a.notice("操作失败"), e
        })
    }

    function ye(e) {
        return function (r) {
            return new Promise(function (t, n) {
                var e;
                e = {GroupId: r}, webim.quitGroup(e, function (e) {
                    t(e)
                }, function (e) {
                    n(e)
                })
            })
        }(e).then(function () {
            be(e, "quit")
        }).catch(function () {
            g.a.notice("操作失败")
        })
    }

    B.fetchQcloudUser = function (e) {
        var t = e;
        return Array.isArray(t) || (t = [t]), new Promise(function (r, a) {
            var e = {To_Account: t, TagList: ["Tag_Profile_Custom_SAMS"]};
            webim.getProfilePortrait(e, function (e) {
                if (e.UserProfileItem && 0 < e.UserProfileItem.length) {
                    for (var o = [], i = e.UserProfileItem, t = function (e) {
                        var t = {}, n = i[e];
                        t.uid = n.To_Account;
                        var r = n.ProfileItem;
                        r && (r.forEach(function (e) {
                            "Tag_Profile_Custom_SAMS" === e.Tag && (t.dndList = e.Value ? e.Value.split(",") : [], t.dndList = t.dndList.map(function (e) {
                                return "SYSTEM_".concat(e.trim())
                            }))
                        }), o.push(t))
                    }, n = 0; n < i.length; n++) t(n);
                    r(o.pop())
                } else a("获取腾讯云用户资料失败")
            }, function (e) {
                throw a("获取腾讯云用户资料失败"), e
            })
        })
    }, B.getJoinedGroup = function () {
        var e = R({Member_Account: re().uid, Offset: 0}, ae);
        return new Promise(function (o, t) {
            webim.getJoinedGroupListHigh(e, function (e) {
                if (e.GroupIdList && 0 !== e.GroupIdList.length) {
                    for (var t = [], n = 0; n < e.GroupIdList.length; n++) {
                        var r = m.a.convertGroupInfo(e.GroupIdList[n]);
                        t.push(r)
                    }
                    o(t)
                } else o([])
            }, function (e) {
                t(e)
            })
        })
    }, B.getGroupChatHistory = le, B.getGroupInfoReady = function (e, a) {
        return new Promise(function (t, n) {
            var r = b.g.getState, o = b.g.dispatch, i = r().groupStore.groupStore[e];
            i && i.loaded ? (a || setTimeout(function () {
                se([e]).then(function (e) {
                    var t = e && e[0];
                    if (t) {
                        var n = t.groupId;
                        r().friendList.groupList.some(function (e) {
                            return e === n
                        }) && i.name !== t.name && o(b.l.sortGroup())
                    }
                })
            }), t(i)) : se([e]).then(function (e) {
                1 === e.length ? t(e) : n(new s.a("此群组不存在"))
            }).catch(function (e) {
                n(e)
            })
        })
    }, B.fetchGroupInfoAndRefreshStore = se, B.fetchQcloudUserInfo = de, B.fetchGroupMemberInfoAndRefreshStore = function (t, e) {
        return de(e).then(function (e) {
            return b.g.dispatch(b.p.updateMemberAndSignLoaded(t, e))
        }).catch(function (e) {
            throw g.a.notice("操作失败"), e
        })
    }, B.setGroupMemberRole = pe, B.setGroupMemberNameCard = he, B.setGroupMemberNameCardAndRefreshStore = function (t, n, r) {
        return he(t, n, r).then(function () {
            var e = {uid: n, nameCard: r};
            b.g.dispatch(b.p.updateMember(t, [e]))
        }).catch(function (e) {
            if (e && e.ErrorCode) switch (e.ErrorCode) {
                case 10007:
                    g.a.notice("你没有管理权限");
                    break;
                default:
                    g.a.notice("操作失败")
            } else g.a.notice("操作失败");
            throw e
        })
    }, B.setGroupMemberAdmin = function (r, o, i) {
        h.b.confirm({
            title: "设置管理员", content: "TA将有权限管理群成员", onOk: function () {
                var e = b.g.getState().groupStore.groupStore[r], t = 0;
                if (e && e.members) {
                    var n = e.members;
                    Object.keys(e.members).forEach(function (e) {
                        "Admin" === n[e].role && t++
                    })
                }
                t < 10 ? me(r, o, "Admin").then(function () {
                    g.a.notice("设置成功"), i && i()
                }).catch(function (e) {
                    throw g.a.notice("操作失败"), e
                }) : g.a.notice("管理员已满10人")
            }
        })
    }, B.unsetGroupMemberAdmin = function (e, t, n) {
        h.b.confirm({
            title: "撤销管理员", content: "TA将失去管理群组的权限", onOk: function () {
                me(e, t, "Member").then(function () {
                    g.a.notice("撤销成功"), n && n()
                }).catch(function (e) {
                    throw g.a.notice("操作失败"), e
                })
            }
        })
    }, B.groupRemoveMember = function (e, t, n) {
        h.b.confirm({
            title: "确定将该用户移出此群？", onOk: function () {
                ge(e, t).then(function () {
                    g.a.notice("移出群组成功"), n && n()
                }).catch(function (e) {
                    if (e && e.ErrorCode) switch (e.ErrorCode) {
                        case 10007:
                            g.a.notice("你没有管理权限");
                            break;
                        default:
                            g.a.notice("操作失败")
                    } else g.a.notice("操作失败");
                    throw e
                })
            }
        })
    }, B.forbidSendMsgAndRefreshStore = function (n, r, o) {
        var e = b.g.getState().groupStore.groupStore[n];
        return e && e.members ? e.members[r] ? function (r, o, i) {
            return new Promise(function (e, t) {
                var n = {GroupId: r, Members_Account: [o], ShutUpTime: i};
                webim.forbidSendMsg(n, function () {
                    e()
                }, function (e) {
                    t(e)
                })
            })
        }(n, r, o).then(function () {
            var e = Math.floor(((new Date).getTime() - "".concat(-o, "000")) / 1e3), t = {uid: r, shutUpUntil: e};
            return b.g.dispatch(b.p.updateMember(n, [t]))
        }).catch(function (e) {
            if (e && e.ErrorCode) switch (e.ErrorCode) {
                case 10007:
                    g.a.notice("你没有管理权限");
                    break;
                default:
                    g.a.notice("操作失败")
            } else g.a.notice("操作失败");
            throw e
        }) : (g.a.notice("该成员已退群，你无法对其进行设置"), Promise.reject("")) : (g.a.notice("操作失败"), Promise.reject(""))
    }, B.addGroupMember = function (r, o) {
        return new Promise(function (e, t) {
            var n = {groupId: r, uids: o};
            fetch(B.invite, {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: Object(i.a)(n)
            }).then(function (e) {
                return e.json()
            }).then(function () {
                e()
            }, function (e) {
                t(e)
            })
        })
    }, B.handleApplyJoinGroupPendency = function (o, i) {
        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
        return new Promise(function (e, t) {
            var n = {
                GroupId: o.GroupId,
                Applicant_Account: o.Operator_Account,
                HandleMsg: i,
                Authentication: o.Authentication,
                MsgKey: o.MsgKey,
                ApprovalMsg: a
            }, r = 2 === Number(o.GroupId[5]);
            webim.handleApplyJoinGroupPendency(n, function () {
                U({DelMsgList: [{From_Account: o.Operator_Account, MsgSeq: o.MsgSeq, MsgRandom: o.MsgRandom}]}), e()
            }, function (e) {
                if (e && e.ErrorCode) switch (e.ErrorCode) {
                    case 10007:
                        g.a.notice("你已经没有权限了");
                        break;
                    case 10101:
                        g.a.notice("用户已在该车队");
                        break;
                    case 10102:
                        g.a.notice("用户已加入其他车队");
                        break;
                    case 10013:
                        r ? g.a.notice("该用户已经是群成员") : g.a.notice("该用户已经是车队成员");
                        break;
                    case 10014:
                        g.a.notice("人数已满");
                        break;
                    case 10016:
                        g.a.notice("服务器开小差了～");
                        break;
                    case 10024:
                        g.a.notice("该申请已经被处理");
                        break;
                    default:
                        g.a.notice("操作失败")
                } else g.a.notice("操作失败");
                throw t(e), e
            })
        })
    }, B.handleInviteJoinGroupPendency = function (r, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
        return new Promise(function (e, t) {
            var n = {
                GroupId: r.GroupId,
                Inviter_Account: r.Operator_Account,
                HandleMsg: o,
                Authentication: r.Authentication,
                MsgKey: r.MsgKey,
                ApprovalMsg: i
            };
            webim.handleInviteJoinGroupRequest(n, function () {
                U({DelMsgList: [{From_Account: r.Operator_Account, MsgSeq: r.MsgSeq, MsgRandom: r.MsgRandom}]}), e()
            }, function (e) {
                if (e && e.ErrorCode) switch (e.ErrorCode) {
                    case 10014:
                        g.a.notice("群成员已达上限，无法加入");
                        break;
                    case 10024:
                        g.a.notice("该邀请已经被处理");
                        break;
                    default:
                        g.a.notice("操作失败")
                } else g.a.notice("操作失败");
                throw t(e), e
            })
        })
    }, B.destroyGroup = function (e, t) {
        h.b.confirm({
            title: "解散本群", content: "解散后你将失去和群友的联系，确定要解散本群吗？", onOk: function () {
                ve(e).then(function () {
                    g.a.notice("解散群组成功"), t && t()
                }).catch(function () {
                    g.a.notice("操作失败")
                })
            }
        })
    }, B.quitGroup = function (e, t) {
        h.b.confirm({
            title: "确定退出该群？", onOk: function () {
                ye(e).then(function () {
                    t && t()
                })
            }
        })
    }, B.quitMotorcade = function (e, t) {
        h.b.confirm({
            title: "确定要退出车队吗？", content: "退出车队后无法再次加入，只能通过车神或管理员邀请", onOk: function () {
                ye(e).then(function () {
                    t && t()
                })
            }
        })
    }, B.afterGroupDisappear = be, B.deleteApplyJoinGroupPendency = U, B.getGroupPendencyHistoryAndRefreshStore = function (e) {
        return new Promise(function (r, t) {
            var o = !1;
            e || (o = !0, b.g.dispatch(b.q.clear()));
            var i = b.g.getState().groupSystemMsg;
            (function (n) {
                return new Promise(function (r, t) {
                    var e = {StartTime: n, MaxLimited: v.b.getGroupPendencyCount, Limit: v.b.getGroupPendencyCount};
                    webim.getPendencyGroup(e, function (e) {
                        var t = e, i = [], a = [];
                        t.PendencyList.forEach(function (e) {
                            var t, n = null;
                            1 === Number(e.PendencyType) ? (e.Handled && (n = 2 === Number(e.Handled) ? e.HandleResult ? "Agree" : "Reject" : "Opted"), t = 12) : (t = 1, e.Handled && (n = 2 === Number(e.Handled) ? e.HandleResult ? "Agree" : "Reject" : "Opted"));
                            var r = {};
                            r.Authentication = e.Authentication, r.From_Account = "@TIM#SYSTEM", r.handleMsg = n, r.GroupId = e.GroupId, r.GroupName = e.GroupName, r.MsgKey = 0, r.MsgRandom = e.Key, r.MsgTime = e.AddTime;
                            var o = {};
                            1 === Number(e.PendencyType) ? r.RemarkInfo = e.ApprovalMsg : r.RemarkInfo = e.ApplyInviteMsg, o = {
                                uid: e.From_Account,
                                nickName: e.FromUserNickName,
                                fromAccountNick: e.FromUserNickName
                            }, r.Operator_Account = o.uid, r.ReportType = t, r.SrcFlag = 0, r.UserDefinedField = void 0, r.groupReportTypeMsg = {
                                ReportType: t,
                                Authentication: e.Authentication,
                                MsgKey: r.MsgKey,
                                Operator_Account: r.Operator_Account,
                                MsgMemberExtraInfo: o
                            }, a.push(r), i.push(e.From_Account)
                        }), i.length ? de(i).then(function (e) {
                            var n = {};
                            e.forEach(function (e) {
                                n[e.uid] = e
                            }), a = a.map(function (e) {
                                var t = e;
                                return n[t.Operator_Account] && (t.groupReportTypeMsg.MsgMemberExtraInfo = Object.assign(t.groupReportTypeMsg.MsgMemberExtraInfo, n[t.Operator_Account])), t
                            }), t = Object.assign({}, t, {PendencyList: a}), r(t)
                        }) : (t = Object.assign({}, t, {PendencyList: a}), r(t))
                    }, function (e) {
                        t(e)
                    })
                })
            })(e).then(function (e) {
                if (e && e.PendencyList && 0 < e.PendencyList.length) {
                    if (0 === Number(e.NextStartTime) && (i.complete = !0), o) {
                        var t = e.UnreadPendencyNum;
                        b.g.dispatch(b.d.addItem({
                            uid: p.g,
                            msgShow: t ? "有新消息" : "",
                            count: t,
                            time: e.PendencyList[0].MsgTime
                        }))
                    }
                    var n = e.PendencyList;
                    n = m.a.processChatDetailTime(n, !0), i.startTime = e.NextStartTime, i.groupSystemMsg = o ? n : [].concat(G(i.groupSystemMsg), G(n)), b.g.dispatch(b.q.loadSuccess(i)), r(e)
                } else o ? (b.g.dispatch(b.d.setItem({
                    uid: p.g,
                    msgShow: null,
                    count: 0
                })), b.g.dispatch(b.q.loadSuccess())) : b.g.dispatch(b.q.loadEnd()), r(e)
            }).catch(function (e) {
                g.a.notice("获取群通知失败", 1), b.g.dispatch(b.d.setItem({
                    uid: p.g,
                    msgShow: null,
                    count: 0
                })), b.g.dispatch(b.q.loadSuccess()), t(e)
            })
        })
    }, B.getPendencyGroupRead = function () {
        return new Promise(function (e, t) {
            b.g.dispatch(b.d.setItem({
                uid: p.g,
                count: 0,
                msgShow: "没有新消息"
            })), webim.getPendencyGroupRead({}, function () {
                e()
            }, function () {
                t()
            })
        })
    }, B.showApplyGroup = function (e, t) {
        Object(r.e)() ? P.show(e, t) : (Object(r.b)(function () {
            P.show(e, t)
        }), Object(r.a)())
    }, B.getGroupAddMemberConfig = function (e) {
        return fetch(B.memberConfig, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: Object(i.a)({groupId: e})
        }).then(function (e) {
            return e.json()
        })
    }, B.groupAddMember = function (e, t, n) {
        var r = {groupId: e, type: t};
        return n && (r.level = n), fetch(B.groupAddMemberApi, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: Object(i.a)(r)
        }).then(function (e) {
            return e.json()
        })
    }, B.applyGroup = function (e, t) {
        var r = {GroupId: e, ApplyMsg: t, UserDefinedField: ""};
        return new Promise(function (t, n) {
            webim.applyJoinGroup(r, function (e) {
                t(e)
            }, function (e) {
                n(e)
            })
        })
    }, B.getQcloudGroupInfo = function (r) {
        return new Promise(function (t, n) {
            var e = {GroupIdList: [r], GroupBasePublicInfoFilter: ["Name"]};
            webim.getGroupPublicInfo(e, function (e) {
                e && e.GroupInfo && e.GroupInfo.length ? t(e.GroupInfo[0]) : n("获取群组信息失败")
            }, function (e) {
                n(e)
            })
        })
    }, B.fetchTeamOnlineNum = function (e) {
        var t = e;
        return "string" == typeof t && (t = [t]), new Promise(function (n, r) {
            var e = {GroupIdList: t, GroupBaseInfoFilter: ["OnlineMemberNum"]};
            webim.getGroupInfo(e, function (e) {
                var t = e.GroupInfo;
                t && t.length ? (t = t.map(function (e) {
                    return m.a.convertGroupInfo(e)
                }), n(t)) : r()
            }, function (e) {
                r(e)
            })
        })
    }, B.getGroupSpeaking = function (e) {
        return fetch("".concat(B.groupSpeaking, "?group_id=").concat(encodeURIComponent(e)), {method: "GET"}).then(function (e) {
            return e.json()
        })
    }, B.setGroupSpeaking = function (e, t) {
        var n = {group_id: e, shutup: t};
        return fetch(B.groupSpeaking, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: Object(i.a)(n)
        }).then(function (e) {
            return e.json()
        })
    }, B.getSetting = function (e) {
        return fetch(B.motorcadeSetting, {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: "motorcadeId=".concat(e)
        }).then(function (e) {
            return e.json()
        })
    };
    var Se = t.a = B
}, function (e, t, n) {
    "use strict";
    n.d(t, "m", function () {
        return r
    }), n.d(t, "l", function () {
        return o
    }), n.d(t, "f", function () {
        return i
    }), n.d(t, "p", function () {
        return a
    }), n.d(t, "o", function () {
        return c
    }), n.d(t, "g", function () {
        return s
    }), n.d(t, "n", function () {
        return u
    }), n.d(t, "b", function () {
        return l
    }), n.d(t, "h", function () {
        return f
    }), n.d(t, "c", function () {
        return d
    }), n.d(t, "e", function () {
        return p
    }), n.d(t, "j", function () {
        return m
    }), n.d(t, "d", function () {
        return h
    }), n.d(t, "k", function () {
        return g
    }), n.d(t, "a", function () {
        return b
    }), n.d(t, "i", function () {
        return y
    });
    var r = "strangerMsg", o = "officialMsgUid", i = "friendRequest", a = ["O2peApbwlJMa"], c = "O2peApbwlJMa",
        s = "groupMsg", u = ["SYSTEM_1003", "SYSTEM_1004", "SYSTEM_1005", "SYSTEM_1006"];

    function l(e) {
        var t = navigator.appName, n = navigator.appVersion.split(";");
        n.push("prevent_firefox_console.show_error");
        var r = n[1].replace(/[ ]/g, "");
        return Number(r.slice(4)) <= e && "Microsoft Internet Explorer" === t
    }

    function f() {
        var e, t = window.navigator.userAgent, n = "ActiveXObject" in window;
        return e = "Chrome", 0 <= t.indexOf(e) && !n && -1 < t.indexOf("Edge")
    }

    function d(e) {
        return "O2peApbwlJMa" === String(e) || 0 === String(e).indexOf("SYSTEM_")
    }

    function p(e) {
        return e.replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function m() {
        return "//www.douyu.com"
    }

    function h(e) {
        if (e) switch (Number(e.toString()[5])) {
            case 4:
                return "isCarTeam";
            case 5:
                return "isCarTeamCore";
            default:
                return "isCommonGroup"
        }
    }

    var g = "https://msg.douyu.com/motorcade", b = 500, v = "".concat("https://yuba.douyu.com", "/user/main/");

    function y(e) {
        window.open("".concat(v).concat(e), "_blank")
    }
}, function (e, t, n) {
    var h = n(10), g = n(25), b = n(39), v = n(35), y = n(44), S = "prototype", r = function e(t, n, r) {
        var o, i, a, c, s = t & e.F, u = t & e.G, l = t & e.P, f = t & e.B,
            d = u ? h : t & e.S ? h[n] || (h[n] = {}) : (h[n] || {})[S], p = u ? g : g[n] || (g[n] = {}),
            m = p[S] || (p[S] = {});
        for (o in u && (r = n), r) a = ((i = !s && d && void 0 !== d[o]) ? d : r)[o], c = f && i ? y(a, h) : l && "function" == typeof a ? y(Function.call, a) : a, d && v(d, o, a, t & e.U), p[o] != a && b(p, o, c), l && m[o] != a && (m[o] = a)
    };
    h.core = g, r.F = 1, r.G = 2, r.S = 4, r.P = 8, r.B = 16, r.W = 32, r.U = 64, r.R = 128, e.exports = r
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return E
    }), n.d(t, "a", function () {
        return O
    });
    var a, r, c = n(201), o = n(0), d = n.n(o), i = n(2), s = n(20), p = n.n(s), m = n(23), u = n(202), h = n.n(u),
        l = n(84), f = n(5);
    n(423);

    function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function b() {
        return (b = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t) {
        return !t || "object" !== g(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function w(e, t) {
        return (w = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var E = function (e) {
        function i() {
            var e, n;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i);
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            return (n = y(this, (e = S(i)).call.apply(e, [this].concat(r)))).handleCancel = function (e) {
                var t = n.props.onCancel;
                t && t(e)
            }, n.handleOk = function (e) {
                var t = n.props.onOk;
                t && t(e)
            }, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && w(e, t)
        }(i, o["PureComponent"]), function (e, t, n) {
            t && v(e.prototype, t), n && v(e, n)
        }(i, [{
            key: "componentDidMount", value: function () {
                r || (Object(l.a)(document.documentElement, "click", function (e) {
                    a = {x: e.pageX, y: e.pageY}, setTimeout(function () {
                        return a = null
                    }, 20)
                }), r = !0)
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.okText, n = e.cancelText, r = e.footer, o = e.visible,
                    i = [d.a.createElement(m.a, {
                        key: "cancel",
                        onClick: this.handleCancel
                    }, n || "取消"), d.a.createElement(m.a, {key: "confirm", onClick: this.handleOk}, t || "确定")];
                return d.a.createElement(c.default, b({
                    onClose: this.handleCancel,
                    footer: void 0 === r ? i : r
                }, this.props, {visible: o, mousePosition: a}))
            }
        }]), i
    }();
    E.defaultProps = {
        prefixCls: "g-modal",
        transitionName: Object(f.h)() ? "" : "zoom",
        visible: !1,
        okText: "",
        onText: "确定",
        cancelText: "取消",
        onOk: function () {
        },
        onCancel: function () {
        },
        footer: ""
    }, E.propTypes = {
        onOk: i.PropTypes.func,
        onCancel: i.PropTypes.func,
        okText: i.PropTypes.node,
        cancelText: i.PropTypes.node,
        visible: i.PropTypes.bool,
        footer: i.PropTypes.node
    };
    var I = {maskClosable: !0, okClose: !0, cancelClose: !0};

    function T(e) {
        var t = Object.assign({}, I, e), n = t.prefixCls || "g-modal-confirm", r = document.createElement("div");
        document.body.appendChild(r);
        var o = t.width || 300, i = t.style || {}, a = void 0 !== t.maskClosable && t.maskClosable;

        function c() {
            r && (p.a.unmountComponentAtNode(r) && r.parentNode && r.parentNode.removeChild(r));
            t.onCancel && t.onCancel.apply(t, arguments)
        }

        "okCancel" in t || (t.okCancel = !0);
        var s = d.a.createElement("div", {className: "".concat(n, "-body")}, d.a.createElement("span", {className: "".concat(n, "-title")}, t.title), d.a.createElement("div", {className: "".concat(n, "-content")}, t.content));

        function u() {
            var e = t.onOk;
            t.okClose && c(), e && "function" == typeof e && e()
        }

        var l = null;
        l = t.footer ? t.footer : t.okCancel ? d.a.createElement("div", {className: "".concat(n, "-btns")}, d.a.createElement(m.a, {
            onClick: function () {
                var e = t.onCancel;
                t.cancelClose ? c() : e && "function" == typeof e && e()
            }, className: "g-modal-btn-cancel"
        }, t.cancelText || "取消"), d.a.createElement(m.a, {
            onClick: u,
            className: "g-modal-btn-ok"
        }, t.okText || "确定")) : d.a.createElement("div", {className: "".concat(n, "-btns")}, d.a.createElement(m.a, {onClick: u}, t.okText || "确定"));
        var f = h()(n, function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }({}, "".concat(n, "-").concat(t.type), !0), t.className);
        return p.a.render(d.a.createElement(E, {
            className: f,
            onCancel: c.bind(this),
            visible: !0,
            title: "",
            footer: "",
            maskClosable: a,
            style: i,
            width: o,
            closable: t.closable
        }, d.a.createElement("div", {className: "".concat(n, "-body-wrapper")}, s, " ", l)), r), {destroy: c}
    }

    function O(e) {
        var t = e.visible;
        return void 0 === t && (t = !0), d.a.createElement(E, b({maskClosable: !0}, e, {
            visible: t,
            title: "",
            footer: "",
            closable: !1
        }))
    }

    O.defaultProps = {visible: !0}, O.propTypes = {visible: i.PropTypes.bool}, E.info = function (e) {
        return T(Object.assign({}, {type: "info", iconType: "info-circle", okCancel: !1}, e))
    }, E.success = function (e) {
        return T(Object.assign({}, {type: "success", iconType: "check-circle", okCancel: !1}, e))
    }, E.error = function (e) {
        return T(Object.assign({}, {type: "error", iconType: "cross-circle", okCancel: !1}, e))
    }, E.warning = function (e) {
        return T(Object.assign({}, {type: "warning", iconType: "exclamation-circle", okCancel: !1}, e))
    }, E.warn = function (e) {
        return T(Object.assign({}, {type: "warning", iconType: "exclamation-circle", okCancel: !1}, e))
    }, E.confirm = function (e) {
        return T(Object.assign({}, {type: "confirm", okCancel: !0, width: 250}, e))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return u
    });
    var K = n(4), r = n(5), f = n(1), o = n(143), i = n.n(o);

    function a(e, t) {
        return e.hasOwnProperty(t)
    }

    var c = /[^\x00-\xff]/;

    function s(e) {
        return "string" != typeof e && "number" != typeof e || (10 === (e += "").length ? e = "".concat(e) + "000" : 16 === e.length && (e = e.substr(0, 13)), e = parseInt(e)), new Date(e)
    }

    function u(e) {
        var t, n;
        if ((e += "").length < 10) return "";
        10 == e.length && (e += "000"), e = parseInt(e);
        var r = new Date(e), o = new Date, i = o.getTime(), a = i - e + 1, c = r.getHours(), s = r.getMinutes();
        if (c = c < 10 ? "0".concat(c) : c, s = s < 10 ? "0".concat(s) : s, a < 0) return t = "刚刚";
        var u = new Date(i - 864e5 * Math.floor(a / 864e5)).getDate() == r.getDate() ? 0 : 1,
            l = Math.floor(a / 864e5) + u;
        if (7 <= l) t = r.getFullYear() === (new Date).getFullYear() ? "".concat(r.getMonth() + 1, "-").concat(r.getDate()) : "".concat(r.getFullYear(), "-").concat(r.getMonth() + 1, "-").concat(r.getDate()); else if (2 <= l && l < 7) if (n = 0 === r.getDay() ? 7 : r.getDay(), 0 < (0 === o.getDay() ? 7 : o.getDay()) - n) switch (n) {
            case 1:
                t = "周一";
                break;
            case 2:
                t = "周二";
                break;
            case 3:
                t = "周三";
                break;
            case 4:
                t = "周四";
                break;
            case 5:
                t = "周五"
        } else t = r.getFullYear() === (new Date).getFullYear() ? "".concat(r.getMonth() + 1, "-").concat(r.getDate()) : "".concat(r.getFullYear(), "-").concat(r.getMonth() + 1, "-").concat(r.getDate()); else t = 1 <= l && l < 2 ? "昨天" : l < 1 && 6e4 <= a ? "".concat(c, ":").concat(s) : 0 <= a && a <= 6e4 ? "刚刚" : "";
        return t
    }

    function l(e) {
        if ((e += "").length < 10) return "";
        10 == e.length && (e += "000"), e = parseInt(e);
        var t = new Date(e), n = (new Date).getTime(), r = n - e + 1, o = t.getHours(), i = t.getMinutes();
        o = o < 10 ? "0".concat(o) : o, i = i < 10 ? "0".concat(i) : i;
        var a = " ".concat(o, ":").concat(i);
        if (r < 0) return a;
        var c = new Date(n - 864e5 * Math.floor(r / 864e5)).getDate() == t.getDate() ? 0 : 1;
        return 0 < Math.floor(r / 864e5) + c ? t.getFullYear() === (new Date).getFullYear() ? "".concat(t.getMonth() + 1, "月").concat(t.getDate(), "日").concat(a) : "".concat(t.getFullYear(), "年").concat(t.getMonth() + 1, "月").concat(t.getDate(), "日").concat(a) : a
    }

    function d(e, t) {
        var n = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        for (var r in/(y+)/.test(t) && (t = t.replace(RegExp.$1, "".concat(e.getFullYear()).substr(4 - RegExp.$1.length))), n) a(n, r) && new RegExp("(".concat(r, ")")).test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : "00".concat(n[r]).substr("".concat(n[r]).length)));
        return t
    }

    function te(e) {
        return (e += "").length < 10 ? "" : (10 == e.length && (e += "000"), d(e = s(e), "yyyy-MM-dd hh:mm"))
    }

    function ne(e, t, n) {
        return e ? (t ? e = Object(r.e)(e) : Object(r.c)(n) || (e = Object(r.e)(e)), e = e.replace(/\[([^\[&^\]&^\s]{1,4})\]/g, function () {
            var e = arguments[1];
            return e && i.a.emotionMap[e] ? "<img class='chat-detail-content-emotion' src='".concat(i.a.emotionMap[e], "' alt='' title='").concat(e, "'/>") : arguments[0]
        })) : ""
    }

    t.a = {
        processTime: s, userNameSorter: function (e, t) {
            var n = "".concat(e.remark_name ? e.remark_name : e.nickname),
                r = "".concat(t.remark_name ? t.remark_name : t.nickname), o = c.test(r[0]), i = c.test(n[0]);
            return o && i ? n.localeCompare(r) : o && !i ? -1 : !o && i ? 1 : n.localeCompare(r)
        }, groupNameSorter: function (e, t) {
            var n = e.name, r = t.name, o = c.test(r[0]), i = c.test(n[0]);
            return o && i ? n.localeCompare(r) : o && !i ? -1 : !o && i ? 1 : n.localeCompare(r)
        }, convertMsg: function (e) {
            var t, n = e.fromAccount, r = e.isSend, o = e.random, i = e.seq, a = e.time, c = e.subType,
                s = e.groupFansLevel, u = e.getSession().id(), l = "".concat(o, ".").concat(i), f = "", d = !1, p = "";
            e.getSession().type() === webim.SESSION_TYPE.GROUP && (f = e.fromAccountNick, t = e.fromAccountHeadUrl, p = e.nameCard, d = !0);
            var m, h, g, b, v, y, S, w, E, I, T, O, _, N, C, k, M, L, A, P, j, R, x, D, G, F, U, H, W, B, V, q, z, Y, J,
                K, Q, $, X = 1, Z = "", ee = "";
            return e.getElems().forEach(function (e, t) {
                var n = e.getType(), r = e.getContent();
                if (1 <= t) $ = r; else switch (n) {
                    case webim.MSG_ELEMENT_TYPE.GROUP_TIP:
                        X = -1, ee = r;
                        break;
                    case webim.MSG_ELEMENT_TYPE.TEXT:
                        X = 1, ee += r.getText();
                        break;
                    case webim.MSG_ELEMENT_TYPE.IMAGE:
                        X = 3, b = e.content.ImageFormat, m = r.getImage(webim.IMAGE_TYPE.SMALL), h = r.getImage(webim.IMAGE_TYPE.LARGE), g = r.getImage(webim.IMAGE_TYPE.ORIGIN), h || (h = m), g || (g = m), m = {
                            type: m.getType(),
                            size: m.getSize(),
                            width: m.getWidth(),
                            height: m.getHeight(),
                            url: m.getUrl()
                        }, h = {
                            type: h.getType(),
                            size: h.getSize(),
                            width: h.getWidth(),
                            height: h.getHeight(),
                            url: h.getUrl()
                        }, g = {
                            type: g.getType(),
                            size: g.getSize(),
                            width: g.getWidth(),
                            height: g.getHeight(),
                            url: g.getUrl()
                        };
                        break;
                    case webim.MSG_ELEMENT_TYPE.SOUND:
                        X = 4, v = r.getSecond(), y = r.getDownUrl();
                        break;
                    case webim.MSG_ELEMENT_TYPE.CUSTOM:
                        var o = r.getData();
                        if (T = r.getDesc(), r.getExt(), o) if (o = JSON.parse(o), 2 == (X = o.DyMsgType)) ; else if (5 == X) w = o.Image, E = o.Pid, I = o.Title, ee = o.Content, T = o.DyMsgDesc; else if (6 == X) O = o.Id, _ = o.Icon, N = o.Timestamp, C = o.Image, ee = o.Content; else if (7 == X) ; else if (9 == X) R = o.Link, ee = o.Content, T = o.DyMsgDesc, x = o.LinkName, Q = o.Modules; else if (10 == X) w = o.Image, R = o.RoomId ? "//www.douyu.com/".concat(o.RoomId) : o.Link, x = o.LinkName, I = o.Title, S = o.RoomId; else if (11 == X) w = o.Image, R = o.Link, ee = o.Content, I = o.Title; else if (12 == X) b = "gif" == o.ImageDetail.type ? 2 : 255, m = {
                            type: 1,
                            size: o.ImageDetail.thumbSize,
                            width: o.ImageDetail.thumbWidth,
                            height: o.ImageDetail.thumbHeight,
                            url: o.ImageDetail.thumbSrc
                        }, h = {type: 2, url: o.ImageDetail.originSrc}, g = {
                            type: 3,
                            size: o.ImageDetail.originSize,
                            width: o.ImageDetail.originWidth,
                            height: o.ImageDetail.originHeight,
                            url: o.ImageDetail.originSrc
                        }; else if (13 == X) ee = o.Content, M = o.DyField, k = o.Header, I = o.Title, w = o.Image, o.web && (R = o.web.Link, x = o.web.LinkName, L = o.web.LinkType, A = o.web["data-activity_id"], P = o.web["data-prize_name"], j = o.web["data-button_name"]), T = o.DyMsgDesc; else if (14 == X) w = o.Image, T = o.DyMsgDesc, I = o.Title, S = o.RoomId, H = o.CallId, R = "/".concat(o.RoomId, "?callId=").concat(o.CallId), F = o.Leadernn, U = o.MotorcadeFlag, D = o.AnchorNn, G = o.CallMsg, W = o.FishBall, B = o.GroupId; else if (15 == X) w = o.Image, T = o.DyMsgDesc, B = o.GroupId, I = o.Title, V = o.InviteId; else if (16 == X) T = o.DyMsgDesc; else if (17 == X) T = o.DyMsgDesc; else if (18 == X) switch (Number(o.SonDyMsgType)) {
                            case 18001:
                                I = o.Title, T = o.DyMsgDesc, q = o.EndTime, z = o.SScore, Y = o.RScore, ee = o.Content
                        } else 19 == X ? (T = o.DyMsgDesc, K = te(o.Time), J = o.Cause, W = o.FishBall) : 20 == X ? (w = o.Image, T = o.DyMsgDesc, B = o.GroupId, I = o.Title, V = o.InviteId) : (X = 0, T = o.DyMsgDesc, webim.Log.error("未知消息元素类型: elemType=".concat(X))); else X = 0, webim.Log.error("未知消息元素类型: elemType=".concat(X));
                        break;
                    default:
                        X = 0, webim.Log.error("未知消息元素类型: elemType=".concat(X))
                }
            }), 1 == X && (ee = (ee = ne(Z = ee, d, n)).replace(/\n/g, "<br>")), {
                content: ee,
                type: X,
                fromAccount: n,
                isSend: r,
                id: l,
                random: o,
                seq: i,
                time: a,
                subType: c,
                chatWithId: u,
                plainContent: Z,
                ImageFormat: b,
                smallImage: m,
                bigImage: h,
                oriImage: g,
                second: v,
                downUrl: y,
                image: w,
                pid: E,
                title: I,
                desc: T,
                videoId: O,
                videoIcon: _,
                videoTimeStamp: N,
                videoImage: C,
                fromAccountNick: f,
                fromAccountHeadUrl: t,
                nameCard: p,
                isGroup: d,
                link: R,
                linkName: x,
                groupFansLevel: s,
                header: k,
                dyField: M,
                linkType: L,
                activityId: A,
                prizeName: P,
                buttonName: j,
                anchorNn: D,
                callMsg: G,
                leadernn: F,
                motorcadeFlag: U,
                fishBall: W,
                groupId: B,
                inviteId: V,
                endTime: q,
                SScore: z,
                RScore: Y,
                cause: J,
                backTime: K,
                modules: Q,
                riskTipData: $,
                callId: H,
                roomId: S
            }
        }, getQcloudMsg: function (e) {
            var t = e.origins[e.origins.length - 1], n = f.g.getState().userInfo, r = e.isSend, o = e.seq, i = e.random,
                a = e.time, c = webim.C2C_MSG_SUB_TYPE.COMMON,
                s = e.isGroup ? webim.SESSION_TYPE.GROUP : webim.SESSION_TYPE.C2C,
                u = webim.MsgStore.sessByTypeId(s, e.chatWithId);
            u || (u = new webim.Session(s, e.chatWithId));
            var l = new webim.Msg(u, r, o, i, a, n.uid, c, n.nickname);
            return 1 == e.type ? l.addText(t) : 3 == e.type && l.addImage(t), l
        }, processChatDetailTime: function (e, t) {
            if (e && e.length) for (var n = 0; n < e.length; n++) {
                var r = e[n], o = r.showTime, i = e[n - 1];
                if (i) {
                    var a = s(i.time || i.MsgTime), c = s(r.time || r.MsgTime).getTime() - a.getTime();
                    t && (c = -c), r.showTime = 6e4 < c ? 1 : 0
                } else r.showTime = 1;
                r.showTime && (r.timeString = l(r.time || r.MsgTime)), r.showTime != o && (e[n] = Object.assign({}, r))
            }
            return e
        }, hasOwnProperty: a, getChatDetailDate: l, convertOwnChatDetail: function (e) {
            var t, n, r, o, i, a, c, s, u, l, f, d, p, m, h, g, b, v, y, S, w, E, I, T, O, _, N, C, k, M, L, A, P, j, R,
                x = K.a.getCurrentUserInfo(), D = e.message_type, G = e.msg_seq, F = e.timestamp, U = e.from_uid,
                H = "".concat(e.msg_id, ".").concat(G || F), W = H, B = e.timestamp, V = "", q = x.uid === U, z = "",
                Y = "", J = !1;
            switch (e.group_id ? (z = e.nickname, Y = e.icon, V = e.group_id, J = !0) : V = q ? x.uid : U, 21 == Number(D) && (D = 1), D - 0) {
                case 1:
                    t = n = e.content;
                    break;
                case 2:
                    D = 2;
                    break;
                case 3:
                    s = "gif" === e.type ? 2 : 255, r = {
                        size: e.image_thumb_size,
                        width: e.image_thumb_width,
                        height: e.image_thumb_height,
                        url: e.image_thumb
                    }, o = {
                        size: e.image_big_size,
                        width: e.image_big_width,
                        height: e.image_big_height,
                        url: e.image_big
                    }, i = {size: e.image_size, width: e.image_width, height: e.image_height, url: e.image};
                    break;
                case 4:
                    a = e.Second, c = e.Urls;
                    break;
                case 5:
                    D = 5, u = e.Image, l = e.Pid, f = e.Title, n = e.content;
                    break;
                case 6:
                    p = e.Id, m = e.Icon, h = e.Timestamp, g = e.Image, n = e.Content || e.content;
                    break;
                case 7:
                    break;
                case 9:
                    b = e.Link, n = e.Content, d = e.DyMsgDesc, v = e.LinkName, R = e.Modules;
                    break;
                case 10:
                    u = e.Image, b = e.RoomId ? "//www.douyu.com/".concat(e.RoomId) : e.Link, v = e.LinkName, f = e.Title;
                    break;
                case 11:
                    u = e.Image, b = e.Link, n = e.Content, f = e.Title;
                    break;
                case 12:
                    s = "gif" == e.ImageDetail.type ? 2 : 255, r = {
                        type: 1,
                        size: e.ImageDetail.thumbSize,
                        width: e.ImageDetail.thumbWidth,
                        height: e.ImageDetail.thumbHeight,
                        url: e.ImageDetail.thumbSrc
                    }, o = {type: 2, url: e.ImageDetail.originSrc}, i = {
                        type: 3,
                        size: e.ImageDetail.originSize,
                        width: e.ImageDetail.originWidth,
                        height: e.ImageDetail.originHeight,
                        url: e.ImageDetail.originSrc
                    };
                    break;
                case 13:
                    n = e.Content, S = e.DyField, y = e.Header, f = e.Title, u = e.Image, b = e.Link, v = e.LinkName, d = e.DyMsgDesc, e.web && (b = e.web.Link, v = e.web.LinkName, w = e.web.LinkType, E = e.web["data-activity_id"], I = e.web["data-prize_name"], T = e.web["data-button_name"]);
                    break;
                case 14:
                    u = e.Image, d = e.DyMsgDesc, O = e.AnchorNn, _ = e.CallMsg, f = e.Title, b = "/".concat(e.RoomId, "?callId=").concat(e.CallId), N = e.FishBall, C = e.GroupId;
                    break;
                case 15:
                    u = e.Image, d = e.DyMsgDesc, f = e.Title, C = e.GroupId, k = e.InviteId;
                    break;
                case 16:
                case 17:
                    d = e.DyMsgDesc;
                    break;
                case 18:
                    switch (Number(e.SonDyMsgType)) {
                        case 18001:
                            f = e.Title, d = e.DyMsgDesc, M = e.EndTime, L = e.SScore, A = e.RScore, n = e.Content
                    }
                case 19:
                    d = e.DyMsgDesc, j = te(e.Time), P = e.Cause, N = e.FishBall;
                    break;
                default:
                    webim.Log.error("未知消息元素类型: elemType=".concat(D))
            }
            return 1 == D && (n = (n = ne(t = n, J, U)).replace(/\n/g, "<br>")), {
                content: n,
                type: D,
                fromAccount: U,
                isSend: q,
                id: W,
                random: H,
                time: B,
                plainContent: t,
                chatWithId: V,
                smallImage: r,
                bigImage: o,
                oriImage: i,
                second: a,
                downUrl: c,
                videoId: p,
                videoIcon: m,
                videoTimeStamp: h,
                videoImage: g,
                image: u,
                pid: l,
                title: f,
                seq: G,
                fromAccountNick: z,
                isGroup: J,
                fromAccountHeadUrl: Y,
                ImageFormat: s,
                link: b,
                linkName: v,
                header: y,
                dyField: S,
                linkType: w,
                activityId: E,
                prizeName: I,
                buttonName: T,
                desc: d,
                anchorNn: O,
                callMsg: _,
                fishBall: N,
                groupId: C,
                inviteId: k,
                endTime: M,
                SScore: L,
                RScore: A,
                cause: P,
                backTime: j,
                modules: R,
                ownHistory: !0
            }
        }, getMsgShow: function (e) {
            var t;
            switch (e.type - 0) {
                case-1:
                    return t = "";
                case 1:
                    t = e.plainContent;
                    break;
                case 2:
                    t = "[连麦邀请]";
                    break;
                case 3:
                    t = "[图片]";
                    break;
                case 4:
                    t = "[语音]";
                    break;
                case 9:
                    t = e.desc;
                    break;
                case 10:
                    t = e.title ? e.title : "我已经开播了，你还在等什么？";
                    break;
                case 11:
                    t = e.content ? e.content : "我发布了一条动态";
                    break;
                case 12:
                    t = "[动画表情]";
                    break;
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                    t = e.desc;
                    break;
                default:
                    t = "[其他]"
            }
            var n = "";
            if (e.isGroup) {
                var r = K.a.getCurrentUserInfo().uid, o = e.chatWithId, i = e.fromAccount;
                if (i != r && -1 != e.type) if (e.nameCard) n = e.nameCard; else {
                    var a = f.g.getState().groupStore.groupStore, c = a && a[o];
                    n = e.fromAccountNick || "", c && c.members && c.members[i] && c.members[i].nameCard && (n = c.members[i].nameCard)
                }
            }
            return "".concat(n ? "".concat(n, ":") : "").concat(t)
        }, convertGroupInfo: function (e) {
            var t = e.ApplyJoinOption, n = e.CreateTime, r = e.FaceUrl, o = e.OnlineMemberNum, i = e.GroupId,
                a = webim.Tool.formatText2Html(e.Introduction), c = e.MaxMemberNum,
                s = webim.Tool.formatText2Html(e.Name), u = e.NextMsgSeq,
                l = webim.Tool.formatText2Html(e.Notification), f = e.Owner_Account, d = e.Type,
                p = webim.Tool.groupTypeEn2Ch(e.Type), m = e.MemberNum, h = e.AppDefinedData, g = null, b = null,
                v = null, y = null;
            if (h) for (var S = 0; S < h.length; S++) switch (h[S].Key) {
                case"AnchorRoomId":
                    g = h[S].Value;
                    break;
                case"FansMedalName":
                    b = h[S].Value;
                    break;
                case"LevelConf":
                    h[S].Value && (v = JSON.parse(h[S].Value));
                    break;
                case"GroupVoice":
                    h[S].Value && (y = h[S].Value)
            }
            var w = {};
            e.SelfInfo && (w = {
                role: e.SelfInfo.Role,
                msgFlag: webim.Tool.groupMsgFlagEn2Ch(e.SelfInfo.MsgFlag),
                msgFlagEn: e.SelfInfo.MsgFlag,
                joinTime: e.SelfInfo.JoinTime
            });
            var E = null;
            return e.MemberList && (E = {}, e.MemberList.forEach(function (e) {
                if ("@TIM#SYSTEM" === e.uid) ; else {
                    var t, n = e.JoinTime, r = e.LastSendMsgTime, o = e.Member_Account, i = e.NameCard, a = e.Role,
                        c = e.ShutUpUntil, s = e.AppMemberDefinedData, u = null;
                    if (s) for (var l = 0; l < s.length; l++) switch (s[l].Key) {
                        case"GroupFansLevel":
                            u = s[l].Value;
                            break;
                        case"Level":
                            s[l].Value && (t = JSON.parse(s[l].Value))
                    }
                    var f = {
                        joinTime: n,
                        lastSendMsgTime: r,
                        uid: o,
                        nameCard: i,
                        role: a,
                        shutUpUntil: c,
                        groupFansLevel: u,
                        carTeamLevel: t
                    };
                    E[o] = f
                }
            })), {
                groupId: i,
                name: s,
                faceUrl: r,
                typeEn: d,
                type: p,
                applyJoinOption: t,
                notification: l,
                introduction: a,
                createTime: n,
                memberNum: m,
                nextMsgSeq: u,
                maxMemberNum: c,
                ownerAccount: f,
                anchorRoomId: g,
                fansMedalName: b,
                levelConf: v,
                onlineMemberNum: o,
                groupVoice: y,
                mySelf: w,
                members: E
            }
        }, formatMember: function (e) {
            return e.uid = e.uid || e.UserId, e.icon = e.icon || e.ImageUrl || e.fromAccountHeadUrl, e.nickName = e.nickName || e.NickName, e.nickname = e.nickname || e.nickName, e
        }, gagTimeFormatter: function (e) {
            var t = ((e = s(e).getTime()) - (new Date).getTime()) / 36e5;
            if (1 < t) return "".concat(Math.floor(t), "小时");
            var n = 60 * t;
            return 1 <= n ? "".concat(Math.floor(n), "分钟") : "".concat(Math.floor(60 * n), "秒")
        }, getChatListDate: u
    }
}, function (e, t, n) {
    e.exports = n(17)(15)
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    var r = n(13);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    e.exports = function (e) {
        return "object" === n(e) ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(200), o = n.n(r), i = n(34), a = n.n(i), c = n(4), s = n(85), u = n(3), l = n(30), f = n.n(l), d = n(21),
        p = n(37), m = n(1), h = function e(t) {
            var n, r, o = [];
            if (t && t.callback) {
                if (!(n = e[t.callback])) throw new Error("callback not exists! please check the data of callback and registered name are the same!");
                for (o = n.callbacks, n.originalData = t, n.cache = t.data, n.src && (e[n.src] = n); r = o.splice(0, 1)[0];) r(t.data)
            }
        }, g = function (e, t, n) {
            h[e] || (h[e] = {callbacks: []}), h[e].callbacks.push(t), n && (h[e].src = n)
        }, b = function (e, t) {
            setTimeout(function () {
                try {
                    t.clearAttributes ? t.clearAttributes() : (t.onerror = null, t.onload = null, t.onreadystatechange = null), e.removeChild(t), t = null
                } catch (e) {
                }
            })
        };
    window.DYConfigCallback || (window.DYConfigCallback = h);
    var v = {
        reg: g, load: function (e, t, n, r, o) {
            var i, a = document.createElement("script"), c = document.getElementsByTagName("head")[0] || document.body,
                s = 1 === arguments.length && e, u = s.src || e, l = s.callback || t, f = s.success || n,
                d = s.failure || r, p = s.beforeLoad || o;
            if (g(l, f, u), (i = h[t]) && "cache" in i) return h(i.originalData), void (a = null);
            p && p(a), a.async = "async", a.src = u, a.onerror = function () {
                d && d(u, l), b(c, a)
            }, a.onload = function () {
                var e = h[t];
                e && "cache" in e || d && d(u, l), b(c, a)
            }, a.onreadystatechange = function () {
                var e;
                /loaded|complete/i.test(a.readyState) && ((e = h[t]) && "cache" in e || d && d(u, l), b(c, a))
            }, c.appendChild(a)
        }, getData: function (e) {
            var t = h[e];
            if (t && "cache" in t) return t.cache
        }
    };
    n.d(t, "d", function () {
        return E
    }), n.d(t, "a", function () {
        return C
    }), n.d(t, "b", function () {
        return L
    }), n.d(t, "f", function () {
        return x
    }), n.d(t, "c", function () {
        return U
    }), n.d(t, "g", function () {
        return B
    }), n.d(t, "e", function () {
        return V
    });
    var y = {
        local: "https://passportlive.dz11.com/",
        develop: "https://passportlive.dz11.com/",
        staging: "https://passport.dz11.com/",
        production: "".concat(location.protocol, "//passport.douyu.com/")
    }, S = "msg", w = {client_id: 93, passport_host: y.production};

    function E() {
        if (f.a.getHashParam("pctoken")) return fetch("".concat(c.a.getUserInfo, "?t=").concat(+new Date), {
            method: "GET",
            credentials: "include"
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 === e.status_code) return e.data;
            throw e
        });
        var e = {client_id: w.client_id, did: a.a.get("did") || "", t: (new Date).getTime()},
            t = "".concat(w.passport_host, "lapi/passport/iframe/safeAuth?client_id=").concat(e.client_id, "&did=").concat(e.did, "&t=").concat(e.t);
        return o()(t, {method: "POST", body: JSON.stringify(e)}).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 === e.status_code) return e.data;
            throw e
        })
    }

    function I() {
        return function () {
            var e = a.a.get("".concat(S, "_uid"));
            return !(!e || "expired" === e)
        }() ? fetch("".concat(c.a.getUserInfo, "?t=").concat(+new Date), {
            method: "GET",
            credentials: "include"
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            return 200 === e.status_code ? "登录过期" === e.message ? E() : (e.data.fullLogin = !0, e.data) : E()
        }) : E()
    }

    var T = !1, O = !1, _ = !1, N = !1;

    function C() {
        return T ? (O = !1, _ ? Promise.resolve() : (_ = !0, N || m.g.dispatch(m.d.loading()), Promise.all([Object(s.f)(), void v.load(k.production, "fansMedalConfig", function (e) {
            m.g.dispatch(m.j.deposit(e))
        }, function (e) {
            console.warn("获取粉丝牌接口出错：", e)
        }), void fetch("/mobileConfig?project=im", {method: "GET"}).then(function (e) {
            return e.json()
        }).then(function (e) {
            if (200 == e.status_code) {
                var t = e.data;
                return m.g.dispatch(m.s.deposit(t)), window.sessionStorage.setItem("strangerMsgNumLimit", t.stranger_msg_num_limit), void window.sessionStorage.setItem("strangerMsgPnumLimit", t.stranger_msg_pnum_limit)
            }
            console.warn("获取陌生人发言限制配置失败")
        }).catch(function () {
            console.warn("获取陌生人发言限制接口出错")
        }), m.g.dispatch(m.l.init()).then(function () {
            return N ? Promise.all([new Promise(function (e, t) {
                var n = m.g.getState().chatList.chatList, r = [];
                n.forEach(function (e) {
                    0 <= e.uid.indexOf("SYSTEM") && r.push(e.uid)
                }), r.length && V() ? c.a.fetchUserInfoAndRefreshStore(r).then(function () {
                    e()
                }) : e()
            }), c.a.getFriendRequestHistoryAndRefreshStore()]) : m.g.dispatch(m.d.init())
        })]).then(function () {
            m.g.dispatch(m.y.active())
        }))) : (O = !0, x())
    }

    var k = {
        local: "http://webconflive.dz11.com/resource/common/fans_medal_web_v2.json",
        develop: "http://webconflive.dz11.com/resource/common/fans_medal_web_v2.json",
        staging: "http://webconftrunk.dz11.com/resource/common/fans_medal_web_v2.json",
        production: "https://webconf.douyucdn.cn/resource/common/fans_medal_web_v2.json"
    };
    var M = [];

    function L(e) {
        M.push(e)
    }

    function A() {
        var e = a.a.get("msgUnread") || 0;
        a.a.set("msgUnread", e, 7)
    }

    var P = null, j = !1;

    function R() {
        function e() {
            M.forEach(function (e) {
                setTimeout(e, 0)
            }), j = !(M = [])
        }

        P && clearInterval(P), P = setInterval(A, 5e3), A(), T && O ? C().then(function () {
            e()
        }) : O ? x().then(function () {
            e()
        }) : e()
    }

    function x() {
        if (j) return Promise.resolve();

        function t(e) {
            var n = e;
            return function (e, t, n) {
                var r = Object.assign({}, d.c, {identifier: t, identifierNick: n, userSig: e});
                return new Promise(function (t, n) {
                    webim.login(r, d.d, {isAccessFormalEnv: !0, isLogOn: !1}, function (e) {
                        t(e)
                    }, function (e) {
                        n(e)
                    })
                })
            }(n.sig, n.uid, n.nickname).then(function (e) {
                c.a.fetchQcloudUser(n.uid).then(function (e) {
                    var t = e ? e.dndList : [];
                    m.g.dispatch(m.y.set({dndList: t}))
                }), m.g.dispatch(m.y.login(n));
                var t = localStorage.getItem("uid");
                return n.uid != t && localStorage.clear(), localStorage.setItem("uid", n.uid), T = !0, O ? C().then(R) : (m.g.dispatch(m.y.loginError()), Promise.all([m.g.dispatch(m.l.initWithoutUserInfo()).then(function () {
                    return m.g.dispatch(m.d.init()).then(function () {
                        N = !0
                    })
                })])).then(R)
            })
        }

        j = !0, W && "function" == typeof W && (W(), W = null, H = !1), a.a.set("msgUnread", "waiting", 7), G && clearInterval(G);
        var r = Number(window.sessionStorage.getItem("webimLoginFailTrySign")) || 1;

        function o() {
            return fetch("".concat(c.a.getUserInfo, "?flag=1"), {
                method: "GET",
                credentials: "include"
            }).then(function (e) {
                return e.json()
            }).then(function (e) {
                if (200 === e.status_code) return e.data;
                throw e
            }).then(function (e) {
                return t(e)
            })
        }

        return I().then(function (e) {
            return t(e)
        }).catch(function (e) {
            !function t(n, e) {
                if (70052 === Number(n.ErrorCode) || 7001 === Number(n.ErrorCode)) {
                    if (3 < r) return B(n);
                    window.sessionStorage.setItem("webimLoginFailTrySign", ++r), e().catch(function (e) {
                        return t(n, o)
                    })
                }
            }(e, o)
        })
    }

    var D = 0, G = null;

    function F() {
        var e = a.a.get("msgUnread");
        0 == e || e ? "waiting" == e || D != e && (Object(p.a)("unreadCount", e), D = e) : x()
    }

    function U() {
        if (!f.a.getHashParam("isWebviewForTeamCall")) {
            if (window.location.hostname.startsWith("local") && (O = !0, Object(l.getUrlParam)("isfullmode") || (window.isfullmode = !0)), O) return x();
            G = setInterval(F, 5e3), F()
        }
    }

    var H = !1, W = null;

    function B(e) {
        throw m.g.dispatch(m.y.loginError()), H || (H = !0, W = e && 1 === e.error ? u.a.notice("您未登录，请登录", 1e4) : u.a.notice("登录失败,点击重试", 1e4, function () {
            window.history.go(0)
        })), e
    }

    function V() {
        return T
    }
}, function (e, t, n) {
    e.exports = n(17)(154)
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return f
    });
    var r = n(0), c = n.n(r), o = n(2);
    n(468);

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t) {
        return !t || "object" !== i(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var f = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), s(this, u(t).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(t, r["Component"]), function (e, t, n) {
            t && a(e.prototype, t), n && a(e, n)
        }(t, [{
            key: "render", value: function () {
                var e = this.props, t = e.spinning, n = e.contentClassName, r = this.props, o = r.tip,
                    i = r.wrapperClassName, a = r.className;
                return t = !!t, n = n || i, c.a.createElement("div", {
                    onClick: this.props.onClick,
                    className: "g-spin ".concat(t ? " spinning " : " ").concat(o ? " g-spin-with-tip " : " ").concat(a || "")
                }, c.a.createElement("div", {className: "g-spin-spinning"}, c.a.createElement("span", {className: "g-spin-icon"}), o ? c.a.createElement("div", {className: "g-spin-tip"}, o) : null), c.a.createElement("div", {className: "g-spin-content ".concat(n || "")}, this.props.children))
            }
        }]), t
    }();
    f.defaultProps = {
        spinning: !0,
        wrapperClassName: "",
        contentClassName: "",
        className: "",
        tip: "",
        onClick: function () {
        }
    }, f.propTypes = {
        tip: o.PropTypes.string,
        spinning: o.PropTypes.bool,
        className: o.PropTypes.string,
        wrapperClassName: o.PropTypes.string,
        contentClassName: o.PropTypes.string,
        onClick: o.PropTypes.func
    }
}, function (e, t) {
    e.exports = vendor_5447d84629ce26344d42
}, function (e, t, n) {
    var r = n(95)("wks"), o = n(59), i = n(10).Symbol, a = "function" == typeof i;
    (e.exports = function (e) {
        return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
    }).store = r
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return d
    }), n.d(t, "a", function () {
        return p
    });
    var i = n(5), r = n(0), a = n.n(r), o = n(2), c = n(51), s = (n(475), n(31)), u = n(69), l = n.n(u);

    function f() {
        return (f = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function d(e) {
        var t = e.className, n = e.wrapperClassName, r = e.onClick, o = e.userItem;
        if (o && o.uid) switch (o.uid) {
            case i.m:
                o = s.a.stranger;
                break;
            case i.l:
                o = s.a.official;
                break;
            case i.f:
                o = s.a.friendRequest;
                break;
            case i.g:
                o = s.a.groupNotice
        }
        return a.a.createElement("div", {onClick: r, className: n}, a.a.createElement(c.a, {
            key: o.uid,
            className: "avatar ".concat(t || " "),
            placeholdersrc: l.a,
            errorsrc: l.a,
            src: o.img || o.icon || o.faceUrl || l.a
        }))
    }

    function p(e) {
        return a.a.createElement(d, f({}, e, {userItem: s.a.friendRequest}))
    }

    d.defaultProps = {
        onClick: function () {
        }, className: "", wrapperClassName: "", userItem: {}
    }, d.propTypes = {
        onClick: o.PropTypes.func,
        className: o.PropTypes.string,
        wrapperClassName: o.PropTypes.string,
        userItem: o.PropTypes.object
    }
}, function (e, t, n) {
    e.exports = n(17)(6)
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return i
    }), n.d(t, "c", function () {
        return c
    }), n.d(t, "a", function () {
        return u
    }), n.d(t, "d", function () {
        return l
    });
    var r = n(5), A = n(1), P = n(8), j = n(4), o = n(7), a = n(14), R = (n(3), n(37));

    function x(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var i = {
        deleteFriendType: "Delete_Type_Both",
        getC2CHistoryCount: 15,
        reqRecentSessCount: 100,
        getAllFriendCount: 1e3,
        getPendencyCount: 20,
        getGroupPendencyCount: 10,
        getGroupHistoryCount: 15
    }, c = {sdkAppID: "1400029396", appIDAt3rd: "1400029396", accountType: 9967};

    function D(e) {
        var t = e.chatWithId, n = e.content, r = j.a.getCurrentUserInfo().uid, o = n.getUserIdList() || [],
            i = n.getOpType(), a = n.getOpUserId();
        switch (i) {
            case webim.GROUP_TIP_TYPE.JOIN:
                if (n.MsgMemberExtraInfo) {
                    var c = n.MsgMemberExtraInfo.map(function (e) {
                        return e.addedIconAndName = !0, e
                    });
                    (c = c.filter(function (e) {
                        return (e.uid || e.UserId) != r
                    })) && c.length && A.g.dispatch(A.p.appendMembers(t, c))
                }
                break;
            case webim.GROUP_TIP_TYPE.QUIT:
                r != a && A.g.dispatch(A.p.removeMember(t, a));
                break;
            case webim.GROUP_TIP_TYPE.KICK:
                o.forEach(function (e) {
                    r != e && A.g.dispatch(A.p.removeMember(t, e))
                });
                break;
            case webim.GROUP_TIP_TYPE.SET_ADMIN:
                var s = [];
                o.forEach(function (e) {
                    var t = {uid: e, role: "Admin"};
                    s.push(t)
                }), s.length && (A.g.dispatch(A.p.updateMember(t, s)), A.g.dispatch(A.p.getMemberIdList(t)));
                break;
            case webim.GROUP_TIP_TYPE.CANCEL_ADMIN:
                var u = [];
                o.forEach(function (e) {
                    var t = {uid: e, role: "Member"};
                    u.push(t)
                }), u.length && (A.g.dispatch(A.p.updateMember(t, u)), A.g.dispatch(A.p.getMemberIdList(t)));
                break;
            case webim.GROUP_TIP_TYPE.MODIFY_GROUP_INFO:
                break;
            case webim.GROUP_TIP_TYPE.MODIFY_MEMBER_INFO:
                var l = n.getMemberInfoList(), f = [];
                l.forEach(function (e) {
                    var t = e.getShutupTime(), n = {uid: e.userId};
                    t = t ? Math.floor(((new Date).getTime() - "".concat(-t, "000")) / 1e3) : 0, n.shutUpUntil = t, f.push(n)
                }), f.length && A.g.dispatch(A.p.updateMember(t, f))
        }
    }

    var s = null;

    function u(e) {
        s = e
    }

    var l = {
        onConnNotify: function (e) {
            var t;
            switch (e.ErrorCode) {
                case webim.CONNECTION_STATUS.ON:
                    webim.Log.warn("建立连接成功: ".concat(e.ErrorInfo));
                    break;
                case webim.CONNECTION_STATUS.OFF:
                    t = "连接已断开，无法收到新消息，请检查下你的网络是否正常: ".concat(e.ErrorInfo), webim.Log.warn(t);
                    break;
                case webim.CONNECTION_STATUS.RECONNECT:
                    t = "连接状态恢复正常: ".concat(e.ErrorInfo), webim.Log.warn(t);
                    break;
                default:
                    webim.Log.error("未知连接状态: =".concat(e.ErrorInfo))
            }
        }, jsonpCallback: function (e) {
            webim.setJsonpLastRspData(e)
        }, onMsgNotify: function (e) {
            for (var k = A.g.getState().chatDetail.chatWithId, t = 0; t < e.length; t++) {
                var M = e[t], L = M.getSession(), n = L.type();
                n === webim.SESSION_TYPE.C2C ? function () {
                    var e = function () {
                        if (A.g.dispatch(A.d.unshiftItem(o)), A.g.getState().msgStore.msgStore[n]) {
                            var e = !1;
                            A.g.getState().chatDetail.chatWithId == n && (t.isSend ? e = !0 : A.g.dispatch(A.c.newMessage())), A.g.dispatch(A.t.appendItem(n, t)), e && A.g.dispatch(A.c.scrollToBottom())
                        }
                    }, t = P.a.convertMsg(M);
                    4 == t.type && (t.soundUnread = !0);
                    var n = t.chatWithId, r = L || webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.C2C, n),
                        o = {uid: n, time: t.time};
                    k == n ? (o.count = 0, webim.setAutoRead(r, !0, !0)) : r && (o.count = r.unread());
                    var i = P.a.getMsgShow(t);
                    i && (o.msgShow = i), Object(a.e)() ? j.a.getUserInfoReady(n, !0).then(function () {
                        e()
                    }).catch(function (e) {
                        throw e
                    }) : e()
                }() : n === webim.SESSION_TYPE.GROUP && function () {
                    var n = P.a.convertMsg(M);
                    if (A.g.dispatch(A.p.updateMember(n.chatWithId, {
                        uid: n.fromAccount,
                        groupFansLevel: n.groupFansLevel
                    })), 4 != n.type || n.isSend || (n.soundUnread = !0), 14 === n.type && !n.isSend) {
                        var t = {
                            AnchorNn: n.anchorNn,
                            CallMsg: n.callMsg,
                            Link: n.link,
                            CallId: n.callId,
                            RoomId: n.roomId,
                            Leadernn: n.leadernn,
                            MotorcadeFlag: n.motorcadeFlag,
                            FishBall: n.fishBall,
                            GroupId: n.groupId,
                            GroupName: n.leadernn
                        };
                        Object(j.c)(n.groupId).then(function (e) {
                            e && e[0] && (t.GroupName = e[0].name), Object(R.a)("IMCallPopUpMsg", t)
                        }).catch(function (e) {
                            Object(R.a)("IMCallPopUpMsg", t)
                        })
                    }
                    var e = L, r = L.id(), o = {uid: r, contactType: "GROUP", fromAccount: M.fromAccount, time: n.time};
                    if (k == r) o.count = 0, webim.setAutoRead(e, !0, !0); else if (e) {
                        var i = null, a = A.g.getState().chatList.chatList;
                        a && a.some(function (e) {
                            return e.uid === r && (i = e, !0)
                        });
                        var c = 0;
                        i && (c = i.count || 0), n.fromAccount != j.a.getCurrentUserInfo().uid && 2 !== Number(n.subType) && c++, o.count = c
                    }
                    var s = P.a.getMsgShow(n);
                    s && (o.msgShow = s), n.fromAccount == j.a.getCurrentUserInfo().uid && (o.count = 0), n.fromAccount == j.a.getCurrentUserInfo().uid || 2 === Number(n.subType) ? A.g.dispatch(A.d.addItem(o)) : A.g.dispatch(A.d.unshiftItem(o));
                    var u = A.g.getState().msgStore.msgStore[r];
                    if (u) {
                        var l = u.msgList, f = !0;
                        if (n.isGroup && !n.state) {
                            var d = j.a.getCurrentUserInfo().uid;
                            if (n.fromAccount === d) for (var p = l.length - 1, m = Math.max(0, l.length - 10), h = p; m <= h; h--) {
                                var g = l[h];
                                if (g.fromAccount === d && g.random === n.random) {
                                    A.g.dispatch(A.p.checkMsgAndUpdateMember(n.chatWithId, [n], !0)), l[h] = n, f = !1;
                                    break
                                }
                            }
                        }
                        if (f) if (-1 == n.type) {
                            var b = n.content, v = [];
                            if (b) {
                                b.userIdList && (v = x(b.userIdList)), b.opUserId && v.push(b.opUserId), (b.MsgMemberExtraInfo || b.MsgOperatorMemberExtraInfo) && (v = []), b.MsgMemberExtraInfo = b.MsgMemberExtraInfo || [];
                                var y = [];
                                if (v.length) {
                                    var S = A.g.getState().groupStore.groupStore;
                                    if (S && S[r]) {
                                        var w = S[r].members || {};
                                        v.forEach(function (e) {
                                            var t = w[e];
                                            t && (t.fromAccountNick || t.nameCard) ? (t.old = !0, b.MsgMemberExtraInfo.push(t)) : y.push(e)
                                        })
                                    }
                                }
                                if (y && y.length) j.a.fetchQcloudUserInfo(y).then(function (e) {
                                    n.content.MsgMemberExtraInfo = [].concat(x(e), x(n.content.MsgMemberExtraInfo));
                                    var t = !1;
                                    k == r && n.isSend && (t = !0), A.g.dispatch(A.t.appendItem(r, n, !0)), t && A.g.dispatch(A.c.scrollToBottom()), D(n)
                                }); else {
                                    var E = !1;
                                    k == r && n.isSend && (E = !0), A.g.dispatch(A.t.appendItem(r, n, !0)), E && A.g.dispatch(A.c.scrollToBottom()), D(n)
                                }
                            }
                        } else {
                            var I = !1;
                            k == r && (n.isSend ? I = !0 : A.g.dispatch(A.c.newMessage())), A.g.dispatch(A.t.appendItem(r, n, !0)), I && A.g.dispatch(A.c.scrollToBottom())
                        }
                    } else if (-1 === n.type) {
                        var T = n.content, O = [];
                        if (T) {
                            T.userIdList && (O = x(T.userIdList)), T.opUserId && O.push(T.opUserId), (T.MsgMemberExtraInfo || T.MsgOperatorMemberExtraInfo) && (O = []);
                            var _ = [];
                            if (O.length) {
                                var N = A.g.getState().groupStore.groupStore;
                                if (N && N[r]) {
                                    var C = N[r].members || {};
                                    O.forEach(function (e) {
                                        var t = C[e];
                                        t && (t.fromAccountNick || t.nameCard) || _.push(e)
                                    })
                                }
                            }
                            _ && _.length ? j.a.fetchQcloudUserInfo(_).then(function (e) {
                                n.content.MsgMemberExtraInfo = e, D(n)
                            }) : D(n)
                        }
                        A.g.dispatch(A.t.setItem({
                            isGroup: !0,
                            isNewest: !1,
                            loaded: !0,
                            uid: n.content.groupId,
                            msgList: [n]
                        }))
                    }
                }()
            }
        }, onFriendSystemNotifys: {
            1: function (t) {
                Object(a.e)() ? A.g.dispatch(A.l.onFriendListRefresh()).then(function () {
                    if (t.Accounts && t.Accounts.length) {
                        var e = A.g.getState().friendRequest.friendRequestList;
                        t.Accounts.forEach(function (t) {
                            e && e.some(function (e) {
                                return e.uid === t
                            }) && A.g.dispatch(A.m.removeItem(t))
                        })
                    }
                }) : A.g.dispatch(A.l.initWithoutUserInfo()).then(function () {
                    if (t.Accounts && t.Accounts.length) {
                        var e = A.g.getState().friendRequest.friendRequestList;
                        t.Accounts.forEach(function (t) {
                            e && e.some(function (e) {
                                return e.uid === t
                            }) && A.g.dispatch(A.m.removeItem(t))
                        })
                    }
                })
            }, 2: function (e) {
                Object(a.e)() ? (e && e.Accounts && e.Accounts[0] && j.a.fetchUserInfoAndRefreshStore(e.Accounts[0], !0), A.g.dispatch(A.l.onFriendListRefresh()).then(function () {
                    e.Accounts && e.Accounts.length && e.Accounts.forEach(function (e) {
                        A.g.dispatch(A.z.clearRemarkName(e))
                    })
                })) : A.g.dispatch(A.l.initWithoutUserInfo()).then(function () {
                    e.Accounts && e.Accounts.length && e.Accounts.forEach(function (e) {
                        A.g.dispatch(A.z.clearRemarkName(e))
                    })
                })
            }, 3: function (e) {
                if (e && e.PendencyList && e.PendencyList.length) {
                    var t = A.g.getState().friendRequest.friendRequestList;
                    j.a.getFriendRequestHistoryAndRefreshStore().then(function () {
                        var e = A.g.getState().friendRequest.friendRequestList;
                        (function () {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                                r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                            return e != r && (!e || !r || e.length != r.length || e.some(function (e, t) {
                                var n = r[t];
                                return !n || e.id != n.id
                            }))
                        })(t, e) && A.g.dispatch(A.d.unshiftItem(r.f))
                    })
                }
            }, 4: function (e) {
                e && e.Accounts && e.Accounts.length && A.g.dispatch(A.m.removeItem(e.Accounts))
            }, 5: function (e) {
                e && e.Accounts && e.Accounts.length && e.Accounts.forEach(function (e) {
                    A.g.dispatch(A.b.add(e))
                })
            }, 6: function (e) {
                e && e.Accounts && e.Accounts.length && e.Accounts.forEach(function (e) {
                    A.g.dispatch(A.b.deleteItem(e))
                })
            }
        }, onProfileSystemNotifys: {
            1: function (e) {
            }
        }, onKickedEventCall: function (e) {
            o.b.info({
                content: "您被踢下线了，点击重连", onOk: function () {
                    window.history.go(0)
                }, okText: "重连", width: 260, maskClosable: !1
            })
        }, onC2cEventNotifys: {
            92: function (e) {
                if (e && e.From_Account) {
                    var t = e.From_Account, n = webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.C2C, t);
                    n && (n._impl.unread = 0), A.g.dispatch(A.d.clearUnread(t))
                }
            }
        }, onGroupSystemNotifys: {
            1: function (n) {
                var e = {DelMsgList: [{From_Account: n.Operator_Account, MsgSeq: n.MsgSeq, MsgRandom: n.MsgRandom}]};
                j.a.deleteApplyJoinGroupPendency(e);
                var t = A.g.getState().groupSystemMsg;
                if (t && t.everLoadedHistory) if (n.groupReportTypeMsg.MsgMemberExtraInfo) A.g.dispatch(A.q.pushItems(n)); else {
                    var r = n.Operator_Account;
                    j.a.fetchQcloudUserInfo([r]).then(function (e) {
                        if (e && 1 == e.length) {
                            var t = e[0];
                            n.groupReportTypeMsg.MsgMemberExtraInfo = t, A.g.dispatch(A.q.pushItems(n))
                        }
                    })
                }
            }, 2: function (e) {
                A.g.dispatch(A.l.refreshGroupList()).then(function () {
                    var e = A.g.getState().friendList.groupList;
                    s && e.some(function (e) {
                        return e == s
                    }) && (A.g.dispatch(A.c.showGroupChatDetail(s)), A.g.dispatch(A.e.changeTab("chatList")), s = null)
                }).catch(function (e) {
                    throw e
                })
            }, 3: function (e) {
            }, 4: function (e) {
                j.a.afterGroupDisappear(e.GroupId, "kicked")
            }, 5: function (e) {
                j.a.afterGroupDisappear(e.GroupId, "destory")
            }, 6: function (e) {
                A.g.dispatch(A.l.refreshGroupList())
            }, 7: function (e) {
                A.g.dispatch(A.l.refreshGroupList()).then(function () {
                    var e = A.g.getState().friendList.groupList;
                    s && e.some(function (e) {
                        return e == s
                    }) && (A.g.dispatch(A.c.showGroupChatDetail(s)), A.g.dispatch(A.e.changeTab("chatList")), s = null)
                }).catch(function (e) {
                    throw e
                })
            }, 8: function (e) {
                j.a.afterGroupDisappear(e.GroupId, "quit")
            }, 9: function (e) {
            }, 10: function (e) {
            }, 11: function (e) {
                j.a.afterGroupDisappear(e.GroupId, "revoke")
            }, 15: function (e) {
                var t = e.GroupId, n = e.LastReadMsgSeq, r = webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.GROUP, t);
                if (r) {
                    var o = r.curMaxMsgSeq - n;
                    0 < o ? A.g.dispatch(A.d.clearUnread(t)) : (o = 0, A.g.dispatch(A.d.changeCount(t, o))), r._impl.unread = o
                } else A.g.dispatch(A.d.clearUnread(t))
            }, 255: function (e) {
                if (255 === e.ReportType && e.UserDefinedField && (JSON.parse(e.UserDefinedField) || {}).shutup) {
                    e.type = -2, A.g.dispatch({type: "MSG_STORE_CHANGE_APPEND_ITEM", uid: e.GroupId, item: e});
                    var t = A.g.getState().groupStore.groupStore, n = e.GroupId,
                        r = A.g.getState().chatDetail.chatWithId, o = t[n], i = JSON.parse(e.UserDefinedField || {});
                    o.shutupAll !== !(1 !== Number(i.shutup)) && (o.shutupAll = !(1 !== Number(i.shutup)), "Member" === o.mySelf.role && r === n && 1 === Number(i.shutup) && (o.shutupAll = void 0), A.g.dispatch(A.p.setItem(o)))
                }
            }, 12: function (n) {
                var e = A.g.getState().groupSystemMsg;
                if (e && e.everLoadedHistory) if (n.groupReportTypeMsg.MsgMemberExtraInfo) A.g.dispatch(A.q.pushItems(n)); else {
                    var t = n.Operator_Account;
                    j.a.fetchQcloudUserInfo([t]).then(function (e) {
                        if (e && 1 == e.length) {
                            var t = e[0];
                            n.groupReportTypeMsg.MsgMemberExtraInfo = t, A.g.dispatch(A.q.pushItems(n))
                        }
                    })
                }
            }, 13: function (e) {
            }, 14: function (e) {
            }
        }, onGroupInfoChangeNotify: function (e) {
            var t = e.GroupId, n = e.GroupFaceUrl, r = e.GroupName, o = e.OwnerAccount, i = e.GroupNotification,
                a = e.GroupIntroduction, c = {groupId: t};
            n && (c.faceUrl = n), r && (c.name = r), o && (c.ownerAccount = o), i && (c.notification = i), a && (c.introduction = a), A.g.dispatch(A.p.setItem(c))
        }
    }
}, function (e, t, n) {
    var r = n(46), o = Math.min;
    e.exports = function (e) {
        return 0 < e ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    });
    var r = n(0), c = n.n(r), o = n(2);
    n(422);

    function i(e) {
        var t = e.className, n = e.type, r = e.onClick, o = e.disable, i = e.children, a = e.canDisableClick;
        return c.a.createElement("span", {
            onClick: function (e) {
                (!o || a) && r && r(e)
            }, className: "btn ".concat(n || " ").concat(o ? " disable " : " ").concat(t || "")
        }, i)
    }

    i.defaultProps = {
        className: "", onClick: function () {
        }, canDisableClick: !1, type: "", children: "", disable: ""
    }, i.propTypes = {
        className: o.PropTypes.string,
        onClick: o.PropTypes.func,
        canDisableClick: o.PropTypes.bool,
        type: o.PropTypes.string,
        children: o.PropTypes.string,
        disable: o.PropTypes.string
    }
}, function (e, t, n) {
    e.exports = {
        searchWrap: "search-searchWrap-2-zoN",
        searchIcon: "search-searchIcon-hl1lp",
        delete: "search-delete-LkR0C",
        inputArea: "search-inputArea-2Cnku",
        searchResultWrap: "search-searchResultWrap-1EOSx",
        searchItemWrap: "search-searchItemWrap-1MnUy",
        searchItem: "search-searchItem-2RY8P",
        searchName: "search-searchName-3F0Ry",
        searchNickNameWrap: "search-searchNickNameWrap-3-JaZ",
        searchNickName: "search-searchNickName-3OxO5",
        searchAvatarWrap: "search-searchAvatarWrap-2hs8K",
        searchNickAvatarWrap: "search-searchNickAvatarWrap-39PHE",
        searchAvatar: "search-searchAvatar-3Ewdq",
        noResult: "search-noResult-12zwr"
    }
}, function (e, t) {
    var n = e.exports = {version: "2.6.5"};
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    var r = n(12), o = n(158), i = n(55), a = Object.defineProperty;
    t.f = n(28) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return a(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(112), o = n.n(r), i = n(43), y = n.n(i), T = n(0), a = n.n(T), c = n(2), s = n.n(c);

    function O(e) {
        return "string" == typeof e
    }

    function _() {
        return -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac") ? 0 : 17
    }

    function u() {
        return !1
    }

    function S(e) {
        var t = e.clientWidth, n = getComputedStyle(e), r = n.paddingLeft, o = n.paddingRight;
        return t - parseFloat(r) - parseFloat(o)
    }

    function w(e) {
        var t = e.clientHeight, n = getComputedStyle(e), r = n.paddingTop, o = n.paddingBottom;
        return t - parseFloat(r) - parseFloat(o)
    }

    var N = {position: "relative", overflow: "hidden", width: "100%", height: "100%"}, C = {height: "auto"}, k = {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "scroll",
            WebkitOverflowScrolling: "touch"
        }, M = {position: "relative", top: void 0, left: void 0, right: void 0, bottom: void 0},
        L = {overflow: "hidden", marginRight: 0, marginBottom: 0}, A = {position: "absolute", height: 6},
        P = {position: "absolute", width: 6}, j = {position: "relative", display: "block", height: "100%"},
        R = {position: "relative", display: "block", width: "100%"}, l = {userSelect: "none"}, f = {userSelect: ""};

    function d() {
        return (d = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (e) {
                m(t, e, n[e])
            })
        }
        return t
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }

    function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function x(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (e) {
                b(t, e, n[e])
            })
        }
        return t
    }

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function G(e, t) {
        return (G = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var F = function (e) {
        function a(e) {
            var t, n;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, a);
            for (var r = arguments.length, o = new Array(1 < r ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
            return (n = function (e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? I(e) : t
            }(this, (t = E(a)).call.apply(t, [this, e].concat(o)))).getScrollLeft = n.getScrollLeft.bind(I(n)), n.getScrollTop = n.getScrollTop.bind(I(n)), n.getScrollWidth = n.getScrollWidth.bind(I(n)), n.getScrollHeight = n.getScrollHeight.bind(I(n)), n.getClientWidth = n.getClientWidth.bind(I(n)), n.getClientHeight = n.getClientHeight.bind(I(n)), n.getValues = n.getValues.bind(I(n)), n.getThumbHorizontalWidth = n.getThumbHorizontalWidth.bind(I(n)), n.getThumbVerticalHeight = n.getThumbVerticalHeight.bind(I(n)), n.getScrollLeftForOffset = n.getScrollLeftForOffset.bind(I(n)), n.getScrollTopForOffset = n.getScrollTopForOffset.bind(I(n)), n.scrollLeft = n.scrollLeft.bind(I(n)), n.scrollTop = n.scrollTop.bind(I(n)), n.scrollToLeft = n.scrollToLeft.bind(I(n)), n.scrollToTop = n.scrollToTop.bind(I(n)), n.scrollToRight = n.scrollToRight.bind(I(n)), n.scrollToBottom = n.scrollToBottom.bind(I(n)), n.handleTrackMouseEnter = n.handleTrackMouseEnter.bind(I(n)), n.handleTrackMouseLeave = n.handleTrackMouseLeave.bind(I(n)), n.handleHorizontalTrackMouseDown = n.handleHorizontalTrackMouseDown.bind(I(n)), n.handleVerticalTrackMouseDown = n.handleVerticalTrackMouseDown.bind(I(n)), n.handleHorizontalThumbMouseDown = n.handleHorizontalThumbMouseDown.bind(I(n)), n.handleVerticalThumbMouseDown = n.handleVerticalThumbMouseDown.bind(I(n)), n.handleWindowResize = n.handleWindowResize.bind(I(n)), n.handleScroll = n.handleScroll.bind(I(n)), n.handleDrag = n.handleDrag.bind(I(n)), n.handleDragEnd = n.handleDragEnd.bind(I(n)), n.handleMousewheel = n.handleMousewheel.bind(I(n)), n.state = {didMountUniversal: !1}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && G(e, t)
        }(a, T["Component"]), function (e, t, n) {
            t && v(e.prototype, t), n && v(e, n)
        }(a, [{
            key: "componentDidMount", value: function () {
                this.addListeners(), this.update(), this.componentDidMountUniversal()
            }
        }, {
            key: "componentDidMountUniversal", value: function () {
                this.props.universal && this.setState({didMountUniversal: !0})
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.update()
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.removeListeners(), Object(r.cancel)(this.requestFrame), clearTimeout(this.hideTracksTimeout), clearInterval(this.detectScrollingInterval)
            }
        }, {
            key: "getScrollLeft", value: function () {
                return this.view ? this.view.scrollLeft : 0
            }
        }, {
            key: "getScrollTop", value: function () {
                return this.view ? this.view.scrollTop : 0
            }
        }, {
            key: "getScrollWidth", value: function () {
                return this.view ? this.view.scrollWidth : 0
            }
        }, {
            key: "getScrollHeight", value: function () {
                return this.view ? this.view.scrollHeight : 0
            }
        }, {
            key: "getClientWidth", value: function () {
                return this.view ? this.view.clientWidth : 0
            }
        }, {
            key: "getClientHeight", value: function () {
                return this.view ? this.view.clientHeight : 0
            }
        }, {
            key: "getValues", value: function () {
                var e = this.view || {}, t = e.scrollLeft, n = void 0 === t ? 0 : t, r = e.scrollTop,
                    o = void 0 === r ? 0 : r, i = e.scrollWidth, a = void 0 === i ? 0 : i, c = e.scrollHeight,
                    s = void 0 === c ? 0 : c, u = e.clientWidth, l = void 0 === u ? 0 : u, f = e.clientHeight,
                    d = void 0 === f ? 0 : f;
                return {
                    left: n / (a - l) || 0,
                    top: o / (s - d) || 0,
                    scrollLeft: n,
                    scrollTop: o,
                    scrollWidth: a,
                    scrollHeight: s,
                    clientWidth: l,
                    clientHeight: d
                }
            }
        }, {
            key: "getThumbHorizontalWidth", value: function () {
                var e = this.props, t = e.thumbSize, n = e.thumbMinSize, r = this.view, o = r.scrollWidth,
                    i = r.clientWidth, a = S(this.trackHorizontal), c = Math.ceil(i / o * a);
                return a === c ? 0 : t || Math.max(c, n)
            }
        }, {
            key: "getThumbVerticalHeight", value: function () {
                var e = this.props, t = e.thumbSize, n = e.thumbMinSize, r = this.view, o = r.scrollHeight,
                    i = r.clientHeight, a = w(this.trackVertical), c = Math.ceil(i / o * a);
                return a === c ? 0 : t || Math.max(c, n)
            }
        }, {
            key: "getScrollLeftForOffset", value: function (e) {
                var t = this.view, n = t.scrollWidth, r = t.clientWidth;
                return e / (S(this.trackHorizontal) - this.getThumbHorizontalWidth()) * (n - r)
            }
        }, {
            key: "getScrollTopForOffset", value: function (e) {
                var t = this.view, n = t.scrollHeight, r = t.clientHeight;
                return e / (w(this.trackVertical) - this.getThumbVerticalHeight()) * (n - r)
            }
        }, {
            key: "scrollLeft", value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                this.view && (this.view.scrollLeft = e)
            }
        }, {
            key: "scrollTop", value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                this.view && (this.view.scrollTop = e)
            }
        }, {
            key: "scrollToLeft", value: function () {
                this.view && (this.view.scrollLeft = 0)
            }
        }, {
            key: "scrollToTop", value: function () {
                this.view && (this.view.scrollTop = 0)
            }
        }, {
            key: "scrollToRight", value: function () {
                this.view && (this.view.scrollLeft = this.view.scrollWidth)
            }
        }, {
            key: "scrollToBottom", value: function () {
                this.view && (this.view.scrollTop = this.view.scrollHeight)
            }
        }, {
            key: "addListeners", value: function () {
                if ("undefined" != typeof document && this.view) {
                    var e = this.view, t = this.trackHorizontal, n = this.trackVertical, r = this.thumbHorizontal,
                        o = this.thumbVertical;
                    e.addEventListener("scroll", this.handleScroll), e.addEventListener("wheel", this.handleMousewheel), _() && (t.addEventListener("mouseenter", this.handleTrackMouseEnter), t.addEventListener("mouseleave", this.handleTrackMouseLeave), t.addEventListener("mousedown", this.handleHorizontalTrackMouseDown), n.addEventListener("mouseenter", this.handleTrackMouseEnter), n.addEventListener("mouseleave", this.handleTrackMouseLeave), n.addEventListener("mousedown", this.handleVerticalTrackMouseDown), r.addEventListener("mousedown", this.handleHorizontalThumbMouseDown), o.addEventListener("mousedown", this.handleVerticalThumbMouseDown), window.addEventListener("resize", this.handleWindowResize))
                }
            }
        }, {
            key: "removeListeners", value: function () {
                if ("undefined" != typeof document && this.view) {
                    var e = this.view, t = this.trackHorizontal, n = this.trackVertical, r = this.thumbHorizontal,
                        o = this.thumbVertical;
                    e.removeEventListener("scroll", this.handleScroll), e.removeEventListener("wheel", this.handleMousewheel), _() && (t.removeEventListener("mouseenter", this.handleTrackMouseEnter), t.removeEventListener("mouseleave", this.handleTrackMouseLeave), t.removeEventListener("mousedown", this.handleHorizontalTrackMouseDown), n.removeEventListener("mouseenter", this.handleTrackMouseEnter), n.removeEventListener("mouseleave", this.handleTrackMouseLeave), n.removeEventListener("mousedown", this.handleVerticalTrackMouseDown), r.removeEventListener("mousedown", this.handleHorizontalThumbMouseDown), o.removeEventListener("mousedown", this.handleVerticalThumbMouseDown), window.removeEventListener("resize", this.handleWindowResize), this.teardownDragging())
                }
            }
        }, {
            key: "handleMousewheel", value: function (e) {
                var t = this.view, n = this.getValues(), r = n.scrollTop, o = n.scrollHeight, i = n.clientHeight,
                    a = -e.deltaY;
                (0 < a && r <= a || a < 0 && o - i - r <= -1 * a) && (t.scrollTop = 0 < a ? 0 : o, e.preventDefault())
            }
        }, {
            key: "handleScroll", value: function (e) {
                var r = this, t = this.props, n = t.onScroll, o = t.onScrollFrame;
                n && n(e), this.update(function (e) {
                    var t = e.scrollLeft, n = e.scrollTop;
                    r.viewScrollLeft = t, r.viewScrollTop = n, o && o(e)
                }), this.detectScrolling(), e.stopPropagation()
            }
        }, {
            key: "handleScrollStart", value: function () {
                var e = this.props.onScrollStart;
                e && e(), this.handleScrollStartAutoHide()
            }
        }, {
            key: "handleScrollStartAutoHide", value: function () {
                this.props.autoHide && this.showTracks()
            }
        }, {
            key: "handleScrollStop", value: function () {
                var e = this.props.onScrollStop;
                e && e(), this.handleScrollStopAutoHide()
            }
        }, {
            key: "handleScrollStopAutoHide", value: function () {
                this.props.autoHide && this.hideTracks()
            }
        }, {
            key: "handleWindowResize", value: function () {
                this.update()
            }
        }, {
            key: "handleHorizontalTrackMouseDown", value: function (e) {
                e.preventDefault();
                var t = e.target, n = e.clientX, r = t.getBoundingClientRect().left, o = this.getThumbHorizontalWidth(),
                    i = Math.abs(r - n) - o / 2;
                this.view.scrollLeft = this.getScrollLeftForOffset(i)
            }
        }, {
            key: "handleVerticalTrackMouseDown", value: function (e) {
                e.preventDefault();
                var t = e.target, n = e.clientY, r = t.getBoundingClientRect().top, o = this.getThumbVerticalHeight(),
                    i = Math.abs(r - n) - o / 2;
                this.view.scrollTop = this.getScrollTopForOffset(i)
            }
        }, {
            key: "handleHorizontalThumbMouseDown", value: function (e) {
                e.preventDefault(), e.stopPropagation(), this.handleDragStart(e);
                var t = e.target, n = e.clientX, r = t.offsetWidth, o = t.getBoundingClientRect().left;
                this.prevPageX = r - (n - o)
            }
        }, {
            key: "handleVerticalThumbMouseDown", value: function (e) {
                e.preventDefault(), e.stopPropagation(), this.handleDragStart(e);
                var t = e.target, n = e.clientY, r = t.offsetHeight, o = t.getBoundingClientRect().top;
                this.prevPageY = r - (n - o)
            }
        }, {
            key: "setupDragging", value: function () {
                y()(document.body, l), document.addEventListener("mousemove", this.handleDrag), document.addEventListener("mouseup", this.handleDragEnd), document.onselectstart = u
            }
        }, {
            key: "teardownDragging", value: function () {
                y()(document.body, f), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleDragEnd), document.onselectstart = void 0
            }
        }, {
            key: "handleDragStart", value: function (e) {
                this.dragging = !0, e.stopImmediatePropagation(), this.setupDragging()
            }
        }, {
            key: "handleDrag", value: function (e) {
                if (this.prevPageX) {
                    var t = e.clientX,
                        n = -this.trackHorizontal.getBoundingClientRect().left + t - (this.getThumbHorizontalWidth() - this.prevPageX);
                    this.view.scrollLeft = this.getScrollLeftForOffset(n)
                }
                if (this.prevPageY) {
                    var r = e.clientY,
                        o = -this.trackVertical.getBoundingClientRect().top + r - (this.getThumbVerticalHeight() - this.prevPageY);
                    this.view.scrollTop = this.getScrollTopForOffset(o)
                }
                return !1
            }
        }, {
            key: "handleDragEnd", value: function () {
                this.dragging = !1, this.prevPageX = this.prevPageY = 0, this.teardownDragging(), this.handleDragEndAutoHide()
            }
        }, {
            key: "handleDragEndAutoHide", value: function () {
                this.props.autoHide && this.hideTracks()
            }
        }, {
            key: "handleTrackMouseEnter", value: function () {
                this.trackMouseOver = !0, this.handleTrackMouseEnterAutoHide()
            }
        }, {
            key: "handleTrackMouseEnterAutoHide", value: function () {
                this.props.autoHide && this.showTracks()
            }
        }, {
            key: "handleTrackMouseLeave", value: function () {
                this.trackMouseOver = !1, this.handleTrackMouseLeaveAutoHide()
            }
        }, {
            key: "handleTrackMouseLeaveAutoHide", value: function () {
                this.props.autoHide && this.hideTracks()
            }
        }, {
            key: "showTracks", value: function () {
                clearTimeout(this.hideTracksTimeout), y()(this.trackHorizontal, {opacity: 1}), y()(this.trackVertical, {opacity: 1})
            }
        }, {
            key: "hideTracks", value: function () {
                var e = this;
                if (!this.dragging && !this.scrolling && !this.trackMouseOver) {
                    var t = this.props.autoHideTimeout;
                    clearTimeout(this.hideTracksTimeout), this.hideTracksTimeout = setTimeout(function () {
                        y()(e.trackHorizontal, {opacity: 0}), y()(e.trackVertical, {opacity: 0})
                    }, t)
                }
            }
        }, {
            key: "detectScrolling", value: function () {
                var e = this;
                this.scrolling || (this.scrolling = !0, this.handleScrollStart(), this.detectScrollingInterval = setInterval(function () {
                    e.lastViewScrollLeft === e.viewScrollLeft && e.lastViewScrollTop === e.viewScrollTop && (clearInterval(e.detectScrollingInterval), e.scrolling = !1, e.handleScrollStop()), e.lastViewScrollLeft = e.viewScrollLeft, e.lastViewScrollTop = e.viewScrollTop
                }, 100))
            }
        }, {
            key: "raf", value: function (e) {
                var t = this;
                this.requestFrame && o.a.cancel(this.requestFrame), this.requestFrame = o()(function () {
                    t.requestFrame = void 0, e()
                })
            }
        }, {
            key: "update", value: function (e) {
                var t = this;
                this.raf(function () {
                    return t._update(e)
                })
            }
        }, {
            key: "_update", value: function (e) {
                var t = this.props, n = t.onUpdate, r = t.hideTracksWhenNotNeeded, o = this.getValues();
                if (_()) {
                    var i = o.scrollLeft, a = o.clientWidth, c = o.scrollWidth, s = S(this.trackHorizontal),
                        u = this.getThumbHorizontalWidth(),
                        l = {width: u, transform: "translateX(".concat(i / (c - a) * (s - u), "px)")}, f = o.scrollTop,
                        d = o.clientHeight, p = o.scrollHeight, m = w(this.trackVertical),
                        h = this.getThumbVerticalHeight(),
                        g = {height: h, transform: "translateY(".concat(f / (p - d) * (m - h), "px)")};
                    if (r) {
                        var b = {visibility: a < c ? "visible" : "hidden"},
                            v = {visibility: d < p ? "visible" : "hidden"};
                        y()(this.trackHorizontal, b), y()(this.trackVertical, v)
                    }
                    y()(this.thumbHorizontal, l), y()(this.thumbVertical, g)
                }
                n && n(o), "function" == typeof e && e(o)
            }
        }, {
            key: "render", value: function () {
                var t = this, e = _(), n = this.props,
                    r = (n.onScroll, n.onScrollFrame, n.onScrollStart, n.onScrollStop, n.onUpdate, n.renderView),
                    o = n.renderTrackHorizontal, i = n.renderTrackVertical, a = n.renderThumbHorizontal,
                    c = n.renderThumbVertical, s = n.tagName, u = (n.hideTracksWhenNotNeeded, n.autoHide),
                    l = (n.autoHideTimeout, n.autoHideDuration), f = (n.thumbSize, n.thumbMinSize, n.universal),
                    d = n.autoHeight, p = n.autoHeightMin, m = n.autoHeightMax, h = n.style, g = n.children,
                    b = D(n, ["onScroll", "onScrollFrame", "onScrollStart", "onScrollStop", "onUpdate", "renderView", "renderTrackHorizontal", "renderTrackVertical", "renderThumbHorizontal", "renderThumbVertical", "tagName", "hideTracksWhenNotNeeded", "autoHide", "autoHideTimeout", "autoHideDuration", "thumbSize", "thumbMinSize", "universal", "autoHeight", "autoHeightMin", "autoHeightMax", "style", "children"]),
                    v = this.state.didMountUniversal, y = x({}, N, d && x({}, C, {minHeight: p, maxHeight: m}), h),
                    S = x({}, k, {
                        marginRight: e ? -e : 0,
                        marginBottom: e ? -e : 0
                    }, d && x({}, M, {
                        minHeight: O(p) ? "calc(".concat(p, " + ").concat(e, "px)") : p + e,
                        maxHeight: O(m) ? "calc(".concat(m, " + ").concat(e, "px)") : m + e
                    }), d && f && !v && {minHeight: p, maxHeight: m}, f && !v && L),
                    w = {transition: "opacity ".concat(l, "ms"), opacity: 0},
                    E = x({}, A, u && w, (!e || f && !v) && {display: "none"}),
                    I = x({}, P, u && w, (!e || f && !v) && {display: "none"});
                return Object(T.createElement)(s, x({}, b, {
                    style: y, ref: function (e) {
                        t.container = e
                    }
                }), [Object(T.cloneElement)(r({style: S}), {
                    key: "view", ref: function (e) {
                        t.view = e
                    }
                }, g), Object(T.cloneElement)(o({style: E}), {
                    key: "trackHorizontal", ref: function (e) {
                        t.trackHorizontal = e
                    }
                }, Object(T.cloneElement)(a({style: j}), {
                    ref: function (e) {
                        t.thumbHorizontal = e
                    }
                })), Object(T.cloneElement)(i({style: I}), {
                    key: "trackVertical", ref: function (e) {
                        t.trackVertical = e
                    }
                }, Object(T.cloneElement)(c({style: R}), {
                    ref: function (e) {
                        t.thumbVertical = e
                    }
                }))])
            }
        }]), a
    }();
    F.propTypes = {
        onScroll: s.a.func,
        onScrollFrame: s.a.func,
        onScrollStart: s.a.func,
        onScrollStop: s.a.func,
        onUpdate: s.a.func,
        renderView: s.a.func,
        renderTrackHorizontal: s.a.func,
        renderTrackVertical: s.a.func,
        renderThumbHorizontal: s.a.func,
        renderThumbVertical: s.a.func,
        tagName: s.a.string,
        thumbSize: s.a.number,
        thumbMinSize: s.a.number,
        hideTracksWhenNotNeeded: s.a.bool,
        autoHide: s.a.bool,
        autoHideTimeout: s.a.number,
        autoHideDuration: s.a.number,
        autoHeight: s.a.bool,
        autoHeightMin: s.a.oneOfType([s.a.number, s.a.string]),
        autoHeightMax: s.a.oneOfType([s.a.number, s.a.string]),
        universal: s.a.bool,
        style: s.a.object,
        children: s.a.node
    }, F.defaultProps = {
        renderView: function (e) {
            return a.a.createElement("div", e)
        },
        renderTrackHorizontal: function (e) {
            var t = e.style, n = h(e, ["style"]), r = p({}, t, {right: 2, bottom: 2, left: 2, borderRadius: 3});
            return a.a.createElement("div", d({style: r}, n))
        },
        renderTrackVertical: function (e) {
            var t = e.style, n = h(e, ["style"]), r = p({}, t, {right: 2, bottom: 2, top: 2, borderRadius: 3});
            return a.a.createElement("div", d({style: r}, n))
        },
        renderThumbHorizontal: function (e) {
            var t = e.style, n = h(e, ["style"]),
                r = p({}, t, {cursor: "pointer", borderRadius: "inherit", backgroundColor: "rgba(0,0,0,.2)"});
            return a.a.createElement("div", d({style: r}, n))
        },
        renderThumbVertical: function (e) {
            var t = e.style, n = h(e, ["style"]),
                r = p({}, t, {cursor: "pointer", borderRadius: "inherit", backgroundColor: "rgba(0,0,0,.2)"});
            return a.a.createElement("div", d({style: r}, n))
        },
        tagName: "div",
        thumbMinSize: 30,
        hideTracksWhenNotNeeded: !1,
        autoHide: !1,
        autoHideTimeout: 1e3,
        autoHideDuration: 200,
        autoHeight: !1,
        autoHeightMin: 0,
        autoHeightMax: 200,
        universal: !1
    };
    t.a = F
}, function (e, t, n) {
    e.exports = !n(11)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    n.d(t, "a", function () {
        return o
    });
    var o = function (e) {
        var t = e || {}, n = Object.keys(t).map(function (e) {
            return "".concat(e, "=").concat(encodeURIComponent(function (e) {
                return "object" === r(e) ? JSON.stringify(e) : e
            }(t[e])))
        });
        return 0 !== n.length && n.join("&")
    }
}, function (e, t) {
    function o(e) {
        if (history.replaceState && "function" == typeof history.replaceState) {
            var t = location.href;
            t.indexOf("#") < 0 && (t += "#"), t = t.replace(/#[\w\W]*/, "#" + e).replace("##", "#"), history.replaceState(null, "", t)
        } else location.hash = e
    }

    function i(e) {
        var t = location.hash;
        return o(t = t.replace(new RegExp("(?:(\\?)|\\&)" + e + "=[\\w]+([\\&]?)", "g"), "$1$2").replace("?&", "?").replace(/#\?$|#$|\?$/, "")), t
    }

    e.exports = {
        getUrlParam: function (e) {
            var t, n, r = location.href, o = r.substring(r.indexOf("?") + 1, r.length).split("&"), i = {};
            for (t = 0; n = o[t]; t++) i[n.substring(0, n.indexOf("=")).toLowerCase()] = n.substring(n.indexOf("=") + 1, n.length);
            var a = i[e.toLowerCase()];
            return void 0 === a ? "" : a
        }, getHashParam: function (e) {
            var t, n, r = location.hash, o = r.substring(r.indexOf("?") + 1, r.length).split("&"), i = {};
            for (t = 0; n = o[t]; t++) i[n.substring(0, n.indexOf("=")).toLowerCase()] = n.substring(n.indexOf("=") + 1, n.length);
            var a = i[e.toLowerCase()];
            return void 0 === a ? "" : a
        }, addHashParam: function (e, t) {
            i(e);
            var n = location.hash, r = (0 <= n.indexOf("?") ? "&" : "?") + e + "=" + t;
            o(n += r)
        }, removeHashParam: i
    }
}, function (e, t, n) {
    "use strict";
    var r = n(144), o = n.n(r), i = n(145), a = n.n(i), c = n(146), s = n.n(c), u = n(147), l = n.n(u), f = n(69),
        d = n.n(f), p = n(148), m = n.n(p), h = {
            icon: o.a,
            img: o.a,
            nickname: "鲨鱼娘",
            approve: 1,
            signature: "有最新消息、最新活动，鲨鱼娘会第一时间告诉你哦！",
            type_info: "斗鱼官方服务帐号"
        }, g = {icon: a.a, img: a.a, nickname: "好友申请"}, b = {icon: s.a, img: s.a}, v = {icon: l.a, img: l.a},
        y = {nickname: "未知用户", icon: d.a, img: d.a, unknow: !0}, S = {icon: m.a, img: m.a, nickname: "群通知"};
    t.a = {yuniang: h, friendRequest: g, stranger: b, official: v, unknowUser: y, groupNotice: S}
}, function (e, t, n) {
    e.exports = {
        userHeader: "motorcadeHeader-userHeader-3APcf",
        userAvatarWrapper: "motorcadeHeader-userAvatarWrapper-1xxvm",
        userName: "motorcadeHeader-userName-lihd-",
        userAvatar: "motorcadeHeader-userAvatar-2geoN",
        motorcadeHeader: "motorcadeHeader-motorcadeHeader-284dv",
        motorcadeAvatarWrapper: "motorcadeHeader-motorcadeAvatarWrapper-_uVqI",
        motorcadeName: "motorcadeHeader-motorcadeName-3mPkv",
        motorcadeAvatar: "motorcadeHeader-motorcadeAvatar-30QA9",
        enterIcon: "motorcadeHeader-enterIcon-BKw2Q"
    }
}, function (e, t, n) {
    var r = n(53);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t) {
    var a = {keypre: "", domain: ""};

    function n(e, t, n) {
        var r, o = "", i = "";
        (n = n || 0) && "number" == typeof n && ((r = new Date).setTime(r.getTime() + 1e3 * n), o = "; expires=" + r.toGMTString()), a.domain && (i = "; domain=" + a.domain), e = a.keypre ? a.keypre + e : e, document.cookie = e + "=" + escape(t) + o + i + "; path=/"
    }

    function r(e) {
        var t = new Date;
        t.setTime(t.getTime() - 1e4), n(e, "", t.toGMTString())
    }

    e.exports = {
        get: function (e) {
            var t;
            return e = a.keypre ? a.keypre + e : e, null !== (t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"))) ? decodeURIComponent(t[2]) : null
        }, set: n, remove: function (e) {
            if ("string" == typeof e) r(e); else for (var t = 0, n = e.length; t < n; t++) r(e[t])
        }
    }
}, function (e, t, n) {
    var i = n(10), a = n(39), c = n(38), s = n(59)("src"), r = n(245), o = "toString", u = ("" + r).split(o);
    n(25).inspectSource = function (e) {
        return r.call(e)
    }, (e.exports = function (e, t, n, r) {
        var o = "function" == typeof n;
        o && (c(n, "name") || a(n, "name", t)), e[t] !== n && (o && (c(n, s) || a(n, s, e[t] ? "" + e[t] : u.join(String(t)))), e === i ? e[t] = n : r ? e[t] ? e[t] = n : a(e, t, n) : (delete e[t], a(e, t, n)))
    })(Function.prototype, o, function () {
        return "function" == typeof this && this[s] || r.call(this)
    })
}, function (e, t, n) {
    var r = n(6), o = n(11), a = n(53), c = /"/g, i = function (e, t, n, r) {
        var o = String(a(e)), i = "<" + t;
        return "" !== n && (i += " " + n + '="' + String(r).replace(c, "&quot;") + '"'), i + ">" + o + "</" + t + ">"
    };
    e.exports = function (t, e) {
        var n = {};
        n[t] = e(i), r(r.P + r.F * o(function () {
            var e = ""[t]('"');
            return e !== e.toLowerCase() || 3 < e.split('"').length
        }), "String", n)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return v
    });
    var r = n(84), a = n(4), c = n(5), s = n(14), u = n(1), o = n(34), i = n.n(o), l = n(29);
    n(2);

    function f(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (e) {
                d(t, e, n[e])
            })
        }
        return t
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        m = null, a.a.showChatDetail(e)
    }

    var m = null, h = Object(s.e)();

    function g(e) {
        return fetch("".concat(a.a.callSetting, "?group_id=").concat(e.replace(/#/g, "%23"), "&t=").concat(+new Date), {
            method: "GET",
            credentials: "include"
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            return 200 === Number(e.status_code) ? e.data : {errorMge: e.message}
        })
    }

    function b(e) {
        return fetch(a.a.callsendBarrage, {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: Object(l.a)(e)
        }).then(function (e) {
            return e.json()
        }).then(function (e) {
            return 200 === Number(e.status_code) ? e.data : {errorMge: e.message}
        })
    }

    (Object(r.a)(window, "message", function (e) {
        if (e && e.data) try {
            var t = JSON.parse(e.data);
            if (t && t.type && "embedIm" === t.from) if ("showChatDetail" === t.type && t.uid) {
                var n = "".concat(t.uid), r = t.isGroup;
                t.showInfoCard ? (r ? u.g.dispatch(u.c.showGroupChatDetail(n)) : u.g.dispatch(u.c.showChatDetail(n)), u.g.dispatch(u.v.operateInfocard(!0))) : (n === c.f && u.g.dispatch(u.e.changeTab("friendList")), p(n))
            } else if ("showApplyGroup" === t.type && t.groupId) {
                var o = "".concat(t.groupId), i = t.groupName;
                a.a.showApplyGroup(o, i)
            } else if ("show" === t.type) Object(s.a)(), m && p(m); else if ("hide" === t.type) m = a.a.getCurrentChatWithId(), "chatDetail" === u.g.getState().containerRight.type && (a.a.clearRight(), u.g.dispatch(u.v.operateInfocard(!1))); else if ("bigRActiveIm" === t.type) {
                if (!h) return Object(s.d)().then(function () {
                    g(t.bigRData.groupId).then(function (e) {
                        v("IMLoginedNoticeEmbed", f({}, t.bigRData, e))
                    }), h = !0
                });
                g(t.bigRData.groupId).then(function (e) {
                    v("IMLoginedNoticeEmbed", f({}, t.bigRData, e))
                })
            } else if ("bigRCall" === t.type) (function (e) {
                return fetch(a.a.bigRCall, {
                    method: "POST",
                    credentials: "include",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: Object(l.a)(e)
                }).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    return 200 === Number(e.status_code) ? e.data : {errorMge: e.message}
                })
            })(t.bigRData).then(function (e) {
                v("IMbigRCallNoticeEmbed", f({}, t.bigRData, e))
            }); else if ("IMPCLoginToken" === t.type) window.__PCtoken = t.token; else if ("callSendBarrage" === t.type) {
                if (!h) return Object(s.d)().then(function () {
                    b(t.data).then(function (e) {
                        v("IMSendbarrageNoticeEmbed", e)
                    }), h = !0
                });
                b(t.data).then(function (e) {
                    v("IMSendbarrageNoticeEmbed", e)
                })
            } else if ("monitAccounts" === t.type) window.monitAccounts = Array.isArray(t.monitAccounts) ? t.monitAccounts : []; else if ("clearUnread" === t.type) {
                if ("string" != typeof t.uid) return;
                if (!h) return Object(s.f)().then(function () {
                    u.g.dispatch(u.c.clearUnread(t.uid)), h = !0
                });
                u.g.dispatch(u.c.clearUnread(t.uid))
            } else if ("isInTeam" === t.type) {
                if ("string" != typeof t.mid) return;
                if (!h) return Object(s.f)().then(function () {
                    y(t.mid).then(function (e) {
                        v("IMIsInTeamNoticeEmbed", {isInTeam: e})
                    })
                });
                y(t.mid).then(function (e) {
                    v("IMIsInTeamNoticeEmbed", {isInTeam: e})
                })
            }
        } catch (e) {
            console.error("listen message", e)
        }
    }), window.localStorage.getItem("monitMessageData")) && v("monitUnreadCount", JSON.parse(window.localStorage.getItem("monitMessageData")));

    function v(e, t) {
        var n = {from: "embedIm", type: e, data: t};
        window.parent != window && window.parent.postMessage(JSON.stringify(n), "*")
    }

    function y(e) {
        return Object(a.c)(e).then(function (e) {
            return !(!e[0] || !e[0].ownerAccount)
        }).catch(function (e) {
            return console.error("isInTeam", e)
        })
    }

    Object(r.a)(window, "storage", function (e) {
        if ("unreadCountTrigger" === e.key && (e.window && e.window == window || v("unreadCount", i.a.get("msgUnread"))), "monitMessageData" === e.key) {
            var t = {};
            e.newValue && (t = JSON.parse(e.newValue)), e.window && e.window == window || v("monitUnreadCount", t)
        }
    })
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(26), o = n(58);
    e.exports = n(28) ? function (e, t, n) {
        return r.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(86), o = n(53);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return l
    });
    var r = n(1), o = "GROUP_MEMBER_MANAGE_DIALOG_SHOW", i = "GROUP_MEMBER_MANAGE_DIALOG_SHOW_ADD_MEMBER",
        a = "GROUP_MEMBER_MANAGE_DIALOG_HIDE_ADD_MEMBER", c = "GROUP_MEMBER_MANAGE_DIALOG_LOADING",
        s = "GROUP_MEMBER_MANAGE_DIALOG_HIDE",
        u = {loading: !1, visible: !1, groupId: null, addDialogVisible: !1, addMember: {}};
    var l = {
        show: function (n) {
            return function (e, t) {
                t().groupStore.groupStore[n].memberIdList || e(r.p.getMemberIdList(n)), e({type: o, groupId: n})
            }
        }, hide: function () {
            return {type: s}
        }, loading: function () {
            return {type: c}
        }, showAddMember: function () {
            return {type: i}
        }, hideAddMember: function () {
            return {type: a}
        }
    };
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case i:
                return Object.assign({}, e, {addDialogVisible: !0});
            case a:
                return Object.assign({}, e, {addDialogVisible: !1});
            case o:
                return Object.assign({}, e, {addDialogVisible: !1, visible: !0, groupId: t.groupId});
            case c:
                return Object.assign({}, e, {visible: !0, loading: !0});
            case s:
                return Object.assign({}, e, {addDialogVisible: !1, visible: !1});
            default:
                return e
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(11);
    e.exports = function (e, t) {
        return !!e && r(function () {
            t ? e.call(null, function () {
            }, 1) : e.call(null)
        })
    }
}, function (e, t, n) {
    e.exports = n(17)(165)
}, function (e, t, n) {
    var i = n(45);
    e.exports = function (r, o, e) {
        if (i(r), void 0 === o) return r;
        switch (e) {
            case 1:
                return function (e) {
                    return r.call(o, e)
                };
            case 2:
                return function (e, t) {
                    return r.call(o, e, t)
                };
            case 3:
                return function (e, t, n) {
                    return r.call(o, e, t, n)
                }
        }
        return function () {
            return r.apply(o, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(87), o = n(58), i = n(40), a = n(55), c = n(38), s = n(158), u = Object.getOwnPropertyDescriptor;
    t.f = n(28) ? u : function (e, t) {
        if (e = i(e), t = a(t, !0), s) try {
            return u(e, t)
        } catch (e) {
        }
        if (c(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    var o = n(6), i = n(25), a = n(11);
    e.exports = function (e, t) {
        var n = (i.Object || {})[e] || Object[e], r = {};
        r[e] = t(n), o(o.S + o.F * a(function () {
            n(1)
        }), "Object", r)
    }
}, function (e, t, n) {
    var y = n(44), S = n(86), w = n(33), E = n(22), r = n(174);
    e.exports = function (f, e) {
        var d = 1 == f, p = 2 == f, m = 3 == f, h = 4 == f, g = 6 == f, b = 5 == f || g, v = e || r;
        return function (e, t, n) {
            for (var r, o, i = w(e), a = S(i), c = y(t, n, 3), s = E(a.length), u = 0, l = d ? v(e, s) : p ? v(e, 0) : void 0; u < s; u++) if ((b || u in a) && (o = c(r = a[u], u, i), f)) if (d) l[u] = o; else if (o) switch (f) {
                case 3:
                    return !0;
                case 5:
                    return r;
                case 6:
                    return u;
                case 2:
                    l.push(r)
            } else if (h) return !1;
            return g ? -1 : m || h ? h : l
        }
    }
}, function (e, t, n) {
    e.exports = n(17)(164)
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return p
    });
    var r = n(0), o = n.n(r), i = n(2);

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c() {
        return (c = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d() {
    }

    var p = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? l(e) : t
            }(this, u(n).call(this, e))).state = {src: e.placeholdersrc || e.src}, t.dealWithSrc = t.dealWithSrc.bind(l(t)), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n)
        }(n, [{
            key: "componentDidMount", value: function () {
                this.dealWithSrc()
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                e.src !== this.props.src && this.dealWithSrc(e.src)
            }
        }, {
            key: "componentDidUpdate", value: function () {
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.unmounted = !0
            }
        }, {
            key: "getElement", value: function () {
                return this.imgElement
            }
        }, {
            key: "dealWithSrc", value: function (e) {
                var t = this, n = this.props.src, r = this.props, o = r.loadingsrc, i = r.errorsrc, a = r.onError,
                    c = r.onLoad;
                e && (n = e), o && this.setState({src: o});
                var s = new Image;
                s.onload = function () {
                    t.unmounted || (t.setState({src: n}), c && c())
                }, s.onerror = function () {
                    t.unmounted || (i && t.setState({src: i}), a && a())
                }, s.src = n || "", n || this.setState({src: ""})
            }
        }, {
            key: "render", value: function () {
                var t = this;
                return o.a.createElement("img", c({}, this.props, {
                    src: this.state.src,
                    onError: d,
                    onLoad: d,
                    ref: function (e) {
                        t.imgElement = e
                    },
                    alt: ""
                }))
            }
        }]), n
    }();
    p.defaultProps = {
        src: "", placeholdersrc: "", loadingsrc: "", errorsrc: "", onError: function () {
        }, onLoad: function () {
        }
    }, p.propTypes = {
        src: i.PropTypes.string,
        placeholdersrc: i.PropTypes.string,
        loadingsrc: i.PropTypes.string,
        errorsrc: i.PropTypes.string,
        onError: i.PropTypes.func,
        onLoad: i.PropTypes.func
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    if (n(28)) {
        var b = n(60), v = n(10), y = n(11), S = n(6), w = n(106), o = n(139), d = n(44), E = n(74), i = n(58),
            I = n(39), a = n(75), c = n(46), T = n(22), O = n(185), s = n(62), u = n(55), l = n(38), _ = n(88),
            N = n(13), p = n(33), m = n(131), C = n(63), k = n(65), M = n(64).f, h = n(133), f = n(59), g = n(18),
            L = n(49), A = n(96), P = n(89), j = n(135), R = n(72), x = n(99), D = n(73), G = n(134), F = n(176),
            U = n(26), H = n(47), W = U.f, B = H.f, V = v.RangeError, q = v.TypeError, z = v.Uint8Array,
            Y = "ArrayBuffer", J = "Shared" + Y, K = "BYTES_PER_ELEMENT", Q = "prototype", $ = Array[Q],
            X = o.ArrayBuffer, Z = o.DataView, ee = L(0), te = L(2), ne = L(3), re = L(4), oe = L(5), ie = L(6),
            ae = A(!0), ce = A(!1), se = j.values, ue = j.keys, le = j.entries, fe = $.lastIndexOf, de = $.reduce,
            pe = $.reduceRight, me = $.join, he = $.sort, ge = $.slice, be = $.toString, ve = $.toLocaleString,
            ye = g("iterator"), Se = g("toStringTag"), we = f("typed_constructor"), Ee = f("def_constructor"),
            Ie = w.CONSTR, Te = w.TYPED, Oe = w.VIEW, _e = "Wrong length!", Ne = L(1, function (e, t) {
                return Ae(P(e, e[Ee]), t)
            }), Ce = y(function () {
                return 1 === new z(new Uint16Array([1]).buffer)[0]
            }), ke = !!z && !!z[Q].set && y(function () {
                new z(1).set({})
            }), Me = function (e, t) {
                var n = c(e);
                if (n < 0 || n % t) throw V("Wrong offset!");
                return n
            }, Le = function (e) {
                if (N(e) && Te in e) return e;
                throw q(e + " is not a typed array!")
            }, Ae = function (e, t) {
                if (!(N(e) && we in e)) throw q("It is not a typed array constructor!");
                return new e(t)
            }, Pe = function (e, t) {
                return je(P(e, e[Ee]), t)
            }, je = function (e, t) {
                for (var n = 0, r = t.length, o = Ae(e, r); n < r;) o[n] = t[n++];
                return o
            }, Re = function (e, t, n) {
                W(e, t, {
                    get: function () {
                        return this._d[n]
                    }
                })
            }, xe = function (e) {
                var t, n, r, o, i, a, c = p(e), s = arguments.length, u = 1 < s ? arguments[1] : void 0, l = void 0 !== u,
                    f = h(c);
                if (null != f && !m(f)) {
                    for (a = f.call(c), r = [], t = 0; !(i = a.next()).done; t++) r.push(i.value);
                    c = r
                }
                for (l && 2 < s && (u = d(u, arguments[2], 2)), t = 0, n = T(c.length), o = Ae(this, n); t < n; t++) o[t] = l ? u(c[t], t) : c[t];
                return o
            }, De = function () {
                for (var e = 0, t = arguments.length, n = Ae(this, t); e < t;) n[e] = arguments[e++];
                return n
            }, Ge = !!z && y(function () {
                ve.call(new z(1))
            }), Fe = function () {
                return ve.apply(Ge ? ge.call(Le(this)) : Le(this), arguments)
            }, Ue = {
                copyWithin: function (e, t) {
                    return F.call(Le(this), e, t, 2 < arguments.length ? arguments[2] : void 0)
                }, every: function (e) {
                    return re(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, fill: function (e) {
                    return G.apply(Le(this), arguments)
                }, filter: function (e) {
                    return Pe(this, te(Le(this), e, 1 < arguments.length ? arguments[1] : void 0))
                }, find: function (e) {
                    return oe(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, findIndex: function (e) {
                    return ie(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, forEach: function (e) {
                    ee(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, indexOf: function (e) {
                    return ce(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, includes: function (e) {
                    return ae(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, join: function (e) {
                    return me.apply(Le(this), arguments)
                }, lastIndexOf: function (e) {
                    return fe.apply(Le(this), arguments)
                }, map: function (e) {
                    return Ne(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, reduce: function (e) {
                    return de.apply(Le(this), arguments)
                }, reduceRight: function (e) {
                    return pe.apply(Le(this), arguments)
                }, reverse: function () {
                    for (var e, t = Le(this).length, n = Math.floor(t / 2), r = 0; r < n;) e = this[r], this[r++] = this[--t], this[t] = e;
                    return this
                }, some: function (e) {
                    return ne(Le(this), e, 1 < arguments.length ? arguments[1] : void 0)
                }, sort: function (e) {
                    return he.call(Le(this), e)
                }, subarray: function (e, t) {
                    var n = Le(this), r = n.length, o = s(e, r);
                    return new (P(n, n[Ee]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, T((void 0 === t ? r : s(t, r)) - o))
                }
            }, He = function (e, t) {
                return Pe(this, ge.call(Le(this), e, t))
            }, We = function (e) {
                Le(this);
                var t = Me(arguments[1], 1), n = this.length, r = p(e), o = T(r.length), i = 0;
                if (n < o + t) throw V(_e);
                for (; i < o;) this[t + i] = r[i++]
            }, Be = {
                entries: function () {
                    return le.call(Le(this))
                }, keys: function () {
                    return ue.call(Le(this))
                }, values: function () {
                    return se.call(Le(this))
                }
            }, Ve = function (e, t) {
                return N(e) && e[Te] && "symbol" != r(t) && t in e && String(+t) == String(t)
            }, qe = function (e, t) {
                return Ve(e, t = u(t, !0)) ? i(2, e[t]) : B(e, t)
            }, ze = function (e, t, n) {
                return !(Ve(e, t = u(t, !0)) && N(n) && l(n, "value")) || l(n, "get") || l(n, "set") || n.configurable || l(n, "writable") && !n.writable || l(n, "enumerable") && !n.enumerable ? W(e, t, n) : (e[t] = n.value, e)
            };
        Ie || (H.f = qe, U.f = ze), S(S.S + S.F * !Ie, "Object", {
            getOwnPropertyDescriptor: qe,
            defineProperty: ze
        }), y(function () {
            be.call({})
        }) && (be = ve = function () {
            return me.call(this)
        });
        var Ye = a({}, Ue);
        a(Ye, Be), I(Ye, ye, Be.values), a(Ye, {
            slice: He, set: We, constructor: function () {
            }, toString: be, toLocaleString: Fe
        }), Re(Ye, "buffer", "b"), Re(Ye, "byteOffset", "o"), Re(Ye, "byteLength", "l"), Re(Ye, "length", "e"), W(Ye, Se, {
            get: function () {
                return this[Te]
            }
        }), e.exports = function (e, f, t, o) {
            var d = e + ((o = !!o) ? "Clamped" : "") + "Array", r = "get" + e, i = "set" + e, p = v[d], a = p || {},
                n = p && k(p), c = !p || !w.ABV, s = {}, u = p && p[Q], m = function (e, t) {
                    W(e, t, {
                        get: function () {
                            return function (e, t) {
                                var n = e._d;
                                return n.v[r](t * f + n.o, Ce)
                            }(this, t)
                        }, set: function (e) {
                            return function (e, t, n) {
                                var r = e._d;
                                o && (n = (n = Math.round(n)) < 0 ? 0 : 255 < n ? 255 : 255 & n), r.v[i](t * f + r.o, n, Ce)
                            }(this, t, e)
                        }, enumerable: !0
                    })
                };
            c ? (p = t(function (e, t, n, r) {
                E(e, p, d, "_d");
                var o, i, a, c, s = 0, u = 0;
                if (N(t)) {
                    if (!(t instanceof X || (c = _(t)) == Y || c == J)) return Te in t ? je(p, t) : xe.call(p, t);
                    o = t, u = Me(n, f);
                    var l = t.byteLength;
                    if (void 0 === r) {
                        if (l % f) throw V(_e);
                        if ((i = l - u) < 0) throw V(_e)
                    } else if (l < (i = T(r) * f) + u) throw V(_e);
                    a = i / f
                } else a = O(t), o = new X(i = a * f);
                for (I(e, "_d", {b: o, o: u, l: i, e: a, v: new Z(o)}); s < a;) m(e, s++)
            }), u = p[Q] = C(Ye), I(u, "constructor", p)) : y(function () {
                p(1)
            }) && y(function () {
                new p(-1)
            }) && x(function (e) {
                new p, new p(null), new p(1.5), new p(e)
            }, !0) || (p = t(function (e, t, n, r) {
                var o;
                return E(e, p, d), N(t) ? t instanceof X || (o = _(t)) == Y || o == J ? void 0 !== r ? new a(t, Me(n, f), r) : void 0 !== n ? new a(t, Me(n, f)) : new a(t) : Te in t ? je(p, t) : xe.call(p, t) : new a(O(t))
            }), ee(n !== Function.prototype ? M(a).concat(M(n)) : M(a), function (e) {
                e in p || I(p, e, a[e])
            }), p[Q] = u, b || (u.constructor = p));
            var l = u[ye], h = !!l && ("values" == l.name || null == l.name), g = Be.values;
            I(p, we, !0), I(u, Te, d), I(u, Oe, !0), I(u, Ee, p), (o ? new p(1)[Se] == d : Se in u) || W(u, Se, {
                get: function () {
                    return d
                }
            }), s[d] = p, S(S.G + S.W + S.F * (p != a), s), S(S.S, d, {BYTES_PER_ELEMENT: f}), S(S.S + S.F * y(function () {
                a.of.call(p, 1)
            }), d, {
                from: xe,
                of: De
            }), K in u || I(u, K, f), S(S.P, d, Ue), D(d), S(S.P + S.F * ke, d, {set: We}), S(S.P + S.F * !h, d, Be), b || u.toString == be || (u.toString = be), S(S.P + S.F * y(function () {
                new p(1).slice()
            }), d, {slice: He}), S(S.P + S.F * (y(function () {
                return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
            }) || !y(function () {
                u.toLocaleString.call([1, 2])
            })), d, {toLocaleString: Fe}), R[d] = h ? l : g, b || h || I(u, ye, g)
        }
    } else e.exports = function () {
    }
}, function (e, t, n) {
    var o = n(13);
    e.exports = function (e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var o = n(59)("meta"), i = n(13), a = n(38), c = n(26).f, s = 0, u = Object.isExtensible || function () {
        return !0
    }, l = !n(11)(function () {
        return u(Object.preventExtensions({}))
    }), f = function (e) {
        c(e, o, {value: {i: "O" + ++s, w: {}}})
    }, d = e.exports = {
        KEY: o, NEED: !1, fastKey: function (e, t) {
            if (!i(e)) return "symbol" == r(e) ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, o)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                f(e)
            }
            return e[o].i
        }, getWeak: function (e, t) {
            if (!a(e, o)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                f(e)
            }
            return e[o].w
        }, onFreeze: function (e) {
            return l && d.NEED && u(e) && !a(e, o) && f(e), e
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return f
    });
    var r = n(0), a = n.n(r), o = n(2);
    n(496);

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t) {
        return !t || "object" !== i(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var f = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), s(this, u(t).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(t, r["PureComponent"]), function (e, t, n) {
            t && c(e.prototype, t), n && c(e, n)
        }(t, [{
            key: "render", value: function () {
                var e = this.props.className, t = this.props, n = t.onClick, r = t.checked, o = t.children,
                    i = t.disable;
                return e = e || "", a.a.createElement("label", {
                    onClick: i ? null : n,
                    className: "g-checkbox ".concat(e, " ").concat(i ? "disable" : "", " ").concat(r ? "checked" : "")
                }, a.a.createElement("span", {className: "g-checkbox-icon"}), a.a.createElement("span", {className: "g-checkbox-text"}, o))
            }
        }]), t
    }();
    f.defaultProps = {
        className: "", onClick: function () {
        }, checked: !1, children: "", disable: !1
    }, f.propTypes = {
        className: o.PropTypes.node,
        onClick: o.PropTypes.func,
        checked: o.PropTypes.bool,
        children: o.PropTypes.node,
        disable: o.PropTypes.bool
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    var r = n(160), o = n(118);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(46), o = Math.max, i = Math.min;
    e.exports = function (e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}, function (e, t, r) {
    var o = r(12), i = r(161), a = r(118), c = r(117)("IE_PROTO"), s = function () {
    }, u = "prototype", l = function () {
        var e, t = r(115)("iframe"), n = a.length;
        for (t.style.display = "none", r(119).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l[u][a[n]];
        return l()
    };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (s[u] = o(e), n = new s, s[u] = null, n[c] = e) : n = l(), void 0 === t ? n : i(n, t)
    }
}, function (e, t, n) {
    var r = n(160), o = n(118).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(38), o = n(33), i = n(117)("IE_PROTO"), a = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function (e, t, n) {
    var r = n(18)("unscopables"), o = Array.prototype;
    null == o[r] && n(39)(o, r, {}), e.exports = function (e) {
        o[r][e] = !0
    }
}, function (e, t, n) {
    var r = n(13);
    e.exports = function (e, t) {
        if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n.d(t, "a", function () {
        return c
    }), n.d(t, "b", function () {
        return u
    });
    var o = "get_black_list", i = "add_black_list", a = "delete_black_list", c = {
        init: function (e) {
            return {type: o, data: e}
        }, add: function (e) {
            return {type: i, data: r({}, e, !0)}
        }, deleteItem: function (e) {
            return {type: a, data: r({}, e, !1)}
        }
    }, s = {blackList: {}};
    t.c = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : s,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = e;
        switch (t.type) {
            case o:
                return Object.assign({}, {blackList: t.data});
            case i:
            case a:
                return n.blackList = Object.assign({}, n.blackList, t.data), Object.assign({}, n);
            default:
                return n
        }
    };
    var u = c
}, function (e, t, n) {
    e.exports = n.p + "images/e998a8beeaddb1d266a98a6cf38d84a8.png"
}, function (e, t, n) {
    var r = n(26).f, o = n(38), i = n(18)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    var a = n(6), r = n(53), c = n(11), s = n(121), o = "[" + s + "]", i = RegExp("^" + o + o + "*"),
        u = RegExp(o + o + "*$"), l = function (e, t, n) {
            var r = {}, o = c(function () {
                return !!s[e]() || "​" != "​"[e]()
            }), i = r[e] = o ? t(f) : s[e];
            n && (r[n] = i), a(a.P + a.F * o, "String", r)
        }, f = l.trim = function (e, t) {
            return e = String(r(e)), 1 & t && (e = e.replace(i, "")), 2 & t && (e = e.replace(u, "")), e
        };
    e.exports = l
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var r = n(10), o = n(26), i = n(28), a = n(18)("species");
    e.exports = function (e) {
        var t = r[e];
        i && t && !t[a] && o.f(t, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t) {
    e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function (e, t, n) {
    var o = n(35);
    e.exports = function (e, t, n) {
        for (var r in t) o(e, r, t[r], n);
        return e
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return a
    });
    var r = n(0), o = n.n(r), i = n(2);
    n(480);

    function a(e) {
        return o.a.createElement("i", {className: "".concat(e.className || "", " g-level user-verify")})
    }

    function c(e) {
        var t = e.className, n = e.userItem;
        return o.a.createElement("i", {className: "".concat(t || "", " g-level level-").concat(n.level)})
    }

    a.defaultProps = {className: ""}, a.propTypes = {className: i.PropTypes.string}, c.defaultProps = {
        className: "",
        userItem: {}
    }, c.propTypes = {className: i.PropTypes.string, userItem: i.PropTypes.object}, t.b = c
}, function (e, t, n) {
    "use strict";
    var r = n(0), o = n.n(r), i = n(149), a = n.n(i);
    t.a = function () {
        return o.a.createElement("div", {className: a.a.loadingWrap}, o.a.createElement("span", {className: a.a.loading}))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return s
    });
    var r = n(0), o = n.n(r), i = n(2), a = n(5), c = n(156);
    n(479);

    function s(e) {
        var t = e.messageItem, n = (t = t || {}).count || 0;
        if (t.mySelf && t.mySelf.msgFlagEn && "Discard" === t.mySelf.msgFlagEn && (n = 0), 0 < n) {
            if (t.uid === a.m || t.uid === a.l || t.isDnd) return o.a.createElement("i", {className: "cl-item-stranger-msg-tip"});
            var r = (e.isStranger, "cl-item-msg-tip");
            return t.mySelf && t.mySelf.msgFlagEn && "AcceptNotNotify" === t.mySelf.msgFlagEn && (r = "sl-item-msg-tip"), o.a.createElement("span", {className: "".concat(r)}, o.a.createElement("i", null, Object(c.a)(n)))
        }
        return o.a.createElement("i", null)
    }

    s.defaultProps = {messageItem: {}, isStranger: !1}, s.propTypes = {
        messageItem: i.PropTypes.object,
        isStranger: i.PropTypes.bool
    }
}, function (e, t, n) {
    (function (f) {
        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        /*! HTML5 Notification - v3.0.0 - 2016-09-19
Copyright 2016 Tsvetan Tsvetkov
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        /*! HTML5 Notification - v3.0.0 - 2016-09-19
Copyright 2016 Tsvetan Tsvetkov
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        !function () {
            var e = "denied", t = "notsupported", n = ["granted", "default", e, t], o = ["auto", "ltr", "rtl"], r = -1,
                i = ["click", "scroll", "focus"],
                a = window.Notification || window.webkitNotifications && u || "external" in window && "msIsSiteMode" in window.external && void 0 !== window.external.msIsSiteMode() && s || c;

            function c() {
                var r = document.createElement("div");
                this.addEventListener = function (e, t) {
                    r.addEventListener(e, t.bind(this))
                }, this.removeEventListener = function (e, t) {
                    r.removeEventListener(e, t.bind(this))
                }, this.dispatchEvent = function (t) {
                    if ("string" == typeof t) try {
                        r.dispatchEvent(new Event(t))
                    } catch (e) {
                        var n = document.createEvent("Event");
                        n.initEvent(t, !1, !0), r.dispatchEvent(n)
                    }
                }
            }

            function s(e, t) {
                c.call(this);
                var n = r;
                Object.defineProperties(this, {
                    close: {
                        value: function (e) {
                            n === r && (window.external.msSiteModeClearIconOverlay(), i.forEach(function (e) {
                                window.removeEventListener(e, this.close)
                            }.bind(this)), this.dispatchEvent("click"), this.dispatchEvent("close"), n = null)
                        }.bind(this)
                    }
                }), this.close(), this.icon && window.external.msSiteModeSetIconOverlay(function (e) {
                    var t = e.lastIndexOf(".");
                    return (-1 !== t ? e.substr(0, t) : e) + ".ico"
                }(this.icon), this.description || this.title), window.external.msSiteModeActivate(), this.dispatchEvent("show"), i.forEach(function (e) {
                    window.addEventListener(e, this.close)
                }.bind(this)), n = ++r
            }

            function u() {
            }

            function l(e, t) {
                var n, r;
                if (!arguments.length) throw TypeError('Failed to construct "Notification": 1 argument required, but only 0 present.');
                if ("" === e && (e = "\b"), 1 < arguments.length && "object" !== d(t)) throw TypeError('Failed to construct "Notification": parameter 2 ("options") is not an object.');
                if (void 0 !== (n = Object(t).dir) && -1 === o.indexOf(n)) throw TypeError('Failed to construct "Notification": The provided value "' + n + '" is not a valid enum value of type NotificationDirection.');
                return t = Object(t), (r = new a(e, t)).body || Object.defineProperty(r, "body", {value: String(t.body || "")}), r.data || Object.defineProperty(r, "data", {value: t.data || null}), r.dir || Object.defineProperty(r, "dir", {value: n || o[0]}), r.icon || Object.defineProperty(r, "icon", {value: String(t.icon || "")}), r.lang || Object.defineProperty(r, "lang", {value: String(t.lang || "")}), r.requireInteraction || Object.defineProperty(r, "requireInteraction", {value: Boolean(t.requireInteraction)}), r.silent || Object.defineProperty(r, "silent", {value: Boolean(t.silent)}), r.tag || Object.defineProperty(r, "tag", {value: String(t.tag || "")}), r.title || Object.defineProperty(r, "title", {value: String(e)}), r.timestamp || Object.defineProperty(r, "timestamp", {value: (new Date).getTime()}), r
            }

            Object.defineProperty(c, "permission", {
                enumerable: !0, get: function () {
                    return t
                }
            }), Object.defineProperty(c, "requestPermission", {
                enumerable: !0, writable: !0, value: function (e) {
                    e(this.permission)
                }
            }), Object.defineProperty(s, "permission", {
                enumerable: !0, get: function () {
                    return window.external.msIsSiteMode() ? "granted" : e
                }
            }), Object.defineProperty(s, "requestPermission", {
                enumerable: !0, writable: !0, value: function (e) {
                    return new Promise(function (e, t) {
                        this.permission, e(this.permission)
                    }.bind(this))
                }
            }), Object.defineProperty(s, "PERMISSION_REQUEST_MESSAGE", {
                writable: !0,
                value: "IE supports notifications in pinned mode only. Pin this page on your taskbar to receive notifications."
            }), Object.defineProperty(u, "permission", {
                enumerable: !0, get: function () {
                    return n[window.webkitNotifications.checkPermission()]
                }
            }), Object.defineProperty(u, "requestPermission", {
                enumerable: !0, writable: !0, value: function (e) {
                    return new Promise(function (t, e) {
                        window.webkitNotifications.requestPermission(function (e) {
                            t(e)
                        })
                    })
                }
            }), a.permission || Object.defineProperty(a, "permission", {
                enumerable: !0, get: function () {
                    return a.permissionLevel && a.permissionLevel()
                }
            }), Object.defineProperty(l, "permission", {
                enumerable: !0, get: function () {
                    return a.permission
                }
            }), Object.defineProperty(l, "requestPermission", {
                enumerable: !0, value: function () {
                    return new Promise(function (t, e) {
                        var n = a.requestPermission(function (e) {
                            t(e)
                        });
                        n instanceof Promise && t(n)
                    })
                }
            }), l.isSupported = "Notification" in window, window.Notification = l, f && (f.exports = l)
        }()
    }).call(this, n(189)(e))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return a
    });
    var r = {show: !1, loading: !1, strangerList: []}, o = {
        STRANGER_LIST_SHOW: "STRANGER_LIST_SHOW",
        STRANGER_LIST_HIDE: "STRANGER_LIST_HIDE",
        STRANGER_LIST_LOADING: "STRANGER_LIST_LOADING",
        STRANGER_LIST_LOAD_SUCCESS: "STRANGER_LIST_LOAD_SUCCESS"
    };

    function i(e) {
        var t = e;
        return t = t.filter(function (e) {
            return "peApObaJ8zdl" !== e.uid
        }), {type: o.STRANGER_LIST_LOAD_SUCCESS, strangerList: t}
    }

    var a = {
        show: function () {
            return {type: o.STRANGER_LIST_SHOW}
        }, hide: function () {
            return {type: o.STRANGER_LIST_HIDE}
        }, refresh: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            return function (e) {
                e(i(t))
            }
        }, loading: function () {
            return {type: o.STRANGER_LIST_LOADING}
        }, loadSuccess: i
    };
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case o.STRANGER_LIST_LOADING:
                return Object.assign({}, e, {loading: !0});
            case o.STRANGER_LIST_SHOW:
                return Object.assign({}, e, {show: !0});
            case o.STRANGER_LIST_HIDE:
                return Object.assign({}, e, {show: !1});
            case o.STRANGER_LIST_LOAD_SUCCESS:
                return Object.assign({}, e, {strangerList: t.strangerList});
            default:
                return e
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return a
    });
    var r = {show: !1, loading: !1, officialList: []}, o = {
        OFFICIAL_LIST_SHOW: "OFFICIAL_LIST_SHOW",
        OFFICIAL_LIST_HIDE: "OFFICIAL_LIST_HIDE",
        OFFICIAL_LIST_LOADING: "OFFICIAL_LIST_LOADING",
        OFFICIAL_LIST_LOAD_SUCCESS: "OFFICIAL_LIST_LOAD_SUCCESS"
    };

    function i(e) {
        var t = e;
        return t = t.filter(function (e) {
            return "peApObaJ8zdl" !== e.uid
        }), {type: o.OFFICIAL_LIST_LOAD_SUCCESS, officialList: t}
    }

    var a = {
        show: function () {
            return {type: o.OFFICIAL_LIST_SHOW}
        }, hide: function () {
            return {type: o.OFFICIAL_LIST_HIDE}
        }, refresh: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            return function (e) {
                e(i(t))
            }
        }, loading: function () {
            return {type: o.OFFICIAL_LIST_LOADING}
        }, loadSuccess: i
    };
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case o.OFFICIAL_LIST_LOADING:
                return Object.assign({}, e, {loading: !0});
            case o.OFFICIAL_LIST_SHOW:
                return Object.assign({}, e, {show: !0});
            case o.OFFICIAL_LIST_HIDE:
                return Object.assign({}, e, {show: !1});
            case o.OFFICIAL_LIST_LOAD_SUCCESS:
                return Object.assign({}, e, {officialList: t.officialList});
            default:
                return e
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return r
    });
    var r = function e(t) {
        !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), "string" == typeof t && (this.desc = t)
    }
}, function (e, t, n) {
    e.exports = {
        common: "switchBtn-common-1-RAm",
        active: "switchBtn-active-3LWWK",
        dot: "switchBtn-dot-KYH3j",
        inActive: "switchBtn-inActive-2clOg"
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return o
    }), n.d(t, "b", function () {
        return i
    });
    var r = !!document.addEventListener, o = r ? function (e, t, n, r) {
        e.addEventListener(t, n, r || !1)
    } : function (t, e, n) {
        var r = n;
        r.prototype._bindFun || (r.prototype._bindFun = []);
        var o = !0;
        for (var i in r.prototype._bindFun) if (r.prototype._bindFun[i].type === e && r.prototype._bindFun[i].element === t) {
            o = !1;
            break
        }
        if (!0 === o) {
            var a = {
                type: e, element: t, Function: function (e) {
                    r.call(t, e)
                }
            };
            r.prototype._bindFun.push(a), t.attachEvent("on".concat(e), a.Function)
        }
    }, i = r ? function (e, t, n) {
        e.removeEventListener(t, n)
    } : function (e, t, n) {
        for (var r in n.prototype._bindFun) if (n.prototype._bindFun[r].type === t && n.prototype._bindFun[r].element === e) {
            e.detachEvent("on".concat(t), n.prototype._bindFun[r].Function), n.prototype._bindFun.splice(r, 1);
            break
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
        return u
    }), n.d(t, "d", function () {
        return l
    }), n.d(t, "f", function () {
        return f
    }), n.d(t, "a", function () {
        return d
    }), n.d(t, "c", function () {
        return p
    });
    var i = n(7), o = n(3), a = n(68), c = n(1), r = n(29), s = n(4);

    function u(n) {
        var r = {To_Account: [n]};
        return new Promise(function (e, t) {
            webim.deleteBlackList(r, function () {
                c.g.dispatch(a.b.deleteItem(n)), o.a.notice("移出成功！可以正常接收到TA的消息啦"), e()
            }, function (e) {
                i.b.info({content: "移出黑名单失败", width: 306}), t(e)
            })
        })
    }

    function l(t, r) {
        var o = {To_Account: [t]};
        return new Promise(function (e, n) {
            webim.addBlackList(o, function () {
                c.g.dispatch(a.b.add(t)), t && t === c.g.getState().chatDetail.chatWithId && (c.g.dispatch(c.c.clear()), c.g.dispatch(c.f.changeType())), r ? i.b.info({
                    content: "举报成功，并已将ta添加到黑名单",
                    width: 306
                }) : i.b.info({content: "加入黑名单成功", width: 306}), e()
            }, function (e) {
                var t = "加入黑名单失败";
                e && e.ErrorInfo && 0 <= e.ErrorInfo.indexOf("31309") && (t = "你的黑名单个数已达上限"), r ? i.b.info({
                    content: "举报成功，".concat(t),
                    width: 306
                }) : i.b.info({content: t, width: 306}), n(e)
            })
        })
    }

    function f() {
        var e = {StartIndex: 0, MaxLimited: 1e3, LastSequence: 0};
        return new Promise(function (n, t) {
            webim.getBlackList(e, function (e) {
                var t = {};
                "OK" === e.ActionStatus && e.BlackListItem && 0 <= e.BlackListItem.length && (e.BlackListItem.map(function (e) {
                    return t[e.To_Account] = !0
                }), c.g.dispatch(a.b.init(t))), n(t)
            }, function (e) {
                t(e)
            })
        })
    }

    function d(e, t) {
        i.b.confirm({
            title: "确认加入黑名单？", content: "加入黑名单，你将不再收到对方的消息，并将解除好友关系，你可以在设置-黑名单中将其移出", onOk: function () {
                l(e).then(function () {
                    t && t()
                })
            }
        })
    }

    function p() {
        return new Promise(function (t, n) {
            fetch(s.i.userConfig, {method: "GET"}).then(function (e) {
                return e.json()
            }).then(function (e) {
                200 === Number(e.status_code) ? t(e.data) : n(e.message)
            }).catch(function (e) {
                n(e)
            })
        })
    }

    t.b = {
        getMessageDays: function (e) {
            return new Promise(function (t, n) {
                fetch("".concat(s.i.messageDays, "?dst_uid=").concat(e), {method: "GET"}).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    200 === Number(e.status_code) ? t(e.data) : n(e.message || "获取数据失败")
                }).catch(function (e) {
                    n(e && e.message || "获取数据失败")
                })
            })
        }, getMessageDaily: function (e) {
            return new Promise(function (t, n) {
                fetch("".concat(s.i.messageDaily, "?").concat(Object(r.a)(e)), {method: "GET"}).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    200 === Number(e.status_code) ? t(e.data) : n(e.message || "获取数据失败")
                }).catch(function (e) {
                    n(e && e.message || "获取数据失败")
                })
            })
        }, getMessageGroupDays: function (e) {
            return new Promise(function (t, n) {
                fetch("".concat(s.i.messageGroupDays, "?").concat(Object(r.a)(e)), {method: "GET"}).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    200 === Number(e.status_code) ? t(e.data) : n(e.message || "获取数据失败")
                }).catch(function (e) {
                    n(e && e.message || "获取数据失败")
                })
            })
        }, getMessageGroupDaily: function (e) {
            return new Promise(function (t, n) {
                fetch("".concat(s.i.messageGroupDaily, "?").concat(Object(r.a)(e)), {method: "GET"}).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    200 === Number(e.status_code) ? t(e.data) : n(e.message || "获取数据失败")
                }).catch(function (e) {
                    n(e && e.message || "获取数据失败")
                })
            })
        }
    }
}, function (e, t, n) {
    var r = n(52);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    var o = n(52), i = n(18)("toStringTag"), a = "Arguments" == o(function () {
        return arguments
    }());
    e.exports = function (e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
}, function (e, t, n) {
    var o = n(12), i = n(45), a = n(18)("species");
    e.exports = function (e, t) {
        var n, r = o(e).constructor;
        return void 0 === r || null == (n = o(r)[a]) ? t : i(n)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return h
    });
    var r = n(0), i = n.n(r), o = n(1), a = n(23), c = n(4), s = n(3), u = n(7), l = {
        show: "ADD_FRIEND_DIALOG_SHOW",
        update: "ADD_FRIEND_DIALOG_UPDATE",
        hide: "ADD_FRIEND_DIALOG_HIDE",
        loading: "ADD_FRIEND_DIALOG_LOADING",
        endLoading: "ADD_FRIEND_DIALOG_END_LOADING",
        invisible: "ADD_FRIEND_DIALOG_INVISIBLE"
    };

    function f(e) {
        return {type: l.update, data: e}
    }

    function d() {
        return {type: l.endLoading}
    }

    function p() {
        return {type: l.loading}
    }

    function m() {
        return {type: l.hide}
    }

    var h = {
        show: function (e) {
            var n = e.friendUid, r = e.friendUserName;
            return (o.g.getState().friendList.friendList || []).some(function (e) {
                return e === n
            }) ? (s.a.notice("你们已经是好友了"), null) : function (t) {
                t(p()), c.a.getFriendConfig(n).then(function (e) {
                    t({
                        type: l.show,
                        data: {
                            type: parseInt(e.type, 10),
                            gold: parseInt(e.gold, 10),
                            qaType: parseInt(e.qst_type, 10),
                            qustion: e.qst,
                            friendUid: n,
                            friendUserName: r
                        }
                    })
                }).catch(function (e) {
                    console.error(e), s.a.notice("操作失败")
                })
            }
        }, hide: m, loading: p, requestAddFriend: function r(o) {
            return function (n) {
                return n(p()), c.a.requestAddFriend(o).then(function (e) {
                    if (200 === e.status_code) 1 === Number(o.type) ? (s.a.notice("添加好友成功"), c.a.showChatDetail(o.uid)) : 3 === Number(o.type) ? u.b.info({
                        title: "支付成功",
                        width: 210
                    }) : s.a.notice("好友申请发送成功"), n(m()); else if (e.data && 5101 === Number(e.status_code)) u.b.confirm({
                        title: "余额不足",
                        content: "剩余：".concat(e.data.balance, "鱼翅"),
                        maskClosable: !1,
                        onOk: function () {
                            var e = document.createElement("a");
                            e.setAttribute("href", "https://cz.douyu.com/"), e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener"), e.setAttribute("rel", "noreferrer"), e.click();
                            var t = u.b.confirm({
                                title: "已完成充值？",
                                content: null,
                                width: 210,
                                className: "add-friend-confirm",
                                footer: i.a.createElement("div", {className: "g-modal-confirm-btns"}, i.a.createElement(a.a, {
                                    onClick: function () {
                                        e.click()
                                    }, className: "g-modal-btn-cancel"
                                }, "重新充值"), i.a.createElement(a.a, {
                                    onClick: function () {
                                        t(), n(f({loading: !1}))
                                    }, className: "g-modal-btn-ok"
                                }, "充值完成")),
                                onCancel: function () {
                                    n(f({loading: !1}))
                                }
                            }).destroy
                        },
                        onCancel: function () {
                            n(d())
                        },
                        okText: "立即充值",
                        className: "add-friend-confirm",
                        width: 210
                    }); else if (5500 === e.status_code) n(m()), u.b.info({title: "操作太频繁啦，休息一会~", width: 210}); else {
                        if (!e.data || 5011 !== e.status_code && 5012 !== e.status_code) throw e;
                        n({type: l.invisible}), u.b.info({
                            content: "".concat(e.message, "，是否继续添加对方为好友？"),
                            onOk: function () {
                                n(f(e.data))
                            },
                            okCancel: !0,
                            className: "add-friendMethod-changed-modal"
                        })
                    }
                }).catch(function (e) {
                    if (3 === Number(o.type) && e && e.status_code && "5103" === String(e.status_code)) u.b.confirm({
                        maskClosable: !1,
                        title: "支付失败，请重试",
                        className: "add-friend-confirm",
                        content: null,
                        okText: "重新支付",
                        width: 210,
                        onOk: function () {
                            n(r(o))
                        },
                        onCancel: function () {
                            n(d())
                        }
                    }); else if ("5014" === Number(e.status_code)) u.b.info({
                        content: "绑定手机号才能发送好友请求",
                        okCancel: !1,
                        okText: "去绑定",
                        closable: !0,
                        width: 250,
                        onOk: function () {
                            window.open("//www.douyu.com/member/cp", "_blank")
                        }
                    }); else {
                        var t = "操作失败，请重试";
                        e && e.message && (t = e.message), s.a.notice(t), n(m())
                    }
                    throw e
                })
            }
        }
    }, g = {visible: !1, loading: !1, friendUid: "", friendUserName: "", type: 1, gold: 0};
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case l.show:
                return Object.assign({visible: !0, loading: !1}, t.data);
            case l.update:
                return Object.assign({}, e, {visible: !0, loading: !1}, t.data);
            case l.loading:
                return Object.assign({}, e, {loading: !0});
            case l.invisible:
                return Object.assign({}, e, {visible: !1});
            case l.endLoading:
                return Object.assign({}, e, {loading: !1});
            case l.hide:
                return Object.assign({}, g);
            default:
                return e
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return h
    });
    var r = n(4), o = n(1), i = n(3), a = n(21), c = n(8);

    function s(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var u = {
        FRIEND_LIST_LOADING: "FRIEND_LIST_LOADING",
        FRIEND_LIST_ERROR: "FRIEND_LIST_ERROR",
        FREIND_LIST_LOADSUCCESS: "FREIND_LIST_LOADSUCCESS"
    }, l = {
        loading: !0,
        friendList: [],
        groupList: [],
        error: !1,
        exception: {},
        officialList: [],
        friendFold: "no",
        groupFold: "no"
    };

    function f(e) {
        return new Promise(function (a, t) {
            webim.getAllFriend(e, function (e) {
                if (0 < e.FriendNum) {
                    var t = [], n = e.InfoItem;
                    if (n && 0 < n.length) {
                        for (var r = n.length, o = 0; o < r; o++) {
                            var i = n[o].Info_Account;
                            t.push(i)
                        }
                        a(t)
                    } else a([])
                } else a([])
            }, function (e) {
                t(e && e.ErrorInfo || "获取好友列表失败")
            })
        })
    }

    function d() {
        return f({
            TimeStamp: 0,
            StartIndex: 0,
            GetCount: a.b.getAllFriendCount,
            LastStandardSequence: 0
        }).then(function (e) {
            return Object(r.f)(e).then(function (e) {
                if (e && e.length) {
                    var t = e || [];
                    return t.sort(c.a.userNameSorter), t = t.map(function (e) {
                        return e.uid
                    })
                }
                return []
            })
        })
    }

    function p(e) {
        return e(o.p.loadJoinedGroup()).then(function (e) {
            return e.sort(c.a.groupNameSorter), e.map(function (e) {
                return e.groupId
            })
        })
    }

    function m(e, t) {
        return {type: u.FREIND_LIST_LOADSUCCESS, friendList: e, groupList: t}
    }

    var h = {
        init: function () {
            return function (o) {
                return o(h.loading()), Promise.all([d(), function () {
                    if (l.officialList.length) return r.a.fetchUserInfoAndRefreshStore(l.officialList)
                }(), p(o)]).then(function (e) {
                    var t = s(e, 3), n = t[0], r = (t[1], t[2]);
                    o(h.loadSuccess(n, r))
                }).catch(function (e) {
                    throw o(h.loadError(e && e.ErrorInfo || "获取好友列表失败")), e
                })
            }
        }, onFriendListRefresh: function () {
            return function (t) {
                return t(h.loading()), d().then(function (e) {
                    t(h.loadSuccess(e, null))
                }).catch(function (e) {
                    throw t(h.loadError(e && e.ErrorInfo || "获取好友列表失败")), e
                })
            }
        }, initWithoutUserInfo: function () {
            return function (o) {
                o(h.loading());
                var e = {TimeStamp: 0, StartIndex: 0, GetCount: a.b.getAllFriendCount, LastStandardSequence: 0};
                return Promise.all([f(e), p(o)]).then(function (e) {
                    var t = s(e, 2), n = t[0], r = t[1];
                    o(h.loadSuccess(n, r))
                }).catch(function (e) {
                    throw o(h.loadError(e && e.ErrorInfo || "获取好友列表失败")), e
                })
            }
        }, loading: function () {
            return {type: u.FRIEND_LIST_LOADING}
        }, loadSuccess: m, deleteGroup: function (o) {
            return function (e, t) {
                for (var n = t().friendList.groupList || [], r = 0; r < n.length; r++) if (n[r] === o) {
                    n.splice(r, 1);
                    break
                }
                e(h.loadSuccess(null, n))
            }
        }, loadError: function (e) {
            return i.a.notice("获取好友列表失败", 1), {type: u.FRIEND_LIST_ERROR, exception: e}
        }, sortFriend: function () {
            return function (e, t) {
                var n = t().userStore.userStore || {}, r = t().friendList.friendList || [];
                (r = r.map(function (e) {
                    return n[e]
                })).sort(c.a.userNameSorter);
                var o = [];
                r.forEach(function (e) {
                    e && e.uid && o.push(e.uid)
                }), e(m(o, null))
            }
        }, sortGroup: function () {
            return function (e, t) {
                var n = t().groupStore.groupStore || {}, r = t().friendList.groupList || [];
                (r = r.map(function (e) {
                    return n[e]
                })).sort(c.a.groupNameSorter);
                var o = [];
                r.forEach(function (e) {
                    e && e.groupId && o.push(e.groupId)
                }), e(m(null, o))
            }
        }, refreshGroupList: function () {
            return function (n) {
                return n(o.p.loadJoinedGroup()).then(function (e) {
                    e.sort(c.a.groupNameSorter);
                    var t = e.map(function (e) {
                        return e.groupId
                    });
                    n(m(null, t))
                })
            }
        }, changeFoldSwitch: function (e, t) {
            return {type: u.FREIND_LIST_LOADSUCCESS, friendFold: e, groupFold: t}
        }
    };
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : l,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case u.FRIEND_LIST_LOADING:
                return Object.assign({}, e, {loading: !0, error: !1, exception: null});
            case u.FREIND_LIST_LOADSUCCESS:
                var n = {loading: !1, error: !1, exception: null};
                return t.friendList && (n.friendList = t.friendList), t.groupList && (n.groupList = t.groupList), t.friendFold && (n.friendFold = t.friendFold), t.groupFold && (n.groupFold = t.groupFold), Object.assign({}, e, n);
            case u.FRIEND_LIST_ERROR:
                return Object.assign({}, e, {loading: !1, friendList: [], error: !0, exception: t.exception});
            default:
                return e
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return o
    });
    var r = "CONTAINER_LEFT_CHANGE_TAB", o = {
        changeTab: function (e) {
            return {type: r, tabName: e}
        }
    }, i = {activeTab: "chatList"};
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : i,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case r:
                return {activeTab: t.tabName};
            default:
                return e
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), o = n.n(r), i = n(2), a = n(206), c = n.n(a), s = function (e) {
        return o.a.createElement("div", {className: c.a.largeBtn, onClick: e.onClick}, e.children)
    };
    s.defaultProps = {
        onClick: function () {
        }, children: null
    }, s.propTypes = {onClick: i.PropTypes.func, children: i.PropTypes.node}, t.a = s
}, function (e, t, n) {
    e.exports = n(17)(78)
}, function (e, t, n) {
    var r = n(25), o = n(10), i = "__core-js_shared__", a = o[i] || (o[i] = {});
    (e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(60) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t, n) {
    var s = n(40), u = n(22), l = n(62);
    e.exports = function (c) {
        return function (e, t, n) {
            var r, o = s(e), i = u(o.length), a = l(n, i);
            if (c && t != t) {
                for (; a < i;) if ((r = o[a++]) != r) return !0
            } else for (; a < i; a++) if ((c || a in o) && o[a] === t) return c || a || 0;
            return !c && -1
        }
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(52);
    e.exports = Array.isArray || function (e) {
        return "Array" == r(e)
    }
}, function (e, t, n) {
    var i = n(18)("iterator"), a = !1;
    try {
        var r = [7][i]();
        r.return = function () {
            a = !0
        }, Array.from(r, function () {
            throw 2
        })
    } catch (e) {
    }
    e.exports = function (e, t) {
        if (!t && !a) return !1;
        var n = !1;
        try {
            var r = [7], o = r[i]();
            o.next = function () {
                return {done: n = !0}
            }, r[i] = function () {
                return o
            }, e(r)
        } catch (e) {
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(12);
    e.exports = function () {
        var e = r(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var i = n(88), a = RegExp.prototype.exec;
    e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var r = n.call(e, t);
            if ("object" !== o(r)) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== i(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return a.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    n(178);
    var l = n(35), f = n(39), d = n(11), p = n(53), m = n(18), h = n(136), g = m("species"), b = !d(function () {
        var e = /./;
        return e.exec = function () {
            var e = [];
            return e.groups = {a: "7"}, e
        }, "7" !== "".replace(e, "$<a>")
    }), v = function () {
        var e = /(?:)/, t = e.exec;
        e.exec = function () {
            return t.apply(this, arguments)
        };
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    e.exports = function (n, e, t) {
        var r = m(n), i = !d(function () {
            var e = {};
            return e[r] = function () {
                return 7
            }, 7 != ""[n](e)
        }), o = i ? !d(function () {
            var e = !1, t = /a/;
            return t.exec = function () {
                return e = !0, null
            }, "split" === n && (t.constructor = {}, t.constructor[g] = function () {
                return t
            }), t[r](""), !e
        }) : void 0;
        if (!i || !o || "replace" === n && !b || "split" === n && !v) {
            var a = /./[r], c = t(p, r, ""[n], function (e, t, n, r, o) {
                return t.exec === h ? i && !o ? {done: !0, value: a.call(t, n, r)} : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {done: !1}
            }), s = c[0], u = c[1];
            l(String.prototype, n, s), f(RegExp.prototype, r, 2 == e ? function (e, t) {
                return u.call(e, this, t)
            } : function (e) {
                return u.call(e, this)
            })
        }
    }
}, function (e, t, n) {
    var d = n(44), p = n(173), m = n(131), h = n(12), g = n(22), b = n(133), v = {}, y = {};
    (t = e.exports = function (e, t, n, r, o) {
        var i, a, c, s, u = o ? function () {
            return e
        } : b(e), l = d(n, r, t ? 2 : 1), f = 0;
        if ("function" != typeof u) throw TypeError(e + " is not iterable!");
        if (m(u)) {
            for (i = g(e.length); f < i; f++) if ((s = t ? l(h(a = e[f])[0], a[1]) : l(e[f])) === v || s === y) return s
        } else for (c = u.call(e); !(a = c.next()).done;) if ((s = p(c, l, a.value, t)) === v || s === y) return s
    }).BREAK = v, t.RETURN = y
}, function (e, t, n) {
    var r = n(10).navigator;
    e.exports = r && r.userAgent || ""
}, function (e, t, n) {
    "use strict";
    var b = n(10), v = n(6), y = n(35), S = n(75), w = n(56), E = n(103), I = n(74), T = n(13), O = n(11), _ = n(99),
        N = n(70), C = n(122);
    e.exports = function (r, e, t, n, o, i) {
        var a = b[r], c = a, s = o ? "set" : "add", u = c && c.prototype, l = {}, f = function (e) {
            var n = u[e];
            y(u, e, "delete" == e ? function (e) {
                return !(i && !T(e)) && n.call(this, 0 === e ? 0 : e)
            } : "has" == e ? function (e) {
                return !(i && !T(e)) && n.call(this, 0 === e ? 0 : e)
            } : "get" == e ? function (e) {
                return i && !T(e) ? void 0 : n.call(this, 0 === e ? 0 : e)
            } : "add" == e ? function (e) {
                return n.call(this, 0 === e ? 0 : e), this
            } : function (e, t) {
                return n.call(this, 0 === e ? 0 : e, t), this
            })
        };
        if ("function" == typeof c && (i || u.forEach && !O(function () {
            (new c).entries().next()
        }))) {
            var d = new c, p = d[s](i ? {} : -0, 1) != d, m = O(function () {
                d.has(1)
            }), h = _(function (e) {
                new c(e)
            }), g = !i && O(function () {
                for (var e = new c, t = 5; t--;) e[s](t, t);
                return !e.has(-0)
            });
            h || (((c = e(function (e, t) {
                I(e, c, r);
                var n = C(new a, e, c);
                return null != t && E(t, o, n[s], n), n
            })).prototype = u).constructor = c), (m || g) && (f("delete"), f("has"), o && f("get")), (g || p) && f(s), i && u.clear && delete u.clear
        } else c = n.getConstructor(e, r, o, s), S(c.prototype, t), w.NEED = !0;
        return N(c, r), l[r] = c, v(v.G + v.W + v.F * (c != a), l), i || n.setStrong(c, r, o), c
    }
}, function (e, t, n) {
    for (var r, o = n(10), i = n(39), a = n(59), c = a("typed_array"), s = a("view"), u = !(!o.ArrayBuffer || !o.DataView), l = u, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;) (r = o[d[f++]]) ? (i(r.prototype, c, !0), i(r.prototype, s, !0)) : l = !1;
    e.exports = {ABV: u, CONSTR: l, TYPED: c, VIEW: s}
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return f
    });
    var o = n(4), r = n(9), i = n.n(r), a = n(14), c = n(30), s = n.n(c), u = n(34), l = n.n(u), f = {
            local: "msg-dev.dz11.com",
            whDevelop: "msg-dev.dz11.com",
            develop: "msg-dev.dz11.com",
            staging: "msg.dz11.com",
            production: "msg.douyu.com"
        }, d = {Accept: "application/vnd.".concat(f.production, ".v2+json"), "dy-device-id": "-", "dy-client": "web"},
        p = Math.random().toString(36).substr(2);
    !function (e) {
        var r = e.fetch;

        function t(n) {
            var e, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return e = s.a.getHashParam("pctoken") || window.__PCtoken ? i()({}, {
                "dy-client": "pc",
                "dy-token": s.a.getHashParam("pctoken") || window.__PCtoken,
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/vnd.".concat(f.production, ".v2+json"),
                "dy-device-id": "-"
            }, t.headers) : i()({}, d, t.headers), "POST" !== (t = i()(t, {
                headers: e,
                credentials: "include"
            })).method && "GET" !== t.method || (l.a.set("post-csrfToken", p), t.headers["dy-csrf-token"] = p), -1 < n.indexOf(o.a.officialInfo) || (n = 0 < n.indexOf("?") ? n + "&timestamp=" + Math.random() : n + "?timestamp=" + Math.random()), r(n, t).then(function (t) {
                return t.clone().json().then(function (e) {
                    return n !== o.a.getUserInfo && e && "登录过期" === e.message && Object(a.g)("登录过期"), t.json = function () {
                        return e
                    }, t
                })
            })
        }

        t.originalFetch = r.bind(e), e.fetch = t
    }(window)
}, function (e, t, n) {
    "use strict";
    var r = n(0), h = n.n(r), o = n(2), i = n(20), a = n.n(i), c = n(3), s = n(1), u = n(4), l = n(29),
        g = (n(467), n(7));

    function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var v, y = null;

    function S() {
        if (y) {
            var e = a.a.unmountComponentAtNode(y);
            v(), e && y.parentNode && (y.parentNode.removeChild(y), y = null)
        }
    }

    var w = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? m(e) : t
            }(this, p(n).call(this, e))).state = {
                noticeJsCheck: "checked",
                noticeJsbtsCheck: "",
                noticeBjsCheck: "",
                methodYzCheck: "",
                methodAnyCheck: "",
                methodJzCheck: "",
                methodFanCheck: "",
                initFanLevel: null,
                fanMaxLevel: null,
                memberRolePower: !1,
                quitGroupText: "退出群组"
            }, ["hasClass", "acceptEvt", "acceptEvtNotice", "acceptEvtMethod", "quitGroup", "noticeCommon", "setNoticeSent", "setMethodSent", "fanLevelChange"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, m(t)), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && d(e.prototype, t), n && d(e, n)
        }(n, [{
            key: "componentWillMount", value: function () {
                var e = this.props, r = e.groupCardInfo, t = e.groupCardInfoMemberItem, o = {}, n = this;
                "Member" !== t.role ? new Promise(function (t, n) {
                    fetch(u.a.memberConfig, {
                        method: "POST",
                        credentials: "include",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: "groupId=".concat(r.groupId)
                    }).then(function (e) {
                        return e.json()
                    }).then(function (e) {
                        if (200 === Number(e.status_code)) {
                            switch (e.data.type) {
                                case 1:
                                    o = {
                                        methodYzCheck: "checked",
                                        methodAnyCheck: "",
                                        methodJzCheck: "",
                                        methodFanCheck: "",
                                        fanMaxLevel: e.data.maxLevel,
                                        memberRolePower: !0
                                    };
                                    break;
                                case 2:
                                    o = {
                                        methodYzCheck: "",
                                        methodAnyCheck: "checked",
                                        methodJzCheck: "",
                                        methodFanCheck: "",
                                        fanMaxLevel: e.data.maxLevel,
                                        memberRolePower: !0
                                    };
                                    break;
                                case 3:
                                    o = {
                                        methodYzCheck: "",
                                        methodAnyCheck: "",
                                        methodJzCheck: "checked",
                                        methodFanCheck: "",
                                        fanMaxLevel: e.data.maxLevel,
                                        memberRolePower: !0
                                    };
                                    break;
                                case 4:
                                    o = {
                                        methodYzCheck: "",
                                        methodAnyCheck: "",
                                        methodJzCheck: "",
                                        methodFanCheck: "checked",
                                        fanMaxLevel: e.data.maxLevel,
                                        memberRolePower: !0,
                                        initFanLevel: e.data.level
                                    }
                            }
                            t(o)
                        } else e.message ? c.a.notice(e.message) : c.a.notice("获取群添加成员设置失败")
                    }, function (e) {
                        c.a.notice("获取群添加成员设置失败"), n(e)
                    })
                }).then(function () {
                    "Owner" === t.role && (o.quitGroupText = "解散群组"), n.noticeCommon(r.mySelf.msgFlagEn, o), n.setState(Object.assign({}, n.state, o))
                }) : (this.noticeCommon(r.mySelf.msgFlagEn, o), this.setState(Object.assign({}, this.state, o)))
            }
        }, {
            key: "setNoticeSent", value: function (e, t) {
                var n = this.props, r = n.dispatch, o = n.groupCardInfo, i = n.groupStore[o.groupId];
                webim.modifyGroupMember(e, function () {
                    i.mySelf.msgFlagEn = e.MsgFlag, i.mySelf.msgFlag = webim.Tool.groupMsgFlagEn2Ch(e.MsgFlag), r(s.p.setItem(i)), t && t()
                }, function () {
                    c.a.notice("设置群消息提醒失败")
                })
            }
        }, {
            key: "setMethodSent", value: function (e, t) {
                "Member" !== this.props.groupCardInfoMemberItem.role && fetch(u.a.addMemberConfig, {
                    method: "POST",
                    credentials: "include",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: Object(l.a)(e)
                }).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    200 === e.status_code ? t && t() : e.message ? c.a.notice(e.message) : c.a.notice("加群方式设置失败")
                }, function () {
                    c.a.notice("加群方式设置失败")
                })
            }
        }, {
            key: "noticeCommon", value: function (e, t) {
                var n = t;
                switch (e) {
                    case"AcceptNotNotify":
                        n.noticeJsCheck = "", n.noticeJsbtsCheck = "checked", n.noticeBjsCheck = "";
                        break;
                    case"AcceptAndNotify":
                        n.noticeJsCheck = "checked", n.noticeJsbtsCheck = "", n.noticeBjsCheck = "";
                        break;
                    case"Discard":
                        n.noticeJsCheck = "", n.noticeJsbtsCheck = "", n.noticeBjsCheck = "checked"
                }
            }
        }, {
            key: "acceptEvtMethod", value: function (e) {
                var t = this, n = {groupId: this.props.groupCardInfo.groupId, type: null, level: null};
                if (!this.hasClass(e.target, "checked")) switch (e.target.getAttribute("data-mark")) {
                    case"methodYz":
                        n.type = 1, this.setMethodSent(n, function () {
                            t.setState(Object.assign({}, t.state, {
                                methodYzCheck: "checked",
                                methodAnyCheck: "",
                                methodJzCheck: "",
                                methodFanCheck: ""
                            }))
                        });
                        break;
                    case"methodAny":
                        n.type = 2, this.setMethodSent(n, function () {
                            t.setState(Object.assign({}, t.state, {
                                methodYzCheck: "",
                                methodAnyCheck: "checked",
                                methodJzCheck: "",
                                methodFanCheck: ""
                            }))
                        });
                        break;
                    case"methodJz":
                        n.type = 3, this.setMethodSent(n, function () {
                            t.setState(Object.assign({}, t.state, {
                                methodYzCheck: "",
                                methodAnyCheck: "",
                                methodJzCheck: "checked",
                                methodFanCheck: ""
                            }))
                        });
                        break;
                    case"methodFan":
                        n.type = 4, n.level = 1, this.setMethodSent(n, function () {
                            t.setState(Object.assign({}, t.state, {
                                methodYzCheck: "",
                                methodAnyCheck: "",
                                methodJzCheck: "",
                                methodFanCheck: "checked"
                            }))
                        })
                }
            }
        }, {
            key: "fanLevelChange", value: function () {
                var e = this, t = this.props.groupCardInfo, n = this.selectInput.value;
                this.setMethodSent({groupId: t.groupId, type: 4, level: n}, function () {
                    e.setState(Object.assign({}, e.state, {initFanLevel: n}))
                })
            }
        }, {
            key: "acceptEvtNotice", value: function (e) {
                var t = this, n = this.props, r = n.groupCardInfo, o = n.memberAccount,
                    i = {GroupId: r.groupId, Member_Account: o, MsgFlag: null};
                if (!this.hasClass(e.target, "checked")) switch (e.target.getAttribute("data-mark")) {
                    case"noticeJs":
                        i.MsgFlag = "AcceptAndNotify", this.setNoticeSent(i, function () {
                            t.setState(Object.assign({}, t.state, {
                                noticeJsCheck: "checked",
                                noticeJsbtsCheck: "",
                                noticeBjsCheck: ""
                            }))
                        });
                        break;
                    case"noticeJsbts":
                        i.MsgFlag = "AcceptNotNotify", this.setNoticeSent(i, function () {
                            t.setState(Object.assign({}, t.state, {
                                noticeJsCheck: "",
                                noticeJsbtsCheck: "checked",
                                noticeBjsCheck: ""
                            }))
                        });
                        break;
                    case"noticeBjs":
                        i.MsgFlag = "Discard", this.setNoticeSent(i, function () {
                            t.setState(Object.assign({}, t.state, {
                                noticeJsCheck: "",
                                noticeJsbtsCheck: "",
                                noticeBjsCheck: "checked"
                            }))
                        })
                }
            }
        }, {
            key: "hasClass", value: function (e, t) {
                return e.classList ? e.classList.contains(t) : new RegExp("(^| )".concat(t, "( |$)"), "gi").test(e.className)
            }
        }, {
            key: "quitGroup", value: function () {
                var e = this.props, t = e.groupCardInfo;
                "Owner" === e.groupCardInfoMemberItem.role ? u.a.destroyGroup(t.groupId) : u.a.quitGroup(t.groupId), S(t.groupId)
            }
        }, {
            key: "render", value: function () {
                var t = this, e = this.props, n = e.methodYz, r = e.methodAny, o = e.methodJz, i = e.methodFan,
                    a = this.state, c = a.memberRolePower, s = a.fanMaxLevel, u = a.initFanLevel, l = a.methodFanCheck,
                    f = a.methodAnyCheck, d = a.methodYzCheck, p = a.methodJzCheck, m = new Array(s).join().split(",");
                return h.a.createElement(g.a, {
                    className: "group-dialog-common group-dialog-rulers-set",
                    style: {height: c ? l ? "250px" : "182px" : "60px"}
                }, h.a.createElement("h4", {className: "title"}, "设置", h.a.createElement("span", {
                    className: "close",
                    onClick: S
                })), h.a.createElement("dl", {style: {display: c ? "block" : "none"}}, h.a.createElement("dt", null, "加群方式"), h.a.createElement("dd", {
                    className: f,
                    "data-mark": r,
                    onClick: this.acceptEvtMethod
                }, "允许任何人加入"), h.a.createElement("dd", {
                    className: l,
                    "data-mark": i,
                    onClick: this.acceptEvtMethod
                }, "仅允许粉丝加入"), h.a.createElement("dd", {
                    className: "fan-details",
                    style: {display: "checked" === l ? "block" : "none"}
                }, h.a.createElement("p", null, "粉丝入群最低等级"), h.a.createElement("select", {
                    className: "config-ban-level",
                    value: u || "",
                    ref: function (e) {
                        t.selectInput = e
                    },
                    onChange: this.fanLevelChange
                }, m.map(function (e, t) {
                    var n = "".concat(t + 1);
                    return h.a.createElement("option", {key: n, value: n}, "".concat(n, "级"))
                }))), h.a.createElement("dd", {
                    className: d,
                    "data-mark": n,
                    onClick: this.acceptEvtMethod
                }, "需要管理员审批"), h.a.createElement("dd", {
                    className: p,
                    "data-mark": o,
                    onClick: this.acceptEvtMethod
                }, "禁止加群")))
            }
        }]), n
    }();
    w.defaultProps = {
        noticeJs: "noticeJs",
        noticeJsbts: "noticeJsbts",
        noticeBjs: "noticeBjs",
        methodYz: "methodYz",
        methodAny: "methodAny",
        methodJz: "methodJz",
        methodFan: "methodFan",
        groupCardInfo: {},
        groupCardInfoMemberItem: {},
        groupStore: {},
        memberAccount: "",
        dispatch: function () {
        }
    }, w.propTypes = {
        methodYz: o.PropTypes.string,
        methodAny: o.PropTypes.string,
        methodJz: o.PropTypes.string,
        methodFan: o.PropTypes.string,
        groupCardInfo: o.PropTypes.object,
        groupCardInfoMemberItem: o.PropTypes.object,
        groupStore: o.PropTypes.object,
        memberAccount: o.PropTypes.string,
        dispatch: o.PropTypes.func
    }, t.a = {
        show: function (e, t, n, r, o, i) {
            y = document.createElement("div"), document.body.appendChild(y), v = i || function () {
            }, a.a.render(h.a.createElement(w, {
                memberAccount: n,
                groupStore: t,
                dispatch: r,
                groupCardInfo: e,
                groupCardInfoMemberItem: o
            }), y)
        }, close: S
    }
}, function (e, t, n) {
    e.exports = n(17)(14)
}, function (e, t, n) {
    "use strict";
    var r = n(0), a = n.n(r), o = n(2);

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c() {
        return (c = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function s(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var p = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== i(t) && "function" != typeof t ? f(e) : t
            }(this, l(n).call(this, e))).state = {value: e.value}, t.onComposition = !1, t.handleComposition = t.handleComposition.bind(f(t)), t.handleChange = t.handleChange.bind(f(t)), t.valueChange = t.valueChange.bind(f(t)), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(n, r["Component"]), function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n)
        }(n, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.value !== this.props.value && this.setState({value: e.value})
            }
        }, {
            key: "valueChange", value: function (e) {
                var t = this.props.onChange;
                t && t(e)
            }
        }, {
            key: "handleComposition", value: function (e) {
                var t = e.type;
                if ("compositionend" === t) {
                    var n = e.target.value;
                    this.onComposition = !1, this.handleChange(n)
                } else "compositionstart" !== t && "compositionupdate" !== t || (this.onComposition = !0)
            }
        }, {
            key: "handleChange", value: function (e) {
                var t = this;
                this.setState({value: e}, function () {
                    t.onComposition || t.valueChange(e)
                })
            }
        }, {
            key: "render", value: function () {
                var t = this, e = this.props, n = e.tagName, r = e.refc, o = s(e, ["tagName", "refc"]), i = n;
                return a.a.createElement(i, c({}, o, {
                    onCompositionStart: this.handleComposition,
                    onCompositionUpdate: this.handleComposition,
                    onCompositionEnd: this.handleComposition,
                    ref: function (e) {
                        return r(e), t.inputDom = e
                    },
                    onChange: function () {
                        t.handleChange(t.inputDom.value)
                    },
                    value: this.state.value
                }))
            }
        }]), n
    }();
    p.defaultProps = {
        value: "", onChange: function () {
        }, tagName: "input", type: "text", refc: function () {
        }
    }, p.propTypes = {
        value: o.PropTypes.node,
        onChange: o.PropTypes.func,
        tagName: o.PropTypes.node,
        refc: o.PropTypes.func
    }, t.a = p
}, function (e, t, n) {
    e.exports = n.p + "images/64e0e26d82064fefc9d6a49b580d18e5.png"
}, function (e, t, n) {
    e.exports = n(17)(159)
}, function (e, t, n) {
    e.exports = {
        jumpBox: "jumpBox-jumpBox-2BlGl",
        newTip: "jumpBox-newTip-2RYxF",
        showNewTip: "jumpBox-showNewTip-hMGt4"
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return d
    }), n.d(t, "c", function () {
        return m
    });
    var r = "setup_dialog_show", o = "setup_dialog_show_addFriend", i = "setup_dialog_show_acceptLevel",
        a = "setup_dialog_show_banList", c = "setup_dialog_show_advice", s = "setup_dialog_hide",
        u = "setup_dialog_get_config", l = "setup_dialog_toggle", f = "setup_dialog_change_level", d = {
            show: function (e) {
                return {type: r, data: e}
            }, hide: function () {
                return {type: s}
            }, getConfig: function (e) {
                var t = e;
                return t.hasOwnProperty("msg_accept_level") && (t.msgAcceptLevel = "2" === t.msg_accept_type ? "0" : t.msg_accept_level, delete t.msg_accept_level), {
                    type: u,
                    data: t
                }
            }, toggle: function (e) {
                return {type: l, data: e}
            }, changeLevel: function (e) {
                return {type: f, data: e}
            }, showAddFriend: function () {
                return {type: o}
            }, showAcceptLevel: function () {
                return {type: i}
            }, showBanList: function () {
                return {type: a}
            }, showAdvice: function () {
                return {type: c}
            }
        }, p = {
            visible: !1,
            msgAcceptLevel: null,
            needPayYC: null,
            isAnchor: !1,
            showAddFriend: !1,
            showAcceptLevel: !1,
            showBanList: !1,
            showAdvice: !1
        };
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : p,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case r:
                return Object.assign({}, e, {visible: !0}, t.data);
            case o:
                return Object.assign({}, e, {
                    visible: !0,
                    showAddFriend: !0,
                    showAcceptLevel: !1,
                    showBanList: !1,
                    showAdvice: !1
                });
            case i:
                return Object.assign({}, e, {
                    visible: !0,
                    showAddFriend: !1,
                    showAcceptLevel: !0,
                    showBanList: !1,
                    showAdvice: !1
                });
            case a:
                return Object.assign({}, e, {
                    visible: !0,
                    showAddFriend: !1,
                    showAcceptLevel: !1,
                    showBanList: !0,
                    showAdvice: !1
                });
            case c:
                return Object.assign({}, e, {
                    visible: !0,
                    showAddFriend: !1,
                    showAcceptLevel: !1,
                    showBanList: !1,
                    showAdvice: !0
                });
            case s:
                return Object.assign({}, e, {
                    visible: !1,
                    showAddFriend: !1,
                    showAcceptLevel: !1,
                    showBanList: !1,
                    showAdvice: !1
                });
            case u:
            case f:
            case l:
                return Object.assign({}, e, t.data);
            default:
                return e
        }
    };
    var m = d
}, function (e, t, n) {
    var r = n(13), o = n(10).document, i = r(o) && r(o.createElement);
    e.exports = function (e) {
        return i ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    t.f = n(18)
}, function (e, t, n) {
    var r = n(95)("keys"), o = n(59);
    e.exports = function (e) {
        return r[e] || (r[e] = o(e))
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    var r = n(10).document;
    e.exports = r && r.documentElement
}, function (e, t, o) {
    var n = o(13), r = o(12), i = function (e, t) {
        if (r(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, n, r) {
            try {
                (r = o(44)(Function.call, o(47).f(Object.prototype, "__proto__").set, 2))(e, []), n = !(e instanceof Array)
            } catch (e) {
                n = !0
            }
            return function (e, t) {
                return i(e, t), n ? e.__proto__ = t : r(e, t), e
            }
        }({}, !1) : void 0), check: i
    }
}, function (e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function (e, t, n) {
    var i = n(13), a = n(120).set;
    e.exports = function (e, t, n) {
        var r, o = t.constructor;
        return o !== n && "function" == typeof o && (r = o.prototype) !== n.prototype && i(r) && a && a(e, r), e
    }
}, function (e, t, n) {
    "use strict";
    var o = n(46), i = n(53);
    e.exports = function (e) {
        var t = String(i(this)), n = "", r = o(e);
        if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
        for (; 0 < r; (r >>>= 1) && (t += t)) 1 & r && (n += t);
        return n
    }
}, function (e, t) {
    e.exports = Math.sign || function (e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
    }
}, function (e, t) {
    var n = Math.expm1;
    e.exports = !n || 22025.465794806718 < n(10) || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (e) {
        return 0 == (e = +e) ? e : -1e-6 < e && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
    } : n
}, function (e, t, n) {
    var s = n(46), u = n(53);
    e.exports = function (c) {
        return function (e, t) {
            var n, r, o = String(u(e)), i = s(t), a = o.length;
            return i < 0 || a <= i ? c ? "" : void 0 : (n = o.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === a || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? c ? o.charAt(i) : n : c ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536
        }
    }
}, function (e, t, n) {
    "use strict";
    var y = n(60), S = n(6), w = n(35), E = n(39), I = n(72), T = n(172), O = n(70), _ = n(65), N = n(18)("iterator"),
        C = !([].keys && "next" in [].keys()), k = "values", M = function () {
            return this
        };
    e.exports = function (e, t, n, r, o, i, a) {
        T(n, t, r);
        var c, s, u, l = function (e) {
                if (!C && e in m) return m[e];
                switch (e) {
                    case"keys":
                    case k:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }, f = t + " Iterator", d = o == k, p = !1, m = e.prototype, h = m[N] || m["@@iterator"] || o && m[o],
            g = h || l(o), b = o ? d ? l("entries") : g : void 0, v = "Array" == t && m.entries || h;
        if (v && (u = _(v.call(new e))) !== Object.prototype && u.next && (O(u, f, !0), y || "function" == typeof u[N] || E(u, N, M)), d && h && h.name !== k && (p = !0, g = function () {
            return h.call(this)
        }), y && !a || !C && !p && m[N] || E(m, N, g), I[t] = g, I[f] = M, o) if (c = {
            values: d ? g : l(k),
            keys: i ? g : l("keys"),
            entries: b
        }, a) for (s in c) s in m || w(m, s, c[s]); else S(S.P + S.F * (C || p), t, c);
        return c
    }
}, function (e, t, n) {
    var r = n(129), o = n(53);
    e.exports = function (e, t, n) {
        if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(o(e))
    }
}, function (e, t, n) {
    var r = n(13), o = n(52), i = n(18)("match");
    e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
    }
}, function (e, t, n) {
    var r = n(18)("match");
    e.exports = function (t) {
        var n = /./;
        try {
            "/./"[t](n)
        } catch (e) {
            try {
                return n[r] = !1, !"/./"[t](n)
            } catch (e) {
            }
        }
        return !0
    }
}, function (e, t, n) {
    var r = n(72), o = n(18)("iterator"), i = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(26), o = n(58);
    e.exports = function (e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}, function (e, t, n) {
    var r = n(88), o = n(18)("iterator"), i = n(72);
    e.exports = n(25).getIteratorMethod = function (e) {
        if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function (e, t, n) {
    "use strict";
    var c = n(33), s = n(62), u = n(22);
    e.exports = function (e) {
        for (var t = c(this), n = u(t.length), r = arguments.length, o = s(1 < r ? arguments[1] : void 0, n), i = 2 < r ? arguments[2] : void 0, a = void 0 === i ? n : s(i, n); o < a;) t[o++] = e;
        return t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(66), o = n(177), i = n(72), a = n(40);
    e.exports = n(127)(Array, "Array", function (e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (e, t, n) {
    "use strict";
    var r, o, i = n(100), a = RegExp.prototype.exec, c = String.prototype.replace, s = a, u = "lastIndex",
        l = (r = /a/, o = /b*/g, a.call(r, "a"), a.call(o, "a"), 0 !== r[u] || 0 !== o[u]),
        f = void 0 !== /()??/.exec("")[1];
    (l || f) && (s = function (e) {
        var t, n, r, o;
        return f && (n = new RegExp("^" + this.source + "$(?!\\s)", i.call(this))), l && (t = this[u]), r = a.call(this, e), l && r && (this[u] = this.global ? r.index + r[0].length : t), f && r && 1 < r.length && c.call(r[0], n, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        }), r
    }), e.exports = s
}, function (e, t, n) {
    "use strict";
    var r = n(126)(!0);
    e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}, function (e, t, n) {
    var r, o, i, a = n(44), c = n(166), s = n(119), u = n(115), l = n(10), f = l.process, d = l.setImmediate,
        p = l.clearImmediate, m = l.MessageChannel, h = l.Dispatch, g = 0, b = {}, v = "onreadystatechange",
        y = function () {
            var e = +this;
            if (b.hasOwnProperty(e)) {
                var t = b[e];
                delete b[e], t()
            }
        }, S = function (e) {
            y.call(e.data)
        };
    d && p || (d = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return b[++g] = function () {
            c("function" == typeof e ? e : Function(e), t)
        }, r(g), g
    }, p = function (e) {
        delete b[e]
    }, "process" == n(52)(f) ? r = function (e) {
        f.nextTick(a(y, e, 1))
    } : h && h.now ? r = function (e) {
        h.now(a(y, e, 1))
    } : m ? (i = (o = new m).port2, o.port1.onmessage = S, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function (e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", S, !1)) : r = v in u("script") ? function (e) {
        s.appendChild(u("script"))[v] = function () {
            s.removeChild(this), y.call(e)
        }
    } : function (e) {
        setTimeout(a(y, e, 1), 0)
    }), e.exports = {set: d, clear: p}
}, function (e, t, n) {
    "use strict";
    var r = n(10), o = n(28), i = n(60), a = n(106), c = n(39), s = n(75), u = n(11), l = n(74), f = n(46), d = n(22),
        p = n(185), m = n(64).f, h = n(26).f, g = n(134), b = n(70), v = "ArrayBuffer", y = "DataView", S = "prototype",
        w = "Wrong index!", E = r[v], I = r[y], T = r.Math, O = r.RangeError, _ = r.Infinity, N = E, C = T.abs,
        k = T.pow, M = T.floor, L = T.log, A = T.LN2, P = "byteLength", j = "byteOffset", R = o ? "_b" : "buffer",
        x = o ? "_l" : P, D = o ? "_o" : j;

    function G(e, t, n) {
        var r, o, i, a = new Array(n), c = 8 * n - t - 1, s = (1 << c) - 1, u = s >> 1,
            l = 23 === t ? k(2, -24) - k(2, -77) : 0, f = 0, d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for ((e = C(e)) != e || e === _ ? (o = e != e ? 1 : 0, r = s) : (r = M(L(e) / A), e * (i = k(2, -r)) < 1 && (r--, i *= 2), 2 <= (e += 1 <= r + u ? l / i : l * k(2, 1 - u)) * i && (r++, i /= 2), s <= r + u ? (o = 0, r = s) : 1 <= r + u ? (o = (e * i - 1) * k(2, t), r += u) : (o = e * k(2, u - 1) * k(2, t), r = 0)); 8 <= t; a[f++] = 255 & o, o /= 256, t -= 8) ;
        for (r = r << t | o, c += t; 0 < c; a[f++] = 255 & r, r /= 256, c -= 8) ;
        return a[--f] |= 128 * d, a
    }

    function F(e, t, n) {
        var r, o = 8 * n - t - 1, i = (1 << o) - 1, a = i >> 1, c = o - 7, s = n - 1, u = e[s--], l = 127 & u;
        for (u >>= 7; 0 < c; l = 256 * l + e[s], s--, c -= 8) ;
        for (r = l & (1 << -c) - 1, l >>= -c, c += t; 0 < c; r = 256 * r + e[s], s--, c -= 8) ;
        if (0 === l) l = 1 - a; else {
            if (l === i) return r ? NaN : u ? -_ : _;
            r += k(2, t), l -= a
        }
        return (u ? -1 : 1) * r * k(2, l - t)
    }

    function U(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
    }

    function H(e) {
        return [255 & e]
    }

    function W(e) {
        return [255 & e, e >> 8 & 255]
    }

    function B(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    }

    function V(e) {
        return G(e, 52, 8)
    }

    function q(e) {
        return G(e, 23, 4)
    }

    function z(e, t, n) {
        h(e[S], t, {
            get: function () {
                return this[n]
            }
        })
    }

    function Y(e, t, n, r) {
        var o = p(+n);
        if (o + t > e[x]) throw O(w);
        var i = e[R]._b, a = o + e[D], c = i.slice(a, a + t);
        return r ? c : c.reverse()
    }

    function J(e, t, n, r, o, i) {
        var a = p(+n);
        if (a + t > e[x]) throw O(w);
        for (var c = e[R]._b, s = a + e[D], u = r(+o), l = 0; l < t; l++) c[s + l] = u[i ? l : t - l - 1]
    }

    if (a.ABV) {
        if (!u(function () {
            E(1)
        }) || !u(function () {
            new E(-1)
        }) || u(function () {
            return new E, new E(1.5), new E(NaN), E.name != v
        })) {
            for (var K, Q = (E = function (e) {
                return l(this, E), new N(p(e))
            })[S] = N[S], $ = m(N), X = 0; $.length > X;) (K = $[X++]) in E || c(E, K, N[K]);
            i || (Q.constructor = E)
        }
        var Z = new I(new E(2)), ee = I[S].setInt8;
        Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || s(I[S], {
            setInt8: function (e, t) {
                ee.call(this, e, t << 24 >> 24)
            }, setUint8: function (e, t) {
                ee.call(this, e, t << 24 >> 24)
            }
        }, !0)
    } else E = function (e) {
        l(this, E, v);
        var t = p(e);
        this._b = g.call(new Array(t), 0), this[x] = t
    }, I = function (e, t, n) {
        l(this, I, y), l(e, E, y);
        var r = e[x], o = f(t);
        if (o < 0 || r < o) throw O("Wrong offset!");
        if (r < o + (n = void 0 === n ? r - o : d(n))) throw O("Wrong length!");
        this[R] = e, this[D] = o, this[x] = n
    }, o && (z(E, P, "_l"), z(I, "buffer", "_b"), z(I, P, "_l"), z(I, j, "_o")), s(I[S], {
        getInt8: function (e) {
            return Y(this, 1, e)[0] << 24 >> 24
        }, getUint8: function (e) {
            return Y(this, 1, e)[0]
        }, getInt16: function (e) {
            var t = Y(this, 2, e, arguments[1]);
            return (t[1] << 8 | t[0]) << 16 >> 16
        }, getUint16: function (e) {
            var t = Y(this, 2, e, arguments[1]);
            return t[1] << 8 | t[0]
        }, getInt32: function (e) {
            return U(Y(this, 4, e, arguments[1]))
        }, getUint32: function (e) {
            return U(Y(this, 4, e, arguments[1])) >>> 0
        }, getFloat32: function (e) {
            return F(Y(this, 4, e, arguments[1]), 23, 4)
        }, getFloat64: function (e) {
            return F(Y(this, 8, e, arguments[1]), 52, 8)
        }, setInt8: function (e, t) {
            J(this, 1, e, H, t)
        }, setUint8: function (e, t) {
            J(this, 1, e, H, t)
        }, setInt16: function (e, t) {
            J(this, 2, e, W, t, arguments[2])
        }, setUint16: function (e, t) {
            J(this, 2, e, W, t, arguments[2])
        }, setInt32: function (e, t) {
            J(this, 4, e, B, t, arguments[2])
        }, setUint32: function (e, t) {
            J(this, 4, e, B, t, arguments[2])
        }, setFloat32: function (e, t) {
            J(this, 4, e, q, t, arguments[2])
        }, setFloat64: function (e, t) {
            J(this, 8, e, V, t, arguments[2])
        }
    });
    b(E, v), b(I, y), c(I[S], a.VIEW, !0), t[v] = E, t[y] = I
}, function (e, t, n) {
    "use strict";
    var r = n(0), o = n.n(r), i = n(204), a = n.n(i);
    t.a = function (e) {
        return o.a.createElement("span", {className: "".concat(a.a.vIcon, " ").concat(e.className ? e.className : "")})
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return l
    });
    var r = n(9), o = n.n(r), i = n(4), a = n(3),
        c = {FRIEND_CARD_SHOW: "FRIEND_CARD_SHOW", FRIEND_CARD_CLOSE: "FRIEND_CARD_CLOSE"};

    function s(e) {
        return {type: c.FRIEND_CARD_SHOW, uid: e}
    }

    var u = {uid: null};
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case c.FRIEND_CARD_SHOW:
                return o()({}, e, {uid: t.uid});
            case c.FRIEND_CARD_CLOSE:
                return o()({}, e, {uid: null});
            default:
                return e
        }
    };
    var l = {
        showFriendCard: function (t) {
            return function (e) {
                i.a.getUserInfoReady(t).then(function () {
                    e(s(t))
                }).catch(function (e) {
                    throw a.a.notice("获取用户信息失败", 1), e
                })
            }
        }, loadSuccess: s, close: function () {
            return {type: c.FRIEND_CARD_CLOSE}
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return a
    });
    var r = {show: "REPORT_DIALOG_SHOW", hide: "REPORT_DIALOG_HIDE"}, o = {visible: !1, type: "", relateId: null};

    function i(e) {
        return {type: r.show, data: e}
    }

    var a = {
        show: i, hide: function () {
            return {type: r.hide}
        }, reportUser: function (t) {
            return function (e) {
                e(i({type: "USER", relateId: t}))
            }
        }, reportGroup: function (t) {
            return function (e) {
                e(i({type: "GROUP", relateId: t}))
            }
        }, reportFriendRequest: function (t, n) {
            return function (e) {
                e(i({type: "FRIEND_REQUEST", relateId: t, friendRequestItem: n}))
            }
        }
    };
    t.b = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : o,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case r.show:
                return Object.assign({visible: !0}, t.data);
            case r.hide:
                return Object.assign({}, o);
            default:
                return e
        }
    }
}, function (e, t, n) {
    var r = {
        "呲牙": n(425),
        "惊讶": n(426),
        "色": n(427),
        "得意": n(428),
        "流泪": n(429),
        "可怜": n(430),
        "流汗": n(431),
        "奋斗": n(432),
        "发呆": n(433),
        "亲亲": n(434),
        "发怒": n(435),
        "吐": n(436),
        "坏笑": n(437),
        "衰": n(438),
        "敲打": n(439),
        "强": n(440),
        "抠鼻": n(441),
        "石化": n(442),
        "大笑": n(443),
        "疑问": n(444),
        "委屈": n(445),
        "鄙视": n(446),
        "调皮": n(447),
        "骷髅": n(448),
        "强壮": n(449),
        "发抖": n(450),
        "压力": n(451),
        "晕": n(452),
        "吐血": n(453),
        "囧": n(454),
        "生气": n(455),
        "提莫": n(456),
        666: n(457),
        "丑": n(458),
        "开车": n(459),
        "拉轰": n(460),
        "阿冷": n(461),
        520: n(462),
        "吃瓜": n(463),
        "恰柠檬": n(464),
        "惊鸿一面": n(465),
        "哭": n(466)
    };
    e.exports = {
        emotionMap: r,
        emotionIndex: ["呲牙", "惊讶", "色", "得意", "流泪", "可怜", "流汗", "奋斗", "发呆", "亲亲", "发怒", "吐", "坏笑", "衰", "敲打", "强", "抠鼻", "石化", "大笑", "疑问", "委屈", "鄙视", "调皮", "骷髅", "强壮", "发抖", "压力", "晕", "吐血", "囧", "生气", "提莫", "666", "丑", "开车", "拉轰", "阿冷", "哭", "惊鸿一面", "恰柠檬", "520", "吃瓜"]
    }
}, function (e, t, n) {
    e.exports = n.p + "images/6b0a290bb3b32241dbfd29f1a08d18fd.png"
}, function (e, t, n) {
    e.exports = n.p + "images/d4620958ca5f24c323b3ab3f88760fe0.png"
}, function (e, t, n) {
    e.exports = n.p + "images/14ee535c022fb13c70c8b31759cd3dc8.png"
}, function (e, t, n) {
    e.exports = n.p + "images/a827e34b3afd1dbb55741ec913c9364e.png"
}, function (e, t, n) {
    e.exports = n.p + "images/ad8f3317067d58964c3f104e801d21f5.png"
}, function (e, t, n) {
    e.exports = {loadingWrap: "loading-loadingWrap-3nPiU", loading: "loading-loading-zfTJm"}
}, function (e, t, n) {
    e.exports = n.p + "images/e998a8beeaddb1d266a98a6cf38d84a8.png"
}, function (e, t, n) {
    e.exports = n.p + "images/3ca9a70dce238cfe457957fbc60ef4f4.png"
}, function (e, t, n) {
    e.exports = n.p + "images/1b415d1517d4dd8e66bc9638a05a0487.png"
}, function (e, t, n) {
    e.exports = n.p + "images/2ac1e02eda4efe06837fced475236ca5.png"
}, function (e, t, n) {
    e.exports = n.p + "images/e998a8beeaddb1d266a98a6cf38d84a8.png"
}, function (e, t, n) {
    "use strict";
    var r = n(0), o = n.n(r), i = n(2);
    n(469);

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function u(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var f = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? u(e) : t
            }(this, s(n).call(this, e))).state = {}, t._init = t._init.bind(u(t)), t.geetest = o.a.createRef(), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(n, r["Component"]), function (e, t, n) {
            t && c(e.prototype, t), n && c(e, n)
        }(n, [{
            key: "componentDidMount", value: function () {
                this.props.challenge && this._init()
            }
        }, {
            key: "shouldComponentUpdate", value: function (e) {
                return e.challenge !== this.props.challenge
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.props.challenge && this._init()
            }
        }, {
            key: "_init", value: function () {
                var n = this;
                return window.initGeetest({
                    gt: n.props.gt,
                    challenge: n.props.challenge,
                    offline: n.props.offline,
                    width: n.props.width,
                    new_captcha: !0,
                    product: n.props.product
                }, function (t) {
                    n.geetest.current && (n.geetest.current.innerHTML = ""), t.appendTo(n.geetest.current), t.onReady(n.props.onReady), t.onSuccess(function () {
                        var e = t.getValidate();
                        n.props.onSuccess(e)
                    }), "bind" === n.props.product && t.onReady(function () {
                        t.verify()
                    }), t.onClose(n.props.onClose), t.onError(n.props.onError)
                })
            }
        }, {
            key: "render", value: function () {
                return "bind" !== this.props.product ? o.a.createElement("div", {
                    className: "geetest-wrapper",
                    key: "geetest-captcha",
                    ref: this.geetest
                }, "验证码加载中...") : null
            }
        }]), n
    }();
    f.propTypes = {
        challenge: i.PropTypes.string.isRequired,
        product: i.PropTypes.string
    }, f.defaultProps = {
        protocol: "https://",
        product: "popup",
        lang: "zh-cn",
        sandbox: !1,
        width: "100%",
        onReady: function () {
        },
        onRefresh: function () {
        },
        onFail: function () {
        },
        onError: function () {
        },
        onClose: function () {
        }
    }, t.a = f
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
        return e < 1e4 ? e : 1e4 <= e ? "".concat(parseInt(e / 1e3) / 10, "W") : void 0
    }

    n.d(t, "a", function () {
        return r
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), c = n.n(r), o = n(83), s = n.n(o);
    t.a = function (e) {
        var t = e.isActive, n = void 0 !== t && t, r = e.onClick, o = void 0 === r ? function () {
        } : r, i = e.isCanClick, a = void 0 === i || i;
        return c.a.createElement("span", {className: n ? "".concat(s.a.active, " ").concat(s.a.common) : "".concat(s.a.inActive, " ").concat(s.a.common)}, c.a.createElement("span", {
            className: s.a.dot,
            onClick: a ? o : function () {
            }
        }))
    }
}, function (e, t, n) {
    e.exports = !n(28) && !n(11)(function () {
        return 7 != Object.defineProperty(n(115)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var r = n(10), o = n(25), i = n(60), a = n(116), c = n(26).f;
    e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || c(t, e, {value: a.f(e)})
    }
}, function (e, t, n) {
    var a = n(38), c = n(40), s = n(96)(!1), u = n(117)("IE_PROTO");
    e.exports = function (e, t) {
        var n, r = c(e), o = 0, i = [];
        for (n in r) n != u && a(r, n) && i.push(n);
        for (; t.length > o;) a(r, n = t[o++]) && (~s(i, n) || i.push(n));
        return i
    }
}, function (e, t, n) {
    var a = n(26), c = n(12), s = n(61);
    e.exports = n(28) ? Object.defineProperties : function (e, t) {
        c(e);
        for (var n, r = s(t), o = r.length, i = 0; i < o;) a.f(e, n = r[i++], t[n]);
        return e
    }
}, function (e, t, n) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var o = n(40), i = n(64).f, a = {}.toString,
        c = "object" == ("undefined" == typeof window ? "undefined" : r(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return c && "[object Window]" == a.call(e) ? function (e) {
            try {
                return i(e)
            } catch (e) {
                return c.slice()
            }
        }(e) : i(o(e))
    }
}, function (e, t, n) {
    "use strict";
    var d = n(61), p = n(97), m = n(87), h = n(33), g = n(86), o = Object.assign;
    e.exports = !o || n(11)(function () {
        var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function (e) {
            t[e] = e
        }), 7 != o({}, e)[n] || Object.keys(o({}, t)).join("") != r
    }) ? function (e, t) {
        for (var n = h(e), r = arguments.length, o = 1, i = p.f, a = m.f; o < r;) for (var c, s = g(arguments[o++]), u = i ? d(s).concat(i(s)) : d(s), l = u.length, f = 0; f < l;) a.call(s, c = u[f++]) && (n[c] = s[c]);
        return n
    } : o
}, function (e, t) {
    e.exports = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}, function (e, t, n) {
    "use strict";
    var i = n(45), a = n(13), c = n(166), s = [].slice, u = {};
    e.exports = Function.bind || function (n) {
        var r = i(this), o = s.call(arguments, 1), e = function e() {
            var t = o.concat(s.call(arguments));
            return this instanceof e ? function (e, t, n) {
                if (!(t in u)) {
                    for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
                    u[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                }
                return u[t](e, n)
            }(r, t.length, t) : c(r, t, n)
        };
        return a(r.prototype) && (e.prototype = r.prototype), e
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function (e, t, n) {
    var r = n(10).parseInt, o = n(71).trim, i = n(121), a = /^[-+]?0[xX]/;
    e.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function (e, t) {
        var n = o(String(e), 3);
        return r(n, t >>> 0 || (a.test(n) ? 16 : 10))
    } : r
}, function (e, t, n) {
    var r = n(10).parseFloat, o = n(71).trim;
    e.exports = 1 / r(n(121) + "-0") != -1 / 0 ? function (e) {
        var t = o(String(e), 3), n = r(t);
        return 0 === n && "-" == t.charAt(0) ? -0 : n
    } : r
}, function (e, t, n) {
    var r = n(52);
    e.exports = function (e, t) {
        if ("number" != typeof e && "Number" != r(e)) throw TypeError(t);
        return +e
    }
}, function (e, t, n) {
    var r = n(13), o = Math.floor;
    e.exports = function (e) {
        return !r(e) && isFinite(e) && o(e) === e
    }
}, function (e, t) {
    e.exports = Math.log1p || function (e) {
        return -1e-8 < (e = +e) && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(63), o = n(58), i = n(70), a = {};
    n(39)(a, n(18)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = r(a, {next: o(1, n)}), i(e, t + " Iterator")
    }
}, function (e, t, n) {
    var i = n(12);
    e.exports = function (t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), e
        }
    }
}, function (e, t, n) {
    var r = n(335);
    e.exports = function (e, t) {
        return new (r(e))(t)
    }
}, function (e, t, n) {
    var l = n(45), f = n(33), d = n(86), p = n(22);
    e.exports = function (e, t, n, r, o) {
        l(t);
        var i = f(e), a = d(i), c = p(i.length), s = o ? c - 1 : 0, u = o ? -1 : 1;
        if (n < 2) for (; ;) {
            if (s in a) {
                r = a[s], s += u;
                break
            }
            if (s += u, o ? s < 0 : c <= s) throw TypeError("Reduce of empty array with no initial value")
        }
        for (; o ? 0 <= s : s < c; s += u) s in a && (r = t(r, a[s], s, i));
        return r
    }
}, function (e, t, n) {
    "use strict";
    var u = n(33), l = n(62), f = n(22);
    e.exports = [].copyWithin || function (e, t) {
        var n = u(this), r = f(n.length), o = l(e, r), i = l(t, r), a = 2 < arguments.length ? arguments[2] : void 0,
            c = Math.min((void 0 === a ? r : l(a, r)) - i, r - o), s = 1;
        for (i < o && o < i + c && (s = -1, i += c - 1, o += c - 1); 0 < c--;) i in n ? n[o] = n[i] : delete n[o], o += s, i += s;
        return n
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    "use strict";
    var r = n(136);
    n(6)({target: "RegExp", proto: !0, forced: r !== /./.exec}, {exec: r})
}, function (e, t, n) {
    n(28) && "g" != /./g.flags && n(26).f(RegExp.prototype, "flags", {configurable: !0, get: n(100)})
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, c = n(60), s = n(10), u = n(44), l = n(88), f = n(6), d = n(13), p = n(45), m = n(74), h = n(103),
        g = n(89), b = n(138).set, v = n(355)(), y = n(181), S = n(356), w = n(104), E = n(182), I = "Promise",
        T = s.TypeError, O = s.process, _ = O && O.versions, N = _ && _.v8 || "", C = s[I], k = "process" == l(O),
        M = function () {
        }, L = o = y.f, A = !!function () {
            try {
                var e = C.resolve(1), t = (e.constructor = {})[n(18)("species")] = function (e) {
                    e(M, M)
                };
                return (k || "function" == typeof PromiseRejectionEvent) && e.then(M) instanceof t && 0 !== N.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
            } catch (e) {
            }
        }(), P = function (e) {
            var t;
            return !(!d(e) || "function" != typeof (t = e.then)) && t
        }, j = function (l, n) {
            if (!l._n) {
                l._n = !0;
                var r = l._c;
                v(function () {
                    for (var s = l._v, u = 1 == l._s, e = 0, t = function (e) {
                        var t, n, r, o = u ? e.ok : e.fail, i = e.resolve, a = e.reject, c = e.domain;
                        try {
                            o ? (u || (2 == l._h && D(l), l._h = 1), !0 === o ? t = s : (c && c.enter(), t = o(s), c && (c.exit(), r = !0)), t === e.promise ? a(T("Promise-chain cycle")) : (n = P(t)) ? n.call(t, i, a) : i(t)) : a(s)
                        } catch (e) {
                            c && !r && c.exit(), a(e)
                        }
                    }; r.length > e;) t(r[e++]);
                    l._c = [], l._n = !1, n && !l._h && R(l)
                })
            }
        }, R = function (i) {
            b.call(s, function () {
                var e, t, n, r = i._v, o = x(i);
                if (o && (e = S(function () {
                    k ? O.emit("unhandledRejection", r, i) : (t = s.onunhandledrejection) ? t({
                        promise: i,
                        reason: r
                    }) : (n = s.console) && n.error && n.error("Unhandled promise rejection", r)
                }), i._h = k || x(i) ? 2 : 1), i._a = void 0, o && e.e) throw e.v
            })
        }, x = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        }, D = function (t) {
            b.call(s, function () {
                var e;
                k ? O.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({promise: t, reason: t._v})
            })
        }, G = function (e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), j(t, !0))
        }, F = function e(n) {
            var r, o = this;
            if (!o._d) {
                o._d = !0, o = o._w || o;
                try {
                    if (o === n) throw T("Promise can't be resolved itself");
                    (r = P(n)) ? v(function () {
                        var t = {_w: o, _d: !1};
                        try {
                            r.call(n, u(e, t, 1), u(G, t, 1))
                        } catch (e) {
                            G.call(t, e)
                        }
                    }) : (o._v = n, o._s = 1, j(o, !1))
                } catch (e) {
                    G.call({_w: o, _d: !1}, e)
                }
            }
        };
    A || (C = function (e) {
        m(this, C, I, "_h"), p(e), r.call(this);
        try {
            e(u(F, this, 1), u(G, this, 1))
        } catch (e) {
            G.call(this, e)
        }
    }, (r = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(75)(C.prototype, {
        then: function (e, t) {
            var n = L(g(this, C));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = k ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && j(this, !1), n.promise
        }, catch: function (e) {
            return this.then(void 0, e)
        }
    }), i = function () {
        var e = new r;
        this.promise = e, this.resolve = u(F, e, 1), this.reject = u(G, e, 1)
    }, y.f = L = function (e) {
        return e === C || e === a ? new i(e) : o(e)
    }), f(f.G + f.W + f.F * !A, {Promise: C}), n(70)(C, I), n(73)(I), a = n(25)[I], f(f.S + f.F * !A, I, {
        reject: function (e) {
            var t = L(this);
            return (0, t.reject)(e), t.promise
        }
    }), f(f.S + f.F * (c || !A), I, {
        resolve: function (e) {
            return E(c && this === a ? C : this, e)
        }
    }), f(f.S + f.F * !(A && n(99)(function (e) {
        C.all(e).catch(M)
    })), I, {
        all: function (e) {
            var a = this, t = L(a), c = t.resolve, s = t.reject, n = S(function () {
                var r = [], o = 0, i = 1;
                h(e, !1, function (e) {
                    var t = o++, n = !1;
                    r.push(void 0), i++, a.resolve(e).then(function (e) {
                        n || (n = !0, r[t] = e, --i || c(r))
                    }, s)
                }), --i || c(r)
            });
            return n.e && s(n.v), t.promise
        }, race: function (e) {
            var t = this, n = L(t), r = n.reject, o = S(function () {
                h(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r)
                })
            });
            return o.e && r(o.v), n.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(45);

    function r(e) {
        var n, r;
        this.promise = new e(function (e, t) {
            if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
            n = e, r = t
        }), this.resolve = o(n), this.reject = o(r)
    }

    e.exports.f = function (e) {
        return new r(e)
    }
}, function (e, t, n) {
    var r = n(12), o = n(13), i = n(181);
    e.exports = function (e, t) {
        if (r(e), o(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    "use strict";
    var a = n(26).f, c = n(63), s = n(75), u = n(44), l = n(74), f = n(103), r = n(127), o = n(177), i = n(73),
        d = n(28), p = n(56).fastKey, m = n(67), h = d ? "_s" : "size", g = function (e, t) {
            var n, r = p(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n) if (n.k == t) return n
        };
    e.exports = {
        getConstructor: function (e, i, n, r) {
            var o = e(function (e, t) {
                l(e, o, i, "_i"), e._t = i, e._i = c(null), e._f = void 0, e._l = void 0, e[h] = 0, null != t && f(t, n, e[r], e)
            });
            return s(o.prototype, {
                clear: function () {
                    for (var e = m(this, i), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                    e._f = e._l = void 0, e[h] = 0
                }, delete: function (e) {
                    var t = m(this, i), n = g(t, e);
                    if (n) {
                        var r = n.n, o = n.p;
                        delete t._i[n.i], n.r = !0, o && (o.n = r), r && (r.p = o), t._f == n && (t._f = r), t._l == n && (t._l = o), t[h]--
                    }
                    return !!n
                }, forEach: function (e) {
                    m(this, i);
                    for (var t, n = u(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.n : this._f;) for (n(t.v, t.k, this); t && t.r;) t = t.p
                }, has: function (e) {
                    return !!g(m(this, i), e)
                }
            }), d && a(o.prototype, "size", {
                get: function () {
                    return m(this, i)[h]
                }
            }), o
        }, def: function (e, t, n) {
            var r, o, i = g(e, t);
            return i ? i.v = n : (e._l = i = {
                i: o = p(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = i), r && (r.n = i), e[h]++, "F" !== o && (e._i[o] = i)), e
        }, getEntry: g, setStrong: function (e, n, t) {
            r(e, n, function (e, t) {
                this._t = m(e, n), this._k = t, this._l = void 0
            }, function () {
                for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? o(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, o(1))
            }, t ? "entries" : "values", !t, !0), i(n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var a = n(75), c = n(56).getWeak, o = n(12), s = n(13), u = n(74), l = n(103), r = n(49), f = n(38), d = n(67),
        i = r(5), p = r(6), m = 0, h = function (e) {
            return e._l || (e._l = new g)
        }, g = function () {
            this.a = []
        }, b = function (e, t) {
            return i(e.a, function (e) {
                return e[0] === t
            })
        };
    g.prototype = {
        get: function (e) {
            var t = b(this, e);
            if (t) return t[1]
        }, has: function (e) {
            return !!b(this, e)
        }, set: function (e, t) {
            var n = b(this, e);
            n ? n[1] = t : this.a.push([e, t])
        }, delete: function (t) {
            var e = p(this.a, function (e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, e.exports = {
        getConstructor: function (e, n, r, o) {
            var i = e(function (e, t) {
                u(e, i, n, "_i"), e._t = n, e._i = m++, e._l = void 0, null != t && l(t, r, e[o], e)
            });
            return a(i.prototype, {
                delete: function (e) {
                    if (!s(e)) return !1;
                    var t = c(e);
                    return !0 === t ? h(d(this, n)).delete(e) : t && f(t, this._i) && delete t[this._i]
                }, has: function (e) {
                    if (!s(e)) return !1;
                    var t = c(e);
                    return !0 === t ? h(d(this, n)).has(e) : t && f(t, this._i)
                }
            }), i
        }, def: function (e, t, n) {
            var r = c(o(t), !0);
            return !0 === r ? h(e).set(t, n) : r[e._i] = n, e
        }, ufstore: h
    }
}, function (e, t, n) {
    var r = n(46), o = n(22);
    e.exports = function (e) {
        if (void 0 === e) return 0;
        var t = r(e), n = o(t);
        if (t !== n) throw RangeError("Wrong length!");
        return n
    }
}, function (e, t, n) {
    var r = n(64), o = n(97), i = n(12), a = n(10).Reflect;
    e.exports = a && a.ownKeys || function (e) {
        var t = r.f(i(e)), n = o.f;
        return n ? t.concat(n(e)) : t
    }
}, function (e, t, n) {
    var l = n(22), f = n(123), d = n(53);
    e.exports = function (e, t, n, r) {
        var o = String(d(e)), i = o.length, a = void 0 === n ? " " : String(n), c = l(t);
        if (c <= i || "" == a) return o;
        var s = c - i, u = f.call(a, Math.ceil(s / a.length));
        return u.length > s && (u = u.slice(0, s)), r ? u + o : o + u
    }
}, function (e, t, n) {
    var s = n(61), u = n(40), l = n(87).f;
    e.exports = function (c) {
        return function (e) {
            for (var t, n = u(e), r = s(n), o = r.length, i = 0, a = []; i < o;) l.call(n, t = r[i++]) && a.push(c ? [t, n[t]] : n[t]);
            return a
        }
    }
}, function (e, t, n) {
    e.exports = n(17)(238)
}, function (e, t, n) {
    e.exports = n(17)(239)
}, function (e, t, n) {
    "use strict";
    var o = n(0), i = n.n(o), r = n(20), a = n.n(r), c = n(4), s = n(192), u = n(16), l = n(7), f = n(110);
    n(483);

    function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var b = /\s/g, v = null;

    function y() {
        v && (a.a.unmountComponentAtNode(v) && v.parentNode && (v.parentNode.removeChild(v), v = null))
    }

    var S = function (e) {
        function r(e) {
            var t;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), (t = function (e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? h(e) : t
            }(this, m(r).call(this, e))).clearInput = function () {
                t.setState(Object.assign({}, t.state, {searchValue: "", searchResult: null}))
            }, t.state = {
                active: !1,
                searchValue: "",
                loading: !1,
                searchResult: null,
                bodyShow: !0
            }, ["activeSearchInput", "inactiveSearchInput", "searchInputChange", "searchKeyDown", "search"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, h(t));
            var n = t.setState.bind(h(t));
            return t.setState = function (e) {
                v && n(e)
            }, t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }(r, o["PureComponent"]), function (e, t, n) {
            t && p(e.prototype, t), n && p(e, n)
        }(r, [{
            key: "activeSearchInput", value: function () {
                this.setState(Object.assign({}, this.state, {active: !0}))
            }
        }, {
            key: "inactiveSearchInput", value: function () {
                this.setState(Object.assign({}, this.state, {active: !1}))
            }
        }, {
            key: "searchInputChange", value: function (e) {
                var t = e.replace(b, "");
                this.setState(Object.assign({}, this.state, {searchValue: t}))
            }
        }, {
            key: "searchKeyDown", value: function (e) {
                13 === e.keyCode && this.search()
            }
        }, {
            key: "search", value: function () {
                var t = this, e = this.state.searchValue;
                e ? (this.setState(Object.assign({}, this.state, {loading: !0})), fetch(c.a.friendSearch, {
                    method: "POST",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: "keyword=".concat(e)
                }).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    e && v && t.setState(Object.assign({}, t.state, {loading: !1, searchResult: e}))
                })) : this.setState(Object.assign({}, this.state, {searchResult: null}))
            }
        }, {
            key: "renderSearchResult", value: function () {
                var e = this.state, t = e.searchResult;
                if (e.loading) return i.a.createElement(u.a, {className: "search-dialog-result-loading"});
                if (t) {
                    if (200 !== t.status_code) return i.a.createElement("div", {className: "search-result-tip"}, t.message || "搜索失败");
                    var n = t.data;
                    return n.length ? i.a.createElement("div", {className: "search-dialog-result-wrapper"}, i.a.createElement(s.a, {
                        onBtnClick: y,
                        userItem: n[0]
                    })) : i.a.createElement("div", {className: "search-result-noresult-tip"}, i.a.createElement("i", {className: "search-result-noresult-tip-img"}), i.a.createElement("div", null, "没有搜到相关用户，再检查一下试试呢~"))
                }
                return null
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.state, n = t.active, r = t.searchValue;
                return i.a.createElement(l.a, {
                    className: "friend-search-dialog",
                    onCancel: y
                }, i.a.createElement("div", {className: "friend-search-dialog-header"}, i.a.createElement("span", {className: "friend-search-dialog-title"}, "添加好友"), i.a.createElement("i", {
                    onClick: y,
                    className: "friend-search-dialog-close"
                })), i.a.createElement("div", {className: "friend-search-dialog-content"}, i.a.createElement("div", {className: "friend-search-dialog-input-wrapper".concat(n ? " active" : "")}, i.a.createElement(f.a, {
                    className: "friend-search-dialog-input",
                    placeholder: "请输入好友昵称",
                    type: "text",
                    value: r,
                    onFocus: this.activeSearchInput,
                    onBlur: this.inactiveSearchInput,
                    onChange: this.searchInputChange,
                    onKeyDown: this.searchKeyDown
                }), "" !== r ? i.a.createElement("span", {
                    onClick: function () {
                        e.clearInput()
                    }, className: "friend-search-dialog-input-delete"
                }) : null), i.a.createElement("div", {className: "friend-search-dialog-result"}, this.renderSearchResult())))
            }
        }]), r
    }();
    S.defaultProps = {}, S.propTypes = {}, t.a = {
        show: function () {
            v = document.createElement("div"), document.body.appendChild(v), a.a.render(i.a.createElement(S, null), v)
        }, close: y
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return l
    });
    var r = n(0), o = n.n(r), i = n(2), a = n(19), c = n(90), s = n(1), u = n(5);
    n(482);

    function l(t) {
        var n = t.userItem, e = s.g.getState().friendList.friendList;
        return n.isMyFriend = e.some(function (e) {
            return String(e) === String(n.uid)
        }), o.a.createElement("div", {className: "min-friend-card-item"}, o.a.createElement("div", {className: "min-friend-card-header"}, o.a.createElement(a.b, {
            className: "min-friend-card-avatar",
            wrapperClassName: "min-friend-card-avatar-wrapper",
            userItem: n,
            onClick: function () {
                return Object(u.i)(n.uid)
            }
        }), o.a.createElement("div", {className: "min-friend-card-profile"}, o.a.createElement("div", {className: "min-friend-card-profile-header"}, o.a.createElement("span", {
            className: "min-friend-card-name",
            onClick: function () {
                return Object(u.i)(n.uid)
            }
        }, n.remark_name || n.nickname)), n && n.reg_time ? o.a.createElement("div", {className: "min-friend-card-regtime"}, o.a.createElement("span", null, n.reg_time), "注册") : null), o.a.createElement("div", {className: "min-friend-card-footer"}, o.a.createElement("span", {
            className: "min-friend-card-message",
            onClick: function () {
                t && t.onBtnClick && t.onBtnClick(), s.g.dispatch(s.e.changeTab("chatList")), s.g.dispatch(s.x.hide()), s.g.dispatch(s.c.showChatDetail(n.uid))
            }
        }), n.isMyFriend || n.notShowAddFriend ? null : o.a.createElement("span", {
            onClick: function () {
                t && t.onBtnClick && t.onBtnClick();
                var e = {friendUid: n.uid, friendUserName: n.nickname};
                s.g.dispatch(c.a.show(e))
            }, className: "min-friend-card-add-friend"
        }))))
    }

    l.defaultProps = {
        onBtnClick: function () {
        }, userItem: {}
    }, l.propTypes = {onBtnClick: i.PropTypes.func, userItem: i.PropTypes.object}
}, function (e, t, n) {
    "use strict";
    var r = n(0), o = n.n(r), i = n(2), a = n(15), c = n(5), s = n(19), u = n(76), l = n(194), f = n(4), d = n(1),
        p = n(85), m = n(9), h = n.n(m), g = n(3), b = n(157), v = n(93);
    n(486);

    function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function w(e) {
        return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var T = /\s/g, O = function (e) {
        function n(e) {
            var r;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (r = function (e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? E(e) : t
            }(this, w(n).call(this, e))).isInBlackList = function () {
                var e = r.props;
                return !!e.blackList[e.friendCardInfo.uid]
            }, r.joinBan = function (e) {
                var t = e.uid, n = r.props.dispatch;
                Object(p.a)(t, function () {
                    n(d.v.operateInfocard(!1))
                })
            }, r.deleteBan = function (e) {
                var t = e.uid;
                Object(p.e)(t)
            }, r.state = {
                isHide: !0,
                contentValue: null,
                isRemark: !1
            }, ["changeRemarkStatus", "changeRemarkIcon", "inputFocus", "remarkKeyDown"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, E(r));
            var t = r.setState.bind(E(r));
            return r.setState = function (e) {
                t(e)
            }, r.remarkInput = o.a.createRef(), r
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && S(e.prototype, t), n && S(e, n)
        }(n, [{
            key: "componentWillMount", value: function () {
                var e = this.props, t = e.dispatch, n = e.uid;
                t(d.k.showFriendCard(n))
            }
        }, {
            key: "componentDidUpdate", value: function (e, t) {
                var n = this.props.friendCardInfo;
                if (!this.state.isHide && t.isHide) {
                    var r = this.remarkInput.current;
                    r && (r.focus(), r.value = n.remark_name || "", r.focus())
                }
            }
        }, {
            key: "componentWillUnmount", value: function () {
                (0, this.props.dispatch)(d.k.close())
            }
        }, {
            key: "jumpChatDetail", value: function () {
                var e = this.props, t = e.dispatch, n = e.friendCardInfo;
                t(d.e.changeTab("chatList")), t(d.x.hide()), t(d.c.showChatDetail(n.uid, !0))
            }
        }, {
            key: "deleteFriend", value: function (e) {
                var t = this.props.dispatch;
                Object(f.b)(e, function () {
                    t(d.v.operateInfocard(!1)), t(d.f.changeType("none"))
                })
            }
        }, {
            key: "remarkKeyDown", value: function (e) {
                13 === e.keyCode && this.changeRemarkStatus(e)
            }
        }, {
            key: "changeRemarkStatus", value: function (e) {
                var n = e.target.value, t = this.props, r = t.friendCardInfo, o = t.dispatch;
                10 < (n = n.replace(T, "")).length ? this.setState(h()({}, this.state, {
                    isRemark: !0,
                    contentValue: n
                })) : (this.setState(h()({}, this.state, {
                    isRemark: !1,
                    isHide: !this.state.isHide,
                    contentValue: n
                })), fetch(f.a.remarkUser, {
                    method: "POST",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: "dst_uid=".concat(r.uid, "&remark_name=").concat(n)
                }).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    var t = {
                        approve: r.approve,
                        identity: r.identity,
                        img: r.img,
                        is_friend: r.is_friend,
                        level: r.level,
                        nickname: r.nickname,
                        reg_time: r.reg_time,
                        remark_name: n,
                        sex: r.sex,
                        source: r.source,
                        uid: r.uid
                    };
                    200 === e.status_code ? (o(d.z.setItem(t)), o(d.l.sortFriend())) : g.a.notice("备注失败：".concat(e.message))
                }).catch(function (e) {
                    throw e
                }))
            }
        }, {
            key: "changeRemarkIcon", value: function () {
                this.props.friendCardInfo.remark_name && this.setState(h()({}, this.state, {isHide: this.state.isHide})), this.setState(h()({}, this.state, {isHide: !this.state.isHide}))
            }
        }, {
            key: "renderRemark", value: function () {
                var e = this, t = this.props.friendCardInfo, n = this.state.isHide;
                return o.a.createElement("span", {className: "friend-card-remark-wrapper"}, o.a.createElement("span", {className: n ? "friend-card-remark" : "hide"}, t.remark_name), o.a.createElement("i", {
                    className: n ? "friend-card-remark-edit-icon" : "hide",
                    onClick: function () {
                        return e.changeRemarkIcon()
                    }
                }), n ? null : o.a.createElement("input", {
                    ref: this.remarkInput,
                    type: "text",
                    className: "friend-card-remark-input",
                    placeholder: "请输入备注",
                    onBlur: this.changeRemarkStatus,
                    onKeyDown: this.remarkKeyDown
                }))
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.friendCardInfo, n = t.uid;
                if ("string" != typeof n) return null;
                var r = !!t.is_friend;
                return 0 <= n.indexOf("SYSTEM") || n === c.p[0] ? o.a.createElement("div", {className: "friend-card-system"}, o.a.createElement(s.b, {
                    userItem: t,
                    className: "friend-card-avatar",
                    wrapperClassName: "friend-card-avatar-wrapper"
                }), o.a.createElement("div", {className: "friend-card-title"}, o.a.createElement("span", {className: "friend-card-name"}, t.nickname), o.a.createElement("i", {className: "user-verify"})), o.a.createElement("div", {className: "friend-card-profile-system"}, t.type_info, "，", t.signature), o.a.createElement("div", {className: "friend-card-operate"}, o.a.createElement("span", {
                    className: "friend-card-btn btn friend-card-chatdetail",
                    onClick: function () {
                        e.jumpChatDetail()
                    }
                }, "查看消息"))) : o.a.createElement("div", {className: "friend-card-wrapper"}, o.a.createElement("div", {className: "friend-card"}, o.a.createElement("div", {className: "friend-card-header-wrapper"}, o.a.createElement(s.b, {
                    userItem: t,
                    className: "friend-card-avatar",
                    onClick: function () {
                        return Object(c.i)(n)
                    },
                    wrapperClassName: "friend-card-avatar-wrapper"
                }), o.a.createElement("div", {className: "friend-card-title"}, o.a.createElement("span", {
                    onClick: function () {
                        return Object(c.i)(n)
                    }, className: "friend-card-name"
                }, t.remark_name ? t.remark_name : t.nickname), o.a.createElement("span", {className: "friend-card-other"}, o.a.createElement(u.b, {
                    userItem: t,
                    className: "friend-card-lv"
                }), o.a.createElement(l.a, {
                    className: "friend-card-sex",
                    userItem: t
                })))), o.a.createElement("div", {className: "friend-card-header-line"}), o.a.createElement("div", {className: "friend-card-profile-wrapper"}, o.a.createElement("ul", {className: "friend-card-profile"}, o.a.createElement("li", {className: "friend-card-profile-remark"}, o.a.createElement("span", {className: "friend-card-profile-field"}, "昵称"), o.a.createElement("span", {className: "friend-card-nick"}, t.nickname)), r ? o.a.createElement("li", {className: "friend-card-profile-remark"}, o.a.createElement("span", {className: "friend-card-profile-field"}, "备注"), this.renderRemark(), o.a.createElement("span", {className: this.state.isRemark ? "friend-card-profile-field-remark-show" : "friend-card-profile-field-remark-hide"}, "您的备注过长")) : null, o.a.createElement("li", null, o.a.createElement("span", {className: "friend-card-profile-field"}, "注册日期"), o.a.createElement("span", {className: "friend-card-profile-date"}, t.reg_time)), o.a.createElement("li", null, o.a.createElement("span", {className: "friend-card-profile-field"}, "加入黑名单"), o.a.createElement("span", {className: "friend-card-profile-black"}, o.a.createElement(b.a, {
                    isActive: this.isInBlackList(),
                    onClick: this.isInBlackList() ? function () {
                        return e.deleteBan(t)
                    } : function () {
                        return e.joinBan(t)
                    }
                }))))), r ? o.a.createElement("div", {className: "friend-card-btn-wrap"}, o.a.createElement(v.a, {
                    onClick: function () {
                        return e.deleteFriend(t)
                    }
                }, "删除好友")) : null))
            }
        }]), n
    }();
    O.defaultProps = {
        friendCardInfo: {}, blackList: {}, uid: void 0, dispatch: function () {
        }
    }, O.propTypes = {
        friendCardInfo: i.PropTypes.object,
        uid: i.PropTypes.string,
        blackList: i.PropTypes.object,
        dispatch: i.PropTypes.func
    }, t.a = Object(a.connect)(function (e) {
        var t = e.userStore.userStore, n = e.friendCard, r = e.blackList.blackList;
        return {friendCardInfo: t[n.uid], blackList: r}
    })(O)
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return a
    });
    var r = n(0), o = n.n(r), i = n(2);
    n(485);

    function a(e) {
        var t = e.className, n = e.userItem;
        return n && void 0 !== n.sex ? o.a.createElement("i", {className: "".concat(t || "", " sex-icon ").concat("1" === String(n.sex) ? "male" : "2" === String(n.sex) ? "female" : "")}) : o.a.createElement("i", null)
    }

    a.defaultProps = {className: "", userItem: {}}, a.propTypes = {
        className: i.PropTypes.string,
        userItem: i.PropTypes.object
    }
}, function (e, t, n) {
    e.exports = n(17)(162)
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return f
    });
    var r = n(0), i = n.n(r), o = n(2);
    n(490);

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t) {
        return !t || "object" !== a(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var f = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), s(this, u(t).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(t, r["PureComponent"]), function (e, t, n) {
            t && c(e.prototype, t), n && c(e, n)
        }(t, [{
            key: "render", value: function () {
                var e = this.props.className, t = this.props, n = t.onClick, r = t.checked, o = t.children;
                return e = e || "", i.a.createElement("label", {
                    onClick: n,
                    className: "g-radio ".concat(e, "  ").concat(r ? "checked" : "")
                }, i.a.createElement("span", {className: "g-radio-icon"}), i.a.createElement("span", {className: "g-radio-text"}, o))
            }
        }]), t
    }();
    f.defaultProps = {
        className: "", onClick: function () {
        }, checked: !1, children: ""
    }, f.propTypes = {
        className: o.PropTypes.node,
        onClick: o.PropTypes.func,
        checked: o.PropTypes.bool,
        children: o.PropTypes.node
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n.n(r), o = n(2), a = n(15), c = (n(492), n(152)), s = n.n(c), u = n(207), l = n.n(u), f = n(208),
        d = n.n(f), p = n(209), m = n.n(p), h = n(210), g = n.n(h), b = n(211), v = n.n(b), y = n(212), S = n.n(y),
        w = n(213), E = n.n(w), I = n(214), T = n.n(I), O = n(215), _ = n.n(O), N = n(216), C = n.n(N), k = n(217),
        M = n.n(k), L = n(218), A = n.n(L), P = n(219), j = n.n(P), R = n(220), x = n.n(R), D = n(221), G = n.n(D),
        F = n(222), U = n.n(F), H = n(223), W = n.n(H), B = n(224), V = n.n(B), q = n(225), z = n.n(q), Y = n(226),
        J = n.n(Y), K = n(227), Q = n.n(K), $ = n(228), X = n.n($), Z = n(229), ee = n.n(Z), te = n(230), ne = n.n(te),
        re = n(231), oe = n.n(re), ie = n(232), ae = n.n(ie), ce = n(233), se = n.n(ce), ue = n(234), le = n.n(ue),
        fe = n(235), de = n.n(fe), pe = n(236), me = n.n(pe), he = n(237), ge = n.n(he);

    function be(e) {
        return (be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ye(e) {
        return (ye = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Se(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function we(e, t) {
        return (we = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Ee = [l.a, d.a, m.a, g.a, v.a, S.a, E.a, T.a, _.a, C.a, M.a, A.a, j.a, x.a, G.a, U.a, W.a, V.a, z.a, J.a, Q.a, X.a, ee.a, ne.a, oe.a, ae.a, se.a, le.a, de.a, me.a, ge.a],
        Ie = !1, Te = function (e) {
            function n(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (t = function (e, t) {
                    return !t || "object" !== be(t) && "function" != typeof t ? Se(e) : t
                }(this, ye(n).call(this, e))).state = {
                    level: null,
                    bg: "",
                    md: "",
                    identity: null,
                    fansMedalShow: !0
                }, ["collatingData", "updateFansMedalLevel"].forEach(function (e) {
                    this[e] && (this[e] = this[e].bind(this))
                }, Se(t)), t
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && we(e, t)
            }(n, r["PureComponent"]), function (e, t, n) {
                t && ve(e.prototype, t), n && ve(e, n)
            }(n, [{
                key: "componentWillMount", value: function () {
                    this.updateFansMedalLevel(this.props)
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    this.updateFansMedalLevel(e)
                }
            }, {
                key: "updateFansMedalLevel", value: function (e) {
                    var t, n = e.fansMedalConfig, r = e.anchorRoomId, o = e.uid, i = e.groupStoreConfig, a = null, c = null;
                    a = i.members[o] && i.members[o].groupFansLevel ? Number(i.members[o].groupFansLevel) : 0, i.members[o] && i.members[o].role && (c = i.members[o].role), n && (Object.keys(n).forEach(function (e) {
                        String(n[e].room_id) === String(r) && (Ie = !0, t = n[e].resource)
                    }), t || Object.keys(n).forEach(function (e) {
                        "all" === String(n[e].room_id) && (t = n[e].resource)
                    })), this.collatingData(a, t, c)
                }
            }, {
                key: "collatingData", value: function (e, t, n) {
                    var r = {};
                    r.bg = t ? t.bg[Number(e)] : Ee[Number(e)], r.identity = n, r.level = e, r.fansMedalShow = !0, "Owner" === n && (r = {
                        level: 0,
                        bg: s.a,
                        identity: n
                    }), this.setState(Object.assign({}, this.state, r))
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.fansMedalName, t = this.state, n = t.bg, r = t.identity, o = t.fansMedalShow;
                    return "Owner" === r ? i.a.createElement("div", {
                        className: "fans-medal-owner",
                        style: {backgroundImage: "url(".concat(s.a, ")")}
                    }) : !(!o || !e) && i.a.createElement("div", {
                        className: Ie ? "fans-medal-special" : "fans-medal-normal",
                        style: {backgroundImage: "url(".concat(n, ")")}
                    }, i.a.createElement("i", null, e))
                }
            }]), n
        }();
    Te.defaultProps = {fansMedalName: ""}, Te.propTypes = {fansMedalName: o.PropTypes.string}, t.a = Object(a.connect)(function (e) {
        var t = e.containerRight.type, n = null, r = e.groupStore.groupStore, o = e.fansMedal || null;
        switch (t) {
            case"chatDetail":
                n = e.chatDetail.chatWithId;
                break;
            case"groupCard":
                n = e.groupCard.uid
        }
        var i = r[n].anchorRoomId;
        return {fansMedalName: r[n].fansMedalName, anchorRoomId: i, fansMedalConfig: o, groupStoreConfig: r[n]}
    })(Te)
}, function (e, t, n) {
    "use strict";
    var r = n(0), d = n.n(r), o = n(2), i = n(15), l = n(4), p = n(5), m = n(1), a = n(9), s = n.n(a), h = n(3),
        c = n(108), u = n(7), f = n(20), g = n.n(f), b = n(195), v = n.n(b);

    function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function w(e) {
        return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var T = null;

    function O() {
        T && (g.a.unmountComponentAtNode(T) && T.parentNode && (T.parentNode.removeChild(T), T = null))
    }

    var _ = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? E(e) : t
            }(this, w(n).call(this, e))).state = {
                upAvatarIcoSrc: "",
                cropBoxResizable: !1,
                loadingMark: !1,
                autoCropArea: .8
            }, ["savelAvatarUpStatus", "dataURLtoBlob", "loadingCropper"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, E(t)), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && S(e.prototype, t), n && S(e, n)
        }(n, [{
            key: "componentWillMount", value: function () {
                var e, t = this, n = this.props.e, r = this;
                if (n.dataTransfer ? e = n.dataTransfer.files : n.target && (e = n.target.files), 0 < e.length) {
                    var o = new FileReader;
                    o.onload = function (e) {
                        t.setState({upAvatarIcoSrc: o.result});
                        var n = new Image;
                        n.src = e.target.result, n.onload = function () {
                            var e = n.width, t = n.height;
                            300 <= e || 300 <= t ? 300 <= e && 300 <= t ? t <= e ? r.setState(Object.assign({}, this.state, {
                                loadingMark: !0,
                                cropBoxResizable: !1,
                                autoCropArea: 300 / t
                            })) : r.setState(Object.assign({}, this.state, {
                                loadingMark: !0,
                                cropBoxResizable: !1,
                                autoCropArea: 300 / e
                            })) : r.setState(Object.assign({}, this.state, {
                                loadingMark: !0,
                                cropBoxResizable: !1,
                                autoCropArea: 1
                            })) : r.setState(Object.assign({}, this.state, {loadingMark: !0, cropBoxResizable: !0}))
                        }
                    }, o.readAsDataURL(e[0])
                }
            }
        }, {
            key: "loadingCropper", value: function () {
                var t = this;
                if (this.state.loadingMark) return d.a.createElement(v.a, {
                    style: {width: "100%", height: "100%"},
                    aspectRatio: 1,
                    preview: ".img-preview",
                    guides: !1,
                    dragMode: "none",
                    zoomable: !1,
                    src: this.state.upAvatarIcoSrc,
                    ref: function (e) {
                        t.cropperHeadIco = e
                    },
                    autoCropArea: this.state.autoCropArea,
                    cropBoxResizable: this.state.cropBoxResizable,
                    viewMode: 1,
                    restore: !1,
                    center: !0,
                    highlight: !1
                })
            }
        }, {
            key: "dataURLtoBlob", value: function (e) {
                for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = atob(t[1]), o = r.length, i = new Uint8Array(o); o--;) i[o] = r.charCodeAt(o);
                return new Blob([i], {type: n})
            }
        }, {
            key: "savelAvatarUpStatus", value: function () {
                var c = this, e = new FormData,
                    t = this.dataURLtoBlob(this.cropperHeadIco.getCroppedCanvas().toDataURL());
                e.append("icon", t), fetch(l.a.upHeadIco, {method: "POST", headers: {}, body: e}).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    if (200 === e.status_code) {
                        var t = c.props, n = t.dispatch, r = t.groupStore, o = t.groupCardInfo, i = r[o.groupId],
                            a = {GroupId: o.groupId, FaceUrl: e.data.url};
                        webim.modifyGroupBaseInfo(a, function () {
                            i.faceUrl = e.data.url, n(m.p.setItem(i)), h.a.notice("修改成功")
                        }, function (e) {
                            10007 === e.ErrorCode ? h.a.notice("你没有管理权限") : h.a.notice("上传头像失败")
                        }), O()
                    } else e.message ? h.a.notice(e.message) : h.a.notice("上传头像失败")
                }, function () {
                    h.a.notice("上传头像失败")
                })
            }
        }, {
            key: "render", value: function () {
                return d.a.createElement(u.a, {className: "create-grouph-dialog"}, d.a.createElement("h2", null, "修改群头像", d.a.createElement("span", {
                    className: "create-grouph-dialog-close",
                    onClick: O
                })), d.a.createElement("div", {className: "status-1"}, d.a.createElement("div", {className: "status-1-img-wrap"}, this.loadingCropper()), d.a.createElement("div", {className: "status-1-footer"}, d.a.createElement("span", {
                    className: "status-1-channel",
                    onClick: O
                }, "取消"), d.a.createElement("span", {
                    className: "status-1-save",
                    onClick: this.savelAvatarUpStatus
                }, "保存"))))
            }
        }]), n
    }();
    _.defaultProps = {e: void 0}, _.propTypes = {e: o.PropTypes.object};
    var N = {
        show: function (e, t, n, r) {
            T = document.createElement("div"), document.body.appendChild(T), g.a.render(d.a.createElement(_, {
                e: e,
                groupStore: t,
                groupCardInfo: n,
                dispatch: r
            }), T)
        }, close: O
    }, C = n(16), k = (n(487), n(488), n(27)), M = (n(489), n(41)), L = n(19), A = n(196), P = n(23), j = n(8);
    n(491);

    function R(e) {
        return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function x(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function G(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function F(e, t) {
        return (F = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function U(e) {
        return e && e.shutUpUntil && j.a.processTime(e.shutUpUntil).getTime() > (new Date).getTime()
    }

    var H = [{id: "10m", content: "10分钟", time: 600}, {id: "1h", content: "1小时", time: 3600}, {
        id: "12h",
        content: "12小时",
        time: 43200
    }, {id: "1d", content: "一天", time: 86400}], W = null;

    function B() {
        W && (g.a.unmountComponentAtNode(W) && W.parentNode && (W.parentNode.removeChild(W), W = null))
    }

    var V = function (e) {
        function s(e) {
            var t;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, s);
            var n = (t = function (e, t) {
                    return !t || "object" !== R(t) && "function" != typeof t ? G(e) : t
                }(this, D(s).call(this, e))).props, r = n.groupId, o = n.memberId, i = null, a = null,
                c = m.g.getState().groupStore.groupStore;
            return c && c[r] && c[r].members && c[r].members[o] && (a = U(i = c[r].members[o]) ? "-" : 600), t.state = {
                loading: !1,
                member: i,
                timeRadio: a
            }, ["renderContent", "renderRadio", "changeTimeRadio", "handleOk"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, G(t)), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && F(e, t)
        }(s, r["PureComponent"]), function (e, t, n) {
            t && x(e.prototype, t), n && x(e, n)
        }(s, [{
            key: "changeTimeRadio", value: function (e) {
                this.setState(Object.assign({}, this.state, {timeRadio: e}))
            }
        }, {
            key: "handleOk", value: function () {
                var e = this.state.timeRadio, t = this.props, n = t.groupId, r = t.memberId;
                if (e) {
                    var o = 0;
                    o = "-" === e ? 0 : e, l.a.forbidSendMsgAndRefreshStore(n, r, o).then(function () {
                        0 === Number(o) ? h.a.notice("解除禁言成功") : h.a.notice("设置禁言成功"), B()
                    }).catch(function () {
                        B()
                    })
                } else h.a.notice("请选择禁言时长")
            }
        }, {
            key: "renderRadio", value: function () {
                var t = this, e = !1;
                U(this.state.member) && (e = !0);
                var n = H;
                return e && (n = [{id: "cancel", content: "取消禁言", time: "-"}].concat(H)), n.map(function (e) {
                    return d.a.createElement(A.a, {
                        key: e.time,
                        className: "group-dialog-gag-radio",
                        checked: t.state.timeRadio === e.time,
                        onClick: function () {
                            t.changeTimeRadio(e.time)
                        }
                    }, e.content)
                })
            }
        }, {
            key: "renderContent", value: function () {
                var e = this.state, t = e.loading, n = e.member, r = "选择禁言时长";
                return U(n) && (r = "禁言中，约".concat(j.a.gagTimeFormatter(n.shutUpUntil), "后解禁")), d.a.createElement(C.a, {spinning: t}, d.a.createElement("div", {className: "group-dialog-gag-title"}, d.a.createElement("span", null, r)), d.a.createElement("div", {className: "group-dialog-gag-body"}, this.renderRadio()), d.a.createElement("div", {className: "group-dialog-gag-footer"}, d.a.createElement(P.a, {
                    key: "cancel",
                    className: "group-dialog-gag-btn",
                    type: "ghost",
                    onClick: B
                }, "取消"), d.a.createElement(P.a, {
                    key: "confirm",
                    className: "group-dialog-gag-btn",
                    onClick: this.handleOk
                }, "确定")))
            }
        }, {
            key: "render", value: function () {
                var e = !1;
                return U(this.state.member) && (e = !0), d.a.createElement(u.a, {
                    onCancel: B,
                    maskClosable: !1,
                    className: "group-dialog-gag ".concat(e ? "gaged" : "")
                }, this.renderContent(), d.a.createElement("i", {onClick: B, className: "config-dialog-close"}))
            }
        }]), s
    }();
    V.defaultProps = {groupId: "", memberId: ""}, V.propTypes = {
        groupId: o.PropTypes.string,
        memberId: o.PropTypes.string
    };
    var q = {
        show: function (e, t) {
            W = document.createElement("div"), document.body.appendChild(W), g.a.render(d.a.createElement(V, {
                groupId: e,
                memberId: t
            }), W)
        }, close: B
    }, z = n(197);
    n(493);

    function Y(e) {
        return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function J(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function K(e) {
        return (K = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Q(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function $(e, t) {
        return ($ = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var X = /\s/g, Z = {Owner: "群主", Admin: "管理员", Member: ""}, ee = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), t = function (e, t) {
                return !t || "object" !== Y(t) && "function" != typeof t ? Q(e) : t
            }(this, K(n).call(this, e)), ["renderOperate", "renderNameCard", "setAdmin", "unsetAdmin", "removeMember", "triggerChangeNameCard", "nameCardInputKeyDown", "changeNameCard", "gag", "destroyGroup", "quitGroup"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, Q(t)), t.state = {editNameCard: !1}, t.nameCardInput = d.a.createRef(), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && $(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && J(e.prototype, t), n && J(e, n)
        }(n, [{
            key: "componentDidUpdate", value: function (e, t) {
                var n = this.props.member;
                if (this.state.editNameCard && !t.editNameCard) {
                    var r = this.nameCardInput.current;
                    r && (r.focus(), r.value = n.nameCard || "", r.focus())
                }
            }
        }, {
            key: "setAdmin", value: function () {
                var e = this.props, t = e.member, n = e.groupInfo;
                l.a.setGroupMemberAdmin(n.groupId, t.uid)
            }
        }, {
            key: "unsetAdmin", value: function () {
                var e = this.props, t = e.member, n = e.groupInfo;
                l.a.unsetGroupMemberAdmin(n.groupId, t.uid)
            }
        }, {
            key: "removeMember", value: function () {
                var e = this.props, t = e.member, n = e.groupInfo;
                l.a.groupRemoveMember(n.groupId, t.uid)
            }
        }, {
            key: "gag", value: function () {
                var e = this.props, t = e.member, n = e.groupInfo;
                q.show(n.groupId, t.uid)
            }
        }, {
            key: "destroyGroup", value: function () {
                var e = this.props.groupInfo;
                l.a.destroyGroup(e.groupId)
            }
        }, {
            key: "quitGroup", value: function () {
                var e = this.props.groupInfo;
                l.a.quitGroup(e.groupId)
            }
        }, {
            key: "changeNameCard", value: function (e) {
                var t = this, n = this.props, r = n.member, o = n.groupInfo, i = n.changeNameCardEditState,
                    a = e.target.value;
                a = a.replace(X, ""), 30 < webim.Tool.getStrBytes(a) ? h.a.notice("字符已超出限制") : l.a.setGroupMemberNameCardAndRefreshStore(o.groupId, r.uid, a).then(function () {
                    i(!1), t.triggerChangeNameCard()
                }).catch(function (e) {
                    e && 10007 === Number(e.ErrorCode) && (i(!1), t.triggerChangeNameCard())
                })
            }
        }, {
            key: "nameCardInputKeyDown", value: function (e) {
                13 === e.keyCode && this.changeNameCard(e)
            }
        }, {
            key: "triggerChangeNameCard", value: function () {
                var e = this.props, t = e.isNameCardEditing, n = e.changeNameCardEditState;
                if (!t) {
                    var r = !this.state.editNameCard;
                    n(r), this.setState(Object.assign({}, this.state, {editNameCard: r}))
                }
            }
        }, {
            key: "renderOperate", value: function () {
                var e = this.props, t = e.member, n = e.groupInfo, r = n.mySelf, o = l.a.getCurrentUserInfo();
                r = Object.assign(r, o);
                var i = n.members[r.uid];
                r.role = i.role;
                var a = [], c = [];
                return "Member" === r.role ? t.uid === r.uid && a.push(d.a.createElement("div", {
                    key: "gm-ml-item-operate",
                    className: "gm-ml-item-operate"
                }, c)) : ("Owner" === r.role ? t.uid !== r.uid && (t && t.shutUpUntil && j.a.processTime(t.shutUpUntil).getTime() > (new Date).getTime() ? c.push(d.a.createElement("a", {
                    key: "gm-op-1",
                    onClick: this.gag,
                    className: "gm-ml-item-operate-item"
                }, "解禁")) : c.push(d.a.createElement("a", {
                    key: "gm-op-1",
                    onClick: this.gag,
                    className: "gm-ml-item-operate-item"
                }, "禁言")), "Member" === t.role ? c.push(d.a.createElement("a", {
                    key: "gm-op-2",
                    className: "gm-ml-item-operate-item",
                    onClick: this.setAdmin
                }, "设置管理员")) : c.push(d.a.createElement("a", {
                    key: "gm-op-2",
                    className: "gm-ml-item-operate-item",
                    onClick: this.unsetAdmin
                }, "撤销管理员")), c.push(d.a.createElement("a", {
                    key: "gm-op3",
                    onClick: this.removeMember,
                    className: "gm-ml-item-operate-item"
                }, "移出群组"))) : "Member" === t.role && (t && t.shutUpUntil && j.a.processTime(t.shutUpUntil).getTime() > (new Date).getTime() ? c.push(d.a.createElement("a", {
                    key: "gm-op-1",
                    onClick: this.gag,
                    className: "gm-ml-item-operate-item"
                }, "解禁")) : c.push(d.a.createElement("a", {
                    key: "gm-op-1",
                    onClick: this.gag,
                    className: "gm-ml-item-operate-item"
                }, "禁言")), c.push(d.a.createElement("a", {
                    key: "gm-op-3",
                    onClick: this.removeMember,
                    className: "gm-ml-item-operate-item"
                }, "移出群组"))), a.push(d.a.createElement("div", {
                    key: "gm-ml-item-operate",
                    className: "gm-ml-item-operate"
                }, c))), c.length ? d.a.createElement("li", {className: "gm-ml-item-op"}, d.a.createElement("div", {className: "gm-member-list-item-operate"}, a)) : null
            }
        }, {
            key: "renderNameCard", value: function () {
                var e = this, t = this.props, n = t.member, r = t.groupInfo.mySelf, o = l.a.getCurrentUserInfo();
                r = Object.assign(r, o);
                var i = this.state.editNameCard, a = !1;
                return n.uid === o.uid ? a = !0 : "Owner" === r.role ? a = !0 : "Admin" === r.role && "Member" === n.role && (a = !0), i ? d.a.createElement("li", {className: "gm-member-list-item-namecard"}, d.a.createElement("input", {
                    ref: this.nameCardInput,
                    type: "text",
                    className: "gm-member-list-item-namecard-input",
                    placeholder: "请输入群名片",
                    onBlur: this.changeNameCard,
                    onKeyDown: this.nameCardInputKeyDown
                })) : d.a.createElement("li", {className: "gm-member-list-item-namecard"}, d.a.createElement("span", {
                    style: {color: n.uid !== o.uid || n.nameCard ? "#000" : "#b2bcc0"},
                    className: "gm-member-list-item-namecard-s"
                }, n.uid !== o.uid || n.nameCard ? n.nameCard : "我的群名片"), a ? d.a.createElement("i", {
                    className: "gm-member-list-item-namecard-i",
                    onClick: function () {
                        return e.triggerChangeNameCard()
                    }
                }) : null)
            }
        }, {
            key: "render", value: function () {
                var e = this.props.member;
                return d.a.createElement("ul", {className: "gm-member-list-item"}, d.a.createElement("li", {className: "gm-member-list-item-nickname"}, d.a.createElement(L.b, {
                    className: "gm-member-list-item-avatar",
                    wrapperClassName: "gm-member-list-item-avatar-wrapper",
                    userItem: e
                }), d.a.createElement("span", {className: "gm-member-list-item-nickname-s"}, e.fromAccountNick || "群成员")), this.renderNameCard(), d.a.createElement("div", {className: "memeberList-fansmedalItem-wrap"}, d.a.createElement(z.a, {uid: e.uid})), d.a.createElement("li", {className: "gm-ml-item-role"}, Z[e.role]), this.renderOperate())
            }
        }]), n
    }();

    function te(e) {
        return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ne() {
        return (ne = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function re(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function oe(e) {
        return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ie(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ae(e, t) {
        return (ae = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    ee.defaultProps = {
        member: void 0, groupInfo: void 0, changeNameCardEditState: function () {
        }, isNameCardEditing: void 0
    }, ee.propTypes = {
        member: o.PropTypes.object,
        groupInfo: o.PropTypes.object,
        changeNameCardEditState: o.PropTypes.func,
        isNameCardEditing: o.PropTypes.bool
    };
    var ce = 20, se = 80, ue = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== te(t) && "function" != typeof t ? ie(e) : t
            }(this, oe(n).call(this, e))).needUpdatePage = !1, t.timeoutKey = null, ["renderPage", "onScrollUpdate", "handleWheelEvent", "scrollToNewest", "showAddMember", "changeNameCardEditState"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, ie(t)), t.state = {
                currentPage: 1,
                loading: !1,
                showUids: [],
                error: !1,
                isNameCardEditing: !1
            }, t.memberList = d.a.createRef(), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ae(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && re(e.prototype, t), n && re(e, n)
        }(n, [{
            key: "componentDidMount", value: function () {
                this.renderPage()
            }
        }, {
            key: "changeNameCardEditState", value: function (e) {
                this.setState(Object.assign({}, this.state, {isNameCardEditing: e}))
            }
        }, {
            key: "showAddMember", value: function () {
                (0, this.props.dispatch)(M.a.showAddMember())
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                this.props.groupInfo.memberIdList !== e.groupInfo.memberIdList && (this.needUpdatePage = !0)
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.needUpdatePage && this.renderPage()
            }
        }, {
            key: "renderPage", value: function (e) {
                var t = this, n = e, r = this.props, o = r.groupInfo, i = r.groupId, a = r.dispatch,
                    c = this.state.currentPage, s = this.state.loading;
                if (c = n = n || c, !s) {
                    this.setState(Object.assign({}, this.state, {currentPage: c, loading: !0}));
                    var u = o.memberIdList, l = Math.ceil(u.length / ce);
                    l < c && (c = l);
                    var f = ce * (c - 1), d = ce + f, p = u.slice(f, d);
                    a(m.p.getMemberInfo(i, p)).then(function () {
                        var e = u.slice(0, d);
                        t.setState(Object.assign({}, t.state, {showUids: e, currentPage: c, error: !1, loading: !1}))
                    }).catch(function (e) {
                        throw t.setState(Object.assign({}, t.state, {
                            currentPage: c,
                            loading: !1,
                            error: !0
                        })), h.a.notice("加载群成员列表失败"), e
                    }), this.needUpdatePage = !1
                }
            }
        }, {
            key: "handleWheelEvent", value: function () {
                var e = this.memberList.current;
                if (e) {
                    var t = e.getValues(), n = t.scrollHeight, r = t.clientHeight, o = t.scrollTop,
                        i = this.props.groupInfo, a = this.state.currentPage, c = this.state, s = c.loading,
                        u = c.error;
                    if (!s && !u && n <= r + o + se) {
                        var l = i.memberIdList;
                        if (a === Math.ceil(l.length / ce)) return;
                        this.renderPage(++a)
                    }
                }
            }
        }, {
            key: "onScrollUpdate", value: function (e) {
                var t = {type: e.type, wheelDelta: e.wheelDelta, detail: e.detail};
                this.timeoutKey && clearTimeout(this.timeoutKey);
                var n = this;
                this.timeoutKey = setTimeout(function () {
                    n.handleWheelEvent(t)
                }, 100)
            }
        }, {
            key: "scrollToNewest", value: function () {
                this.memberList.current.scrollToTop()
            }
        }, {
            key: "renderMemberList", value: function () {
                var n = this, e = this.props.groupInfo, t = this.state, r = t.currentPage, o = t.loading,
                    i = t.showUids, a = t.error;
                if (1 === Number(r) && o) return d.a.createElement(C.a, {spinning: !0, className: "gm-list-loading"});
                if (1 === Number(r) && a) return d.a.createElement("div", {className: "gm-list-error-tip"}, d.a.createElement("span", null, "加载失败，", d.a.createElement("a", {
                    onClick: function () {
                        n.renderPage()
                    }
                }, "点击重试")));
                if (e && e.members && e.memberIdList) {
                    var c = e.members, s = i.map(function (e) {
                        var t = c[e];
                        return t ? d.a.createElement(ee, ne({
                            changeNameCardEditState: n.changeNameCardEditState,
                            isNameCardEditing: n.state.isNameCardEditing,
                            key: t.uid,
                            member: t
                        }, n.props)) : null
                    });
                    return o ? s.push(d.a.createElement(C.a, {
                        key: "gmListItemLoading",
                        spinning: !0,
                        className: "gm-list-item-loading"
                    })) : a && s.push(d.a.createElement("div", {
                        key: "gmListItemError",
                        className: "gm-list-item-error-tip"
                    }, d.a.createElement("span", null, "加载失败，", d.a.createElement("a", {
                        onClick: function () {
                            n.renderPage()
                        }
                    }, "点击重试")))), s
                }
                return d.a.createElement(C.a, {spinning: !0, className: "gm-list-loading"})
            }
        }, {
            key: "render", value: function () {
                return d.a.createElement("div", {className: "gm-member-list"}, d.a.createElement("div", {className: "gm-member-list-header"}, d.a.createElement("span", {className: "gm-member-list-header-title gm-member-list-header-title1"}, "昵称"), d.a.createElement("span", {className: "gm-member-list-header-title gm-member-list-header-title2"}, "群名片"), d.a.createElement("span", {className: "gm-member-list-header-title gm-member-list-header-title3"}, "粉丝勋章")), d.a.createElement(k.a, {
                    className: "gm-member-list-table",
                    ref: this.memberList,
                    onUpdate: this.onScrollUpdate,
                    style: {height: 472}
                }, this.renderMemberList()))
            }
        }]), n
    }();

    function le(e) {
        return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function de(e, t) {
        return !t || "object" !== le(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function pe(e) {
        return (pe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function me(e, t) {
        return (me = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    ue.defaultProps = {
        groupInfo: void 0, dispatch: function () {
        }, groupId: void 0
    }, ue.propTypes = {groupInfo: o.PropTypes.object, dispatch: o.PropTypes.func, groupId: o.PropTypes.node};
    var he = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), de(this, pe(t).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && me(e, t)
        }(t, r["PureComponent"]), function (e, t, n) {
            t && fe(e.prototype, t), n && fe(e, n)
        }(t, [{
            key: "render", value: function () {
                var e, t = this.props.groupInfo, n = "群组成员";
                return t && 0 < (e = t.members["@TIM#SYSTEM"] ? --Object.keys(t.members).length : Object.keys(t.members).length) && (n += "(".concat(e, ")")), t.members["@TIM#SYSTEM"] && delete t.members["@TIM#SYSTEM"], t.memberIdList["@TIM#SYSTEM"] && delete t.memberIdList["@TIM#SYSTEM"], d.a.createElement("div", {className: "group-member-manage-body"}, d.a.createElement("div", {className: "group-member-manage-header member-manage"}, d.a.createElement("span", null, n)), d.a.createElement("div", {className: "group-member-manage-content"}, d.a.createElement(ue, this.props)))
            }
        }]), t
    }();
    he.defaultProps = {groupInfo: void 0}, he.propTypes = {groupInfo: o.PropTypes.object};
    n(494), n(495);

    function ge(e) {
        return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function be(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ve(e) {
        return (ve = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ye(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Se(e, t) {
        return (Se = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var we = 20, Ee = 80, Ie = {Owner: "群主", Admin: "管理员", Member: ""}, Te = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== ge(t) && "function" != typeof t ? ye(e) : t
            }(this, ve(n).call(this, e))).needUpdatePage = !1, t.timeoutKey = null, ["renderPage", "onScrollUpdate", "handleWheelEvent", "removeNewMemberAndNotifyLeft"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, ye(t)), t.state = {
                currentPage: 1,
                loading: !1,
                showUids: [],
                error: !1
            }, t.memberList = d.a.createRef(), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Se(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && be(e.prototype, t), n && be(e, n)
        }(n, [{
            key: "componentDidMount", value: function () {
                this.renderPage()
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                this.props.groupInfo.memberIdList !== e.groupInfo.memberIdList && (this.needUpdatePage = !0)
            }
        }, {
            key: "componentDidUpdate", value: function (e) {
                !e.visible && this.props.visible && this.scrollToNewest(), this.needUpdatePage && this.renderPage()
            }
        }, {
            key: "renderPage", value: function (e) {
                var t = this, n = e, r = this.props, o = r.groupInfo, i = r.groupId, a = r.dispatch,
                    c = this.state.currentPage, s = this.state.loading;
                if (c = n = n || c, !s) {
                    this.setState(Object.assign({}, this.state, {currentPage: c, loading: !0}));
                    var u = o.memberIdList, l = Math.ceil(u.length / we);
                    l < c && (c = l);
                    var f = we * (c - 1), d = we + f, p = u.slice(f, d);
                    a(m.p.getMemberInfo(i, p)).then(function () {
                        var e = u.slice(0, d);
                        t.setState(Object.assign({}, t.state, {showUids: e, currentPage: c, error: !1, loading: !1}))
                    }).catch(function () {
                        t.setState(Object.assign({}, t.state, {
                            currentPage: c,
                            loading: !1,
                            error: !0
                        })), h.a.notice("加载群成员列表失败")
                    }), this.needUpdatePage = !1
                }
            }
        }, {
            key: "handleWheelEvent", value: function () {
                var e = this.memberList.current;
                if (e) {
                    var t = e.getValues(), n = t.scrollHeight, r = t.clientHeight, o = t.scrollTop,
                        i = this.props.groupInfo, a = this.state.currentPage, c = this.state, s = c.error;
                    if (!c.loading && !s && n <= r + o + Ee) {
                        var u = i.memberIdList;
                        if (a === Math.ceil(u.length / we)) return;
                        this.renderPage(++a)
                    }
                }
            }
        }, {
            key: "onScrollUpdate", value: function (e) {
                var t = {type: e.type, wheelDelta: e.wheelDelta, detail: e.detail};
                this.timeoutKey && clearTimeout(this.timeoutKey);
                var n = this;
                this.timeoutKey = setTimeout(function () {
                    n.handleWheelEvent(t)
                }, 100)
            }
        }, {
            key: "renderMemberList", value: function () {
                var e = this, t = this.props.groupInfo, n = this.state, r = n.currentPage, o = n.loading,
                    i = n.showUids, a = n.error;
                if (1 === Number(r) && o) return d.a.createElement(C.a, {spinning: !0, className: "gm-list-loading"});
                if (1 === Number(r) && a) return d.a.createElement("div", {className: "gm-list-error-tip"}, d.a.createElement("span", null, "加载失败，", d.a.createElement("a", {
                    onClick: function () {
                        e.renderPage()
                    }
                }, "点击重试")));
                if (t && t.members && t.memberIdList) {
                    var c = t.members, s = i.map(function (e) {
                        var t = c[e], n = t.nameCard || t.fromAccountNick;
                        return t ? d.a.createElement("div", {
                            key: t.uid,
                            className: "gm-add-member-right-list-item"
                        }, d.a.createElement(L.b, {
                            userItem: t,
                            className: "gm-add-member-avatar",
                            wrapperClassName: "gm-add-member-avatar-wrapper",
                            notShowAnchorTip: !0
                        }), d.a.createElement("span", {className: "gm-add-member-name"}, n || "群成员"), d.a.createElement("span", {className: "gm-add-member-role"}, Ie[t.role])) : null
                    });
                    return o ? s.push(d.a.createElement(C.a, {
                        key: "gmListItemLoading",
                        spinning: !0,
                        className: "gm-list-item-loading"
                    })) : a && s.push(d.a.createElement("div", {
                        key: "gmListItemError",
                        className: "gm-list-item-error-tip"
                    }, d.a.createElement("span", null, "加载失败，", d.a.createElement("a", {
                        onClick: function () {
                            e.renderPage()
                        }
                    }, "点击重试")))), s
                }
                return d.a.createElement(C.a, {spinning: !0, className: "gm-list-loading"})
            }
        }, {
            key: "removeNewMemberAndNotifyLeft", value: function (e) {
                var t = this.props.removeNewMemberAndNotifyLeft;
                t(e)
            }
        }, {
            key: "renderNewMemberList", value: function () {
                var n = this, e = this.props.newMemberList;
                if (e && e.length) return e = e.map(function (e) {
                    var t = e.remark_name || e.nickname || e.nickName || e.fromAccountNick || "";
                    return d.a.createElement("div", {
                        key: e.uid,
                        className: "gm-add-member-right-list-new-item",
                        onClick: function () {
                            n.removeNewMemberAndNotifyLeft(e.uid)
                        }
                    }, d.a.createElement(L.b, {
                        userItem: e,
                        className: "gm-add-member-avatar",
                        wrapperClassName: "gm-add-member-avatar-wrapper",
                        notShowAnchorTip: !0
                    }), d.a.createElement("span", {
                        className: "gm-add-member-name",
                        title: t
                    }, t), d.a.createElement("span", {className: "gm-add-member-subtract"}))
                }), d.a.createElement("div", {className: "gm-add-member-new-member"}, d.a.createElement("div", {className: "gm-add-member-right-title"}, "新添加成员(".concat(e.length, ")")), e)
            }
        }, {
            key: "render", value: function () {
                var e = this.props.groupInfo;
                return d.a.createElement(k.a, {
                    className: "gm-add-member-right",
                    ref: this.memberList,
                    onUpdate: this.onScrollUpdate,
                    style: {width: "50%", height: 465}
                }, this.renderNewMemberList(), d.a.createElement("div", {className: "gm-add-member-members"}, d.a.createElement("div", {className: "gm-add-member-right-title"}, "已有成员".concat(Object.keys(e.members).length, "/").concat(e.maxMemberNum || 1e3)), this.renderMemberList()))
            }
        }]), n
    }();
    Te.defaultProps = {
        groupInfo: void 0, removeNewMemberAndNotifyLeft: function () {
        }, dispatch: function () {
        }, groupId: void 0, newMemberList: void 0, visible: void 0
    }, Te.propTypes = {
        groupInfo: o.PropTypes.object,
        removeNewMemberAndNotifyLeft: o.PropTypes.func,
        dispatch: o.PropTypes.func,
        groupId: o.PropTypes.node,
        newMemberList: o.PropTypes.array,
        visible: o.PropTypes.bool
    };
    var Oe = n(110), _e = n(57);
    n(497);

    function Ne(e) {
        return (Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ce(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function ke(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Me(e) {
        return (Me = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Le(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Ae(e, t) {
        return (Ae = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Pe = /\s/g, je = function (e) {
        function t(e) {
            var a;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (a = function (e, t) {
                return !t || "object" !== Ne(t) && "function" != typeof t ? Le(e) : t
            }(this, Me(t).call(this, e))).isCoreTeam = function () {
                var e = a.props.groupInfo;
                return !("isCarTeamCore" !== Object(p.d)(e.groupId))
            }, a.isMaxNum = function (e) {
                var t = a.props, n = t.groupInfo, r = t.newMemberList, o = t.friendList,
                    i = Object.keys(n.members).length;
                return 15 <= (e ? o.length : r.length + i) && (h.a.destroy(), h.a.notice("车队核心群最多只能添加15人"), !0)
            }, a.state = {
                active: !1,
                searchValue: "",
                roomAdminList: null,
                roomAdminListLoading: !0,
                checkedMembers: {},
                roomAdminExpand: !1,
                friendListExpand: !0
            }, ["activeSearchInput", "inactiveSearchInput", "searchInputChange", "searchKeyDown", "search", "toggleExpandRoomAdminList", "toggleExpandFriendList", "toogleMemberCheck", "toogleFriendListCheckAll", "toogleRoomAdminListCheckAll", "addMember", "removeMember", "removeMemberByParent", "renderContent", "renderSearchResult"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, Le(a)), a.memberList = d.a.createRef(), a
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ae(e, t)
        }(t, r["PureComponent"]), function (e, t, n) {
            t && ke(e.prototype, t), n && ke(e, n)
        }(t, [{
            key: "componentDidMount", value: function () {
                var t = this, e = this.props.groupInfo;
                if (this.isCoreTeam()) {
                    var n = this.props, r = n.motorcade, o = n.dispatch;
                    l.a.getGroupInfoReady(r.groupId).then(function (e) {
                        var t = e[0] || e;
                        o(m.p.getMemberInfo(r.groupId, Object.keys(t.members || {})))
                    })
                } else {
                    var i = l.a.getCurrentUserInfo();
                    "Owner" === (e.members && e.members[i.uid] && e.members[i.uid].role) && l.a.getRoomAdminList().then(function (e) {
                        t.setState(Object.assign({}, t.state, {roomAdminListLoading: !1, roomAdminList: e}))
                    })
                }
            }
        }, {
            key: "componentDidUpdate", value: function (e) {
                if (e.friendList !== this.props.friendList) {
                    var t = this.props.friendList || [], n = this.state.roomAdminList || [],
                        r = this.props.newMemberList || [], o = {};
                    t.forEach(function (e) {
                        o[e.uid] = !0
                    }), n.forEach(function (e) {
                        o[e.uid] = !0
                    });
                    var i = [];
                    if (r.forEach(function (e) {
                        o[e.uid] || i.push(e.uid)
                    }), i.length) (0, this.props.removeNewMember)(i)
                }
            }
        }, {
            key: "activeSearchInput", value: function () {
                this.setState(Object.assign({}, this.state, {active: !0}))
            }
        }, {
            key: "inactiveSearchInput", value: function () {
                this.setState(Object.assign({}, this.state, {active: !1}))
            }
        }, {
            key: "searchInputChange", value: function (e) {
                var t = e;
                t = t.replace(Pe, "");
                var n = this.memberList.current;
                this.setState(Object.assign({}, this.state, {searchValue: t}), function () {
                    n && n.scrollTop()
                })
            }
        }, {
            key: "searchKeyDown", value: function (e) {
                13 === e.keyCode && this.search()
            }
        }, {
            key: "search", value: function () {
            }
        }, {
            key: "addMember", value: function (e) {
                (0, this.props.addNewMember)(e)
            }
        }, {
            key: "removeMember", value: function (e) {
                (0, this.props.removeNewMember)(e)
            }
        }, {
            key: "removeMemberByParent", value: function (e) {
                var t = this.state.checkedMembers;
                delete (t = Object.assign({}, t))[e], this.removeMember(e), this.setState(Object.assign({}, this.state, {checkedMembers: t}))
            }
        }, {
            key: "toggleExpandRoomAdminList", value: function () {
                var e = this.memberList.current;
                this.setState(Object.assign({}, this.state, {roomAdminExpand: !this.state.roomAdminExpand})), e && e.update && e.update()
            }
        }, {
            key: "toogleMemberCheck", value: function (e) {
                var t = this.state.checkedMembers;
                if ((t = Object.assign({}, t))[e.uid]) delete t[e.uid], this.removeMember(e.uid); else {
                    if (this.isCoreTeam() && this.isMaxNum()) return;
                    t[e.uid] = e, this.addMember(e)
                }
                this.setState(Object.assign({}, this.state, {checkedMembers: t}))
            }
        }, {
            key: "toogleRoomAdminListCheckAll", value: function (e) {
                var t = this.state.checkedMembers, n = this.state.roomAdminList, r = this.props.groupInfo.members;
                if (t = Object.assign({}, t), e) {
                    var o = [];
                    n.forEach(function (e) {
                        r[e.uid] || (o.push(e.uid), delete t[e.uid])
                    }), o.length && this.removeMember(o)
                } else {
                    var i = [];
                    n.forEach(function (e) {
                        r[e.uid] || (t[e.uid] = e, i.push(e))
                    }), i.length && this.addMember(i)
                }
                this.setState(Object.assign({}, this.state, {checkedMembers: t}))
            }
        }, {
            key: "toogleFriendListCheckAll", value: function (e) {
                if (!this.isCoreTeam() || !this.isMaxNum(1)) {
                    var t = this.state.checkedMembers;
                    t = Object.assign({}, t);
                    var n = this.props, r = n.friendList, o = n.groupInfo.members;
                    if (e) {
                        var i = [];
                        r.forEach(function (e) {
                            o[e.uid] || (i.push(e.uid), delete t[e.uid])
                        }), i.length && this.removeMember(i)
                    } else {
                        var a = [];
                        r.forEach(function (e) {
                            o[e.uid] || (t[e.uid] = e, a.push(e))
                        }), a.length && this.addMember(a)
                    }
                    this.setState(Object.assign({}, this.state, {checkedMembers: t}))
                }
            }
        }, {
            key: "toggleExpandFriendList", value: function () {
                var e = this.memberList.current;
                this.setState(Object.assign({}, this.state, {friendListExpand: !this.state.friendListExpand})), e && e.update && e.update()
            }
        }, {
            key: "renderRoomAdminList", value: function () {
                var o = this, e = this.props.groupInfo, t = this.state, i = t.checkedMembers, n = t.roomAdminExpand,
                    r = t.roomAdminList, a = e.members || {}, c = l.a.getCurrentUserInfo();
                if ("Owner" !== (a[c.uid] && a[c.uid].role)) return null;
                var s = null;
                if (r && r.length) {
                    n && (s = r.map(function (e) {
                        var t = e.remark_name || e.nickname, n = !!i[e.uid], r = !1;
                        return a[e.uid] && (r = !0), d.a.createElement("div", {
                            key: e.uid,
                            className: "gm-add-member-list-item ".concat(r ? "disable" : "")
                        }, d.a.createElement(_e.a, {
                            className: "gm-add-member-item-check",
                            checked: n,
                            disable: r,
                            onClick: function () {
                                r || o.toogleMemberCheck(e)
                            }
                        }, d.a.createElement(L.b, {
                            userItem: e,
                            className: "gm-add-member-avatar",
                            wrapperClassName: "gm-add-member-avatar-wrapper",
                            notShowAnchorTip: !0
                        }), d.a.createElement("span", {
                            className: "gm-add-member-name",
                            title: t
                        }, t), n ? null : d.a.createElement("span", {className: "gm-add-member-add"})))
                    }));
                    var u = !0;
                    return r.some(function (e) {
                        return !i[e.uid] && !a[e.uid]
                    }) && (u = !1), d.a.createElement("div", null, d.a.createElement("div", {className: "gm-add-member-title"}, d.a.createElement("span", {
                        className: "gm-add-member-title-expand ".concat(n ? "expand" : ""),
                        onClick: this.toggleExpandRoomAdminList
                    }), d.a.createElement(_e.a, {
                        className: "gm-add-member-title-check", onClick: function () {
                            o.toogleRoomAdminListCheckAll(u)
                        }, checked: u
                    }), d.a.createElement("span", {className: "gm-add-member-title-type"}, "房管"), d.a.createElement("span", {className: "gm-add-member-title-count"}, r.length)), d.a.createElement("div", {className: "gm-add-member-list"}, n ? s : null))
                }
                return d.a.createElement("div", null, d.a.createElement("div", {className: "gm-add-member-title"}, d.a.createElement("span", {
                    className: "gm-add-member-title-expand ".concat(n ? "expand" : ""),
                    onClick: this.toggleExpandRoomAdminList
                }), d.a.createElement(_e.a, {className: "gm-add-member-title-check"}), d.a.createElement("span", {className: "gm-add-member-title-type"}, "房管"), this.state.roomAdminListLoading ? null : d.a.createElement("span", {className: "gm-add-member-title-count"}, "0")))
            }
        }, {
            key: "renderFriendList", value: function () {
                var o = this, e = this.props, t = e.friendList, n = e.groupInfo, r = this.state, i = r.checkedMembers,
                    a = r.friendListExpand, c = n.members, s = null;
                if (t && t.length) {
                    a && (s = t.map(function (e) {
                        var t = e.remark_name || e.nickname || e.nickName || e.fromAccountNick || "群成员", n = !!i[e.uid],
                            r = !1;
                        return c[e.uid] && (r = !0), d.a.createElement("div", {
                            key: e.uid,
                            className: "gm-add-member-list-item"
                        }, d.a.createElement(_e.a, {
                            className: "gm-add-member-item-check",
                            checked: n,
                            disable: r,
                            onClick: function () {
                                r || o.toogleMemberCheck(e)
                            }
                        }, d.a.createElement(L.b, {
                            userItem: e,
                            className: "gm-add-member-avatar",
                            wrapperClassName: "gm-add-member-avatar-wrapper",
                            notShowAnchorTip: !0
                        }), d.a.createElement("span", {
                            className: "gm-add-member-name",
                            title: t
                        }, t), n ? null : d.a.createElement("span", {className: "gm-add-member-add"})))
                    }));
                    var u = !0;
                    return t.some(function (e) {
                        return !i[e.uid] && !c[e.uid]
                    }) && (u = !1), d.a.createElement("div", null, d.a.createElement("div", {className: "gm-add-member-title"}, d.a.createElement("span", {
                        className: "gm-add-member-title-expand ".concat(a ? "expand" : ""),
                        onClick: this.toggleExpandFriendList
                    }), d.a.createElement(_e.a, {
                        className: "gm-add-member-title-check",
                        checked: u,
                        onClick: function () {
                            o.toogleFriendListCheckAll(u)
                        }
                    }), d.a.createElement("span", {className: "gm-add-member-title-type"}, this.isCoreTeam() ? "车队成员" : "好友"), d.a.createElement("span", {className: "gm-add-member-title-count"}, t.length)), d.a.createElement("div", {className: "gm-add-member-list"}, a ? s : null))
                }
                return d.a.createElement("div", null, d.a.createElement("div", {className: "gm-add-member-title"}, d.a.createElement("span", {
                    className: "gm-add-member-title-expand  ".concat(a ? "expand" : ""),
                    onClick: this.toggleExpandFriendList
                }), d.a.createElement(_e.a, {className: "gm-add-member-title-check"}), d.a.createElement("span", {className: "gm-add-member-title-type"}, this.isCoreTeam() ? "车队成员" : "好友")))
            }
        }, {
            key: "renderSearchResult", value: function () {
                var i = this, e = this.props.friendList, t = this.props.groupInfo, n = this.state.roomAdminList,
                    r = this.state, a = r.checkedMembers, c = r.searchValue, s = t.members;
                n = n || [];
                var o = [].concat(Ce(e = e || []), Ce(n)), u = {};
                return o = (o = o.map(function (e) {
                    var t = e.remark_name || e.nickname || e.nickName || e.fromAccountNick || "群成员", n = a[e.uid],
                        r = !0;
                    c && t.indexOf(c) < 0 && (r = !1), u[e.uid] && (r = !1);
                    var o = !1;
                    return s[e.uid] && (o = !0), r ? (u[e.uid] = !0, d.a.createElement("div", {
                        key: e.uid,
                        className: "gm-add-member-list-item"
                    }, d.a.createElement(_e.a, {
                        className: "gm-add-member-item-check",
                        checked: n,
                        disable: o,
                        onClick: function () {
                            o || i.toogleMemberCheck(e)
                        }
                    }, d.a.createElement(L.b, {
                        userItem: e,
                        className: "gm-add-member-avatar",
                        wrapperClassName: "gm-add-member-avatar-wrapper",
                        notShowAnchorTip: !0
                    }), d.a.createElement("span", {
                        className: "gm-add-member-name",
                        title: t
                    }, t), n ? null : d.a.createElement("span", {className: "gm-add-member-add"})))) : null
                })).filter(function (e) {
                    return e
                }), d.a.createElement("div", {className: "gm-add-member-list"}, d.a.createElement("div", {className: "gm-add-member-search-title"}, "搜索结果"), o.length ? o : d.a.createElement("div", {className: "gm-add-member-list-no-result"}, d.a.createElement("i", {className: "gm-add-member-list-no-result-img"}), d.a.createElement("div", null, "无结果")))
            }
        }, {
            key: "renderContent", value: function () {
                var e = {height: 407};
                return this.state.searchValue ? d.a.createElement(k.a, {
                    className: "gm-add-member-members",
                    ref: this.memberList,
                    style: e
                }, this.renderSearchResult()) : d.a.createElement(k.a, {
                    className: "gm-add-member-members",
                    ref: this.memberList,
                    style: e
                }, this.isCoreTeam() ? null : this.renderRoomAdminList(), this.renderFriendList())
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.state, n = t.active, r = t.searchValue;
                return d.a.createElement("div", {className: "gm-add-member-left"}, d.a.createElement("div", {className: "gm-add-member-search"}, d.a.createElement("div", {className: "gm-add-member-search-input-wrapper".concat(n ? " active" : "")}, d.a.createElement(Oe.a, {
                    className: "gm-add-member-search-input",
                    placeholder: "搜索",
                    type: "text",
                    value: r,
                    onFocus: this.activeSearchInput,
                    onBlur: this.inactiveSearchInput,
                    onChange: this.searchInputChange,
                    onKeyDown: this.searchKeyDown
                }), d.a.createElement("span", {
                    onClick: function () {
                        e.search()
                    }, className: "gm-add-member-search-btn"
                }))), this.renderContent())
            }
        }]), t
    }();

    function Re(e) {
        return (Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function xe() {
        return (xe = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function De(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Ge(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Fe(e) {
        return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ue(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function He(e, t) {
        return (He = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    je.defaultProps = {
        motorcade: {},
        groupInfo: void 0,
        friendList: void 0,
        newMemberList: void 0,
        removeNewMember: function () {
        },
        addNewMember: function () {
        },
        dispatch: function () {
        }
    }, je.propTypes = {
        motorcade: o.PropTypes.object,
        groupInfo: o.PropTypes.object,
        friendList: o.PropTypes.array,
        newMemberList: o.PropTypes.array,
        removeNewMember: o.PropTypes.func,
        addNewMember: o.PropTypes.func,
        dispatch: o.PropTypes.func
    };
    var We = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== Re(t) && "function" != typeof t ? Ue(e) : t
            }(this, Fe(n).call(this, e))).state = {newMemberList: []}, ["onOk", "onCancel", "addNewMember", "removeNewMember", "removeNewMemberAndNotifyLeft"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, Ue(t)), t.left = d.a.createRef(), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && He(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && Ge(e.prototype, t), n && Ge(e, n)
        }(n, [{
            key: "onCancel", value: function () {
                (0, this.props.dispatch)(M.a.hide())
            }
        }, {
            key: "onOk", value: function () {
                var e = this.props, t = e.groupInfo, n = e.dispatch, r = this.state.newMemberList;
                r && r.length ? (r = r.map(function (e) {
                    return e.uid
                }), l.a.addGroupMember(t.groupId, r).then(function () {
                    h.a.notice("发送邀请成功"), n(M.a.hide())
                }).catch(function (e) {
                    if (e && e.ErrorCode) switch (e.ErrorCode) {
                        case 10007:
                            h.a.notice("你没有管理权限");
                            break;
                        default:
                            h.a.notice("操作失败")
                    } else h.a.notice("操作失败，请重试");
                    throw n(M.a.hide()), e
                })) : n(M.a.hide())
            }
        }, {
            key: "addNewMember", value: function (e) {
                var t = e;
                Array.isArray(t) || (t = [t]);
                var n = [].concat(De(this.state.newMemberList), De(t));
                n = function (e) {
                    for (var t = {}, n = [], r = e.length - 1; 0 <= r; r--) {
                        var o = e[r];
                        t[o.uid] || (t[o.uid] = !0, n.push(o))
                    }
                    return n.reverse()
                }(n), this.setState(Object.assign({}, this.state, {newMemberList: n}))
            }
        }, {
            key: "removeNewMember", value: function (e) {
                var t = e;
                Array.isArray(t) || (t = [t]);
                var r = this.state.newMemberList.slice();
                t.forEach(function (e) {
                    for (var t = -1, n = 0; n < r.length; n++) {
                        r[n].uid === e && (t = n)
                    }
                    0 <= t && r.splice(t, 1)
                }), this.setState(Object.assign({}, this.state, {newMemberList: r}))
            }
        }, {
            key: "removeNewMemberAndNotifyLeft", value: function (e) {
                this.left.current.removeMemberByParent(e)
            }
        }, {
            key: "render", value: function () {
                return d.a.createElement("div", {className: "group-member-manage-body"}, d.a.createElement("div", {className: "group-member-manage-header"}, d.a.createElement("span", null, "添加群成员")), d.a.createElement("div", {className: "group-member-manage-content"}, d.a.createElement(je, xe({
                    ref: this.left,
                    addNewMember: this.addNewMember,
                    removeNewMember: this.removeNewMember,
                    newMemberList: this.state.newMemberList
                }, this.props)), d.a.createElement(Te, xe({
                    addNewMember: this.addNewMember,
                    removeNewMember: this.removeNewMember,
                    newMemberList: this.state.newMemberList,
                    removeNewMemberAndNotifyLeft: this.removeNewMemberAndNotifyLeft
                }, this.props)), d.a.createElement("div", {className: "gm-add-member-footer"}, d.a.createElement(P.a, {
                    key: "cancel",
                    className: "gm-add-member-btn",
                    type: "ghost",
                    onClick: this.onCancel
                }, "取消"), d.a.createElement(P.a, {
                    key: "confirm",
                    className: "gm-add-member-btn",
                    onClick: this.onOk
                }, "确定"))))
            }
        }]), n
    }();

    function Be(e) {
        return (Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function qe(e) {
        return (qe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ze(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Ye(e, t) {
        return (Ye = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    We.defaultProps = {
        groupInfo: void 0, dispatch: function () {
        }
    }, We.propTypes = {groupInfo: o.PropTypes.object, dispatch: o.PropTypes.func};
    var Je = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), t = function (e, t) {
                return !t || "object" !== Be(t) && "function" != typeof t ? ze(e) : t
            }(this, qe(n).call(this, e)), ["onClose"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, ze(t)), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ye(e, t)
        }(n, r["PureComponent"]), function (e, t, n) {
            t && Ve(e.prototype, t), n && Ve(e, n)
        }(n, [{
            key: "componentDidMount", value: function () {
            }
        }, {
            key: "onClose", value: function () {
                (0, this.props.dispatch)(M.a.hide())
            }
        }, {
            key: "renderContent", value: function () {
                var e = this.props, t = e.loading, n = e.addDialogVisible;
                return d.a.createElement(C.a, {spinning: t}, n ? d.a.createElement(We, this.props) : d.a.createElement(he, this.props))
            }
        }, {
            key: "render", value: function () {
                var e = this.props.visible;
                return d.a.createElement(u.a, {
                    visible: e,
                    className: "group-member-manage-dialog",
                    onCancel: this.onClose,
                    maskClosable: !1
                }, e ? this.renderContent() : null, d.a.createElement("i", {
                    onClick: this.onClose,
                    className: "config-dialog-close"
                }))
            }
        }]), n
    }();
    Je.defaultProps = {
        loading: !1, addDialogVisible: !1, visible: !1, dispatch: function () {
        }
    }, Je.propTypes = {
        loading: o.PropTypes.bool,
        addDialogVisible: o.PropTypes.bool,
        visible: o.PropTypes.bool,
        dispatch: o.PropTypes.func
    };
    var Ke = Object(i.connect)(function (e) {
            var t = e.groupStore.groupStore, n = e.groupMemberManageDialog.groupId, r = e.groupMemberManageDialog.loading,
                o = e.groupMemberManageDialog.visible, i = e.groupMemberManageDialog.addDialogVisible, a = null;
            n && t[n] && (a = t[n]);
            var c = null, s = null;
            if (i) {
                var u = e.userStore.userStore, l = e.friendList;
                c = l.friendList.map(function (e) {
                    return u[e]
                }), s = l.groupList.map(function (e) {
                    return t[e]
                }).filter(function (e) {
                    return "isCarTeam" === Object(p.d)(e.groupId)
                })[0], "isCarTeamCore" === Object(p.d)(n) && (c = Object.values(s.members || {}))
            }
            return {motorcade: s, groupInfo: a, groupId: n, loading: r, visible: o, addDialogVisible: i, friendList: c}
        })(Je), Qe = n(51), $e = n(93), Xe = n(37), Ze = (n(498), n(153)), et = n.n(Ze), tt = n(154), nt = n.n(tt),
        rt = n(238), ot = n.n(rt), it = n(239), at = n.n(it);

    function ct(e) {
        return (ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function st(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ut(e) {
        return (ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function lt(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ft(e, t) {
        return (ft = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var dt = null, pt = /\s/g, mt = function (e) {
        function i(e) {
            var f;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), (f = function (e, t) {
                return !t || "object" !== ct(t) && "function" != typeof t ? lt(e) : t
            }(this, ut(i).call(this, e))).isMotorcade = function () {
                var e = f.props.groupId;
                return !("isCarTeam" !== Object(p.d)(e))
            }, f.isCoreTeam = function () {
                var e = f.props.groupId;
                return !("isCarTeamCore" !== Object(p.d)(e))
            }, f.jumpToMotorcade = function () {
                var e = f.props.groupId;
                window.inTeamPage ? Object(Xe.a)("IMNoticeWebEnterMotorcade", {groupId: e}) : window.open("".concat(p.k, "/#/motorcade/").concat(encodeURIComponent(e)), "_blank")
            }, f.updateAddCondition = function () {
                var e = f.props.groupId;
                fetch(l.a.memberConfig, {
                    method: "POST",
                    credentials: "include",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: "groupId=".concat(e)
                }).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    if (200 === Number(e.status_code)) switch (e.data.type) {
                        case 1:
                            f.setState({groupAddCondition: "需要管理员审批"});
                            break;
                        case 2:
                            f.setState({groupAddCondition: "允许任何人加入"});
                            break;
                        case 3:
                            f.setState({groupAddCondition: "禁止加群"});
                            break;
                        case 4:
                            f.setState({groupAddCondition: "仅允许".concat(e.data.level, "级粉丝加入")})
                    }
                })
            }, f.quitGroup = function () {
                var e = f.props, t = e.groupCardInfo;
                "Owner" === e.groupCardInfoMemberItem.role ? l.a.destroyGroup(t.groupId) : l.a.quitGroup(t.groupId)
            }, f.quitMotorcade = function () {
                var e = f.props.groupId;
                l.a.quitMotorcade(e, function () {
                    h.a.notice("退出车队成功")
                })
            }, f.showAddMember = function () {
                var e = f.props, t = e.dispatch, n = e.groupId;
                t(m.o.show(n)), t(m.o.showAddMember())
            }, f.renderMembers = function () {
                var e = f.props, t = e.groupCardInfo, n = e.groupId, r = e.dispatch, o = e.groupCardInfoMemberItem,
                    i = t.members, a = void 0 === i ? {} : i, c = o.role,
                    s = "Member" === c || f.isMotorcade() || f.isCoreTeam() ? 7 : 6, u = Object.keys(a).slice(0, s),
                    l = u.map(function (e) {
                        return a[e]
                    });
                return r(m.p.getMemberInfo(n, u)), d.a.createElement("div", {className: "group-members"}, "Member" === c || f.isMotorcade() ? null : d.a.createElement("span", {
                    onClick: f.showAddMember,
                    className: "group-members-item-hover"
                }, d.a.createElement(Qe.a, {
                    src: ot.a,
                    className: "group-members-item-icon group-members-item-hover"
                })), l.length && l.map(function (e) {
                    return d.a.createElement("span", {key: e.uid}, d.a.createElement(Qe.a, {
                        src: e.icon || nt.a,
                        className: "group-members-item-icon",
                        errorsrc: nt.a
                    }))
                }), f.isCoreTeam() ? null : d.a.createElement("span", {
                    onClick: f.isMotorcade() ? f.jumpToMotorcade : f.showManage,
                    className: "group-members-item-hover"
                }, d.a.createElement(Qe.a, {src: at.a, className: "group-members-item-icon"})))
            }, f.renderMotorcadeLink = function () {
                return "Member" !== f.props.groupCardInfoMemberItem.role ? d.a.createElement("div", {
                    className: "motorcade-link-wrap",
                    onClick: f.jumpToMotorcade
                }, d.a.createElement("span", null, "前往我的车队管理信息"), d.a.createElement("i", null)) : null
            }, f.renderMotorcadeHeader = function () {
                var e = f.props.groupCardInfo, t = f.state.motorcadeSetObj, n = "" === e.faceUrl ? et.a : e.faceUrl;
                return d.a.createElement("div", {className: "head-wrap"}, d.a.createElement("div", {className: "headIco"}, d.a.createElement("img", {
                    src: n,
                    alt: ""
                })), d.a.createElement("h3", {className: "motorcade-wrap"}, d.a.createElement("span", {className: "motorcade-name"}, e.name), d.a.createElement("span", {className: "motorcade-icon"}, t.number ? "".concat(t.flag, "·").concat(t.number) : "")))
            }, f.renderTags = function () {
                var e = f.state.motorcadeSetObj, t = e.tags || [];
                return d.a.createElement("div", {className: "motorcade-settings-wrap"}, d.a.createElement("span", {className: "motorcade-type ".concat(1 === e.type ? "motorcade-type-ry" : 2 === e.type ? "motorcade-type-cf" : "")}), d.a.createElement("span", {className: "motorcade-tag"}, e.location || "斗鱼星球"), t.map(function (e) {
                    return d.a.createElement("span", {key: e.id, className: "motorcade-tag"}, e.name)
                }))
            };
            var t = f.props, n = t.groupCardInfo, r = t.groupCardInfoMemberItem;
            f.state = {
                editHeadIcoStatus: !0,
                editNotificationStatus: !0,
                editNameCardStatus: !0,
                editIntroductionStatus: !0,
                nameCardCurrentValue: r && r.nameCard || "",
                groupNotificationCurrentValue: n && n.notification || "",
                groupNameCurrentValue: n && n.name.replace(/&nbsp;/g, "") || "",
                groupIntroductionCurrentValue: n && n.introduction || "",
                groupAddCondition: "",
                motorcadeSetObj: {}
            }, ["avatarUpFileCheck", "clickHeadIcoEdit", "editGroupName", "groupNameKeyDown", "saveGroupName", "limitGroupName", "editNotification", "saveNotification", "notificationKeyDown", "limitNotification", "editNameCard", "saveNameCard", "nameCardKeyDown", "limitNameCard", "editIntroduction", "saveIntroduction", "IntroductionKeyDown", "limitIntroduction", "groupSet", "goGroupChat", "showManage", "tipOff", "commonEditItem", "errorNotice", "toolCutStr", "wordRestriction"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, lt(f));
            var o = f.setState.bind(lt(f));
            return f.setState = function (e) {
                o(e)
            }, f.groupNameInput = d.a.createRef(), f.notificationInput = d.a.createRef(), f.nameCardInput = d.a.createRef(), f.introductionInput = d.a.createRef(), f.groupCardScrollBar = d.a.createRef(), f
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ft(e, t)
        }(i, r["PureComponent"]), function (e, t, n) {
            t && st(e.prototype, t), n && st(e, n)
        }(i, [{
            key: "componentWillMount", value: function () {
                var e = this.props, t = e.dispatch, n = e.groupId;
                t(m.n.showGroupCard(n))
            }
        }, {
            key: "componentDidMount", value: function () {
                var t = this;
                this.updateAddCondition();
                var e = this.props.groupId;
                l.a.getSetting(e).then(function (e) {
                    200 === e.status_code && t.setState({motorcadeSetObj: e.data || {}})
                })
            }
        }, {
            key: "componentWillReceiveProps", value: function () {
                this.props.loading || this.setState(s()({}, this.state, {
                    editHeadIcoStatus: !0,
                    editNotificationStatus: !0,
                    editIntroductionStatus: !0
                }))
            }
        }, {
            key: "componentDidUpdate", value: function () {
                var e = this.props, t = e.groupCardInfo, n = e.groupCardInfoMemberItem;
                if (!e.loading) {
                    var r = this.groupNameInput.current, o = this.notificationInput.current,
                        i = this.nameCardInput.current, a = this.introductionInput.current;
                    r && (r.focus(), r.value = t.name || "", r.focus()), o && (o.focus(), o.value = t.notification.replace(/<br\/>/g, "\n").replace(/&nbsp;/g, " ") || "", o.focus()), i && (i.focus(), i.value || (i.value = n.nameCard || ""), i.focus()), a && (a.focus(), a.value = t.introduction.replace(/<br\/>/g, "\n").replace(/&nbsp;/g, " ") || "", a.focus()), this.setState(s()({}, this.state, {
                        groupNameCurrentValue: t.name,
                        groupNotificationCurrentValue: t.notification,
                        nameCardCurrentValue: n.nameCard,
                        groupIntroductionCurrentValue: t.introduction
                    }));
                    var c = this.groupCardScrollBar.current;
                    c && c.update && c.update()
                }
            }
        }, {
            key: "componentWillUnmount", value: function () {
                (0, this.props.dispatch)(m.n.close())
            }
        }, {
            key: "wordRestriction", value: function (e, t) {
                var n = e.target.value;
                webim.Tool.getStrBytes(n) > t && (e.target.value = this.toolCutStr(n, t))
            }
        }, {
            key: "toolCutStr", value: function (e, t) {
                for (var n, r = 0, o = 0; r < t;) r += (n = e.charCodeAt(o)) <= 127 ? 1 : n <= 2047 ? 2 : n <= 65535 ? 3 : 4, o++;
                return e.slice(0, --o)
            }
        }, {
            key: "tipOff", value: function () {
                var e = this.props, t = e.groupCardInfo;
                (0, e.dispatch)(m.h.reportGroup(t.groupId))
            }
        }, {
            key: "topBtn", value: function () {
                var e = this.props.groupCardInfoMemberItem;
                return "Admin" !== e.role && "Member" !== e.role ? d.a.createElement("span", {
                    className: "set topbtn",
                    onClick: this.groupSet
                }, d.a.createElement("b", {className: "ico"}), "设置") : d.a.createElement("div", null, d.a.createElement("span", {
                    className: "jb topbtn",
                    onClick: this.tipOff
                }, d.a.createElement("b", {className: "ico"}), "举报"), d.a.createElement("span", {
                    className: "set topbtn",
                    onClick: this.groupSet
                }, d.a.createElement("b", {className: "ico"}), "设置"))
            }
        }, {
            key: "errorNotice", value: function (e, t) {
                if (e && e.ErrorCode) switch (e.ErrorCode) {
                    case 80001:
                        h.a.notice("内容包含敏感词汇 ");
                        break;
                    default:
                        h.a.notice(t)
                }
            }
        }, {
            key: "showManage", value: function () {
                var e = this.props, t = e.groupCardInfo;
                (0, e.dispatch)(m.o.show(t.groupId))
            }
        }, {
            key: "goGroupChat", value: function () {
                var e = this.props, t = e.groupCardInfo, n = e.dispatch;
                n(m.e.changeTab("chatList")), n(m.c.showGroupChatDetail(t.groupId, !0))
            }
        }, {
            key: "editIntroduction", value: function () {
                this.commonEditItem("editIntroductionStatus")
            }
        }, {
            key: "IntroductionKeyDown", value: function (e) {
                13 === e.keyCode && this.saveIntroduction(e)
            }
        }, {
            key: "saveIntroduction", value: function (e) {
                var t = e.target.value, n = this.props, r = n.groupCardInfo, o = n.dispatch, i = n.groupStore, a = this;
                if (i[r.groupId].introduction.replace(/<br\/>/g, "\n").replace(/&nbsp;/g, " ") !== t) {
                    if (120 < webim.Tool.getStrBytes(t)) return void h.a.notice("字符已超出限制");
                    var c = {GroupId: r.groupId, Introduction: t};
                    webim.modifyGroupBaseInfo(c, function () {
                        var e = i[r.groupId];
                        e.introduction = t, o(m.p.setItem(e)), a.setState(s()({}, a.state, {
                            editIntroductionStatus: !0,
                            groupIntroductionCurrentValue: t
                        }))
                    }, function (e) {
                        a.errorNotice(e, "修改群介绍失败")
                    })
                } else a.setState(s()({}, a.state, {editIntroductionStatus: !0}))
            }
        }, {
            key: "groupSet", value: function () {
                var e = this.props, t = e.groupCardInfo, n = e.groupStore, r = e.memberAccount, o = e.dispatch,
                    i = e.groupCardInfoMemberItem;
                c.a.show(t, n, r, o, i, this.updateAddCondition)
            }
        }, {
            key: "limitIntroduction", value: function (e) {
                this.wordRestriction(e, 120)
            }
        }, {
            key: "editNameCard", value: function () {
                this.commonEditItem("editNameCardStatus")
            }
        }, {
            key: "nameCardKeyDown", value: function (e) {
                13 === e.keyCode && this.saveNameCard(e)
            }
        }, {
            key: "limitNameCard", value: function (e) {
                this.wordRestriction(e, 30)
            }
        }, {
            key: "limitNotification", value: function (e) {
                this.wordRestriction(e, 150)
            }
        }, {
            key: "saveNameCard", value: function (e) {
                var t = e.target.value, n = this.props, r = n.groupCardInfo, o = n.groupStore, i = n.memberAccount;
                t = t.replace(pt, "");
                var a = this;
                if (o[r.groupId].members[i].nameCard !== t) {
                    if (30 < webim.Tool.getStrBytes(t)) return void h.a.notice("字符已超出限制");
                    l.a.setGroupMemberNameCardAndRefreshStore(r.groupId, i, t).then(function () {
                        a.setState(s()({}, a.state, {editNameCardStatus: !0}))
                    })
                } else a.setState(s()({}, a.state, {editNameCardStatus: !0}))
            }
        }, {
            key: "editNotification", value: function () {
                this.commonEditItem("editNotificationStatus")
            }
        }, {
            key: "notificationKeyDown", value: function (e) {
                13 === e.keyCode && this.saveNotification(e)
            }
        }, {
            key: "saveNotification", value: function (e) {
                var t = e.target.value, n = this.props, r = n.groupCardInfo, o = n.dispatch, i = n.groupStore, a = this;
                if (i[r.groupId].notification.replace(/&nbsp;/g, " ").replace(/<br\/>/g, "\n") !== t) {
                    if (150 < webim.Tool.getStrBytes(t)) return void h.a.notice("字符已超出限制");
                    var c = {GroupId: r.groupId, Notification: t};
                    webim.modifyGroupBaseInfo(c, function () {
                        var e = i[r.groupId];
                        e.notification = t, o(m.p.setItem(e)), a.setState(s()({}, a.state, {
                            editNotificationStatus: !0,
                            groupNotificationCurrentValue: t
                        }))
                    }, function (e) {
                        a.errorNotice(e, "修改群公告失败")
                    })
                } else a.setState(s()({}, a.state, {editNotificationStatus: !0}))
            }
        }, {
            key: "groupNameKeyDown", value: function (e) {
                13 === e.keyCode && this.saveGroupName(e)
            }
        }, {
            key: "saveGroupName", value: function (e) {
                var t = e.target.value, n = this.props, r = n.groupCardInfo, o = n.dispatch, i = n.groupStore, a = this;
                if (t = t.replace(pt, ""), i[r.groupId].name !== t) {
                    if (30 < webim.Tool.getStrBytes(t)) return void h.a.notice("字符已超出限制");
                    if (0 === t.length) return void h.a.notice("请输入群名称");
                    var c = {GroupId: r.groupId, Name: t};
                    webim.modifyGroupBaseInfo(c, function () {
                        var e = i[r.groupId];
                        e.name = t, o(m.p.setItem(e)), o(m.l.sortGroup()), a.setState(s()({}, a.state, {
                            editHeadIcoStatus: !0,
                            groupNameCurrentValue: t
                        }))
                    }, function (e) {
                        a.errorNotice(e, "修改群名称失败")
                    })
                } else a.setState(s()({}, a.state, {editHeadIcoStatus: !0}))
            }
        }, {
            key: "editGroupName", value: function () {
                this.commonEditItem("editHeadIcoStatus")
            }
        }, {
            key: "limitGroupName", value: function (e) {
                this.wordRestriction(e, 30)
            }
        }, {
            key: "commonEditItem", value: function (e) {
                var t = this.state, n = t.editHeadIcoStatus, r = t.editNotificationStatus, o = t.editNameCardStatus,
                    i = t.editIntroductionStatus;
                if (n && r && o && i) switch (e) {
                    case"editHeadIcoStatus":
                        this.setState(s()({}, this.state, {editHeadIcoStatus: !1}));
                        break;
                    case"editNotificationStatus":
                        this.setState(s()({}, this.state, {editNotificationStatus: !1}));
                        break;
                    case"editNameCardStatus":
                        this.setState(s()({}, this.state, {editNameCardStatus: !1}));
                        break;
                    case"editIntroductionStatus":
                        this.setState(s()({}, this.state, {editIntroductionStatus: !1}))
                }
            }
        }, {
            key: "avatarUpFileCheck", value: function (e) {
                e.preventDefault();
                var t = this.props, n = t.groupStore, r = t.groupCardInfo, o = t.dispatch;
                if (5 < e.target.files[0].size / 1048576) return h.a.notice("图片大小不能超过5M"), void (dt.value = null);
                0 !== e.target.files.length && N.show(e, n, r, o), dt.value = null
            }
        }, {
            key: "clickHeadIcoEdit", value: function () {
                Object(p.b)(9) ? u.b.info({content: "当前浏览器不支持编辑群头像功能，建议您使用现代浏览器", width: 306}) : dt.click()
            }
        }, {
            key: "renderHeadIco", value: function () {
                var e = this.props, t = e.groupCardInfo, n = e.groupCardInfoMemberItem,
                    r = "" === t.faceUrl ? et.a : t.faceUrl;
                return "Member" === n.role ? d.a.createElement("img", {
                    src: r,
                    alt: ""
                }) : d.a.createElement("div", {className: "bjIco-wrap"}, d.a.createElement("img", {
                    src: r,
                    alt: ""
                }), "Member" === n.role ? "" : d.a.createElement("span", {
                    className: "bjIco",
                    onClick: this.clickHeadIcoEdit
                }, "编辑"), d.a.createElement("input", {
                    type: "file",
                    style: {display: "none"},
                    ref: function (e) {
                        dt = e
                    },
                    name: "icon",
                    accept: "image/gif,image/jpeg,image/jpg,image/png",
                    onChange: this.avatarUpFileCheck
                }))
            }
        }, {
            key: "renderGroupName", value: function () {
                var e = this.props, t = e.groupCardInfo, n = e.groupCardInfoMemberItem, r = this.state,
                    o = r.editHeadIcoStatus, i = r.groupNameCurrentValue;
                return "Member" === n.role ? d.a.createElement("span", null, t.name.replace(/&nbsp;/g, "")) : o ? d.a.createElement("div", null, d.a.createElement("span", null, i), d.a.createElement("i", {
                    className: "bj",
                    onClick: this.editGroupName
                })) : d.a.createElement("span", null, d.a.createElement("input", {
                    type: "text",
                    className: "group-card-name-input",
                    placeholder: "请输入群名称",
                    onBlur: this.saveGroupName,
                    onKeyDown: this.groupNameKeyDown,
                    onChange: this.limitGroupName,
                    ref: this.groupNameInput
                }))
            }
        }, {
            key: "renderNotification", value: function () {
                var e = this.props, t = e.groupCardInfo, n = e.groupCardInfoMemberItem, r = this.state,
                    o = r.editNotificationStatus, i = r.groupNotificationCurrentValue;
                return "Member" === n.role ? d.a.createElement("span", {className: "whiteSpace"}, "" === t.notification ? "暂无群公告" : t.notification.replace(/&nbsp;/g, " ").replace(/<br\/>/g, "\n")) : o ? d.a.createElement("span", null, d.a.createElement("span", {className: "whiteSpace"}, "" === i ? "暂无群公告" : i.replace(/&nbsp;/g, " ").replace(/<br\/>/g, "\n")), this.isMotorcade() ? null : d.a.createElement("i", {
                    className: "bj",
                    onClick: this.editNotification
                })) : d.a.createElement("span", null, d.a.createElement("textarea", {
                    autoFocus: !0,
                    type: "text",
                    className: "group-notification-input",
                    placeholder: "请输入群公告",
                    onBlur: this.saveNotification,
                    onKeyDown: this.notificationKeyDown,
                    onChange: this.limitNotification,
                    ref: this.notificationInput
                }))
            }
        }, {
            key: "renderNameCard", value: function () {
                var e = this.state.nameCardCurrentValue;
                return void 0 === e && (e = ""), this.state.editNameCardStatus ? d.a.createElement("span", null, d.a.createElement("span", {className: "myGroupCard-wrap"}, "" === e ? "未设置" : e), d.a.createElement("i", {
                    className: "bj",
                    onClick: this.editNameCard
                })) : d.a.createElement("span", null, d.a.createElement("input", {
                    type: "text",
                    placeholder: "请输入您的群名片",
                    onBlur: this.saveNameCard,
                    onKeyDown: this.nameCardKeyDown,
                    ref: this.nameCardInput,
                    onChange: this.limitNameCard
                }))
            }
        }, {
            key: "renderIntroduction", value: function () {
                var e = this.props, t = e.groupCardInfo, n = e.groupCardInfoMemberItem, r = this.state,
                    o = r.editIntroductionStatus, i = r.groupIntroductionCurrentValue, a = new Date(1e3 * t.createTime),
                    c = a.getFullYear(), s = a.getMonth() + 1, u = a.getDate();
                return "Member" === n.role ? d.a.createElement("span", {className: "whiteSpace"}, "" === t.introduction ? "本群创建于".concat(c, "年").concat(s, "月").concat(u, "日") : t.introduction.replace(/&nbsp;/g, " ").replace(/<br\/>/g, "\n")) : o ? d.a.createElement("span", null, d.a.createElement("span", {className: "whiteSpace"}, "" === i ? "本群创建于".concat(c, "年").concat(s, "月").concat(u, "日") : i.replace(/&nbsp;/g, " ").replace(/<br\/>/g, "\n")), this.isMotorcade() ? null : d.a.createElement("i", {
                    className: "bj",
                    onClick: this.editIntroduction
                })) : d.a.createElement("span", null, d.a.createElement("textarea", {
                    autoFocus: !0,
                    type: "text",
                    placeholder: "请输入群介绍",
                    onBlur: this.saveIntroduction,
                    onKeyDown: this.IntroductionKeyDown,
                    onChange: this.limitIntroduction,
                    className: "group-introduction-input",
                    ref: this.introductionInput
                }))
            }
        }, {
            key: "render", value: function () {
                var e, t = this.props, n = t.groupCardInfo, r = t.groupCardInfoMemberItem, o = t.loading,
                    i = this.state.groupAddCondition;
                return n && (e = n.members["@TIM#SYSTEM"] ? --Object.keys(n.members).length : Object.keys(n.members).length), o ? d.a.createElement("div", {className: "group-card-box"}, d.a.createElement("div", {className: "group-card-box-loading-wrap"})) : n && n.groupId ? this.isCoreTeam() ? d.a.createElement("div", {className: "group-card-box"}, d.a.createElement(k.a, {
                    ref: this.groupCardScrollBar,
                    className: "group-card-wrapper"
                }, d.a.createElement("div", {className: "head-wrap"}, d.a.createElement("div", {className: "headIco"}, this.renderHeadIco()), d.a.createElement("h3", {className: "group-name"}, this.renderGroupName())), d.a.createElement("div", {className: "group-card-header-line"}), d.a.createElement("div", {className: "cont-wrap"}, d.a.createElement("div", {className: "group-member"}, d.a.createElement("h5", null, d.a.createElement("span", {className: "group-member-title"}, this.isMotorcade() ? "车队成员" : "群成员", " "), e, d.a.createElement(Ke, null))), this.renderMembers()))) : d.a.createElement("div", {className: "group-card-box"}, d.a.createElement(k.a, {
                    ref: this.groupCardScrollBar,
                    className: "group-card-wrapper"
                }, this.isMotorcade() ? this.renderMotorcadeLink() : null, this.isMotorcade() ? this.renderMotorcadeHeader() : d.a.createElement("div", {className: "head-wrap"}, d.a.createElement("div", {className: "headIco"}, this.renderHeadIco()), d.a.createElement("h3", {className: "group-name"}, this.renderGroupName())), this.isMotorcade() ? this.renderTags() : null, d.a.createElement("div", {className: "group-card-header-line"}), d.a.createElement("div", {className: "cont-wrap"}, this.isMotorcade() ? null : d.a.createElement("div", {className: "group-callingcard"}, d.a.createElement("h5", {className: "group-card-font-style"}, "群名片"), d.a.createElement("p", null, " ", this.renderNameCard(), " ")), d.a.createElement("div", {className: "group-synopsis"}, d.a.createElement("h5", {className: "group-card-font-style"}, this.isMotorcade() ? "车队介绍" : "群介绍"), d.a.createElement("p", null, this.renderIntroduction())), d.a.createElement("div", {className: "group-notice"}, d.a.createElement("h5", {className: "group-card-font-style"}, this.isMotorcade() ? "车队公告" : "群公告"), d.a.createElement("p", null, " ", this.renderNotification(), " ")), d.a.createElement("div", {className: "group-member"}, d.a.createElement("h5", null, d.a.createElement("span", {className: "group-member-title"}, this.isMotorcade() ? "车队成员" : "群成员", " "), e, this.isMotorcade() ? null : d.a.createElement("span", {
                    className: "control-btn",
                    onClick: this.showManage
                }, "Member" !== r.role ? "管理" : "成员", " "), d.a.createElement(Ke, null))), this.renderMembers(), this.isMotorcade() ? null : d.a.createElement("div", {className: "group-add-condition"}, d.a.createElement("h5", {className: "group-card-font-style"}, "加群方式"), d.a.createElement("p", null, i), d.a.createElement("span", {
                    className: "group-add-change",
                    onClick: this.groupSet
                }, "Admin" === r.role || "Owner" === r.role ? "修改" : "")), d.a.createElement("div", {className: "group-card-space"}), d.a.createElement("div", {className: "group-card-btn-wrap"}, this.isMotorcade() ? "Owner" === r.role ? null : d.a.createElement($e.a, {onClick: this.quitMotorcade}, "退出车队") : d.a.createElement($e.a, {onClick: this.quitGroup}, "Owner" === r.role ? "解散群组" : "退出群组"))))) : null
            }
        }]), i
    }();
    mt.defaultProps = {
        groupCardInfo: void 0,
        groupId: void 0,
        groupCardInfoMemberItem: {},
        loading: !1,
        dispatch: function () {
        },
        groupStore: {},
        memberAccount: ""
    }, mt.propTypes = {
        groupCardInfo: o.PropTypes.object,
        groupId: o.PropTypes.string,
        groupCardInfoMemberItem: o.PropTypes.object,
        loading: o.PropTypes.bool,
        dispatch: o.PropTypes.func,
        groupStore: o.PropTypes.object,
        memberAccount: o.PropTypes.node
    };
    t.a = Object(i.connect)(function (e) {
        var t, n = e.groupStore.groupStore, r = e.groupCard, o = e.userInfo.uid;
        return r.loading ? {loading: !0} : {
            groupCardInfo: t = n[r.uid],
            groupStore: n,
            memberAccount: o,
            groupCardInfoMemberItem: t && t.members && t.members[e.userInfo.uid] || null
        }
    })(mt)
}, function (e, t, n) {
    e.exports = n(17)(157)
}, function (e, t, n) {
    e.exports = n(17)(147)
}, function (e, t, n) {
    e.exports = n(17)(220)
}, function (e, t, n) {
    e.exports = n(17)(11)
}, function (e, t, n) {
    e.exports = n(17)(236)
}, function (e, t, n) {
    e.exports = {vIcon: "vIcon-vIcon-3dQtw"}
}, function (e, t, n) {
    e.exports = {addBtn: "addFriend-addBtn-2otkQ"}
}, function (e, t, n) {
    e.exports = {largeBtn: "largeBtn-largeBtn-sphN2"}
}, function (e, t, n) {
    e.exports = n.p + "images/2249b3e92a159421bdd36d0916cc5226.png"
}, function (e, t, n) {
    e.exports = n.p + "images/d1c4016e3bb5e87f033c263b0186c205.png"
}, function (e, t, n) {
    e.exports = n.p + "images/79331930b862641b6b4371b6620e9c78.png"
}, function (e, t, n) {
    e.exports = n.p + "images/7bb472ee851adb2ced76a61be945698a.png"
}, function (e, t, n) {
    e.exports = n.p + "images/d4fee779a753551b64fe420c31872fcd.png"
}, function (e, t, n) {
    e.exports = n.p + "images/0b3a90610dc1092be76c725b42ea9b1b.png"
}, function (e, t, n) {
    e.exports = n.p + "images/8d423de5d746494fc339fe4a82f6aceb.png"
}, function (e, t, n) {
    e.exports = n.p + "images/53e9b9009791da9b6043e7a67a054816.png"
}, function (e, t, n) {
    e.exports = n.p + "images/ba59ea6be6db37c0be9913b9fa70edb2.png"
}, function (e, t, n) {
    e.exports = n.p + "images/7cc01134db823448cc13da79212fc2a7.png"
}, function (e, t, n) {
    e.exports = n.p + "images/e141c1371a22c0c07a18c5d992058d70.png"
}, function (e, t, n) {
    e.exports = n.p + "images/f04f439a6b30adf9d024931e00e2519d.png"
}, function (e, t, n) {
    e.exports = n.p + "images/0cc98dbdb2250980e07d847485a1f3f1.png"
}, function (e, t, n) {
    e.exports = n.p + "images/39393b8dd76fac1f089b457948e9c93e.png"
}, function (e, t, n) {
    e.exports = n.p + "images/cfc956220306847e5c9352e60d7c9fca.png"
}, function (e, t, n) {
    e.exports = n.p + "images/b9614ab0334b3270233f9bf3e923c18c.png"
}, function (e, t, n) {
    e.exports = n.p + "images/a0927e12363a42fe64bd326b26f03342.png"
}, function (e, t, n) {
    e.exports = n.p + "images/59cafbeeb946161ccc37286f363d4616.png"
}, function (e, t, n) {
    e.exports = n.p + "images/1f26082bb08cbffbe7e262bed3f6d884.png"
}, function (e, t, n) {
    e.exports = n.p + "images/2be89c20cf527b72ed1c3cc283795b4c.png"
}, function (e, t, n) {
    e.exports = n.p + "images/9aed76dbb617a0669a31881fb6633046.png"
}, function (e, t, n) {
    e.exports = n.p + "images/cb0d314e62f95199d2c3bb6a1ce40041.png"
}, function (e, t, n) {
    e.exports = n.p + "images/77d994a7516baed4ebd9e840d1e5a1f1.png"
}, function (e, t, n) {
    e.exports = n.p + "images/407f41f873f1b8f880281f2ced092172.png"
}, function (e, t, n) {
    e.exports = n.p + "images/49dd1c910b42e76cec4ea448b733c572.png"
}, function (e, t, n) {
    e.exports = n.p + "images/3cb794f21a28341f1fcb5ea95a649a9d.png"
}, function (e, t, n) {
    e.exports = n.p + "images/65b464c672baa341b928b1ab9ab402ee.png"
}, function (e, t, n) {
    e.exports = n.p + "images/abeef822f088b6e6f1c81d2c77766f46.png"
}, function (e, t, n) {
    e.exports = n.p + "images/3405e028936402339aa9c26611a81856.png"
}, function (e, t, n) {
    e.exports = n.p + "images/0125025554169dfc208eb5da2b3dbeba.png"
}, function (e, t, n) {
    e.exports = n.p + "images/bae22f37eaa679575b9b9e9a322a015c.png"
}, function (e, t, n) {
    e.exports = n.p + "images/6260c3c686a871d3824856b52c54a87b.png"
}, function (e, t, n) {
    e.exports = n.p + "images/9c8190d8528fb9e8492ebe5594ce7c21.png"
}, function (e, t, n) {
    e.exports = n(499)
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(n(414));
        return r = function () {
            return e
        }, e
    }

    n(242), r().default._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), r().default._babelPolyfill = !0
}, function (e, t, n) {
    "use strict";
    n(243), n(386), n(388), n(391), n(393), n(395), n(397), n(399), n(401), n(403), n(405), n(407), n(409), n(413)
}, function (e, t, n) {
    n(244), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(325), n(326), n(328), n(329), n(330), n(331), n(332), n(333), n(334), n(336), n(337), n(338), n(339), n(340), n(341), n(342), n(343), n(344), n(345), n(346), n(347), n(348), n(135), n(349),n(178),n(350),n(179),n(351),n(352),n(353),n(354),n(180),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),e.exports = n(25)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var o = n(10), a = n(38), i = n(28), c = n(6), s = n(35), u = n(56).KEY, l = n(11), f = n(95), d = n(70), p = n(59),
        m = n(18), h = n(116), g = n(159), b = n(246), v = n(98), y = n(12), S = n(13), w = n(40), E = n(55), I = n(58),
        T = n(63), O = n(162), _ = n(47), N = n(26), C = n(61), k = _.f, M = N.f, L = O.f, A = o.Symbol, P = o.JSON,
        j = P && P.stringify, R = "prototype", x = m("_hidden"), D = m("toPrimitive"), G = {}.propertyIsEnumerable,
        F = f("symbol-registry"), U = f("symbols"), H = f("op-symbols"), W = Object[R], B = "function" == typeof A,
        V = o.QObject, q = !V || !V[R] || !V[R].findChild, z = i && l(function () {
            return 7 != T(M({}, "a", {
                get: function () {
                    return M(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var r = k(W, t);
            r && delete W[t], M(e, t, n), r && e !== W && M(W, t, r)
        } : M, Y = function (e) {
            var t = U[e] = T(A[R]);
            return t._k = e, t
        }, J = B && "symbol" == r(A.iterator) ? function (e) {
            return "symbol" == r(e)
        } : function (e) {
            return e instanceof A
        }, K = function (e, t, n) {
            return e === W && K(H, t, n), y(e), t = E(t, !0), y(n), a(U, t) ? (n.enumerable ? (a(e, x) && e[x][t] && (e[x][t] = !1), n = T(n, {enumerable: I(0, !1)})) : (a(e, x) || M(e, x, I(1, {})), e[x][t] = !0), z(e, t, n)) : M(e, t, n)
        }, Q = function (e, t) {
            y(e);
            for (var n, r = b(t = w(t)), o = 0, i = r.length; o < i;) K(e, n = r[o++], t[n]);
            return e
        }, $ = function (e) {
            var t = G.call(this, e = E(e, !0));
            return !(this === W && a(U, e) && !a(H, e)) && (!(t || !a(this, e) || !a(U, e) || a(this, x) && this[x][e]) || t)
        }, X = function (e, t) {
            if (e = w(e), t = E(t, !0), e !== W || !a(U, t) || a(H, t)) {
                var n = k(e, t);
                return !n || !a(U, t) || a(e, x) && e[x][t] || (n.enumerable = !0), n
            }
        }, Z = function (e) {
            for (var t, n = L(w(e)), r = [], o = 0; n.length > o;) a(U, t = n[o++]) || t == x || t == u || r.push(t);
            return r
        }, ee = function (e) {
            for (var t, n = e === W, r = L(n ? H : w(e)), o = [], i = 0; r.length > i;) !a(U, t = r[i++]) || n && !a(W, t) || o.push(U[t]);
            return o
        };
    B || (s((A = function () {
        if (this instanceof A) throw TypeError("Symbol is not a constructor!");
        var n = p(0 < arguments.length ? arguments[0] : void 0);
        return i && q && z(W, n, {
            configurable: !0, set: function e(t) {
                this === W && e.call(H, t), a(this, x) && a(this[x], n) && (this[x][n] = !1), z(this, n, I(1, t))
            }
        }), Y(n)
    })[R], "toString", function () {
        return this._k
    }), _.f = X, N.f = K, n(64).f = O.f = Z, n(87).f = $, n(97).f = ee, i && !n(60) && s(W, "propertyIsEnumerable", $, !0), h.f = function (e) {
        return Y(m(e))
    }), c(c.G + c.W + c.F * !B, {Symbol: A});
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) m(te[ne++]);
    for (var re = C(m.store), oe = 0; re.length > oe;) g(re[oe++]);
    c(c.S + c.F * !B, "Symbol", {
        for: function (e) {
            return a(F, e += "") ? F[e] : F[e] = A(e)
        }, keyFor: function (e) {
            if (!J(e)) throw TypeError(e + " is not a symbol!");
            for (var t in F) if (F[t] === e) return t
        }, useSetter: function () {
            q = !0
        }, useSimple: function () {
            q = !1
        }
    }), c(c.S + c.F * !B, "Object", {
        create: function (e, t) {
            return void 0 === t ? T(e) : Q(T(e), t)
        },
        defineProperty: K,
        defineProperties: Q,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: ee
    }), P && c(c.S + c.F * (!B || l(function () {
        var e = A();
        return "[null]" != j([e]) || "{}" != j({a: e}) || "{}" != j(Object(e))
    })), "JSON", {
        stringify: function (e) {
            for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = t = r[1], (S(t) || void 0 !== e) && !J(e)) return v(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !J(t)) return t
            }), r[1] = t, j.apply(P, r)
        }
    }), A[R][D] || n(39)(A[R], D, A[R].valueOf), d(A, "Symbol"), d(Math, "Math", !0), d(o.JSON, "JSON", !0)
}, function (e, t, n) {
    e.exports = n(95)("native-function-to-string", Function.toString)
}, function (e, t, n) {
    var c = n(61), s = n(97), u = n(87);
    e.exports = function (e) {
        var t = c(e), n = s.f;
        if (n) for (var r, o = n(e), i = u.f, a = 0; o.length > a;) i.call(e, r = o[a++]) && t.push(r);
        return t
    }
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Object", {create: n(63)})
}, function (e, t, n) {
    var r = n(6);
    r(r.S + r.F * !n(28), "Object", {defineProperty: n(26).f})
}, function (e, t, n) {
    var r = n(6);
    r(r.S + r.F * !n(28), "Object", {defineProperties: n(161)})
}, function (e, t, n) {
    var r = n(40), o = n(47).f;
    n(48)("getOwnPropertyDescriptor", function () {
        return function (e, t) {
            return o(r(e), t)
        }
    })
}, function (e, t, n) {
    var r = n(33), o = n(65);
    n(48)("getPrototypeOf", function () {
        return function (e) {
            return o(r(e))
        }
    })
}, function (e, t, n) {
    var r = n(33), o = n(61);
    n(48)("keys", function () {
        return function (e) {
            return o(r(e))
        }
    })
}, function (e, t, n) {
    n(48)("getOwnPropertyNames", function () {
        return n(162).f
    })
}, function (e, t, n) {
    var r = n(13), o = n(56).onFreeze;
    n(48)("freeze", function (t) {
        return function (e) {
            return t && r(e) ? t(o(e)) : e
        }
    })
}, function (e, t, n) {
    var r = n(13), o = n(56).onFreeze;
    n(48)("seal", function (t) {
        return function (e) {
            return t && r(e) ? t(o(e)) : e
        }
    })
}, function (e, t, n) {
    var r = n(13), o = n(56).onFreeze;
    n(48)("preventExtensions", function (t) {
        return function (e) {
            return t && r(e) ? t(o(e)) : e
        }
    })
}, function (e, t, n) {
    var r = n(13);
    n(48)("isFrozen", function (t) {
        return function (e) {
            return !r(e) || !!t && t(e)
        }
    })
}, function (e, t, n) {
    var r = n(13);
    n(48)("isSealed", function (t) {
        return function (e) {
            return !r(e) || !!t && t(e)
        }
    })
}, function (e, t, n) {
    var r = n(13);
    n(48)("isExtensible", function (t) {
        return function (e) {
            return !!r(e) && (!t || t(e))
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S + r.F, "Object", {assign: n(163)})
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Object", {is: n(164)})
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Object", {setPrototypeOf: n(120).set})
}, function (e, t, n) {
    "use strict";
    var r = n(88), o = {};
    o[n(18)("toStringTag")] = "z", o + "" != "[object z]" && n(35)(Object.prototype, "toString", function () {
        return "[object " + r(this) + "]"
    }, !0)
}, function (e, t, n) {
    var r = n(6);
    r(r.P, "Function", {bind: n(165)})
}, function (e, t, n) {
    var r = n(26).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
    "name" in o || n(28) && r(o, "name", {
        configurable: !0, get: function () {
            try {
                return ("" + this).match(i)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(13), o = n(65), i = n(18)("hasInstance"), a = Function.prototype;
    i in a || n(26).f(a, i, {
        value: function (e) {
            if ("function" != typeof this || !r(e)) return !1;
            if (!r(this.prototype)) return e instanceof this;
            for (; e = o(e);) if (this.prototype === e) return !0;
            return !1
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(167);
    r(r.G + r.F * (parseInt != o), {parseInt: o})
}, function (e, t, n) {
    var r = n(6), o = n(168);
    r(r.G + r.F * (parseFloat != o), {parseFloat: o})
}, function (e, t, n) {
    "use strict";
    var r = n(10), o = n(38), i = n(52), a = n(122), l = n(55), c = n(11), s = n(64).f, u = n(47).f, f = n(26).f,
        d = n(71).trim, p = "Number", m = r[p], h = m, g = m.prototype, b = i(n(63)(g)) == p,
        v = "trim" in String.prototype, y = function (e) {
            var t = l(e, !1);
            if ("string" == typeof t && 2 < t.length) {
                var n, r, o, i = (t = v ? t.trim() : d(t, 3)).charCodeAt(0);
                if (43 === i || 45 === i) {
                    if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === i) {
                    switch (t.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, o = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, o = 55;
                            break;
                        default:
                            return +t
                    }
                    for (var a, c = t.slice(2), s = 0, u = c.length; s < u; s++) if ((a = c.charCodeAt(s)) < 48 || o < a) return NaN;
                    return parseInt(c, r)
                }
            }
            return +t
        };
    if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
        m = function (e) {
            var t = arguments.length < 1 ? 0 : e, n = this;
            return n instanceof m && (b ? c(function () {
                g.valueOf.call(n)
            }) : i(n) != p) ? a(new h(y(t)), n, m) : y(t)
        };
        for (var S, w = n(28) ? s(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), E = 0; w.length > E; E++) o(h, S = w[E]) && !o(m, S) && f(m, S, u(h, S));
        (m.prototype = g).constructor = m, n(35)(r, p, m)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6), u = n(46), l = n(169), f = n(123), o = 1..toFixed, i = Math.floor, a = [0, 0, 0, 0, 0, 0],
        d = "Number.toFixed: incorrect invocation!", p = function (e, t) {
            for (var n = -1, r = t; ++n < 6;) r += e * a[n], a[n] = r % 1e7, r = i(r / 1e7)
        }, m = function (e) {
            for (var t = 6, n = 0; 0 <= --t;) n += a[t], a[t] = i(n / e), n = n % e * 1e7
        }, h = function () {
            for (var e = 6, t = ""; 0 <= --e;) if ("" !== t || 0 === e || 0 !== a[e]) {
                var n = String(a[e]);
                t = "" === t ? n : t + f.call("0", 7 - n.length) + n
            }
            return t
        }, g = function e(t, n, r) {
            return 0 === n ? r : n % 2 == 1 ? e(t, n - 1, r * t) : e(t * t, n / 2, r)
        };
    r(r.P + r.F * (!!o && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(11)(function () {
        o.call({})
    })), "Number", {
        toFixed: function (e) {
            var t, n, r, o, i = l(this, d), a = u(e), c = "", s = "0";
            if (a < 0 || 20 < a) throw RangeError(d);
            if (i != i) return "NaN";
            if (i <= -1e21 || 1e21 <= i) return String(i);
            if (i < 0 && (c = "-", i = -i), 1e-21 < i) if (n = (t = function (e) {
                for (var t = 0, n = e; 4096 <= n;) t += 12, n /= 4096;
                for (; 2 <= n;) t += 1, n /= 2;
                return t
            }(i * g(2, 69, 1)) - 69) < 0 ? i * g(2, -t, 1) : i / g(2, t, 1), n *= 4503599627370496, 0 < (t = 52 - t)) {
                for (p(0, n), r = a; 7 <= r;) p(1e7, 0), r -= 7;
                for (p(g(10, r, 1), 0), r = t - 1; 23 <= r;) m(1 << 23), r -= 23;
                m(1 << r), p(1, 1), m(2), s = h()
            } else p(0, n), p(1 << -t, 0), s = h() + f.call("0", a);
            return s = 0 < a ? c + ((o = s.length) <= a ? "0." + f.call("0", a - o) + s : s.slice(0, o - a) + "." + s.slice(o - a)) : c + s
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(11), i = n(169), a = 1..toPrecision;
    r(r.P + r.F * (o(function () {
        return "1" !== a.call(1, void 0)
    }) || !o(function () {
        a.call({})
    })), "Number", {
        toPrecision: function (e) {
            var t = i(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === e ? a.call(t) : a.call(t, e)
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Number", {EPSILON: Math.pow(2, -52)})
}, function (e, t, n) {
    var r = n(6), o = n(10).isFinite;
    r(r.S, "Number", {
        isFinite: function (e) {
            return "number" == typeof e && o(e)
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Number", {isInteger: n(170)})
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Number", {
        isNaN: function (e) {
            return e != e
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(170), i = Math.abs;
    r(r.S, "Number", {
        isSafeInteger: function (e) {
            return o(e) && i(e) <= 9007199254740991
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
}, function (e, t, n) {
    var r = n(6), o = n(168);
    r(r.S + r.F * (Number.parseFloat != o), "Number", {parseFloat: o})
}, function (e, t, n) {
    var r = n(6), o = n(167);
    r(r.S + r.F * (Number.parseInt != o), "Number", {parseInt: o})
}, function (e, t, n) {
    var r = n(6), o = n(171), i = Math.sqrt, a = Math.acosh;
    r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
        acosh: function (e) {
            return (e = +e) < 1 ? NaN : 94906265.62425156 < e ? Math.log(e) + Math.LN2 : o(e - 1 + i(e - 1) * i(e + 1))
        }
    })
}, function (e, t, n) {
    var r = n(6), o = Math.asinh;
    r(r.S + r.F * !(o && 0 < 1 / o(0)), "Math", {
        asinh: function e(t) {
            return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
        }
    })
}, function (e, t, n) {
    var r = n(6), o = Math.atanh;
    r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", {
        atanh: function (e) {
            return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(124);
    r(r.S, "Math", {
        cbrt: function (e) {
            return o(e = +e) * Math.pow(Math.abs(e), 1 / 3)
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Math", {
        clz32: function (e) {
            return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
        }
    })
}, function (e, t, n) {
    var r = n(6), o = Math.exp;
    r(r.S, "Math", {
        cosh: function (e) {
            return (o(e = +e) + o(-e)) / 2
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(125);
    r(r.S + r.F * (o != Math.expm1), "Math", {expm1: o})
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Math", {fround: n(289)})
}, function (e, t, n) {
    var i = n(124), r = Math.pow, a = r(2, -52), c = r(2, -23), s = r(2, 127) * (2 - c), u = r(2, -126);
    e.exports = Math.fround || function (e) {
        var t, n, r = Math.abs(e), o = i(e);
        return r < u ? o * function (e) {
            return e + 1 / a - 1 / a
        }(r / u / c) * u * c : s < (n = (t = (1 + c / a) * r) - (t - r)) || n != n ? o * (1 / 0) : o * n
    }
}, function (e, t, n) {
    var r = n(6), s = Math.abs;
    r(r.S, "Math", {
        hypot: function (e, t) {
            for (var n, r, o = 0, i = 0, a = arguments.length, c = 0; i < a;) c < (n = s(arguments[i++])) ? (o = o * (r = c / n) * r + 1, c = n) : o += 0 < n ? (r = n / c) * r : n;
            return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o)
        }
    })
}, function (e, t, n) {
    var r = n(6), o = Math.imul;
    r(r.S + r.F * n(11)(function () {
        return -5 != o(4294967295, 5) || 2 != o.length
    }), "Math", {
        imul: function (e, t) {
            var n = +e, r = +t, o = 65535 & n, i = 65535 & r;
            return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0)
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Math", {
        log10: function (e) {
            return Math.log(e) * Math.LOG10E
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Math", {log1p: n(171)})
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Math", {
        log2: function (e) {
            return Math.log(e) / Math.LN2
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Math", {sign: n(124)})
}, function (e, t, n) {
    var r = n(6), o = n(125), i = Math.exp;
    r(r.S + r.F * n(11)(function () {
        return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
        sinh: function (e) {
            return Math.abs(e = +e) < 1 ? (o(e) - o(-e)) / 2 : (i(e - 1) - i(-e - 1)) * (Math.E / 2)
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(125), i = Math.exp;
    r(r.S, "Math", {
        tanh: function (e) {
            var t = o(e = +e), n = o(-e);
            return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (i(e) + i(-e))
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Math", {
        trunc: function (e) {
            return (0 < e ? Math.floor : Math.ceil)(e)
        }
    })
}, function (e, t, n) {
    var r = n(6), i = n(62), a = String.fromCharCode, o = String.fromCodePoint;
    r(r.S + r.F * (!!o && 1 != o.length), "String", {
        fromCodePoint: function (e) {
            for (var t, n = [], r = arguments.length, o = 0; o < r;) {
                if (t = +arguments[o++], i(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
                n.push(t < 65536 ? a(t) : a(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function (e, t, n) {
    var r = n(6), a = n(40), c = n(22);
    r(r.S, "String", {
        raw: function (e) {
            for (var t = a(e.raw), n = c(t.length), r = arguments.length, o = [], i = 0; i < n;) o.push(String(t[i++])), i < r && o.push(String(arguments[i]));
            return o.join("")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(71)("trim", function (e) {
        return function () {
            return e(this, 3)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(126)(!0);
    n(127)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(126)(!1);
    r(r.P, "String", {
        codePointAt: function (e) {
            return o(this, e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), a = n(22), c = n(128), s = "endsWith", u = ""[s];
    r(r.P + r.F * n(130)(s), "String", {
        endsWith: function (e) {
            var t = c(this, e, s), n = 1 < arguments.length ? arguments[1] : void 0, r = a(t.length),
                o = void 0 === n ? r : Math.min(a(n), r), i = String(e);
            return u ? u.call(t, i, o) : t.slice(o - i.length, o) === i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(128);
    r(r.P + r.F * n(130)("includes"), "String", {
        includes: function (e) {
            return !!~o(this, e, "includes").indexOf(e, 1 < arguments.length ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.P, "String", {repeat: n(123)})
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(22), i = n(128), a = "startsWith", c = ""[a];
    r(r.P + r.F * n(130)(a), "String", {
        startsWith: function (e) {
            var t = i(this, e, a), n = o(Math.min(1 < arguments.length ? arguments[1] : void 0, t.length)),
                r = String(e);
            return c ? c.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("anchor", function (t) {
        return function (e) {
            return t(this, "a", "name", e)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("big", function (e) {
        return function () {
            return e(this, "big", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("blink", function (e) {
        return function () {
            return e(this, "blink", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("bold", function (e) {
        return function () {
            return e(this, "b", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("fixed", function (e) {
        return function () {
            return e(this, "tt", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("fontcolor", function (t) {
        return function (e) {
            return t(this, "font", "color", e)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("fontsize", function (t) {
        return function (e) {
            return t(this, "font", "size", e)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("italics", function (e) {
        return function () {
            return e(this, "i", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("link", function (t) {
        return function (e) {
            return t(this, "a", "href", e)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("small", function (e) {
        return function () {
            return e(this, "small", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("strike", function (e) {
        return function () {
            return e(this, "strike", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("sub", function (e) {
        return function () {
            return e(this, "sub", "", "")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(36)("sup", function (e) {
        return function () {
            return e(this, "sup", "", "")
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Date", {
        now: function () {
            return (new Date).getTime()
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(33), i = n(55);
    r(r.P + r.F * n(11)(function () {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function () {
                return 1
            }
        })
    }), "Date", {
        toJSON: function (e) {
            var t = o(this), n = i(t);
            return "number" != typeof n || isFinite(n) ? t.toISOString() : null
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(324);
    r(r.P + r.F * (Date.prototype.toISOString !== o), "Date", {toISOString: o})
}, function (e, t, n) {
    "use strict";
    var r = n(11), o = Date.prototype.getTime, i = Date.prototype.toISOString, a = function (e) {
        return 9 < e ? e : "0" + e
    };
    e.exports = r(function () {
        return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1))
    }) || !r(function () {
        i.call(new Date(NaN))
    }) ? function () {
        if (!isFinite(o.call(this))) throw RangeError("Invalid time value");
        var e = this.getUTCFullYear(), t = this.getUTCMilliseconds(), n = e < 0 ? "-" : 9999 < e ? "+" : "";
        return n + ("00000" + Math.abs(e)).slice(n ? -6 : -4) + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + (99 < t ? t : "0" + a(t)) + "Z"
    } : i
}, function (e, t, n) {
    var r = Date.prototype, o = "Invalid Date", i = r.toString, a = r.getTime;
    new Date(NaN) + "" != o && n(35)(r, "toString", function () {
        var e = a.call(this);
        return e == e ? i.call(this) : o
    })
}, function (e, t, n) {
    var r = n(18)("toPrimitive"), o = Date.prototype;
    r in o || n(39)(o, r, n(327))
}, function (e, t, n) {
    "use strict";
    var r = n(12), o = n(55);
    e.exports = function (e) {
        if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
        return o(r(this), "number" != e)
    }
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Array", {isArray: n(98)})
}, function (e, t, n) {
    "use strict";
    var d = n(44), r = n(6), p = n(33), m = n(173), h = n(131), g = n(22), b = n(132), v = n(133);
    r(r.S + r.F * !n(99)(function (e) {
        Array.from(e)
    }), "Array", {
        from: function (e) {
            var t, n, r, o, i = p(e), a = "function" == typeof this ? this : Array, c = arguments.length,
                s = 1 < c ? arguments[1] : void 0, u = void 0 !== s, l = 0, f = v(i);
            if (u && (s = d(s, 2 < c ? arguments[2] : void 0, 2)), null == f || a == Array && h(f)) for (n = new a(t = g(i.length)); l < t; l++) b(n, l, u ? s(i[l], l) : i[l]); else for (o = f.call(i), n = new a; !(r = o.next()).done; l++) b(n, l, u ? m(o, s, [r.value, l], !0) : r.value);
            return n.length = l, n
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(132);
    r(r.S + r.F * n(11)(function () {
        function e() {
        }

        return !(Array.of.call(e) instanceof e)
    }), "Array", {
        of: function () {
            for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); e < t;) o(n, e, arguments[e++]);
            return n.length = t, n
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(40), i = [].join;
    r(r.P + r.F * (n(86) != Object || !n(42)(i)), "Array", {
        join: function (e) {
            return i.call(o(this), void 0 === e ? "," : e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(119), u = n(52), l = n(62), f = n(22), d = [].slice;
    r(r.P + r.F * n(11)(function () {
        o && d.call(o)
    }), "Array", {
        slice: function (e, t) {
            var n = f(this.length), r = u(this);
            if (t = void 0 === t ? n : t, "Array" == r) return d.call(this, e, t);
            for (var o = l(e, n), i = l(t, n), a = f(i - o), c = new Array(a), s = 0; s < a; s++) c[s] = "String" == r ? this.charAt(o + s) : this[o + s];
            return c
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(45), i = n(33), a = n(11), c = [].sort, s = [1, 2, 3];
    r(r.P + r.F * (a(function () {
        s.sort(void 0)
    }) || !a(function () {
        s.sort(null)
    }) || !n(42)(c)), "Array", {
        sort: function (e) {
            return void 0 === e ? c.call(i(this)) : c.call(i(this), o(e))
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(49)(0), i = n(42)([].forEach, !0);
    r(r.P + r.F * !i, "Array", {
        forEach: function (e) {
            return o(this, e, arguments[1])
        }
    })
}, function (e, t, n) {
    var r = n(13), o = n(98), i = n(18)("species");
    e.exports = function (e) {
        var t;
        return o(e) && ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype) || (t = void 0), r(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(49)(1);
    r(r.P + r.F * !n(42)([].map, !0), "Array", {
        map: function (e) {
            return o(this, e, arguments[1])
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(49)(2);
    r(r.P + r.F * !n(42)([].filter, !0), "Array", {
        filter: function (e) {
            return o(this, e, arguments[1])
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(49)(3);
    r(r.P + r.F * !n(42)([].some, !0), "Array", {
        some: function (e) {
            return o(this, e, arguments[1])
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(49)(4);
    r(r.P + r.F * !n(42)([].every, !0), "Array", {
        every: function (e) {
            return o(this, e, arguments[1])
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(175);
    r(r.P + r.F * !n(42)([].reduce, !0), "Array", {
        reduce: function (e) {
            return o(this, e, arguments.length, arguments[1], !1)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(175);
    r(r.P + r.F * !n(42)([].reduceRight, !0), "Array", {
        reduceRight: function (e) {
            return o(this, e, arguments.length, arguments[1], !0)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(96)(!1), i = [].indexOf, a = !!i && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !n(42)(i)), "Array", {
        indexOf: function (e) {
            return a ? i.apply(this, arguments) || 0 : o(this, e, arguments[1])
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(40), i = n(46), a = n(22), c = [].lastIndexOf, s = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (s || !n(42)(c)), "Array", {
        lastIndexOf: function (e) {
            if (s) return c.apply(this, arguments) || 0;
            var t = o(this), n = a(t.length), r = n - 1;
            for (1 < arguments.length && (r = Math.min(r, i(arguments[1]))), r < 0 && (r = n + r); 0 <= r; r--) if (r in t && t[r] === e) return r || 0;
            return -1
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.P, "Array", {copyWithin: n(176)}), n(66)("copyWithin")
}, function (e, t, n) {
    var r = n(6);
    r(r.P, "Array", {fill: n(134)}), n(66)("fill")
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(49)(5), i = !0;
    "find" in [] && Array(1).find(function () {
        i = !1
    }), r(r.P + r.F * i, "Array", {
        find: function (e) {
            return o(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), n(66)("find")
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(49)(6), i = "findIndex", a = !0;
    i in [] && Array(1)[i](function () {
        a = !1
    }), r(r.P + r.F * a, "Array", {
        findIndex: function (e) {
            return o(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), n(66)(i)
}, function (e, t, n) {
    n(73)("Array")
}, function (e, t, n) {
    var r = n(10), i = n(122), o = n(26).f, a = n(64).f, c = n(129), s = n(100), u = r.RegExp, l = u, f = u.prototype,
        d = /a/g, p = /a/g, m = new u(d) !== d;
    if (n(28) && (!m || n(11)(function () {
        return p[n(18)("match")] = !1, u(d) != d || u(p) == p || "/a/i" != u(d, "i")
    }))) {
        u = function (e, t) {
            var n = this instanceof u, r = c(e), o = void 0 === t;
            return !n && r && e.constructor === u && o ? e : i(m ? new l(r && !o ? e.source : e, t) : l((r = e instanceof u) ? e.source : e, r && o ? s.call(e) : t), n ? this : f, u)
        };
        for (var h = function (t) {
            t in u || o(u, t, {
                configurable: !0, get: function () {
                    return l[t]
                }, set: function (e) {
                    l[t] = e
                }
            })
        }, g = a(l), b = 0; g.length > b;) h(g[b++]);
        (f.constructor = u).prototype = f, n(35)(r, "RegExp", u)
    }
    n(73)("RegExp")
}, function (e, t, n) {
    "use strict";
    n(179);
    var r = n(12), o = n(100), i = n(28), a = "toString", c = /./[a], s = function (e) {
        n(35)(RegExp.prototype, a, e, !0)
    };
    n(11)(function () {
        return "/a/b" != c.call({source: "a", flags: "b"})
    }) ? s(function () {
        var e = r(this);
        return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? o.call(e) : void 0)
    }) : c.name != a && s(function () {
        return c.call(this)
    })
}, function (e, t, n) {
    "use strict";
    var f = n(12), d = n(22), p = n(137), m = n(101);
    n(102)("match", 1, function (r, o, u, l) {
        return [function (e) {
            var t = r(this), n = null == e ? void 0 : e[o];
            return void 0 !== n ? n.call(e, t) : new RegExp(e)[o](String(t))
        }, function (e) {
            var t = l(u, e, this);
            if (t.done) return t.value;
            var n = f(e), r = String(this);
            if (!n.global) return m(n, r);
            for (var o, i = n.unicode, a = [], c = n.lastIndex = 0; null !== (o = m(n, r));) {
                var s = String(o[0]);
                "" === (a[c] = s) && (n.lastIndex = p(r, d(n.lastIndex), i)), c++
            }
            return 0 === c ? null : a
        }]
    })
}, function (e, t, n) {
    "use strict";
    var T = n(12), r = n(33), O = n(22), _ = n(46), N = n(137), C = n(101), k = Math.max, M = Math.min, d = Math.floor,
        p = /\$([$&`']|\d\d?|<[^>]*>)/g, m = /\$([$&`']|\d\d?)/g;
    n(102)("replace", 2, function (o, i, w, E) {
        return [function (e, t) {
            var n = o(this), r = null == e ? void 0 : e[i];
            return void 0 !== r ? r.call(e, n, t) : w.call(String(n), e, t)
        }, function (e, t) {
            var n = E(w, e, this, t);
            if (n.done) return n.value;
            var r = T(e), o = String(this), i = "function" == typeof t;
            i || (t = String(t));
            var a = r.global;
            if (a) {
                var c = r.unicode;
                r.lastIndex = 0
            }
            for (var s = []; ;) {
                var u = C(r, o);
                if (null === u) break;
                if (s.push(u), !a) break;
                "" === String(u[0]) && (r.lastIndex = N(o, O(r.lastIndex), c))
            }
            for (var l, f = "", d = 0, p = 0; p < s.length; p++) {
                u = s[p];
                for (var m = String(u[0]), h = k(M(_(u.index), o.length), 0), g = [], b = 1; b < u.length; b++) g.push(void 0 === (l = u[b]) ? l : String(l));
                var v = u.groups;
                if (i) {
                    var y = [m].concat(g, h, o);
                    void 0 !== v && y.push(v);
                    var S = String(t.apply(void 0, y))
                } else S = I(m, o, h, g, v, t);
                d <= h && (f += o.slice(d, h) + S, d = h + m.length)
            }
            return f + o.slice(d)
        }];

        function I(i, a, c, s, u, e) {
            var l = c + i.length, f = s.length, t = m;
            return void 0 !== u && (u = r(u), t = p), w.call(e, t, function (e, t) {
                var n;
                switch (t.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return i;
                    case"`":
                        return a.slice(0, c);
                    case"'":
                        return a.slice(l);
                    case"<":
                        n = u[t.slice(1, -1)];
                        break;
                    default:
                        var r = +t;
                        if (0 == r) return e;
                        if (f < r) {
                            var o = d(r / 10);
                            return 0 === o ? e : o <= f ? void 0 === s[o - 1] ? t.charAt(1) : s[o - 1] + t.charAt(1) : e
                        }
                        n = s[r - 1]
                }
                return void 0 === n ? "" : n
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var s = n(12), u = n(164), l = n(101);
    n(102)("search", 1, function (r, o, a, c) {
        return [function (e) {
            var t = r(this), n = null == e ? void 0 : e[o];
            return void 0 !== n ? n.call(e, t) : new RegExp(e)[o](String(t))
        }, function (e) {
            var t = c(a, e, this);
            if (t.done) return t.value;
            var n = s(e), r = String(this), o = n.lastIndex;
            u(o, 0) || (n.lastIndex = 0);
            var i = l(n, r);
            return u(n.lastIndex, o) || (n.lastIndex = o), null === i ? -1 : i.index
        }]
    })
}, function (e, t, n) {
    "use strict";
    var f = n(129), y = n(12), S = n(89), w = n(137), E = n(22), I = n(101), d = n(136), r = n(11), T = Math.min,
        p = [].push, a = "split", m = "length", h = "lastIndex", O = 4294967295, _ = !r(function () {
            RegExp(O, "y")
        });
    n(102)("split", 2, function (o, i, g, b) {
        var v;
        return v = "c" == "abbc"[a](/(b)*/)[1] || 4 != "test"[a](/(?:)/, -1)[m] || 2 != "ab"[a](/(?:ab)*/)[m] || 4 != "."[a](/(.?)(.?)/)[m] || 1 < "."[a](/()()/)[m] || ""[a](/.?/)[m] ? function (e, t) {
            var n = String(this);
            if (void 0 === e && 0 === t) return [];
            if (!f(e)) return g.call(n, e, t);
            for (var r, o, i, a = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), s = 0, u = void 0 === t ? O : t >>> 0, l = new RegExp(e.source, c + "g"); (r = d.call(l, n)) && !(s < (o = l[h]) && (a.push(n.slice(s, r.index)), 1 < r[m] && r.index < n[m] && p.apply(a, r.slice(1)), i = r[0][m], s = o, a[m] >= u));) l[h] === r.index && l[h]++;
            return s === n[m] ? !i && l.test("") || a.push("") : a.push(n.slice(s)), a[m] > u ? a.slice(0, u) : a
        } : "0"[a](void 0, 0)[m] ? function (e, t) {
            return void 0 === e && 0 === t ? [] : g.call(this, e, t)
        } : g, [function (e, t) {
            var n = o(this), r = null == e ? void 0 : e[i];
            return void 0 !== r ? r.call(e, n, t) : v.call(String(n), e, t)
        }, function (e, t) {
            var n = b(v, e, this, t, v !== g);
            if (n.done) return n.value;
            var r = y(e), o = String(this), i = S(r, RegExp), a = r.unicode,
                c = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (_ ? "y" : "g"),
                s = new i(_ ? r : "^(?:" + r.source + ")", c), u = void 0 === t ? O : t >>> 0;
            if (0 == u) return [];
            if (0 === o.length) return null === I(s, o) ? [o] : [];
            for (var l = 0, f = 0, d = []; f < o.length;) {
                s.lastIndex = _ ? f : 0;
                var p, m = I(s, _ ? o : o.slice(f));
                if (null === m || (p = T(E(s.lastIndex + (_ ? 0 : f)), o.length)) === l) f = w(o, f, a); else {
                    if (d.push(o.slice(l, f)), d.length === u) return d;
                    for (var h = 1; h <= m.length - 1; h++) if (d.push(m[h]), d.length === u) return d;
                    f = l = p
                }
            }
            return d.push(o.slice(l)), d
        }]
    })
}, function (e, t, n) {
    var c = n(10), s = n(138).set, u = c.MutationObserver || c.WebKitMutationObserver, l = c.process, f = c.Promise,
        d = "process" == n(52)(l);
    e.exports = function () {
        var n, r, o, e = function () {
            var e, t;
            for (d && (e = l.domain) && e.exit(); n;) {
                t = n.fn, n = n.next;
                try {
                    t()
                } catch (e) {
                    throw n ? o() : r = void 0, e
                }
            }
            r = void 0, e && e.enter()
        };
        if (d) o = function () {
            l.nextTick(e)
        }; else if (!u || c.navigator && c.navigator.standalone) if (f && f.resolve) {
            var t = f.resolve(void 0);
            o = function () {
                t.then(e)
            }
        } else o = function () {
            s.call(c, e)
        }; else {
            var i = !0, a = document.createTextNode("");
            new u(e).observe(a, {characterData: !0}), o = function () {
                a.data = i = !i
            }
        }
        return function (e) {
            var t = {fn: e, next: void 0};
            r && (r.next = t), n || (n = t, o()), r = t
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {e: !1, v: e()}
        } catch (e) {
            return {e: !0, v: e}
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(183), o = n(67);
    e.exports = n(105)("Map", function (e) {
        return function () {
            return e(this, 0 < arguments.length ? arguments[0] : void 0)
        }
    }, {
        get: function (e) {
            var t = r.getEntry(o(this, "Map"), e);
            return t && t.v
        }, set: function (e, t) {
            return r.def(o(this, "Map"), 0 === e ? 0 : e, t)
        }
    }, r, !0)
}, function (e, t, n) {
    "use strict";
    var r = n(183), o = n(67);
    e.exports = n(105)("Set", function (e) {
        return function () {
            return e(this, 0 < arguments.length ? arguments[0] : void 0)
        }
    }, {
        add: function (e) {
            return r.def(o(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, r)
}, function (e, t, n) {
    "use strict";
    var i, r = n(10), o = n(49)(0), a = n(35), c = n(56), s = n(163), u = n(184), l = n(13), f = n(67), d = n(67),
        p = !r.ActiveXObject && "ActiveXObject" in r, m = "WeakMap", h = c.getWeak, g = Object.isExtensible,
        b = u.ufstore, v = function (e) {
            return function () {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, y = {
            get: function (e) {
                if (l(e)) {
                    var t = h(e);
                    return !0 === t ? b(f(this, m)).get(e) : t ? t[this._i] : void 0
                }
            }, set: function (e, t) {
                return u.def(f(this, m), e, t)
            }
        }, S = e.exports = n(105)(m, v, y, u, !0, !0);
    d && p && (s((i = u.getConstructor(v, m)).prototype, y), c.NEED = !0, o(["delete", "has", "get", "set"], function (r) {
        var e = S.prototype, o = e[r];
        a(e, r, function (e, t) {
            if (!l(e) || g(e)) return o.call(this, e, t);
            this._f || (this._f = new i);
            var n = this._f[r](e, t);
            return "set" == r ? this : n
        })
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(184), o = n(67);
    n(105)("WeakSet", function (e) {
        return function () {
            return e(this, 0 < arguments.length ? arguments[0] : void 0)
        }
    }, {
        add: function (e) {
            return r.def(o(this, "WeakSet"), e, !0)
        }
    }, r, !1, !0)
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(106), i = n(139), u = n(12), l = n(62), f = n(22), a = n(13), c = n(10).ArrayBuffer, d = n(89),
        p = i.ArrayBuffer, m = i.DataView, s = o.ABV && c.isView, h = p.prototype.slice, g = o.VIEW, b = "ArrayBuffer";
    r(r.G + r.W + r.F * (c !== p), {ArrayBuffer: p}), r(r.S + r.F * !o.CONSTR, b, {
        isView: function (e) {
            return s && s(e) || a(e) && g in e
        }
    }), r(r.P + r.U + r.F * n(11)(function () {
        return !new p(2).slice(1, void 0).byteLength
    }), b, {
        slice: function (e, t) {
            if (void 0 !== h && void 0 === t) return h.call(u(this), e);
            for (var n = u(this).byteLength, r = l(e, n), o = l(void 0 === t ? n : t, n), i = new (d(this, p))(f(o - r)), a = new m(this), c = new m(i), s = 0; r < o;) c.setUint8(s++, a.getUint8(r++));
            return i
        }
    }), n(73)(b)
}, function (e, t, n) {
    var r = n(6);
    r(r.G + r.W + r.F * !n(106).ABV, {DataView: n(139).DataView})
}, function (e, t, n) {
    n(54)("Int8", 1, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    n(54)("Uint8", 1, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    n(54)("Uint8", 1, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    }, !0)
}, function (e, t, n) {
    n(54)("Int16", 2, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    n(54)("Uint16", 2, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    n(54)("Int32", 4, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    n(54)("Uint32", 4, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    n(54)("Float32", 4, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    n(54)("Float64", 8, function (r) {
        return function (e, t, n) {
            return r(this, e, t, n)
        }
    })
}, function (e, t, n) {
    var r = n(6), i = n(45), a = n(12), c = (n(10).Reflect || {}).apply, s = Function.apply;
    r(r.S + r.F * !n(11)(function () {
        c(function () {
        })
    }), "Reflect", {
        apply: function (e, t, n) {
            var r = i(e), o = a(n);
            return c ? c(r, t, o) : s.call(r, t, o)
        }
    })
}, function (e, t, n) {
    var r = n(6), c = n(63), s = n(45), u = n(12), l = n(13), o = n(11), f = n(165),
        d = (n(10).Reflect || {}).construct, p = o(function () {
            function e() {
            }

            return !(d(function () {
            }, [], e) instanceof e)
        }), m = !o(function () {
            d(function () {
            })
        });
    r(r.S + r.F * (p || m), "Reflect", {
        construct: function (e, t) {
            s(e), u(t);
            var n = arguments.length < 3 ? e : s(arguments[2]);
            if (m && !p) return d(e, t, n);
            if (e == n) {
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                var r = [null];
                return r.push.apply(r, t), new (f.apply(e, r))
            }
            var o = n.prototype, i = c(l(o) ? o : Object.prototype), a = Function.apply.call(e, i, t);
            return l(a) ? a : i
        }
    })
}, function (e, t, n) {
    var r = n(26), o = n(6), i = n(12), a = n(55);
    o(o.S + o.F * n(11)(function () {
        Reflect.defineProperty(r.f({}, 1, {value: 1}), 1, {value: 2})
    }), "Reflect", {
        defineProperty: function (e, t, n) {
            i(e), t = a(t, !0), i(n);
            try {
                return r.f(e, t, n), !0
            } catch (e) {
                return !1
            }
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(47).f, i = n(12);
    r(r.S, "Reflect", {
        deleteProperty: function (e, t) {
            var n = o(i(e), t);
            return !(n && !n.configurable) && delete e[t]
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(12), i = function (e) {
        this._t = o(e), this._i = 0;
        var t, n = this._k = [];
        for (t in e) n.push(t)
    };
    n(172)(i, "Object", function () {
        var e, t = this._k;
        do {
            if (this._i >= t.length) return {value: void 0, done: !0}
        } while (!((e = t[this._i++]) in this._t));
        return {value: e, done: !1}
    }), r(r.S, "Reflect", {
        enumerate: function (e) {
            return new i(e)
        }
    })
}, function (e, t, n) {
    var a = n(47), c = n(65), s = n(38), r = n(6), u = n(13), l = n(12);
    r(r.S, "Reflect", {
        get: function e(t, n) {
            var r, o, i = arguments.length < 3 ? t : arguments[2];
            return l(t) === i ? t[n] : (r = a.f(t, n)) ? s(r, "value") ? r.value : void 0 !== r.get ? r.get.call(i) : void 0 : u(o = c(t)) ? e(o, n, i) : void 0
        }
    })
}, function (e, t, n) {
    var r = n(47), o = n(6), i = n(12);
    o(o.S, "Reflect", {
        getOwnPropertyDescriptor: function (e, t) {
            return r.f(i(e), t)
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(65), i = n(12);
    r(r.S, "Reflect", {
        getPrototypeOf: function (e) {
            return o(i(e))
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Reflect", {
        has: function (e, t) {
            return t in e
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(12), i = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function (e) {
            return o(e), !i || i(e)
        }
    })
}, function (e, t, n) {
    var r = n(6);
    r(r.S, "Reflect", {ownKeys: n(186)})
}, function (e, t, n) {
    var r = n(6), o = n(12), i = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function (e) {
            o(e);
            try {
                return i && i(e), !0
            } catch (e) {
                return !1
            }
        }
    })
}, function (e, t, n) {
    var s = n(26), u = n(47), l = n(65), f = n(38), r = n(6), d = n(58), p = n(12), m = n(13);
    r(r.S, "Reflect", {
        set: function e(t, n, r) {
            var o, i, a = arguments.length < 4 ? t : arguments[3], c = u.f(p(t), n);
            if (!c) {
                if (m(i = l(t))) return e(i, n, r, a);
                c = d(0)
            }
            if (f(c, "value")) {
                if (!1 === c.writable || !m(a)) return !1;
                if (o = u.f(a, n)) {
                    if (o.get || o.set || !1 === o.writable) return !1;
                    o.value = r, s.f(a, n, o)
                } else s.f(a, n, d(0, r));
                return !0
            }
            return void 0 !== c.set && (c.set.call(a, r), !0)
        }
    })
}, function (e, t, n) {
    var r = n(6), o = n(120);
    o && r(r.S, "Reflect", {
        setPrototypeOf: function (e, t) {
            o.check(e, t);
            try {
                return o.set(e, t), !0
            } catch (e) {
                return !1
            }
        }
    })
}, function (e, t, n) {
    n(387), e.exports = n(25).Array.includes
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(96)(!0);
    r(r.P, "Array", {
        includes: function (e) {
            return o(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), n(66)("includes")
}, function (e, t, n) {
    n(389), e.exports = n(25).Array.flatMap
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(390), i = n(33), a = n(22), c = n(45), s = n(174);
    r(r.P, "Array", {
        flatMap: function (e) {
            var t, n, r = i(this);
            return c(e), t = a(r.length), n = s(r, 0), o(n, r, r, t, 0, 1, e, arguments[1]), n
        }
    }), n(66)("flatMap")
}, function (e, t, n) {
    "use strict";
    var m = n(98), h = n(13), g = n(22), b = n(44), v = n(18)("isConcatSpreadable");
    e.exports = function e(t, n, r, o, i, a, c, s) {
        for (var u, l, f = i, d = 0, p = !!c && b(c, s, 3); d < o;) {
            if (d in r) {
                if (u = p ? p(r[d], d, n) : r[d], l = !1, h(u) && (l = void 0 !== (l = u[v]) ? !!l : m(u)), l && 0 < a) f = e(t, n, u, g(u.length), f, a - 1) - 1; else {
                    if (9007199254740991 <= f) throw TypeError();
                    t[f] = u
                }
                f++
            }
            d++
        }
        return f
    }
}, function (e, t, n) {
    n(392), e.exports = n(25).String.padStart
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(187), i = n(104), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
    r(r.P + r.F * a, "String", {
        padStart: function (e) {
            return o(this, e, 1 < arguments.length ? arguments[1] : void 0, !0)
        }
    })
}, function (e, t, n) {
    n(394), e.exports = n(25).String.padEnd
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(187), i = n(104), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
    r(r.P + r.F * a, "String", {
        padEnd: function (e) {
            return o(this, e, 1 < arguments.length ? arguments[1] : void 0, !1)
        }
    })
}, function (e, t, n) {
    n(396), e.exports = n(25).String.trimLeft
}, function (e, t, n) {
    "use strict";
    n(71)("trimLeft", function (e) {
        return function () {
            return e(this, 1)
        }
    }, "trimStart")
}, function (e, t, n) {
    n(398), e.exports = n(25).String.trimRight
}, function (e, t, n) {
    "use strict";
    n(71)("trimRight", function (e) {
        return function () {
            return e(this, 2)
        }
    }, "trimEnd")
}, function (e, t, n) {
    n(400), e.exports = n(116).f("asyncIterator")
}, function (e, t, n) {
    n(159)("asyncIterator")
}, function (e, t, n) {
    n(402), e.exports = n(25).Object.getOwnPropertyDescriptors
}, function (e, t, n) {
    var r = n(6), s = n(186), u = n(40), l = n(47), f = n(132);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, r = u(e), o = l.f, i = s(r), a = {}, c = 0; i.length > c;) void 0 !== (n = o(r, t = i[c++])) && f(a, t, n);
            return a
        }
    })
}, function (e, t, n) {
    n(404), e.exports = n(25).Object.values
}, function (e, t, n) {
    var r = n(6), o = n(188)(!1);
    r(r.S, "Object", {
        values: function (e) {
            return o(e)
        }
    })
}, function (e, t, n) {
    n(406), e.exports = n(25).Object.entries
}, function (e, t, n) {
    var r = n(6), o = n(188)(!0);
    r(r.S, "Object", {
        entries: function (e) {
            return o(e)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(180), n(408), e.exports = n(25).Promise.finally
}, function (e, t, n) {
    "use strict";
    var r = n(6), o = n(25), i = n(10), a = n(89), c = n(182);
    r(r.P + r.R, "Promise", {
        finally: function (t) {
            var n = a(this, o.Promise || i.Promise), e = "function" == typeof t;
            return this.then(e ? function (e) {
                return c(n, t()).then(function () {
                    return e
                })
            } : t, e ? function (e) {
                return c(n, t()).then(function () {
                    throw e
                })
            } : t)
        }
    })
}, function (e, t, n) {
    n(410), n(411), n(412), e.exports = n(25)
}, function (e, t, n) {
    var r = n(10), o = n(6), i = n(104), a = [].slice, c = /MSIE .\./.test(i), s = function (o) {
        return function (e, t) {
            var n = 2 < arguments.length, r = n && a.call(arguments, 2);
            return o(n ? function () {
                ("function" == typeof e ? e : Function(e)).apply(this, r)
            } : e, t)
        }
    };
    o(o.G + o.B + o.F * c, {setTimeout: s(r.setTimeout), setInterval: s(r.setInterval)})
}, function (e, t, n) {
    var r = n(6), o = n(138);
    r(r.G + r.B, {setImmediate: o.set, clearImmediate: o.clear})
}, function (e, t, n) {
    for (var r = n(135), o = n(61), i = n(35), a = n(10), c = n(39), s = n(72), u = n(18), l = u("iterator"), f = u("toStringTag"), d = s.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, m = o(p), h = 0; h < m.length; h++) {
        var g, b = m[h], v = p[b], y = a[b], S = y && y.prototype;
        if (S && (S[l] || c(S, l, d), S[f] || c(S, f, b), s[b] = d, v)) for (g in r) S[g] || i(S, g, r[g], !0)
    }
}, function (e, t, n) {
    (function (e) {
        function M(e) {
            return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var t = function (i) {
            "use strict";
            var s, e = Object.prototype, u = e.hasOwnProperty, t = "function" == typeof Symbol ? Symbol : {},
                o = t.iterator || "@@iterator", n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";

            function a(e, t, n, r) {
                var o = t && t.prototype instanceof c ? t : c, i = Object.create(o.prototype), a = new N(r || []);
                return i._invoke = function (i, a, c) {
                    var s = f;
                    return function (e, t) {
                        if (s === p) throw new Error("Generator is already running");
                        if (s === m) {
                            if ("throw" === e) throw t;
                            return k()
                        }
                        for (c.method = e, c.arg = t; ;) {
                            var n = c.delegate;
                            if (n) {
                                var r = T(n, c);
                                if (r) {
                                    if (r === h) continue;
                                    return r
                                }
                            }
                            if ("next" === c.method) c.sent = c._sent = c.arg; else if ("throw" === c.method) {
                                if (s === f) throw s = m, c.arg;
                                c.dispatchException(c.arg)
                            } else "return" === c.method && c.abrupt("return", c.arg);
                            s = p;
                            var o = l(i, a, c);
                            if ("normal" === o.type) {
                                if (s = c.done ? m : d, o.arg === h) continue;
                                return {value: o.arg, done: c.done}
                            }
                            "throw" === o.type && (s = m, c.method = "throw", c.arg = o.arg)
                        }
                    }
                }(e, n, a), i
            }

            function l(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            i.wrap = a;
            var f = "suspendedStart", d = "suspendedYield", p = "executing", m = "completed", h = {};

            function c() {
            }

            function g() {
            }

            function b() {
            }

            var v = {};
            v[o] = function () {
                return this
            };
            var y = Object.getPrototypeOf, S = y && y(y(C([])));
            S && S !== e && u.call(S, o) && (v = S);
            var w = b.prototype = c.prototype = Object.create(v);

            function E(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function I(s) {
                var t;
                this._invoke = function (n, r) {
                    function e() {
                        return new Promise(function (e, t) {
                            !function t(e, n, r, o) {
                                var i = l(s[e], s, n);
                                if ("throw" !== i.type) {
                                    var a = i.arg, c = a.value;
                                    return c && "object" === M(c) && u.call(c, "__await") ? Promise.resolve(c.__await).then(function (e) {
                                        t("next", e, r, o)
                                    }, function (e) {
                                        t("throw", e, r, o)
                                    }) : Promise.resolve(c).then(function (e) {
                                        a.value = e, r(a)
                                    }, function (e) {
                                        return t("throw", e, r, o)
                                    })
                                }
                                o(i.arg)
                            }(n, r, e, t)
                        })
                    }

                    return t = t ? t.then(e, e) : e()
                }
            }

            function T(e, t) {
                var n = e.iterator[t.method];
                if (n === s) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = s, T(e, t), "throw" === t.method)) return h;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return h
                }
                var r = l(n, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = s), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
            }

            function O(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function _(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function N(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(O, this), this.reset(!0)
            }

            function C(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, r = function e() {
                            for (; ++n < t.length;) if (u.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = s, e.done = !0, e
                        };
                        return r.next = r
                    }
                }
                return {next: k}
            }

            function k() {
                return {value: s, done: !0}
            }

            return g.prototype = w.constructor = b, b.constructor = g, b[r] = g.displayName = "GeneratorFunction", i.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
            }, i.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, r in e || (e[r] = "GeneratorFunction")), e.prototype = Object.create(w), e
            }, i.awrap = function (e) {
                return {__await: e}
            }, E(I.prototype), I.prototype[n] = function () {
                return this
            }, i.AsyncIterator = I, i.async = function (e, t, n, r) {
                var o = new I(a(e, t, n, r));
                return i.isGeneratorFunction(t) ? o : o.next().then(function (e) {
                    return e.done ? e.value : o.next()
                })
            }, E(w), w[r] = "Generator", w[o] = function () {
                return this
            }, w.toString = function () {
                return "[object Generator]"
            }, i.keys = function (n) {
                var r = [];
                for (var e in n) r.push(e);
                return r.reverse(), function e() {
                    for (; r.length;) {
                        var t = r.pop();
                        if (t in n) return e.value = t, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, i.values = C, N.prototype = {
                constructor: N, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = s, this.done = !1, this.delegate = null, this.method = "next", this.arg = s, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = s)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (n) {
                    if (this.done) throw n;
                    var r = this;

                    function e(e, t) {
                        return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = s), !!t
                    }

                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var o = this.tryEntries[t], i = o.completion;
                        if ("root" === o.tryLoc) return e("end");
                        if (o.tryLoc <= this.prev) {
                            var a = u.call(o, "catchLoc"), c = u.call(o, "finallyLoc");
                            if (a && c) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), h
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                _(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = s), h
                }
            }, i
        }("object" === M(e) ? e.exports : {});
        try {
            regeneratorRuntime = t
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    }).call(this, n(189)(e))
}, function (e, t, n) {
    n(415), e.exports = n(418).global
}, function (e, t, n) {
    var r = n(416);
    r(r.G, {global: n(417)})
}, function (e, t, n) {
    e.exports = n(17)(29)
}, function (e, t, n) {
    e.exports = n(17)(18)
}, function (e, t, n) {
    e.exports = n(17)(19)
}, function (e, t, n) {
    e.exports = n(17)(158)
}, function (e, t, n) {
    e.exports = n(17)(237)
}, function (e, t, n) {
    e.exports = n(17)(146)
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    e.exports = n.p + "images/b717bdafbcd91002093cff647deeaef3.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/5cffc9285c6c2fa869dc7a90bdf67346.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/7a426a57fbc458c90fd4d157e9290ee3.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/1c8c624b1b400a12999a69d1ae9e10e3.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/da4589987b6ca522f804194a4cf53d55.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/3eb16e9356de03c788feaa85ae97f39c.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/698f9167ea4c817c5577bbdb413c1583.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/46d5c7fe00c41eed4ac947d49f8d9184.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/7b9b2b717b9e2179ff9fc76f6bfc8950.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/73183d2d734015ebefee201daf64fe83.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/22f1e5314ee53afb36a74a081e7493e6.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/4dd4583bf09525a0999e8516d8aed0f3.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/e436d87b0013557336a7ea22c92235f2.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/d217d3d6d066a820e98997ee153ca46e.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/0dafc52e72fbda88140d029a803d7b65.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/2772d86f7990496ee387c53375bcbc28.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/da9f2ff27f815fc40498863fd32d80b3.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/1ca2f8f5c2b74bba8f714e1b45b60fb3.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/f8b5f1d9e0f6e942d945896ebc0dce54.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/2eeaf8e711d81521198823bf2f9b3bd4.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/1bca740b50de2f0f2064a415d0e6df50.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/61c3ff5fc0add758fc4c0b0b2535e39d.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/82e9157510d4630ebf8bfb8cc4fe6ac3.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/c16a75de4274a69f18ccad6011bb344e.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/8d11b12fcbad75fd827c6b2a6f217717.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/716f9f99a6634e4cd92ffcfa4fe726c6.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/cdc91bbbdd4cebecebb5409cb8b0dd40.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/970d84e4e05745b0266dceb11aa693ce.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/30015f8f8bb234b01add7cccc053aaaf.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/5d2950857a61c4f3b5d60a4a33dad879.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/89637a8a67bd432e6b6cd91b8ad217e9.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/893e9abd828ac5627ae3d7a40ddf878c.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/17af5cd347e56da8a3d46d9c700dd9ec.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/0fa5c0802c5c3a44cff1d7624476e66e.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/f2fdf9569392350511cbb7f437eee005.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/5c2f946f4e256ca0924da72a02ff4f22.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/158fa41e49292ecc38144d544370a5a8.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/d21cc721345748d9e041a689d7d7b57d.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/78009e68bfb209b313cc175bc7b1f757.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/7e59b1b40da37d4f36d6319cc13701a1.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/99e53b5613b2bb64c20d67a7ec7d7543.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/565f19b31445a1fb0a696623a67ea5f6.gif"
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(241), n(419), n(420), n(421), n(107);
    var r = n(190), o = n(14), i = n(30), a = n(0), p = n.n(a), c = n(20), s = n.n(c), u = n(15), l = n(1),
        f = (n(471), n(2)), m = n(16), d = (n(472), n(91)), E = n(5), h = n(77);
    n(473), n(474);

    function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t) {
        return !t || "object" !== g(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var w = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), v(this, y(t).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(t, a["Component"]), function (e, t, n) {
            t && b(e.prototype, t), n && b(e, n)
        }(t, [{
            key: "render", value: function () {
                var e = this.props, t = e.activeTab, n = e.changeTab, r = e.chatList, o = e.groupStore, i = !1,
                    a = r.chatList.some(function (e) {
                        if ("GROUP" !== e.contactType) return e.uid === E.f ? (i = 0 < Number(e.count), !1) : 0 < Number(e.count);
                        var t = o[e.uid];
                        return (!t || !t.mySelf || "Discard" !== t.mySelf.msgFlagEn) && e.count
                    });
                return p.a.createElement("ul", {className: "header-tab"}, p.a.createElement("li", {
                    className: "header-tab-item header-tab-chatlist".concat("chatList" === t ? " active" : ""),
                    onClick: function () {
                        n("chatList")
                    }
                }, p.a.createElement("i", {className: "header-tab-item-icon"}), "chatList666666" === t && a ? p.a.createElement("i", {className: "header-tab-item-tip"}) : null, p.a.createElement("i", {className: "header-tab-item-line".concat("chatList" === t ? " active" : "")})), p.a.createElement("li", {
                    className: "header-tab-item header-tab-friendlist".concat("friendList" === t ? " active" : ""),
                    onClick: function () {
                        n("friendList")
                    }
                }, "friendList" !== t && i ? p.a.createElement("i", {className: "header-tab-item-tip"}) : null, p.a.createElement("i", {className: "header-tab-item-icon"}), p.a.createElement("i", {className: "header-tab-item-line".concat("friendList" === t ? " active" : "")})))
            }
        }]), t
    }();
    w.defaultProps = {
        activeTab: void 0, changeTab: function () {
        }, chatList: void 0, groupStore: void 0
    }, w.propTypes = {
        activeTab: f.PropTypes.node,
        changeTab: f.PropTypes.func,
        chatList: f.PropTypes.object,
        groupStore: f.PropTypes.object
    };
    var I = n(50), T = n(51), O = n(32), _ = n.n(O), N = n(111), C = n.n(N), k = n(150), M = n.n(k);

    function L(e) {
        return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function A(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function P(e, t) {
        return !t || "object" !== L(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function j(e) {
        return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function R(e, t) {
        return (R = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var x = Object(a.lazy)(function () {
        return n.e(7).then(n.bind(null, 577))
    }), D = function (e) {
        function i() {
            var e, t;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (t = P(this, (e = j(i)).call.apply(e, [this].concat(r)))).linkToMotorcade = function (e) {
                window.open("".concat(E.k, "/").concat(e), "_blank")
            }, t.renderUserInfo = function () {
                var e = t.props.userInfo;
                return p.a.createElement("div", {className: _.a.userHeader}, p.a.createElement("div", {
                    className: _.a.userAvatarWrapper,
                    onClick: function () {
                        return Object(E.i)(e.uid)
                    }
                }, p.a.createElement(T.a, {
                    src: e.icon || M.a,
                    className: _.a.userAvatar,
                    errorsrc: M.a
                }), p.a.createElement("span", {className: _.a.userName}, e.nickname)), p.a.createElement(a.Suspense, {fallback: p.a.createElement(h.a, null)}, p.a.createElement(x, null)))
            }, t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && R(e, t)
        }(i, a["PureComponent"]), function (e, t, n) {
            t && A(e.prototype, t), n && A(e, n)
        }(i, [{
            key: "renderMotorcadeInfo", value: function () {
                var e = this, t = this.props.motorcade;
                return t ? p.a.createElement("div", {
                    className: _.a.motorcadeHeader, onClick: function () {
                        return e.linkToMotorcade("#/motorcade/".concat(encodeURIComponent(t.groupId)))
                    }
                }, p.a.createElement("div", {className: _.a.motorcadeAvatarWrapper}, p.a.createElement(T.a, {
                    src: t.faceUrl || C.a,
                    className: _.a.motorcadeAvatar,
                    errorsrc: C.a
                }), p.a.createElement("span", {className: _.a.motorcadeName}, t.name)), p.a.createElement("i", {className: _.a.enterIcon})) : null === t ? p.a.createElement("div", {
                    className: _.a.motorcadeHeader,
                    onClick: function () {
                        return e.linkToMotorcade("#/motorcade/list/formal")
                    }
                }, p.a.createElement("div", {className: _.a.motorcadeAvatarWrapper}, p.a.createElement(T.a, {
                    src: C.a,
                    className: _.a.motorcadeAvatar
                }), p.a.createElement("span", {className: _.a.motorcadeName}, "斗鱼车队")), p.a.createElement("i", {className: _.a.enterIcon})) : null
            }
        }, {
            key: "render", value: function () {
                return window.isfullmode ? this.renderUserInfo() : this.renderMotorcadeInfo()
            }
        }]), i
    }();
    D.defaultProps = {motorcade: null, userInfo: {}}, D.propTypes = {
        motorcade: f.PropTypes.object,
        userInfo: f.PropTypes.object
    };
    var G = Object(I.createSelector)(function (e) {
        return e.friendList
    }, function (e) {
        return e.groupStore.groupStore
    }, function (e) {
        return e.userInfo
    }, function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            n = 2 < arguments.length ? arguments[2] : void 0;
        return {
            motorcade: e.groupList.map(function (e) {
                return t[e]
            }).filter(function (e) {
                return "isCarTeam" === Object(E.d)(e.groupId)
            })[0] || null, userInfo: n
        }
    });
    var F = Object(u.connect)(function (e) {
        return G(e)
    })(D), U = n(19), H = n(27), W = n(24), B = n.n(W);

    function V(e) {
        return (V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function q(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function z(e, t) {
        return !t || "object" !== V(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function Y(e) {
        return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function J(e, t) {
        return (J = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var K = function (e) {
        function i() {
            var e, r;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            return (r = z(this, (e = Y(i)).call.apply(e, [this].concat(n)))).showChatDetail = function (e) {
                var t = r.props.dispatch;
                t(l.x.hide()), e.groupId ? t(l.c.showGroupChatDetail(e.groupId, !0)) : t(l.c.showChatDetail(e.uid, !0)), t(l.w.setValue(""))
            }, r.renderMotorcade = function () {
                var e = r.props, t = e.searchValue, n = e.motorcade;
                return n && n.name && 0 <= n.name.indexOf(t) ? p.a.createElement("div", {className: B.a.searchItemWrap}, p.a.createElement("h4", null, "车队"), r.renderItem(n)) : null
            }, r.renderGroupList = function () {
                var e = r.props, t = e.searchValue, n = e.groupList.filter(function (e) {
                    return e.name && 0 <= e.name.indexOf(t)
                });
                return n.length ? p.a.createElement("div", {className: B.a.searchItemWrap}, p.a.createElement("h4", null, "粉丝群"), n.map(function (e) {
                    return r.renderItem(e)
                })) : null
            }, r.renderFriendList = function () {
                var e = r.props, t = e.searchValue, n = e.friendList.filter(function (e) {
                    return !!(e.remark_name && 0 <= e.remark_name.indexOf(t)) || !!(e.nickname && 0 <= e.nickname.indexOf(t)) && (Object.assign(e, {selectedNickname: !0}), !0)
                });
                return n.length ? p.a.createElement("div", {className: B.a.searchItemWrap}, p.a.createElement("h4", null, "好友"), n.map(function (e) {
                    return e.selectedNickname && e.remark_name ? r.renderNickItem(Object.assign(e, {
                        faceUrl: e.img,
                        name: e.remark_name
                    })) : r.renderItem(Object.assign(e, {faceUrl: e.img, name: e.remark_name || e.nickname}))
                })) : null
            }, r.renderNickItem = function (e) {
                return p.a.createElement("div", {
                    className: B.a.searchItem, onClick: function () {
                        return r.showChatDetail(e)
                    }
                }, p.a.createElement(U.b, {
                    userItem: e,
                    className: B.a.searchAvatar,
                    wrapperClassName: B.a.searchNickAvatarWrap
                }), p.a.createElement("div", {className: B.a.searchNickNameWrap}, p.a.createElement("span", {className: B.a.searchNickName}, e.name), p.a.createElement("span", {className: B.a.searchNickName}, "昵称: ", e.nickname)))
            }, r.renderItem = function (e) {
                return p.a.createElement("div", {
                    className: B.a.searchItem, onClick: function () {
                        return r.showChatDetail(e)
                    }
                }, p.a.createElement(U.b, {
                    userItem: e,
                    className: B.a.searchAvatar,
                    wrapperClassName: B.a.searchAvatarWrap
                }), p.a.createElement("span", {className: B.a.searchName}, e.name))
            }, r.renderNoResult = function () {
                return p.a.createElement("div", {className: B.a.noResult}, p.a.createElement("span", null, "无搜索结果"))
            }, r.renderContent = function () {
                return null === r.renderMotorcade() && null === r.renderGroupList() && null === r.renderFriendList() ? r.renderNoResult() : p.a.createElement(H.a, {
                    ref: function (e) {
                        r.memberListDom = e
                    }, style: {height: 294}
                }, r.renderMotorcade(), r.renderFriendList(), r.renderGroupList())
            }, r
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && J(e, t)
        }(i, a["PureComponent"]), function (e, t, n) {
            t && q(e.prototype, t), n && q(e, n)
        }(i, [{
            key: "render", value: function () {
                return p.a.createElement("div", {className: B.a.searchResultWrap}, this.renderContent())
            }
        }]), i
    }();

    function Q(e) {
        return (Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function $(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function X(e, t) {
        return !t || "object" !== Q(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function Z(e) {
        return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ee(e, t) {
        return (ee = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    K.defaultProps = {
        dispatch: function () {
        }, groupList: [], motorcade: void 0, friendList: [], searchValue: ""
    }, K.propTypes = {
        dispatch: f.PropTypes.func,
        groupList: f.PropTypes.array,
        friendList: f.PropTypes.array,
        motorcade: f.PropTypes.object,
        searchValue: f.PropTypes.string
    };
    var te = /\s/g, ne = function (e) {
        function i() {
            var e, r;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            return (r = X(this, (e = Z(i)).call.apply(e, [this].concat(n)))).inputDom = void 0, r.clearInput = function () {
                (0, r.props.dispatch)(l.w.setValue(""))
            }, r.searchInputChange = function (e) {
                var t = r.props.dispatch, n = e;
                n = n.replace(te, ""), t(l.w.setValue(n))
            }, r
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ee(e, t)
        }(i, a["PureComponent"]), function (e, t, n) {
            t && $(e.prototype, t), n && $(e, n)
        }(i, [{
            key: "render", value: function () {
                var t = this, e = this.props.searchValue;
                return p.a.createElement("div", {
                    className: B.a.searchWrap,
                    id: "searchWrapDom"
                }, p.a.createElement("i", {className: B.a.searchIcon}), "" !== e ? p.a.createElement("i", {
                    className: B.a.delete,
                    onClick: this.clearInput
                }) : null, p.a.createElement("input", {
                    type: "text",
                    className: B.a.inputArea,
                    placeholder: "搜索好友、粉丝群或车队",
                    value: e,
                    ref: function (e) {
                        t.inputDom = e
                    },
                    onChange: function () {
                        return t.searchInputChange(t.inputDom.value)
                    },
                    onKeyDown: this.searchKeyDown
                }), "" !== e ? p.a.createElement(K, this.props) : null)
            }
        }]), i
    }();
    ne.defaultProps = {
        dispatch: function () {
        }, searchValue: ""
    }, ne.propTypes = {dispatch: f.PropTypes.func, searchValue: f.PropTypes.string};
    var re = Object(I.createSelector)(function (e) {
        return e.userStore.userStore
    }, function (e) {
        return e.friendList
    }, function (e) {
        return e.groupStore.groupStore
    }, function (e) {
        return e.search.value
    }, function () {
        var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            o = 3 < arguments.length ? arguments[3] : void 0;
        e = n.friendList.map(function (e) {
            return t[e]
        });
        var i = n.groupList.map(function (e) {
            return r[e]
        });
        return {
            friendList: e, groupList: i.filter(function (e) {
                return "isCommonGroup" === Object(E.d)(e.groupId)
            }), motorcade: i.filter(function (e) {
                return "isCarTeam" === Object(E.d)(e.groupId)
            })[0], searchValue: o
        }
    });
    var oe = Object(u.connect)(function (e) {
        return re(e)
    })(ne), ie = n(80), ae = n(81), ce = n(23);
    n(476);

    function se(e) {
        return (se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function le(e, t) {
        return !t || "object" !== se(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function fe(e) {
        return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function de(e, t) {
        return (de = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var pe = null, me = !localStorage.getItem("shownDeleteChatTip"), he = !1;

    function ge() {
        pe && (s.a.unmountComponentAtNode(pe) && pe.parentNode && (pe.parentNode.removeChild(pe), pe = null))
    }

    var be = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), le(this, fe(t).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && de(e, t)
        }(t, a["PureComponent"]), function (e, t, n) {
            t && ue(e.prototype, t), n && ue(e, n)
        }(t, [{
            key: "render", value: function () {
                return p.a.createElement("div", {className: "delete-chat-wrap"}, p.a.createElement("div", {className: "delete-chat-mark"}), p.a.createElement("div", {className: "delete-chat-tip ".concat(window.isfullmode ? "" : "delete-chat-tip-small", " ").concat(he ? "delete-chat-tip-aaa" : "")}, p.a.createElement("div", {className: "delete-chat-close"}), p.a.createElement("div", {className: "delete-chat-tip-body"}, "鼠标悬浮在消息列表，就可以删除啦~"), p.a.createElement("div", {className: "delete-chat-tip-footer"}, p.a.createElement(ce.a, {
                    className: "delete-chat-tip-btn",
                    onClick: ge
                }, "我知道了"))))
            }
        }]), t
    }();
    be.defaultProps = {}, be.propTypes = {};
    var ve = {
            show: function (e) {
                me && (me = !1, localStorage.setItem("shownDeleteChatTip", !0), pe = document.createElement("div"), document.body.appendChild(pe), he = e, s.a.render(p.a.createElement(be, null), pe))
            }, close: ge
        }, ye = (n(477), n(109)), Se = n(4), we = n(31), Ee = (n(478), n(78)), Ie = n(3), Te = n(8), Oe = n(140),
        _e = n(76);

    function Ne(e) {
        return (Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ce(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ke(e) {
        return (ke = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Me(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Le(e, t) {
        return (Le = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Ae = E.p[0], Pe = function (e) {
        function t(e) {
            var a;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (a = function (e, t) {
                return !t || "object" !== Ne(t) && "function" != typeof t ? Me(e) : t
            }(this, ke(t).call(this, e))).getStrangeMsgTime = function () {
                var e = a.props.strangerList;
                if (!e.length) return "";
                for (var t = 0, n = 0; n < e.length; n++) e[n].time > t && (t = e[n].time);
                return t || ""
            }, a.filterTextTags = function (e) {
                return e.replace(/<br\/?>/g, "").replace(/<\/?a.*?>/g, "")
            }, a.isSystem = function (e) {
                return "string" == typeof e && -1 < e.indexOf("SYSTEM")
            }, a.renderItemContent = function () {
                var e = a.props.item, t = e.msgShow, n = e.sending, r = e.isFail;
                if (n) return '<span><i class="cl-content-sending"></i>'.concat(t, "</span>");
                if (r) return '<span><i class="cl-content-fail"></i>'.concat(t, "</span>");
                if (e.uid === E.f) return t ? "".concat(t, " 申请添加您为好友") : null !== t && e.count ? "您有 ".concat(e.count, " 条好友申请") : "还没有人请求添加你为好友";
                if (e.uid === Ae) {
                    if (!t) return "鲨鱼娘还没有来过哦"
                } else if ("SYSTEM_1000" === e.uid) {
                    if (!t) return "您还没有收到视频通知"
                } else if ("SYSTEM_1008" === e.uid) {
                    if (!t) return "您还没有收到斗鱼车队官方通知"
                } else if (!(e.uid !== E.g || t && e.count)) return "没有新消息";
                return -1 !== e.uid.indexOf("SYSTEM_") ? t && a.filterTextTags(t) : t && Object(E.e)(t)
            }, a.renderSmallMode = function () {
                var e = a.props, t = e.isStranger, n = e.item, r = e.chatWithId, o = e.isLastOne,
                    i = "chat-list-item ".concat(n.uid === r ? "active" : "");
                return n.loading ? p.a.createElement("div", null) : p.a.createElement("div", {
                    key: "cl-".concat(n.uid),
                    onClick: a.showChatDetail,
                    className: i
                }, p.a.createElement("div", {
                    href: "#",
                    className: "cl-item-delete",
                    onClick: a.deleteChat
                }, p.a.createElement("i", null)), p.a.createElement("div", {className: "cl-item-avatar-wrap"}, p.a.createElement(U.b, {
                    userItem: n,
                    className: "cl-item-avatar",
                    wrapperClassName: "cl-item-avatar-wrapper"
                }), n.approve ? p.a.createElement("div", {className: "cl-item-v"}, p.a.createElement(_e.a, null)) : null, n.approve || "1" !== n.identity ? null : p.a.createElement("div", {className: "cl-item-v"}, p.a.createElement(Oe.a, null))), p.a.createElement("div", {className: "cl-item-profile-wrapper"}, p.a.createElement("span", {className: "cl-item-username cl-item-username-small"}, a.renderItemName()), p.a.createElement("span", {className: "cl-item-tip-small"}, p.a.createElement(Ee.a, {
                    isStranger: t,
                    messageItem: n
                }))), o ? null : p.a.createElement("div", {className: "cl-item-line cl-item-line-small"}))
            }, a.renderFullMode = function () {
                var e = a.props, t = e.isStranger, n = e.item, r = e.chatWithId, o = e.isLastOne,
                    i = "chat-list-item ".concat(n.uid === r ? "active" : "");
                return n.loading ? p.a.createElement("div", null) : p.a.createElement("div", {
                    key: "cl-".concat(n.uid),
                    onClick: a.showChatDetail,
                    className: i
                }, p.a.createElement("div", {
                    href: "#",
                    className: "cl-item-delete",
                    onClick: a.deleteChat
                }, p.a.createElement("i", null)), p.a.createElement("div", {className: "cl-item-avatar-wrap"}, p.a.createElement(U.b, {
                    userItem: n,
                    className: "cl-item-avatar",
                    wrapperClassName: "cl-item-avatar-wrapper"
                }), n.approve ? p.a.createElement("div", {className: "cl-item-v"}, p.a.createElement(_e.a, null)) : null, n.approve || "1" !== n.identity ? null : p.a.createElement("div", {className: "cl-item-v"}, p.a.createElement(Oe.a, null))), p.a.createElement("div", {className: "cl-item-profile-wrapper"}, p.a.createElement("div", {className: "cl-item-profile"}, p.a.createElement("div", {className: "cl-item-profile-header"}, p.a.createElement("span", {className: "cl-item-username ".concat(a.isSystem(n.uid) ? "system" : "")}, a.renderItemName()), a.isSystem(n.uid) ? null : p.a.createElement(_e.b, {
                    userItem: n,
                    className: "cl-item-level"
                }), p.a.createElement("span", {className: "cl-item-time"}, Object(Te.b)(n.time))), p.a.createElement("div", {className: "cl-item-content-wrapper"}, p.a.createElement("div", {
                    className: "cl-item-content",
                    dangerouslySetInnerHTML: {__html: a.renderItemContent()}
                }), p.a.createElement(Ee.a, {
                    isStranger: t,
                    messageItem: n
                })))), o ? null : p.a.createElement("div", {className: "cl-item-line"}))
            }, ["showChatDetail", "renderItemName", "deleteChat", "deleteChatFn"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, Me(a)), a
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Le(e, t)
        }(t, a["PureComponent"]), function (e, t, n) {
            t && Ce(e.prototype, t), n && Ce(e, n)
        }(t, [{
            key: "showChatDetail", value: function (e) {
                e.preventDefault();
                var t = this.props, n = t.item, r = t.dispatch, o = n.uid;
                n.unknow ? (Ie.a.notice("该用户不属于本系统"), r(l.c.clearUnread(o))) : o === E.m ? (r(l.x.show()), r(l.f.changeType())) : o === E.l ? (r(l.u.show()), r(l.f.changeType())) : r(l.c.showChatDetail(o))
            }
        }, {
            key: "deleteChat", value: function (e) {
                e.stopPropagation();
                var t = this.props, n = t.item, r = t.chatWithId, o = t.dispatch, i = this;
                if (n.uid === E.m) {
                    var a = l.g.getState().strangerList.strangerList;
                    a.length && a.map(function (e) {
                        return i.deleteChatFn(e.uid)
                    })
                } else if (n.uid === E.l) {
                    var c = l.g.getState().officialList.officialList;
                    c.length && c.map(function (e) {
                        return i.deleteChatFn(e.uid)
                    })
                } else r === n.uid && o(l.f.changeType()), this.deleteChatFn(n.uid)
            }
        }, {
            key: "deleteChatFn", value: function (t) {
                var n = this.props.dispatch, e = {To_Account: t, chatType: 1};
                webim.deleteChat(e, function () {
                    var e;
                    n(l.c.clearUnread(t)), "none" === l.g.getState().containerRight.type ? webim.setAutoRead(null, !1, !0) : (e = l.g.getState().chatDetail.isGroup ? webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.GROUP, t) : webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.C2C, t), webim.setAutoRead(e, !0, !0)), n(l.d.deleteChat(t))
                })
            }
        }, {
            key: "renderItemName", value: function () {
                var e = this.props.item;
                return e.uid === E.m ? "陌生人消息" : e.uid === E.f ? "好友申请" : e.uid === E.g ? "群审核助手" : e.uid === E.l ? "官方号消息" : e.remark_name || e.nickname
            }
        }, {
            key: "render", value: function () {
                return window.isfullmode ? this.renderFullMode() : this.renderSmallMode()
            }
        }]), t
    }();

    function je(e) {
        return (je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Re(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function xe(e) {
        return (xe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function De(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Ge(e, t) {
        return (Ge = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    Pe.defaultProps = {
        dispatch: function () {
        }, item: void 0, chatWithId: void 0, isStranger: void 0, strangerList: [], isLastOne: !1
    }, Pe.propTypes = {
        dispatch: f.PropTypes.func,
        item: f.PropTypes.object,
        chatWithId: f.PropTypes.node,
        isStranger: f.PropTypes.bool,
        strangerList: f.PropTypes.array,
        isLastOne: f.PropTypes.bool
    };
    var Fe = we.a.unknowUser, Ue = !1, He = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== je(t) && "function" != typeof t ? De(e) : t
            }(this, xe(n).call(this, e))).returnToChatList = t.returnToChatList.bind(De(t)), t.scrollBar = p.a.createRef(), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ge(e, t)
        }(n, a["PureComponent"]), function (e, t, n) {
            t && Re(e.prototype, t), n && Re(e, n)
        }(n, [{
            key: "componentDidUpdate", value: function () {
                var e = this.scrollBar.current;
                e && e.update && e.update()
            }
        }, {
            key: "returnToChatList", value: function () {
                var e = this.props.dispatch;
                e(l.f.changeType()), e(l.x.hide())
            }
        }, {
            key: "renderStrangerListItem", value: function () {
                var e = this.props, t = e.strangerList, n = e.dispatch, r = e.chatWithId, o = e.strangerListLoading,
                    i = e.loading;
                if (o || i) return p.a.createElement(m.a, {
                    spinning: !0,
                    className: "chat-list-wrapper",
                    contentClassName: "chat-list"
                });
                var a = t.length;
                return t.map(function (e, t) {
                    return p.a.createElement(Pe, {
                        key: "sl-".concat(e.uid),
                        isStranger: !0,
                        item: e,
                        dispatch: n,
                        chatWithId: r,
                        isLastOne: t === a - 1
                    })
                })
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.strangerList, n = e.show;
                return p.a.createElement(ye.default, {
                    transitionName: "slide-right",
                    component: ""
                }, n && t ? p.a.createElement("div", {className: "stranger-list"}, p.a.createElement("div", {className: "stranger-list-header"}, p.a.createElement("div", {
                    className: "stranger-list-return",
                    onClick: this.returnToChatList
                }, p.a.createElement("i", {className: "stranger-list-return-icon"}), p.a.createElement("span", null, "返回"))), p.a.createElement("div", {className: "stranger-list-body"}, p.a.createElement(H.a, {
                    className: "stranger-list-content",
                    ref: this.scrollBar
                }, this.renderStrangerListItem()))) : null)
            }
        }]), n
    }();
    He.defaultProps = {
        dispatch: function () {
        }, strangerList: void 0, chatWithId: null, strangerListLoading: !0, loading: !1, show: !1
    }, He.propTypes = {
        dispatch: f.PropTypes.func,
        strangerList: f.PropTypes.array,
        chatWithId: f.PropTypes.node,
        strangerListLoading: f.PropTypes.bool,
        loading: f.PropTypes.bool,
        show: f.PropTypes.bool
    };
    var We = !0, Be = {}, Ve = Object(I.createSelector)(function (e) {
        return e.strangerList
    }, function (e) {
        return e.userStore
    }, function (e, t) {
        var n = e.show;
        if (e.show) {
            var r, o = e.strangerList || [], i = t.userStore, a = [];
            return r = o.map(function (e) {
                return i[e.uid] ? Object.assign({}, e, i[e.uid]) : (Be[e.uid] || (a.push(e.uid), Be[e.uid] = !0), Object.assign({}, e, Fe))
            }), a.length ? Se.a.fetchUserInfoAndRefreshStore(a).then(function () {
                Ue = !0, l.g.dispatch(l.x.show())
            }) : We && (Ue = !0), We = !1, {strangerList: r, show: n, strangerListLoading: !Ue}
        }
        return {show: !1, strangerListLoading: !0}
    });
    var qe = Object(u.connect)(function (e) {
        return Ve(e)
    })(He);
    n(481);

    function ze(e) {
        return (ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ye(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Je(e) {
        return (Je = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ke(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Qe(e, t) {
        return (Qe = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var $e = we.a.unknowUser, Xe = !1, Ze = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== ze(t) && "function" != typeof t ? Ke(e) : t
            }(this, Je(n).call(this, e))).returnToChatList = t.returnToChatList.bind(Ke(t)), t.scrollBar = p.a.createRef(), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Qe(e, t)
        }(n, a["PureComponent"]), function (e, t, n) {
            t && Ye(e.prototype, t), n && Ye(e, n)
        }(n, [{
            key: "componentDidUpdate", value: function () {
                var e = this.scrollBar.current;
                e && e.update && e.update()
            }
        }, {
            key: "returnToChatList", value: function () {
                var e = this.props.dispatch;
                e(l.f.changeType()), e(l.u.hide())
            }
        }, {
            key: "renderStrangerListItem", value: function () {
                var e = this.props, t = e.officialList, n = e.dispatch, r = e.chatWithId, o = e.officialListLoading,
                    i = e.loading;
                if (o || i) return p.a.createElement(m.a, {
                    spinning: !0,
                    className: "chat-list-wrapper",
                    contentClassName: "chat-list"
                });
                var a = t.length;
                return t.map(function (e, t) {
                    return p.a.createElement(Pe, {
                        key: "sl-".concat(e.uid),
                        isStranger: !0,
                        item: e,
                        dispatch: n,
                        chatWithId: r,
                        isLastOne: t === a - 1
                    })
                })
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.officialList, n = e.show;
                return p.a.createElement(ye.default, {
                    transitionName: "slide-right",
                    component: ""
                }, n && t ? p.a.createElement("div", {className: "official-list"}, p.a.createElement("div", {className: "official-list-header"}, p.a.createElement("div", {
                    className: "official-list-return",
                    onClick: this.returnToChatList
                }, p.a.createElement("i", {className: "official-list-return-icon"}), p.a.createElement("span", null, "返回"))), p.a.createElement("div", {className: "official-list-body"}, p.a.createElement(H.a, {
                    className: "official-list-content",
                    ref: this.scrollBar
                }, this.renderStrangerListItem()))) : null)
            }
        }]), n
    }();
    Ze.defaultProps = {
        dispatch: function () {
        }, officialList: void 0, chatWithId: null, officialListLoading: !0, loading: !1, show: !1
    }, Ze.propTypes = {
        dispatch: f.PropTypes.func,
        officialList: f.PropTypes.array,
        chatWithId: f.PropTypes.node,
        officialListLoading: f.PropTypes.bool,
        loading: f.PropTypes.bool,
        show: f.PropTypes.bool
    };
    var et = !0, tt = {}, nt = Object(I.createSelector)(function (e) {
        return e.officialList
    }, function (e) {
        return e.userStore
    }, function (e, t) {
        var n = e.show;
        if (e.show) {
            var r, o = e.officialList || [], i = t.userStore, a = [];
            return r = o.map(function (e) {
                return i[e.uid] ? Object.assign({}, e, i[e.uid]) : (tt[e.uid] || (a.push(e.uid), tt[e.uid] = !0), Object.assign({}, e, $e))
            }), a.length ? Se.a.fetchUserInfoAndRefreshStore(a).then(function () {
                Xe = !0, l.g.dispatch(l.u.show())
            }) : et && (Xe = !0), et = !1, {officialList: r, show: n, officialListLoading: !Xe}
        }
        return {show: !1, officialListLoading: !0}
    });
    var rt = Object(u.connect)(function (e) {
        return nt(e)
    })(Ze), ot = n(151), it = n.n(ot);

    function at(e) {
        return (at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ct(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function st(e) {
        return (st = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ut(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function lt(e, t) {
        return (lt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var ft = function (e) {
        function t(e) {
            var a;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (a = function (e, t) {
                return !t || "object" !== at(t) && "function" != typeof t ? ut(e) : t
            }(this, st(t).call(this, e))).renderSmallMode = function () {
                var e = a.props, t = e.isStranger, n = e.item, r = e.chatWithId, o = e.isLastOne,
                    i = "chat-list-item ".concat(n.uid === r ? "active" : "");
                return n.loading ? p.a.createElement("div", null) : ("" === n.faceUrl && (n.faceUrl = it.a), p.a.createElement("div", {
                    key: "cl-".concat(n.uid),
                    onClick: a.showGroupChatDetail,
                    className: i
                }, p.a.createElement("div", {
                    href: "#",
                    className: "cl-item-delete",
                    onClick: a.deleteChat
                }, p.a.createElement("i", null)), p.a.createElement("div", {className: "cl-item-avatar-wrap"}, p.a.createElement(U.b, {
                    userItem: n,
                    className: "cl-item-avatar",
                    wrapperClassName: "cl-item-avatar-wrapper"
                })), p.a.createElement("div", {className: "cl-item-profile-wrapper"}, p.a.createElement("span", {className: "cl-item-username cl-item-username-small"}, a.renderItemName()), p.a.createElement("span", {className: "cl-item-tip-small"}, p.a.createElement(Ee.a, {
                    isStranger: t,
                    messageItem: n
                }))), o ? null : p.a.createElement("div", {className: "cl-item-line cl-item-line-small"})))
            }, a.renderFullMode = function () {
                var e = a.props, t = e.isStranger, n = e.item, r = e.chatWithId, o = e.isLastOne,
                    i = "chat-list-item ".concat(n.uid === r ? "active" : "");
                return n.loading ? p.a.createElement("div", null) : ("" === n.faceUrl && (n.faceUrl = it.a), p.a.createElement("div", {
                    key: "cl-".concat(n.uid),
                    onClick: a.showGroupChatDetail,
                    className: i
                }, p.a.createElement("div", {
                    href: "#",
                    className: "cl-item-delete",
                    onClick: a.deleteChat
                }, p.a.createElement("i", null)), p.a.createElement("div", {className: "cl-item-avatar-wrap"}, p.a.createElement(U.b, {
                    userItem: n,
                    className: "cl-item-avatar",
                    wrapperClassName: "cl-item-avatar-wrapper"
                })), p.a.createElement("div", {className: "cl-item-profile-wrapper"}, p.a.createElement("div", {className: "cl-item-profile"}, p.a.createElement("div", {className: "cl-item-profile-header"}, p.a.createElement("span", {className: "cl-item-username group"}, a.renderItemName()), p.a.createElement("span", {className: "cl-item-time"}, Object(Te.b)(n.time))), p.a.createElement("div", {className: "cl-item-content-wrapper"}, p.a.createElement("div", {
                    className: "cl-item-content",
                    dangerouslySetInnerHTML: {__html: a.renderItemContent()}
                }), p.a.createElement(Ee.a, {
                    isStranger: t,
                    messageItem: n
                })))), o ? null : p.a.createElement("div", {className: "cl-item-line"})))
            }, ["showGroupChatDetail", "renderItemName", "deleteChat"].forEach(function (e) {
                this[e] && (this[e] = this[e].bind(this))
            }, ut(a)), a
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && lt(e, t)
        }(t, a["PureComponent"]), function (e, t, n) {
            t && ct(e.prototype, t), n && ct(e, n)
        }(t, [{
            key: "showGroupChatDetail", value: function (e) {
                e.preventDefault();
                var t = this.props, n = t.item;
                (0, t.dispatch)(l.c.showGroupChatDetail(n.uid))
            }
        }, {
            key: "deleteChat", value: function (e) {
                e.stopPropagation();
                var t = this.props, n = t.item, r = t.dispatch, o = t.chatWithId, i = {To_Account: n.uid, chatType: 2};
                webim.deleteChat(i, function () {
                    o === n.uid && r(l.f.changeType()), webim.MsgStore.sessByTypeId(webim.SESSION_TYPE.GROUP, n.uid) ? r(l.c.clearUnread(n.uid, webim.SESSION_TYPE.GROUP)) : Object(Se.h)(n.uid).then(function () {
                        r(l.c.clearUnread(n.uid, webim.SESSION_TYPE.GROUP))
                    }), r(l.d.deleteChat(n.uid))
                })
            }
        }, {
            key: "renderItemName", value: function () {
                return this.props.item.name
            }
        }, {
            key: "renderItemContent", value: function () {
                var e = this.props.item, t = e.msgShow, n = e.sending, r = e.isFail;
                return n ? '<span><i class="cl-content-sending"></i>'.concat(t, "</span>") : r ? '<span><i class="cl-content-fail"></i>'.concat(t, "</span>") : e.uid === E.f ? t ? "".concat(t, " 申请添加您为好友") : null !== t && e.count ? "您有 ".concat(e.count, " 条好友申请") : "还没有人请求添加你为好友" : "SYSTEM_1000" === e.uid ? t || "您还没有收到视频通知" : e.uid === E.g ? t || "没有新消息" : "string" == typeof t ? t && Object(E.e)(t) : void 0
            }
        }, {
            key: "render", value: function () {
                return window.isfullmode ? this.renderFullMode() : this.renderSmallMode()
            }
        }]), t
    }();

    function dt(e) {
        return (dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function pt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function mt(e, t) {
        return !t || "object" !== dt(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function ht(e) {
        return (ht = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function gt(e, t) {
        return (gt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    ft.defaultProps = {
        isStranger: void 0, item: void 0, chatWithId: void 0, dispatch: function () {
        }, isLastOne: !1
    }, ft.propTypes = {
        isStranger: f.PropTypes.bool,
        item: f.PropTypes.object,
        chatWithId: f.PropTypes.node,
        dispatch: f.PropTypes.func,
        isLastOne: f.PropTypes.bool
    };
    var bt = function (e) {
        function t(e) {
            var n;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (n = mt(this, ht(t).call(this, e))).jumpToFullChatDetail = function () {
                var e = n.props.dispatch;
                if (!window.isfullmode) {
                    var t = "".concat(E.k, "/#/motorcade/fullwebmsg?uid=").concat(encodeURIComponent(E.f));
                    e(l.d.deleteChat(E.f)), window.open(t, "_blank")
                }
            }, n.scrollBar = p.a.createRef(), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && gt(e, t)
        }(t, a["PureComponent"]), function (e, t, n) {
            t && pt(e.prototype, t), n && pt(e, n)
        }(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props, t = e.dispatch, n = e.strangerList, r = e.officialList;
                t(ie.a.refresh(n)), t(ae.a.refresh(r))
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                var t = e.dispatch, n = e.strangerList, r = e.officialList;
                t(ie.a.refresh(n)), t(ae.a.refresh(r))
            }
        }, {
            key: "componentDidUpdate", value: function () {
                var t, e = this.scrollBar.current, n = this.props, r = n.loading, o = n.chatList;
                e && e.update && e.update();
                var i = o.some(function (e) {
                    return e.uid === E.f && (t = e, !0)
                });
                !r && (i ? 1 < o.length : o.length) && ve.show(i && 0 < t.count)
            }
        }, {
            key: "render", value: function () {
                for (var n = this, e = this.props, t = e.chatList, r = e.loading, o = e.dispatch, i = e.chatWithId, a = e.strangerList, c = t.length, s = [], u = 0; u < t.length; u++) t[u].uid === E.f ? s.unshift(t[u]) : s.push(t[u]);
                s.reverse();
                for (var l = [], f = function (t) {
                    l.some(function (e) {
                        return e && e.uid === s[t].uid
                    }) || l.push(s[t])
                }, d = 0; d < s.length; d++) f(d);
                return l.reverse(), p.a.createElement(m.a, {
                    spinning: r,
                    className: "chat-list-wrapper",
                    contentClassName: "chat-list"
                }, p.a.createElement(H.a, {ref: this.scrollBar}, l.map(function (e, t) {
                    return e.uid === E.f ? !window.isfullmode && 0 < e.count ? p.a.createElement("div", {
                        key: e.uid,
                        className: "chat-list-friendRequest-item",
                        onClick: n.jumpToFullChatDetail
                    }, "你有".concat(e.count, "条好友申请")) : null : "GROUP" === e.contactType ? p.a.createElement(ft, {
                        key: e.uid,
                        item: e,
                        dispatch: o,
                        chatWithId: i,
                        isLastOne: t === c - 1
                    }) : p.a.createElement(Pe, {
                        key: e.uid,
                        item: e,
                        dispatch: o,
                        chatWithId: i,
                        strangerList: a,
                        isLastOne: t === c - 1
                    })
                })), p.a.createElement(qe, this.props), p.a.createElement(rt, this.props))
            }
        }]), t
    }();
    bt.defaultProps = {
        dispatch: function () {
        }, chatList: void 0, loading: !1, chatWithId: null, strangerList: void 0, officialList: void 0
    }, bt.propTypes = {
        dispatch: f.PropTypes.func,
        chatList: f.PropTypes.array,
        loading: f.PropTypes.bool,
        strangerList: f.PropTypes.array,
        officialList: f.PropTypes.array,
        chatWithId: f.PropTypes.node
    };
    var vt = Object(I.createSelector)(function (e) {
        return e.userInfo
    }, function (e) {
        return e.chatList
    }, function (e) {
        return e.friendList
    }, function (e) {
        return e.userStore
    }, function (e) {
        return e.chatDetail.chatWithId
    }, function (e) {
        return e.groupStore.groupStore
    }, function (e) {
        return e.mobileConfig
    }, function () {
        var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = 1 < arguments.length ? arguments[1] : void 0, t = 2 < arguments.length ? arguments[2] : void 0,
            n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
            o = 4 < arguments.length ? arguments[4] : void 0,
            i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {},
            a = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : {}, c = e.chatList || [],
            s = e.addBySelfMap || {}, u = t.friendList || {}, l = a.rich_level || "30", f = [];
        a.official_white_list && "string" == typeof a.official_white_list && JSON.parse(a.official_white_list).length && (f = JSON.parse(a.official_white_list).map(function (e) {
            return "SYSTEM_".concat(e)
        }));
        for (var d = n.userStore, p = [], m = [], h = [], g = !1, b = !1, v = !1, y = !1, S = function (e) {
            var t = c[e];
            if (E.n.some(function (e) {
                return e === t.uid
            })) return "continue";
            if ("GROUP" === t.contactType) if (i[t.uid]) {
                var n = i[t.uid];
                t.loading = !1, t = Object.assign({}, t, n), p.push(t)
            } else t.loading = !0, p.push(t); else u.some(function (e) {
                return e === t.uid
            }) ? (t = Object.assign({}, t, d[t.uid]), p.push(t)) : t.uid === E.f ? p.push(t) : E.p.some(function (e) {
                return e === t.uid
            }) ? t = Object.assign({isYuniang: !0}, t, d[t.uid]) : E.g === t.uid ? p.push(t) : s[t.uid] ? (t = Object.assign({}, t, d[t.uid]), p.push(t)) : 0 <= t.uid.indexOf("SYSTEM") ? (t = Object.assign({}, t, d[t.uid]), f.some(function (e) {
                return e === t.uid
            }) ? p.push(t) : (h.push(t), b || (p.push({uid: E.l}), b = !0), 0 < t.count && (y = !0)), t.isDnd = -1 !== r.dndList.indexOf(t.uid)) : d[t.uid] && (d[t.uid].approve || d[t.uid].level >= l || "1" === d[t.uid].identity) ? (t = Object.assign({}, t, d[t.uid]), p.push(t)) : (g || (p.push({uid: E.m}), g = !0), m.push(t), 0 < t.count && (v = !0))
        }, w = 0; w < c.length; w++) S(w);
        return g && p.forEach(function (e) {
            var t = e;
            t.uid === E.m && (t.count = v ? 1 : 0, t.msgShow = m[0].msgShow, t.time = m[0].time)
        }), b && p.forEach(function (e) {
            var t = e;
            t.uid === E.l && (t.count = y ? 1 : 0, t.msgShow = h[0].msgShow, t.time = h[0].time)
        }), {chatList: p, loading: !!e.loading, strangerList: m, officialList: h, chatWithId: o}
    });
    var yt = Object(u.connect)(function (e) {
        return vt(e)
    })(bt), St = n(191), wt = n(205), Et = n.n(wt), It = function () {
        return p.a.createElement("span", {
            onClick: function () {
                return St.a.show()
            }, className: Et.a.addBtn, title: "添加好友"
        })
    }, Tt = n(113), Ot = n.n(Tt);

    function _t(e) {
        return (_t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Nt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ct(e, t) {
        return !t || "object" !== _t(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function kt(e) {
        return (kt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Mt(e, t) {
        return (Mt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Lt = function (e) {
        function i() {
            var e, t;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (t = Ct(this, (e = kt(i)).call.apply(e, [this].concat(r)))).state = {canShowTip: !1}, t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Mt(e, t)
        }(i, a["PureComponent"]), function (e, t, n) {
            t && Nt(e.prototype, t), n && Nt(e, n)
        }(i, [{
            key: "componentDidMount", value: function () {
                var e = this;
                !window.localStorage.getItem("imShowNewTip") && (this.setState({canShowTip: !0}), setTimeout(function () {
                    e.setState({canShowTip: !1})
                }, 5e3), window.localStorage.setItem("imShowNewTip", !0))
            }
        }, {
            key: "render", value: function () {
                return p.a.createElement("div", {
                    className: Ot.a.jumpBox,
                    onClick: this.props.onClick
                }, p.a.createElement("span", null, "查看完整聊天"), p.a.createElement("div", {className: "".concat(Ot.a.newTip, " ").concat(this.state.canShowTip ? Ot.a.showNewTip : "")}, "现在可以全屏聊天啦~", p.a.createElement("i", null)))
            }
        }]), i
    }();
    Lt.defaultProps = {
        onClick: function () {
        }
    }, Lt.propTypes = {onClick: f.PropTypes.func};
    var At = Lt, Pt = n(92);

    function jt(e) {
        return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Rt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function xt(e, t) {
        return !t || "object" !== jt(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function Dt(e) {
        return (Dt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Gt(e, t) {
        return (Gt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Ft = Object(a.lazy)(function () {
        return n.e(3).then(n.bind(null, 576))
    }), Ut = function (e) {
        function o() {
            var e, i;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, o);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (i = xt(this, (e = Dt(o)).call.apply(e, [this].concat(n)))).changeTab = function (e) {
                var t = i.props, n = t.dispatch, r = t.activeTab;
                n(Pt.a.changeTab(e)), "friendList" === r && "friendList" === e && n(d.a.init())
            }, i.jumpToFullChat = function () {
                var e = i.props.chatDetail, t = void 0 === e ? {} : e, n = t.chatWithId, r = t.isGroup,
                    o = "".concat(E.k, "/#/motorcade/fullwebmsg");
                return n && (o = "".concat(E.k, "/#/motorcade/fullwebmsg?").concat(r ? "groupid" : "uid", "=").concat(encodeURIComponent(n))), window.open(o, "_blank")
            }, i.renderFullMode = function () {
                return p.a.createElement("div", {className: "main-left"}, p.a.createElement("div", {className: "main-left-header"}, p.a.createElement(F, null)), p.a.createElement("div", {className: "main-left-search"}, p.a.createElement(oe, null)), p.a.createElement("div", {className: "main-left-tab"}, p.a.createElement(w, {
                    chatList: i.props.chatList,
                    activeTab: i.props.activeTab,
                    changeTab: i.changeTab,
                    groupStore: i.props.groupStore
                }), p.a.createElement("div", {className: "main-left-addFriendBtn"}, p.a.createElement(It, null))), p.a.createElement("div", {className: "main-left-content main-left-full"}, i.renderMainLeftContent()))
            }, i.renderSmallMode = function () {
                return p.a.createElement("div", {className: "main-left main-left-small"}, p.a.createElement("div", {className: "main-left-header main-left-header-small"}, p.a.createElement(F, null)), p.a.createElement("div", {className: "main-left-content main-left-content-small"}, p.a.createElement(yt, null)), p.a.createElement(At, {onClick: i.jumpToFullChat}))
            }, i
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Gt(e, t)
        }(o, a["PureComponent"]), function (e, t, n) {
            t && Rt(e.prototype, t), n && Rt(e, n)
        }(o, [{
            key: "renderMainLeftContent", value: function () {
                var e = this.props.activeTab;
                return "chatList" === e ? p.a.createElement(yt, null) : "friendList" === e ? p.a.createElement(a.Suspense, {fallback: p.a.createElement(h.a, null)}, p.a.createElement(Ft, null)) : void 0
            }
        }, {
            key: "render", value: function () {
                return window.isfullmode ? this.renderFullMode() : this.renderSmallMode()
            }
        }]), o
    }();
    Ut.defaultProps = {
        dispatch: function () {
        }, activeTab: void 0, chatList: void 0, groupStore: void 0, chatDetail: void 0
    }, Ut.propTypes = {
        dispatch: f.PropTypes.func,
        activeTab: f.PropTypes.node,
        chatList: f.PropTypes.object,
        groupStore: f.PropTypes.object,
        chatDetail: f.PropTypes.object
    };
    var Ht = Object(u.connect)(function (e) {
        return {
            activeTab: e.containerLeft.activeTab,
            chatList: e.chatList,
            groupStore: e.groupStore.groupStore,
            chatDetail: e.chatDetail
        }
    })(Ut), Wt = n(37), Bt = (n(484), n(193)), Vt = n(198);

    function qt(e) {
        return (qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function zt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Yt(e) {
        return (Yt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Jt(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Kt(e, t) {
        return (Kt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var Qt = Object(a.lazy)(function () {
        return n.e(2).then(n.bind(null, 575))
    });

    function $t() {
        return p.a.createElement("div", {className: "chat-detail-nochat-tip"}, p.a.createElement("i", {className: "chat-detail-nochat-tip-img"}), "你还未选中或发起聊天，快去跟好友聊一聊吧")
    }

    var Xt = function (e) {
        function n(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = function (e, t) {
                return !t || "object" !== qt(t) && "function" != typeof t ? Jt(e) : t
            }(this, Yt(n).call(this, e))).closeIm = function () {
                Object(Wt.a)("IMNoticeWebClose", {})
            }, t.isShowCloseIcon = function () {
                return !!Object(i.getUrlParam)("close")
            }, t.renderRightContent = t.renderRightContent.bind(Jt(t)), t
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Kt(e, t)
        }(n, a["PureComponent"]), function (e, t, n) {
            t && zt(e.prototype, t), n && zt(e, n)
        }(n, [{
            key: "renderRightContent", value: function () {
                switch (this.props.containerRight.type) {
                    case"none":
                        return $t();
                    case"chatDetail":
                        return p.a.createElement(a.Suspense, {fallback: p.a.createElement(h.a, null)}, p.a.createElement(Qt, null));
                    case"friendCard":
                        return p.a.createElement(Bt.a, null);
                    case"groupCard":
                        return p.a.createElement(Vt.a, null);
                    default:
                        return $t()
                }
            }
        }, {
            key: "render", value: function () {
                return p.a.createElement("div", {className: "main-right"}, this.renderRightContent(), this.isShowCloseIcon() ? p.a.createElement("i", {
                    className: "main-right-close-icon",
                    onClick: this.closeIm
                }) : null)
            }
        }]), n
    }();
    Xt.defaultProps = {containerRight: {}}, Xt.propTypes = {containerRight: f.PropTypes.object};
    var Zt = Object(u.connect)(function (e) {
        return {containerRight: e.containerRight}
    })(Xt);

    function en(e) {
        return (en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function tn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function nn(e, t) {
        return !t || "object" !== en(t) && "function" != typeof t ? function (e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(e) : t
    }

    function rn(e) {
        return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function on(e, t) {
        return (on = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var an = Object(a.lazy)(function () {
        return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 578))
    }), cn = Object(a.lazy)(function () {
        return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 574))
    }), sn = Object(a.lazy)(function () {
        return n.e(6).then(n.bind(null, 579))
    }), un = function (e) {
        function o() {
            var e, c;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, o);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (c = nn(this, (e = rn(o)).call.apply(e, [this].concat(n)))).handleDialogStatus = function (e) {
                var t = c.props.dispatch, n = e.target, r = document.getElementById("setWrapDom"),
                    o = document.getElementById("searchWrapDom"), i = document.getElementById("operateSetDom"),
                    a = document.getElementById("cardInfoBox");
                r && !r.contains(n) && t(l.r.showSet(!1)), o && !o.contains(n) && t(l.w.setValue("")), i && !i.contains(n) && t(l.v.operateSetting(!1)), a && !a.contains(n) && t(l.v.operateInfocard(!1))
            }, c.topComponentClick = function (e) {
                window.inactiveHeaderSearch && window.inactiveHeaderSearch(), window.hideEmotionSelector && window.hideEmotionSelector(), window.hideFriendRequestOperate && window.hideFriendRequestOperate(), window.hideGroupSystemMsgOperate && window.hideGroupSystemMsgOperate(), c.handleDialogStatus(e)
            }, c
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && on(e, t)
        }(o, a["PureComponent"]), function (e, t, n) {
            t && tn(e.prototype, t), n && tn(e, n)
        }(o, [{
            key: "render", value: function () {
                var e = this.props, t = e.loading, n = e.dialogSetupVisible, r = e.dialogAddFriendVisible,
                    o = e.dialogReportVisible;
                return p.a.createElement(m.a, {
                    onClick: this.topComponentClick,
                    spinning: t,
                    className: "main",
                    wrapperClassName: "main-content"
                }, p.a.createElement(Ht, null), p.a.createElement(Zt, null), o ? p.a.createElement(a.Suspense, {fallback: null}, p.a.createElement(sn, null)) : null, r ? p.a.createElement(a.Suspense, {fallback: null}, p.a.createElement(cn, null)) : null, n ? p.a.createElement(a.Suspense, {fallback: null}, p.a.createElement(an, null)) : null)
            }
        }]), o
    }();
    un.defaultProps = {
        dispatch: function () {
        }, loading: !0, dialogSetupVisible: !1, dialogAddFriendVisible: !1, dialogReportVisible: !1
    }, un.propTypes = {
        loading: f.PropTypes.bool,
        dialogSetupVisible: f.PropTypes.bool,
        dialogAddFriendVisible: f.PropTypes.bool,
        dialogReportVisible: f.PropTypes.bool,
        dispatch: f.PropTypes.func
    };
    var ln = Object(u.connect)(function (e) {
        return {
            loading: !e.userInfo.isLogin,
            dialogSetupVisible: e.dialogSetup.visible,
            dialogAddFriendVisible: e.dialogAddFriend.visible,
            dialogReportVisible: e.dialogReport.visible
        }
    })(un);
    window.webim = r.default, "1" === Object(i.getUrlParam)("isfullmode") && (window.isfullmode = !0), "1" === Object(i.getUrlParam)("inTeamPage") && (window.inTeamPage = !0), Object(c.render)(p.a.createElement(u.Provider, {store: l.g}, p.a.createElement(ln, null)), document.getElementById("app")), Object(o.c)()
}]);