/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-16}  
* 使用JS实现数据结构与算法——链表
*/ 

function LinkedList() {
  let Node = function( element ) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  // append 列表尾部添加
  this.append = function( element ) {

    let node = new Node( element ),
        current;

    if( head === null ) { // 头部节点
      head = node;
    } else {
      current = head;
      // 循环列表，找到尾节点
      while( current.next ) {
        current = current.next;
      }
      // 找到尾节点，将其next赋值为node（null），建立链接
      current.next = node;
    }
    
    length++; // 更新长度
  };

  // insert 列表指定位置添加
  this.insert = function( position, element ) {

  };

  // removeAt 列表移除第一项
  this.removeAt = function( position ) {
    // 越界判断
    if ( position > -1 && position < length ) {
      let current = head,
          previous,
          index = 0;
      // 移除第一项
      if( position == 0 ) {
        head = current.next;
      } else {
        // 移除指定项，先循环找到位置
        while ( index++ < position ) {
          previous = current;
          current = current.next;
        }
        // 链接 previous current 的下一项，跳过current，从而移除
        previous.next = current.next;
      }
      length--;
      
      return current.element;

    } else {
      return null;
    }

  };

  // remove 列表移除特定位置
  this.remove = function( element ) {

  };

  // indexOf 列表特定元素的检索，没有返回-1
  this.indexOf = function( element ) {

  };

  // isEmpty 判断是否为空
  this.isEmpty = function() {

  };

  // size 判断长度
  this.size = function() {

  };

  // toString 重构JS对象默认方法toString，输出元素值
  this.toString = function() {

  };

  // print 打印
  this.print = function() {

  };
}