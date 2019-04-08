
// 设置静态资源的线上路径
const publicPath = 'http://jalonjs/cml-first-demo/dist';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  enableLinter: false,
  platforms: ["web","weex","wx", "alipay", "baidu"],
  check: {
    enable: true,
    enableTypes: ["Object", "Array", "Nullable"]
  },
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      minimize: false,
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix,
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

