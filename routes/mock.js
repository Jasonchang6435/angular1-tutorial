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

router.get('/tasks/count',(req,res) => {
    var a = {
          "taskCnt": 11
        }
    res.send(a)

})

router.get('/designModels',(req,res) => {
    var a = [
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-1-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 5,
    "step": 1,
    "jaw": "L",
    "produceType": "2",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-1-L_3",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 1,
    "jaw": "L",
    "produceType": "3",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-1-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 1,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-1-U_3",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 1,
    "jaw": "U",
    "produceType": "3",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-10-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 10,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-10-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 10,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-11-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 11,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-11-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 11,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-12-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 12,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-12-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 12,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-13-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 13,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-13-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 13,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-14-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 14,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-14-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 14,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-15-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 15,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-15-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 15,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-16-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 16,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-16-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 16,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-16-U_3",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 16,
    "jaw": "U",
    "produceType": "3",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-17-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 17,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-17-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 17,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-18-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 18,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-18-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 18,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-18-U_3",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 18,
    "jaw": "U",
    "produceType": "3",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-19-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 19,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-19-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 19,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-2-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 2,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-20-L_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 20,
    "jaw": "L",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-20-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 20,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-3-L_3",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 3,
    "jaw": "L",
    "produceType": "3",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-3-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 3,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-4-L_3",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 4,
    "jaw": "L",
    "produceType": "3",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-4-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 4,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-4-U_3",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 4,
    "jaw": "U",
    "produceType": "3",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-5-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 5,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-6-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 6,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-7-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 7,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-8-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 8,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
},
{
    "caseId": "C01000817758",
    "designModelId": "C01000817758-DC01000817758X02-9-U_1",
    "stl": null,
    "isPositiveModelSuccess": null,
    "isCuttingProfileSuccess": null,
    "modelMaxIndex": 1,
    "step": 9,
    "jaw": "U",
    "produceType": "1",
    "markPosition": null,
    "trimmingLine": null,
    "schemeId": "DC01000817758X02",
    "trimmingPathLine": null,
    "isLaserMarkSuccess": null,
    "status": null
}
]
    res.send(a)

})

router.get('/identity/users',(req,res) => {
    const data = {
           "data":[
              {
                 "id":"anotherUser",
                 "firstName":"Tijs-Barrez",
                 "lastName":"",
                 "url":"http://localhost:8182/identity/users/anotherUser",
                 "email":"no-reply@alfresco.org"
              },
              {
                 "id":"kermit",
                 "firstName":"Kermit",
                 "lastName":null,
                 "url":"http://localhost:8182/identity/users/kermit",
                 "email":null
              },
              {
                 "id":"testuser",
                 "firstName":"McDonald",
                 "lastName":null,
                 "url":"http://localhost:8182/identity/users/testuser",
                 "email":"no-reply@activiti.org"
             },
              {
                 "id":"testuser",
                 "firstName":"McDonald",
                 "lastName":null,
                 "url":"http://localhost:8182/identity/users/testuser",
                 "email":"no-reply@activiti.org"
             },
              {
                 "id":"testuser",
                 "firstName":"McDonald",
                 "lastName":null,
                 "url":"http://localhost:8182/identity/users/testuser",
                 "email":"no-reply@activiti.org"
             },
              {
                 "id":"testuser",
                 "firstName":"McDonald",
                 "lastName":null,
                 "url":"http://localhost:8182/identity/users/testuser",
                 "email":"no-reply@activiti.org"
             },
              {
                 "id":"teasdtuser",
                 "firstName":"McDonald",
                 "lastName":null,
                 "url":"http://localhost:8182/identity/users/testuser",
                 "email":"no-reply@activiti.org"
             },
              {
                 "id":"tesadader",
                 "firstName":"McDonald",
                 "lastName":"",
                 "url":"http://localhost:8182/identity/users/testuser",
                 "email":"no-reply@activiti.org"
             },
              {
                 "id":"tasdqsadvr",
                 "firstName":"时红梅",
                 "lastName":"",
                 "url":"http://localhost:8182/identity/users/testuser",
                 "email":"no-reply@activiti.org"
             },
           ],
           "total":0,
           "start":0,
           "sort":"id",
           "order":"asc",
           "size":10
        }
    res.send(data)
})

