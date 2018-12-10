// 我的音乐列表
var aplove = [
  {
    "name": "Without You",
    "artist": "Avicii / Sandro Cavazza",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=496869523&auth=b2d48670098d0b79fdfcd9ea21aa60cf0edf3b46e74c75dc1803a7b448c56814",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18776360069542158&auth=6c62665fa8796e092fef0470d34817baf07372aa87a537f92214f5591ab6420d",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=496869523&auth=bab055c91bd51acd7ca7f3382f029e94f6ee0e0143c2aa17f4d577f006e67f84"
  },
  {
    "name": "The Nights (Original Mix)",
    "artist": "Avicii",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=29771146&auth=b4f791d4669f4564624cd42c169beac51fbcfa0474fa7e993a3dffd36fce4d0a",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=3246857838267604&auth=440f90e07ee17ef128a01fd2f8d82c0fbfce76dd64940abfc3de3e533ef945a1",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=29771146&auth=0818a97a8f2831b66b45254d79ffd0fd2b50a446b927b1013ac173f3b559927e"
  },
  {
    "name": "Wake Me Up",
    "artist": "Avicii / Aloe Blacc",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=27713920&auth=0bcd38b1ad7422d80350a5f47f05bacfe9e8fbb64d9c018d7f1bfa47230a6471",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=2535473814614183&auth=1adb0c5851ba7d2a4e883af5b7ad253f3faeb364863a82aa287f62d760d8c9d9",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=27713920&auth=7b8a64efd730e007575f1ba4d65f8eb81883c4bbf46c1a220c4bc69154fc9134"
  },
  {
    "name": "There For You",
    "artist": "Martin Garrix / Troye Sivan",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=480426313&auth=f691a9ba40cd6165597dc111756836ad885abd5b2ad8346b2714e5aa13633153",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18520173860179248&auth=cb9c11085be79e228ec7c7ac9a80e6649d5c2843463b7578236e0d91dd0876bb",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=480426313&auth=23fcaa2d8c9a26d6a006dfd915eaa1a704a3f7a8a91892e6bdb9b9efcd288d3d"
  },
  {
    "name": "Waiting For Love",
    "artist": "Avicii / Martin Garrix / Simon Aldred",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=31356499&auth=43994b78eafdb0f2ae7b96338a73a818c3a8b528b2d74176579113612392d935",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=2932397511504193&auth=72b31aee411c7163f047c0f8d944f5460b871cf31c64ea3b1b61fd3cd9a5ed5e",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=31356499&auth=2a868835e6542dbf27db88a2f9a1bd0bc8c6111cea467c000fa7769662d33d90"
  },
  {
    "name": "Alone",
    "artist": "Alan Walker / Noonie Bao",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=444269135&auth=d17662e53371ab6e2e08f270cd9bf9b8e8692d0e6427c40bc844e79373dfd3db",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18506979720205489&auth=7667b6d9a5e434a222fb23aba55b6228cc53d3212feb646465d5a4a263a6e242",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=444269135&auth=a272c3b7a99ef8535bacd9091d01e36453bb681ecc771f0fda9ac35a27574bd7"
  },
  {
    "name": "Cry Wolf",
    "artist": "Luna Shadows",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=404182830&auth=030a13ee8f06d09075e4a51fc924bf63f533641a1f0d9c21fad18e8ecc54adaf",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=1377688071317730&auth=0ef3a43bd5c46396ac8ac3f2df55d00cc3ce843754efab3814163d6d6ce19095",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=404182830&auth=94ed778797d568ffc6e9ca1109cb8e455158135227808b9c662cce20db267886"
  },
  {
    "name": "Towers",
    "artist": "Frida Sundemo",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=2639477&auth=af9f2fe5cb9664600e54afba768cf01f7b871f59e7fc8bfba06aa5a6de4eea76",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=944480488315728&auth=1ff8310b2badf1aa31dbe86b7d733ea9e0bbfb10fa2b4b5ae06c44b7d7717b7a",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=2639477&auth=8755dd85b5b7941e79f7e63e2655e4dea0e104cc90c5ebdf15463e1b99e5f90f"
  },
  {
    "name": "Nevada",
    "artist": "Vicetone / Cozi Zuehlsdorff",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=418602088&auth=5dabfe8561a7f9dcf96ceb670ba56da37ce2a95de42269e347f38b16b2ad4293",
    "cover": "https://wang926454.gitee.io/reader/Music/image/nevada.png",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=418602088&auth=d88e21ff01714d3a528bddc29b07454fb799c714edb9b904abf3a0c63edd90f2"
  },
  {
    "name": "Aeon",
    "artist": "JJD",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=33359018&auth=3c6fa9de74490f52e345d007a8134ab31b144404141dbc1d799bbfcac08f9bed",
    "cover": "https://wang926454.gitee.io/reader/Music/image/aeon.png",
    "lrc": "https://res.wang64.cn/Music/lrc/aeon.lrc"
  },
  {
    "name": "Trip",
    "artist": "Axero",
    "url": "https://api.i-meto.com/api/v1/meting?server=kugou&type=url&id=bcbf4536824bee6101afbdb3d8afc870&auth=14799d84b90e3bf4fc91431fb0e7a5829b8afb3129ec3b54254b4f4e384f5688",
    "cover": "https://api.i-meto.com/api/v1/meting?server=kugou&type=pic&id=bcbf4536824bee6101afbdb3d8afc870&auth=57a561a2c27e6eed4d9fdb1072b0d7d050b34d52f4fb3ccbc5a9a9e8613771ce",
    "lrc": "https://res.wang64.cn/Music/lrc/trip.lrc"
  },
  {
    "name": "Horizon",
    "artist": "Janji",
    "url": "https://api.i-meto.com/api/v1/meting?server=kugou&type=url&id=1382860eb4201c387f84cd723efe02df&auth=bc2f9e1fde95656475d887f4bc05f3c22f214c454e92b87814281b7853152d29",
    "cover": "https://api.i-meto.com/api/v1/meting?server=kugou&type=pic&id=1382860eb4201c387f84cd723efe02df&auth=d00bda8d570fe9df2be5bda8e65a79ab2ccf7b5cac2062ac5d2f32582a086d63",
    "lrc": "https://res.wang64.cn/Music/lrc/horizon.lrc"
  },
  {
    "name": "五月雨变奏电音",
    "artist": "AnimeVibe",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=1298647136&auth=9725054cf0b01558e903cc2a2ab2d44935d60fb83511304a5eeacbf47dc46299",
    "cover": "https://wang926454.gitee.io/reader/Music/image/wuyueyu.png",
    "lrc": "https://res.wang64.cn/Music/lrc/wuyueyu.lrc"
  },
  {
    "name": "Sunburst(亚索台词版)",
    "artist": "GOI7",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=450455548&auth=4f7bd6fc6633fb8f31a862210ad53af727dc4832390457ee432608f1f44a224e",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951162834276715&auth=5cbd05b35302b8b108e1f93c784ce51e33f2f9d295842826046de7c789d8ee89",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=450455548&auth=45c2c80736d301daa00d65f089aa6b6feb800b44538d904bdfcf1029fe7ea48d"
  },
  {
    "name": "RISE",
    "artist": "The Glitch Mob / Mako / The Word Alive",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=1313107065&auth=dff454f8af145a5c6f40aa341ce09fbffca8ed0f8bb33a129ea41baf1895e11b",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163573081067&auth=24ae8bfcb0b20c713f3918860225a7f094a913a041d1d290b639c215c414a540",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=1313107065&auth=c479e7ec0cb3dd44fbbe169d10e50f480be9155321939e669bf886b2f2841dd3"
  },
  {
    "name": "Legends Never Die(Remix)",
    "artist": "Alan Walker",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=517411583&auth=59539864ead77c780f153551ab2c0df6736e3203452c3f5468e531fc49791bec",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163057263049&auth=ee058563b321f1459aa91355868f00dfb27671335401d38568bef2f519150698",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=517411583&auth=edd16c3b28c62090f6901f4c1ddcb39a199c2b78c82cf69f385532899971f9fd"
  },
  {
    "name": "After the Afterparty(Remix)",
    "artist": "Charli XCX / Alan Walker",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=455311429&auth=e2e73b9336a0e43ab4d2bea062bbd8b5e0c5fb716a5deeec3f3ba28bd1cdcd7d",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18678503535004897&auth=ce023969a5b383ff2e460ada0462442bde8de3a645a2a615b7a62598aacc736e",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=455311429&auth=1f4ce8782bedfb2215b70d7cdd595c72229ace330c076d8791321854cf0b7364"
  },
  {
    "name": "Break Up in a Small Town",
    "artist": "Sam Hunt",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=29592100&auth=226325e64848246c739325c84eaab0a71bbace284fa03e0085f654b8b06db2a7",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163168888246&auth=8f11351bfac05d368ec94aead72eefa327a1f21b320212406a04c8174f7d9d08",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=29592100&auth=8673ec2d5906edc5ae7c7e37fbd38a3fb62f36b4e5725c5c59f140dfe0234f7b"
  },
  {
    "name": "Up Till Dawn (On The Move)",
    "artist": "Lucas & Steve",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=475264010&auth=2c2c3b08f34a69e3abbdf229c95d8e2060fb60444feb5d3403346bd816b56141",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18218907672791484&auth=2c80978aac21bbf1e0ec853e02fd80246fbae58182f7dab82a736f49b9d0e5df",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=475264010&auth=04efbf36b14802e3d3419269d71bc1d0f33357b21c50df23bf936707f4cccac3"
  },
  {
    "name": "Soldier",
    "artist": "Samantha Jade",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=27969800&auth=88e5bbc1f72806872d1b0a4685e134be6e9ec9317f5f08bab04fea3aa98b9eed",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163451366366&auth=c409af49e3cbc0d36533641491392949df29806d48db5db417e2bfbc23dd175d",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=27969800&auth=46a4e1d0b5b10fb122a4fb11450531645cf06cc790e9e5fa8032533ac3fbe8b7"
  },
  {
    "name": "Didn't Feel A Thing",
    "artist": "Future Duper / Emilie Adams",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=487434788&auth=ad98f63bed50c2621a1f050b129dfb448f97c9db3ed627110f104810e86b83ae",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=17801093254121637&auth=3e0d3e041afda8d8457a2131a0aef71d1407410ec26958e059e7d6dda219c0e5",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=487434788&auth=694f2fc4b2bf4171106a1d160e89e82341da5c6935c3e068df49e19d8b4376ec"
  },
  {
    "name": "Rising High",
    "artist": "Shavi / Beatrich",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=452986206&auth=c6667e7c3d1ad37b89e1057d0736d77e47f4c6a9b781b6d2913a1abe3440b72f",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18713687906447804&auth=c6bf01f20cb43fd4389b275ecca77a39e195bcd50ec4cd1f923e5229acf99738",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=452986206&auth=62e1bab5a018cf2054d73e6d0fb4e3685fd84d81bd7ea7bc7b10d5adb2b78281"
  },
  {
    "name": "Tattoo on My Face",
    "artist": "NLSN",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=463197312&auth=54c89012e1addff5eb7a20bcee4f183e15fb24820c468eda95d8ec873d330297",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=17782401556425788&auth=935106dbbfe6a537e4875e7296a97463d9d946be8c3f751c5468d852d5795bbb",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=463197312&auth=f9cd0a241ae89f35c181515c945c627d95094561000009e2b1eb0045690ab54d"
  },
  {
    "name": "Jar Of Love",
    "artist": "曲婉婷",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=25713016&auth=f6d4fd339418f2c97434b8c7e5c1b00f4221ad4627c1fcae86d218f8b7637db4",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=573945069746475&auth=5bed621adfc5bce9e2dbfad0bc30d764a560f2fd7614915d3ed25acdca876d1e",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=25713016&auth=02f366227f0bebff369876a7512fc805f28faafbfdc1f89aca75a64fbac801f0"
  },
  {
    "name": "1984",
    "artist": "Charlie Puth",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=28341474&auth=71a4fbcd2f98160af72ac25b7e44577e69f07c8d3309afe60500acf094284b10",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=5989039836611085&auth=0fb3fddb3833920d6ff96bc3e992e088d0ad089d91ef16d7a531233a2a0f6f67",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=28341474&auth=ff3bfc152c92138bf6d1dd34a579b1bd1962271a6467f524141494c540c0bb81"
  },
  {
    "name": "Attention",
    "artist": "Charlie Puth",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=473817398&auth=8c839d1c33b15f1e4f85fa62187f68efc36ad433db85131863a82e3b4d178f9c",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163281594877&auth=01bf76093955048cb2b06ca2439931362fcf6e760fe2579b7c463e673b1f2868",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=473817398&auth=b8a66c725e6817ef28d4d791bff5496b04ef17f8c742fa18d8732bcf3312aa28"
  },
  {
    "name": "Dangerously",
    "artist": "Charlie Puth",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=401249909&auth=81a4a5ad28da5d86f4795ca01c462e84ba0ce5a2240bd4b9478024bc6ab44c4a",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=3295236348738229&auth=683969f1e160b93ef1205ef048165b25e07b916ad94790a123d4ceb835289279",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=401249909&auth=73d1006a32121b5b1f433cfe2cbf175a1c897df44dd1516996123778723d6800"
  },
  {
    "name": "One Call Away",
    "artist": "Charlie Puth",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=34072434&auth=ae024279c427ff3bcf3e22c506938691063eda61f6985a79163fb5d65041bf87",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=3295236348738229&auth=683969f1e160b93ef1205ef048165b25e07b916ad94790a123d4ceb835289279",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=34072434&auth=d6754a996b0d5366842deff973fb67d1c7c8e7a9e5a7679351e13fc51aba9481"
  },
  {
    "name": "Look At Me Now",
    "artist": "Charlie Puth",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=28188171&auth=5fa26b62e417588da1477c2f8ec8fee353c9b49de6625d8afc14ad7b50ddc158",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=2576155743910424&auth=89125239cf2f4838d60c9048740001f849a168dadbf9e6f4bb54e8a578084960",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=28188171&auth=813f6368c05d27bfaeb9d520e8d8ae4b523688a289b446f556088bce1c380969"
  },
  {
    "name": "See You Again",
    "artist": "Wiz Khalifa / Charlie Puth",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=30953009&auth=63c1d9dd59e021c0bec019c901911c70542a9c54e9ed5d4e420cd224f265f01b",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=7731765766799133&auth=89b955b87afe4567d789b629504cbeb03560612b0a2b78575416ba04c41f7038",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=30953009&auth=d49eea5fee1d0d16e005c84fc9167e45cbe811eb44ae660bb9dbfe2f98408541"
  },
  {
    "name": "We Don't Talk Anymore",
    "artist": "Charlie Puth / Selena Gomez",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=401249910&auth=24c49252895ea69791f78454c3124032efabed599ba1e1478182a6ab8d3b4f98",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=3295236348738229&auth=683969f1e160b93ef1205ef048165b25e07b916ad94790a123d4ceb835289279",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=401249910&auth=8d927f68b841f0a43f4088362a04074b6b3bdae6e47e3f2107c01722ddbf727d"
  },
  {
    "name": "Wolves",
    "artist": "Selena Gomez / Marshmello",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=515269424&auth=ac11c9fd6ecc8d0837fffb81379ea91132e9dba292167faffcfd0df196097746",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=17902248323721194&auth=e748698707d3e0706236365a27f4750205e44867bdfb38f5492d439d1c08fa03",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=515269424&auth=af678e1e571a8d0b1788549139a0ed7d7dc297cc3baf5ab03b380dd5f660c7c7"
  },
  {
    "name": "Walk Away",
    "artist": "Dia Frampton",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=2529311&auth=b5d27762fe9ef176149ed7ba93eee20e51e24a8601ea205ce1d6d61e24394c62",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163240603344&auth=a5dd2ac9702831a25c35ebf913283022932a696b9f6551c8a34df48641e52a74",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=2529311&auth=5d87e5e6ba1b0b3f5e1ddcad2b6416134ff4104d2252957d536ea5e1e5812ea6"
  },
  {
    "name": "Walk Away",
    "artist": "LVNDSCAPE / Kaptan",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=469243036&auth=2cb5718ec983fb8ec8982f9523597f4ebee2a27d3653b0c090bc9eaf0d73f8af",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=17724127440169524&auth=2005b638faa3a93ae6cc73b8f277015bd1573d11ff072128c1fb9a099138e03d",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=469243036&auth=7dda4180d90e955074da0da9a57b9bec70465e52245a5ddf14b61fb57e9fb8d3"
  },
  {
    "name": "Something Just Like This",
    "artist": "Alex Goot / Madilyn Bailey",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=470795480&auth=26e657aebadc8553e8494f9f554d01e24c116c80fb383db1f72e4297f603c26b",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18789554208920076&auth=1d758d89fa775992094b714d0d9f73d030e507fe7e2eca8e7422957dec7dadc0",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=470795480&auth=065f8396e3e7481d8900f9d3c9e1e8d24f708b93dfdc09e4e8f863638ad023e6"
  },
  {
    "name": "STYX HELIX",
    "artist": "MYTH & ROID",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=413961906&auth=2776b41087b06d73e225c8ec7f8cf1596dcb21af7c3e8db4aca8785ed7e150a1",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=1400777824444934&auth=7c2988e7db953ef41c1e993841d976a72c192e03ce47ee12414fbb1d7ceaa485",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=413961906&auth=a5a90948f2e9607458737edd2e1ce3fb352885b4fee2697f096d93f0ac58ea2f"
  },
  {
    "name": "HYDRA",
    "artist": "MYTH & ROID",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=536098015&auth=dea19abf5694c1d48c13d709aabeb47ffc783a3a5ce66dff7aa3e4ccc8847a7d",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163134854555&auth=a985c89935e99a5251f6ed429cc2ac24932be4f394d25c6b8a4832e117531931",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=536098015&auth=c298bc19c8974f278924400cccc8471df72dd2c739c11e4ceb90ffc196d16a17"
  },
  {
    "name": "Daisy",
    "artist": "STEREO DIVE FOUNDATION",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=28018269&auth=299875c136470508f6601b6dbe464d1359018ae58635ff6891cdb7f0ea9d2925",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=5830710162141432&auth=c9d1387684b5d51fabd36a6fa575a91e9d51e298e14be2b23a1a76e9bceaa9fb",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=28018269&auth=43f5ce9e7cd7e3f8f8bc540c75ca50d5e8f212530204cb7946b641399876f5c0"
  },
  {
    "name": "Perfect Time",
    "artist": "小林未郁",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=29814175&auth=fd2eb9ec1d1163c6d1928705a00f2bf99e87d7b8a26adb0efc56f1f316b822c2",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=2539871862623611&auth=5447d52f17bea67ad68c9be9cd5a18089601d844318b6340c36e4bbe0139c739",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=29814175&auth=a3cf47be4311a41cac24a8b42fa95eaa63cc3f15d08f25eb7df7f3a6b677f7f1"
  },
  {
    "name": "INNOCENCE",
    "artist": "藍井エイル",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=29027456&auth=51cb9eb3eb8457fb59f95c7ed7912340696d8bbe8a9054bc98baa5e40aee9231",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163573651083&auth=4918fb484df804915cf3bf1497d7cebfa6af7024763364e8e1e4fc37dd86e85e",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=29027456&auth=38a9bf23cb7bfdd317149ebb2f9e4bf97295e230ed5590aee3ad68ee6e703e8d"
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
    "name": "Sincerely",
    "artist": "唐沢美帆",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=534065323&auth=f503028b8daac1ebdfade0b795e114a1a79a9f2ba93f07b3f5bbfc2b2703adb8",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163124812552&auth=d4e9ec044c5a0dac87765cd7de42ec6b4ec06346ad2071d5f006b49671b74a9f",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=534065323&auth=373f7822b9d9b05ee6316b98fdad413705535522c436305d155e852dacb6de3a"
  },
  {
    "name": "飛竜の騎士",
    "artist": "唐沢美帆",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=402070932&auth=7c4165c795004ac5b884c69a3b521749ec9dcb9de17887ac0251edfecb7807ed",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=1426066581780458&auth=5c0edb03aeea4ae99f79721edd44f7a1b2a7fd2d15a61dae902e0d872ed6b7f6",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=402070932&auth=fa45908d941c735c3d322100e90d6121fcebf2e553493ad1b283e5d36c6ca10b"
  },
  {
    "name": "空想フォレスト",
    "artist": "伊東歌詞太郎",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=28524471&auth=3d59fd602407ad47d59a341e80778d0ee3f4062a8815daf9be4a8cdf71d98be7",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=5905476953010948&auth=b7f2baff5c0062a3a1f802d6b5bda7a08e788c675186a5d31466bc96e2e6ab6a",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=28524471&auth=42f052d335e9c4f7acf6d03629ad4027a9369ac8fda0c0c18e11f2e58ad27cbf"
  },
  {
    "name": "夏令时记录(piano.ver)",
    "artist": "ゆめこ",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=28757341&auth=0b1dca7e1a4864ee02f7faac97d4e29fad51e7c6861f3283561fb4afd3790eba",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=3294136838291294&auth=286611b9fbb7d0da36fe6ae3a7284d79cef1ae4954fec58a7250a5ed899755de",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=28757341&auth=45f0bfd39347106e1446476c49eea5dc3a31611473811877df8dc6724c963663"
  },
  {
    "name": "清明樱花祭",
    "artist": "RSP",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=805197&auth=d4414cc98a33c184a9157b22cbd07594050b7cf0b12b44210a2c4579d01be274",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=886206371987692&auth=555559bec8ba86cb3e340d87e5ae1b42bc19eda560409ea32ac6c5aea09ec0f5",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=805197&auth=bc9f06faaeba0c41f6aad007025d57fa2c7e5da6405a35cc8f71a0e401ef75b6"
  },
  {
    "name": "Lemon",
    "artist": "米津玄師",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=536622304&auth=646cded0097e9fe9ba454b1b1f3bd50943b79c9d569df17fc8ace883c4f6e0e7",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163561494000&auth=806e2590502637f6c6bd5c1cb0b4fbea598f19526c289a55bac8b2c9ffdd6c67",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=536622304&auth=4ddf2564074426984d5192562795b06c62219c361eef7aa2f405ba17de456a8a"
  },
  {
    "name": "打上花火",
    "artist": "DAOKO / 米津玄師",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=496869422&auth=dd20bf86e3ab64c71ecb6e48b1b1a970d63a0577ec0ef253122f6d0a97eb9b5f",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163009282836&auth=0d664b233926dd1cf143fa6a7ae402985bee60ddbc67f1f28b94299ff3b90a48",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=496869422&auth=6ab0079ccf6ca7921195e052a1dda2884dcba39bb9e9afb1d669a3f11710bd21"
  },
  {
    name: 'なんでもないや',
    artist: 'RADWIMPS',
    url: 'https://wang926454.gitee.io/reader/Music/RADWIMPS.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/xxx.png',
    lrc: 'https://res.wang64.cn/Music/lrc/xxx.lrc'
  },
  {
    "name": "1年2ヶ月20日",
    "artist": "BRIGHT",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=22647928&auth=c1015b76a3c79631908b1b0439b5597d5708fd9e9d99dea140a92eed12e3e30e",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18767563976295305&auth=90ce266c063b7c27dc83cf8721820b2fa58fdd9d89f191b56d74e957b69d843d",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=22647928&auth=4942d097f62985b528f4e7dbac0a8bd8f4e45943fe59822c9dbec94bac5baff5"
  },
  {
    "name": "光るなら",
    "artist": "Goose house",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=29732992&auth=3ffc9479b76fa8411003d347153ba85f19516811a39a48f31c6c6fb4955971e7",
    "cover": "https://wang926454.gitee.io/reader/Music/image/goosehouseguang.png",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=29732992&auth=cb4491a7f1b9d070ad1ad4de8ac6b9359611614f139e646c41a1e90278ae4366"
  },
  {
    "name": "風に薫る夏の記憶",
    "artist": "AAA",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=28633433&auth=f82af8970d313b937738bc5d62b5339540cad90ba6a18384422338876c325404",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18673005976896775&auth=a0de127fc2acde13ce0cd8ad72a5897dbc7f950aaa8156190a12423400cfed1e",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=28633433&auth=1a666fa25e389630681d3cd9832ca1fcd033e68c3fa2379f646fdb2ca00f13ac"
  },
  {
    name: 'Hope',
    artist: 'Namie Amuro',
    url: 'https://wang926454.gitee.io/reader/Music/hope.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/hope.png',
    lrc: 'https://res.wang64.cn/Music/lrc/hope.lrc'
  },
  {
    "name": "永久指针",
    "artist": "海贼王",
    "url": "https://api.i-meto.com/api/v1/meting?server=kugou&type=url&id=33b8e34abccbbb5c9a425eff5012812f&auth=7464ba48986d9ce6c47ce0d446fed86ee56c4c5e0d4f64527a0cf6aebed569b4",
    "cover": "https://wang926454.gitee.io/reader/Music/image/yongjiuzhizhen.png",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=425710117&auth=3393ed488ddb3aefbb60960dd74f76d717333025a35651772f2e4a8db9ba14ce"
  },
  {
    "name": "一直很安静",
    "artist": "阿桑",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=205274&auth=0ed6e3e5fdeb7b54620f52c0c68d4adf74518b138e1f65bde52801420968c80f",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163167455610&auth=a9142352f99da1ac69b644a653ed8563cc20bfd66a993cabd6fc2c5f5a3fc477",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=205274&auth=d47c84501e24ffc53b4c8e7b3b636c16f170fa472257a651c2bfd3130656101e"
  },
  {
    "name": "空空如也",
    "artist": "胡66",
    "url": "https://api.i-meto.com/api/v1/meting?server=kugou&type=url&id=5c1bb55ccd20f85aa9816daa7649bdef&auth=cb0d773aac5d78f7d9a582f05ea1130bba5167783e5ef502287d34401073b766",
    "cover": "https://api.i-meto.com/api/v1/meting?server=kugou&type=pic&id=5c1bb55ccd20f85aa9816daa7649bdef&auth=c8dee393170b5764bbe1db8c5b563f766e785b29347b9abb2b2caa0ca93e294c",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=kugou&type=lrc&id=5c1bb55ccd20f85aa9816daa7649bdef&auth=a8f501d55a4512ecb83e898c21f273902b2cf53114f4ec618d1b4a9dc1f7a7a8"
  },
  {
    "name": "说散就散",
    "artist": "JC陈泳彤",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=468513829&auth=60f2e6fe17ffa263e2f9453ecb62a1ba071bf1f94a9a281955864cd5b67ca98e",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=19095218439644352&auth=04fe6c02073024ebb3dbfca1f71bc7ecd4aea90b88a8f0fb5fba5b027088efb0",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=468513829&auth=fb5ff8303138d99779d1f84a8009a5c9e7a3181a0817a5b16c260650216e1b4e"
  },
  {
    "name": "光年之外",
    "artist": "G.E.M.邓紫棋",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=449818741&auth=a1a1ccd9e682ab0fbfefd788b5f239a67641c9203929d7750dea9c2a64ded1c6",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=18587244069235039&auth=9f2351fdb8985e90f0b1af92da6f9db9bfe007e49cdbb58fd208f77e176f1377",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=449818741&auth=df1f079131c3e8968632018d103906ac7a0038197840da4f8cf58f07cd162a61"
  },
  {
    "name": "侧脸",
    "artist": "于果",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=534542079&auth=23ca711e24504a7420ea65febbab0d534a1dfab03dd0a923cf418dcbc9167210",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163127272432&auth=140fc7a5b725ab5a3196f0b3b0d256470ce61ed201347710b51e63f86acda580",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=534542079&auth=9338726635f1d92c9f29af3af357e2c4f53113c8436fa32f4bd26db181a24edb"
  },
  {
    "name": "哑巴",
    "artist": "薛之谦",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=557583281&auth=9e3f423828ed5d835d54aa88ec545efbfe84e214ebebc410c509acce157576e8",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163290444676&auth=2d0e6eddef2b94e5d06c743222e684c187878a6fdee6b057a2ba86a305754159",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=557583281&auth=0def593593a46220027492ab14e6cdcf7d07b9da9782bb09f86a9bee473aec2d"
  },
  {
    "name": "暧昧",
    "artist": "薛之谦",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=471385043&auth=b66750ca49602d5fa41bbbbe63303b24d1af24b862a9593677491e1b15c904ef",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163069265719&auth=1ab5a3ee41bebc3e19ba3851bbce29f1208df3dec2cbf47994bcea3602191d1c",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=471385043&auth=8f43b083046b39f7bd692493e91236b559d7b341d0b2066e5ab908a2ead11760"
  },
  {
    "name": "我好像在哪见过你",
    "artist": "薛之谦",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=417859631&auth=c493497186ed98bf7d5b1457c59091ba19df5476f42dfc8225ecd293e0028933",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=1369991500930171&auth=d4777fae9006d0bc476b4372c5e83bc666ab4b7ed40e67afb47493d4be6fc777",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=417859631&auth=cd859979e4ca345f8e46622089fc2dc4f01c446833742be3eb4f8c1e92b766d3"
  },
  {
    "name": "为你我受冷风吹",
    "artist": "大壮",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=439139817&auth=41370fe0a5cae01b4dc415b4ffc7bced9aaf7c7ea7b1b1edeafbadb18d43d495",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951162806037796&auth=f642f7d9cbbf6da0fec786174a0aa819f9ec1a4c6ce8a3cad2e2a5068f9c481c",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=439139817&auth=5ccc03ef8f87f2af4aae1236125e1b9f11741c0978b76f2924c320ad000ca452"
  },
  {
    "name": "你要的全拿走",
    "artist": "胡彦斌",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=529668356&auth=acf18e569ee92d2fc81ceb30df1bed4f5c91e99822f2bbebd9761a81fd2ed764",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163118372627&auth=ef29691d28f62ff82797d19f6d53918b2d94ef41f6e1b2528769e4bbd9e60d12",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=529668356&auth=a3f8343e294ea10165afa661ddc07f08a74fad649271e2599270a085b7031166"
  },
  {
    "name": "走着走着就散了",
    "artist": "庄心妍",
    "url": "https://api.i-meto.com/api/v1/meting?server=kugou&type=url&id=ea3c81d87e3690ba5f5291f163a92f52&auth=83344c619c0a4371dcc930e9efc23e981f468d9a0048810d09dce9a95c5ecf16",
    "cover": "https://api.i-meto.com/api/v1/meting?server=kugou&type=pic&id=ea3c81d87e3690ba5f5291f163a92f52&auth=2f46e3b483ec878899a244b81170c79fddcf4cb9539578819156f8e4eb4a75b9",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=kugou&type=lrc&id=ea3c81d87e3690ba5f5291f163a92f52&auth=58cf3a357d22f98fd95dabbf6ec3e369c2688250f0021d4465d0ee807e6c4647"
  },
  {
    "name": "一百万个可能",
    "artist": "Christine Welch",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=29722582&auth=a99ba6acd5bbebfa5bf709ee3cbff4788aadb0714c6f97fffdfa811719100be1",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=2532175280446455&auth=f69244cf3c2ee623efdd5c8a779ed970cdeec23c9544a338d7a054fe4154ef88",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=29722582&auth=db6bec14559360b16d7326bc4f0e0950011d4810ee7c3d29d55f6d816c290e69"
  },
  {
    name: '烟火里的尘埃',
    artist: '郁欢',
    url: 'https://wang926454.gitee.io/reader/Music/yanhuolidechenai.mp3',
    cover: 'https://wang926454.gitee.io/reader/Music/image/yanhuolidechenai.png',
    lrc: 'https://res.wang64.cn/Music/lrc/yanhuolidechenai.lrc'
  },
  {
    "name": "往后余生",
    "artist": "王贰浪",
    "url": "https://api.i-meto.com/api/v1/meting?server=netease&type=url&id=571338279&auth=be3d1c575723e5b1bc91c7a14bf01704de7840a73fce94bd4f403c2185ddf9b1",
    "cover": "https://api.i-meto.com/api/v1/meting?server=netease&type=pic&id=109951163337847600&auth=ff29461b9b941cdd0032e4d6e0251d356d8e3365ac62566de8f24e6c8ce305a7",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=netease&type=lrc&id=571338279&auth=021394de7f284fc777ec0cdb409135cd18abb714cad8fef248f9c89f69d263b9"
  },
  {
    "name": "从别后",
    "artist": "流浪的蛙蛙",
    "url": "https://api.i-meto.com/api/v1/meting?server=kugou&type=url&id=502937beb2c86b9676f9576126a01ce7&auth=120a02726e1cbdcada9d9f50e7bede3d5b91e868ca6b8a6c72b8f3d5cfc123d5",
    "cover": "https://api.i-meto.com/api/v1/meting?server=kugou&type=pic&id=502937beb2c86b9676f9576126a01ce7&auth=c6b85d1da3b805560dc08f02af65740fac39d230faf178a4cfc8b2ae2d077dcb",
    "lrc": "https://api.i-meto.com/api/v1/meting?server=kugou&type=lrc&id=502937beb2c86b9676f9576126a01ce7&auth=0cf1095c27d5201c9589b8e1c36edbb25f935cd24633ce52e4557595d9272e3c"
  }
];


var aplist = [];

function getList(){
  return aplist;
}

function getLove(){
  return aplove;
}