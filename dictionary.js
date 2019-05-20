/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-20}  
* 使用JS实现数据结构与算法——字典
*/ 

function Dictionary() {
  let items = {};

  // has 
  this.has = function( key ) {
    return key in items;
  };
  // set 
  this.set = function( key, value ) {
    items[key] = value;
  };
  // remove 
  this.remove = function( key ) {
    if ( this.has( key ) ) {
      delete items[key];
      return true;
    }
    return false;
  };
  // get 
  this.get = function( key ) {
    if ( this.has( key ) ) {
      return items[key];
    }
    return false;
    /* return this.has( key ) ? item[key] : undefined */
  };
  // values 
  this.values = function() {
    let values = {};
    for ( let k in items ) {
      if ( this.has( k ) ) {
        values.push( items[k] );
      }
    }
    return values;
  };
  // getItems 
  this.getItems = function() {
    return items;
  };
}