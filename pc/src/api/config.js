import Qs from 'qs'

const longjuUrlHttps = 'https://test1api.longjubank.com/json/reply/HtmlRequest'
// cookie的名字配置
const cookieName = "test_userInfo";
// const longjuUrlHttps = 'http://192.168.110.210:8888/json/reply/HtmlRequest'
const Url = ''
const TopJetConfig = {
    AppId: "100212",
    Version: "1.0.0",
    Url: longjuUrlHttps,
    Datat: "jsonp",
    AjaxType: "post",
    Token: ""
}
const timestamp = Math.round(new Date().getTime() / 1000)
const GloblData = {
    ActionName: "",
    AppId: TopJetConfig.AppId,
    Data: "",
    MachineCode: "",
    MessageType: '',
    TimeStamp: timestamp,
    Token: TopJetConfig.Token, //
    Version: TopJetConfig.Version
}
export default {
    // 请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    url: Url,
    // 基础url前缀
    baseURL: TopJetConfig.Url,
    method: TopJetConfig.AjaxType,
    transformRequest: [
        function(data) {
            // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
            // data.strSQL = base64encode(data.strSQL);
            //由于使用的form-data传数据所以要格式化
            data = Qs.stringify(data)
            return data
        }
    ],
    transformResponse: [
        function(data) {
            // 这里提前处理返回的数据
            return data
        }
    ],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params: {

    },
    paramsSerializer: function(params) {
        return Qs.stringify(params)
    },
    //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    data: GloblData,
    // cookie名字声明
    cookieName:cookieName,
    timeout: 5000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default

    responseType: TopJetConfig.Datat, // default
    // `maxContentLength` 定义允许的响应内容的最大尺寸
    maxContentLength: 2000,

    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    },
    // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
    // 如果设置为0，将不会 follow 任何重定向
    maxRedirects: 5 // default
}

// function base64encode(str) {
//     var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//     var output = "";
//     var chr1, chr2, chr3 = "";
//     var enc1, enc2, enc3, enc4 = "";
//     var i = 0;
//     var input = utf16to8(str);
//     do {
//         chr1 = input.charCodeAt(i++);
//         chr2 = input.charCodeAt(i++);
//         chr3 = input.charCodeAt(i++);
//         enc1 = chr1 >> 2;
//         enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
//         enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
//         enc4 = chr3 & 63;
//         if (isNaN(chr2)) {
//             enc3 = enc4 = 64;
//         } else if (isNaN(chr3)) {
//             enc4 = 64;
//         }
//         output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
//         chr1 = chr2 = chr3 = "";
//         enc1 = enc2 = enc3 = enc4 = "";
//     } while (i < input.length);
//     return output;

// }

// function utf16to8(str) {
//     var out, i, len, c;
//     out = "";
//     len = str.length;
//     for (i = 0; i < len; i++) {
//         c = str.charCodeAt(i);
//         if ((c >= 0x0001) && (c <= 0x007F)) {
//             out += str.charAt(i);
//         } else if (c > 0x07FF) {
//             out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
//             out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
//             out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
//         } else {
//             out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
//             out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
//         }
//     }
//     return out;
// }
