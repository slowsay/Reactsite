# Reactsite

react 这玩意儿，写的些复杂，现在放上来，也算是一个体会这种框架的神奇功效，呵呵<br />
基本大致思想：<br />
<p>
1.html标签被model给封装，实时在那边跑帧，输出所要显示的数据及内容，类似淘宝上，你手机操作,web界面给相应变化，这也是互动比较强的，按做互动效果来说的话，呵呵
</p>
<p>
这边解释一下为啥 在html标签 里要加些类似这种｛this.state.name｝这个功能 其实就是一个实时输出变化，刚才提到跑帧，这种思想应该是flash player的模式，所以，数据改变，这个name也会相应改变，这就是静态变化，所谓的什么双向链路。
</p>
好高大上的，其实没什么，这基本就是解决前后规范及，后端压力问题。
<p>
欢迎一起挖坑的，填坑的过来分享！
</p>
<pre>
	/**
	 * @description react库
	 */
  var React=require('react');
  var ReactDOM=require('reactdom');
  /**
   * @description 其他页面标签载入
   */
  var Header=require('app/header')(id_webpage,React);
  var Home=require('app/home')(id_webpage,React);
  var Jeans=require('app/jeans')(id_webpage,React);
  //数组
  var arr=[];
  /**
   * @description 自适应布局
   */
   // <div className='l'></div>
    // <div className='r'></div>
    // <div className='c'></div>
  /**
   * @description main主输出标签
   */
  var Trees = React.createClass({displayName: "Trees",
    propTypes:{ 
            data: React.PropTypes.string.isRequired
    },
    render : function() {
        return React.createElement("div", null, 
            React.createElement(Header, null), 
             React.createElement(Home, null), 
             React.createElement(Jeans, null), 
             this.props.data
        );
    }
    });
    /**
     * @descripton 实时渲染页面
     * 
     */
    ReactDOM.render(React.createElement(Trees, {data: arr}),id_webpage);  
</pre>

jsx本地构建成静态代码
NPM
-----------------------------------------------------
<pre>
step 1
npm install -g react-tools
step 2
jsx --watch 目标目录 生成目录
</pre>
Update
------------------------------------------------------


Version 
------------------------------------------------------
v1.0.0 update<br />
