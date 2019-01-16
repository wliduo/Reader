// 我的图片列表
var lifeList = [
  {
    alt: '20170805',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20170805_191142.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20170805_191142.jpg'
  },
  {
    alt: '20170805',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20170805_202321.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20170805_202321.jpg'
  },
  {
    alt: '20170903',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20170903_151918.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20170903_151918.jpg'
  },
  {
    alt: '20171021',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20171021_172112.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20171021_172112.jpg'
  },
  {
    alt: '20171028',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20171028_162135.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20171028_162135.jpg'
  },
  {
    alt: '20171123',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20171123_121922.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20171123_121922.jpg'
  },
  {
    alt: '20171210',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20171210_160200.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20171210_160200.jpg'
  },
  {
    alt: '20171217',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20171217_160531.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20171217_160531.jpg'
  },
  {
    alt: '20171217',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20171217_171458.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20171217_171458.jpg'
  },
  {
    alt: '20171223',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20171223_183636.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20171223_183636.jpg'
  },
  {
    alt: '20180205',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180205_180106.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180205_180106.jpg'
  },
  {
    alt: '20180401',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180401_133922.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180401_133922.jpg'
  },
  {
    alt: '20180405',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180405_174643.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180405_174643.jpg'
  },
  {
    alt: '20180422',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180422_145913.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180422_145913.jpg'
  },
  {
    alt: '20180430',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180430_130318.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180430_130318.jpg'
  },
  {
    alt: '20180519',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180519_140930.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180519_140930.jpg'
  },
  {
    alt: '20180519',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180519_142456.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180519_142456.jpg'
  },
  {
    alt: '20180519',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180519_171413.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180519_171413.jpg'
  },
  {
    alt: '20180520',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180520_084552.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180520_084552.jpg'
  },
  {
    alt: '20180520',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180520_105936.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180520_105936.jpg'
  },
  {
    alt: '20180520',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180520_134539.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180520_134539.jpg'
  },
  {
    alt: '20180616',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180616_154307.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180616_154307.jpg'
  },
  {
    alt: '20180616',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180616_160012.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180616_160012.jpg'
  },
  {
    alt: '20180901',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180901_123048.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180901_123048.jpg'
  },
  {
    alt: '20180901',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20180901_124821.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20180901_124821.jpg'
  },
  {
    alt: '20181002',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20181002_190808.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20181002_190808.jpg'
  },
  {
    alt: '20181002',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20181002_192531.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20181002_192531.jpg'
  },
  {
    alt: '20181002',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20181002_193859.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20181002_193859.jpg'
  },
  {
    alt: '20181002',
    src: 'https://wang926454.gitee.io/reader/Image/CameraThumb/IMG_20181002_193957.jpg',
    data: 'https://wang926454.gitee.io/reader/Image/Camera/IMG_20181002_193957.jpg'
  }
];

var picList = [
  // 201810
  {
    alt: '20181010',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/10005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/10005.png'
  },
  {
    alt: '20181010',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/10010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/10010.png'
  },
  {
    alt: '20181012',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/12005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/12005.png'
  },
  {
    alt: '20181013',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/13005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/13005.png'
  },
  {
    alt: '20181013',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/13010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/13010.png'
  },
  {
    alt: '20181015',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/15005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/15005.png'
  },
  {
    alt: '20181015',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/15010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/15010.png'
  },
  {
    alt: '20181015',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/15015.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/15015.png'
  },
  {
    alt: '20181016',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/16005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/16005.png'
  },
  {
    alt: '20181016',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/16010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/16010.png'
  },
  {
    alt: '20181016',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/16015.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/16015.png'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/normal/20005.gif',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20005.gif'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/20010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20010.png'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/20015.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20015.png'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/20020.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20020.png'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/20025.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20025.png'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/20030.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20030.png'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/20040.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20040.png'
  },
  {
    alt: '20181020',
    src: 'https://wang926454.gitee.io/reader/Image/201810/thumbnail/20045.png',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/20045.png'
  },
  {
    alt: '20181030',
    src: 'https://wang926454.gitee.io/reader/Image/201810/normal/30005.gif',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/30005.gif'
  },
  {
    alt: '20181030',
    src: 'https://wang926454.gitee.io/reader/Image/201810/normal/30010.gif',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/30010.gif'
  },
  {
    alt: '20181030',
    src: 'https://wang926454.gitee.io/reader/Image/201810/normal/30015.gif',
    data: 'https://wang926454.gitee.io/reader/Image/201810/origin/30015.gif'
  },
  // 201811
  {
    alt: '20181101',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/01005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/01005.png'
  },
  {
    alt: '20181101',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/01010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/01010.png'
  },
  {
    alt: '20181101',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/01015.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/01015.png'
  },
  {
    alt: '20181101',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/01020.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/01020.png'
  },
  {
    alt: '20181101',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/01025.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/01025.png'
  },
  {
    alt: '20181102',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/02005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/02005.png'
  },
  {
    alt: '20181102',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/02010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/02010.png'
  },
  {
    alt: '20181102',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/02015.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/02015.png'
  },
  {
    alt: '20181102',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/02020.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/02020.png'
  },
  {
    alt: '20181102',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/02030.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/02030.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/04005.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/04010.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04015.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/04015.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04020.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/04020.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04025.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/origin/04025.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04030.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04030.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04035.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04035.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04040.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04040.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04045.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04045.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04050.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04050.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04055.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04055.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04060.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04060.png'
  },
  {
    alt: '20181104',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/04065.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/04065.png'
  },
  {
    alt: '20181105',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/05005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/05005.png'
  },
  {
    alt: '20181105',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/05010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/05010.png'
  },
  {
    alt: '20181105',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/05015.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/05015.png'
  },
  {
    alt: '20181105',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/05020.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/05020.png'
  },
  {
    alt: '20181105',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/05025.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/05025.png'
  },
  {
    alt: '20181105',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/05030.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/05030.png'
  },
  {
    alt: '20181109',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/09005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/09005.png'
  },
  {
    alt: '20181109',
    src: 'https://wang926454.gitee.io/reader/Image/201811/normal/09010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201811/normal/09010.png'
  },
  // 201812
  {
    alt: '20181221',
    src: 'https://wang926454.gitee.io/reader/Image/201812/normal/21005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201812/normal/21005.png'
  },
  {
    alt: '20181223',
    src: 'https://wang926454.gitee.io/reader/Image/201812/normal/23005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201812/normal/23005.png'
  },
  // 201901
  {
    alt: '201901',
    src: 'https://wang926454.gitee.io/reader/Image/201901/normal/11005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201901/normal/11005.png'
  },
  {
    alt: '201901',
    src: 'https://wang926454.gitee.io/reader/Image/201901/normal/11010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201901/normal/11010.png'
  },
  {
    alt: '201901',
    src: 'https://wang926454.gitee.io/reader/Image/201901/normal/16005.png',
    data: 'https://wang926454.gitee.io/reader/Image/201901/normal/16005.png'
  },
  {
    alt: '201901',
    src: 'https://wang926454.gitee.io/reader/Image/201901/normal/16010.png',
    data: 'https://wang926454.gitee.io/reader/Image/201901/normal/16010.png'
  }
];
