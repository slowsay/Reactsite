/**
 * @author slowsay
 */
define(function(require){
  var id_webpage=document.getElementsByTagName('body')[0];
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
});

