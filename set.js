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
  // 集合操作——并集
  this.union = function( otherSet ) {
    let unionSet = new Set();
    let values = this.values();

    for ( let i = 0; i < values.length; i++ ) {
      unionSet.add( values[i] );
    }

    values = otherSet.values();
    for ( let i = 0; i < values.length; i++ ) {
      unionSet.add( values[i] );
    }
    return unionSet;
  }
  // 集合操作——交集
  this.intersection = function( otherSet ) {
    let intersectionSet = new Set();

    let values = this.values();
    for ( let i = 0; i < values.length; i++ ) {
      if ( otherSet.has( values[i] ) ) {
        intersectionSet.add( values[i] );
      }
    }
    return intersectionSet;
  }
  // 集合操作——差集
  this.difference = function( otherSet ) {
    let differenceSet = new Set();
    let values = this.values();
    for ( let i = 0; i < values.length; i++ ) {
      if ( !otherSet.has( values[i] ) ){
        differenceSet.add( values[i] );
      }
    }
    return differenceSet;
  }
  // 集合操作——判断子集
  this.subset = function( otherSet ) {
    if ( this.size() > otherSet.size() ) {
      return false;
    } else {
      let values = this.values();
      for ( let i=0; i < values.length; i++ ) {
        if ( !otherSet.has( values[i] ) ) {
          return false;
        }
      }
    }
    return true;
  }
}


