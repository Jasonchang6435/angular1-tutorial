const express = require('express')
const { log } = require('../utils')
const router = express()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({
    extended: true
}))
router.use(bodyParser.json())
// router.all('/', function (req, res, next) {
//     console.log('fooing the secret section ...');
//     const n = next();
//     pass control to the next handler
// })

router.get('/materials',(req,res) => {
    var a = [{"category":"C","materialCode":"GJ-C-01","subCategory2":null,"createBy":"Admin","materialName":"带刻度外卡规","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-05","subCategory2":null,"createBy":"Admin","materialName":"微型电动打磨机","subCategory":"工具","unit":"套","spec":"ANC600+SH37LN","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-06","subCategory2":null,"createBy":"Admin","materialName":"打磨机102L-28前胶垫","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-07","subCategory2":null,"createBy":"Admin","materialName":"带柄羊毛白色粘轮","subCategory":"工具","unit":"个","spec":"T型，厚5mm*Φ25cm,柄径：2.35mm","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-08","subCategory2":null,"createBy":"Admin","materialName":"手术刀片","subCategory":"工具","unit":"片","spec":"11号","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-09","subCategory2":null,"createBy":"Admin","materialName":"手术刀柄 3＃","subCategory":"工具","unit":"把","spec":" 3＃","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-10","subCategory2":null,"createBy":"Admin","materialName":"打磨机102L-30后胶垫","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-11","subCategory2":null,"createBy":"Admin","materialName":"金冠剪（弯）","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-12","subCategory2":null,"createBy":"Admin","materialName":"三瓣簧 2.35","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-13","subCategory2":null,"createBy":"Admin","materialName":"碳刷","subCategory":"工具","unit":"套","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-16","subCategory2":null,"createBy":"Admin","materialName":"不锈钢砂护盖","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-17","subCategory2":null,"createBy":"Admin","materialName":"蜡型雕刻刀","subCategory":"工具","unit":"把","spec":"46号","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-18","subCategory2":null,"createBy":"Admin","materialName":"膜片剪","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-19","subCategory2":null,"createBy":"Admin","materialName":"不锈钢方盘","subCategory":"工具","unit":"个","spec":"30cm*40cm*4cm","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-20","subCategory2":null,"createBy":"Admin","materialName":"石膏碗 L","subCategory":"工具","unit":"个","spec":" L","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-21","subCategory2":null,"createBy":"Admin","materialName":"石膏碗 XL","subCategory":"工具","unit":"个","spec":" XL","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-22","subCategory2":null,"createBy":"Admin","materialName":"单槽融蜡器","subCategory":"工具","unit":"个","spec":"单槽","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-24","subCategory2":null,"createBy":"Admin","materialName":"压膜机橡胶圈","subCategory":"工具","unit":"包","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-25","subCategory2":null,"createBy":"Admin","materialName":"压膜机弹簧片","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-26","subCategory2":null,"createBy":"Admin","materialName":"打磨机电源盒","subCategory":"工具","unit":"套","spec":"ANC600","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-28","subCategory2":null,"createBy":"Admin","materialName":"蓝胶","subCategory":"工具","unit":"包","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-29","subCategory2":null,"createBy":"Admin","materialName":"脚踏（清洗机用）","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-30","subCategory2":null,"createBy":"Admin","materialName":"量筒（1000ml）","subCategory":"工具","unit":"个","spec":"1000ml","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-31","subCategory2":null,"createBy":"Admin","materialName":"量筒（250ml）","subCategory":"工具","unit":"个","spec":"250ml","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-32","subCategory2":null,"createBy":"Admin","materialName":"Hu-Friedy 钳子","subCategory":"工具","unit":"把","spec":"678-800","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-60","subCategory2":null,"createBy":"Admin","materialName":"钨钢磨头","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"GJ-C-65","subCategory2":null,"createBy":"Admin","materialName":"探针","subCategory":"工具","unit":"把","spec":"5号","createTime":1510730859000},{"category":"C","materialCode":"JL-C-03","subCategory2":null,"createBy":"Admin","materialName":"卡钳表","subCategory":"计量器具","unit":"个","spec":"0-10*0.05mm","createTime":1510730859000},{"category":"C","materialCode":"JL-C-06","subCategory2":null,"createBy":"Admin","materialName":"数显游标卡尺","subCategory":"计量器具","unit":"把","spec":"0-150mm","createTime":1510730859000},{"category":"C","materialCode":"LB-C-01","subCategory2":null,"createBy":"Admin","materialName":"白色吨袋","subCategory":"劳保用品","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-03","subCategory2":null,"createBy":"Admin","materialName":"雨鞋","subCategory":"劳保用品","unit":"双","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-04","subCategory2":null,"createBy":"Admin","materialName":"塑料围裙","subCategory":"劳保用品","unit":"条","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-06","subCategory2":null,"createBy":"Admin","materialName":"活性炭口罩","subCategory":"劳保用品","unit":"盒","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-07","subCategory2":null,"createBy":"Admin","materialName":"防静电工作帽","subCategory":"劳保用品","unit":"顶","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-10","subCategory2":null,"createBy":"Admin","materialName":"白大褂工作服M号","subCategory":"劳保用品","unit":"件","spec":"M","createTime":1510730859000},{"category":"C","materialCode":"LB-C-14","subCategory2":null,"createBy":"Admin","materialName":"工业吸水纸","subCategory":"劳保用品","unit":"卷","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-15","subCategory2":null,"createBy":"Admin","materialName":"吸水卫生纸","subCategory":"劳保用品","unit":"包","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-16","subCategory2":null,"createBy":"Admin","materialName":"医用胶带","subCategory":"劳保用品","unit":"卷","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-17","subCategory2":null,"createBy":"Admin","materialName":"一次性乳胶手套小号","subCategory":"劳保用品","unit":"副","spec":"小号","createTime":1510730859000},{"category":"C","materialCode":"LB-C-18","subCategory2":null,"createBy":"Admin","materialName":"一次性乳胶手套中号","subCategory":"劳保用品","unit":"副","spec":"小号","createTime":1510730859000},{"category":"C","materialCode":"LB-C-19","subCategory2":null,"createBy":"Admin","materialName":"一次性乳胶手套大号","subCategory":"劳保用品","unit":"副","spec":"小号","createTime":1510730859000},{"category":"C","materialCode":"LB-C-23","subCategory2":null,"createBy":"Admin","materialName":"白色无尘鞋38号","subCategory":"劳保用品","unit":"双","spec":"38号","createTime":1510730859000},{"category":"C","materialCode":"LB-C-28","subCategory2":null,"createBy":"Admin","materialName":"防静电工作服M号","subCategory":"劳保用品","unit":"件","spec":"M","createTime":1510730859000},{"category":"C","materialCode":"LB-C-31","subCategory2":null,"createBy":"Admin","materialName":"75%乙醇","subCategory":"劳保用品","unit":"瓶","spec":"75%，500ml","createTime":1510730859000},{"category":"C","materialCode":"LB-C-32","subCategory2":null,"createBy":"Admin","materialName":"蓝大褂M","subCategory":"劳保用品","unit":"件","spec":"M","createTime":1510730859000},{"category":"C","materialCode":"LB-C-36","subCategory2":null,"createBy":"Admin","materialName":"防尘口罩","subCategory":"劳保用品","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-37","subCategory2":null,"createBy":"Admin","materialName":"防静电袖套","subCategory":"劳保用品","unit":"付","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-38","subCategory2":null,"createBy":"Admin","materialName":"汗布手套","subCategory":"劳保用品","unit":"付","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-39","subCategory2":null,"createBy":"Admin","materialName":"灯管","subCategory":"劳保用品","unit":"支","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-40","subCategory2":null,"createBy":"Admin","materialName":"灯座","subCategory":"劳保用品","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-41","subCategory2":null,"createBy":"Admin","materialName":"创可贴","subCategory":"劳保用品","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-42","subCategory2":null,"createBy":"Admin","materialName":"蛇皮袋","subCategory":"劳保用品","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-46","subCategory2":null,"createBy":"Admin","materialName":"LED 格栅灯","subCategory":"劳保用品","unit":"个","spec":"120*120CM","createTime":1510730859000},{"category":"C","materialCode":"LB-C-47","subCategory2":null,"createBy":"Admin","materialName":"防护眼镜","subCategory":"劳保用品","unit":"付","spec":"3M","createTime":1510730859000},{"category":"C","materialCode":"LB-C-48","subCategory2":null,"createBy":"Admin","materialName":"一次性无纺布口罩","subCategory":"劳保用品","unit":"盒","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-49","subCategory2":null,"createBy":"Admin","materialName":"无粉乳胶手套  S号","subCategory":"劳保用品","unit":"付","spec":"S","createTime":1510730859000},{"category":"C","materialCode":"LB-C-50","subCategory2":null,"createBy":"Admin","materialName":"无粉乳胶手套  M号","subCategory":"劳保用品","unit":"付","spec":"M","createTime":1510730859000},{"category":"C","materialCode":"LB-C-51","subCategory2":null,"createBy":"Admin","materialName":"刷子2.5寸","subCategory":"劳保用品","unit":"把","spec":"2.5寸","createTime":1510730859000},{"category":"C","materialCode":"LB-C-52","subCategory2":null,"createBy":"Admin","materialName":"84消毒液","subCategory":"劳保用品","unit":"瓶","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-54","subCategory2":null,"createBy":"Admin","materialName":"无尘抹布","subCategory":"劳保用品","unit":"块","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-57","subCategory2":null,"createBy":"Admin","materialName":"包装桶","subCategory":"劳保用品","unit":"个","spec":"200KG容量","createTime":1510730859000},{"category":"C","materialCode":"LB-C-58","subCategory2":null,"createBy":"Admin","materialName":"耳塞","subCategory":"劳保用品","unit":"个","spec":"3M","createTime":1510730859000},{"category":"C","materialCode":"LB-C-59","subCategory2":null,"createBy":"Admin","materialName":"3M无尘抹布","subCategory":"劳保用品","unit":"块","spec":"3M","createTime":1510730859000},{"category":"C","materialCode":"LB-C-60","subCategory2":null,"createBy":"Admin","materialName":"白色无尘布","subCategory":"劳保用品","unit":"包","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-61","subCategory2":null,"createBy":"Admin","materialName":"加长乳胶手套","subCategory":"劳保用品","unit":"付","spec":"加长","createTime":1510730859000},{"category":"C","materialCode":"LB-C-62","subCategory2":null,"createBy":"Admin","materialName":"安全鞋","subCategory":"劳保用品","unit":"双","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-63","subCategory2":null,"createBy":"Admin","materialName":"擦镜纸","subCategory":"劳保用品","unit":"本","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"LB-C-64","subCategory2":null,"createBy":"Admin","materialName":"刷子 11cm","subCategory":"劳保用品","unit":"把","spec":"11cm","createTime":1510730859000},{"category":"C","materialCode":"SB-C-21","subCategory2":null,"createBy":"Admin","materialName":"压膜机 MINISTR S 230V","subCategory":"设备","unit":"台","spec":"MINISTR S 230V","createTime":1510730859000},{"category":"C","materialCode":"SB-C-24","subCategory2":null,"createBy":"Admin","materialName":"打磨机手柄 SH37LN","subCategory":"工具","unit":"把","spec":" SH37LN","createTime":1510730859000},{"category":"C","materialCode":"SB-C-63","subCategory2":null,"createBy":"Admin","materialName":"韩国 振荡器","subCategory":"工具","unit":"台","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"SB-C-64","subCategory2":null,"createBy":"Admin","materialName":"国产振荡器","subCategory":"工具","unit":"台","spec":"圆盘型","createTime":1510730859000},{"category":"A","materialCode":"WL-A-01","subCategory2":"片材","createBy":"Admin","materialName":"Duran(!)0.75mm膜片","subCategory":"膜片","unit":"片","spec":"0.75mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-03","subCategory2":"片材","createBy":"Admin","materialName":"Duran0.5mm膜片","subCategory":"膜片","unit":"片","spec":"0.5mm*125mm ","createTime":1510730859000},{"category":"A","materialCode":"WL-A-04","subCategory2":"片材","createBy":"Admin","materialName":"德国爱科特0.8mm膜片","subCategory":"膜片","unit":"片","spec":"0.8mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-06","subCategory2":"片材","createBy":"Admin","materialName":"Duran0.75mm with foil膜片","subCategory":"膜片","unit":"片","spec":"0.75mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-07","subCategory2":"片材","createBy":"Admin","materialName":"1.25mmDZ膜片","subCategory":"膜片","unit":"片","spec":"1.25mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-09","subCategory2":"片材","createBy":"Admin","materialName":"Pro-form1.0mm膜片","subCategory":"膜片","unit":"片","spec":"1.0mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-10","subCategory2":"片材","createBy":"Admin","materialName":"Duran0.625mm膜片","subCategory":"膜片","unit":"片","spec":"0.625mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-12","subCategory2":"片材","createBy":"Admin","materialName":"Pro-form0.75mm膜片","subCategory":"膜片","unit":"片","spec":"0.75mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-15","subCategory2":"片材","createBy":"Admin","materialName":"Zendura A 0.76（单片装）","subCategory":"膜片","unit":"片","spec":"0.76mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-18","subCategory2":"片材","createBy":"Admin","materialName":"DURAN0.625mm带保护膜","subCategory":"膜片","unit":"片","spec":"0.625mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-20","subCategory2":"卷材","createBy":"Admin","materialName":"Zendura卷材0.76mm","subCategory":"膜片","unit":"卷","spec":"0.76mm*137mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-21","subCategory2":null,"createBy":"Admin","materialName":"Zendura卷材1.02mm","subCategory":"膜片","unit":"米","spec":"1.02mm*137mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-22","subCategory2":"片材","createBy":"Admin","materialName":"DURAN 0.625*125mm带保护膜","subCategory":"膜片","unit":"片","spec":"0.625mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-23","subCategory2":"片材","createBy":"Admin","materialName":"Zendura0.625mm膜片","subCategory":"膜片","unit":"片","spec":"0.625mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-24","subCategory2":"片材","createBy":"Admin","materialName":"Zendura A 0.76mm膜片","subCategory":"膜片","unit":"片","spec":"0.76mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-25","subCategory2":"片材","createBy":"Admin","materialName":" 0.76mm膜片（冲切）","subCategory":"膜片","unit":"片","spec":"0.76mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-26","subCategory2":"卷材","createBy":"Admin","materialName":"Zendura卷材0.625mm","subCategory":"膜片","unit":"卷","spec":"0.625mm*137mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-27","subCategory2":"片材","createBy":"Admin","materialName":" 0.625mm膜片（冲切）","subCategory":"膜片","unit":"片","spec":"0.625mm*125mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-28","subCategory2":"卷材","createBy":"Admin","materialName":"EX-30 137EA (0.76mm卷材) ","subCategory":"膜片","unit":"卷","spec":"0.76mm*137mm","createTime":1510730859000},{"category":"A","materialCode":"WL-A-29","subCategory2":"片材","createBy":"Admin","materialName":"EX-30 0.76mm膜片（冲切）","subCategory":"膜片","unit":"片","spec":"0.76mm*125mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-01","subCategory2":null,"createBy":"Admin","materialName":"肖尔0.1mm隔离膜","subCategory":"辅料","unit":"片","spec":"0.1mm*125mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-05","subCategory2":null,"createBy":"Admin","materialName":"光固化树脂","subCategory":"树脂","unit":"kg","spec":"SOMOS 18420,10KG/桶","createTime":1510730859000},{"category":"B","materialCode":"WL-B-24","subCategory2":null,"createBy":"Admin","materialName":"矫治器内包装塑料袋","subCategory":"包装","unit":"个","spec":"120mm*125mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-25","subCategory2":null,"createBy":"Admin","materialName":"牙模专用光敏树脂","subCategory":"树脂","unit":"kg","spec":"LOKHESION C-UV6641B2REV11,10KG/桶","createTime":1510730859000},{"category":"B","materialCode":"WL-B-26","subCategory2":null,"createBy":"Admin","materialName":"单膜粘附件用内包袋","subCategory":"包装","unit":"个","spec":"120mm*125mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-27","subCategory2":null,"createBy":"Admin","materialName":"双膜粘附件用内包袋","subCategory":"包装","unit":"个","spec":"120mm*125mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-28","subCategory2":null,"createBy":"Admin","materialName":"双膜（2-1）内包袋","subCategory":"包装","unit":"个","spec":"120mm*125mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-29","subCategory2":null,"createBy":"Admin","materialName":"双膜（2-2）内包袋","subCategory":"包装","unit":"个","spec":"120mm*125mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-30","subCategory2":null,"createBy":"Admin","materialName":"无印刷三边封袋","subCategory":"包装","unit":"个","spec":"220mm*230mm","createTime":1510730859000},{"category":"B","materialCode":"WL-B-31","subCategory2":null,"createBy":"Admin","materialName":" RP-405-TA01普利生树脂","subCategory":"树脂","unit":"kg","spec":"5KG/桶","createTime":1510730859000},{"category":"C","materialCode":"WL-C-01","subCategory2":null,"createBy":"Admin","materialName":"酒精","subCategory":"辅料","unit":"kg","spec":"20KG/桶","createTime":1510730859000},{"category":"C","materialCode":"WL-C-02","subCategory2":null,"createBy":"Admin","materialName":"封口机封口带","subCategory":"工具","unit":"条","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-04","subCategory2":null,"createBy":"Admin","materialName":"路博润TPU2530塑料粒子","subCategory":"膜片原料","unit":"kg","spec":"25KG/包","createTime":1510730859000},{"category":"C","materialCode":"WL-C-05","subCategory2":null,"createBy":"Admin","materialName":"时代天使托盘（XS)","subCategory":"辅料","unit":"套","spec":"XS","createTime":1510730859000},{"category":"C","materialCode":"WL-C-07","subCategory2":null,"createBy":"Admin","materialName":"不锈钢矫治器周转盒（10格）","subCategory":"工装器具","unit":"个","spec":"10格","createTime":1510730859000},{"category":"C","materialCode":"WL-C-10","subCategory2":null,"createBy":"Admin","materialName":"打磨机转子","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-100","subCategory2":null,"createBy":"Admin","materialName":"锯条 （ 9.8㎝）","subCategory":"工具","unit":"根","spec":"9.8cm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-101","subCategory2":null,"createBy":"Admin","materialName":"日进雕刻刀07160","subCategory":"工具","unit":"把","spec":"7160","createTime":1510730859000},{"category":"C","materialCode":"WL-C-102","subCategory2":null,"createBy":"Admin","materialName":"塑料调刀（20㎝）","subCategory":"工具","unit":"把 ","spec":"20cm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-104","subCategory2":null,"createBy":"Admin","materialName":"320*220mm自封袋","subCategory":"包装","unit":"个","spec":"320*220mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-105","subCategory2":null,"createBy":"Admin","materialName":"100*150mm自封袋","subCategory":"包装","unit":"个","spec":"100*150mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-107","subCategory2":null,"createBy":"Admin","materialName":"9号信封","subCategory":"印刷品","unit":"个","spec":"9号","createTime":1510730859000},{"category":"C","materialCode":"WL-C-108","subCategory2":null,"createBy":"Admin","materialName":"时代天使托盘（S)","subCategory":"辅料","unit":"套","spec":"S","createTime":1510730859000},{"category":"C","materialCode":"WL-C-11","subCategory2":null,"createBy":"Admin","materialName":"打磨机卡簧","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-111","subCategory2":null,"createBy":"Admin","materialName":"时代天使托盘（XL)","subCategory":"辅料","unit":"套","spec":"XL","createTime":1510730859000},{"category":"C","materialCode":"WL-C-112","subCategory2":null,"createBy":"Admin","materialName":"矫治器盒","subCategory":"包装","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-117","subCategory2":null,"createBy":"Admin","materialName":"迷你光盘盒","subCategory":"包装","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-119","subCategory2":null,"createBy":"Admin","materialName":"MARATHON Mtplus 天然钻石磨片234mm","subCategory":"工具","unit":"张","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-12","subCategory2":null,"createBy":"Admin","materialName":"打磨机小螺钉","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-122","subCategory2":null,"createBy":"Admin","materialName":"卓联A4打印标签 ZL-2912C","subCategory":"印刷品","unit":"张","spec":"2912C","createTime":1510730859000},{"category":"C","materialCode":"WL-C-124","subCategory2":null,"createBy":"Admin","materialName":"韩国打磨机90型备用轴承S号","subCategory":"工具","unit":"个","spec":"S","createTime":1510730859000},{"category":"C","materialCode":"WL-C-13","subCategory2":null,"createBy":"Admin","materialName":"CA-FLASH分离剂","subCategory":"辅料","unit":"瓶","spec":"100ml/瓶","createTime":1510730859000},{"category":"C","materialCode":"WL-C-135","subCategory2":null,"createBy":"Admin","materialName":"临床反馈表","subCategory":"印刷品","unit":"张","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-139","subCategory2":null,"createBy":"Admin","materialName":"碳带80x300","subCategory":"印刷品","unit":"卷","spec":"80mmx300M","createTime":1510730859000},{"category":"C","materialCode":"WL-C-14","subCategory2":null,"createBy":"Admin","materialName":"蒸汽清洗机喷笔","subCategory":"工具","unit":"支","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-140","subCategory2":null,"createBy":"Admin","materialName":"时代天使用户服务手册","subCategory":"印刷品","unit":"本","spec":"120mm*120mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-144","subCategory2":null,"createBy":"Admin","materialName":"五层瓦楞纸板（大）","subCategory":"包装","unit":"张","spec":"565mm*625mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-145","subCategory2":null,"createBy":"Admin","materialName":"EABⅡ型使用说明书","subCategory":"印刷品","unit":"张","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-148","subCategory2":null,"createBy":"Admin","materialName":"分子筛","subCategory":"辅料","unit":"包","spec":"4A,5g/包，包材：杜邦纸","createTime":1510730859000},{"category":"C","materialCode":"WL-C-15","subCategory2":null,"createBy":"Admin","materialName":"碳刷后座","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-16","subCategory2":null,"createBy":"Admin","materialName":"齿科藻酸盐印模材（3月启用）","subCategory":"辅料","unit":"kg","spec":"1KG/桶","createTime":1510730859000},{"category":"C","materialCode":"WL-C-17","subCategory2":null,"createBy":"Admin","materialName":"封口机高温带","subCategory":"工具","unit":"条","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-19","subCategory2":null,"createBy":"Admin","materialName":"无锡矫治器内包装塑料盒","subCategory":"包装","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-21","subCategory2":null,"createBy":"Admin","materialName":"大礼盒","subCategory":"包装","unit":"个","spec":"26*20*8","createTime":1510730859000},{"category":"C","materialCode":"WL-C-22","subCategory2":null,"createBy":"Admin","materialName":"瓦楞纸箱（小号）21cm*11cm*14cm","subCategory":"包装","unit":"个","spec":"21cm*11cm*14cm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-24","subCategory2":null,"createBy":"Admin","materialName":"瓦楞纸箱（中号）30.5cm*10.5cm*25cm","subCategory":"包装","unit":"个","spec":"30.5cm*10.5cm*25cm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-25","subCategory2":null,"createBy":"Admin","materialName":"瓦楞纸箱（大号）30.5cm*21cm*25cm","subCategory":"包装","unit":"个","spec":"30.5cm*21cm*25cm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-28","subCategory2":null,"createBy":"Admin","materialName":"超硬石膏（新）","subCategory":"辅料","unit":"kg","spec":"5KG/盒，2盒/箱","createTime":1510730859000},{"category":"C","materialCode":"WL-C-30","subCategory2":null,"createBy":"Admin","materialName":"矫治器塑料袋（中期）","subCategory":"包装","unit":"个","spec":"(26.5+6.5)*30CM","createTime":1510730859000},{"category":"C","materialCode":"WL-C-31","subCategory2":null,"createBy":"Admin","materialName":"空白标签 63.5*54","subCategory":"辅料","unit":"卷","spec":" 63.5*54mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-33","subCategory2":null,"createBy":"Admin","materialName":"170*250mm自封袋","subCategory":"包装","unit":"个","spec":"170*250mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-36","subCategory2":null,"createBy":"Admin","materialName":"正畸石膏（新）","subCategory":"辅料","unit":"kg","spec":"22KG/箱","createTime":1510730859000},{"category":"C","materialCode":"WL-C-37","subCategory2":null,"createBy":"Admin","materialName":"牙科模型蜡（红蜡板）","subCategory":"辅料","unit":"盒","spec":"500g/盒","createTime":1510730859000},{"category":"C","materialCode":"WL-C-39","subCategory2":null,"createBy":"Admin","materialName":"3#纸箱","subCategory":"包装","unit":"个","spec":"43cm*21cm*27cm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-40","subCategory2":null,"createBy":"Admin","materialName":"标签（蓝）","subCategory":"印刷品","unit":"卷","spec":"宽20mm*长70mm，兰色","createTime":1510730859000},{"category":"C","materialCode":"WL-C-41","subCategory2":null,"createBy":"Admin","materialName":"标签（黑）","subCategory":"印刷品","unit":"卷","spec":"宽20mm*长70mm，黑色","createTime":1510730859000},{"category":"C","materialCode":"WL-C-42","subCategory2":null,"createBy":"Admin","materialName":"委托加工单","subCategory":"印刷品","unit":"本","spec":"10份/本","createTime":1510730859000},{"category":"C","materialCode":"WL-C-43","subCategory2":null,"createBy":"Admin","materialName":"标签（紫）","subCategory":"印刷品","unit":"卷","spec":"宽20mm*长70mm，紫色","createTime":1510730859000},{"category":"C","materialCode":"WL-C-44","subCategory2":null,"createBy":"Admin","materialName":"空白标签 100*70","subCategory":"印刷品","unit":"卷","spec":"100*70mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-48","subCategory2":null,"createBy":"Admin","materialName":"无纺布鞋套","subCategory":"劳保用品","unit":"双","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-51","subCategory2":null,"createBy":"Admin","materialName":"消费者折页","subCategory":"印刷品","unit":"张","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-53","subCategory2":null,"createBy":"Admin","materialName":"不锈钢矫治器周转盒（5格）","subCategory":"工装器具","unit":"个","spec":"5格","createTime":1510730859000},{"category":"C","materialCode":"WL-C-54","subCategory2":null,"createBy":"Admin","materialName":"不锈钢矫治器周转盒（20格）","subCategory":"工装器具","unit":"个","spec":"20格","createTime":1510730859000},{"category":"C","materialCode":"WL-C-55","subCategory2":null,"createBy":"Admin","materialName":"碳带110*300","subCategory":"印刷品","unit":"卷","spec":"110*300mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-57","subCategory2":null,"createBy":"Admin","materialName":"轴承  1030","subCategory":"工具","unit":"个","spec":"1030","createTime":1510730859000},{"category":"C","materialCode":"WL-C-58","subCategory2":null,"createBy":"Admin","materialName":"轴承  1040","subCategory":"工具","unit":"个","spec":"1040","createTime":1510730859000},{"category":"C","materialCode":"WL-C-59","subCategory2":null,"createBy":"Admin","materialName":"轴承  1260","subCategory":"工具","unit":"个","spec":"1260","createTime":1510730859000},{"category":"C","materialCode":"WL-C-60","subCategory2":null,"createBy":"Admin","materialName":"轴承  1480","subCategory":"工具","unit":"个","spec":"1480","createTime":1510730859000},{"category":"C","materialCode":"WL-C-62","subCategory2":null,"createBy":"Admin","materialName":"时代天使粘胶带","subCategory":"印刷品","unit":"卷","spec":"48mm*100米","createTime":1510730859000},{"category":"C","materialCode":"WL-C-65","subCategory2":null,"createBy":"Admin","materialName":"EAB型使用说明书","subCategory":"印刷品","unit":"张","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-66","subCategory2":null,"createBy":"Admin","materialName":"双膜临床反馈表","subCategory":"印刷品","unit":"张","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-67","subCategory2":null,"createBy":"Admin","materialName":"双膜产品大礼盒","subCategory":"包装","unit":"个","spec":"258mm*218mm*86mm","createTime":1510730859000},{"category":"C","materialCode":"WL-C-68","subCategory2":null,"createBy":"Admin","materialName":"双膜产品用户服务手册","subCategory":"印刷品","unit":"本","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-69","subCategory2":null,"createBy":"Admin","materialName":"双膜产品小拎袋","subCategory":"印刷品","unit":"个","spec":"","createTime":1510730859000},{"category":"C","materialCode":"WL-C-70","subCategory2":null,"createBy":"Admin","materialName":"双膜产品大拎袋","subCategory":"印刷品","unit":"个","spec":"","createTime":1510730859000},{"category":"C","materialCode":"WL-C-87","subCategory2":null,"createBy":"Admin","materialName":"硅胶调伴杯","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-89","subCategory2":null,"createBy":"Admin","materialName":"滴蜡器E1﹟","subCategory":"工具","unit":"只","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-95","subCategory2":null,"createBy":"Admin","materialName":"石膏调刀","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-96","subCategory2":null,"createBy":"Admin","materialName":"红外加热器  MINISTR   230V","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-97","subCategory2":null,"createBy":"Admin","materialName":"电磁阀体 MINISTR   230V","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-98","subCategory2":null,"createBy":"Admin","materialName":"电磁阀线圈 MINISTR   230V","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000},{"category":"C","materialCode":"WL-C-99","subCategory2":null,"createBy":"Admin","materialName":"调压阀   MINISTR  230V","subCategory":"工具","unit":"个","spec":"/","createTime":1510730859000}]
    res.send(a)

})

