(window.shark_list_jsonp = window.shark_list_jsonp || []).push([[6], {
    "11c2c": function (e, t, n) {
    }, "1c767": function (e, t) {
        e.exports = sdkd96911f1719081126911
    }, 2: function (e, t, n) {
        e.exports = n("7a067")
    }, "20e82": function (e, t, n) {
    }, "7a067": function (e, t, n) {
        "use strict";
        n.r(t);
        n("c4dc3"), n("8f58d");
        var o = n("7ca7d"), r = n.n(o), l = n("eb3e2"), i = n("f6898"), a = n("b0067"), c = n("58638");

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
                for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                    var r = n[o], l = Object.getOwnPropertyDescriptor(t, r);
                    l && l.configurable && void 0 === e[r] && Object.defineProperty(e, r, l)
                }
                return e
            }(e, t))
        }

        var s, u, f, h = "LEFTMENU_RECEIVE_DATA", m = "LEFTMENU_RECEIVE_FOLLOW_DATA", p = function (e) {
            function LeftMenuAction() {
                return function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, LeftMenuAction), function _possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return _inherits(LeftMenuAction, e), LeftMenuAction.fetchData = function fetchData(e) {
                return {type: "LEFTMENU_FETCH_DATA", payload: e}
            }, LeftMenuAction.receiveData = function receiveData(e) {
                return {type: h, payload: e}
            }, LeftMenuAction.getFollowData = function getFollowData() {
                return {type: "LEFTMENU_GET_FOLLOW_DATA"}
            }, LeftMenuAction.receiveFollowData = function receiveFollowData(e) {
                return {type: m, payload: e}
            }, LeftMenuAction
        }(c.Action);
        var d = (s = (0, r.a.Service)(l.DataCenter.global), u = function () {
                function LeftMenuEpics() {
                    !function leftMenuEpics_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, LeftMenuEpics), function _initDefineProp(e, t, n, o) {
                        n && Object.defineProperty(e, t, {
                            enumerable: n.enumerable,
                            configurable: n.configurable,
                            writable: n.writable,
                            value: n.initializer ? n.initializer.call(o) : void 0
                        })
                    }(this, "global", f, this)
                }

                return LeftMenuEpics.prototype.fetchData = function fetchData(e) {
                    var t = this;
                    return e.ofType("LEFTMENU_FETCH_DATA").pipe(Object(i.map)(function () {
                        var e = t.global.get("$DATA") || {}, n = e.leftNav, o = (n = void 0 === n ? {} : n).cateList,
                            r = void 0 === o ? [] : o, l = n.link, i = void 0 === l ? {} : l, a = e.cateInfo,
                            c = (a = void 0 === a ? {} : a).shortName, s = void 0 === c ? "" : c, u = e.listType;
                        return {navLink: i, categoryList: r, pageType: void 0 === u ? "" : u, classifyName: s}
                    }), Object(i.map)(p.receiveData))
                }, LeftMenuEpics.prototype.getFollowData = function getFollowData(e) {
                    return e.ofType("LEFTMENU_GET_FOLLOW_DATA").pipe(Object(a.switchMap)(function () {
                        return l.httpClient.get(String, "/wgapi/livenc/liveweb/follow/top3")
                    }), Object(i.map)(function (e) {
                        var t = e.error, n = e.data, o = {};
                        if (0 === +t) {
                            var r = c.GSON.parse(n) || {}, l = r.nowtime, i = void 0 === l ? 0 : l, a = r.room_list,
                                s = void 0 === a ? [] : a, u = r.nolive, f = void 0 === u ? 0 : u, h = r.total;
                            o = {nowtime: i, list: s, nolive: f, total: void 0 === h ? 0 : h}
                        }
                        return p.receiveFollowData(o)
                    }))
                }, LeftMenuEpics
            }(), f = function _applyDecoratedDescriptor(e, t, n, o, r) {
                var l = {};
                return Object.keys(o).forEach(function (e) {
                    l[e] = o[e]
                }), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = n.slice().reverse().reduce(function (n, o) {
                    return o(e, t, n) || n
                }, l), r && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(r) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(e, t, l), l = null), l
            }(u.prototype, "global", [s], {enumerable: !0, initializer: null}), u), v = (0, r.a.combineEpicsClass)(d),
            _ = n("fc794"), b = n.n(_), w = n("59cf4"), y = n.n(w), g = n("21a65"), M = n.n(g), N = new y.a({
                id: "follow_5cbb0b2",
                use: "follow_5cbb0b2-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="follow_5cbb0b2">\n<path fill="none" stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="38.4" d="M477.090 173.090c0-66.157-53.614-119.749-119.749-119.749-42.377 0-79.51 22.045-100.788 55.259-0.203 0-0.384 0-0.541 0-0.18 0-0.36 0-0.541 0-21.301-33.213-58.433-55.259-100.788-55.259-66.134 0-119.772 53.592-119.772 119.749 0 1.6 0.203 3.175 0.248 4.774-0.023 1.554-0.248 2.816-0.248 4.436 0 122.091 165.82 276.36 221.101 276.36 55.259 0 221.079-154.268 221.079-276.36 0-1.621-0.224-2.882-0.248-4.436 0.067-1.6 0.248-3.175 0.248-4.774z" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="19.2" d="M383.524 246.053c-1.554 2.905-3.243 5.81-4.954 8.737-2.048 3.467-4.188 6.958-6.44 10.426-2.882 4.436-5.877 8.872-8.985 13.263-3.4 4.752-6.913 9.479-10.538 14.141-4.031 5.202-8.197 10.291-12.429 15.29-6.17 7.25-12.474 14.276-18.847 20.897-4.301 4.526-8.647 8.85-12.925 12.992-4.053 3.918-8.039 7.634-11.979 11.125-5.044 4.503-9.976 8.647-14.704 12.384" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="19.2" d="M403.38 183.976c-0.091 3.558-0.427 7.206-0.991 10.921-0.923 5.968-2.41 12.114-4.459 18.397" />\n</symbol>'
            }), k = (M.a.add(N), N), E = new y.a({
                id: "rank_c5d1347",
                use: "rank_c5d1347-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="rank_c5d1347">\n<path fill="none" stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="34.9091" d="M418.909 488.728l-162.909-93.091-162.909 93.091c-25.6 0-46.545-20.945-46.545-46.546v-349.091c0-38.4 31.418-69.818 69.818-69.818h279.272c38.4 0 69.818 31.418 69.818 69.818v349.091c0 25.6-20.945 46.546-46.546 46.546z" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="17.4545" d="M256 102.784l31 62.836 69.353 10.054-50.2 48.896 11.846 69.074-61.998-32.629-62.022 32.629 11.846-69.073-50.153-48.896 69.329-10.054z" />\n</symbol>'
            }), z = (M.a.add(E), E), D = new y.a({
                id: "game_3b79799",
                use: "game_3b79799-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="game_3b79799">\n<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="32" d="M256 490.666v0c-93.867 0-170.667-76.8-170.667-170.666v-128c0-93.867 76.8-170.667 170.667-170.667s170.667 76.8 170.667 170.667v128c0 93.866-76.8 170.667-170.667 170.667z" />\n<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="16" d="M256 213.333v0c-23.466 0-42.666-19.2-42.666-42.667v-42.666c0-23.466 19.2-42.666 42.666-42.666s42.666 19.2 42.666 42.666v42.666c0 23.466-19.2 42.666-42.666 42.666z" />\n</symbol>'
            }), L = (M.a.add(D), D), x = new y.a({
                id: "match_c30459b",
                use: "match_c30459b-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="match_c30459b">\n<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="35.7209" d="M137.714 292.788c-60.798-11.313-106.725-58.261-106.725-113.987v-77.74c0-10.682 10.12-19.443 22.501-19.443h67.504" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="35.7209" d="M346.005 475.382h-180.009" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="35.7209" d="M256.007 362.877v112.512" />\n<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="35.7209" d="M374.271 292.788c60.798-11.298 106.74-58.234 106.74-113.987v-77.74c0-10.682-10.12-19.443-22.501-19.443h-67.503" />\n<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="35.7209" d="M256.007 362.877v0c-74.256 0-135.006-60.75-135.006-135.006v-146.257c0-24.75 20.246-45.002 45.002-45.002h180.009c24.75 0 45.002 20.246 45.002 45.002v146.257c0 74.256-60.75 135.006-135.006 135.006z" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="17.8605" d="M323.503 171.968v55.89c0 5.671-0.678 11.155-2.029 16.495-1.344 5.417-3.394 10.626-6.101 15.638-3.915 7.171-9.050 13.547-15.261 18.923-4.909 4.203-10.332 7.719-16.105 10.373" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="17.8605" d="M323.503 104.121v21.439" />\n</symbol>'
            }), A = (M.a.add(x), x), j = new y.a({
                id: "live_7fa84ed",
                use: "live_7fa84ed-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="live_7fa84ed">\n<path fill="none" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="10" stroke-width="51.2" d="M322.872 429.866h-240.738c-29.424 0-53.498-24.074-53.498-53.498v-240.738c0-29.424 24.073-53.498 53.498-53.498h240.738c29.425 0 53.498 24.073 53.498 53.498v240.738c0 29.425-24.074 53.498-53.498 53.498z" />\n<path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="51.2" d="M376.369 296.122l106.995 80.247v-240.738l-106.995 80.246z" />\n<path d="M150.102 175.518v169.881l147.118-84.954z" />\n</symbol>'
            }), O = (M.a.add(j), j), S = new y.a({
                id: "customer_d28cff4",
                use: "customer_d28cff4-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="customer_d28cff4">\n<path d="M403.809 147.981c-43.774 0-79.59 35.815-79.59 79.59v68.22c0 43.774 35.815 79.59 79.59 79.59s79.59-35.815 79.59-79.59v-68.22c0-43.775-35.815-79.59-79.59-79.59zM403.809 193.46c18.806 0 34.11 15.304 34.11 34.11v68.22c0 18.806-15.304 34.11-34.11 34.11s-34.11-15.304-34.11-34.11v-68.22c0-18.806 15.304-34.11 34.11-34.11z" />\n<path d="M108.191 147.981c-43.775 0-79.59 35.815-79.59 79.59v68.22c0 43.774 35.816 79.59 79.59 79.59s79.59-35.815 79.59-79.59v-68.22c0-43.775-35.815-79.59-79.59-79.59zM108.191 193.46c18.806 0 34.11 15.304 34.11 34.11v68.22c0 18.806-15.304 34.11-34.11 34.11s-34.11-15.304-34.11-34.11v-68.22c0-18.806 15.304-34.11 34.11-34.11z" />\n<path fill="none" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18.2857" d="M427.904 372.404c-24.468 37.748-60.988 67.037-103.99 82.273-6.981 2.502-14.144 4.594-21.443 6.322" />\n<path fill="none" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="36.5714" d="M74.081 170.844c26.605-79.34 98.259-136.553 181.919-136.553s155.313 57.214 181.919 136.553" />\n<path fill="none" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18.2857" d="M312.85 432.229c0 25.105-20.375 45.48-45.48 45.48s-45.48-20.375-45.48-45.48c0-25.105 20.375-45.48 45.48-45.48s45.48 20.375 45.48 45.48z" />\n</symbol>'
            }), T = (M.a.add(S), S), C = new y.a({
                id: "cf_5e8d976",
                use: "cf_5e8d976-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="cf_5e8d976">\n<path d="M107.375 312.711c-1.956 0-3.912 1.955-3.912 3.911s1.956 3.911 3.912 3.911c1.956 0 3.912-1.955 3.912-3.911s-1.956-3.911-3.912-3.911z" />\n<path d="M91.731 312.711v0 3.911c1.956 0 1.956 0 1.956-1.955s0-1.955-1.956-1.955z" />\n<path d="M79.998 312.711v0 3.911c1.956 0 1.956 0 1.956-1.955s0-1.955-1.956-1.955z" />\n<path d="M152.354 314.665l-1.956 3.911h1.956v-3.911z" />\n<path d="M60.443 300.976l-11.735 33.245h166.223l11.734-33.245h-166.223zM81.954 320.532v0l-1.956 3.911h-3.912v-15.645h3.912c1.956 0 3.912 1.955 3.912 5.866 1.956 3.911 0 5.866-1.956 5.866zM95.644 324.442l-3.912-5.866v5.866h-1.956v-15.645h3.912c1.956 0 3.912 1.955 3.912 3.911s0 3.911-1.956 3.911l3.912 7.823h-3.912zM107.375 326.399c-3.912 0-5.866-3.911-5.866-7.823s3.912-7.823 5.866-7.823c3.912 0 5.866 3.911 5.866 7.823s-1.956 7.823-5.866 7.823zM123.020 320.532h-3.912v-3.911h3.912v3.911zM134.754 324.442h-7.823v-15.645h3.911v11.735h3.911v3.911zM144.531 312.711h-3.911v1.955h3.911v3.911h-3.911v1.955h3.911v3.911h-7.823v-15.645h7.823v3.911zM154.309 324.442v-1.955h-3.911v1.955h-3.911l3.911-15.645h3.911l3.911 15.645h-3.911zM171.909 322.488c-1.956 1.955-3.911 3.911-5.866 3.911-3.911 0-5.866-3.911-5.866-7.823 0-5.866 1.956-7.823 5.866-7.823 1.956 0 3.911 1.955 5.866 3.911h-1.956c0-1.955-1.956-1.955-1.956-1.955-1.956 0-3.911 1.955-3.911 3.911s1.956 3.911 3.911 3.911c1.956 0 1.956 0 1.956-1.955h-3.911v-3.911h5.866c0 3.911 0 5.866 0 7.823zM185.597 318.576c0 1.955 0 3.911-1.956 5.866s-1.956 1.955-3.911 1.955-3.911 0-3.911-1.955-1.956-3.911-1.956-5.866v-7.823h3.911v7.823c0 1.955 0 3.911 1.956 3.911s1.956-1.955 1.956-3.911v-7.823h3.911v7.823zM195.375 312.711h-3.911v1.955h3.911v3.911h-3.911v1.955h3.911v3.911h-5.866v-15.645h7.823v3.911z" />\n<path d="M146.486 271.644v0 3.911c0 0 1.956 0 1.956-1.955 0 0 0-1.955-1.956-1.955z" />\n<path d="M89.775 271.644v0 3.911c0 0 1.956 0 1.956-1.955 0 0 0-1.955-1.956-1.955z" />\n<path d="M103.465 273.599c-1.956 0-3.912 0-3.912 1.955s1.956 3.911 3.912 3.911c1.956 0 3.912-1.955 3.912-3.911s-1.956-1.955-3.912-1.955z" />\n<path d="M74.132 269.688l-13.688 25.423h105.6l9.777-25.423h-101.689zM85.865 273.599c0-1.955-1.956-1.955-1.956-1.955-1.956 1.955-3.912 1.955-3.912 5.866 0 1.955 1.956 3.911 3.912 3.911 0 0 1.956 0 1.956-1.955v3.911c0 0-1.956 0-1.956 0-1.956 0-3.912 0-3.912-1.955-1.956-1.955-1.956-3.911-1.956-5.866s0-3.911 1.956-5.866c0 0 1.956 0 1.956 0s1.956 0 1.956 0v3.911zM93.686 283.376l-1.956-5.866v5.866h-3.912v-13.688h3.912c1.956 0 3.912 1.955 3.912 3.911s0 3.911-1.956 3.911l3.912 5.866h-3.912zM103.465 283.376c-3.912 0-5.866-3.911-5.866-7.823s3.912-7.823 5.866-7.823 5.866 3.911 5.866 7.823c0 5.866-1.956 7.823-5.866 7.823zM117.154 283.376c0 0-1.956 1.955-3.912 1.955s-1.956 0-3.912-1.955l1.956-1.955c0 0 1.956 1.955 1.956 1.955s1.956 0 1.956-1.955c0-1.955-1.956-1.955-1.956-1.955-1.956 0-3.912-1.955-3.912-3.911s1.956-3.911 3.912-3.911c1.956 0 1.956 0 3.912 1.955v0c0 0-1.956 0-1.956 0s-1.956 0-1.956 1.955c0 0 0 1.955 1.956 1.955v0c1.956-1.955 3.912 0 3.912 1.955 0 0 0 1.955-1.956 3.911zM126.931 283.376c0 0-1.956 1.955-3.912 1.955s-1.956 0-3.912-1.955l1.956-1.955c0 0 1.956 1.955 1.956 1.955s1.956 0 1.956-1.955c0-1.955-1.956-1.955-1.956-1.955-1.956 0-3.912-1.955-3.912-3.911s1.956-3.911 3.912-3.911c1.956 0 1.956 0 3.912 1.955v0c0 0-1.956 0-1.956 0s-1.956 0-1.956 1.955c0 0 0 1.955 1.956 1.955v0c1.956 0 1.956 1.955 1.956 3.911 1.955-1.955 1.955 0 0 1.955zM136.709 273.599h-3.911v1.955h3.911v3.911h-3.911v5.866h-1.956v-15.645h5.866v3.911zM140.62 283.376h-1.956v-13.688h1.956v13.688zM148.444 283.376l-1.956-5.866v5.866h-1.956v-13.688h3.911c1.956 0 3.911 1.955 3.911 3.911s0 3.911-1.956 3.911l3.911 5.866h-5.866zM160.175 273.599h-3.911v1.955h3.911v3.911h-3.911v1.955h3.911v3.911h-5.866v-15.645h5.866v3.911z" />\n<path d="M128.886 117.154l-48.888 41.066v58.666l39.112 39.112h58.666v-39.112h-39.112l39.112-78.223h58.666l1.956-21.511h-109.512z" />\n<path d="M388.974 183.644l-46.935 154.488h111.466l11.735-37.156h-54.755l33.245-115.377h-54.755z" />\n<path d="M347.909 236.443h-93.866l-46.935 142.754h54.755l15.645-43.023h56.712l23.466-76.266-9.777-23.466zM318.575 304.887h-21.512l-17.6 19.555-3.911-19.555h-19.555l17.6-19.555-3.911-19.555h21.512l17.6-19.555 3.911 19.555h21.512l-17.6 19.555 1.955 19.555z" />\n<path d="M334.221 177.776l19.555-19.555h-136.888v7.823l-43.023 129.066h54.755l23.466-72.355h46.935l-3.911-25.423h-39.112v-19.555h78.223z" />\n<path d="M510.221 255.999h-58.666l15.645-41.066 5.866-5.866 17.6-70.4h-97.777l-23.466 11.734 5.866-15.645 7.823-17.6h-37.156l-50.845 1.956v-39.112h-183.822l-70.4 39.112v97.777l19.555 19.555-3.912 9.777-37.156 74.312-17.6 37.156 17.6 17.6h144.712l-5.866 17.6 58.666 39.111h39.112l37.155-19.555 17.6-37.156h144.712l15.645-1.955 19.555-19.555 19.555-97.777zM471.109 353.776h-176l-21.512 41.066h-89.954l17.6-37.156h-181.866l37.156-74.311 17.6-37.156h17.6l-31.288-29.334v-78.223l68.444-41.066h109.512l17.6 37.155h109.511l-17.6 56.712h-25.423l-9.777 31.288h43.023l3.911 9.777 33.245-74.311h78.223l-43.023 125.155 62.577-7.823-19.555 78.223z" />\n</symbol>'
            }), F = (M.a.add(C), C), P = new y.a({
                id: "kpl_499cc6a",
                use: "kpl_499cc6a-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="kpl_499cc6a">\n<path d="M495.491 169.415c-1.842-64.478-40.529-108.692-40.529-108.692-22.107 14.738-47.899 14.738-57.11 16.58-82.901 1.842-141.853-53.425-141.853-53.425s-58.952 55.267-141.853 51.583c-9.211 0-35.003 0-57.109-16.58 0 0-38.688 44.214-40.529 108.692-1.842 44.214 11.053 75.532 18.422 88.428 42.372-20.264 68.163 11.053 70.005 11.053 1.842 1.842 1.842 3.685 1.842 3.685h23.949c-12.895-25.791-35.003-42.372-66.321-44.214 0 0-14.738-31.319-9.211-75.532 0 0 0 0 0 0v0l9.211 23.949c0 1.842 1.842 3.685 3.684 5.526l42.372 49.74-3.684-35.003c1.842 0 1.842 1.842 3.684 3.685 5.526 5.526 9.211 14.738 11.053 20.264 0 0 22.107 14.738 35.003 22.107 0 0 0 0 0 0v0c11.053 7.369 12.895 14.738 12.895 29.476h112.377c0 0 0 0 0 0h64.478c0-12.896 1.842-22.107 12.896-29.476v0c0 0 0 0 0 0 12.896-9.211 35.003-22.107 35.003-22.107 1.842-5.526 5.526-14.738 11.053-20.264 1.842-1.842 1.842-1.842 3.685-3.684l-3.685 35.003 42.372-49.74c1.842-1.842 1.842-3.685 3.685-5.526l7.369-23.949c0 0 0 0 0 0 5.526 46.056-9.211 75.532-9.211 75.532-33.161 1.842-53.425 18.423-66.321 44.214h23.949c0 0 1.842-1.842 1.842-3.685 1.842-1.842 25.791-31.319 70.005-11.053 5.526-11.053 18.423-44.214 16.58-86.585zM436.539 125.201l-35.003 33.16c-1.842 1.842-5.526 3.685-7.369 3.685l-22.107 7.369 18.423-12.895 11.053-16.58c0 0 0 0 0 0-31.318 25.791-57.11-5.526-57.11-5.526l-14.738-7.369c0 0 16.58-1.842 31.319 11.054 22.107-7.369 27.634-22.107 27.634-23.949 0 0 0 0 0 0s-3.685 1.842-5.526 3.684c-18.423 7.369-35.003 1.842-42.372-1.842-1.842 0-3.685-1.842-3.685-1.842s-1.842 0-1.842 0c0 0 0 0 0 0s0 0 0 0c-7.369 1.842-12.896 0-16.58-1.842-1.842 0-3.685-1.842-3.685-1.842s0 0 0 0h-3.685l-11.053-7.369c-3.685 1.842-7.369 3.684-7.369 3.684s0 0-1.842 0c-3.685-1.842-11.053-7.369-12.896-11.053-3.685-3.684-9.211-12.895-9.211-12.895s-3.685 1.842-5.526 9.211c-1.842 7.369 0 25.791 0 27.633v0c3.685-3.684 7.369-7.369 7.369-7.369 1.842-1.842 3.685-1.842 5.526 1.842l3.685 5.526c0 1.842 1.842 1.842 1.842 1.842l3.685-1.842 7.369 12.895-7.369-9.211-3.685 1.842c-1.842 0-1.842 0-3.685-1.842l-3.685-3.684c0-1.842-1.842-1.842-1.842 0l-3.685 5.526 5.526 18.422c0 0 0 0 0 0s0 0 0-1.842 3.685-5.526 7.369-7.369c1.842 1.842 9.211 5.526 22.107 27.633 0 0 3.685-7.369 5.526-18.422l1.842 14.738c0 0 11.053 16.58 12.896 46.056 0 0 7.369-7.369 7.369-16.58 0 0 5.526 29.476 0 35.003s-29.476 31.319-46.057 49.74l1.842-27.633c0 0 1.842-20.264 27.634-20.264 0 0 0-20.264 0-27.633-1.842-7.369-7.369-27.633-7.369-27.633s-1.842 23.949-11.053 33.16c-7.369 7.369-16.58 9.211-25.791 11.053l-14.738 58.952-11.053-60.794c-9.211-1.842-18.423-3.685-25.791-11.053s-11.053-33.161-11.053-33.161-5.526 20.264-7.369 27.633c-1.842 7.369 0 27.633 0 27.633 25.791 1.842 27.633 20.264 27.633 20.264l1.842 27.634c-16.58-16.58-42.372-44.214-46.056-49.74-5.526-7.369 0-35.003 0-35.003 0 9.211 7.369 16.58 7.369 16.58 0-29.476 11.054-46.056 12.895-46.056v0l1.842-14.738c1.842 11.054 5.526 18.422 5.526 18.422 12.895-22.107 20.264-27.633 22.107-27.633s3.685 3.684 5.526 5.526c0 0 0 0 0 1.842 0 0 0 0 0 0l5.526-18.422-3.685-7.369c0-1.842-1.842 0-1.842 0l-3.684 3.684c-1.842 1.842-1.842 1.842-3.685 1.842l-3.685-1.842-7.369 9.211 7.369-12.895 3.685 1.842c1.842 0 1.842 0 1.842-1.842l3.684-5.526c1.842-1.842 3.685-3.684 5.526-1.842 0 0 3.685 3.684 7.369 7.369v0c0-1.842 1.842-18.422 0-27.633-1.842-7.369-5.526-9.211-5.526-9.211s-7.369 11.053-9.211 12.895c-1.842 1.842-11.054 9.211-12.895 11.053 0 0 0 0-1.842 0 0 0-5.526-3.684-7.369-5.526l-12.895 14.738-1.842 1.842c0 0 0 0 0 0s-1.842 0-3.685 1.842c-3.685 0-9.211 1.842-16.58 0 0 0 0 0 0 0s0 0 0 0-1.842 0-1.842 0c0 0-1.842 1.842-5.526 3.684-9.211 3.684-23.949 7.369-42.372 0-3.684-1.842-5.526-3.684-7.369-3.684 0 0 0 0 0 0s5.526 14.738 27.633 23.949c16.58-12.895 33.161-11.053 33.161-11.053v0 0 0 0l-12.895 7.369c0 0-25.791 29.476-57.109 5.526 0 0 0 0 0 0l11.053 16.58 18.422 12.895-23.949-7.369c-3.684 0-5.526-1.842-7.369-3.685l-35.003-33.16-7.369-23.949c16.58 3.684 108.692 22.107 187.909-49.74v0c79.216 71.847 171.329 55.267 187.909 51.583l-7.369 22.107zM311.267 114.147c-5.526-1.842-12.896-1.842-12.896-1.842l-3.685-1.842c1.842 0 3.685-1.842 5.526-1.842 7.369 3.684 9.211 5.526 11.053 5.526zM200.732 114.147c1.842-1.842 5.526-3.684 11.054-7.369 0 0 3.685 1.842 5.526 1.842v0 0l-3.685 1.842c0 1.842-7.369 3.684-12.895 3.684z" />\n<path d="M311.267 401.538l-23.949 9.211-31.319 49.74 18.422-57.11 20.264-11.053 1.842-1.842h-81.058l1.842 1.842 20.264 11.053 18.422 57.11-31.319-49.74-23.949-9.211-5.526-11.053h-23.949l16.58 25.791 23.949 11.053 44.214 60.794 44.214-60.794 23.949-11.053 16.58-25.791h-23.949z" />\n<path d="M276.264 309.425h-33.161c-1.842 0-3.685 1.842-3.685 3.685v12.896h36.845c1.842 0 1.842-1.842 1.842-1.842v-9.211c0-3.685-1.842-5.526-1.842-5.526z" />\n<path d="M432.855 307.583l31.318-33.161h-416.348l31.319 33.161c0 0 0 1.842 0 1.842v44.214c0 0 0 1.842 0 1.842l-31.319 33.161h414.505l-31.319-33.161c0 0 0-1.842 0-1.842l1.842-46.057c0 0 0 0 0 0zM165.73 372.062l-23.949-31.318-12.895 12.896v7.369c1.842 7.369 11.053 11.053 11.053 11.053h-49.74c0 0 11.053-3.685 11.053-12.896v-57.109c0-9.211-11.053-12.896-11.053-12.896h38.688v31.319l33.161-31.318h35.003l-35.003 33.161 35.003 49.74h-31.319zM307.582 335.216c0 5.526-3.685 9.211-9.211 9.211h-57.109v16.58c1.842 7.369 11.054 11.053 11.054 11.053h-51.583c0 0 11.054-3.685 11.054-11.053v-57.109c0-9.211-11.053-12.896-11.053-12.896h95.797c5.526 0 9.211 3.685 9.211 9.211v35.003zM383.115 372.062h-73.69c0 0 11.053-3.685 11.053-12.896v0-58.952c-1.842-7.369-11.053-9.211-11.053-9.211h38.688v58.952h33.161c1.842 0 1.842-1.842 1.842-1.842v-9.211c0-9.211-11.053-12.896-11.053-12.896h31.318c5.526 0 9.211 3.685 9.211 9.211v25.791c0 7.369 11.053 11.053 11.053 11.053h-40.529z" />\n</symbol>'
            }), B = (M.a.add(P), P), I = new y.a({
                id: "lpl_6a592dd",
                use: "lpl_6a592dd-usage",
                viewBox: "0 0 512 512",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="lpl_6a592dd">\n<path d="M407.709 60.946l21.673-21.672h58.517c4.334 0 6.502 2.167 6.502 4.334v60.683l-21.673 21.672v21.672l21.673 26.007v156.044c0 78.022-62.851 143.040-143.040 143.040h-203.724l-21.672-21.673h-21.672l-21.672 21.673h-60.684c-2.168 0-4.334-2.168-4.334-4.334v-60.683l21.672-21.673v-21.673l-21.672-23.84v-158.211c0-80.189 62.851-143.040 143.040-143.040h201.556l23.84 21.672h21.673zM440.218 82.618c-6.502 0-10.837 4.335-10.837 10.837s4.334 10.837 10.837 10.837c6.502 0 10.837-4.335 10.837-10.837s-4.334-10.837-10.837-10.837zM451.055 177.978c-19.505-6.502-36.844-15.171-52.014-28.174l-8.669 8.669c17.338 15.171 39.011 26.007 60.683 32.509v-13.004zM156.305 429.382h13.004c-6.502-21.673-17.338-41.178-30.342-58.517l-8.669 8.669c10.837 15.171 19.506 32.509 26.007 49.847zM71.782 429.382c6.502 0 10.837-4.334 10.837-10.837s-4.335-10.837-10.837-10.837c-6.502 0-10.837 4.334-10.837 10.837s4.335 10.837 10.837 10.837zM60.946 334.022c19.506 6.502 36.843 15.171 52.015 28.175l8.669-8.669c-17.338-15.171-39.011-26.007-60.684-32.509v13.003zM149.804 190.982h-101.862l43.346 21.672-41.178 86.691-32.509 21.673h145.208l17.338-34.676h-78.022l47.68-95.36zM347.026 190.982h-164.713l43.345 21.672-49.847 108.363h47.68l43.345-91.025h47.68l-15.171 28.174h-34.676l-17.338 39.011c0 0 30.342 0 52.014 0 23.84 0 32.509-4.334 41.178-21.673 10.837-19.506 30.342-62.851 30.342-62.851l-23.84-21.673zM373.033 190.982l26.007 21.672-41.178 86.691-32.509 21.673h147.375l21.673-39.011h-80.189l43.346-91.025h-84.524zM373.033 141.135l8.669-8.669c-13.003-15.171-21.673-32.509-26.007-49.847h-13.003c6.502 21.672 17.338 41.178 30.342 58.517z" />\n</symbol>'
            }), R = (M.a.add(I), I), H = new y.a({
                id: "client_9f34d91",
                use: "client_9f34d91-usage",
                viewBox: "0 0 20 20",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="client_9f34d91">\n<path d="M15.5,2h-11c-1.7,0-3,1.3-3,3v6.5c0,1.7,1.3,3,3,3H9V16H6.8c-1,0-1.8,0.9-1.8,2l2-0.1c0,0-0.1,0.1-0.2,0.1H15\n\tc0-1.1-0.8-2-1.8-2H11v-1.5h4.5c1.7,0,3-1.3,3-3V5C18.5,3.3,17.2,2,15.5,2z M4.5,4h11c0.6,0,1,0.4,1,1v5h-13V5C3.5,4.4,3.9,4,4.5,4z\n\t M15.5,12.5h-11c-0.6,0-1-0.4-1-1V11h13v0.5C16.5,12.1,16.1,12.5,15.5,12.5z" />\n</symbol>'
            }), U = (M.a.add(H), H), V = new y.a({
                id: "playlist_0c0ca3d",
                use: "playlist_0c0ca3d-usage",
                viewBox: "0 0 19 18",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 18" id="playlist_0c0ca3d">\n<path id="playlist_0c0ca3d_\u5de6\u4fa7\u83dc\u5355\u680f\u64ad\u5355\u56fe\u6807" d="M7.7,5.4h4.5c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H7.7c-0.3,0-0.5-0.2-0.5-0.5\n\tS7.4,5.4,7.7,5.4z M14,5.4c0.3,0,0.5,0.2,0.5,0.5S14.3,6.4,14,6.4s-0.5-0.2-0.5-0.5C13.6,5.6,13.8,5.4,14,5.4z M7.7,8.1h4.5\n\tc0.3,0,0.5,0.2,0.5,0.5S12.5,9,12.2,9H7.7C7.4,9,7.2,8.8,7.2,8.5S7.4,8.1,7.7,8.1z M14,8.1c0.3,0,0.5,0.2,0.5,0.5S14.3,9,14,9\n\ts-0.5-0.2-0.5-0.5S13.8,8.1,14,8.1z M7.7,10.8h4.5c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H7.7c-0.3,0-0.5-0.2-0.5-0.5\n\tS7.4,10.8,7.7,10.8z M14,10.8c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5S13.8,10.8,14,10.8z" />\n<path d="M6.3,17c-1.4,0-2.5-1.1-2.5-2.5v-4.1c0-0.1-0.1-0.2-0.2-0.2H1.8c-0.4,0-0.7-0.3-0.7-0.7V5.4C1.1,3,3,1.1,5.4,1.1h8.2\n\tc2.4,0,4.3,1.9,4.3,4.3v9.1c0,1.4-1.1,2.5-2.5,2.5H6.3z M4.5,5.8c0.4,0,0.7,0.3,0.7,0.7v7.9c0,0.6,0.5,1.1,1.1,1.1h9.1\n\tc0.6,0,1.1-0.5,1.1-1.1v-9c0-1.6-1.3-2.9-2.9-2.9H5.4c-1.6,0-2.9,1.3-2.9,2.9v3.2c0,0.1,0.1,0.2,0.2,0.2h0.9c0.1,0,0.2-0.1,0.2-0.2\n\tv-2C3.8,6.1,4.1,5.8,4.5,5.8z M14,11.6c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.2-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3S14.2,11.6,14,11.6z\n\t M7.7,11.6c-0.2,0-0.3-0.1-0.3-0.3S7.5,11,7.7,11h4.5c0.2,0,0.3,0.1,0.3,0.3s-0.1,0.3-0.3,0.3H7.7z M14,8.8c-0.2,0-0.3-0.1-0.3-0.3\n\tc0-0.2,0.3-0.2,0.3-0.2c0.2,0,0.3,0.1,0.3,0.3C14.3,8.7,14.3,8.8,14,8.8z M7.7,8.8c-0.2,0-0.3-0.1-0.3-0.3c0-0.1,0-0.2,0.3-0.2h4.5\n\tc0.2,0,0.3,0.1,0.3,0.3c0,0.1,0,0.2-0.3,0.2H7.7z M14,6.2c-0.2,0-0.3-0.1-0.3-0.3c0.1-0.2,0.2-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3\n\tS14.2,6.2,14,6.2z M7.7,6.2c-0.2,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3h4.5c0.2,0,0.3,0.1,0.3,0.3s-0.1,0.3-0.3,0.3H7.7z" />\n</symbol>'
            }), W = (M.a.add(V), V), q = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }, G = {
                tool: [{
                    href: "/client",
                    label: "PC\u5ba2\u6237\u7aef",
                    reportData: ["110100B06"],
                    icon: U.id,
                    target: "_blank"
                }, {
                    href: b.a.check() ? "/room/my" : "/special/guide/anchor",
                    label: "\u6211\u8981\u5f00\u64ad",
                    reportData: ["110100B07"],
                    icon: O.id,
                    target: "_blank"
                }],
                link: [{
                    href: "//kefu.douyu.com/",
                    expandLabel: "\u76f4\u64ad\u6307\u5bfc",
                    reportData: ["110100B08"],
                    target: "_blank"
                }, {
                    href: "/member/customer_service",
                    expandLabel: "\u5ba2\u670d\u652f\u6301",
                    shrinkLabel: "\u5ba2\u670d",
                    reportData: ["110100B09"],
                    icon: T.id,
                    target: "_blank"
                }, {
                    href: "http://jb.ccm.gov.cn/",
                    expandLabel: "12318\u4e3e\u62a5",
                    reportData: ["110100B0A"],
                    target: "_blank"
                }],
                report: ["110100B", {event_id: 2}],
                nav: [],
                category: []
            };
        var Z, $, J, K = {
                leftMenuData: function leftMenuData() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G, t = arguments[1];
                    switch (t.type) {
                        case h:
                            return q({}, e, {
                                nav: function navProcess(e) {
                                    var t = e || {}, n = t.navLink, o = void 0 === n ? {} : n, r = t.pageType,
                                        l = void 0 === r ? "" : r, i = [{
                                            isActive: "follow" === l ? 1 : 0,
                                            href: o.followUrl || "",
                                            expandLabel: "\u6211\u7684\u5173\u6ce8",
                                            shrinkLabel: "\u5173\u6ce8",
                                            reportData: ["110100B02"],
                                            icon: k.id,
                                            followTop: {}
                                        }, {
                                            isActive: "rank" === l ? 1 : 0,
                                            href: o.rankUrl || "",
                                            expandLabel: "\u6392\u884c\u699c",
                                            shrinkLabel: "\u6392\u884c\u699c",
                                            reportData: ["110100B03"],
                                            icon: z.id
                                        }, {
                                            href: o.webGameUrl || "",
                                            expandLabel: "\u9875\u6e38\u4e2d\u5fc3",
                                            shrinkLabel: "\u6e38\u620f",
                                            reportData: ["110100B04"],
                                            icon: L.id,
                                            target: "_blank"
                                        }, {
                                            isActive: "match" === l ? 1 : 0,
                                            href: o.matchUrl || "",
                                            expandLabel: "\u8d5b\u4e8b",
                                            shrinkLabel: "\u8d5b\u4e8b",
                                            reportData: ["130100B01"],
                                            icon: A.id,
                                            extraIcon: [F.id, B.id, R.id]
                                        }];
                                    return o.playlistUrl && i.push({
                                        isActive: "broadcast" === l,
                                        href: o.playlistUrl,
                                        expandLabel: "\u64ad\u5355",
                                        shrinkLabel: "\u64ad\u5355",
                                        reportData: ["110100B0B"],
                                        icon: W.id
                                    }), i
                                }(t.payload), category: function categoryProcess(e) {
                                    var t = e || {}, n = t.categoryList, o = void 0 === n ? [] : n, r = t.classifyName,
                                        l = void 0 === r ? "" : r, i = t.pageType, a = void 0 === i ? "" : i;
                                    return o.map(function (e) {
                                        var t = e || {}, n = t.cid1, o = void 0 === n ? 0 : n, r = t.cn1,
                                            i = void 0 === r ? "" : r, c = t.stn1, s = void 0 === c ? "" : c, u = t.lsc;
                                        return {
                                            label: i,
                                            href: "/directory/columnRoom/" + s,
                                            isActive: "list1" === a && l === s ? 1 : 0,
                                            reportData: ["110100B05", {cid: o, ext: {_b_name: i}}],
                                            more: void 0 !== u && u ? {
                                                href: "/directory?shortName=" + s,
                                                reportData: ["110100B05", {cid: o, ext: {_b_name: "\u5168\u90e8"}}]
                                            } : 0,
                                            children: function categoryChildrenProcess(e, t, n) {
                                                var o = e || {}, r = o.cid1, l = void 0 === r ? 0 : r, i = o.isrec,
                                                    a = void 0 === i ? 0 : i, c = o.recn, s = void 0 === c ? "" : c,
                                                    u = o.recu, f = void 0 === u ? "" : u, h = o.isSport,
                                                    m = void 0 === h ? 0 : h, p = o.list,
                                                    d = (void 0 === p ? [] : p).map(function (e) {
                                                        var o = e || {}, r = o.cid2, i = void 0 === r ? 0 : r, a = o.cn2,
                                                            c = void 0 === a ? "" : a, s = o.stn2,
                                                            u = void 0 === s ? "" : s;
                                                        return {
                                                            label: c,
                                                            href: "/g_" + u,
                                                            isActive: "list2" === n && t === u ? 1 : 0,
                                                            reportData: ["110100B05", {cid: l, tid: i, ext: {_b_name: c}}]
                                                        }
                                                    });
                                                return d.length && m && d.push({
                                                    label: "\u4f53\u80b2\u8d5b\u573a",
                                                    href: "/directory/sport/cate",
                                                    isActive: "sport" === n ? 1 : 0,
                                                    reportData: ["110100B05", {
                                                        cid: l,
                                                        ext: {_b_name: "\u4f53\u80b2\u8d5b\u573a"}
                                                    }]
                                                }), a && d.push({
                                                    label: s,
                                                    href: f,
                                                    reportData: ["110100B05", {cid: l, ext: {_b_name: s}}]
                                                }), d
                                            }(e, l, a)
                                        }
                                    })
                                }(t.payload)
                            });
                        case m:
                            var n = e.nav, o = void 0 === n ? [] : n, r = t.payload || {}, l = r.list;
                            if (l && l.length > 0) {
                                var i = function navAddFollow(e, t) {
                                    return t.map(function (t) {
                                        var n = q({}, t);
                                        return n.followTop && (n.followTop = e), n
                                    })
                                }(r, o);
                                return q({}, e, {nav: i})
                            }
                            return e;
                        default:
                            return e
                    }
                }
            }, Q = n("1a22b"), X = n.n(Q), Y = n("29218"), ee = n.n(Y), te = n("447d8"), ne = n("f2b8b"), oe = n("54992"),
            re = n("db47a"), le = "player_layout_change", ie = n("e5846");

        function leftMenuServices_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function leftMenuServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function leftMenuServices_defaults(e, t) {
                for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                    var r = n[o], l = Object.getOwnPropertyDescriptor(t, r);
                    l && l.configurable && void 0 === e[r] && Object.defineProperty(e, r, l)
                }
                return e
            }(e, t))
        }

        var ae, ce = (Z = (0, r.a.Store)(), $ = function (e) {
                function LeftMenuServices() {
                    var t, n;
                    !function leftMenuServices_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, LeftMenuServices);
                    for (var o = arguments.length, r = Array(o), l = 0; l < o; l++) r[l] = arguments[l];
                    return t = n = leftMenuServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))), function leftMenuServices_initDefineProp(e, t, n, o) {
                        n && Object.defineProperty(e, t, {
                            enumerable: n.enumerable,
                            configurable: n.configurable,
                            writable: n.writable,
                            value: n.initializer ? n.initializer.call(o) : void 0
                        })
                    }(n, "store", J, n), leftMenuServices_possibleConstructorReturn(n, t)
                }

                return leftMenuServices_inherits(LeftMenuServices, e), LeftMenuServices.prototype.fetchData = function fetchData() {
                    this.store.dispatch(p.fetchData())
                }, LeftMenuServices.prototype.getFollowData = function getFollowData() {
                    this.store.dispatch(p.getFollowData())
                }, LeftMenuServices
            }(c.Service), J = function leftMenuServices_applyDecoratedDescriptor(e, t, n, o, r) {
                var l = {};
                return Object.keys(o).forEach(function (e) {
                    l[e] = o[e]
                }), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = n.slice().reverse().reduce(function (n, o) {
                    return o(e, t, n) || n
                }, l), r && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(r) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(e, t, l), l = null), l
            }($.prototype, "store", [Z], {enumerable: !0, initializer: null}), $), se = n("7912b"), ue = n("c26de"),
            fe = n.n(ue), he = n("c4e00"), me = n.n(he), pe = new y.a({
                id: "follow-hot_513e906",
                use: "follow-hot_513e906-usage",
                viewBox: "0 0 12 12",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="follow-hot_513e906">\n  <defs>\n    <style>\n      #follow-hot_513e906 .cls-1 {\n        fill: #888;\n        fill-rule: evenodd;\n        opacity: 0.97;\n      }\n    </style>\n  </defs>\n  <path id="follow-hot_513e906_\u70ed\u5ea6" class="cls-1" d="M177.386,216.006a4.713,4.713,0,0,1-2.551,4.557c-2.886,1.428-2.428,6.479,1.9,7.44q-2.049-3.174,1.465-5.059a2.017,2.017,0,0,0,2.032,1.839c1.594,0,.57,3.22-0.286,3.22s6.438,0,4.832-6.141q-0.554-1.473-3.12-2.132A6.312,6.312,0,0,0,177.386,216.006Z" transform="translate(-173 -216)" />\n</symbol>'
            }), de = (M.a.add(pe), pe),
            ve = (n("20e82"), "/shark/live/src/common/modules/leftMenuModule/components/LeftMenu/follow.js");

        function follow_possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function follow_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function follow_defaults(e, t) {
                for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                    var r = n[o], l = Object.getOwnPropertyDescriptor(t, r);
                    l && l.configurable && void 0 === e[r] && Object.defineProperty(e, r, l)
                }
                return e
            }(e, t))
        }

        function Icon(e) {
            var t = e.symbol, n = e.customWrapped;
            if (t) {
                var o = X.a.createElement("svg", {
                    __source: {fileName: ve, lineNumber: 14},
                    __self: this
                }, X.a.createElement("use", {
                    xlinkHref: "#" + t,
                    __source: {fileName: ve, lineNumber: 14},
                    __self: this
                }));
                return n ? o : X.a.createElement("i", {__source: {fileName: ve, lineNumber: 16}, __self: this}, o)
            }
            return null
        }

        var _e, be = Object(oe.log)(ae = function (e) {
                function Follow() {
                    var t, n;
                    !function follow_classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Follow);
                    for (var o = arguments.length, r = Array(o), l = 0; l < o; l++) r[l] = arguments[l];
                    return t = n = follow_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))), n.hasShow = !1, n.handleBtn = function () {
                        Object(re.dysub2)({action_code: "130100B02002", event_id: 1, type: 1})
                    }, n.handleHover = function () {
                        n.hasShow || (n.hasShow = !0, Object(re.dysub2)({
                            action_code: "130100B02001",
                            event_id: 3,
                            type: 1
                        }))
                    }, n.followFormatTime = function (e) {
                        var t = Math.floor(e / 3600);
                        if (t >= 1e3) return "999+\u5c0f\u65f6";
                        var n = Math.floor((e - 3600 * t) / 60), o = function join(e, t) {
                            return e > 0 ? e + t : ""
                        };
                        return o(t, "\u5c0f\u65f6") + o(n, "\u5206\u949f")
                    }, follow_possibleConstructorReturn(n, t)
                }

                return follow_inherits(Follow, e), Follow.prototype.go = function go(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments[2],
                        o = t.room_id, r = void 0 === o ? 0 : o, l = t.child_id, i = void 0 === l ? 0 : l;
                    e.preventDefault(), r > 0 && (Object(re.dysub2)({
                        action_code: "130100B02001",
                        event_id: 1,
                        type: 1,
                        tid: i,
                        p: n,
                        ext: {_rid: r}
                    }), window.open("/" + r, "_blank"))
                }, Follow.prototype.render = function render() {
                    var e = this, t = this.props, n = t.followInfo, o = void 0 === n ? {} : n, r = t.extraIcon, l = t.show,
                        i = t.followMouseEnter, a = t.followMouseLeave, c = o.list, s = void 0 === c ? [] : c, u = o.total,
                        f = void 0 === u ? 0 : u, h = o.nowtime, m = [], p = s.length, d = l ? 58 * p + 38 || 212 : 0;
                    return !r && f > 0 ? (l && this.handleHover(), s.forEach(function (t, n) {
                        m.push(X.a.createElement("li", {
                            className: "Aside-nav-drop-item",
                            key: n,
                            onClick: function onClick(o) {
                                e.go(o, t, n + 1)
                            },
                            __source: {fileName: ve, lineNumber: 94},
                            __self: e
                        }, X.a.createElement("div", {
                            className: "Aside-nav-drop-icon-wrap",
                            __source: {fileName: ve, lineNumber: 99},
                            __self: e
                        }, X.a.createElement("div", {
                            className: "Aside-nav-drop-avatar",
                            __source: {fileName: ve, lineNumber: 100},
                            __self: e
                        }, X.a.createElement(se.b, {
                            src: t.avatar_small,
                            isLazyable: !1,
                            defaultSrc: fe.a,
                            alt: t.nickname,
                            __source: {fileName: ve, lineNumber: 101},
                            __self: e
                        })), X.a.createElement("div", {
                            className: "Aside-nav-drop-content",
                            __source: {fileName: ve, lineNumber: 108},
                            __self: e
                        }, X.a.createElement("div", {
                            className: "Aside-nav-drop-content-wrap",
                            __source: {fileName: ve, lineNumber: 109},
                            __self: e
                        }, X.a.createElement("span", {
                            className: "Aside-nav-drop-des-hot u-ellipse",
                            __source: {fileName: ve, lineNumber: 110},
                            __self: e
                        }, X.a.createElement(Icon, {
                            symbol: de.id,
                            __source: {fileName: ve, lineNumber: 111},
                            __self: e
                        }), t.online), X.a.createElement("span", {
                            className: "Aside-nav-drop-name u-ellipse",
                            __source: {fileName: ve, lineNumber: 114},
                            __self: e
                        }, t.nickname)), X.a.createElement("div", {
                            className: "Aside-nav-drop-des",
                            __source: {fileName: ve, lineNumber: 118},
                            __self: e
                        }, t.show_status > 0 && X.a.createElement("i", {
                            className: "Aside-nav-drop-icon is-online",
                            __source: {fileName: ve, lineNumber: 119},
                            __self: e
                        }), X.a.createElement("span", {
                            className: "Aside-nav-drop-des-time",
                            __source: {fileName: ve, lineNumber: 120},
                            __self: e
                        }, "\u5df2\u5f00\u64ad", e.followFormatTime(h - t.show_time)))))))
                    }), X.a.createElement("div", {
                        className: "Aside-nav-drop",
                        onMouseEnter: i,
                        onMouseLeave: a,
                        style: {height: d},
                        __source: {fileName: ve, lineNumber: 131},
                        __self: this
                    }, X.a.createElement("ul", {
                        className: "Aside-nav-drop-list",
                        __source: {fileName: ve, lineNumber: 137},
                        __self: this
                    }, m), X.a.createElement("a", {
                        className: "Aside-nav-drop-btn",
                        href: "/directory/myFollow",
                        onMouseDown: this.handleBtn,
                        __source: {fileName: ve, lineNumber: 138},
                        __self: this
                    }, "\u5168\u90e8\u5173\u6ce8"))) : null
                }, Follow
            }(X.a.Component)) || ae,
            we = "/shark/live/src/common/modules/leftMenuModule/components/LeftMenu/followExtra.js";

        function followExtra_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function followExtra_defaults(e, t) {
                for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                    var r = n[o], l = Object.getOwnPropertyDescriptor(t, r);
                    l && l.configurable && void 0 === e[r] && Object.defineProperty(e, r, l)
                }
                return e
            }(e, t))
        }

        var ye, ge, Me, Ne, ke, Ee, ze, De, Le, xe, Ae, je, Oe, Se, Te = Object(oe.log)(_e = function (e) {
            function FollowExtra() {
                return function followExtra_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, FollowExtra), function followExtra_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.apply(this, arguments))
            }

            return followExtra_inherits(FollowExtra, e), FollowExtra.prototype.render = function render() {
                var e = this, t = this.props, n = t.followInfo, o = void 0 === n ? {} : n, r = t.extraIcon, l = o.list,
                    i = void 0 === l ? [] : l, a = o.total, c = void 0 === a ? 0 : a, s = [];
                return !r && c > 0 ? (i.forEach(function (t, n) {
                    s.push(X.a.createElement("li", {
                        className: "Aside-nav-follow-item",
                        key: n,
                        __source: {fileName: we, lineNumber: 21},
                        __self: e
                    }, X.a.createElement(se.b, {
                        src: t.avatar_small,
                        isLazyable: !1,
                        defaultSrc: fe.a,
                        alt: t.nickname,
                        __source: {fileName: we, lineNumber: 25},
                        __self: e
                    })))
                }), c > 3 && s.push(X.a.createElement("li", {
                    className: "Aside-nav-follow-item is-num",
                    key: 4,
                    __source: {fileName: we, lineNumber: 37},
                    __self: this
                }, X.a.createElement(se.b, {
                    src: me.a,
                    isLazyable: !1,
                    defaultSrc: fe.a,
                    __source: {fileName: we, lineNumber: 41},
                    __self: this
                }), X.a.createElement("span", {
                    className: "Aside-nav-follow-item-more",
                    __source: {fileName: we, lineNumber: 46},
                    __self: this
                }, c > 99 ? "99+" : c))), X.a.createElement("ul", {
                    className: "Aside-nav-follow",
                    __source: {fileName: we, lineNumber: 51},
                    __self: this
                }, s)) : null
            }, FollowExtra
        }(X.a.Component)) || _e, Ce = (n("11c2c"), Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }), Fe = "/shark/live/src/common/modules/leftMenuModule/components/LeftMenu/LeftMenu.js";

        function LeftMenu_initDefineProp(e, t, n, o) {
            n && Object.defineProperty(e, t, {
                enumerable: n.enumerable,
                configurable: n.configurable,
                writable: n.writable,
                value: n.initializer ? n.initializer.call(o) : void 0
            })
        }

        function LeftMenu_inherits(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function LeftMenu_defaults(e, t) {
                for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                    var r = n[o], l = Object.getOwnPropertyDescriptor(t, r);
                    l && l.configurable && void 0 === e[r] && Object.defineProperty(e, r, l)
                }
                return e
            }(e, t))
        }

        function LeftMenu_applyDecoratedDescriptor(e, t, n, o, r) {
            var l = {};
            return Object.keys(o).forEach(function (e) {
                l[e] = o[e]
            }), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = n.slice().reverse().reduce(function (n, o) {
                return o(e, t, n) || n
            }, l), r && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(r) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(e, t, l), l = null), l
        }

        var Pe = r.a.Service, Be = "leftstate";

        function LeftMenu_Icon(e) {
            var t = e.symbol, n = e.customWrapped;
            if (t) {
                var o = X.a.createElement("svg", {
                    __source: {fileName: Fe, lineNumber: 28},
                    __self: this
                }, X.a.createElement("use", {
                    xlinkHref: "#" + t,
                    __source: {fileName: Fe, lineNumber: 28},
                    __self: this
                }));
                return n ? o : X.a.createElement("i", {__source: {fileName: Fe, lineNumber: 30}, __self: this}, o)
            }
            return null
        }

        var Ie = (ye = Pe(l.DataCenter.sessionStorage), ge = Pe(l.DataCenter.common), Me = Pe(l.DataCenter.event), Ne = Pe(ce), ke = Pe(l.DataCenter.global), Object(oe.log)((Oe = function (e) {
            function LeftMenu(t) {
                !function LeftMenu_classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, LeftMenu);
                var n = function LeftMenu_possibleConstructorReturn(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return Se.call(n), n.scrollRef = X.a.createRef(), n.scrollTop = 0, n.toggleState = !!parseInt(localStorage.getItem(Be) || 1, 10), n.togglePrevState = null, n.toggleStateElement = document.getElementById("js-aside-state"), n.root = document.documentElement || document.body, n.showFollowDrop = !1, n.followTimer = null, n.state = {followShow: !1}, n
            }

            return LeftMenu_inherits(LeftMenu, e), LeftMenu.prototype.componentDidMount = function componentDidMount() {
                var e = this;
                this.service.fetchData(), this.event.register(window, "resize", {debounce: 60}).subscribe(this.resize), this.event.load().subscribe(function () {
                    e.report(e.props.report), e.getFollowData()
                }), this.updateScroll()
            }, LeftMenu.prototype.componentDidUpdate = function componentDidUpdate(e) {
                var t = e || {}, n = t.category, o = t.nav, r = this.props, l = r.category, i = r.nav;
                n.length === l.length && o.length === i.length || this.updateScroll()
            }, LeftMenu.prototype.getFollowData = function getFollowData() {
                var e = this;
                this.showFollowDrop = !!this.global.get("leftMenuSHowFollow");
                var t = Math.floor(3 * Math.random());
                this.showFollowDrop && setTimeout(function () {
                    e.service.getFollowData()
                }, 1e3 * t)
            }, LeftMenu.prototype.render = function render() {
                var e = this, t = this.props, n = t.nav, o = t.category, r = t.tool, l = t.link,
                    i = this.state.followShow;
                return [X.a.createElement("div", {
                    key: "left-menu-expand",
                    className: "Aside-main--expand",
                    onClick: this.saveScrollPosition,
                    __source: {fileName: Fe, lineNumber: 148},
                    __self: this
                }, X.a.createElement("div", {
                    className: "Aside-container",
                    __source: {fileName: Fe, lineNumber: 149},
                    __self: this
                }, X.a.createElement(ne.Scrollbars, {
                    autoHide: !0,
                    hideTracksWhenNotNeeded: !0,
                    thumbSize: 80,
                    ref: this.scrollRef,
                    onScrollFrame: this.handleScrollFrame,
                    renderView: function renderView(t) {
                        return X.a.createElement("div", Ce({className: "Aside-view"}, t, {
                            __source: {
                                fileName: Fe,
                                lineNumber: 156
                            }, __self: e
                        }))
                    },
                    renderTrackVertical: function renderTrackVertical(t) {
                        return X.a.createElement("div", Ce({className: "Aside-scrollbar-track"}, t, {
                            __source: {
                                fileName: Fe,
                                lineNumber: 157
                            }, __self: e
                        }))
                    },
                    renderThumbVertical: function renderThumbVertical(t) {
                        return X.a.createElement("div", Ce({className: "Aside-scrollbar-thumb"}, t, {
                            __source: {
                                fileName: Fe,
                                lineNumber: 158
                            }, __self: e
                        }))
                    },
                    __source: {fileName: Fe, lineNumber: 150},
                    __self: this
                }, X.a.createElement("div", {
                    className: "Aside-nav",
                    __source: {fileName: Fe, lineNumber: 160},
                    __self: this
                }, n.map(function (t, n) {
                    var o = !!t.followTop && e.showFollowDrop;
                    return X.a.createElement(X.a.Fragment, {
                        __source: {fileName: Fe, lineNumber: 165},
                        __self: e
                    }, X.a.createElement("a", Ce({
                        key: "Aside-nav-item-" + n,
                        className: "Aside-nav-item" + (t.isActive ? " is-active" : ""),
                        href: t.href,
                        onMouseDown: function onMouseDown() {
                            return e.report(t.reportData)
                        }
                    }, t.target ? {target: t.target} : {}, o ? {
                        onMouseEnter: e.followMouseEnter,
                        onMouseLeave: e.followMouseLeave
                    } : {}, {
                        __source: {fileName: Fe, lineNumber: 166},
                        __self: e
                    }), X.a.createElement(LeftMenu_Icon, {
                        symbol: t.icon,
                        __source: {fileName: Fe, lineNumber: 177},
                        __self: e
                    }), X.a.createElement("strong", {
                        __source: {fileName: Fe, lineNumber: 178},
                        __self: e
                    }, t.expandLabel), t.extraIcon ? t.extraIcon.map(function (t, o) {
                        return X.a.createElement("span", {
                            key: "Aside-nav-item-" + n + "-extra-" + o,
                            __source: {fileName: Fe, lineNumber: 179},
                            __self: e
                        }, X.a.createElement(LeftMenu_Icon, {
                            symbol: t,
                            customWrapped: !0,
                            __source: {fileName: Fe, lineNumber: 180},
                            __self: e
                        }))
                    }) : null, o && X.a.createElement(Te, {
                        followInfo: t.followTop,
                        extraIcon: t.extraIcon,
                        __source: {fileName: Fe, lineNumber: 183},
                        __self: e
                    })), o && X.a.createElement(be, {
                        followInfo: t.followTop,
                        extraIcon: t.extraIcon,
                        followMouseEnter: e.followMouseEnter,
                        followMouseLeave: e.followMouseLeave,
                        show: i,
                        __source: {fileName: Fe, lineNumber: 189},
                        __self: e
                    }))
                })), o.length ? X.a.createElement("div", {
                    className: "Aside-menu",
                    __source: {fileName: Fe, lineNumber: 200},
                    __self: this
                }, o.map(function (t, n) {
                    return X.a.createElement("div", {
                        key: "Aside-menu-block-" + n,
                        className: "Aside-menu-block",
                        __source: {fileName: Fe, lineNumber: 201},
                        __self: e
                    }, X.a.createElement("div", {
                        className: "Aside-menu-head",
                        __source: {fileName: Fe, lineNumber: 205},
                        __self: e
                    }, t.more ? X.a.createElement("a", {
                        className: "Aside-menu-whole",
                        href: t.more.href,
                        onMouseDown: function onMouseDown() {
                            return e.report(t.more.reportData)
                        },
                        __source: {fileName: Fe, lineNumber: 206},
                        __self: e
                    }, "\u5168\u90e8+") : null, X.a.createElement("a", {
                        className: "Aside-menu-title" + (t.isActive ? " is-active" : ""),
                        href: t.href,
                        onMouseDown: function onMouseDown() {
                            return e.report(t.reportData)
                        },
                        __source: {fileName: Fe, lineNumber: 211},
                        __self: e
                    }, t.label)), X.a.createElement("div", {
                        className: "Aside-menu-list",
                        __source: {fileName: Fe, lineNumber: 217},
                        __self: e
                    }, t.children.map(function (t, o) {
                        return X.a.createElement("a", {
                            key: "Aside-menu-item-" + n + "-" + o,
                            className: "Aside-menu-item" + (t.isActive ? " is-active" : ""),
                            href: t.href,
                            title: t.label,
                            onMouseDown: function onMouseDown() {
                                return e.report(t.reportData)
                            },
                            __source: {fileName: Fe, lineNumber: 218},
                            __self: e
                        }, t.label)
                    })))
                })) : null)), X.a.createElement("div", {
                    className: "Aside-footer",
                    __source: {fileName: Fe, lineNumber: 230},
                    __self: this
                }, X.a.createElement("div", {
                    className: "Aside-tool",
                    __source: {fileName: Fe, lineNumber: 231},
                    __self: this
                }, r.map(function (t, n) {
                    return X.a.createElement("a", Ce({
                        key: "Aside-tool-item-" + n,
                        className: "Aside-tool-item",
                        href: t.href,
                        onMouseDown: function onMouseDown() {
                            return e.report(t.reportData)
                        }
                    }, t.target ? {target: t.target} : {}, {
                        __source: {fileName: Fe, lineNumber: 232},
                        __self: e
                    }), X.a.createElement(LeftMenu_Icon, {
                        symbol: t.icon,
                        __source: {fileName: Fe, lineNumber: 238},
                        __self: e
                    }), X.a.createElement("strong", {__source: {fileName: Fe, lineNumber: 238}, __self: e}, t.label))
                })), X.a.createElement("div", {
                    className: "Aside-link",
                    __source: {fileName: Fe, lineNumber: 240},
                    __self: this
                }, l.map(function (t, n) {
                    return X.a.createElement("a", Ce({
                        key: "Aside-link-item-" + n,
                        className: "Aside-link-item",
                        href: t.href,
                        title: t.expandLabel,
                        onMouseDown: function onMouseDown() {
                            return e.report(t.reportData)
                        }
                    }, t.target ? {target: t.target} : {}, {
                        __source: {fileName: Fe, lineNumber: 241},
                        __self: e
                    }), t.expandLabel)
                })))), X.a.createElement("div", {
                    key: "left-menu-shrink",
                    className: "Aside-main--shrink",
                    __source: {fileName: Fe, lineNumber: 252},
                    __self: this
                }, n.map(function (t, n) {
                    return X.a.createElement("a", Ce({
                        key: "Aside-shrink-item-" + n,
                        className: "Aside-shrink-item" + (t.isActive ? " is-active" : ""),
                        href: t.href,
                        title: t.shrinkLabel,
                        onMouseDown: function onMouseDown() {
                            return e.report(t.reportData)
                        }
                    }, t.target ? {target: t.target} : {}, {
                        __source: {fileName: Fe, lineNumber: 253},
                        __self: e
                    }), X.a.createElement(LeftMenu_Icon, {
                        symbol: t.icon,
                        __source: {fileName: Fe, lineNumber: 260},
                        __self: e
                    }), X.a.createElement("strong", {
                        __source: {fileName: Fe, lineNumber: 260},
                        __self: e
                    }, t.shrinkLabel))
                }), l.filter(function (e) {
                    return e.shrinkLabel
                }).map(function (t, o) {
                    return X.a.createElement("a", Ce({
                        key: "Aside-shrink-item-" + (n.length + o),
                        className: "Aside-shrink-item",
                        href: t.href,
                        title: t.shrinkLabel,
                        onMouseDown: function onMouseDown() {
                            return e.report(t.reportData)
                        }
                    }, t.target ? {target: t.target} : {}, {
                        __source: {fileName: Fe, lineNumber: 261},
                        __self: e
                    }), X.a.createElement(LeftMenu_Icon, {
                        symbol: t.icon,
                        __source: {fileName: Fe, lineNumber: 268},
                        __self: e
                    }), X.a.createElement("strong", {
                        __source: {fileName: Fe, lineNumber: 268},
                        __self: e
                    }, t.shrinkLabel))
                })), X.a.createElement("label", {
                    key: "left-menu-toggle",
                    className: "Aside-toggle",
                    htmlFor: "js-aside-state",
                    onClick: this.toggle,
                    __source: {fileName: Fe, lineNumber: 271},
                    __self: this
                }, X.a.createElement("i", {__source: {fileName: Fe, lineNumber: 271}, __self: this}))]
            }, LeftMenu
        }(X.a.Component), Se = function _initialiseProps() {
            var e = this;
            LeftMenu_initDefineProp(this, "sessionStorage", De, this), LeftMenu_initDefineProp(this, "common", Le, this), LeftMenu_initDefineProp(this, "event", xe, this), LeftMenu_initDefineProp(this, "service", Ae, this), LeftMenu_initDefineProp(this, "global", je, this), this.layout = function () {
                e.togglePrevState !== e.toggleState && (e.togglePrevState = e.toggleState, e.toggleState = !e.toggleState, localStorage.setItem(Be, Number(e.toggleState)))
            }, this.resize = function () {
                e.toggleState && e.root.clientWidth < 1340 && null === localStorage.getItem(Be) && (e.toggleStateElement.checked = !0, e.layout())
            }, this.toggle = function () {
                e.layout(), e.common.push(le), e.common.push(ie.a, {state: e.toggleState}, !0)
            }, this.updateScroll = function () {
                return e.scrollRef.current.scrollTop(Math.abs(parseInt(e.sessionStorage.get("leftposition"), 10) || e.scrollTop))
            }, this.handleScrollFrame = function (t) {
                return e.scrollTop = t.scrollTop
            }, this.saveScrollPosition = function () {
                return e.sessionStorage.set("leftposition", e.scrollTop)
            }, this.report = function (e) {
                return Object(re.dysub2)(Object.assign({event_id: 1, type: 1, action_code: e[0]}, e[1]))
            }, this.followMouseEnter = function () {
                clearTimeout(e.followTimer), e.setState({followShow: !0})
            }, this.followMouseLeave = function () {
                clearTimeout(e.followTimer), e.followTimer = setTimeout(function () {
                    e.setState({followShow: !1})
                }, 200)
            }
        }, De = LeftMenu_applyDecoratedDescriptor((ze = Oe).prototype, "sessionStorage", [ye], {
            enumerable: !0,
            initializer: null
        }), Le = LeftMenu_applyDecoratedDescriptor(ze.prototype, "common", [ge], {
            enumerable: !0,
            initializer: null
        }), xe = LeftMenu_applyDecoratedDescriptor(ze.prototype, "event", [Me], {
            enumerable: !0,
            initializer: null
        }), Ae = LeftMenu_applyDecoratedDescriptor(ze.prototype, "service", [Ne], {
            enumerable: !0,
            initializer: null
        }), je = LeftMenu_applyDecoratedDescriptor(ze.prototype, "global", [ke], {
            enumerable: !0,
            initializer: null
        }), Ee = ze)) || Ee);
        Ie.propTypes = {
            nav: ee.a.array.isRequired,
            category: ee.a.array.isRequired,
            tool: ee.a.array.isRequired,
            link: ee.a.array.isRequired,
            report: ee.a.array.isRequired
        };
        var Re = Object(te.connect)(function mapStateToProps(e) {
            return {
                nav: e.leftMenuData.nav,
                category: e.leftMenuData.category,
                tool: e.leftMenuData.tool,
                link: e.leftMenuData.link,
                report: e.leftMenuData.report
            }
        })(Ie), He = r.a.StoreFactory, Ue = r.a.createApp({
            name: "LeftMenuApp", providers: [{
                name: "component", useFactory: function useFactory() {
                    return Re
                }
            }, {
                name: "store", useFactory: function useFactory() {
                    return He.getInstance(window.__INITIAL_STATE__, K, v)
                }
            }]
        });
        l.DataCenter.event.load().subscribe(function (e) {
            var t = new Ue;
            r.a.render(t, document.getElementById("js-aside"))
        })
    }, 86962: function (e, t) {
        e.exports = vendorb74966ba39e6c70fa608
    }, c4e00: function (e, t) {
        e.exports = "https://shark2.douyucdn.cn/front-publish/live-master/assets/images/follow-bg_421177b.png"
    }
}, [[2, 0, 1, 2, 3]]]);
//# sourceMappingURL=http://fedci.dz11.com:4567/list/online/sourcemaps/aside_57b2947.js.map