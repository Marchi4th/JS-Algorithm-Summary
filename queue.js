/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-16}  
* 使用JS实现数据结构与算法——队
*/ 

function Queue() {
  let items = [];
  
  // enqueue
  this.enqueue = function( element ) {
    items.push( element );
  };
  // dequeue 
  this.dequeue = function() {
    return items.shift();
  };
  // front 
  this.front = function() {
    return items[0];
  };
  // isEmpty
  this.isEmpty = function() {
    return items.length == 0;
  };
  // size 
  this.size = function() {
    return items.length;
  };
  // print 
  this.print = function() {
    console.log( items.toString() );
  };
}

// 特殊队列——优先队列
function PriorityQueue() {
  let items = [];

  function QueueElement( element, priority ) {
    this.element = element; // 任意数值类型
    this.priority = priority; // 优先级
  }

  this.enqueue = function( element, priority ) {
    let queueElement = new QueueElement( element, priority );

    if ( this.isEmpty() ) {
      items.push( queueElement );
    } else {
      let added = false;
      for ( let i = 0; i < items.length; i++ ) {
        if ( queueElement.priority < items.priority ) {
          items.splice( i, 0, queueElement );
          added = true;
          break;
        }
      }
      if ( !added ) {
        items.push( queueElement );
      }
    }
  };
}

// 特殊队列——循环队列
function hotPotato( nameList, num ) {
  let queue = new Queue(); 
  
  for ( let i = 0; i < nameList.length; i++ ) {
    queue.enqueue( nameList[i] );
  }

  let eliminated = '';
  while ( queue.size() > 1 ) {
    for ( let i = 0; i <= num; i++ ) {
      queue.enqueue( queue.dequeue() );
    }
    eliminated = queue.dequeue() ;
    console.log( eliminated + 'failed' );
  }

  return queue.dequeue();
}