/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-16}  
* 使用JS实现数据结构与算法——链表
*/ 

function LinkedList() {
  // 节点类
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

    if ( head === null ) { // 头部节点
      head = node;
    } else {
      current = head;
      // 循环列表，找到尾节点
      while ( current.next ) {
        current = current.next;
      }
      // 找到尾节点，将其next赋值为node（null），建立链接
      current.next = node;
    }
    
    length++; // 更新长度
  };

  // insert 列表指定位置添加
  this.insert = function( position, element ) {
    // 越界判断
    if ( position >= 0 && position <= length ) {

      let node = new Node( element ),
          current = head,
          previous,
          index = 0;
      
      if ( position === 0 ) { // 在第一个位置添加
        node.next = current;
        head = node;
      } else {
        while ( index++ < position ){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++; // 更新长度

      return true;

    } else {
      return false;
    }

  };

  // removeAt 列表移除第一项
  this.removeAt = function( position ) {
    // 越界判断
    if ( position > -1 && position < length ) {
      let current = head,
          previous,
          index = 0;
      // 移除第一项
      if ( position == 0 ) {
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
    let index = this.indexOf( element );
    return this.removeAt( index );
  };

  // indexOf 列表特定元素的检索，没有返回-1
  this.indexOf = function( element ) {
    let current = head,
        index = -1;
    
    while ( current ) {
      if ( element === current.element ) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  // isEmpty 判断是否为空
  this.isEmpty = function() {
    return length === 0;
  };

  // size 判断长度
  this.size = function() {
    return length;
  };

  // toString 重构JS对象默认方法toString，输出元素值
  this.toString = function() {
    let current = head,
        string = '';
    
    while ( current ) {
      string = current.element;
      current = current.next;
    }

    return string;
  };

  // getHead 获取头部
  this.getHead = function() {
    return head;
  };
}
/* ---------------------------------------------------------------------------------------------- */
// 双向链表
function DoublyLinkedList() {
  let Node = function( element ) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };
  let length = 0,
      head = null,
      tail = null; 
  
  // insert
  this.insert = function( position, element ) {
    // 越界检查
    if ( position >= 0 && position <= length ) {
      let node = new Node( element ),
          current = head,
          previous,
          index = 0;

      if ( position === 0 ) {

        if ( !head ) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }

      } else if ( position === length ) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while ( index++ < position ) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node; 
        node.prev = previous;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  // removeAt 
  this.removeAt = function( position ) {
    // 越界检查
    if ( position > -1 && position < length ) {
      let current = head,
          previous,
          index = 0;
      if ( position === 0 ) {
        head = current.next;
        // 只有一项，更新tail
        if ( length === 1 ) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if ( position === length-1 ) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while ( index++ < position ) {
          previous = current;
          current = current.next;
        }
        // 链接previous与current的下一项
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

}