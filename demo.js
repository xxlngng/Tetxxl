



// 伪代码


// const tasks = ['任务1','任务2','任务3'] // diff任务 有很多节点

// // task.forEach(t=> 执行任务(t))

// function workLoop(deadline){
//   // 如果当前帧又空闲时间，并且还有任务没做完，那就执行继续计算
//   // deadline是requesgIdleCallback传递的 

//   while(tasks.length>0 && deadline.timeRemaing()>1){
//     const t = task.pop() // 弹出一个任务 
//     执行任务(t) // 执行弹出的任务 
//     // 当前帧可能还没结束
//   }
//   // 执行到这里，
//   if(任务空了， asks.length===0){
//     // diff结束，准备提交修改
//     return
//   }
  
//   task还有，但是当前帧没时间了，把控制全交回去 等待下一次的空闲时间
//   window.requesgIdleCallback(workLoop)
  

// }
// // requesgIdleCallback是又兼容性问题的，react团队自己写了一个，就是用messageChannel ,requestAnimationFrame,setTimeouot等，一起模拟的
// window.requesgIdleCallback(workLoop)



// 时间切片，time-sliceing


// 最后一次任务执行时间太长怎么办
//   这种架构下，js占用浏览器主线程时间过长，浏览器仕没办法的

//   主动返还孔之前，如果不还了 浏览器也没办法，所以我们切片了，一定要切的颗粒度够细就i可以了





// fiber数据结构，让真个虚拟dom的diff过程可中断，之前的diff就是一个同步任务，这个任务根据业务dom节点的多少影响，
// fiber相当于把diff拆成了以单个虚拟dom节点的任务队列

// 通过空闲时间的调度逻辑，控制任务的执行

// 结果就是，diff计算量没有减少 ，但是用户感觉很流畅，不卡顿

