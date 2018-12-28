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
      ajax.open('get', apapi + '?server=tencent&type=playlist&id=6002914459', false);
      // 步骤三: 注册事件 onreadystatechange 状态改变就会调用 定义返回触发的函数 定义在send之前 不然同步请求就出问题
      ajax.onreadystatechange = function () {
          if (ajax.readyState == 4 && ajax.status == 200) {
              // 步骤五: 如果能够进到这个判断 说明 数据 完美的回来了 并且请求的页面是存在的
              // console.log(ajax.responseText);
              aplove = JSON.parse(ajax.responseText);
              aplist = aplist.concat(aplove);
          }
      }
      // 步骤四: 发送请求
      ajax.send();
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

        // 获取QQ音乐歌单
        getList();
        
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





// Bing每日壁纸获取
var pclist = {
    "date": 20181228,
    "title": "",
    "copyright": "",
    "url": "https://bing.ioliu.cn/v1/rand"
};

var api = "https://bing.ioliu.cn/v1";
var api2 = "https://bing.ioliu.cn/v1/rand";
var api3 = "https://cn.bing.com/cnhp/coverstory";
var size = "?h=1080&w=1920";
var d = Math.floor(1000 * Math.random());
// var url = api + size + "&d=" + d;

// 加速接口
var api4 = "https://api.i-meto.com/api/v1/bing/random";
var today = "?new";

function getPic(rand) {
    // mark 判断是否异步执行完成
    var mark = true;
    if (rand) {
        api4 = api4 + today;
    }
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
        ajax.open('get', api4, false);
        // 步骤三: 注册事件 onreadystatechange 状态改变就会调用 定义返回触发的函数 定义在send之前 不然同步请求就出问题
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // 步骤五: 如果能够进到这个判断 说明 数据 完美的回来了 并且请求的页面是存在的
                // console.log(ajax.responseText);
                pclist = JSON.parse(ajax.responseText);
            }
        }
        // 步骤四: 发送请求
        ajax.send();
    }
    catch(err) {
        
    } 
    finally {
        return pclist;
    }
}

