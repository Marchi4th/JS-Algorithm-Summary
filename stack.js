/** 
* @author Marchi4th E-mail: 
* @version 创建时间：${2019-05-16}  
* 使用JS实现数据结构与算法——栈
*/ 

function Stack() {
  let items = [];
  
  // push
  this.push = function( element ) {
    items.push( element );
  };
  // pop
  this.pop = function() {
    return items.pop(); 
  };
  // peek 
  this.peek = function() {
    return items[ items.length-1 ];
  };
  // isEmpty
  this.isEmpty = function() {
    return items.length == 0;
  };
  // clear
  this.clear = function() {
    items = [];
  };
  // print 
  this.print = function() {
    console.log( items.toString() );
  };
}

// 实例化应用——十进制转化二进制
function divideBy2( decNumber ) {

  let remStack = new Stack(),
      rem,
      binaryString = '';
  
  while ( decNumber > 0 ) { // {1}
    rem = Math.floor( decNumber % 2 ); // 对输入值除以2取余
    remStack.push( rem ); // 取余值入栈
    decNumber = Math.floor( decNumber / 2 ); // 对输入值除以2取整值
  }

  while ( !remStack.isEmpty() ) {
    binaryString += remStack.pop().toString(); 
  }
  
  return binaryString; // 输出二进制树（string）
}
// 上述方法抽象——进制转化
function baseConverter( decNumber, base ) {
  let remStack = new Stack(),
      rem,
      baseString = '',
      digits = '0123456789ABCDEF'; 
  
  while ( decNumber > 0 ) {
    rem = Math.floor( decNumber % base );
    remStack.push( rem );
    decNumber = Math.floor( decNumber / base );
  }

  while ( !remStack.isEmpty() ) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}