router.all('/sse', function (req, res) {
    console.log('fooing the secret section ...');
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
    });
    const sendData = () => {
        const msg = '123'
        const data = JSON.stringify(msg)
        return data
    }
    setInterval(function(){
        console.log('writing');
        res.write("data: " + sendData() + '\n\n');
    }, 5000);
});

// router.get('/cdsStorageSvc/localFileList',(request,response) => {
//     const data = [
//         {
//             "name":"file1.txt"
//         },{
//             "name":"file2.txt"
//         },{
//             "name":"file" + Math.random() + ".txt"
//         },{
//             "name":"file" + Math.random() + ".txt"
//         },{
//             "name":"file5.txt"
//         },{
//             "name":"file" + Math.random() + ".txt"
//         },
//     ]
//     const d = JSON.stringify(data)
//     response.send(d)
// })

router.get('/user/loginUser',(request,response) => {
    const data = {"userId":"shihm","userName":"时红梅","roles":["模型处理主管","管理员"],"groups":[]}
    const d = JSON.stringify(data)
    response.send(d)
    // let res = response.status(400)
    // res.send('')
})

// router.get('/cdsStorageSvc/rootPath',cors(corsOptions),(request,response,next) => {
//     const data = {
//         "rootPath": "Stringget",
//         "downloadWay": "Stringget",
//         "stlRootPath": "D:\\STL"
//     }
//     const d = JSON.stringify(data)
//     response.send(d)
// })

// router.post('/cdsStorageSvc/rootPath',cors(corsOptions),(request,response,next) => {
//     console.log('request')
//     response.send({})
// })

// router.options('/crm/stl/:id',cors(corsOptions),(request,response,next) => {
//     console.log('options')
//     if ( request.method === 'OPTIONS') {
//         response.sendStatus(200)
//     }else {
//
//     }
// })
//     ,cors(corsOptions)
// app.put('/crm/stl/:id',(request,response,next) => {
//     console.log('request')
//     response.sendStatus('ok')
// })

// , cors(corsOptions)
// router.get('/crm/stl/:id',(request,response) => {
//     console.log('crm data')
//     const data = {
//         "patientName": "0616双模补交",
//         "caseId": "C01000627645",
//         "jaw": "L",
//         "phaseName": "新病例阶段"
//     }
//     const d = JSON.stringify(data)
//     response.send(d)
// })

