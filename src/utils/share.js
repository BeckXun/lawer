var truckHome_mobile_share = {
    init: function (oConfig) {
        this.configJson = oConfig;
        var that = this;
        if (this.checkConfig()) {
            this.initShare();
            var $ele = document.querySelector('#' + oConfig.elementId),
                $shareWraper = document.querySelector('.truckHome-mobile-share'),
                $shareUl = document.querySelector('.truckHome-mobile-share-cont'),
                $shareCont = document.querySelector('.truckHome-mobile-share-cont-wraper'),
                $shareTips = document.querySelector('.truckHome-mobile-share-tips'),
                html = '',
                isSafari = false,
                show = function () {
                    $shareWraper.style.display = 'block'
                    if ($shareCont.style.display === 'none') {
                        $shareCont.style.display = 'block'
                    }
                },
                hide = function (e) {
                    var target = e.target,
                        targetClass = target.className;
                    if (targetClass === 'truckHome-mobile-share-cancle' || targetClass === 'truckHome-mobile-share-mask') {
                        $shareWraper.style.display = 'none'
                        $shareTips.style.display = 'none'
                    }
                },
                share = function (e) {
                    var target = e.target;
                    if (target.tagName === 'FIGURE' || target.tagName === 'DIV') {
                        target = target.parentNode
                    } else if (target.tagName === 'IMG') {
                        target = target.parentNode.parentNode
                    }
                    if (target.className === 'truckHome-mobile-share-wechat') {
                        $shareCont.style.display = 'none'
                        $shareTips.style.display = 'block'
                    } else if (target.className === 'truckHome-mobile-share-qzone') {
                        e.preventDefault()
                        adZhuan && adZhuan(6)
                        setTimeout(function () {
                            location.href = target.href
                        }, 100)
                    } else if (target.className === 'truckHome-mobile-share-weibo') {
                        e.preventDefault()
                        adZhuan && adZhuan(4)
                        setTimeout(function () {
                            location.href = target.href
                        }, 100)
                    }
                },
                forbiddenTouchmove = function (e) {
                    e.preventDefault()
                    e.stopPropagation()
                };
            oConfig.viewList.forEach(function (func) {
                // 闈濻afari娴忚鍣ㄦ病鏈夊井淇°€佹湅鍙嬪湀鍔熻兘
                if (func === 'wechat' && !that.utils.isSafari()) {
                    return
                } else {
                    html += this[func]()
                }
            }, this)
            $shareUl.innerHTML = html;
            $ele.addEventListener('click', show)
            $shareWraper.addEventListener('click', hide)
            $shareWraper.addEventListener('touchmove', forbiddenTouchmove)
            $shareUl.addEventListener('click', share)
        }
    },
    initShare: function () {
        this.writeShareCss()
        this.writeShareHtml()
    },
    writeShareCss: function () {
        var oStyle = document.createElement('style');
        oStyle.innerText = '.truckHome-mobile-share{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;}.truckHome-mobile-share-mask{height:100%;background:rgba(0,0,0,0.60);}.truckHome-mobile-share-cont-wraper{position:absolute;width:100%;height:169px;left:0;bottom:0;background-color:#fff;}.truckHome-mobile-share-cont{list-style:none;width:100%;height:120px;display:-webkit-box;display:-webkit-flex;display:flex;margin:0;padding:0;}.truckHome-mobile-share-cont a{display:block;width:25%;height:100%;text-align:center;color:#999;text-decoration:none;-webkit-tap-highlight-color:transparent;margin:0;padding:0;}.truckHome-mobile-share-cont a figure{border-radius:50%;border:1px solid #eee;width:48px;height:48px;position:relative;margin:24px auto 10px;}.truckHome-mobile-share-cont a figure img{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.truckHome-mobile-share-wechat-pictrue{width:27px;height:22px;}.truckHome-mobile-share-friends-pictrue{width:22px;height:22px;}.truckHome-mobile-share-qzone-pictrue{width:22px;height:21px;}.truckHome-mobile-share-weibo-pictrue{width:23px;height:22px;}.truckHome-mobile-share-cont a div{font-size:12px;color:#999999;line-height:12px;}.truckHome-mobile-share-cancle{text-align:center;line-height:49px;height:49px;font-size:16px;color:#999999;letter-spacing:0;position:relative;}.truckHome-mobile-share-cancle i{position:absolute;left:0;top:0;width:100%;height:1px;background-color:#d8d8d8;transform:scaleY(.5);}.truckHome-mobile-share-tips{width:270px;height:100px;background-color:#fff;font-size:18px;color:#333333;letter-spacing:0;line-height:29px;position:absolute;bottom:17px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding:15px;box-sizing:border-box;border-radius:4px;}.truckHome-mobile-share-tips img{width:27px;height:27px;vertical-align:top;margin-top:1px;margin-left:10px;display:inline-block;}.truckHome-mobile-share-tips i{position:absolute;left:127px;bottom:-5px;width:10px;height:10px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);}'
        document.querySelector('head').appendChild(oStyle)
    },
    writeShareHtml: function () {
        var oDiv = document.createElement('div');
        oDiv.innerHTML = '<div class="truckHome-mobile-share-mask"></div><div class="truckHome-mobile-share-cont-wraper" style="display: none;"><div class="truckHome-mobile-share-cont"></div><div class="truckHome-mobile-share-cancle"><i></i>\u53d6\u6d88</div></div><div class="truckHome-mobile-share-tips" style="display: none;"><i></i> \u8bf7\u4f7f\u7528\u6d4f\u89c8\u5668\u7684\u5206\u4eab\u529f\u80fd<br/><div>\u5206\u4eab\u5230<img src="https://s.kcimg.cn/m/images/global-share/weixin2.png"><img src="https://s.kcimg.cn/m/images/global-share/friends2.png"></div></div>'
        oDiv.className = 'truckHome-mobile-share'
        document.body.appendChild(oDiv)
    },
    utils: {
        // return 鏄惁涓簊afari娴忚鍣�
        isSafari: function () {
            // 鍙栧緱娴忚鍣ㄧ殑userAgent瀛楃涓�
            var userAgent = navigator.userAgent,
                // "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
                check = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Mobile") > -1;
            return check ? true : false
        },
        isObject: function (data) {
            var type = Object.prototype.toString.call(data).match(/^\[object\s(.*)\]$/)[1];
            return type === "Object" ? true : false
        }
    },
    checkConfig: function () {
        var oConfig = this.configJson,
            returnVal = false;
        if (!oConfig) {
            console.error('璇烽厤缃甶nit鍑芥暟鐨勫弬鏁板璞�')
        } else if (!this.utils.isObject(oConfig)) {
            console.error('init鍑芥暟鐨勫弬鏁板繀椤绘槸瀵硅薄')
        } else {
            returnVal = true
        }
        return returnVal
    },
    wechat: function () {
        return this.createA('wechat')
    },
    // 鏂版氮寰崥
    weibo: function () {
        var oConfig = this.configJson;
        return this.createA('weibo', {
            url: window.location.href,
            refer: window.location.href,
            // title锛氬綋鍓嶉〉闈㈢殑title鎴栬€呰嚜瀹氫箟鐨勫垎浜玹itle
            title: oConfig.title || document.title,
            appkey: 1765391403,
            relateUid: 1618776221,
            pic: oConfig.icon,
            searchPic: oConfig.icon
        })
    },
    qzone: function () {
        var oConfig = this.configJson,
            descriptionDefault = document.querySelector('head meta[name="description"]').content;
        return this.createA('qzone', {
            url: window.location.href,
            // title锛氬綋鍓嶉〉闈㈢殑title鎴栬€呰嚜瀹氫箟鐨勫垎浜玹itle
            title: oConfig.title || document.title,
            // description:锛歮eta description鎴栬€呰嚜瀹氫箟鐨勫垎浜枃妗堬紱
            description: oConfig.qzoneDescription || descriptionDefault,
            // pics锛� 鍒嗕韩灏忓浘锛屼笌寰俊鍒嗕韩鍥剧墖涓€鑷�
            pics: oConfig.icon,
            // summary锛氭瑕侊紝蹇呭～瀛楁锛寁alue鍙互涓虹┖锛岀己鐪佸皢鏄剧ず涓簎ndefined;
            summary: oConfig.description || descriptionDefault
        })
    },
    // url鏄笉甯﹀弬鏁扮殑缃戝潃 obj鏄弬鏁板璞� return 甯﹀弬鏁扮殑url
    createUrl: function (url, obj) {
        var length = obj && obj.length,
            idx = 0,
            url = url + '?';
        for (var key in obj) {
            if (obj[key] !== null) {
                url += (key + '=' + encodeURIComponent(obj[key]) + '&');
            }
        }
        return url.substring(0, url.lastIndexOf('&'))
    },
    createA: function (type, urlData) {
        var url = className = img = text = imgClass = '';
        if (type === 'wechat') {
            url = 'javascript:void(0);'
            className = 'truckHome-mobile-share-wechat'
            img = 'https://s.kcimg.cn/m/images/global-share/weixin.png'
            imgClass = 'truckHome-mobile-share-wechat-pictrue'
            text = '\u5fae\u4fe1' // 寰俊
        } else {

            if (type === 'qzone') {
                url = this.createUrl('https://qzs.qzone.qq.com/open/connect/widget/mobile/qzshare/index.html', urlData)
                className = 'truckHome-mobile-share-qzone'
                img = 'https://s.kcimg.cn/m/images/global-share/qzone.png'
                imgClass = 'truckHome-mobile-share-qzone-pictrue'
                text = '\u0051\u0051\u7a7a\u95f4' // QQ绌洪棿
            } else if (type === 'weibo') {
                url = this.createUrl('https://service.weibo.com/share/share.php', urlData)
                className = 'truckHome-mobile-share-weibo'
                img = 'https://s.kcimg.cn/m/images/global-share/weibo.png'
                imgClass = 'truckHome-mobile-share-weibo-pictrue'
                text = '\u5fae\u535a' // 寰崥
            }
        }
        var html = '<a href="' + url + '" class="' + className + '">' +
            '<figure>' +
            '<img src="' + img + '" class="' + imgClass + '">' +
            '</figure>' +
            '<div>' + text + '</div>' +
            '</a>';
        // 寰俊妯″潡杩樿杩藉姞涓€涓湅鍙嬪湀妯″潡
        if (type === 'wechat') {
            html += '<a href="' + url + '" class="' + className + '">' +
                '<figure>' +
                '<img src="https://s.kcimg.cn/m/images/global-share/friends.png" class="truckHome-mobile-share-friends-pictrue">' +
                '</figure>' +
                '<div>\u670b\u53cb\u5708</div>' + // 鏈嬪弸鍦�
                '</a>';
        }
        return html
    }
};