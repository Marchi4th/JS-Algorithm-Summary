/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-20}  
* 使用JS实现数据结构与算法——哈希表
*/

function HashTable() {
  let table = [];

  // 私有散列函数
  let loseloseHashCode = function( key ) {
    let hash = 0;
    for ( let i = 0; i < key.length; i++ ) {
      hash += key.charCodeAt( i );
    }
    return hash % 37;
  };
  // put 
  this.put = function( key, value ) {
    let position = loseloseHashCode( key );
    console.log( position + '-' + key );
    table[position] = value;
  };
  // get 
  this.get = function( key ) {
    return table[loseloseHashCode( key )];
  };
  // remove 
  this.remove = function( key ) {
    table[loseloseHashCode( key )] = undefined;
  };
  // print 
  this.print = function() {
    for ( let i = 0; i < table.length; ++i ) {
      if ( tablep[i] !== undefined ) {
        console.log( i + ':' + table[i] );
      }
    }
  };
  // djb2散列函数
  let djb2HashCode = function( key ) {
    let hash = 5381;
    for ( let i = 0; i < key.length; i++ ) {
      hash = hash * 33 + key.charCodeAt( i );
    }
    return hash % 1013;
  }
}