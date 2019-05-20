/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-20}  
* 使用JS实现数据结构与算法——树
*/

function BinarySearchTree() {
  let Node = function ( key ) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;
  
  // insertNode 插入节点函数
  let insertNode = function( node, newNode ) {
    if ( newNode.key < node.key ) {
      if ( node.left === null ) {
        node.left = newNode;
      } else {
        insertNode( node.left, newNode );
      }
    } else {
      if ( node.right === null ) {
        node.right = newNode;
      } else {
        insertNode( node.right, newNode );
      }
    }
  };
  // insert 插入节点
  this.insert = function( key ) {
    let newNode = new Node( key );
    if ( root === null ) {
      root = newNode;
    } else {
      insertNode( root, newNode );
    }
  }
}