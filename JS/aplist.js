// 我的音乐列表
var aplove = [];

var aplist = [];

var mylist = [
  {
    name: 'Hope',
    artist: 'Namie Amuro',
    url: 'https://wang926454.gitee.io/reader/Music/hope.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/hope.png',
    lrc: 'https://res.wang64.cn/Music/lrc/hope.lrc'
  },
  {
    name: 'unravel',
    artist: '凛として時雨',
    url: 'https://wang926454.gitee.io/reader/Music/unravel.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/xxx.png',
    lrc: 'https://res.wang64.cn/Music/lrc/xxx.lrc'
  },
  {
    name: 'unravel - 不插电版',
    artist: '凛として時雨',
    url: 'https://wang926454.gitee.io/reader/Music/unravelno.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/xxx.png',
    lrc: 'https://res.wang64.cn/Music/lrc/xxx.lrc'
  },
  {
    name: 'なんでもないや',
    artist: 'RADWIMPS',
    url: 'https://wang926454.gitee.io/reader/Music/RADWIMPS.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/xxx.png',
    lrc: 'https://res.wang64.cn/Music/lrc/xxx.lrc'
  },
  {
    name: '烟火里的尘埃',
    artist: '郁欢',
    url: 'https://wang926454.gitee.io/reader/Music/yanhuolidechenai.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/yanhuolidechenai.png',
    lrc: 'https://res.wang64.cn/Music/lrc/yanhuolidechenai.lrc'
  }
];

var apapi = 'https://api.i-meto.com/api/v1/meting';

// 数组插入方法扩展
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

function getList(){
  return aplist;
}

// 搜索歌曲
function getSerach(serachType, serachText){
  var url = apapi + '?type=search&server=' + serachType + '&id=' + serachText;
  // flag 判断是否异步执行完成
  var mark = true;
  var serach = [];
  try {
      // 步骤一: 创建异步对象
      var ajax = new XMLHttpRequest();
      if (window.XMLHttpRequest) {
          ajax = new XMLHttpRequest();
      } else {
          // IE6及其以下版本浏览器
          ajax = new ActiveXObject('Microsoft.XMLHTTP');
      }
      // 步骤二: 设置请求的url参数 参数一是请求的类型 参数二是请求的url 可以带参数 动态的传递参数starName到服务端
      // ajax.open('get', 'getStar.php?starName='+name);
      ajax.open('get', url, false);
      // 步骤三: 注册事件 onreadystatechange 状态改变就会调用 定义返回触发的函数 定义在send之前 不然同步请求就出问题
      ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
              // 步骤五: 如果能够进到这个判断 说明 数据 完美的回来了 并且请求的页面是存在的
              // console.log(ajax.responseText);
              serach = JSON.parse(ajax.responseText);
          } else {
              mark = false;
          }
      }
      // 步骤四: 发送请求
      ajax.send();
      if(mark) {
        return serach;
      } else {
        return serach;
      }
  }
  catch(err) {
      return serach;
  } 
  finally {
      
  }
}

// 获取其他的歌
function getOther(){
  try {
      var temp = getSerach('kugou', '永久指针');
      temp[0].name = "永久指针";
      temp[0].artist = "海贼王";
      temp[0].cover = 'https://wang926454.gitee.io/reader/Music/image/yongjiuzhizhen.png';
      aplist.push(temp[0]);
    
      temp = getSerach('kugou', '空空如也');
      aplist.push(temp[0]);
    
      temp = getSerach('kugou', '走着走着就散了');
      aplist.push(temp[0]);

      temp = getSerach('kugou', '永夜');
      aplist.push(temp[2]);
      aplist.push(temp[0]);
  }
  catch(err) {

  } 
  finally {
      
  }
}

function getLove(){
    // flag 判断是否异步执行完成
    var flag = true;
    try {
        // 步骤一: 创建异步对象
        var ajax = new XMLHttpRequest();
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            // IE6及其以下版本浏览器
            ajax = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // 步骤二: 设置请求的url参数 参数一是请求的类型 参数二是请求的url 可以带参数 动态的传递参数starName到服务端
        // ajax.open('get', 'getStar.php?starName='+name);
        ajax.open('get', apapi + '?server=netease&type=playlist&id=2553791717', false);
        // 步骤三: 注册事件 onreadystatechange 状态改变就会调用 定义返回触发的函数 定义在send之前 不然同步请求就出问题
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // 步骤五: 如果能够进到这个判断 说明 数据 完美的回来了 并且请求的页面是存在的
                // console.log(ajax.responseText);
                aplist = JSON.parse(ajax.responseText);
                // aplist.insert(0, mylist[0]);
                aplist = aplist.concat(mylist);
            } else {
                flag = false;
            }
        }
        // 步骤四: 发送请求
        ajax.send();
        
        // 获取其他的歌
        getOther();

        if(flag) {
          return aplist;
        } else {
          return mylist;
        }
    }
    catch(err) {
        return mylist;
    } 
    finally {
        
    }
}