router.get('/suppliers',(req,res) => {
    var a = [{"createBy":"Admin","supplierName":"SCHEU-DENTAL GmbH","createTime":1510730858000,"id":1},{"createBy":"Admin","supplierName":"天津迪吉思锐进出口贸易有限公司","createTime":1510730858000,"id":2},{"createBy":"Admin","supplierName":"Bay Materials LLC","createTime":1510730858000,"id":3},{"createBy":"Admin","supplierName":"Bixby International Corp","createTime":1510730858000,"id":4},{"createBy":"Admin","supplierName":"DSM Desotech BV.","createTime":1510730858000,"id":5},{"createBy":"Admin","supplierName":"东莞爱的合成材料科技有限公司","createTime":1510730858000,"id":6},{"createBy":"Admin","supplierName":"上海普利生机电科技有限公司","createTime":1510730858000,"id":7},{"createBy":"Admin","supplierName":"上海迪繁贸易有限公司","createTime":1510730858000,"id":8},{"createBy":"Admin","supplierName":"长治市健齿齿科器材有限公司","createTime":1510730858000,"id":9},{"createBy":"Admin","supplierName":"上海恒翌医疗器械有限公司","createTime":1510730858000,"id":10},{"createBy":"Admin","supplierName":"上海绿宇包装材料有限公司","createTime":1510730858000,"id":11},{"createBy":"Admin","supplierName":"苏州鹏翰材料科技有限公司","createTime":1510730858000,"id":12},{"createBy":"Admin","supplierName":"江苏申凯包装高新技术股份有限公司","createTime":1510730858000,"id":13},{"createBy":"Admin","supplierName":"无锡市鑫宏印刷有限公司","createTime":1510730858000,"id":14},{"createBy":"Admin","supplierName":"无锡皖北包装材料有限公司","createTime":1510730858000,"id":15},{"createBy":"Admin","supplierName":"无锡报业延嘉创意快印有限公司","createTime":1510730858000,"id":16},{"createBy":"Admin","supplierName":"上海创锦塑胶模具有限公司","createTime":1510730858000,"id":17},{"createBy":"Admin","supplierName":"无锡市苏创试剂仪器设备有限公司","createTime":1510730858000,"id":18},{"createBy":"Admin","supplierName":"上海华景医疗器材有限公司","createTime":1510730858000,"id":19},{"createBy":"Admin","supplierName":"上海玺涵广告有限公司","createTime":1510730858000,"id":20},{"createBy":"Admin","supplierName":"上海复星医疗系统有限公司","createTime":1510730858000,"id":21},{"createBy":"Admin","supplierName":"上海创锦塑胶模具有限公司","createTime":1510730858000,"id":22},{"createBy":"Admin","supplierName":"日进齿科材料（昆山）有限公司","createTime":1510730858000,"id":23},{"createBy":"Admin","supplierName":"江苏申凯包装高新技术股份有限公司","createTime":1510730858000,"id":24},{"createBy":"Admin","supplierName":"北京嘉联诚业医疗器械销售有限公司","createTime":1510730858000,"id":25},{"createBy":"Admin","supplierName":"北京中德绿洲科技有限公司","createTime":1510730858000,"id":26},{"createBy":"Admin","supplierName":"无锡高商气动工业有限公司","createTime":1510730858000,"id":27},{"createBy":"Admin","supplierName":"无锡海之源彩印包装有限公司","createTime":1510730858000,"id":28},{"createBy":"Admin","supplierName":"无锡沪光精美印刷有限公司","createTime":1510730858000,"id":29},{"createBy":"Admin","supplierName":"无锡赛利分子筛有限公司","createTime":1510730858000,"id":30},{"createBy":"Admin","supplierName":"无锡市东港机筛厂","createTime":1510730858000,"id":31},{"createBy":"Admin","supplierName":"无锡鑫凯力机械设备有限公司","createTime":1510730858000,"id":32},{"createBy":"Admin","supplierName":"网购","createTime":1510730858000,"id":33},{"createBy":"Admin","supplierName":"上海景益贸易有限公司","createTime":1510730858000,"id":34},{"createBy":"Admin","supplierName":"广州千汇牙科器材有限公司","createTime":1510730858000,"id":35},{"createBy":"Admin","supplierName":"泰夫恩贸易（上海）有限公司","createTime":1510730858000,"id":36},{"createBy":"Admin","supplierName":"无锡市星云照明电器有限公司","createTime":1510730858000,"id":37}]
    res.send(a)

})



module.exports = router