// this 内容
ArticleController = {
  ctx: {
    request: {
      method: 'GET',
      url: '/article/606e57c08440c239303ed3ef',
      header: [Object]
    },
    response: {
      status: 404,
      message: 'Not Found',
      header: "[Object: null prototype] {}"
    },
    app: {
      env: 'local',
      name: 'server',
      baseDir: 'F:\\study\\xm+gongzh\\project-demo-master\\server',
      subdomainOffset: 2,
      config: '<egg config>',
      controller: '<egg controller>',
      httpclient: '<egg httpclient>',
      loggers: '<egg loggers>',
      middlewares: '<egg middlewares>',
      router: '<egg router>',
      serviceClasses: '<egg serviceClasses>'
    },
    originalUrl: '/article/606e57c08440c239303ed3ef',
    req: '<original node req>',
    res: '<original node res>',
    socket: '<original node socket>'
  },
  app: {
    env: 'local',
    name: 'server',
    baseDir: 'F:\\study\\xm+gongzh\\project-demo-master\\server',
    subdomainOffset: 2,
    config: '<egg config>',
    controller: '<egg controller>',
    httpclient: '<egg httpclient>',
    loggers: '<egg loggers>',
    middlewares: '<egg middlewares>',
    router: '<egg router>',
    serviceClasses: '<egg serviceClasses>'
  },
  config: {
    session: {
      maxAge: 86400000,
      key: 'EGG_SESS',
      httpOnly: true,
      encrypt: true,
      logValue: true,
      overwrite: true,
      signed: true,
      autoCommit: true,
      encode: [Function: encode],
      decode: [Function: decode],
      genid: [Function]
    },
    security: {
      domainWhiteList: [],
      protocolWhiteList: [],
      defaultMiddleware: 'csrf,hsts,methodnoallow,noopen,nosniff,csp,xssProtection,xframe,dta',
      csrf: [Object],
      xframe: [Object],
      hsts: [Object],
      dta: [Object],
      methodnoallow: [Object],
      noopen: [Object],
      nosniff: [Object],
      referrerPolicy: [Object],
      xssProtection: [Object],
      csp: [Object],
      ssrf: [Object],
      _protocolWhiteListSet: [Set]
    },
    helper: { shtml: {} },
    jsonp: { limit: 50, callback: [Array], csrf: false },
    onerror: {
      errorPageUrl: '',
      appErrorFilter: null,
      templatePath: 'F:\\study\\xm+gongzh\\project-demo-master\\server\\node_modules\\egg-onerror\\lib\\onerror_page.mustache'
    },
    i18n: {
      defaultLocale: 'en_US',
      dirs: [Array],
      queryField: 'locale',
      cookieField: 'locale',
      cookieDomain: '',
      cookieMaxAge: '1y',
      functionName: '__'
    },
    watcher: { type: 'development', eventSources: [Object] },
    customLogger: { scheduleLogger: [Object] },
    schedule: { directory: [] },
    multipart: {
      mode: 'file',
      autoFields: false,
      defaultCharset: 'utf8',
      fieldNameSize: 100,
      fieldSize: 102400,
      fields: 10,
      fileSize: 10485760,
      files: 10,
      fileExtensions: [],
      whitelist: [Function: whitelist],
      tmpdir: 'C:\\Users\\xuxia\\AppData\\Local\\Temp\\egg-multipart-tmp\\server',
      cleanSchedule: [Object]
    },
    development: {
      watchDirs: [],
      ignoreDirs: [],
      fastReady: false,
      reloadOnDebug: true,
      overrideDefault: false,
      overrideIgnore: false
    },
    logrotator: {
      filesRotateByHour: null,
      hourDelimiter: '-',
      filesRotateBySize: null,
      maxFileSize: 52428800,
      maxFiles: 10,
      rotateDuration: 60000,
      maxDays: 31
    },
    static: {
      prefix: '/public/',
      dir: 'F:\\study\\xm+gongzh\\project-demo-master\\server\\app\\public',
      dynamic: true,
      preload: false,
      buffer: false,
      maxFiles: 1000
    },
    view: {
      root: 'F:\\study\\xm+gongzh\\project-demo-master\\server\\app\\view',
      cache: false,
      defaultExtension: '.html',
      defaultViewEngine: '',
      mapping: {}
    },
    mongoose: {
      url: '',
      options: {},
      plugins: [],
      loadModel: true,
      app: true,
      agent: false,
      client: [Object]
    },
    routerGroup: {},
    validate: {},
    env: 'local',
    name: 'server',
    keys: 'server_1584231361040_3227',
    cookies: {},
    proxy: false,
    maxIpsCount: 0,
    maxProxyCount: 0,
    protocolHeaders: 'x-forwarded-proto',
    ipHeaders: 'x-forwarded-for',
    hostHeaders: '',
    pkg: {
      name: 'server',
      version: '1.0.0',
      description: '',
      private: true,
      egg: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      engines: [Object],
      scripts: [Object],
      husky: [Object],
      ci: [Object],
      repository: [Object],
      author: '',
      license: 'MIT',
      config: [Object]
    },
    baseDir: 'F:\\study\\xm+gongzh\\project-demo-master\\server',
    HOME: 'C:\\Users\\xuxia',
    rundir: 'F:\\study\\xm+gongzh\\project-demo-master\\server\\run',
    dump: { ignore: [Set] },
    confusedConfigurations: {
      bodyparser: 'bodyParser',
      notFound: 'notfound',
      sitefile: 'siteFile',
      middlewares: 'middleware',
      httpClient: 'httpclient'
    },
    notfound: { pageUrl: '' },
    siteFile: {
      '/favicon.ico': "<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 ca 00 00 00 ca 08 06 00 00 00 e4 65 df a8 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 18 f9 ... 6413 more bytes>"
    },
    bodyParser: {
      enable: true,
      encoding: 'utf8',
      formLimit: '1mb',
      jsonLimit: '1mb',
      textLimit: '1mb',
      strict: true,
      queryString: [Object],
      onerror: undefined,
      detectJSON: undefined,
      returnRawBody: true
    },
    logger: {
      dir: 'F:\\study\\xm+gongzh\\project-demo-master\\server\\logs\\server',
      encoding: 'utf8',
      env: 'local',
      level: 'INFO',
      consoleLevel: 'INFO',
      disableConsoleAfterReady: false,
      outputJSON: false,
      buffer: true,
      appLogName: 'server-web.log',
      coreLogName: 'egg-web.log',
      agentLogName: 'egg-agent.log',
      errorLogName: 'common-error.log',
      coreLogger: [Object],
      allowDebugAtProd: false,
      type: 'application'
    },
    httpclient: {
      enableDNSCache: false,
      dnsCacheLookupInterval: 10000,
      dnsCacheMaxLength: 1000,
      request: [Object],
      httpAgent: [Object],
      httpsAgent: [Object]
    },
    meta: { enable: true, logging: false },
    coreMiddleware: [
      'meta',
      'siteFile',
      'notfound',
      'static',
      'bodyParser',
      'overrideMethod',
      'session',
      'securities',
      'i18n',
      'multipart',
      'eggLoaderTrace'
    ],
    workerStartTimeout: 600000,
    serverTimeout: null,
    cluster: { listen: [Object] },
    clusterClient: { maxWaitTime: 60000, responseTimeout: 60000 },
    onClientError: null,
    UPLOAD_DIR: 'F:\\study\\xm+gongzh\\project-demo-master\\server\\app\\public',
    middleware: [],
    jwt: { secret: '@Kaikeba!123Abc!:' },
    coreMiddlewares: [
      'meta',
      'siteFile',
      'notfound',
      'static',
      'bodyParser',
      'overrideMethod',
      'session',
      'securities',
      'i18n',
      'multipart',
      'eggLoaderTrace'
    ],
    appMiddlewares: [],
    appMiddleware: [],
    multipartParseOptions: {
      autoFields: false,
      defCharset: 'utf8',
      limits: [Object],
      checkFile: [Function: checkFile]
    }
  },
  service:  {
    _cache:  {},
    _ctx: {
      request: [Object],
      response: [Object],
      app: [Object],
      originalUrl: '/article/606e57c08440c239303ed3ef',
      req: '<original node req>',
      res: '<original node res>',
      socket: '<original node socket>'
    }
  }
}



