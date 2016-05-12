/**
 * @author slowsay
 */
define(function(require) {
    var arr = [{
        t : '我的淘宝',
        link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
    }, {
        t : '购物车',
        link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
    }, {
        t : '收藏夹',
        link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
    }, {
        t : '商品分类',
        link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
    }, {
        t : '卖家中心',
        link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
    }, {
        t : '联系客服',
        link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
    }, {
        t : '网站导航',
        link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
    }];
    return function(id, React) {
        var home = React.createClass({displayName: "home",
        getDefaultProps : function() {
            return {
            title : '亲，请登录',
            link:'https://www.taobao.com/m?spm=a21bo.50862.1997563273.1.HZIJf8'
            };
        },
        render : function() {
            return React.createElement("div", {className: "header"}, 
                    React.createElement("div", {class: "l"}), React.createElement("div", {class: "r"}), 
                    React.createElement("div", {class: "c"}, 
                        React.createElement("ul", {className: "header_l"}, 
                        React.createElement("li", null, React.createElement("b", null, this.props.title), React.createElement("a", null, "免费注册")), 
                        React.createElement("li", null, React.createElement("a", {href: this.props.link}, "手机逛淘宝"))
                        ), 
                        React.createElement("ul", {className: "header_r"}, 
                        
                            arr.map(function(e) {
                            return React.createElement("li", null, React.createElement("a", {href: e.link}, e.t));
                            })
                        
                        )
                    )
                 );
            }
        });
        return home;
    };

});
