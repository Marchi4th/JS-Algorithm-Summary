/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-17}  
* 使用JS实现数据结构与算法——集
*/ 

function Set() {
  let items = {};

  // has
  this.has = function( value ) {
    /* return value in items; */
    return items.hasOwnProperty( value );
  };
  // add 
  this.add = function( value ) {
    if ( !this.has( value ) ) {
      items[value] = value; // 同时做为键值来保存
      return true;
    }
    return false;
  };
  // remove
  this.remove = function( value ) {
    if ( this.has( value ) ) {
      delete items[value];
      return true;
    }
    return false;
  };
  // clear 
  this.clear = function() {
    items = {};
  }
  // size 
  this.size = function() {
    return Object.keys(items).length; // 存在一点点兼容性问题
  }
  // values
  this.values = function() {
    return Object.keys(items);
  }
}