router.put('/tasks/:id',(req,res) => {
    res.status(404)
    res.send('bad')
    // setTimeout(function() {
    //     res.send('ok')
    // }, 5000)

})
router.post('/taskPlan',(req,res) => {
    var a = {"hasFollow":false,"executionPlan":[{"inputParameters":[{"value":"82944","key":"refTaskId"},{"value":"C01000820820","key":"caseId"},{"value":"p13341511515210","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000820820X01","key":"scheme"},{"value":"[{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-L_1\",\"step\":1,\"jaw\":\"L\",\"produceType\":\"2\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":5,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-U_1\",\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-L_1\",\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-U_1\",\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-L_1\",\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-U_1\",\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-L_1\",\"step\":12,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-U_1\",\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-L_1\",\"step\":13,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-U_1\",\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-L_1\",\"step\":14,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-U_1\",\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-L_1\",\"step\":15,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-U_1\",\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-L_1\",\"step\":16,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-U_1\",\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-L_1\",\"step\":17,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-U_1\",\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-L_1\",\"step\":18,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-U_1\",\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-L_1\",\"step\":19,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-U_1\",\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-2-U_1\",\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-L_1\",\"step\":20,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-U_1\",\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-3-U_1\",\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-4-U_1\",\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-5-U_1\",\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-6-U_1\",\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-7-U_1\",\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-8-U_1\",\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-9-U_1\",\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null}]","key":"designModel"},{"value":"M20171124000027-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"cds://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/0a9d824b-6e3f-46c6-b817-2fffceb1c003/download","key":"src"},{"value":"cds-local://{root}/C01000820820/新病例阶段/3D设计/DC01000820820X01/a.ods","key":"dst"}],"taskPlanName":"下载：设计","service":"fileService","method":"copy"},{"inputParameters":[{"value":"82944","key":"refTaskId"},{"value":"C01000820820","key":"caseId"},{"value":"p13341511515210","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000820820X01","key":"scheme"},{"value":"[{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-L_1\",\"step\":1,\"jaw\":\"L\",\"produceType\":\"2\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":5,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-U_1\",\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-L_1\",\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-U_1\",\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-L_1\",\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-U_1\",\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-L_1\",\"step\":12,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-U_1\",\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-L_1\",\"step\":13,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-U_1\",\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-L_1\",\"step\":14,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-U_1\",\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-L_1\",\"step\":15,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-U_1\",\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-L_1\",\"step\":16,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-U_1\",\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-L_1\",\"step\":17,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-U_1\",\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-L_1\",\"step\":18,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-U_1\",\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-L_1\",\"step\":19,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-U_1\",\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-2-U_1\",\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-L_1\",\"step\":20,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-U_1\",\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-3-U_1\",\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-4-U_1\",\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-5-U_1\",\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-6-U_1\",\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-7-U_1\",\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-8-U_1\",\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-9-U_1\",\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null}]","key":"designModel"},{"value":"M20171124000027-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"cds://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/22e050c1-f56d-43c1-9b7a-2a9799a0d15b/download","key":"src"},{"value":"cds-local://{root}/C01000820820/新病例阶段/3D设计/DC01000820820X01/1.ddm","key":"dst"}],"taskPlanName":"下载：DDM","service":"fileService","method":"copy"},{"inputParameters":[{"value":"82944","key":"refTaskId"},{"value":"C01000820820","key":"caseId"},{"value":"p13341511515210","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000820820X01","key":"scheme"},{"value":"[{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-L_1\",\"step\":1,\"jaw\":\"L\",\"produceType\":\"2\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":5,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-U_1\",\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-L_1\",\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-U_1\",\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-L_1\",\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-U_1\",\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-L_1\",\"step\":12,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-U_1\",\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-L_1\",\"step\":13,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-U_1\",\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-L_1\",\"step\":14,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-U_1\",\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-L_1\",\"step\":15,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-U_1\",\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-L_1\",\"step\":16,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-U_1\",\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-L_1\",\"step\":17,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-U_1\",\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-L_1\",\"step\":18,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-U_1\",\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-L_1\",\"step\":19,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-U_1\",\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-2-U_1\",\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-L_1\",\"step\":20,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-U_1\",\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-3-U_1\",\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-4-U_1\",\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-5-U_1\",\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-6-U_1\",\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-7-U_1\",\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-8-U_1\",\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-9-U_1\",\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null}]","key":"designModel"},{"value":"M20171124000027-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"{root}\\C01000820820\\新病例阶段\\3D设计\\DC01000820820X01","key":"dir"}],"taskPlanName":"打开方案文件夹","service":"applicationService","method":"explorer"},{"inputParameters":[{"value":"82944","key":"refTaskId"},{"value":"C01000820820","key":"caseId"},{"value":"p13341511515210","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000820820X01","key":"scheme"},{"value":"[{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-L_1\",\"step\":1,\"jaw\":\"L\",\"produceType\":\"2\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":5,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-1-U_1\",\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-L_1\",\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-10-U_1\",\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-L_1\",\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-11-U_1\",\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-L_1\",\"step\":12,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-12-U_1\",\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-L_1\",\"step\":13,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-13-U_1\",\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-L_1\",\"step\":14,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-14-U_1\",\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-L_1\",\"step\":15,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-15-U_1\",\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-L_1\",\"step\":16,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-16-U_1\",\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-L_1\",\"step\":17,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-17-U_1\",\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-L_1\",\"step\":18,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-18-U_1\",\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-L_1\",\"step\":19,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-19-U_1\",\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-2-U_1\",\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-L_1\",\"step\":20,\"jaw\":\"L\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-20-U_1\",\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-3-U_1\",\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-4-U_1\",\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-5-U_1\",\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-6-U_1\",\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-7-U_1\",\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-8-U_1\",\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null},{\"caseId\":\"C01000820820\",\"designModelId\":\"C01000820820-DC01000820820X01-9-U_1\",\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isLaserMarkSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000820820X01\",\"trimmingPathLine\":null,\"status\":null}]","key":"designModel"},{"value":"M20171124000027-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"{\"taskInfo\":{\"creationTime\":\"Mon Nov 27 15:49:10 CST 2017\",\"input\":\"{root}\\\\C01000820820\\\\新病例阶段\\\\3D设计\\\\DC01000820820X01\\\\a.ods\",\"outputDir\":\"{root}\\\\C01000820820\\\\新病例阶段\\\\3D设计\\\\DC01000820820X01\",\"parameters\":[{\"hollow\":[{\"beginStep\":\"1\",\"endStep\":\"1\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"1\",\"endStep\":\"1\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"10\",\"endStep\":\"10\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"10\",\"endStep\":\"10\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"11\",\"endStep\":\"11\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"11\",\"endStep\":\"11\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"12\",\"endStep\":\"12\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"12\",\"endStep\":\"12\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"13\",\"endStep\":\"13\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"13\",\"endStep\":\"13\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"14\",\"endStep\":\"14\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"14\",\"endStep\":\"14\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"15\",\"endStep\":\"15\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"15\",\"endStep\":\"15\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"16\",\"endStep\":\"16\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"16\",\"endStep\":\"16\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"17\",\"endStep\":\"17\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"17\",\"endStep\":\"17\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"18\",\"endStep\":\"18\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"18\",\"endStep\":\"18\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"19\",\"endStep\":\"19\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"19\",\"endStep\":\"19\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"2\",\"endStep\":\"2\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"20\",\"endStep\":\"20\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"20\",\"endStep\":\"20\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"3\",\"endStep\":\"3\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"4\",\"endStep\":\"4\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"5\",\"endStep\":\"5\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"6\",\"endStep\":\"6\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"7\",\"endStep\":\"7\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"8\",\"endStep\":\"8\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"9\",\"endStep\":\"9\",\"jaw\":\"U\",\"type\":\"1\"}]}],\"taskId\":\"M20171124000027-1\",\"taskName\":[\"VF\",\"Cuttingline\",\"Hollow\"]}}","key":"content"}],"taskPlanName":"打开Atreat","service":"applicationService","method":"launch"}]}
    // var data = JSON.stringify(a)
    var r = res.status(200)
    r.send(a)
})
router.post('/userTask/taskPlan',(req,res) => {
    const data =  {"executionPlan":[{"inputParameters":[{"value":"52517","key":"refTaskId"},{"value":"C01000815598","key":"caseId"},{"value":"测试流程11","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000815598X02","key":"scheme"},{"value":"[{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":6,\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-12-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-13-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-14-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-15-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-16-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-17-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-18-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-19-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-20-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-21-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":21,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null}]","key":"designModel"},{"value":"M20170905000001-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"cds://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","key":"src"},{"value":"cds-local://{root}/C01000815598/新病例阶段/3D设计/DC01000815598X02/测试流程11_2017-09-05_C01000815598_1-2.ods","key":"dst"}],"taskPlanName":"下载：设计","service":"fileService","method":"copy"},{"inputParameters":[{"value":"52517","key":"refTaskId"},{"value":"C01000815598","key":"caseId"},{"value":"测试流程11","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000815598X02","key":"scheme"},{"value":"[{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":6,\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-12-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-13-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-14-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-15-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-16-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-17-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-18-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-19-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-20-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-21-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":21,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null}]","key":"designModel"},{"value":"M20170905000001-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"cds://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","key":"src"},{"value":"cds-local://{root}/C01000815598/新病例阶段/3D设计/DC01000815598X02/161751-160532.ddm","key":"dst"}],"taskPlanName":"下载：DDM","service":"fileService","method":"copy"},{"inputParameters":[{"value":"52517","key":"refTaskId"},{"value":"C01000815598","key":"caseId"},{"value":"测试流程11","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000815598X02","key":"scheme"},{"value":"[{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":6,\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-12-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-13-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-14-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-15-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-16-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-17-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-18-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-19-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-20-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-21-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":21,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null}]","key":"designModel"},{"value":"M20170905000001-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"{root}\\C01000815598\\新病例阶段\\3D设计\\DC01000815598X02","key":"dir"}],"taskPlanName":"打开方案文件夹","service":"applicationService","method":"explorer"},{"inputParameters":[{"value":"52517","key":"refTaskId"},{"value":"C01000815598","key":"caseId"},{"value":"测试流程11","key":"patientName"},{"value":"新病例阶段","key":"phaseName"},{"value":"shihm","key":"userCode"},{"value":"DC01000815598X02","key":"scheme"},{"value":"[{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-1-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":1,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-10-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":10,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":6,\"step\":11,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-11-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":11,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-12-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":12,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-13-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":13,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-14-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":14,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-15-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":15,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-16-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":16,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-17-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":17,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-18-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":18,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-19-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":19,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-2-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":2,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-20-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":20,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-21-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":21,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-3-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":3,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-4-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":4,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-5-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":5,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-6-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":6,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-7-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":7,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-8-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":8,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-L_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"L\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null},{\"caseId\":\"C01000815598\",\"designModelId\":\"C01000815598-DC01000815598X02-9-U_1\",\"stl\":null,\"isPositiveModelSuccess\":null,\"isCuttingProfileSuccess\":null,\"modelMaxIndex\":1,\"step\":9,\"jaw\":\"U\",\"produceType\":\"1\",\"markPosition\":null,\"trimmingLine\":null,\"schemeId\":\"DC01000815598X02\",\"trimmingPathLine\":null,\"isLaserMarkSuccess\":null,\"status\":null}]","key":"designModel"},{"value":"M20170905000001-1","key":"modelProcessId"},{"value":"5003","key":"taskTypeCode"},{"value":"模型处理","key":"taskName"},{"value":"{\"taskInfo\":{\"creationTime\":\"Mon Nov 20 09:48:02 CST 2017\",\"input\":\"{root}\\\\C01000815598\\\\新病例阶段\\\\3D设计\\\\DC01000815598X02\\\\测试流程11_2017-09-05_C01000815598_1-2.ods\",\"outputDir\":\"{root}\\\\C01000815598\\\\新病例阶段\\\\3D设计\\\\DC01000815598X02\",\"parameters\":[{\"hollow\":[{\"beginStep\":\"1\",\"endStep\":\"1\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"1\",\"endStep\":\"1\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"10\",\"endStep\":\"10\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"10\",\"endStep\":\"10\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"11\",\"endStep\":\"11\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"11\",\"endStep\":\"11\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"12\",\"endStep\":\"12\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"13\",\"endStep\":\"13\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"14\",\"endStep\":\"14\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"15\",\"endStep\":\"15\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"16\",\"endStep\":\"16\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"17\",\"endStep\":\"17\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"18\",\"endStep\":\"18\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"19\",\"endStep\":\"19\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"2\",\"endStep\":\"2\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"2\",\"endStep\":\"2\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"20\",\"endStep\":\"20\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"21\",\"endStep\":\"21\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"3\",\"endStep\":\"3\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"3\",\"endStep\":\"3\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"4\",\"endStep\":\"4\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"4\",\"endStep\":\"4\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"5\",\"endStep\":\"5\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"5\",\"endStep\":\"5\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"6\",\"endStep\":\"6\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"6\",\"endStep\":\"6\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"7\",\"endStep\":\"7\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"7\",\"endStep\":\"7\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"8\",\"endStep\":\"8\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"8\",\"endStep\":\"8\",\"jaw\":\"U\",\"type\":\"1\"},{\"beginStep\":\"9\",\"endStep\":\"9\",\"jaw\":\"L\",\"type\":\"1\"},{\"beginStep\":\"9\",\"endStep\":\"9\",\"jaw\":\"U\",\"type\":\"1\"}]}],\"taskId\":\"M20170905000001-1\",\"taskName\":[\"VF\",\"Cuttingline\",\"Hollow\"]}}","key":"content"}],"taskPlanName":"打开Atreat","service":"applicationService","method":"launch"}],"hasFollow":false}
    setTimeout(function() {
        res.send(data)

    },5000)
})

router.get('/cdsStorageSvc/modelProcessingLocalFileList',(req,res) => {
    var d = {
  "address": "string",
  "appliance": "string",
  "area": "string",
  "attach_cnt": 0,
  "case_id": "string",
  "city": "string",
  "client_lvl": "string",
  "cm_no": "string",
  "contact": "string",
  "correct_cnt": 0,
  "create_date": 0,
  "ddm_addr": "string",
  "dest_code": "string",
  "doctor_name": "string",
  "expire_date": "string",
  "express_id": "string",
  "express_type": "string",
  "hospital_name": "string",
  "instruction_addr": "string",
  "is_double": "string",
  "is_double_label": "string",
  "is_expedited": "string",
  "is_expedited_label": "string",
  "is_follow": "string",
  "is_follow_label": "string",
  "keep_cnt": 0,
  "lower_attach_cnt": 0,
  "lower_bcq_label": "string",
  "lower_jaw_label": "string",
  "model_cnt": 0,
  "model_type": "string",
  "model_type_label": "string",
  "ods_addr": "string",
  "origin_code": "string",
  "patient_name": "string",
  "phase_name": "string",
  "postalcode": "string",
  "print_label_state": "string",
  "print_label_state_label": "string",
  "produce_id": "string",
  "produce_reason": "string",
  "produce_reason_label": "string",
  "produce_remark": "string",
  "produce_requirement": "string",
  "produce_state": "string",
  "produce_state_label": "string",
  "next_produce_state": "string",
  "province": "string",
  "real_addr": "string",
  "real_date": "string",
  "remark": "string",
  "scheme": "string",
  "state": "string",
  "state_label": "string",
  "telephone": "string",
  "upper_bcq_label": "string",
  "upper_jaw_label": "string",
  "upper_light_cure_cnt": 0,
  "lower_light_cure_cnt": 0,
  "order_item": [
    {
      "produce_item_Id": "string",
      "produce_Id": "string",
      "produce_Type": "string",
      "products": "string",
      "model_type": "string",
      "thickness": "string",
      "is_stage_retainer": "string",
      "product_type": "string",
      "cnt": 0,
      "upper_Jaw_Step_Begin": 0,
      "upper_Jaw_Step_End": 0,
      "upper_times": 0,
      "lower_Jaw_Step_Begin": 0,
      "lower_Jaw_Step_End": 0,
      "lower_times": 0
    }
  ]
}
    res.send(d)
})
router.get('/orders/:id',(req,res) => {
    // res.status(500)
    const d = {"remark":null,"order_item":[{"produce_id":"M20171124000027","upper_times":"1","upper_jaw_step_begin":"1","upper_jaw_step_end":"20","lower_times":"1","lower_jaw_step_begin":"10","lower_jaw_step_end":"20","produce_type":"1","thickness":"0.76","product_type":"EABⅡ","model_type_label":"","model_type":"03","products":"普通矫治器","cnt":"31","produce_item_Id":"M20171124000027-1","is_stage_retainer":"0","produce_type_label":null,"upperJawStr":"1-20","lowerJawStr":"10-20","batch_num":null},{"produce_id":"M20171124000027","upper_times":"0","upper_jaw_step_begin":"0","upper_jaw_step_end":"0","lower_times":"5","lower_jaw_step_begin":"1","lower_jaw_step_end":"1","produce_type":"2","thickness":"0.76","product_type":"EABⅡ","model_type_label":"","model_type":"03","products":"步差保持器","cnt":"5","produce_item_Id":"M20171124000027-2","is_stage_retainer":"1","produce_type_label":null,"upperJawStr":"/","lowerJawStr":"1*5","batch_num":null}],"produce_id":"M20171124000027","expire_date":"2017-12-01","patient_name":"p13341511515210","create_date":1511515483000,"is_expedited":"0","produce_requirement":"","produce_remark":"","case_id":"C01000820820","is_double":"0","doctor_name":"test0001","hospital_name":"上海同济大学口腔医院","lower_light_cure_cnt":0,"next_produce_state":null,"produce_state":null,"print_label_state":null,"province":null,"city":null,"area":null,"postalcode":null,"contact":null,"express_type":null,"express_id":null,"real_addr":null,"real_date":null,"client_lvl":null,"origin_code":null,"dest_code":null,"cm_no":null,"upper_jaw_label":null,"lower_jaw_label":null,"upper_bcq_label":null,"lower_bcq_label":null,"serialversionuid":-3710575970195893660,"print_label_state_label":null,"produce_state_label":null,"state_label":null,"is_expedited_label":null,"is_follow_label":null,"produce_reason_label":null,"model_type_label":null,"is_double_label":null,"upper_light_cure_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","is_follow":"1","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/0a9d824b-6e3f-46c6-b817-2fffceb1c003/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/22e050c1-f56d-43c1-9b7a-2a9799a0d15b/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/282e6a3b-3567-430e-a4c0-3efe6d50d5b8/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":31,"keep_cnt":5,"telephone":null,"address":null,"state":"01","scheme":"DC01000820820X01"}
    // var data = JSON.stringify(d)
    res.send(d)
})

router.get('/taskList',(req,res) => {
    var data = {"sort":"dueDate","data":[{"url":"http://192.168.37.126:8109/activiti-rest/service/runtime/tasks/65026","variables":[],"remark":"","caseId":"C01000606071","produceId":"M20160601000201","processInstanceId":"65020","taskBusiKeyInfo":"M20160601000201-1","processInstanceUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/process-instances/65020","upperStep":null,"lowerStep":null,"createTime":"2017-11-24T09:11:00.559+08:00","createDate":"2016-06-01","parentTaskId":null,"taskBusiRemark":null,"executionId":"65020","executionUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/executions/65020","formKey":null,"parentTaskUrl":null,"processDefinitionId":"ModelProcess:1:60004","processDefinitionUrl":"http://192.168.37.126:8109/activiti-rest/service/repository/process-definitions/ModelProcess:1:60004","assignee":"shihm","delegationState":null,"dueDate":"2016-06-07T00:00:00.000+08:00","taskDefinitionKey":"ModelProcessing","tenantId":"","patientName":"包银燕","isExpedited":"0","productBatchNo":"16060100606071","expireDate":"2016-06-07","processingRequirements":"重压下颌5-7步矫治器,寄回","category":null,"owner":null,"description":null,"suspended":false,"name":"模型处理","id":"65026","priority":50},{"url":"http://192.168.37.126:8109/activiti-rest/service/runtime/tasks/65017","variables":[],"remark":"","caseId":"C01000341234","produceId":"M20160601000178","processInstanceId":"65011","taskBusiKeyInfo":"M20160601000178-1","processInstanceUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/process-instances/65011","upperStep":null,"lowerStep":null,"createTime":"2017-11-24T09:11:00.096+08:00","createDate":"2016-06-01","parentTaskId":null,"taskBusiRemark":null,"executionId":"65011","executionUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/executions/65011","formKey":null,"parentTaskUrl":null,"processDefinitionId":"ModelProcess:1:60004","processDefinitionUrl":"http://192.168.37.126:8109/activiti-rest/service/repository/process-definitions/ModelProcess:1:60004","assignee":"shihm","delegationState":null,"dueDate":"2016-06-08T00:00:00.000+08:00","taskDefinitionKey":"ModelProcessing","tenantId":"","patientName":"李慧喜","isExpedited":"0","productBatchNo":"16060100341234","expireDate":"2016-06-08","processingRequirements":"","category":null,"owner":null,"description":null,"suspended":false,"name":"模型处理","id":"65017","priority":50},{"url":"http://192.168.37.126:8109/activiti-rest/service/runtime/tasks/62507","variables":[],"remark":"","caseId":"C01000701536","produceId":"M20160601000184","processInstanceId":"62501","taskBusiKeyInfo":"M20160601000184-1","processInstanceUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/process-instances/62501","upperStep":null,"lowerStep":null,"createTime":"2017-11-23T15:34:00.465+08:00","createDate":"2016-06-01","parentTaskId":null,"taskBusiRemark":null,"executionId":"62501","executionUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/executions/62501","formKey":null,"parentTaskUrl":null,"processDefinitionId":"ModelProcess:1:60004","processDefinitionUrl":"http://192.168.37.126:8109/activiti-rest/service/repository/process-definitions/ModelProcess:1:60004","assignee":"shihm","delegationState":null,"dueDate":"2016-06-08T00:00:00.000+08:00","taskDefinitionKey":"ModelProcessing","tenantId":"","patientName":"江普林","isExpedited":"0","productBatchNo":"16060100701536","expireDate":"2016-06-08","processingRequirements":"","category":null,"owner":null,"description":null,"suspended":false,"name":"模型处理","id":"62507","priority":50},{"url":"http://192.168.37.126:8109/activiti-rest/service/runtime/tasks/62516","variables":[],"remark":"","caseId":"C01000693255","produceId":"M20160602000098","processInstanceId":"62510","taskBusiKeyInfo":"M20160602000098-1","processInstanceUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/process-instances/62510","upperStep":null,"lowerStep":null,"createTime":"2017-11-23T15:34:00.913+08:00","createDate":"2016-06-02","parentTaskId":null,"taskBusiRemark":null,"executionId":"62510","executionUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/executions/62510","formKey":null,"parentTaskUrl":null,"processDefinitionId":"ModelProcess:1:60004","processDefinitionUrl":"http://192.168.37.126:8109/activiti-rest/service/repository/process-definitions/ModelProcess:1:60004","assignee":"shihm","delegationState":null,"dueDate":"2016-06-12T00:00:00.000+08:00","taskDefinitionKey":"ModelProcessing","tenantId":"","patientName":"余丽娟","isExpedited":"0","productBatchNo":"16060200693255","expireDate":"2016-06-12","processingRequirements":"上下颌第17-42步指示附件；下颌第25-30步片段弓附件，快速通道","category":null,"owner":null,"description":null,"suspended":false,"name":"模型处理","id":"62516","priority":50},{"url":"http://192.168.37.126:8109/activiti-rest/service/runtime/tasks/82916","variables":[],"remark":"777\n444\n","caseId":"C01000820099","produceId":"M20171109000002","processInstanceId":"82910","taskBusiKeyInfo":"M20171109000002-2","processInstanceUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/process-instances/82910","upperStep":null,"lowerStep":null,"createTime":"2017-11-24T17:39:02.890+08:00","createDate":"2017-11-09","parentTaskId":null,"taskBusiRemark":null,"executionId":"82910","executionUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/executions/82910","formKey":null,"parentTaskUrl":null,"processDefinitionId":"ModelProcess:1:60004","processDefinitionUrl":"http://192.168.37.126:8109/activiti-rest/service/repository/process-definitions/ModelProcess:1:60004","assignee":"shihm","delegationState":null,"dueDate":"2017-11-16T00:00:00.000+08:00","taskDefinitionKey":"ModelProcessing","tenantId":"","patientName":"测试上传02","isExpedited":"0","productBatchNo":"17110900820099","expireDate":"2017-11-16","processingRequirements":"","category":null,"owner":null,"description":null,"suspended":false,"name":"模型处理","id":"82916","priority":50},{"url":"http://192.168.37.126:8109/activiti-rest/service/runtime/tasks/82925","variables":[],"remark":"777\n444\n","caseId":"C01000820460","produceId":"M20171124000011","processInstanceId":"82919","taskBusiKeyInfo":"M20171124000011-1","processInstanceUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/process-instances/82919","upperStep":null,"lowerStep":null,"createTime":"2017-11-24T17:41:00.950+08:00","createDate":"2017-11-24","parentTaskId":null,"taskBusiRemark":null,"executionId":"82919","executionUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/executions/82919","formKey":null,"parentTaskUrl":null,"processDefinitionId":"ModelProcess:1:60004","processDefinitionUrl":"http://192.168.37.126:8109/activiti-rest/service/repository/process-definitions/ModelProcess:1:60004","assignee":"shihm","delegationState":null,"dueDate":"2017-12-01T00:00:00.000+08:00","taskDefinitionKey":"ModelProcessing","tenantId":"","patientName":"测试CDS 05","isExpedited":"0","productBatchNo":"17112400820460","expireDate":"2017-12-01","processingRequirements":"","category":null,"owner":null,"description":null,"suspended":false,"name":"模型处理","id":"82925","priority":50},{"url":"http://192.168.37.126:8109/activiti-rest/service/runtime/tasks/82944","variables":[],"remark":"","caseId":"C01000820820","produceId":"M20171124000027","processInstanceId":"82938","taskBusiKeyInfo":"M20171124000027-1","processInstanceUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/process-instances/82938","upperStep":null,"lowerStep":null,"createTime":"2017-11-24T17:43:00.123+08:00","createDate":"2017-11-24","parentTaskId":null,"taskBusiRemark":null,"executionId":"82938","executionUrl":"http://192.168.37.126:8109/activiti-rest/service/runtime/executions/82938","formKey":null,"parentTaskUrl":null,"processDefinitionId":"ModelProcess:1:60004","processDefinitionUrl":"http://192.168.37.126:8109/activiti-rest/service/repository/process-definitions/ModelProcess:1:60004","assignee":"shihm","delegationState":null,"dueDate":"2017-12-01T00:00:00.000+08:00","taskDefinitionKey":"ModelProcessing","tenantId":"","patientName":"p13341511515210","isExpedited":"0","productBatchNo":"17112400820820","expireDate":"2017-12-01","processingRequirements":"","category":null,"owner":null,"description":null,"suspended":false,"name":"模型处理","id":"82944","priority":50}],"total":475,"start":30,"order":"asc","size":30}

    // var data = JSON.stringify(d)
    // var data = {
    //      "start":0,"size":0,"total":0
    // }
    res.send(data)
})


module.exports = router
